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
    "ulu-flat": {
      general: `body.ulu-flat {
--shadow-s: none;
--shadow-l: none;
--shadow-lm-only: none;
--sbs: none;
--lbs: none;
--glass-border-light: transparent;
--glass-border-dark: transparent;
}

body.ulu-flat .nav-folder {
background-image: none !important;
background: transparent !important;
background-color: transparent !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-flat .nav-files-container .tree-item-self {
background: transparent !important;
}

body.ulu-flat .menu {
background: var(--color-base-25) !important;
background-color: var(--color-base-25) !important;
background-image: none !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-flat .markdown-preview-view table, body.ulu-flat .markdown-source-view.mod-cm6 table {
background-image: none !important;
border: none !important;
box-shadow: none !important;
background-color: var(--color-base-30) !important;
}

body.ulu-flat .markdown-source-view.mod-cm6 table th::after, body.ulu-flat .markdown-preview-view table th::after {
background: rgb(from var(--mono-rgb-100) r g b/0.12) !important;
}

body.ulu-flat .markdown-source-view.mod-cm6 table tr, body.ulu-flat .markdown-preview-view table tr {
background: linear-gradient(
            rgb(from var(--mono-rgb-100) r g b/0.08),
            rgb(from var(--mono-rgb-100) r g b/0.08)
        )
        no-repeat bottom/100% 1px !important;
}

body.ulu-flat .markdown-source-view.mod-cm6 table td:not(:last-child)::after, body.ulu-flat .markdown-preview-view table td:not(:last-child)::after {
top: 0 !important;
bottom: 0 !important;
}

body.is-mobile .workspace > .mod-root .view-header {
background-color: var(--color-base-25) !important;
border-bottom: 1px solid var(--background-modifier-border) !important;
}

body.is-mobile.is-floating-nav.is-phone .view-header {
margin-top: 0.3em;
}

body.is-mobile .workspace > .mod-root {
background-color: var(--color-base-25) !important;
}

body.is-mobile .workspace-split.mod-root .view-content {
background-color: var(--color-base-25) !important;
}

body.is-mobile .view-header-title-container {
padding-top: 8px;
}

body.is-mobile .view-header .view-action, body.is-mobile .view-header .clickable-icon, body.is-mobile .view-header .view-actions, body.is-phone .view-header .view-header-left .view-action, body.is-phone .view-header .view-header-left .view-action .clickable-icon {
border: none !important;
background: transparent !important;
background-image: none !important;
background-color: transparent !important;
box-shadow: none !important;
-webkit-tap-highlight-color: transparent !important;
}

body.is-mobile .mobile-navbar {
border-top: 1px solid var(--background-modifier-border) !important;
background: var(--color-base-25) !important;
box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05) !important;
}

body.ulu-flat .vertical-tab-content, body.ulu-flat .horizontal-tab-content {
background-color: var(--color-base-20) !important;
}

body.ulu-flat:not(.is-mobile) .workspace-split.mod-left-split .workspace-sidedock-vault-profile .workspace-drawer-vault-switcher:hover {
background-image: none !important;
background: none !important;
background-color: var(--color-base-30) !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-flat .community-item:hover {
transform: none;
background-image: none !important;
background: none !important;
background-color: var(--color-base-30) !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-flat .workspace .mod-root .workspace-tabs.mod-stacked .workspace-tab-container .workspace-tab-header {
background-image: none !important;
background: none !important;
background-color: var(--color-base-25) !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-flat .workspace-tab-header-new-tab, body.ulu-flat .workspace-tab-header-tab-list, body.ulu-flat .sidebar-toggle-button:not(.mod-left) {
border: none !important;
box-shadow: none !important;
background: transparent !important;
}

body.ulu-flat .clickable-icon {
border: none !important;
box-shadow: none !important;
}

body.ulu-flat textarea, body.ulu-flat input[type="text"], body.ulu-flat input[type="search"], body.ulu-flat input[type="email"], body.ulu-flat input[type="password"], body.ulu-flat input[type="number"], body.ulu-flat input[type="date"], body.ulu-flat input[type="datetime-local"], body.ulu-flat input.metadata-input-text, body.ulu-flat .multi-select-container, body.ulu-flat select, body.ulu-flat .combobox-button, body.ulu-flat .dropdown {
border: none !important;
box-shadow: none !important;
background-color: rgb(from var(--mono-rgb-100) r g b/0.06) !important;
}

body.ulu-flat button:not(.clickable-icon):not(.mod-cta) {
border: none !important;
box-shadow: none !important;
background-color: rgb(from var(--mono-rgb-100) r g b/0.06) !important;
background-image: none !important;
}

body.ulu-flat button:not(.clickable-icon):not(.mod-cta):hover {
background-color: rgb(from var(--mono-rgb-100) r g b/0.1) !important;
transform: none !important;
text-shadow: none !important;
box-shadow: none !important;
border: none !important;
}

body.ulu-flat button.mod-cta {
border: none !important;
box-shadow: none !important;
background-image: none !important;
background-color: var(--color-accent) !important;
color: var(--text-on-accent) !important;
}

body.ulu-flat button.mod-cta::after {
display: none !important;
}

body.ulu-flat button.mod-cta:hover {
background-color: rgb(from var(--color-accent) r g b/0.85) !important;
box-shadow: none !important;
}

body.ulu-flat .callout, body.ulu-flat .callout:hover {
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important;
transform: none !important;
background-image: none !important;
background-color: rgba(var(--callout-color), 0.08) !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-flat .nav-folder-title .nav-folder-title-content {
background: none !important;
background-image: none !important;
border: none !important;
box-shadow: none !important;
border-radius: 8px !important;
}

body.ulu-flat .nav-folder-title:hover .nav-folder-title-content {
background: rgb(from var(--mono-rgb-100) r g b/0.06) !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-flat .nav-folder:not(.is-collapsed) > .nav-folder-title .nav-folder-title-content {
background: rgb(from var(--mono-rgb-100) r g b/0.08) !important;
background-image: none !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-flat .nav-folder:has(.nav-file-title.is-active) > .nav-folder-title .nav-folder-title-content, body.ulu-flat .nav-folder:has(.nav-file-title.is-active):hover > .nav-folder-title .nav-folder-title-content {
background: rgb(from var(--color-accent) r g b/0.12) !important;
background-image: none !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-flat .nav-file-title.is-active .nav-file-title-content {
background: rgb(from var(--color-accent) r g b/0.15) !important;
background-image: none !important;
border: none !important;
box-shadow: none !important;
text-shadow: none !important;
}

body.ulu-flat .nav-file-title:not(.is-active):hover .nav-file-title-content {
background-color: rgb(from var(--mono-rgb-100) r g b/0.06) !important;
}

body.ulu-flat .tree-item-self .tree-item-icon {
background: transparent !important;
border: none !important;
box-shadow: none !important;
opacity: 0.75;
transform: none !important;
}

body.ulu-flat .tree-item-self .tree-item-icon:hover {
background: transparent !important;
border: none !important;
box-shadow: none !important;
transform: none !important;
opacity: 1;
}

body.ulu-blur-prompt .prompt {
background: var(--color-base-25) !important;
background-color: var(--color-base-25) !important;
background-image: none !important;
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-blur-modal .modal {
background: var(--color-base-25) !important;
background-color: var(--color-base-25) !important;
background-image: none !important;
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-blur-menu .menu {
background: var(--color-base-25) !important;
background-color: var(--color-base-25) !important;
background-image: none !important;
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-status-pills .status-bar {
background-color: transparent !important;
}

body.ulu-status-pills .status-bar-item {
border: none !important;
box-shadow: none !important;
background-color: var(--color-base-30) !important;
background-image: none !important;
}

body.ulu-status-pills .status-bar-item:hover {
transform: none !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-status-pills-blur .status-bar-item {
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-status-pills-blur .status-bar-item:hover {
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important;
border: none !important;
box-shadow: none !important;
}`,
      dark: `body.ulu-flat .modal, body.ulu-flat .prompt, body.ulu-flat .suggestion-container, body.ulu-flat .workspace-tab-header, body.ulu-flat .vertical-tab-content, body.ulu-flat .horizontal-tab-content, body.ulu-flat:not(.is-mobile) .workspace-split.mod-root .view-content, body.ulu-flat .view-actions, body.ulu-flat:not(.is-mobile) .view-header-title-container, body.ulu-flat:not(.is-mobile) .view-header-left, body.ulu-flat .status-bar, body.ulu-flat:not(.is-mobile) .workspace-split.mod-left-split .workspace-sidedock-vault-profile .workspace-drawer-vault-switcher, body.ulu-flat .tooltip, body.ulu-flat .search-result-file-matches, body.ulu-flat .metadata-container, body.theme-dark .community-modal-controls, body.theme-light .community-modal-controls, body.ulu-flat .community-item, body.theme-dark .workspace-tab-header-container-inner, body.theme-light .workspace-tab-header-container-inner, body.theme-light.ulu-adaptive-lt .workspace-tab-header-container-inner, body.ulu-flat .graph-view-container, body.ulu-flat .graph-controls:not(.is-close) {
background-image: none !important;
background: none !important;
background-color: var(--color-base-25) !important;
border: none !important;
box-shadow: none !important;
}

body.theme-dark .workspace-split.mod-root .workspace-tab-header.is-active .workspace-tab-header-inner, body.theme-dark .workspace-split.mod-root .workspace-tab-header.is-active:hover .workspace-tab-header-inner, body.theme-light .workspace-split.mod-root .workspace-tab-header.is-active .workspace-tab-header-inner, body.theme-light .workspace-split.mod-root .workspace-tab-header.is-active:hover .workspace-tab-header-inner, body.theme-dark .mod-left-split .workspace-tab-header.has-active-menu, body.theme-dark .mod-right-split .workspace-tab-header.has-active-menu, body.theme-dark .mod-left-split .workspace-tab-header.is-active, body.theme-dark .mod-right-split .workspace-tab-header.is-active, body.theme-light .mod-left-split .workspace-tab-header.has-active-menu, body.theme-light .mod-right-split .workspace-tab-header.has-active-menu, body.theme-light .mod-left-split .workspace-tab-header.is-active, body.theme-light .mod-right-split .workspace-tab-header.is-active {
background-image: none !important;
background: none !important;
background-color: var(--color-base-30) !important;
border: none !important;
box-shadow: none !important;
color: var(--text-normal) !important;
font-weight: 600 !important;
}

body.theme-dark .mod-root .workspace-tab-header-tab-list, body.theme-dark .mod-root .workspace-tab-header-new-tab, body.theme-dark .mod-root .sidebar-toggle-button, body.theme-light .mod-root .workspace-tab-header-tab-list, body.theme-light .mod-root .workspace-tab-header-new-tab, body.theme-light .mod-root .sidebar-toggle-button {
background: transparent !important;
background-color: transparent !important;
border: none !important;
box-shadow: none !important;
}`,
      light: `body.ulu-flat .modal, body.ulu-flat .prompt, body.ulu-flat .suggestion-container, body.ulu-flat .workspace-tab-header, body.ulu-flat .vertical-tab-content, body.ulu-flat .horizontal-tab-content, body.ulu-flat:not(.is-mobile) .workspace-split.mod-root .view-content, body.ulu-flat .view-actions, body.ulu-flat:not(.is-mobile) .view-header-title-container, body.ulu-flat:not(.is-mobile) .view-header-left, body.ulu-flat .status-bar, body.ulu-flat:not(.is-mobile) .workspace-split.mod-left-split .workspace-sidedock-vault-profile .workspace-drawer-vault-switcher, body.ulu-flat .tooltip, body.ulu-flat .search-result-file-matches, body.ulu-flat .metadata-container, body.theme-dark .community-modal-controls, body.theme-light .community-modal-controls, body.ulu-flat .community-item, body.theme-dark .workspace-tab-header-container-inner, body.theme-light .workspace-tab-header-container-inner, body.ulu-adaptive-lt .workspace-tab-header-container-inner, body.ulu-flat .graph-view-container, body.ulu-flat .graph-controls:not(.is-close) {
background-image: none !important;
background: none !important;
background-color: var(--color-base-25) !important;
border: none !important;
box-shadow: none !important;
}

body.theme-dark .workspace-split.mod-root .workspace-tab-header.is-active .workspace-tab-header-inner, body.theme-dark .workspace-split.mod-root .workspace-tab-header.is-active:hover .workspace-tab-header-inner, body.theme-light .workspace-split.mod-root .workspace-tab-header.is-active .workspace-tab-header-inner, body.theme-light .workspace-split.mod-root .workspace-tab-header.is-active:hover .workspace-tab-header-inner, body.theme-dark .mod-left-split .workspace-tab-header.has-active-menu, body.theme-dark .mod-right-split .workspace-tab-header.has-active-menu, body.theme-dark .mod-left-split .workspace-tab-header.is-active, body.theme-dark .mod-right-split .workspace-tab-header.is-active, body.theme-light .mod-left-split .workspace-tab-header.has-active-menu, body.theme-light .mod-right-split .workspace-tab-header.has-active-menu, body.theme-light .mod-left-split .workspace-tab-header.is-active, body.theme-light .mod-right-split .workspace-tab-header.is-active {
background-image: none !important;
background: none !important;
background-color: var(--color-base-30) !important;
border: none !important;
box-shadow: none !important;
color: var(--text-normal) !important;
font-weight: 600 !important;
}

body.theme-dark .mod-root .workspace-tab-header-tab-list, body.theme-dark .mod-root .workspace-tab-header-new-tab, body.theme-dark .mod-root .sidebar-toggle-button, body.theme-light .mod-root .workspace-tab-header-tab-list, body.theme-light .mod-root .workspace-tab-header-new-tab, body.theme-light .mod-root .sidebar-toggle-button {
background: transparent !important;
background-color: transparent !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-flat:not(.is-phone) .vertical-tab-nav-item.is-active, body.ulu-flat:not(.is-phone) .vertical-tab-nav-item.is-active:hover, body.ulu-adaptive-lt:not(.is-phone) .vertical-tab-nav-item.is-active, body.ulu-adaptive-lt:not(.is-phone) .vertical-tab-nav-item.is-active:hover {
background-image: none !important;
background: none !important;
background-color: var(--color-base-25) !important;
border: none !important;
box-shadow: none !important;
text-shadow: none !important;
transform: none !important;
}

body.ulu-adaptive-lt .nav-folder-title .nav-folder-title-content, body.ulu-adaptive-lt .nav-folder-title:hover .nav-folder-title-content, body.ulu-adaptive-lt .nav-folder:not(.is-collapsed) > .nav-folder-title .nav-folder-title-content {
background-image: none !important;
border: none !important;
box-shadow: none !important;
}`,
    },
    "ulu-red": {
      dark: `.ulu-red {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--color-accent: hsl(var(--color-red-hsl));
--color-accent-rgb: var(--color-red-rgb);
--color-accent-hsl: var(--color-red-hsl);
--color-accent-1: var(--color-blue);
--color-accent-1-rgb: var(--color-blue-rgb);
}

.ulu-red-d.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--accent-h: 75;
--accent-s: 21%;
--accent-l: 57%;
--mono-rgb-0: #000000;
--mono-rgb-100: #4d8a8a;
--canvas-color: var(--background-modifier-border);
--proxy-00: #171212;
--proxy-10: #2e2424;
--proxy-20: #110e0e;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #231919;
--color-base-30: #423535;
--color-base-35: #635858;
--color-base-40: #4e3434;
--color-base-50: #815757;
--color-base-60: #b18a8a;
--color-base-70: #cebdbd;
--color-base-100: #d6b3b3;
--gradient-bg-primary: linear-gradient(
        135deg,
        #221b1b 1.62%,
        #171212 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #161010 1.62%,
        #110e0e 50.72%
    ) !important;
--background-modifier-border-alt: #4e3434 !important;
--glass-border-light: #4d8a8a;
--glass-border-dark: #696969;
--color-red: #9a453c;
--color-red-rgb: 154, 69, 60;
--color-red-hsl: 6, 44%, 42%;
--color-green: #8ba481;
--color-green-rgb: 139, 164, 129;
--color-green-hsl: 103, 16%, 57%;
--color-orange: #f1bb8a;
--color-orange-rgb: 241, 187, 138;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow: #e4bc7f;
--color-yellow-rgb: 228, 188, 127;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan: #9bc7bd;
--color-cyan-rgb: 155, 199, 189;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue: #175c59;
--color-blue-rgb: 23, 92, 89;
--color-blue-hsl: 177, 60%, 23%;
--color-purple: #a69ab5;
--color-purple-rgb: 166, 154, 181;
--color-purple-hsl: 267, 15%, 66%;
--color-pink: #ef796a;
--color-pink-rgb: 239, 121, 106;
--color-pink-hsl: 7, 81%, 68%;
}`,
      light: `.ulu-red {
--color-accent: hsl(var(--color-red-hsl));
--color-accent-rgb: var(--color-red-rgb);
--color-accent-hsl: var(--color-red-hsl);
--color-accent-1: var(--color-blue);
--color-accent-1-rgb: var(--color-blue-rgb);
}

.ulu-red-l {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--accent-h: 13;
--accent-s: 68%;
--accent-l: 63%;
--mono-rgb-0: #ffffff;
--mono-rgb-100: #1a0f0f;
--canvas-color: var(--background-modifier-border);
--proxy-00: #fdf5f5;
--proxy-10: #f9ebeb;
--proxy-20: #f5e0e0;
--color-base-00: var(--proxy-00);
--color-base-05: #ffffff;
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #f0d6d6;
--color-base-30: #ecccce;
--color-base-35: #e8c2c2;
--color-base-40: #e3b8b8;
--color-base-50: #b58989;
--color-base-60: #885c5c;
--color-base-70: #5c3232;
--color-base-100: #291212;
--gradient-bg-primary: linear-gradient(
        135deg,
        #f3d5d5 1.62%,
        #edcbcb 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #ebd9d9 1.62%,
        #e7c9c9 50.72%
    ) !important;
--background-modifier-border-alt: #f0d6d6 !important;
--glass-border-light: #ffffff;
--glass-border-dark: #ecccce;
--color-red: #ea5e41;
--color-red-hsl: 10.3, 80.1%, 58.6%;
--color-red-rgb: 234, 94, 65;
--color-green: #a9d37e;
--color-green-hsl: 89.6, 49.1%, 66.1%;
--color-green-rgb: 169, 211, 126;
--color-orange: #ed874c;
--color-orange-hsl: 22, 81.7%, 61.4%;
--color-orange-rgb: 237, 135, 76;
--color-yellow: #e9ba4a;
--color-yellow-hsl: 42.3, 78.3%, 60.2%;
--color-yellow-rgb: 233, 186, 74;
--color-cyan: #5ab7ed;
--color-cyan-hsl: 202, 80.3%, 64.1%;
--color-cyan-rgb: 90, 183, 237;
--color-blue: #339af0;
--color-blue-hsl: 207.3, 86.3%, 57.1%;
--color-blue-rgb: 51, 154, 240;
--color-purple: #7865e6;
--color-purple-hsl: 248.8, 72.1%, 64.9%;
--color-purple-rgb: 120, 101, 230;
--color-pink: #f6b7d8;
--color-pink-hsl: 328.6, 77.8%, 84.1%;
--color-pink-rgb: 246, 183, 216;
}`,
    },
    "ulu-green": {
      dark: `.ulu-green {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--color-accent: hsl(var(--color-green-hsl));
--color-accent-rgb: var(--color-green-rgb);
--color-accent-hsl: var(--color-green-hsl);
--color-accent-1: var(--color-purple);
--color-accent-1-rgb: var(--color-purple-rgb);
}

.ulu-green-d.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: #000000;
--mono-rgb-100: #a3b18a;
--canvas-color: var(--background-modifier-border);
--proxy-00: #121715;
--proxy-10: #1a231f;
--proxy-20: #0e1110;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #1b241f;
--color-base-30: #27352e;
--color-base-35: #635b58;
--color-base-40: #344e41;
--color-base-50: #588157;
--color-base-60: #a4daa6;
--color-base-70: #a6cfa9;
--color-base-100: #bbdbb7;
--gradient-bg-primary: linear-gradient(
        135deg,
        #1d2522 1.62%,
        #121715 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #151918 1.62%,
        #0e1110 50.72%
    ) !important;
--background-modifier-border-alt: #344e41 !important;
--glass-border-light: #516b5e;
--glass-border-dark: #696969;
--color-red: #9a453c;
--color-red-rgb: 154, 69, 60;
--color-red-hsl: 6, 44%, 42%;
--color-green: #8ba481;
--color-green-rgb: 139, 164, 129;
--color-green-hsl: 103, 16%, 57%;
--color-orange: #f1bb8a;
--color-orange-rgb: 241, 187, 138;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow: #e4bc7f;
--color-yellow-rgb: 228, 188, 127;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan: #9bc7bd;
--color-cyan-rgb: 155, 199, 189;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue: #175c59;
--color-blue-rgb: 23, 92, 89;
--color-blue-hsl: 177, 60%, 23%;
--color-purple: #a69ab5;
--color-purple-rgb: 166, 154, 181;
--color-purple-hsl: 267, 15%, 66%;
--color-pink: #ef796a;
--color-pink-rgb: 239, 121, 106;
--color-pink-hsl: 7, 81%, 68%;
}`,
      light: `.ulu-green {
--color-accent: hsl(var(--color-green-hsl));
--color-accent-rgb: var(--color-green-rgb);
--color-accent-hsl: var(--color-green-hsl);
--color-accent-1: var(--color-purple);
--color-accent-1-rgb: var(--color-purple-rgb);
}

.ulu-green-l {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: #ffffff;
--mono-rgb-100: #0d1a0d;
--canvas-color: var(--background-modifier-border);
--proxy-00: #f6faf5;
--proxy-10: #f0f5ed;
--proxy-20: #e9f0e6;
--color-base-00: var(--proxy-00);
--color-base-05: #ffffff;
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #e1eade;
--color-base-30: #dae5d6;
--color-base-35: #d2e0cf;
--color-base-40: #cbdac7;
--color-base-50: #a8b8a5;
--color-base-60: #859682;
--color-base-70: #627460;
--color-base-100: #1b241a;
--gradient-bg-primary: linear-gradient(
        135deg,
        #d7e4d3 1.62%,
        #e8efe6 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #f6faf5 1.62%,
        #f0f5ed 50.72%
    ) !important;
--background-modifier-border-alt: #e1eade !important;
--glass-border-light: #ffffff;
--glass-border-dark: #dae5d6;
--color-red: #9a453c;
--color-red-rgb: 154, 69, 60;
--color-red-hsl: 6, 44%, 42%;
--color-green: #8ba481;
--color-green-rgb: 139, 164, 129;
--color-green-hsl: 103, 16%, 57%;
--color-orange: #f1bb8a;
--color-orange-rgb: 241, 187, 138;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow: #e4bc7f;
--color-yellow-rgb: 228, 188, 127;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan: #9bc7bd;
--color-cyan-rgb: 155, 199, 189;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue: #175c59;
--color-blue-rgb: 23, 92, 89;
--color-blue-hsl: 177, 60%, 23%;
--color-purple: #a69ab5;
--color-purple-rgb: 166, 154, 181;
--color-purple-hsl: 267, 15%, 66%;
--color-pink: #ef796a;
--color-pink-rgb: 239, 121, 106;
--color-pink-hsl: 7, 81%, 68%;
}`,
    },
    "ulu-orange": {
      dark: `.ulu-orange {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--color-accent: hsl(var(--color-orange-hsl));
--color-accent-rgb: var(--color-orange-rgb);
--color-accent-hsl: var(--color-orange-hsl);
--color-accent-1: var(--color-yellow);
--color-accent-1-rgb: var(--color-yellow-rgb);
}`,
      light: `.ulu-orange {
--color-accent: hsl(var(--color-orange-hsl));
--color-accent-rgb: var(--color-orange-rgb);
--color-accent-hsl: var(--color-orange-hsl);
--color-accent-1: var(--color-yellow);
--color-accent-1-rgb: var(--color-yellow-rgb);
}`,
    },
    "ulu-yellow": {
      dark: `.ulu-yellow {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--color-accent: hsl(var(--color-yellow-hsl));
--color-accent-rgb: var(--color-yellow-rgb);
--color-accent-hsl: var(--color-yellow-hsl);
--color-accent-1: var(--color-red);
--color-accent-1-rgb: var(--color-red-rgb);
}`,
      light: `.ulu-yellow {
--color-accent: hsl(var(--color-yellow-hsl));
--color-accent-rgb: var(--color-yellow-rgb);
--color-accent-hsl: var(--color-yellow-hsl);
--color-accent-1: var(--color-red);
--color-accent-1-rgb: var(--color-red-rgb);
}`,
    },
    "ulu-cyan": {
      dark: `.ulu-cyan {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--color-accent: hsl(var(--color-cyan-hsl));
--color-accent-rgb: var(--color-cyan-rgb);
--color-accent-hsl: var(--color-cyan-hsl);
--color-accent-1: var(--color-green);
--color-accent-1-rgb: var(--color-green-rgb);
}`,
      light: `.ulu-cyan {
--color-accent: hsl(var(--color-cyan-hsl));
--color-accent-rgb: var(--color-cyan-rgb);
--color-accent-hsl: var(--color-cyan-hsl);
--color-accent-1: var(--color-green);
--color-accent-1-rgb: var(--color-green-rgb);
}`,
    },
    "ulu-blue": {
      dark: `.ulu-blue {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--color-accent: hsl(var(--color-blue-hsl));
--color-accent-rgb: var(--color-blue-rgb);
--color-accent-hsl: var(--color-blue-hsl);
--color-accent-1: var(--color-pink);
--color-accent-1-rgb: var(--color-pink-rgb);
}

.ulu-blue-d.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: #000000;
--mono-rgb-100: #bdc4ce;
--canvas-color: var(--background-modifier-border);
--proxy-00: #121517;
--proxy-10: #1a1c21;
--proxy-20: #0e1011;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #1d1f25;
--color-base-30: #363841;
--color-base-35: #585e63;
--color-base-40: #34404e;
--color-base-50: #575f81;
--color-base-60: #8a99b1;
--color-base-70: #bdc4ce;
--color-base-100: #cdd0da;
--gradient-bg-primary: linear-gradient(
        135deg,
        #25262a 1.62%,
        #1f2024 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #0b1114 1.62%,
        #0e1011 50.72%
    ) !important;
--background-modifier-border-alt: #34464e !important;
--glass-border-light: #bdc4ce;
--glass-border-dark: #696969;
--color-red: #9a453c;
--color-red-rgb: 154, 69, 60;
--color-red-hsl: 6, 44%, 42%;
--color-green: #8ba481;
--color-green-rgb: 139, 164, 129;
--color-green-hsl: 103, 16%, 57%;
--color-orange: #f1bb8a;
--color-orange-rgb: 241, 187, 138;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow: #e4bc7f;
--color-yellow-rgb: 228, 188, 127;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan: #9bc7bd;
--color-cyan-rgb: 155, 199, 189;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue: #175c59;
--color-blue-rgb: 23, 92, 89;
--color-blue-hsl: 177, 60%, 23%;
--color-purple: #a69ab5;
--color-purple-rgb: 166, 154, 181;
--color-purple-hsl: 267, 15%, 66%;
--color-pink: #ef796a;
--color-pink-rgb: 239, 121, 106;
--color-pink-hsl: 7, 81%, 68%;
}

.ulu-blueprint-d {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: #002244;
--mono-rgb-100: #ffffff;
--canvas-color: var(--background-modifier-border);
--proxy-00: #0069aa;
--proxy-10: #03193f;
--proxy-20: #00396d;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #002244;
--color-base-30: #004a80;
--color-base-35: #0082d3;
--color-base-40: #009dfc;
--color-base-50: #92a1b9;
--color-base-60: #92a1b9;
--color-base-70: #c7cfdd;
--color-base-100: #fff;
--gradient-bg-primary: linear-gradient(
        135deg,
        #0074bd 1.62%,
        #0069aa 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #003f7a 1.62%,
        #00396d 50.72%
    ) !important;
--background-modifier-border-alt: #fff !important;
--glass-border-light: #c7cfdd;
--glass-border-dark: #00396d;
--color-red: #ff5000;
--color-red-rgb: 255, 80, 0;
--color-red-hsl: 19, 100%, 50%;
--color-orange: #ed7614;
--color-orange-rgb: 237, 118, 20;
--color-orange-hsl: 28, 85%, 50%;
--color-yellow: #edab50;
--color-yellow-rgb: 237, 171, 80;
--color-yellow-hsl: 38, 82%, 62%;
--color-green: #99e65f;
--color-green-rgb: 153, 230, 95;
--color-green-hsl: 95, 73%, 64%;
--color-cyan: #94fdff;
--color-cyan-rgb: 148, 253, 255;
--color-cyan-hsl: 181, 100%, 79%;
--color-blue: #0c0293;
--color-blue-rgb: 12, 2, 147;
--color-blue-hsl: 244, 97%, 29%;
--color-purple: #93388f;
--color-purple-rgb: 147, 56, 143;
--color-purple-hsl: 303, 45%, 40%;
--color-pink: #f68187;
--color-pink-rgb: 246, 129, 135;
--color-pink-hsl: 356, 87%, 74%;
}`,
      light: `.ulu-blue {
--color-accent: hsl(var(--color-blue-hsl));
--color-accent-rgb: var(--color-blue-rgb);
--color-accent-hsl: var(--color-blue-hsl);
--color-accent-1: var(--color-pink);
--color-accent-1-rgb: var(--color-pink-rgb);
}

.ulu-blue-l {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: #ffffff;
--mono-rgb-100: #09121a;
--canvas-color: var(--background-modifier-border);
--proxy-00: #f7fafd;
--proxy-10: #f1f6fa;
--proxy-20: #eaeff5;
--color-base-00: var(--proxy-00);
--color-base-05: #ffffff;
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #e7f1fb;
--color-base-30: #dbe4ed;
--color-base-35: #d3dde7;
--color-base-40: #cbd7e2;
--color-base-50: #8ba0b4;
--color-base-60: #849eb4;
--color-base-70: #62829d;
--color-base-100: #1b2632;
--gradient-bg-primary: linear-gradient(
        135deg,
        #d8e6f4 1.62%,
        #dfeaf4 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #cedded 1.62%,
        #dcecf9 50.72%
    ) !important;
--background-modifier-border-alt: #e2eaf2 !important;
--glass-border-light: #ffffff;
--glass-border-dark: #dbe4ed;
}`,
    },
    "ulu-purple": {
      dark: `.ulu-purple {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--color-accent: hsl(var(--color-purple-hsl));
--color-accent-rgb: var(--color-purple-rgb);
--color-accent-hsl: var(--color-purple-hsl);
--color-accent-1: var(--color-cyan);
--color-accent-1-rgb: var(--color-cyan-rgb);
}

.ulu-purple-d.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: #000000;
--mono-rgb-100: #a38ab1;
--canvas-color: var(--background-modifier-border);
--proxy-00: #141217;
--proxy-10: #211a23;
--proxy-20: #100e11;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #2a2335;
--color-base-30: #3c344b;
--color-base-35: #5e5863;
--color-base-40: #40344e;
--color-base-50: #665781;
--color-base-60: #a38ab1;
--color-base-70: #c6bdce;
--color-base-100: #d5cdda;
--gradient-bg-primary: linear-gradient(
        135deg,
        #110e16 1.62%,
        #141217 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #18141e 1.62%,
        #1a161d 50.72%
    ) !important;
--background-modifier-border-alt: #44344e !important;
--glass-border-light: #a38ab1;
--glass-border-dark: #696969;
--color-red: #9a453c;
--color-red-rgb: 154, 69, 60;
--color-red-hsl: 6, 44%, 42%;
--color-green: #8ba481;
--color-green-rgb: 139, 164, 129;
--color-green-hsl: 103, 16%, 57%;
--color-orange: #f1bb8a;
--color-orange-rgb: 241, 187, 138;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow: #e4bc7f;
--color-yellow-rgb: 228, 188, 127;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan: #9bc7bd;
--color-cyan-rgb: 155, 199, 189;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue: #175c59;
--color-blue-rgb: 23, 92, 89;
--color-blue-hsl: 177, 60%, 23%;
--color-purple: #a69ab5;
--color-purple-rgb: 166, 154, 181;
--color-purple-hsl: 267, 15%, 66%;
--color-pink: #ef796a;
--color-pink-rgb: 239, 121, 106;
--color-pink-hsl: 7, 81%, 68%;
}`,
      light: `.ulu-purple {
--color-accent: hsl(var(--color-purple-hsl));
--color-accent-rgb: var(--color-purple-rgb);
--color-accent-hsl: var(--color-purple-hsl);
--color-accent-1: var(--color-cyan);
--color-accent-1-rgb: var(--color-cyan-rgb);
}

.ulu-purple-l {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: #ffffff;
--mono-rgb-100: #12091a;
--canvas-color: var(--background-modifier-border);
--proxy-00: #fbf9fd;
--proxy-10: #f6f1f9;
--proxy-20: #f0eaf5;
--color-base-00: var(--proxy-00);
--color-base-05: #ffffff;
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #e8dff0;
--color-base-30: #e0d5eb;
--color-base-35: #d6cae3;
--color-base-40: #cbbddb;
--color-base-50: #aba0bd;
--color-base-60: #8c819e;
--color-base-70: #6d6380;
--color-base-100: #1f1c24;
--gradient-bg-primary: linear-gradient(
        135deg,
        #e3daec 1.62%,
        #e2daeb 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #e5dcee 1.62%,
        #e5daec 50.72%
    ) !important;
--background-modifier-border-alt: #e8dff0 !important;
--glass-border-light: #ffffff;
--glass-border-dark: #e0d5eb;
}`,
    },
    "ulu-pink": {
      dark: `.ulu-pink {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--color-accent: hsl(var(--color-pink-hsl));
--color-accent-rgb: var(--color-pink-rgb);
--color-accent-hsl: var(--color-pink-hsl);
--color-accent-1: var(--color-orange);
--color-accent-1-rgb: var(--color-orange-rgb);
}`,
      light: `.ulu-pink {
--color-accent: hsl(var(--color-pink-hsl));
--color-accent-rgb: var(--color-pink-rgb);
--color-accent-hsl: var(--color-pink-hsl);
--color-accent-1: var(--color-orange);
--color-accent-1-rgb: var(--color-orange-rgb);
}`,
    },
    "ulu-white": {
      dark: `.ulu-white {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--color-accent: hsl(0, 0%, 100%);
--color-accent-rgb: 255, 255, 255;
--color-accent-hsl: 0, 0%, 100%;
--color-accent-1: var(--color-orange);
--color-accent-1-rgb: var(--color-orange-rgb);
}`,
      light: `.ulu-white {
--color-accent: hsl(0, 0%, 100%);
--color-accent-rgb: 255, 255, 255;
--color-accent-hsl: 0, 0%, 100%;
--color-accent-1: var(--color-orange);
--color-accent-1-rgb: var(--color-orange-rgb);
}`,
    },
    "ulu-adaptive-lt": {
      light: `.ulu-adaptive-lt {
--mix-base-dark: #18181b;
--mix-base-light: color-mix(in srgb, var(--color-accent) 3%, #fcfcfc);
--proxy-00: color-mix(in srgb, var(--color-accent) 6%, var(--mix-base-light));
--proxy-10: color-mix(in srgb, var(--color-accent) 12%, var(--mix-base-light));
--proxy-20: color-mix(in srgb, var(--color-accent) 9%, var(--mix-base-light));
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: color-mix(in srgb, var(--color-accent) 12%, white);
--color-base-30: color-mix(in srgb, var(--color-accent) 18%, white);
--color-base-35: color-mix(in srgb, var(--color-accent) 15%, white);
--color-base-40: color-mix(in srgb, var(--color-accent) 22%, white);
--background-modifier-border-alt: color-mix(in srgb, var(--color-accent) 25%, white);
--mono-rgb-100: #ffffff;
--mono-rgb-0: color-mix(in srgb, var(--color-accent) 40%, #000000);
--color-base-100: var(--mono-rgb-0);
--color-base-70: color-mix(in srgb, var(--color-base-100) 70%, transparent);
--color-base-50: color-mix(in srgb, var(--color-base-100) 70%, transparent);
--gradient-bg-primary: linear-gradient(
        135deg,
        color-mix(in srgb, var(--proxy-00), var(--color-accent) 10%) 0%,
        var(--proxy-00) 100%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        color-mix(in srgb, var(--proxy-20), var(--color-accent) 15%) 0%,
        var(--proxy-20) 100%
    ) !important;
--color-base-60: color-mix(in srgb, var(--color-accent) 50%, white);
--background-modifier-form-field: var(--color-base-25);
--background-modifier-form-field-highlighted: var(--color-base-35);
--background-modifier-box-shadow: rgb(from var(--mono-rgb-0) r g b / 0.1);
--background-modifier-cover: rgb(from var(--mono-rgb-0) r g b / 0.2);
--text-on-accent: #ffffff;
--text-on-accent-inverted: #000000;
--icon-color: var(--text-muted);
--icon-color-hover: var(--text-normal);
--icon-color-active: var(--color-accent);
--color-green: #8fbc8f;
--color-green-hsl: 120, 25%, 65%;
--color-green-rgb: 143, 188, 143;
}

body.ulu-flat.ulu-adaptive-lt .workspace-tab-header-container-inner {
background-image: none !important;
background: none !important;
background-color: var(--color-base-25) !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-flat.ulu-adaptive-lt:not(.is-phone) .vertical-tab-nav-item.is-active, body.ulu-flat.ulu-adaptive-lt:not(.is-phone) .vertical-tab-nav-item.is-active:hover {
background-image: none !important;
background: none !important;
background-color: var(--color-base-25) !important;
border: none !important;
box-shadow: none !important;
text-shadow: none !important;
transform: none !important;
}

body.ulu-flat.ulu-adaptive-lt .nav-folder-title .nav-folder-title-content, body.ulu-flat.ulu-adaptive-lt .nav-folder-title:hover .nav-folder-title-content, body.ulu-flat.ulu-adaptive-lt .nav-folder:not(.is-collapsed) > .nav-folder-title .nav-folder-title-content {
background-image: none !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-adaptive-lt .markdown-preview-view blockquote {
box-shadow:
        0 8px 24px -6px rgb(from var(--mono-rgb-100) r g b/0.05),
        inset 1px 1px 0 0 rgb(from var(--mono-rgb-100) r g b/0.05),
        inset -1px -1px 0 0 rgb(from var(--mono-rgb-0) r g b/0.6),
        0 0 0 1px rgb(from var(--mono-rgb-100) r g b/0.1) !important;
}

body.ulu-adaptive-lt .markdown-source-view.mod-cm6 .cm-line.HyperMD-quote {
box-shadow:
        -1px 0 0 0 rgb(from var(--mono-rgb-100) r g b/0.05),
        1px 0 0 0 rgb(from var(--mono-rgb-0) r g b/0.6) !important;
}

body.ulu-adaptive-lt .markdown-source-view.mod-cm6 .cm-line.HyperMD-quote:not(.cm-line.HyperMD-quote + .cm-line.HyperMD-quote) {
box-shadow:
        0 -8px 24px -6px rgb(from var(--mono-rgb-100) r g b/0.05),
        -1px 0 0 0 rgb(from var(--mono-rgb-100) r g b/0.05),
        0 -1px 0 0 rgb(from var(--mono-rgb-100) r g b/0.05),
        1px 0 0 0 rgb(from var(--mono-rgb-0) r g b/0.6) !important;
}

body.ulu-adaptive-lt .markdown-source-view.mod-cm6 .cm-line.HyperMD-quote:not(:has(+ .cm-line.HyperMD-quote)) {
box-shadow:
        0 8px 24px -6px rgb(from var(--mono-rgb-100) r g b/0.05),
        -1px 0 0 0 rgb(from var(--mono-rgb-100) r g b/0.05),
        1px 0 0 0 rgb(from var(--mono-rgb-0) r g b/0.6),
        0 1px 0 0 rgb(from var(--mono-rgb-0) r g b/0.6) !important;
}

body.ulu-adaptive-lt .markdown-source-view.mod-cm6 .cm-line.HyperMD-quote:not(.cm-line.HyperMD-quote + .cm-line.HyperMD-quote):not( :has(+ .cm-line.HyperMD-quote) ) {
box-shadow:
        0 8px 24px -6px rgb(from var(--mono-rgb-100) r g b/0.05),
        -1px 0 0 0 rgb(from var(--mono-rgb-100) r g b/0.05),
        0 -1px 0 0 rgb(from var(--mono-rgb-100) r g b/0.05),
        1px 0 0 0 rgb(from var(--mono-rgb-0) r g b/0.6),
        0 1px 0 0 rgb(from var(--mono-rgb-0) r g b/0.6) !important;
}

body.ulu-adaptive-lt .workspace-tab-header-container-inner {
background-color: rgb(from var(--color-accent) r g b/0.08) !important;
border: 1px solid rgb(from var(--color-accent) r g b/0.15) !important;
}

.ulu-adaptive-lt .tree-item-self .tree-item-icon {
/* .𖥔 ݁ ˖  !important: overrides .theme-light chevron rules which use !important ⊹ ࣪ ˖ */
background-color: rgb(from var(--mono-rgb-100) r g b/0.2) !important;
box-shadow:
        inset 1px 1px 2px 0 rgb(from var(--mono-rgb-100) r g b/0.6),
        inset -1px -1px 2px 0 rgb(from var(--mono-rgb-0) r g b/0.05),
        0 2px 4px rgb(from var(--mono-rgb-0) r g b/0.1) !important;
}

.ulu-adaptive-lt .tree-item-self .tree-item-icon:hover {
background-color: rgb(from var(--mono-rgb-100) r g b/0.3) !important;
box-shadow:
        inset 1px 1px 3px 0 rgb(from var(--mono-rgb-100) r g b/0.8),
        inset -1px -1px 3px 0 rgb(from var(--mono-rgb-0) r g b/0.1),
        0 3px 6px rgb(from var(--mono-rgb-0) r g b/0.15) !important;
}

.ulu-adaptive-lt .nav-folder-title .nav-folder-title-content {
background: linear-gradient(
        90deg,
        rgb(from var(--mono-rgb-0) r g b/0.04) 0%,
        rgb(from var(--mono-rgb-100) r g b/0.01) 60%,
        transparent 100%
    );
}

.ulu-adaptive-lt .nav-folder-title:hover .nav-folder-title-content {
background: linear-gradient(
        90deg,
        rgb(from var(--mono-rgb-0) r g b/0.08) 0%,
        rgb(from var(--mono-rgb-0) r g b/0.02) 80%,
        transparent 100%
    );
box-shadow: -16px 0 15px rgb(from var(--mono-rgb-100) r g b/0.1);
border-left: 1px solid rgb(from var(--mono-rgb-0) r g b/0.2);
}

.ulu-adaptive-lt .nav-folder:not(.is-collapsed) > .nav-folder-title .nav-folder-title-content {
/* .𖥔 ݁ ˖  !important: overrides base open-folder rule which uses !important ⊹ ࣪ ˖ */
background: linear-gradient(
        90deg,
        rgb(from var(--mono-rgb-0) r g b/0.1) 0%,
        rgb(from var(--mono-rgb-100) r g b/0.01) 60%,
        transparent 100%
    ) !important;
border-left: 1px solid rgb(from var(--mono-rgb-0) r g b/0.13) !important;
}

body:not(.is-phone).ulu-adaptive-lt .vertical-tab-nav-item.is-active {
background: linear-gradient(
        180deg,
        rgb(from var(--mono-rgb-0) r g b/0.1) 0%,
        rgb(from var(--mono-rgb-0) r g b/0.05) 100%
    ) !important;
border: 1px solid rgb(from var(--mono-rgb-0) r g b/0.1) !important;
box-shadow:
        inset 0 1px 0 0 rgb(from var(--mono-rgb-0) r g b/0.05),
        0 2px 8px rgb(from var(--mono-rgb-0) r g b/0.1) !important;
}

body:not(.is-phone).ulu-adaptive-lt .vertical-tab-nav-item.is-active:hover {
background: linear-gradient(
        180deg,
        rgb(from var(--mono-rgb-0) r g b/0.15) 0%,
        rgb(from var(--mono-rgb-0) r g b/0.08) 100%
    ) !important;
}

.ulu-adaptive-lt .graph-controls:not(.is-close) {
background-image:
        linear-gradient(
            rgb(from var(--color-base-00) r g b/0.94),
            rgb(from var(--color-base-10) r g b/0.9)
        ),
        linear-gradient(
            var(--glass-angle-light),
            rgb(from var(--color-base-100) r g b/0.08) 0%,
            transparent 40%,
            transparent 60%,
            rgb(from var(--color-base-100) r g b/0.08) 100%
        ),
        linear-gradient(
            var(--glass-angle-dark),
            rgb(from var(--color-base-30) r g b/0.12) 0%,
            transparent 40%,
            transparent 60%,
            rgb(from var(--color-base-30) r g b/0.12) 100%
        ) !important;
box-shadow:
        0 12px 36px -10px rgb(from var(--mono-rgb-0) r g b/0.18),
        inset 0 1px 0 rgb(from var(--color-base-100) r g b/0.2);
}

body.ulu-adaptive-lt .markdown-preview-view a.internal-link.is-unresolved {
background-color: rgb(from var(--mono-rgb-0) r g b/0.05);
border: 1px solid rgb(from var(--mono-rgb-0) r g b/0.1);
color: var(--text-muted);
opacity: 0.8;
}

body.ulu-adaptive-lt .markdown-preview-view a.internal-link.is-unresolved:hover {
background-color: rgb(from var(--mono-rgb-0) r g b/0.1);
border: 1px solid rgb(from var(--mono-rgb-0) r g b/0.2);
opacity: 1;
}

body.ulu-adaptive-lt .callout {
box-shadow:
        0 8px 24px -6px rgb(from var(--mono-rgb-100) r g b/0.05),
        inset 1px 1px 0 0 rgb(from var(--mono-rgb-0) r g b/0.6),
        inset -1px -1px 0 0 rgb(from var(--mono-rgb-100) r g b/0.05),
        0 0 0 1px rgba(var(--callout-color), 0.1) !important;
}

body.ulu-adaptive-lt .callout:hover {
box-shadow:
        0 14px 36px -10px rgb(from var(--mono-rgb-100) r g b/0.1),
        inset 1px 1px 0 0 rgb(from var(--mono-rgb-0) r g b/0.8),
        inset -1px -1px 0 0 rgb(from var(--mono-rgb-100) r g b/0.05),
        0 0 0 1px rgba(var(--callout-color), 0.25) !important;
}

.ulu-adaptive-lt .tooltip {
background-image: linear-gradient(
        180deg,
        rgb(from var(--color-base-00) r g b/0.95) 0%,
        rgb(from var(--color-base-00) r g b/0.85) 100%
    ) !important;
border: 1px solid rgb(from var(--mono-rgb-0) r g b/0.1) !important;
box-shadow:
        0 10px 30px -5px rgb(from var(--mono-rgb-0) r g b/0.2),
        inset 0 1px 0 rgb(from var(--mono-rgb-100) r g b/0.5) !important;
}`,
    },
    "ulu-red-l": {
      light: `.ulu-red-l {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--accent-h: 13;
--accent-s: 68%;
--accent-l: 63%;
--mono-rgb-0: #ffffff;
--mono-rgb-100: #1a0f0f;
--canvas-color: var(--background-modifier-border);
--proxy-00: #fdf5f5;
--proxy-10: #f9ebeb;
--proxy-20: #f5e0e0;
--color-base-00: var(--proxy-00);
--color-base-05: #ffffff;
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #f0d6d6;
--color-base-30: #ecccce;
--color-base-35: #e8c2c2;
--color-base-40: #e3b8b8;
--color-base-50: #b58989;
--color-base-60: #885c5c;
--color-base-70: #5c3232;
--color-base-100: #291212;
--gradient-bg-primary: linear-gradient(
        135deg,
        #f3d5d5 1.62%,
        #edcbcb 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #ebd9d9 1.62%,
        #e7c9c9 50.72%
    ) !important;
--background-modifier-border-alt: #f0d6d6 !important;
--glass-border-light: #ffffff;
--glass-border-dark: #ecccce;
--color-red: #ea5e41;
--color-red-hsl: 10.3, 80.1%, 58.6%;
--color-red-rgb: 234, 94, 65;
--color-green: #a9d37e;
--color-green-hsl: 89.6, 49.1%, 66.1%;
--color-green-rgb: 169, 211, 126;
--color-orange: #ed874c;
--color-orange-hsl: 22, 81.7%, 61.4%;
--color-orange-rgb: 237, 135, 76;
--color-yellow: #e9ba4a;
--color-yellow-hsl: 42.3, 78.3%, 60.2%;
--color-yellow-rgb: 233, 186, 74;
--color-cyan: #5ab7ed;
--color-cyan-hsl: 202, 80.3%, 64.1%;
--color-cyan-rgb: 90, 183, 237;
--color-blue: #339af0;
--color-blue-hsl: 207.3, 86.3%, 57.1%;
--color-blue-rgb: 51, 154, 240;
--color-purple: #7865e6;
--color-purple-hsl: 248.8, 72.1%, 64.9%;
--color-purple-rgb: 120, 101, 230;
--color-pink: #f6b7d8;
--color-pink-hsl: 328.6, 77.8%, 84.1%;
--color-pink-rgb: 246, 183, 216;
}`,
    },
    "ulu-green-l": {
      light: `.ulu-green-l {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: #ffffff;
--mono-rgb-100: #0d1a0d;
--canvas-color: var(--background-modifier-border);
--proxy-00: #f6faf5;
--proxy-10: #f0f5ed;
--proxy-20: #e9f0e6;
--color-base-00: var(--proxy-00);
--color-base-05: #ffffff;
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #e1eade;
--color-base-30: #dae5d6;
--color-base-35: #d2e0cf;
--color-base-40: #cbdac7;
--color-base-50: #a8b8a5;
--color-base-60: #859682;
--color-base-70: #627460;
--color-base-100: #1b241a;
--gradient-bg-primary: linear-gradient(
        135deg,
        #d7e4d3 1.62%,
        #e8efe6 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #f6faf5 1.62%,
        #f0f5ed 50.72%
    ) !important;
--background-modifier-border-alt: #e1eade !important;
--glass-border-light: #ffffff;
--glass-border-dark: #dae5d6;
--color-red: #9a453c;
--color-red-rgb: 154, 69, 60;
--color-red-hsl: 6, 44%, 42%;
--color-green: #8ba481;
--color-green-rgb: 139, 164, 129;
--color-green-hsl: 103, 16%, 57%;
--color-orange: #f1bb8a;
--color-orange-rgb: 241, 187, 138;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow: #e4bc7f;
--color-yellow-rgb: 228, 188, 127;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan: #9bc7bd;
--color-cyan-rgb: 155, 199, 189;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue: #175c59;
--color-blue-rgb: 23, 92, 89;
--color-blue-hsl: 177, 60%, 23%;
--color-purple: #a69ab5;
--color-purple-rgb: 166, 154, 181;
--color-purple-hsl: 267, 15%, 66%;
--color-pink: #ef796a;
--color-pink-rgb: 239, 121, 106;
--color-pink-hsl: 7, 81%, 68%;
}`,
    },
    "ulu-blue-l": {
      light: `.ulu-blue-l {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: #ffffff;
--mono-rgb-100: #09121a;
--canvas-color: var(--background-modifier-border);
--proxy-00: #f7fafd;
--proxy-10: #f1f6fa;
--proxy-20: #eaeff5;
--color-base-00: var(--proxy-00);
--color-base-05: #ffffff;
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #e7f1fb;
--color-base-30: #dbe4ed;
--color-base-35: #d3dde7;
--color-base-40: #cbd7e2;
--color-base-50: #8ba0b4;
--color-base-60: #849eb4;
--color-base-70: #62829d;
--color-base-100: #1b2632;
--gradient-bg-primary: linear-gradient(
        135deg,
        #d8e6f4 1.62%,
        #dfeaf4 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #cedded 1.62%,
        #dcecf9 50.72%
    ) !important;
--background-modifier-border-alt: #e2eaf2 !important;
--glass-border-light: #ffffff;
--glass-border-dark: #dbe4ed;
}`,
    },
    "ulu-purple-l": {
      light: `.ulu-purple-l {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: #ffffff;
--mono-rgb-100: #12091a;
--canvas-color: var(--background-modifier-border);
--proxy-00: #fbf9fd;
--proxy-10: #f6f1f9;
--proxy-20: #f0eaf5;
--color-base-00: var(--proxy-00);
--color-base-05: #ffffff;
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #e8dff0;
--color-base-30: #e0d5eb;
--color-base-35: #d6cae3;
--color-base-40: #cbbddb;
--color-base-50: #aba0bd;
--color-base-60: #8c819e;
--color-base-70: #6d6380;
--color-base-100: #1f1c24;
--gradient-bg-primary: linear-gradient(
        135deg,
        #e3daec 1.62%,
        #e2daeb 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #e5dcee 1.62%,
        #e5daec 50.72%
    ) !important;
--background-modifier-border-alt: #e8dff0 !important;
--glass-border-light: #ffffff;
--glass-border-dark: #e0d5eb;
}`,
    },
    "ulu-light-l": {
      light: `.theme-light {
--mono-rgb-0: #ffffff;
--mono-rgb-100: #433c34;
--canvas-color: var(--background-modifier-border);
--proxy-00: #fdfdfc;
--proxy-10: #f7f6f2;
--proxy-20: #f2f0ea;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #eceae1;
--color-base-30: #e5e3d8;
--color-base-35: #dedbce;
--color-base-40: #d8d4c5;
--color-base-50: #b5b2a5;
--color-base-60: #939086;
--color-base-70: #716f66;
--color-base-100: #433c34;
--gradient-bg-primary: linear-gradient(
        135deg,
        #e3e1d2 1.62%,
        #e6e5da 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #edebeb 1.62%,
        #e5e3d8 50.72%
    ) !important;
--background-modifier-border-alt: #eceae1 !important;
--glass-border-light: #ffffff;
--glass-border-dark: #e5e3d8;
--color-red: #ef796a;
--color-red-rgb: 239, 121, 106;
--color-red-hsl: 7, 81%, 68%;
--color-green: #8cb369;
--color-green-rgb: 140, 179, 105;
--color-green-hsl: 92, 33%, 56%;
--color-orange: #ff7f51;
--color-orange-rgb: 255, 127, 81;
--color-orange-hsl: 16, 100%, 66%;
--color-yellow: #edae49;
--color-yellow-rgb: 237, 174, 73;
--color-yellow-hsl: 37, 82%, 61%;
--color-cyan: #0fbda8;
--color-cyan-rgb: 15, 189, 168;
--color-cyan-hsl: 173, 85%, 40%;
--color-blue: #788bff;
--color-blue-rgb: 120, 139, 255;
--color-blue-hsl: 232, 100%, 74%;
--color-purple: #9381ff;
--color-purple-rgb: 147, 129, 255;
--color-purple-hsl: 249, 100%, 75%;
--color-pink: #fb6376;
--color-pink-rgb: 251, 99, 118;
--color-pink-hsl: 53, 95%, 69%;
}`,
    },
    "ulu-arch-l": {
      light: `.ulu-arch-l {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: #ffffff;
--mono-rgb-100: #131313;
--canvas-color: var(--background-modifier-border);
--proxy-00: #f2f1ed;
--proxy-10: #ebeae5;
--proxy-20: #e4e3dc;
--color-base-00: var(--proxy-00);
--color-base-05: #ffffff;
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #dcdcd3;
--color-base-30: #d6d4ca;
--color-base-35: #d0cec0;
--color-base-40: #cac8b6;
--color-base-50: #a2a297;
--color-base-60: #7b7b73;
--color-base-70: #55554f;
--color-base-100: #131313;
--color-accent: #9a453c !important;
--color-accent-rgb: 154, 69, 60 !important;
--color-accent-hsl: 6, 44%, 42% !important;
--gradient-bg-primary: linear-gradient(
        135deg,
        #e8e6df 1.62%,
        #e8e6e0 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #dbdad5 1.62%,
        #d6d4cd 50.72%
    ) !important;
--background-modifier-border-alt: #dcdcd3;
--glass-border-light: #ffffff;
--glass-border-dark: #d6d4ca;
--color-red: #f47462;
--color-red-rgb: 244, 116, 98;
--color-red-hsl: 7, 87%, 67%;
--color-green: #81a242;
--color-green-rgb: 129, 162, 66;
--color-green-hsl: 81, 42%, 45%;
--color-orange: #f1ad58;
--color-orange-rgb: 241, 173, 88;
--color-orange-hsl: 33, 85%, 65%;
--color-yellow: #f3bc19;
--color-yellow-rgb: 243, 188, 25;
--color-yellow-hsl: 45, 90%, 53%;
--color-cyan: #42a3ad;
--color-cyan-rgb: 66, 163, 173;
--color-cyan-hsl: 186, 45%, 47%;
--color-blue: #1f608b;
--color-blue-rgb: 31, 96, 139;
--color-blue-hsl: 204, 64%, 33%;
--color-purple: #7d3c84;
--color-purple-rgb: 125, 60, 132;
--color-purple-hsl: 294, 38%, 38%;
--color-pink: #ef5f77;
--color-pink-rgb: 239, 95, 119;
--color-pink-hsl: 350, 82%, 65%;
}`,
    },
    "ulu-shark-l": {
      light: `.ulu-shark-l {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: #ffffff;
--mono-rgb-100: #1a1a2e;
--canvas-color: var(--background-modifier-border);
--proxy-00: #ffffff;
--proxy-10: #f5fafd;
--proxy-20: #fcecf2;
--color-base-00: var(--proxy-00);
--color-base-05: #ffffff;
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #edf6ff;
--color-base-30: #f8e1ec;
--color-base-35: #e1f1fa;
--color-base-40: #f5cce0;
--color-base-50: #7a94a5;
--color-base-60: #85546e;
--color-base-70: #5587a8;
--color-base-100: #1a1a2e;
--gradient-bg-primary: linear-gradient(
        135deg,
        #ffffff 1.62%,
        #fdf5f8 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #ffe2ed 1.62%,
        #f5d6e6 50.72%
    ) !important;
--gradient-bg-tertiary: linear-gradient(135deg, #eef7fc 30.62%, #fcecf2 90.72%);
--background-modifier-border-alt: #f8e1ec;
--glass-border-light: #ffffff;
--glass-border-dark: #e1f1fa;
--color-red: #ff5e23;
--color-red-rgb: 255, 94, 35;
--color-red-hsl: 16, 100%, 57%;
--color-green: #689c2b;
--color-green-rgb: 104, 156, 43;
--color-green-hsl: 88, 57%, 39%;
--color-orange: #fd912c;
--color-orange-rgb: 253, 145, 44;
--color-orange-hsl: 29, 98%, 58%;
--color-yellow: #fcdc37;
--color-yellow-rgb: 252, 220, 55;
--color-yellow-hsl: 50, 97%, 60%;
--color-cyan: #42a3ad;
--color-cyan-rgb: 66, 163, 173;
--color-cyan-hsl: 186, 45%, 47%;
--color-blue: #70b4f9;
--color-blue-rgb: 112, 180, 249;
--color-blue-hsl: 210, 92%, 71%;
--color-purple: #744cb4;
--color-purple-rgb: 116, 76, 180;
--color-purple-hsl: 263, 41%, 50%;
--color-pink: #ff6eb9;
--color-pink-rgb: 255, 110, 185;
--color-pink-hsl: 329, 100%, 72%;
}

.ulu-shark-l .workspace-tab-header-container-inner {
background-color: rgb(from var(--color-base-00) r g b/0.5) !important;
border: 1px solid rgb(from var(--color-base-25) r g b/0.8) !important;
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
    "ulu-solar-l": {
      light: `.theme-light {
--accent-h: 175.5 !important;
--accent-s: 58.6% !important;
--accent-l: 39.8% !important;
--mono-rgb-0: #fffcf4;
--mono-rgb-100: #433c34;
--canvas-color: var(--background-modifier-border);
--proxy-00: #fdf6e3;
--proxy-10: #fffaeb;
--proxy-20: #eee8d5;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #f8f3e6;
--color-base-30: #f3edd7;
--color-base-35: #eee8d5;
--color-base-40: #b7b6b2;
--color-base-50: #93a1a1;
--color-base-60: #586e75;
--color-base-70: #657b83;
--color-base-100: #586e75;
--gradient-bg-primary: linear-gradient(
        135deg,
        #fcf9f0 1.62%,
        #fdf6e3 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #ede8d7 1.62%,
        #ede8d7 50.72%
    ) !important;
--background-modifier-border-alt: #e2e1df !important;
--glass-border-light: #fff;
--glass-border-dark: #b7b6b2;
--color-red: #dc322f;
--color-red-rgb: 220, 50, 47;
--color-red-hsl: 1, 71.2%, 52.4%;
--color-green: #859900;
--color-green-rgb: 133, 153, 0;
--color-green-hsl: 67.8, 100%, 30%;
--color-orange: #cb4b16;
--color-orange-rgb: 203, 75, 22;
--color-orange-hsl: 17.6, 80.4%, 44.1%;
--color-yellow: #b58900;
--color-yellow-rgb: 181, 137, 0;
--color-yellow-hsl: 45.4, 100%, 35.5%;
--color-cyan: #2aa198;
--color-cyan-rgb: 42, 161, 152;
--color-cyan-hsl: 175.5, 58.6%, 39.8%;
--color-blue: #268bd2;
--color-blue-rgb: 38, 139, 210;
--color-blue-hsl: 204.8, 69.4%, 48.6%;
--color-purple: #6c71c4;
--color-purple-rgb: 108, 113, 196;
--color-purple-hsl: 236.6, 42.7%, 59.6%;
--color-pink: #d33682;
--color-pink-rgb: 211, 54, 130;
--color-pink-hsl: 331, 64.1%, 52%;
/* .𖥔 ݁ ˖  checkbox slider accent color ⊹ ࣪ ˖ */
--checkbox-color: var(--color-cyan);
--toggle-thumb-color: #fdf6e3;
--toggle-border-color: #b7b6b2;
}`,
    },
    "ulu-gruvbox-lt": {
      light: `.ulu-gruvbox-lt {
--accent-h: 13;
--accent-s: 68%;
--accent-l: 63%;
--mono-rgb-0: #f2e5bc;
--mono-rgb-100: #3c3836;
--canvas-color: var(--background-modifier-border);
--proxy-00: #f9f5d7;
--proxy-10: #f2e5bc;
--proxy-20: #ebdbb2;
--color-red: #9d0006;
--color-red-hsl: 357.7, 100%, 30.8%;
--color-red-rgb: 157, 0, 6;
--color-green: #79740e;
--color-green-hsl: 57.2, 79.3%, 26.5%;
--color-green-rgb: 121, 116, 14;
--color-orange: #af3a03;
--color-orange-hsl: 19.2, 96.6%, 34.9%;
--color-orange-rgb: 175, 58, 3;
--color-yellow: #b57614;
--color-yellow-hsl: 36.5, 80.1%, 39.4%;
--color-yellow-rgb: 181, 118, 20;
--color-cyan: #427b58;
--color-cyan-hsl: 143.2, 30.2%, 37.1%;
--color-cyan-rgb: 66, 123, 88;
--color-blue: #076678;
--color-blue-hsl: 189.6, 89%, 24.9%;
--color-blue-rgb: 7, 102, 120;
--color-purple: #8f3f71;
--color-purple-hsl: 322.5, 38.8%, 40.4%;
--color-purple-rgb: 143, 63, 113;
--color-pink: #f6b7d8;
--color-pink-hsl: 328.6, 77.8%, 84.1%;
--color-pink-rgb: 246, 183, 216;
--color-base-00: var(--proxy-00);
--color-base-05: #fbf1c7;
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #d5c4a1;
--color-base-30: #e2cfad;
--color-base-35: #a89984;
--color-base-40: #928374;
--color-base-50: #7c6f64;
--color-base-60: #665c54;
--color-base-70: #504945;
--color-base-100: #3c3836;
--gradient-bg-primary: linear-gradient(
        135deg,
        #f9f5d7 1.62%,
        #f2e5bc 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #f2e5bc 1.62%,
        #ebdbb2 50.72%
    ) !important;
--background-modifier-border-alt: #d5c4a1 !important;
--glass-border-light: #fbf1c7;
--glass-border-dark: #bdae93;
}`,
    },
    "ulu-lobstertime-lt": {
      light: `.ulu-lobstertime-lt {
--accent-h: 13;
--accent-s: 68%;
--accent-l: 63%;
--mono-rgb-0: #ffffff;
--mono-rgb-100: #0a192f;
--canvas-color: var(--background-modifier-border);
--proxy-00: #e0f2fe;
--proxy-10: #f0f9ff;
--proxy-20: #bae6fd;
--color-red: #ea5e41;
--color-red-hsl: 10.3, 80.1%, 58.6%;
--color-red-rgb: 234, 94, 65;
--color-green: #a9d37e;
--color-green-hsl: 89.6, 49.1%, 66.1%;
--color-green-rgb: 169, 211, 126;
--color-orange: #ed874c;
--color-orange-hsl: 22, 81.7%, 61.4%;
--color-orange-rgb: 237, 135, 76;
--color-yellow: #e9ba4a;
--color-yellow-hsl: 42.3, 78.3%, 60.2%;
--color-yellow-rgb: 233, 186, 74;
--color-cyan: #5ab7ed;
--color-cyan-hsl: 202, 80.3%, 64.1%;
--color-cyan-rgb: 90, 183, 237;
--color-blue: #339af0;
--color-blue-hsl: 207.3, 86.3%, 57.1%;
--color-blue-rgb: 51, 154, 240;
--color-purple: #7865e6;
--color-purple-hsl: 248.8, 72.1%, 64.9%;
--color-purple-rgb: 120, 101, 230;
--color-pink: #f6b7d8;
--color-pink-hsl: 328.6, 77.8%, 84.1%;
--color-pink-rgb: 246, 183, 216;
--color-base-00: var(--proxy-00);
--color-base-05: #ffffff;
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #ade4ff;
--color-base-30: #96d6f3;
--color-base-35: #0ea5e9;
--color-base-40: #0284c7;
--color-base-50: #0369a1;
--color-base-60: #075985;
--color-base-70: #0c4a6e;
--color-base-100: #0a192f;
--gradient-bg-primary: linear-gradient(
        135deg,
        #f0f9ff 1.62%,
        #e0f2fe 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #caeaff 1.62%,
        #aed7f3 50.72%
    ) !important;
--background-modifier-border-alt: #7dd3fc !important;
--glass-border-light: #ffffff;
--glass-border-dark: #38bdf8;
}`,
    },
    "ulu-twolf-l": {
      light: `.theme-light {
--accent-h: 175.5 !important;
--accent-s: 58.6% !important;
--accent-l: 25% !important;
--mono-rgb-0: #ffffff;
--mono-rgb-100: #433c34;
--canvas-color: var(--background-modifier-border);
--code-background: #eae9e0;
--proxy-00: #fdf6e3;
--proxy-10: #fffaeb;
--proxy-20: #eee8d5;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #e0dccc;
--color-base-30: #d5cfbb;
--color-base-35: #c8c0a8;
--color-base-40: #b9b093;
--color-base-50: #b2beb5;
--color-base-60: #dad7cd;
--color-base-70: #344e41;
--color-base-100: #586e75;
--gradient-bg-primary: linear-gradient(
        135deg,
        #fdf6e3 1.62%,
        #fdf6e3 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #4d5b4f 1.62%,
        #4d5b4f 50.72%
    ) !important;
--background-modifier-border-alt: #e0dccc !important;
--glass-border-light: #ffffff;
--glass-border-dark: #d5cfbb;
--color-red: #dc322f;
--color-red-rgb: 220, 50, 47;
--color-red-hsl: 1, 71.2%, 52.4%;
--color-green: #629161;
--color-green-rgb: 98, 145, 97;
--color-green-hsl: 119, 20%, 47%;
--color-orange: #cb4b16;
--color-orange-rgb: 203, 75, 22;
--color-orange-hsl: 17.6, 80.4%, 44.1%;
--color-yellow: #b58900;
--color-yellow-rgb: 181, 137, 0;
--color-yellow-hsl: 45.4, 100%, 35.5%;
--color-cyan: #2aa198;
--color-cyan-rgb: 42, 161, 152;
--color-cyan-hsl: 175.5, 58.6%, 39.8%;
--color-blue: #268bd2;
--color-blue-rgb: 38, 139, 210;
--color-blue-hsl: 204.8, 69.4%, 48.6%;
--color-purple: #6c71c4;
--color-purple-rgb: 108, 113, 196;
--color-purple-hsl: 236.6, 42.7%, 59.6%;
--color-pink: #d33682;
--color-pink-rgb: 211, 54, 130;
--color-pink-hsl: 331, 64.1%, 52%;
}

.theme-light .view-header-title-parent {
color: var(--text-normal) !important;
}

.theme-light .view-actions .clickable-icon, .theme-light .view-header-title-container .clickable-icon, body.theme-light:not(.is-mobile) .view-header-left .clickable-icon {
color: var(--text-normal) !important;
}

.theme-light .tree-item-self .tree-item-icon svg {
color: var(--mono-rgb-0) !important;
}

.theme-light .is-unresolved .cm-underline, .theme-light .markdown-preview-view a.internal-link.is-unresolved, .theme-light .markdown-rendered a.internal-link.is-unresolved {
color: var(--color-base-70) !important;
opacity: 0.8 !important;
}

.theme-light .nav-folder:not(.is-collapsed) > .nav-folder-title .nav-folder-title-content {
color: var(--color-base-30) !important;
background: linear-gradient(
        90deg,
        rgb(from var(--color-base-50) r g b/0.25) 0%,
        transparent 100%
    ) !important;
}

body.theme-light:not(.is-mobile) .workspace-split.mod-left-split .workspace-sidedock-vault-profile .workspace-drawer-vault-switcher-icon, .ulu-status-pills .status-bar-item {
color: var(--text-normal);
}

.theme-light .cm-em, .theme-light em {
color: var(--color-base-100) !important;
}

.theme-light .tree-item-self .tree-item-icon {
background-color: rgb(from var(--color-base-100) r g b/0.05) !important;
border: 1px solid rgb(from var(--color-base-40) r g b/0.2) !important;
box-shadow:
        inset 1px 1px 2px 0 rgb(from #ffffff r g b/0.5),
        inset -1px -2px 2px 0 rgb(from var(--color-base-40) r g b/0.1),
        0 2px 4px rgb(from var(--mono-rgb-100) r g b/0.05) !important;
color: var(--color-base-100) !important;
}

.theme-light .tree-item-self .tree-item-icon:hover {
background-color: rgb(from var(--color-base-100) r g b/0.1) !important;
box-shadow:
        inset 1px 1px 2px 0 rgb(from #ffffff r g b/0.7),
        inset -1px -2px 2px 0 rgb(from var(--color-base-40) r g b/0.15),
        0 3px 6px rgb(from var(--mono-rgb-100) r g b/0.1) !important;
color: var(--text-normal) !important;
}

.theme-light .nav-file-title.is-active .nav-file-title-content {
color: var(--color-base-30) !important;
background: linear-gradient(
        90deg,
        rgb(from var(--color-green) r g b/0.15) 0%,
        transparent 100%
    ) !important;
border: none !important;
box-shadow: none !important;
text-shadow: none !important;
}`,
    },
    "ulu-meg-l": {
      light: `.theme-light {
--accent-h: 175.5 !important;
--accent-s: 58.6% !important;
--accent-l: 25% !important;
--mono-rgb-0: #ffffff;
--mono-rgb-100: #343943;
--canvas-color: var(--background-modifier-border);
--code-background: #d8e4f5;
--proxy-00: #e3ecfd;
--proxy-10: #ebf3ff;
--proxy-20: #d5dfee;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #c4d7ec;
--color-base-30: #b2c8e1;
--color-base-35: #a0bad5;
--color-base-40: #8ba9c9;
--color-base-50: #7497bb;
--color-base-60: #cdd4da;
--color-base-70: #343e4e;
--color-base-100: #30415a;
--gradient-bg-primary: linear-gradient(
        135deg,
        #e3ecfd 1.62%,
        #e3ecfd 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #576272 1.62%,
        #47515f 50.72%
    ) !important;
--background-modifier-border-alt: #c4d7ec !important;
--glass-border-light: #ffffff;
--glass-border-dark: #b2c8e1;
--color-red: #dc322f;
--color-red-rgb: 220, 50, 47;
--color-red-hsl: 1, 71.2%, 52.4%;
--color-green: #629161;
--color-green-rgb: 98, 145, 97;
--color-green-hsl: 119, 20%, 47%;
--color-orange: #cb4b16;
--color-orange-rgb: 203, 75, 22;
--color-orange-hsl: 17.6, 80.4%, 44.1%;
--color-yellow: #b58900;
--color-yellow-rgb: 181, 137, 0;
--color-yellow-hsl: 45.4, 100%, 35.5%;
--color-cyan: #2aa198;
--color-cyan-rgb: 42, 161, 152;
--color-cyan-hsl: 175.5, 58.6%, 39.8%;
--color-blue: #268bd2;
--color-blue-rgb: 38, 139, 210;
--color-blue-hsl: 204.8, 69.4%, 48.6%;
--color-purple: #6c71c4;
--color-purple-rgb: 108, 113, 196;
--color-purple-hsl: 236.6, 42.7%, 59.6%;
--color-pink: #d33682;
--color-pink-rgb: 211, 54, 130;
--color-pink-hsl: 331, 64.1%, 52%;
}

.theme-light .view-header-title-parent {
color: var(--text-normal) !important;
}

.theme-light .view-actions .clickable-icon, .theme-light .view-header-title-container .clickable-icon, body.theme-light:not(.is-mobile) .view-header-left .clickable-icon {
color: var(--text-normal) !important;
}

.theme-light .tree-item-self .tree-item-icon svg {
color: var(--mono-rgb-0) !important;
}

.theme-light .nav-folder:not(.is-collapsed) > .nav-folder-title .nav-folder-title-content {
color: var(--color-base-60) !important;
background: linear-gradient(
        90deg,
        rgb(from var(--color-base-100) r g b/0.3) 0%,
        rgb(from var(--color-base-100) r g b/0.01) 60%,
        transparent 100%
    ) !important;
}

.theme-light .is-unresolved .cm-underline, .theme-light .markdown-preview-view a.internal-link.is-unresolved, .theme-light .markdown-rendered a.internal-link.is-unresolved {
color: var(--color-base-70) !important;
opacity: 0.8 !important;
}

.theme-light .tree-item-self .tree-item-icon {
background-color: rgb(from var(--color-base-100) r g b/0.05) !important;
border: 1px solid rgb(from var(--color-base-40) r g b/0.2) !important;
box-shadow:
        inset 1px 1px 2px 0 rgb(from #ffffff r g b/0.5),
        inset -1px -2px 2px 0 rgb(from var(--color-base-40) r g b/0.1),
        0 2px 4px rgb(from var(--mono-rgb-100) r g b/0.05) !important;
color: var(--color-base-100) !important;
}

.theme-light .tree-item-self .tree-item-icon:hover {
background-color: rgb(from var(--color-base-100) r g b/0.1) !important;
box-shadow:
        inset 1px 1px 2px 0 rgb(from #ffffff r g b/0.7),
        inset -1px -2px 2px 0 rgb(from var(--color-base-40) r g b/0.15),
        0 3px 6px rgb(from var(--mono-rgb-100) r g b/0.1) !important;
color: var(--text-normal) !important;
}

body.theme-light:not(.is-mobile) .workspace-split.mod-left-split .workspace-sidedock-vault-profile .workspace-drawer-vault-switcher-icon, .ulu-status-pills .status-bar-item {
color: var(--text-normal);
}

.theme-light .cm-em, .theme-light em {
color: var(--color-base-100) !important;
}`,
    },
    "ulu-adaptive-dt": {
      dark: `.ulu-adaptive-dt {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mix-base-dark: #09090b;
--mix-base-light: #e4e4e7;
--proxy-20: color-mix(in srgb, var(--color-accent) 4%, var(--mix-base-dark));
--proxy-00: color-mix(in srgb, var(--color-accent) 7%, var(--mix-base-dark));
--proxy-10: color-mix(in srgb, var(--color-accent) 10%, var(--mix-base-dark));
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: color-mix(in srgb, var(--color-accent) 12%, var(--mix-base-dark));
--color-base-30: color-mix(in srgb, var(--color-accent) 18%, var(--mix-base-dark));
--color-base-40: color-mix(in srgb, var(--color-accent) 30%, var(--mix-base-dark));
--background-modifier-border-alt: color-mix(
        in srgb,
        var(--color-accent) 20%,
        var(--mix-base-dark)
    );
--mono-rgb-100: color-mix(in srgb, var(--color-accent) 5%, var(--mix-base-light));
--mono-rgb-0: color-mix(in srgb, var(--color-accent) 5%, #000000);
--color-base-100: var(--mono-rgb-100);
--color-base-70: color-mix(in srgb, var(--color-base-100) 70%, transparent);
--color-base-50: color-mix(in srgb, var(--color-base-100) 50%, transparent);
--color-base-35: color-mix(in srgb, var(--color-accent) 25%, #181818);
--gradient-bg-primary: linear-gradient(
        135deg,
        color-mix(in srgb, var(--proxy-00), black 5%) 0%,
        var(--proxy-00) 60%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        color-mix(in srgb, var(--proxy-20), var(--color-accent) 8%) 0%,
        var(--proxy-20) 100%
    ) !important;
}`,
    },
    "ulu-red-d": {
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--accent-h: 75;
--accent-s: 21%;
--accent-l: 57%;
--mono-rgb-0: #000000;
--mono-rgb-100: #4d8a8a;
--canvas-color: var(--background-modifier-border);
--proxy-00: #171212;
--proxy-10: #2e2424;
--proxy-20: #110e0e;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #231919;
--color-base-30: #423535;
--color-base-35: #635858;
--color-base-40: #4e3434;
--color-base-50: #815757;
--color-base-60: #b18a8a;
--color-base-70: #cebdbd;
--color-base-100: #d6b3b3;
--gradient-bg-primary: linear-gradient(
        135deg,
        #221b1b 1.62%,
        #171212 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #161010 1.62%,
        #110e0e 50.72%
    ) !important;
--background-modifier-border-alt: #4e3434 !important;
--glass-border-light: #4d8a8a;
--glass-border-dark: #696969;
--color-red: #9a453c;
--color-red-rgb: 154, 69, 60;
--color-red-hsl: 6, 44%, 42%;
--color-green: #8ba481;
--color-green-rgb: 139, 164, 129;
--color-green-hsl: 103, 16%, 57%;
--color-orange: #f1bb8a;
--color-orange-rgb: 241, 187, 138;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow: #e4bc7f;
--color-yellow-rgb: 228, 188, 127;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan: #9bc7bd;
--color-cyan-rgb: 155, 199, 189;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue: #175c59;
--color-blue-rgb: 23, 92, 89;
--color-blue-hsl: 177, 60%, 23%;
--color-purple: #a69ab5;
--color-purple-rgb: 166, 154, 181;
--color-purple-hsl: 267, 15%, 66%;
--color-pink: #ef796a;
--color-pink-rgb: 239, 121, 106;
--color-pink-hsl: 7, 81%, 68%;
}`,
    },
    "ulu-green-d": {
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: #000000;
--mono-rgb-100: #a3b18a;
--canvas-color: var(--background-modifier-border);
--proxy-00: #121715;
--proxy-10: #1a231f;
--proxy-20: #0e1110;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #1b241f;
--color-base-30: #27352e;
--color-base-35: #635b58;
--color-base-40: #344e41;
--color-base-50: #588157;
--color-base-60: #a4daa6;
--color-base-70: #a6cfa9;
--color-base-100: #bbdbb7;
--gradient-bg-primary: linear-gradient(
        135deg,
        #1d2522 1.62%,
        #121715 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #151918 1.62%,
        #0e1110 50.72%
    ) !important;
--background-modifier-border-alt: #344e41 !important;
--glass-border-light: #516b5e;
--glass-border-dark: #696969;
--color-red: #9a453c;
--color-red-rgb: 154, 69, 60;
--color-red-hsl: 6, 44%, 42%;
--color-green: #8ba481;
--color-green-rgb: 139, 164, 129;
--color-green-hsl: 103, 16%, 57%;
--color-orange: #f1bb8a;
--color-orange-rgb: 241, 187, 138;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow: #e4bc7f;
--color-yellow-rgb: 228, 188, 127;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan: #9bc7bd;
--color-cyan-rgb: 155, 199, 189;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue: #175c59;
--color-blue-rgb: 23, 92, 89;
--color-blue-hsl: 177, 60%, 23%;
--color-purple: #a69ab5;
--color-purple-rgb: 166, 154, 181;
--color-purple-hsl: 267, 15%, 66%;
--color-pink: #ef796a;
--color-pink-rgb: 239, 121, 106;
--color-pink-hsl: 7, 81%, 68%;
}`,
    },
    "ulu-blue-d": {
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: #000000;
--mono-rgb-100: #bdc4ce;
--canvas-color: var(--background-modifier-border);
--proxy-00: #121517;
--proxy-10: #1a1c21;
--proxy-20: #0e1011;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #1d1f25;
--color-base-30: #363841;
--color-base-35: #585e63;
--color-base-40: #34404e;
--color-base-50: #575f81;
--color-base-60: #8a99b1;
--color-base-70: #bdc4ce;
--color-base-100: #cdd0da;
--gradient-bg-primary: linear-gradient(
        135deg,
        #25262a 1.62%,
        #1f2024 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #0b1114 1.62%,
        #0e1011 50.72%
    ) !important;
--background-modifier-border-alt: #34464e !important;
--glass-border-light: #bdc4ce;
--glass-border-dark: #696969;
--color-red: #9a453c;
--color-red-rgb: 154, 69, 60;
--color-red-hsl: 6, 44%, 42%;
--color-green: #8ba481;
--color-green-rgb: 139, 164, 129;
--color-green-hsl: 103, 16%, 57%;
--color-orange: #f1bb8a;
--color-orange-rgb: 241, 187, 138;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow: #e4bc7f;
--color-yellow-rgb: 228, 188, 127;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan: #9bc7bd;
--color-cyan-rgb: 155, 199, 189;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue: #175c59;
--color-blue-rgb: 23, 92, 89;
--color-blue-hsl: 177, 60%, 23%;
--color-purple: #a69ab5;
--color-purple-rgb: 166, 154, 181;
--color-purple-hsl: 267, 15%, 66%;
--color-pink: #ef796a;
--color-pink-rgb: 239, 121, 106;
--color-pink-hsl: 7, 81%, 68%;
}`,
    },
    "ulu-purple-d": {
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: #000000;
--mono-rgb-100: #a38ab1;
--canvas-color: var(--background-modifier-border);
--proxy-00: #141217;
--proxy-10: #211a23;
--proxy-20: #100e11;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #2a2335;
--color-base-30: #3c344b;
--color-base-35: #5e5863;
--color-base-40: #40344e;
--color-base-50: #665781;
--color-base-60: #a38ab1;
--color-base-70: #c6bdce;
--color-base-100: #d5cdda;
--gradient-bg-primary: linear-gradient(
        135deg,
        #110e16 1.62%,
        #141217 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #18141e 1.62%,
        #1a161d 50.72%
    ) !important;
--background-modifier-border-alt: #44344e !important;
--glass-border-light: #a38ab1;
--glass-border-dark: #696969;
--color-red: #9a453c;
--color-red-rgb: 154, 69, 60;
--color-red-hsl: 6, 44%, 42%;
--color-green: #8ba481;
--color-green-rgb: 139, 164, 129;
--color-green-hsl: 103, 16%, 57%;
--color-orange: #f1bb8a;
--color-orange-rgb: 241, 187, 138;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow: #e4bc7f;
--color-yellow-rgb: 228, 188, 127;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan: #9bc7bd;
--color-cyan-rgb: 155, 199, 189;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue: #175c59;
--color-blue-rgb: 23, 92, 89;
--color-blue-hsl: 177, 60%, 23%;
--color-purple: #a69ab5;
--color-purple-rgb: 166, 154, 181;
--color-purple-hsl: 267, 15%, 66%;
--color-pink: #ef796a;
--color-pink-rgb: 239, 121, 106;
--color-pink-hsl: 7, 81%, 68%;
}`,
    },
    "ulu-soft-dt": {
      dark: `.ulu-soft-dt {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-100: #fbdfc7;
--mono-rgb-0: #696969;
--canvas-color: var(--background-modifier-border);
--proxy-00: #33302e;
--proxy-10: #242424;
--proxy-20: #393633;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #2a2a2a;
--color-base-30: #4c4843;
--color-base-35: #635e58;
--color-base-40: #4c4843;
--color-base-50: #7f7871;
--color-base-60: #9f968d;
--color-base-70: #c6bbb1;
--color-base-100: #ece8e5;
--gradient-bg-primary: linear-gradient(
        135deg,
        #3b3835 1.62%,
        #33302e 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #413d3a 1.62%,
        #393633 50.72%
    ) !important;
--background-modifier-border-alt: #54504a !important;
--glass-border-light: #6b5451;
--glass-border-dark: #696969;
--color-red: #9a453c;
--color-red-rgb: 154, 69, 60;
--color-red-hsl: 6, 44%, 42%;
--color-green: #8ba481;
--color-green-rgb: 139, 164, 129;
--color-green-hsl: 103, 16%, 57%;
--color-orange: #f1bb8a;
--color-orange-rgb: 241, 187, 138;
--color-orange-hsl: 29, 79%, 74%;
--color-yellow: #e4bc7f;
--color-yellow-rgb: 228, 188, 127;
--color-yellow-hsl: 36, 65%, 70%;
--color-cyan: #9bc7bd;
--color-cyan-rgb: 155, 199, 189;
--color-cyan-hsl: 166, 28%, 69%;
--color-blue: #175c59;
--color-blue-rgb: 23, 92, 89;
--color-blue-hsl: 177, 60%, 23%;
--color-purple: #a69ab5;
--color-purple-rgb: 166, 154, 181;
--color-purple-hsl: 267, 15%, 66%;
--color-pink: #ef796a;
--color-pink-rgb: 239, 121, 106;
--color-pink-hsl: 7, 81%, 68%;
}`,
    },
    "ulu-control-d": {
      dark: `.ulu-control-d {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: #000000;
--mono-rgb-100: #ffffff;
--canvas-color: var(--background-modifier-border);
--proxy-00: #1e2126;
--proxy-10: #16181c;
--proxy-20: #262a30;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #212429;
--color-base-30: #2c2f36;
--color-base-35: #3d3d3d;
--color-base-40: #5d5d5d;
--color-base-50: #9097a0;
--color-base-60: #6277cd;
--color-base-70: #d3d1eb;
--color-base-100: #fff;
--color-accent: hsl(50, 100%, 55%) !important;
--color-accent-hsl: 50, 100%, 55% !important;
--color-accent-rgb: 255, 217, 25 !important;
--text-on-accent: var(--color-base-00);
--gradient-bg-primary: linear-gradient(
        135deg,
        #2f343c 1.62%,
        #262a30 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #262a31 1.62%,
        #1e2126 50.72%
    ) !important;
--background-modifier-border-alt: #353841 !important;
--glass-border-light: #d3d1eb;
--glass-border-dark: #1e2126;
--color-red: #f24949;
--color-red-rgb: 242, 73, 73;
--color-red-hsl: 0, 87%, 62%;
--color-orange: #ff8a00;
--color-orange-rgb: 255, 138, 0;
--color-orange-hsl: 32, 100%, 50%;
--color-yellow: #e6e667;
--color-yellow-rgb: 230, 230, 103;
--color-yellow-hsl: 60, 72%, 65%;
--color-green: #2fde73;
--color-green-rgb: 47, 222, 115;
--color-green-hsl: 143, 73%, 53%;
--color-cyan: #50b6ff;
--color-cyan-rgb: 80, 182, 255;
--color-cyan-hsl: 205, 100%, 66%;
--color-blue: #6277cd;
--color-blue-rgb: 98, 119, 205;
--color-blue-hsl: 228, 52%, 59%;
--color-purple: #8966de;
--color-purple-rgb: 137, 102, 222;
--color-purple-hsl: 258, 65%, 64%;
--color-pink: #d74bb1;
--color-pink-rgb: 215, 75, 177;
--color-pink-hsl: 316, 64%, 57%;
}`,
    },
    "ulu-blueprint-d": {
      dark: `.ulu-blueprint-d {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: #002244;
--mono-rgb-100: #ffffff;
--canvas-color: var(--background-modifier-border);
--proxy-00: #0069aa;
--proxy-10: #03193f;
--proxy-20: #00396d;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #002244;
--color-base-30: #004a80;
--color-base-35: #0082d3;
--color-base-40: #009dfc;
--color-base-50: #92a1b9;
--color-base-60: #92a1b9;
--color-base-70: #c7cfdd;
--color-base-100: #fff;
--gradient-bg-primary: linear-gradient(
        135deg,
        #0074bd 1.62%,
        #0069aa 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #003f7a 1.62%,
        #00396d 50.72%
    ) !important;
--background-modifier-border-alt: #fff !important;
--glass-border-light: #c7cfdd;
--glass-border-dark: #00396d;
--color-red: #ff5000;
--color-red-rgb: 255, 80, 0;
--color-red-hsl: 19, 100%, 50%;
--color-orange: #ed7614;
--color-orange-rgb: 237, 118, 20;
--color-orange-hsl: 28, 85%, 50%;
--color-yellow: #edab50;
--color-yellow-rgb: 237, 171, 80;
--color-yellow-hsl: 38, 82%, 62%;
--color-green: #99e65f;
--color-green-rgb: 153, 230, 95;
--color-green-hsl: 95, 73%, 64%;
--color-cyan: #94fdff;
--color-cyan-rgb: 148, 253, 255;
--color-cyan-hsl: 181, 100%, 79%;
--color-blue: #0c0293;
--color-blue-rgb: 12, 2, 147;
--color-blue-hsl: 244, 97%, 29%;
--color-purple: #93388f;
--color-purple-rgb: 147, 56, 143;
--color-purple-hsl: 303, 45%, 40%;
--color-pink: #f68187;
--color-pink-rgb: 246, 129, 135;
--color-pink-hsl: 356, 87%, 74%;
}`,
    },
    "ulu-arch-d": {
      dark: `.ulu-arch-d {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: #000000;
--mono-rgb-100: #ffffff;
--canvas-color: var(--background-modifier-border);
--proxy-00: #1b1b1b;
--proxy-10: #242424;
--proxy-20: #232323;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #2a2a2a;
--color-base-30: #1f1f1f;
--color-base-35: #4f4d4d;
--color-base-40: #4f4d4d;
--color-base-50: #686666;
--color-base-60: #848282;
--color-base-70: #a7a4a4;
--color-base-100: #cfcccc;
--gradient-bg-primary: linear-gradient(135deg, #222 1.62%, #1b1b1b 50.72%) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #1a1a1a 1.62%,
        #232323 50.72%
    ) !important;
--background-modifier-border-alt: #4f4d4d;
--glass-border-light: #a7a4a4;
--glass-border-dark: #020202;
--color-red: #68342b;
--color-red-rgb: 104, 52, 43;
--color-red-hsl: 9, 41%, 29%;
--color-orange: #e1a261;
--color-orange-rgb: 225, 162, 97;
--color-orange-hsl: 30, 68%, 63%;
--color-yellow: #89744a;
--color-yellow-rgb: 137, 116, 74;
--color-yellow-hsl: 40, 30%, 41%;
--color-green: #465037;
--color-green-rgb: 70, 80, 55;
--color-green-hsl: 84, 19%, 26%;
--color-cyan: #87b2b8;
--color-cyan-rgb: 135, 178, 184;
--color-cyan-hsl: 187, 26%, 63%;
--color-blue: #6d93b8;
--color-blue-rgb: 109, 147, 184;
--color-blue-hsl: 210, 35%, 57%;
--color-purple: #4d4159;
--color-purple-rgb: 77, 65, 89;
--color-purple-hsl: 270, 16%, 30%;
--color-pink: #7d4c4a;
--color-pink-rgb: 125, 76, 74;
--color-pink-hsl: 2, 26%, 39%;
}`,
    },
    "ulu-shark-d": {
      dark: `.ulu-shark-d {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: #000000;
--mono-rgb-100: #fefefe;
--canvas-color: var(--background-modifier-border);
--proxy-00: #38333d;
--proxy-10: #47414e;
--proxy-20: #252228;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #332f37;
--color-base-30: #3f3a45;
--color-base-35: #8e718e;
--color-base-40: #8e718e;
--color-base-50: #d8ccd8;
--color-base-60: #d3c9d3;
--color-base-70: #d3c9d3;
--color-base-100: #fefefe;
--gradient-bg-primary: linear-gradient(
        135deg,
        #38333d 1.62%,
        #332e38 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #332f37 1.62%,
        #252228 50.72%
    ) !important;
--gradient-bg-tertiary: linear-gradient(135deg, #8e718e 30.62%, #836383 90.72%);
--background-modifier-border-alt: #9c7b9c;
--glass-border-light: #d8ccd8;
--glass-border-dark: #3f3a45;
--color-red: #f74545;
--color-red-rgb: 247, 69, 69;
--color-red-hsl: 0, 92%, 62%;
--color-orange: #f78a45;
--color-orange-rgb: 247, 138, 69;
--color-orange-hsl: 23, 92%, 62%;
--color-yellow: #f7cc44;
--color-yellow-rgb: 247, 204, 68;
--color-yellow-hsl: 46, 92%, 62%;
--color-green: #45f77b;
--color-green-rgb: 69, 247, 123;
--color-green-hsl: 138, 92%, 62%;
--color-cyan: #45cef7;
--color-cyan-rgb: 69, 206, 247;
--color-cyan-hsl: 194, 92%, 62%;
--color-blue: #5bcefa;
--color-blue-rgb: 91, 206, 250;
--color-blue-hsl: 197, 95%, 67%;
--color-purple: #aa45f7;
--color-purple-rgb: 170, 69, 247;
--color-purple-hsl: 274, 92%, 62%;
--color-pink: #f5a9b8;
--color-pink-rgb: 245, 169, 184;
--color-pink-hsl: 348, 83%, 81%;
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
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--accent-h: 1;
--accent-s: 71.2%;
--accent-l: 52.4%;
--mono-rgb-0: #002b36;
--mono-rgb-100: #93a1a1;
--canvas-color: var(--background-modifier-border);
--proxy-00: #073642;
--proxy-10: #08404e;
--proxy-20: #002b36;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #023845;
--color-base-30: #0e4b5a;
--color-base-35: #637c84;
--color-base-40: #002b36;
--color-base-50: #586e75;
--color-base-60: #93a1a1;
--color-base-70: #839496;
--color-base-100: #93a1a1;
--gradient-bg-primary: linear-gradient(
        135deg,
        #08404e 1.62%,
        #073642 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #003947 1.62%,
        #002b36 50.72%
    ) !important;
--background-modifier-border-alt: #375662 !important;
--glass-border-light: #586e75;
--glass-border-dark: #073642;
--color-red: #dc322f;
--color-red-hsl: 1, 71.2%, 52.4%;
--color-red-rgb: 220, 50, 47;
--color-green: #859900;
--color-green-hsl: 67.8, 100%, 30%;
--color-green-rgb: 133, 153, 0;
--color-orange: #cb4b16;
--color-orange-hsl: 17.6, 80.4%, 44.1%;
--color-orange-rgb: 203, 75, 22;
--color-yellow: #b58900;
--color-yellow-hsl: 45.4, 100%, 35.5%;
--color-yellow-rgb: 181, 137, 0;
--color-cyan: #2aa198;
--color-cyan-hsl: 175.5, 58.6%, 39.8%;
--color-cyan-rgb: 42, 161, 152;
--color-blue: #268bd2;
--color-blue-hsl: 204.8, 69.4%, 48.6%;
--color-blue-rgb: 38, 139, 210;
--color-purple: #6c71c4;
--color-purple-hsl: 236.6, 42.7%, 59.6%;
--color-purple-rgb: 108, 113, 196;
--color-pink: #d33682;
--color-pink-hsl: 331, 64.1%, 52%;
--color-pink-rgb: 211, 54, 130;
}`,
    },
    "ulu-gruvbox-dt": {
      dark: `.ulu-gruvbox-dt {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--accent-h: 75;
--accent-s: 21%;
--accent-l: 57%;
--mono-rgb-100: #fbf1c7;
--mono-rgb-0: #696969;
--canvas-color: var(--background-modifier-border);
--proxy-00: #282828;
--proxy-10: #1d2021;
--proxy-20: #32302f;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #3c3836;
--color-base-30: #504945;
--color-base-35: #665c54;
--color-base-40: #64594f;
--color-base-50: #bdae93;
--color-base-60: #d5c4a1;
--color-base-70: #ebdbb2;
--color-base-100: #fbf1c7;
--gradient-bg-primary: linear-gradient(
        135deg,
        #313131 1.62%,
        #282828 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #3c3a39 1.62%,
        #32302f 50.72%
    ) !important;
--background-modifier-border-alt: #504945 !important;
--glass-border-light: #516b5e;
--glass-border-dark: #696969;
--color-red: #cc241d;
--color-red-rgb: 204, 36, 29;
--color-red-hsl: 2.4, 75.1%, 45.7%;
--color-green: #98971a;
--color-green-rgb: 152, 151, 26;
--color-green-hsl: 59.5, 70.8%, 34.9%;
--color-orange: #d65d0e;
--color-orange-rgb: 214, 93, 14;
--color-orange-hsl: 23.7, 87.7%, 44.7%;
--color-yellow: #d79921;
--color-yellow-rgb: 215, 153, 33;
--color-yellow-hsl: 39.6, 73.4%, 48.6%;
--color-cyan: #689d6a;
--color-cyan-rgb: 104, 157, 106;
--color-cyan-hsl: 122.3, 21.3%, 51.2%;
--color-blue: #458588;
--color-blue-rgb: 69, 133, 136;
--color-blue-hsl: 182.7, 32.7%, 40.2%;
--color-purple: #b16286;
--color-purple-rgb: 177, 98, 134;
--color-purple-hsl: 332.7, 33.6%, 53.9%;
--color-pink: #eb6faf;
--color-pink-rgb: 235, 111, 175;
--color-pink-hsl: 329, 75.6%, 67.8%;
}`,
    },
    "ulu-lobstertime-dt": {
      dark: `.ulu-lobstertime-dt {
--accent-h: 75;
--accent-s: 21%;
--accent-l: 57%;
--mono-rgb-0: #0a1128;
--mono-rgb-100: #e6e9f0;
--canvas-color: var(--background-modifier-border);
--proxy-00: #0a1128;
--proxy-10: #121c3b;
--proxy-20: #1c2a52;
--color-red: #ea5e41;
--color-red-hsl: 10.3, 80.1%, 58.6%;
--color-red-rgb: 234, 94, 65;
--color-green: #5fb26b;
--color-green-hsl: 128.7, 35%, 53.5%;
--color-green-rgb: 95, 178, 107;
--color-orange: #ed874c;
--color-orange-hsl: 22, 81.7%, 61.4%;
--color-orange-rgb: 237, 135, 76;
--color-yellow: #e9bf55;
--color-yellow-hsl: 43, 77.1%, 62.4%;
--color-yellow-rgb: 233, 191, 85;
--color-cyan: #47afeb;
--color-cyan-hsl: 202, 80.4%, 60%;
--color-cyan-rgb: 71, 175, 235;
--color-blue: #2e8ccc;
--color-blue-hsl: 204.3, 63.2%, 49%;
--color-blue-rgb: 46, 140, 204;
--color-purple: #4b53d1;
--color-purple-hsl: 236.4, 59.3%, 55.7%;
--color-purple-rgb: 75, 83, 209;
--color-pink: #eb6faf;
--color-pink-hsl: 329, 75.6%, 67.8%;
--color-pink-rgb: 235, 111, 175;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #1c2a52;
--color-base-30: #2a3b6e;
--color-base-35: #3a4b82;
--color-base-40: #2a3b6e;
--color-base-50: #4a5c96;
--color-base-60: #5a6ca8;
--color-base-70: #8a9ccc;
--color-base-100: #e6e9f0;
--gradient-bg-primary: linear-gradient(
        135deg,
        #0e1633 1.62%,
        #0a1128 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #182347 1.62%,
        #121c3b 50.72%
    ) !important;
--background-modifier-border-alt: #2a3b6e !important;
--glass-border-light: #5a6ca8;
--glass-border-dark: #0a1128;
}`,
    },
    "ulu-dracula-dt": {
      dark: `.ulu-dracula-dt {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--accent-h: 1;
--accent-s: 71.2%;
--accent-l: 52.4%;
--mono-rgb-0: #282a36;
--mono-rgb-100: #f8f8f2;
--canvas-color: var(--background-modifier-border);
--proxy-00: #282a36;
--proxy-10: #44475a;
--proxy-20: #1a1e24;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #282a36;
--color-base-30: #44475a;
--color-base-35: #4f5269;
--color-base-40: #282a36;
--color-base-50: #6272a4;
--color-base-60: #6272a4;
--color-base-70: #f8f8f2;
--color-base-100: #fefefa;
--gradient-bg-primary: linear-gradient(
        135deg,
        #2e303e 1.62%,
        #282a36 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #20252c 1.62%,
        #1a1e24 50.72%
    ) !important;
--background-modifier-border-alt: #44475a !important;
--glass-border-light: #6272a4;
--glass-border-dark: #44475a;
--color-red: #ff5555;
--color-red-hsl: 0, 100%, 66.7%;
--color-red-rgb: 255, 85, 85;
--color-green: #50fa7b;
--color-green-hsl: 135.2, 94.4%, 64.7%;
--color-green-rgb: 80, 250, 123;
--color-orange: #ffb86c;
--color-orange-hsl: 31, 100%, 71.2%;
--color-orange-rgb: 255, 184, 108;
--color-yellow: #f1fa8c;
--color-yellow-hsl: 64.9, 91.7%, 76.5%;
--color-yellow-rgb: 241, 250, 140;
--color-cyan: #8be9fd;
--color-cyan-hsl: 190.5, 96.6%, 76.9%;
--color-cyan-rgb: 139, 233, 253;
--color-blue: #8bc6fd;
--color-blue-hsl: 208.9, 96.6%, 76.9%;
--color-blue-rgb: 139, 198, 253;
--color-purple: #bd93f9;
--color-purple-hsl: 264.7, 89.5%, 77.6%;
--color-purple-rgb: 189, 147, 249;
--color-pink: #ff79c6;
--color-pink-hsl: 325.5, 100%, 73.7%;
--color-pink-rgb: 255, 121, 198;
}`,
    },
    "ulu-lyt-dt": {
      dark: `.ulu-lyt-dt {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--accent-h: 191 !important;
--accent-s: 54% !important;
--accent-l: 64% !important;
--mono-rgb-0: #1e1f24;
--mono-rgb-100: #e8ecf5;
--canvas-color: var(--background-modifier-border);
--proxy-00: #23242a;
--proxy-10: #1e1f24;
--proxy-20: #2d3039;
--color-red: #e63946;
--color-red-hsl: 355.5, 77.6%, 56.3%;
--color-red-rgb: 230, 57, 70;
--color-green: #60993e;
--color-green-hsl: 97.6, 42.3%, 42.2%;
--color-green-rgb: 96, 153, 62;
--color-orange: #ffcdb2;
--color-orange-hsl: 21, 100%, 84.9%;
--color-orange-rgb: 255, 205, 178;
--color-yellow: #f2cc8f;
--color-yellow-hsl: 37, 79.2%, 75.5%;
--color-yellow-rgb: 242, 204, 143;
--color-cyan: #72a1e5;
--color-cyan-hsl: 215.5, 68.9%, 67.3%;
--color-cyan-rgb: 114, 161, 229;
--color-blue: #52b2cf;
--color-blue-hsl: 193.9, 56.6%, 56.7%;
--color-blue-rgb: 82, 178, 207;
--color-purple: #9097c0;
--color-purple-hsl: 231.3, 27.6%, 65.9%;
--color-purple-rgb: 144, 151, 192;
--color-pink: #efd4bf;
--color-pink-hsl: 26.3, 60%, 84.3%;
--color-pink-rgb: 239, 212, 191;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #343a4b;
--color-base-30: #2a2c33;
--color-base-35: #7c849c;
--color-base-40: #a0a7bb;
--color-base-50: #b9c3df;
--color-base-60: #dbe2f5;
--color-base-70: #72c3d5;
--color-base-100: #e8ecf5;
--gradient-bg-primary: linear-gradient(
        135deg,
        #2a2b32 1.62%,
        #23242a 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #363a45 1.62%,
        #2d3039 50.72%
    ) !important;
--background-modifier-border-alt: #6c7184 !important;
--glass-border-light: #dbe2f5;
--glass-border-dark: #6c7184;
}`,
    },
    "ulu-abaddon-d": {
      dark: `.ulu-abaddon-d {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: #000000;
--mono-rgb-100: #ffffff;
--canvas-color: var(--background-modifier-border);
--proxy-00: #0b0b0b;
--proxy-10: #2e2e2e;
--proxy-20: #000000;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #101010;
--color-base-30: #1f1f1f;
--color-base-35: #2c2c2c;
--color-base-40: #3b3b3b;
--color-base-50: #5c5c5c;
--color-base-60: #808080;
--color-base-70: #a3a3a3;
--color-base-100: #fff;
--gradient-bg-primary: linear-gradient(
        135deg,
        #060606 20.62%,
        #000 90.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #000 20.62%,
        #030303 90.72%
    ) !important;
--background-modifier-border-alt: #131313 !important;
--glass-border-light: #cdcdcd;
--glass-border-dark: #3d3d3d;
}

body.ulu-abaddon-d:not(.is-mobile) .workspace-split.mod-root .view-content {
background-image:
        linear-gradient(var(--color-base-25), var(--color-base-25)),
        linear-gradient(
            var(--glass-angle-light),
            rgb(from var(--color-base-100) r g b/0.1) 0%,
            transparent 40%,
            transparent 60%,
            rgb(from var(--color-base-100) r g b/0.1) 100%
        ),
        linear-gradient(
            var(--glass-angle-dark),
            rgb(from var(--color-base-30) r g b/0.4) 0%,
            transparent 40%,
            transparent 60%,
            rgb(from var(--color-base-30) r g b/0.4) 100%
        );
}`,
    },
    "ulu-abaddon-glass-d": {
      dark: `.ulu-abaddon-glass-d {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: #000000;
--mono-rgb-100: #ffffff;
--canvas-color: var(--background-modifier-border);
--proxy-00: #0b0b0b;
--proxy-10: #2e2e2e;
--proxy-20: #000000;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: rgba(16, 16, 16, 0.4);
--color-base-30: #1f1f1f;
--color-base-35: #2c2c2c;
--color-base-40: #3b3b3b;
--color-base-50: #5c5c5c;
--color-base-60: #808080;
--color-base-70: #a3a3a3;
--color-base-100: #fff;
--gradient-bg-primary: linear-gradient(
        135deg,
        rgba(6, 6, 6, 0.4) 20.62%,
        rgba(0, 0, 0, 0.4) 90.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.4) 20.62%,
        rgba(3, 3, 3, 0.4) 90.72%
    ) !important;
--background-modifier-border-alt: #131313 !important;
--glass-border-light: #cdcdcd;
--glass-border-dark: #3d3d3d;
}

body.ulu-abaddon-glass-d:not(.is-mobile) .workspace-split.mod-root .view-content, body.ulu-abaddon-glass-d .titlebar-button-container.mod-left, body.ulu-abaddon-glass-d .titlebar-button-container.mod-right, body.ulu-abaddon-glass-d .search-input-container, body.ulu-abaddon-glass-d .search-input-container > input, body.ulu-abaddon-glass-d .workspace-leaf-content[data-type="search"] .search-input-container {
/* .𖥔 ݁ ˖  define the angles so the background gradient doesn't break! ⊹ ࣪ ˖ */
--glass-angle-light: 120deg;
--glass-angle-dark: 125deg;
background-color: transparent !important;
background-origin: border-box !important;
background-clip: padding-box, border-box, border-box !important;
border: 1px solid transparent !important;
border-radius: var(--ulu-radius) !important;
background-image:
        linear-gradient(var(--color-base-25), var(--color-base-25)),
        linear-gradient(
            var(--glass-angle-light),
            rgb(from var(--color-base-100) r g b/0.1) 0%,
            transparent 40%,
            transparent 60%,
            rgb(from var(--color-base-100) r g b/0.1) 100%
        ),
        linear-gradient(
            var(--glass-angle-dark),
            rgb(from var(--color-base-30) r g b/0.4) 0%,
            transparent 40%,
            transparent 60%,
            rgb(from var(--color-base-30) r g b/0.4) 100%
        ) !important;
backdrop-filter: blur(25px) saturate(130%) !important;
-webkit-backdrop-filter: blur(25px) saturate(130%) !important;
}

body.ulu-abaddon-glass-d:not(.is-mobile) .view-header-left, body.ulu-abaddon-glass-d .view-actions, body.ulu-abaddon-glass-d .workspace-tab-header-container-inner, body.ulu-abaddon-glass-d .canvas-control-group, body.ulu-abaddon-glass-d .canvas-card-menu, body.ulu-abaddon-glass-d .canvas-control-item:not(.canvas-color-picker-item) {
backdrop-filter: blur(25px) saturate(130%) !important;
background: transparent !important;
border: 1px solid rgb(from var(--mono-rgb-100) r g b/0.1) !important;
}

body.ulu-abaddon-glass-d .mod-root .workspace-tab-header-tab-list, body.ulu-abaddon-glass-d .mod-root .workspace-tab-header-new-tab {
backdrop-filter: blur(25px) saturate(130%) !important;
background-color: transparent !important;
border-top: 1px solid rgb(from var(--mono-rgb-100) r g b/0.1) !important;
border-bottom: 1px solid rgb(from var(--mono-rgb-100) r g b/0.1) !important;
}

body.ulu-abaddon-glass-d .mod-root .workspace-tab-header-new-tab, body.ulu-abaddon-glass-d .mod-root .workspace-tab-header-tab-list {
box-shadow: inset -1px 0 0 rgb(from var(--mono-rgb-100) r g b/0.1) !important;
}

body.ulu-abaddon-glass-d .mod-root .sidebar-toggle-button {
backdrop-filter: blur(25px) saturate(130%) !important;
background-color: transparent !important;
border: 1px solid rgb(from var(--mono-rgb-100) r g b/0.1) !important;
}

body.ulu-abaddon-glass-d .workspace-split.mod-root .workspace-tab-header.is-active .workspace-tab-header-inner, body.ulu-abaddon-glass-d .workspace-tab-header.is-active .workspace-tab-header-inner, body.ulu-abaddon-glass-d .workspace-split.mod-root .workspace-tab-header.is-active {
background: linear-gradient(
        180deg,
        rgb(from var(--mono-rgb-100) r g b/0.3) 0%,
        rgb(from var(--mono-rgb-100) r g b/0.3) 50%
    ) !important;
box-shadow:
        inset 0 1px 0 0 rgb(from var(--mono-rgb-100) r g b/0.5),
        inset 0 0 15px rgb(from var(--color-base-35) r g b/0) !important;
border-radius: 50px !important;
color: var(--mono-rgb-100) !important;
}

body.ulu-abaddon-glass-d .workspace-split.mod-root .workspace-tab-header.is-active.is-active, body.is-focused .mod-active .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner-title, body.is-focused .workspace-tab-header-container .workspace-tab-header.is-active, .ulu-abaddon-glass-d .mod-left-split .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner-icon {
--tab-text-color-focused-active: var(--mono-rgb-100) !important;
color: var(--tab-text-color-focused-active) !important;
}

body.ulu-abaddon-glass-d .view-header-title-container {
background-image: none !important;
background-color: transparent !important;
box-shadow: none !important;
border: none !important;
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important;
}

body.ulu-abaddon-glass-d .tree-item-self .tree-item-icon {
background-color: rgb(from var(--mono-rgb-100) r g b/0.2) !important;
box-shadow:
        inset 1px 1px 3px 0 rgb(from var(--mono-rgb-100) r g b/0.25),
        inset -1px -1px 3px 0 rgb(from var(--mono-rgb-100) r g b/0.5),
        0 2px 5px rgb(from var(--mono-rgb-100) r g b/0.2) !important;
color: var(--text-normal);
}

body.ulu-abaddon-glass-d .nav-folder > .nav-folder-children {
padding-left: 2px !important;
margin-left: 15px !important;
border-left: var(--nav-indentation-guide-width) solid
        rgb(from var(--mono-rgb-100) r g b/0.3);
}

body.ulu-abaddon-glass-d .collapse-icon svg.svg-icon {
color: var(--mono-rgb-100) !important;
}

body.ulu-abaddon-glass-d .nav-folder-title .nav-folder-title-content {
background: linear-gradient(
        90deg,
        rgb(from var(--mono-rgb-100) r g b/0.14) 0%,
        rgb(from var(--mono-rgb-0) r g b/0.01) 60%,
        transparent 100%
    );
}

body.ulu-abaddon-glass-d .nav-folder-title-content {
color: rgb(from var(--mono-rgb-100) r g b/0.65);
}

body.ulu-abaddon-glass-d .nav-folder:not(.is-collapsed) > .nav-folder-title .nav-folder-title-content {
background: linear-gradient(
        90deg,
        rgb(from var(--mono-rgb-100) r g b/0.25) 0%,
        rgb(from var(--mono-rgb-0) r g b/0.01) 60%,
        transparent 100%
    ) !important;
color: var(--mono-rgb-100) !important;
}

body.ulu-abaddon-glass-d .nav-folder:has(.nav-file-title.is-active) > .nav-folder-title .nav-folder-title-content {
background: linear-gradient(
        90deg,
        rgb(from var(--color-accent) r g b/0.3) 0%,
        rgb(from var(--mono-rgb-0) r g b/0) 60%,
        transparent 100%
    ) !important;
}

body.ulu-abaddon-glass-d .workspace-tab-header-container, body.ulu-abaddon-glass-d .search-input-container, body.ulu-abaddon-glass-d .titlebar-button-container, body.ulu-abaddon-glass-d .view-actions, body.ulu-abaddon-glass-d:not(.is-mobile) .view-header-left {
box-shadow: none !important;
}

body.ulu-abaddon-glass-d .side-dock-settings {
gap: var(--size-2-3);
color: white;
}

body.ulu-abaddon-glass-d .side-dock-actions .clickable-icon {
color: rgb(from var(--mono-rgb-100) r g b/0.65) !important;
}

body.ulu-abaddon-glass-d .sidebar-toggle-button:not(.mod-right) {
margin-top: 6px;
height: 32px;
width: 36px;
background: transparent;
backdrop-filter: blur(25px);
border: 1px solid rgb(from var(--mono-rgb-100) r g b/0.1);
border-radius: 50px;
}

body.ulu-abaddon-glass-d:not(.is-mobile) .workspace-split.mod-left-split .workspace-sidedock-vault-profile .workspace-drawer-vault-actions .clickable-icon {
color: rgb(from var(--mono-rgb-100) r g b/0.65) !important;
}

body.ulu-abaddon-glass-d:not(.is-mobile) .workspace-split.mod-left-split .workspace-sidedock-vault-profile .workspace-drawer-vault-switcher {
background: transparent !important;
backdrop-filter: blur(25px) !important;
border: 1px solid rgb(from var(--mono-rgb-100) r g b/0.1) !important;
border-radius: 50px;
background-image: transparent !important;
}

body.ulu-abaddon-glass-d .tooltip {
background-color: transparent !important;
background-origin: border-box !important;
background-clip: padding-box, border-box, border-box !important;
border: 1px solid transparent !important;
background-image:
        linear-gradient(var(--color-base-25), var(--color-base-25)),
        linear-gradient(
            var(--glass-angle-light),
            rgb(from var(--color-base-100) r g b/0.15) 0%,
            transparent 40%,
            transparent 60%,
            rgb(from var(--color-base-100) r g b/0.15) 100%
        ),
        linear-gradient(
            var(--glass-angle-dark),
            rgb(from var(--color-base-30) r g b/0.4) 0%,
            transparent 40%,
            transparent 60%,
            rgb(from var(--color-base-30) r g b/0.4) 100%
        ) !important;
box-shadow: var(--lbs) !important;
backdrop-filter: blur(25px) saturate(130%) !important;
-webkit-backdrop-filter: blur(25px) saturate(130%) !important;
color: var(--mono-rgb-100) !important;
}

body.ulu-abaddon-glass-d .clickable-icon:hover:not(.canvas-color-picker-item) {
background-color: transparent !important;
background-image: linear-gradient(
        180deg,
        rgb(from var(--color-base-100) r g b/0.1) 0%,
        rgb(from var(--color-base-100) r g b/0.02) 100%
    ) !important;
border-color: transparent !important;
box-shadow: inset 0 1px 0 0 rgb(from var(--mono-rgb-100) r g b/0.1) !important;
}

body.ulu-abaddon-glass-d:not(.is-mobile) .clickable-icon[aria-label="New note"] {
background-color: transparent !important;
background-origin: border-box !important;
background-clip: padding-box, border-box, border-box !important;
border: 1px solid transparent !important;
background-image:
        linear-gradient(var(--color-base-25), var(--color-base-25)),
        linear-gradient(
            var(--glass-angle-light),
            rgb(from var(--color-base-100) r g b/0.15) 0%,
            transparent 40%,
            transparent 60%,
            rgb(from var(--color-base-100) r g b/0.15) 100%
        ),
        linear-gradient(
            var(--glass-angle-dark),
            rgb(from var(--color-base-30) r g b/0.4) 0%,
            transparent 40%,
            transparent 60%,
            rgb(from var(--color-base-30) r g b/0.4) 100%
        ) !important;
box-shadow: var(--lbs) !important;
color: var(--mono-rgb-100) !important;
border-radius: 50px !important;
padding: 2px 8px !important;
}

body.ulu-abaddon-glass-d:not(.is-mobile) .clickable-icon[aria-label="New note"]:hover {
background-image:
        linear-gradient(
            rgb(from var(--color-base-30) r g b/0.8),
            rgb(from var(--color-base-30) r g b/0.8)
        ),
        linear-gradient(
            var(--glass-angle-light),
            rgb(from var(--color-base-100) r g b/0.1) 0%,
            transparent 40%,
            transparent 60%,
            rgb(from var(--color-base-100) r g b/0.2) 100%
        ),
        linear-gradient(
            var(--glass-angle-dark),
            rgb(from var(--color-base-30) r g b/0.5) 0%,
            transparent 40%,
            transparent 60%,
            rgb(from var(--color-base-30) r g b/0.5) 100%
        ) !important;
}

body.ulu-abaddon-glass-d:not(.is-mobile) .nav-buttons-container .clickable-icon {
color: rgb(from var(--mono-rgb-100) r g b/0.65) !important;
}

body.ulu-abaddon-glass-d .view-header-title-container .clickable-icon, body.ulu-abaddon-glass-d .view-actions .clickable-icon, body.ulu-abaddon-glass-d .workspace-tab-header-container .clickable-icon {
color: var(--mono-rgb-100) !important;
}

body.ulu-abaddon-glass-d .workspace-split.mod-root .workspace-tab-header.is-active .workspace-tab-header-inner, body.ulu-abaddon-glass-d .workspace-tab-header.is-active .workspace-tab-header-inner {
background-color: transparent !important;
background-origin: border-box !important;
background-clip: padding-box, border-box, border-box !important;
border: 1px solid transparent !important;
border-radius: 50px !important;
background-image:
        linear-gradient(var(--color-base-25), var(--color-base-25)),
        linear-gradient(
            var(--glass-angle-light),
            rgb(from var(--color-base-100) r g b/0.15) 0%,
            transparent 40%,
            transparent 60%,
            rgb(from var(--color-base-100) r g b/0.15) 100%
        ),
        linear-gradient(
            var(--glass-angle-dark),
            rgb(from var(--color-base-30) r g b/0.4) 0%,
            transparent 40%,
            transparent 60%,
            rgb(from var(--color-base-30) r g b/0.4) 100%
        ) !important;
/* .𖥔 ݁ ˖  adds a subtle top-light edge so it pops like image 1 ⊹ ࣪ ˖ */
box-shadow:
        inset 0 1px 0 0 rgb(from var(--mono-rgb-100) r g b/0.2),
        var(--lbs) !important;
color: var(--mono-rgb-100) !important;
backdrop-filter: blur(25px) saturate(130%) !important;
-webkit-backdrop-filter: blur(25px) saturate(130%) !important;
}

body.ulu-abaddon-glass-d .workspace-split.mod-root .workspace-tab-header.is-active {
background: transparent !important;
box-shadow: none !important;
border: none !important;
}

body.ulu-abaddon-glass-d .mod-left-split .workspace-tab-header.is-active {
border: 1px solid transparent !important;
background: transparent !important;
box-shadow: none !important;
border-radius: 50px;
background-origin: border-box;
background-clip: padding-box, border-box;
}

body.ulu-abaddon-glass-d .nav-file-title-content {
color: rgb(from var(--mono-rgb-100) r g b/0.65) !important;
}

body.ulu-enable-custom-bg.ulu-abaddon-glass-d {
background-image: var(--ulu-custom-bg-url, none) !important;
background-size: cover !important;
background-position: center !important;
background-repeat: no-repeat !important;
background-attachment: fixed !important;
}

body.ulu-enable-custom-bg.ulu-abaddon-glass-d .app-container {
background-color: transparent !important;
}

body.ulu-enable-custom-bg.ulu-abaddon-glass-d .workspace {
background-color: transparent !important;
background-image: none !important;
}`,
    },
    "ulu-succ-d": {
      dark: `.ulu-succ-d {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--accent-h: 1;
--accent-s: 71.2%;
--accent-l: 52.4%;
--mono-rgb-0: #0d0d29;
--mono-rgb-100: #ffffff;
--canvas-color: var(--background-modifier-border);
--proxy-00: #2a2754;
--proxy-10: #222047;
--proxy-20: #222047;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #33305c;
--color-base-30: #28264d;
--color-base-35: #c78cd9;
--color-base-40: #8405ec;
--color-base-50: #b4acc3;
--color-base-60: #ff9b54;
--color-base-70: #e0e1dd;
--color-base-100: #ffffff;
--gradient-bg-primary: linear-gradient(
        135deg,
        #2a2754 1.62%,
        #222047 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #1d1b40 1.62%,
        #151433 50.72%
    ) !important;
--background-modifier-border-alt: #33305c !important;
--glass-border-light: #e0e1dd;
--glass-border-dark: #33305c;
--color-red: #ff5555;
--color-red-hsl: 0, 100%, 66.7%;
--color-red-rgb: 255, 85, 85;
--color-green: #50fa7b;
--color-green-hsl: 135.2, 94.4%, 64.7%;
--color-green-rgb: 80, 250, 123;
--color-orange: #ffb86c;
--color-orange-hsl: 31, 100%, 71.2%;
--color-orange-rgb: 255, 184, 108;
--color-yellow: #f1fa8c;
--color-yellow-hsl: 64.9, 91.7%, 76.5%;
--color-yellow-rgb: 241, 250, 140;
--color-cyan: #8be9fd;
--color-cyan-hsl: 190.5, 96.6%, 76.9%;
--color-cyan-rgb: 139, 233, 253;
--color-blue: #8bc6fd;
--color-blue-hsl: 208.9, 96.6%, 76.9%;
--color-blue-rgb: 139, 198, 253;
--color-purple: #bd93f9;
--color-purple-hsl: 264.7, 89.5%, 77.6%;
--color-purple-rgb: 189, 147, 249;
--color-pink: #ff79c6;
--color-pink-hsl: 325.5, 100%, 73.7%;
--color-pink-rgb: 255, 121, 198;
}`,
    },
    "ulu-queen-d": {
      dark: `.ulu-queen-d {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--accent-h: 1;
--accent-s: 71.2%;
--accent-l: 52.4%;
--mono-rgb-0: #290d0d;
--mono-rgb-100: #ffffff;
--canvas-color: var(--background-modifier-border);
--proxy-00: #542727;
--proxy-10: #472020;
--proxy-20: #472020;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #5c3030;
--color-base-30: #4d2626;
--color-base-35: #d98c8c;
--color-base-40: #ec0505;
--color-base-50: #c3acac;
--color-base-60: #ff5454;
--color-base-70: #e1dddd;
--color-base-100: #ffffff;
--gradient-bg-primary: linear-gradient(
        135deg,
        #542727 1.62%,
        #472020 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #401b1b 1.62%,
        #331414 50.72%
    ) !important;
--background-modifier-border-alt: #5c3030 !important;
--glass-border-light: #e1dddd;
--glass-border-dark: #5c3030;
--color-red: #ea4f4f;
--color-red-rgb: 234, 79, 79;
--color-red-hsl: 0, 78%, 61%;
--color-green: #90d381;
--color-green-rgb: 144, 211, 129;
--color-green-hsl: 109, 49%, 67%;
--color-orange: #ff9b54;
--color-orange-rgb: 255, 155, 84;
--color-orange-hsl: 25, 100%, 66%;
--color-yellow: #f2cb7c;
--color-yellow-rgb: 242, 203, 124;
--color-yellow-hsl: 40, 83%, 72%;
--color-cyan: #7cd2cd;
--color-cyan-rgb: 124, 210, 205;
--color-cyan-hsl: 177, 49%, 65%;
--color-blue: #7c98f2;
--color-blue-rgb: 124, 152, 242;
--color-blue-hsl: 226, 83%, 72%;
--color-purple: #b58ce5;
--color-purple-rgb: 181, 140, 229;
--color-purple-hsl: 268, 66%, 72%;
--color-pink: #e18ebf;
--color-pink-rgb: 225, 142, 191;
--color-pink-hsl: 325, 62%, 72%;
}`,
    },
    "ulu-bunny-d": {
      dark: `.ulu-bunny-d {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--accent-h: 26;
--accent-s: 50%;
--accent-l: 55%;
--mono-rgb-0: #211915;
--mono-rgb-100: #ffffff;
--canvas-color: var(--background-modifier-border);
--proxy-00: #3b2c24;
--proxy-10: #30241d;
--proxy-20: #30241d;
--color-base-00: var(--proxy-00);
--color-base-10: var(--proxy-10);
--color-base-20: var(--proxy-20);
--color-base-25: #42322a;
--color-base-30: #362922;
--color-base-35: #c29f8c;
--color-base-40: #d68d54;
--color-base-50: #a3897a;
--color-base-60: #d68d54;
--color-base-70: #e3d8d1;
--color-base-100: #ffffff;
--gradient-bg-primary: linear-gradient(
        135deg,
        #3b2c24 1.62%,
        #30241d 50.72%
    ) !important;
--gradient-bg-secondary: linear-gradient(
        135deg,
        #2b201a 1.62%,
        #211813 50.72%
    ) !important;
--background-modifier-border-alt: #42322a !important;
--glass-border-light: #e3d8d1;
--glass-border-dark: #42322a;
}`,
    },
    "ulu-enable-custom-bg": {
      dark: `body.ulu-abaddon-glass-d {
background-image: var(--ulu-custom-bg-url, none) !important;
background-size: cover !important;
background-position: center !important;
background-repeat: no-repeat !important;
background-attachment: fixed !important;
}

body.ulu-abaddon-glass-d .app-container {
background-color: transparent !important;
}

body.ulu-abaddon-glass-d .workspace {
background-color: transparent !important;
background-image: none !important;
}`,
    },
    "ulu-grad": {
      general: `body.ulu-grad .app-container::before {
content: "";
/* .𖥔 ݁ ˖  use a massive square relative to vmax so it always covers the screen  regardless of orientation, preventing clipping on all sides ⊹ ࣪ ˖
*/
height: 150vmax;
width: 150vmax;
background: radial-gradient(
        circle,
        transparent 0%,
        var(--color-accent) 30%,
        transparent 70%
    );
position: fixed;
top: 50%;
left: 50%;
margin-left: -75vmax;
margin-top: -75vmax;
animation: scale-up-center 25s linear infinite;
pointer-events: none;
z-index: 0;
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container, .ulu-gradient-canvas2 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container, .ulu-gradient-canvas3 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container, .ulu-gradient-canvas4 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container, .ulu-gradient-canvas5 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container, .ulu-gradient-canvas6 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content, .ulu-gradient-canvas2 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content, .ulu-gradient-canvas3 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content, .ulu-gradient-canvas4 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content, .ulu-gradient-canvas5 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content, .ulu-gradient-canvas6 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background: transparent !important;
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container .markdown-preview-view .inline-title {
color: var(--color-red);
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container .markdown-preview-view .inline-title {
color: var(--color-orange);
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container .markdown-preview-view .inline-title {
color: var(--color-yellow);
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container .markdown-preview-view .inline-title {
color: var(--color-green);
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container .markdown-preview-view .inline-title {
color: var(--color-blue);
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container .markdown-preview-view .inline-title {
color: var(--color-purple);
}`,
      dark: `.ulu-gradient-canvas1.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(18, 88%, 66%) 0%,
        hsl(17, 88%, 65%) 21%,
        hsl(16, 87%, 63%) 30%,
        hsl(15, 86%, 62%) 39%,
        hsl(14, 85%, 60%) 46%,
        hsl(13, 85%, 59%) 54%,
        hsl(11, 84%, 57%) 61%,
        hsl(10, 83%, 56%) 69%,
        hsl(8, 82%, 55%) 79%,
        hsl(6, 81%, 54%) 100%
    );
}

.ulu-gradient-canvas2.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(23, 92%, 71%) 0%,
        hsl(21, 93%, 71%) 21%,
        hsl(18, 93%, 71%) 30%,
        hsl(16, 93%, 72%) 39%,
        hsl(14, 93%, 72%) 46%,
        hsl(11, 93%, 72%) 54%,
        hsl(9, 92%, 73%) 61%,
        hsl(6, 91%, 73%) 69%,
        hsl(3, 89%, 73%) 79%,
        hsl(0, 87%, 73%) 100%
    );
}

.ulu-gradient-canvas3.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(46, 95%, 56%) 0%,
        hsl(44, 95%, 55%) 21%,
        hsl(43, 94%, 54%) 30%,
        hsl(41, 94%, 53%) 39%,
        hsl(39, 93%, 53%) 46%,
        hsl(37, 92%, 53%) 54%,
        hsl(35, 91%, 52%) 61%,
        hsl(34, 89%, 52%) 69%,
        hsl(32, 88%, 52%) 79%,
        hsl(29, 86%, 52%) 100%
    );
}

.ulu-gradient-canvas4.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(135, 72%, 52%) 0%,
        hsl(136, 73%, 49%) 21%,
        hsl(136, 74%, 47%) 30%,
        hsl(137, 75%, 45%) 39%,
        hsl(137, 76%, 43%) 46%,
        hsl(138, 77%, 41%) 54%,
        hsl(138, 78%, 39%) 61%,
        hsl(139, 79%, 37%) 69%,
        hsl(139, 80%, 35%) 79%,
        hsl(140, 82%, 31%) 100%
    );
}

.ulu-gradient-canvas1.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container p, .ulu-gradient-canvas2.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container p, .ulu-gradient-canvas3.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container p, .ulu-gradient-canvas4.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container p, .ulu-gradient-canvas5.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container p, .ulu-gradient-canvas6.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container p {
color: var(--text-on-accent);
}

.ulu-gradient-canvas5.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(210, 90%, 80%) 0%,
        hsl(211, 91%, 77%) 21%,
        hsl(212, 92%, 74%) 30%,
        hsl(212, 93%, 71%) 39%,
        hsl(213, 93%, 68%) 46%,
        hsl(213, 93%, 65%) 54%,
        hsl(213, 92%, 61%) 61%,
        hsl(213, 91%, 58%) 69%,
        hsl(213, 90%, 54%) 79%,
        hsl(212, 93%, 49%) 100%
    );
}

.ulu-gradient-canvas6.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(276, 91%, 79%) 0%,
        hsl(274, 88%, 77%) 21%,
        hsl(272, 85%, 75%) 30%,
        hsl(270, 83%, 74%) 39%,
        hsl(267, 81%, 72%) 46%,
        hsl(265, 79%, 71%) 54%,
        hsl(262, 78%, 69%) 61%,
        hsl(260, 76%, 68%) 69%,
        hsl(257, 75%, 66%) 79%,
        hsl(254, 74%, 65%) 100%
    );
}`,
      light: `.ulu-gradient-canvas1.theme-light .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(0, 87%, 79%) 0%,
        hsl(0, 87%, 78%) 21%,
        hsl(0, 87%, 77%) 30%,
        hsl(359, 87%, 75%) 39%,
        hsl(359, 87%, 74%) 46%,
        hsl(359, 87%, 73%) 54%,
        hsl(359, 86%, 72%) 61%,
        hsl(358, 86%, 71%) 69%,
        hsl(358, 86%, 70%) 79%,
        hsl(358, 85%, 68%) 100%
    );
}

