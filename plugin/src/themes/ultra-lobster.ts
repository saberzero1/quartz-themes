import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ultra-lobster",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["nightingale", "monaspace-neon"],
    fontFiles: [
      {
        family: "Getai",
        style: "normal",
        weight: "400",
        file: "getai.woff2",
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
        family: "Monaspace",
        style: "normal",
        weight: "400",
        file: "monaspace.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Fraunces",
        style: "normal",
        weight: "100 900",
        file: "fraunces.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Fraunces",
        style: "italic",
        weight: "100 900",
        file: "fraunces-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Satoshi",
        style: "normal",
        weight: "400",
        file: "satoshi.woff2",
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
      {
        family: "Eurostile",
        style: "normal",
        weight: "100 900",
        file: "eurostile.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "General Sans",
        style: "normal",
        weight: "100 900",
        file: "general-sans.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "General Sans",
        style: "italic",
        weight: "100 900",
        file: "general-sans-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Martian Mono",
        style: "normal",
        weight: "400",
        file: "martian-mono.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Space Grotesk",
        style: "normal",
        weight: "500 900",
        file: "space-grotesk.woff2",
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
        family: "Lexend",
        style: "normal",
        weight: "500 1000",
        file: "lexend.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IAWriter",
        style: "normal",
        weight: "500 1000",
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
        family: "Inter",
        style: "normal",
        weight: "500 1000",
        file: "inter.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Inter",
        style: "italic",
        weight: "500 1000",
        file: "inter-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "ulu-theme-settings",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --ancestor-editor-color: var(
        --text-normal
    , #bababa);
  --background-modifier-border: var(--color-base-30, #313131);
  --background-modifier-border-alt: #444;
  --background-modifier-border-focus: var(--color-base-40, #414141);
  --background-modifier-border-hover: var(--color-base-35, #373737);
  --background-modifier-form-field: var(--color-base-25, #222222);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #222222);
  --background-primary: var(--color-base-00, #111111);
  --background-primary-alt: var(--color-base-10, #1b1b1b);
  --background-secondary: var(--color-base-20, #1a1a1a);
  --background-secondary-alt: var(--color-base-30, #313131);
  --bases-cards-background: var(--background-primary, #111111);
  --bases-cards-cover-background: var(--background-primary-alt, #1b1b1b);
  --bases-embed-border-color: var(--background-modifier-border, #313131);
  --bases-group-heading-property-color: var(--text-muted, #666666);
  --bases-table-border-color: var(--table-border-color, #313131);
  --bases-table-cell-background-active: var(--background-primary, #111111);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #1b1b1b);
  --bases-table-cell-background-selected: var(--table-selection, hsla(212, 100%, 50%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #1b1b1b);
  --bases-table-header-background: var(--background-primary, #111111);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --bases-table-header-color: var(--text-muted, #666666);
  --bases-table-summary-background: var(--background-primary, #111111);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --blockquote-border-color: var(--interactive-accent, hsl(212, 100%, 50%));
  --bodyFont: var(--font-text-theme, var(--ulu-font-general, "Instrument", sans-serif));
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-radius: var(--radius-m, 8px);
  --canvas-background: var(--background-primary, #111111);
  --canvas-card-label-color: var(--text-faint, #999999);
  --canvas-color: var(--background-modifier-border, 126, 126, 126);
  --canvas-dot-pattern: var(--color-base-30, #313131);
  --caret-color: var(--text-normal, #bababa);
  --checkbox-border-color: var(--text-faint, #999999);
  --checkbox-border-color-hover: var(--text-muted, #666666);
  --checkbox-color: var(--interactive-accent, hsl(212, 100%, 50%));
  --checkbox-color-hover: var(--interactive-accent-hover, #fa99cd);
  --checkbox-marker-color: var(--background-primary, #111111);
  --checklist-done-color: var(--text-muted, #666666);
  --code-background: var(--background-primary-alt, #1b1b1b);
  --code-border-color: var(--background-modifier-border, #313131);
  --code-bracket-background: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --code-comment: var(--text-faint, #999999);
  --code-normal: var(--text-normal, #bababa);
  --code-punctuation: var(--text-muted, #666666);
  --collapse-icon-color: var(--text-faint, #999999);
  --collapse-icon-color-collapsed: var(--color-accent, hsl(212, 100%, 50%));
  --color-accent: hsl(var(--color-blue-hsl));
  --color-accent-1: var(--color-pink, #fa99cd);
  --color-accent-1-rgb: var(--color-pink-rgb, 250, 153, 205);
  --color-accent-2: hsl(
        var(--accent-h) calc(var(--accent-s) + 180) var(--accent-l)
    );
  --color-accent-hover: var(--color-accent-2, hsl(
        258 calc(88% + 180) 66%
    ));
  --color-accent-hsl: var(--color-blue-hsl, 212, 100%, 50%);
  --color-accent-rgb: var(--color-blue-rgb, 2, 122, 255);
  --color-base-00: var(--proxy-00, #111111);
  --color-base-10: var(--proxy-10, #1b1b1b);
  --color-base-20: var(--proxy-20, #1a1a1a);
  --color-base-25: #222222;
  --color-base-30: #313131;
  --color-base-35: #373737;
  --color-base-40: #414141;
  --color-base-70: #bababa;
  --color-blue-hsl: 212, 100%, 50%;
  --color-cyan-hsl: 179, 69%, 60%;
  --color-green-hsl: 138, 59%, 54%;
  --color-orange-hsl: 31, 79%, 58%;
  --color-pink-hsl: 328, 91%, 79%;
  --color-purple-hsl: 258, 100%, 75%;
  --color-red-hsl: 358, 96%, 63%;
  --color-yellow-hsl: 59, 64%, 66%;
  --dark: var(--text-normal, var(--color-base-70, #bababa));
  --darkgray: var(--text-normal, var(--color-base-70, #bababa));
  --divider-color: var(--background-modifier-border, #313131);
  --divider-color-hover: var(--interactive-accent, hsl(212, 100%, 50%));
  --dropdown-background: var(--interactive-normal, #1a1a1a);
  --dropdown-background-hover: var(--interactive-hover, #373737);
  --file-header-background: var(--background-primary, #111111);
  --file-header-background-focused: var(--background-primary, #111111);
  --file-header-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #1a1a1a);
  --flair-color: var(--text-normal, #bababa);
  --font-interface-theme: "Instrument", sans-serif;
  --font-mermaid: var(--font-text, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-serif: "Fraunces", serif;
  --font-text-theme: var(--ulu-font-general, "Instrument", sans-serif);
  --font-title: var(--ulu-font-title, "Getai");
  --footnote-divider-color: var(--metadata-divider-color, #313131);
  --footnote-id-color: var(--text-muted, #666666);
  --footnote-id-color-no-occurrences: var(--text-faint, #999999);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(#ffffff, 0.067));
  --footnote-line-height: var(--line-height-normal, 1.65);
  --glass-border-dark: #696969;
  --glass-border-light: #ffffff;
  --gradient-bg-primary: linear-gradient(135deg, #2a2a2a 1.62%, #202020 50.72%);
  --gradient-bg-secondary: linear-gradient(135deg, #1f1f1f 1.62%, #161616 50.72%);
  --graph-line: rgb(from var(--mono-rgb-100) r g b / 0.15);
  --graph-node: var(--text-muted, #666666);
  --graph-node-focused: var(--color-accent, hsl(212, 100%, 50%));
  --graph-node-tag: var(--color-accent, hsl(212, 100%, 50%));
  --graph-node-unresolved: var(--text-faint, #999999);
  --graph-text: var(--text-normal, #bababa);
  --gray: var(--text-muted, var(--color-base-50, #666666));
  --h1-font: var(--ulu-header1-type, var(--font-title));
  --h1-size: var(--inline-title-size, clamp(2.5rem, 8vw - 2rem, 3rem));
  --h1-weight: var(--ulu-h1-weight, 900);
  --h2-font: var(--ulu-header2-type, var(--font-text, var(--font-text-theme)));
  --h2-weight: var(--ulu-h2-weight, 600);
  --h3-font: var(--ulu-header3-type, var(--font-text, var(--font-text-theme)));
  --h3-weight: var(--ulu-h3-weight, 600);
  --h4-font: var(--ulu-header4-type, var(--font-text, var(--font-text-theme)));
  --h4-weight: var(--ulu-h4-weight, 600);
  --h5-font: var(--ulu-header5-type, var(--font-text, var(--font-text-theme)));
  --h5-line-height: var(--line-height-normal, 1.65);
  --h5-weight: var(--ulu-h5-weight, 600);
  --h6-font: var(--ulu-header6-type, var(--font-text, var(--font-text-theme)));
  --h6-line-height: var(--line-height-normal, 1.65);
  --h6-weight: var(
        --ulu-h6-weight,
        600
    );
  --headerFont: var(--font-text-theme, var(--ulu-font-general, "Instrument", sans-serif));
  --heading-formatting: var(--text-faint, #999999);
  --hr-color: var(--background-modifier-border, #313131);
  --icon-color: var(--text-muted, #666666);
  --icon-color-active: var(--color-accent, hsl(212, 100%, 50%));
  --icon-color-focused: var(--text-normal, #bababa);
  --icon-color-hover: var(--text-muted, #666666);
  --inline-title-color: var(--color-base-100, #dadada);
  --inline-title-font: var(--ulu-inline-title-font, var(--font-title));
  --inline-title-size: var(--h1-size, clamp(2.5rem, 8vw - 2rem, 3rem));
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, #999999);
  --input-placeholder-color: var(--text-faint, #999999);
  --interactive-accent: var(--color-accent, hsl(212, 100%, 50%));
  --interactive-accent-hover: var(--color-accent-2, #fa99cd);
  --interactive-accent-hsl: var(--color-accent-hsl, 212, 100%, 50%);
  --interactive-hover: var(--color-base-35, #373737);
  --interactive-normal: var(--color-base-20, #1a1a1a);
  --lbs: 0px 20px 30px rgba(0, 0, 5, 0.15);
  --light: var(--background-primary, var(--color-base-00, #111111));
  --lightgray: var(--background-secondary, var(--color-base-20, #1a1a1a));
  --line-height-normal: 1.65;
  --link-color: var(--text-muted, #666666);
  --link-color-hover: var(--text-normal, #bababa);
  --link-decoration-hover: none;
  --link-decoration-thickness: 13%;
  --link-external-color: var(--color-accent, hsl(212, 100%, 50%));
  --link-external-color-hover: var(--color-accent-hover, hsl(
        258 calc(88% + 180) 66%
    ));
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: var(--text-muted, #666666);
  --list-marker-color: var(--text-faint, #999999);
  --list-marker-color-collapsed: var(--color-accent, hsl(212, 100%, 50%));
  --list-marker-color-hover: var(--text-muted, #666666);
  --menu-background: var(--background-secondary, #1a1a1a);
  --menu-border-color: var(--background-modifier-border-hover, #373737);
  --menu-shadow: var(--shadow-s, 0px 1px 4px rgba(0, 0, 0, 0.16));
  --metadata-border-color: var(--background-modifier-border, #313131);
  --metadata-divider-color: var(--background-modifier-border, #313131);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --metadata-input-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #bababa);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --metadata-label-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #666666);
  --metadata-label-text-color-hover: var(--text-muted, #666666);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --modal-background: var(--background-primary, #111111);
  --mono-rgb-0: #000000;
  --mono-rgb-100: #ffffff;
  --nav-collapse-icon-color: var(--collapse-icon-color, #999999);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #999999);
  --nav-heading-color: var(--text-normal, #bababa);
  --nav-heading-color-collapsed: var(--text-faint, #999999);
  --nav-heading-color-collapsed-hover: var(--text-muted, #666666);
  --nav-heading-color-hover: var(--text-normal, #bababa);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(#ffffff, 0.12));
  --nav-item-background-active: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --nav-item-color: var(--text-muted, #666666);
  --nav-item-color-active: var(--text-normal, #bababa);
  --nav-item-color-highlighted: var(--color-accent-hover, hsl(
        258 calc(88% + 180) 66%
    ));
  --nav-item-color-hover: var(--text-normal, #bababa);
  --nav-item-color-selected: var(--text-normal, #bababa);
  --nav-tag-color: var(--text-faint, #999999);
  --nav-tag-color-active: var(--text-muted, #666666);
  --nav-tag-color-hover: var(--text-muted, #666666);
  --pdf-background: var(--background-primary, #111111);
  --pdf-page-background: var(--background-primary, #111111);
  --pdf-sidebar-background: var(--background-primary, #111111);
  --pill-border-color: var(--background-modifier-border, #313131);
  --pill-border-color-hover: var(--background-modifier-border-hover, #373737);
  --pill-color: var(--text-muted, #666666);
  --pill-color-hover: var(--text-normal, #bababa);
  --pill-color-remove: var(--text-faint, #999999);
  --pill-color-remove-hover: var(--text-accent, hsl(212, 100%, 50%));
  --prompt-background: var(--background-primary, #111111);
  --proxy-00: #111111;
  --proxy-10: #1b1b1b;
  --proxy-20: #1a1a1a;
  --radius-xl: 24px;
  --raised-background: var(--blur-background, color-mix(in srgb, #1a1a1a 65%, transparent) linear-gradient(#1a1a1a, color-mix(in srgb, #1a1a1a 65%, transparent)));
  --ribbon-background: var(--background-secondary, #1a1a1a);
  --ribbon-background-collapsed: var(--background-primary, #111111);
  --sbs: 24px 24px 84px -4px rgba(0, 0, 13, 0.05), 0px 16px 64px 6px rgba(0, 13, 0, 0.007);
  --scrollbar-active-thumb-bg: var(--color-accent, hsl(212, 100%, 50%));
  --scrollbar-bg: rgb(from var(--mono-rgb-100) r g b / 0.1);
  --search-clear-button-color: var(--text-muted, #666666);
  --search-icon-color: var(--text-muted, #666666);
  --search-result-background: var(--background-primary, #111111);
  --secondary: var(--text-accent, var(--color-accent, hsl(212, 100%, 50%)));
  --setting-group-heading-color: var(--text-normal, #bababa);
  --setting-items-background: var(--background-primary-alt, #1b1b1b);
  --setting-items-border-color: var(--background-modifier-border, #313131);
  --shadow-l: 0px 8px 24px rgba(0, 0, 0, 0.2);
  --shadow-lm-only: none;
  --shadow-s: 0px 1px 4px rgba(0, 0, 0, 0.16);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #666666);
  --shiki-code-background: var(--code-background, #1b1b1b);
  --shiki-code-comment: var(--text-faint, #999999);
  --shiki-code-normal: var(--text-muted, #666666);
  --shiki-code-punctuation: var(--text-muted, #666666);
  --shiki-gutter-border-color: var(--background-modifier-border, #313131);
  --shiki-gutter-text-color: var(--text-faint, #999999);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #666666);
  --shiki-highlight-neutral: var(--shiki-code-normal, #666666);
  --shiki-terminal-dots-color: var(--text-faint, #999999);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #373737);
  --slider-track-background: var(--background-modifier-border, #313131);
  --status-bar-background: var(--background-secondary, #1a1a1a);
  --status-bar-border-color: var(--divider-color, #313131);
  --status-bar-text-color: var(--text-muted, #666666);
  --suggestion-background: var(--background-primary, #111111);
  --tab-background-active: var(--background-primary, #111111);
  --tab-container-background: var(--background-secondary, #1a1a1a);
  --tab-divider-color: var(--background-modifier-border-hover, #373737);
  --tab-outline-color: var(--divider-color, #313131);
  --tab-switcher-background: var(--background-secondary, #1a1a1a);
  --tab-switcher-preview-radius: var(--radius-xl, 24px);
  --tab-text-color: var(--text-faint, #999999);
  --tab-text-color-active: var(--text-muted, #666666);
  --tab-text-color-focused: var(--text-muted, #666666);
  --tab-text-color-focused-active: var(--text-muted, #666666);
  --tab-text-color-focused-active-current: var(--text-normal, #bababa);
  --tab-text-color-focused-highlighted: var(--color-accent, hsl(212, 100%, 50%));
  --table-add-button-border-color: var(--background-modifier-border, #313131);
  --table-border-color: var(--background-modifier-border, #313131);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(212, 100%, 50%));
  --table-drag-handle-color: var(--text-faint, #999999);
  --table-header-border-color: var(--table-border-color, #313131);
  --table-header-color: var(--text-normal, #bababa);
  --table-selection-border-color: var(--interactive-accent, hsl(212, 100%, 50%));
  --tag-color: var(--color-accent, hsl(212, 100%, 50%));
  --tag-color-hover: var(--color-accent, hsl(212, 100%, 50%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(
        258 calc(88% + 180) 66%
    )));
  --text-accent: var(--color-accent, hsl(212, 100%, 50%));
  --text-accent-hover: var(--color-accent-2, hsl(
        258 calc(88% + 180) 66%
    ));
  --text-faint: var(--color-base-60, #999999);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: var(--color-base-50, #666666);
  --text-normal: var(--color-base-70, #bababa);
  --text-on-button: var(--text-on-accent, white);
  --text-selection: var(--background-modifier-border, hsla(212, 100%, 50%, 0.33));
  --titleFont: var(--font-text-theme, var(--ulu-font-general, "Instrument", sans-serif));
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, #313131);
  --titlebar-text-color: var(--text-muted, #666666);
  --titlebar-text-color-focused: var(--text-normal, #bababa);
  --ulu-font-general: "Instrument", sans-serif;
  --ulu-font-title: "Getai";
  --ulu-kanban-border-color: transparent;
  --ulu-kanban-border-width: 0px;
  --ulu-radius: var(--radius-m, 8px);
  --vault-profile-color: var(--text-normal, #bababa);
  --vault-profile-color-hover: var(--vault-profile-color, #bababa);
  --view-bottom-fade-mask: none;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--text-normal, rgb(186, 186, 186));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--color-base-100, rgb(218, 218, 218));
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--color-base-100, rgb(218, 218, 218));
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--text-normal, rgb(186, 186, 186));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .text-highlight {
  color: var(--text-normal, rgb(186, 186, 186));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body del {
  color: rgb(186, 186, 186);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(186, 186, 186));
}

html[saved-theme="dark"] body h2 {
  --ancestor-editor-color: #bababa;
  --background-modifier-active-hover: hsla(212, 100%, 50%, 0.1);
  --background-modifier-border: #313131;
  --background-modifier-border-focus: #414141;
  --background-modifier-border-hover: #373737;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #222222;
  --background-modifier-form-field-hover: #222222;
  --background-modifier-hover: rgba(#ffffff, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #111111;
  --background-primary-alt: #1b1b1b;
  --background-secondary: #1a1a1a;
  --background-secondary-alt: #313131;
  --blockquote-border-color: hsl(212, 100%, 50%);
  --blur-background: color-mix(in srgb, #1a1a1a 65%, transparent) linear-gradient(#1a1a1a, color-mix(in srgb, #1a1a1a 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 8px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #111111;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #313131;
  --caret-color: #bababa;
  --checkbox-border-color: #999999;
  --checkbox-border-color-hover: #666666;
  --checkbox-color: hsl(212, 100%, 50%);
  --checkbox-color-hover: #fa99cd;
  --checkbox-marker-color: #111111;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #666666;
  --clickable-icon-radius: 4px;
  --code-background: #1b1b1b;
  --code-border-color: #313131;
  --code-bracket-background: rgba(#ffffff, 0.067);
  --code-comment: #999999;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #bababa;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #666666;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #999999;
  --collapse-icon-color-collapsed: hsl(212, 100%, 50%);
  --color-accent: hsl(212, 100%, 50%);
  --color-accent-1: #fa99cd;
  --color-accent-1-rgb: 250, 153, 205;
  --color-accent-2: hsl(
        258 calc(88% + 180) 66%
    );
  --color-accent-hover: hsl(
        258 calc(88% + 180) 66%
    );
  --color-accent-hsl: 212, 100%, 50%;
  --color-accent-rgb: 2, 122, 255;
  --color-base-00: #111111;
  --color-base-10: #1b1b1b;
  --color-base-20: #1a1a1a;
  --divider-color: #313131;
  --divider-color-hover: hsl(212, 100%, 50%);
  --divider-vertical-height: 100%;
  --dropdown-background: #1a1a1a;
  --dropdown-background-hover: #373737;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1a1a1a;
  --flair-color: #bababa;
  --font-interface: '??', "Instrument", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: "Monaspace", monospace;
  --font-print: '??', '??', "Instrument", sans-serif, 'Arial';
  --font-text: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Instrument", sans-serif;
  --font-title: "Getai";
  --font-weight: var(--h2-weight, 600);
  --glass-angle-dark: 125deg;
  --glass-angle-light: 120deg;
  --graph-line: rgb(from #ffffff r g b / 0.15);
  --graph-node: #666666;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(212, 100%, 50%);
  --graph-node-tag: hsl(212, 100%, 50%);
  --graph-node-unresolved: #999999;
  --graph-text: #bababa;
  --h1-font: "Getai";
  --h1-size: clamp(2.5rem, 8vw - 2rem, 3rem);
  --h1-weight: 900;
  --h2-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h2-weight: 600;
  --h3-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h3-weight: 600;
  --h4-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h4-weight: 600;
  --h5-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-line-height: 1.65;
  --h5-weight: 600;
  --h6-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h6-line-height: 1.65;
  --heading-formatting: #999999;
  --heading-spacing: 2.5rem;
  --hr-color: #313131;
  --interactive-accent: hsl(212, 100%, 50%);
  --interactive-accent-hover: #fa99cd;
  --interactive-accent-hsl: 212, 100%, 50%;
  --interactive-hover: #373737;
  --interactive-normal: #1a1a1a;
  --link-color: #666666;
  --link-color-hover: #bababa;
  --link-external-color: hsl(212, 100%, 50%);
  --link-external-color-hover: hsl(
        258 calc(88% + 180) 66%
    );
  --link-unresolved-color: #666666;
  --link-unresolved-decoration-color: transparent;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #1a1a1a;
  --menu-border-color: #373737;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  --pdf-background: #111111;
  --pdf-page-background: #111111;
  --pdf-shadow: 0 0 0 1px #313131;
  --pdf-sidebar-background: #111111;
  --pdf-thumbnail-shadow: 0 0 0 1px #313131;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1a1a1a 65%, transparent) linear-gradient(#1a1a1a, color-mix(in srgb, #1a1a1a 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(212, 100%, 50%);
  --scrollbar-bg: rgb(from #ffffff r g b / 0.1);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(#ffffff, 0.1);
  --search-clear-button-color: #666666;
  --search-icon-color: #666666;
  --search-result-background: #111111;
  --setting-group-heading-color: #bababa;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #1b1b1b;
  --setting-items-border-color: #313131;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #666666;
  --shiki-code-background: #1b1b1b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #999999;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #666666;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #666666;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #313131;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #999999;
  --shiki-gutter-text-color-highlight: #666666;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #666666;
  --shiki-highlight-neutral-background: rgba(#ffffff, .05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #999999;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #111111;
  --swatch-shadow: inset 0 0 0 1px rgba(#ffffff, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #111111;
  --tab-divider-color: #373737;
  --tab-font-size: 13px;
  --tab-outline-color: #313131;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #1a1a1a;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1a1a, transparent);
  --tab-switcher-preview-radius: 24px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(#ffffff, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 100%, 50%);
  --tab-text-color: #999999;
  --tab-text-color-active: #666666;
  --tab-text-color-focused: #666666;
  --tab-text-color-focused-active: #666666;
  --tab-text-color-focused-active-current: #bababa;
  --tab-text-color-focused-highlighted: hsl(212, 100%, 50%);
  --table-add-button-border-color: #313131;
  --table-add-button-border-width: 1px;
  --table-border-color: #313131;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 100%, 50%);
  --table-drag-handle-color: #999999;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #313131;
  --table-header-border-width: 1px;
  --table-header-color: #bababa;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 100%, 50%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(212, 100%, 50%);
  --table-text-size: 16px;
  --tag-background: hsla(212, 100%, 50%, 0.1);
  --tag-background-hover: hsla(212, 100%, 50%, 0.2);
  --tag-border-color: hsla(212, 100%, 50%, 0.15);
  --tag-border-color-hover: hsla(212, 100%, 50%, 0.15);
  --tag-color: hsl(212, 100%, 50%);
  --tag-color-hover: hsl(212, 100%, 50%);
  --tag-size: 0.875em;
  --text-accent: hsl(212, 100%, 50%);
  --text-accent-hover: hsl(
        258 calc(88% + 180) 66%
    );
  --text-error: #fb464c;
  --text-faint: #999999;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #666666;
  --text-normal: #bababa;
  --text-on-button: white;
  --text-selection: hsla(212, 100%, 50%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --ulu-radius: 8px;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(0, 119, 255) 0%, color(srgb 0 0.466667 1 / 0.2) 60%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(0, 119, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 119, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 119, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 119, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--ulu-h2-text-color, var(--h2-color, var(--color-accent)));
  content: "";
  font-family: var(--h2-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 24px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.36px);
  line-height: var(--h2-line-height, 28.8px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(from var(--mono-rgb-100) r g b/0.05);
  border-color: color(srgb 1 1 1 / 0.15);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--color-accent, rgb(0, 119, 255));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(102, 102, 102));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(102, 102, 102) none 0px;
  text-decoration-color: rgb(102, 102, 102);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(0, 119, 255));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 119, 255) none 0px;
  text-decoration: 13%;
  text-decoration-color: rgb(0, 119, 255);
  text-decoration-thickness: var(--link-decoration-thickness, 13%);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  background-color: color(srgb 0 0.466667 1 / 0.1);
  color: var(--color-accent, rgb(0, 119, 255));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 500);
  outline: rgb(0, 119, 255) none 0px;
  text-decoration-color: rgb(0, 119, 255);
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}

html[saved-theme="dark"] body a.internal-link.broken {
  background-color: var(--color-base-30, rgba(0, 0, 0, 0));
  color: var(--text-faint, rgb(153, 153, 153));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 500);
  outline: rgb(153, 153, 153) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(153, 153, 153));
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(186, 186, 186);
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
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(153, 153, 153));
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(from var(--color-base-00) r g b/0.3);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(186, 186, 186);
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  margin-bottom: 24px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: var(--heading-spacing, 24px);
  width: 604px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-width: 0px;
  border-left-color: rgb(186, 186, 186);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(186, 186, 186);
  border-right-width: 0px;
  border-top-color: rgb(186, 186, 186);
  border-top-width: 0px;
  color: var(--text-normal, rgb(186, 186, 186));
  font-weight: 500;
  padding-bottom: 2px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
  text-align: left;
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-width: 0px;
  border-left-color: rgb(102, 102, 102);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(102, 102, 102);
  border-right-width: 0px;
  border-top-color: rgb(102, 102, 102);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--text-muted, rgb(102, 102, 102));
  font-weight: var(--table-header-weight, 700);
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  text-align: left;
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--ec-codeFg, rgb(102, 102, 102));
  font-family: var(--ec-codeFontFml, Monaspace, monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(27, 27, 27));
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
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
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
  background-color: rgb(from var(--color-base-25) r g b/0.6);
  border-bottom-color: rgb(49, 49, 49);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(49, 49, 49);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(49, 49, 49);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(49, 49, 49);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgb(from var(--color-base-25) r g b/0.6);
  border-bottom-color: rgb(49, 49, 49);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(49, 49, 49);
  border-left-width: 1px;
  border-right-color: rgb(49, 49, 49);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(49, 49, 49);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-style: solid;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-right-style: solid;
  border-top-color: rgb(186, 186, 186);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: color(srgb 1 1 1 / 0.15);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: color(srgb 1 1 1 / 0.15);
  border-right-color: color(srgb 1 1 1 / 0.15);
  border-top-color: color(srgb 1 1 1 / 0.15);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: var(--checkbox-size, 18px);
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
  color: rgb(102, 102, 102);
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
  color: rgb(102, 102, 102);
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

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='3' x2='12' y2='14'/%3E%3Cline x1='12' y1='21' x2='12.01' y2='21'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='3' x2='12' y2='14'/%3E%3Cline x1='12' y1='21' x2='12.01' y2='21'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='11' x2='12' y2='21'/%3E%3Cline x1='12' y1='3' x2='12.01' y2='3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='11' x2='12' y2='21'/%3E%3Cline x1='12' y1='3' x2='12.01' y2='3'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 218, 218);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: var(--text-normal, rgb(186, 186, 186));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout-title {
  --ancestor-editor-color: #bababa;
  --background-modifier-active-hover: hsla(212, 100%, 50%, 0.1);
  --background-modifier-border: #313131;
  --background-modifier-border-focus: #414141;
  --background-modifier-border-hover: #373737;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #222222;
  --background-modifier-form-field-hover: #222222;
  --background-modifier-hover: rgba(#ffffff, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #111111;
  --background-primary-alt: #1b1b1b;
  --background-secondary: #1a1a1a;
  --background-secondary-alt: #313131;
  --blockquote-border-color: hsl(212, 100%, 50%);
  --blur-background: color-mix(in srgb, #1a1a1a 65%, transparent) linear-gradient(#1a1a1a, color-mix(in srgb, #1a1a1a 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
  --callout-color: 2, 122, 255;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 8px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #111111;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #313131;
  --caret-color: #bababa;
  --checkbox-border-color: #999999;
  --checkbox-border-color-hover: #666666;
  --checkbox-color: hsl(212, 100%, 50%);
  --checkbox-color-hover: #fa99cd;
  --checkbox-marker-color: #111111;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #666666;
  --clickable-icon-radius: 4px;
  --code-background: #1b1b1b;
  --code-border-color: #313131;
  --code-bracket-background: rgba(#ffffff, 0.067);
  --code-comment: #999999;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #bababa;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #666666;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #999999;
  --collapse-icon-color-collapsed: hsl(212, 100%, 50%);
  --color-accent: hsl(212, 100%, 50%);
  --color-accent-1: #fa99cd;
  --color-accent-1-rgb: 250, 153, 205;
  --color-accent-2: hsl(
        258 calc(88% + 180) 66%
    );
  --color-accent-hover: hsl(
        258 calc(88% + 180) 66%
    );
  --color-accent-hsl: 212, 100%, 50%;
  --color-accent-rgb: 2, 122, 255;
  --color-base-00: #111111;
  --color-base-10: #1b1b1b;
  --color-base-20: #1a1a1a;
  --divider-color: #313131;
  --divider-color-hover: hsl(212, 100%, 50%);
  --divider-vertical-height: 100%;
  --dropdown-background: #1a1a1a;
  --dropdown-background-hover: #373737;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1a1a1a;
  --flair-color: #bababa;
  --font-interface: '??', "Instrument", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: "Monaspace", monospace;
  --font-print: '??', '??', "Instrument", sans-serif, 'Arial';
  --font-text: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Instrument", sans-serif;
  --font-title: "Getai";
  --font-weight: 400;
  --glass-angle-dark: 125deg;
  --glass-angle-light: 120deg;
  --graph-line: rgb(from #ffffff r g b / 0.15);
  --graph-node: #666666;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(212, 100%, 50%);
  --graph-node-tag: hsl(212, 100%, 50%);
  --graph-node-unresolved: #999999;
  --graph-text: #bababa;
  --h1-font: "Getai";
  --h1-size: clamp(2.5rem, 8vw - 2rem, 3rem);
  --h1-weight: 900;
  --h2-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h2-weight: 600;
  --h3-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h3-weight: 600;
  --h4-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h4-weight: 600;
  --h5-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-line-height: 1.65;
  --h5-weight: 600;
  --h6-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h6-line-height: 1.65;
  --heading-formatting: #999999;
  --heading-spacing: 2.5rem;
  --hr-color: #313131;
  --interactive-accent: hsl(212, 100%, 50%);
  --interactive-accent-hover: #fa99cd;
  --interactive-accent-hsl: 212, 100%, 50%;
  --interactive-hover: #373737;
  --interactive-normal: #1a1a1a;
  --link-color: #666666;
  --link-color-hover: #bababa;
  --link-external-color: hsl(212, 100%, 50%);
  --link-external-color-hover: hsl(
        258 calc(88% + 180) 66%
    );
  --link-unresolved-color: #666666;
  --link-unresolved-decoration-color: transparent;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #1a1a1a;
  --menu-border-color: #373737;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  --pdf-background: #111111;
  --pdf-page-background: #111111;
  --pdf-shadow: 0 0 0 1px #313131;
  --pdf-sidebar-background: #111111;
  --pdf-thumbnail-shadow: 0 0 0 1px #313131;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1a1a1a 65%, transparent) linear-gradient(#1a1a1a, color-mix(in srgb, #1a1a1a 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(212, 100%, 50%);
  --scrollbar-bg: rgb(from #ffffff r g b / 0.1);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(#ffffff, 0.1);
  --search-clear-button-color: #666666;
  --search-icon-color: #666666;
  --search-result-background: #111111;
  --setting-group-heading-color: #bababa;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #1b1b1b;
  --setting-items-border-color: #313131;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #666666;
  --shiki-code-background: #1b1b1b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #999999;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #666666;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #666666;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #313131;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #999999;
  --shiki-gutter-text-color-highlight: #666666;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #666666;
  --shiki-highlight-neutral-background: rgba(#ffffff, .05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #999999;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #111111;
  --swatch-shadow: inset 0 0 0 1px rgba(#ffffff, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #111111;
  --tab-divider-color: #373737;
  --tab-font-size: 13px;
  --tab-outline-color: #313131;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #1a1a1a;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1a1a, transparent);
  --tab-switcher-preview-radius: 24px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(#ffffff, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 100%, 50%);
  --tab-text-color: #999999;
  --tab-text-color-active: #666666;
  --tab-text-color-focused: #666666;
  --tab-text-color-focused-active: #666666;
  --tab-text-color-focused-active-current: #bababa;
  --tab-text-color-focused-highlighted: hsl(212, 100%, 50%);
  --table-add-button-border-color: #313131;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #111111 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 100%, 50%);
  --table-drag-handle-color: #999999;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #313131;
  --table-header-border-width: 1px;
  --table-header-color: #bababa;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 100%, 50%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(212, 100%, 50%);
  --table-text-size: 16px;
  --tag-background: hsla(212, 100%, 50%, 0.1);
  --tag-background-hover: hsla(212, 100%, 50%, 0.2);
  --tag-border-color: hsla(212, 100%, 50%, 0.15);
  --tag-border-color-hover: hsla(212, 100%, 50%, 0.15);
  --tag-color: hsl(212, 100%, 50%);
  --tag-color-hover: hsl(212, 100%, 50%);
  --tag-size: 0.875em;
  --text-accent: hsl(212, 100%, 50%);
  --text-accent-hover: hsl(
        258 calc(88% + 180) 66%
    );
  --text-error: #fb464c;
  --text-faint: #999999;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #666666;
  --text-normal: #bababa;
  --text-on-button: white;
  --text-selection: hsla(212, 100%, 50%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --ulu-radius: 8px;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(2, 122, 255, 0.3) 50%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(2, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgba(var(--callout-color), 1);
  content: "";
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: var(--callout-title-size, 16px);
  font-weight: 600;
  letter-spacing: 0.16px;
  line-height: var(--line-height-tight, 20.8px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  background: rgba(83, 223, 221, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: var(--text-normal, rgb(186, 186, 186));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  background: rgba(251, 70, 76, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: var(--text-normal, rgb(186, 186, 186));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  background: rgba(251, 70, 76, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: var(--text-normal, rgb(186, 186, 186));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  background: rgba(168, 130, 255, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: var(--text-normal, rgb(186, 186, 186));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  background: rgba(251, 70, 76, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: var(--text-normal, rgb(186, 186, 186));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  background: rgba(2, 122, 255, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: var(--text-normal, rgb(186, 186, 186));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  background: rgba(2, 122, 255, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: var(--text-normal, rgb(186, 186, 186));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  background: rgba(233, 151, 63, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: var(--text-normal, rgb(186, 186, 186));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(158, 158, 158, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: var(--text-normal, rgb(186, 186, 186));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  background: rgba(68, 207, 110, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: var(--text-normal, rgb(186, 186, 186));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  background: rgba(83, 223, 221, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: var(--text-normal, rgb(186, 186, 186));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  background: rgba(2, 122, 255, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: var(--text-normal, rgb(186, 186, 186));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  background: rgba(233, 151, 63, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: var(--text-normal, rgb(186, 186, 186));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
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
  background-color: rgb(from var(--color-base-0) r g b/0.3);
  border-bottom-color: color(srgb 1 1 1 / 0.1);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left-color: color(srgb 1 1 1 / 0.1);
  border-right-color: color(srgb 1 1 1 / 0.1);
  border-top-color: color(srgb 1 1 1 / 0.1);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  color: var(--text-normal, rgb(186, 186, 186));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(17, 17, 17));
  border-bottom-color: color(srgb 1 1 1 / 0.08);
  border-left-color: color(srgb 1 1 1 / 0.08);
  border-right-color: color(srgb 1 1 1 / 0.08);
  border-top-color: color(srgb 1 1 1 / 0.08);
  box-shadow: 0 40px 80px -20px rgb(from var(--mono-rgb-0) r g b/0.6),
        inset 0 1px 0 0 rgb(from var(--mono-rgb-100) r g b/0.1);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(186, 186, 186);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  background-color: var(--interactive-hover, rgb(55, 55, 55));
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 1 1 1 / 0.08);
  border-left-color: color(srgb 1 1 1 / 0.08);
  border-right-color: color(srgb 1 1 1 / 0.08);
  border-top-color: color(srgb 1 1 1 / 0.08);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(from var(--color-base-0) r g b/0.3);
  border-bottom-color: rgb(49, 49, 49);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(49, 49, 49);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(49, 49, 49);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(49, 49, 49);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: inset 0 2px 4px rgb(from var(--mono-rgb-0) r g b/0.1);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--interactive-hover, rgb(55, 55, 55));
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--interactive-hover, rgb(55, 55, 55));
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: color(srgb 0 0.466667 1 / 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0 0.466667 1 / 0.4);
  border-left-width: 1px;
  border-right-color: color(srgb 0 0.466667 1 / 0.4);
  border-right-width: 1px;
  border-top-color: color(srgb 0 0.466667 1 / 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 600);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: var(--color-base-100, rgb(218, 218, 218));
}

html[saved-theme="dark"] body h1 {
  color: var(--ulu-h1-text-color, var(--h1-color, var(--color-base-100)));
  font-family: var(--h1-font, Getai);
}

html[saved-theme="dark"] body h1.article-title {
  font-size: var(--inline-title-size, 48px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="dark"] body h2 {
  color: var(--ulu-h2-text-color, var(--h2-color, var(--color-accent)));
  font-family: var(--h2-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  font-family: var(--inline-title-font, Getai);
}

html[saved-theme="dark"] body h3 {
  color: var(--ulu-h3-text-color, var(--h3-color, var(--color-base-100)));
  font-family: var(--h3-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h4 {
  color: var(--ulu-h4-text-color, var(--h4-color, var(--color-base-100)));
  font-family: var(--h4-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h5 {
  color: var(--ulu-h5-text-color, var(--h5-color, var(--color-base-100)));
  font-family: var(--h5-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h6 {
  color: var(--ulu-h6-text-color, var(--h6-color, var(--color-base-100)));
  font-family: var(--h6-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(34, 34, 34);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(102, 102, 102));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(102, 102, 102));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(186, 186, 186);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--text-muted, rgb(102, 102, 102));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-right-radius: 8px;
  color: var(--status-bar-text-color, rgb(102, 102, 102));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: var(--text-normal, rgb(186, 186, 186));
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(186, 186, 186);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(102, 102, 102));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(102, 102, 102);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(102, 102, 102);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(102, 102, 102));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--text-muted, rgb(102, 102, 102));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(102, 102, 102);
  stroke: rgb(102, 102, 102);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(153, 153, 153));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  background-color: rgba(var(--canvas-card-base), 0.05);
  border-color: rgb(186, 186, 186);
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(102, 102, 102);
  color: var(--text-muted, rgb(102, 102, 102));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
  color: var(--text-muted, rgb(102, 102, 102));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
  border-radius: 16px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(102, 102, 102) rgb(102, 102, 102) rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-radius: 8px;
  color: var(--text-normal, rgb(186, 186, 186));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(17, 17, 17));
  color: var(--text-normal, rgb(186, 186, 186));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(186, 186, 186);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(186, 186, 186));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  background-color: rgb(from var(--color-base-0) r g b/0.3);
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  color: var(--text-normal, rgb(102, 102, 102));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-left: 28px;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, color(srgb 0 0.466667 1 / 0.7));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--text-on-accent, rgb(255, 255, 255));
  font-family: var(--font-monospace, Monaspace, monospace);
  font-size: var(--code-size, 12px);
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body sub {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body summary {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body sup {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(from var(--color-accent) r g b/0.05);
  border-bottom-color: color(srgb 0 0.466667 1 / 0.3);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0 0.466667 1 / 0.3);
  border-left-width: 1px;
  border-right-color: color(srgb 0 0.466667 1 / 0.3);
  border-right-width: 1px;
  border-top-color: color(srgb 0 0.466667 1 / 0.3);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--color-accent, rgb(0, 119, 255));
}`,
  },
  light: {
    base: `:root:root {
  --ancestor-editor-color: var(
        --text-normal
    , #5a5a5a);
  --background-modifier-border: var(--color-base-30, #c7c7c7);
  --background-modifier-border-alt: #fff;
  --background-modifier-border-hover: var(--color-base-35, #bcbcbc);
  --background-modifier-form-field: var(--color-base-00, #fff);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #fff);
  --background-primary: var(--color-base-00, #fff);
  --background-primary-alt: var(--color-base-10, #ededed);
  --background-secondary: var(--color-base-20, #f3f3f3);
  --bases-cards-background: var(--background-primary, #fff);
  --bases-cards-cover-background: var(--background-primary-alt, #ededed);
  --bases-embed-border-color: var(--background-modifier-border, #c7c7c7);
  --bases-group-heading-property-color: var(--text-muted, #ababab);
  --bases-table-border-color: var(--table-border-color, #c7c7c7);
  --bases-table-cell-background-active: var(--background-primary, #fff);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #ededed);
  --bases-table-cell-background-selected: var(--table-selection, hsla(197, 95%, 67%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #ededed);
  --bases-table-header-background: var(--background-primary, #fff);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(#000000, 0.067));
  --bases-table-header-color: var(--text-muted, #ababab);
  --bases-table-summary-background: var(--background-primary, #fff);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(#000000, 0.067));
  --blockquote-border-color: var(--interactive-accent, hsl(197, 95%, 67%));
  --bodyFont: var(--font-text-theme, var(--ulu-font-general, "Instrument", sans-serif));
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-default: var(--color-blue-rgb, 91, 206, 250);
  --callout-info: var(--color-blue-rgb, 91, 206, 250);
  --callout-radius: var(--radius-m, 8px);
  --callout-todo: var(--color-blue-rgb, 91, 206, 250);
  --canvas-background: var(--background-primary, #fff);
  --canvas-card-label-color: var(--text-faint, #707070);
  --canvas-color: var(--background-modifier-border, #c7c7c7);
  --canvas-dot-pattern: var(--color-base-30, #c7c7c7);
  --caret-color: var(--text-normal, #5a5a5a);
  --checkbox-border-color: var(--text-faint, #707070);
  --checkbox-border-color-hover: var(--text-muted, #ababab);
  --checkbox-color: var(--interactive-accent, hsl(197, 95%, 67%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(
        258 88% 71%
    ));
  --checkbox-marker-color: var(--background-primary, #fff);
  --checklist-done-color: var(--text-muted, #ababab);
  --code-background: var(--background-primary-alt, #ededed);
  --code-border-color: var(--background-modifier-border, #c7c7c7);
  --code-bracket-background: var(--background-modifier-hover, rgba(#000000, 0.067));
  --code-comment: var(--text-faint, #707070);
  --code-keyword: var(--color-pink, #f5a9b8);
  --code-normal: var(--text-normal, #5a5a5a);
  --code-punctuation: var(--text-muted, #ababab);
  --collapse-icon-color: var(--text-faint, #707070);
  --collapse-icon-color-collapsed: var(--color-accent, hsl(197, 95%, 67%));
  --color-accent: hsl(var(--color-blue-hsl));
  --color-accent-1: var(--color-pink, #f5a9b8);
  --color-accent-1-rgb: var(--color-pink-rgb, 245, 169, 184);
  --color-accent-2: hsl(
        var(--accent-h) var(--accent-s) calc(var(--accent-l) + 5%)
    );
  --color-accent-hover: var(--color-accent-2, hsl(
        258 88% 71%
    ));
  --color-accent-hsl: var(--color-blue-hsl, 197, 95%, 67%);
  --color-accent-rgb: var(--color-blue-rgb, 91, 206, 250);
  --color-base-00: var(--proxy-00, #fff);
  --color-base-10: var(--proxy-10, #ededed);
  --color-base-20: var(--proxy-20, #f3f3f3);
  --color-base-30: #c7c7c7;
  --color-base-35: #bcbcbc;
  --color-base-70: #5a5a5a;
  --color-blue: #5bcefa;
  --color-blue-hsl: 197, 95%, 67%;
  --color-blue-rgb: 91, 206, 250;
  --color-cyan-hsl: 179, 100%, 37%;
  --color-green-hsl: 144, 92%, 38%;
  --color-orange-hsl: 30, 100%, 46%;
  --color-pink: #f5a9b8;
  --color-pink-hsl: 348, 83%, 81%;
  --color-pink-rgb: 245, 169, 184;
  --color-purple-hsl: 255, 82%, 63%;
  --color-red-hsl: 353, 81%, 55%;
  --color-yellow-hsl: 46, 100%, 44%;
  --dark: var(--text-normal, var(--color-base-70, #5a5a5a));
  --darkgray: var(--text-normal, var(--color-base-70, #5a5a5a));
  --divider-color: var(--background-modifier-border, #c7c7c7);
  --divider-color-hover: var(--interactive-accent, hsl(197, 95%, 67%));
  --dropdown-background: var(--interactive-normal, #fff);
  --dropdown-background-hover: var(--interactive-hover, #ededed);
  --file-header-background: var(--background-primary, #fff);
  --file-header-background-focused: var(--background-primary, #fff);
  --file-header-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #fff);
  --flair-color: var(--text-normal, #5a5a5a);
  --font-interface-theme: "Instrument", sans-serif;
  --font-mermaid: var(--font-text, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-serif: "Fraunces", serif;
  --font-text-theme: var(--ulu-font-general, "Instrument", sans-serif);
  --font-title: var(--ulu-font-title, "Getai");
  --footnote-divider-color: var(--metadata-divider-color, #c7c7c7);
  --footnote-id-color: var(--text-muted, #ababab);
  --footnote-id-color-no-occurrences: var(--text-faint, #707070);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(#000000, 0.067));
  --footnote-line-height: var(--line-height-normal, 1.65);
  --gradient-bg-primary: linear-gradient(135deg, #fff 1.62%, #dfdfdf 50.72%);
  --gradient-bg-secondary: linear-gradient(
        135deg,
        #f3f3f3 1.62%,
        #e6e6e6 50.72%
    );
  --graph-line: rgb(from var(--mono-rgb-100) r g b / 0.15);
  --graph-node: var(--text-muted, #ababab);
  --graph-node-focused: var(--color-accent, hsl(197, 95%, 67%));
  --graph-node-tag: var(--color-accent, hsl(197, 95%, 67%));
  --graph-node-unresolved: var(--text-faint, #707070);
  --graph-text: var(--text-normal, #5a5a5a);
  --gray: var(--text-muted, var(--color-base-50, #ababab));
  --h1-font: var(--ulu-header1-type, var(--font-title));
  --h1-size: var(--inline-title-size, clamp(2.5rem, 8vw - 2rem, 3rem));
  --h1-weight: var(--ulu-h1-weight, 900);
  --h2-font: var(--ulu-header2-type, var(--font-text, var(--font-text-theme)));
  --h2-weight: var(--ulu-h2-weight, 600);
  --h3-font: var(--ulu-header3-type, var(--font-text, var(--font-text-theme)));
  --h3-weight: var(--ulu-h3-weight, 600);
  --h4-font: var(--ulu-header4-type, var(--font-text, var(--font-text-theme)));
  --h4-weight: var(--ulu-h4-weight, 600);
  --h5-font: var(--ulu-header5-type, var(--font-text, var(--font-text-theme)));
  --h5-line-height: var(--line-height-normal, 1.65);
  --h5-weight: var(--ulu-h5-weight, 600);
  --h6-font: var(--ulu-header6-type, var(--font-text, var(--font-text-theme)));
  --h6-line-height: var(--line-height-normal, 1.65);
  --h6-weight: var(
        --ulu-h6-weight,
        600
    );
  --headerFont: var(--font-text-theme, var(--ulu-font-general, "Instrument", sans-serif));
  --heading-formatting: var(--text-faint, #707070);
  --hr-color: var(--background-modifier-border, #c7c7c7);
  --icon-color: var(--text-muted, #ababab);
  --icon-color-active: var(--color-accent, hsl(197, 95%, 67%));
  --icon-color-focused: var(--text-normal, #5a5a5a);
  --icon-color-hover: var(--text-muted, #ababab);
  --inline-title-color: var(--color-base-100, #222222);
  --inline-title-font: var(--ulu-inline-title-font, var(--font-title));
  --inline-title-size: var(--h1-size, clamp(2.5rem, 8vw - 2rem, 3rem));
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, #707070);
  --input-placeholder-color: var(--text-faint, #707070);
  --interactive-accent: var(--color-accent, hsl(197, 95%, 67%));
  --interactive-accent-hover: var(--color-accent-2, hsl(
        258 88% 71%
    ));
  --interactive-accent-hsl: var(--color-accent-hsl, 197, 95%, 67%);
  --interactive-hover: var(--color-base-10, #ededed);
  --interactive-normal: var(--color-base-00, #fff);
  --lbs: 0px 20px 30px rgba(0, 5, 0, 0.03);
  --light: var(--background-primary, var(--color-base-00, #fff));
  --lightgray: var(--background-secondary, var(--color-base-20, #f3f3f3));
  --line-height-normal: 1.65;
  --link-color: var(--text-muted, #ababab);
  --link-color-hover: var(--text-normal, #5a5a5a);
  --link-decoration-hover: none;
  --link-decoration-thickness: 13%;
  --link-external-color: var(--color-accent, hsl(197, 95%, 67%));
  --link-external-color-hover: var(--color-accent-hover, hsl(
        258 88% 71%
    ));
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: var(--text-muted, #ababab);
  --list-marker-color: var(--text-faint, #707070);
  --list-marker-color-collapsed: var(--color-accent, hsl(197, 95%, 67%));
  --list-marker-color-hover: var(--text-muted, #ababab);
  --menu-background: var(--background-secondary, #f3f3f3);
  --menu-border-color: var(--background-modifier-border-hover, #bcbcbc);
  --menu-shadow: var(--shadow-s, 0px 3px 5px rgba(0, 0, 0, 0.04));
  --metadata-border-color: var(--background-modifier-border, #c7c7c7);
  --metadata-divider-color: var(--background-modifier-border, #c7c7c7);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(#000000, 0.067));
  --metadata-input-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #5a5a5a);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(#000000, 0.067));
  --metadata-label-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #ababab);
  --metadata-label-text-color-hover: var(--text-muted, #ababab);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(#000000, 0.067));
  --modal-background: var(--background-primary, #fff);
  --mono-rgb-0: #ffffff;
  --mono-rgb-100: #000000;
  --nav-collapse-icon-color: var(--collapse-icon-color, #707070);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #707070);
  --nav-heading-color: var(--text-normal, #5a5a5a);
  --nav-heading-color-collapsed: var(--text-faint, #707070);
  --nav-heading-color-collapsed-hover: var(--text-muted, #ababab);
  --nav-heading-color-hover: var(--text-normal, #5a5a5a);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(#000000, 0.12));
  --nav-item-background-active: var(--background-modifier-hover, rgba(#000000, 0.067));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(#000000, 0.067));
  --nav-item-color: var(--text-muted, #ababab);
  --nav-item-color-active: var(--text-normal, #5a5a5a);
  --nav-item-color-highlighted: var(--color-accent-hover, hsl(
        258 88% 71%
    ));
  --nav-item-color-hover: var(--text-normal, #5a5a5a);
  --nav-item-color-selected: var(--text-normal, #5a5a5a);
  --nav-tag-color: var(--text-faint, #707070);
  --nav-tag-color-active: var(--text-muted, #ababab);
  --nav-tag-color-hover: var(--text-muted, #ababab);
  --pdf-background: var(--background-primary, #fff);
  --pdf-page-background: var(--background-primary, #fff);
  --pdf-sidebar-background: var(--background-primary, #fff);
  --pill-border-color: var(--background-modifier-border, #c7c7c7);
  --pill-border-color-hover: var(--background-modifier-border-hover, #bcbcbc);
  --pill-color: var(--text-muted, #ababab);
  --pill-color-hover: var(--text-normal, #5a5a5a);
  --pill-color-remove: var(--text-faint, #707070);
  --pill-color-remove-hover: var(--text-accent, hsl(197, 95%, 67%));
  --prompt-background: var(--background-primary, #fff);
  --proxy-00: #fff;
  --proxy-10: #ededed;
  --proxy-20: #f3f3f3;
  --radius-xl: 24px;
  --raised-background: var(--blur-background, color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)));
  --ribbon-background: var(--background-secondary, #f3f3f3);
  --ribbon-background-collapsed: var(--background-primary, #fff);
  --sbs: 24px 24px 84px -4px rgba(0, 0, 0, 0.05), 0px 16px 64px 6px rgba(0, 0, 0, 0.007);
  --scrollbar-active-thumb-bg: var(--color-accent, hsl(197, 95%, 67%));
  --scrollbar-bg: rgb(from var(--mono-rgb-100) r g b / 0.1);
  --search-clear-button-color: var(--text-muted, #ababab);
  --search-icon-color: var(--text-muted, #ababab);
  --search-result-background: var(--background-primary, #fff);
  --secondary: var(--text-accent, var(--color-accent, hsl(197, 95%, 67%)));
  --setting-group-heading-color: var(--text-normal, #5a5a5a);
  --setting-items-background: var(--background-primary-alt, #ededed);
  --setting-items-border-color: var(--background-modifier-border, #c7c7c7);
  --shadow-l: 0px 8px 24px rgba(149, 157, 165, 0.2);
  --shadow-lm-only: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-s: 0px 3px 5px rgba(0, 0, 0, 0.04);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #ababab);
  --shiki-code-background: var(--code-background, #ededed);
  --shiki-code-comment: var(--text-faint, #707070);
  --shiki-code-keyword: var(--color-pink, #f5a9b8);
  --shiki-code-normal: var(--text-muted, #ababab);
  --shiki-code-punctuation: var(--text-muted, #ababab);
  --shiki-gutter-border-color: var(--background-modifier-border, #c7c7c7);
  --shiki-gutter-text-color: var(--text-faint, #707070);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #ababab);
  --shiki-highlight-neutral: var(--shiki-code-normal, #ababab);
  --shiki-terminal-dots-color: var(--text-faint, #707070);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #bcbcbc);
  --slider-track-background: var(--background-modifier-border, #c7c7c7);
  --status-bar-background: var(--background-secondary, #f3f3f3);
  --status-bar-border-color: var(--divider-color, #c7c7c7);
  --status-bar-text-color: var(--text-muted, #ababab);
  --suggestion-background: var(--background-primary, #fff);
  --sync-avatar-color-6: var(--color-blue, #5bcefa);
  --sync-avatar-color-8: var(--color-pink, #f5a9b8);
  --tab-background-active: var(--background-primary, #fff);
  --tab-container-background: var(--background-secondary, #f3f3f3);
  --tab-divider-color: var(--background-modifier-border-hover, #bcbcbc);
  --tab-outline-color: var(--divider-color, #c7c7c7);
  --tab-switcher-background: var(--background-secondary, #f3f3f3);
  --tab-switcher-preview-radius: var(--radius-xl, 24px);
  --tab-text-color: var(--text-faint, #707070);
  --tab-text-color-active: var(--text-muted, #ababab);
  --tab-text-color-focused: var(--text-muted, #ababab);
  --tab-text-color-focused-active: var(--text-muted, #ababab);
  --tab-text-color-focused-active-current: var(--text-normal, #5a5a5a);
  --tab-text-color-focused-highlighted: var(--color-accent, hsl(197, 95%, 67%));
  --table-add-button-border-color: var(--background-modifier-border, #c7c7c7);
  --table-border-color: var(--background-modifier-border, #c7c7c7);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(197, 95%, 67%));
  --table-drag-handle-color: var(--text-faint, #707070);
  --table-header-border-color: var(--table-border-color, #c7c7c7);
  --table-header-color: var(--text-normal, #5a5a5a);
  --table-selection-border-color: var(--interactive-accent, hsl(197, 95%, 67%));
  --tag-color: var(--color-accent, hsl(197, 95%, 67%));
  --tag-color-hover: var(--color-accent, hsl(197, 95%, 67%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(
        258 88% 71%
    )));
  --text-accent: var(--color-accent, hsl(197, 95%, 67%));
  --text-accent-hover: var(--color-accent-2, hsl(
        258 88% 71%
    ));
  --text-faint: var(--color-base-60, #707070);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: var(--color-base-50, #ababab);
  --text-normal: var(--color-base-70, #5a5a5a);
  --text-on-button: var(--text-normal, #5a5a5a);
  --text-selection: var(--background-modifier-border, #c7c7c7);
  --titleFont: var(--font-text-theme, var(--ulu-font-general, "Instrument", sans-serif));
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, #c7c7c7);
  --titlebar-text-color: var(--text-muted, #ababab);
  --titlebar-text-color-focused: var(--text-normal, #5a5a5a);
  --ulu-font-general: "Instrument", sans-serif;
  --ulu-font-title: "Getai";
  --ulu-kanban-border-color: transparent;
  --ulu-kanban-border-width: 0px;
  --ulu-radius: var(--radius-m, 8px);
  --vault-profile-color: var(--text-normal, #5a5a5a);
  --vault-profile-color-hover: var(--vault-profile-color, #5a5a5a);
  --view-bottom-fade-mask: none;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(90, 90, 90);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--text-normal, rgb(90, 90, 90));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--color-base-100, rgb(34, 34, 34));
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--color-base-100, rgb(34, 34, 34));
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--text-normal, rgb(90, 90, 90));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .text-highlight {
  color: var(--text-normal, rgb(90, 90, 90));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body del {
  color: rgb(90, 90, 90);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(90, 90, 90));
}

html[saved-theme="light"] body h2 {
  --ancestor-editor-color: #5a5a5a;
  --background-modifier-active-hover: hsla(197, 95%, 67%, 0.1);
  --background-modifier-border: #c7c7c7;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #bcbcbc;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-modifier-hover: rgba(#000000, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #fff;
  --background-primary-alt: #ededed;
  --background-secondary: #f3f3f3;
  --background-secondary-alt: #fcfcfc;
  --blockquote-border-color: hsl(197, 95%, 67%);
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 233, 49, 71;
  --callout-default: 91, 206, 250;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 91, 206, 250;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 8px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 91, 206, 250;
  --callout-warning: 236, 117, 0;
  --canvas-background: #fff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #c7c7c7;
  --caret-color: #5a5a5a;
  --checkbox-border-color: #707070;
  --checkbox-border-color-hover: #ababab;
  --checkbox-color: hsl(197, 95%, 67%);
  --checkbox-color-hover: hsl(
        258 88% 71%
    );
  --checkbox-marker-color: #fff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #ababab;
  --clickable-icon-radius: 4px;
  --code-background: #ededed;
  --code-border-color: #c7c7c7;
  --code-bracket-background: rgba(#000000, 0.067);
  --code-comment: #707070;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #f5a9b8;
  --code-normal: #5a5a5a;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #ababab;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #707070;
  --collapse-icon-color-collapsed: hsl(197, 95%, 67%);
  --color-accent: hsl(197, 95%, 67%);
  --color-accent-1: #f5a9b8;
  --color-accent-1-rgb: 245, 169, 184;
  --color-accent-2: hsl(
        258 88% 71%
    );
  --color-accent-hover: hsl(
        258 88% 71%
    );
  --color-accent-hsl: 197, 95%, 67%;
  --color-accent-rgb: 91, 206, 250;
  --color-base-00: #fff;
  --color-base-10: #ededed;
  --color-base-20: #f3f3f3;
  --divider-color: #c7c7c7;
  --divider-color-hover: hsl(197, 95%, 67%);
  --divider-vertical-height: 100%;
  --dropdown-background: #fff;
  --dropdown-background-hover: #ededed;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #fff;
  --flair-color: #5a5a5a;
  --font-interface: '??', "Instrument", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: "Monaspace", monospace;
  --font-print: '??', '??', "Instrument", sans-serif, 'Arial';
  --font-text: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Instrument", sans-serif;
  --font-title: "Getai";
  --font-weight: var(--h2-weight, 600);
  --glass-angle-dark: 125deg;
  --glass-angle-light: 120deg;
  --graph-line: rgb(from #000000 r g b / 0.15);
  --graph-node: #ababab;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(197, 95%, 67%);
  --graph-node-tag: hsl(197, 95%, 67%);
  --graph-node-unresolved: #707070;
  --graph-text: #5a5a5a;
  --h1-font: "Getai";
  --h1-size: clamp(2.5rem, 8vw - 2rem, 3rem);
  --h1-weight: 900;
  --h2-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h2-weight: 600;
  --h3-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h3-weight: 600;
  --h4-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h4-weight: 600;
  --h5-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-line-height: 1.65;
  --h5-weight: 600;
  --h6-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h6-line-height: 1.65;
  --heading-formatting: #707070;
  --heading-spacing: 2.5rem;
  --hr-color: #c7c7c7;
  --interactive-accent: hsl(197, 95%, 67%);
  --interactive-accent-hover: hsl(
        258 88% 71%
    );
  --interactive-accent-hsl: 197, 95%, 67%;
  --interactive-hover: #ededed;
  --interactive-normal: #fff;
  --link-color: #ababab;
  --link-color-hover: #5a5a5a;
  --link-external-color: hsl(197, 95%, 67%);
  --link-external-color-hover: hsl(
        258 88% 71%
    );
  --link-unresolved-color: #ababab;
  --link-unresolved-decoration-color: transparent;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f3f3f3;
  --menu-border-color: #bcbcbc;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 3px 5px rgba(0, 0, 0, 0.04);
  --pdf-background: #fff;
  --pdf-page-background: #fff;
  --pdf-sidebar-background: #fff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(197, 95%, 67%);
  --scrollbar-bg: rgb(from #000000 r g b / 0.1);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(#000000, 0.1);
  --search-clear-button-color: #ababab;
  --search-icon-color: #ababab;
  --search-result-background: #fff;
  --setting-group-heading-color: #5a5a5a;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #ededed;
  --setting-items-border-color: #c7c7c7;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #ababab;
  --shiki-code-background: #ededed;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #707070;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #f5a9b8;
  --shiki-code-normal: #ababab;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #ababab;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #c7c7c7;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #707070;
  --shiki-gutter-text-color-highlight: #ababab;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #ababab;
  --shiki-highlight-neutral-background: rgba(#000000, .05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #707070;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #fff;
  --swatch-shadow: inset 0 0 0 1px rgba(#000000, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #5bcefa;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #f5a9b8;
  --tab-background-active: #fff;
  --tab-divider-color: #bcbcbc;
  --tab-font-size: 13px;
  --tab-outline-color: #c7c7c7;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f3f3f3;
  --tab-switcher-menubar-background: linear-gradient(to top, #f3f3f3, transparent);
  --tab-switcher-preview-radius: 24px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(#000000, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(197, 95%, 67%);
  --tab-text-color: #707070;
  --tab-text-color-active: #ababab;
  --tab-text-color-focused: #ababab;
  --tab-text-color-focused-active: #ababab;
  --tab-text-color-focused-active-current: #5a5a5a;
  --tab-text-color-focused-highlighted: hsl(197, 95%, 67%);
  --table-add-button-border-color: #c7c7c7;
  --table-add-button-border-width: 1px;
  --table-border-color: #c7c7c7;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(197, 95%, 67%);
  --table-drag-handle-color: #707070;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #c7c7c7;
  --table-header-border-width: 1px;
  --table-header-color: #5a5a5a;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(197, 95%, 67%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(197, 95%, 67%);
  --table-text-size: 16px;
  --tag-background: hsla(197, 95%, 67%, 0.1);
  --tag-background-hover: hsla(197, 95%, 67%, 0.2);
  --tag-border-color: hsla(197, 95%, 67%, 0.15);
  --tag-border-color-hover: hsla(197, 95%, 67%, 0.15);
  --tag-color: hsl(197, 95%, 67%);
  --tag-color-hover: hsl(197, 95%, 67%);
  --tag-size: 0.875em;
  --text-accent: hsl(197, 95%, 67%);
  --text-accent-hover: hsl(
        258 88% 71%
    );
  --text-error: #e93147;
  --text-faint: #707070;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #ababab;
  --text-normal: #5a5a5a;
  --text-on-button: #5a5a5a;
  --text-selection: #c7c7c7;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --ulu-radius: 8px;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(91, 205, 251) 0%, color(srgb 0.3565 0.80585 0.9835 / 0.2) 60%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(91, 205, 251);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(91, 205, 251);
  border-left-width: 0px;
  border-right-color: rgb(91, 205, 251);
  border-right-width: 0px;
  border-top-color: rgb(91, 205, 251);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--ulu-h2-text-color, var(--h2-color, var(--color-accent)));
  content: "";
  font-family: var(--h2-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 24px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.36px);
  line-height: var(--h2-line-height, 28.8px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(from var(--mono-rgb-100) r g b/0.05);
  border-color: color(srgb 0 0 0 / 0.15);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--color-accent, rgb(91, 205, 251));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(171, 171, 171));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(171, 171, 171) none 0px;
  text-decoration-color: rgb(171, 171, 171);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(91, 205, 251));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(91, 205, 251) none 0px;
  text-decoration: 13%;
  text-decoration-color: rgb(91, 205, 251);
  text-decoration-thickness: var(--link-decoration-thickness, 13%);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  background-color: color(srgb 0.3565 0.80585 0.9835 / 0.1);
  color: var(--color-accent, rgb(91, 205, 251));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 500);
  outline: rgb(91, 205, 251) none 0px;
  text-decoration-color: rgb(91, 205, 251);
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--text-faint, rgb(112, 112, 112));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 500);
  outline: rgb(112, 112, 112) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(112, 112, 112));
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body dt {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body ol > li {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body ul > li {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(112, 112, 112));
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(from var(--color-base-00) r g b/0.3);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(90, 90, 90);
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  margin-bottom: 24px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: var(--heading-spacing, 24px);
  width: 604px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 90, 90);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(90, 90, 90);
  border-right-width: 0px;
  border-top-color: rgb(90, 90, 90);
  border-top-width: 0px;
  color: var(--text-normal, rgb(90, 90, 90));
  font-weight: 500;
  padding-bottom: 2px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
  text-align: left;
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(171, 171, 171);
  border-bottom-width: 0px;
  border-left-color: rgb(171, 171, 171);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(171, 171, 171);
  border-right-width: 0px;
  border-top-color: rgb(171, 171, 171);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--text-muted, rgb(171, 171, 171));
  font-weight: var(--table-header-weight, 700);
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  text-align: left;
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(171, 171, 171);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--ec-codeFg, rgb(171, 171, 171));
  font-family: var(--ec-codeFontFml, Monaspace, monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(237, 237, 237));
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
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body figcaption {
  color: rgb(90, 90, 90);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(from var(--color-base-25) r g b/0.6);
  border-bottom-color: rgb(199, 199, 199);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(199, 199, 199);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(199, 199, 199);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(199, 199, 199);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .transclude {
  background-color: rgb(from var(--color-base-25) r g b/0.6);
  border-bottom-color: rgb(199, 199, 199);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(199, 199, 199);
  border-left-width: 1px;
  border-right-color: rgb(199, 199, 199);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(199, 199, 199);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-style: solid;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-right-style: solid;
  border-top-color: rgb(90, 90, 90);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: color(srgb 0 0 0 / 0.15);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: color(srgb 0 0 0 / 0.15);
  border-right-color: color(srgb 0 0 0 / 0.15);
  border-top-color: color(srgb 0 0 0 / 0.15);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: var(--checkbox-size, 18px);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='3' x2='12' y2='14'/%3E%3Cline x1='12' y1='21' x2='12.01' y2='21'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='3' x2='12' y2='14'/%3E%3Cline x1='12' y1='21' x2='12.01' y2='21'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='11' x2='12' y2='21'/%3E%3Cline x1='12' y1='3' x2='12.01' y2='3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='11' x2='12' y2='21'/%3E%3Cline x1='12' y1='3' x2='12.01' y2='3'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 34, 34);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 91, 206, 250;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(91, 206, 250);
  border-right-color: rgb(91, 206, 250);
  border-top-color: rgb(91, 206, 250);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(91, 206, 250));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: var(--text-normal, rgb(90, 90, 90));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout-title {
  --ancestor-editor-color: #5a5a5a;
  --background-modifier-active-hover: hsla(197, 95%, 67%, 0.1);
  --background-modifier-border: #c7c7c7;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #bcbcbc;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-modifier-hover: rgba(#000000, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #fff;
  --background-primary-alt: #ededed;
  --background-secondary: #f3f3f3;
  --background-secondary-alt: #fcfcfc;
  --blockquote-border-color: hsl(197, 95%, 67%);
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 233, 49, 71;
  --callout-color: 91, 206, 250;
  --callout-default: 91, 206, 250;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 91, 206, 250;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 8px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 91, 206, 250;
  --callout-warning: 236, 117, 0;
  --canvas-background: #fff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #c7c7c7;
  --caret-color: #5a5a5a;
  --checkbox-border-color: #707070;
  --checkbox-border-color-hover: #ababab;
  --checkbox-color: hsl(197, 95%, 67%);
  --checkbox-color-hover: hsl(
        258 88% 71%
    );
  --checkbox-marker-color: #fff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #ababab;
  --clickable-icon-radius: 4px;
  --code-background: #ededed;
  --code-border-color: #c7c7c7;
  --code-bracket-background: rgba(#000000, 0.067);
  --code-comment: #707070;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #f5a9b8;
  --code-normal: #5a5a5a;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #ababab;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #707070;
  --collapse-icon-color-collapsed: hsl(197, 95%, 67%);
  --color-accent: hsl(197, 95%, 67%);
  --color-accent-1: #f5a9b8;
  --color-accent-1-rgb: 245, 169, 184;
  --color-accent-2: hsl(
        258 88% 71%
    );
  --color-accent-hover: hsl(
        258 88% 71%
    );
  --color-accent-hsl: 197, 95%, 67%;
  --color-accent-rgb: 91, 206, 250;
  --color-base-00: #fff;
  --color-base-10: #ededed;
  --color-base-20: #f3f3f3;
  --divider-color: #c7c7c7;
  --divider-color-hover: hsl(197, 95%, 67%);
  --divider-vertical-height: 100%;
  --dropdown-background: #fff;
  --dropdown-background-hover: #ededed;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #fff;
  --flair-color: #5a5a5a;
  --font-interface: '??', "Instrument", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: "Monaspace", monospace;
  --font-print: '??', '??', "Instrument", sans-serif, 'Arial';
  --font-text: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Instrument", sans-serif;
  --font-title: "Getai";
  --font-weight: 400;
  --glass-angle-dark: 125deg;
  --glass-angle-light: 120deg;
  --graph-line: rgb(from #000000 r g b / 0.15);
  --graph-node: #ababab;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(197, 95%, 67%);
  --graph-node-tag: hsl(197, 95%, 67%);
  --graph-node-unresolved: #707070;
  --graph-text: #5a5a5a;
  --h1-font: "Getai";
  --h1-size: clamp(2.5rem, 8vw - 2rem, 3rem);
  --h1-weight: 900;
  --h2-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h2-weight: 600;
  --h3-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h3-weight: 600;
  --h4-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h4-weight: 600;
  --h5-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-line-height: 1.65;
  --h5-weight: 600;
  --h6-font: '??', "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h6-line-height: 1.65;
  --heading-formatting: #707070;
  --heading-spacing: 2.5rem;
  --hr-color: #c7c7c7;
  --interactive-accent: hsl(197, 95%, 67%);
  --interactive-accent-hover: hsl(
        258 88% 71%
    );
  --interactive-accent-hsl: 197, 95%, 67%;
  --interactive-hover: #ededed;
  --interactive-normal: #fff;
  --link-color: #ababab;
  --link-color-hover: #5a5a5a;
  --link-external-color: hsl(197, 95%, 67%);
  --link-external-color-hover: hsl(
        258 88% 71%
    );
  --link-unresolved-color: #ababab;
  --link-unresolved-decoration-color: transparent;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #f3f3f3;
  --menu-border-color: #bcbcbc;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 3px 5px rgba(0, 0, 0, 0.04);
  --pdf-background: #fff;
  --pdf-page-background: #fff;
  --pdf-sidebar-background: #fff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(197, 95%, 67%);
  --scrollbar-bg: rgb(from #000000 r g b / 0.1);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(#000000, 0.1);
  --search-clear-button-color: #ababab;
  --search-icon-color: #ababab;
  --search-result-background: #fff;
  --setting-group-heading-color: #5a5a5a;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #ededed;
  --setting-items-border-color: #c7c7c7;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #ababab;
  --shiki-code-background: #ededed;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #707070;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #f5a9b8;
  --shiki-code-normal: #ababab;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #ababab;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #c7c7c7;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #707070;
  --shiki-gutter-text-color-highlight: #ababab;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #ababab;
  --shiki-highlight-neutral-background: rgba(#000000, .05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #707070;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #fff;
  --swatch-shadow: inset 0 0 0 1px rgba(#000000, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #5bcefa;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #f5a9b8;
  --tab-background-active: #fff;
  --tab-divider-color: #bcbcbc;
  --tab-font-size: 13px;
  --tab-outline-color: #c7c7c7;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f3f3f3;
  --tab-switcher-menubar-background: linear-gradient(to top, #f3f3f3, transparent);
  --tab-switcher-preview-radius: 24px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(#000000, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(197, 95%, 67%);
  --tab-text-color: #707070;
  --tab-text-color-active: #ababab;
  --tab-text-color-focused: #ababab;
  --tab-text-color-focused-active: #ababab;
  --tab-text-color-focused-active-current: #5a5a5a;
  --tab-text-color-focused-highlighted: hsl(197, 95%, 67%);
  --table-add-button-border-color: #c7c7c7;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(91, 206, 250) 25%, #fff 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(197, 95%, 67%);
  --table-drag-handle-color: #707070;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #c7c7c7;
  --table-header-border-width: 1px;
  --table-header-color: #5a5a5a;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(197, 95%, 67%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(197, 95%, 67%);
  --table-text-size: 16px;
  --tag-background: hsla(197, 95%, 67%, 0.1);
  --tag-background-hover: hsla(197, 95%, 67%, 0.2);
  --tag-border-color: hsla(197, 95%, 67%, 0.15);
  --tag-border-color-hover: hsla(197, 95%, 67%, 0.15);
  --tag-color: hsl(197, 95%, 67%);
  --tag-color-hover: hsl(197, 95%, 67%);
  --tag-size: 0.875em;
  --text-accent: hsl(197, 95%, 67%);
  --text-accent-hover: hsl(
        258 88% 71%
    );
  --text-error: #e93147;
  --text-faint: #707070;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #ababab;
  --text-normal: #5a5a5a;
  --text-on-button: #5a5a5a;
  --text-selection: #c7c7c7;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --ulu-radius: 8px;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(91, 206, 250, 0.3) 50%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(91, 206, 250);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(91, 206, 250);
  border-left-width: 0px;
  border-right-color: rgb(91, 206, 250);
  border-right-width: 0px;
  border-top-color: rgb(91, 206, 250);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgba(var(--callout-color), 1);
  content: "";
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: var(--callout-title-size, 16px);
  font-weight: 600;
  letter-spacing: 0.16px;
  line-height: var(--line-height-tight, 20.8px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  background: rgba(0, 191, 188, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 91, 206, 250;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(91, 206, 250);
  border-right-color: rgb(91, 206, 250);
  border-top-color: rgb(91, 206, 250);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(91, 206, 250));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: var(--text-normal, rgb(90, 90, 90));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  background: rgba(233, 49, 71, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 91, 206, 250;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(91, 206, 250);
  border-right-color: rgb(91, 206, 250);
  border-top-color: rgb(91, 206, 250);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(91, 206, 250));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: var(--text-normal, rgb(90, 90, 90));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  background: rgba(233, 49, 71, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 91, 206, 250;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(91, 206, 250);
  border-right-color: rgb(91, 206, 250);
  border-top-color: rgb(91, 206, 250);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(91, 206, 250));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: var(--text-normal, rgb(90, 90, 90));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  background: rgba(120, 82, 238, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 91, 206, 250;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(91, 206, 250);
  border-right-color: rgb(91, 206, 250);
  border-top-color: rgb(91, 206, 250);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(91, 206, 250));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: var(--text-normal, rgb(90, 90, 90));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  background: rgba(233, 49, 71, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 91, 206, 250;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(91, 206, 250);
  border-right-color: rgb(91, 206, 250);
  border-top-color: rgb(91, 206, 250);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(91, 206, 250));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: var(--text-normal, rgb(90, 90, 90));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 91, 206, 250);
  background: rgba(91, 206, 250, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 91, 206, 250;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(91, 206, 250);
  border-right-color: rgb(91, 206, 250);
  border-top-color: rgb(91, 206, 250);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(91, 206, 250));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: var(--text-normal, rgb(90, 90, 90));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 91, 206, 250);
  background: rgba(91, 206, 250, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 91, 206, 250;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(91, 206, 250);
  border-right-color: rgb(91, 206, 250);
  border-top-color: rgb(91, 206, 250);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(91, 206, 250));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: var(--text-normal, rgb(90, 90, 90));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  background: rgba(236, 117, 0, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 91, 206, 250;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(91, 206, 250);
  border-right-color: rgb(91, 206, 250);
  border-top-color: rgb(91, 206, 250);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(91, 206, 250));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: var(--text-normal, rgb(90, 90, 90));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(158, 158, 158, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 91, 206, 250;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(91, 206, 250);
  border-right-color: rgb(91, 206, 250);
  border-top-color: rgb(91, 206, 250);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(91, 206, 250));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: var(--text-normal, rgb(90, 90, 90));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  background: rgba(8, 185, 78, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 91, 206, 250;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(91, 206, 250);
  border-right-color: rgb(91, 206, 250);
  border-top-color: rgb(91, 206, 250);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(91, 206, 250));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: var(--text-normal, rgb(90, 90, 90));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  background: rgba(0, 191, 188, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 91, 206, 250;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(91, 206, 250);
  border-right-color: rgb(91, 206, 250);
  border-top-color: rgb(91, 206, 250);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(91, 206, 250));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: var(--text-normal, rgb(90, 90, 90));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 91, 206, 250);
  background: rgba(91, 206, 250, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 91, 206, 250;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(91, 206, 250);
  border-right-color: rgb(91, 206, 250);
  border-top-color: rgb(91, 206, 250);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(91, 206, 250));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: var(--text-normal, rgb(90, 90, 90));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  background: rgba(236, 117, 0, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 91, 206, 250;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(91, 206, 250);
  border-right-color: rgb(91, 206, 250);
  border-top-color: rgb(91, 206, 250);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(91, 206, 250));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: var(--text-normal, rgb(90, 90, 90));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
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
  background-color: rgb(from var(--color-base-0) r g b/0.3);
  border-bottom-color: color(srgb 0 0 0 / 0.1);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left-color: color(srgb 0 0 0 / 0.1);
  border-right-color: color(srgb 0 0 0 / 0.1);
  border-top-color: color(srgb 0 0 0 / 0.1);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  color: var(--text-normal, rgb(90, 90, 90));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  box-shadow: var(--shadow-l, rgba(149, 157, 165, 0.2) 0px 8px 24px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(90, 90, 90);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--interactive-hover, rgb(237, 237, 237));
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(from var(--color-base-0) r g b/0.3);
  border-bottom-color: rgb(199, 199, 199);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(199, 199, 199);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(199, 199, 199);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(199, 199, 199);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: inset 0 2px 4px rgb(from var(--mono-rgb-0) r g b/0.1);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--interactive-hover, rgb(237, 237, 237));
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--interactive-hover, rgb(237, 237, 237));
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: color(srgb 0.3565 0.80585 0.9835 / 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.3565 0.80585 0.9835 / 0.4);
  border-left-width: 1px;
  border-right-color: color(srgb 0.3565 0.80585 0.9835 / 0.4);
  border-right-width: 1px;
  border-top-color: color(srgb 0.3565 0.80585 0.9835 / 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 600);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: var(--color-base-100, rgb(34, 34, 34));
}

html[saved-theme="light"] body h1 {
  color: var(--ulu-h1-text-color, var(--h1-color, var(--color-base-100)));
  font-family: var(--h1-font, Getai);
}

html[saved-theme="light"] body h1.article-title {
  font-size: var(--inline-title-size, 48px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="light"] body h2 {
  color: var(--ulu-h2-text-color, var(--h2-color, var(--color-accent)));
  font-family: var(--h2-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  font-family: var(--inline-title-font, Getai);
}

html[saved-theme="light"] body h3 {
  color: var(--ulu-h3-text-color, var(--h3-color, var(--color-base-100)));
  font-family: var(--h3-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h4 {
  color: var(--ulu-h4-text-color, var(--h4-color, var(--color-base-100)));
  font-family: var(--h4-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h5 {
  color: var(--ulu-h5-text-color, var(--h5-color, var(--color-base-100)));
  font-family: var(--h5-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h6 {
  color: var(--ulu-h6-text-color, var(--h6-color, var(--color-base-100)));
  font-family: var(--h6-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 91, 206, 250);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(227, 227, 227);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(171, 171, 171));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(171, 171, 171));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(90, 90, 90);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--text-muted, rgb(171, 171, 171));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-right-radius: 8px;
  color: var(--status-bar-text-color, rgb(171, 171, 171));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: var(--text-normal, rgb(90, 90, 90));
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(90, 90, 90);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(171, 171, 171));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 171, 171);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(171, 171, 171);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(171, 171, 171));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--text-muted, rgb(171, 171, 171));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(171, 171, 171);
  stroke: rgb(171, 171, 171);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(112, 112, 112));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(90, 90, 90));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgba(var(--canvas-card-base), 0.05);
  border-color: rgb(90, 90, 90);
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(171, 171, 171);
  color: var(--text-muted, rgb(171, 171, 171));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
  color: var(--text-muted, rgb(171, 171, 171));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 16px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
  border-radius: 16px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(171, 171, 171) rgb(171, 171, 171) rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-radius: 8px;
  color: var(--text-normal, rgb(90, 90, 90));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body div#quartz-root {
  color: var(--text-normal, rgb(90, 90, 90));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(90, 90, 90);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(90, 90, 90));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(from var(--color-base-0) r g b/0.3);
  border-bottom-color: rgb(171, 171, 171);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  color: var(--text-normal, rgb(171, 171, 171));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-left: 28px;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, color(srgb 0.3565 0.80585 0.9835 / 0.7));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--text-on-accent, rgb(255, 255, 255));
  font-family: var(--font-monospace, Monaspace, monospace);
  font-size: var(--code-size, 12px);
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body sub {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body summary {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body sup {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(from var(--color-accent) r g b/0.05);
  border-bottom-color: color(srgb 0.3565 0.80585 0.9835 / 0.3);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.3565 0.80585 0.9835 / 0.3);
  border-left-width: 1px;
  border-right-color: color(srgb 0.3565 0.80585 0.9835 / 0.3);
  border-right-width: 1px;
  border-top-color: color(srgb 0.3565 0.80585 0.9835 / 0.3);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--color-accent, rgb(91, 205, 251));
}`,
  },
  classSettings: {
    "ulu-origami": {
      general: `.ulu-origami .mod-vertical .workspace-tab-container {
padding: 0px !important;
}

.ulu-origami .workspace-leaf:not(.is-mobile) {
box-shadow: none !important;
border-radius: 0 !important;
}

.ulu-origami .workspace-split.mod-vertical .workspace-tab-header-container {
background: var(--background-primary) !important;
}

.ulu-origami .view-header {
border-bottom: 0 !important;
}

.ulu-origami .markdown-rendered.show-indentation-guide li > ul::before, .ulu-origami .markdown-source-view.mod-cm6 .cm-indent::before {
border-right: var(--indentation-guide-width) dashed var(--indentation-guide-color);
}`,
    },
    "ulu-we3": {
      general: `.ulu-we3-callout .callout[data-callout="abstract"], .ulu-we3-callout .callout[data-callout="warning"], .ulu-we3-callout .callout[data-callout="info"], .ulu-we3-callout .callout[data-callout="example"], .ulu-we3-callout .callout[data-callout="note"], .ulu-we3-callout .callout[data-callout="tip"], .ulu-we3-callout .callout[data-callout="success"], .ulu-we3-callout .callout[data-callout="question"], .ulu-we3-callout .callout[data-callout="failure"], .ulu-we3-callout .callout[data-callout="danger"], .ulu-we3-callout .callout[data-callout="bug"], .ulu-we3-callout .callout[data-callout="quote"] {
color: var(--color-callout-text);
}

.ulu-we3-callout .callout-title-inner {
font-weight: var(--bold-weight);
text-shadow: 0px 0px 18px rgba(var(--callout-color),0.5);
color: var(--callout-title-color);
}

.ulu-we3-callout .callout {
border-radius: 8px;
transition: 700ms;
}

.ulu-we3-callout .callout[data-callout="abstract"], .ulu-we3-callout .callout[data-callout="summary"], .ulu-we3-callout .callout[data-callout="tldr"] {
box-shadow:
    -12px 12px 69px -3px rgba(66, 4, 126, 0.1),
    12px -12px 69px -3px rgba(7, 244, 158, 0.05);
}

.ulu-we3-callout .callout[data-callout="danger"], .ulu-we3-callout .callout[data-callout="bug"] {
box-shadow:
    -12px 12px 69px -3px rgba(52, 7, 61, 0.1),
    12px -12px 69px -3px rgba(239, 116, 92, 0.1);
}

.ulu-we3-callout .callout[data-callout="info"], .ulu-we3-callout .callout[data-callout="todo"], .ulu-we3-callout .callout[data-callout="note"] {
box-shadow: 
    -12px 12px 69px -3px rgba(84,86,206,0.1), 
    0px 1px 69px -3px rgba(201,88,187,0.1), 
    12px -12px 69px -3px rgba(250,191,120,0.1);
}

.ulu-we3-callout .callout[data-callout="summary"], .ulu-we3-callout .callout[data-callout="example"] {
box-shadow: 
    -12px 12px 69px -3px rgba(34, 5, 45, 0.1),
    12px -12px 69px -3px rgba(239, 116, 92, 0.2);
}

.ulu-we3-callout .callout[data-callout="caution"], .ulu-we3-callout .callout[data-callout="warning"] {
box-shadow: 
    -12px 12px 69px -3px rgba(8, 32, 62, 0.1),
    12px -12px 69px -3px rgba(85, 124, 147, 0.1);
}

.ulu-we3-callout .callout[data-callout="tip"], .ulu-we3-callout .callout[data-callout="hint"] {
box-shadow: 
    -12px 12px 69px -3px rgba(94, 67, 93, 0.1),
    12px -12px 69px -3px rgba(164, 198, 184, 0.1);
}

.ulu-we3-callout .callout[data-callout="success"], .ulu-we3-callout .callout[data-callout="check"], .ulu-we3-callout .callout[data-callout="done"] {
box-shadow: 
    -12px 12px 69px -3px rgba(28, 62, 53, 0.1),
    12px -12px 69px -3px rgba(153, 242, 209, 0.1);
}

.ulu-we3-callout .callout[data-callout="question"], .ulu-we3-callout .callout[data-callout="help"], .ulu-we3-callout .callout[data-callout="faq"] {
box-shadow: 
    -12px 12px 69px -3px rgba(63, 63, 66, 0.1),
    12px -12px 69px -3px rgba(93, 93, 60, 0.1);
}

.ulu-we3-callout .callout[data-callout="failure"], .ulu-we3-callout .callout[data-callout="fail"], .ulu-we3-callout .callout[data-callout="missing"] {
box-shadow: 
    -12px 12px 69px -3px rgba(18, 36, 63, 0.1),
    12px -12px 69px -3px rgba(244, 152, 90, 0.1);
}

.ulu-we3-callout .callout[data-callout="error"] {
box-shadow: 
    -12px 12px 69px -3px rgba(31, 0, 33, 0.1),
    12px -12px 69px -3px rgba(117, 16, 6, 0.1);
}

.ulu-we3-callout .callout[data-callout="important"] {
box-shadow: 
    -12px 12px 69px -3px rgba(249, 188, 44, 0.1),
    12px -12px 69px -3px rgba(247, 76, 6, 0.1);
}

.ulu-we3-callout .callout[data-callout="quote"], .ulu-we3-callout .callout[data-callout="cite"] {
box-shadow: 
    -12px 12px 69px -3px rgba(96, 105, 107, 0.1),
    12px -12px 69px -3px rgba(133, 142, 150, 0.1);
}

.ulu-we3-callout .callout[data-callout="tldr"], .ulu-we3-callout .callout[data-callout="caution"], .ulu-we3-callout .callout[data-callout="todo"], .ulu-we3-callout .callout[data-callout="summary"], .ulu-we3-callout .callout[data-callout="hint"], .ulu-we3-callout .callout[data-callout="important"], .ulu-we3-callout .callout[data-callout="check"], .ulu-we3-callout .callout[data-callout="done"], .ulu-we3-callout .callout[data-callout="help"], .ulu-we3-callout .callout[data-callout="faq"], .ulu-we3-callout .callout[data-callout="fail"], .ulu-we3-callout .callout[data-callout="error"], .ulu-we3-callout .callout[data-callout="important"], .ulu-we3-callout .callout[data-callout="cite"], .ulu-we3-callout .callout[data-callout="abstract"], .ulu-we3-callout .callout[data-callout="warning"], .ulu-we3-callout .callout[data-callout="info"], .ulu-we3-callout .callout[data-callout="example"], .ulu-we3-callout .callout[data-callout="note"], .ulu-we3-callout .callout[data-callout="tip"], .ulu-we3-callout .callout[data-callout="success"], .ulu-we3-callout .callout[data-callout="question"], .ulu-we3-callout .callout[data-callout="failure"], .ulu-we3-callout .callout[data-callout="danger"], .ulu-we3-callout .callout[data-callout="bug"], .ulu-we3-callout .callout[data-callout="quote"] {
border: 1px solid var(--background-primary);
background: var(--background-primary);
}

.ulu-we3-callout .callout:hover {
border: 1px solid rgb(var(--callout-color));
}

.ulu-we3-callout .callout-icon .svg-icon, .ulu-we3-callout .callout-icon {
display: none;
}

.ulu-we3-callout .callout-title {
font-size: 2em;
padding: 0;
gap: 0;
}

.ulu-we3 .mod-vertical .workspace-tab-container {
padding: 0px !important;
}

.ulu-we3 .workspace-leaf:not(.is-mobile) {
box-shadow: none !important;
border-radius: 0 !important;
}

.ulu-we3 .workspace-split.mod-vertical .workspace-tab-header-container {
background: var(--background-primary) !important;
border-bottom: 1px solid var(--background-modifier-border) !important;
}

.ulu-we3 .workspace-ribbon.mod-left .sidebar-toggle-button {
border-right: var(--o-border);
border-bottom-right-radius: 8px;
border-bottom: var(--o-border);
}

.ulu-we3 .workspace-ribbon {
border-right: var(--o-border);
border-top: var(--o-border);
border-top-right-radius: 8px;
margin-top: 66px !important;
}

.ulu-we3 .mod-left-split .workspace-tab-header-container {
border-bottom: 0 !important;
}`,
      dark: `.ulu-we3-callout .theme-dark {
--color-callout-red: #502626;
--color-callout-blue: #263850;
--color-callout-green: #265029;
--color-callout-yellow: #4c5026;
--color-callout-orange: #504126;
--color-callout-teal: #264e50;
--color-callout-grey: #3b3b3b;
--color-callout-purple: #392650;
--color-callout-border-red: #715050;
--color-callout-border-blue: #516073;
--color-callout-border-green: #507153;
--color-callout-border-yellow: #6e7150;
--color-callout-border-orange: #716550;
--color-callout-border-teal: #507171;
--color-callout-border-grey: #616161;
--color-callout-border-purple: #472650;
--color-callout-text: var(--text-on-accent);
}`,
      light: `.ulu-we3-callout .theme-light {
--color-callout-red: #ffe0e0;
--color-callout-blue: #def1ff;
--color-callout-green: #e0ffe3;
--color-callout-yellow: #ffffe0;
--color-callout-orange: #fff2e0;
--color-callout-teal: #e0feff;
--color-callout-grey: #ededed;
--color-callout-purple: #ede0ff;
--color-callout-border-red: #e5c7c7;
--color-callout-border-blue: #c7d8e5;
--color-callout-border-green: #cce5c7;
--color-callout-border-yellow: #e3e5c7;
--color-callout-border-orange: #e5dbc7;
--color-callout-border-teal: #c7e5e5;
--color-callout-border-grey: #dbdbdb;
--color-callout-border-purple: #d8c7e5;
--color-callout-text: var(--text-normal);
}`,
    },
    "ulu-gummy": {
      general: `.ulu-gummy-canvas1.canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container, .ulu-gummy-canvas2.canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container, .ulu-gummy-canvas3.canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container, .ulu-gummy-canvas4.canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container, .ulu-gummy-canvas5.canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container, .ulu-gummy-canvas6.canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
border: none;
}

.ulu-gummy .workspace {
background: linear-gradient(135deg, hsla(var(--color-accent-hsl), 0.1) 1.62%, var(--background-primary) 50.72%);
}

.ulu-gummy-codeblock cm-s-obsidian .HyperMD-codeblock, .ulu-gummy-codeblock .cm-hmd-frontmatter {
font-weight: 400;
}

.ulu-gummy-codeblock .cm-s-obsidian span.cm-inline-code {
font-size: var(--code-size);
color: var(--code-normal);
vertical-align: baseline;
}

.ulu-gummy-codeblock .markdown-rendered pre {
border: 1px solid var(--color-accent);
border-radius: var(--radius-m);
box-shadow: -24px 24px 69px -3px hsla(var(--color-accent-hsl), 0.2),
        24px -24px 69px -3px hsla(calc(var(--accent-h) + 180), var(--accent-s), var(--accent-l), 0.13);
background: hsla(var(--color-accent-hsl), 0.1);
}

.ulu-gummy-codeblock .markdown-rendered code {
color: var(--color-accent);
}

.ulu-gummy-codeblock .markdown-source-view.mod-cm6 .cm-line.HyperMD-codeblock {
padding-left: var(--size-4-4);
color: var(--color-accent);
background: hsla(var(--color-accent-hsl), 0.1);
margin: 8px;
}

.ulu-gummy-codeblock .cm-s-obsidian div.HyperMD-codeblock-begin-bg {
background: var(--code-background);
border-top: 1px solid var(--color-accent);
/* stylelint-disable-next-line declaration-no-important */
border-top-right-radius: 8px !important;
/* stylelint-disable-next-line declaration-no-important */
border-top-left-radius: 8px !important;
margin-top: 8px;
}

.ulu-gummy-codeblock .cm-s-obsidian div.HyperMD-codeblock-end-bg {
background: var(--code-background);
border-bottom: 1px solid var(--color-accent);
border-bottom-right-radius: 8px;
border-bottom-left-radius: 8px;
}

.ulu-gummy-codeblock .cm-s-obsidian div.HyperMD-codeblock-bg {
border-right: 1px solid var(--color-accent);
border-left: 1px solid var(--color-accent);
}

.ulu-gummy-codeblock .markdown-rendered pre {
transition: all 0.5s cubic-bezier(0.25, 0.46, 0.46, 0.95);
}

.ulu-gummy-codeblock .markdown-rendered pre:hover {
transform: translateY(4px);
}

.ulu-gummy-callouts .callout {
/* background: rgba(var(--callout-color), 0.05); */
background: linear-gradient(135deg, rgba(var(--callout-color), 0.05), var(--background-primary));
position: relative;
/* border: 1px solid rgba(var(--callout-color), 0.1); */
border: 1px solid rgba(var(--callout-color), 0.4);
box-shadow: none;
border-radius: 12px;
}

.ulu-gummy-callouts .callout:hover {
border: 1px solid rgb(var(--callout-color));
}

.ulu-gummy-callouts .callout-title-inner {
font-weight: bold;
/* font-family: var(--font-title); */
font-variation-settings: 'WGHT'900;
font-size: 1.2em;
}

.ulu-gummy-callouts .markdown-source-view.mod-cm6 .cm-embed-block:hover {
box-shadow: var(--embed-block-shadow-hover);
border-radius: 12px;
overflow: hidden;
cursor: text;
}`,
      dark: `.ulu-gummy-canvas1.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(15deg 82% 54%) 0%,
            hsl(14deg 83% 54%) 11%,
            hsl(14deg 83% 53%) 22%,
            hsl(13deg 84% 53%) 33%,
            hsl(13deg 84% 53%) 44%,
            hsl(12deg 85% 53%) 56%,
            hsl(11deg 85% 53%) 67%,
            hsl(11deg 86% 52%) 78%,
            hsl(10deg 86% 52%) 89%,
            hsl(9deg 87% 52%) 100%);
}

.ulu-gummy-canvas2.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(29deg 82% 54%) 0%,
            hsl(28deg 83% 53%) 11%,
            hsl(28deg 83% 53%) 22%,
            hsl(27deg 84% 53%) 33%,
            hsl(26deg 84% 53%) 44%,
            hsl(25deg 85% 53%) 56%,
            hsl(25deg 85% 52%) 67%,
            hsl(24deg 86% 52%) 78%,
            hsl(23deg 86% 52%) 89%,
            hsl(22deg 87% 52%) 100%);
}

.ulu-gummy-canvas3.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(44deg 82% 54%) 0%,
            hsl(44deg 83% 54%) 11%,
            hsl(45deg 83% 53%) 22%,
            hsl(45deg 84% 53%) 33%,
            hsl(46deg 84% 53%) 44%,
            hsl(46deg 85% 53%) 56%,
            hsl(47deg 85% 53%) 67%,
            hsl(47deg 86% 53%) 78%,
            hsl(48deg 86% 52%) 89%,
            hsl(48deg 87% 52%) 100%);
}

.ulu-gummy-canvas4.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(98deg 32% 45%) 0%,
            hsl(101deg 31% 44%) 11%,
            hsl(104deg 30% 43%) 22%,
            hsl(108deg 29% 41%) 33%,
            hsl(112deg 28% 40%) 44%,
            hsl(116deg 27% 39%) 56%,
            hsl(120deg 26% 37%) 67%,
            hsl(124deg 27% 35%) 78%,
            hsl(128deg 28% 33%) 89%,
            hsl(132deg 29% 31%) 100%);
}

.ulu-gummy-canvas1.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content p, .ulu-gummy-canvas2.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content p, .ulu-gummy-canvas3.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content p, .ulu-gummy-canvas4.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content p, .ulu-gummy-canvas5.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content p, .ulu-gummy-canvas6.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content p {
color: white;
}

.ulu-gummy-canvas5.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(218deg 82% 54%) 0%,
            hsl(218deg 83% 53%) 11%,
            hsl(218deg 85% 52%) 22%,
            hsl(219deg 85% 51%) 33%,
            hsl(219deg 86% 51%) 44%,
            hsl(220deg 87% 50%) 56%,
            hsl(221deg 87% 50%) 67%,
            hsl(223deg 87% 51%) 78%,
            hsl(224deg 87% 51%) 89%,
            hsl(227deg 87% 52%) 100%);
}

.ulu-gummy-canvas6.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(308deg 33% 41%) 0%,
            hsl(308deg 35% 41%) 11%,
            hsl(308deg 37% 40%) 22%,
            hsl(308deg 40% 39%) 33%,
            hsl(308deg 42% 39%) 44%,
            hsl(308deg 45% 38%) 56%,
            hsl(308deg 47% 37%) 67%,
            hsl(308deg 51% 36%) 78%,
            hsl(308deg 54% 35%) 89%,
            hsl(308deg 58% 35%) 100%);
}`,
      light: `.ulu-gummy-canvas1.theme-light .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(0deg 87% 79%) 0%,
            hsl(360deg 87% 78%) 21%,
            hsl(360deg 87% 77%) 30%,
            hsl(359deg 87% 75%) 39%,
            hsl(359deg 87% 74%) 46%,
            hsl(359deg 87% 73%) 54%,
            hsl(359deg 86% 72%) 61%,
            hsl(358deg 86% 71%) 69%,
            hsl(358deg 86% 70%) 79%,
            hsl(358deg 85% 68%) 100%);
}

.ulu-gummy-canvas2.theme-light .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(16deg 100% 76%) 0%,
            hsl(20deg 100% 76%) 21%,
            hsl(23deg 100% 76%) 30%,
            hsl(27deg 100% 77%) 39%,
            hsl(30deg 100% 77%) 46%,
            hsl(34deg 100% 77%) 54%,
            hsl(37deg 100% 78%) 61%,
            hsl(41deg 100% 79%) 69%,
            hsl(45deg 100% 80%) 79%,
            hsl(49deg 100% 81%) 100%);
}

.ulu-gummy-canvas3.theme-light .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(60deg 89% 72%) 0%,
            hsl(59deg 91% 73%) 21%,
            hsl(57deg 92% 74%) 30%,
            hsl(56deg 94% 76%) 39%,
            hsl(55deg 96% 77%) 46%,
            hsl(53deg 97% 78%) 54%,
            hsl(52deg 98% 79%) 61%,
            hsl(51deg 99% 80%) 69%,
            hsl(50deg 100% 80%) 79%,
            hsl(49deg 100% 81%) 100%);
}

.ulu-gummy-canvas4.theme-light .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(99deg 75% 75%) 0%,
            hsl(103deg 75% 77%) 21%,
            hsl(108deg 75% 79%) 30%,
            hsl(113deg 76% 81%) 39%,
            hsl(119deg 76% 83%) 46%,
            hsl(124deg 77% 84%) 54%,
            hsl(129deg 79% 85%) 61%,
            hsl(133deg 80% 86%) 69%,
            hsl(137deg 81% 86%) 79%,
            hsl(141deg 81% 87%) 100%);
}

.ulu-gummy-canvas5.theme-light .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(187deg 100% 89%) 0%,
            hsl(187deg 100% 87%) 21%,
            hsl(187deg 100% 85%) 30%,
            hsl(187deg 100% 83%) 39%,
            hsl(187deg 100% 81%) 46%,
            hsl(187deg 100% 79%) 54%,
            hsl(187deg 100% 77%) 61%,
            hsl(186deg 100% 75%) 69%,
            hsl(186deg 100% 72%) 79%,
            hsl(186deg 100% 69%) 100%);
}

.ulu-gummy-canvas6.theme-light .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(298deg 68% 90%) 0%,
            hsl(287deg 68% 89%) 21%,
            hsl(277deg 68% 89%) 30%,
            hsl(267deg 67% 88%) 39%,
            hsl(258deg 65% 87%) 46%,
            hsl(249deg 63% 87%) 54%,
            hsl(240deg 61% 86%) 61%,
            hsl(232deg 62% 83%) 69%,
            hsl(225deg 62% 81%) 79%,
            hsl(220deg 61% 79%) 100%);
}`,
    },
    "ulu-red": {
      dark: `.ulu-red-d.theme-dark {
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
--color-base-10: #231a1a;
/* background-primary-alt */
--color-base-20: #110e0e;
/* background-secondary */
--color-base-25: #2A2A2A;
/* idk lol */
--color-base-30: #4e3434;
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
--gradient-bg-primary: linear-gradient(135deg, #221B1B 1.62%, #171212 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #191515 1.62%, #110e0e 50.72%) !important;
--background-modifier-border-alt: #4e3434 !important;
}

.ulu-red {
--color-accent: hsl(var(--color-red-hsl));
--color-accent-rgb: var(--color-red-rgb);
--color-accent-hsl: var(--color-red-hsl);
--color-accent-1: var(--color-blue);
--color-accent-1-rgb: var(--color-blue-rgb);
--pill-border: 
;
}

.ulu-accent-bg-d.ulu-red {
--color-base-00: #050404;
--color-base-20: #130F0F;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #050404 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #130F0F 90.72%) !important;
}

.ulu-accent-bg-lowcon-d.ulu-red {
--color-base-00: #130F0F;
--color-base-20: #130F0F;
--gradient-bg-primary: linear-gradient(135deg, #130F0F 20.62%, #130F0F 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #130F0F 20.62%, #130F0F 90.72%) !important;
}`,
      light: `.ulu-red-l.theme-light {
--accent-h: 13;
--accent-s: 68%;
--accent-l: 63%;
--color-red: #EA5E41;
--color-red-hsl: 10.3, 80.1%, 58.6%;
--color-red-rgb: 234, 94, 65;
--color-green: #A9D37E;
--color-green-hsl: 89.6, 49.1%, 66.1%;
--color-green-rgb: 169, 211, 126;
--color-orange: #ED874C;
--color-orange-hsl: 22, 81.7%, 61.4%;
--color-orange-rgb: 237, 135, 76;
--color-yellow: #E9BA4A;
--color-yellow-hsl: 42.3, 78.3%, 60.2%;
--color-yellow-rgb: 233, 186, 74;
--color-cyan: #5AB7ED;
--color-cyan-hsl: 202, 80.3%, 64.1%;
--color-cyan-rgb: 90, 183, 237;
--color-blue: #339AF0;
--color-blue-hsl: 207.3, 86.3%, 57.1%;
--color-blue-rgb: 122, 184, 225;
--color-purple: #7865E6;
--color-purple-hsl: 248.8, 72.1%, 64.9%;
--color-purple-rgb: 120, 101, 230;
--color-pink: #F6B7D8;
--color-pink-hsl: 328.6, 77.8%, 84.1%;
--color-base-00: #dacdcd;
/* background-primary */
--color-base-05: #fefefe;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #b18a8a;
/* background-primary-alt */
--color-base-20: #cebdbd;
/* background-secondary */
--color-base-25: #b18a8a;
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
--gradient-bg-primary: linear-gradient(135deg, #E5DCDC 1.62%, #dacdcd 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #DACDCD 1.62%, #cebdbd 50.72%) !important;
--background-modifier-border-alt: #F7DEDE !important;
}

.ulu-red {
--color-accent: hsl(var(--color-red-hsl));
--color-accent-rgb: var(--color-red-rgb);
--color-accent-hsl: var(--color-red-hsl);
--color-accent-1: var(--color-blue);
--color-accent-1-rgb: var(--color-blue-rgb);
}

.ulu-accent-bg-l.ulu-red {
--color-base-00: #FDFBFB;
--color-base-20: #F5F2F2;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #FDFBFB 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #F5F2F2 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-accent-bg-lowcon-l.ulu-red {
--color-base-00: #F5F2F2;
--color-base-20: #F5F2F2;
--gradient-bg-primary: linear-gradient(135deg, #F5F2F2 20.62%, #F5F2F2 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F5F2F2 20.62%, #F5F2F2 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}`,
    },
    "ulu-green": {
      dark: `.ulu-green-d.theme-dark {
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
--color-base-10: #1A231F;
/* background-primary-alt */
--color-base-20: #0E1110;
/* background-secondary */
--color-base-25: #2A2A2A;
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
--gradient-bg-primary: linear-gradient(135deg, #1D2522 1.62%, #121715 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #151918 1.62%, #0E1110 50.72%) !important;
--background-modifier-border-alt: #344E41 !important;
}

.ulu-green {
--color-accent: hsl(var(--color-green-hsl));
--color-accent-rgb: var(--color-green-rgb);
--color-accent-hsl: var(--color-green-hsl);
--color-accent-1: var(--color-purple);
--color-accent-1-rgb: var(--color-purple-rgb);
}

.ulu-accent-bg-d.ulu-green {
--color-base-00: #050505;
--color-base-20: #101110;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #050505 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #101110 90.72%) !important;
}

.ulu-accent-bg-lowcon-d.ulu-green {
--color-base-00: #101110;
--color-base-20: #101110;
--gradient-bg-primary: linear-gradient(135deg, #101110 20.62%, #101110 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #101110 20.62%, #101110 90.72%) !important;
}`,
      light: `.ulu-green-l.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
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
--canvas-color: 10, 10, 10;
--color-base-00: #dad7cd;
/* background-primary */
--color-base-05: #FEFEFE;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #A3B18A;
/* background-primary-alt */
--color-base-20: #CDCEBD;
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
--gradient-bg-primary: linear-gradient(135deg, #E5E3DC 1.62%, #dad7cd 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #D9DACD 1.62%, #CDCEBD 50.72%) !important;
--background-modifier-border-alt: #a3b18a !important;
}

.ulu-green {
--color-accent: hsl(var(--color-green-hsl));
--color-accent-rgb: var(--color-green-rgb);
--color-accent-hsl: var(--color-green-hsl);
--color-accent-1: var(--color-purple);
--color-accent-1-rgb: var(--color-purple-rgb);
}

.ulu-accent-bg-l.ulu-green {
--color-base-00: #FCFCFC;
--color-base-20: #F0F5F0;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #FCFCFC 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #F0F5F0 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-accent-bg-lowcon-l.ulu-green {
--color-base-00: #F0F5F0;
--color-base-20: #F0F5F0;
--gradient-bg-primary: linear-gradient(135deg, #F0F5F0 20.62%, #F0F5F0 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F0F5F0 20.62%, #F0F5F0 90.72%) !important;
}`,
    },
    "ulu-orange": {
      dark: `.ulu-orange {
--color-accent: hsl(var(--color-orange-hsl));
--color-accent-rgb: var(--color-orange-rgb);
--color-accent-hsl: var(--color-orange-hsl);
--color-accent-1: var(--color-yellow);
--color-accent-1-rgb: var(--color-yellow-rgb);
}

.ulu-accent-bg-d.ulu-orange {
--color-base-00: #050404;
--color-base-20: #110F0D;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #050404 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #110F0D 90.72%) !important;
}

.ulu-accent-bg-lowcon-d.ulu-orange {
--color-base-00: #110F0D;
--color-base-20: #110F0D;
--gradient-bg-primary: linear-gradient(135deg, #110F0D 20.62%, #110F0D 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #110F0D 20.62%, #110F0D 90.72%) !important;
}`,
      light: `.ulu-orange {
--color-accent: hsl(var(--color-orange-hsl));
--color-accent-rgb: var(--color-orange-rgb);
--color-accent-hsl: var(--color-orange-hsl);
--color-accent-1: var(--color-yellow);
--color-accent-1-rgb: var(--color-yellow-rgb);
}

.ulu-accent-bg-l.ulu-orange {
--color-base-00: #FCFCFA;
--color-base-20: #F6F3ED;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #FCFCFA 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #F6F3ED 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-accent-bg-lowcon-l.ulu-orange {
--color-base-00: #F6F3ED;
--color-base-20: #F6F3ED;
--gradient-bg-primary: linear-gradient(135deg, #F6F3ED 20.62%, #F6F3ED 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F6F3ED 20.62%, #F6F3ED 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}`,
    },
    "ulu-yellow": {
      dark: `.ulu-yellow {
--color-accent: hsl(var(--color-yellow-hsl));
--color-accent-rgb: var(--color-yellow-rgb);
--color-accent-hsl: var(--color-yellow-hsl);
--color-accent-1: var(--color-red);
--color-accent-1-rgb: var(--color-red-rgb);
}

.ulu-accent-bg-d.ulu-yellow {
--color-base-00: #050404;
--color-base-20: #13110F;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #050404 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #13110F 90.72%) !important;
}

.ulu-accent-bg-lowcon-d.ulu-yellow {
--color-base-00: #13110F;
--color-base-20: #13110F;
--gradient-bg-primary: linear-gradient(135deg, #13110F 20.62%, #13110F 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #13110F 20.62%, #13110F 90.72%) !important;
}`,
      light: `.ulu-yellow {
--color-accent: hsl(var(--color-yellow-hsl));
--color-accent-rgb: var(--color-yellow-rgb);
--color-accent-hsl: var(--color-yellow-hsl);
--color-accent-1: var(--color-red);
--color-accent-1-rgb: var(--color-red-rgb);
}

.ulu-accent-bg-l.ulu-yellow {
--color-base-00: #FCFCF8;
--color-base-20: #F5F4E6;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #FCFCF8 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #F5F4E6 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-accent-bg-lowcon-l.ulu-yellow {
--color-base-00: #F5F4E6;
--color-base-20: #F5F4E6;
--gradient-bg-primary: linear-gradient(135deg, #F5F4E6 20.62%, #F5F4E6 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F5F4E6 20.62%, #F5F4E6 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}`,
    },
    "ulu-cyan": {
      dark: `.ulu-cyan {
--color-accent: hsl(var(--color-cyan-hsl));
--color-accent-rgb: var(--color-cyan-rgb);
--color-accent-hsl: var(--color-cyan-hsl);
--color-accent-1: var(--color-green);
--color-accent-1-rgb: var(--color-green-rgb);
}

.ulu-accent-bg-d.ulu-cyan {
--color-base-00: #060606;
--color-base-20: #0F1111;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #060606 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #0F1111 90.72%) !important;
}

.ulu-accent-bg-lowcon-d.ulu-cyan {
--color-base-00: #0F1111;
--color-base-20: #0F1111;
--gradient-bg-primary: linear-gradient(135deg, #0F1111 20.62%, #0F1111 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #0F1111 20.62%, #0F1111 90.72%) !important;
}`,
      light: `.ulu-cyan {
--color-accent: hsl(var(--color-cyan-hsl));
--color-accent-rgb: var(--color-cyan-rgb);
--color-accent-hsl: var(--color-cyan-hsl);
--color-accent-1: var(--color-green);
--color-accent-1-rgb: var(--color-green-rgb);
}

.ulu-accent-bg-l.ulu-cyan {
--color-base-00: #F9FCFC;
--color-base-20: #ECF6F6;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #F9FCFC 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #ECF6F6 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-accent-bg-lowcon-l.ulu-cyan {
--color-base-00: #ECF6F6;
--color-base-20: #ECF6F6;
--gradient-bg-primary: linear-gradient(135deg, #ECF6F6 20.62%, #ECF6F6 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #ECF6F6 20.62%, #ECF6F6 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}`,
    },
    "ulu-blue": {
      dark: `.ulu-blue-d.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-base-00: #121517;
/* background-primary */
--color-base-10: #1a1d23;
/* background-primary-alt */
--color-base-20: #0e1011;
/* background-secondary */
--color-base-25: #2a2a2a;
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
--gradient-bg-primary: linear-gradient(135deg, #17242C 1.62%, #121517 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #0B1114 1.62%, #0e1011 50.72%) !important;
--background-modifier-border-alt: #34464e !important;
}

.ulu-blueprint-d.theme-dark {
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
--color-blue-rgb: 31, 43, 56;
--color-blue: #0C0293;
--color-blue-hsl: 211, 29%, 17%;
--color-purple-rgb: 77, 65, 89;
--color-purple-hsl: 270, 16%, 30%;
--color-purple: #93388F;
--color-pink-rgb: 125, 76, 74;
--color-pink: #F68187;
--color-pink-hsl: 2, 26%, 39%;
--canvas-color: 245, 245, 245;
--color-base-00: #0069AA;
/* background-primary */
--color-base-10: #03193F;
/* background-primary-alt */
--color-base-20: #00396D;
/* background-secondary */
--color-base-25: #040303;
/* idk lol */
--color-base-30: #fff;
/* background-modifier-border */
--color-base-35: #fff;
/* background-modifier-border-hover */
--color-base-40: #fff;
/* background-modifier-border-focus */
--color-base-50: #92A1B9;
/* text-faint */
--color-base-60: #92A1B9;
/* also no clue */
--color-base-70: #C7CFDD;
/* text-muted */
--color-base-100: #FFF;
/* text-normal */
--gradient-bg-primary: linear-gradient(135deg, #0074BD 1.62%, #0069AA 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #003F7A 1.62%, #00396D 50.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-blue {
--color-accent: hsl(var(--color-blue-hsl));
--color-accent-rgb: var(--color-blue-rgb);
--color-accent-hsl: var(--color-blue-hsl);
--color-accent-1: var(--color-pink);
--color-accent-1-rgb: var(--color-pink-rgb);
}

.ulu-accent-bg-d.ulu-blue {
--color-base-00: #040508;
--color-base-20: #0C0F18;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #040508 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #0C0F18 90.72%) !important;
}

.ulu-cono-accent-bg-d.ulu-blue {
--color-base-00: #0C0F18;
--color-base-20: #0C0F18;
--gradient-bg-primary: linear-gradient(135deg, #0C0F18 20.62%, #0C0F18 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #0C0F18 20.62%, #0C0F18 90.72%) !important;
}`,
      light: `.ulu-blue-l.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--canvas-color: 10, 10, 10;
--color-base-00: #B7CDDC;
/* background-primary */
--color-base-05: #fefefe;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #C0D8E8;
/* background-primary-alt */
--color-base-20: #B3C6D6;
/* background-secondary */
--color-base-25: #C7D5E1;
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
--gradient-bg-primary: linear-gradient(135deg, #C0D8E8 1.62%, #B7CDDC 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #C7D5E1 1.62%, #B3C6D6 50.72%) !important;
--background-modifier-border-alt: #A6D6F2 !important;
}

.ulu-blue {
--color-accent: hsl(var(--color-blue-hsl));
--color-accent-rgb: var(--color-blue-rgb);
--color-accent-hsl: var(--color-blue-hsl);
--color-accent-1: var(--color-pink);
--color-accent-1-rgb: var(--color-pink-rgb);
}

.ulu-accent-bg-l.ulu-blue {
--color-base-00: #FBFCFC;
--color-base-20: #F1F5F5;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #FBFCFC 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #F1F5F5 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-accent-bg-lowcon-l.ulu-blue {
--color-base-00: #F1F5F5;
--color-base-20: #F1F5F5;
--gradient-bg-primary: linear-gradient(135deg, #F1F5F5 20.62%, #F1F5F5 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F1F5F5 20.62%, #F1F5F5 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}`,
    },
    "ulu-purple": {
      dark: `.ulu-purple-d.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-base-00: #141217;
/* background-primary */
--color-base-10: #211a23;
/* background-primary-alt */
--color-base-20: #100e11;
/* background-secondary */
--color-base-25: #2A2A2A;
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
--gradient-bg-primary: linear-gradient(135deg, #201D25 1.62%, #141217 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #221E24 1.62%, #100e11 50.72%) !important;
--background-modifier-border-alt: #44344e !important;
}

.ulu-purple {
--color-accent: hsl(var(--color-purple-hsl));
--color-accent-rgb: var(--color-purple-rgb);
--color-accent-hsl: var(--color-purple-hsl);
--color-accent-1: var(--color-cyan);
--color-accent-1-rgb: var(--color-cyan-rgb);
}

.ulu-accent-bg-d.ulu-purple {
--color-base-00: #050505;
--color-base-20: #111112;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #050505 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #111112 90.72%) !important;
}

.ulu-accent-bg-lowcon-d.ulu-purple {
--color-base-00: #111112;
--color-base-20: #111112;
--gradient-bg-primary: linear-gradient(135deg, #111112 20.62%, #111112 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #111112 20.62%, #111112 90.72%) !important;
}`,
      light: `.ulu-purple-l.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-base-00: #dacdda;
/* background-primary */
--color-base-05: #fefefe;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #b18aae;
/* background-primary-alt */
--color-base-20: #cebdce;
/* background-secondary */
--color-base-25: #b18aaf;
/* idk lol */
--color-base-30: #b18aae;
/* background-modifier-border */
--color-base-35: #5a3a50;
/* background-modifier-border-hover */
--color-base-40: var(--color-base-30);
/* background-modifier-border-focus */
--color-base-50: #5a3a4f;
/* text-faint */
--color-base-60: #4e3448;
/* also no clue */
--color-base-70: #231a21;
/* text-muted */
--color-base-100: #0b090a;
/* text-normal */
--gradient-bg-primary: linear-gradient(135deg, #E0D3E0 1.62%, #dacdda 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #DACDDA 1.62%, #cebdce 50.72%) !important;
--background-modifier-border-alt: #b18aae !important;
}

.ulu-purple {
--color-accent: hsl(var(--color-purple-hsl));
--color-accent-rgb: var(--color-purple-rgb);
--color-accent-hsl: var(--color-purple-hsl);
--color-accent-1: var(--color-cyan);
--color-accent-1-rgb: var(--color-cyan-rgb);
}

.ulu-accent-bg-l.ulu-purple {
--color-base-00: #FCFCFB;
--color-base-20: #F5F3F2;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #FCFCFB 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #F5F3F2 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-accent-bg-lowcon-l.ulu-purple {
--color-base-00: #F5F3F2;
--color-base-20: #F5F3F2;
--gradient-bg-primary: linear-gradient(135deg, #F5F3F2 20.62%, #F5F3F2 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F5F3F2 20.62%, #F5F3F2 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}`,
    },
    "ulu-pink": {
      dark: `.ulu-pink {
--color-accent: hsl(var(--color-pink-hsl));
--color-accent-rgb: var(--color-pink-rgb);
--color-accent-hsl: var(--color-pink-hsl);
--color-accent-1: var(--color-orange);
--color-accent-1-rgb: var(--color-orange-rgb);
}

.ulu-accent-bg-d.ulu-pink {
--color-base-00: #060505;
--color-base-20: #130E0F;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #060505 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #130E0F 90.72%) !important;
}

.ul.ulu-con-accent-bg-d.ulu-pink {
--color-base-00: #130E0F;
--color-base-20: #130E0F;
--gradient-bg-primary: linear-gradient(135deg, #130E0F 20.62%, #130E0F 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #130E0F 20.62%, #130E0F 90.72%) !important;
}`,
      light: `.ulu-pink {
--color-accent: hsl(var(--color-pink-hsl));
--color-accent-rgb: var(--color-pink-rgb);
--color-accent-hsl: var(--color-pink-hsl);
--color-accent-1: var(--color-orange);
--color-accent-1-rgb: var(--color-orange-rgb);
}

.ulu-accent-bg-l.ulu-pink {
--color-base-00: #FCFCFB;
--color-base-20: #F5F3F1;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #FCFCFB 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #F5F3F1 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-accent-bg-lowcon-l.ulu-pink {
--color-base-00: #F5F3F1;
--color-base-20: #F5F3F1;
--gradient-bg-primary: linear-gradient(135deg, #F5F3F1 20.62%, #F5F3F1 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F5F3F1 20.62%, #F5F3F1 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}`,
    },
    "ulu-con-l": {
      light: `.theme-light {
--color-base-00: #F3F3F3;
--color-base-20: #F3F3F3;
--gradient-bg-primary: linear-gradient(135deg, #F3F3F3 20.62%, #F3F3F3 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F3F3F3 20.62%, #F3F3F3 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}`,
    },
    "ulu-super-con-l": {
      light: `.theme-light {
--color-base-00: #FFF;
--color-base-20: #FFF;
--gradient-bg-primary: linear-gradient(135deg, #FFF 20.62%, #FFF 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #FFF 20.62%, #FFF 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}`,
    },
    "ulu-accent-bg-l": {
      dark: `.ulu-accent-bg-lowcon-d.ulu-red {
--color-base-00: #130F0F;
--color-base-20: #130F0F;
--gradient-bg-primary: linear-gradient(135deg, #130F0F 20.62%, #130F0F 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #130F0F 20.62%, #130F0F 90.72%) !important;
}

.ulu-accent-bg-lowcon-d.ulu-green {
--color-base-00: #101110;
--color-base-20: #101110;
--gradient-bg-primary: linear-gradient(135deg, #101110 20.62%, #101110 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #101110 20.62%, #101110 90.72%) !important;
}

.ulu-accent-bg-lowcon-d.ulu-orange {
--color-base-00: #110F0D;
--color-base-20: #110F0D;
--gradient-bg-primary: linear-gradient(135deg, #110F0D 20.62%, #110F0D 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #110F0D 20.62%, #110F0D 90.72%) !important;
}

.ulu-accent-bg-lowcon-d.ulu-yellow {
--color-base-00: #13110F;
--color-base-20: #13110F;
--gradient-bg-primary: linear-gradient(135deg, #13110F 20.62%, #13110F 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #13110F 20.62%, #13110F 90.72%) !important;
}

.ulu-accent-bg-lowcon-d.ulu-cyan {
--color-base-00: #0F1111;
--color-base-20: #0F1111;
--gradient-bg-primary: linear-gradient(135deg, #0F1111 20.62%, #0F1111 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #0F1111 20.62%, #0F1111 90.72%) !important;
}

.ulu-accent-bg-lowcon-d.ulu-purple {
--color-base-00: #111112;
--color-base-20: #111112;
--gradient-bg-primary: linear-gradient(135deg, #111112 20.62%, #111112 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #111112 20.62%, #111112 90.72%) !important;
}`,
      light: `.ulu-red {
--color-base-00: #FDFBFB;
--color-base-20: #F5F2F2;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #FDFBFB 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #F5F2F2 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-green {
--color-base-00: #FCFCFC;
--color-base-20: #F0F5F0;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #FCFCFC 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #F0F5F0 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-orange {
--color-base-00: #FCFCFA;
--color-base-20: #F6F3ED;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #FCFCFA 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #F6F3ED 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-yellow {
--color-base-00: #FCFCF8;
--color-base-20: #F5F4E6;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #FCFCF8 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #F5F4E6 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-cyan {
--color-base-00: #F9FCFC;
--color-base-20: #ECF6F6;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #F9FCFC 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #ECF6F6 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-blue {
--color-base-00: #FBFCFC;
--color-base-20: #F1F5F5;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #FBFCFC 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #F1F5F5 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-purple {
--color-base-00: #FCFCFB;
--color-base-20: #F5F3F2;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #FCFCFB 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #F5F3F2 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-pink {
--color-base-00: #FCFCFB;
--color-base-20: #F5F3F1;
--gradient-bg-primary: linear-gradient(135deg, #fff 20.62%, #FCFCFB 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F8F6F6 20.62%, #F5F3F1 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-accent-bg-lowcon-l.ulu-red {
--color-base-00: #F5F2F2;
--color-base-20: #F5F2F2;
--gradient-bg-primary: linear-gradient(135deg, #F5F2F2 20.62%, #F5F2F2 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F5F2F2 20.62%, #F5F2F2 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-accent-bg-lowcon-l.ulu-green {
--color-base-00: #F0F5F0;
--color-base-20: #F0F5F0;
--gradient-bg-primary: linear-gradient(135deg, #F0F5F0 20.62%, #F0F5F0 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F0F5F0 20.62%, #F0F5F0 90.72%) !important;
}

.ulu-accent-bg-lowcon-l.ulu-orange {
--color-base-00: #F6F3ED;
--color-base-20: #F6F3ED;
--gradient-bg-primary: linear-gradient(135deg, #F6F3ED 20.62%, #F6F3ED 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F6F3ED 20.62%, #F6F3ED 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-accent-bg-lowcon-l.ulu-yellow {
--color-base-00: #F5F4E6;
--color-base-20: #F5F4E6;
--gradient-bg-primary: linear-gradient(135deg, #F5F4E6 20.62%, #F5F4E6 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F5F4E6 20.62%, #F5F4E6 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-accent-bg-lowcon-l.ulu-cyan {
--color-base-00: #ECF6F6;
--color-base-20: #ECF6F6;
--gradient-bg-primary: linear-gradient(135deg, #ECF6F6 20.62%, #ECF6F6 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #ECF6F6 20.62%, #ECF6F6 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-accent-bg-lowcon-l.ulu-blue {
--color-base-00: #F1F5F5;
--color-base-20: #F1F5F5;
--gradient-bg-primary: linear-gradient(135deg, #F1F5F5 20.62%, #F1F5F5 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F1F5F5 20.62%, #F1F5F5 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-accent-bg-lowcon-l.ulu-purple {
--color-base-00: #F5F3F2;
--color-base-20: #F5F3F2;
--gradient-bg-primary: linear-gradient(135deg, #F5F3F2 20.62%, #F5F3F2 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F5F3F2 20.62%, #F5F3F2 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-accent-bg-lowcon-l.ulu-pink {
--color-base-00: #F5F3F1;
--color-base-20: #F5F3F1;
--gradient-bg-primary: linear-gradient(135deg, #F5F3F1 20.62%, #F5F3F1 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F5F3F1 20.62%, #F5F3F1 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}`,
    },
    "ulu-accent-bg-lowcon-l": {
      light: `.ulu-red {
--color-base-00: #F5F2F2;
--color-base-20: #F5F2F2;
--gradient-bg-primary: linear-gradient(135deg, #F5F2F2 20.62%, #F5F2F2 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F5F2F2 20.62%, #F5F2F2 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-green {
--color-base-00: #F0F5F0;
--color-base-20: #F0F5F0;
--gradient-bg-primary: linear-gradient(135deg, #F0F5F0 20.62%, #F0F5F0 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F0F5F0 20.62%, #F0F5F0 90.72%) !important;
}

.ulu-orange {
--color-base-00: #F6F3ED;
--color-base-20: #F6F3ED;
--gradient-bg-primary: linear-gradient(135deg, #F6F3ED 20.62%, #F6F3ED 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F6F3ED 20.62%, #F6F3ED 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-yellow {
--color-base-00: #F5F4E6;
--color-base-20: #F5F4E6;
--gradient-bg-primary: linear-gradient(135deg, #F5F4E6 20.62%, #F5F4E6 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F5F4E6 20.62%, #F5F4E6 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-cyan {
--color-base-00: #ECF6F6;
--color-base-20: #ECF6F6;
--gradient-bg-primary: linear-gradient(135deg, #ECF6F6 20.62%, #ECF6F6 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #ECF6F6 20.62%, #ECF6F6 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-blue {
--color-base-00: #F1F5F5;
--color-base-20: #F1F5F5;
--gradient-bg-primary: linear-gradient(135deg, #F1F5F5 20.62%, #F1F5F5 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F1F5F5 20.62%, #F1F5F5 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-purple {
--color-base-00: #F5F3F2;
--color-base-20: #F5F3F2;
--gradient-bg-primary: linear-gradient(135deg, #F5F3F2 20.62%, #F5F3F2 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F5F3F2 20.62%, #F5F3F2 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}

.ulu-pink {
--color-base-00: #F5F3F1;
--color-base-20: #F5F3F1;
--gradient-bg-primary: linear-gradient(135deg, #F5F3F1 20.62%, #F5F3F1 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F5F3F1 20.62%, #F5F3F1 90.72%) !important;
--background-modifier-border-alt: #fff !important;
}`,
    },
    "ulu-red-l": {
      light: `.theme-light {
--accent-h: 13;
--accent-s: 68%;
--accent-l: 63%;
--color-red: #EA5E41;
--color-red-hsl: 10.3, 80.1%, 58.6%;
--color-red-rgb: 234, 94, 65;
--color-green: #A9D37E;
--color-green-hsl: 89.6, 49.1%, 66.1%;
--color-green-rgb: 169, 211, 126;
--color-orange: #ED874C;
--color-orange-hsl: 22, 81.7%, 61.4%;
--color-orange-rgb: 237, 135, 76;
--color-yellow: #E9BA4A;
--color-yellow-hsl: 42.3, 78.3%, 60.2%;
--color-yellow-rgb: 233, 186, 74;
--color-cyan: #5AB7ED;
--color-cyan-hsl: 202, 80.3%, 64.1%;
--color-cyan-rgb: 90, 183, 237;
--color-blue: #339AF0;
--color-blue-hsl: 207.3, 86.3%, 57.1%;
--color-blue-rgb: 122, 184, 225;
--color-purple: #7865E6;
--color-purple-hsl: 248.8, 72.1%, 64.9%;
--color-purple-rgb: 120, 101, 230;
--color-pink: #F6B7D8;
--color-pink-hsl: 328.6, 77.8%, 84.1%;
--color-base-00: #dacdcd;
/* background-primary */
--color-base-05: #fefefe;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #b18a8a;
/* background-primary-alt */
--color-base-20: #cebdbd;
/* background-secondary */
--color-base-25: #b18a8a;
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
--gradient-bg-primary: linear-gradient(135deg, #E5DCDC 1.62%, #dacdcd 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #DACDCD 1.62%, #cebdbd 50.72%) !important;
--background-modifier-border-alt: #F7DEDE !important;
}`,
    },
    "ulu-green-l": {
      light: `.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
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
--canvas-color: 10, 10, 10;
--color-base-00: #dad7cd;
/* background-primary */
--color-base-05: #FEFEFE;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #A3B18A;
/* background-primary-alt */
--color-base-20: #CDCEBD;
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
--gradient-bg-primary: linear-gradient(135deg, #E5E3DC 1.62%, #dad7cd 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #D9DACD 1.62%, #CDCEBD 50.72%) !important;
--background-modifier-border-alt: #a3b18a !important;
}`,
    },
    "ulu-blue-l": {
      light: `.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--canvas-color: 10, 10, 10;
--color-base-00: #B7CDDC;
/* background-primary */
--color-base-05: #fefefe;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #C0D8E8;
/* background-primary-alt */
--color-base-20: #B3C6D6;
/* background-secondary */
--color-base-25: #C7D5E1;
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
--gradient-bg-primary: linear-gradient(135deg, #C0D8E8 1.62%, #B7CDDC 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #C7D5E1 1.62%, #B3C6D6 50.72%) !important;
--background-modifier-border-alt: #A6D6F2 !important;
}`,
    },
    "ulu-purple-l": {
      light: `.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-base-00: #dacdda;
/* background-primary */
--color-base-05: #fefefe;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #b18aae;
/* background-primary-alt */
--color-base-20: #cebdce;
/* background-secondary */
--color-base-25: #b18aaf;
/* idk lol */
--color-base-30: #b18aae;
/* background-modifier-border */
--color-base-35: #5a3a50;
/* background-modifier-border-hover */
--color-base-40: var(--color-base-30);
/* background-modifier-border-focus */
--color-base-50: #5a3a4f;
/* text-faint */
--color-base-60: #4e3448;
/* also no clue */
--color-base-70: #231a21;
/* text-muted */
--color-base-100: #0b090a;
/* text-normal */
--gradient-bg-primary: linear-gradient(135deg, #E0D3E0 1.62%, #dacdda 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #DACDDA 1.62%, #cebdce 50.72%) !important;
--background-modifier-border-alt: #b18aae !important;
}`,
    },
    "ulu-soft-l": {
      light: `.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
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
--canvas-color: 10, 10, 10;
--color-base-00: #F6F2EE;
/* background-primary */
--color-base-05: #FEFEFE;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #FEFEFE;
/* background-primary-alt */
--color-base-20: #E1D4C6;
/* background-secondary */
--color-base-25: #FEFEFE;
/* idk lol */
--color-base-30: #C6B19C;
/* background-modifier-border */
--color-base-35: #A39180;
/* background-modifier-border-hover */
--color-base-40: var(--color-base-30);
/* background-modifier-border-focus */
--color-base-50: #817466;
/* text-faint */
--color-base-60: #A39180;
/* also no clue */
--color-base-70: #62574D;
/* text-muted */
--color-base-100: #433C34;
/* text-normal */
--gradient-bg-primary: linear-gradient(135deg, #FAF7F5 1.62%, #F6F2EE 50.72%);
--gradient-bg-secondary: linear-gradient(135deg, #E6DCD0 1.62%, #E1D4C6 50.72%);
--gradient-bg-tertiary: linear-gradient(135deg, #E4F1F7 30.62%, #D0E6F1 90.72%);
--background-modifier-border-alt: #fff;
}`,
    },
    "ulu-light-l": {
      light: `.theme-light {
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
--color-base-00: #FCF8E8;
/* background-primary */
--color-base-05: #FEFEFE;
/* background-secondary-alt in light mode, for some reason */
--color-base-10: #FEFEFE;
/* background-primary-alt */
--color-base-20: #F1EDDE;
/* background-secondary */
--color-base-25: #FEFEFE;
/* idk lol */
--color-base-30: #DAD6CA;
/* background-modifier-border */
--color-base-35: #A39180;
/* background-modifier-border-hover */
--color-base-40: var(--color-base-30);
/* background-modifier-border-focus */
--color-base-50: #817466;
/* text-faint */
--color-base-60: #B9B6AA;
/* also no clue */
--color-base-70: #3E3D39;
/* text-muted */
--color-base-100: #433C34;
/* text-normal */
--gradient-bg-primary: linear-gradient(135deg, #FEFEFE 1.62%, #FDFBF1 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F6F3EA 1.62%, #F1EDDE 50.72%) !important;
--background-modifier-border-alt: #fff !important;
}`,
    },
    "ulu-shark-l": {
      light: `.theme-light {
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
--color-yellow-rgb: 252, 220, 55;
--color-yellow: #FCDC37;
--color-yellow-hsl: 50, 97%, 60%;
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
--color-base-00: #fefefe;
/* background-primary */
--color-base-05: #FCFCFC;
/* background-secondary-alt in light mode */
--color-base-10: #FAFAFA;
/* background-primary-alt */
--color-base-20: #f4e5f8;
/* background-secondary */
--color-base-25: #E3E3E3;
/* idk lol */
--color-base-30: #ffffff;
/* background-modifier-border */
--color-base-35: #3f3a45;
/* background-modifier-border-hover */
--color-base-40: #3f3a45;
/* background-modifier-border-focus */
--color-base-50: #47414E;
/* text-faint */
--color-base-60: #38333d;
/* also no clue */
--color-base-70: #38333d;
/* text-muted */
--color-base-100: #252228;
/* text-normal */
--gradient-bg-primary: linear-gradient(135deg, #fff 1.62%, #F5F5F5 50.72%);
--gradient-bg-secondary: linear-gradient(135deg, #F9EFFB 1.62%, #F3E4F7 50.72%) !important;
--gradient-bg-tertiary: linear-gradient(135deg, #E4F1F7 30.62%, #D0E6F1 90.72%);
--background-modifier-border-alt: #fff;
/* --color-accent: #70B4F9 !important;
	--color-accent-rgb: 112, 180, 249 !important;
	--color-accent-hsl: 210, 92%, 71% !important;
	--h1-color: #70B4F9;
	--h2-color: #e5989b; */
}

.ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container {
display: var(--metadata-display-editing);
border: 1px solid var(--background-modifier-border-alt);
background: var(--gradient-bg-tertiary);
margin-bottom: 3em;
border-radius: 8px;
padding: 8px;
}`,
    },
    "ulu-solar-lt": {
      light: `.ulu-solar-lt {
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
--color-base-00: #FDF6E3;
--color-base-05: #FFFAEE;
--color-base-10: #FFFAEB;
--color-base-20: #EEE8D5;
--color-base-25: #B7B6B2;
--color-base-30: #B7B6B2;
--color-base-35: #EEE8D5;
--color-base-40: #B7B6B2;
--color-base-50: #93A1A1;
--color-base-60: #586E75;
--color-base-70: #657B83;
--color-base-100: #586E75;
--gradient-bg-primary: linear-gradient(135deg, #FEFAF1 1.62%, #FDF6E3 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F0EBDB 1.62%, #EEE8D5 50.72%) !important;
--background-modifier-border-alt: #E2E1DF !important;
}`,
    },
    "ulu-gruvbox-lt": {
      light: `.ulu-gruvbox-lt {
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
--color-base-05: #F9F5D7;
--color-base-10: #F2E5BC;
--color-base-20: #EBDBB2;
--color-base-25: #D5C4A1;
--color-base-30: #BDAE93;
--color-base-35: #A89984;
--color-base-40: #7C6F64;
--color-base-50: #665C54;
--color-base-60: #504945;
--color-base-70: #3C3836;
--color-base-100: #282828;
--gradient-bg-primary: linear-gradient(135deg, #FDF6DE 1.62%, #FBF1C7 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F2E8CE 1.62%, #EBDBB2 50.72%) !important;
--background-modifier-border-alt: #FCF9ED !important;
}`,
    },
    "ulu-obplus-lt": {
      light: `.ulu-obplus-lt {
color-scheme: light;
--accent-h: 13;
--accent-s: 68%;
--accent-l: 63%;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-red: #e76f51;
--color-red-hsl: 12, 76%, 61%;
--color-red-rgb: 231, 111, 81;
--color-green: #2a9d8f;
--color-green-hsl: 173, 58%, 39%;
--color-green-rgb: 42, 157, 143;
--color-orange: #f4a261;
--color-orange-hsl: 27, 87%, 67%;
--color-orange-rgb: 244, 162, 97;
--color-yellow: #e9c46a;
--color-yellow-hsl: 43, 74%, 66%;
--color-yellow-rgb: 233, 196, 106;
--color-cyan: #83c5be;
--color-cyan-hsl: 174, 36%, 64%;
--color-cyan-rgb: 131, 197, 190;
--color-blue: #219ebc;
--color-blue-hsl: 192, 70%, 43%;
--color-blue-rgb: 33, 158, 188;
--color-purple: #9f86c0;
--color-purple-hsl: 266, 32%, 64%;
--color-purple-rgb: 159, 134, 192;
--color-pink: #f0a6ca;
--color-pink-hsl: 331, 71%, 80%;
--color-pink-rgb: 240, 166, 202;
--color-base-00: #F8F9FA;
--color-base-05: #F4F1DE;
--color-base-10: #E9ECEF;
--color-base-20: #F1F3F5;
--color-base-25: #E9ECEF;
--color-base-30: #DEE2E6;
--color-base-35: #CED4DA;
--color-base-40: #B3B8BD;
--color-base-50: #666778;
--color-base-60: #495057;
--color-base-70: #343A40;
--color-base-100: #212529;
--gradient-bg-primary: linear-gradient(135deg, #FFFFFF 1.62%, #F8F9FA 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #F6F7F9 1.62%, #F1F3F5 50.72%) !important;
--background-modifier-border-alt: #fff !important;
}`,
    },
    "ulu-con-d": {
      dark: `.theme-dark {
--color-base-00: #171717;
--color-base-20: #171717;
--gradient-bg-primary: linear-gradient(135deg, #171717 20.62%, #171717 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #171717 20.62%, #171717 90.72%) !important;
}`,
    },
    "ulu-super-con-d": {
      dark: `.theme-dark {
--color-base-00: #000;
--color-base-20: #000;
--gradient-bg-primary: linear-gradient(135deg, #000 20.62%, #000 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #000 20.62%, #000 90.72%) !important;
}`,
    },
    "ulu-accent-bg-d": {
      dark: `.ulu-red {
--color-base-00: #050404;
--color-base-20: #130F0F;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #050404 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #130F0F 90.72%) !important;
}

.ulu-green {
--color-base-00: #050505;
--color-base-20: #101110;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #050505 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #101110 90.72%) !important;
}

.ulu-orange {
--color-base-00: #050404;
--color-base-20: #110F0D;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #050404 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #110F0D 90.72%) !important;
}

.ulu-yellow {
--color-base-00: #050404;
--color-base-20: #13110F;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #050404 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #13110F 90.72%) !important;
}

.ulu-cyan {
--color-base-00: #060606;
--color-base-20: #0F1111;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #060606 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #0F1111 90.72%) !important;
}

.ulu-blue {
--color-base-00: #040508;
--color-base-20: #0C0F18;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #040508 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #0C0F18 90.72%) !important;
}

.ulu-purple {
--color-base-00: #050505;
--color-base-20: #111112;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #050505 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #111112 90.72%) !important;
}

.ulu-pink {
--color-base-00: #060505;
--color-base-20: #130E0F;
--gradient-bg-primary: linear-gradient(135deg, #262626 20.62%, #060505 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #2B2B2B 20.62%, #130E0F 90.72%) !important;
}`,
    },
    "ulu-accent-bg-lowcon-d": {
      dark: `.ulu-red {
--color-base-00: #130F0F;
--color-base-20: #130F0F;
--gradient-bg-primary: linear-gradient(135deg, #130F0F 20.62%, #130F0F 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #130F0F 20.62%, #130F0F 90.72%) !important;
}

.ulu-green {
--color-base-00: #101110;
--color-base-20: #101110;
--gradient-bg-primary: linear-gradient(135deg, #101110 20.62%, #101110 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #101110 20.62%, #101110 90.72%) !important;
}

.ulu-orange {
--color-base-00: #110F0D;
--color-base-20: #110F0D;
--gradient-bg-primary: linear-gradient(135deg, #110F0D 20.62%, #110F0D 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #110F0D 20.62%, #110F0D 90.72%) !important;
}

.ulu-yellow {
--color-base-00: #13110F;
--color-base-20: #13110F;
--gradient-bg-primary: linear-gradient(135deg, #13110F 20.62%, #13110F 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #13110F 20.62%, #13110F 90.72%) !important;
}

.ulu-cyan {
--color-base-00: #0F1111;
--color-base-20: #0F1111;
--gradient-bg-primary: linear-gradient(135deg, #0F1111 20.62%, #0F1111 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #0F1111 20.62%, #0F1111 90.72%) !important;
}

.ulu-purple {
--color-base-00: #111112;
--color-base-20: #111112;
--gradient-bg-primary: linear-gradient(135deg, #111112 20.62%, #111112 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #111112 20.62%, #111112 90.72%) !important;
}`,
    },
    "ulu-red-d": {
      dark: `.theme-dark {
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
--color-base-10: #231a1a;
/* background-primary-alt */
--color-base-20: #110e0e;
/* background-secondary */
--color-base-25: #2A2A2A;
/* idk lol */
--color-base-30: #4e3434;
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
--gradient-bg-primary: linear-gradient(135deg, #221B1B 1.62%, #171212 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #191515 1.62%, #110e0e 50.72%) !important;
--background-modifier-border-alt: #4e3434 !important;
}`,
    },
    "ulu-green-d": {
      dark: `.theme-dark {
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
--color-base-10: #1A231F;
/* background-primary-alt */
--color-base-20: #0E1110;
/* background-secondary */
--color-base-25: #2A2A2A;
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
--gradient-bg-primary: linear-gradient(135deg, #1D2522 1.62%, #121715 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #151918 1.62%, #0E1110 50.72%) !important;
--background-modifier-border-alt: #344E41 !important;
}`,
    },
    "ulu-blue-d": {
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-base-00: #121517;
/* background-primary */
--color-base-10: #1a1d23;
/* background-primary-alt */
--color-base-20: #0e1011;
/* background-secondary */
--color-base-25: #2a2a2a;
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
--gradient-bg-primary: linear-gradient(135deg, #17242C 1.62%, #121517 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #0B1114 1.62%, #0e1011 50.72%) !important;
--background-modifier-border-alt: #34464e !important;
}`,
    },
    "ulu-purple-d": {
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-base-00: #141217;
/* background-primary */
--color-base-10: #211a23;
/* background-primary-alt */
--color-base-20: #100e11;
/* background-secondary */
--color-base-25: #2A2A2A;
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
--gradient-bg-primary: linear-gradient(135deg, #201D25 1.62%, #141217 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #221E24 1.62%, #100e11 50.72%) !important;
--background-modifier-border-alt: #44344e !important;
}`,
    },
    "ulu-soft-d": {
      dark: `.theme-dark {
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
--color-base-00: #33302E;
/* background-primary */
--color-base-10: #242424;
/* background-primary-alt */
--color-base-20: #393633;
/* background-secondary */
--color-base-25: #2A2A2A;
/* idk lol */
--color-base-30: #4C4843;
/* background-modifier-border */
--color-base-35: #635E58;
/* background-modifier-border-hover */
--color-base-40: #4C4843;
/* background-modifier-border-focus */
--color-base-50: #7F7871;
/* text-faint */
--color-base-60: #9F968D;
/* also no clue */
--color-base-70: #C6BBB1;
/* text-muted */
--color-base-100: #ECE8E5;
/* text-normal */
--gradient-bg-primary: linear-gradient(135deg, #3B3835 1.62%, #33302E 50.72%);
--gradient-bg-secondary: linear-gradient(135deg, #413D3A 1.62%, #393633 50.72%);
--background-modifier-border-alt: #54504A;
}`,
    },
    "ulu-control-d": {
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 242, 73, 73;
--color-red: #F24949;
--color-red-hsl: 0, 87%, 62%;
--color-orange-rgb: 255, 138, 0;
--color-orange: #FF8A00;
--color-orange-hsl: 32, 100%, 50%;
--color-yellow-rgb: 230, 230, 103;
--color-yellow: #E6E667;
--color-yellow-hsl: 60, 72%, 65%;
--color-green-rgb: 47, 222, 115;
--color-green: #2FDE73;
--color-green-hsl: 143, 73%, 53%;
--color-cyan-rgb: 80, 182, 255;
--color-cyan: #50B6FF;
--color-cyan-hsl: 205, 100%, 66%;
--color-blue-rgb: 98, 119, 205;
--color-blue: #6277CD;
--color-blue-hsl: 228, 52%, 59%;
--color-purple-rgb: 137, 102, 222;
--color-purple-hsl: 258, 65%, 64%;
--color-purple: #8966DE;
--color-pink-rgb: 215, 75, 177;
--color-pink: #D74BB1;
--color-pink-hsl: 316, 64%, 57%;
--canvas-color: 245, 245, 245;
--color-base-00: #262A30;
/* background-primary */
--color-base-10: #1B1B1B;
/* background-primary-alt */
--color-base-20: #363C44;
/* background-secondary */
--color-base-25: #040303;
/* idk lol */
--color-base-30: #1E2126;
/* background-modifier-border */
--color-base-35: #3D3D3D;
/* background-modifier-border-hover */
--color-base-40: #5D5D5D;
/* background-modifier-border-focus */
--color-base-50: #9097A0;
/* text-faint */
--color-base-60: #6277CD;
/* also no clue */
--color-base-70: #D3D1EB;
/* text-muted */
--color-base-100: #FFF;
/* text-normal */
--color-accent: hsl(50 100% 55%) !important;
--color-accent-hsl: 50, 100%, 55% !important;
--color-accent-rgb: 255, 217, 25 !important;
--text-on-accent: var(--color-base-00);
--gradient-bg-primary: linear-gradient(135deg, #2F343C 1.62%, #262A30 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #262A31 1.62%, #1E2126 50.72%) !important;
--background-modifier-border-alt: #353841 !important;
}`,
    },
    "ulu-blueprint-d": {
      dark: `.theme-dark {
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
--color-blue-rgb: 31, 43, 56;
--color-blue: #0C0293;
--color-blue-hsl: 211, 29%, 17%;
--color-purple-rgb: 77, 65, 89;
--color-purple-hsl: 270, 16%, 30%;
--color-purple: #93388F;
--color-pink-rgb: 125, 76, 74;
--color-pink: #F68187;
--color-pink-hsl: 2, 26%, 39%;
--canvas-color: 245, 245, 245;
--color-base-00: #0069AA;
/* background-primary */
--color-base-10: #03193F;
/* background-primary-alt */
--color-base-20: #00396D;
/* background-secondary */
--color-base-25: #040303;
/* idk lol */
--color-base-30: #fff;
/* background-modifier-border */
--color-base-35: #fff;
/* background-modifier-border-hover */
--color-base-40: #fff;
/* background-modifier-border-focus */
--color-base-50: #92A1B9;
/* text-faint */
--color-base-60: #92A1B9;
/* also no clue */
--color-base-70: #C7CFDD;
/* text-muted */
--color-base-100: #FFF;
/* text-normal */
--gradient-bg-primary: linear-gradient(135deg, #0074BD 1.62%, #0069AA 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #003F7A 1.62%, #00396D 50.72%) !important;
--background-modifier-border-alt: #fff !important;
}`,
    },
    "ulu-shark-d": {
      general: `.workspace-split.mod-vertical > * > .ulu-shark-d .workspace-leaf-resize-handle {
border: 0 !important;
}`,
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 247, 69, 69;
--color-red: #F74545;
--color-red-hsl: 0, 92%, 62%;
--color-orange-rgb: 247, 138, 69;
--color-orange: #F78A45;
--color-orange-hsl: 23, 92%, 62%;
--color-yellow-rgb: 247, 204, 68;
--color-yellow: #F7CC44;
--color-yellow-hsl: 46, 92%, 62%;
--color-green-rgb: 69, 247, 123;
--color-green: #45F77B;
--color-green-hsl: 138, 92%, 62%;
--color-cyan-rgb: 69, 206, 247;
--color-cyan: #45CEF7;
--color-cyan-hsl: 194, 92%, 62%;
--color-blue-rgb: 90, 100, 248;
--color-blue: #5a64f8;
--color-blue-hsl: 236, 92%, 66%;
--color-purple-rgb: 170, 69, 247;
--color-purple-hsl: 274, 92%, 62%;
--color-purple: #AA45F7;
--color-pink-rgb: 247, 69, 191;
--color-pink: #F745BF;
--color-pink-hsl: 319, 92%, 62%;
--canvas-color: 246, 129, 135;
--color-base-00: #38333d;
--color-base-10: #47414E;
--color-base-20: #252228;
--color-base-25: #332F37;
--color-base-30: #3f3a45;
--color-base-35: #8e718e;
--color-base-40: #8e718e;
--color-base-50: #d8ccd8;
--color-base-60: #d3c9d3;
--color-base-70: #d3c9d3;
--color-base-100: #fefefe;
--gradient-bg-primary: linear-gradient(135deg, #38333d 1.62%, #332E38 50.72%);
--gradient-bg-secondary: linear-gradient(135deg, #332F37 1.62%, #252228 50.72%) !important;
--gradient-bg-tertiary: linear-gradient(135deg, #8e718e 30.62%, #836383 90.72%);
--background-modifier-border-alt: #9c7b9c;
/* --accent-h: 194 !important;
    --accent-s: 92% !important;
    --accent-l: 62% !important;
	--color-accent-hsl: var(--accent-h),
	var(--accent-s),
	var(--accent-l);
	--color-accent: #45CEF7 !important;
    --color-accent-rgb: 69, 81, 247 !important;
    --h1-color: #45CEF7;
    --h2-color: #F745BF; */
}

.theme-dark .mod-root .workspace-tabs .workspace-leaf:not(.is-mobile), .theme-dark .modal:not(.is-mobile) {
border: 1px solid #3f3a45 !important;
}

.ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container {
display: var(--metadata-display-editing);
border: 1px solid var(--background-modifier-border-alt);
background: var(--gradient-bg-tertiary);
margin-bottom: 3em;
border-radius: 8px;
padding: 8px;
}`,
    },
    "ulu-solar-dt": {
      dark: `.ulu-solar-dt {
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
--color-base-10: #08404E;
--color-base-20: #002B36;
--color-base-25: #023845;
--color-base-30: #586E75;
--color-base-35: #637C84;
--color-base-40: #002B36;
--color-base-50: #586E75;
--color-base-60: #93A1A1;
--color-base-70: #839496;
--color-base-100: #93A1A1;
--gradient-bg-primary: linear-gradient(135deg, #08404E 1.62%, #073642 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #003947 1.62%, #002B36 50.72%) !important;
--background-modifier-border-alt: #375662 !important;
}`,
    },
    "ulu-gruvbox-dt": {
      dark: `.ulu-gruvbox-dt {
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
--color-base-10: #1D2021;
--color-base-20: #32302F;
--color-base-25: #3C3836;
--color-base-30: #504945;
--color-base-35: #665C54;
--color-base-40: #7C6F64;
--color-base-50: #BDAE93;
--color-base-60: #D5C4A1;
--color-base-70: #EBDBB2;
--color-base-100: #FBF1C7;
--gradient-bg-primary: linear-gradient(135deg, #313131 1.62%, #282828 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #3C3A39 1.62%, #32302F 50.72%) !important;
--background-modifier-border-alt: #504945 !important;
}`,
    },
    "ulu-obplus-dt": {
      dark: `.ulu-obplus-dt {
color-scheme: dark;
--accent-h: 75;
--accent-s: 21%;
--accent-l: 57%;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red: #D26861;
--color-red-hsl: 3.7, 55.7%, 60.2%;
--color-red-rgb: 210, 104, 97;
--color-green: #5D9463;
--color-green-hsl: 126.5, 22.8%, 47.3%;
--color-green-rgb: 93, 148, 99;
--color-orange: #A9805A;
--color-orange-hsl: 28.9, 31.5%, 50.8%;
--color-orange-rgb: 169, 128, 90;
--color-yellow: #93885C;
--color-yellow-hsl: 48, 23%, 46.9%;
--color-yellow-rgb: 147, 136, 92;
--color-cyan: #6E8D91;
--color-cyan-hsl: 186.9, 13.7%, 50%;
--color-cyan-rgb: 110, 141, 145;
--color-blue: #588CBF;
--color-blue-hsl: 209.7, 44.6%, 54.7%;
--color-blue-rgb: 88, 140, 191;
--color-purple: #8D80B5;
--color-purple-hsl: 254.7, 26.4%, 60.6%;
--color-purple-rgb: 141, 128, 181;
--color-pink: #A67D8A;
--color-pink-hsl: 341, 18.7%, 57.1%;
--color-pink-rgb: 166, 125, 138;
--color-base-00: #050505;
/* background-primary */
--color-base-10: #1F1F1F;
/* background-primary-alt */
--color-base-20: #000000;
/* background-secondary */
--color-base-25: #1F1F1F;
/* idk lol */
--color-base-30: #1F1F1F;
/* background-modifier-border */
--color-base-35: #383838;
/* background-modifier-border-hover */
--color-base-40: #1F1F1F;
/* background-modifier-border-focus */
--color-base-50: #808080;
/* text-faint */
--color-base-60: #5F5F5F;
/* also no clue */
--color-base-70: #bdbdbd;
/* text-muted */
--color-base-100: #C6C6C6;
/* text-normal */
--gradient-bg-primary: linear-gradient(135deg, #121212 1.62%, #050505 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #0F0F0F 1.62%, #000000 50.72%) !important;
--background-modifier-border-alt: #1F1F1F !important;
}`,
    },
    "ulu-dracula-dt": {
      dark: `.ulu-dracula-dt {
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
--color-base-10: #44475A;
--color-base-20: #1A1E24;
--color-base-25: #282A36;
--color-base-30: #44475A;
--color-base-35: #4F5269;
--color-base-40: #282A36;
--color-base-50: #6272A4;
--color-base-60: #6272A4;
--color-base-70: #F8F8F2;
--color-base-100: #FEFEFA;
--gradient-bg-primary: linear-gradient(135deg, #2E303E 1.62%, #282A36 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #20252C 1.62%, #1A1E24 50.72%) !important;
--background-modifier-border-alt: #44475A !important;
}`,
    },
    "ulu-lyt-dt": {
      dark: `.ulu-lyt-dt {
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
--color-base-10: #1E1F24;
--color-base-20: #2D3039;
--color-base-25: #343A4B;
--color-base-30: #6C7184;
--color-base-35: #7C849C;
--color-base-40: #A0A7BB;
--color-base-50: #B9C3DF;
--color-base-60: #DBE2F5;
--color-base-70: #72C3D5;
--color-base-100: #E8ECF5;
--gradient-bg-primary: linear-gradient(135deg, #2A2B32 1.62%, #23242A 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #363A45 1.62%, #2D3039 50.72%) !important;
--background-modifier-border-alt: #6C7184 !important;
}`,
    },
    "ulu-gradient-d": {
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-base-00: #000;
/* background-primary */
--color-base-10: #161B33;
/* background-primary-alt */
--color-base-20: #0D0C1D;
/* background-secondary */
--color-base-25: #040303;
/* idk lol */
--color-base-30: #1E2126;
/* background-modifier-border */
--color-base-35: #3D3D3D;
/* background-modifier-border-hover */
--color-base-40: #5D5D5D;
/* background-modifier-border-focus */
--color-base-50: #9097A0;
/* text-faint */
--color-base-60: #6277CD;
/* also no clue */
--color-base-70: #D3D1EB;
/* text-muted */
--color-base-100: #FFF;
/* text-normal */
--color-accent: hsl(50 100% 55%) !important;
--color-accent-hsl: 50, 100%, 55% !important;
--color-accent-rgb: 255, 217, 25 !important;
--text-on-accent: var(--color-base-00);
--background-primary: linear-gradient(
		0deg,
		hsl(244deg 41% 8%) 0%,
		hsl(233deg 39% 12%) 50%,
		hsl(230deg 40% 14%) 100%
	  );
--gradient-bg-primary: linear-gradient(135deg, rgba(9,9,9,0.5) 20.62%, rgba(0,0,0,0.5)  90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #1E5E6C 20.62%, #601E6C 90.72%) !important;
--background-modifier-border-alt: #40916c !important;
}

.theme-dark .modal:not(.is-mobile) {
background: var(--gradient-bg-secondary) !important;
}`,
    },
    "ulu-lord-d": {
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 242, 73, 73;
--color-red: #F24949;
--color-red-hsl: 0, 87%, 62%;
--color-orange-rgb: 255, 138, 0;
--color-orange: #FF8A00;
--color-orange-hsl: 32, 100%, 50%;
--color-yellow-rgb: 230, 230, 103;
--color-yellow: #E6E667;
--color-yellow-hsl: 60, 72%, 65%;
--color-green-rgb: 47, 222, 115;
--color-green: #2FDE73;
--color-green-hsl: 143, 73%, 53%;
--color-cyan-rgb: 80, 182, 255;
--color-cyan: #50B6FF;
--color-cyan-hsl: 205, 100%, 66%;
--color-blue-rgb: 98, 119, 205;
--color-blue: #6277CD;
--color-blue-hsl: 228, 52%, 59%;
--color-purple-rgb: 137, 102, 222;
--color-purple-hsl: 258, 65%, 64%;
--color-purple: #8966DE;
--color-pink-rgb: 215, 75, 177;
--color-pink: #D74BB1;
--color-pink-hsl: 316, 64%, 57%;
--canvas-color: 245, 245, 245;
--color-base-00: #081c15;
/* background-primary */
--color-base-10: #1b4332;
/* background-primary-alt */
--color-base-20: #1b4332;
/* background-secondary */
--color-base-25: #40916c;
/* idk lol */
--color-base-30: #40916c;
/* background-modifier-border */
--color-base-35: #74c69d;
/* background-modifier-border-hover */
--color-base-40: #40916c;
/* background-modifier-border-focus */
--color-base-50: #95d5b2;
/* text-faint */
--color-base-60: #b7e4c7;
/* also no clue */
--color-base-70: #d8f3dc;
/* text-muted */
--color-base-100: #FFF;
/* text-normal */
--color-accent: hsl(75, 100%, 60%) !important;
--color-accent-hsl: 75, 100%, 60% !important;
--color-accent-rgb: 204, 255, 51 !important;
--text-on-accent: var(--color-base-00);
--gradient-bg-primary: linear-gradient(135deg, #0B281E 1.62%, #081c15 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #1F4D39 1.62%, #1b4332 50.72%) !important;
--background-modifier-border-alt: #40916c !important;
}`,
    },
    "ulu-end-d": {
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--canvas-color: 114, 114, 114;
--color-base-00: #0d0d0d;
/* background-primary */
--color-base-10: #1F1F1F;
/* background-primary-alt */
--color-base-20: #1A1A1A;
/* background-secondary */
--color-base-25: #1F1F1F;
/* idk lol */
--color-base-30: #121212;
/* background-modifier-border */
--color-base-35: #383838;
/* background-modifier-border-hover */
--color-base-40: #3C3C3C;
/* background-modifier-border-focus */
--color-base-50: #9f9789;
/* text-faint */
--color-base-60: #b2ada3;
/* also no clue */
--color-base-70: #d9d2c4;
/* text-muted */
--color-base-100: #ffffff;
/* text-normal */
--text-on-accent: var(--color-base-00);
--gradient-bg-primary: linear-gradient(135deg, #0d0d0d 1.62%, #0a0a0a 50.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #141414 1.62%, #080808 50.72%) !important;
--background-modifier-border-alt: #1a1a1a !important;
}`,
    },
    "ulu-spotlight-d": {
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--accent-h: 14 !important;
--accent-s: 100% !important;
--accent-l: 73% !important;
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
--color-base-00: #212733;
/* background-primary */
--color-base-10: #272C36;
/* background-primary-alt */
--color-base-20: #1A1F28;
/* background-secondary */
--color-base-25: #2C3139;
/* idk lol */
--color-base-30: #121924;
/* background-modifier-border */
--color-base-35: #2C3139;
/* background-modifier-border-hover */
--color-base-40: #2C3139;
/* background-modifier-border-focus */
--color-base-50: #85ADBB;
/* text-faint */
--color-base-60: #85ADBB;
/* also no clue */
--color-base-70: #e6e6e6;
/* text-muted */
--color-base-100: #FF9473;
/* text-normal */
--color-accent-hsl: var(--accent-h),
        var(--accent-s),
        var(--accent-l);
--color-accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
--color-accent-1: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) - 3.8%));
--color-accent-2: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) + 3.8%));
--background-modifier-form-field: var(--color-base-25);
--background-secondary-alt: var(--color-base-30);
--interactive-normal: var(--color-base-30);
--interactive-hover: var(--color-base-35);
--background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
--background-modifier-cover: rgba(10, 10, 10, 0.4);
--text-highlight-bg: rgba(255, 208, 0, 0.4);
--text-highlight-bg-active: rgba(255, 128, 0, 0.4);
--text-selection: hsla(var(--interactive-accent-hsl), 0.25);
--input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),
        0 2px 4px 0 rgba(0, 0, 0, .15),
        0 1px 1.5px 0 rgba(0, 0, 0, .1),
        0 1px 2px 0 rgba(0, 0, 0, .2),
        0 0 0 0 transparent;
--input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
        0 2px 3px 0 rgba(0, 0, 0, .3),
        0 1px 1.5px 0 rgba(0, 0, 0, .2),
        0 1px 2px 0 rgba(0, 0, 0, .4),
        0 0 0 0 transparent;
--shadow-s: none;
--shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
        0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
        0px 30px 90px rgba(0, 0, 0, 0.2);
--gradient-bg-primary: linear-gradient(135deg, #262D3B 1.62%, #212733 50.72%);
--gradient-bg-secondary: linear-gradient(135deg, #1E242E 1.62%, #1A1F28 50.72%);
--background-modifier-border-alt: #161F2C;
}`,
    },
    "ulu-amoled-dt": {
      dark: `.ulu-amoled-dt {
--color-base-00: #0B0B0B;
--color-base-10: #2E2E2E;
--color-base-20: #000;
--color-base-25: #333;
--color-base-30: #3D3D3D;
--color-base-35: #515151;
--color-base-40: #6B6B6B;
--color-base-50: #949494;
--color-base-60: #A6A6A6;
--color-base-70: #CDCDCD;
--color-base-100: #FFF;
--gradient-bg-primary: linear-gradient(135deg, #060606 20.62%, #000 90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #030303 20.62%, #000 90.72%) !important;
--background-modifier-border-alt: #131313 !important;
}`,
    },
    "ulu-cards-shadow": {
      general: `.ulu-cards-shadow .mod-root .workspace-tabs .workspace-leaf:not(.is-mobile) {
box-shadow: none;
}`,
    },
    "ulu-gummy-callouts": {
      general: `.ulu-gummy-callouts .callout {
/* background: rgba(var(--callout-color), 0.05); */
background: linear-gradient(135deg, rgba(var(--callout-color), 0.05), var(--background-primary));
position: relative;
/* border: 1px solid rgba(var(--callout-color), 0.1); */
border: 1px solid rgba(var(--callout-color), 0.4);
box-shadow: none;
border-radius: 12px;
}

.ulu-gummy-callouts .callout:hover {
border: 1px solid rgb(var(--callout-color));
}

.ulu-gummy-callouts .callout-title-inner {
font-weight: bold;
/* font-family: var(--font-title); */
font-variation-settings: 'WGHT'900;
font-size: 1.2em;
}

.ulu-gummy-callouts .markdown-source-view.mod-cm6 .cm-embed-block:hover {
box-shadow: var(--embed-block-shadow-hover);
border-radius: 12px;
overflow: hidden;
cursor: text;
}`,
    },
    "ulu-nt-callouts": {
      general: `.ulu-nt-callouts .callout[data-callout="abstract"], .ulu-nt-callouts .callout[data-callout="warning"], .ulu-nt-callouts .callout[data-callout="info"], .ulu-nt-callouts .callout[data-callout="example"], .ulu-nt-callouts .callout[data-callout="note"], .ulu-nt-callouts .callout[data-callout="tip"], .ulu-nt-callouts .callout[data-callout="success"], .ulu-nt-callouts .callout[data-callout="question"], .ulu-nt-callouts .callout[data-callout="failure"], .ulu-nt-callouts .callout[data-callout="danger"], .ulu-nt-callouts .callout[data-callout="bug"], .ulu-nt-callouts .callout[data-callout="quote"] {
color: var(--color-callout-text);
}

.ulu-nt-callouts .callout[data-callout="info"], .ulu-nt-callouts .callout[data-callout="todo"] {
border: 1px solid var(--color-callout-border-blue) !important;
background: var(--color-callout-blue) !important;
}

.ulu-nt-callouts .callout[data-callout="abstract"], .ulu-nt-callouts .callout[data-callout="summary"], .ulu-nt-callouts .callout[data-callout="tldr"] {
border: 1px solid var(--color-callout-border-teal);
background: var(--color-callout-teal);
}

.ulu-nt-callouts .callout[data-callout="warning"], .ulu-nt-callouts .callout[data-callout="caution"], .ulu-nt-callouts .callout[data-callout="danger"] {
border: 1px solid var(--color-callout-border-orange);
background: var(--color-callout-orange);
}

.ulu-nt-callouts .callout[data-callout="example"] {
border: 1px solid var(--color-callout-border-purple);
background: var(--color-callout-purple);
}

.ulu-nt-callouts .callout[data-callout="note"] {
border: 1px solid var(--color-callout-border-blue);
background: var(--color-callout-blue);
}

.ulu-nt-callouts .callout[data-callout="tip"], .ulu-nt-callouts .callout[data-callout="hint"], .ulu-nt-callouts .callout[data-callout="important"] {
border: 1px solid var(--color-callout-border-teal);
background: var(--color-callout-teal);
}

.ulu-nt-callouts .callout[data-callout="question"], .ulu-nt-callouts .callout[data-callout="help"], .ulu-nt-callouts .callout[data-callout="faq"] {
border: 1px solid var(--color-callout-border-yellow);
background: var(--color-callout-yellow);
}

.ulu-nt-callouts .callout[data-callout="danger"], .ulu-nt-callouts .callout[data-callout="error"] {
border: 1px solid var(--color-callout-border-red);
background: var(--color-callout-red);
}

.ulu-nt-callouts .callout[data-callout="failure"], .ulu-nt-callouts .callout[data-callout="fail"], .ulu-nt-callouts .callout[data-callout="missing"] {
border: 1px solid var(--color-callout-border-red);
background: var(--color-callout-red);
}

.ulu-nt-callouts .callout[data-callout="bug"] {
border: 1px solid var(--color-callout-border-red);
background: var(--color-callout-red);
}

.ulu-nt-callouts .callout[data-callout="quote"], .ulu-nt-callouts .callout[data-callout="cite"] {
border: 1px solid var(--color-callout-border-grey);
background: var(--color-callout-grey);
}

.ulu-nt-callouts .callout[data-callout="success"], .ulu-nt-callouts .callout[data-callout="check"], .ulu-nt-callouts .callout[data-callout="done"] {
border: 1px solid var(--color-callout-border-green);
background: var(--color-callout-green);
}`,
      dark: `.theme-dark {
--color-callout-red: #502626;
--color-callout-blue: #263850;
--color-callout-green: #265029;
--color-callout-yellow: #4c5026;
--color-callout-orange: #504126;
--color-callout-teal: #264e50;
--color-callout-grey: #3b3b3b;
--color-callout-purple: #392650;
--color-callout-border-red1: #715050;
--color-callout-border-blue1: #516073;
--color-callout-border-green1: #507153;
--color-callout-border-yellow1: #6e7150;
--color-callout-border-orange1: #716550;
--color-callout-border-teal1: #507171;
--color-callout-border-grey1: #616161;
--color-callout-border-purple1: #472650;
--color-callout-text: var(--text-on-accent);
}`,
      light: `.theme-light {
--color-callout-red: #ffe0e0;
--color-callout-blue: #def1ff;
--color-callout-green: #e0ffe3;
--color-callout-yellow: #ffffe0;
--color-callout-orange: #fff2e0;
--color-callout-teal: #e0feff;
--color-callout-grey: #ededed;
--color-callout-purple: #ede0ff;
--color-callout-border-red: #e5c7c7;
--color-callout-border-blue: #c7d8e5;
--color-callout-border-green: #cce5c7;
--color-callout-border-yellow: #e3e5c7;
--color-callout-border-orange: #e5dbc7;
--color-callout-border-teal: #c7e5e5;
--color-callout-border-grey: #dbdbdb;
--color-callout-border-purple: #d8c7e5;
--color-callout-text: var(--text-normal);
}`,
    },
    "ulu-brutal-callouts": {
      general: `.ulu-brutal-callouts .callout {
position: relative;
overflow: visible;
background: var(--background-primary);
box-shadow: 8px 8px 0 -2.5px var(--background-primary), 8px 8px 0 0 rgb(var(--callout-color));
border: 2.5px solid rgb(var(--callout-color));
border-radius: 0px;
}

.ulu-brutal-callouts .callout:before {
background: rgb(var(--callout-color));
content: "";
position: absolute;
top: 8px;
left: 8px;
width: 100%;
height: 100%;
opacity: 0.2;
}`,
    },
    "ulu-soft-callouts": {
      general: `.ulu-soft-callouts .callout {
position: relative;
overflow: hidden;
}

.ulu-soft-callouts .callout:before {
background: rgb(var(--callout-color));
content: "";
position: absolute;
top: 4px;
left: 0;
width: 100%;
height: 100%;
opacity: 0.1;
border-radius: 0px;
}`,
    },
    "ulu-we3-callout": {
      general: `.ulu-we3-callout .callout[data-callout="abstract"], .ulu-we3-callout .callout[data-callout="warning"], .ulu-we3-callout .callout[data-callout="info"], .ulu-we3-callout .callout[data-callout="example"], .ulu-we3-callout .callout[data-callout="note"], .ulu-we3-callout .callout[data-callout="tip"], .ulu-we3-callout .callout[data-callout="success"], .ulu-we3-callout .callout[data-callout="question"], .ulu-we3-callout .callout[data-callout="failure"], .ulu-we3-callout .callout[data-callout="danger"], .ulu-we3-callout .callout[data-callout="bug"], .ulu-we3-callout .callout[data-callout="quote"] {
color: var(--color-callout-text);
}

.ulu-we3-callout .callout-title-inner {
font-weight: var(--bold-weight);
text-shadow: 0px 0px 18px rgba(var(--callout-color),0.5);
color: var(--callout-title-color);
}

.ulu-we3-callout .callout {
border-radius: 8px;
transition: 700ms;
}

.ulu-we3-callout .callout[data-callout="abstract"], .ulu-we3-callout .callout[data-callout="summary"], .ulu-we3-callout .callout[data-callout="tldr"] {
box-shadow:
    -12px 12px 69px -3px rgba(66, 4, 126, 0.1),
    12px -12px 69px -3px rgba(7, 244, 158, 0.05);
}

.ulu-we3-callout .callout[data-callout="danger"], .ulu-we3-callout .callout[data-callout="bug"] {
box-shadow:
    -12px 12px 69px -3px rgba(52, 7, 61, 0.1),
    12px -12px 69px -3px rgba(239, 116, 92, 0.1);
}

.ulu-we3-callout .callout[data-callout="info"], .ulu-we3-callout .callout[data-callout="todo"], .ulu-we3-callout .callout[data-callout="note"] {
box-shadow: 
    -12px 12px 69px -3px rgba(84,86,206,0.1), 
    0px 1px 69px -3px rgba(201,88,187,0.1), 
    12px -12px 69px -3px rgba(250,191,120,0.1);
}

.ulu-we3-callout .callout[data-callout="summary"], .ulu-we3-callout .callout[data-callout="example"] {
box-shadow: 
    -12px 12px 69px -3px rgba(34, 5, 45, 0.1),
    12px -12px 69px -3px rgba(239, 116, 92, 0.2);
}

.ulu-we3-callout .callout[data-callout="caution"], .ulu-we3-callout .callout[data-callout="warning"] {
box-shadow: 
    -12px 12px 69px -3px rgba(8, 32, 62, 0.1),
    12px -12px 69px -3px rgba(85, 124, 147, 0.1);
}

.ulu-we3-callout .callout[data-callout="tip"], .ulu-we3-callout .callout[data-callout="hint"] {
box-shadow: 
    -12px 12px 69px -3px rgba(94, 67, 93, 0.1),
    12px -12px 69px -3px rgba(164, 198, 184, 0.1);
}

.ulu-we3-callout .callout[data-callout="success"], .ulu-we3-callout .callout[data-callout="check"], .ulu-we3-callout .callout[data-callout="done"] {
box-shadow: 
    -12px 12px 69px -3px rgba(28, 62, 53, 0.1),
    12px -12px 69px -3px rgba(153, 242, 209, 0.1);
}

.ulu-we3-callout .callout[data-callout="question"], .ulu-we3-callout .callout[data-callout="help"], .ulu-we3-callout .callout[data-callout="faq"] {
box-shadow: 
    -12px 12px 69px -3px rgba(63, 63, 66, 0.1),
    12px -12px 69px -3px rgba(93, 93, 60, 0.1);
}

.ulu-we3-callout .callout[data-callout="failure"], .ulu-we3-callout .callout[data-callout="fail"], .ulu-we3-callout .callout[data-callout="missing"] {
box-shadow: 
    -12px 12px 69px -3px rgba(18, 36, 63, 0.1),
    12px -12px 69px -3px rgba(244, 152, 90, 0.1);
}

.ulu-we3-callout .callout[data-callout="error"] {
box-shadow: 
    -12px 12px 69px -3px rgba(31, 0, 33, 0.1),
    12px -12px 69px -3px rgba(117, 16, 6, 0.1);
}

.ulu-we3-callout .callout[data-callout="important"] {
box-shadow: 
    -12px 12px 69px -3px rgba(249, 188, 44, 0.1),
    12px -12px 69px -3px rgba(247, 76, 6, 0.1);
}

.ulu-we3-callout .callout[data-callout="quote"], .ulu-we3-callout .callout[data-callout="cite"] {
box-shadow: 
    -12px 12px 69px -3px rgba(96, 105, 107, 0.1),
    12px -12px 69px -3px rgba(133, 142, 150, 0.1);
}

.ulu-we3-callout .callout[data-callout="tldr"], .ulu-we3-callout .callout[data-callout="caution"], .ulu-we3-callout .callout[data-callout="todo"], .ulu-we3-callout .callout[data-callout="summary"], .ulu-we3-callout .callout[data-callout="hint"], .ulu-we3-callout .callout[data-callout="important"], .ulu-we3-callout .callout[data-callout="check"], .ulu-we3-callout .callout[data-callout="done"], .ulu-we3-callout .callout[data-callout="help"], .ulu-we3-callout .callout[data-callout="faq"], .ulu-we3-callout .callout[data-callout="fail"], .ulu-we3-callout .callout[data-callout="error"], .ulu-we3-callout .callout[data-callout="important"], .ulu-we3-callout .callout[data-callout="cite"], .ulu-we3-callout .callout[data-callout="abstract"], .ulu-we3-callout .callout[data-callout="warning"], .ulu-we3-callout .callout[data-callout="info"], .ulu-we3-callout .callout[data-callout="example"], .ulu-we3-callout .callout[data-callout="note"], .ulu-we3-callout .callout[data-callout="tip"], .ulu-we3-callout .callout[data-callout="success"], .ulu-we3-callout .callout[data-callout="question"], .ulu-we3-callout .callout[data-callout="failure"], .ulu-we3-callout .callout[data-callout="danger"], .ulu-we3-callout .callout[data-callout="bug"], .ulu-we3-callout .callout[data-callout="quote"] {
border: 1px solid var(--background-primary);
background: var(--background-primary);
}

.ulu-we3-callout .callout:hover {
border: 1px solid rgb(var(--callout-color));
}

.ulu-we3-callout .callout-icon .svg-icon, .ulu-we3-callout .callout-icon {
display: none;
}

.ulu-we3-callout .callout-title {
font-size: 2em;
padding: 0;
gap: 0;
}`,
      dark: `.ulu-we3-callout .theme-dark {
--color-callout-red: #502626;
--color-callout-blue: #263850;
--color-callout-green: #265029;
--color-callout-yellow: #4c5026;
--color-callout-orange: #504126;
--color-callout-teal: #264e50;
--color-callout-grey: #3b3b3b;
--color-callout-purple: #392650;
--color-callout-border-red: #715050;
--color-callout-border-blue: #516073;
--color-callout-border-green: #507153;
--color-callout-border-yellow: #6e7150;
--color-callout-border-orange: #716550;
--color-callout-border-teal: #507171;
--color-callout-border-grey: #616161;
--color-callout-border-purple: #472650;
--color-callout-text: var(--text-on-accent);
}`,
      light: `.ulu-we3-callout .theme-light {
--color-callout-red: #ffe0e0;
--color-callout-blue: #def1ff;
--color-callout-green: #e0ffe3;
--color-callout-yellow: #ffffe0;
--color-callout-orange: #fff2e0;
--color-callout-teal: #e0feff;
--color-callout-grey: #ededed;
--color-callout-purple: #ede0ff;
--color-callout-border-red: #e5c7c7;
--color-callout-border-blue: #c7d8e5;
--color-callout-border-green: #cce5c7;
--color-callout-border-yellow: #e3e5c7;
--color-callout-border-orange: #e5dbc7;
--color-callout-border-teal: #c7e5e5;
--color-callout-border-grey: #dbdbdb;
--color-callout-border-purple: #d8c7e5;
--color-callout-text: var(--text-normal);
}`,
    },
    "ulu-line-callouts": {
      general: `.ulu-line-callouts .callout::after {
content: '';
background: rgba(var(--callout-color),0.3) !important;
position: absolute;
left: -3px;
height: 100%;
width: 100%;
top: 0px;
border-radius: 0px;
z-index: -1;
}

.ulu-line-callouts .callout {
/* background: rgba(var(--callout-color), 0.05); */
background: transparent;
position: relative;
/* border: 1px solid rgba(var(--callout-color), 0.1); */
/* border-left: 3px solid rgba(var(--callout-color), 0.4); */
box-shadow: 0px 0px 0px 0px rgba(var(--callout-color),0.5);
border-radius: 0px;
}

.ulu-line-callouts .callout::before {
content: '';
background: rgba(var(--callout-color),0.3) !important;
position: absolute;
left: 0px;
height: 100%;
top: 0px;
border-left: 3px solid rgb(var(--callout-color));
box-shadow: 0px 0px 34px 16px rgba(var(--callout-color),0.5);
border-radius: 0px;
}

.ulu-line-callouts .callout:hover, .ulu-line-callouts .markdown-source-view.mod-cm6 .cm-embed-block:hover {
border-radius: 0px;
}

.ulu-line-callouts .callout-title-inner {
font-weight: bold;
/* font-family: var(--font-title); */
font-variation-settings: 'WGHT'900;
}`,
    },
    "ulu-gummy-codeblock": {
      general: `.ulu-gummy-codeblock cm-s-obsidian .HyperMD-codeblock, .ulu-gummy-codeblock .cm-hmd-frontmatter {
font-weight: 400;
}

.ulu-gummy-codeblock .cm-s-obsidian span.cm-inline-code {
font-size: var(--code-size);
color: var(--code-normal);
vertical-align: baseline;
}

.ulu-gummy-codeblock .markdown-rendered pre {
border: 1px solid var(--color-accent);
border-radius: var(--radius-m);
box-shadow: -24px 24px 69px -3px hsla(var(--color-accent-hsl), 0.2),
        24px -24px 69px -3px hsla(calc(var(--accent-h) + 180), var(--accent-s), var(--accent-l), 0.13);
background: hsla(var(--color-accent-hsl), 0.1);
}

.ulu-gummy-codeblock .markdown-rendered code {
color: var(--color-accent);
}

.ulu-gummy-codeblock .markdown-source-view.mod-cm6 .cm-line.HyperMD-codeblock {
padding-left: var(--size-4-4);
color: var(--color-accent);
background: hsla(var(--color-accent-hsl), 0.1);
margin: 8px;
}

.ulu-gummy-codeblock .cm-s-obsidian div.HyperMD-codeblock-begin-bg {
background: var(--code-background);
border-top: 1px solid var(--color-accent);
/* stylelint-disable-next-line declaration-no-important */
border-top-right-radius: 8px !important;
/* stylelint-disable-next-line declaration-no-important */
border-top-left-radius: 8px !important;
margin-top: 8px;
}

.ulu-gummy-codeblock .cm-s-obsidian div.HyperMD-codeblock-end-bg {
background: var(--code-background);
border-bottom: 1px solid var(--color-accent);
border-bottom-right-radius: 8px;
border-bottom-left-radius: 8px;
}

.ulu-gummy-codeblock .cm-s-obsidian div.HyperMD-codeblock-bg {
border-right: 1px solid var(--color-accent);
border-left: 1px solid var(--color-accent);
}

.ulu-gummy-codeblock .markdown-rendered pre {
transition: all 0.5s cubic-bezier(0.25, 0.46, 0.46, 0.95);
}

.ulu-gummy-codeblock .markdown-rendered pre:hover {
transform: translateY(4px);
}`,
    },
    "ulu-ntosx-codeblock": {
      general: `.ulu-ntosx-codeblock .markdown-source-view.mod-cm6.is-readable-line-width .cm-line {
max-width: 100vh;
}

.ulu-ntosx-codeblock pre[class*="language-"]::before {
display: block;
content: "";
height: 32px;
background: var(--text-normal);
box-shadow: 0 calc(-1 * var(--size-4-4)) 0 var(--size-4-4) var(--text-normal);
}

.ulu-ntosx-codeblock pre[class*="language-"]::after {
display: block;
content: "";
height: 18px;
width: 18px;
background: var(--color-red);
box-shadow: 25px 0 var(--color-orange), 50px 0 var(--color-green);
position: absolute;
top: 7px;
border-radius: 100vmax;
}

.ulu-ntosx-codeblock .markdown-rendered pre {
border: 1px solid var(--text-normal);
}

.ulu-ntosx-codeblock .cm-s-obsidian div.HyperMD-codeblock-begin-bg {
height: 38px;
background: var(--text-normal);
border-top: 1px solid var(--text-normal);
/* stylelint-disable-next-line declaration-no-important */
border-top-right-radius: 8px !important;
/* stylelint-disable-next-line declaration-no-important */
border-top-left-radius: 8px !important;
}

.ulu-ntosx-codeblock .cm-s-obsidian div.HyperMD-codeblock-end-bg {
background: var(--code-background);
border-bottom: 1px solid var(--text-normal);
border-bottom-right-radius: 8px;
border-bottom-left-radius: 8px;
}

.ulu-ntosx-codeblock .cm-s-obsidian div.HyperMD-codeblock-bg {
border-right: 1px solid var(--text-normal);
border-left: 1px solid var(--text-normal);
}

.ulu-ntosx-codeblock .cm-s-obsidian div.HyperMD-codeblock-begin-bg::after {
display: block;
content: "";
height: 18px;
width: 18px;
background: var(--color-red);
box-shadow: 25px 0 var(--color-orange), 50px 0 var(--color-green);
position: absolute;
top: 7px;
border-radius: 100vmax;
}`,
    },
    "ulu-noborder": {
      general: `.ulu-noborder .workspace-ribbon, .ulu-noborder .workspace-split.mod-vertical > * > .workspace-leaf-resize-handle, .ulu-noborder .workspace-split.mod-left-split > .workspace-leaf-resize-handle, .ulu-noborder .workspace-ribbon.mod-left .sidebar-toggle-button, .ulu-noborder .tooltip.mod-right .tooltip-arrow, .ulu-noborder .workspace-drawer.mod-left {
border-right: 0 !important;
}

.ulu-noborder .workspace-split.mod-right-split > .workspace-leaf-resize-handle, .ulu-noborder .tooltip.mod-left .tooltip-arrow, .ulu-noborder .workspace-drawer.mod-right, .ulu-noborder ::-webkit-scrollbar {
border-left: 0 !important;
}

.ulu-noborder .workspace-split.mod-horizontal > * > .workspace-leaf-resize-handle, .ulu-noborder .mod-left-split .workspace-tab-header-container, .ulu-noborder .tooltip .tooltip-arrow, .ulu-noborder .workspace-split.mod-vertical .workspace-tabs:not(.mod-top) > .workspace-tab-header-container, .ulu-noborder .workspace-split.mod-right-split .workspace-tabs:not(.mod-top) > .workspace-tab-header-container, .ulu-noborder .workspace-split.mod-left-split .workspace-tabs:not(.mod-top) > .workspace-tab-header-container, .ulu-noborder .workspace-split.mod-left-split .workspace-tabs:not(.mod-top) > .workspace-tab-header-container, .ulu-noborder .view-header, .ulu-noborder .nav-header, .ulu-noborder .mod-right-split .workspace-tab-header-container, .ulu-noborder .mod-left-split .workspace-tab-header-container, .ulu-noborder #cMenuToolbarModalBar.top {
border-bottom: 0 !important;
}

.ulu-noborder .modal, .ulu-noborder .tooltip, .ulu-noborder .notice, .ulu-noborder .menu, .ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container, .ulu-noborder .markdown-preview-view blockquote, .ulu-noborder .markdown-preview-view blockquote:hover, .ulu-noborder .status-bar {
border: 0 !important;
}

.ulu-noborder .tooltip.mod-top .tooltip-arrow, .ulu-noborder .workspace .mod-root .workspace-tabs.mod-stacked .workspace-tab-container::-webkit-scrollbar, .ulu-noborder .workspace .mod-root .workspace-tabs.mod-stacked .workspace-tab-container::-webkit-scrollbar {
border-top: 0 !important;
}

.ulu-noborder .clickable-icon[aria-label="New note"] {
border: 0 !important;
background: var(--background-primary);
border-radius: 4px !important;
}`,
    },
    "ulu-dborder": {
      general: `.ulu-dborder .workspace-ribbon, .ulu-dborder .workspace-split.mod-vertical > * > .workspace-leaf-resize-handle, .ulu-dborder .workspace-split.mod-left-split > .workspace-leaf-resize-handle, .ulu-dborder .workspace-ribbon.mod-left .sidebar-toggle-button, .ulu-dborder .tooltip.mod-right .tooltip-arrow, .ulu-dborder .workspace-drawer.mod-left {
border-right: 1px dashed var(--background-modifier-border) !important;
}

.ulu-dborder .mod-top .workspace-leaf-resize-handle {
border-color: var(--background-modifier-border);
}

.ulu-dborder .workspace-split.mod-right-split > .workspace-leaf-resize-handle, .ulu-dborder .tooltip.mod-left .tooltip-arrow, .ulu-dborder .workspace-drawer.mod-right, .ulu-dborder ::-webkit-scrollbar {
border-left: 1px dashed var(--background-modifier-border) !important;
}

.ulu-dborder .workspace-split.mod-horizontal > * > .workspace-leaf-resize-handle, .ulu-dborder .mod-left-split .workspace-tab-header-container, .ulu-dborder .tooltip .tooltip-arrow, .ulu-dborder .workspace-split.mod-vertical .workspace-tabs:not(.mod-top) > .workspace-tab-header-container, .ulu-dborder .workspace-split.mod-right-split .workspace-tabs:not(.mod-top) > .workspace-tab-header-container, .ulu-dborder .workspace-split.mod-left-split .workspace-tabs:not(.mod-top) > .workspace-tab-header-container, .ulu-dborder .workspace-split.mod-left-split .workspace-tabs:not(.mod-top) > .workspace-tab-header-container, .ulu-dborder .view-header, .ulu-dborder .nav-header, .ulu-dborder .mod-right-split .workspace-tab-header-container, .ulu-dborder .mod-left-split .workspace-tab-header-container {
border-bottom: 1px dashed var(--background-modifier-border) !important;
}

.ulu-dborder .modal, .ulu-dborder .tooltip, .ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container, .ulu-dborder .notice, .ulu-dborder .menu, .ulu-dborder .markdown-preview-view blockquote, .ulu-dborder .markdown-preview-view blockquote:hover, .ulu-dborder .status-bar {
border: 1px dashed var(--background-modifier-border) !important;
}

.ulu-dborder .tooltip.mod-top .tooltip-arrow, .ulu-dborder .workspace .mod-root .workspace-tabs.mod-stacked .workspace-tab-container::-webkit-scrollbar, .ulu-dborder .workspace .mod-root .workspace-tabs.mod-stacked .workspace-tab-container::-webkit-scrollbar {
border-top: 1px dashed var(--background-modifier-border) !important;
}

.ulu-dborder .clickable-icon[aria-label="New note"] {
border: 1px dashed var(--background-modifier-border) !important;
background: var(--background-primary);
border-radius: 4px !important;
}`,
    },
    "ulu-prop-card": {
      general: `.ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container {
display: var(--metadata-display-editing);
border: 1px solid var(--background-modifier-border);
background: var(--background-primary);
margin-bottom: 3em;
border-radius: 8px;
padding: 8px;
}

.ulu-noborder.ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container {
border: 0 !important;
}

.ulu-dborder.ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container {
border: 1px dashed var(--background-modifier-border) !important;
}

.ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container {
display: var(--metadata-display-editing);
border: 1px solid var(--background-modifier-border-alt) !important;
margin-bottom: 3em;
border-radius: var(--ulu-radius);
padding: 8px;
}`,
      dark: `.ulu-shark-d.ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container, .ulu-shark-l.theme-light.ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container {
display: var(--metadata-display-editing);
border: 1px solid var(--background-modifier-border-alt);
background: var(--gradient-bg-tertiary);
margin-bottom: 3em;
border-radius: 8px;
padding: 8px;
}

.ulu-prop-card .text-icon-button, .ulu-prop-card .multi-select-input, .ulu-prop-card .metadata-input-longtext, .ulu-prop-card input.metadata-property-key-input, .ulu-prop-card .metadata-container {
color: var(--text-normal);
}`,
      light: `.ulu-shark-d.theme-dark.ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container, .ulu-shark-l.ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container {
display: var(--metadata-display-editing);
border: 1px solid var(--background-modifier-border-alt);
background: var(--gradient-bg-tertiary);
margin-bottom: 3em;
border-radius: 8px;
padding: 8px;
}`,
    },
    "ulu-notitle": {
      general: `.ulu-notitle .nav-folder.mod-root > .nav-folder-title {
display: none;
}`,
    },
    "ulu-grad": {
      general: `.ulu-grad .workspace::before {
content: "";
height: 100%;
width: 100%;
background:
		radial-gradient(
			circle,
			var(--background-secondary) 0%,
			var(--color-accent) 8.1%,
			var(--background-secondary) 15.5%,
			var(--background-secondary) 58.8%,
			var(--background-secondary) 84.5%,
			var(--background-secondary) 91.9%,
			var(--background-secondary) 100%
		);
opacity: 0.5;
position: fixed;
animation: scale-up-center 20s linear infinite both;
}

.ulu-grad .workspace {
position: relative;
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content .markdown-preview-view .inline-title {
color: rgb(var(--color-red-rgb));
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content .markdown-preview-view .inline-title {
color: rgb(var(--color-orange-rgb));
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content .markdown-preview-view .inline-title {
color: rgb(var(--color-yellow-rgb));
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content .markdown-preview-view .inline-title {
color: rgb(var(--color-green-rgb));
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content .markdown-preview-view .inline-title {
color: rgb(var(--color-blue-rgb));
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content .markdown-preview-view .inline-title {
color: rgb(var(--color-purple-rgb));
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container, .ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container, .ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container, .ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container, .ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container, .ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
border: 1px solid rgb(var(--canvas-color));
}`,
      dark: `.ulu-gradient-d.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-base-00: #000;
/* background-primary */
--color-base-10: #161B33;
/* background-primary-alt */
--color-base-20: #0D0C1D;
/* background-secondary */
--color-base-25: #040303;
/* idk lol */
--color-base-30: #1E2126;
/* background-modifier-border */
--color-base-35: #3D3D3D;
/* background-modifier-border-hover */
--color-base-40: #5D5D5D;
/* background-modifier-border-focus */
--color-base-50: #9097A0;
/* text-faint */
--color-base-60: #6277CD;
/* also no clue */
--color-base-70: #D3D1EB;
/* text-muted */
--color-base-100: #FFF;
/* text-normal */
--color-accent: hsl(50 100% 55%) !important;
--color-accent-hsl: 50, 100%, 55% !important;
--color-accent-rgb: 255, 217, 25 !important;
--text-on-accent: var(--color-base-00);
--background-primary: linear-gradient(
		0deg,
		hsl(244deg 41% 8%) 0%,
		hsl(233deg 39% 12%) 50%,
		hsl(230deg 40% 14%) 100%
	  );
--gradient-bg-primary: linear-gradient(135deg, rgba(9,9,9,0.5) 20.62%, rgba(0,0,0,0.5)  90.72%) !important;
--gradient-bg-secondary: linear-gradient(135deg, #1E5E6C 20.62%, #601E6C 90.72%) !important;
--background-modifier-border-alt: #40916c !important;
}

.ulu-gradient-d.theme-dark .modal:not(.is-mobile) {
background: var(--gradient-bg-secondary) !important;
}

.ulu-gradient-canvas1 .theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background-image:
		linear-gradient(
			45deg,
			hsl(18deg 88% 66%) 0%,
			hsl(17deg 88% 65%) 21%,
			hsl(16deg 87% 63%) 30%,
			hsl(15deg 86% 62%) 39%,
			hsl(14deg 85% 60%) 46%,
			hsl(13deg 85% 59%) 54%,
			hsl(11deg 84% 57%) 61%,
			hsl(10deg 83% 56%) 69%,
			hsl(8deg 82% 55%) 79%,
			hsl(6deg 81% 54%) 100%
		);
}

.ulu-gradient-canvas2 .theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background-image:
		linear-gradient(
			45deg,
			hsl(23deg 92% 71%) 0%,
			hsl(21deg 93% 71%) 21%,
			hsl(18deg 93% 71%) 30%,
			hsl(16deg 93% 72%) 39%,
			hsl(14deg 93% 72%) 46%,
			hsl(11deg 93% 72%) 54%,
			hsl(9deg 92% 73%) 61%,
			hsl(6deg 91% 73%) 69%,
			hsl(3deg 89% 73%) 79%,
			hsl(0deg 87% 73%) 100%
		);
}

.ulu-gradient-canvas3 .theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background-image:
		linear-gradient(
			45deg,
			hsl(46deg 95% 56%) 0%,
			hsl(44deg 95% 55%) 21%,
			hsl(43deg 94% 54%) 30%,
			hsl(41deg 94% 53%) 39%,
			hsl(39deg 93% 53%) 46%,
			hsl(37deg 92% 53%) 54%,
			hsl(35deg 91% 52%) 61%,
			hsl(34deg 89% 52%) 69%,
			hsl(32deg 88% 52%) 79%,
			hsl(29deg 86% 52%) 100%
			);
}

.ulu-gradient-canvas4 .theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background-image:
		linear-gradient(
			45deg,
			hsl(145deg 84% 73%) 0%,
			hsl(145deg 78% 71%) 21%,
			hsl(146deg 74% 68%) 30%,
			hsl(146deg 70% 66%) 39%,
			hsl(146deg 67% 63%) 46%,
			hsl(147deg 64% 60%) 54%,
			hsl(148deg 61% 57%) 61%,
			hsl(148deg 60% 55%) 69%,
			hsl(149deg 58% 52%) 79%,
			hsl(150deg 61% 48%) 100%
		);
}

.ulu-gradient-canvas1 .theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content p, .ulu-gradient-canvas2 .theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content p, .ulu-gradient-canvas3 .theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content p, .ulu-gradient-canvas4 .theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content p, .ulu-gradient-canvas5 .theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content p, .ulu-gradient-canvas6 .theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content p {
color: var(--text-on-accent);
}

.ulu-gradient-canvas5 .theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background-image:
		linear-gradient(
			45deg,
			hsl(210deg 90% 80%) 0%,
			hsl(211deg 91% 77%) 21%,
			hsl(212deg 92% 74%) 30%,
			hsl(212deg 93% 71%) 39%,
			hsl(213deg 93% 68%) 46%,
			hsl(213deg 93% 65%) 54%,
			hsl(213deg 92% 61%) 61%,
			hsl(213deg 91% 58%) 69%,
			hsl(213deg 90% 54%) 79%,
			hsl(212deg 93% 49%) 100%
		);
}

.ulu-gradient-canvas6 .theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background-image:
		linear-gradient(
			45deg,
			hsl(276deg 91% 79%) 0%,
			hsl(274deg 88% 77%) 21%,
			hsl(272deg 85% 75%) 30%,
			hsl(270deg 83% 74%) 39%,
			hsl(267deg 81% 72%) 46%,
			hsl(265deg 79% 71%) 54%,
			hsl(262deg 78% 69%) 61%,
			hsl(260deg 76% 68%) 69%,
			hsl(257deg 75% 66%) 79%,
			hsl(254deg 74% 65%) 100%
		);
}`,
      light: `.ulu-gradient-canvas1 .theme-light .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background-image:
	linear-gradient(
		45deg,
		hsl(0deg 87% 79%) 0%,
		hsl(360deg 87% 78%) 21%,
		hsl(360deg 87% 77%) 30%,
		hsl(359deg 87% 75%) 39%,
		hsl(359deg 87% 74%) 46%,
		hsl(359deg 87% 73%) 54%,
		hsl(359deg 86% 72%) 61%,
		hsl(358deg 86% 71%) 69%,
		hsl(358deg 86% 70%) 79%,
		hsl(358deg 85% 68%) 100%
	  );
}

.ulu-gradient-canvas2 .theme-light .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background-image:
	linear-gradient(
		45deg,
		hsl(16deg 100% 76%) 0%,
		hsl(20deg 100% 76%) 21%,
		hsl(23deg 100% 76%) 30%,
		hsl(27deg 100% 77%) 39%,
		hsl(30deg 100% 77%) 46%,
		hsl(34deg 100% 77%) 54%,
		hsl(37deg 100% 78%) 61%,
		hsl(41deg 100% 79%) 69%,
		hsl(45deg 100% 80%) 79%,
		hsl(49deg 100% 81%) 100%
	  );
}

.ulu-gradient-canvas3 .theme-light .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background-image:
	linear-gradient(
		45deg,
		hsl(60deg 89% 72%) 0%,
		hsl(59deg 91% 73%) 21%,
		hsl(57deg 92% 74%) 30%,
		hsl(56deg 94% 76%) 39%,
		hsl(55deg 96% 77%) 46%,
		hsl(53deg 97% 78%) 54%,
		hsl(52deg 98% 79%) 61%,
		hsl(51deg 99% 80%) 69%,
		hsl(50deg 100% 80%) 79%,
		hsl(49deg 100% 81%) 100%
	  );
}

.ulu-gradient-canvas4 .theme-light .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background-image:
	linear-gradient(
		45deg,
		hsl(99deg 75% 75%) 0%,
		hsl(103deg 75% 77%) 21%,
		hsl(108deg 75% 79%) 30%,
		hsl(113deg 76% 81%) 39%,
		hsl(119deg 76% 83%) 46%,
		hsl(124deg 77% 84%) 54%,
		hsl(129deg 79% 85%) 61%,
		hsl(133deg 80% 86%) 69%,
		hsl(137deg 81% 86%) 79%,
		hsl(141deg 81% 87%) 100%
	  );
}

.ulu-gradient-canvas5 .theme-light .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background-image:
	linear-gradient(
  45deg,
  hsl(187deg 100% 89%) 0%,
  hsl(187deg 100% 87%) 21%,
  hsl(187deg 100% 85%) 30%,
  hsl(187deg 100% 83%) 39%,
  hsl(187deg 100% 81%) 46%,
  hsl(187deg 100% 79%) 54%,
  hsl(187deg 100% 77%) 61%,
  hsl(186deg 100% 75%) 69%,
  hsl(186deg 100% 72%) 79%,
  hsl(186deg 100% 69%) 100%
);
}

.ulu-gradient-canvas6 .theme-light .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background-image:
	linear-gradient(
		45deg,
		hsl(298deg 68% 90%) 0%,
		hsl(287deg 68% 89%) 21%,
		hsl(277deg 68% 89%) 30%,
		hsl(267deg 67% 88%) 39%,
		hsl(258deg 65% 87%) 46%,
		hsl(249deg 63% 87%) 54%,
		hsl(240deg 61% 86%) 61%,
		hsl(232deg 62% 83%) 69%,
		hsl(225deg 62% 81%) 79%,
		hsl(220deg 61% 79%) 100%
	  );
}`,
    },
    "ulu-bar": {
      general: `.ulu-bar .status-bar {
opacity: 0;
transition: var(--transition-03);
}

.ulu-bar .status-bar:hover {
opacity: 1;
animation: slide-top 0.3s;
animation-direction: alternate;
}`,
    },
    "ulu-list-distinct": {
      general: `.ulu-list-distinct .HyperMD-list-line {
padding-bottom: 8px;
}

.ulu-list-distinct div.HyperMD-list-line.HyperMD-list-line-1.cm-line {
background: var(--gradient-bg-secondary);
box-shadow: none;
padding-right: 8px;
margin-top: 2px;
border: 1px solid var(--background-modifier-border-alt);
border-radius: 4px;
}`,
    },
    "ulu-scrollbars": {
      general: `.ulu-scrollbars {
--scrollbar-active-thumb-bg: rgb(var(--mono-rgb-100) 0.2);
--scrollbar-bg: rgb(var(--mono-rgb-100) 0);
--scrollbar-thumb-bg: rgb(var(--mono-rgb-100) 0);
}`,
    },
    "ulu-canvas-fancycolor10": {
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background-image:
		linear-gradient(
			45deg,
			hsl(15deg 82% 54%) 0%,
			hsl(14deg 83% 54%) 11%,
			hsl(14deg 83% 53%) 22%,
			hsl(13deg 84% 53%) 33%,
			hsl(13deg 84% 53%) 44%,
			hsl(12deg 85% 53%) 56%,
			hsl(11deg 85% 53%) 67%,
			hsl(11deg 86% 52%) 78%,
			hsl(10deg 86% 52%) 89%,
			hsl(9deg 87% 52%) 100%
		);
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background-image:
	linear-gradient(
		45deg,
		hsl(0deg 87% 79%) 0%,
		hsl(360deg 87% 78%) 21%,
		hsl(360deg 87% 77%) 30%,
		hsl(359deg 87% 75%) 39%,
		hsl(359deg 87% 74%) 46%,
		hsl(359deg 87% 73%) 54%,
		hsl(359deg 86% 72%) 61%,
		hsl(358deg 86% 71%) 69%,
		hsl(358deg 86% 70%) 79%,
		hsl(358deg 85% 68%) 100%
	  );
}`,
    },
    "ulu-canvas-fancycolor20": {
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background: rgb(49 42 61) !important;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content .markdown-preview-view .inline-title, .theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content .markdown-preview-view {
color: rgb(213 98 66) !important;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background: rgb(240 105 78) !important;
}

.theme-light .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content .markdown-preview-view .inline-title, .theme-light .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content .markdown-preview-view {
color: rgb(227 222 221) !important;
}`,
    },
    "ulu-gummy-canvas1": {
      general: `.canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
border: none;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(15deg 82% 54%) 0%,
            hsl(14deg 83% 54%) 11%,
            hsl(14deg 83% 53%) 22%,
            hsl(13deg 84% 53%) 33%,
            hsl(13deg 84% 53%) 44%,
            hsl(12deg 85% 53%) 56%,
            hsl(11deg 85% 53%) 67%,
            hsl(11deg 86% 52%) 78%,
            hsl(10deg 86% 52%) 89%,
            hsl(9deg 87% 52%) 100%);
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(0deg 87% 79%) 0%,
            hsl(360deg 87% 78%) 21%,
            hsl(360deg 87% 77%) 30%,
            hsl(359deg 87% 75%) 39%,
            hsl(359deg 87% 74%) 46%,
            hsl(359deg 87% 73%) 54%,
            hsl(359deg 86% 72%) 61%,
            hsl(358deg 86% 71%) 69%,
            hsl(358deg 86% 70%) 79%,
            hsl(358deg 85% 68%) 100%);
}`,
    },
    "ulu-gradient-canvas1": {
      general: `.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content .markdown-preview-view .inline-title {
color: rgb(var(--color-red-rgb));
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content .markdown-preview-view .inline-title {
color: rgb(var(--color-orange-rgb));
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content .markdown-preview-view .inline-title {
color: rgb(var(--color-yellow-rgb));
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content .markdown-preview-view .inline-title {
color: rgb(var(--color-green-rgb));
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content .markdown-preview-view .inline-title {
color: rgb(var(--color-blue-rgb));
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content .markdown-preview-view .inline-title {
color: rgb(var(--color-purple-rgb));
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container, .ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container, .ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container, .ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container, .ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container, .ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
border: 1px solid rgb(var(--canvas-color));
}`,
      dark: `.ulu-gradient-canvas1 .theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background-image:
		linear-gradient(
			45deg,
			hsl(18deg 88% 66%) 0%,
			hsl(17deg 88% 65%) 21%,
			hsl(16deg 87% 63%) 30%,
			hsl(15deg 86% 62%) 39%,
			hsl(14deg 85% 60%) 46%,
			hsl(13deg 85% 59%) 54%,
			hsl(11deg 84% 57%) 61%,
			hsl(10deg 83% 56%) 69%,
			hsl(8deg 82% 55%) 79%,
			hsl(6deg 81% 54%) 100%
		);
}

.ulu-gradient-canvas1 .theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content p {
color: var(--text-on-accent);
}`,
      light: `.ulu-gradient-canvas1 .theme-light .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background-image:
	linear-gradient(
		45deg,
		hsl(0deg 87% 79%) 0%,
		hsl(360deg 87% 78%) 21%,
		hsl(360deg 87% 77%) 30%,
		hsl(359deg 87% 75%) 39%,
		hsl(359deg 87% 74%) 46%,
		hsl(359deg 87% 73%) 54%,
		hsl(359deg 86% 72%) 61%,
		hsl(358deg 86% 71%) 69%,
		hsl(358deg 86% 70%) 79%,
		hsl(358deg 85% 68%) 100%
	  );
}`,
    },
    "ulu-canvas-fancycolor11": {
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background-image:
		linear-gradient(
			135deg,
			hsl(29deg 82% 54%) 0%,
			hsl(28deg 83% 53%) 11%,
			hsl(28deg 83% 53%) 22%,
			hsl(27deg 84% 53%) 33%,
			hsl(26deg 84% 53%) 44%,
			hsl(25deg 85% 53%) 56%,
			hsl(25deg 85% 52%) 67%,
			hsl(24deg 86% 52%) 78%,
			hsl(23deg 86% 52%) 89%,
			hsl(22deg 87% 52%) 100%
		);
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background-image:
		linear-gradient(
			135deg,
			hsl(16deg 100% 76%) 0%,
			hsl(20deg 100% 76%) 21%,
			hsl(23deg 100% 76%) 30%,
			hsl(27deg 100% 77%) 39%,
			hsl(30deg 100% 77%) 46%,
			hsl(34deg 100% 77%) 54%,
			hsl(37deg 100% 78%) 61%,
			hsl(41deg 100% 79%) 69%,
			hsl(45deg 100% 80%) 79%,
			hsl(49deg 100% 81%) 100%
		);
}`,
    },
    "ulu-canvas-fancycolor21": {
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background: rgb(37 60 88) !important;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content .markdown-preview-view .inline-title, .theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content .markdown-preview-view {
color: rgb(228 110 71) !important;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background: rgb(229 193 114) !important;
}

.theme-light .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content .markdown-preview-view .inline-title, .theme-light .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content .markdown-preview-view {
color: rgb(52 68 69) !important;
}`,
    },
    "ulu-gummy-canvas2": {
      general: `.canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
border: none;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(29deg 82% 54%) 0%,
            hsl(28deg 83% 53%) 11%,
            hsl(28deg 83% 53%) 22%,
            hsl(27deg 84% 53%) 33%,
            hsl(26deg 84% 53%) 44%,
            hsl(25deg 85% 53%) 56%,
            hsl(25deg 85% 52%) 67%,
            hsl(24deg 86% 52%) 78%,
            hsl(23deg 86% 52%) 89%,
            hsl(22deg 87% 52%) 100%);
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(16deg 100% 76%) 0%,
            hsl(20deg 100% 76%) 21%,
            hsl(23deg 100% 76%) 30%,
            hsl(27deg 100% 77%) 39%,
            hsl(30deg 100% 77%) 46%,
            hsl(34deg 100% 77%) 54%,
            hsl(37deg 100% 78%) 61%,
            hsl(41deg 100% 79%) 69%,
            hsl(45deg 100% 80%) 79%,
            hsl(49deg 100% 81%) 100%);
}`,
    },
    "ulu-gradient-canvas2": {
      dark: `.ulu-gradient-canvas2 .theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background-image:
		linear-gradient(
			45deg,
			hsl(23deg 92% 71%) 0%,
			hsl(21deg 93% 71%) 21%,
			hsl(18deg 93% 71%) 30%,
			hsl(16deg 93% 72%) 39%,
			hsl(14deg 93% 72%) 46%,
			hsl(11deg 93% 72%) 54%,
			hsl(9deg 92% 73%) 61%,
			hsl(6deg 91% 73%) 69%,
			hsl(3deg 89% 73%) 79%,
			hsl(0deg 87% 73%) 100%
		);
}

.ulu-gradient-canvas2 .theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content p {
color: var(--text-on-accent);
}`,
      light: `.ulu-gradient-canvas2 .theme-light .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background-image:
	linear-gradient(
		45deg,
		hsl(16deg 100% 76%) 0%,
		hsl(20deg 100% 76%) 21%,
		hsl(23deg 100% 76%) 30%,
		hsl(27deg 100% 77%) 39%,
		hsl(30deg 100% 77%) 46%,
		hsl(34deg 100% 77%) 54%,
		hsl(37deg 100% 78%) 61%,
		hsl(41deg 100% 79%) 69%,
		hsl(45deg 100% 80%) 79%,
		hsl(49deg 100% 81%) 100%
	  );
}`,
    },
    "ulu-canvas-fancycolor12": {
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background-image:
		linear-gradient(
			135deg,
			hsl(44deg 82% 54%) 0%,
			hsl(44deg 83% 54%) 11%,
			hsl(45deg 83% 53%) 22%,
			hsl(45deg 84% 53%) 33%,
			hsl(46deg 84% 53%) 44%,
			hsl(46deg 85% 53%) 56%,
			hsl(47deg 85% 53%) 67%,
			hsl(47deg 86% 53%) 78%,
			hsl(48deg 86% 52%) 89%,
			hsl(48deg 87% 52%) 100%
		);
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background-image:
		linear-gradient(
			135deg,
			hsl(60deg 89% 72%) 0%,
			hsl(59deg 91% 73%) 21%,
			hsl(57deg 92% 74%) 30%,
			hsl(56deg 94% 76%) 39%,
			hsl(55deg 96% 77%) 46%,
			hsl(53deg 97% 78%) 54%,
			hsl(52deg 98% 79%) 61%,
			hsl(51deg 99% 80%) 69%,
			hsl(50deg 100% 80%) 79%,
			hsl(49deg 100% 81%) 100%
		);
}`,
    },
    "ulu-canvas-fancycolor22": {
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background: rgb(56 61 71) !important;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content .markdown-preview-view .inline-title, .theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content .markdown-preview-view {
color: rgb(201 173 116) !important;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background: rgb(239 227 119) !important;
}

.theme-light .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content .markdown-preview-view .inline-title, .theme-light .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content .markdown-preview-view {
color: rgb(63 27 117) !important;
}`,
    },
    "ulu-gummy-canvas3": {
      general: `.canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
border: none;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(44deg 82% 54%) 0%,
            hsl(44deg 83% 54%) 11%,
            hsl(45deg 83% 53%) 22%,
            hsl(45deg 84% 53%) 33%,
            hsl(46deg 84% 53%) 44%,
            hsl(46deg 85% 53%) 56%,
            hsl(47deg 85% 53%) 67%,
            hsl(47deg 86% 53%) 78%,
            hsl(48deg 86% 52%) 89%,
            hsl(48deg 87% 52%) 100%);
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(60deg 89% 72%) 0%,
            hsl(59deg 91% 73%) 21%,
            hsl(57deg 92% 74%) 30%,
            hsl(56deg 94% 76%) 39%,
            hsl(55deg 96% 77%) 46%,
            hsl(53deg 97% 78%) 54%,
            hsl(52deg 98% 79%) 61%,
            hsl(51deg 99% 80%) 69%,
            hsl(50deg 100% 80%) 79%,
            hsl(49deg 100% 81%) 100%);
}`,
    },
    "ulu-gradient-canvas3": {
      dark: `.ulu-gradient-canvas3 .theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background-image:
		linear-gradient(
			45deg,
			hsl(46deg 95% 56%) 0%,
			hsl(44deg 95% 55%) 21%,
			hsl(43deg 94% 54%) 30%,
			hsl(41deg 94% 53%) 39%,
			hsl(39deg 93% 53%) 46%,
			hsl(37deg 92% 53%) 54%,
			hsl(35deg 91% 52%) 61%,
			hsl(34deg 89% 52%) 69%,
			hsl(32deg 88% 52%) 79%,
			hsl(29deg 86% 52%) 100%
			);
}

.ulu-gradient-canvas3 .theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content p {
color: var(--text-on-accent);
}`,
      light: `.ulu-gradient-canvas3 .theme-light .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background-image:
	linear-gradient(
		45deg,
		hsl(60deg 89% 72%) 0%,
		hsl(59deg 91% 73%) 21%,
		hsl(57deg 92% 74%) 30%,
		hsl(56deg 94% 76%) 39%,
		hsl(55deg 96% 77%) 46%,
		hsl(53deg 97% 78%) 54%,
		hsl(52deg 98% 79%) 61%,
		hsl(51deg 99% 80%) 69%,
		hsl(50deg 100% 80%) 79%,
		hsl(49deg 100% 81%) 100%
	  );
}`,
    },
    "ulu-canvas-fancycolor13": {
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background-image:
		linear-gradient(
			135deg,
			hsl(98deg 32% 45%) 0%,
			hsl(101deg 31% 44%) 11%,
			hsl(104deg 30% 43%) 22%,
			hsl(108deg 29% 41%) 33%,
			hsl(112deg 28% 40%) 44%,
			hsl(116deg 27% 39%) 56%,
			hsl(120deg 26% 37%) 67%,
			hsl(124deg 27% 35%) 78%,
			hsl(128deg 28% 33%) 89%,
			hsl(132deg 29% 31%) 100%
		);
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background-image:
		linear-gradient(
			135deg,
			hsl(99deg 75% 75%) 0%,
			hsl(103deg 75% 77%) 21%,
			hsl(108deg 75% 79%) 30%,
			hsl(113deg 76% 81%) 39%,
			hsl(119deg 76% 83%) 46%,
			hsl(124deg 77% 84%) 54%,
			hsl(129deg 79% 85%) 61%,
			hsl(133deg 80% 86%) 69%,
			hsl(137deg 81% 86%) 79%,
			hsl(141deg 81% 87%) 100%
		);
}`,
    },
    "ulu-canvas-fancycolor23": {
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background: rgb(45 51 62) !important;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content .markdown-preview-view .inline-title, .theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content .markdown-preview-view {
color: rgb(125 166 80) !important;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background: rgb(50 159 130) !important;
}

.theme-light .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content .markdown-preview-view .inline-title, .theme-light .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content .markdown-preview-view {
color: rgb(230 208 112) !important;
}`,
    },
    "ulu-gummy-canvas4": {
      general: `.canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
border: none;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(98deg 32% 45%) 0%,
            hsl(101deg 31% 44%) 11%,
            hsl(104deg 30% 43%) 22%,
            hsl(108deg 29% 41%) 33%,
            hsl(112deg 28% 40%) 44%,
            hsl(116deg 27% 39%) 56%,
            hsl(120deg 26% 37%) 67%,
            hsl(124deg 27% 35%) 78%,
            hsl(128deg 28% 33%) 89%,
            hsl(132deg 29% 31%) 100%);
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(99deg 75% 75%) 0%,
            hsl(103deg 75% 77%) 21%,
            hsl(108deg 75% 79%) 30%,
            hsl(113deg 76% 81%) 39%,
            hsl(119deg 76% 83%) 46%,
            hsl(124deg 77% 84%) 54%,
            hsl(129deg 79% 85%) 61%,
            hsl(133deg 80% 86%) 69%,
            hsl(137deg 81% 86%) 79%,
            hsl(141deg 81% 87%) 100%);
}`,
    },
    "ulu-gradient-canvas4": {
      dark: `.ulu-gradient-canvas4 .theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background-image:
		linear-gradient(
			45deg,
			hsl(145deg 84% 73%) 0%,
			hsl(145deg 78% 71%) 21%,
			hsl(146deg 74% 68%) 30%,
			hsl(146deg 70% 66%) 39%,
			hsl(146deg 67% 63%) 46%,
			hsl(147deg 64% 60%) 54%,
			hsl(148deg 61% 57%) 61%,
			hsl(148deg 60% 55%) 69%,
			hsl(149deg 58% 52%) 79%,
			hsl(150deg 61% 48%) 100%
		);
}

.ulu-gradient-canvas4 .theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content p {
color: var(--text-on-accent);
}`,
      light: `.ulu-gradient-canvas4 .theme-light .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background-image:
	linear-gradient(
		45deg,
		hsl(99deg 75% 75%) 0%,
		hsl(103deg 75% 77%) 21%,
		hsl(108deg 75% 79%) 30%,
		hsl(113deg 76% 81%) 39%,
		hsl(119deg 76% 83%) 46%,
		hsl(124deg 77% 84%) 54%,
		hsl(129deg 79% 85%) 61%,
		hsl(133deg 80% 86%) 69%,
		hsl(137deg 81% 86%) 79%,
		hsl(141deg 81% 87%) 100%
	  );
}`,
    },
    "ulu-canvas-fancycolor14": {
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background-image:
		linear-gradient(
			135deg,
			hsl(218deg 82% 54%) 0%,
			hsl(218deg 83% 53%) 11%,
			hsl(218deg 85% 52%) 22%,
			hsl(219deg 85% 51%) 33%,
			hsl(219deg 86% 51%) 44%,
			hsl(220deg 87% 50%) 56%,
			hsl(221deg 87% 50%) 67%,
			hsl(223deg 87% 51%) 78%,
			hsl(224deg 87% 51%) 89%,
			hsl(227deg 87% 52%) 100%
		);
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background-image:
		linear-gradient(
			135deg,
			hsl(187deg 100% 89%) 0%,
			hsl(187deg 100% 87%) 21%,
			hsl(187deg 100% 85%) 30%,
			hsl(187deg 100% 83%) 39%,
			hsl(187deg 100% 81%) 46%,
			hsl(187deg 100% 79%) 54%,
			hsl(187deg 100% 77%) 61%,
			hsl(186deg 100% 75%) 69%,
			hsl(186deg 100% 72%) 79%,
			hsl(186deg 100% 69%) 100%
		);
}`,
    },
    "ulu-canvas-fancycolor24": {
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background: rgb(57 83 100) !important;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content .markdown-preview-view .inline-title, .theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content .markdown-preview-view {
color: rgb(129 188 250) !important;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background: rgb(98 106 221) !important;
}

.theme-light .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content .markdown-preview-view .inline-title, .theme-light .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content .markdown-preview-view {
color: rgb(240 214 202) !important;
}`,
    },
    "ulu-gummy-canvas5": {
      general: `.canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
border: none;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content p {
color: white;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(218deg 82% 54%) 0%,
            hsl(218deg 83% 53%) 11%,
            hsl(218deg 85% 52%) 22%,
            hsl(219deg 85% 51%) 33%,
            hsl(219deg 86% 51%) 44%,
            hsl(220deg 87% 50%) 56%,
            hsl(221deg 87% 50%) 67%,
            hsl(223deg 87% 51%) 78%,
            hsl(224deg 87% 51%) 89%,
            hsl(227deg 87% 52%) 100%);
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(187deg 100% 89%) 0%,
            hsl(187deg 100% 87%) 21%,
            hsl(187deg 100% 85%) 30%,
            hsl(187deg 100% 83%) 39%,
            hsl(187deg 100% 81%) 46%,
            hsl(187deg 100% 79%) 54%,
            hsl(187deg 100% 77%) 61%,
            hsl(186deg 100% 75%) 69%,
            hsl(186deg 100% 72%) 79%,
            hsl(186deg 100% 69%) 100%);
}`,
    },
    "ulu-gradient-canvas5": {
      dark: `.ulu-gradient-canvas5 .theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content p {
color: var(--text-on-accent);
}

.ulu-gradient-canvas5 .theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background-image:
		linear-gradient(
			45deg,
			hsl(210deg 90% 80%) 0%,
			hsl(211deg 91% 77%) 21%,
			hsl(212deg 92% 74%) 30%,
			hsl(212deg 93% 71%) 39%,
			hsl(213deg 93% 68%) 46%,
			hsl(213deg 93% 65%) 54%,
			hsl(213deg 92% 61%) 61%,
			hsl(213deg 91% 58%) 69%,
			hsl(213deg 90% 54%) 79%,
			hsl(212deg 93% 49%) 100%
		);
}`,
      light: `.ulu-gradient-canvas5 .theme-light .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background-image:
	linear-gradient(
  45deg,
  hsl(187deg 100% 89%) 0%,
  hsl(187deg 100% 87%) 21%,
  hsl(187deg 100% 85%) 30%,
  hsl(187deg 100% 83%) 39%,
  hsl(187deg 100% 81%) 46%,
  hsl(187deg 100% 79%) 54%,
  hsl(187deg 100% 77%) 61%,
  hsl(186deg 100% 75%) 69%,
  hsl(186deg 100% 72%) 79%,
  hsl(186deg 100% 69%) 100%
);
}`,
    },
    "ulu-canvas-fancycolor15": {
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background-image:
		linear-gradient(
			135deg,
			hsl(308deg 33% 41%) 0%,
			hsl(308deg 35% 41%) 11%,
			hsl(308deg 37% 40%) 22%,
			hsl(308deg 40% 39%) 33%,
			hsl(308deg 42% 39%) 44%,
			hsl(308deg 45% 38%) 56%,
			hsl(308deg 47% 37%) 67%,
			hsl(308deg 51% 36%) 78%,
			hsl(308deg 54% 35%) 89%,
			hsl(308deg 58% 35%) 100%
		);
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background-image:
		linear-gradient(
			135deg,
			hsl(298deg 68% 90%) 0%,
			hsl(287deg 68% 89%) 21%,
			hsl(277deg 68% 89%) 30%,
			hsl(267deg 67% 88%) 39%,
			hsl(258deg 65% 87%) 46%,
			hsl(249deg 63% 87%) 54%,
			hsl(240deg 61% 86%) 61%,
			hsl(232deg 62% 83%) 69%,
			hsl(225deg 62% 81%) 79%,
			hsl(220deg 61% 79%) 100%
		);
}`,
    },
    "ulu-canvas-fancycolor25": {
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background: rgb(55 53 76) !important;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content .markdown-preview-view .inline-title, .theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content .markdown-preview-view {
color: rgb(167 233 216) !important;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background: rgb(249 220 195) !important;
}

.theme-light .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content .markdown-preview-view .inline-title, .theme-light .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content .markdown-preview-view {
color: rgb(123 136 208) !important;
}`,
    },
    "ulu-gummy-canvas6": {
      general: `.canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
border: none;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content p {
color: white;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(308deg 33% 41%) 0%,
            hsl(308deg 35% 41%) 11%,
            hsl(308deg 37% 40%) 22%,
            hsl(308deg 40% 39%) 33%,
            hsl(308deg 42% 39%) 44%,
            hsl(308deg 45% 38%) 56%,
            hsl(308deg 47% 37%) 67%,
            hsl(308deg 51% 36%) 78%,
            hsl(308deg 54% 35%) 89%,
            hsl(308deg 58% 35%) 100%);
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background-image:
        linear-gradient(45deg,
            hsl(298deg 68% 90%) 0%,
            hsl(287deg 68% 89%) 21%,
            hsl(277deg 68% 89%) 30%,
            hsl(267deg 67% 88%) 39%,
            hsl(258deg 65% 87%) 46%,
            hsl(249deg 63% 87%) 54%,
            hsl(240deg 61% 86%) 61%,
            hsl(232deg 62% 83%) 69%,
            hsl(225deg 62% 81%) 79%,
            hsl(220deg 61% 79%) 100%);
}`,
    },
    "ulu-gradient-canvas6": {
      dark: `.ulu-gradient-canvas6 .theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content p {
color: var(--text-on-accent);
}

.ulu-gradient-canvas6 .theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background-image:
		linear-gradient(
			45deg,
			hsl(276deg 91% 79%) 0%,
			hsl(274deg 88% 77%) 21%,
			hsl(272deg 85% 75%) 30%,
			hsl(270deg 83% 74%) 39%,
			hsl(267deg 81% 72%) 46%,
			hsl(265deg 79% 71%) 54%,
			hsl(262deg 78% 69%) 61%,
			hsl(260deg 76% 68%) 69%,
			hsl(257deg 75% 66%) 79%,
			hsl(254deg 74% 65%) 100%
		);
}`,
      light: `.ulu-gradient-canvas6 .theme-light .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background-image:
	linear-gradient(
		45deg,
		hsl(298deg 68% 90%) 0%,
		hsl(287deg 68% 89%) 21%,
		hsl(277deg 68% 89%) 30%,
		hsl(267deg 67% 88%) 39%,
		hsl(258deg 65% 87%) 46%,
		hsl(249deg 63% 87%) 54%,
		hsl(240deg 61% 86%) 61%,
		hsl(232deg 62% 83%) 69%,
		hsl(225deg 62% 81%) 79%,
		hsl(220deg 61% 79%) 100%
	  );
}`,
    },
    "ulu-canvas-border0": {
      general: `.ulu-canvas-border0 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
border: none;
}`,
    },
    "ulu-canvas-border1": {
      general: `.ulu-canvas-border1 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
border: none;
}`,
    },
    "ulu-canvas-border2": {
      general: `.ulu-canvas-border2 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
border: none;
}`,
    },
    "ulu-canvas-border3": {
      general: `.ulu-canvas-border3 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
border: none;
}`,
    },
    "ulu-canvas-border4": {
      general: `.ulu-canvas-border4 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
border: none;
}`,
    },
    "ulu-canvas-border5": {
      general: `.ulu-canvas-border5 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
border: none;
}`,
    },
    "ulu-faintselect": {
      general: `.ulu-faintselect {
--text-selection: hsl(var(--color-accent-hsl) 0.05);
}`,
    },
    "ulu-accent-title": {
      general: `.ulu-accent-title {
--inline-title-color: var(--color-accent);
}`,
    },
    "ulu-canvas-center": {
      general: `.ulu-canvas-center .canvas-node-container {
display: flex;
text-align: center;
align-items: center;
justify-content: center;
}`,
    },
    "ulu-headings-opn": {
      general: `.ulu-headings-opn {
--h1-size: 1.5811em;
--h2-size: 2.5em;
--h3-size: 1.9882em;
--h4-size: 1.3em;
--h5-size: 1em;
--h6-size: 0.7953em;
}`,
    },
    "ulu-headings-dec": {
      general: `.ulu-headings-dec {
--h1-size: 2.5em;
--h2-size: 1.842em;
--h3-size: 1.3572em;
--h4-size: 1.250em;
--h5-size: 1em;
--h6-size: 0.7368em;
}`,
    },
    "ulu-headings-flt": {
      general: `.ulu-headings-flt {
--h1-size: 1em;
--h2-size: 1em;
--h3-size: 1em;
--h4-size: 1em;
--h5-size: 1em;
--h6-size: 1em;
}`,
    },
    "ulu-colorfo-headings": {
      general: `.ulu-colorfo-headings {
--h1-color: var(--color-red);
--h2-color: var(--color-green);
--h3-color: var(--color-orange);
--h4-color: var(--color-yellow);
--h5-color: var(--color-cyan);
--h6-color: var(--color-purple);
}`,
    },
    "ulu-header1-override": {
      general: `.ulu-header1-override {
--h1-size: var(--ulu-header1-override-size);
}`,
    },
    "ulu-header-line-h1": {
      general: `.ulu-header-line-h1 .markdown-reading-view h1:not(.embedded-note-title), .ulu-header-line-h1 .mod-cm6 .cm-editor .HyperMD-header-1 {
padding-bottom: 0.4em;
border-bottom: 1px solid var(--o-header-line-accent);
margin-block-end: 0.6em;
}`,
    },
    "ulu-header-line-h2": {
      general: `.ulu-header-line-h2 .markdown-reading-view h2, .ulu-header-line-h2 .mod-cm6 .cm-editor .HyperMD-header-2 {
padding-bottom: 0.4em;
border-bottom: 1px solid var(--o-header-line-accent);
margin-block-end: 0.6em;
}`,
    },
    "ulu-header-line-h3": {
      general: `.ulu-header-line-h3 .markdown-reading-view h3, .ulu-header-line-h3 .mod-cm6 .cm-editor .HyperMD-header-3 {
padding-bottom: 0.4em;
border-bottom: 1px solid var(--o-header-line-accent);
margin-block-end: 0.6em;
}`,
    },
    "ulu-header-line-h4": {
      general: `.ulu-header-line-h4 .markdown-reading-view h4, .ulu-header-line-h4 .mod-cm6 .cm-editor .HyperMD-header-4 {
padding-bottom: 0.4em;
border-bottom: 1px solid var(--o-header-line-accent);
margin-block-end: 0.6em;
}`,
    },
    "ulu-header-line-h5": {
      general: `.ulu-header-line-h5 .markdown-reading-view h5, .ulu-header-line-h5 .mod-cm6 .cm-editor .HyperMD-header-5 {
padding-bottom: 0.4em;
border-bottom: 1px solid var(--o-header-line-accent);
margin-block-end: 0.6em;
}`,
    },
    "ulu-header-line-h6": {
      general: `.ulu-header-line-h6 .markdown-reading-view h6, .ulu-header-line-h6 .mod-cm6 .cm-editor .HyperMD-header-6 {
padding-bottom: 0.4em;
border-bottom: 1px solid var(--o-header-line-accent);
margin-block-end: 0.6em;
}`,
    },
  },
};
