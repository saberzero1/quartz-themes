import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "origami.shadow",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    fontFiles: [
      {
        family: "Fraunces",
        style: "normal",
        weight: "100 900",
        file: "fraunces.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Monaspace",
        style: "normal",
        weight: "100 900",
        file: "monaspace.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Aspekta",
        style: "normal",
        weight: "100 1000",
        file: "aspekta.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Instrument",
        style: "normal",
        weight: "100 1000",
        file: "instrument.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Instrument",
        style: "italic",
        weight: "100 1000",
        file: "instrument-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Lexend",
        style: "normal",
        weight: "500",
        file: "lexend.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IAWriter",
        style: "normal",
        weight: "500",
        file: "iawriter.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IAWriter",
        style: "italic",
        weight: "500",
        file: "iawriter-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Satoshi",
        style: "normal",
        weight: "500",
        file: "satoshi.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Satoshi",
        style: "italic",
        weight: "500",
        file: "satoshi-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Chillax",
        style: "normal",
        weight: "500",
        file: "chillax.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Uncut",
        style: "normal",
        weight: "500",
        file: "uncut.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Overused Grotesk",
        style: "normal",
        weight: "500",
        file: "overused-grotesk.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Nightingale",
        style: "normal",
        weight: "300",
        file: "nightingale.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "DobbinTextSF-Roman",
        style: "normal",
        weight: "100 900",
        file: "dobbintextsf-roman.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 216;
  --accent-l: 60%;
  --accent-s: 100%;
  --ancestor-editor-color: var(--text-normal, #bdc4ce);
  --aside-background: transparent;
  --aside-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --aside-border-color: var(--background-modifier-border, #34464e);
  --aside-text-color: var(--text-muted, #8a99b1);
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: var(--color-base-30, #34464e);
  --background-modifier-border-focus: var(--color-base-40, #34404e);
  --background-modifier-border-hover: var(--color-base-35, #585e63);
  --background-modifier-error: var(--color-red, #9A453C);
  --background-modifier-error-hover: var(--color-red, #9A453C);
  --background-modifier-error-rgb: var(--color-red-rgb, 154, 69, 60);
  --background-modifier-form-field: var(--color-base-00, #2c3a41);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #2c3a41);
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.075);
  --background-modifier-success: var(--color-green, #8BA481);
  --background-modifier-success-rgb: var(--color-green-rgb, 139, 164, 129);
  --background-primary: var(--color-base-00, #121517);
  --background-primary-alt: var(--color-base-10, #1a1d23);
  --background-primary-pre-alt: var(--color-base-05, #181b20);
  --background-secondary: var(--color-base-20, #232c30);
  --background-secondary-alt: var(--color-base-30, #34464e);
  --background-transparent: #55555599;
  --bases-cards-background: var(--background-primary, #121517);
  --bases-cards-cover-background: var(--background-primary-alt, #1a1d23);
  --bases-embed-border-color: var(--background-modifier-border, #34464e);
  --bases-group-heading-property-color: var(--text-muted, #8a99b1);
  --bases-table-border-color: var(--table-border-color, #34464e);
  --bases-table-cell-background-active: var(--background-primary, #121517);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #1a1d23);
  --bases-table-cell-background-selected: var(--table-selection, hsla(216, 100%, 60%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #1a1d23);
  --bases-table-header-background: var(--background-primary, #121517);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --bases-table-header-color: var(--text-muted, #8a99b1);
  --bases-table-summary-background: var(--background-primary, #121517);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --bb-border: 1px solid var(--color-base-30);
  --bb-border-alt: 1px solid var(--color-base-25);
  --bb-border-dashed: 1px dashed var(--color-base-30);
  --bb-border-high-contrast: 1px solid var(--color-base-60);
  --bb-border-transparent: 1px solid transparent;
  --bb-shadow: -33px 24px 64px -8px hsla(var(--color-accent-hsl), 0.1), 33px 12px 64px -8px hsla(calc(var(--accent-h) - 175), calc(var(--accent-s)*1.05), calc(var(--accent-l)*1.29), 0.1);
  --blockquote-border-color: var(--interactive-accent, hsl(216, 100%, 60%));
  --callout-bug: var(--color-red-rgb, 154, 69, 60);
  --callout-cite: 87, 61, 132;
  --callout-default: var(--color-blue-rgb, 23, 92, 89);
  --callout-error: var(--color-red-rgb, 154, 69, 60);
  --callout-example: var(--color-purple-rgb, 166, 154, 181);
  --callout-fail: var(--color-red-rgb, 154, 69, 60);
  --callout-important: var(--color-cyan-rgb, 155, 199, 189);
  --callout-info: var(--color-blue-rgb, 23, 92, 89);
  --callout-question: var(--color-orange-rgb, 241, 187, 138);
  --callout-success: var(--color-green-rgb, 139, 164, 129);
  --callout-summary: var(--color-cyan-rgb, 155, 199, 189);
  --callout-tip: var(--color-cyan-rgb, 155, 199, 189);
  --callout-todo: var(--color-blue-rgb, 23, 92, 89);
  --callout-warning: var(--color-orange-rgb, 241, 187, 138);
  --canvas-background: var(--background-primary, #121517);
  --canvas-card-label-color: var(--text-faint, #575f81);
  --canvas-color: 245, 245, 245;
  --canvas-color-1: var(--color-red-rgb, 154, 69, 60);
  --canvas-color-2: var(--color-orange-rgb, 241, 187, 138);
  --canvas-color-3: var(--color-yellow-rgb, 228, 188, 127);
  --canvas-color-4: var(--color-green-rgb, 139, 164, 129);
  --canvas-color-5: var(--color-cyan-rgb, 155, 199, 189);
  --canvas-color-6: var(--color-purple-rgb, 166, 154, 181);
  --canvas-dot-pattern: var(--color-base-50, #575f81);
  --caret-color: var(--text-normal, #bdc4ce);
  --checkbox-border-color: var(--text-faint, #575f81);
  --checkbox-border-color-hover: var(--text-muted, #8a99b1);
  --checkbox-color: var(--interactive-accent, hsl(216, 100%, 60%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(213, 102%, 69%));
  --checkbox-marker-color: var(--background-primary, #121517);
  --checklist-done-color: var(--text-muted, #8a99b1);
  --code-background: var(--background-primary-alt, #1a1d23);
  --code-border-color: var(--background-modifier-border, #34464e);
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --code-comment: var(--text-faint, #575f81);
  --code-function: var(--color-yellow, #E4BC7F);
  --code-important: var(--color-orange, #F1BB8A);
  --code-keyword: var(--color-pink, #EF796A);
  --code-normal: var(--text-muted, #8a99b1);
  --code-operator: var(--color-red, #9A453C);
  --code-property: var(--color-cyan, #9BC7BD);
  --code-punctuation: var(--text-muted, #8a99b1);
  --code-string: var(--color-green, #8BA481);
  --code-tag: var(--color-red, #9A453C);
  --code-value: var(--color-purple, #A69AB5);
  --collapse-icon-color: var(--text-faint, #575f81);
  --collapse-icon-color-collapsed: var(--color-accent, hsl(216, 100%, 60%));
  --color-accent: hsl(var(--accent-h),
        var(--accent-s),
        var(--accent-l));
  --color-accent-2: hsl(calc(var(--accent-h) - 3),
        calc(var(--accent-s)*1.02),
        calc(var(--accent-l)*1.15));
  --color-accent-3: hsl(calc(var(--accent-h) - 175),
        calc(var(--accent-s)*1.55),
        calc(var(--accent-l)*1.29));
  --color-accent-hsl: var(--accent-h),
        var(--accent-s),
        var(--accent-l);
  --color-accent-rgb: var(--color-blue-rgb, 23, 92, 89);
  --color-base-00: #121517;
  --color-base-05: #181b20;
  --color-base-10: #1a1d23;
  --color-base-100: #cdd0da;
  --color-base-20: #232c30;
  --color-base-25: #2c3a41;
  --color-base-30: #34464e;
  --color-base-35: #585e63;
  --color-base-40: #34404e;
  --color-base-50: #575f81;
  --color-base-60: #8a99b1;
  --color-base-70: #bdc4ce;
  --color-blue: #175C59;
  --color-blue-hsl: 177, 60%, 23%;
  --color-blue-rgb: 23, 92, 89;
  --color-cyan: #9BC7BD;
  --color-cyan-hsl: 166, 28%, 69%;
  --color-cyan-rgb: 155, 199, 189;
  --color-green: #8BA481;
  --color-green-hsl: 103, 16%, 57%;
  --color-green-rgb: 139, 164, 129;
  --color-orange: #F1BB8A;
  --color-orange-hsl: 29, 79%, 74%;
  --color-orange-rgb: 241, 187, 138;
  --color-pink: #EF796A;
  --color-pink-hsl: 7, 81%, 68%;
  --color-pink-rgb: 239, 121, 106;
  --color-purple: #A69AB5;
  --color-purple-hsl: 267, 15%, 66%;
  --color-purple-rgb: 166, 154, 181;
  --color-red: #9A453C;
  --color-red-hsl: 6, 44%, 42%;
  --color-red-rgb: 154, 69, 60;
  --color-yellow: #E4BC7F;
  --color-yellow-hsl: 36, 65%, 70%;
  --color-yellow-rgb: 228, 188, 127;
  --dark: var(--text-normal, var(--color-base-70, #bdc4ce));
  --darkgray: var(--text-normal, var(--color-base-70, #bdc4ce));
  --divider-color: var(--background-modifier-border, #34464e);
  --divider-color-hover: var(--interactive-accent, hsl(216, 100%, 60%));
  --dropdown-background: var(--interactive-normal, #34464e);
  --dropdown-background-hover: var(--interactive-hover, #585e63);
  --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border),
        inset 0 0 0 1px var(--background-modifier-border);
  --file-header-background: var(--background-primary, #121517);
  --file-header-background-focused: var(--background-primary, #121517);
  --file-header-font: var(--font-interface, "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 14px);
  --file-margins: var(--size-4-8, 32px);
  --flair-background: var(--interactive-normal, #34464e);
  --flair-color: var(--text-normal, #bdc4ce);
  --font-interface-theme: "Aspekta", sans-serif;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --footnote-divider-color: var(--metadata-divider-color, #34464e);
  --footnote-id-color: var(--text-muted, #8a99b1);
  --footnote-id-color-no-occurrences: var(--text-faint, #575f81);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.075));
  --graph-node: var(--text-muted, #8a99b1);
  --graph-node-attachment: var(--color-accent-1, hsl(213, 102%, 69%));
  --graph-node-focused: var(--background-modifier-border-focus, #34404e);
  --graph-node-tag: var(--color-accent, hsl(216, 100%, 60%));
  --graph-node-unresolved: var(--text-faint, #575f81);
  --graph-text: var(--text-normal, #bdc4ce);
  --gray: var(--text-muted, var(--color-base-60, #8a99b1));
  --h1-color: var(--color-base-100, #cdd0da);
  --h1-size: 3.5em;
  --h1-weight: 900;
  --h2-size: 1.842em;
  --h2-weight: 800;
  --h3-size: 1.3572em;
  --h3-weight: 700;
  --h4-size: 1.250em;
  --h4-weight: 600;
  --h5-size: 1em;
  --h5-weight: 600;
  --h6-size: 0.7368em;
  --h6-weight: 500;
  --heading-formatting: var(--text-faint, #575f81);
  --highlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --hr-color: var(--background-modifier-border, #34464e);
  --icon-color: var(--text-muted, #8a99b1);
  --icon-color-active: var(--color-accent, hsl(216, 100%, 60%));
  --icon-color-focused: var(--text-normal, #bdc4ce);
  --icon-color-hover: var(--text-muted, #8a99b1);
  --inline-title-color: var(--h1-color, #cdd0da);
  --inline-title-size: var(--h1-size, clamp(2.5rem, 8vw - 4rem, 5rem));
  --inline-title-weight: var(--h1-weight, 900);
  --input-date-separator: var(--text-faint, #575f81);
  --input-placeholder-color: var(--text-faint, #575f81);
  --interactive-accent: var(--color-accent-1, hsl(216, 100%, 60%));
  --interactive-accent-hover: var(--color-accent-2, hsl(213, 102%, 69%));
  --interactive-accent-hsl: var(--color-accent-hsl, 216, 100%, 60%);
  --interactive-hover: var(--color-base-10, #585e63);
  --interactive-normal: var(--color-base-00, #34464e);
  --light: var(--background-primary, var(--color-base-00, #121517));
  --lightgray: var(--background-secondary, var(--color-base-20, #232c30));
  --link-color: var(--text-accent, hsl(216, 100%, 60%));
  --link-color-hover: var(--text-accent-hover, hsl(211, 105%, 77.4%));
  --link-external-color: var(--text-accent, hsl(216, 100%, 60%));
  --link-external-color-hover: var(--text-accent-hover, hsl(211, 105%, 77.4%));
  --link-unresolved-color: var(--text-accent, hsl(216, 100%, 60%));
  --list-marker-color: var(--text-faint, #575f81);
  --list-marker-color-collapsed: var(--text-accent, hsl(216, 100%, 60%));
  --list-marker-color-hover: var(--text-muted, #8a99b1);
  --menu-background: var(--background-secondary, #232c30);
  --menu-border-color: var(--background-modifier-border-hover, #585e63);
  --menu-shadow: var(--shadow-s, 0px 10px 21px 13px rgba(0, 0, 0, 0.1));
  --metadata-border-color: var(--background-modifier-border, #34464e);
  --metadata-divider-color: var(--background-modifier-border, #34464e);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-input-font: var(--font-interface, "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #bdc4ce);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-label-font: var(--font-interface, "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #8a99b1);
  --metadata-label-text-color-hover: var(--text-muted, #8a99b1);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --modal-background: var(--background-primary, #121517);
  --nav-collapse-icon-color: var(--collapse-icon-color, #575f81);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #575f81);
  --nav-heading-color: var(--text-normal, #bdc4ce);
  --nav-heading-color-collapsed: var(--text-faint, #575f81);
  --nav-heading-color-collapsed-hover: var(--text-muted, #8a99b1);
  --nav-heading-color-hover: var(--text-normal, #bdc4ce);
  --nav-item-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --nav-item-color: var(--text-muted, #8a99b1);
  --nav-item-color-active: var(--text-normal, #bdc4ce);
  --nav-item-color-highlighted: var(--text-accent, hsl(216, 100%, 60%));
  --nav-item-color-hover: var(--text-normal, #bdc4ce);
  --nav-item-color-selected: var(--text-normal, #bdc4ce);
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, #575f81);
  --nav-tag-color-active: var(--text-muted, #8a99b1);
  --nav-tag-color-hover: var(--text-muted, #8a99b1);
  --o-h1-color: var(--background-modifier-border, #34464e);
  --o-h2-color: var(--background-modifier-border, #34464e);
  --o-h3-color: var(--background-modifier-border, #34464e);
  --o-h4-color: var(--background-modifier-border, #34464e);
  --o-h5-color: var(--background-modifier-border, #34464e);
  --o-h6-color: var(--background-modifier-border, #34464e);
  --pdf-background: var(--background-primary, #121517);
  --pdf-page-background: var(--background-primary, #121517);
  --pdf-sidebar-background: var(--background-primary, #121517);
  --pill-border-color: var(--background-modifier-border, #34464e);
  --pill-border-color-hover: var(--background-modifier-border-hover, #585e63);
  --pill-color: var(--text-muted, #8a99b1);
  --pill-color-hover: var(--text-normal, #bdc4ce);
  --pill-color-remove: var(--text-faint, #575f81);
  --pill-color-remove-hover: var(--text-accent, hsl(216, 100%, 60%));
  --prompt-background: var(--background-primary, #121517);
  --raised-background: var(--blur-background, color-mix(in srgb, #34464e 65%, transparent) linear-gradient(#34464e, color-mix(in srgb, #34464e 65%, transparent)));
  --ribbon-background: var(--background-secondary, #232c30);
  --ribbon-background-collapsed: var(--background-primary, #121517);
  --scrollbar-active-thumb-bg: hsla(var(--color-accent-hsl), 0.2);
  --scrollbar-thumb-bg: rgba(var(--mono-rgb-100), 0.05);
  --search-clear-button-color: var(--text-muted, #8a99b1);
  --search-icon-color: var(--text-muted, #8a99b1);
  --search-result-background: var(--background-primary, #121517);
  --secondary: var(--text-accent, var(--color-accent, hsl(216, 100%, 60%)));
  --setting-group-heading-color: var(--text-normal, #bdc4ce);
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-items-background: var(--background-primary-alt, #1a1d23);
  --setting-items-border-color: var(--background-modifier-border, #34464e);
  --shadow-l: rgb(0 0 0 / 20%) 0px 8px 24px;
  --shadow-lm-only: none;
  --shadow-s: 0px 10px 21px 13px rgba(0, 0, 0, 0.1);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #8a99b1);
  --shiki-code-background: var(--code-background, #1a1d23);
  --shiki-code-comment: var(--text-faint, #575f81);
  --shiki-code-function: var(--color-green, #8BA481);
  --shiki-code-important: var(--color-orange, #F1BB8A);
  --shiki-code-keyword: var(--color-pink, #EF796A);
  --shiki-code-normal: var(--text-muted, #8a99b1);
  --shiki-code-property: var(--color-cyan, #9BC7BD);
  --shiki-code-punctuation: var(--text-muted, #8a99b1);
  --shiki-code-string: var(--color-yellow, #E4BC7F);
  --shiki-code-value: var(--color-purple, #A69AB5);
  --shiki-gutter-border-color: var(--background-modifier-border, #34464e);
  --shiki-gutter-text-color: var(--text-faint, #575f81);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #8a99b1);
  --shiki-highlight-neutral: var(--shiki-code-normal, #8a99b1);
  --shiki-terminal-dots-color: var(--text-faint, #575f81);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #585e63);
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --slider-track-background: var(--background-modifier-border, #34464e);
  --status-bar-background: var(--background-secondary, #232c30);
  --status-bar-border-color: var(--divider-color, #34464e);
  --status-bar-scroll-padding: calc(var(--status-bar-font-size) + 18px);
  --status-bar-text-color: var(--text-muted, #8a99b1);
  --suggestion-background: var(--background-primary, #121517);
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: var(--color-red, #9A453C);
  --sync-avatar-color-2: var(--color-orange, #F1BB8A);
  --sync-avatar-color-3: var(--color-yellow, #E4BC7F);
  --sync-avatar-color-4: var(--color-green, #8BA481);
  --sync-avatar-color-5: var(--color-cyan, #9BC7BD);
  --sync-avatar-color-6: var(--color-blue, #175C59);
  --sync-avatar-color-7: var(--color-purple, #A69AB5);
  --sync-avatar-color-8: var(--color-pink, #EF796A);
  --tab-background-active: var(--background-primary, #121517);
  --tab-container-background: var(--background-secondary, #232c30);
  --tab-divider-color: var(--background-modifier-border-hover, #585e63);
  --tab-font-size: var(--font-ui-small, 14px);
  --tab-outline-color: var(--divider-color, #34464e);
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-switcher-background: var(--background-secondary, #232c30);
  --tab-text-color: var(--text-faint, #575f81);
  --tab-text-color-active: var(--text-muted, #8a99b1);
  --tab-text-color-focused: var(--text-muted, #8a99b1);
  --tab-text-color-focused-active: var(--text-muted, #8a99b1);
  --tab-text-color-focused-active-current: var(--text-normal, #bdc4ce);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(216, 100%, 60%));
  --table-add-button-border-color: var(--background-modifier-border, #34464e);
  --table-border-color: var(--background-modifier-border, #34464e);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(216, 100%, 60%));
  --table-drag-handle-color: var(--text-faint, #575f81);
  --table-drag-handle-color-active: var(--text-on-accent, #cdd0da);
  --table-header-border-color: var(--table-border-color, #34464e);
  --table-header-color: var(--text-normal, #bdc4ce);
  --table-selection-border-color: var(--interactive-accent, hsl(216, 100%, 60%));
  --tag-color: var(--text-accent, hsl(216, 100%, 60%));
  --tag-color-hover: var(--text-accent, hsl(216, 100%, 60%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(211, 105%, 77.4%)));
  --text-accent: var(--color-accent, hsl(216, 100%, 60%));
  --text-accent-hover: var(--color-accent-2, hsl(211, 105%, 77.4%));
  --text-cite: 87, 161, 132;
  --text-error: var(--color-red, #9A453C);
  --text-faint: var(--color-base-50, #575f81);
  --text-muted: var(--color-base-60, #8a99b1);
  --text-normal: var(--color-base-70, #bdc4ce);
  --text-on-accent: var(--color-base-100, #cdd0da);
  --text-on-button: var(--color-base-00, #121517);
  --text-selection: hsla(var(--color-accent-hsl), 0.2);
  --text-success: var(--color-green, #8BA481);
  --text-warning: var(--color-orange, #F1BB8A);
  --textHighlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --titlebar-background: var(--background-secondary, #232c30);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, #34464e);
  --titlebar-text-color: var(--text-muted, #8a99b1);
  --titlebar-text-color-focused: var(--text-normal, #bdc4ce);
  --transition-duration: 700ms;
  --transition-duration-short: 350ms;
  --transition-ease: ease;
  --transition-props: background var(--transition-duration), 
                        border var(--transition-duration), 
                        color var(--transition-duration);
  --vault-name-color: var(--text-normal, #bdc4ce);
  --vault-name-font-size: var(--font-ui-small, 14px);
  --vault-name-font-weight: var(--font-medium, 500);
  --vault-profile-color: var(--text-normal, #bdc4ce);
  --vault-profile-color-hover: var(--vault-profile-color, #bdc4ce);
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #232c30);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(18, 21, 23));
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(52, 70, 78);
  border-right-style: dashed;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #232c30);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgb(52, 70, 78);
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body html {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--color-base-100, rgb(205, 208, 218));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 208, 218) none 0px;
  text-decoration-color: rgb(205, 208, 218);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--color-base-100, rgb(205, 208, 218));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(205, 208, 218) none 0px;
  text-decoration-color: rgb(205, 208, 218);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--color-base-100, rgb(205, 208, 218));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(205, 208, 218) none 0px;
  text-decoration-color: rgb(205, 208, 218);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--color-base-100, rgb(205, 208, 218));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 208, 218) none 0px;
  text-decoration-color: rgb(205, 208, 218);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(var(--color-accent-rgb), .2);
  color: var(--text-accent, rgb(51, 133, 255));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(51, 133, 255) none 0px;
  text-decoration-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(189, 196, 206);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(189, 196, 206) none 0px;
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(52, 70, 78);
  border-color: rgb(44, 58, 65);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgba(0, 0, 0, 0));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(138, 153, 177));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(138, 153, 177) none 0px;
  text-decoration-color: rgb(138, 153, 177);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(51, 133, 255));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 133, 255) none 0px;
  text-decoration-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--color-accent, rgb(51, 133, 255));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 700);
  outline: rgb(51, 133, 255) none 0px;
  text-decoration-color: rgb(51, 133, 255);
  transition: 0.7s;
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--text-muted, rgb(138, 153, 177));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 700);
  outline: rgb(138, 153, 177) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(138, 153, 177));
  transition: 0.7s;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body dt {
  color: rgb(189, 196, 206);
  font-weight: 500;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(189, 196, 206);
  border-left-color: rgb(189, 196, 206);
  border-right-color: rgb(189, 196, 206);
  border-top-color: rgb(189, 196, 206);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(87, 95, 129));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(35, 44, 48));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(189, 196, 206);
  border-left-color: rgb(189, 196, 206);
  border-right-color: rgb(189, 196, 206);
  border-top-color: rgb(189, 196, 206);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body table {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: rgb(189, 196, 206);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 186.109px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(52, 70, 78);
  border-left-color: rgb(52, 70, 78);
  border-right-color: rgb(52, 70, 78);
  border-top-color: rgb(52, 70, 78);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(189, 196, 206));
  font-weight: 500;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(52, 70, 78);
  border-left-color: rgb(52, 70, 78);
  border-right-color: rgb(52, 70, 78);
  border-top-color: rgb(52, 70, 78);
  border-top-left-radius: var(--radius-l, 8px);
  border-top-right-radius: var(--radius-l, 0px);
  color: var(--table-header-color, rgb(189, 196, 206));
}

html[saved-theme="dark"] body thead {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body tr {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(138, 153, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(138, 153, 177);
  border-right-color: rgb(138, 153, 177);
  border-top-color: rgb(138, 153, 177);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: var(--ec-codeFg, rgb(138, 153, 177));
  font-family: var(--ec-codeFontFml, Monaspace, monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(26, 29, 35));
  border-bottom-color: rgb(51, 133, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(51, 133, 255);
  border-left-width: 1px;
  border-right-color: rgb(51, 133, 255);
  border-right-width: 1px;
  border-top-color: rgb(51, 133, 255);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(189, 196, 206);
  border-left-color: rgb(189, 196, 206);
  border-right-color: rgb(189, 196, 206);
  border-top-color: rgb(189, 196, 206);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(189, 196, 206);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #1a1d23);
  border-bottom-color: rgb(189, 196, 206);
  border-left-color: rgb(189, 196, 206);
  border-right-color: rgb(189, 196, 206);
  border-top-color: rgb(189, 196, 206);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(205, 208, 218);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(205, 208, 218);
  border-radius: 12px;
  border-right-color: rgb(205, 208, 218);
  border-top-color: rgb(205, 208, 218);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(189, 196, 206);
  border-left-color: rgb(189, 196, 206);
  border-right-color: rgb(189, 196, 206);
  border-top-color: rgb(189, 196, 206);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(26, 29, 35));
  border-bottom-color: rgb(138, 153, 177);
  border-left-color: rgb(138, 153, 177);
  border-right-color: rgb(138, 153, 177);
  border-top-color: rgb(138, 153, 177);
  border-top-left-radius: var(--radius-l, 8px);
  border-top-right-radius: var(--radius-l, 8px);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(189, 196, 206);
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(189, 196, 206);
  border-left-color: rgb(51, 133, 255);
  border-right-color: rgb(189, 196, 206);
  border-top-color: rgb(189, 196, 206);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(189, 196, 206);
  border-left-color: rgb(189, 196, 206);
  border-right-color: rgb(189, 196, 206);
  border-top-color: rgb(189, 196, 206);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(44, 58, 65);
  border-left-color: rgb(44, 58, 65);
  border-right-color: rgb(44, 58, 65);
  border-top-color: rgb(44, 58, 65);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
  transition: 0.3s;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(87, 95, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(87, 95, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(189, 196, 206);
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(23, 92, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(87, 95, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 188, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 188, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 154, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(241, 187, 138);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 154, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 164, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 188, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 188, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 154, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 164, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 164, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 164, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 133, 255);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgb(23, 92, 89);
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(23, 92, 89);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 155, 199, 189);
  background: rgba(155, 199, 189, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(155, 199, 189);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(155, 199, 189);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(155, 199, 189);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(155, 199, 189);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgb(23, 92, 89);
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(23, 92, 89);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 154, 69, 60);
  background: rgba(154, 69, 60, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(154, 69, 60);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(154, 69, 60);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(154, 69, 60);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(154, 69, 60);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgb(23, 92, 89);
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(23, 92, 89);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 154, 69, 60);
  background: rgba(154, 69, 60, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(154, 69, 60);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(154, 69, 60);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(154, 69, 60);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(154, 69, 60);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgb(23, 92, 89);
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(23, 92, 89);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 166, 154, 181);
  background: rgba(166, 154, 181, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(166, 154, 181);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(166, 154, 181);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(166, 154, 181);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(166, 154, 181);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgb(23, 92, 89);
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(23, 92, 89);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 154, 69, 60);
  background: rgba(154, 69, 60, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(154, 69, 60);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(154, 69, 60);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(154, 69, 60);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(154, 69, 60);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgb(23, 92, 89);
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(23, 92, 89);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 23, 92, 89);
  background: rgba(23, 92, 89, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(23, 92, 89);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(23, 92, 89);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgb(23, 92, 89);
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(23, 92, 89);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 23, 92, 89);
  background: rgba(23, 92, 89, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(23, 92, 89);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(23, 92, 89);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgb(23, 92, 89);
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(23, 92, 89);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 241, 187, 138);
  background: rgba(241, 187, 138, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(241, 187, 138);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(241, 187, 138);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(241, 187, 138);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(241, 187, 138);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgb(23, 92, 89);
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(23, 92, 89);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(158, 158, 158);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(158, 158, 158);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgb(23, 92, 89);
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(23, 92, 89);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 139, 164, 129);
  background: rgba(139, 164, 129, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(139, 164, 129);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(139, 164, 129);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(139, 164, 129);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(139, 164, 129);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgb(23, 92, 89);
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(23, 92, 89);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 155, 199, 189);
  background: rgba(155, 199, 189, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(155, 199, 189);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(155, 199, 189);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(155, 199, 189);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(155, 199, 189);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgb(23, 92, 89);
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(23, 92, 89);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 23, 92, 89);
  background: rgba(23, 92, 89, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(23, 92, 89);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(23, 92, 89);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgb(23, 92, 89);
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(23, 92, 89);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 241, 187, 138);
  background: rgba(241, 187, 138, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(241, 187, 138);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(241, 187, 138);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(241, 187, 138);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(241, 187, 138);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgb(23, 92, 89);
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(23, 92, 89);
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
  background-color: rgb(44, 58, 65);
  border-bottom-color: rgb(52, 70, 78);
  border-left-color: rgb(52, 70, 78);
  border-right-color: rgb(52, 70, 78);
  border-top-color: rgb(52, 70, 78);
  border-top-left-radius: var(--radius-l, 5px);
  border-top-right-radius: var(--radius-l, 5px);
  color: var(--text-normal, rgb(189, 196, 206));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(24, 27, 32));
  border-bottom-color: rgb(52, 70, 78);
  border-left-color: rgb(52, 70, 78);
  border-right-color: rgb(52, 70, 78);
  border-top-color: rgb(52, 70, 78);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.2) 0px 8px 24px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(189, 196, 206);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(189, 196, 206) none 0px;
  text-decoration-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(44, 58, 65);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 58, 65);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(44, 58, 65);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(44, 58, 65);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(35, 44, 48));
  color: rgb(189, 196, 206);
  font-weight: 500;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(52, 70, 78);
  border-left-color: rgb(52, 70, 78);
  border-right-color: rgb(52, 70, 78);
  border-top-color: rgb(52, 70, 78);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(18, 21, 23);
  border-bottom-color: rgb(52, 70, 78);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(52, 70, 78);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(52, 70, 78);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(52, 70, 78);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-secondary, rgb(35, 44, 48));
  border-bottom-color: rgb(44, 58, 65);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 58, 65);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(44, 58, 65);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(44, 58, 65);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(35, 44, 48));
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(216, 100%, 60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(216, 100%, 60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(216, 100%, 60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(216, 100%, 60%, 0.15));
  --pill-color: var(--tag-color, hsl(216, 100%, 60%));
  --pill-color-hover: var(--tag-color-hover, hsl(216, 100%, 60%));
  --pill-color-remove: var(--tag-color, hsl(216, 100%, 60%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(216, 100%, 60%));
  background-color: var(--pill-background, rgba(51, 133, 255, 0.1));
  border-bottom-color: rgba(51, 133, 255, 0.15);
  border-left-color: rgba(51, 133, 255, 0.15);
  border-right-color: rgba(51, 133, 255, 0.15);
  border-top-color: rgba(51, 133, 255, 0.15);
  border-top-left-radius: var(--radius-l, 28px);
  border-top-right-radius: var(--radius-l, 28px);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 500);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(51, 133, 255);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 900);
  color: var(--h1-color, rgb(205, 208, 218));
  font-family: var(--font-title, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(205, 208, 218));
  font-size: var(--inline-title-size, 80px);
  font-weight: var(--inline-title-weight, 900);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 800);
  color: var(--h2-color, rgb(189, 196, 206));
  font-family: var(--h2-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(205, 208, 218));
  font-family: var(--inline-title-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 700);
  color: var(--h3-color, rgb(189, 196, 206));
  font-family: var(--h3-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 600);
  color: var(--h4-color, rgb(189, 196, 206));
  font-family: var(--h4-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 600);
  color: var(--h5-color, rgb(189, 196, 206));
  font-family: var(--h5-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 500);
  color: var(--h6-color, rgb(189, 196, 206));
  font-family: var(--h6-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(52, 70, 78);
  border-left-color: rgb(52, 70, 78);
  border-right-color: rgb(52, 70, 78);
  border-right-style: dashed;
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 23, 92, 89);
  border-bottom-color: rgb(23, 92, 89);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(23, 92, 89);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(23, 92, 89);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(138, 153, 177));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(138, 153, 177));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(189, 196, 206);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--text-normal, rgb(189, 196, 206));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(35, 44, 48));
  border-bottom-color: rgb(44, 58, 65);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(44, 58, 65);
  border-right-color: rgb(44, 58, 65);
  border-right-width: 1px;
  border-top-color: rgb(44, 58, 65);
  border-top-left-radius: var(--radius-l, 8px);
  border-top-right-radius: var(--radius-l, 8px);
  color: var(--status-bar-text-color, rgb(138, 153, 177));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(138, 153, 177);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(189, 196, 206);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(189, 196, 206);
  border-left-color: rgb(189, 196, 206);
  border-right-color: rgb(189, 196, 206);
  border-top-color: rgb(189, 196, 206);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(138, 153, 177));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: var(--text-normal, rgb(189, 196, 206));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(189, 196, 206);
  border-left-color: rgb(189, 196, 206);
  border-right-color: rgb(189, 196, 206);
  border-top-color: rgb(189, 196, 206);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: var(--text-normal, rgb(189, 196, 206));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(138, 153, 177));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(189, 196, 206);
  border-left-color: rgb(189, 196, 206);
  border-right-color: rgb(189, 196, 206);
  border-top-color: rgb(189, 196, 206);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(189, 196, 206);
  border-left-color: rgb(189, 196, 206);
  border-right-color: rgb(189, 196, 206);
  border-top-color: rgb(189, 196, 206);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
  color: var(--text-normal, rgb(189, 196, 206));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(189, 196, 206);
  stroke: rgb(189, 196, 206);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(138, 153, 177);
  border-left-color: rgb(138, 153, 177);
  border-right-color: rgb(138, 153, 177);
  border-top-color: rgb(138, 153, 177);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
  color: rgb(138, 153, 177);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(87, 95, 129));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(189, 196, 206);
  box-shadow: 0px 0px 0px 4px var(--text-normal);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(189, 196, 206));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(35, 44, 48));
  border-color: rgb(189, 196, 206);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(52, 70, 78);
  color: var(--table-header-color, rgb(189, 196, 206));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(52, 70, 78);
  border-left-color: rgb(52, 70, 78);
  border-right-color: rgb(52, 70, 78);
  border-top-color: rgb(52, 70, 78);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: var(--text-muted, rgb(138, 153, 177));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(138, 153, 177);
  border-left-color: rgb(138, 153, 177);
  border-right-color: rgb(138, 153, 177);
  border-top-color: rgb(138, 153, 177);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: rgb(138, 153, 177);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(52, 70, 78);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(138, 153, 177);
  font-weight: 500;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(216, 100%, 60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(216, 100%, 60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(216, 100%, 60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(216, 100%, 60%, 0.15));
  --pill-color: var(--tag-color, hsl(216, 100%, 60%));
  --pill-color-hover: var(--tag-color-hover, hsl(216, 100%, 60%));
  --pill-color-remove: var(--tag-color, hsl(216, 100%, 60%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(216, 100%, 60%));
  background-color: var(--pill-background, rgba(51, 133, 255, 0.1));
  color: var(--pill-color, rgb(51, 133, 255));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(138, 153, 177);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(18, 21, 23));
  color: var(--text-normal, rgb(189, 196, 206));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(189, 196, 206);
  border-left-color: rgb(189, 196, 206);
  border-right-color: rgb(189, 196, 206);
  border-top-color: rgb(189, 196, 206);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(189, 196, 206);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(189, 196, 206);
  border-left-color: rgb(189, 196, 206);
  border-right-color: rgb(189, 196, 206);
  border-top-color: rgb(189, 196, 206);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(35, 44, 48));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(189, 196, 206));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(189, 196, 206);
  border-left-color: rgb(189, 196, 206);
  border-right-color: rgb(189, 196, 206);
  border-top-color: rgb(189, 196, 206);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(51, 133, 255);
  border-left-color: rgb(51, 133, 255);
  border-right-color: rgb(51, 133, 255);
  border-top-color: rgb(51, 133, 255);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: var(--text-normal, rgb(51, 133, 255));
  font-family: var(--font-mono, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(51, 133, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(51, 133, 255);
  border-right-color: rgb(51, 133, 255);
  border-top-color: rgb(51, 133, 255);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  color: var(--color-accent, rgb(51, 133, 255));
  font-family: var(--font-monospace, Monaspace, monospace);
  font-size: var(--code-size, 12px);
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(189, 196, 206);
  border-left-color: rgb(189, 196, 206);
  border-right-color: rgb(189, 196, 206);
  border-top-color: rgb(189, 196, 206);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body sub {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body summary {
  color: rgb(189, 196, 206);
  font-weight: 500;
}

html[saved-theme="dark"] body sup {
  color: rgb(189, 196, 206);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(51, 133, 255, 0.1));
  border-bottom-color: rgba(51, 133, 255, 0.15);
  border-left-color: rgba(51, 133, 255, 0.15);
  border-right-color: rgba(51, 133, 255, 0.15);
  border-top-color: rgba(51, 133, 255, 0.15);
  border-top-left-radius: var(--radius-l, 24.5px);
  border-top-right-radius: var(--radius-l, 24.5px);
  color: var(--tag-color, rgb(51, 133, 255));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 210;
  --accent-l: 39%;
  --accent-s: 100%;
  --ancestor-editor-color: var(--text-normal, #1a1f23);
  --aside-background: transparent;
  --aside-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --aside-border-color: var(--background-modifier-border, #8aa3b1);
  --aside-text-color: var(--text-muted, #34414e);
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: var(--color-base-30, #8aa3b1);
  --background-modifier-border-focus: var(--color-base-40, #8aa3b1);
  --background-modifier-border-hover: var(--color-base-35, #3a4c5a);
  --background-modifier-error: var(--color-red, #9a453c);
  --background-modifier-error-hover: var(--color-red, #9a453c);
  --background-modifier-error-rgb: var(--color-red-rgb, 154, 69, 60);
  --background-modifier-form-field: var(--color-base-00, #cdd5da);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #cdd5da);
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.075);
  --background-modifier-success: var(--color-green, #61715b);
  --background-modifier-success-rgb: var(--color-green-rgb, 97, 113, 91);
  --background-primary: var(--color-base-00, #cdd5da);
  --background-primary-alt: var(--color-base-10, #9cacb4);
  --background-primary-pre-alt: var(--color-base-05, #c0c8ce);
  --background-scondary-alt: var(--color-base-60, #34414e);
  --background-secondary: var(--color-base-20, #a6b0b9);
  --background-secondary-alt: var(--color-base-05, #c0c8ce);
  --bases-cards-background: var(--background-primary, #cdd5da);
  --bases-cards-cover-background: var(--background-primary-alt, #9cacb4);
  --bases-embed-border-color: var(--background-modifier-border, #8aa3b1);
  --bases-group-heading-property-color: var(--text-muted, #34414e);
  --bases-table-border-color: var(--table-border-color, #8aa3b1);
  --bases-table-cell-background-active: var(--background-primary, #cdd5da);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #9cacb4);
  --bases-table-cell-background-selected: var(--table-selection, hsla(210, 100%, 39%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #9cacb4);
  --bases-table-header-background: var(--background-primary, #cdd5da);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --bases-table-header-color: var(--text-muted, #34414e);
  --bases-table-summary-background: var(--background-primary, #cdd5da);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --bb-border: 1px solid var(--color-base-30);
  --bb-border-alt: 1px solid var(--color-base-25);
  --bb-border-dashed: 1px dashed var(--color-base-30);
  --bb-border-high-contrast: 1px solid var(--color-base-60);
  --bb-border-transparent: 1px solid transparent;
  --bb-shadow: -33px 24px 64px -8px hsla(var(--color-accent-hsl), 0.1), 33px 12px 64px -8px hsla(calc(var(--accent-h) - 175), calc(var(--accent-s)*1.05), calc(var(--accent-l)*1.29), 0.1);
  --blockquote-border-color: var(--interactive-accent, hsl(209, 101%, 41.925%));
  --callout-bug: var(--color-red-rgb, 154, 69, 60);
  --callout-cite: 87, 61, 132;
  --callout-default: var(--color-blue-rgb, 51, 83, 138);
  --callout-error: var(--color-red-rgb, 154, 69, 60);
  --callout-example: var(--color-purple-rgb, 95, 81, 112);
  --callout-fail: var(--color-red-rgb, 154, 69, 60);
  --callout-important: var(--color-cyan-rgb, 16, 77, 112);
  --callout-info: var(--color-blue-rgb, 51, 83, 138);
  --callout-question: var(--color-orange-rgb, 160, 116, 75);
  --callout-success: var(--color-green-rgb, 97, 113, 91);
  --callout-summary: var(--color-cyan-rgb, 16, 77, 112);
  --callout-tip: var(--color-cyan-rgb, 16, 77, 112);
  --callout-todo: var(--color-blue-rgb, 51, 83, 138);
  --callout-warning: var(--color-orange-rgb, 160, 116, 75);
  --canvas-background: var(--background-primary, #cdd5da);
  --canvas-card-label-color: var(--text-faint, #3a4d5a);
  --canvas-color: 10, 10, 10;
  --canvas-color-1: var(--color-red-rgb, 154, 69, 60);
  --canvas-color-2: var(--color-orange-rgb, 160, 116, 75);
  --canvas-color-3: var(--color-yellow-rgb, 154, 143, 81);
  --canvas-color-4: var(--color-green-rgb, 97, 113, 91);
  --canvas-color-5: var(--color-cyan-rgb, 16, 77, 112);
  --canvas-color-6: var(--color-purple-rgb, 95, 81, 112);
  --canvas-dot-pattern: var(--color-base-50, #3a4d5a);
  --caret-color: var(--text-normal, #1a1f23);
  --checkbox-border-color: var(--text-faint, #3a4d5a);
  --checkbox-border-color-hover: var(--text-muted, #34414e);
  --checkbox-color: var(--interactive-accent, hsl(209, 101%, 41.925%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(207, 102%, 44.85%));
  --checkbox-marker-color: var(--background-primary, #cdd5da);
  --checklist-done-color: var(--text-muted, #34414e);
  --code-background: var(--background-primary-alt, #9cacb4);
  --code-border-color: var(--background-modifier-border, #8aa3b1);
  --code-bracket-background: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --code-comment: var(--text-faint, #3a4d5a);
  --code-function: var(--color-yellow, #9a8f51);
  --code-important: var(--color-orange, #a0744b);
  --code-keyword: var(--color-pink, #8d483f);
  --code-normal: var(--text-muted, #34414e);
  --code-operator: var(--color-red, #9a453c);
  --code-property: var(--color-cyan, #104d70);
  --code-punctuation: var(--text-muted, #34414e);
  --code-string: var(--color-green, #61715b);
  --code-tag: var(--color-red, #9a453c);
  --code-value: var(--color-purple, #5f5170);
  --collapse-icon-color: var(--text-faint, #3a4d5a);
  --collapse-icon-color-collapsed: var(--color-accent, hsl(210, 100%, 39%));
  --color-accent: hsl(var(--accent-h),
        var(--accent-s),
        var(--accent-l));
  --color-accent-2: hsl(calc(var(--accent-h) - 3),
        calc(var(--accent-s)*1.02),
        calc(var(--accent-l)*1.15));
  --color-accent-3: hsl(calc(var(--accent-h) - 175),
        calc(var(--accent-s)*1.55),
        calc(var(--accent-l)*1.29));
  --color-accent-hsl: var(--accent-h),
        var(--accent-s),
        var(--accent-l);
  --color-accent-rgb: var(--color-blue-rgb, 51, 83, 138);
  --color-base-00: #cdd5da;
  --color-base-05: #c0c8ce;
  --color-base-10: #9cacb4;
  --color-base-100: #090a0b;
  --color-base-20: #a6b0b9;
  --color-base-25: #7e95a5;
  --color-base-30: #8aa3b1;
  --color-base-35: #3a4c5a;
  --color-base-40: var(--color-base-30, #8aa3b1);
  --color-base-50: #3a4d5a;
  --color-base-60: #34414e;
  --color-base-70: #1a1f23;
  --color-blue: #33538a;
  --color-blue-hsl: 218, 45%, 37%;
  --color-blue-rgb: 51, 83, 138;
  --color-cyan: #104d70;
  --color-cyan-hsl: 202, 75%, 25%;
  --color-cyan-rgb: 16, 77, 112;
  --color-green: #61715b;
  --color-green-hsl: 104, 11%, 40%;
  --color-green-rgb: 97, 113, 91;
  --color-orange: #a0744b;
  --color-orange-hsl: 29, 36%, 46%;
  --color-orange-rgb: 160, 116, 75;
  --color-pink: #8d483f;
  --color-pink-hsl: 7, 38%, 40%;
  --color-pink-rgb: 141, 72, 63;
  --color-purple: #5f5170;
  --color-purple-hsl: 267, 16%, 38%;
  --color-purple-rgb: 95, 81, 112;
  --color-red: #9a453c;
  --color-red-hsl: 6, 44%, 42%;
  --color-red-rgb: 154, 69, 60;
  --color-yellow: #9a8f51;
  --color-yellow-hsl: 51, 31%, 46%;
  --color-yellow-rgb: 154, 143, 81;
  --dark: var(--text-normal, var(--color-base-70, #1a1f23));
  --darkgray: var(--text-normal, var(--color-base-70, #1a1f23));
  --divider-color: var(--background-modifier-border, #8aa3b1);
  --divider-color-hover: var(--interactive-accent, hsl(209, 101%, 41.925%));
  --dropdown-background: var(--interactive-normal, #cdd5da);
  --dropdown-background-hover: var(--interactive-hover, #9cacb4);
  --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border),
        inset 0 0 0 1px var(--background-modifier-border);
  --file-header-background: var(--background-primary, #cdd5da);
  --file-header-background-focused: var(--background-primary, #cdd5da);
  --file-header-font: var(--font-interface, "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 14px);
  --file-margins: var(--size-4-8, 32px);
  --flair-background: var(--interactive-normal, #cdd5da);
  --flair-color: var(--text-normal, #1a1f23);
  --font-interface-theme: "Aspekta", sans-serif;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --footnote-divider-color: var(--metadata-divider-color, #8aa3b1);
  --footnote-id-color: var(--text-muted, #34414e);
  --footnote-id-color-no-occurrences: var(--text-faint, #3a4d5a);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(0, 0, 0, 0.075));
  --graph-node: var(--text-muted, #34414e);
  --graph-node-attachment: var(--color-accent-1, hsl(209, 101%, 41.925%));
  --graph-node-focused: var(--background-modifier-border-focus, #8aa3b1);
  --graph-node-tag: var(--color-accent, hsl(210, 100%, 39%));
  --graph-node-unresolved: var(--text-faint, #3a4d5a);
  --graph-text: var(--text-normal, #1a1f23);
  --gray: var(--text-muted, var(--color-base-60, #34414e));
  --h1-color: var(--color-base-100, #090a0b);
  --h1-size: 3.5em;
  --h1-weight: 900;
  --h2-size: 1.842em;
  --h2-weight: 800;
  --h3-size: 1.3572em;
  --h3-weight: 700;
  --h4-size: 1.250em;
  --h4-weight: 600;
  --h5-size: 1em;
  --h5-weight: 600;
  --h6-size: 0.7368em;
  --h6-weight: 500;
  --heading-formatting: var(--text-faint, #3a4d5a);
  --highlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --hr-color: var(--background-modifier-border, #8aa3b1);
  --icon-color: var(--text-muted, #34414e);
  --icon-color-active: var(--color-accent, hsl(210, 100%, 39%));
  --icon-color-focused: var(--text-normal, #1a1f23);
  --icon-color-hover: var(--text-muted, #34414e);
  --inline-title-color: var(--h1-color, #090a0b);
  --inline-title-size: var(--h1-size, clamp(2.5rem, 8vw - 4rem, 5rem));
  --inline-title-weight: var(--h1-weight, 900);
  --input-date-separator: var(--text-faint, #3a4d5a);
  --input-placeholder-color: var(--text-faint, #3a4d5a);
  --interactive-accent: var(--color-accent-1, hsl(209, 101%, 41.925%));
  --interactive-accent-hover: var(--color-accent-2, hsl(207, 102%, 44.85%));
  --interactive-accent-hsl: var(--color-accent-hsl, 210, 100%, 39%);
  --interactive-hover: var(--color-base-10, #9cacb4);
  --interactive-normal: var(--color-base-00, #cdd5da);
  --light: var(--background-primary, var(--color-base-00, #cdd5da));
  --lightgray: var(--background-secondary, var(--color-base-20, #a6b0b9));
  --link-color: var(--text-accent, hsl(210, 100%, 39%));
  --link-color-hover: var(--text-accent-hover, hsl(207, 102%, 44.85%));
  --link-external-color: var(--text-accent, hsl(210, 100%, 39%));
  --link-external-color-hover: var(--text-accent-hover, hsl(207, 102%, 44.85%));
  --link-unresolved-color: var(--text-accent, hsl(210, 100%, 39%));
  --list-marker-color: var(--text-faint, #3a4d5a);
  --list-marker-color-collapsed: var(--text-accent, hsl(210, 100%, 39%));
  --list-marker-color-hover: var(--text-muted, #34414e);
  --menu-background: var(--background-secondary, #a6b0b9);
  --menu-border-color: var(--background-modifier-border-hover, #3a4c5a);
  --menu-shadow: var(--shadow-s, rgb(0 0 0 / 4%) 0px 3px 5px);
  --metadata-border-color: var(--background-modifier-border, #8aa3b1);
  --metadata-divider-color: var(--background-modifier-border, #8aa3b1);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --metadata-input-font: var(--font-interface, "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #1a1f23);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --metadata-label-font: var(--font-interface, "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #34414e);
  --metadata-label-text-color-hover: var(--text-muted, #34414e);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --modal-background: var(--background-primary, #cdd5da);
  --nav-collapse-icon-color: var(--collapse-icon-color, #3a4d5a);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #3a4d5a);
  --nav-heading-color: var(--text-normal, #1a1f23);
  --nav-heading-color-collapsed: var(--text-faint, #3a4d5a);
  --nav-heading-color-collapsed-hover: var(--text-muted, #34414e);
  --nav-heading-color-hover: var(--text-normal, #1a1f23);
  --nav-item-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --nav-item-color: var(--text-muted, #34414e);
  --nav-item-color-active: var(--text-normal, #1a1f23);
  --nav-item-color-highlighted: var(--text-accent, hsl(210, 100%, 39%));
  --nav-item-color-hover: var(--text-normal, #1a1f23);
  --nav-item-color-selected: var(--text-normal, #1a1f23);
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, #3a4d5a);
  --nav-tag-color-active: var(--text-muted, #34414e);
  --nav-tag-color-hover: var(--text-muted, #34414e);
  --o-h1-color: var(--background-modifier-border, #8aa3b1);
  --o-h2-color: var(--background-modifier-border, #8aa3b1);
  --o-h3-color: var(--background-modifier-border, #8aa3b1);
  --o-h4-color: var(--background-modifier-border, #8aa3b1);
  --o-h5-color: var(--background-modifier-border, #8aa3b1);
  --o-h6-color: var(--background-modifier-border, #8aa3b1);
  --pdf-background: var(--background-primary, #cdd5da);
  --pdf-page-background: var(--background-primary, #cdd5da);
  --pdf-sidebar-background: var(--background-primary, #cdd5da);
  --pill-border-color: var(--background-modifier-border, #8aa3b1);
  --pill-border-color-hover: var(--background-modifier-border-hover, #3a4c5a);
  --pill-color: var(--text-muted, #34414e);
  --pill-color-hover: var(--text-normal, #1a1f23);
  --pill-color-remove: var(--text-faint, #3a4d5a);
  --pill-color-remove-hover: var(--text-accent, hsl(210, 100%, 39%));
  --prompt-background: var(--background-primary, #cdd5da);
  --raised-background: var(--blur-background, color-mix(in srgb, #cdd5da 65%, transparent) linear-gradient(#cdd5da, color-mix(in srgb, #cdd5da 65%, transparent)));
  --ribbon-background: var(--background-secondary, #a6b0b9);
  --ribbon-background-collapsed: var(--background-primary, #cdd5da);
  --scrollbar-active-thumb-bg: hsla(var(--color-accent-hsl), 0.2);
  --scrollbar-thumb-bg: rgba(var(--mono-rgb-100), 0.05);
  --search-clear-button-color: var(--text-muted, #34414e);
  --search-icon-color: var(--text-muted, #34414e);
  --search-result-background: var(--background-primary, #cdd5da);
  --secondary: var(--text-accent, var(--color-accent, hsl(210, 100%, 39%)));
  --setting-group-heading-color: var(--text-normal, #1a1f23);
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-items-background: var(--background-primary-alt, #9cacb4);
  --setting-items-border-color: var(--background-modifier-border, #8aa3b1);
  --shadow-l: rgb(149 157 165 / 20%) 0px 8px 24px;
  --shadow-lm-only: rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px;
  --shadow-s: rgb(0 0 0 / 4%) 0px 3px 5px;
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #34414e);
  --shiki-code-background: var(--code-background, #9cacb4);
  --shiki-code-comment: var(--text-faint, #3a4d5a);
  --shiki-code-function: var(--color-green, #61715b);
  --shiki-code-important: var(--color-orange, #a0744b);
  --shiki-code-keyword: var(--color-pink, #8d483f);
  --shiki-code-normal: var(--text-muted, #34414e);
  --shiki-code-property: var(--color-cyan, #104d70);
  --shiki-code-punctuation: var(--text-muted, #34414e);
  --shiki-code-string: var(--color-yellow, #9a8f51);
  --shiki-code-value: var(--color-purple, #5f5170);
  --shiki-gutter-border-color: var(--background-modifier-border, #8aa3b1);
  --shiki-gutter-text-color: var(--text-faint, #3a4d5a);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #34414e);
  --shiki-highlight-neutral: var(--shiki-code-normal, #34414e);
  --shiki-terminal-dots-color: var(--text-faint, #3a4d5a);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #3a4c5a);
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --slider-track-background: var(--background-modifier-border, #8aa3b1);
  --status-bar-background: var(--background-secondary, #a6b0b9);
  --status-bar-border-color: var(--divider-color, #8aa3b1);
  --status-bar-scroll-padding: calc(var(--status-bar-font-size) + 18px);
  --status-bar-text-color: var(--text-muted, #34414e);
  --suggestion-background: var(--background-primary, #cdd5da);
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: var(--color-red, #9a453c);
  --sync-avatar-color-2: var(--color-orange, #a0744b);
  --sync-avatar-color-3: var(--color-yellow, #9a8f51);
  --sync-avatar-color-4: var(--color-green, #61715b);
  --sync-avatar-color-5: var(--color-cyan, #104d70);
  --sync-avatar-color-6: var(--color-blue, #33538a);
  --sync-avatar-color-7: var(--color-purple, #5f5170);
  --sync-avatar-color-8: var(--color-pink, #8d483f);
  --tab-background-active: var(--background-primary, #cdd5da);
  --tab-container-background: var(--background-secondary, #a6b0b9);
  --tab-divider-color: var(--background-modifier-border-hover, #3a4c5a);
  --tab-font-size: var(--font-ui-small, 14px);
  --tab-outline-color: var(--divider-color, #8aa3b1);
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-switcher-background: var(--background-secondary, #a6b0b9);
  --tab-text-color: var(--text-faint, #3a4d5a);
  --tab-text-color-active: var(--text-muted, #34414e);
  --tab-text-color-focused: var(--text-muted, #34414e);
  --tab-text-color-focused-active: var(--text-muted, #34414e);
  --tab-text-color-focused-active-current: var(--text-normal, #1a1f23);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(210, 100%, 39%));
  --table-add-button-border-color: var(--background-modifier-border, #8aa3b1);
  --table-border-color: var(--background-modifier-border, #8aa3b1);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(209, 101%, 41.925%));
  --table-drag-handle-color: var(--text-faint, #3a4d5a);
  --table-drag-handle-color-active: var(--text-on-accent, #090a0b);
  --table-header-border-color: var(--table-border-color, #8aa3b1);
  --table-header-color: var(--text-normal, #1a1f23);
  --table-selection-border-color: var(--interactive-accent, hsl(209, 101%, 41.925%));
  --tag-color: var(--text-accent, hsl(210, 100%, 39%));
  --tag-color-hover: var(--text-accent, hsl(210, 100%, 39%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(207, 102%, 44.85%)));
  --text-accent: var(--color-accent, hsl(210, 100%, 39%));
  --text-accent-hover: var(--color-accent-2, hsl(207, 102%, 44.85%));
  --text-cite: 87, 161, 132;
  --text-error: var(--color-red, #9a453c);
  --text-faint: var(--color-base-50, #3a4d5a);
  --text-muted: var(--color-base-60, #34414e);
  --text-normal: var(--color-base-70, #1a1f23);
  --text-on-accent: var(--color-base-100, #090a0b);
  --text-on-button: var(--color-base-00, #cdd5da);
  --text-success: var(--color-green, #61715b);
  --text-warning: var(--color-orange, #a0744b);
  --textHighlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --titlebar-background: var(--background-secondary, #a6b0b9);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, #8aa3b1);
  --titlebar-text-color: var(--text-muted, #34414e);
  --titlebar-text-color-focused: var(--text-normal, #1a1f23);
  --transition-duration: 700ms;
  --transition-duration-short: 350ms;
  --transition-ease: ease;
  --transition-props: background var(--transition-duration), 
                        border var(--transition-duration), 
                        color var(--transition-duration);
  --vault-name-color: var(--text-normal, #1a1f23);
  --vault-name-font-size: var(--font-ui-small, 14px);
  --vault-name-font-weight: var(--font-medium, 500);
  --vault-profile-color: var(--text-normal, #1a1f23);
  --vault-profile-color-hover: var(--vault-profile-color, #1a1f23);
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #a6b0b9);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(205, 213, 218));
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(138, 163, 177);
  border-right-style: dashed;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #a6b0b9);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgb(138, 163, 177);
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body html {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--color-base-100, rgb(9, 10, 11));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(9, 10, 11) none 0px;
  text-decoration-color: rgb(9, 10, 11);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--color-base-100, rgb(9, 10, 11));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(9, 10, 11) none 0px;
  text-decoration-color: rgb(9, 10, 11);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--color-base-100, rgb(9, 10, 11));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(9, 10, 11) none 0px;
  text-decoration-color: rgb(9, 10, 11);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--color-base-100, rgb(9, 10, 11));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(9, 10, 11) none 0px;
  text-decoration-color: rgb(9, 10, 11);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(var(--color-accent-rgb), .2);
  color: var(--text-accent, rgb(0, 99, 199));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(0, 99, 199) none 0px;
  text-decoration-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body del {
  color: rgb(26, 31, 35);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(26, 31, 35) none 0px;
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(138, 163, 177);
  border-color: rgb(126, 149, 165);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgba(0, 0, 0, 0));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(52, 65, 78));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(52, 65, 78) none 0px;
  text-decoration-color: rgb(52, 65, 78);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(0, 99, 199));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 99, 199) none 0px;
  text-decoration-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--color-accent, rgb(0, 99, 199));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 700);
  outline: rgb(0, 99, 199) none 0px;
  text-decoration-color: rgb(0, 99, 199);
  transition: 0.7s;
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--text-muted, rgb(52, 65, 78));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 700);
  outline: rgb(52, 65, 78) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(52, 65, 78));
  transition: 0.7s;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body dt {
  color: rgb(26, 31, 35);
  font-weight: 500;
}

html[saved-theme="light"] body ol > li {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body ul > li {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(26, 31, 35);
  border-left-color: rgb(26, 31, 35);
  border-right-color: rgb(26, 31, 35);
  border-top-color: rgb(26, 31, 35);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(58, 77, 90));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(166, 176, 185));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(26, 31, 35);
  border-left-color: rgb(26, 31, 35);
  border-right-color: rgb(26, 31, 35);
  border-top-color: rgb(26, 31, 35);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body table {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: rgb(26, 31, 35);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 186.109px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(138, 163, 177);
  border-left-color: rgb(138, 163, 177);
  border-right-color: rgb(138, 163, 177);
  border-top-color: rgb(138, 163, 177);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(26, 31, 35));
  font-weight: 500;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(138, 163, 177);
  border-left-color: rgb(138, 163, 177);
  border-right-color: rgb(138, 163, 177);
  border-top-color: rgb(138, 163, 177);
  border-top-left-radius: var(--radius-l, 8px);
  border-top-right-radius: var(--radius-l, 0px);
  color: var(--table-header-color, rgb(26, 31, 35));
}

html[saved-theme="light"] body thead {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body tr {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(52, 65, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(52, 65, 78);
  border-right-color: rgb(52, 65, 78);
  border-top-color: rgb(52, 65, 78);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: var(--ec-codeFg, rgb(52, 65, 78));
  font-family: var(--ec-codeFontFml, Monaspace, monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(156, 172, 180));
  border-bottom-color: rgb(0, 99, 199);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 99, 199);
  border-left-width: 1px;
  border-right-color: rgb(0, 99, 199);
  border-right-width: 1px;
  border-top-color: rgb(0, 99, 199);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(26, 31, 35);
  border-left-color: rgb(26, 31, 35);
  border-right-color: rgb(26, 31, 35);
  border-top-color: rgb(26, 31, 35);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body figcaption {
  color: rgb(26, 31, 35);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #9cacb4);
  border-bottom-color: rgb(26, 31, 35);
  border-left-color: rgb(26, 31, 35);
  border-right-color: rgb(26, 31, 35);
  border-top-color: rgb(26, 31, 35);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(9, 10, 11);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(9, 10, 11);
  border-radius: 12px;
  border-right-color: rgb(9, 10, 11);
  border-top-color: rgb(9, 10, 11);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(26, 31, 35);
  border-left-color: rgb(26, 31, 35);
  border-right-color: rgb(26, 31, 35);
  border-top-color: rgb(26, 31, 35);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(156, 172, 180));
  border-bottom-color: rgb(52, 65, 78);
  border-left-color: rgb(52, 65, 78);
  border-right-color: rgb(52, 65, 78);
  border-top-color: rgb(52, 65, 78);
  border-top-left-radius: var(--radius-l, 8px);
  border-top-right-radius: var(--radius-l, 8px);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(26, 31, 35);
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(26, 31, 35);
  border-left-color: rgb(0, 110, 214);
  border-right-color: rgb(26, 31, 35);
  border-top-color: rgb(26, 31, 35);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(26, 31, 35);
  border-left-color: rgb(26, 31, 35);
  border-right-color: rgb(26, 31, 35);
  border-top-color: rgb(26, 31, 35);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(126, 149, 165);
  border-left-color: rgb(126, 149, 165);
  border-right-color: rgb(126, 149, 165);
  border-top-color: rgb(126, 149, 165);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
  transition: 0.3s;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(58, 77, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(58, 77, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(26, 31, 35);
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 83, 138);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(58, 77, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 143, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 143, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(95, 81, 112);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(160, 116, 75);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(95, 81, 112);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(97, 113, 91);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 143, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 143, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(95, 81, 112);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(97, 113, 91);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(97, 113, 91);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(97, 113, 91);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 69, 60);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 99, 199);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 51, 83, 138;
  border-bottom-color: rgb(51, 83, 138);
  border-left-color: rgb(51, 83, 138);
  border-right-color: rgb(51, 83, 138);
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(51, 83, 138));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(51, 83, 138);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 16, 77, 112);
  background: rgba(16, 77, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(16, 77, 112);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(16, 77, 112);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(16, 77, 112);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(16, 77, 112);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 51, 83, 138;
  border-bottom-color: rgb(51, 83, 138);
  border-left-color: rgb(51, 83, 138);
  border-right-color: rgb(51, 83, 138);
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(51, 83, 138));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(51, 83, 138);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 154, 69, 60);
  background: rgba(154, 69, 60, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(154, 69, 60);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(154, 69, 60);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(154, 69, 60);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(154, 69, 60);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 51, 83, 138;
  border-bottom-color: rgb(51, 83, 138);
  border-left-color: rgb(51, 83, 138);
  border-right-color: rgb(51, 83, 138);
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(51, 83, 138));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(51, 83, 138);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 154, 69, 60);
  background: rgba(154, 69, 60, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(154, 69, 60);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(154, 69, 60);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(154, 69, 60);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(154, 69, 60);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 51, 83, 138;
  border-bottom-color: rgb(51, 83, 138);
  border-left-color: rgb(51, 83, 138);
  border-right-color: rgb(51, 83, 138);
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(51, 83, 138));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(51, 83, 138);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 95, 81, 112);
  background: rgba(95, 81, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(95, 81, 112);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(95, 81, 112);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(95, 81, 112);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(95, 81, 112);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 51, 83, 138;
  border-bottom-color: rgb(51, 83, 138);
  border-left-color: rgb(51, 83, 138);
  border-right-color: rgb(51, 83, 138);
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(51, 83, 138));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(51, 83, 138);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 154, 69, 60);
  background: rgba(154, 69, 60, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(154, 69, 60);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(154, 69, 60);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(154, 69, 60);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(154, 69, 60);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 51, 83, 138;
  border-bottom-color: rgb(51, 83, 138);
  border-left-color: rgb(51, 83, 138);
  border-right-color: rgb(51, 83, 138);
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(51, 83, 138));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(51, 83, 138);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 51, 83, 138);
  background: rgba(51, 83, 138, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(51, 83, 138);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(51, 83, 138);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(51, 83, 138);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 51, 83, 138;
  border-bottom-color: rgb(51, 83, 138);
  border-left-color: rgb(51, 83, 138);
  border-right-color: rgb(51, 83, 138);
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(51, 83, 138));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(51, 83, 138);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 51, 83, 138);
  background: rgba(51, 83, 138, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(51, 83, 138);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(51, 83, 138);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(51, 83, 138);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 51, 83, 138;
  border-bottom-color: rgb(51, 83, 138);
  border-left-color: rgb(51, 83, 138);
  border-right-color: rgb(51, 83, 138);
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(51, 83, 138));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(51, 83, 138);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 160, 116, 75);
  background: rgba(160, 116, 75, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(160, 116, 75);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(160, 116, 75);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(160, 116, 75);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(160, 116, 75);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 51, 83, 138;
  border-bottom-color: rgb(51, 83, 138);
  border-left-color: rgb(51, 83, 138);
  border-right-color: rgb(51, 83, 138);
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(51, 83, 138));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(51, 83, 138);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(158, 158, 158);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(158, 158, 158);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 51, 83, 138;
  border-bottom-color: rgb(51, 83, 138);
  border-left-color: rgb(51, 83, 138);
  border-right-color: rgb(51, 83, 138);
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(51, 83, 138));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(51, 83, 138);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 97, 113, 91);
  background: rgba(97, 113, 91, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(97, 113, 91);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(97, 113, 91);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(97, 113, 91);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(97, 113, 91);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 51, 83, 138;
  border-bottom-color: rgb(51, 83, 138);
  border-left-color: rgb(51, 83, 138);
  border-right-color: rgb(51, 83, 138);
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(51, 83, 138));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(51, 83, 138);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 16, 77, 112);
  background: rgba(16, 77, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(16, 77, 112);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(16, 77, 112);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(16, 77, 112);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(16, 77, 112);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 51, 83, 138;
  border-bottom-color: rgb(51, 83, 138);
  border-left-color: rgb(51, 83, 138);
  border-right-color: rgb(51, 83, 138);
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(51, 83, 138));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(51, 83, 138);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 51, 83, 138);
  background: rgba(51, 83, 138, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(51, 83, 138);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(51, 83, 138);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(51, 83, 138);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 51, 83, 138;
  border-bottom-color: rgb(51, 83, 138);
  border-left-color: rgb(51, 83, 138);
  border-right-color: rgb(51, 83, 138);
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(51, 83, 138));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(51, 83, 138);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 160, 116, 75);
  background: rgba(160, 116, 75, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(160, 116, 75);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(160, 116, 75);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(160, 116, 75);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(160, 116, 75);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 51, 83, 138;
  border-bottom-color: rgb(51, 83, 138);
  border-left-color: rgb(51, 83, 138);
  border-right-color: rgb(51, 83, 138);
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(51, 83, 138));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(51, 83, 138);
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
  background-color: rgb(205, 213, 218);
  border-bottom-color: rgb(138, 163, 177);
  border-left-color: rgb(138, 163, 177);
  border-right-color: rgb(138, 163, 177);
  border-top-color: rgb(138, 163, 177);
  border-top-left-radius: var(--radius-l, 5px);
  border-top-right-radius: var(--radius-l, 5px);
  color: var(--text-normal, rgb(26, 31, 35));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(192, 200, 206));
  border-bottom-color: rgb(138, 163, 177);
  border-left-color: rgb(138, 163, 177);
  border-right-color: rgb(138, 163, 177);
  border-top-color: rgb(138, 163, 177);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  box-shadow: var(--shadow-l, rgba(149, 157, 165, 0.2) 0px 8px 24px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(26, 31, 35);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(26, 31, 35) none 0px;
  text-decoration-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(126, 149, 165);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(126, 149, 165);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(126, 149, 165);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(126, 149, 165);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(166, 176, 185));
  color: rgb(26, 31, 35);
  font-weight: 500;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(138, 163, 177);
  border-left-color: rgb(138, 163, 177);
  border-right-color: rgb(138, 163, 177);
  border-top-color: rgb(138, 163, 177);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(205, 213, 218);
  border-bottom-color: rgb(138, 163, 177);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(138, 163, 177);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(138, 163, 177);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(138, 163, 177);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-secondary, rgb(166, 176, 185));
  border-bottom-color: rgb(126, 149, 165);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(126, 149, 165);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(126, 149, 165);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(126, 149, 165);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(166, 176, 185));
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(210, 100%, 39%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(210, 100%, 39%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(210, 100%, 39%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(210, 100%, 39%, 0.15));
  --pill-color: var(--tag-color, hsl(210, 100%, 39%));
  --pill-color-hover: var(--tag-color-hover, hsl(210, 100%, 39%));
  --pill-color-remove: var(--tag-color, hsl(210, 100%, 39%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(210, 100%, 39%));
  background-color: var(--pill-background, rgba(0, 99, 199, 0.1));
  border-bottom-color: rgba(0, 99, 199, 0.15);
  border-left-color: rgba(0, 99, 199, 0.15);
  border-right-color: rgba(0, 99, 199, 0.15);
  border-top-color: rgba(0, 99, 199, 0.15);
  border-top-left-radius: var(--radius-l, 28px);
  border-top-right-radius: var(--radius-l, 28px);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 500);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(0, 99, 199);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 900);
  color: var(--h1-color, rgb(9, 10, 11));
  font-family: var(--font-title, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(9, 10, 11));
  font-size: var(--inline-title-size, 80px);
  font-weight: var(--inline-title-weight, 900);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 800);
  color: var(--h2-color, rgb(26, 31, 35));
  font-family: var(--h2-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(9, 10, 11));
  font-family: var(--inline-title-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 700);
  color: var(--h3-color, rgb(26, 31, 35));
  font-family: var(--h3-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 600);
  color: var(--h4-color, rgb(26, 31, 35));
  font-family: var(--h4-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 600);
  color: var(--h5-color, rgb(26, 31, 35));
  font-family: var(--h5-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 500);
  color: var(--h6-color, rgb(26, 31, 35));
  font-family: var(--h6-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(138, 163, 177);
  border-left-color: rgb(138, 163, 177);
  border-right-color: rgb(138, 163, 177);
  border-right-style: dashed;
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 51, 83, 138);
  border-bottom-color: rgb(51, 83, 138);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(51, 83, 138);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(51, 83, 138);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(51, 83, 138);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(52, 65, 78));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(52, 65, 78));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(26, 31, 35);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--text-normal, rgb(26, 31, 35));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(166, 176, 185));
  border-bottom-color: rgb(126, 149, 165);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(126, 149, 165);
  border-right-color: rgb(126, 149, 165);
  border-right-width: 1px;
  border-top-color: rgb(126, 149, 165);
  border-top-left-radius: var(--radius-l, 8px);
  border-top-right-radius: var(--radius-l, 8px);
  color: var(--status-bar-text-color, rgb(52, 65, 78));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(52, 65, 78);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(26, 31, 35);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 31, 35);
  border-left-color: rgb(26, 31, 35);
  border-right-color: rgb(26, 31, 35);
  border-top-color: rgb(26, 31, 35);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(52, 65, 78));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: var(--text-normal, rgb(26, 31, 35));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(26, 31, 35);
  border-left-color: rgb(26, 31, 35);
  border-right-color: rgb(26, 31, 35);
  border-top-color: rgb(26, 31, 35);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: var(--text-normal, rgb(26, 31, 35));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(52, 65, 78));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(26, 31, 35);
  border-left-color: rgb(26, 31, 35);
  border-right-color: rgb(26, 31, 35);
  border-top-color: rgb(26, 31, 35);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(26, 31, 35);
  border-left-color: rgb(26, 31, 35);
  border-right-color: rgb(26, 31, 35);
  border-top-color: rgb(26, 31, 35);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
  color: var(--text-normal, rgb(26, 31, 35));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(26, 31, 35);
  stroke: rgb(26, 31, 35);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(52, 65, 78);
  border-left-color: rgb(52, 65, 78);
  border-right-color: rgb(52, 65, 78);
  border-top-color: rgb(52, 65, 78);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
  color: rgb(52, 65, 78);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(58, 77, 90));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(26, 31, 35);
  box-shadow: 0px 0px 0px 4px var(--text-normal);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(26, 31, 35));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(205, 213, 218));
  border-color: rgb(26, 31, 35);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(138, 163, 177);
  color: var(--table-header-color, rgb(26, 31, 35));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(138, 163, 177);
  border-left-color: rgb(138, 163, 177);
  border-right-color: rgb(138, 163, 177);
  border-top-color: rgb(138, 163, 177);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: var(--text-muted, rgb(52, 65, 78));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(52, 65, 78);
  border-left-color: rgb(52, 65, 78);
  border-right-color: rgb(52, 65, 78);
  border-top-color: rgb(52, 65, 78);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: rgb(52, 65, 78);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(138, 163, 177);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(52, 65, 78);
  font-weight: 500;
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(210, 100%, 39%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(210, 100%, 39%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(210, 100%, 39%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(210, 100%, 39%, 0.15));
  --pill-color: var(--tag-color, hsl(210, 100%, 39%));
  --pill-color-hover: var(--tag-color-hover, hsl(210, 100%, 39%));
  --pill-color-remove: var(--tag-color, hsl(210, 100%, 39%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(210, 100%, 39%));
  background-color: var(--pill-background, rgba(0, 99, 199, 0.1));
  color: var(--pill-color, rgb(0, 99, 199));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(52, 65, 78);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(205, 213, 218));
  color: var(--text-normal, rgb(26, 31, 35));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(26, 31, 35);
  border-left-color: rgb(26, 31, 35);
  border-right-color: rgb(26, 31, 35);
  border-top-color: rgb(26, 31, 35);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(26, 31, 35);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(26, 31, 35);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(26, 31, 35);
  border-left-color: rgb(26, 31, 35);
  border-right-color: rgb(26, 31, 35);
  border-top-color: rgb(26, 31, 35);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(166, 176, 185));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(26, 31, 35));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(26, 31, 35);
  border-left-color: rgb(26, 31, 35);
  border-right-color: rgb(26, 31, 35);
  border-top-color: rgb(26, 31, 35);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(0, 99, 199);
  border-left-color: rgb(0, 99, 199);
  border-right-color: rgb(0, 99, 199);
  border-top-color: rgb(0, 99, 199);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: var(--text-normal, rgb(0, 99, 199));
  font-family: var(--font-mono, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(0, 99, 199);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(0, 99, 199);
  border-right-color: rgb(0, 99, 199);
  border-top-color: rgb(0, 99, 199);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  color: var(--color-accent, rgb(0, 99, 199));
  font-family: var(--font-monospace, Monaspace, monospace);
  font-size: var(--code-size, 12px);
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(26, 31, 35);
  border-left-color: rgb(26, 31, 35);
  border-right-color: rgb(26, 31, 35);
  border-top-color: rgb(26, 31, 35);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body sub {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body summary {
  color: rgb(26, 31, 35);
  font-weight: 500;
}

html[saved-theme="light"] body sup {
  color: rgb(26, 31, 35);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(0, 99, 199, 0.1));
  border-bottom-color: rgba(0, 99, 199, 0.15);
  border-left-color: rgba(0, 99, 199, 0.15);
  border-right-color: rgba(0, 99, 199, 0.15);
  border-top-color: rgba(0, 99, 199, 0.15);
  border-top-left-radius: var(--radius-l, 24.5px);
  border-top-right-radius: var(--radius-l, 24.5px);
  color: var(--tag-color, rgb(0, 99, 199));
}`,
  },
};
