import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nordic",
    modes: ["light"],
    variations: [],
    fonts: ["deadhead-script", "gentium-book-basic", "norwester"],
    fontFiles: [
      {
        family: "Avenir LT Std",
        style: "normal",
        weight: "600",
        file: "avenir-lt-std.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Avenir LT Std",
        style: "normal",
        weight: "400",
        file: "avenir-lt-std-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Deadhead Rough",
        style: "normal",
        weight: "400",
        file: "deadhead-rough.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Gentium Book Basic",
        style: "normal",
        weight: "normal",
        file: "gentium-book-basic.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Gentium Book Basic",
        style: "italic",
        weight: "normal",
        file: "gentium-book-basic-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Gentium Book Basic",
        style: "normal",
        weight: "bold",
        file: "gentium-book-basic-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Gentium Book Basic",
        style: "italic",
        weight: "bold",
        file: "gentium-book-basic-3.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Norwester",
        style: "normal",
        weight: "100 900",
        file: "norwester.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "natowb-nordic",
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent-color: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --accent-h: 210;
  --accent-l: 63%;
  --accent-s: 34%;
  --background-modifier-border: var(--color-base-30, #E5E9F0);
  --background-modifier-border-focus: var(--color-base-40, #D8DEE9);
  --background-modifier-border-hover: var(--color-base-35, #D8DEE9);
  --background-modifier-error: var(--color-red, #bf616a);
  --background-modifier-error-hover: var(--color-red, #bf616a);
  --background-modifier-error-rgb: var(--color-red-rgb, 191, 97, 106);
  --background-modifier-form-field: var(--color-base-00, white);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, white);
  --background-modifier-success: var(--color-green, #a3be8c);
  --background-modifier-success-rgb: var(--color-green-rgb, 163, 190, 140);
  --background-primary: var(--color-base-00, white);
  --background-primary-alt: var(--color-base-10, #ECEFF4);
  --background-secondary: var(--color-base-20, #ECEFF4);
  --background-secondary-alt: var(--color-base-05, white);
  --bases-cards-background: var(--background-primary, white);
  --bases-cards-cover-background: var(--background-primary-alt, #ECEFF4);
  --bases-embed-border-color: var(--background-modifier-border, #E5E9F0);
  --bases-group-heading-property-color: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --bases-table-border-color: var(--table-border-color, rgba(0, 0, 0, 0.5));
  --bases-table-cell-background-active: var(--background-primary, white);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #ECEFF4);
  --bases-table-cell-background-selected: var(--table-selection, hsla(210, 34%, 63%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #ECEFF4);
  --bases-table-header-background: var(--background-primary, white);
  --bases-table-header-color: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --bases-table-row-background-hover: var(--table-row-background-hover, rgba(255, 255, 255, 0.1));
  --bases-table-summary-background: var(--background-primary, white);
  --blockquote-border-color: var(--interactive-accent, hsl(209, 34.34%, 67.725%));
  --bodyFont: var(--font-text-theme, 'Avenir');
  --callout-bug: var(--color-red-rgb, 191, 97, 106);
  --callout-default: var(--color-blue-rgb, 97, 153, 191);
  --callout-error: var(--color-red-rgb, 191, 97, 106);
  --callout-example: var(--color-purple-rgb, 149, 142, 180);
  --callout-fail: var(--color-red-rgb, 191, 97, 106);
  --callout-important: var(--color-cyan-rgb, 97, 177, 191);
  --callout-info: var(--color-blue-rgb, 97, 153, 191);
  --callout-question: var(--color-orange-rgb, 208, 135, 112);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--color-green-rgb, 163, 190, 140);
  --callout-summary: var(--color-cyan-rgb, 97, 177, 191);
  --callout-tip: var(--color-cyan-rgb, 97, 177, 191);
  --callout-todo: var(--color-blue-rgb, 97, 153, 191);
  --callout-warning: var(--color-orange-rgb, 208, 135, 112);
  --canvas-background: var(--background-primary, white);
  --canvas-card-label-color: var(--text-faint, #4C566A);
  --canvas-color-1: var(--color-red-rgb, 191, 97, 106);
  --canvas-color-2: var(--color-orange-rgb, 208, 135, 112);
  --canvas-color-3: var(--color-yellow-rgb, 235, 203, 139);
  --canvas-color-4: var(--color-green-rgb, 163, 190, 140);
  --canvas-color-5: var(--color-cyan-rgb, 97, 177, 191);
  --canvas-color-6: var(--color-purple-rgb, 149, 142, 180);
  --canvas-dot-pattern: var(--color-base-30, #E5E9F0);
  --caret-color: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --checkbox-border-color: var(--text-faint, #4C566A);
  --checkbox-border-color-hover: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --checkbox-color: var(--interactive-accent, hsl(209, 34.34%, 67.725%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(207, 34.68%, 72.45%));
  --checkbox-marker-color: var(--background-primary, white);
  --checklist-done-color: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --code-background: var(--background-primary-alt, #ECEFF4);
  --code-border-color: var(--background-modifier-border, #E5E9F0);
  --code-comment: var(--text-faint, #4C566A);
  --code-function: var(--color-yellow, #ebcb8b);
  --code-important: var(--color-orange, #d08770);
  --code-keyword: var(--color-pink, #b48ead);
  --code-normal: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --code-operator: var(--color-red, #bf616a);
  --code-property: var(--color-cyan, #61b1bf);
  --code-punctuation: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --code-string: var(--color-green, #a3be8c);
  --code-tag: var(--color-red, #bf616a);
  --code-value: var(--color-purple, #958eb4);
  --collapse-icon-color: var(--text-faint, #4C566A);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(210, 34%, 63%));
  --color-base-00: var(--nord-color-base-00, white);
  --color-base-05: var(--nord-color-base-05, white);
  --color-base-10: var(--nord-color-base-10, #ECEFF4);
  --color-base-100: var(--nord-color-base-100, #2E3440);
  --color-base-20: var(--nord-color-base-20, #ECEFF4);
  --color-base-25: var(--nord-color-base-25, #E5E9F0);
  --color-base-30: var(--nord-color-base-30, #E5E9F0);
  --color-base-35: var(--nord-color-base-35, #D8DEE9);
  --color-base-40: var(--nord-color-base-40, #D8DEE9);
  --color-base-50: var(--nord-color-base-50, #4C566A);
  --color-base-60: var(--nord-color-base-60, #434C5E);
  --color-base-70: var(--nord-color-base-70, #3B4252);
  --color-blue: #6199bf;
  --color-blue-rgb: 97, 153, 191;
  --color-cyan: #61b1bf;
  --color-cyan-rgb: 97, 177, 191;
  --color-green: #a3be8c;
  --color-green-rgb: 163, 190, 140;
  --color-orange: #d08770;
  --color-orange-rgb: 208, 135, 112;
  --color-pink: #b48ead;
  --color-pink-rgb: 180, 142, 173;
  --color-purple: #958eb4;
  --color-purple-rgb: 149, 142, 180;
  --color-red: #bf616a;
  --color-red-rgb: 191, 97, 106;
  --color-yellow: #ebcb8b;
  --color-yellow-rgb: 235, 203, 139;
  --dark: var(--text-normal, color-mix(in srgb, var(--accent-color), #000 45%));
  --dark0: #2e3440;
  --dark0-raw: 46, 52, 64;
  --dark1: #3b4252;
  --dark1-raw: 59, 66, 82;
  --dark2: #434c5e;
  --dark2-raw: 67, 76, 94;
  --dark3: #4c566a;
  --dark3-raw: 76, 86, 106;
  --darkgray: var(--text-normal, color-mix(in srgb, var(--accent-color), #000 45%));
  --divider-color: var(--background-modifier-border, #E5E9F0);
  --divider-color-hover: var(--interactive-accent, hsl(209, 34.34%, 67.725%));
  --dropdown-background: var(--interactive-normal, white);
  --dropdown-background-hover: var(--interactive-hover, #ECEFF4);
  --file-header-background: var(--background-primary, white);
  --file-header-background-focused: var(--background-primary, white);
  --flair-background: var(--interactive-normal, white);
  --flair-color: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --font-mermaid: var(--font-text, Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-text-theme: 'Avenir';
  --footnote-divider-color: var(--metadata-divider-color, #E5E9F0);
  --footnote-id-color: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --footnote-id-color-no-occurrences: var(--text-faint, #4C566A);
  --frost0: #8fbcbb;
  --frost0-raw: 143, 188, 187;
  --frost1: #88c0d0;
  --frost1-raw: 136, 192, 208;
  --frost2: #81a1c1;
  --frost2-raw: 129, 161, 193;
  --frost3: #5e81ac;
  --frost3-raw: 94, 129, 172;
  --graph-node: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --graph-node-attachment: var(--color-yellow, #ebcb8b);
  --graph-node-focused: var(--text-accent, hsl(210, 34%, 63%));
  --graph-node-tag: var(--color-green, #a3be8c);
  --graph-node-unresolved: var(--text-faint, #4C566A);
  --graph-text: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --gray: var(--text-muted, color-mix(in srgb, var(--accent-color), #000 20%));
  --h1-color: var(--header-color, hsl(210, 34%, 63%));
  --h2-color: var(--header-color, hsl(210, 34%, 63%));
  --h3-color: var(--header-color, hsl(210, 34%, 63%));
  --h4-color: var(--header-color, hsl(210, 34%, 63%));
  --h5-color: var(--header-color, hsl(210, 34%, 63%));
  --h6-color: var(--header-color, hsl(210, 34%, 63%));
  --header-color: var(--accent-color, hsl(210, 34%, 63%));
  --header-font: "Norwester";
  --headerFont: var(--font-text-theme, 'Avenir');
  --heading-formatting: var(--text-faint, #4C566A);
  --highlight: var(--text-highlight-bg, var(--accent-color, hsl(210, 34%, 63%)));
  --hr-color: var(--background-modifier-border, #E5E9F0);
  --icon-color: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --icon-color-active: var(--text-accent, hsl(210, 34%, 63%));
  --icon-color-focused: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --icon-color-hover: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --inline-title-color: var(--accent-color, hsl(210, 34%, 63%));
  --inline-title-font: var(--header-font, "Norwester");
  --input-date-separator: var(--text-faint, #4C566A);
  --input-placeholder-color: var(--text-faint, #4C566A);
  --interactive-accent: var(--color-accent-1, hsl(209, 34.34%, 67.725%));
  --interactive-accent-hover: var(--color-accent-2, hsl(207, 34.68%, 72.45%));
  --interactive-accent-hsl: var(--color-accent-hsl, 210, 34%, 63%);
  --interactive-hover: var(--color-base-10, #ECEFF4);
  --interactive-normal: var(--color-base-00, white);
  --light: var(--background-primary, var(--color-base-00, white));
  --light0: #d8dee9;
  --light0-raw: 216, 222, 233;
  --light1: #e5e9f0;
  --light1-raw: 229, 233, 240;
  --light2: #eceff4;
  --light2-raw: 236, 239, 244;
  --light3: #ffffff;
  --light3-raw: 255, 255, 255;
  --lightgray: var(--background-secondary, var(--color-base-20, #ECEFF4));
  --link-color: var(--text-accent, hsl(210, 34%, 63%));
  --link-color-hover: var(--text-accent-hover, hsl(207, 34.68%, 72.45%));
  --link-external-color: var(--text-accent, hsl(210, 34%, 63%));
  --link-external-color-hover: var(--text-accent-hover, hsl(207, 34.68%, 72.45%));
  --link-unresolved-color: var(--text-accent, hsl(210, 34%, 63%));
  --list-marker-color: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --list-marker-color-collapsed: var(--text-accent, hsl(210, 34%, 63%));
  --list-marker-color-hover: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --menu-background: var(--background-secondary, #ECEFF4);
  --menu-border-color: var(--background-modifier-border-hover, #D8DEE9);
  --metadata-border-color: var(--background-modifier-border, #E5E9F0);
  --metadata-divider-color: var(--background-modifier-border, #E5E9F0);
  --metadata-input-text-color: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --metadata-label-text-color: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --metadata-label-text-color-hover: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --modal-background: var(--background-primary, white);
  --nav-collapse-icon-color: var(--collapse-icon-color, #4C566A);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #4C566A);
  --nav-heading-color: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --nav-heading-color-collapsed: var(--text-faint, #4C566A);
  --nav-heading-color-collapsed-hover: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --nav-heading-color-hover: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --nav-item-color: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --nav-item-color-active: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --nav-item-color-highlighted: var(--text-accent, hsl(210, 34%, 63%));
  --nav-item-color-hover: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --nav-item-color-selected: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --nav-tag-color: var(--text-faint, #4C566A);
  --nav-tag-color-active: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --nav-tag-color-hover: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --nord-color-base-00: white;
  --nord-color-base-05: white;
  --nord-color-base-10: #ECEFF4;
  --nord-color-base-100: #2E3440;
  --nord-color-base-20: #ECEFF4;
  --nord-color-base-25: #E5E9F0;
  --nord-color-base-30: #E5E9F0;
  --nord-color-base-35: #D8DEE9;
  --nord-color-base-40: #D8DEE9;
  --nord-color-base-50: #4C566A;
  --nord-color-base-60: #434C5E;
  --nord-color-base-70: #3B4252;
  --nordic-darken: 0%;
  --pdf-background: var(--background-primary, white);
  --pdf-page-background: var(--background-primary, white);
  --pdf-sidebar-background: var(--background-primary, white);
  --pill-border-color: var(--background-modifier-border, #E5E9F0);
  --pill-border-color-hover: var(--background-modifier-border-hover, #D8DEE9);
  --pill-color: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --pill-color-hover: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --pill-color-remove: var(--text-faint, #4C566A);
  --pill-color-remove-hover: var(--text-accent, hsl(210, 34%, 63%));
  --prompt-background: var(--background-primary, white);
  --raised-background: var(--blur-background, color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent)));
  --ribbon-background: var(--background-secondary, #ECEFF4);
  --ribbon-background-collapsed: var(--background-primary, white);
  --search-clear-button-color: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --search-icon-color: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --search-result-background: var(--background-primary, white);
  --secondary: var(--text-accent, var(--color-accent, hsl(210, 34%, 63%)));
  --setting-group-heading-color: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --setting-items-background: var(--background-primary-alt, #ECEFF4);
  --setting-items-border-color: var(--background-modifier-border, #E5E9F0);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --shiki-code-background: var(--code-background, #ECEFF4);
  --shiki-code-comment: var(--text-faint, #4C566A);
  --shiki-code-function: var(--color-green, #a3be8c);
  --shiki-code-important: var(--color-orange, #d08770);
  --shiki-code-keyword: var(--color-pink, #b48ead);
  --shiki-code-normal: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --shiki-code-property: var(--color-cyan, #61b1bf);
  --shiki-code-punctuation: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --shiki-code-string: var(--color-yellow, #ebcb8b);
  --shiki-code-value: var(--color-purple, #958eb4);
  --shiki-gutter-border-color: var(--background-modifier-border, #E5E9F0);
  --shiki-gutter-text-color: var(--text-faint, #4C566A);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --shiki-highlight-neutral: var(--shiki-code-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --shiki-terminal-dots-color: var(--text-faint, #4C566A);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #D8DEE9);
  --slider-track-background: var(--background-modifier-border, #E5E9F0);
  --statblock-background-color: rgba(var(--mono-rgb-100), 0.05);
  --statblock-bar-color: var(--frost3, #5e81ac);
  --statblock-border-color: var(--light2, #eceff4);
  --statblock-box-shadow-color: var(--light2, #eceff4);
  --statblock-font-color: var(--statblock-primary-color, #81a1c1);
  --statblock-heading-font-color: var(--frost3, #5e81ac);
  --statblock-image-border-color: var(--statblock-primary-color, #81a1c1);
  --statblock-primary-color: var(--frost2, #81a1c1);
  --statblock-property-font-color: var(--statblock-font-color, #81a1c1);
  --statblock-property-name-font-color: var(--frost3, #5e81ac);
  --statblock-rule-color: var(--frost3, #5e81ac);
  --statblock-section-heading-border-color: var(--statblock-primary-color, #81a1c1);
  --statblock-section-heading-font-color: var(--frost3, #5e81ac);
  --status-bar-background: var(--background-secondary, #ECEFF4);
  --status-bar-border-color: var(--divider-color, #E5E9F0);
  --status-bar-text-color: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --suggestion-background: var(--background-primary, white);
  --sync-avatar-color-1: var(--color-red, #bf616a);
  --sync-avatar-color-2: var(--color-orange, #d08770);
  --sync-avatar-color-3: var(--color-yellow, #ebcb8b);
  --sync-avatar-color-4: var(--color-green, #a3be8c);
  --sync-avatar-color-5: var(--color-cyan, #61b1bf);
  --sync-avatar-color-6: var(--color-blue, #6199bf);
  --sync-avatar-color-7: var(--color-purple, #958eb4);
  --sync-avatar-color-8: var(--color-pink, #b48ead);
  --tab-background-active: var(--background-primary, white);
  --tab-container-background: var(--background-secondary, #ECEFF4);
  --tab-curve: 0;
  --tab-divider-color: var(--background-modifier-border-hover, #D8DEE9);
  --tab-outline-color: var(--accent-color, hsl(210, 34%, 63%));
  --tab-outline-width: 2px;
  --tab-radius: var(--radius-s, 0);
  --tab-radius-active: 0;
  --tab-switcher-background: var(--background-secondary, #ECEFF4);
  --tab-text-color: var(--text-faint, #4C566A);
  --tab-text-color-active: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --tab-text-color-focused: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --tab-text-color-focused-active: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --tab-text-color-focused-active-current: var(--frost2, #81a1c1);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(210, 34%, 63%));
  --table-add-button-border-color: var(--background-modifier-border, #E5E9F0);
  --table-background: rgba(var(--mono-rgb-0), 5%);
  --table-border-color: rgba(var(--mono-rgb-100), 50%);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(209, 34.34%, 67.725%));
  --table-drag-handle-color: var(--text-faint, #4C566A);
  --table-header-background: rgba(var(--mono-rgb-100), 25%);
  --table-header-background-hover: rgba(var(--mono-rgb-0), 10%);
  --table-header-border-color: rgba(var(--mono-rgb-100), 50%);
  --table-header-color: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --table-header-font: var(--header-font, "Norwester");
  --table-row-alt-background: rgba(var(--mono-rgb-100), 5%);
  --table-row-alt-background-hover: rgba(var(--mono-rgb-0), 10%);
  --table-row-background-hover: rgba(var(--mono-rgb-0), 10%);
  --table-selection-border-color: var(--interactive-accent, hsl(209, 34.34%, 67.725%));
  --tag-color: var(--text-accent, hsl(210, 34%, 63%));
  --tag-color-hover: var(--text-accent, hsl(210, 34%, 63%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(207, 34.68%, 72.45%)));
  --text-accent: var(--color-accent, hsl(210, 34%, 63%));
  --text-accent-hover: var(--color-accent-2, hsl(207, 34.68%, 72.45%));
  --text-error: var(--color-red, #bf616a);
  --text-faint: var(--color-base-50, #4C566A);
  --text-highlight-bg: var(--accent-color, hsl(210, 34%, 63%));
  --text-muted: color-mix(in srgb, var(--accent-color), #000 20%);
  --text-normal: color-mix(in srgb, var(--accent-color), #000 45%);
  --text-success: var(--color-green, #a3be8c);
  --text-warning: var(--color-orange, #d08770);
  --textHighlight: var(--text-highlight-bg, var(--accent-color, hsl(210, 34%, 63%)));
  --titleFont: var(--font-text-theme, 'Avenir');
  --titlebar-background: var(--background-secondary, #ECEFF4);
  --titlebar-background-focused: var(--background-secondary-alt, white);
  --titlebar-border-color: var(--background-modifier-border, #E5E9F0);
  --titlebar-text-color: var(--text-muted, color-mix(in srgb, hsl(210, 34%, 63%), #000 20%));
  --titlebar-text-color-focused: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --vault-profile-color: var(--text-normal, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --vault-profile-color-hover: var(--vault-profile-color, color-mix(in srgb, hsl(210, 34%, 63%), #000 45%));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #ECEFF4);
  background-color: var(--tab-container-background, rgb(236, 239, 244));
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(236, 239, 244));
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(229, 233, 240);
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #ECEFF4);
  background-color: var(--tab-container-background, rgb(236, 239, 244));
  border-left-color: rgb(229, 233, 240);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body html {
  --dark0: #2e3440;
  --dark0-raw: 46, 52, 64;
  --dark1: #3b4252;
  --dark1-raw: 59, 66, 82;
  --dark2: #434c5e;
  --dark2-raw: 67, 76, 94;
  --dark3: #4c566a;
  --dark3-raw: 76, 86, 106;
  --frost0: #8fbcbb;
  --frost0-raw: 143, 188, 187;
  --frost1: #88c0d0;
  --frost1-raw: 136, 192, 208;
  --frost2: #81a1c1;
  --frost2-raw: 129, 161, 193;
  --frost3: #5e81ac;
  --frost3-raw: 94, 129, 172;
  --light0: #d8dee9;
  --light0-raw: 216, 222, 233;
  --light1: #e5e9f0;
  --light1-raw: 229, 233, 240;
  --light2: #eceff4;
  --light2-raw: 236, 239, 244;
  --light3: #ffffff;
  --light3-raw: 255, 255, 255;
  --nordic-darken: 0%;
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--bold-color, color(srgb 0.27731 0.3465 0.41569));
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .markdown-rendered p > em, html em {
  color: var(--italic-color, color(srgb 0.27731 0.3465 0.41569));
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .markdown-rendered p > i, html i {
  color: var(--italic-color, color(srgb 0.27731 0.3465 0.41569));
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .markdown-rendered p > strong > em, html strong > em {
  color: var(--italic-color, color(srgb 0.27731 0.3465 0.41569));
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--bold-color, color(srgb 0.27731 0.3465 0.41569));
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(129, 161, 193));
  color: var(--text-normal, color(srgb 0.27731 0.3465 0.41569));
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body del {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(76, 86, 106);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(144, 174, 201));
  border-color: rgb(144, 174, 201);
}

html body p {
  color: var(--text-muted, color(srgb 0.40336 0.504 0.60464));
  outline: color(srgb 0.40336 0.504 0.60464) none 0px;
  text-decoration-color: color(srgb 0.40336 0.504 0.60464);
}`,
    links: `html body a.external-link, html footer a {
  color: var(--link-external-color, rgb(129, 161, 193));
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(129, 161, 193) none 0px;
  text-decoration-color: rgb(129, 161, 193);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(129, 161, 193));
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(129, 161, 193) none 0px;
  text-decoration-color: rgb(129, 161, 193);
}

html body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(129, 161, 193));
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(129, 161, 193) none 0px;
  text-decoration: underline rgba(129, 161, 193, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(129, 161, 193, 0.3));
}`,
    lists: `html body dd {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body dt {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body ol > li {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body ul > li {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body ul.overflow {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-faint, rgb(76, 86, 106));
}

html body blockquote {
  --blockquote-background-color: var(--background-primary-alt, #ECEFF4);
  background-color: var(--blockquote-background-color, rgb(236, 239, 244));
  color: var(--blockquote-color, color(srgb 0.27731 0.3465 0.41569));
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html body .table-container {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body table {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgba(255, 255, 255, 0.05));
}

html body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgba(0, 0, 0, 0.05));
}

html body td {
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-left-color: rgba(0, 0, 0, 0.5);
  border-right-color: rgba(0, 0, 0, 0.5);
  border-top-color: rgba(0, 0, 0, 0.5);
  color: var(--table-text-color, color(srgb 0.27731 0.3465 0.41569));
}

html body th {
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-left-color: rgba(0, 0, 0, 0.5);
  border-right-color: rgba(0, 0, 0, 0.5);
  border-top-color: rgba(0, 0, 0, 0.5);
  color: var(--table-header-color, color(srgb 0.27731 0.3465 0.41569));
}

html body tr {
  background-color: var(--table-header-background, rgba(0, 0, 0, 0.25));
}`,
    code: `html body code {
  background-color: var(--code-background, rgb(236, 239, 244));
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: var(--code-normal, color(srgb 0.27731 0.3465 0.41569));
}

html body pre:has(> code) {
  background-color: var(--code-background, rgb(236, 239, 244));
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
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body figcaption {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body figure {
  --code-background: var(--ec-frm-edBg, #ECEFF4);
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body img {
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html body video {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgb(236, 239, 244));
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: var(--text-muted, color(srgb 0.40336 0.504 0.60464));
}

html body .footnotes {
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .transclude {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: rgb(144, 174, 201);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .transclude-inner {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

html body li.task-list-item[data-task="#"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="$"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="%"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html li.task-list-item[data-task="body"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="'"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="+"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task=", html "] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="."] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="0"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="1"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="2"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="3"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="4"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="5"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="6"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="7"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="8"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="9"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task=":"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task=";"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="<"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="="] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="@"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="A"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="B"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="C"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="D"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="E"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="F"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="G"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="H"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="J"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="K"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="L"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="M"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="N"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="O"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="P"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="Q"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="R"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="T"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="U"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="V"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="W"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="X"] {
  color: color(srgb 0.40336 0.504 0.60464);
}

html body li.task-list-item[data-task="Y"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="Z"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="_"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="\`"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="a"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="e"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="g"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="h"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="j"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="m"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="n"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="o"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="q"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="r"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="s"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="t"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="v"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="x"] {
  color: color(srgb 0.40336 0.504 0.60464);
}

html body li.task-list-item[data-task="y"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="z"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="|"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="~"] {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='!'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='*'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='-'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='/'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='>'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='?'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='I'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='S'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='b'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='c'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='d'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='f'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='i'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='k'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='l'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='p'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='u'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='w'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 135, 112);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(76, 86, 106);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 203, 139);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(97, 177, 191);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(97, 153, 191);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(97, 153, 191);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 203, 139);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 203, 139);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(149, 142, 180);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 97, 153, 191;
  background: rgba(97, 153, 191, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-title-background, var(--callout-color)), 0.2);
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(97, 153, 191));
}

html body .callout > .callout-content {
  --bold-color: rgb(var(--callout-color));
  --list-marker-color: rgb(var(--callout-color));
  color: color(srgb 0.27731 0.3465 0.41569);
  padding-left: 10px;
  padding-right: 10px;
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 97, 177, 191);
  --callout-title-background: var(--callout-color, 97, 177, 191);
  --h1-color: rgb(var(--callout-color));
  --h2-color: rgb(var(--callout-color));
  --h3-color: rgb(var(--callout-color));
  --h4-color: rgb(var(--callout-color));
  --h5-color: rgb(var(--callout-color));
  --h6-color: rgb(var(--callout-color));
  background: rgba(97, 177, 191, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(97, 177, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 177, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 177, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 177, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 97, 153, 191;
  background: rgba(97, 153, 191, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-title-background, var(--callout-color)), 0.2);
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(97, 153, 191));
}

html body .callout[data-callout="abstract"] > .callout-content {
  --bold-color: rgb(var(--callout-color));
  --list-marker-color: rgb(var(--callout-color));
  color: color(srgb 0.27731 0.3465 0.41569);
  padding-left: 10px;
  padding-right: 10px;
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 191, 97, 106);
  --callout-title-background: var(--callout-color, 191, 97, 106);
  --h1-color: rgb(var(--callout-color));
  --h2-color: rgb(var(--callout-color));
  --h3-color: rgb(var(--callout-color));
  --h4-color: rgb(var(--callout-color));
  --h5-color: rgb(var(--callout-color));
  --h6-color: rgb(var(--callout-color));
  background: rgba(191, 97, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(191, 97, 106, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(191, 97, 106, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(191, 97, 106, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(191, 97, 106, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 97, 153, 191;
  background: rgba(97, 153, 191, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-title-background, var(--callout-color)), 0.2);
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(97, 153, 191));
}

html body .callout[data-callout="bug"] > .callout-content {
  --bold-color: rgb(var(--callout-color));
  --list-marker-color: rgb(var(--callout-color));
  color: color(srgb 0.27731 0.3465 0.41569);
  padding-left: 10px;
  padding-right: 10px;
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 191, 97, 106);
  --callout-title-background: var(--callout-color, 191, 97, 106);
  --h1-color: rgb(var(--callout-color));
  --h2-color: rgb(var(--callout-color));
  --h3-color: rgb(var(--callout-color));
  --h4-color: rgb(var(--callout-color));
  --h5-color: rgb(var(--callout-color));
  --h6-color: rgb(var(--callout-color));
  background: rgba(191, 97, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(191, 97, 106, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(191, 97, 106, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(191, 97, 106, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(191, 97, 106, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 97, 153, 191;
  background: rgba(97, 153, 191, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-title-background, var(--callout-color)), 0.2);
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(97, 153, 191));
}

html body .callout[data-callout="danger"] > .callout-content {
  --bold-color: rgb(var(--callout-color));
  --list-marker-color: rgb(var(--callout-color));
  color: color(srgb 0.27731 0.3465 0.41569);
  padding-left: 10px;
  padding-right: 10px;
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 149, 142, 180);
  --callout-title-background: var(--callout-color, 149, 142, 180);
  --h1-color: rgb(var(--callout-color));
  --h2-color: rgb(var(--callout-color));
  --h3-color: rgb(var(--callout-color));
  --h4-color: rgb(var(--callout-color));
  --h5-color: rgb(var(--callout-color));
  --h6-color: rgb(var(--callout-color));
  background: rgba(149, 142, 180, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(149, 142, 180, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(149, 142, 180, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(149, 142, 180, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(149, 142, 180, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 97, 153, 191;
  background: rgba(97, 153, 191, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-title-background, var(--callout-color)), 0.2);
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(97, 153, 191));
}

html body .callout[data-callout="example"] > .callout-content {
  --bold-color: rgb(var(--callout-color));
  --list-marker-color: rgb(var(--callout-color));
  color: color(srgb 0.27731 0.3465 0.41569);
  padding-left: 10px;
  padding-right: 10px;
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 191, 97, 106);
  --callout-title-background: var(--callout-color, 191, 97, 106);
  --h1-color: rgb(var(--callout-color));
  --h2-color: rgb(var(--callout-color));
  --h3-color: rgb(var(--callout-color));
  --h4-color: rgb(var(--callout-color));
  --h5-color: rgb(var(--callout-color));
  --h6-color: rgb(var(--callout-color));
  background: rgba(191, 97, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(191, 97, 106, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(191, 97, 106, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(191, 97, 106, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(191, 97, 106, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 97, 153, 191;
  background: rgba(97, 153, 191, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-title-background, var(--callout-color)), 0.2);
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(97, 153, 191));
}

html body .callout[data-callout="failure"] > .callout-content {
  --bold-color: rgb(var(--callout-color));
  --list-marker-color: rgb(var(--callout-color));
  color: color(srgb 0.27731 0.3465 0.41569);
  padding-left: 10px;
  padding-right: 10px;
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 97, 153, 191);
  --callout-title-background: var(--callout-color, 97, 153, 191);
  --h1-color: rgb(var(--callout-color));
  --h2-color: rgb(var(--callout-color));
  --h3-color: rgb(var(--callout-color));
  --h4-color: rgb(var(--callout-color));
  --h5-color: rgb(var(--callout-color));
  --h6-color: rgb(var(--callout-color));
  background: rgba(97, 153, 191, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(97, 153, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 153, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 153, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 153, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 97, 153, 191;
  background: rgba(97, 153, 191, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-title-background, var(--callout-color)), 0.2);
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(97, 153, 191));
}

html body .callout[data-callout="info"] > .callout-content {
  --bold-color: rgb(var(--callout-color));
  --list-marker-color: rgb(var(--callout-color));
  color: color(srgb 0.27731 0.3465 0.41569);
  padding-left: 10px;
  padding-right: 10px;
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 97, 153, 191);
  --callout-title-background: var(--callout-color, 97, 153, 191);
  --h1-color: rgb(var(--callout-color));
  --h2-color: rgb(var(--callout-color));
  --h3-color: rgb(var(--callout-color));
  --h4-color: rgb(var(--callout-color));
  --h5-color: rgb(var(--callout-color));
  --h6-color: rgb(var(--callout-color));
  background: rgba(97, 153, 191, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(97, 153, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 153, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 153, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 153, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 97, 153, 191;
  background: rgba(97, 153, 191, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-title-background, var(--callout-color)), 0.2);
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(97, 153, 191));
}

html body .callout[data-callout="note"] > .callout-content {
  --bold-color: rgb(var(--callout-color));
  --list-marker-color: rgb(var(--callout-color));
  color: color(srgb 0.27731 0.3465 0.41569);
  padding-left: 10px;
  padding-right: 10px;
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 208, 135, 112);
  --callout-title-background: var(--callout-color, 208, 135, 112);
  --h1-color: rgb(var(--callout-color));
  --h2-color: rgb(var(--callout-color));
  --h3-color: rgb(var(--callout-color));
  --h4-color: rgb(var(--callout-color));
  --h5-color: rgb(var(--callout-color));
  --h6-color: rgb(var(--callout-color));
  background: rgba(208, 135, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(208, 135, 112, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(208, 135, 112, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(208, 135, 112, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(208, 135, 112, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 97, 153, 191;
  background: rgba(97, 153, 191, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-title-background, var(--callout-color)), 0.2);
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(97, 153, 191));
}

html body .callout[data-callout="question"] > .callout-content {
  --bold-color: rgb(var(--callout-color));
  --list-marker-color: rgb(var(--callout-color));
  color: color(srgb 0.27731 0.3465 0.41569);
  padding-left: 10px;
  padding-right: 10px;
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  --callout-title-background: var(--callout-color, 158, 158, 158);
  --h1-color: rgb(var(--callout-color));
  --h2-color: rgb(var(--callout-color));
  --h3-color: rgb(var(--callout-color));
  --h4-color: rgb(var(--callout-color));
  --h5-color: rgb(var(--callout-color));
  --h6-color: rgb(var(--callout-color));
  border-bottom-color: rgba(158, 158, 158, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 97, 153, 191;
  background: rgba(97, 153, 191, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-title-background, var(--callout-color)), 0.2);
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(97, 153, 191));
}

html body .callout[data-callout="quote"] > .callout-content {
  --bold-color: rgb(var(--callout-color));
  --list-marker-color: rgb(var(--callout-color));
  color: color(srgb 0.27731 0.3465 0.41569);
  padding-left: 10px;
  padding-right: 10px;
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 163, 190, 140);
  --callout-title-background: var(--callout-color, 163, 190, 140);
  --h1-color: rgb(var(--callout-color));
  --h2-color: rgb(var(--callout-color));
  --h3-color: rgb(var(--callout-color));
  --h4-color: rgb(var(--callout-color));
  --h5-color: rgb(var(--callout-color));
  --h6-color: rgb(var(--callout-color));
  background: rgba(163, 190, 140, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(163, 190, 140, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(163, 190, 140, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(163, 190, 140, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(163, 190, 140, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 97, 153, 191;
  background: rgba(97, 153, 191, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-title-background, var(--callout-color)), 0.2);
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(97, 153, 191));
}

html body .callout[data-callout="success"] > .callout-content {
  --bold-color: rgb(var(--callout-color));
  --list-marker-color: rgb(var(--callout-color));
  color: color(srgb 0.27731 0.3465 0.41569);
  padding-left: 10px;
  padding-right: 10px;
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 97, 177, 191);
  --callout-title-background: var(--callout-color, 97, 177, 191);
  --h1-color: rgb(var(--callout-color));
  --h2-color: rgb(var(--callout-color));
  --h3-color: rgb(var(--callout-color));
  --h4-color: rgb(var(--callout-color));
  --h5-color: rgb(var(--callout-color));
  --h6-color: rgb(var(--callout-color));
  background: rgba(97, 177, 191, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(97, 177, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 177, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 177, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 177, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 97, 153, 191;
  background: rgba(97, 153, 191, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-title-background, var(--callout-color)), 0.2);
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(97, 153, 191));
}

html body .callout[data-callout="tip"] > .callout-content {
  --bold-color: rgb(var(--callout-color));
  --list-marker-color: rgb(var(--callout-color));
  color: color(srgb 0.27731 0.3465 0.41569);
  padding-left: 10px;
  padding-right: 10px;
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 97, 153, 191);
  --callout-title-background: var(--callout-color, 97, 153, 191);
  --h1-color: rgb(var(--callout-color));
  --h2-color: rgb(var(--callout-color));
  --h3-color: rgb(var(--callout-color));
  --h4-color: rgb(var(--callout-color));
  --h5-color: rgb(var(--callout-color));
  --h6-color: rgb(var(--callout-color));
  background: rgba(97, 153, 191, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(97, 153, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 153, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 153, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 153, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 97, 153, 191;
  background: rgba(97, 153, 191, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-title-background, var(--callout-color)), 0.2);
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(97, 153, 191));
}

html body .callout[data-callout="todo"] > .callout-content {
  --bold-color: rgb(var(--callout-color));
  --list-marker-color: rgb(var(--callout-color));
  color: color(srgb 0.27731 0.3465 0.41569);
  padding-left: 10px;
  padding-right: 10px;
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 208, 135, 112);
  --callout-title-background: var(--callout-color, 208, 135, 112);
  --h1-color: rgb(var(--callout-color));
  --h2-color: rgb(var(--callout-color));
  --h3-color: rgb(var(--callout-color));
  --h4-color: rgb(var(--callout-color));
  --h5-color: rgb(var(--callout-color));
  --h6-color: rgb(var(--callout-color));
  background: rgba(208, 135, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(208, 135, 112, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(208, 135, 112, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(208, 135, 112, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(208, 135, 112, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 97, 153, 191;
  background: rgba(97, 153, 191, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-title-background, var(--callout-color)), 0.2);
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(97, 153, 191));
}

html body .callout[data-callout="warning"] > .callout-content {
  --bold-color: rgb(var(--callout-color));
  --list-marker-color: rgb(var(--callout-color));
  color: color(srgb 0.27731 0.3465 0.41569);
  padding-left: 10px;
  padding-right: 10px;
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
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: var(--text-normal, color(srgb 0.27731 0.3465 0.41569));
}

html body .search > .search-container > .search-space {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

html body .search > .search-container > .search-space > * {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(210, 34%, 63%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(210, 34%, 63%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(210, 34%, 63%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(210, 34%, 63%, 0.15));
  --pill-color: var(--tag-color, hsl(210, 34%, 63%));
  --pill-color-hover: var(--tag-color-hover, hsl(210, 34%, 63%));
  --pill-color-remove: var(--tag-color, hsl(210, 34%, 63%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(210, 34%, 63%));
  background-color: var(--pill-background, rgba(129, 161, 193, 0.1));
  border-bottom-color: rgba(129, 161, 193, 0.15);
  border-left-color: rgba(129, 161, 193, 0.15);
  border-right-color: rgba(129, 161, 193, 0.15);
  border-top-color: rgba(129, 161, 193, 0.15);
  color: var(--pill-color, rgb(129, 161, 193));
}

html body a.internal-link.tag-link::before {
  color: rgb(129, 161, 193);
}

html body h1 {
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: var(--h1-color, rgb(129, 161, 193));
  font-family: var(--h1-font, Norwester);
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(129, 161, 193));
}

html body h2 {
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: var(--h2-color, rgb(129, 161, 193));
  font-family: var(--h2-font, Norwester);
}

html body h2.page-title, html h2.page-title a {
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: var(--inline-title-color, rgb(129, 161, 193));
  font-family: var(--inline-title-font, Norwester);
}

html body h3 {
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: var(--h3-color, rgb(129, 161, 193));
  font-family: var(--h3-font, Norwester);
}

html body h4 {
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: var(--h4-color, rgb(129, 161, 193));
  font-family: var(--h4-font, Norwester);
}

html body h5 {
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: var(--h5-color, rgb(129, 161, 193));
  font-family: var(--h5-font, Norwester);
}

html body h6 {
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  color: var(--h6-color, rgb(129, 161, 193));
  font-family: var(--h6-font, Norwester);
}

html body hr {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 97, 153, 191);
  --callout-title-background: var(--callout-color, 97, 153, 191);
  --h1-color: rgb(var(--callout-color));
  --h2-color: rgb(var(--callout-color));
  --h3-color: rgb(var(--callout-color));
  --h4-color: rgb(var(--callout-color));
  --h5-color: rgb(var(--callout-color));
  --h6-color: rgb(var(--callout-color));
  border-bottom-color: rgba(97, 153, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 153, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 153, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 153, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.40336 0.504 0.60464));
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.40336 0.504 0.60464));
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

html body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html body details.toc summary::marker {
  color: color(srgb 0.27731 0.3465 0.41569);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: var(--icon-color, color(srgb 0.40336 0.504 0.60464));
}`,
    footer: `html body footer {
  background-color: var(--status-bar-background, rgb(236, 239, 244));
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: var(--status-bar-text-color, color(srgb 0.40336 0.504 0.60464));
}

html body footer ul li a {
  color: color(srgb 0.40336 0.504 0.60464);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.40336 0.504 0.60464));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.40336 0.504 0.60464);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.section-li > .section .meta {
  color: color(srgb 0.40336 0.504 0.60464);
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.40336 0.504 0.60464));
}

html body ul.section-ul {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: var(--icon-color, color(srgb 0.40336 0.504 0.60464));
}

html body .darkmode svg {
  color: color(srgb 0.40336 0.504 0.60464);
  stroke: color(srgb 0.40336 0.504 0.60464);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: color(srgb 0.40336 0.504 0.60464);
}

html body .breadcrumb-element p {
  color: var(--text-faint, rgb(76, 86, 106));
}`,
    canvas: `html body .canvas-node {
  border-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .canvas-node-content {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .canvas-node-file {
  --h1-font: var(--header-font, "Norwester");
  --h2-font: var(--header-font, "Norwester");
  --h3-font: var(--header-font, "Norwester");
  --h4-font: var(--header-font, "Norwester");
  --h5-font: var(--header-font, "Norwester");
  --h6-font: var(--header-font, "Norwester");
  color: var(--text-normal, color(srgb 0.27731 0.3465 0.41569));
}

html body .canvas-node-group {
  border-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .canvas-sidebar {
  border-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    bases: `html body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgba(0, 0, 0, 0.05));
}

html body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0.5);
  color: var(--table-header-color, color(srgb 0.27731 0.3465 0.41569));
}`,
    properties: `html body .metadata {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: var(--text-muted, color(srgb 0.40336 0.504 0.60464));
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-container .metadata-property {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: color(srgb 0.40336 0.504 0.60464);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: color(srgb 0.40336 0.504 0.60464);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-property-key {
  color: color(srgb 0.40336 0.504 0.60464);
}

html body .metadata-property-value {
  color: color(srgb 0.40336 0.504 0.60464);
}

html body .note-properties {
  border-color: rgb(229, 233, 240);
}

html body .note-properties-key {
  color: color(srgb 0.40336 0.504 0.60464);
}

html body .note-properties-row {
  border-color: color(srgb 0.40336 0.504 0.60464);
}

html body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(210, 34%, 63%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(210, 34%, 63%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(210, 34%, 63%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(210, 34%, 63%, 0.15));
  --pill-color: var(--tag-color, hsl(210, 34%, 63%));
  --pill-color-hover: var(--tag-color-hover, hsl(210, 34%, 63%));
  --pill-color-remove: var(--tag-color, hsl(210, 34%, 63%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(210, 34%, 63%));
  background-color: var(--pill-background, rgba(129, 161, 193, 0.1));
  color: var(--pill-color, rgb(129, 161, 193));
}

html body .note-properties-value {
  color: color(srgb 0.40336 0.504 0.60464);
}

html body div#quartz-root {
  color: var(--text-normal, color(srgb 0.27731 0.3465 0.41569));
}

html body ol.overflow {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgb(236, 239, 244));
  border-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(255, 255, 255));
}

html body .stacked-page.active {
  border-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    misc: `html body .katex-display {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .navigation-progress {
  background-color: var(--status-bar-background, rgb(236, 239, 244));
}

html body .page-header h2.page-title {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: var(--text-normal, color(srgb 0.27731 0.3465 0.41569));
}

html body abbr {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body details {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body input[type=text] {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: var(--text-normal, color(srgb 0.40336 0.504 0.60464));
}

html body kbd {
  background-color: var(--code-background, rgb(236, 239, 244));
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: var(--code-normal, color(srgb 0.27731 0.3465 0.41569));
}

html body progress {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body sub {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body summary {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body sup {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body ul.tags > li {
  background-color: var(--tag-background, rgba(129, 161, 193, 0.1));
  border-bottom-color: rgba(129, 161, 193, 0.15);
  border-left-color: rgba(129, 161, 193, 0.15);
  border-right-color: rgba(129, 161, 193, 0.15);
  border-top-color: rgba(129, 161, 193, 0.15);
  color: var(--tag-color, rgb(129, 161, 193));
}`,
  },
  classSettings: {
    "nordic-colored-headers": {
      dark: `.nordic-colored-headers, .theme-light.nordic-colored-headers {
--h1-color: var(--color-red);
--h2-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h4-color: var(--color-green);
--h5-color: var(--color-cyan);
--h6-color: var(--color-blue);
}`,
      light: `.theme-dark.nordic-colored-headers, .nordic-colored-headers {
--h1-color: var(--color-red);
--h2-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h4-color: var(--color-green);
--h5-color: var(--color-cyan);
--h6-color: var(--color-blue);
}`,
    },
  },
};