.ulu-gradient-canvas2.theme-light .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(16, 100%, 76%) 0%,
        hsl(20, 100%, 76%) 21%,
        hsl(23, 100%, 76%) 30%,
        hsl(27, 100%, 77%) 39%,
        hsl(30, 100%, 77%) 46%,
        hsl(34, 100%, 77%) 54%,
        hsl(37, 100%, 78%) 61%,
        hsl(41, 100%, 79%) 69%,
        hsl(45, 100%, 80%) 79%,
        hsl(49, 100%, 81%) 100%
    );
}

.ulu-gradient-canvas3.theme-light .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(60, 89%, 72%) 0%,
        hsl(59, 91%, 73%) 21%,
        hsl(57, 92%, 74%) 30%,
        hsl(56, 94%, 76%) 39%,
        hsl(55, 96%, 77%) 46%,
        hsl(53, 97%, 78%) 54%,
        hsl(52, 98%, 79%) 61%,
        hsl(51, 99%, 80%) 69%,
        hsl(50, 100%, 80%) 79%,
        hsl(49, 100%, 81%) 100%
    );
}

.ulu-gradient-canvas4.theme-light .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(99, 75%, 75%) 0%,
        hsl(103, 75%, 77%) 21%,
        hsl(108, 75%, 79%) 30%,
        hsl(113, 76%, 81%) 39%,
        hsl(119, 76%, 83%) 46%,
        hsl(124, 77%, 84%) 54%,
        hsl(129, 79%, 85%) 61%,
        hsl(133, 80%, 86%) 69%,
        hsl(137, 81%, 86%) 79%,
        hsl(141, 81%, 87%) 100%
    );
}

