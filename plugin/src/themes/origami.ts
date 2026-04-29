import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "origami",
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
    styleSettingsId: "o-theme-settings",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 0;
  --accent-l: 62%;
  --accent-s: 92%;
  --ancestor-editor-color: var(--text-normal, #b3b3b3);
  --aside-background: transparent;
  --aside-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --aside-border-color: var(--background-modifier-border, #555555);
  --aside-text-color: var(--text-muted, #999999);
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: var(--color-base-30, #555555);
  --background-modifier-border-focus: var(--color-base-40, #606060);
  --background-modifier-error: var(--color-red, #F74545);
  --background-modifier-error-hover: var(--color-red, #F74545);
  --background-modifier-error-rgb: var(--color-red-rgb, 247, 69, 69);
  --background-modifier-form-field: var(--color-base-00, #757575);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #757575);
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.075);
  --background-modifier-success: var(--color-green, #95f745);
  --background-modifier-success-rgb: var(--color-green-rgb, 51, 255, 51);
  --background-primary: var(--color-base-00, #202020);
  --background-primary-alt: var(--color-base-10, #444444);
  --background-primary-pre-alt: var(--color-base-05, #333333);
  --background-secondary: var(--color-base-20, #555555);
  --background-secondary-alt: var(--color-base-30, #555555);
  --background-transparent: #55555599;
  --bases-cards-background: var(--background-primary, #202020);
  --bases-cards-cover-background: var(--background-primary-alt, #444444);
  --bases-embed-border-color: var(--background-modifier-border, #555555);
  --bases-group-heading-property-color: var(--text-muted, #999999);
  --bases-table-border-color: var(--table-border-color, #555555);
  --bases-table-cell-background-active: var(--background-primary, #202020);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #444444);
  --bases-table-cell-background-selected: var(--table-selection, hsla(0, 92%, 62%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #444444);
  --bases-table-header-background: var(--background-primary, #202020);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --bases-table-header-color: var(--text-muted, #999999);
  --bases-table-summary-background: var(--background-primary, #202020);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --bb-border: 1px solid var(--color-base-30);
  --bb-border-alt: 1px solid var(--color-base-25);
  --bb-border-dashed: 1px dashed var(--color-base-30);
  --bb-border-high-contrast: 1px solid var(--color-base-60);
  --bb-border-transparent: 1px solid transparent;
  --bb-shadow: -33px 24px 64px -8px hsla(var(--color-accent-hsl), 0.1), 33px 12px 64px -8px hsla(calc(var(--accent-h) - 175), calc(var(--accent-s)*1.05), calc(var(--accent-l)*1.29), 0.1);
  --blockquote-border-color: var(--interactive-accent, hsl(0, 92%, 62%));
  --callout-bug: var(--color-red-rgb, 247, 69, 69);
  --callout-cite: 87, 61, 132;
  --callout-default: var(--color-blue-rgb, 90, 100, 248);
  --callout-error: var(--color-red-rgb, 247, 69, 69);
  --callout-example: var(--color-purple-rgb, 170, 69, 247);
  --callout-fail: var(--color-red-rgb, 247, 69, 69);
  --callout-important: var(--color-cyan-rgb, 69, 206, 247);
  --callout-info: var(--color-blue-rgb, 90, 100, 248);
  --callout-question: var(--color-orange-rgb, 247, 138, 69);
  --callout-success: var(--color-green-rgb, 51, 255, 51);
  --callout-summary: var(--color-cyan-rgb, 69, 206, 247);
  --callout-tip: var(--color-cyan-rgb, 69, 206, 247);
  --callout-todo: var(--color-blue-rgb, 90, 100, 248);
  --callout-warning: var(--color-orange-rgb, 247, 138, 69);
  --canvas-background: var(--background-primary, #202020);
  --canvas-card-label-color: var(--text-faint, #707070);
  --canvas-color-1: var(--color-red-rgb, 247, 69, 69);
  --canvas-color-2: var(--color-orange-rgb, 247, 138, 69);
  --canvas-color-3: var(--color-yellow-rgb, 247, 204, 68);
  --canvas-color-4: var(--color-green-rgb, 51, 255, 51);
  --canvas-color-5: var(--color-cyan-rgb, 69, 206, 247);
  --canvas-color-6: var(--color-purple-rgb, 170, 69, 247);
  --canvas-dot-pattern: var(--color-base-50, #707070);
  --caret-color: var(--text-normal, #b3b3b3);
  --checkbox-border-color: var(--text-faint, #707070);
  --checkbox-border-color-hover: var(--text-muted, #999999);
  --checkbox-color: var(--interactive-accent, hsl(0, 92%, 62%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(-3, 93.84%, 71.3%));
  --checkbox-marker-color: var(--background-primary, #202020);
  --checklist-done-color: var(--text-muted, #999999);
  --code-background: var(--background-primary-alt, #444444);
  --code-border-color: var(--background-modifier-border, #555555);
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --code-comment: var(--text-faint, #707070);
  --code-function: var(--color-yellow, #F7CC44);
  --code-important: var(--color-orange, #F78A45);
  --code-keyword: var(--color-pink, #fb5ed8);
  --code-normal: var(--text-muted, #999999);
  --code-operator: var(--color-red, #F74545);
  --code-property: var(--color-cyan, #45CEF7);
  --code-punctuation: var(--text-muted, #999999);
  --code-string: var(--color-green, #95f745);
  --code-tag: var(--color-red, #F74545);
  --code-value: var(--color-purple, #AA45F7);
  --collapse-icon-color: var(--text-faint, #707070);
  --collapse-icon-color-collapsed: var(--color-accent, hsl(0, 92%, 62%));
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
  --color-accent-rgb: var(--color-red-rgb, 247, 69, 69);
  --color-base-00: #202020;
  --color-base-05: #333333;
  --color-base-10: #444444;
  --color-base-20: #555555;
  --color-base-25: #757575;
  --color-base-30: #555555;
  --color-base-40: #606060;
  --color-base-50: #707070;
  --color-blue: #5a64f8;
  --color-blue-hsl: 216, 95%, 68%;
  --color-blue-rgb: 90, 100, 248;
  --color-cyan: #45CEF7;
  --color-cyan-hsl: 194, 92%, 62%;
  --color-cyan-rgb: 69, 206, 247;
  --color-green: #95f745;
  --color-green-hsl: 120, 100%, 60%;
  --color-green-rgb: 51, 255, 51;
  --color-orange: #F78A45;
  --color-orange-hsl: 23, 92%, 62%;
  --color-orange-rgb: 247, 138, 69;
  --color-pink: #fb5ed8;
  --color-pink-hsl: 313, 95%, 68%;
  --color-pink-rgb: 251, 94, 216, 1;
  --color-purple: #AA45F7;
  --color-purple-hsl: 274, 92%, 62%;
  --color-purple-rgb: 170, 69, 247;
  --color-red: #F74545;
  --color-red-hsl: 0, 92%, 62%;
  --color-red-rgb: 247, 69, 69;
  --color-yellow: #F7CC44;
  --color-yellow-hsl: 46, 92%, 62%;
  --color-yellow-rgb: 247, 204, 68;
  --dark: var(--text-normal, var(--color-base-70, #b3b3b3));
  --darkgray: var(--text-normal, var(--color-base-70, #b3b3b3));
  --divider-color: var(--background-modifier-border, #555555);
  --divider-color-hover: var(--interactive-accent, hsl(0, 92%, 62%));
  --dropdown-background: var(--interactive-normal, #555555);
  --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border),
        inset 0 0 0 1px var(--background-modifier-border);
  --file-header-background: var(--background-primary, #202020);
  --file-header-background-focused: var(--background-primary, #202020);
  --file-header-font: var(--font-interface, "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 14px);
  --file-margins: var(--size-4-8, 32px);
  --flair-background: var(--interactive-normal, #555555);
  --flair-color: var(--text-normal, #b3b3b3);
  --font-interface-theme: "Aspekta", sans-serif;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --footnote-divider-color: var(--metadata-divider-color, #555555);
  --footnote-id-color: var(--text-muted, #999999);
  --footnote-id-color-no-occurrences: var(--text-faint, #707070);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.075));
  --graph-node: var(--text-muted, #999999);
  --graph-node-attachment: var(--color-accent-1, hsl(-3, 93.84%, 71.3%));
  --graph-node-focused: var(--background-modifier-border-focus, #606060);
  --graph-node-tag: var(--color-accent, hsl(0, 92%, 62%));
  --graph-node-unresolved: var(--text-faint, #707070);
  --graph-text: var(--text-normal, #b3b3b3);
  --gray: var(--text-muted, var(--color-base-60, #999999));
  --h1-color: var(--color-base-100, #dadada);
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
  --heading-formatting: var(--text-faint, #707070);
  --highlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --hr-color: var(--background-modifier-border, #555555);
  --icon-color: var(--text-muted, #999999);
  --icon-color-active: var(--color-accent, hsl(0, 92%, 62%));
  --icon-color-focused: var(--text-normal, #b3b3b3);
  --icon-color-hover: var(--text-muted, #999999);
  --inline-title-color: var(--h1-color, #dadada);
  --inline-title-size: var(--h1-size, clamp(2.5rem, 8vw - 4rem, 5rem));
  --inline-title-weight: var(--h1-weight, 900);
  --input-date-separator: var(--text-faint, #707070);
  --input-placeholder-color: var(--text-faint, #707070);
  --interactive-accent: var(--color-accent-1, hsl(0, 92%, 62%));
  --interactive-accent-hover: var(--color-accent-2, hsl(-3, 93.84%, 71.3%));
  --interactive-accent-hsl: var(--color-accent-hsl, 0, 92%, 62%);
  --interactive-hover: var(--color-base-10, #3f3f3f);
  --interactive-normal: var(--color-base-00, #555555);
  --light: var(--background-primary, var(--color-base-00, #202020));
  --lightgray: var(--background-secondary, var(--color-base-20, #555555));
  --link-color: var(--text-accent, hsl(0, 92%, 62%));
  --link-color-hover: var(--text-accent-hover, hsl(-5, 96.6%, 79.98%));
  --link-external-color: var(--text-accent, hsl(0, 92%, 62%));
  --link-external-color-hover: var(--text-accent-hover, hsl(-5, 96.6%, 79.98%));
  --link-unresolved-color: var(--text-accent, hsl(0, 92%, 62%));
  --list-marker-color: var(--text-faint, #707070);
  --list-marker-color-collapsed: var(--text-accent, hsl(0, 92%, 62%));
  --list-marker-color-hover: var(--text-muted, #999999);
  --menu-background: var(--background-secondary, #555555);
  --menu-shadow: var(--shadow-s, 0px 10px 21px 13px rgba(0, 0, 0, 0.1));
  --metadata-border-color: var(--background-modifier-border, #555555);
  --metadata-divider-color: var(--background-modifier-border, #555555);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-input-font: var(--font-interface, "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #b3b3b3);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-label-font: var(--font-interface, "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #999999);
  --metadata-label-text-color-hover: var(--text-muted, #999999);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --modal-background: var(--background-primary, #202020);
  --nav-collapse-icon-color: var(--collapse-icon-color, #707070);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #707070);
  --nav-heading-color: var(--text-normal, #b3b3b3);
  --nav-heading-color-collapsed: var(--text-faint, #707070);
  --nav-heading-color-collapsed-hover: var(--text-muted, #999999);
  --nav-heading-color-hover: var(--text-normal, #b3b3b3);
  --nav-item-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --nav-item-color: var(--text-muted, #999999);
  --nav-item-color-active: var(--text-normal, #b3b3b3);
  --nav-item-color-highlighted: var(--text-accent, hsl(0, 92%, 62%));
  --nav-item-color-hover: var(--text-normal, #b3b3b3);
  --nav-item-color-selected: var(--text-normal, #b3b3b3);
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, #707070);
  --nav-tag-color-active: var(--text-muted, #999999);
  --nav-tag-color-hover: var(--text-muted, #999999);
  --o-h1-color: var(--background-modifier-border, #555555);
  --o-h2-color: var(--background-modifier-border, #555555);
  --o-h3-color: var(--background-modifier-border, #555555);
  --o-h4-color: var(--background-modifier-border, #555555);
  --o-h5-color: var(--background-modifier-border, #555555);
  --o-h6-color: var(--background-modifier-border, #555555);
  --pdf-background: var(--background-primary, #202020);
  --pdf-page-background: var(--background-primary, #202020);
  --pdf-sidebar-background: var(--background-primary, #202020);
  --pill-border-color: var(--background-modifier-border, #555555);
  --pill-color: var(--text-muted, #999999);
  --pill-color-hover: var(--text-normal, #b3b3b3);
  --pill-color-remove: var(--text-faint, #707070);
  --pill-color-remove-hover: var(--text-accent, hsl(0, 92%, 62%));
  --prompt-background: var(--background-primary, #202020);
  --raised-background: var(--blur-background, color-mix(in srgb, #555555 65%, transparent) linear-gradient(#555555, color-mix(in srgb, #555555 65%, transparent)));
  --ribbon-background: var(--background-secondary, #555555);
  --ribbon-background-collapsed: var(--background-primary, #202020);
  --scrollbar-active-thumb-bg: hsla(var(--color-accent-hsl), 0.2);
  --scrollbar-thumb-bg: rgba(var(--mono-rgb-100), 0.05);
  --search-clear-button-color: var(--text-muted, #999999);
  --search-icon-color: var(--text-muted, #999999);
  --search-result-background: var(--background-primary, #202020);
  --secondary: var(--text-accent, var(--color-accent, hsl(0, 92%, 62%)));
  --setting-group-heading-color: var(--text-normal, #b3b3b3);
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-items-background: var(--background-primary-alt, #444444);
  --setting-items-border-color: var(--background-modifier-border, #555555);
  --shadow-l: rgb(0 0 0 / 20%) 0px 8px 24px;
  --shadow-lm-only: none;
  --shadow-s: 0px 10px 21px 13px rgba(0, 0, 0, 0.1);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #999999);
  --shiki-code-background: var(--code-background, #444444);
  --shiki-code-comment: var(--text-faint, #707070);
  --shiki-code-function: var(--color-green, #95f745);
  --shiki-code-important: var(--color-orange, #F78A45);
  --shiki-code-keyword: var(--color-pink, #fb5ed8);
  --shiki-code-normal: var(--text-muted, #999999);
  --shiki-code-property: var(--color-cyan, #45CEF7);
  --shiki-code-punctuation: var(--text-muted, #999999);
  --shiki-code-string: var(--color-yellow, #F7CC44);
  --shiki-code-value: var(--color-purple, #AA45F7);
  --shiki-gutter-border-color: var(--background-modifier-border, #555555);
  --shiki-gutter-text-color: var(--text-faint, #707070);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #999999);
  --shiki-highlight-neutral: var(--shiki-code-normal, #999999);
  --shiki-terminal-dots-color: var(--text-faint, #707070);
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --slider-track-background: var(--background-modifier-border, #555555);
  --status-bar-background: var(--background-secondary, #555555);
  --status-bar-border-color: var(--divider-color, #555555);
  --status-bar-scroll-padding: calc(var(--status-bar-font-size) + 18px);
  --status-bar-text-color: var(--text-muted, #999999);
  --suggestion-background: var(--background-primary, #202020);
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: var(--color-red, #F74545);
  --sync-avatar-color-2: var(--color-orange, #F78A45);
  --sync-avatar-color-3: var(--color-yellow, #F7CC44);
  --sync-avatar-color-4: var(--color-green, #95f745);
  --sync-avatar-color-5: var(--color-cyan, #45CEF7);
  --sync-avatar-color-6: var(--color-blue, #5a64f8);
  --sync-avatar-color-7: var(--color-purple, #AA45F7);
  --sync-avatar-color-8: var(--color-pink, #fb5ed8);
  --tab-background-active: var(--background-primary, #202020);
  --tab-container-background: var(--background-secondary, #555555);
  --tab-font-size: var(--font-ui-small, 14px);
  --tab-outline-color: var(--divider-color, #555555);
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-switcher-background: var(--background-secondary, #555555);
  --tab-text-color: var(--text-faint, #707070);
  --tab-text-color-active: var(--text-muted, #999999);
  --tab-text-color-focused: var(--text-muted, #999999);
  --tab-text-color-focused-active: var(--text-muted, #999999);
  --tab-text-color-focused-active-current: var(--text-normal, #b3b3b3);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(0, 92%, 62%));
  --table-add-button-border-color: var(--background-modifier-border, #555555);
  --table-border-color: var(--background-modifier-border, #555555);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(0, 92%, 62%));
  --table-drag-handle-color: var(--text-faint, #707070);
  --table-drag-handle-color-active: var(--text-on-accent, #dadada);
  --table-header-border-color: var(--table-border-color, #555555);
  --table-header-color: var(--text-normal, #b3b3b3);
  --table-selection-border-color: var(--interactive-accent, hsl(0, 92%, 62%));
  --tag-color: var(--text-accent, hsl(0, 92%, 62%));
  --tag-color-hover: var(--text-accent, hsl(0, 92%, 62%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(-5, 96.6%, 79.98%)));
  --text-accent: var(--color-accent, hsl(0, 92%, 62%));
  --text-accent-hover: var(--color-accent-2, hsl(-5, 96.6%, 79.98%));
  --text-cite: 87, 161, 132;
  --text-error: var(--color-red, #F74545);
  --text-faint: var(--color-base-50, #707070);
  --text-muted: var(--color-base-60, #999999);
  --text-normal: var(--color-base-70, #b3b3b3);
  --text-on-accent: var(--color-base-100, #dadada);
  --text-on-button: var(--color-base-00, #202020);
  --text-selection: hsla(var(--color-accent-hsl), 0.2);
  --text-success: var(--color-green, #95f745);
  --text-warning: var(--color-orange, #F78A45);
  --textHighlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --titlebar-background: var(--background-secondary, #555555);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, #555555);
  --titlebar-text-color: var(--text-muted, #999999);
  --titlebar-text-color-focused: var(--text-normal, #b3b3b3);
  --transition-duration: 700ms;
  --transition-duration-short: 350ms;
  --transition-ease: ease;
  --transition-props: background var(--transition-duration), 
                        border var(--transition-duration), 
                        color var(--transition-duration);
  --vault-name-color: var(--text-normal, #b3b3b3);
  --vault-name-font-size: var(--font-ui-small, 14px);
  --vault-name-font-weight: var(--font-medium, 500);
  --vault-profile-color: var(--text-normal, #b3b3b3);
  --vault-profile-color-hover: var(--vault-profile-color, #b3b3b3);
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(32, 32, 32));
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(85, 85, 85);
  border-right-style: dashed;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgb(85, 85, 85);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body html {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--color-base-100, rgb(218, 218, 218));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--color-base-100, rgb(218, 218, 218));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--color-base-100, rgb(218, 218, 218));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--color-base-100, rgb(218, 218, 218));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(var(--color-accent-rgb), .2);
  color: var(--text-accent, rgb(247, 69, 69));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(247, 69, 69) none 0px;
  text-decoration-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body del {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(179, 179, 179));
  font-size: 14px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(85, 85, 85);
  border-color: rgb(117, 117, 117);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgba(0, 0, 0, 0));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(153, 153, 153));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(247, 69, 69));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(247, 69, 69) none 0px;
  text-decoration-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--color-accent, rgb(247, 69, 69));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 700);
  outline: rgb(247, 69, 69) none 0px;
  text-decoration-color: rgb(247, 69, 69);
  transition: 0.7s;
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--text-muted, rgb(153, 153, 153));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 700);
  outline: rgb(153, 153, 153) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(153, 153, 153));
  transition: 0.7s;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body dt {
  color: rgb(179, 179, 179);
  font-weight: 500;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(112, 112, 112));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(85, 85, 85));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body table {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 186.109px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(179, 179, 179));
  font-weight: 500;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: var(--radius-l, 8px);
  border-top-right-radius: var(--radius-l, 0px);
  color: var(--table-header-color, rgb(179, 179, 179));
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
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: var(--ec-codeFg, rgb(153, 153, 153));
  font-family: var(--ec-codeFontFml, Monaspace, monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(68, 68, 68));
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 69, 69);
  border-left-width: 1px;
  border-right-color: rgb(247, 69, 69);
  border-right-width: 1px;
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
}

html[saved-theme="dark"] body img {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-radius: 12px;
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(68, 68, 68));
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: var(--radius-l, 8px);
  border-top-right-radius: var(--radius-l, 8px);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(247, 69, 69);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
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
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
  transition: 0.3s;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(90, 100, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 204, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 204, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(170, 69, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 138, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(170, 69, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(149, 247, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 204, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 204, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(170, 69, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(149, 247, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(149, 247, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(149, 247, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 69, 206, 247);
  background: rgba(69, 206, 247, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(69, 206, 247);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(69, 206, 247);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(69, 206, 247);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(69, 206, 247);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .callout[data-callout="aside"] {
  --ancestor-editor-color: #b3b3b3;
  --aside-background-hover: rgba(255, 255, 255, 0.075);
  --aside-border-color: #555555;
  --aside-text-color: #999999;
  --background-modifier-active-hover: hsla(0, 92%, 62%, 0.15);
  --background-modifier-border: #555555;
  --background-modifier-border-focus: #606060;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #F74545;
  --background-modifier-error-hover: #F74545;
  --background-modifier-error-rgb: 247, 69, 69;
  --background-modifier-form-field: #757575;
  --background-modifier-form-field-hover: #757575;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #95f745;
  --background-modifier-success-rgb: 51, 255, 51;
  --background-primary: #202020;
  --background-primary-alt: #444444;
  --background-primary-pre-alt: #333333;
  --background-secondary: #555555;
  --background-secondary-alt: #555555;
  --bb-border: 1px solid #555555;
  --bb-border-alt: 1px solid #757575;
  --bb-border-dashed: 1px dashed #555555;
  --bb-border-high-contrast: 1px solid #999999;
  --bb-shadow: -33px 24px 64px -8px hsla(0, 92%, 62%, 0.1), 33px 12px 64px -8px hsla(-175, 96.6%, 79.98%, 0.1);
  --blockquote-border-color: hsl(0, 92%, 62%);
  --blur-background: color-mix(in srgb, #555555 65%, transparent) linear-gradient(#555555, color-mix(in srgb, #555555 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 247, 69, 69;
  --callout-color: var(--callout-default, 0,
	  0,
	  0);
  --callout-default: 90, 100, 248;
  --callout-error: 247, 69, 69;
  --callout-example: 170, 69, 247;
  --callout-fail: 247, 69, 69;
  --callout-important: 69, 206, 247;
  --callout-info: 90, 100, 248;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 247, 138, 69;
  --callout-radius: 4px;
  --callout-success: 51, 255, 51;
  --callout-summary: 69, 206, 247;
  --callout-tip: 69, 206, 247;
  --callout-title-weight: 600;
  --callout-todo: 90, 100, 248;
  --callout-warning: 247, 138, 69;
  --canvas-background: #202020;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #707070;
  --caret-color: #b3b3b3;
  --checkbox-border-color: #707070;
  --checkbox-border-color-hover: #999999;
  --checkbox-color: hsl(0, 92%, 62%);
  --checkbox-color-hover: hsl(-3, 93.84%, 71.3%);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #999999;
  --clickable-icon-radius: 4px;
  --code-background: #444444;
  --code-border-color: #555555;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #707070;
  --code-function: #F7CC44;
  --code-important: #F78A45;
  --code-keyword: #fb5ed8;
  --code-normal: #999999;
  --code-operator: #F74545;
  --code-property: #45CEF7;
  --code-punctuation: #999999;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #95f745;
  --code-tag: #F74545;
  --code-value: #AA45F7;
  --collapse-icon-color: #707070;
  --collapse-icon-color-collapsed: hsl(0, 92%, 62%);
  --color-accent: hsl(0, 92%, 62%);
  --color-accent-1: hsl(-3, 93.84%, 71.3%);
  --color-accent-2: hsl(-5, 96.6%, 79.98%);
  --color-accent-3: hsl(-175,
        142.6%,
        79.98%);
  --color-accent-hsl: 0, 92%, 62%;
  --color-accent-rgb: 247, 69, 69;
  --divider-color: #555555;
  --divider-color-hover: hsl(0, 92%, 62%);
  --divider-vertical-height: 100%;
  --dropdown-background: #555555;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #555555;
  --flair-color: #b3b3b3;
  --font-interface: '??', "Aspekta", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: "Monaspace", monospace;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #999999;
  --graph-node-attachment: hsl(-3, 93.84%, 71.3%);
  --graph-node-focused: #606060;
  --graph-node-tag: hsl(0, 92%, 62%);
  --graph-node-unresolved: #707070;
  --graph-text: #b3b3b3;
  --h1-color: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #707070;
  --heading-spacing: 2.5rem;
  --hr-color: #555555;
  --interactive-accent: hsl(0, 92%, 62%);
  --interactive-accent-hover: hsl(-3, 93.84%, 71.3%);
  --interactive-accent-hsl: 0, 92%, 62%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #555555;
  --link-color: hsl(0, 92%, 62%);
  --link-color-hover: hsl(-5, 96.6%, 79.98%);
  --link-external-color: hsl(0, 92%, 62%);
  --link-external-color-hover: hsl(-5, 96.6%, 79.98%);
  --link-unresolved-color: hsl(0, 92%, 62%);
  --link-unresolved-decoration-color: hsla(0, 92%, 62%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #555555;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 10px 21px 13px rgba(0, 0, 0, 0.1);
  --move: 0;
  --o-h1-color: #555555;
  --o-h2-color: #555555;
  --o-h3-color: #555555;
  --o-h4-color: #555555;
  --o-h5-color: #555555;
  --o-h6-color: #555555;
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #555555;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #555555;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #555555 65%, transparent) linear-gradient(#555555, color-mix(in srgb, #555555 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsla(0, 92%, 62%, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.05);
  --search-clear-button-color: #999999;
  --search-icon-color: #999999;
  --search-result-background: #202020;
  --setting-group-heading-color: #b3b3b3;
  --setting-group-heading-size: 16px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #444444;
  --setting-items-border-color: #555555;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #999999;
  --shiki-code-background: #444444;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #707070;
  --shiki-code-function: #95f745;
  --shiki-code-important: #F78A45;
  --shiki-code-keyword: #fb5ed8;
  --shiki-code-normal: #999999;
  --shiki-code-property: #45CEF7;
  --shiki-code-punctuation: #999999;
  --shiki-code-string: #F7CC44;
  --shiki-code-value: #AA45F7;
  --shiki-gutter-border-color: #555555;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #707070;
  --shiki-gutter-text-color-highlight: #999999;
  --shiki-highlight-green: rgba(51, 255, 51, 0.5);
  --shiki-highlight-green-background: rgba(51, 255, 51, 0.1);
  --shiki-highlight-neutral: #999999;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(247, 69, 69, 0.5);
  --shiki-highlight-red-background: rgba(247, 69, 69, 0.1);
  --shiki-terminal-dots-color: #707070;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #202020;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #F74545;
  --sync-avatar-color-2: #F78A45;
  --sync-avatar-color-3: #F7CC44;
  --sync-avatar-color-4: #95f745;
  --sync-avatar-color-5: #45CEF7;
  --sync-avatar-color-6: #5a64f8;
  --sync-avatar-color-7: #AA45F7;
  --sync-avatar-color-8: #fb5ed8;
  --tab-background-active: #202020;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 14px;
  --tab-outline-color: #555555;
  --tab-radius: 4px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #555555;
  --tab-switcher-menubar-background: linear-gradient(to top, #555555, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 92%, 62%);
  --tab-text-color: #707070;
  --tab-text-color-active: #999999;
  --tab-text-color-focused: #999999;
  --tab-text-color-focused-active: #999999;
  --tab-text-color-focused-active-current: #b3b3b3;
  --tab-text-color-focused-highlighted: hsl(0, 92%, 62%);
  --table-add-button-border-color: #555555;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(0, 92%, 62%);
  --table-drag-handle-color: #707070;
  --table-drag-handle-color-active: #dadada;
  --table-header-background: transparent;
  --table-header-border-color: #555555;
  --table-header-border-width: 1px;
  --table-header-color: #b3b3b3;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 92%, 62%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(0, 92%, 62%);
  --table-text-size: 16px;
  --tag-background: hsla(0, 92%, 62%, 0.1);
  --tag-background-hover: hsla(0, 92%, 62%, 0.2);
  --tag-border-color: hsla(0, 92%, 62%, 0.15);
  --tag-border-color-hover: hsla(0, 92%, 62%, 0.15);
  --tag-color: hsl(0, 92%, 62%);
  --tag-color-hover: hsl(0, 92%, 62%);
  --tag-size: 0.875em;
  --text-accent: hsl(0, 92%, 62%);
  --text-accent-hover: hsl(-5, 96.6%, 79.98%);
  --text-error: #F74545;
  --text-faint: #707070;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #999999;
  --text-normal: #b3b3b3;
  --text-on-accent: #dadada;
  --text-on-button: #202020;
  --text-selection: hsla(0, 92%, 62%, 0.33);
  --text-success: #95f745;
  --text-warning: #F78A45;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --transition-props: background 700ms, 
                        border 700ms, 
                        color 700ms;
  backdrop-filter: blur(16px);
  background-color: var(--aside-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(85, 85, 85);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(85, 85, 85);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: var(--radius-l, 8px);
  border-top-right-radius: var(--radius-l, 8px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: var(--aside-text-color, rgb(153, 153, 153));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 12.8px;
  font-weight: 500;
  line-height: 20.48px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 4px;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 247, 69, 69);
  background: rgba(247, 69, 69, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 69, 69);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(247, 69, 69);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 247, 69, 69);
  background: rgba(247, 69, 69, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 69, 69);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(247, 69, 69);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 170, 69, 247);
  background: rgba(170, 69, 247, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(170, 69, 247);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(170, 69, 247);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(170, 69, 247);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(170, 69, 247);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 247, 69, 69);
  background: rgba(247, 69, 69, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 69, 69);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(247, 69, 69);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 90, 100, 248);
  background: rgba(90, 100, 248, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(90, 100, 248);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(90, 100, 248);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(90, 100, 248);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(90, 100, 248);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 90, 100, 248);
  background: rgba(90, 100, 248, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(90, 100, 248);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(90, 100, 248);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(90, 100, 248);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(90, 100, 248);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 247, 138, 69);
  background: rgba(247, 138, 69, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(247, 138, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 138, 69);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(247, 138, 69);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(247, 138, 69);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(153, 153, 153);
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
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 51, 255, 51);
  background: rgba(51, 255, 51, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(51, 255, 51);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(51, 255, 51);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(51, 255, 51);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(51, 255, 51);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 69, 206, 247);
  background: rgba(69, 206, 247, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(69, 206, 247);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(69, 206, 247);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(69, 206, 247);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(69, 206, 247);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 90, 100, 248);
  background: rgba(90, 100, 248, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(90, 100, 248);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(90, 100, 248);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(90, 100, 248);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(90, 100, 248);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 247, 138, 69);
  background: rgba(247, 138, 69, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(247, 138, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 138, 69);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(247, 138, 69);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(247, 138, 69);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(153, 153, 153);
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
  background-color: rgb(117, 117, 117);
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: var(--radius-l, 5px);
  border-top-right-radius: var(--radius-l, 5px);
  color: var(--text-normal, rgb(179, 179, 179));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(51, 51, 51));
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.2) 0px 8px 24px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(117, 117, 117);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(117, 117, 117);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(117, 117, 117);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(117, 117, 117);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(85, 85, 85));
  color: rgb(179, 179, 179);
  font-weight: 500;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(85, 85, 85);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(85, 85, 85);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-secondary, rgb(85, 85, 85));
  border-bottom-color: rgb(117, 117, 117);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(117, 117, 117);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(117, 117, 117);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(117, 117, 117);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(85, 85, 85));
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(247, 69, 69, 0.1));
  border-bottom-color: rgba(247, 69, 69, 0.15);
  border-left-color: rgba(247, 69, 69, 0.15);
  border-right-color: rgba(247, 69, 69, 0.15);
  border-top-color: rgba(247, 69, 69, 0.15);
  border-top-left-radius: var(--radius-l, 28px);
  border-top-right-radius: var(--radius-l, 28px);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 500);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body h1 {
  font-family: var(--font-title, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h1.article-title {
  font-size: var(--inline-title-size, 80px);
  font-weight: var(--inline-title-weight, 900);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(179, 179, 179));
  font-family: var(--h2-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  font-family: var(--inline-title-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(179, 179, 179));
  font-family: var(--h3-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(179, 179, 179));
  font-family: var(--h4-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(179, 179, 179));
  font-family: var(--h5-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(179, 179, 179));
  font-family: var(--h6-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-right-style: dashed;
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 90, 100, 248);
  border-bottom-color: rgb(90, 100, 248);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(90, 100, 248);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(90, 100, 248);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(90, 100, 248);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(153, 153, 153));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(153, 153, 153));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(179, 179, 179);
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
  color: var(--text-normal, rgb(179, 179, 179));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(85, 85, 85));
  border-bottom-color: rgb(117, 117, 117);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-right-width: 1px;
  border-top-color: rgb(117, 117, 117);
  border-top-left-radius: var(--radius-l, 8px);
  border-top-right-radius: var(--radius-l, 8px);
  color: var(--status-bar-text-color, rgb(153, 153, 153));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(153, 153, 153);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(153, 153, 153));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: var(--text-normal, rgb(179, 179, 179));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: var(--text-normal, rgb(179, 179, 179));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(153, 153, 153));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
  color: var(--text-normal, rgb(179, 179, 179));
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(112, 112, 112));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(179, 179, 179);
  box-shadow: 0px 0px 0px 4px var(--text-normal);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(179, 179, 179));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(85, 85, 85));
  border-color: rgb(179, 179, 179);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(85, 85, 85);
  color: var(--table-header-color, rgb(179, 179, 179));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: var(--text-muted, rgb(153, 153, 153));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: rgb(153, 153, 153);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(85, 85, 85);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(153, 153, 153);
  font-weight: 500;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(247, 69, 69, 0.1));
  color: var(--pill-color, rgb(247, 69, 69));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(32, 32, 32));
  color: var(--text-normal, rgb(179, 179, 179));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(179, 179, 179);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(85, 85, 85));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(179, 179, 179));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(247, 69, 69);
  border-left-color: rgb(247, 69, 69);
  border-right-color: rgb(247, 69, 69);
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: var(--text-normal, rgb(247, 69, 69));
  font-family: var(--font-mono, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(247, 69, 69);
  border-right-color: rgb(247, 69, 69);
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  color: var(--color-accent, rgb(247, 69, 69));
  font-family: var(--font-monospace, Monaspace, monospace);
  font-size: var(--code-size, 12px);
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="dark"] body sub {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body summary {
  color: rgb(179, 179, 179);
  font-weight: 500;
}

html[saved-theme="dark"] body sup {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(247, 69, 69, 0.1));
  border-bottom-color: rgba(247, 69, 69, 0.15);
  border-left-color: rgba(247, 69, 69, 0.15);
  border-right-color: rgba(247, 69, 69, 0.15);
  border-top-color: rgba(247, 69, 69, 0.15);
  border-top-left-radius: var(--radius-l, 24.5px);
  border-top-right-radius: var(--radius-l, 24.5px);
  color: var(--tag-color, rgb(247, 69, 69));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 5;
  --accent-l: 56%;
  --accent-s: 90%;
  --ancestor-editor-color: var(--text-normal, #222222);
  --aside-background: transparent;
  --aside-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --aside-border-color: var(--background-modifier-border, #d3d3d3);
  --aside-text-color: var(--text-muted, #6b6b6b);
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: var(--color-base-30, #d3d3d3);
  --background-modifier-border-focus: var(--color-base-40, #dddddd);
  --background-modifier-border-hover: var(--color-base-35, #c7c7c7);
  --background-modifier-error: var(--color-red, #FF5E23);
  --background-modifier-error-hover: var(--color-red, #FF5E23);
  --background-modifier-error-rgb: var(--color-red-rgb, 255, 94, 35);
  --background-modifier-form-field: var(--color-base-00, #f8f5f3);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #f8f5f3);
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.075);
  --background-modifier-success: var(--color-green, #689C2B);
  --background-modifier-success-rgb: var(--color-green-rgb, 104, 156, 43);
  --background-primary: var(--color-base-00, #f8f5f3);
  --background-primary-alt: var(--color-base-10, #e4e1de);
  --background-primary-pre-alt: var(--color-base-05, #f0ece9);
  --background-scondary-alt: var(--color-base-60, #6b6b6b);
  --background-secondary: var(--color-base-20, #e9e9e9);
  --background-secondary-alt: var(--color-base-05, #f0ece9);
  --bases-cards-background: var(--background-primary, #f8f5f3);
  --bases-cards-cover-background: var(--background-primary-alt, #e4e1de);
  --bases-embed-border-color: var(--background-modifier-border, #d3d3d3);
  --bases-group-heading-property-color: var(--text-muted, #6b6b6b);
  --bases-table-border-color: var(--table-border-color, #d3d3d3);
  --bases-table-cell-background-active: var(--background-primary, #f8f5f3);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #e4e1de);
  --bases-table-cell-background-selected: var(--table-selection, hsla(5, 90%, 56%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #e4e1de);
  --bases-table-header-background: var(--background-primary, #f8f5f3);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --bases-table-header-color: var(--text-muted, #6b6b6b);
  --bases-table-summary-background: var(--background-primary, #f8f5f3);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --bb-border: 1px solid var(--color-base-30);
  --bb-border-alt: 1px solid var(--color-base-25);
  --bb-border-dashed: 1px dashed var(--color-base-30);
  --bb-border-high-contrast: 1px solid var(--color-base-60);
  --bb-border-transparent: 1px solid transparent;
  --bb-shadow: -33px 24px 64px -8px hsla(var(--color-accent-hsl), 0.1), 33px 12px 64px -8px hsla(calc(var(--accent-h) - 175), calc(var(--accent-s)*1.05), calc(var(--accent-l)*1.29), 0.1);
  --blockquote-border-color: var(--interactive-accent, hsl(4, 90.9%, 60.2%));
  --callout-bug: var(--color-red-rgb, 255, 94, 35);
  --callout-cite: 87, 61, 132;
  --callout-default: var(--color-blue-rgb, 112, 180, 249);
  --callout-error: var(--color-red-rgb, 255, 94, 35);
  --callout-example: var(--color-purple-rgb, 116, 76, 180);
  --callout-fail: var(--color-red-rgb, 255, 94, 35);
  --callout-important: var(--color-cyan-rgb, 66, 163, 173);
  --callout-info: var(--color-blue-rgb, 112, 180, 249);
  --callout-question: var(--color-orange-rgb, 253, 145, 44);
  --callout-success: var(--color-green-rgb, 104, 156, 43);
  --callout-summary: var(--color-cyan-rgb, 66, 163, 173);
  --callout-tip: var(--color-cyan-rgb, 66, 163, 173);
  --callout-todo: var(--color-blue-rgb, 112, 180, 249);
  --callout-warning: var(--color-orange-rgb, 253, 145, 44);
  --canvas-background: var(--background-primary, #f8f5f3);
  --canvas-card-label-color: var(--text-faint, #b3b3b3);
  --canvas-color: 20, 20, 20;
  --canvas-color-1: var(--color-red-rgb, 255, 94, 35);
  --canvas-color-2: var(--color-orange-rgb, 253, 145, 44);
  --canvas-color-3: var(--color-yellow-rgb, 252, 220, 55);
  --canvas-color-4: var(--color-green-rgb, 104, 156, 43);
  --canvas-color-5: var(--color-cyan-rgb, 66, 163, 173);
  --canvas-color-6: var(--color-purple-rgb, 116, 76, 180);
  --canvas-dot-pattern: var(--color-base-50, #b3b3b3);
  --checkbox-border-color: var(--text-faint, #b3b3b3);
  --checkbox-border-color-hover: var(--text-muted, #6b6b6b);
  --checkbox-color: var(--interactive-accent, hsl(4, 90.9%, 60.2%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(2, 91.8%, 64.4%));
  --checkbox-marker-color: var(--background-primary, #f8f5f3);
  --checklist-done-color: var(--text-muted, #6b6b6b);
  --code-background: var(--background-primary-alt, #e4e1de);
  --code-border-color: var(--background-modifier-border, #d3d3d3);
  --code-bracket-background: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --code-comment: var(--text-faint, #b3b3b3);
  --code-function: var(--color-yellow, #FCDC37);
  --code-important: var(--color-orange, #FD912C);
  --code-keyword: var(--color-pink, #f9a7e8);
  --code-normal: var(--text-muted, #6b6b6b);
  --code-operator: var(--color-red, #FF5E23);
  --code-property: var(--color-cyan, #42A3AD);
  --code-punctuation: var(--text-muted, #6b6b6b);
  --code-string: var(--color-green, #689C2B);
  --code-tag: var(--color-red, #FF5E23);
  --code-value: var(--color-purple, #744CB4);
  --collapse-icon-color: var(--text-faint, #b3b3b3);
  --collapse-icon-color-collapsed: var(--color-accent, hsl(5, 90%, 56%));
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
  --color-accent-rgb: var(--color-red-rgb, 255, 94, 35);
  --color-base-00: #f8f5f3;
  --color-base-05: #f0ece9;
  --color-base-10: #e4e1de;
  --color-base-100: #000;
  --color-base-20: #e9e9e9;
  --color-base-25: #d3d3d3;
  --color-base-30: #d3d3d3;
  --color-base-35: #c7c7c7;
  --color-base-40: #dddddd;
  --color-base-50: #b3b3b3;
  --color-base-60: #6b6b6b;
  --color-base-70: #222222;
  --color-blue: #70B4F9;
  --color-blue-hsl: 210, 92%, 71%;
  --color-blue-rgb: 112, 180, 249;
  --color-cyan: #42A3AD;
  --color-cyan-hsl: 186, 45%, 47%;
  --color-cyan-rgb: 66, 163, 173;
  --color-green: #689C2B;
  --color-green-hsl: 88, 57%, 39%;
  --color-green-rgb: 104, 156, 43;
  --color-orange: #FD912C;
  --color-orange-hsl: 29, 98%, 58%;
  --color-orange-rgb: 253, 145, 44;
  --color-pink: #f9a7e8;
  --color-pink-hsl: 313, 95%, 68%;
  --color-pink-rgb: 251, 94, 216, 1;
  --color-purple: #744CB4;
  --color-purple-hsl: 263, 41%, 50%;
  --color-purple-rgb: 116, 76, 180;
  --color-red: #FF5E23;
  --color-red-hsl: 16, 100%, 57%;
  --color-red-rgb: 255, 94, 35;
  --color-yellow: #FCDC37;
  --color-yellow-hsl: 50, 97%, 60%;
  --color-yellow-rgb: 252, 220, 55;
  --dark: var(--text-normal, var(--color-base-70, #222222));
  --darkgray: var(--text-normal, var(--color-base-70, #222222));
  --divider-color: var(--background-modifier-border, #d3d3d3);
  --divider-color-hover: var(--interactive-accent, hsl(4, 90.9%, 60.2%));
  --dropdown-background: var(--interactive-normal, #f8f5f3);
  --dropdown-background-hover: var(--interactive-hover, #e4e1de);
  --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border),
        inset 0 0 0 1px var(--background-modifier-border);
  --file-header-background: var(--background-primary, #f8f5f3);
  --file-header-background-focused: var(--background-primary, #f8f5f3);
  --file-header-font: var(--font-interface, "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 14px);
  --file-margins: var(--size-4-8, 32px);
  --flair-background: var(--interactive-normal, #f8f5f3);
  --font-interface-theme: "Aspekta", sans-serif;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --footnote-divider-color: var(--metadata-divider-color, #d3d3d3);
  --footnote-id-color: var(--text-muted, #6b6b6b);
  --footnote-id-color-no-occurrences: var(--text-faint, #b3b3b3);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(0, 0, 0, 0.075));
  --graph-node: var(--text-muted, #6b6b6b);
  --graph-node-attachment: var(--color-accent-1, hsl(4, 90.9%, 60.2%));
  --graph-node-focused: var(--background-modifier-border-focus, #dddddd);
  --graph-node-tag: var(--color-accent, hsl(5, 90%, 56%));
  --graph-node-unresolved: var(--text-faint, #b3b3b3);
  --gray: var(--text-muted, var(--color-base-60, #6b6b6b));
  --h1-color: var(--color-base-100, #000);
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
  --heading-formatting: var(--text-faint, #b3b3b3);
  --highlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --hr-color: var(--background-modifier-border, #d3d3d3);
  --icon-color: var(--text-muted, #6b6b6b);
  --icon-color-active: var(--color-accent, hsl(5, 90%, 56%));
  --icon-color-hover: var(--text-muted, #6b6b6b);
  --inline-title-color: var(--h1-color, #000);
  --inline-title-size: var(--h1-size, clamp(2.5rem, 8vw - 4rem, 5rem));
  --inline-title-weight: var(--h1-weight, 900);
  --input-date-separator: var(--text-faint, #b3b3b3);
  --input-placeholder-color: var(--text-faint, #b3b3b3);
  --interactive-accent: var(--color-accent-1, hsl(4, 90.9%, 60.2%));
  --interactive-accent-hover: var(--color-accent-2, hsl(2, 91.8%, 64.4%));
  --interactive-accent-hsl: var(--color-accent-hsl, 5, 90%, 56%);
  --interactive-hover: var(--color-base-10, #e4e1de);
  --interactive-normal: var(--color-base-00, #f8f5f3);
  --light: var(--background-primary, var(--color-base-00, #f8f5f3));
  --lightgray: var(--background-secondary, var(--color-base-20, #e9e9e9));
  --link-color: var(--text-accent, hsl(5, 90%, 56%));
  --link-color-hover: var(--text-accent-hover, hsl(2, 91.8%, 64.4%));
  --link-external-color: var(--text-accent, hsl(5, 90%, 56%));
  --link-external-color-hover: var(--text-accent-hover, hsl(2, 91.8%, 64.4%));
  --link-unresolved-color: var(--text-accent, hsl(5, 90%, 56%));
  --list-marker-color: var(--text-faint, #b3b3b3);
  --list-marker-color-collapsed: var(--text-accent, hsl(5, 90%, 56%));
  --list-marker-color-hover: var(--text-muted, #6b6b6b);
  --menu-background: var(--background-secondary, #e9e9e9);
  --menu-border-color: var(--background-modifier-border-hover, #c7c7c7);
  --menu-shadow: var(--shadow-s, rgb(0 0 0 / 4%) 0px 3px 5px);
  --metadata-border-color: var(--background-modifier-border, #d3d3d3);
  --metadata-divider-color: var(--background-modifier-border, #d3d3d3);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --metadata-input-font: var(--font-interface, "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --metadata-label-font: var(--font-interface, "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #6b6b6b);
  --metadata-label-text-color-hover: var(--text-muted, #6b6b6b);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --modal-background: var(--background-primary, #f8f5f3);
  --nav-collapse-icon-color: var(--collapse-icon-color, #b3b3b3);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #b3b3b3);
  --nav-heading-color-collapsed: var(--text-faint, #b3b3b3);
  --nav-heading-color-collapsed-hover: var(--text-muted, #6b6b6b);
  --nav-item-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --nav-item-color: var(--text-muted, #6b6b6b);
  --nav-item-color-highlighted: var(--text-accent, hsl(5, 90%, 56%));
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, #b3b3b3);
  --nav-tag-color-active: var(--text-muted, #6b6b6b);
  --nav-tag-color-hover: var(--text-muted, #6b6b6b);
  --o-h1-color: var(--background-modifier-border, #d3d3d3);
  --o-h2-color: var(--background-modifier-border, #d3d3d3);
  --o-h3-color: var(--background-modifier-border, #d3d3d3);
  --o-h4-color: var(--background-modifier-border, #d3d3d3);
  --o-h5-color: var(--background-modifier-border, #d3d3d3);
  --o-h6-color: var(--background-modifier-border, #d3d3d3);
  --pdf-background: var(--background-primary, #f8f5f3);
  --pdf-page-background: var(--background-primary, #f8f5f3);
  --pdf-sidebar-background: var(--background-primary, #f8f5f3);
  --pill-border-color: var(--background-modifier-border, #d3d3d3);
  --pill-border-color-hover: var(--background-modifier-border-hover, #c7c7c7);
  --pill-color: var(--text-muted, #6b6b6b);
  --pill-color-remove: var(--text-faint, #b3b3b3);
  --pill-color-remove-hover: var(--text-accent, hsl(5, 90%, 56%));
  --prompt-background: var(--background-primary, #f8f5f3);
  --raised-background: var(--blur-background, color-mix(in srgb, #f8f5f3 65%, transparent) linear-gradient(#f8f5f3, color-mix(in srgb, #f8f5f3 65%, transparent)));
  --ribbon-background: var(--background-secondary, #e9e9e9);
  --ribbon-background-collapsed: var(--background-primary, #f8f5f3);
  --scrollbar-active-thumb-bg: hsla(var(--color-accent-hsl), 0.2);
  --scrollbar-thumb-bg: rgba(var(--mono-rgb-100), 0.05);
  --search-clear-button-color: var(--text-muted, #6b6b6b);
  --search-icon-color: var(--text-muted, #6b6b6b);
  --search-result-background: var(--background-primary, #f8f5f3);
  --secondary: var(--text-accent, var(--color-accent, hsl(5, 90%, 56%)));
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-items-background: var(--background-primary-alt, #e4e1de);
  --setting-items-border-color: var(--background-modifier-border, #d3d3d3);
  --shadow-l: rgb(149 157 165 / 20%) 0px 8px 24px;
  --shadow-lm-only: rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px;
  --shadow-s: rgb(0 0 0 / 4%) 0px 3px 5px;
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #6b6b6b);
  --shiki-code-background: var(--code-background, #e4e1de);
  --shiki-code-comment: var(--text-faint, #b3b3b3);
  --shiki-code-function: var(--color-green, #689C2B);
  --shiki-code-important: var(--color-orange, #FD912C);
  --shiki-code-keyword: var(--color-pink, #f9a7e8);
  --shiki-code-normal: var(--text-muted, #6b6b6b);
  --shiki-code-property: var(--color-cyan, #42A3AD);
  --shiki-code-punctuation: var(--text-muted, #6b6b6b);
  --shiki-code-string: var(--color-yellow, #FCDC37);
  --shiki-code-value: var(--color-purple, #744CB4);
  --shiki-gutter-border-color: var(--background-modifier-border, #d3d3d3);
  --shiki-gutter-text-color: var(--text-faint, #b3b3b3);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #6b6b6b);
  --shiki-highlight-neutral: var(--shiki-code-normal, #6b6b6b);
  --shiki-terminal-dots-color: var(--text-faint, #b3b3b3);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #c7c7c7);
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --slider-track-background: var(--background-modifier-border, #d3d3d3);
  --status-bar-background: var(--background-secondary, #e9e9e9);
  --status-bar-border-color: var(--divider-color, #d3d3d3);
  --status-bar-scroll-padding: calc(var(--status-bar-font-size) + 18px);
  --status-bar-text-color: var(--text-muted, #6b6b6b);
  --suggestion-background: var(--background-primary, #f8f5f3);
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: var(--color-red, #FF5E23);
  --sync-avatar-color-2: var(--color-orange, #FD912C);
  --sync-avatar-color-3: var(--color-yellow, #FCDC37);
  --sync-avatar-color-4: var(--color-green, #689C2B);
  --sync-avatar-color-5: var(--color-cyan, #42A3AD);
  --sync-avatar-color-6: var(--color-blue, #70B4F9);
  --sync-avatar-color-7: var(--color-purple, #744CB4);
  --sync-avatar-color-8: var(--color-pink, #f9a7e8);
  --tab-background-active: var(--background-primary, #f8f5f3);
  --tab-container-background: var(--background-secondary, #e9e9e9);
  --tab-divider-color: var(--background-modifier-border-hover, #c7c7c7);
  --tab-font-size: var(--font-ui-small, 14px);
  --tab-outline-color: var(--divider-color, #d3d3d3);
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-switcher-background: var(--background-secondary, #e9e9e9);
  --tab-text-color: var(--text-faint, #b3b3b3);
  --tab-text-color-active: var(--text-muted, #6b6b6b);
  --tab-text-color-focused: var(--text-muted, #6b6b6b);
  --tab-text-color-focused-active: var(--text-muted, #6b6b6b);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(5, 90%, 56%));
  --table-add-button-border-color: var(--background-modifier-border, #d3d3d3);
  --table-border-color: var(--background-modifier-border, #d3d3d3);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(4, 90.9%, 60.2%));
  --table-drag-handle-color: var(--text-faint, #b3b3b3);
  --table-drag-handle-color-active: var(--text-on-accent, #000);
  --table-header-border-color: var(--table-border-color, #d3d3d3);
  --table-selection-border-color: var(--interactive-accent, hsl(4, 90.9%, 60.2%));
  --tag-color: var(--text-accent, hsl(5, 90%, 56%));
  --tag-color-hover: var(--text-accent, hsl(5, 90%, 56%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(2, 91.8%, 64.4%)));
  --text-accent: var(--color-accent, hsl(5, 90%, 56%));
  --text-accent-hover: var(--color-accent-2, hsl(2, 91.8%, 64.4%));
  --text-cite: 87, 161, 132;
  --text-error: var(--color-red, #FF5E23);
  --text-faint: var(--color-base-50, #b3b3b3);
  --text-muted: var(--color-base-60, #6b6b6b);
  --text-normal: var(--color-base-70, #222222);
  --text-on-accent: var(--color-base-100, #000);
  --text-on-button: var(--color-base-00, #f8f5f3);
  --text-success: var(--color-green, #689C2B);
  --text-warning: var(--color-orange, #FD912C);
  --textHighlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --titlebar-background: var(--background-secondary, #e9e9e9);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, #d3d3d3);
  --titlebar-text-color: var(--text-muted, #6b6b6b);
  --transition-duration: 700ms;
  --transition-duration-short: 350ms;
  --transition-ease: ease;
  --transition-props: background var(--transition-duration), 
                        border var(--transition-duration), 
                        color var(--transition-duration);
  --vault-name-color: var(--text-normal, #222222);
  --vault-name-font-size: var(--font-ui-small, 14px);
  --vault-name-font-weight: var(--font-medium, 500);
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(248, 245, 243));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(211, 211, 211);
  border-right-style: dashed;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgb(211, 211, 211);
}

html[saved-theme="light"] body html {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--color-base-100, rgb(0, 0, 0));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--color-base-100, rgb(0, 0, 0));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--color-base-100, rgb(0, 0, 0));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--color-base-100, rgb(0, 0, 0));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(var(--color-accent-rgb), .2);
  color: var(--text-accent, rgb(244, 59, 42));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(244, 59, 42) none 0px;
  text-decoration-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body del {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="light"] body h1.article-title {
  font-size: 14px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(211, 211, 211);
  border-color: rgb(211, 211, 211);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgba(0, 0, 0, 0));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(107, 107, 107));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(107, 107, 107) none 0px;
  text-decoration-color: rgb(107, 107, 107);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(244, 59, 42));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 59, 42) none 0px;
  text-decoration-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--color-accent, rgb(244, 59, 42));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 700);
  outline: rgb(244, 59, 42) none 0px;
  text-decoration-color: rgb(244, 59, 42);
  transition: 0.7s;
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--text-muted, rgb(107, 107, 107));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 700);
  outline: rgb(107, 107, 107) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(107, 107, 107));
  transition: 0.7s;
}`,
    lists: `html[saved-theme="light"] body dt {
  font-weight: 500;
}

html[saved-theme="light"] body ul.overflow {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(179, 179, 179));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(233, 233, 233));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body table {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 186.109px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  border-top-width: 0px;
  font-weight: 500;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: var(--radius-l, 8px);
  border-top-right-radius: var(--radius-l, 0px);
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
  border-bottom-color: rgb(107, 107, 107);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(107, 107, 107);
  border-right-color: rgb(107, 107, 107);
  border-top-color: rgb(107, 107, 107);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: var(--ec-codeFg, rgb(107, 107, 107));
  font-family: var(--ec-codeFontFml, Monaspace, monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(228, 225, 222));
  border-bottom-color: rgb(244, 59, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(244, 59, 42);
  border-left-width: 1px;
  border-right-color: rgb(244, 59, 42);
  border-right-width: 1px;
  border-top-color: rgb(244, 59, 42);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body figcaption {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(0, 0, 0);
  border-radius: 12px;
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
}

html[saved-theme="light"] body video {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(228, 225, 222));
  border-bottom-color: rgb(107, 107, 107);
  border-left-color: rgb(107, 107, 107);
  border-right-color: rgb(107, 107, 107);
  border-top-color: rgb(107, 107, 107);
  border-top-left-radius: var(--radius-l, 8px);
  border-top-right-radius: var(--radius-l, 8px);
}

html[saved-theme="light"] body .transclude {
  border-left-color: rgb(246, 74, 61);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .transclude-inner {
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
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
  transition: 0.3s;
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(179, 179, 179);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 94, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 94, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(112, 180, 249);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(179, 179, 179);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 220, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 220, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(116, 76, 180);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 145, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(116, 76, 180);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 94, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 94, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 94, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 94, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 156, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 220, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 220, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(116, 76, 180);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 94, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 156, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 156, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 156, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 94, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 66, 163, 173);
  background: rgba(66, 163, 173, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(66, 163, 173);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(66, 163, 173);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(66, 163, 173);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(66, 163, 173);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .callout[data-callout="aside"] {
  --ancestor-editor-color: #222222;
  --aside-background-hover: rgba(0, 0, 0, 0.075);
  --aside-border-color: #d3d3d3;
  --aside-text-color: #6b6b6b;
  --background-modifier-active-hover: hsla(5, 90%, 56%, 0.15);
  --background-modifier-border: #d3d3d3;
  --background-modifier-border-focus: #dddddd;
  --background-modifier-border-hover: #c7c7c7;
  --background-modifier-error: #FF5E23;
  --background-modifier-error-hover: #FF5E23;
  --background-modifier-error-rgb: 255, 94, 35;
  --background-modifier-form-field: #f8f5f3;
  --background-modifier-form-field-hover: #f8f5f3;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: #689C2B;
  --background-modifier-success-rgb: 104, 156, 43;
  --background-primary: #f8f5f3;
  --background-primary-alt: #e4e1de;
  --background-primary-pre-alt: #f0ece9;
  --background-secondary: #e9e9e9;
  --background-secondary-alt: #f0ece9;
  --bb-border: 1px solid #d3d3d3;
  --bb-border-alt: 1px solid #d3d3d3;
  --bb-border-dashed: 1px dashed #d3d3d3;
  --bb-border-high-contrast: 1px solid #6b6b6b;
  --bb-shadow: -33px 24px 64px -8px hsla(5, 90%, 56%, 0.1), 33px 12px 64px -8px hsla(-170, 94.5%, 72.24%, 0.1);
  --blockquote-border-color: hsl(4, 90.9%, 60.2%);
  --blur-background: color-mix(in srgb, #f8f5f3 65%, transparent) linear-gradient(#f8f5f3, color-mix(in srgb, #f8f5f3 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 255, 94, 35;
  --callout-color: var(--callout-default, 0,
	  0,
	  0);
  --callout-default: 112, 180, 249;
  --callout-error: 255, 94, 35;
  --callout-example: 116, 76, 180;
  --callout-fail: 255, 94, 35;
  --callout-important: 66, 163, 173;
  --callout-info: 112, 180, 249;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 253, 145, 44;
  --callout-radius: 4px;
  --callout-success: 104, 156, 43;
  --callout-summary: 66, 163, 173;
  --callout-tip: 66, 163, 173;
  --callout-title-weight: 600;
  --callout-todo: 112, 180, 249;
  --callout-warning: 253, 145, 44;
  --canvas-background: #f8f5f3;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #b3b3b3;
  --caret-color: #222222;
  --checkbox-border-color: #b3b3b3;
  --checkbox-border-color-hover: #6b6b6b;
  --checkbox-color: hsl(4, 90.9%, 60.2%);
  --checkbox-color-hover: hsl(2, 91.8%, 64.4%);
  --checkbox-marker-color: #f8f5f3;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #6b6b6b;
  --clickable-icon-radius: 4px;
  --code-background: #e4e1de;
  --code-border-color: #d3d3d3;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: #b3b3b3;
  --code-function: #FCDC37;
  --code-important: #FD912C;
  --code-keyword: #f9a7e8;
  --code-normal: #6b6b6b;
  --code-operator: #FF5E23;
  --code-property: #42A3AD;
  --code-punctuation: #6b6b6b;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #689C2B;
  --code-tag: #FF5E23;
  --code-value: #744CB4;
  --collapse-icon-color: #b3b3b3;
  --collapse-icon-color-collapsed: hsl(5, 90%, 56%);
  --color-accent: hsl(5, 90%, 56%);
  --color-accent-1: hsl(4, 90.9%, 60.2%);
  --color-accent-2: hsl(2, 91.8%, 64.4%);
  --color-accent-3: hsl(-170,
        139.5%,
        72.24%);
  --color-accent-hsl: 5, 90%, 56%;
  --color-accent-rgb: 255, 94, 35;
  --divider-color: #d3d3d3;
  --divider-color-hover: hsl(4, 90.9%, 60.2%);
  --divider-vertical-height: 100%;
  --dropdown-background: #f8f5f3;
  --dropdown-background-hover: #e4e1de;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #f8f5f3;
  --flair-color: #222222;
  --font-interface: '??', "Aspekta", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: "Monaspace", monospace;
  --font-weight: 400;
  --graph-line: #c7c7c7;
  --graph-node: #6b6b6b;
  --graph-node-attachment: hsl(4, 90.9%, 60.2%);
  --graph-node-focused: #dddddd;
  --graph-node-tag: hsl(5, 90%, 56%);
  --graph-node-unresolved: #b3b3b3;
  --graph-text: #222222;
  --h1-color: #000;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #b3b3b3;
  --heading-spacing: 2.5rem;
  --hr-color: #d3d3d3;
  --interactive-accent: hsl(4, 90.9%, 60.2%);
  --interactive-accent-hover: hsl(2, 91.8%, 64.4%);
  --interactive-accent-hsl: 5, 90%, 56%;
  --interactive-hover: #e4e1de;
  --interactive-normal: #f8f5f3;
  --link-color: hsl(5, 90%, 56%);
  --link-color-hover: hsl(2, 91.8%, 64.4%);
  --link-external-color: hsl(5, 90%, 56%);
  --link-external-color-hover: hsl(2, 91.8%, 64.4%);
  --link-unresolved-color: hsl(5, 90%, 56%);
  --link-unresolved-decoration-color: hsla(5, 90%, 56%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #e9e9e9;
  --menu-border-color: #c7c7c7;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: rgb(0 0 0 / 4%) 0px 3px 5px;
  --move: 0;
  --o-h1-color: #d3d3d3;
  --o-h2-color: #d3d3d3;
  --o-h3-color: #d3d3d3;
  --o-h4-color: #d3d3d3;
  --o-h5-color: #d3d3d3;
  --o-h6-color: #d3d3d3;
  --pdf-background: #f8f5f3;
  --pdf-page-background: #f8f5f3;
  --pdf-sidebar-background: #f8f5f3;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #f8f5f3 65%, transparent) linear-gradient(#f8f5f3, color-mix(in srgb, #f8f5f3 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsla(5, 90%, 56%, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.05);
  --search-clear-button-color: #6b6b6b;
  --search-icon-color: #6b6b6b;
  --search-result-background: #f8f5f3;
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 16px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #e4e1de;
  --setting-items-border-color: #d3d3d3;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #6b6b6b;
  --shiki-code-background: #e4e1de;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #b3b3b3;
  --shiki-code-function: #689C2B;
  --shiki-code-important: #FD912C;
  --shiki-code-keyword: #f9a7e8;
  --shiki-code-normal: #6b6b6b;
  --shiki-code-property: #42A3AD;
  --shiki-code-punctuation: #6b6b6b;
  --shiki-code-string: #FCDC37;
  --shiki-code-value: #744CB4;
  --shiki-gutter-border-color: #d3d3d3;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #b3b3b3;
  --shiki-gutter-text-color-highlight: #6b6b6b;
  --shiki-highlight-green: rgba(104, 156, 43, 0.5);
  --shiki-highlight-green-background: rgba(104, 156, 43, 0.1);
  --shiki-highlight-neutral: #6b6b6b;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(255, 94, 35, 0.5);
  --shiki-highlight-red-background: rgba(255, 94, 35, 0.1);
  --shiki-terminal-dots-color: #b3b3b3;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #f8f5f3;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #FF5E23;
  --sync-avatar-color-2: #FD912C;
  --sync-avatar-color-3: #FCDC37;
  --sync-avatar-color-4: #689C2B;
  --sync-avatar-color-5: #42A3AD;
  --sync-avatar-color-6: #70B4F9;
  --sync-avatar-color-7: #744CB4;
  --sync-avatar-color-8: #f9a7e8;
  --tab-background-active: #f8f5f3;
  --tab-divider-color: #c7c7c7;
  --tab-font-size: 14px;
  --tab-outline-color: #d3d3d3;
  --tab-radius: 4px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #e9e9e9;
  --tab-switcher-menubar-background: linear-gradient(to top, #e9e9e9, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(5, 90%, 56%);
  --tab-text-color: #b3b3b3;
  --tab-text-color-active: #6b6b6b;
  --tab-text-color-focused: #6b6b6b;
  --tab-text-color-focused-active: #6b6b6b;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(5, 90%, 56%);
  --table-add-button-border-color: #d3d3d3;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(4, 90.9%, 60.2%);
  --table-drag-handle-color: #b3b3b3;
  --table-drag-handle-color-active: #000;
  --table-header-background: transparent;
  --table-header-border-color: #d3d3d3;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(5, 90%, 56%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(4, 90.9%, 60.2%);
  --table-text-size: 16px;
  --tag-background: hsla(5, 90%, 56%, 0.1);
  --tag-background-hover: hsla(5, 90%, 56%, 0.2);
  --tag-border-color: hsla(5, 90%, 56%, 0.15);
  --tag-border-color-hover: hsla(5, 90%, 56%, 0.15);
  --tag-color: hsl(5, 90%, 56%);
  --tag-color-hover: hsl(5, 90%, 56%);
  --tag-size: 0.875em;
  --text-accent: hsl(5, 90%, 56%);
  --text-accent-hover: hsl(2, 91.8%, 64.4%);
  --text-error: #FF5E23;
  --text-faint: #b3b3b3;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #6b6b6b;
  --text-normal: #222222;
  --text-on-accent: #000;
  --text-on-button: #f8f5f3;
  --text-selection: hsla(5, 90%, 56%, 0.2);
  --text-success: #689C2B;
  --text-warning: #FD912C;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --transition-props: background 700ms, 
                        border 700ms, 
                        color 700ms;
  backdrop-filter: blur(16px);
  background-color: var(--aside-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(211, 211, 211);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(211, 211, 211);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(211, 211, 211);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: var(--radius-l, 8px);
  border-top-right-radius: var(--radius-l, 8px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: var(--aside-text-color, rgb(107, 107, 107));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 12.8px;
  font-weight: 500;
  line-height: 20.48px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 4px;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 255, 94, 35);
  background: rgba(255, 94, 35, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(255, 94, 35);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 94, 35);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(255, 94, 35);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(255, 94, 35);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255, 94, 35);
  background: rgba(255, 94, 35, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(255, 94, 35);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 94, 35);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(255, 94, 35);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(255, 94, 35);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 116, 76, 180);
  background: rgba(116, 76, 180, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(116, 76, 180);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(116, 76, 180);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(116, 76, 180);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(116, 76, 180);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 94, 35);
  background: rgba(255, 94, 35, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(255, 94, 35);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 94, 35);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(255, 94, 35);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(255, 94, 35);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 112, 180, 249);
  background: rgba(112, 180, 249, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(112, 180, 249);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(112, 180, 249);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(112, 180, 249);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(112, 180, 249);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 112, 180, 249);
  background: rgba(112, 180, 249, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(112, 180, 249);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(112, 180, 249);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(112, 180, 249);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(112, 180, 249);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 253, 145, 44);
  background: rgba(253, 145, 44, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(253, 145, 44);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(253, 145, 44);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(253, 145, 44);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(253, 145, 44);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(107, 107, 107);
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
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 104, 156, 43);
  background: rgba(104, 156, 43, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(104, 156, 43);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(104, 156, 43);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(104, 156, 43);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(104, 156, 43);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 66, 163, 173);
  background: rgba(66, 163, 173, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(66, 163, 173);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(66, 163, 173);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(66, 163, 173);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(66, 163, 173);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 112, 180, 249);
  background: rgba(112, 180, 249, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(112, 180, 249);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(112, 180, 249);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(112, 180, 249);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(112, 180, 249);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 253, 145, 44);
  background: rgba(253, 145, 44, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(253, 145, 44);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(253, 145, 44);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(253, 145, 44);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(253, 145, 44);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(var(--callout-color));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 0,
	  0,
	  0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(107, 107, 107);
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
  background-color: rgb(248, 245, 243);
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: var(--radius-l, 5px);
  border-top-right-radius: var(--radius-l, 5px);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(240, 236, 233));
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  box-shadow: var(--shadow-l, rgba(149, 157, 165, 0.2) 0px 8px 24px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(211, 211, 211);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(211, 211, 211);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(211, 211, 211);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(233, 233, 233));
  font-weight: 500;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(248, 245, 243);
  border-bottom-color: rgb(211, 211, 211);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(211, 211, 211);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(211, 211, 211);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-secondary, rgb(233, 233, 233));
  border-bottom-color: rgb(211, 211, 211);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(211, 211, 211);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(211, 211, 211);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(233, 233, 233));
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(244, 59, 42, 0.1));
  border-bottom-color: rgba(244, 59, 42, 0.15);
  border-left-color: rgba(244, 59, 42, 0.15);
  border-right-color: rgba(244, 59, 42, 0.15);
  border-top-color: rgba(244, 59, 42, 0.15);
  border-top-left-radius: var(--radius-l, 28px);
  border-top-right-radius: var(--radius-l, 28px);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 500);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(244, 59, 42);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(0, 0, 0));
  font-family: var(--font-title, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(0, 0, 0));
  font-size: var(--inline-title-size, 80px);
  font-weight: var(--inline-title-weight, 900);
}

html[saved-theme="light"] body h2 {
  font-family: var(--h2-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(0, 0, 0));
  font-family: var(--inline-title-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h3 {
  font-family: var(--h3-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h4 {
  font-family: var(--h4-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h5 {
  font-family: var(--h5-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h6 {
  font-family: var(--h6-font, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-right-style: dashed;
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 112, 180, 249);
  border-bottom-color: rgb(112, 180, 249);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(112, 180, 249);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(112, 180, 249);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(112, 180, 249);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  border-top-style: dashed;
  border-top-width: 1px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(107, 107, 107));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(107, 107, 107));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  color: var(--text-normal, rgb(34, 34, 34));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(233, 233, 233));
  border-bottom-color: rgb(211, 211, 211);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-right-width: 1px;
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: var(--radius-l, 8px);
  border-top-right-radius: var(--radius-l, 8px);
  color: var(--status-bar-text-color, rgb(107, 107, 107));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(107, 107, 107);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(107, 107, 107));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: var(--text-normal, rgb(34, 34, 34));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: var(--text-normal, rgb(34, 34, 34));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(107, 107, 107));
}

html[saved-theme="light"] body ul.section-ul {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
  color: var(--text-normal, rgb(34, 34, 34));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(34, 34, 34);
  stroke: rgb(34, 34, 34);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(107, 107, 107);
  border-left-color: rgb(107, 107, 107);
  border-right-color: rgb(107, 107, 107);
  border-top-color: rgb(107, 107, 107);
  border-top-left-radius: var(--radius-l, 4px);
  border-top-right-radius: var(--radius-l, 4px);
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(179, 179, 179));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  box-shadow: 0px 0px 0px 4px var(--text-normal);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(248, 245, 243));
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(211, 211, 211);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: var(--text-muted, rgb(107, 107, 107));
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(107, 107, 107);
  border-left-color: rgb(107, 107, 107);
  border-right-color: rgb(107, 107, 107);
  border-top-color: rgb(107, 107, 107);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: rgb(107, 107, 107);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(211, 211, 211);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(107, 107, 107);
  font-weight: 500;
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(244, 59, 42, 0.1));
  color: var(--pill-color, rgb(244, 59, 42));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(248, 245, 243));
}

html[saved-theme="light"] body ol.overflow {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(233, 233, 233));
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body details {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(244, 59, 42);
  border-left-color: rgb(244, 59, 42);
  border-right-color: rgb(244, 59, 42);
  border-top-color: rgb(244, 59, 42);
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
  color: var(--text-normal, rgb(244, 59, 42));
  font-family: var(--font-mono, "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(244, 59, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(244, 59, 42);
  border-right-color: rgb(244, 59, 42);
  border-top-color: rgb(244, 59, 42);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-right-radius: var(--radius-l, 12px);
  color: var(--color-accent, rgb(244, 59, 42));
  font-family: var(--font-monospace, Monaspace, monospace);
  font-size: var(--code-size, 12px);
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

html[saved-theme="light"] body progress {
  border-top-left-radius: var(--radius-l, 0px);
  border-top-right-radius: var(--radius-l, 0px);
}

html[saved-theme="light"] body summary {
  font-weight: 500;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(244, 59, 42, 0.1));
  border-bottom-color: rgba(244, 59, 42, 0.15);
  border-left-color: rgba(244, 59, 42, 0.15);
  border-right-color: rgba(244, 59, 42, 0.15);
  border-top-color: rgba(244, 59, 42, 0.15);
  border-top-left-radius: var(--radius-l, 24.5px);
  border-top-right-radius: var(--radius-l, 24.5px);
  color: var(--tag-color, rgb(244, 59, 42));
}`,
  },
  classSettings: {
    "o-red": `.o-red {
--accent-h: 0 !important;
--accent-s: 92% !important;
--accent-l: 62% !important;
--color-accent-rgb: var(--color-red-rgb);
}

.o-red-d.theme-dark {
--accent-h: 75;
--accent-s: 21%;
--accent-l: 57%;
--color-red: #EA5E41;
--color-red-hsl: 10.3, 80.1%, 58.6%;
--color-red-rgb: 234, 94, 65;
--color-green: #5FB26B;
--color-green-hsl: 128.7, 35%, 53.5%;
--color-green-rgb: 95, 178, 107;
--color-orange: #ED874C;
--color-orange-hsl: 22, 81.7%, 61.4%;
--color-orange-rgb: 237, 135, 76;
--color-yellow: #E9BF55;
--color-yellow-hsl: 43, 77.1%, 62.4%;
--color-yellow-rgb: 233, 191, 85;
--color-cyan: #47AFEB;
--color-cyan-hsl: 202, 80.4%, 60%;
--color-cyan-rgb: 71, 175, 235;
--color-blue: #2E8CCC;
--color-blue-hsl: 204.3, 63.2%, 49%;
--color-blue-rgb: 46, 140, 204;
--color-purple: #4B53D1;
--color-purple-hsl: 236.4, 59.3%, 55.7%;
--color-purple-rgb: 75, 83, 209;
--color-pink: #EB6FAF;
--color-pink-hsl: 329, 75.6%, 67.8%;
--color-base-00: #171212;
/* background-primary */
--color-base-05: #201818;
--color-base-10: #231a1a;
/* background-primary-alt */
--color-base-20: #2c2424;
/* background-secondary */
--color-base-25: #462f2f;
/* idk lol */
--color-base-30: #422c2c;
/* background-modifier-border */
--color-base-35: #635858;
/* background-modifier-border-hover */
--color-base-40: #4e3434;
/* background-modifier-border-focus */
--color-base-50: #815757;
/* text-faint */
--color-base-60: #b18a8a;
/* also no clue */
--color-base-70: #cebdbd;
/* text-muted */
--color-base-100: #dacdcd;
/* text-normal */
}
.o-red {
--accent-h: 5 !important;
--accent-s: 90% !important;
--accent-l: 56% !important;
--color-accent-rgb: var(--color-red-rgb);
}

.o-red-l.theme-light {
--accent-h: 13;
--accent-s: 68%;
--accent-l: 63%;
--color-red-rgb: 154, 69, 60;
--color-red: #9a453c;
--color-red-hsl: 6, 44%, 42%;
--color-green-rgb: 97, 113, 91;
--color-green: #61715b;
--color-green-hsl: 104, 11%, 40%;
--color-orange-rgb: 160, 116, 75;
--color-orange: #a0744b;
--color-orange-hsl: 29, 36%, 46%;
--color-yellow-rgb: 154, 143, 81;
--color-yellow: #9a8f51;
--color-yellow-hsl: 51, 31%, 46%;
--color-cyan-rgb: 16, 77, 112;
--color-cyan: #104d70;
--color-cyan-hsl: 202, 75%, 25%;
--color-blue-rgb: 51, 83, 138;
--color-blue: #33538a;
--color-blue-hsl: 218, 45%, 37%;
--color-purple-rgb: 95, 81, 112;
--color-purple: #5f5170;
--color-purple-hsl: 267, 16%, 38%;
--color-pink-rgb: 141, 72, 63;
--color-pink: #8d483f;
--color-pink-hsl: 7, 38%, 40%;
--color-base-00: #dacdcd;
/* background-primary */
--color-base-05: #cabbbb;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #b39696;
/* background-primary-alt */
--color-base-20: #b9a5a5;
/* background-secondary */
--color-base-25: #bd9898;
/* idk lol */
--color-base-30: #b18a8a;
/* background-modifier-border */
--color-base-35: #5a3a3a;
/* background-modifier-border-hover */
--color-base-40: var(--color-base-30);
/* background-modifier-border-focus */
--color-base-50: #5a3a3a;
/* text-faint */
--color-base-60: #4e3434;
/* also no clue */
--color-base-70: #231a1a;
/* text-muted */
--color-base-100: #0b0909;
/* text-normal */
}`,
    "o-green": `.o-green {
--accent-h: 120 !important;
--accent-s: 60% !important;
--accent-l: 60% !important;
--color-accent-rgb: var(--color-green-rgb);
}

.o-green-d.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 154, 69, 60;
--color-red: #9A453C;
--color-red-hsl: 6, 44%, 42%;
--color-green-rgb: 139, 164, 129;
--color-green: #8BA481;
--color-green-hsl: 103, 16%, 57%;
--color-orange-rgb: 241, 187, 138;
--color-orange: #F1BB8A;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow-rgb: 228, 188, 127;
--color-yellow: #E4BC7F;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan-rgb: 155, 199, 189;
--color-cyan: #9BC7BD;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue-rgb: 23, 92, 89;
--color-blue: #175C59;
--color-blue-hsl: 177, 60%, 23%;
--color-purple-rgb: 166, 154, 181;
--color-purple: #A69AB5;
--color-purple-hsl: 267, 15%, 66%;
--color-pink-rgb: 239, 121, 106;
--color-pink: #EF796A;
--color-pink-hsl: 7, 81%, 68%;
--canvas-color: 245, 245, 245;
--color-base-00: #121715;
/* background-primary */
--color-base-05: #18201c;
--color-base-10: #1A231F;
/* background-primary-alt */
--color-base-20: #232b28;
/* background-secondary */
--color-base-25: #283a31;
/* idk lol */
--color-base-30: #344E41;
/* background-modifier-border */
--color-base-35: #635E58;
/* background-modifier-border-hover */
--color-base-40: #344E41;
/* background-modifier-border-focus */
--color-base-50: #588157;
/* text-faint */
--color-base-60: #A3B18A;
/* also no clue */
--color-base-70: #CDCEBD;
/* text-muted */
--color-base-100: #dad7cd;
/* text-normal */
}
.o-green {
--accent-h: 88 !important;
--accent-s: 80% !important;
--accent-l: 39% !important;
--color-accent-rgb: var(--color-green-rgb);
}

.o-green-l.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-red-rgb: 154, 69, 60;
--color-red: #9a453c;
--color-red-hsl: 6, 44%, 42%;
--color-green-rgb: 97, 113, 91;
--color-green: #61715b;
--color-green-hsl: 104, 11%, 40%;
--color-orange-rgb: 160, 116, 75;
--color-orange: #a0744b;
--color-orange-hsl: 29, 36%, 46%;
--color-yellow-rgb: 154, 143, 81;
--color-yellow: #9a8f51;
--color-yellow-hsl: 51, 31%, 46%;
--color-cyan-rgb: 16, 77, 112;
--color-cyan: #104d70;
--color-cyan-hsl: 202, 75%, 25%;
--color-blue-rgb: 51, 83, 138;
--color-blue: #33538a;
--color-blue-hsl: 218, 45%, 37%;
--color-purple-rgb: 95, 81, 112;
--color-purple: #5f5170;
--color-purple-hsl: 267, 16%, 38%;
--color-pink-rgb: 141, 72, 63;
--color-pink: #8d483f;
--color-pink-hsl: 7, 38%, 40%;
--canvas-color: 10, 10, 10;
--color-base-00: #dad7cd;
/* background-primary */
--color-base-05: #bec5b3;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #acb899;
/* background-primary-alt */
--color-base-20: #b6b8a4;
/* background-secondary */
--color-base-25: #A3B18A;
/* idk lol */
--color-base-30: #a3b18a;
/* background-modifier-border */
--color-base-35: #3A5A40;
/* background-modifier-border-hover */
--color-base-40: var(--color-base-30);
/* background-modifier-border-focus */
--color-base-50: #3A5A40;
/* text-faint */
--color-base-60: #344E41;
/* also no clue */
--color-base-70: #1A231F;
/* text-muted */
--color-base-100: #090B0A;
/* text-normal */
}`,
    "o-blue": `.o-blue {
--accent-h: 216 !important;
--accent-s: 100% !important;
--accent-l: 60% !important;
--color-accent-rgb: var(--color-blue-rgb);
}

.o-blue-d.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 154, 69, 60;
--color-red: #9A453C;
--color-red-hsl: 6, 44%, 42%;
--color-green-rgb: 139, 164, 129;
--color-green: #8BA481;
--color-green-hsl: 103, 16%, 57%;
--color-orange-rgb: 241, 187, 138;
--color-orange: #F1BB8A;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow-rgb: 228, 188, 127;
--color-yellow: #E4BC7F;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan-rgb: 155, 199, 189;
--color-cyan: #9BC7BD;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue-rgb: 23, 92, 89;
--color-blue: #175C59;
--color-blue-hsl: 177, 60%, 23%;
--color-purple-rgb: 166, 154, 181;
--color-purple: #A69AB5;
--color-purple-hsl: 267, 15%, 66%;
--color-pink-rgb: 239, 121, 106;
--color-pink: #EF796A;
--color-pink-hsl: 7, 81%, 68%;
--canvas-color: 245, 245, 245;
--color-base-00: #121517;
/* background-primary */
--color-base-05: #181b20;
--color-base-10: #1a1d23;
/* background-primary-alt */
--color-base-20: #232c30;
/* background-secondary */
--color-base-25: #2c3a41;
/* idk lol */
--color-base-30: #34464e;
/* background-modifier-border */
--color-base-35: #585e63;
/* background-modifier-border-hover */
--color-base-40: #34404e;
/* background-modifier-border-focus */
--color-base-50: #575f81;
/* text-faint */
--color-base-60: #8a99b1;
/* also no clue */
--color-base-70: #bdc4ce;
/* text-muted */
--color-base-100: #cdd0da;
/* text-normal */
}
.o-blue {
--accent-h: 210 !important;
--accent-s: 100% !important;
--accent-l: 39% !important;
--color-accent-rgb: var(--color-blue-rgb);
}

.o-blue-l.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-red-rgb: 154, 69, 60;
--color-red: #9a453c;
--color-red-hsl: 6, 44%, 42%;
--color-green-rgb: 97, 113, 91;
--color-green: #61715b;
--color-green-hsl: 104, 11%, 40%;
--color-orange-rgb: 160, 116, 75;
--color-orange: #a0744b;
--color-orange-hsl: 29, 36%, 46%;
--color-yellow-rgb: 154, 143, 81;
--color-yellow: #9a8f51;
--color-yellow-hsl: 51, 31%, 46%;
--color-cyan-rgb: 16, 77, 112;
--color-cyan: #104d70;
--color-cyan-hsl: 202, 75%, 25%;
--color-blue-rgb: 51, 83, 138;
--color-blue: #33538a;
--color-blue-hsl: 218, 45%, 37%;
--color-purple-rgb: 95, 81, 112;
--color-purple: #5f5170;
--color-purple-hsl: 267, 16%, 38%;
--color-pink-rgb: 141, 72, 63;
--color-pink: #8d483f;
--color-pink-hsl: 7, 38%, 40%;
--canvas-color: 10, 10, 10;
--color-base-00: #cdd5da;
/* background-primary */
--color-base-05: #c0c8ce;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #9cacb4;
/* background-primary-alt */
--color-base-20: #a6b0b9;
/* background-secondary */
--color-base-25: #7e95a5;
/* idk lol */
--color-base-30: #8aa3b1;
/* background-modifier-border */
--color-base-35: #3a4c5a;
/* background-modifier-border-hover */
--color-base-40: var(--color-base-30);
/* background-modifier-border-focus */
--color-base-50: #3a4d5a;
/* text-faint */
--color-base-60: #34414e;
/* also no clue */
--color-base-70: #1a1f23;
/* text-muted */
--color-base-100: #090a0b;
/* text-normal */
}`,
    "o-purple": `.o-purple {
--accent-h: 274 !important;
--accent-s: 100% !important;
--accent-l: 60% !important;
--color-accent-rgb: var(--color-purple-rgb);
}

.o-purple-d.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 154, 69, 60;
--color-red: #9A453C;
--color-red-hsl: 6, 44%, 42%;
--color-green-rgb: 139, 164, 129;
--color-green: #8BA481;
--color-green-hsl: 103, 16%, 57%;
--color-orange-rgb: 241, 187, 138;
--color-orange: #F1BB8A;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow-rgb: 228, 188, 127;
--color-yellow: #E4BC7F;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan-rgb: 155, 199, 189;
--color-cyan: #9BC7BD;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue-rgb: 23, 92, 89;
--color-blue: #175C59;
--color-blue-hsl: 177, 60%, 23%;
--color-purple-rgb: 166, 154, 181;
--color-purple: #A69AB5;
--color-purple-hsl: 267, 15%, 66%;
--color-pink-rgb: 239, 121, 106;
--color-pink: #EF796A;
--color-pink-hsl: 7, 81%, 68%;
--canvas-color: 245, 245, 245;
--color-base-00: #141217;
/* background-primary */
--color-base-05: #1c1820;
--color-base-10: #211a23;
/* background-primary-alt */
--color-base-20: #2c2330;
/* background-secondary */
--color-base-25: #392d41;
/* idk lol */
--color-base-30: #44344e;
/* background-modifier-border */
--color-base-35: #5e5863;
/* background-modifier-border-hover */
--color-base-40: #40344e;
/* background-modifier-border-focus */
--color-base-50: #665781;
/* text-faint */
--color-base-60: rgb(163, 138, 177);
/* also no clue */
--color-base-70: #c6bdce;
/* text-muted */
--color-base-100: #d5cdda;
/* text-normal */
}
.o-purple {
--accent-h: 263 !important;
--accent-s: 80% !important;
--accent-l: 39% !important;
--color-accent-rgb: var(--color-purple-rgb);
}

.o-purple-l.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-red-rgb: 154, 69, 60;
--color-red: #9a453c;
--color-red-hsl: 6, 44%, 42%;
--color-green-rgb: 97, 113, 91;
--color-green: #61715b;
--color-green-hsl: 104, 11%, 40%;
--color-orange-rgb: 160, 116, 75;
--color-orange: #a0744b;
--color-orange-hsl: 29, 36%, 46%;
--color-yellow-rgb: 154, 143, 81;
--color-yellow: #9a8f51;
--color-yellow-hsl: 51, 31%, 46%;
--color-cyan-rgb: 16, 77, 112;
--color-cyan: #104d70;
--color-cyan-hsl: 202, 75%, 25%;
--color-blue-rgb: 51, 83, 138;
--color-blue: #33538a;
--color-blue-hsl: 218, 45%, 37%;
--color-purple-rgb: 95, 81, 112;
--color-purple: #5f5170;
--color-purple-hsl: 267, 16%, 38%;
--color-pink-rgb: 141, 72, 63;
--color-pink: #8d483f;
--color-pink-hsl: 7, 38%, 40%;
--canvas-color: 10, 10, 10;
--color-base-00: #dbc7db;
/* background-primary */
--color-base-05: #c7b0c7;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #bda4ba;
/* background-primary-alt */
--color-base-20: #b69fb6;
/* background-secondary */
--color-base-25: #a777a4;
/* idk lol */
--color-base-30: #b18aae;
/* background-modifier-border */
--color-base-35: #5a3a50;
/* background-modifier-border-hover */
--color-base-40: var(--color-base-30);
/* background-modifier-border-focus */
--color-base-50: #a7889b;
/* text-faint */
--color-base-60: #8f7189;
/* also no clue */
--color-base-70: #231a21;
/* text-muted */
--color-base-100: #0b090a;
/* text-normal */
}`,
    "o-red-l": `.theme-light {
--accent-h: 13;
--accent-s: 68%;
--accent-l: 63%;
--color-red-rgb: 154, 69, 60;
--color-red: #9a453c;
--color-red-hsl: 6, 44%, 42%;
--color-green-rgb: 97, 113, 91;
--color-green: #61715b;
--color-green-hsl: 104, 11%, 40%;
--color-orange-rgb: 160, 116, 75;
--color-orange: #a0744b;
--color-orange-hsl: 29, 36%, 46%;
--color-yellow-rgb: 154, 143, 81;
--color-yellow: #9a8f51;
--color-yellow-hsl: 51, 31%, 46%;
--color-cyan-rgb: 16, 77, 112;
--color-cyan: #104d70;
--color-cyan-hsl: 202, 75%, 25%;
--color-blue-rgb: 51, 83, 138;
--color-blue: #33538a;
--color-blue-hsl: 218, 45%, 37%;
--color-purple-rgb: 95, 81, 112;
--color-purple: #5f5170;
--color-purple-hsl: 267, 16%, 38%;
--color-pink-rgb: 141, 72, 63;
--color-pink: #8d483f;
--color-pink-hsl: 7, 38%, 40%;
--color-base-00: #dacdcd;
/* background-primary */
--color-base-05: #cabbbb;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #b39696;
/* background-primary-alt */
--color-base-20: #b9a5a5;
/* background-secondary */
--color-base-25: #bd9898;
/* idk lol */
--color-base-30: #b18a8a;
/* background-modifier-border */
--color-base-35: #5a3a3a;
/* background-modifier-border-hover */
--color-base-40: var(--color-base-30);
/* background-modifier-border-focus */
--color-base-50: #5a3a3a;
/* text-faint */
--color-base-60: #4e3434;
/* also no clue */
--color-base-70: #231a1a;
/* text-muted */
--color-base-100: #0b0909;
/* text-normal */
}`,
    "o-green-l": `.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-red-rgb: 154, 69, 60;
--color-red: #9a453c;
--color-red-hsl: 6, 44%, 42%;
--color-green-rgb: 97, 113, 91;
--color-green: #61715b;
--color-green-hsl: 104, 11%, 40%;
--color-orange-rgb: 160, 116, 75;
--color-orange: #a0744b;
--color-orange-hsl: 29, 36%, 46%;
--color-yellow-rgb: 154, 143, 81;
--color-yellow: #9a8f51;
--color-yellow-hsl: 51, 31%, 46%;
--color-cyan-rgb: 16, 77, 112;
--color-cyan: #104d70;
--color-cyan-hsl: 202, 75%, 25%;
--color-blue-rgb: 51, 83, 138;
--color-blue: #33538a;
--color-blue-hsl: 218, 45%, 37%;
--color-purple-rgb: 95, 81, 112;
--color-purple: #5f5170;
--color-purple-hsl: 267, 16%, 38%;
--color-pink-rgb: 141, 72, 63;
--color-pink: #8d483f;
--color-pink-hsl: 7, 38%, 40%;
--canvas-color: 10, 10, 10;
--color-base-00: #dad7cd;
/* background-primary */
--color-base-05: #bec5b3;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #acb899;
/* background-primary-alt */
--color-base-20: #b6b8a4;
/* background-secondary */
--color-base-25: #A3B18A;
/* idk lol */
--color-base-30: #a3b18a;
/* background-modifier-border */
--color-base-35: #3A5A40;
/* background-modifier-border-hover */
--color-base-40: var(--color-base-30);
/* background-modifier-border-focus */
--color-base-50: #3A5A40;
/* text-faint */
--color-base-60: #344E41;
/* also no clue */
--color-base-70: #1A231F;
/* text-muted */
--color-base-100: #090B0A;
/* text-normal */
}`,
    "o-blue-l": `.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-red-rgb: 154, 69, 60;
--color-red: #9a453c;
--color-red-hsl: 6, 44%, 42%;
--color-green-rgb: 97, 113, 91;
--color-green: #61715b;
--color-green-hsl: 104, 11%, 40%;
--color-orange-rgb: 160, 116, 75;
--color-orange: #a0744b;
--color-orange-hsl: 29, 36%, 46%;
--color-yellow-rgb: 154, 143, 81;
--color-yellow: #9a8f51;
--color-yellow-hsl: 51, 31%, 46%;
--color-cyan-rgb: 16, 77, 112;
--color-cyan: #104d70;
--color-cyan-hsl: 202, 75%, 25%;
--color-blue-rgb: 51, 83, 138;
--color-blue: #33538a;
--color-blue-hsl: 218, 45%, 37%;
--color-purple-rgb: 95, 81, 112;
--color-purple: #5f5170;
--color-purple-hsl: 267, 16%, 38%;
--color-pink-rgb: 141, 72, 63;
--color-pink: #8d483f;
--color-pink-hsl: 7, 38%, 40%;
--canvas-color: 10, 10, 10;
--color-base-00: #cdd5da;
/* background-primary */
--color-base-05: #c0c8ce;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #9cacb4;
/* background-primary-alt */
--color-base-20: #a6b0b9;
/* background-secondary */
--color-base-25: #7e95a5;
/* idk lol */
--color-base-30: #8aa3b1;
/* background-modifier-border */
--color-base-35: #3a4c5a;
/* background-modifier-border-hover */
--color-base-40: var(--color-base-30);
/* background-modifier-border-focus */
--color-base-50: #3a4d5a;
/* text-faint */
--color-base-60: #34414e;
/* also no clue */
--color-base-70: #1a1f23;
/* text-muted */
--color-base-100: #090a0b;
/* text-normal */
}`,
    "o-purple-l": `.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-red-rgb: 154, 69, 60;
--color-red: #9a453c;
--color-red-hsl: 6, 44%, 42%;
--color-green-rgb: 97, 113, 91;
--color-green: #61715b;
--color-green-hsl: 104, 11%, 40%;
--color-orange-rgb: 160, 116, 75;
--color-orange: #a0744b;
--color-orange-hsl: 29, 36%, 46%;
--color-yellow-rgb: 154, 143, 81;
--color-yellow: #9a8f51;
--color-yellow-hsl: 51, 31%, 46%;
--color-cyan-rgb: 16, 77, 112;
--color-cyan: #104d70;
--color-cyan-hsl: 202, 75%, 25%;
--color-blue-rgb: 51, 83, 138;
--color-blue: #33538a;
--color-blue-hsl: 218, 45%, 37%;
--color-purple-rgb: 95, 81, 112;
--color-purple: #5f5170;
--color-purple-hsl: 267, 16%, 38%;
--color-pink-rgb: 141, 72, 63;
--color-pink: #8d483f;
--color-pink-hsl: 7, 38%, 40%;
--canvas-color: 10, 10, 10;
--color-base-00: #dbc7db;
/* background-primary */
--color-base-05: #c7b0c7;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #bda4ba;
/* background-primary-alt */
--color-base-20: #b69fb6;
/* background-secondary */
--color-base-25: #a777a4;
/* idk lol */
--color-base-30: #b18aae;
/* background-modifier-border */
--color-base-35: #5a3a50;
/* background-modifier-border-hover */
--color-base-40: var(--color-base-30);
/* background-modifier-border-focus */
--color-base-50: #a7889b;
/* text-faint */
--color-base-60: #8f7189;
/* also no clue */
--color-base-70: #231a21;
/* text-muted */
--color-base-100: #0b090a;
/* text-normal */
}`,
    "o-min-l": `.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-red-rgb: 233, 49, 71;
--color-red: #E93147;
--color-red-hsl: 353, 81%, 55%;
--color-green-rgb: 8, 185, 78;
--color-green: #08B94E;
--color-green-hsl: 144, 92%, 38%;
--color-orange-rgb: 236, 117, 0;
--color-orange: #EC7500;
--color-orange-hsl: 30, 100%, 46%;
--color-yellow-rgb: 224, 172, 0;
--color-yellow: #E0AC00;
--color-yellow-hsl: 46, 100%, 44%;
--color-cyan-rgb: 0, 191, 188;
--color-cyan: #00BFBC;
--color-cyan-hsl: 179, 100%, 37%;
--color-blue-rgb: 8, 109, 221;
--color-blue: #086DDD;
--color-blue-hsl: 212, 93%, 45%;
--color-purple-rgb: 120, 82, 238;
--color-purple: #7852EE;
--color-purple-hsl: 255, 82%, 63%;
--color-pink-rgb: 213, 57, 132;
--color-pink: #D53984;
--color-pink-hsl: 331, 65%, 53%;
--canvas-color: 51, 51, 49;
--color-base-00: #ffffff;
--color-base-05: #ffffff;
--color-base-10: #ffffff;
--color-base-20: #f6f6f6;
--color-base-25: #ffffff;
--color-base-30: #dfdfdf;
--color-base-35: #d4d4d4;
--color-base-40: #f6f6f6;
--color-base-50: #969696;
--color-base-60: #707070;
--color-base-70: #5a5a5a;
--color-base-100: #222222;
}

.o-min-l .workspace-ribbon {
border-right: none !important;
background: var(--background-primary-alt);
}

.o-min-l .workspace-ribbon.mod-left.is-collapsed {
background: var(--background-primary-alt);
border-right: none !important;
}

:root:root:root:root:root .theme-light:not(.is-mobile) .workspace-sidedock-vault-profile {
border-top: none !important;
background: var(--background-secondary) !important;
border-radius: var(--radius-l);
margin-bottom: 8px;
width: 97.5%;
}

.theme-light .workspace-ribbon.mod-left .sidebar-toggle-button {
border-right: none !important;
}

.theme-light .nav-file-title.is-active {
background-color: transparent;
border: none;
}`,
    "o-soft-l": `.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-red-rgb: 239, 121, 106;
--color-red: #EF796A;
--color-red-hsl: 7, 81%, 68%;
--color-green-rgb: 140, 179, 105;
--color-green: #8CB369;
--color-green-hsl: 92, 33%, 56%;
--color-orange-rgb: 255, 127, 81;
--color-orange: #FF7F51;
--color-orange-hsl: 16, 100%, 66%;
--color-yellow-rgb: 237, 174, 73;
--color-yellow: #EDAE49;
--color-yellow-hsl: 37, 82%, 61%;
--color-cyan-rgb: 15, 189, 168;
--color-cyan: #0FBDA8;
--color-cyan-hsl: 173, 85%, 40%;
--color-blue-rgb: 120, 139, 255;
--color-blue: #788BFF;
--color-blue-hsl: 232, 100%, 74%;
--color-purple-rgb: 147, 129, 255;
--color-purple: #9381FF;
--color-purple-hsl: 249, 100%, 75%;
--color-pink-rgb: 251, 99, 118;
--color-pink: #FB6376;
--color-pink-hsl: 353, 95%, 69%;
--canvas-color: 10, 10, 10;
--color-base-00: #f7f4e8;
/* note bg */
--color-base-05: #ece8d8;
/* unfocused tab & dock & modal */
--color-base-10: #e6e1cf;
/* ribbon */
--color-base-20: #dfdbcd;
/* active tab & secondary areas & tab border & selected */
--color-base-25: #cfc9b2;
/* hightlighted area border */
--color-base-30: #DAD6CA;
/*  good ole border */
--color-base-35: #c7b8a9;
/* tab/clickable icon hover border */
--color-base-40: #dacdc1;
/* tab/clickable icon hover bg */
--color-base-50: #7c7062;
/* text-faint/folder icons */
--color-base-60: #92887c;
/* text-muted */
--color-base-70: #6e655b;
/* text-normal */
--color-base-100: #433C34;
/* text-header/title */
}`,
    "o-shark-l": `.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-red-rgb: 255, 94, 35;
--color-red: #FF5E23;
--color-red-hsl: 16, 100%, 57%;
--color-green-rgb: 104, 156, 43;
--color-green: #689C2B;
--color-green-hsl: 88, 57%, 39%;
--color-orange-rgb: 253, 145, 44;
--color-orange: #FD912C;
--color-orange-hsl: 29, 98%, 58%;
--color-yellow-rgb: 218, 190, 47;
--color-yellow: #dabe2f;
--color-yellow-hsl: 50, 70%, 52%;
--color-cyan-rgb: 66, 163, 173;
--color-cyan: #42A3AD;
--color-cyan-hsl: 186, 45%, 47%;
--color-blue-rgb: 112, 180, 249;
--color-blue: #70B4F9;
--color-blue-hsl: 210, 92%, 71%;
--color-purple-rgb: 116, 76, 180;
--color-purple: #744CB4;
--color-purple-hsl: 263, 41%, 50%;
--color-pink-rgb: 255, 110, 185;
--color-pink: #FF6EB9;
--color-pink-hsl: 329, 100%, 72%;
--canvas-color: 51, 51, 49;
--color-base-00: #dce8f3;
/* background-primary */
--color-base-05: #ececec;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #f0f0f0;
/* background-primary-alt */
--color-base-20: #c9dbec;
/* background-secondary */
--color-base-25: #b3c6da;
/* idk lol */
--color-base-30: #d6c7d6;
/* background-modifier-border */
--color-base-35: #eeaeb0;
/* background-modifier-border-hover */
--color-base-40: #e5989b;
/* background-modifier-border-focus */
--color-base-50: #e4a4a7;
/* text-faint */
--color-base-60: #333331;
/* also no clue */
--color-base-70: #333331;
/* text-muted */
--color-base-100: #3D3D3D;
/* text-normal */
--accent-h: 358 !important;
--accent-s: 60% !important;
--accent-l: 75% !important;
--color-accent-rgb: 112, 180, 249 !important;
--color-accent-hsl: 210, 92%, 71% !important;
--h1-color: #70B4F9;
--h2-color: #e6999c;
}

.o-shark-l .nav-file-title.is-active {
background-color: #eec8ca !important;
border: var(--bb-border);
}

.o-shark-l .workspace-ribbon {
background: #eec8ca;
}

.o-shark-l .workspace-ribbon.mod-left .sidebar-toggle-button {
background-color: #eec8ca;
}

.o-shark-l .workspace-ribbon.mod-left .sidebar-toggle-button:hover .clickable-icon {
color: var(--text-normal) !important;
}

.o-shark-l .side-dock-actions .side-dock-ribbon-action {
background: #f1eded;
border: 1px solid #ffffff !important;
}

.o-shark-l .mod-left-split .workspace-tabs .workspace-leaf, .o-shark-l .mod-right-split .workspace-tabs .workspace-leaf {
background: #f1eded !important;
}

.o-shark-l .workspace-tabs.mod-top-left-space .workspace-tab-header-container, .o-shark-l .workspace-tabs.mod-top-right-space .workspace-tab-header-container {
background: #f1eded;
}

.o-shark-l .workspace .mod-root .workspace-tab-header:not(.is-active) {
font-weight: 600;
background: #f1efef !important;
border: 1px solid #ffffff;
border-radius: var(--radius-l);
}

.o-header-lapel .markdown-reading-view h1:not(.embedded-note-title)::before, .o-header-lapel :nth-child(1 of .cm-header-1)::before {
background: #70B4F9 !important;
}

.o-header-lapel .markdown-reading-view h2:not(.embedded-note-title)::before, .o-header-lapel :nth-child(1 of .cm-header-2)::before {
background: #e5989b;
}`,
    "o-solar-lt": `.o-solar-lt {
--accent-h: 175.5;
--accent-s: 58.6%;
--accent-l: 39.8%;
--color-red: #DC322F;
--color-red-hsl: 1, 71.2%, 52.4%;
--color-red-rgb: 220, 50, 47;
--color-green: #859900;
--color-green-hsl: 67.8, 100%, 30%;
--color-green-rgb: 133, 153, 0;
--color-orange: #CB4B16;
--color-orange-hsl: 17.6, 80.4%, 44.1%;
--color-orange-rgb: 203, 75, 22;
--color-yellow: #B58900;
--color-yellow-hsl: 45.4, 100%, 35.5%;
--color-yellow-rgb: 203, 75, 22;
--color-cyan: #2AA198;
--color-cyan-hsl: 175.5, 58.6%, 39.8%;
--color-cyan-rgb: 42, 161, 152;
--color-blue: #268BD2;
--color-blue-hsl: 204.8, 69.4%, 48.6%;
--color-blue-rgb: 38, 139, 210;
--color-purple: #6C71C4;
--color-purple-hsl: 236.6, 42.7%, 59.6%;
--color-purple-rgb: 38, 139, 210;
--color-pink: #D33682;
--color-pink-hsl: 331, 64.1%, 52%;
--color-pink-rgb: 211, 54, 130;
--color-base-00: #fdf6e3;
--color-base-05: #eee8d5;
--color-base-10: #eee8d5;
--color-base-20: #dad3c2;
--color-base-25: #b6b4ae;
--color-base-30: #B7B6B2;
--color-base-35: #b6b4ae;
--color-base-40: #dad3c2;
--color-base-50: #93A1A1;
--color-base-60: #586E75;
--color-base-70: #657B83;
--color-base-100: #586E75;
}`,
    "o-gruvbox-lt": `.o-gruvbox-lt {
--accent-h: 13;
--accent-s: 68%;
--accent-l: 63%;
--color-red: #9D0006;
--color-red-hsl: 357.7, 100%, 30.8%;
--color-red-rgb: 157, 0, 6;
--color-green: #79740E;
--color-green-hsl: 57.2, 79.3%, 26.5%;
--color-green-rgb: 121, 116, 14;
--color-orange: #AF3A03;
--color-orange-hsl: 19.2, 96.6%, 34.9%;
--color-orange-rgb: 175, 58, 3;
--color-yellow: #B57614;
--color-yellow-hsl: 36.5, 80.1%, 39.4%;
--color-yellow-rgb: 181, 118, 20;
--color-cyan: #427B58;
--color-cyan-hsl: 143.2, 30.2%, 37.1%;
--color-cyan-rgb: 66, 123, 88;
--color-blue: #076678;
--color-blue-hsl: 189.6, 89%, 24.9%;
--color-blue-rgb: 143, 63, 113;
--color-purple: #8F3F71;
--color-purple-hsl: 322.5, 38.8%, 40.4%;
--color-purple-rgb: 143, 63, 113;
--color-pink: #F6B7D8;
--color-pink-hsl: 328.6, 77.8%, 84.1%;
--color-base-00: #FBF1C7;
--color-base-05: #eee2bc;
--color-base-10: #e4d7ae;
--color-base-20: #EBDBB2;
--color-base-25: #D5C4A1;
--color-base-30: #BDAE93;
--color-base-35: #eee2bc;
--color-base-40: #f7ebc4;
--color-base-50: #665C54;
--color-base-60: #504945;
--color-base-70: #3C3836;
--color-base-100: #282828;
}`,
    "o-red-d": `.theme-dark {
--accent-h: 75;
--accent-s: 21%;
--accent-l: 57%;
--color-red: #EA5E41;
--color-red-hsl: 10.3, 80.1%, 58.6%;
--color-red-rgb: 234, 94, 65;
--color-green: #5FB26B;
--color-green-hsl: 128.7, 35%, 53.5%;
--color-green-rgb: 95, 178, 107;
--color-orange: #ED874C;
--color-orange-hsl: 22, 81.7%, 61.4%;
--color-orange-rgb: 237, 135, 76;
--color-yellow: #E9BF55;
--color-yellow-hsl: 43, 77.1%, 62.4%;
--color-yellow-rgb: 233, 191, 85;
--color-cyan: #47AFEB;
--color-cyan-hsl: 202, 80.4%, 60%;
--color-cyan-rgb: 71, 175, 235;
--color-blue: #2E8CCC;
--color-blue-hsl: 204.3, 63.2%, 49%;
--color-blue-rgb: 46, 140, 204;
--color-purple: #4B53D1;
--color-purple-hsl: 236.4, 59.3%, 55.7%;
--color-purple-rgb: 75, 83, 209;
--color-pink: #EB6FAF;
--color-pink-hsl: 329, 75.6%, 67.8%;
--color-base-00: #171212;
/* background-primary */
--color-base-05: #201818;
--color-base-10: #231a1a;
/* background-primary-alt */
--color-base-20: #2c2424;
/* background-secondary */
--color-base-25: #462f2f;
/* idk lol */
--color-base-30: #422c2c;
/* background-modifier-border */
--color-base-35: #635858;
/* background-modifier-border-hover */
--color-base-40: #4e3434;
/* background-modifier-border-focus */
--color-base-50: #815757;
/* text-faint */
--color-base-60: #b18a8a;
/* also no clue */
--color-base-70: #cebdbd;
/* text-muted */
--color-base-100: #dacdcd;
/* text-normal */
}`,
    "o-green-d": `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 154, 69, 60;
--color-red: #9A453C;
--color-red-hsl: 6, 44%, 42%;
--color-green-rgb: 139, 164, 129;
--color-green: #8BA481;
--color-green-hsl: 103, 16%, 57%;
--color-orange-rgb: 241, 187, 138;
--color-orange: #F1BB8A;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow-rgb: 228, 188, 127;
--color-yellow: #E4BC7F;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan-rgb: 155, 199, 189;
--color-cyan: #9BC7BD;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue-rgb: 23, 92, 89;
--color-blue: #175C59;
--color-blue-hsl: 177, 60%, 23%;
--color-purple-rgb: 166, 154, 181;
--color-purple: #A69AB5;
--color-purple-hsl: 267, 15%, 66%;
--color-pink-rgb: 239, 121, 106;
--color-pink: #EF796A;
--color-pink-hsl: 7, 81%, 68%;
--canvas-color: 245, 245, 245;
--color-base-00: #121715;
/* background-primary */
--color-base-05: #18201c;
--color-base-10: #1A231F;
/* background-primary-alt */
--color-base-20: #232b28;
/* background-secondary */
--color-base-25: #283a31;
/* idk lol */
--color-base-30: #344E41;
/* background-modifier-border */
--color-base-35: #635E58;
/* background-modifier-border-hover */
--color-base-40: #344E41;
/* background-modifier-border-focus */
--color-base-50: #588157;
/* text-faint */
--color-base-60: #A3B18A;
/* also no clue */
--color-base-70: #CDCEBD;
/* text-muted */
--color-base-100: #dad7cd;
/* text-normal */
}`,
    "o-blue-d": `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 154, 69, 60;
--color-red: #9A453C;
--color-red-hsl: 6, 44%, 42%;
--color-green-rgb: 139, 164, 129;
--color-green: #8BA481;
--color-green-hsl: 103, 16%, 57%;
--color-orange-rgb: 241, 187, 138;
--color-orange: #F1BB8A;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow-rgb: 228, 188, 127;
--color-yellow: #E4BC7F;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan-rgb: 155, 199, 189;
--color-cyan: #9BC7BD;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue-rgb: 23, 92, 89;
--color-blue: #175C59;
--color-blue-hsl: 177, 60%, 23%;
--color-purple-rgb: 166, 154, 181;
--color-purple: #A69AB5;
--color-purple-hsl: 267, 15%, 66%;
--color-pink-rgb: 239, 121, 106;
--color-pink: #EF796A;
--color-pink-hsl: 7, 81%, 68%;
--canvas-color: 245, 245, 245;
--color-base-00: #121517;
/* background-primary */
--color-base-05: #181b20;
--color-base-10: #1a1d23;
/* background-primary-alt */
--color-base-20: #232c30;
/* background-secondary */
--color-base-25: #2c3a41;
/* idk lol */
--color-base-30: #34464e;
/* background-modifier-border */
--color-base-35: #585e63;
/* background-modifier-border-hover */
--color-base-40: #34404e;
/* background-modifier-border-focus */
--color-base-50: #575f81;
/* text-faint */
--color-base-60: #8a99b1;
/* also no clue */
--color-base-70: #bdc4ce;
/* text-muted */
--color-base-100: #cdd0da;
/* text-normal */
}`,
    "o-purple-d": `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 154, 69, 60;
--color-red: #9A453C;
--color-red-hsl: 6, 44%, 42%;
--color-green-rgb: 139, 164, 129;
--color-green: #8BA481;
--color-green-hsl: 103, 16%, 57%;
--color-orange-rgb: 241, 187, 138;
--color-orange: #F1BB8A;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow-rgb: 228, 188, 127;
--color-yellow: #E4BC7F;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan-rgb: 155, 199, 189;
--color-cyan: #9BC7BD;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue-rgb: 23, 92, 89;
--color-blue: #175C59;
--color-blue-hsl: 177, 60%, 23%;
--color-purple-rgb: 166, 154, 181;
--color-purple: #A69AB5;
--color-purple-hsl: 267, 15%, 66%;
--color-pink-rgb: 239, 121, 106;
--color-pink: #EF796A;
--color-pink-hsl: 7, 81%, 68%;
--canvas-color: 245, 245, 245;
--color-base-00: #141217;
/* background-primary */
--color-base-05: #1c1820;
--color-base-10: #211a23;
/* background-primary-alt */
--color-base-20: #2c2330;
/* background-secondary */
--color-base-25: #392d41;
/* idk lol */
--color-base-30: #44344e;
/* background-modifier-border */
--color-base-35: #5e5863;
/* background-modifier-border-hover */
--color-base-40: #40344e;
/* background-modifier-border-focus */
--color-base-50: #665781;
/* text-faint */
--color-base-60: rgb(163, 138, 177);
/* also no clue */
--color-base-70: #c6bdce;
/* text-muted */
--color-base-100: #d5cdda;
/* text-normal */
}`,
    "o-min-d": `.o-min-d .workspace-ribbon {
border-right: none !important;
background: var(--background-primary-alt);
}

.o-min-d .workspace-ribbon.mod-left.is-collapsed {
background: var(--background-primary-alt);
border-right: none !important;
}

:root:root:root:root:root .o-min-d:not(.is-mobile) .workspace-sidedock-vault-profile {
border-top: none !important;
background: var(--background-secondary) !important;
border-radius: var(--radius-l);
margin-bottom: 8px;
width: 97.5%;
}

.o-min-d .workspace-ribbon.mod-left .sidebar-toggle-button {
border-right: none !important;
}

.o-min-d .nav-file-title.is-active {
background-color: transparent;
border: none;
}

.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 251, 70, 76;
--color-red: #fb464c;
--color-orange-rgb: 233, 151, 63;
--color-orange: #E9973F;
--color-yellow-rgb: 224, 222, 113;
--color-yellow: #E0DE71;
--color-green-rgb: 68, 207, 110;
--color-green: #44CF6E;
--color-cyan-rgb: 83, 223, 221;
--color-cyan: #53DFDD;
--color-blue-rgb: 2, 122, 255;
--color-blue: #027aff;
--color-purple-rgb: 168, 130, 255;
--color-purple: #a882ff;
--color-pink-rgb: 250, 153, 205;
--color-pink: #FA99CD;
--canvas-color: 245, 245, 245;
--color-base-00: #0c0c0c;
--color-base-05: #0f0f0f;
--color-base-10: #161616;
--color-base-20: #000000;
--color-base-25: #222222;
--color-base-30: #000000;
--color-base-35: #3F3F3F;
--color-base-40: #000000;
--color-base-50: #666;
--color-base-60: #999;
--color-base-70: #bababa;
--color-base-100: #ffffff;
}`,
    "o-soft-d": `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 154, 69, 60;
--color-red: #9A453C;
--color-red-hsl: 6, 44%, 42%;
--color-green-rgb: 139, 164, 129;
--color-green: #8BA481;
--color-green-hsl: 103, 16%, 57%;
--color-orange-rgb: 241, 187, 138;
--color-orange: #F1BB8A;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow-rgb: 228, 188, 127;
--color-yellow: #E4BC7F;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan-rgb: 155, 199, 189;
--color-cyan: #9BC7BD;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue-rgb: 23, 92, 89;
--color-blue: #175C59;
--color-blue-hsl: 177, 60%, 23%;
--color-purple-rgb: 166, 154, 181;
--color-purple: #A69AB5;
--color-purple-hsl: 267, 15%, 66%;
--color-pink-rgb: 239, 121, 106;
--color-pink: #EF796A;
--color-pink-hsl: 7, 81%, 68%;
--canvas-color: 245, 245, 245;
--color-base-00: #423434;
/* background-primary */
--color-base-05: #3f3232;
--color-base-10: #382b2b;
/* background-primary-alt */
--color-base-20: #574646;
/* background-secondary */
--color-base-25: #635151;
/* idk lol */
--color-base-30: #302424;
/* background-modifier-border */
--color-base-35: #756161;
/* background-modifier-border-hover */
--color-base-40: #4C4843;
/* background-modifier-border-focus */
--color-base-50: #806c6c;
/* text-faint */
--color-base-60: #a78c8c;
/* also no clue */
--color-base-70: #c6b8b1;
/* text-muted */
--color-base-100: #ECE8E5;
/* text-normal */
}`,
    "o-shark-d": `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 104, 52, 43;
--color-red: #FF5000;
--color-red-hsl: 9, 41%, 29%;
--color-orange-rgb: 225, 162, 97;
--color-orange: #ED7614;
--color-orange-hsl: 30, 68%, 63%;
--color-yellow-rgb: 137, 116, 74;
--color-yellow: #EDAB50;
--color-yellow-hsl: 40, 30%, 41%;
--color-green-rgb: 70, 80, 55;
--color-green: #99E65F;
--color-green-hsl: 84, 19%, 26%;
--color-cyan-rgb: 135, 178, 184;
--color-cyan: #94FDFF;
--color-cyan-hsl: 187, 26%, 63%;
--color-blue-rgb: 0, 132, 255;
--color-blue: #0084ff
    --color-blue-hsl: 209, 100%, 50%;
--color-purple-rgb: 77, 65, 89;
--color-purple-hsl: 270, 16%, 30%;
--color-purple: #93388F;
--color-pink-rgb: 125, 76, 74;
--color-pink: #F68187;
--color-pink-hsl: 2, 26%, 39%;
--canvas-color: 245, 245, 245;
--color-base-00: #221a1f;
--color-base-05: #1d2433;
--color-base-10: #263042;
--color-base-20: #5b4a5c;
--color-base-25: #786779;
--color-base-30: #384258;
--color-base-35: #919191;
--color-base-40: #485069;
--color-base-50: #856772;
--color-base-60: #9e809e;
--color-base-70: #c8e0ee;
--color-base-100: #FFF;
--accent-h: 210 !important;
--accent-s: 92% !important;
--accent-l: 71% !important;
--color-accent-rgb: 112, 180, 249 !important;
--color-accent-hsl: 210, 92%, 71% !important;
--h1-color: #70B4F9;
--h2-color: #ffc8dd;
}

.o-shark-d .mod-left-split .workspace-tabs .workspace-leaf {
background: #1c2431 !important;
}

.o-shark-d .workspace-tabs.mod-top-left-space .workspace-tab-header-container, .o-shark-d .workspace-tabs.mod-top-right-space .workspace-tab-header-container {
background: #1c2431;
}

.o-shark-d .workspace .mod-root .workspace-tab-header:not(.is-active) {
font-weight: 600;
background: #3e333f !important;
}

.o-shark-d .mod-right-split .workspace-tabs .workspace-leaf {
background: #1c2431 !important;
}

.o-header-lapel .markdown-reading-view h1:not(.embedded-note-title)::before, .o-header-lapel :nth-child(1 of .cm-header-1)::before {
background: #70B4F9 !important;
}

.o-header-lapel .markdown-reading-view h2:not(.embedded-note-title)::before, .o-header-lapel :nth-child(1 of .cm-header-2)::before {
background: #ffc8dd;
}`,
    "o-solar-dt": `.o-solar-dt {
--accent-h: 1;
--accent-s: 71.2%;
--accent-l: 52.4%;
--color-red: #DC322F;
--color-red-hsl: 1, 71.2%, 52.4%;
--color-red-rgb: 220, 50, 47;
--color-green: #859900;
--color-green-hsl: 67.8, 100%, 30%;
--color-green-rgb: 133, 153, 0;
--color-orange: #CB4B16;
--color-orange-hsl: 17.6, 80.4%, 44.1%;
--color-orange-rgb: 203, 75, 22;
--color-yellow: #B58900;
--color-yellow-hsl: 45.4, 100%, 35.5%;
--color-yellow-rgb: 203, 75, 22;
--color-cyan: #2AA198;
--color-cyan-hsl: 175.5, 58.6%, 39.8%;
--color-cyan-rgb: 42, 161, 152;
--color-blue: #268BD2;
--color-blue-hsl: 204.8, 69.4%, 48.6%;
--color-blue-rgb: 38, 139, 210;
--color-purple: #6C71C4;
--color-purple-hsl: 236.6, 42.7%, 59.6%;
--color-purple-rgb: 38, 139, 210;
--color-pink: #D33682;
--color-pink-hsl: 331, 64.1%, 52%;
--color-pink-rgb: 211, 54, 130;
--color-base-00: #073642;
--color-base-05: #0a4655;
--color-base-10: #08404E;
--color-base-20: #002B36;
--color-base-25: #054453;
--color-base-30: #355964;
--color-base-35: #4b6168;
--color-base-40: #094352;
--color-base-50: #586E75;
--color-base-60: #93A1A1;
--color-base-70: #839496;
--color-base-100: #93A1A1;
}`,
    "o-gruvbox-dt": `.o-gruvbox-dt {
--accent-h: 75;
--accent-s: 21%;
--accent-l: 57%;
--color-red: #CC241D;
--color-red-hsl: 2.4, 75.1%, 45.7%;
--color-red-rgb: 204, 36, 29;
--color-green: #98971A;
--color-green-hsl: 59.5, 70.8%, 34.9%;
--color-green-rgb: 152, 151, 26;
--color-orange: #D65D0E;
--color-orange-hsl: 23.7, 87.7%, 44.7%;
--color-orange-rgb: 104, 157, 106;
--color-yellow: #D79921;
--color-yellow-hsl: 39.6, 73.4%, 48.6%;
--color-yellow-rgb: 215, 153, 33;
--color-cyan: #689D6A;
--color-cyan-hsl: 122.3, 21.3%, 51.2%;
--color-cyan-rgb: 104, 157, 106;
--color-blue: #458588;
--color-blue-hsl: 182.7, 32.7%, 40.2%;
--color-blue-rgb: 69, 133, 136;
--color-purple: #B16286;
--color-purple-hsl: 332.7, 33.6%, 53.9%;
--color-purple-rgb: 177, 98, 134;
--color-pink: #EB6FAF;
--color-pink-hsl: 329, 75.6%, 67.8%;
--color-base-00: #282828;
--color-base-05: #232627;
--color-base-10: #1D2021;
--color-base-20: #32302F;
--color-base-25: #3C3836;
--color-base-30: #423c39;
--color-base-35: #665C54;
--color-base-40: #7C6F64;
--color-base-50: #BDAE93;
--color-base-60: #D5C4A1;
--color-base-70: #EBDBB2;
--color-base-100: #FBF1C7;
}`,
    "o-dracula-dt": `.o-dracula-dt {
--accent-h: 1;
--accent-s: 71.2%;
--accent-l: 52.4%;
--color-red: #F55;
--color-red-hsl: 0, 100%, 66.7%;
--color-red-rgb: 255, 85, 85;
--color-green: #50FA7B;
--color-green-hsl: 135.2, 94.4%, 64.7%;
--color-green-rgb: 80, 250, 123;
--color-orange: #FFB86C;
--color-orange-hsl: 31, 100%, 71.2%;
--color-orange-rgb: 255, 184, 108;
--color-yellow: #F1FA8C;
--color-yellow-hsl: 64.9, 91.7%, 76.5%;
--color-yellow-rgb: 241, 250, 140;
--color-cyan: #8BE9FD;
--color-cyan-hsl: 190.5, 96.6%, 76.9%;
--color-cyan-rgb: 139, 233, 253;
--color-blue: #8BC6FD;
--color-blue-hsl: 208.9, 96.6%, 76.9%;
--color-blue-rgb: 139, 198, 253;
--color-purple: #BD93F9;
--color-purple-hsl: 264.7, 89.5%, 77.6%;
--color-purple-rgb: 189, 147, 249;
--color-pink: #FF79C6;
--color-pink-hsl: 325.5, 100%, 73.7%;
--color-pink-rgb: 255, 121, 198;
--color-base-00: #282A36;
--color-base-05: #363845;
--color-base-10: #3c3e4e;
--color-base-20: #394250;
--color-base-25: #465163;
--color-base-30: #44475A;
--color-base-35: #4F5269;
--color-base-40: #282A36;
--color-base-50: #6272A4;
--color-base-60: #6272A4;
--color-base-70: #F8F8F2;
--color-base-100: #FEFEFA;
}`,
    "o-lyt-dt": `.o-lyt-dt em, .o-lyt-dt strong, .o-lyt-dt .cm-em, .o-lyt-dt .cm-strong {
color: var(--color-base-70);
}
.o-lyt-dt {
--accent-h: 191 !important;
--accent-s: 54% !important;
--accent-l: 64% !important;
--color-red: #E63946;
--color-red-hsl: 355.5, 77.6%, 56.3%;
--color-red-rgb: 230, 57, 70;
--color-green: #60993E;
--color-green-hsl: 97.6, 42.3%, 42.2%;
--color-green-rgb: 96, 153, 62;
--color-orange: #FFCDB2;
--color-orange-hsl: 21, 100%, 84.9%;
--color-orange-rgb: 255, 205, 178;
--color-yellow: #F2CC8F;
--color-yellow-hsl: 37, 79.2%, 75.5%;
--color-yellow-rgb: 242, 204, 143;
--color-cyan: #72A1E5;
--color-cyan-hsl: 215.5, 68.9%, 67.3%;
--color-cyan-rgb: 114, 161, 229;
--color-blue: #52B2CF;
--color-blue-hsl: 193.9, 56.6%, 56.7%;
--color-blue-rgb: 82, 178, 207;
--color-purple: #9097C0;
--color-purple-hsl: 231.3, 27.6%, 65.9%;
--color-purple-rgb: 144, 151, 192;
--color-pink: #EFD4BF;
--color-pink-hsl: 26.3, 60%, 84.3%;
--color-base-00: #23242A;
--color-base-05: #202124;
--color-base-10: #1E1F24;
--color-base-20: #2D3039;
--color-base-25: #343A4B;
--color-base-30: #434552;
--color-base-35: #7C849C;
--color-base-40: #343A4B;
--color-base-50: #B9C3DF;
--color-base-60: #DBE2F5;
--color-base-70: #72C3D5;
--color-base-100: #E8ECF5;
}`,
    "o-end-d": `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 231, 111, 81;
--color-red: #E76F51;
--color-red-hsl: 12, 76%, 61%;
--color-orange-rgb: 244, 162, 97;
--color-orange: #F4A261;
--color-orange-hsl: 27, 87%, 67%;
--color-yellow-rgb: 233, 196, 106;
--color-yellow: #E9C46A;
--color-yellow-hsl: 43, 74%, 66%;
--color-green-rgb: 181, 228, 140;
--color-green: #B5E48C;
--color-green-hsl: 92, 62%, 72%;
--color-cyan-rgb: 100, 223, 223;
--color-cyan: #64DFDF;
--color-cyan-hsl: 180, 66%, 63%;
--color-blue-rgb: 0, 166, 251;
--color-blue: #00A6FB;
--color-blue-hsl: 200, 100%, 49%;
--color-purple-rgb: 160, 108, 213;
--color-purple-hsl: 270, 56%, 63%;
--color-purple: #A06CD5;
--color-pink-rgb: 229, 152, 155;
--color-pink: #E5989B;
--color-pink-hsl: 358, 60%, 75%;
--canvas-color: 114, 114, 114;
--color-base-00:#000000;
--color-base-05: #111111;
--color-base-10: #131313;
--color-base-20: #2b2b2b;
--color-base-25: #353535;
--color-base-30: #303030;
--color-base-35: #383838;
--color-base-40: #292929;
--color-base-50: #7F7B66;
--color-base-60: #5F5F5F;
--color-base-70: #BCAC8F;
--color-base-100: #C6C6C6;
--text-on-accent: var(--color-base-00);
}`,
    "o-hack-d": `.o-hack-d .workspace-tab-header-container, .o-hack-d .workspace-split.mod-vertical .workspace-tab-header-container, .o-hack-d .workspace-tabs.mod-top-right-space .workspace-tab-header-container, .o-hack-d .workspace-tabs.mod-top-left-space .workspace-tab-header-container {
background: #ffffff !important;
height: 41px;
}

.o-hack-d .workspace-tab-header-inner .workspace-tab-header-inner-icon {
color: #000000;
}

.o-hack-d .workspace-tab-header-tab-list .clickable-icon, .o-hack-d .workspace-tab-header-new-tab .clickable-icon {
color: #000000 !important;
}

.o-hack-d .sidebar-toggle-button:not(.workspace-ribbon.mod-left .sidebar-toggle-button) .clickable-icon, .o-hack-d .workspace-ribbon.mod-left .sidebar-toggle-button .clickable-icon {
color: #000000 !important;
}

.o-hack-d .titlebar-button {
color: #000000;
}
.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 231, 111, 81;
--color-red: #E76F51;
--color-red-hsl: 12, 76%, 61%;
--color-orange-rgb: 244, 162, 97;
--color-orange: #F4A261;
--color-orange-hsl: 27, 87%, 67%;
--color-yellow-rgb: 233, 196, 106;
--color-yellow: #E9C46A;
--color-yellow-hsl: 43, 74%, 66%;
--color-green-rgb: 181, 228, 140;
--color-green: #B5E48C;
--color-green-hsl: 92, 62%, 72%;
--color-cyan-rgb: 100, 223, 223;
--color-cyan: #64DFDF;
--color-cyan-hsl: 180, 66%, 63%;
--color-blue-rgb: 0, 166, 251;
--color-blue: #00A6FB;
--color-blue-hsl: 200, 100%, 49%;
--color-purple-rgb: 160, 108, 213;
--color-purple-hsl: 270, 56%, 63%;
--color-purple: #A06CD5;
--color-pink-rgb: 229, 152, 155;
--color-pink: #E5989B;
--color-pink-hsl: 358, 60%, 75%;
--canvas-color: 114, 114, 114;
--color-base-00:#000000;
--color-base-05: #000000;
--color-base-10: #000000;
--color-base-20: #424242;
--color-base-25: #666666;
--color-base-30: #ffffff;
--color-base-35: #383838;
--color-base-40: #292929;
--color-base-50: #7c7c7c;
--color-base-60: #a7a7a7;
--color-base-70: #c5c5c5;
--color-base-100: #ffffff;
--text-on-accent: var(--color-base-100);
--radius-l: 0px !important;
--radius-m: 0px !important;
--radius-s: 0px !important;
}

.theme-dark .workspace-ribbon.mod-left .sidebar-toggle-button {
background-color: #ffffff !important;
}`,
    "o-heck-d": `.o-heck-d {
--accent-h: 1;
--accent-s: 71.2%;
--accent-l: 52.4%;
--color-red: #ff5555;
--color-red-hsl: 0, 100%, 66.7%;
--color-red-rgb: 255, 85, 85;
--color-green: #50FA7B;
--color-green-hsl: 135.2, 94.4%, 64.7%;
--color-green-rgb: 80, 250, 123;
--color-orange: #FFB86C;
--color-orange-hsl: 31, 100%, 71.2%;
--color-orange-rgb: 255, 184, 108;
--color-yellow: #F1FA8C;
--color-yellow-hsl: 64.9, 91.7%, 76.5%;
--color-yellow-rgb: 241, 250, 140;
--color-cyan: #8BE9FD;
--color-cyan-hsl: 190.5, 96.6%, 76.9%;
--color-cyan-rgb: 139, 233, 253;
--color-blue: #8BC6FD;
--color-blue-hsl: 208.9, 96.6%, 76.9%;
--color-blue-rgb: 139, 198, 253;
--color-purple: #BD93F9;
--color-purple-hsl: 264.7, 89.5%, 77.6%;
--color-purple-rgb: 189, 147, 249;
--color-pink: #FF79C6;
--color-pink-hsl: 325.5, 100%, 73.7%;
--color-pink-rgb: 255, 121, 198;
--color-base-00: #38040E;
--color-base-05: #430710;
--color-base-10: #4E0911;
--color-base-20: #640D14;
--color-base-25: #800E13;
--color-base-30: #640D14;
--color-base-35: #971B22;
--color-base-40: #800E13;
--color-base-50: #d62828;
--color-base-60: #AD2831;
--color-base-70: #FF9B54;
--color-base-100: #FEFEFA;
}`,
    "o-si-d": `.o-si-d {
--accent-h: 1;
--accent-s: 71.2%;
--accent-l: 52.4%;
--color-red: #ff5555;
--color-red-hsl: 0, 100%, 66.7%;
--color-red-rgb: 255, 85, 85;
--color-green: #50FA7B;
--color-green-hsl: 135.2, 94.4%, 64.7%;
--color-green-rgb: 80, 250, 123;
--color-orange: #FFB86C;
--color-orange-hsl: 31, 100%, 71.2%;
--color-orange-rgb: 255, 184, 108;
--color-yellow: #F1FA8C;
--color-yellow-hsl: 64.9, 91.7%, 76.5%;
--color-yellow-rgb: 241, 250, 140;
--color-cyan: #8BE9FD;
--color-cyan-hsl: 190.5, 96.6%, 76.9%;
--color-cyan-rgb: 139, 233, 253;
--color-blue: #8BC6FD;
--color-blue-hsl: 208.9, 96.6%, 76.9%;
--color-blue-rgb: 139, 198, 253;
--color-purple: #BD93F9;
--color-purple-hsl: 264.7, 89.5%, 77.6%;
--color-purple-rgb: 189, 147, 249;
--color-pink: #FF79C6;
--color-pink-hsl: 325.5, 100%, 73.7%;
--color-pink-rgb: 255, 121, 198;
--color-base-00: #1E1B3B;
--color-base-05: #28254B;
--color-base-10: #322F5A;
--color-base-20: #322F5A;
--color-base-25: #464278;
--color-base-30: #464278;
--color-base-35: #8776A8;
--color-base-40: #675C90;
--color-base-50: #FF9B54;
--color-base-60: #B4ACC3;
--color-base-70: #E0E1DD;
--color-base-100: #ffffff;
}`,
    "o-list-distinct": `.o-list-distinct .HyperMD-list-line {
padding-bottom: 8px;
}

.o-list-distinct .HyperMD-list-line-1 {
background: var(--background-secondary);
border: var(--bb-border);
border-radius: var(--radius-s);
}

.o-list-distinct .markdown-source-view.mod-cm6 .cm-indent::before {
padding-left: 2px;
}`,
    "o-bold-italic": `.o-bold-italic em, .o-bold-italic .cm-em {
color: var(--color-accent);
}

.o-bold-italic strong, .o-bold-italic .cm-strong {
color: var(--color-accent-3);
}`,
    "o-justify": `.o-justify .markdown-source-view.mod-cm6 .cm-line, .o-justify .markdown-rendered p {
text-align: justify;
hyphens: auto;
-webkit-hyphens: auto;
word-spacing: -0.05em;
text-justify: distribute;
text-align-last: left;
}`,
    "o-colorful-headings": `.o-colorful-headings {
--h1-color: var(--color-red);
--h2-color: var(--color-green);
--h3-color: var(--color-orange);
--h4-color: var(--color-cyan);
--h5-color: var(--color-blue);
--h6-color: var(--color-purple);
}`,
    "o-headings-origami": `.o-headings-origami {
--h1-size: 3.5em;
--h2-size: 1.842em;
--h3-size: 1.3572em;
--h4-size: 1.250em;
--h5-size: 1em;
--h6-size: 0.7368em;
}

.o-headings-origami-smaller {
--h1-size: 2em;
--h2-size: 1.642em;
--h3-size: 1.3572em;
--h4-size: 1.250em;
--h5-size: 1em;
--h6-size: 0.8368em;
}`,
    "o-headings-origami-smaller": `.o-headings-origami-smaller {
--h1-size: 2em;
--h2-size: 1.642em;
--h3-size: 1.3572em;
--h4-size: 1.250em;
--h5-size: 1em;
--h6-size: 0.8368em;
}`,
    "o-headings-opinionated": `.o-headings-opinionated {
--h1-size: 1.5811em;
--h2-size: 2.5em;
--h3-size: 1.9882em;
--h4-size: 1.3em;
--h5-size: 1em;
--h6-size: 0.7953em;
}`,
    "o-headings-descending": `.o-headings-descending {
--h1-size: 2.5em;
--h2-size: 1.842em;
--h3-size: 1.3572em;
--h4-size: 1.250em;
--h5-size: 1em;
--h6-size: 0.7368em;
}`,
    "o-headings-flat": `.o-headings-flat {
--h1-size: var(--font-text-size);
--h2-size: var(--font-text-size);
--h3-size: var(--font-text-size);
--h4-size: var(--font-text-size);
--h5-size: var(--font-text-size);
--h6-size: var(--font-text-size);
}`,
    "o-headings-fabulous": `.o-headings-fabulous {
--h1-size: 2em;
--h2-size: 1.5em;
--h3-size: 1.4em;
--h4-size: 1.3em;
--h5-size: 1.2em;
--h6-size: 1.1em;
}`,
    "o-mono-headers-body": `.o-mono-headers-body {
--o-h1-color: var(--background-modifier-border);
--o-h2-color: var(--background-modifier-border);
--o-h3-color: var(--background-modifier-border);
--o-h4-color: var(--background-modifier-border);
--o-h5-color: var(--background-modifier-border);
--o-h6-color: var(--background-modifier-border);
}`,
    "o-accent-headers-body": `.o-accent-headers-body {
--o-h1-color: var(--color-accent);
--o-h2-color: var(--color-accent);
--o-h3-color: var(--color-accent);
--o-h4-color: var(--color-accent);
--o-h5-color: var(--color-accent);
--o-h6-color: var(--color-accent);
}`,
    "o-rainbow-headers-body": `.o-rainbow-headers-body {
--o-h1-color: var(--color-red);
--o-h2-color: var(--color-green);
--o-h3-color: var(--color-orange);
--o-h4-color: var(--color-cyan);
--o-h5-color: var(--color-blue);
--o-h6-color: var(--color-purple);
}`,
    "o-header-line-h1": `.o-header-line-h1 .markdown-reading-view h1:not(.embedded-note-title), .o-header-line-h1 .mod-cm6 .cm-editor .HyperMD-header-1 {
padding-bottom: 0.2em;
border-bottom: 1px solid var(--o-h1-color);
margin-block-end: 0.6em;
}`,
    "o-header-line-h2": `.o-header-line-h2 .markdown-reading-view h2, .o-header-line-h2 .mod-cm6 .cm-editor .HyperMD-header-2 {
padding-bottom: 0.1em;
border-bottom: 1px solid var(--o-h2-color);
margin-block-end: 0.6em;
}`,
    "o-header-line-h3": `.o-header-line-h3 .markdown-reading-view h3, .o-header-line-h3 .mod-cm6 .cm-editor .HyperMD-header-3 {
padding-bottom: 0.0em;
border-bottom: 1px solid var(--o-h3-color);
margin-block-end: 0.6em;
}`,
    "o-header-line-h4": `.o-header-line-h4 .markdown-reading-view h4, .o-header-line-h4 .mod-cm6 .cm-editor .HyperMD-header-4 {
padding-bottom: 0.0em;
border-bottom: 1px solid var(--o-h4-color);
margin-block-end: 0.6em;
}`,
    "o-header-line-h5": `.o-header-line-h5 .markdown-reading-view h5, .o-header-line-h5 .mod-cm6 .cm-editor .HyperMD-header-5 {
padding-bottom: 0.0em;
border-bottom: 1px solid var(--o-h5-color);
margin-block-end: 0.6em;
}`,
    "o-header-line-h6": `.o-header-line-h6 .markdown-reading-view h6, .o-header-line-h6 .mod-cm6 .cm-editor .HyperMD-header-6 {
padding-bottom: 0.0em;
border-bottom: 1px solid var(--o-h6-color);
margin-block-end: 0.6em;
}`,
    "o-frontmatter": `.o-frontmatter .markdown-source-view.is-live-preview.show-properties .metadata-container {
display: var(--metadata-display-editing);
border: 0;
background: transparent;
margin-bottom: 2em;
border-radius: var(--radius-l);
padding: 16px;
}

.o-frontmatter .metadata-container .metadata-add-button {
margin-top: 1em;
font-family: var(--font-mono);
border: var(--bb-border) !important;
border-radius: var(--radius-m);
background: var(--background-primary-pre-alt);
}

.o-frontmatter .metadata-properties {
display: flex;
flex-direction: column;
gap: 0;
border: var(--bb-border);
border-radius: var(--radius-l);
padding: 0px;
background: var(--background-primary-pre-alt);
transition: 700ms;
font-family: var(--font-mono);
box-shadow: -33px 24px 64px -8px hsla(var(--color-accent-hsl), 0.035), 33px 12px 64px -8px hsla(var(--color-accent-1-hsl), 0.035);
}

.o-frontmatter .metadata-properties-title {
user-select: none;
font-size: max(var(--font-ui-small), 1em);
color: var(--text-normal);
font-family: var(--font-mono);
font-weight: var(--font-medium);
}

.o-frontmatter .metadata-property-key, .o-frontmatter .metadata-property-value {
border-bottom: 0;
padding: 0px 1em;
}

.o-frontmatter .metadata-property-value {
border-left: var(--o-border, var(--bb-border-dashed));
}`,
    "o-header-lapel": `.o-header-lapel .markdown-reading-view h1:not(.embedded-note-title)::before, .o-header-lapel :nth-child(1 of .cm-header-1)::before {
content: "";
display: inline-block;
height: 1.2em;
width: 4px;
color: var(--text-on-accent);
background: var(--color-red);
margin-right: 16px;
border-radius: 8px;
vertical-align: bottom;
}

.o-header-lapel .markdown-reading-view h2:not(.embedded-note-title)::before, .o-header-lapel :nth-child(1 of .cm-header-2)::before {
content: "";
display: inline-block;
height: 1.2em;
width: 4px;
color: var(--text-on-accent);
background: var(--color-green);
margin-right: 16px;
border-radius: 8px;
vertical-align: bottom;
}

.o-header-lapel .markdown-reading-view h3:not(.embedded-note-title)::before, .o-header-lapel :nth-child(1 of .cm-header-3)::before {
content: "";
display: inline-block;
height: 1.2em;
width: 4px;
color: var(--text-on-accent);
background: var(--color-orange);
margin-right: 16px;
border-radius: 8px;
vertical-align: bottom;
}

.o-header-lapel .markdown-reading-view h4:not(.embedded-note-title)::before, .o-header-lapel :nth-child(1 of .cm-header-4)::before {
content: "";
display: inline-block;
height: 1.2em;
width: 4px;
color: var(--text-on-accent);
background: var(--color-cyan);
margin-right: 16px;
border-radius: 8px;
vertical-align: bottom;
}

.o-header-lapel .markdown-reading-view h5:not(.embedded-note-title)::before, .o-header-lapel :nth-child(1 of .cm-header-5)::before {
content: "";
display: inline-block;
height: 1.2em;
width: 4px;
color: var(--text-on-accent);
background: var(--color-blue);
margin-right: 16px;
border-radius: 8px;
vertical-align: bottom;
}

.o-header-lapel .markdown-reading-view h6:not(.embedded-note-title)::before, .o-header-lapel :nth-child(1 of .cm-header-6)::before {
content: "";
display: inline-block;
height: 1.2em;
width: 4px;
color: var(--text-on-accent);
background: var(--color-purple);
margin-right: 16px;
border-radius: 8px;
vertical-align: bottom;
}
.o-shark-d.o-header-lapel .markdown-reading-view h1:not(.embedded-note-title)::before, .o-shark-d.o-header-lapel :nth-child(1 of .cm-header-1)::before {
background: #70B4F9 !important;
}

.o-shark-d.o-header-lapel .markdown-reading-view h2:not(.embedded-note-title)::before, .o-shark-d.o-header-lapel :nth-child(1 of .cm-header-2)::before {
background: #ffc8dd;
}
.o-shark-l.o-header-lapel .markdown-reading-view h1:not(.embedded-note-title)::before, .o-shark-l.o-header-lapel :nth-child(1 of .cm-header-1)::before {
background: #70B4F9 !important;
}

.o-shark-l.o-header-lapel .markdown-reading-view h2:not(.embedded-note-title)::before, .o-shark-l.o-header-lapel :nth-child(1 of .cm-header-2)::before {
background: #e5989b;
}`,
    "o-hover-status-bar": `.o-hover-status-bar .status-bar {
border-radius: var(--radius-m);
padding: 4px;
border: var(--bb-border-alt);
background: var(--background-secondary);
margin: 8px;
opacity: 0;
transition: 700ms;
}`,
    "o-kanban-wrap": `.o-kanban-wrap .kanban-plugin__lane {
height: 100%;
width: 100%;
overflow: visible;
}

.o-kanban-wrap .kanban-plugin__board > div {
flex-wrap: wrap;
overflow-y: scroll;
}

.o-kanban-wrap .kanban-plugin__board>div {
gap: 8px;
}`,
    "o-kanban-border": `.o-kanban-border .kanban-plugin__item {
font-size: 0.875rem;
border: var(--bb-border);
border-radius: 4px;
}

.o-kanban-border .kanban-plugin__lane {
background: var(--background-secondary);
border: var(--bb-border);
border-radius: 8px;
}`,
    "o-kanban-notion": `.o-kanban-notion .kanban-plugin__item {
font-size: 1em;
margin-bottom: 5px;
border: none;
border-left: var(--bb-border-dashed);
border-radius: 0;
}

.o-kanban-notion .kanban-plugin__lane-header-wrapper {
border-bottom: var(--bb-border);
}

.o-kanban-notion .kanban-plugin__lane {
background: var(--background-primary);
border: 1px solid var(--background-primary);
}`,
  },
};