.ulu-gradient-canvas5.theme-light .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(187, 100%, 89%) 0%,
        hsl(187, 100%, 87%) 21%,
        hsl(187, 100%, 85%) 30%,
        hsl(187, 100%, 83%) 39%,
        hsl(187, 100%, 81%) 46%,
        hsl(187, 100%, 79%) 54%,
        hsl(187, 100%, 77%) 61%,
        hsl(186, 100%, 75%) 69%,
        hsl(186, 100%, 72%) 79%,
        hsl(186, 100%, 69%) 100%
    );
}

.ulu-gradient-canvas6.theme-light .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(298, 68%, 90%) 0%,
        hsl(287, 68%, 89%) 21%,
        hsl(277, 68%, 89%) 30%,
        hsl(267, 67%, 88%) 39%,
        hsl(258, 65%, 87%) 46%,
        hsl(249, 63%, 87%) 54%,
        hsl(240, 61%, 86%) 61%,
        hsl(232, 62%, 83%) 69%,
        hsl(225, 62%, 81%) 79%,
        hsl(220, 61%, 79%) 100%
    );
}`,
    },
    "ulu-we1": {
      general: `.ulu-we1-callouts .callout {
color: white;
border-radius: 8px !important;
transition: 700ms;
}

.ulu-we1-callouts .callout:hover {
transform: translateY(4px) !important;
}

.ulu-we1-callouts .callout-title-inner {
color: white;
}

.ulu-we1-callouts .callout[data-callout="info"] {
border: 1px solid rgb(255, 204, 112) !important;
background: linear-gradient(
        43deg,
        rgb(65, 88, 208) 0%,
        rgb(200, 80, 192) 46%,
        rgb(255, 204, 112) 100%
    ) !important;
}

.ulu-we1-callouts .callout[data-callout="abstract"] {
border: 1px solid #07f49e !important;
background: linear-gradient(43deg, #42047e 0%, #07f49e 100%) !important;
}

.ulu-we1-callouts .callout[data-callout="warning"] {
border: 1px solid #ef745c !important;
background: linear-gradient(43deg, #34073d 0%, #ef745c 100%) !important;
}

.ulu-we1-callouts .callout[data-callout="example"] {
border: 1px solid #ccb3d1 !important;
background: linear-gradient(43deg, #22052d 0%, #ccb3d1 100%) !important;
}

.ulu-we1-callouts .callout[data-callout="note"] {
border: 1px solid #557c93 !important;
background: linear-gradient(43deg, #08203e 0%, #557c93 100%) !important;
}

.ulu-we1-callouts .callout[data-callout="tip"] {
border: 1px solid #a4c6b8 !important;
background: linear-gradient(43deg, #5e435d 0%, #a4c6b8 100%) !important;
}

.ulu-we1-callouts .callout[data-callout="question"] {
border: 1px solid #5d5d3c;
background: linear-gradient(43deg, #3f3f42 0%, #5d5d3c 100%);
}

.ulu-we1-callouts .callout[data-callout="danger"] {
border: 1px solid #751006;
background: linear-gradient(43deg, #1f0021 0%, #751006 100%);
}

.ulu-we1-callouts .callout[data-callout="failure"] {
border: 1px solid #f4985a;
background: linear-gradient(43deg, #12243f 0%, #f4985a 100%);
}

.ulu-we1-callouts .callout[data-callout="bug"] {
border: 1px solid #f9bc2c;
background: linear-gradient(43deg, #f74c06 0%, #f9bc2c 100%);
}

.ulu-we1-callouts .callout[data-callout="quote"] {
border: 1px solid #858e96;
background: linear-gradient(43deg, #60696b 0%, #858e96 100%);
}

.ulu-we1-callouts .callout[data-callout="success"] {
border: 1px solid #99f2d1;
background: linear-gradient(43deg, #1c3e35 0%, #99f2d1 100%);
}

.ulu-we1-callouts .callout[data-callout="abstract"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(66, 4, 126, 0.4),
        24px -24px 69px -3px rgba(7, 244, 158, 0.1);
}

.ulu-we1-callouts .callout[data-callout="warning"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(52, 7, 61, 0.3),
        24px -24px 69px -3px rgba(239, 116, 92, 0.3);
}

.ulu-we1-callouts .callout[data-callout="info"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(84, 86, 206, 0.3),
        0px 1px 69px -3px rgba(201, 88, 187, 0.3),
        24px -24px 69px -3px rgba(250, 191, 120, 0.3);
}

.ulu-we1-callouts .callout[data-callout="example"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(34, 5, 45, 0.3),
        24px -24px 69px -3px rgba(239, 116, 92, 0.2);
}

.ulu-we1-callouts .callout[data-callout="note"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(8, 32, 62, 0.3),
        24px -24px 69px -3px rgba(85, 124, 147, 0.3);
}

.ulu-we1-callouts .callout[data-callout="tip"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(94, 67, 93, 0.3),
        24px -24px 69px -3px rgba(164, 198, 184, 0.3);
}

.ulu-we1-callouts .callout[data-callout="success"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(28, 62, 53, 0.3),
        24px -24px 69px -3px rgba(153, 242, 209, 0.3);
}

.ulu-we1-callouts .callout[data-callout="question"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(63, 63, 66, 0.3),
        24px -24px 69px -3px rgba(93, 93, 60, 0.3);
}

.ulu-we1-callouts .callout[data-callout="failure"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(18, 36, 63, 0.3),
        24px -24px 69px -3px rgba(244, 152, 90, 0.3);
}

.ulu-we1-callouts .callout[data-callout="danger"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(31, 0, 33, 0.3),
        24px -24px 69px -3px rgba(117, 16, 6, 0.3);
}

.ulu-we1-callouts .callout[data-callout="bug"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(249, 188, 44, 0.3),
        24px -24px 69px -3px rgba(247, 76, 6, 0.3);
}

.ulu-we1-callouts .callout[data-callout="quote"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(96, 105, 107, 0.3),
        24px -24px 69px -3px rgba(133, 142, 150, 0.3);
}

.ulu-we1-callouts .callout[data-callout="abstract"]:hover, .ulu-we1-callouts .callout[data-callout="warning"]:hover, .ulu-we1-callouts .callout[data-callout="info"]:hover, .ulu-we1-callouts .callout[data-callout="example"]:hover, .ulu-we1-callouts .callout[data-callout="note"]:hover, .ulu-we1-callouts .callout[data-callout="tip"]:hover, .ulu-we1-callouts .callout[data-callout="success"]:hover, .ulu-we1-callouts .callout[data-callout="question"]:hover, .ulu-we1-callouts .callout[data-callout="failure"]:hover, .ulu-we1-callouts .callout[data-callout="danger"]:hover, .ulu-we1-callouts .callout[data-callout="bug"]:hover, .ulu-we1-callouts .callout[data-callout="quote"]:hover {
border: 1px solid white;
}

.ulu-we1 .empty-state-container {
max-height: unset;
opacity: 1 !important;
}

.ulu-we1 .empty-state-container {
background: transparent !important;
border: 1px solid rgb(from var(--mono-rgb-100) r g b/0.05);
border-radius: 12px;
padding: 99px 18px 8px 18px;
max-height: unset;
opacity: 1 !important;
box-shadow: inset 0 0 40px rgb(from var(--color-accent) r g b/0.03);
}

.ulu-we1 .empty-state-action {
font-weight: 400;
color: var(--text-muted);
padding: 4px 18px !important;
margin: 4px !important;
border: 1px solid rgb(from var(--mono-rgb-100) r g b/0.05);
background: rgb(from var(--mono-rgb-100) r g b/0.02);
border-radius: var(--radius-m);
transition: all 0.2s ease-in-out;
cursor: var(--cursor);
}

.ulu-we1 .empty-state-action:hover {
color: var(--text-normal);
border: 1px solid rgb(from var(--mono-rgb-100) r g b/0.1);
background: rgb(from var(--color-accent) r g b/0.05);
transform: translateY(-1px);
box-shadow: 0 4px 12px rgb(from var(--color-accent) r g b/0.05);
}

.ulu-we1 .empty-state-container::before {
content: "";
background: var(--color-accent);
padding: 80px;
opacity: 0.15;
-webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iaGVpZ2h0OiA1MTJweDsgd2lkdGg6IDUxMnB4OyI+PGcgY2xhc3M9IiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSIgc3R5bGU9IiI+PHBhdGggZD0iTTEzOS42MjUgMjMuNTYzYy0xLjU4LjAwOC0zLjE0Ny4wNTItNC43Mi4xMjVsMTcxLjc1IDI1OC4wOTNoMTQ2LjI1YzE1LjM1LTE2LjkwNiAyNy44NzUtMzUuMjYzIDM1LjY5LTU2LjU2aC05Ni44NzZjLTcuMzE3IDE4LjE3LTI1LjEzNiAzMS4wOTMtNDUuODQ1IDMxLjA5My0yNy4xNzMgMC00OS4zNzUtMjIuMjMzLTQ5LjM3NS00OS40MDcgMC0xMS40MzYgMy45NS0yMS45NzggMTAuNTMtMzAuMzc1bC00OS4xNTUtNzcuNjU1Yy0uMDMuMDUzLS4wNjMuMTAzLS4wOTQuMTU2LTEuMTgzLTIuMDUtMi4zOTUtNC4wMzYtMy42MjQtNi0zMC4xMDYtNDguMDg2LTczLjI4LTY5LjY5NC0xMTQuNTMtNjkuNDY4em0yMjguNjU2IDIuNjU2Yy0zNS44NjQuMzI4LTcyLjY0OCAxOC4wNTYtMTAwLjc4IDU3LjY1NWgyMDQuMTI1QzQ0Ny4xNDcgNDcuMTMzIDQwOC4yOTMgMjUuODUgMzY4LjI4IDI2LjIyem0tMjUzLjk2Ny4yNWMtMTEuNDk1IDIuNjI0LTIyLjU4IDcuMDA3LTMyLjg3NiAxMyAxMC42NzIgOS4wOCAxNy40NyAyMi42IDE3LjQ3IDM3LjYyNCAwIDEyLjcyLTQuODczIDI0LjM1LTEyLjg0NCAzMy4xMjVsNDMuMTg3IDY3LjMxaDg1LjU5NEwxMTQuMzE0IDI2LjQ3ek00OS41IDQ2LjM3NGMtMTcuMDc0IDAtMzAuNzIgMTMuNjQ1LTMwLjcyIDMwLjcyIDAgMTcuMDczIDEzLjY0NiAzMC42ODYgMzAuNzIgMzAuNjg2IDE3LjA3NCAwIDMwLjcyLTEzLjYxMiAzMC43Mi0zMC42ODYgMC0xNy4wNzQtMTMuNjQ2LTMwLjcyLTMwLjcyLTMwLjcyem0yMzIuODQ0IDU2LjE4OGwzOC45NyA2MS41M2M3LjI0LTQuMTg0IDE1LjYzNS02LjU5MyAyNC41Ni02LjU5MyAyNy4wNSAwIDQ5LjIwMyAyMi4wMyA0OS40MDcgNDkuMDNoOTguNzVjMi41NzUtMTEuODA3IDMuNzU3LTI0LjQ5IDMuMzQ1LTM4LjI1LS43MzUtMjQuNTU1LTYuMjM3LTQ2LjY2LTE1LjIyLTY1LjcxOGgtMTk5Ljgxem0tMjU5LjQ3IDE2LjA2MmMtNC4wMiAxNS4wMi01Ljk4NSAzMS42Mi01LjQzNiA0OS42NTYuMDk1IDMuMTQzLjI5MyA2LjIxNS41NjIgOS4yNWg4OS4wNjNsLTM1Ljk3LTU2LjA2Yy02LjUzMyAzLjE5Ny0xMy44NiA1LTIxLjU5MyA1LTkuNzkgMC0xOC45MjYtMi44ODctMjYuNjI1LTcuODQ1em0zMjMgNTcuNTYzYy0xNy4wNzMgMC0zMC42ODcgMTMuNjQ0LTMwLjY4NyAzMC43MTggMCAxNy4wNzQgMTMuNjE0IDMwLjcyIDMwLjY4OCAzMC43MiAxNy4wNzQgMCAzMC43Mi0xMy42NDYgMzAuNzItMzAuNzIgMC0xNy4wNzQtMTMuNjQ2LTMwLjcyLTMwLjcyLTMwLjcyem0tMzI1LjAzIDIwLjAzYzMuNjkzIDE2LjkzOCAxMC4xODcgMzIuMjAzIDE4Ljc1IDQ2LjM0NUgxOTYuNTYybDIuNzUgNC4zNDNMMjc2Ljk3IDM2OS41M2w5LjA5MiAxNC4zNDVIMjEyLjIyYy0xLjQwMyA2Ljk2LTQuMjc0IDEzLjQxOC04LjI4MiAxOSAyMi4xNjQgMjQuNTYyIDQxLjMzNSA1Mi41NzMgNTMuODQzIDg2Ljc1IDM1LjE1Ni05MC45NDQgMTE4LjEzMi0xMzQuODcyIDE3Ni41NjQtMTg5LjE1NmgtMTM3LjcybC0yLjc4LTQuMTktNjYuNTk0LTEwMC4wNkgyMC44NDR6TTUyLjUgMjYxLjI1YzIxLjE5MyAyNy4yMyA0OS43OTYgNTAuNzY0IDc5LjMxMyA3NS4zMTMgOC42MzMtNy4zNTQgMTkuODA4LTExLjgxMyAzMS45NjgtMTEuODEzIDI0LjExNiAwIDQ0LjM0OCAxNy41MDQgNDguNTk1IDQwLjQzOGgzOS43MkwxODYuMjggMjYxLjI1SDUyLjV6bTExMS4yOCA4Mi4xODhjLTE3LjA3MyAwLTMwLjcxOCAxMy42NDQtMzAuNzE4IDMwLjcxOCAwIDE3LjA3NCAxMy42NDUgMzAuNzIgMzAuNzIgMzAuNzIgMTcuMDczIDAgMzAuNjg3LTEzLjY0NiAzMC42ODctMzAuNzIgMC0xNy4wNzQtMTMuNjE1LTMwLjcyLTMwLjY5LTMwLjcyeiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIxIj48L3BhdGg+PC9nPjwvc3ZnPg==");
-webkit-mask-repeat: no-repeat;
}

.ulu-we1 .empty-state-action-list {
margin-top: 80px;
}

.ulu-we1 .empty-state-action:hover {
color: var(--text-normal);
cursor: var(--cursor);
}

.ulu-we1 .empty-state-action {
font-weight: 400;
color: var(--text-muted);
padding: 0 4px;
border: 1px solid var(--background-primary);
border-radius: var(--radius-m);
transition: all 0.2s ease-in-out;
cursor: var(--cursor);
}

.ulu-we1 .empty-state-title {
display: none;
}`,
    },
    "ulu-blur-modal": {
      general: `.ulu-blur-modal .modal {
background: transparent !important;
background-color: rgba(var(--color-base-00), 0.65) !important;
backdrop-filter: blur(65px) saturate(180%);
-webkit-backdrop-filter: blur(65px) saturate(180%);
border: 1px solid rgb(from var(--mono-rgb-100) r g b/0.1) !important;
box-shadow:
        0 40px 80px -20px rgb(from var(--mono-rgb-0) r g b/0.6),
        inset 0 1px 0 0 rgb(from var(--mono-rgb-100) r g b/0.1);
}

body.ulu-flat.ulu-blur-modal .modal {
background: var(--color-base-25) !important;
background-color: var(--color-base-25) !important;
background-image: none !important;
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important;
border: none !important;
box-shadow: none !important;
}`,
    },
    "ulu-blur-prompt": {
      general: `.ulu-blur-prompt .prompt {
background: transparent !important;
background-color: rgba(var(--color-base-00), 0.65) !important;
backdrop-filter: blur(65px) saturate(180%);
-webkit-backdrop-filter: blur(65px) saturate(180%);
border: 1px solid rgb(from var(--mono-rgb-100) r g b/0.1);
box-shadow:
        0 40px 80px -20px rgb(from var(--mono-rgb-0) r g b/0.6),
        inset 0 1px 0 0 rgb(from var(--mono-rgb-100) r g b/0.1);
border-radius: var(--radius-l);
}

body.ulu-flat.ulu-blur-prompt .prompt {
background: var(--color-base-25) !important;
background-color: var(--color-base-25) !important;
background-image: none !important;
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important;
border: none !important;
box-shadow: none !important;
}`,
    },
    "ulu-blur-tooltip": {
      general: `.ulu-blur-tooltip .tooltip {
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
}`,
    },
    "ulu-status-pills-blur": {
      general: `.ulu-status-pills-blur .status-bar-item {
background: rgb(from var(--color-base-30) r g b/0.4);
border: 1px solid rgb(from var(--color-base-100) r g b/0.11);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
}

.ulu-status-pills-blur .status-bar-item:hover {
background: rgb(from var(--color-base-35) r g b/0.4);
border: 1px solid rgb(from var(--color-base-100) r g b/0.15);
}

body.ulu-flat.ulu-status-pills-blur .status-bar-item {
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-flat.ulu-status-pills-blur .status-bar-item:hover {
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important;
border: none !important;
box-shadow: none !important;
}`,
    },
    "ulu-blur-menu": {
      general: `.ulu-blur-menu .menu {
/* .𖥔 ݁ ˖  heavy blur background ⊹ ࣪ ˖ */
background: transparent !important;
background-color: rgba(var(--color-base-00), 0.65) !important;
backdrop-filter: blur(30px) saturate(180%) !important;
-webkit-backdrop-filter: blur(30px) saturate(180%) !important;
border: 1px solid rgba(255, 255, 255, 0.1) !important;
box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5) !important;
border-radius: 16px;
padding: 8px;
}

.ulu-blur-menu .menu-item {
border-radius: 8px;
transition: background 0.1s;
font-size: 0.9em;
}

.ulu-blur-menu .menu-item.selected, .ulu-blur-menu .menu-item:hover {
background: linear-gradient(
        90deg,
        var(--color-accent),
        rgb(from var(--color-accent) r g b/0.6)
    ) !important;
color: white !important;
box-shadow: 0 4px 12px rgb(from var(--color-accent) r g b/0.3);
}

.ulu-blur-menu .menu-item-icon {
opacity: 0.7;
}

.ulu-blur-menu .menu-item:hover .menu-item-icon {
opacity: 1;
color: white;
}

body.ulu-flat.ulu-blur-menu .menu {
background: var(--color-base-25) !important;
background-color: var(--color-base-25) !important;
background-image: none !important;
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important;
border: none !important;
box-shadow: none !important;
}`,
    },
    "ulu-minimal-properties": {
      general: `body.ulu-minimal-properties .metadata-container {
background: transparent !important;
background-image: none !important;
border: none !important;
box-shadow: none !important;
margin: 1em 0 !important;
padding: 0 !important;
}

body.ulu-minimal-properties .metadata-property-value {
background-color: transparent !important;
border-color: transparent !important;
box-shadow: none !important;
}

body.ulu-minimal-properties .metadata-property:hover .metadata-property-value {
background-color: rgb(from var(--mono-rgb-0) r g b/0.05) !important;
border-color: rgb(from var(--mono-rgb-100) r g b/0.05) !important;
}`,
    },
    "ulu-inline-property-tags": {
      general: `body.ulu-inline-property-tags .multi-select-pill {
background: rgb(from var(--color-accent) r g b/0.05) !important;
border: 1px solid rgb(from var(--color-accent) r g b/0.3) !important;
box-shadow: none !important;
color: var(--color-accent) !important;
font-weight: 600;
border-radius: var(--radius-m) !important;
}

body.ulu-inline-property-tags .multi-select-pill-content {
color: var(--color-accent) !important;
text-shadow: none !important;
}

body.ulu-inline-property-tags .multi-select-pill:hover {
background: rgb(from var(--color-accent) r g b/0.2) !important;
border-color: rgb(from var(--color-accent) r g b/0.6) !important;
box-shadow: 0 0 10px rgb(from var(--color-accent) r g b/0.2) !important;
color: var(--text-normal) !important;
}

body.ulu-inline-property-tags .multi-select-pill:hover .multi-select-pill-content {
color: var(--text-normal) !important;
}`,
    },
    "ulu-gummy-callouts": {
      general: `.ulu-gummy-callouts .callout {
background: linear-gradient(
        135deg,
        rgba(var(--callout-color), 0.05),
        var(--background-primary)
    ) !important;
position: relative;
border: 1px solid rgba(var(--callout-color), 0.4) !important;
box-shadow: none !important;
border-radius: 12px !important;
}

.ulu-gummy-callouts .callout:hover {
border: 1px solid rgb(var(--callout-color)) !important;
}

.ulu-gummy-callouts .callout-title-inner {
font-weight: bold;
font-variation-settings: "WGHT" 900;
font-size: 1.2em;
}

.ulu-gummy-callouts .markdown-source-view.mod-cm6 .cm-embed-block:hover {
box-shadow: var(--embed-block-shadow-hover);
border-radius: 12px !important;
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
border: 1px solid var(--color-callout-border-teal) !important;
background: var(--color-callout-teal) !important;
}

.ulu-nt-callouts .callout[data-callout="warning"], .ulu-nt-callouts .callout[data-callout="caution"], .ulu-nt-callouts .callout[data-callout="danger"] {
border: 1px solid var(--color-callout-border-orange) !important;
background: var(--color-callout-orange) !important;
}

.ulu-nt-callouts .callout[data-callout="example"] {
border: 1px solid var(--color-callout-border-purple) !important;
background: var(--color-callout-purple) !important;
}

.ulu-nt-callouts .callout[data-callout="note"] {
border: 1px solid var(--color-callout-border-blue) !important;
background: var(--color-callout-blue) !important;
}

.ulu-nt-callouts .callout[data-callout="tip"], .ulu-nt-callouts .callout[data-callout="hint"], .ulu-nt-callouts .callout[data-callout="important"] {
border: 1px solid var(--color-callout-border-teal) !important;
background: var(--color-callout-teal) !important;
}

.ulu-nt-callouts .callout[data-callout="question"], .ulu-nt-callouts .callout[data-callout="help"], .ulu-nt-callouts .callout[data-callout="faq"] {
border: 1px solid var(--color-callout-border-yellow) !important;
background: var(--color-callout-yellow) !important;
}

.ulu-nt-callouts .callout[data-callout="danger"], .ulu-nt-callouts .callout[data-callout="error"] {
border: 1px solid var(--color-callout-border-red) !important;
background: var(--color-callout-red) !important;
}

.ulu-nt-callouts .callout[data-callout="failure"], .ulu-nt-callouts .callout[data-callout="fail"], .ulu-nt-callouts .callout[data-callout="missing"] {
border: 1px solid var(--color-callout-border-red) !important;
background: var(--color-callout-red) !important;
}

.ulu-nt-callouts .callout[data-callout="bug"] {
border: 1px solid var(--color-callout-border-red) !important;
background: var(--color-callout-red) !important;
}

.ulu-nt-callouts .callout[data-callout="quote"], .ulu-nt-callouts .callout[data-callout="cite"] {
border: 1px solid var(--color-callout-border-grey) !important;
background: var(--color-callout-grey) !important;
}

.ulu-nt-callouts .callout[data-callout="success"], .ulu-nt-callouts .callout[data-callout="check"], .ulu-nt-callouts .callout[data-callout="done"] {
border: 1px solid var(--color-callout-border-green) !important;
background: var(--color-callout-green) !important;
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
background: var(--background-primary) !important;
box-shadow:
        8px 8px 0 -2.5px var(--background-primary),
        8px 8px 0 0 rgb(var(--callout-color)) !important;
border: 2.5px solid rgb(var(--callout-color)) !important;
border-radius: 0px !important;
}

.ulu-brutal-callouts .callout:before {
background: rgb(var(--callout-color)) !important;
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
background: var(--background-primary) !important;
border: 1px solid rgba(var(--callout-color), 0.3) !important;
border-radius: 8px !important;
box-shadow: none !important;
}

.ulu-soft-callouts .callout:before {
background: rgb(var(--callout-color)) !important;
content: "";
position: absolute;
top: 4px;
left: 0;
width: 100%;
height: 100%;
opacity: 0.1;
border-radius: 0px !important;
}`,
    },
    "ulu-we1-callouts": {
      general: `.ulu-we1-callouts .callout {
color: white;
border-radius: 8px !important;
transition: 700ms;
}

.ulu-we1-callouts .callout:hover {
transform: translateY(4px) !important;
}

.ulu-we1-callouts .callout-title-inner {
color: white;
}

.ulu-we1-callouts .callout[data-callout="info"] {
border: 1px solid rgb(255, 204, 112) !important;
background: linear-gradient(
        43deg,
        rgb(65, 88, 208) 0%,
        rgb(200, 80, 192) 46%,
        rgb(255, 204, 112) 100%
    ) !important;
}

.ulu-we1-callouts .callout[data-callout="abstract"] {
border: 1px solid #07f49e !important;
background: linear-gradient(43deg, #42047e 0%, #07f49e 100%) !important;
}

.ulu-we1-callouts .callout[data-callout="warning"] {
border: 1px solid #ef745c !important;
background: linear-gradient(43deg, #34073d 0%, #ef745c 100%) !important;
}

.ulu-we1-callouts .callout[data-callout="example"] {
border: 1px solid #ccb3d1 !important;
background: linear-gradient(43deg, #22052d 0%, #ccb3d1 100%) !important;
}

.ulu-we1-callouts .callout[data-callout="note"] {
border: 1px solid #557c93 !important;
background: linear-gradient(43deg, #08203e 0%, #557c93 100%) !important;
}

.ulu-we1-callouts .callout[data-callout="tip"] {
border: 1px solid #a4c6b8 !important;
background: linear-gradient(43deg, #5e435d 0%, #a4c6b8 100%) !important;
}

.ulu-we1-callouts .callout[data-callout="question"] {
border: 1px solid #5d5d3c;
background: linear-gradient(43deg, #3f3f42 0%, #5d5d3c 100%);
}

.ulu-we1-callouts .callout[data-callout="danger"] {
border: 1px solid #751006;
background: linear-gradient(43deg, #1f0021 0%, #751006 100%);
}

.ulu-we1-callouts .callout[data-callout="failure"] {
border: 1px solid #f4985a;
background: linear-gradient(43deg, #12243f 0%, #f4985a 100%);
}

.ulu-we1-callouts .callout[data-callout="bug"] {
border: 1px solid #f9bc2c;
background: linear-gradient(43deg, #f74c06 0%, #f9bc2c 100%);
}

.ulu-we1-callouts .callout[data-callout="quote"] {
border: 1px solid #858e96;
background: linear-gradient(43deg, #60696b 0%, #858e96 100%);
}

.ulu-we1-callouts .callout[data-callout="success"] {
border: 1px solid #99f2d1;
background: linear-gradient(43deg, #1c3e35 0%, #99f2d1 100%);
}

.ulu-we1-callouts .callout[data-callout="abstract"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(66, 4, 126, 0.4),
        24px -24px 69px -3px rgba(7, 244, 158, 0.1);
}

.ulu-we1-callouts .callout[data-callout="warning"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(52, 7, 61, 0.3),
        24px -24px 69px -3px rgba(239, 116, 92, 0.3);
}

.ulu-we1-callouts .callout[data-callout="info"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(84, 86, 206, 0.3),
        0px 1px 69px -3px rgba(201, 88, 187, 0.3),
        24px -24px 69px -3px rgba(250, 191, 120, 0.3);
}

.ulu-we1-callouts .callout[data-callout="example"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(34, 5, 45, 0.3),
        24px -24px 69px -3px rgba(239, 116, 92, 0.2);
}

.ulu-we1-callouts .callout[data-callout="note"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(8, 32, 62, 0.3),
        24px -24px 69px -3px rgba(85, 124, 147, 0.3);
}

.ulu-we1-callouts .callout[data-callout="tip"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(94, 67, 93, 0.3),
        24px -24px 69px -3px rgba(164, 198, 184, 0.3);
}

.ulu-we1-callouts .callout[data-callout="success"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(28, 62, 53, 0.3),
        24px -24px 69px -3px rgba(153, 242, 209, 0.3);
}

.ulu-we1-callouts .callout[data-callout="question"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(63, 63, 66, 0.3),
        24px -24px 69px -3px rgba(93, 93, 60, 0.3);
}

.ulu-we1-callouts .callout[data-callout="failure"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(18, 36, 63, 0.3),
        24px -24px 69px -3px rgba(244, 152, 90, 0.3);
}

.ulu-we1-callouts .callout[data-callout="danger"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(31, 0, 33, 0.3),
        24px -24px 69px -3px rgba(117, 16, 6, 0.3);
}

.ulu-we1-callouts .callout[data-callout="bug"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(249, 188, 44, 0.3),
        24px -24px 69px -3px rgba(247, 76, 6, 0.3);
}

.ulu-we1-callouts .callout[data-callout="quote"]:hover {
box-shadow:
        -24px 24px 69px -3px rgba(96, 105, 107, 0.3),
        24px -24px 69px -3px rgba(133, 142, 150, 0.3);
}

.ulu-we1-callouts .callout[data-callout="abstract"]:hover, .ulu-we1-callouts .callout[data-callout="warning"]:hover, .ulu-we1-callouts .callout[data-callout="info"]:hover, .ulu-we1-callouts .callout[data-callout="example"]:hover, .ulu-we1-callouts .callout[data-callout="note"]:hover, .ulu-we1-callouts .callout[data-callout="tip"]:hover, .ulu-we1-callouts .callout[data-callout="success"]:hover, .ulu-we1-callouts .callout[data-callout="question"]:hover, .ulu-we1-callouts .callout[data-callout="failure"]:hover, .ulu-we1-callouts .callout[data-callout="danger"]:hover, .ulu-we1-callouts .callout[data-callout="bug"]:hover, .ulu-we1-callouts .callout[data-callout="quote"]:hover {
border: 1px solid white;
}`,
    },
    "ulu-line-callouts": {
      general: `.ulu-line-callouts .callout::after {
content: "";
background: rgba(var(--callout-color), 0.3) !important;
position: absolute;
left: -3px;
height: 100%;
width: 100%;
top: 0px;
border-radius: 0px !important;
z-index: -1;
}

.ulu-line-callouts .callout {
background: transparent !important;
position: relative;
box-shadow: 0px 0px 0px 0px rgba(var(--callout-color), 0.5) !important;
border-radius: 0px !important;
}

.ulu-line-callouts .callout::before {
content: "";
background: rgba(var(--callout-color), 0.3) !important;
position: absolute;
left: 0px;
height: 100%;
top: 0px;
border-left: 3px solid rgb(var(--callout-color)) !important;
box-shadow: 0px 0px 34px 16px rgba(var(--callout-color), 0.5) !important;
border-radius: 0px !important;
}

.ulu-line-callouts .callout:hover, .ulu-line-callouts .markdown-source-view.mod-cm6 .cm-embed-block:hover {
border-radius: 0px !important;
}

.ulu-line-callouts .callout-title-inner {
font-weight: bold;
font-variation-settings: "WGHT" 900;
}`,
    },
    "ulu-gummy-codeblock": {
      general: `.ulu-gummy-codeblock .cm-s-obsidian .HyperMD-codeblock, .ulu-gummy-codeblock .cm-hmd-frontmatter {
font-weight: 400;
}

.ulu-gummy-codeblock .cm-s-obsidian span.cm-inline-code {
font-size: var(--code-size) !important;
color: var(--code-normal) !important;
vertical-align: baseline;
}

.ulu-gummy-codeblock .markdown-rendered pre {
border: 1px solid var(--color-accent) !important;
border-radius: var(--radius-m) !important;
box-shadow:
        -24px 24px 69px -3px rgb(from var(--color-accent) r g b/0.2),
        24px -24px 69px -3px
            hsla(calc(var(--accent-h) + 180), var(--accent-s), var(--accent-l), 0.13) !important;
background: rgb(from var(--color-accent) r g b/0.1) !important;
transition: all 0.5s cubic-bezier(0.25, 0.46, 0.46, 0.95);
}

.ulu-gummy-codeblock .markdown-rendered code {
color: var(--color-accent) !important;
}

.ulu-gummy-codeblock .markdown-source-view.mod-cm6 .cm-line.HyperMD-codeblock {
padding-left: var(--size-4-4) !important;
color: var(--color-accent) !important;
background: rgb(from var(--color-accent) r g b/0.1) !important;
margin: 8px !important;
}

.ulu-gummy-codeblock .cm-s-obsidian div.HyperMD-codeblock-begin-bg {
background: var(--code-background) !important;
border-top: 1px solid var(--color-accent) !important;
/* .𖥔 ݁ ˖  stylelint-disable-next-line declaration-no-important ⊹ ࣪ ˖ */
border-top-right-radius: 8px !important;
/* .𖥔 ݁ ˖  stylelint-disable-next-line declaration-no-important ⊹ ࣪ ˖ */
border-top-left-radius: 8px !important;
margin-top: 8px !important;
}

.ulu-gummy-codeblock .cm-s-obsidian div.HyperMD-codeblock-end-bg {
background: var(--code-background) !important;
border-bottom: 1px solid var(--color-accent) !important;
border-bottom-right-radius: 8px !important;
border-bottom-left-radius: 8px !important;
}

.ulu-gummy-codeblock .cm-s-obsidian div.HyperMD-codeblock-bg {
border-right: 1px solid var(--color-accent) !important;
border-left: 1px solid var(--color-accent) !important;
}

.ulu-gummy-codeblock .markdown-rendered pre:hover {
transform: translateY(4px) !important;
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
box-shadow:
        25px 0 var(--color-orange),
        50px 0 var(--color-green);
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
/* .𖥔 ݁ ˖  stylelint-disable-next-line declaration-no-important ⊹ ࣪ ˖ */
border-top-right-radius: 8px !important;
/* .𖥔 ݁ ˖  stylelint-disable-next-line declaration-no-important ⊹ ࣪ ˖ */
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
box-shadow:
        25px 0 var(--color-orange),
        50px 0 var(--color-green);
position: absolute;
top: 7px;
border-radius: 100vmax;
}`,
    },
    "ulu-prop-card": {
      dark: `.ulu-shark-d.ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container, .theme-light.ulu-shark-l.ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container {
display: var(--metadata-display-editing);
border: 1px solid var(--background-modifier-border-alt);
background: var(--gradient-bg-tertiary);
margin-bottom: 3em;
border-radius: 8px;
padding: 8px;
}`,
      light: `.theme-dark.ulu-shark-d.ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container, .ulu-shark-l.ulu-prop-card .markdown-source-view.is-live-preview.show-properties .metadata-container {
display: var(--metadata-display-editing);
border: 1px solid var(--background-modifier-border-alt);
background: var(--gradient-bg-tertiary);
margin-bottom: 3em;
border-radius: 8px;
padding: 8px;
}`,
    },
    "ulu-active-line": {
      general: `.ulu-active-line .cm-active.cm-line {
background: linear-gradient(
        90deg,
        transparent 0%,
        rgb(from var(--color-accent) r g b/0.15) 20%,
        rgb(from var(--color-accent) r g b/0.15) 80%,
        transparent 100%
    );
border-radius: 8px;
}`,
    },
    "ulu-status-pills": {
      general: `.ulu-status-pills .status-bar {
border-radius: var(--radius-m);
margin-bottom: 4px;
margin-right: 4px;
border: 1px solid transparent !important;
padding: 10px 20px !important;
background: transparent !important;
}

.ulu-status-pills .status-bar-item {
background: var(--color-base-30);
border: 1px solid rgb(from var(--mono-rgb-100) r g b/0.11);
border-radius: 50px;
padding: 6px 14px;
margin-left: 8px;
box-shadow: 0 4px 12px rgb(from var(--mono-rgb-0) r g b/0.1);
color: var(--text-faint);
font-size: 0.85em;
font-weight: 500;
transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.ulu-status-pills .status-bar-item:hover {
background: var(--color-base-35);
border-color: rgb(from var(--mono-rgb-100) r g b/0.15);
transform: translateY(-2px);
color: var(--text-normal);
box-shadow: 0 6px 16px rgb(from var(--mono-rgb-0) r g b/0.2);
cursor: default;
}

.ulu-status-pills-blur .status-bar-item {
background: rgb(from var(--color-base-30) r g b/0.4);
border: 1px solid rgb(from var(--color-base-100) r g b/0.11);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
}

.ulu-status-pills-blur .status-bar-item:hover {
background: rgb(from var(--color-base-35) r g b/0.4);
border: 1px solid rgb(from var(--color-base-100) r g b/0.15);
}

body.ulu-flat.ulu-status-pills .status-bar {
background-color: transparent !important;
}

body.ulu-flat.ulu-status-pills .status-bar-item {
border: none !important;
box-shadow: none !important;
background-color: var(--color-base-30) !important;
background-image: none !important;
}

body.ulu-flat.ulu-status-pills .status-bar-item:hover {
transform: none !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-flat.ulu-status-pills-blur .status-bar-item {
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important;
border: none !important;
box-shadow: none !important;
}

body.ulu-flat.ulu-status-pills-blur .status-bar-item:hover {
backdrop-filter: none !important;
-webkit-backdrop-filter: none !important;
border: none !important;
box-shadow: none !important;
}`,
      light: `.ulu-twolf-l.ulu-status-pills .status-bar-item {
color: var(--text-normal);
}

.ulu-meg-l.ulu-status-pills .status-bar-item {
color: var(--text-normal);
}`,
    },
    "ulu-accent-bold-italic": {
      general: `.ulu-accent-bold-italic .cm-strong, .ulu-accent-bold-italic strong {
color: var(--text-accent) !important;
}

.ulu-accent-bold-italic .cm-em, .ulu-accent-bold-italic em {
color: var(--color-accent-1) !important;
}`,
    },
    "ulu-serif-italic": {
      general: `.ulu-serif-italic .cm-em, .ulu-serif-italic em {
font-family: var(--font-serif);
font-variation-settings:
        "wght" 400,
        "SOFT" 0,
        "opsz" 69 !important;
}`,
    },
    "ulu-duo-tag": {
      general: `body .ulu-duo-tag .markdown-preview-view a.tag, body .ulu-duo-tag .cm-s-obsidian span.cm-hashtag {
/* .𖥔 ݁ ˖  layout & shape ⊹ ࣪ ˖ */
text-decoration: none !important;
display: inline-block;
padding: 0px 8px;
border-radius: 6px;
margin: 0 2px;
color: var(--color-accent) !important;
font-size: 0.85em;
font-weight: 600;
background-color: rgb(from var(--color-accent) r g b/0.05);
border: 1px solid rgb(from var(--color-accent) r g b/0.2);
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.ulu-duo-tag .markdown-source-view.mod-cm6 .cm-hashtag-begin {
border-radius: 6px;
border-right: 1px solid rgb(from var(--color-accent) r g b/0.2);
padding-left: 8px;
padding-right: 8px;
margin-right: 2px;
opacity: 1;
}

.ulu-duo-tag .markdown-source-view.mod-cm6 .cm-hashtag-end {
border-radius: 6px;
border-left: 1px solid rgb(from var(--color-accent) r g b/0.2);
padding-right: 8px;
padding-left: 8px;
margin-left: 2px;
}

body .ulu-duo-tag .markdown-preview-view a.tag:hover, body .ulu-duo-tag .cm-s-obsidian span.cm-hashtag:hover {
background: linear-gradient(
        180deg,
        rgb(from var(--color-accent) r g b/0.25) 0%,
        rgb(from var(--color-accent) r g b/0.1) 100%
    );
border-color: rgb(from var(--color-accent) r g b/0.5);
box-shadow:
        0 0 12px rgb(from var(--color-accent) r g b/0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
transform: translateY(-1px);
color: var(--text-normal) !important;
text-shadow: 0 0 5px rgb(from var(--color-accent) r g b/0.5);
}

.ulu-duo-tag .markdown-source-view.mod-cm6 .cm-hashtag {
line-height: 1.4;
cursor: pointer;
}

.ulu-duo-tag .markdown-source-view.mod-cm6 .cm-hashtag-begin {
opacity: 0.5;
margin-right: 1px;
font-weight: 400;
}

.ulu-duo-tag .cm-hashtag-end {
border-top-right-radius: 6px;
border-bottom-right-radius: 6px;
}

.ulu-duo-tag .cm-hashtag-begin {
border-top-left-radius: 6px;
border-bottom-left-radius: 6px;
}`,
    },
    "ulu-justify": {
      general: `body.ulu-justify .markdown-source-view.mod-cm6 .cm-line, body.ulu-justify .markdown-rendered p {
text-align: justify;
hyphens: auto;
-webkit-hyphens: auto;
word-spacing: -0.05em;
text-justify: distribute;
text-align-last: left;
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
    "ulu-faintselect": {
      general: `.ulu-faintselect {
--text-selection: rgb(from var(--color-accent) r g b / 0.25);
}`,
    },
    "ulu-accent-title": {
      general: `.ulu-accent-title {
--inline-title-color: var(--color-accent);
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
--h4-size: 1.25em;
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
    "ulu-header-line-h1": {
      general: `.ulu-header-line-h1 .markdown-reading-view h1:not(.embedded-note-title), .ulu-header-line-h1 .markdown-source-view.mod-cm6 .cm-editor .HyperMD-header-1 {
padding-bottom: 0.4em;
border-bottom: 1px solid
        var(
            --ulu-h1-line-color,
            var(--ulu-header-line-accent, var(--background-modifier-border))
        );
margin-block-end: 0.6em;
}`,
    },
    "ulu-header-line-h2": {
      general: `.ulu-header-line-h2 .markdown-reading-view h2, .ulu-header-line-h2 .markdown-source-view.mod-cm6 .cm-editor .HyperMD-header-2 {
padding-bottom: 0.4em;
border-bottom: 1px solid
        var(
            --ulu-h2-line-color,
            var(--ulu-header-line-accent, var(--background-modifier-border))
        );
margin-block-end: 0.6em;
}`,
    },
    "ulu-header-line-h3": {
      general: `.ulu-header-line-h3 .markdown-reading-view h3, .ulu-header-line-h3 .markdown-source-view.mod-cm6 .cm-editor .HyperMD-header-3 {
padding-bottom: 0.4em;
border-bottom: 1px solid
        var(
            --ulu-h3-line-color,
            var(--ulu-header-line-accent, var(--background-modifier-border))
        );
margin-block-end: 0.6em;
}`,
    },
    "ulu-header-line-h4": {
      general: `.ulu-header-line-h4 .markdown-reading-view h4, .ulu-header-line-h4 .markdown-source-view.mod-cm6 .cm-editor .HyperMD-header-4 {
padding-bottom: 0.4em;
border-bottom: 1px solid
        var(
            --ulu-h4-line-color,
            var(--ulu-header-line-accent, var(--background-modifier-border))
        );
margin-block-end: 0.6em;
}`,
    },
    "ulu-header-line-h5": {
      general: `.ulu-header-line-h5 .markdown-reading-view h5, .ulu-header-line-h5 .markdown-source-view.mod-cm6 .cm-editor .HyperMD-header-5 {
padding-bottom: 0.4em;
border-bottom: 1px solid
        var(
            --ulu-h5-line-color,
            var(--ulu-header-line-accent, var(--background-modifier-border))
        );
margin-block-end: 0.6em;
}`,
    },
    "ulu-header-line-h6": {
      general: `.ulu-header-line-h6 .markdown-reading-view h6, .ulu-header-line-h6 .markdown-source-view.mod-cm6 .cm-editor .HyperMD-header-6 {
padding-bottom: 0.4em;
border-bottom: 1px solid
        var(
            --ulu-h6-line-color,
            var(--ulu-header-line-accent, var(--background-modifier-border))
        );
margin-block-end: 0.6em;
}`,
    },
    "ulu-no-blur-canvas": {
      general: `body.ulu-no-blur-canvas .canvas-control-group, body.ulu-no-blur-canvas .canvas-card-menu {
background-image: linear-gradient(
        rgba(var(--canvas-card-base), 0.04),
        rgba(var(--canvas-card-base), 0.04)
    );
background-color: var(--color-base-00) !important;
}

body.ulu-no-blur-canvas .canvas-node:not(.is-themed) .canvas-node-container {
background-image: linear-gradient(
        rgba(var(--canvas-card-base), 0.04),
        rgba(var(--canvas-card-base), 0.04)
    );
background-color: var(--color-base-00) !important;
}

body.ulu-no-blur-canvas .canvas-node.is-themed .canvas-node-container {
background-image: linear-gradient(
        rgba(var(--canvas-color), 0.1),
        rgba(var(--canvas-color), 0.1)
    );
background-color: var(--color-base-00) !important;
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
    "ulu-canvas-fancycolor10": {
      general: `.ulu-canvas-fancycolor10 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-canvas-fancycolor10 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(15, 82%, 54%) 0%,
        hsl(14, 83%, 54%) 11%,
        hsl(14, 83%, 53%) 22%,
        hsl(13, 84%, 53%) 33%,
        hsl(13, 84%, 53%) 44%,
        hsl(12, 85%, 53%) 56%,
        hsl(11, 85%, 53%) 67%,
        hsl(11, 86%, 52%) 78%,
        hsl(10, 86%, 52%) 89%,
        hsl(9, 87%, 52%) 100%
    );
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(0, 87%, 79%) 0%,
        hsl(0, 87%, 78%) 21%,
        hsl(0, 87%, 77%) 30%,
        hsl(359, 87%, 75%) 39%,
        hsl(359, 87%, 74%) 46%,
        hsl(359, 87%, 73%) 54%,
        hsl(359, 86%, 72%) 61%,
        hsl(358, 86%, 71%) 69%,
        hsl(358, 86%, 70%) 79%,
        hsl(358, 85%, 68%) 100%
    );
}`,
    },
    "ulu-canvas-fancycolor20": {
      general: `.ulu-canvas-fancycolor20 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-canvas-fancycolor20 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
background: rgb(49, 42, 61) !important;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container .markdown-preview-view .inline-title, .theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container .markdown-preview-view {
color: rgb(213, 98, 66) !important;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
background: rgb(240, 105, 78) !important;
}

.theme-light .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container .markdown-preview-view .inline-title, .theme-light .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container .markdown-preview-view {
color: rgb(227, 222, 221) !important;
}`,
    },
    "ulu-gummy-canvas1": {
      general: `.ulu-gummy-canvas1 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
background: transparent;
}

.ulu-gummy-canvas1 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-gummy-canvas1 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background: transparent !important;
border: none !important;
box-shadow: none !important;
padding: 12px !important;
}

.ulu-gummy-canvas1 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
background-color: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(15, 82%, 54%) 0%,
        hsl(14, 83%, 54%) 11%,
        hsl(14, 83%, 53%) 22%,
        hsl(13, 84%, 53%) 33%,
        hsl(13, 84%, 53%) 44%,
        hsl(12, 85%, 53%) 56%,
        hsl(11, 85%, 53%) 67%,
        hsl(11, 86%, 52%) 78%,
        hsl(10, 86%, 52%) 89%,
        hsl(9, 87%, 52%) 100%
    );
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(0, 87%, 79%) 0%,
        hsl(0, 87%, 78%) 21%,
        hsl(0, 87%, 77%) 30%,
        hsl(359, 87%, 75%) 39%,
        hsl(359, 87%, 74%) 46%,
        hsl(359, 87%, 73%) 54%,
        hsl(359, 86%, 72%) 61%,
        hsl(358, 86%, 71%) 69%,
        hsl(358, 86%, 70%) 79%,
        hsl(358, 85%, 68%) 100%
    );
}`,
    },
    "ulu-gradient-canvas1": {
      general: `.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-content {
background: transparent !important;
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container .markdown-preview-view .inline-title {
color: var(--color-red);
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container .markdown-preview-view .inline-title {
color: var(--color-orange);
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container .markdown-preview-view .inline-title {
color: var(--color-yellow);
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container .markdown-preview-view .inline-title {
color: var(--color-green);
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container .markdown-preview-view .inline-title {
color: var(--color-blue);
}

.ulu-gradient-canvas1 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container .markdown-preview-view .inline-title {
color: var(--color-purple);
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(18, 88%, 66%) 0%,
        hsl(17, 88%, 65%) 21%,
        hsl(16, 87%, 63%) 30%,
        hsl(15, 86%, 62%) 39%,
        hsl(14, 85%, 60%) 46%,
        hsl(13, 85%, 59%) 54%,
        hsl(11, 84%, 57%) 61%,
        hsl(10, 83%, 56%) 69%,
        hsl(8, 82%, 55%) 79%,
        hsl(6, 81%, 54%) 100%
    );
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container p {
color: var(--text-on-accent);
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(0, 87%, 79%) 0%,
        hsl(0, 87%, 78%) 21%,
        hsl(0, 87%, 77%) 30%,
        hsl(359, 87%, 75%) 39%,
        hsl(359, 87%, 74%) 46%,
        hsl(359, 87%, 73%) 54%,
        hsl(359, 86%, 72%) 61%,
        hsl(358, 86%, 71%) 69%,
        hsl(358, 86%, 70%) 79%,
        hsl(358, 85%, 68%) 100%
    );
}`,
    },
    "ulu-canvas-border0": {
      general: `.ulu-canvas-border0 .canvas-node.is-themed.mod-canvas-color-1 .canvas-node-container {
border: none;
}`,
    },
    "ulu-canvas-fancycolor11": {
      general: `.ulu-canvas-fancycolor11 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-canvas-fancycolor11 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
background-image: linear-gradient(
        135deg,
        hsl(29, 82%, 54%) 0%,
        hsl(28, 83%, 53%) 11%,
        hsl(28, 83%, 53%) 22%,
        hsl(27, 84%, 53%) 33%,
        hsl(26, 84%, 53%) 44%,
        hsl(25, 85%, 53%) 56%,
        hsl(25, 85%, 52%) 67%,
        hsl(24, 86%, 52%) 78%,
        hsl(23, 86%, 52%) 89%,
        hsl(22, 87%, 52%) 100%
    );
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
background-image: linear-gradient(
        135deg,
        hsl(16, 100%, 76%) 0%,
        hsl(20, 100%, 76%) 21%,
        hsl(23, 100%, 76%) 30%,
        hsl(27, 100%, 77%) 39%,
        hsl(30, 100%, 77%) 46%,
        hsl(34, 100%, 77%) 54%,
        hsl(37, 100%, 78%) 61%,
        hsl(41, 100%, 79%) 69%,
        hsl(45, 100%, 80%) 79%,
        hsl(49, 100%, 81%) 100%
    );
}`,
    },
    "ulu-canvas-fancycolor21": {
      general: `.ulu-canvas-fancycolor21 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-canvas-fancycolor21 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
background: rgb(37, 60, 88) !important;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container .markdown-preview-view .inline-title, .theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container .markdown-preview-view {
color: rgb(228, 110, 71) !important;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
background: rgb(229, 193, 114) !important;
}

.theme-light .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container .markdown-preview-view .inline-title, .theme-light .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container .markdown-preview-view {
color: rgb(52, 68, 69) !important;
}`,
    },
    "ulu-gummy-canvas2": {
      general: `.ulu-gummy-canvas2 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
background: transparent;
}

.ulu-gummy-canvas2 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-gummy-canvas2 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background: transparent !important;
border: none !important;
box-shadow: none !important;
padding: 12px !important;
}

.ulu-gummy-canvas2 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
background-color: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(29, 82%, 54%) 0%,
        hsl(28, 83%, 53%) 11%,
        hsl(28, 83%, 53%) 22%,
        hsl(27, 84%, 53%) 33%,
        hsl(26, 84%, 53%) 44%,
        hsl(25, 85%, 53%) 56%,
        hsl(25, 85%, 52%) 67%,
        hsl(24, 86%, 52%) 78%,
        hsl(23, 86%, 52%) 89%,
        hsl(22, 87%, 52%) 100%
    );
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(16, 100%, 76%) 0%,
        hsl(20, 100%, 76%) 21%,
        hsl(23, 100%, 76%) 30%,
        hsl(27, 100%, 77%) 39%,
        hsl(30, 100%, 77%) 46%,
        hsl(34, 100%, 77%) 54%,
        hsl(37, 100%, 78%) 61%,
        hsl(41, 100%, 79%) 69%,
        hsl(45, 100%, 80%) 79%,
        hsl(49, 100%, 81%) 100%
    );
}`,
    },
    "ulu-gradient-canvas2": {
      general: `.ulu-gradient-canvas2 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-gradient-canvas2 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(23, 92%, 71%) 0%,
        hsl(21, 93%, 71%) 21%,
        hsl(18, 93%, 71%) 30%,
        hsl(16, 93%, 72%) 39%,
        hsl(14, 93%, 72%) 46%,
        hsl(11, 93%, 72%) 54%,
        hsl(9, 92%, 73%) 61%,
        hsl(6, 91%, 73%) 69%,
        hsl(3, 89%, 73%) 79%,
        hsl(0, 87%, 73%) 100%
    );
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container p {
color: var(--text-on-accent);
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(16, 100%, 76%) 0%,
        hsl(20, 100%, 76%) 21%,
        hsl(23, 100%, 76%) 30%,
        hsl(27, 100%, 77%) 39%,
        hsl(30, 100%, 77%) 46%,
        hsl(34, 100%, 77%) 54%,
        hsl(37, 100%, 78%) 61%,
        hsl(41, 100%, 79%) 69%,
        hsl(45, 100%, 80%) 79%,
        hsl(49, 100%, 81%) 100%
    );
}`,
    },
    "ulu-canvas-border1": {
      general: `.ulu-canvas-border1 .canvas-node.is-themed.mod-canvas-color-2 .canvas-node-container {
border: none;
}`,
    },
    "ulu-canvas-fancycolor12": {
      general: `.ulu-canvas-fancycolor12 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-canvas-fancycolor12 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
background-image: linear-gradient(
        135deg,
        hsl(44, 82%, 54%) 0%,
        hsl(44, 83%, 54%) 11%,
        hsl(45, 83%, 53%) 22%,
        hsl(45, 84%, 53%) 33%,
        hsl(46, 84%, 53%) 44%,
        hsl(46, 85%, 53%) 56%,
        hsl(47, 85%, 53%) 67%,
        hsl(47, 86%, 53%) 78%,
        hsl(48, 86%, 52%) 89%,
        hsl(48, 87%, 52%) 100%
    );
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
background-image: linear-gradient(
        135deg,
        hsl(60, 89%, 72%) 0%,
        hsl(59, 91%, 73%) 21%,
        hsl(57, 92%, 74%) 30%,
        hsl(56, 94%, 76%) 39%,
        hsl(55, 96%, 77%) 46%,
        hsl(53, 97%, 78%) 54%,
        hsl(52, 98%, 79%) 61%,
        hsl(51, 99%, 80%) 69%,
        hsl(50, 100%, 80%) 79%,
        hsl(49, 100%, 81%) 100%
    );
}`,
    },
    "ulu-canvas-fancycolor22": {
      general: `.ulu-canvas-fancycolor22 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-canvas-fancycolor22 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
background: rgb(56, 61, 71) !important;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container .markdown-preview-view .inline-title, .theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container .markdown-preview-view {
color: rgb(201, 173, 116) !important;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
background: rgb(239, 227, 119) !important;
}

.theme-light .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container .markdown-preview-view .inline-title, .theme-light .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container .markdown-preview-view {
color: rgb(63, 27, 117) !important;
}`,
    },
    "ulu-gummy-canvas3": {
      general: `.ulu-gummy-canvas3 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
background: transparent;
}

.ulu-gummy-canvas3 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-gummy-canvas3 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background: transparent !important;
border: none !important;
box-shadow: none !important;
padding: 12px !important;
}

.ulu-gummy-canvas3 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
background-color: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(44, 82%, 54%) 0%,
        hsl(44, 83%, 54%) 11%,
        hsl(45, 83%, 53%) 22%,
        hsl(45, 84%, 53%) 33%,
        hsl(46, 84%, 53%) 44%,
        hsl(46, 85%, 53%) 56%,
        hsl(47, 85%, 53%) 67%,
        hsl(47, 86%, 53%) 78%,
        hsl(48, 86%, 52%) 89%,
        hsl(48, 87%, 52%) 100%
    );
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(60, 89%, 72%) 0%,
        hsl(59, 91%, 73%) 21%,
        hsl(57, 92%, 74%) 30%,
        hsl(56, 94%, 76%) 39%,
        hsl(55, 96%, 77%) 46%,
        hsl(53, 97%, 78%) 54%,
        hsl(52, 98%, 79%) 61%,
        hsl(51, 99%, 80%) 69%,
        hsl(50, 100%, 80%) 79%,
        hsl(49, 100%, 81%) 100%
    );
}`,
    },
    "ulu-gradient-canvas3": {
      general: `.ulu-gradient-canvas3 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-gradient-canvas3 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(46, 95%, 56%) 0%,
        hsl(44, 95%, 55%) 21%,
        hsl(43, 94%, 54%) 30%,
        hsl(41, 94%, 53%) 39%,
        hsl(39, 93%, 53%) 46%,
        hsl(37, 92%, 53%) 54%,
        hsl(35, 91%, 52%) 61%,
        hsl(34, 89%, 52%) 69%,
        hsl(32, 88%, 52%) 79%,
        hsl(29, 86%, 52%) 100%
    );
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container p {
color: var(--text-on-accent);
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(60, 89%, 72%) 0%,
        hsl(59, 91%, 73%) 21%,
        hsl(57, 92%, 74%) 30%,
        hsl(56, 94%, 76%) 39%,
        hsl(55, 96%, 77%) 46%,
        hsl(53, 97%, 78%) 54%,
        hsl(52, 98%, 79%) 61%,
        hsl(51, 99%, 80%) 69%,
        hsl(50, 100%, 80%) 79%,
        hsl(49, 100%, 81%) 100%
    );
}`,
    },
    "ulu-canvas-border2": {
      general: `.ulu-canvas-border2 .canvas-node.is-themed.mod-canvas-color-3 .canvas-node-container {
border: none;
}`,
    },
    "ulu-canvas-fancycolor13": {
      general: `.ulu-canvas-fancycolor13 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-canvas-fancycolor13 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
background-image: linear-gradient(
        135deg,
        hsl(98, 32%, 45%) 0%,
        hsl(101, 31%, 44%) 11%,
        hsl(104, 30%, 43%) 22%,
        hsl(108, 29%, 41%) 33%,
        hsl(112, 28%, 40%) 44%,
        hsl(116, 27%, 39%) 56%,
        hsl(120, 26%, 37%) 67%,
        hsl(124, 27%, 35%) 78%,
        hsl(128, 28%, 33%) 89%,
        hsl(132, 29%, 31%) 100%
    );
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
background-image: linear-gradient(
        135deg,
        hsl(99, 75%, 75%) 0%,
        hsl(103, 75%, 77%) 21%,
        hsl(108, 75%, 79%) 30%,
        hsl(113, 76%, 81%) 39%,
        hsl(119, 76%, 83%) 46%,
        hsl(124, 77%, 84%) 54%,
        hsl(129, 79%, 85%) 61%,
        hsl(133, 80%, 86%) 69%,
        hsl(137, 81%, 86%) 79%,
        hsl(141, 81%, 87%) 100%
    );
}`,
    },
    "ulu-canvas-fancycolor23": {
      general: `.ulu-canvas-fancycolor23 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-canvas-fancycolor23 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
background: rgb(45, 51, 62) !important;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container .markdown-preview-view .inline-title, .theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container .markdown-preview-view {
color: rgb(125, 166, 80) !important;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
background: rgb(50, 159, 130) !important;
}

.theme-light .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container .markdown-preview-view .inline-title, .theme-light .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container .markdown-preview-view {
color: rgb(230, 208, 112) !important;
}`,
    },
    "ulu-gummy-canvas4": {
      general: `.ulu-gummy-canvas4 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
background: transparent;
}

.ulu-gummy-canvas4 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-gummy-canvas4 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background: transparent !important;
border: none !important;
box-shadow: none !important;
padding: 12px !important;
}

.ulu-gummy-canvas4 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
background-color: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(98, 32%, 45%) 0%,
        hsl(101, 31%, 44%) 11%,
        hsl(104, 30%, 43%) 22%,
        hsl(108, 29%, 41%) 33%,
        hsl(112, 28%, 40%) 44%,
        hsl(116, 27%, 39%) 56%,
        hsl(120, 26%, 37%) 67%,
        hsl(124, 27%, 35%) 78%,
        hsl(128, 28%, 33%) 89%,
        hsl(132, 29%, 31%) 100%
    );
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(99, 75%, 75%) 0%,
        hsl(103, 75%, 77%) 21%,
        hsl(108, 75%, 79%) 30%,
        hsl(113, 76%, 81%) 39%,
        hsl(119, 76%, 83%) 46%,
        hsl(124, 77%, 84%) 54%,
        hsl(129, 79%, 85%) 61%,
        hsl(133, 80%, 86%) 69%,
        hsl(137, 81%, 86%) 79%,
        hsl(141, 81%, 87%) 100%
    );
}`,
    },
    "ulu-gradient-canvas4": {
      general: `.ulu-gradient-canvas4 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-gradient-canvas4 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(135, 72%, 52%) 0%,
        hsl(136, 73%, 49%) 21%,
        hsl(136, 74%, 47%) 30%,
        hsl(137, 75%, 45%) 39%,
        hsl(137, 76%, 43%) 46%,
        hsl(138, 77%, 41%) 54%,
        hsl(138, 78%, 39%) 61%,
        hsl(139, 79%, 37%) 69%,
        hsl(139, 80%, 35%) 79%,
        hsl(140, 82%, 31%) 100%
    );
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container p {
color: var(--text-on-accent);
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(99, 75%, 75%) 0%,
        hsl(103, 75%, 77%) 21%,
        hsl(108, 75%, 79%) 30%,
        hsl(113, 76%, 81%) 39%,
        hsl(119, 76%, 83%) 46%,
        hsl(124, 77%, 84%) 54%,
        hsl(129, 79%, 85%) 61%,
        hsl(133, 80%, 86%) 69%,
        hsl(137, 81%, 86%) 79%,
        hsl(141, 81%, 87%) 100%
    );
}`,
    },
    "ulu-canvas-border3": {
      general: `.ulu-canvas-border3 .canvas-node.is-themed.mod-canvas-color-4 .canvas-node-container {
border: none;
}`,
    },
    "ulu-canvas-fancycolor14": {
      general: `.ulu-canvas-fancycolor14 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-canvas-fancycolor14 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
background-image: linear-gradient(
        135deg,
        hsl(218, 82%, 54%) 0%,
        hsl(218, 83%, 53%) 11%,
        hsl(218, 85%, 52%) 22%,
        hsl(219, 85%, 51%) 33%,
        hsl(219, 86%, 51%) 44%,
        hsl(220, 87%, 50%) 56%,
        hsl(221, 87%, 50%) 67%,
        hsl(223, 87%, 51%) 78%,
        hsl(224, 87%, 51%) 89%,
        hsl(227, 87%, 52%) 100%
    );
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
background-image: linear-gradient(
        135deg,
        hsl(187, 100%, 89%) 0%,
        hsl(187, 100%, 87%) 21%,
        hsl(187, 100%, 85%) 30%,
        hsl(187, 100%, 83%) 39%,
        hsl(187, 100%, 81%) 46%,
        hsl(187, 100%, 79%) 54%,
        hsl(187, 100%, 77%) 61%,
        hsl(186, 100%, 75%) 69%,
        hsl(186, 100%, 72%) 79%,
        hsl(186, 100%, 69%) 100%
    );
}`,
    },
    "ulu-canvas-fancycolor24": {
      general: `.ulu-canvas-fancycolor24 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-canvas-fancycolor24 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
background: rgb(57, 83, 100) !important;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container .markdown-preview-view .inline-title, .theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container .markdown-preview-view {
color: rgb(129, 188, 250) !important;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
background: rgb(98, 106, 221) !important;
}

.theme-light .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container .markdown-preview-view .inline-title, .theme-light .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container .markdown-preview-view {
color: rgb(240, 214, 202) !important;
}`,
    },
    "ulu-gummy-canvas5": {
      general: `.ulu-gummy-canvas5 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
background: transparent;
}

.ulu-gummy-canvas5 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-gummy-canvas5 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background: transparent !important;
border: none !important;
box-shadow: none !important;
padding: 12px !important;
}

.ulu-gummy-canvas5 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
background-color: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container p {
color: white;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(218, 82%, 54%) 0%,
        hsl(218, 83%, 53%) 11%,
        hsl(218, 85%, 52%) 22%,
        hsl(219, 85%, 51%) 33%,
        hsl(219, 86%, 51%) 44%,
        hsl(220, 87%, 50%) 56%,
        hsl(221, 87%, 50%) 67%,
        hsl(223, 87%, 51%) 78%,
        hsl(224, 87%, 51%) 89%,
        hsl(227, 87%, 52%) 100%
    );
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(187, 100%, 89%) 0%,
        hsl(187, 100%, 87%) 21%,
        hsl(187, 100%, 85%) 30%,
        hsl(187, 100%, 83%) 39%,
        hsl(187, 100%, 81%) 46%,
        hsl(187, 100%, 79%) 54%,
        hsl(187, 100%, 77%) 61%,
        hsl(186, 100%, 75%) 69%,
        hsl(186, 100%, 72%) 79%,
        hsl(186, 100%, 69%) 100%
    );
}`,
    },
    "ulu-gradient-canvas5": {
      general: `.ulu-gradient-canvas5 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-gradient-canvas5 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container p {
color: var(--text-on-accent);
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(210, 90%, 80%) 0%,
        hsl(211, 91%, 77%) 21%,
        hsl(212, 92%, 74%) 30%,
        hsl(212, 93%, 71%) 39%,
        hsl(213, 93%, 68%) 46%,
        hsl(213, 93%, 65%) 54%,
        hsl(213, 92%, 61%) 61%,
        hsl(213, 91%, 58%) 69%,
        hsl(213, 90%, 54%) 79%,
        hsl(212, 93%, 49%) 100%
    );
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(187, 100%, 89%) 0%,
        hsl(187, 100%, 87%) 21%,
        hsl(187, 100%, 85%) 30%,
        hsl(187, 100%, 83%) 39%,
        hsl(187, 100%, 81%) 46%,
        hsl(187, 100%, 79%) 54%,
        hsl(187, 100%, 77%) 61%,
        hsl(186, 100%, 75%) 69%,
        hsl(186, 100%, 72%) 79%,
        hsl(186, 100%, 69%) 100%
    );
}`,
    },
    "ulu-canvas-border4": {
      general: `.ulu-canvas-border4 .canvas-node.is-themed.mod-canvas-color-5 .canvas-node-container {
border: none;
}`,
    },
    "ulu-canvas-fancycolor15": {
      general: `.ulu-canvas-fancycolor15 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-canvas-fancycolor15 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
background-image: linear-gradient(
        135deg,
        hsl(308, 33%, 41%) 0%,
        hsl(308, 35%, 41%) 11%,
        hsl(308, 37%, 40%) 22%,
        hsl(308, 40%, 39%) 33%,
        hsl(308, 42%, 39%) 44%,
        hsl(308, 45%, 38%) 56%,
        hsl(308, 47%, 37%) 67%,
        hsl(308, 51%, 36%) 78%,
        hsl(308, 54%, 35%) 89%,
        hsl(308, 58%, 35%) 100%
    );
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container p {
color: white;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
background-image: linear-gradient(
        135deg,
        hsl(298, 68%, 90%) 0%,
        hsl(287, 68%, 89%) 21%,
        hsl(277, 68%, 89%) 30%,
        hsl(267, 67%, 88%) 39%,
        hsl(258, 65%, 87%) 46%,
        hsl(249, 63%, 87%) 54%,
        hsl(240, 61%, 86%) 61%,
        hsl(232, 62%, 83%) 69%,
        hsl(225, 62%, 81%) 79%,
        hsl(220, 61%, 79%) 100%
    );
}`,
    },
    "ulu-canvas-fancycolor25": {
      general: `.ulu-canvas-fancycolor25 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-canvas-fancycolor25 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
background: rgb(55, 53, 76) !important;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container .markdown-preview-view .inline-title, .theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container .markdown-preview-view {
color: rgb(167, 233, 216) !important;
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
background: rgb(249, 220, 195) !important;
}

.theme-light .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container .markdown-preview-view .inline-title, .theme-light .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container .markdown-preview-view {
color: rgb(123, 136, 208) !important;
}`,
    },
    "ulu-gummy-canvas6": {
      general: `.ulu-gummy-canvas6 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
background: transparent;
}

.ulu-gummy-canvas6 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-gummy-canvas6 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background: transparent !important;
border: none !important;
box-shadow: none !important;
padding: 12px !important;
}

.ulu-gummy-canvas6 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
background-color: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container p {
color: white;
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(308, 33%, 41%) 0%,
        hsl(308, 35%, 41%) 11%,
        hsl(308, 37%, 40%) 22%,
        hsl(308, 40%, 39%) 33%,
        hsl(308, 42%, 39%) 44%,
        hsl(308, 45%, 38%) 56%,
        hsl(308, 47%, 37%) 67%,
        hsl(308, 51%, 36%) 78%,
        hsl(308, 54%, 35%) 89%,
        hsl(308, 58%, 35%) 100%
    );
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(298, 68%, 90%) 0%,
        hsl(287, 68%, 89%) 21%,
        hsl(277, 68%, 89%) 30%,
        hsl(267, 67%, 88%) 39%,
        hsl(258, 65%, 87%) 46%,
        hsl(249, 63%, 87%) 54%,
        hsl(240, 61%, 86%) 61%,
        hsl(232, 62%, 83%) 69%,
        hsl(225, 62%, 81%) 79%,
        hsl(220, 61%, 79%) 100%
    );
}`,
    },
    "ulu-gradient-canvas6": {
      general: `.ulu-gradient-canvas6 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
border: none !important;
border-radius: 28px !important;
box-shadow: none !important;
}

.ulu-gradient-canvas6 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-content {
background: transparent !important;
}`,
      dark: `.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container p {
color: var(--text-on-accent);
}

.theme-dark .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(276, 91%, 79%) 0%,
        hsl(274, 88%, 77%) 21%,
        hsl(272, 85%, 75%) 30%,
        hsl(270, 83%, 74%) 39%,
        hsl(267, 81%, 72%) 46%,
        hsl(265, 79%, 71%) 54%,
        hsl(262, 78%, 69%) 61%,
        hsl(260, 76%, 68%) 69%,
        hsl(257, 75%, 66%) 79%,
        hsl(254, 74%, 65%) 100%
    );
}`,
      light: `.theme-light .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
background-image: linear-gradient(
        45deg,
        hsl(298, 68%, 90%) 0%,
        hsl(287, 68%, 89%) 21%,
        hsl(277, 68%, 89%) 30%,
        hsl(267, 67%, 88%) 39%,
        hsl(258, 65%, 87%) 46%,
        hsl(249, 63%, 87%) 54%,
        hsl(240, 61%, 86%) 61%,
        hsl(232, 62%, 83%) 69%,
        hsl(225, 62%, 81%) 79%,
        hsl(220, 61%, 79%) 100%
    );
}`,
    },
    "ulu-canvas-border5": {
      general: `.ulu-canvas-border5 .canvas-node.is-themed.mod-canvas-color-6 .canvas-node-container {
border: none;
}`,
    },
  },
};
