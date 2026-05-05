import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ultra-lobster.eidolon",
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
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --ancestor-editor-color: var(
        --text-normal
    , #a6cfa9);
  --background-modifier-border: var(--color-base-30, #27352e);
  --background-modifier-border-alt: #344e41;
  --background-modifier-border-focus: var(--color-base-40, #344e41);
  --background-modifier-border-hover: var(--color-base-35, #635b58);
  --background-modifier-error: var(--color-red, #9a453c);
  --background-modifier-error-hover: var(--color-red, #9a453c);
  --background-modifier-error-rgb: var(--color-red-rgb, 154, 69, 60);
  --background-modifier-form-field: var(--color-base-25, #1b241f);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #1b241f);
  --background-modifier-success: var(--color-green, #8ba481);
  --background-modifier-success-rgb: var(--color-green-rgb, 139, 164, 129);
  --background-primary: var(--color-base-00, #121715);
  --background-primary-alt: var(--color-base-10, #1a231f);
  --background-secondary: var(--color-base-20, #0e1110);
  --background-secondary-alt: var(--color-base-30, #27352e);
  --bases-cards-background: var(--background-primary, #121715);
  --bases-cards-cover-background: var(--background-primary-alt, #1a231f);
  --bases-embed-border-color: var(--background-modifier-border, #27352e);
  --bases-group-heading-property-color: var(--text-muted, #588157);
  --bases-table-border-color: var(--table-border-color, #27352e);
  --bases-table-cell-background-active: var(--background-primary, #121715);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #1a231f);
  --bases-table-cell-background-selected: var(--table-selection, hsla(177, 60%, 23%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #1a231f);
  --bases-table-header-background: var(--background-primary, #121715);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(#a3b18a, 0.067));
  --bases-table-header-color: var(--text-muted, #588157);
  --bases-table-summary-background: var(--background-primary, #121715);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(#a3b18a, 0.067));
  --blockquote-border-color: var(--interactive-accent, hsl(177, 60%, 23%));
  --bodyFont: var(--font-text-theme, var(--ulu-font-general, "Instrument", sans-serif));
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-bug: var(--color-red-rgb, 154, 69, 60);
  --callout-default: var(--color-blue-rgb, 23, 92, 89);
  --callout-error: var(--color-red-rgb, 154, 69, 60);
  --callout-example: var(--color-purple-rgb, 166, 154, 181);
  --callout-fail: var(--color-red-rgb, 154, 69, 60);
  --callout-important: var(--color-cyan-rgb, 155, 199, 189);
  --callout-info: var(--color-blue-rgb, 23, 92, 89);
  --callout-question: var(--color-orange-rgb, 241, 187, 138);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-m, 8px);
  --callout-success: var(--color-green-rgb, 139, 164, 129);
  --callout-summary: var(--color-cyan-rgb, 155, 199, 189);
  --callout-tip: var(--color-cyan-rgb, 155, 199, 189);
  --callout-todo: var(--color-blue-rgb, 23, 92, 89);
  --callout-warning: var(--color-orange-rgb, 241, 187, 138);
  --canvas-background: var(--background-primary, #121715);
  --canvas-card-label-color: var(--text-faint, #a4daa6);
  --canvas-color: var(--background-modifier-border, #27352e);
  --canvas-color-1: var(--color-red-rgb, 154, 69, 60);
  --canvas-color-2: var(--color-orange-rgb, 241, 187, 138);
  --canvas-color-3: var(--color-yellow-rgb, 228, 188, 127);
  --canvas-color-4: var(--color-green-rgb, 139, 164, 129);
  --canvas-color-5: var(--color-cyan-rgb, 155, 199, 189);
  --canvas-color-6: var(--color-purple-rgb, 166, 154, 181);
  --canvas-dot-pattern: var(--color-base-30, #27352e);
  --caret-color: var(--text-normal, #a6cfa9);
  --checkbox-border-color: var(--text-faint, #a4daa6);
  --checkbox-border-color-hover: var(--text-muted, #588157);
  --checkbox-color: var(--interactive-accent, hsl(177, 60%, 23%));
  --checkbox-color-hover: var(--interactive-accent-hover, #ef796a);
  --checkbox-marker-color: var(--background-primary, #121715);
  --checklist-done-color: var(--text-muted, #588157);
  --code-background: var(--background-primary-alt, #1a231f);
  --code-border-color: var(--background-modifier-border, #27352e);
  --code-bracket-background: var(--background-modifier-hover, rgba(#a3b18a, 0.067));
  --code-comment: var(--text-faint, #a4daa6);
  --code-function: var(--color-yellow, #e4bc7f);
  --code-important: var(--color-orange, #f1bb8a);
  --code-keyword: var(--color-pink, #ef796a);
  --code-normal: var(--text-normal, #a6cfa9);
  --code-operator: var(--color-red, #9a453c);
  --code-property: var(--color-cyan, #9bc7bd);
  --code-punctuation: var(--text-muted, #588157);
  --code-string: var(--color-green, #8ba481);
  --code-tag: var(--color-red, #9a453c);
  --code-value: var(--color-purple, #a69ab5);
  --collapse-icon-color: var(--text-faint, #a4daa6);
  --collapse-icon-color-collapsed: var(--color-accent, hsl(177, 60%, 23%));
  --color-accent: hsl(var(--color-blue-hsl));
  --color-accent-1: var(--color-pink, #ef796a);
  --color-accent-1-rgb: var(--color-pink-rgb, 239, 121, 106);
  --color-accent-2: hsl(
        var(--accent-h) calc(var(--accent-s) + 180) var(--accent-l)
    );
  --color-accent-hover: var(--color-accent-2, hsl(
        258 calc(88% + 180) 66%
    ));
  --color-accent-hsl: var(--color-blue-hsl, 177, 60%, 23%);
  --color-accent-rgb: var(--color-blue-rgb, 23, 92, 89);
  --color-base-00: var(--proxy-00, #121715);
  --color-base-10: var(--proxy-10, #1a231f);
  --color-base-100: #bbdbb7;
  --color-base-20: var(--proxy-20, #0e1110);
  --color-base-25: #1b241f;
  --color-base-30: #27352e;
  --color-base-35: #635b58;
  --color-base-40: #344e41;
  --color-base-50: #588157;
  --color-base-60: #a4daa6;
  --color-base-70: #a6cfa9;
  --color-blue: #175c59;
  --color-blue-hsl: 177, 60%, 23%;
  --color-blue-rgb: 23, 92, 89;
  --color-cyan: #9bc7bd;
  --color-cyan-hsl: 166, 28%, 69%;
  --color-cyan-rgb: 155, 199, 189;
  --color-green: #8ba481;
  --color-green-hsl: 103, 16%, 57%;
  --color-green-rgb: 139, 164, 129;
  --color-orange: #f1bb8a;
  --color-orange-hsl: 29, 79%, 74%;
  --color-orange-rgb: 241, 187, 138;
  --color-pink: #ef796a;
  --color-pink-hsl: 7, 81%, 68%;
  --color-pink-rgb: 239, 121, 106;
  --color-purple: #a69ab5;
  --color-purple-hsl: 267, 15%, 66%;
  --color-purple-rgb: 166, 154, 181;
  --color-red: #9a453c;
  --color-red-hsl: 6, 44%, 42%;
  --color-red-rgb: 154, 69, 60;
  --color-yellow: #e4bc7f;
  --color-yellow-hsl: 36, 65%, 70%;
  --color-yellow-rgb: 228, 188, 127;
  --dark: var(--text-normal, var(--color-base-70, #a6cfa9));
  --darkgray: var(--text-normal, var(--color-base-70, #a6cfa9));
  --divider-color: var(--background-modifier-border, #27352e);
  --divider-color-hover: var(--interactive-accent, hsl(177, 60%, 23%));
  --dropdown-background: var(--interactive-normal, #0e1110);
  --dropdown-background-hover: var(--interactive-hover, #635b58);
  --file-header-background: var(--background-primary, #121715);
  --file-header-background-focused: var(--background-primary, #121715);
  --file-header-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #0e1110);
  --flair-color: var(--text-normal, #a6cfa9);
  --font-interface-theme: "Instrument", sans-serif;
  --font-mermaid: var(--font-text, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-serif: "Fraunces", serif;
  --font-text-theme: var(--ulu-font-general, "Instrument", sans-serif);
  --font-title: var(--ulu-font-title, "Getai");
  --footnote-divider-color: var(--metadata-divider-color, #27352e);
  --footnote-id-color: var(--text-muted, #588157);
  --footnote-id-color-no-occurrences: var(--text-faint, #a4daa6);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(#a3b18a, 0.067));
  --footnote-line-height: var(--line-height-normal, 1.65);
  --glass-border-dark: #696969;
  --glass-border-light: #516b5e;
  --gradient-bg-primary: linear-gradient(
        135deg,
        #1d2522 1.62%,
        #121715 50.72%
    );
  --gradient-bg-secondary: linear-gradient(
        135deg,
        #151918 1.62%,
        #0e1110 50.72%
    );
  --graph-line: rgb(from var(--mono-rgb-100) r g b / 0.15);
  --graph-node: var(--text-muted, #588157);
  --graph-node-attachment: var(--color-yellow, #e4bc7f);
  --graph-node-focused: var(--color-accent, hsl(177, 60%, 23%));
  --graph-node-tag: var(--color-accent, hsl(177, 60%, 23%));
  --graph-node-unresolved: var(--text-faint, #a4daa6);
  --graph-text: var(--text-normal, #a6cfa9);
  --gray: var(--text-muted, var(--color-base-50, #588157));
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
  --heading-formatting: var(--text-faint, #a4daa6);
  --hr-color: var(--background-modifier-border, #27352e);
  --icon-color: var(--text-muted, #588157);
  --icon-color-active: var(--color-accent, hsl(177, 60%, 23%));
  --icon-color-focused: var(--text-normal, #a6cfa9);
  --icon-color-hover: var(--text-muted, #588157);
  --inline-title-color: var(--color-base-100, #bbdbb7);
  --inline-title-font: var(--ulu-inline-title-font, var(--font-title));
  --inline-title-size: var(--h1-size, clamp(2.5rem, 8vw - 2rem, 3rem));
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, #a4daa6);
  --input-placeholder-color: var(--text-faint, #a4daa6);
  --interactive-accent: var(--color-accent, hsl(177, 60%, 23%));
  --interactive-accent-hover: var(--color-accent-2, #ef796a);
  --interactive-accent-hsl: var(--color-accent-hsl, 177, 60%, 23%);
  --interactive-hover: var(--color-base-35, #635b58);
  --interactive-normal: var(--color-base-20, #0e1110);
  --lbs: 0px 20px 30px rgba(0, 0, 5, 0.15);
  --light: var(--background-primary, var(--color-base-00, #121715));
  --lightgray: var(--background-secondary, var(--color-base-20, #0e1110));
  --line-height-normal: 1.65;
  --link-color: var(--text-muted, #588157);
  --link-color-hover: var(--text-normal, #a6cfa9);
  --link-decoration-hover: none;
  --link-decoration-thickness: 13%;
  --link-external-color: var(--color-accent, hsl(177, 60%, 23%));
  --link-external-color-hover: var(--color-accent-hover, hsl(
        258 calc(88% + 180) 66%
    ));
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: var(--text-muted, #588157);
  --list-marker-color: var(--text-faint, #a4daa6);
  --list-marker-color-collapsed: var(--color-accent, hsl(177, 60%, 23%));
  --list-marker-color-hover: var(--text-muted, #588157);
  --menu-background: var(--background-secondary, #0e1110);
  --menu-border-color: var(--background-modifier-border-hover, #635b58);
  --menu-shadow: var(--shadow-s, 0px 1px 4px rgba(0, 0, 0, 0.16));
  --metadata-border-color: var(--background-modifier-border, #27352e);
  --metadata-divider-color: var(--background-modifier-border, #27352e);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(#a3b18a, 0.067));
  --metadata-input-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #a6cfa9);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(#a3b18a, 0.067));
  --metadata-label-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #588157);
  --metadata-label-text-color-hover: var(--text-muted, #588157);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(#a3b18a, 0.067));
  --modal-background: var(--background-primary, #121715);
  --mono-rgb-0: #000000;
  --mono-rgb-100: #a3b18a;
  --nav-collapse-icon-color: var(--collapse-icon-color, #a4daa6);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #a4daa6);
  --nav-heading-color: var(--text-normal, #a6cfa9);
  --nav-heading-color-collapsed: var(--text-faint, #a4daa6);
  --nav-heading-color-collapsed-hover: var(--text-muted, #588157);
  --nav-heading-color-hover: var(--text-normal, #a6cfa9);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(#a3b18a, 0.12));
  --nav-item-background-active: var(--background-modifier-hover, rgba(#a3b18a, 0.067));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(#a3b18a, 0.067));
  --nav-item-color: var(--text-muted, #588157);
  --nav-item-color-active: var(--text-normal, #a6cfa9);
  --nav-item-color-highlighted: var(--color-accent-hover, hsl(
        258 calc(88% + 180) 66%
    ));
  --nav-item-color-hover: var(--text-normal, #a6cfa9);
  --nav-item-color-selected: var(--text-normal, #a6cfa9);
  --nav-tag-color: var(--text-faint, #a4daa6);
  --nav-tag-color-active: var(--text-muted, #588157);
  --nav-tag-color-hover: var(--text-muted, #588157);
  --pdf-background: var(--background-primary, #121715);
  --pdf-page-background: var(--background-primary, #121715);
  --pdf-sidebar-background: var(--background-primary, #121715);
  --pill-border-color: var(--background-modifier-border, #27352e);
  --pill-border-color-hover: var(--background-modifier-border-hover, #635b58);
  --pill-color: var(--text-muted, #588157);
  --pill-color-hover: var(--text-normal, #a6cfa9);
  --pill-color-remove: var(--text-faint, #a4daa6);
  --pill-color-remove-hover: var(--text-accent, hsl(177, 60%, 23%));
  --prompt-background: var(--background-primary, #121715);
  --proxy-00: #121715;
  --proxy-10: #1a231f;
  --proxy-20: #0e1110;
  --radius-xl: 24px;
  --raised-background: var(--blur-background, color-mix(in srgb, #0e1110 65%, transparent) linear-gradient(#0e1110, color-mix(in srgb, #0e1110 65%, transparent)));
  --ribbon-background: var(--background-secondary, #0e1110);
  --ribbon-background-collapsed: var(--background-primary, #121715);
  --sbs: 24px 24px 84px -4px rgba(0, 0, 13, 0.05), 0px 16px 64px 6px rgba(0, 13, 0, 0.007);
  --scrollbar-active-thumb-bg: var(--color-accent, hsl(177, 60%, 23%));
  --scrollbar-bg: rgb(from var(--mono-rgb-100) r g b / 0.1);
  --search-clear-button-color: var(--text-muted, #588157);
  --search-icon-color: var(--text-muted, #588157);
  --search-result-background: var(--background-primary, #121715);
  --secondary: var(--text-accent, var(--color-accent, hsl(177, 60%, 23%)));
  --setting-group-heading-color: var(--text-normal, #a6cfa9);
  --setting-items-background: var(--background-primary-alt, #1a231f);
  --setting-items-border-color: var(--background-modifier-border, #27352e);
  --shadow-l: 0px 8px 24px rgba(0, 0, 0, 0.2);
  --shadow-lm-only: none;
  --shadow-s: 0px 1px 4px rgba(0, 0, 0, 0.16);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #588157);
  --shiki-code-background: var(--code-background, #1a231f);
  --shiki-code-comment: var(--text-faint, #a4daa6);
  --shiki-code-function: var(--color-green, #8ba481);
  --shiki-code-important: var(--color-orange, #f1bb8a);
  --shiki-code-keyword: var(--color-pink, #ef796a);
  --shiki-code-normal: var(--text-muted, #588157);
  --shiki-code-property: var(--color-cyan, #9bc7bd);
  --shiki-code-punctuation: var(--text-muted, #588157);
  --shiki-code-string: var(--color-yellow, #e4bc7f);
  --shiki-code-value: var(--color-purple, #a69ab5);
  --shiki-gutter-border-color: var(--background-modifier-border, #27352e);
  --shiki-gutter-text-color: var(--text-faint, #a4daa6);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #588157);
  --shiki-highlight-neutral: var(--shiki-code-normal, #588157);
  --shiki-terminal-dots-color: var(--text-faint, #a4daa6);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #635b58);
  --slider-track-background: var(--background-modifier-border, #27352e);
  --status-bar-background: var(--background-secondary, #0e1110);
  --status-bar-border-color: var(--divider-color, #27352e);
  --status-bar-text-color: var(--text-muted, #588157);
  --suggestion-background: var(--background-primary, #121715);
  --sync-avatar-color-1: var(--color-red, #9a453c);
  --sync-avatar-color-2: var(--color-orange, #f1bb8a);
  --sync-avatar-color-3: var(--color-yellow, #e4bc7f);
  --sync-avatar-color-4: var(--color-green, #8ba481);
  --sync-avatar-color-5: var(--color-cyan, #9bc7bd);
  --sync-avatar-color-6: var(--color-blue, #175c59);
  --sync-avatar-color-7: var(--color-purple, #a69ab5);
  --sync-avatar-color-8: var(--color-pink, #ef796a);
  --tab-background-active: var(--background-primary, #121715);
  --tab-container-background: var(--background-secondary, #0e1110);
  --tab-divider-color: var(--background-modifier-border-hover, #635b58);
  --tab-outline-color: var(--divider-color, #27352e);
  --tab-switcher-background: var(--background-secondary, #0e1110);
  --tab-switcher-preview-radius: var(--radius-xl, 24px);
  --tab-text-color: var(--text-faint, #a4daa6);
  --tab-text-color-active: var(--text-muted, #588157);
  --tab-text-color-focused: var(--text-muted, #588157);
  --tab-text-color-focused-active: var(--text-muted, #588157);
  --tab-text-color-focused-active-current: var(--text-normal, #a6cfa9);
  --tab-text-color-focused-highlighted: var(--color-accent, hsl(177, 60%, 23%));
  --table-add-button-border-color: var(--background-modifier-border, #27352e);
  --table-border-color: var(--background-modifier-border, #27352e);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(177, 60%, 23%));
  --table-drag-handle-color: var(--text-faint, #a4daa6);
  --table-header-border-color: var(--table-border-color, #27352e);
  --table-header-color: var(--text-normal, #a6cfa9);
  --table-selection-border-color: var(--interactive-accent, hsl(177, 60%, 23%));
  --tag-color: var(--color-accent, hsl(177, 60%, 23%));
  --tag-color-hover: var(--color-accent, hsl(177, 60%, 23%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(
        258 calc(88% + 180) 66%
    )));
  --text-accent: var(--color-accent, hsl(177, 60%, 23%));
  --text-accent-hover: var(--color-accent-2, hsl(
        258 calc(88% + 180) 66%
    ));
  --text-error: var(--color-red, #9a453c);
  --text-faint: var(--color-base-60, #a4daa6);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: var(--color-base-50, #588157);
  --text-normal: var(--color-base-70, #a6cfa9);
  --text-on-button: var(--text-on-accent, white);
  --text-selection: var(--background-modifier-border, hsla(177, 60%, 23%, 0.33));
  --text-success: var(--color-green, #8ba481);
  --text-warning: var(--color-orange, #f1bb8a);
  --titleFont: var(--font-text-theme, var(--ulu-font-general, "Instrument", sans-serif));
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, #27352e);
  --titlebar-text-color: var(--text-muted, #588157);
  --titlebar-text-color-focused: var(--text-normal, #a6cfa9);
  --ulu-font-general: "Instrument", sans-serif;
  --ulu-font-title: "Getai";
  --ulu-kanban-border-color: transparent;
  --ulu-kanban-border-width: 0px;
  --ulu-radius: var(--radius-m, 8px);
  --vault-profile-color: var(--text-normal, #a6cfa9);
  --vault-profile-color-hover: var(--vault-profile-color, #a6cfa9);
  --view-bottom-fade-mask: none;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #0e1110);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #0e1110);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(166, 207, 169);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--text-normal, rgb(166, 207, 169));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 207, 169) none 0px;
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--color-base-100, rgb(187, 219, 183));
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  outline: rgb(187, 219, 183) none 0px;
  text-decoration-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--color-base-100, rgb(187, 219, 183));
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  outline: rgb(187, 219, 183) none 0px;
  text-decoration-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--color-base-100, rgb(187, 219, 183));
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: 700;
  outline: rgb(187, 219, 183) none 0px;
  text-decoration-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--text-normal, rgb(166, 207, 169));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 207, 169) none 0px;
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .text-highlight {
  color: var(--text-normal, rgb(166, 207, 169));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 207, 169) none 0px;
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body del {
  color: rgb(166, 207, 169);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 207, 169) none 0px;
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(from var(--mono-rgb-100) r g b/0.05);
  border-color: color(srgb 0.639216 0.694118 0.541176 / 0.15);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--color-accent, rgb(23, 94, 90));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(88, 129, 87));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(88, 129, 87) none 0px;
  text-decoration-color: rgb(88, 129, 87);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(23, 94, 90));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(23, 94, 90) none 0px;
  text-decoration: 13%;
  text-decoration-color: rgb(23, 94, 90);
  text-decoration-thickness: var(--link-decoration-thickness, 13%);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  background-color: color(srgb 0.092 0.368 0.3542 / 0.1);
  color: var(--color-accent, rgb(23, 94, 90));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 500);
  outline: rgb(23, 94, 90) none 0px;
  text-decoration-color: rgb(23, 94, 90);
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}

html[saved-theme="dark"] body a.internal-link.broken {
  background-color: var(--color-base-30, rgba(0, 0, 0, 0));
  color: var(--text-faint, rgb(164, 218, 166));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 500);
  outline: rgb(164, 218, 166) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(164, 218, 166));
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(166, 207, 169);
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  color: rgb(166, 207, 169);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(166, 207, 169);
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  color: rgb(166, 207, 169);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(166, 207, 169);
  margin-left: 31.9681px;
  padding-left: 8px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(166, 207, 169);
  margin-left: 31.9681px;
  padding-left: 8px;
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
  color: var(--text-faint, rgb(164, 218, 166));
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(from var(--color-base-00) r g b/0.3);
  color: var(--blockquote-color, rgb(166, 207, 169));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 26.4px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(166, 207, 169);
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
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
  color: rgb(166, 207, 169);
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  margin-bottom: 24px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: var(--heading-spacing, 24px);
  padding-bottom: 8px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-width: 0px;
  border-left-color: rgb(166, 207, 169);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(166, 207, 169);
  border-right-width: 0px;
  border-top-color: rgb(166, 207, 169);
  border-top-width: 0px;
  color: var(--text-normal, rgb(166, 207, 169));
  font-weight: 500;
  padding-bottom: 2px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
  text-align: left;
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(88, 129, 87);
  border-bottom-width: 0px;
  border-left-color: rgb(88, 129, 87);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(88, 129, 87);
  border-right-width: 0px;
  border-top-color: rgb(88, 129, 87);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--text-muted, rgb(88, 129, 87));
  font-weight: var(--table-header-weight, 700);
  letter-spacing: 1.12px;
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
  border-bottom-color: rgb(88, 129, 87);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(88, 129, 87);
  border-right-color: rgb(88, 129, 87);
  border-top-color: rgb(88, 129, 87);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--ec-codeFg, rgb(88, 129, 87));
  font-family: var(--ec-codeFontFml, Monaspace, monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(26, 35, 31));
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
  border-bottom-color: rgb(166, 207, 169);
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(166, 207, 169);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #1a231f);
  border-bottom-color: rgb(166, 207, 169);
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(187, 219, 183);
  border-left-color: rgb(187, 219, 183);
  border-right-color: rgb(187, 219, 183);
  border-top-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(166, 207, 169);
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(from var(--color-base-25) r g b/0.6);
  border-bottom-color: rgb(39, 53, 46);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(39, 53, 46);
  border-left-style: solid;
  border-left-width: 1px;
  border-radius: 12px;
  border-right-color: rgb(39, 53, 46);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(39, 53, 46);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--text-muted, rgb(88, 129, 87));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(166, 207, 169);
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgb(from var(--color-base-25) r g b/0.6);
  border-bottom-color: rgb(39, 53, 46);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(39, 53, 46);
  border-left-width: 1px;
  border-radius: 12px;
  border-right-color: rgb(39, 53, 46);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(39, 53, 46);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-style: solid;
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-right-style: solid;
  border-top-color: rgb(166, 207, 169);
  border-top-style: solid;
  color: rgb(166, 207, 169);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: color(srgb 0.639216 0.694118 0.541176 / 0.15);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: color(srgb 0.639216 0.694118 0.541176 / 0.15);
  border-right-color: color(srgb 0.639216 0.694118 0.541176 / 0.15);
  border-top-color: color(srgb 0.639216 0.694118 0.541176 / 0.15);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: var(--checkbox-size, 18px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(88, 129, 87);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(88, 129, 87);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(166, 207, 169);
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='3' x2='12' y2='14'/%3E%3Cline x1='12' y1='21' x2='12.01' y2='21'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='3' x2='12' y2='14'/%3E%3Cline x1='12' y1='21' x2='12.01' y2='21'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='11' x2='12' y2='21'/%3E%3Cline x1='12' y1='3' x2='12.01' y2='3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='11' x2='12' y2='21'/%3E%3Cline x1='12' y1='3' x2='12.01' y2='3'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 219, 183);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: var(--text-normal, rgb(166, 207, 169));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout-title {
  --ancestor-editor-color: #a6cfa9;
  --background-modifier-active-hover: hsla(177, 60%, 23%, 0.1);
  --background-modifier-border: #27352e;
  --background-modifier-border-focus: #344e41;
  --background-modifier-border-hover: #635b58;
  --background-modifier-error: #9a453c;
  --background-modifier-error-hover: #9a453c;
  --background-modifier-error-rgb: 154, 69, 60;
  --background-modifier-form-field: #1b241f;
  --background-modifier-form-field-hover: #1b241f;
  --background-modifier-hover: rgba(#a3b18a, 0.067);
  --background-modifier-success: #8ba481;
  --background-modifier-success-rgb: 139, 164, 129;
  --background-primary: #121715;
  --background-primary-alt: #1a231f;
  --background-secondary: #0e1110;
  --background-secondary-alt: #27352e;
  --blockquote-border-color: hsl(177, 60%, 23%);
  --blur-background: color-mix(in srgb, #0e1110 65%, transparent) linear-gradient(#0e1110, color-mix(in srgb, #0e1110 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 154, 69, 60;
  --callout-color: 23, 92, 89;
  --callout-default: 23, 92, 89;
  --callout-error: 154, 69, 60;
  --callout-example: 166, 154, 181;
  --callout-fail: 154, 69, 60;
  --callout-important: 155, 199, 189;
  --callout-info: 23, 92, 89;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 241, 187, 138;
  --callout-radius: 8px;
  --callout-success: 139, 164, 129;
  --callout-summary: 155, 199, 189;
  --callout-tip: 155, 199, 189;
  --callout-title-weight: 600;
  --callout-todo: 23, 92, 89;
  --callout-warning: 241, 187, 138;
  --canvas-background: #121715;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #27352e;
  --caret-color: #a6cfa9;
  --checkbox-border-color: #a4daa6;
  --checkbox-border-color-hover: #588157;
  --checkbox-color: hsl(177, 60%, 23%);
  --checkbox-color-hover: #ef796a;
  --checkbox-marker-color: #121715;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #588157;
  --clickable-icon-radius: 4px;
  --code-background: #1a231f;
  --code-border-color: #27352e;
  --code-bracket-background: rgba(#a3b18a, 0.067);
  --code-comment: #a4daa6;
  --code-function: #e4bc7f;
  --code-important: #f1bb8a;
  --code-keyword: #ef796a;
  --code-normal: #a6cfa9;
  --code-operator: #9a453c;
  --code-property: #9bc7bd;
  --code-punctuation: #588157;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #8ba481;
  --code-tag: #9a453c;
  --code-value: #a69ab5;
  --collapse-icon-color: #a4daa6;
  --collapse-icon-color-collapsed: hsl(177, 60%, 23%);
  --color-accent: hsl(177, 60%, 23%);
  --color-accent-1: #ef796a;
  --color-accent-1-rgb: 239, 121, 106;
  --color-accent-2: hsl(
        258 calc(88% + 180) 66%
    );
  --color-accent-hover: hsl(
        258 calc(88% + 180) 66%
    );
  --color-accent-hsl: 177, 60%, 23%;
  --color-accent-rgb: 23, 92, 89;
  --color-base-00: #121715;
  --color-base-10: #1a231f;
  --color-base-20: #0e1110;
  --divider-color: #27352e;
  --divider-color-hover: hsl(177, 60%, 23%);
  --divider-vertical-height: 100%;
  --dropdown-background: #0e1110;
  --dropdown-background-hover: #635b58;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #0e1110;
  --flair-color: #a6cfa9;
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
  --graph-line: rgb(from #a3b18a r g b / 0.15);
  --graph-node: #588157;
  --graph-node-attachment: #e4bc7f;
  --graph-node-focused: hsl(177, 60%, 23%);
  --graph-node-tag: hsl(177, 60%, 23%);
  --graph-node-unresolved: #a4daa6;
  --graph-text: #a6cfa9;
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
  --heading-formatting: #a4daa6;
  --heading-spacing: 2.5rem;
  --hr-color: #27352e;
  --interactive-accent: hsl(177, 60%, 23%);
  --interactive-accent-hover: #ef796a;
  --interactive-accent-hsl: 177, 60%, 23%;
  --interactive-hover: #635b58;
  --interactive-normal: #0e1110;
  --link-color: #588157;
  --link-color-hover: #a6cfa9;
  --link-external-color: hsl(177, 60%, 23%);
  --link-external-color-hover: hsl(
        258 calc(88% + 180) 66%
    );
  --link-unresolved-color: #588157;
  --link-unresolved-decoration-color: transparent;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #0e1110;
  --menu-border-color: #635b58;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  --pdf-background: #121715;
  --pdf-page-background: #121715;
  --pdf-shadow: 0 0 0 1px #27352e;
  --pdf-sidebar-background: #121715;
  --pdf-thumbnail-shadow: 0 0 0 1px #27352e;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #0e1110 65%, transparent) linear-gradient(#0e1110, color-mix(in srgb, #0e1110 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(177, 60%, 23%);
  --scrollbar-bg: rgb(from #a3b18a r g b / 0.1);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(#a3b18a, 0.1);
  --search-clear-button-color: #588157;
  --search-icon-color: #588157;
  --search-result-background: #121715;
  --setting-group-heading-color: #a6cfa9;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #1a231f;
  --setting-items-border-color: #27352e;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #588157;
  --shiki-code-background: #1a231f;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #a4daa6;
  --shiki-code-function: #8ba481;
  --shiki-code-important: #f1bb8a;
  --shiki-code-keyword: #ef796a;
  --shiki-code-normal: #588157;
  --shiki-code-property: #9bc7bd;
  --shiki-code-punctuation: #588157;
  --shiki-code-string: #e4bc7f;
  --shiki-code-value: #a69ab5;
  --shiki-gutter-border-color: #27352e;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #a4daa6;
  --shiki-gutter-text-color-highlight: #588157;
  --shiki-highlight-green: rgba(139, 164, 129, 0.5);
  --shiki-highlight-green-background: rgba(139, 164, 129, 0.1);
  --shiki-highlight-neutral: #588157;
  --shiki-highlight-neutral-background: rgba(#a3b18a, .05);
  --shiki-highlight-red: rgba(154, 69, 60, 0.5);
  --shiki-highlight-red-background: rgba(154, 69, 60, 0.1);
  --shiki-terminal-dots-color: #a4daa6;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #121715;
  --swatch-shadow: inset 0 0 0 1px rgba(#a3b18a, 0.15);
  --sync-avatar-color-1: #9a453c;
  --sync-avatar-color-2: #f1bb8a;
  --sync-avatar-color-3: #e4bc7f;
  --sync-avatar-color-4: #8ba481;
  --sync-avatar-color-5: #9bc7bd;
  --sync-avatar-color-6: #175c59;
  --sync-avatar-color-7: #a69ab5;
  --sync-avatar-color-8: #ef796a;
  --tab-background-active: #121715;
  --tab-divider-color: #635b58;
  --tab-font-size: 13px;
  --tab-outline-color: #27352e;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #0e1110;
  --tab-switcher-menubar-background: linear-gradient(to top, #0e1110, transparent);
  --tab-switcher-preview-radius: 24px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(#a3b18a, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(177, 60%, 23%);
  --tab-text-color: #a4daa6;
  --tab-text-color-active: #588157;
  --tab-text-color-focused: #588157;
  --tab-text-color-focused-active: #588157;
  --tab-text-color-focused-active-current: #a6cfa9;
  --tab-text-color-focused-highlighted: hsl(177, 60%, 23%);
  --table-add-button-border-color: #27352e;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(23, 92, 89) 25%, #121715 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(177, 60%, 23%);
  --table-drag-handle-color: #a4daa6;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #27352e;
  --table-header-border-width: 1px;
  --table-header-color: #a6cfa9;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(177, 60%, 23%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(177, 60%, 23%);
  --table-text-size: 16px;
  --tag-background: hsla(177, 60%, 23%, 0.1);
  --tag-background-hover: hsla(177, 60%, 23%, 0.2);
  --tag-border-color: hsla(177, 60%, 23%, 0.15);
  --tag-border-color-hover: hsla(177, 60%, 23%, 0.15);
  --tag-color: hsl(177, 60%, 23%);
  --tag-color-hover: hsl(177, 60%, 23%);
  --tag-size: 0.875em;
  --text-accent: hsl(177, 60%, 23%);
  --text-accent-hover: hsl(
        258 calc(88% + 180) 66%
    );
  --text-error: #9a453c;
  --text-faint: #a4daa6;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #588157;
  --text-normal: #a6cfa9;
  --text-on-button: white;
  --text-selection: hsla(177, 60%, 23%, 0.33);
  --text-success: #8ba481;
  --text-warning: #f1bb8a;
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
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(23, 92, 89, 0.3) 50%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(23, 92, 89);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(23, 92, 89);
  border-left-width: 0px;
  border-right-color: rgb(23, 92, 89);
  border-right-width: 0px;
  border-top-color: rgb(23, 92, 89);
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
  --callout-color: var(--callout-summary, 155, 199, 189);
  background: rgba(155, 199, 189, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: var(--text-normal, rgb(166, 207, 169));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 154, 69, 60);
  background: rgba(154, 69, 60, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: var(--text-normal, rgb(166, 207, 169));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 154, 69, 60);
  background: rgba(154, 69, 60, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: var(--text-normal, rgb(166, 207, 169));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 166, 154, 181);
  background: rgba(166, 154, 181, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: var(--text-normal, rgb(166, 207, 169));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 154, 69, 60);
  background: rgba(154, 69, 60, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: var(--text-normal, rgb(166, 207, 169));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 23, 92, 89);
  background: rgba(23, 92, 89, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: var(--text-normal, rgb(166, 207, 169));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 23, 92, 89);
  background: rgba(23, 92, 89, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: var(--text-normal, rgb(166, 207, 169));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 241, 187, 138);
  background: rgba(241, 187, 138, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: var(--text-normal, rgb(166, 207, 169));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(158, 158, 158, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: var(--text-normal, rgb(166, 207, 169));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 139, 164, 129);
  background: rgba(139, 164, 129, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: var(--text-normal, rgb(166, 207, 169));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 155, 199, 189);
  background: rgba(155, 199, 189, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: var(--text-normal, rgb(166, 207, 169));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 23, 92, 89);
  background: rgba(23, 92, 89, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: var(--text-normal, rgb(166, 207, 169));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 241, 187, 138);
  background: rgba(241, 187, 138, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: var(--text-normal, rgb(166, 207, 169));
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
  border-bottom-color: color(srgb 0.639216 0.694118 0.541176 / 0.1);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left-color: color(srgb 0.639216 0.694118 0.541176 / 0.1);
  border-right-color: color(srgb 0.639216 0.694118 0.541176 / 0.1);
  border-top-color: color(srgb 0.639216 0.694118 0.541176 / 0.1);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  color: var(--text-normal, rgb(166, 207, 169));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(18, 23, 21));
  border-bottom-color: color(srgb 0.639216 0.694118 0.541176 / 0.08);
  border-left-color: color(srgb 0.639216 0.694118 0.541176 / 0.08);
  border-right-color: color(srgb 0.639216 0.694118 0.541176 / 0.08);
  border-top-color: color(srgb 0.639216 0.694118 0.541176 / 0.08);
  box-shadow: 0 40px 80px -20px rgb(from var(--mono-rgb-0) r g b/0.6),
        inset 0 1px 0 0 rgb(from var(--mono-rgb-100) r g b/0.1);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(166, 207, 169);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 207, 169) none 0px;
  text-decoration-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(166, 207, 169);
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--interactive-hover, rgb(99, 91, 88));
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.639216 0.694118 0.541176 / 0.08);
  border-left-color: color(srgb 0.639216 0.694118 0.541176 / 0.08);
  border-right-color: color(srgb 0.639216 0.694118 0.541176 / 0.08);
  border-top-color: color(srgb 0.639216 0.694118 0.541176 / 0.08);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(from var(--color-base-0) r g b/0.3);
  border-bottom-color: rgb(39, 53, 46);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(39, 53, 46);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(39, 53, 46);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(39, 53, 46);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: inset 0 2px 4px rgb(from var(--mono-rgb-0) r g b/0.1);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--interactive-hover, rgb(99, 91, 88));
  border-bottom-color: rgb(166, 207, 169);
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--interactive-hover, rgb(99, 91, 88));
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(177, 60%, 23%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(177, 60%, 23%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(177, 60%, 23%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(177, 60%, 23%, 0.15));
  --pill-color: var(--tag-color, hsl(177, 60%, 23%));
  --pill-color-hover: var(--tag-color-hover, hsl(177, 60%, 23%));
  --pill-color-remove: var(--tag-color, hsl(177, 60%, 23%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(177, 60%, 23%));
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: color(srgb 0.092 0.368 0.3542 / 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.092 0.368 0.3542 / 0.4);
  border-left-width: 1px;
  border-right-color: color(srgb 0.092 0.368 0.3542 / 0.4);
  border-right-width: 1px;
  border-top-color: color(srgb 0.092 0.368 0.3542 / 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(166, 207, 169));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 11.2px;
  font-weight: var(--pill-weight, 600);
  line-height: var(--line-height-tight, 11.2px);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: var(--color-base-100, rgb(187, 219, 183));
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 900);
  border-bottom-color: rgb(187, 219, 183);
  border-left-color: rgb(187, 219, 183);
  border-right-color: rgb(187, 219, 183);
  border-top-color: rgb(187, 219, 183);
  color: var(--ulu-h1-text-color, var(--h1-color, var(--color-base-100)));
  font-family: var(--h1-font, Getai);
  font-size: var(--h1-size, 48px);
  font-weight: var(--font-weight, 900);
  letter-spacing: var(--h1-letter-spacing, -0.72px);
  line-height: var(--h1-line-height, 57.6px);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(187, 219, 183));
  font-size: var(--inline-title-size, 48px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 600);
  border-bottom-color: rgb(23, 94, 90);
  border-left-color: rgb(23, 94, 90);
  border-right-color: rgb(23, 94, 90);
  border-top-color: rgb(23, 94, 90);
  color: var(--ulu-h2-text-color, var(--h2-color, var(--color-accent)));
  font-family: var(--h2-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 24px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.36px);
  line-height: var(--h2-line-height, 28.8px);
  padding-bottom: 7.2px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(187, 219, 183);
  border-left-color: rgb(187, 219, 183);
  border-right-color: rgb(187, 219, 183);
  border-top-color: rgb(187, 219, 183);
  color: var(--inline-title-color, rgb(187, 219, 183));
  font-family: var(--inline-title-font, Getai);
  font-size: var(--inline-title-size, 48px);
  font-weight: var(--inline-title-weight, 500);
  letter-spacing: -0.72px;
  line-height: var(--inline-title-line-height, 57.6px);
  margin-bottom: 24px;
}

html[saved-theme="dark"] body h2::after {
  --font-weight: var(--h2-weight, 600);
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(23, 94, 90) 0%, color(srgb 0.092 0.368 0.3542 / 0.2) 60%, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(23, 94, 90) 0%, color(srgb 0.092 0.368 0.3542 / 0.2) 60%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(23, 94, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(23, 94, 90);
  border-left-width: 0px;
  border-right-color: rgb(23, 94, 90);
  border-right-width: 0px;
  border-top-color: rgb(23, 94, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--ulu-h2-text-color, var(--h2-color, var(--color-accent)));
  content: "";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 636px;
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 600);
  border-bottom-color: rgb(187, 219, 183);
  border-left-color: rgb(187, 219, 183);
  border-right-color: rgb(187, 219, 183);
  border-top-color: rgb(187, 219, 183);
  color: var(--ulu-h3-text-color, var(--h3-color, var(--color-base-100)));
  font-family: var(--h3-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.31632px);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 600);
  border-bottom-color: rgb(187, 219, 183);
  border-left-color: rgb(187, 219, 183);
  border-right-color: rgb(187, 219, 183);
  border-top-color: rgb(187, 219, 183);
  color: var(--ulu-h4-text-color, var(--h4-color, var(--color-base-100)));
  font-family: var(--h4-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h4-letter-spacing, -0.28512px);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 600);
  border-bottom-color: rgb(187, 219, 183);
  border-left-color: rgb(187, 219, 183);
  border-right-color: rgb(187, 219, 183);
  border-top-color: rgb(187, 219, 183);
  color: var(--ulu-h5-text-color, var(--h5-color, var(--color-base-100)));
  font-family: var(--h5-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h5-letter-spacing, -0.25824px);
  line-height: var(--h5-line-height, 28.4064px);
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: rgb(187, 219, 183);
  border-left-color: rgb(187, 219, 183);
  border-right-color: rgb(187, 219, 183);
  border-top-color: rgb(187, 219, 183);
  color: var(--ulu-h6-text-color, var(--h6-color, var(--color-base-100)));
  font-family: var(--h6-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  letter-spacing: var(--h6-letter-spacing, -0.24px);
  line-height: var(--h6-line-height, 26.4px);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 23, 92, 89);
  border-bottom-color: rgb(166, 207, 169);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(27, 36, 31);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(88, 129, 87));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(88, 129, 87));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  color: rgb(166, 207, 169);
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
  color: var(--text-muted, rgb(88, 129, 87));
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
  color: var(--status-bar-text-color, rgb(88, 129, 87));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: var(--text-normal, rgb(166, 207, 169));
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(166, 207, 169);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(166, 207, 169);
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(88, 129, 87));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(88, 129, 87);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(166, 207, 169);
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(88, 129, 87);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(88, 129, 87));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(166, 207, 169);
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
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
  color: var(--text-muted, rgb(88, 129, 87));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(88, 129, 87);
  stroke: rgb(88, 129, 87);
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
  color: rgb(88, 129, 87);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(164, 218, 166));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  --canvas-card-base: var(--color-blue-rgb, 23, 92, 89);
  border-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(166, 207, 169));
}

html[saved-theme="dark"] body .canvas-node-group {
  --canvas-card-base: var(--color-blue-rgb, 23, 92, 89);
  border-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgba(var(--canvas-card-base), 0.05);
  border-color: rgb(166, 207, 169);
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(88, 129, 87);
  color: var(--text-muted, rgb(88, 129, 87));
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
  color: var(--text-muted, rgb(88, 129, 87));
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

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(88, 129, 87);
  border-right-color: rgb(88, 129, 87);
  border-top-color: rgb(88, 129, 87);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(88, 129, 87);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: -12px;
  margin-right: -12px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(88, 129, 87);
  border-left-color: rgb(88, 129, 87);
  border-right-color: rgb(88, 129, 87);
  border-top-color: rgb(88, 129, 87);
  color: rgb(88, 129, 87);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgb(88, 129, 87);
  font-family: var(--metadata-label-font, "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgb(88, 129, 87);
  font-family: var(--metadata-input-font, "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
  border-radius: 16px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(88, 129, 87);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(88, 129, 87) rgb(88, 129, 87) rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(177, 60%, 23%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(177, 60%, 23%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(177, 60%, 23%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(177, 60%, 23%, 0.15));
  --pill-color: var(--tag-color, hsl(177, 60%, 23%));
  --pill-color-hover: var(--tag-color-hover, hsl(177, 60%, 23%));
  --pill-color-remove: var(--tag-color, hsl(177, 60%, 23%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(177, 60%, 23%));
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-radius: 8px;
  color: var(--text-normal, rgb(166, 207, 169));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(88, 129, 87);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(18, 23, 21));
  color: var(--text-normal, rgb(166, 207, 169));
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
  border-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(166, 207, 169);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(166, 207, 169);
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(166, 207, 169);
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
  color: var(--text-normal, rgb(166, 207, 169));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(166, 207, 169);
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgb(from var(--color-base-0) r g b/0.3);
  border-bottom-color: rgb(88, 129, 87);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left-color: rgb(88, 129, 87);
  border-right-color: rgb(88, 129, 87);
  border-top-color: rgb(88, 129, 87);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  color: var(--text-normal, rgb(88, 129, 87));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-left: 28px;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, color(srgb 0.092 0.368 0.3542 / 0.7));
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
  border-bottom-color: rgb(166, 207, 169);
  border-left-color: rgb(166, 207, 169);
  border-right-color: rgb(166, 207, 169);
  border-top-color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body sub {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body summary {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body sup {
  color: rgb(166, 207, 169);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(from var(--color-accent) r g b/0.05);
  border-bottom-color: color(srgb 0.092 0.368 0.3542 / 0.3);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.092 0.368 0.3542 / 0.3);
  border-left-width: 1px;
  border-right-color: color(srgb 0.092 0.368 0.3542 / 0.3);
  border-right-width: 1px;
  border-top-color: color(srgb 0.092 0.368 0.3542 / 0.3);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--color-accent, rgb(23, 94, 90));
}`,
  },
  light: {
    base: `:root:root {
  --ancestor-editor-color: var(
        --text-normal
    , #627460);
  --background-modifier-border: var(--color-base-30, #dae5d6);
  --background-modifier-border-alt: #e1eade;
  --background-modifier-border-focus: var(--color-base-40, #cbdac7);
  --background-modifier-border-hover: var(--color-base-35, #d2e0cf);
  --background-modifier-error: var(--color-red, #9a453c);
  --background-modifier-error-hover: var(--color-red, #9a453c);
  --background-modifier-error-rgb: var(--color-red-rgb, 154, 69, 60);
  --background-modifier-form-field: var(--color-base-00, #f6faf5);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #f6faf5);
  --background-modifier-success: var(--color-green, #8ba481);
  --background-modifier-success-rgb: var(--color-green-rgb, 139, 164, 129);
  --background-primary: var(--color-base-00, #f6faf5);
  --background-primary-alt: var(--color-base-10, #f0f5ed);
  --background-secondary: var(--color-base-20, #e9f0e6);
  --background-secondary-alt: var(--color-base-05, #ffffff);
  --bases-cards-background: var(--background-primary, #f6faf5);
  --bases-cards-cover-background: var(--background-primary-alt, #f0f5ed);
  --bases-embed-border-color: var(--background-modifier-border, #dae5d6);
  --bases-group-heading-property-color: var(--text-muted, #a8b8a5);
  --bases-table-border-color: var(--table-border-color, #dae5d6);
  --bases-table-cell-background-active: var(--background-primary, #f6faf5);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #f0f5ed);
  --bases-table-cell-background-selected: var(--table-selection, hsla(177, 60%, 23%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #f0f5ed);
  --bases-table-header-background: var(--background-primary, #f6faf5);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(#0d1a0d, 0.067));
  --bases-table-header-color: var(--text-muted, #a8b8a5);
  --bases-table-summary-background: var(--background-primary, #f6faf5);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(#0d1a0d, 0.067));
  --blockquote-border-color: var(--interactive-accent, hsl(177, 60%, 23%));
  --bodyFont: var(--font-text-theme, var(--ulu-font-general, "Instrument", sans-serif));
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-bug: var(--color-red-rgb, 154, 69, 60);
  --callout-default: var(--color-blue-rgb, 23, 92, 89);
  --callout-error: var(--color-red-rgb, 154, 69, 60);
  --callout-example: var(--color-purple-rgb, 166, 154, 181);
  --callout-fail: var(--color-red-rgb, 154, 69, 60);
  --callout-important: var(--color-cyan-rgb, 155, 199, 189);
  --callout-info: var(--color-blue-rgb, 23, 92, 89);
  --callout-question: var(--color-orange-rgb, 241, 187, 138);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-m, 8px);
  --callout-success: var(--color-green-rgb, 139, 164, 129);
  --callout-summary: var(--color-cyan-rgb, 155, 199, 189);
  --callout-tip: var(--color-cyan-rgb, 155, 199, 189);
  --callout-todo: var(--color-blue-rgb, 23, 92, 89);
  --callout-warning: var(--color-orange-rgb, 241, 187, 138);
  --canvas-background: var(--background-primary, #f6faf5);
  --canvas-card-label-color: var(--text-faint, #859682);
  --canvas-color: var(--background-modifier-border, #dae5d6);
  --canvas-color-1: var(--color-red-rgb, 154, 69, 60);
  --canvas-color-2: var(--color-orange-rgb, 241, 187, 138);
  --canvas-color-3: var(--color-yellow-rgb, 228, 188, 127);
  --canvas-color-4: var(--color-green-rgb, 139, 164, 129);
  --canvas-color-5: var(--color-cyan-rgb, 155, 199, 189);
  --canvas-color-6: var(--color-purple-rgb, 166, 154, 181);
  --canvas-dot-pattern: var(--color-base-30, #dae5d6);
  --caret-color: var(--text-normal, #627460);
  --checkbox-border-color: var(--text-faint, #859682);
  --checkbox-border-color-hover: var(--text-muted, #a8b8a5);
  --checkbox-color: var(--interactive-accent, hsl(177, 60%, 23%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(
        258 88% 71%
    ));
  --checkbox-marker-color: var(--background-primary, #f6faf5);
  --checklist-done-color: var(--text-muted, #a8b8a5);
  --code-background: var(--background-primary-alt, #f0f5ed);
  --code-border-color: var(--background-modifier-border, #dae5d6);
  --code-bracket-background: var(--background-modifier-hover, rgba(#0d1a0d, 0.067));
  --code-comment: var(--text-faint, #859682);
  --code-function: var(--color-yellow, #e4bc7f);
  --code-important: var(--color-orange, #f1bb8a);
  --code-keyword: var(--color-pink, #ef796a);
  --code-normal: var(--text-normal, #627460);
  --code-operator: var(--color-red, #9a453c);
  --code-property: var(--color-cyan, #9bc7bd);
  --code-punctuation: var(--text-muted, #a8b8a5);
  --code-string: var(--color-green, #8ba481);
  --code-tag: var(--color-red, #9a453c);
  --code-value: var(--color-purple, #a69ab5);
  --collapse-icon-color: var(--text-faint, #859682);
  --collapse-icon-color-collapsed: var(--color-accent, hsl(177, 60%, 23%));
  --color-accent: hsl(var(--color-blue-hsl));
  --color-accent-1: var(--color-pink, #ef796a);
  --color-accent-1-rgb: var(--color-pink-rgb, 239, 121, 106);
  --color-accent-2: hsl(
        var(--accent-h) var(--accent-s) calc(var(--accent-l) + 5%)
    );
  --color-accent-hover: var(--color-accent-2, hsl(
        258 88% 71%
    ));
  --color-accent-hsl: var(--color-blue-hsl, 177, 60%, 23%);
  --color-accent-rgb: var(--color-blue-rgb, 23, 92, 89);
  --color-base-00: var(--proxy-00, #f6faf5);
  --color-base-05: #ffffff;
  --color-base-10: var(--proxy-10, #f0f5ed);
  --color-base-100: #1b241a;
  --color-base-20: var(--proxy-20, #e9f0e6);
  --color-base-25: #e1eade;
  --color-base-30: #dae5d6;
  --color-base-35: #d2e0cf;
  --color-base-40: #cbdac7;
  --color-base-50: #a8b8a5;
  --color-base-60: #859682;
  --color-base-70: #627460;
  --color-blue: #175c59;
  --color-blue-hsl: 177, 60%, 23%;
  --color-blue-rgb: 23, 92, 89;
  --color-cyan: #9bc7bd;
  --color-cyan-hsl: 166, 28%, 69%;
  --color-cyan-rgb: 155, 199, 189;
  --color-green: #8ba481;
  --color-green-hsl: 103, 16%, 57%;
  --color-green-rgb: 139, 164, 129;
  --color-orange: #f1bb8a;
  --color-orange-hsl: 29, 79%, 74%;
  --color-orange-rgb: 241, 187, 138;
  --color-pink: #ef796a;
  --color-pink-hsl: 7, 81%, 68%;
  --color-pink-rgb: 239, 121, 106;
  --color-purple: #a69ab5;
  --color-purple-hsl: 267, 15%, 66%;
  --color-purple-rgb: 166, 154, 181;
  --color-red: #9a453c;
  --color-red-hsl: 6, 44%, 42%;
  --color-red-rgb: 154, 69, 60;
  --color-yellow: #e4bc7f;
  --color-yellow-hsl: 36, 65%, 70%;
  --color-yellow-rgb: 228, 188, 127;
  --dark: var(--text-normal, var(--color-base-70, #627460));
  --darkgray: var(--text-normal, var(--color-base-70, #627460));
  --divider-color: var(--background-modifier-border, #dae5d6);
  --divider-color-hover: var(--interactive-accent, hsl(177, 60%, 23%));
  --dropdown-background: var(--interactive-normal, #f6faf5);
  --dropdown-background-hover: var(--interactive-hover, #f0f5ed);
  --file-header-background: var(--background-primary, #f6faf5);
  --file-header-background-focused: var(--background-primary, #f6faf5);
  --file-header-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #f6faf5);
  --flair-color: var(--text-normal, #627460);
  --font-interface-theme: "Instrument", sans-serif;
  --font-mermaid: var(--font-text, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-serif: "Fraunces", serif;
  --font-text-theme: var(--ulu-font-general, "Instrument", sans-serif);
  --font-title: var(--ulu-font-title, "Getai");
  --footnote-divider-color: var(--metadata-divider-color, #dae5d6);
  --footnote-id-color: var(--text-muted, #a8b8a5);
  --footnote-id-color-no-occurrences: var(--text-faint, #859682);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(#0d1a0d, 0.067));
  --footnote-line-height: var(--line-height-normal, 1.65);
  --glass-border-dark: #dae5d6;
  --glass-border-light: #ffffff;
  --gradient-bg-primary: linear-gradient(
        135deg,
        #d7e4d3 1.62%,
        #e8efe6 50.72%
    );
  --gradient-bg-secondary: linear-gradient(
        135deg,
        #f6faf5 1.62%,
        #f0f5ed 50.72%
    );
  --graph-line: rgb(from var(--mono-rgb-100) r g b / 0.15);
  --graph-node: var(--text-muted, #a8b8a5);
  --graph-node-attachment: var(--color-yellow, #e4bc7f);
  --graph-node-focused: var(--color-accent, hsl(177, 60%, 23%));
  --graph-node-tag: var(--color-accent, hsl(177, 60%, 23%));
  --graph-node-unresolved: var(--text-faint, #859682);
  --graph-text: var(--text-normal, #627460);
  --gray: var(--text-muted, var(--color-base-50, #a8b8a5));
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
  --heading-formatting: var(--text-faint, #859682);
  --hr-color: var(--background-modifier-border, #dae5d6);
  --icon-color: var(--text-muted, #a8b8a5);
  --icon-color-active: var(--color-accent, hsl(177, 60%, 23%));
  --icon-color-focused: var(--text-normal, #627460);
  --icon-color-hover: var(--text-muted, #a8b8a5);
  --inline-title-color: var(--color-base-100, #1b241a);
  --inline-title-font: var(--ulu-inline-title-font, var(--font-title));
  --inline-title-size: var(--h1-size, clamp(2.5rem, 8vw - 2rem, 3rem));
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, #859682);
  --input-placeholder-color: var(--text-faint, #859682);
  --interactive-accent: var(--color-accent, hsl(177, 60%, 23%));
  --interactive-accent-hover: var(--color-accent-2, hsl(
        258 88% 71%
    ));
  --interactive-accent-hsl: var(--color-accent-hsl, 177, 60%, 23%);
  --interactive-hover: var(--color-base-10, #f0f5ed);
  --interactive-normal: var(--color-base-00, #f6faf5);
  --lbs: 0px 20px 30px rgba(0, 5, 0, 0.03);
  --light: var(--background-primary, var(--color-base-00, #f6faf5));
  --lightgray: var(--background-secondary, var(--color-base-20, #e9f0e6));
  --line-height-normal: 1.65;
  --link-color: var(--text-muted, #a8b8a5);
  --link-color-hover: var(--text-normal, #627460);
  --link-decoration-hover: none;
  --link-decoration-thickness: 13%;
  --link-external-color: var(--color-accent, hsl(177, 60%, 23%));
  --link-external-color-hover: var(--color-accent-hover, hsl(
        258 88% 71%
    ));
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: var(--text-muted, #a8b8a5);
  --list-marker-color: var(--text-faint, #859682);
  --list-marker-color-collapsed: var(--color-accent, hsl(177, 60%, 23%));
  --list-marker-color-hover: var(--text-muted, #a8b8a5);
  --menu-background: var(--background-secondary, #e9f0e6);
  --menu-border-color: var(--background-modifier-border-hover, #d2e0cf);
  --menu-shadow: var(--shadow-s, 0px 3px 5px rgba(0, 0, 0, 0.04));
  --metadata-border-color: var(--background-modifier-border, #dae5d6);
  --metadata-divider-color: var(--background-modifier-border, #dae5d6);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(#0d1a0d, 0.067));
  --metadata-input-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #627460);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(#0d1a0d, 0.067));
  --metadata-label-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #a8b8a5);
  --metadata-label-text-color-hover: var(--text-muted, #a8b8a5);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(#0d1a0d, 0.067));
  --modal-background: var(--background-primary, #f6faf5);
  --mono-rgb-0: #ffffff;
  --mono-rgb-100: #0d1a0d;
  --nav-collapse-icon-color: var(--collapse-icon-color, #859682);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #859682);
  --nav-heading-color: var(--text-normal, #627460);
  --nav-heading-color-collapsed: var(--text-faint, #859682);
  --nav-heading-color-collapsed-hover: var(--text-muted, #a8b8a5);
  --nav-heading-color-hover: var(--text-normal, #627460);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(#0d1a0d, 0.12));
  --nav-item-background-active: var(--background-modifier-hover, rgba(#0d1a0d, 0.067));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(#0d1a0d, 0.067));
  --nav-item-color: var(--text-muted, #a8b8a5);
  --nav-item-color-active: var(--text-normal, #627460);
  --nav-item-color-highlighted: var(--color-accent-hover, hsl(
        258 88% 71%
    ));
  --nav-item-color-hover: var(--text-normal, #627460);
  --nav-item-color-selected: var(--text-normal, #627460);
  --nav-tag-color: var(--text-faint, #859682);
  --nav-tag-color-active: var(--text-muted, #a8b8a5);
  --nav-tag-color-hover: var(--text-muted, #a8b8a5);
  --pdf-background: var(--background-primary, #f6faf5);
  --pdf-page-background: var(--background-primary, #f6faf5);
  --pdf-sidebar-background: var(--background-primary, #f6faf5);
  --pill-border-color: var(--background-modifier-border, #dae5d6);
  --pill-border-color-hover: var(--background-modifier-border-hover, #d2e0cf);
  --pill-color: var(--text-muted, #a8b8a5);
  --pill-color-hover: var(--text-normal, #627460);
  --pill-color-remove: var(--text-faint, #859682);
  --pill-color-remove-hover: var(--text-accent, hsl(177, 60%, 23%));
  --prompt-background: var(--background-primary, #f6faf5);
  --proxy-00: #f6faf5;
  --proxy-10: #f0f5ed;
  --proxy-20: #e9f0e6;
  --radius-xl: 24px;
  --raised-background: var(--blur-background, color-mix(in srgb, #f6faf5 65%, transparent) linear-gradient(#f6faf5, color-mix(in srgb, #f6faf5 65%, transparent)));
  --ribbon-background: var(--background-secondary, #e9f0e6);
  --ribbon-background-collapsed: var(--background-primary, #f6faf5);
  --sbs: 24px 24px 84px -4px rgba(0, 0, 0, 0.05), 0px 16px 64px 6px rgba(0, 0, 0, 0.007);
  --scrollbar-active-thumb-bg: var(--color-accent, hsl(177, 60%, 23%));
  --scrollbar-bg: rgb(from var(--mono-rgb-100) r g b / 0.1);
  --search-clear-button-color: var(--text-muted, #a8b8a5);
  --search-icon-color: var(--text-muted, #a8b8a5);
  --search-result-background: var(--background-primary, #f6faf5);
  --secondary: var(--text-accent, var(--color-accent, hsl(177, 60%, 23%)));
  --setting-group-heading-color: var(--text-normal, #627460);
  --setting-items-background: var(--background-primary-alt, #f0f5ed);
  --setting-items-border-color: var(--background-modifier-border, #dae5d6);
  --shadow-l: 0px 8px 24px rgba(149, 157, 165, 0.2);
  --shadow-lm-only: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-s: 0px 3px 5px rgba(0, 0, 0, 0.04);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #a8b8a5);
  --shiki-code-background: var(--code-background, #f0f5ed);
  --shiki-code-comment: var(--text-faint, #859682);
  --shiki-code-function: var(--color-green, #8ba481);
  --shiki-code-important: var(--color-orange, #f1bb8a);
  --shiki-code-keyword: var(--color-pink, #ef796a);
  --shiki-code-normal: var(--text-muted, #a8b8a5);
  --shiki-code-property: var(--color-cyan, #9bc7bd);
  --shiki-code-punctuation: var(--text-muted, #a8b8a5);
  --shiki-code-string: var(--color-yellow, #e4bc7f);
  --shiki-code-value: var(--color-purple, #a69ab5);
  --shiki-gutter-border-color: var(--background-modifier-border, #dae5d6);
  --shiki-gutter-text-color: var(--text-faint, #859682);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #a8b8a5);
  --shiki-highlight-neutral: var(--shiki-code-normal, #a8b8a5);
  --shiki-terminal-dots-color: var(--text-faint, #859682);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #d2e0cf);
  --slider-track-background: var(--background-modifier-border, #dae5d6);
  --status-bar-background: var(--background-secondary, #e9f0e6);
  --status-bar-border-color: var(--divider-color, #dae5d6);
  --status-bar-text-color: var(--text-muted, #a8b8a5);
  --suggestion-background: var(--background-primary, #f6faf5);
  --sync-avatar-color-1: var(--color-red, #9a453c);
  --sync-avatar-color-2: var(--color-orange, #f1bb8a);
  --sync-avatar-color-3: var(--color-yellow, #e4bc7f);
  --sync-avatar-color-4: var(--color-green, #8ba481);
  --sync-avatar-color-5: var(--color-cyan, #9bc7bd);
  --sync-avatar-color-6: var(--color-blue, #175c59);
  --sync-avatar-color-7: var(--color-purple, #a69ab5);
  --sync-avatar-color-8: var(--color-pink, #ef796a);
  --tab-background-active: var(--background-primary, #f6faf5);
  --tab-container-background: var(--background-secondary, #e9f0e6);
  --tab-divider-color: var(--background-modifier-border-hover, #d2e0cf);
  --tab-outline-color: var(--divider-color, #dae5d6);
  --tab-switcher-background: var(--background-secondary, #e9f0e6);
  --tab-switcher-preview-radius: var(--radius-xl, 24px);
  --tab-text-color: var(--text-faint, #859682);
  --tab-text-color-active: var(--text-muted, #a8b8a5);
  --tab-text-color-focused: var(--text-muted, #a8b8a5);
  --tab-text-color-focused-active: var(--text-muted, #a8b8a5);
  --tab-text-color-focused-active-current: var(--text-normal, #627460);
  --tab-text-color-focused-highlighted: var(--color-accent, hsl(177, 60%, 23%));
  --table-add-button-border-color: var(--background-modifier-border, #dae5d6);
  --table-border-color: var(--background-modifier-border, #dae5d6);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(177, 60%, 23%));
  --table-drag-handle-color: var(--text-faint, #859682);
  --table-header-border-color: var(--table-border-color, #dae5d6);
  --table-header-color: var(--text-normal, #627460);
  --table-selection-border-color: var(--interactive-accent, hsl(177, 60%, 23%));
  --tag-color: var(--color-accent, hsl(177, 60%, 23%));
  --tag-color-hover: var(--color-accent, hsl(177, 60%, 23%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(
        258 88% 71%
    )));
  --text-accent: var(--color-accent, hsl(177, 60%, 23%));
  --text-accent-hover: var(--color-accent-2, hsl(
        258 88% 71%
    ));
  --text-error: var(--color-red, #9a453c);
  --text-faint: var(--color-base-60, #859682);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: var(--color-base-50, #a8b8a5);
  --text-normal: var(--color-base-70, #627460);
  --text-on-button: var(--text-normal, #627460);
  --text-selection: var(--background-modifier-border, #dae5d6);
  --text-success: var(--color-green, #8ba481);
  --text-warning: var(--color-orange, #f1bb8a);
  --titleFont: var(--font-text-theme, var(--ulu-font-general, "Instrument", sans-serif));
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, #dae5d6);
  --titlebar-text-color: var(--text-muted, #a8b8a5);
  --titlebar-text-color-focused: var(--text-normal, #627460);
  --ulu-font-general: "Instrument", sans-serif;
  --ulu-font-title: "Getai";
  --ulu-kanban-border-color: transparent;
  --ulu-kanban-border-width: 0px;
  --ulu-radius: var(--radius-m, 8px);
  --vault-profile-color: var(--text-normal, #627460);
  --vault-profile-color-hover: var(--vault-profile-color, #627460);
  --view-bottom-fade-mask: none;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #e9f0e6);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #e9f0e6);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(98, 116, 96);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--text-normal, rgb(98, 116, 96));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(98, 116, 96) none 0px;
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--color-base-100, rgb(27, 36, 26));
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  outline: rgb(27, 36, 26) none 0px;
  text-decoration-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--color-base-100, rgb(27, 36, 26));
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  outline: rgb(27, 36, 26) none 0px;
  text-decoration-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--color-base-100, rgb(27, 36, 26));
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: 700;
  outline: rgb(27, 36, 26) none 0px;
  text-decoration-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--text-normal, rgb(98, 116, 96));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(98, 116, 96) none 0px;
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .text-highlight {
  color: var(--text-normal, rgb(98, 116, 96));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(98, 116, 96) none 0px;
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body del {
  color: rgb(98, 116, 96);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(98, 116, 96) none 0px;
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(from var(--mono-rgb-100) r g b/0.05);
  border-color: color(srgb 0.0509804 0.101961 0.0509804 / 0.15);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--color-accent, rgb(23, 94, 90));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(168, 184, 165));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(168, 184, 165) none 0px;
  text-decoration-color: rgb(168, 184, 165);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(23, 94, 90));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(23, 94, 90) none 0px;
  text-decoration: 13%;
  text-decoration-color: rgb(23, 94, 90);
  text-decoration-thickness: var(--link-decoration-thickness, 13%);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  background-color: color(srgb 0.092 0.368 0.3542 / 0.1);
  color: var(--color-accent, rgb(23, 94, 90));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 500);
  outline: rgb(23, 94, 90) none 0px;
  text-decoration-color: rgb(23, 94, 90);
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--text-faint, rgb(133, 150, 130));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 500);
  outline: rgb(133, 150, 130) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(133, 150, 130));
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(98, 116, 96);
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  color: rgb(98, 116, 96);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(98, 116, 96);
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  color: rgb(98, 116, 96);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body ol > li {
  color: rgb(98, 116, 96);
  margin-left: 31.9681px;
  padding-left: 8px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(98, 116, 96);
  margin-left: 31.9681px;
  padding-left: 8px;
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
  color: var(--text-faint, rgb(133, 150, 130));
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(from var(--color-base-00) r g b/0.3);
  color: var(--blockquote-color, rgb(98, 116, 96));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 26.4px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(98, 116, 96);
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
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
  color: rgb(98, 116, 96);
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  margin-bottom: 24px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: var(--heading-spacing, 24px);
  padding-bottom: 8px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-width: 0px;
  border-left-color: rgb(98, 116, 96);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(98, 116, 96);
  border-right-width: 0px;
  border-top-color: rgb(98, 116, 96);
  border-top-width: 0px;
  color: var(--text-normal, rgb(98, 116, 96));
  font-weight: 500;
  padding-bottom: 2px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
  text-align: left;
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(168, 184, 165);
  border-bottom-width: 0px;
  border-left-color: rgb(168, 184, 165);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(168, 184, 165);
  border-right-width: 0px;
  border-top-color: rgb(168, 184, 165);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--text-muted, rgb(168, 184, 165));
  font-weight: var(--table-header-weight, 700);
  letter-spacing: 1.12px;
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
  border-bottom-color: rgb(168, 184, 165);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 184, 165);
  border-right-color: rgb(168, 184, 165);
  border-top-color: rgb(168, 184, 165);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--ec-codeFg, rgb(168, 184, 165));
  font-family: var(--ec-codeFontFml, Monaspace, monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(240, 245, 237));
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
  border-bottom-color: rgb(98, 116, 96);
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body figcaption {
  color: rgb(98, 116, 96);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #f0f5ed);
  border-bottom-color: rgb(98, 116, 96);
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(27, 36, 26);
  border-left-color: rgb(27, 36, 26);
  border-right-color: rgb(27, 36, 26);
  border-top-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(98, 116, 96);
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(from var(--color-base-25) r g b/0.6);
  border-bottom-color: rgb(218, 229, 214);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(218, 229, 214);
  border-left-style: solid;
  border-left-width: 1px;
  border-radius: 12px;
  border-right-color: rgb(218, 229, 214);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(218, 229, 214);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--text-muted, rgb(168, 184, 165));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(98, 116, 96);
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .transclude {
  background-color: rgb(from var(--color-base-25) r g b/0.6);
  border-bottom-color: rgb(218, 229, 214);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(218, 229, 214);
  border-left-width: 1px;
  border-radius: 12px;
  border-right-color: rgb(218, 229, 214);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(218, 229, 214);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-style: solid;
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-right-style: solid;
  border-top-color: rgb(98, 116, 96);
  border-top-style: solid;
  color: rgb(98, 116, 96);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: color(srgb 0.0509804 0.101961 0.0509804 / 0.15);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: color(srgb 0.0509804 0.101961 0.0509804 / 0.15);
  border-right-color: color(srgb 0.0509804 0.101961 0.0509804 / 0.15);
  border-top-color: color(srgb 0.0509804 0.101961 0.0509804 / 0.15);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: var(--checkbox-size, 18px);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(168, 184, 165);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(168, 184, 165);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(98, 116, 96);
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='3' x2='12' y2='14'/%3E%3Cline x1='12' y1='21' x2='12.01' y2='21'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='3' x2='12' y2='14'/%3E%3Cline x1='12' y1='21' x2='12.01' y2='21'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='11' x2='12' y2='21'/%3E%3Cline x1='12' y1='3' x2='12.01' y2='3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='11' x2='12' y2='21'/%3E%3Cline x1='12' y1='3' x2='12.01' y2='3'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(27, 36, 26);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: var(--text-normal, rgb(98, 116, 96));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout-title {
  --ancestor-editor-color: #627460;
  --background-modifier-active-hover: hsla(177, 60%, 23%, 0.1);
  --background-modifier-border: #dae5d6;
  --background-modifier-border-focus: #cbdac7;
  --background-modifier-border-hover: #d2e0cf;
  --background-modifier-error: #9a453c;
  --background-modifier-error-hover: #9a453c;
  --background-modifier-error-rgb: 154, 69, 60;
  --background-modifier-form-field: #f6faf5;
  --background-modifier-form-field-hover: #f6faf5;
  --background-modifier-hover: rgba(#0d1a0d, 0.067);
  --background-modifier-success: #8ba481;
  --background-modifier-success-rgb: 139, 164, 129;
  --background-primary: #f6faf5;
  --background-primary-alt: #f0f5ed;
  --background-secondary: #e9f0e6;
  --background-secondary-alt: #ffffff;
  --blockquote-border-color: hsl(177, 60%, 23%);
  --blur-background: color-mix(in srgb, #f6faf5 65%, transparent) linear-gradient(#f6faf5, color-mix(in srgb, #f6faf5 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 154, 69, 60;
  --callout-color: 23, 92, 89;
  --callout-default: 23, 92, 89;
  --callout-error: 154, 69, 60;
  --callout-example: 166, 154, 181;
  --callout-fail: 154, 69, 60;
  --callout-important: 155, 199, 189;
  --callout-info: 23, 92, 89;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 241, 187, 138;
  --callout-radius: 8px;
  --callout-success: 139, 164, 129;
  --callout-summary: 155, 199, 189;
  --callout-tip: 155, 199, 189;
  --callout-title-weight: 600;
  --callout-todo: 23, 92, 89;
  --callout-warning: 241, 187, 138;
  --canvas-background: #f6faf5;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #dae5d6;
  --caret-color: #627460;
  --checkbox-border-color: #859682;
  --checkbox-border-color-hover: #a8b8a5;
  --checkbox-color: hsl(177, 60%, 23%);
  --checkbox-color-hover: hsl(
        258 88% 71%
    );
  --checkbox-marker-color: #f6faf5;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #a8b8a5;
  --clickable-icon-radius: 4px;
  --code-background: #f0f5ed;
  --code-border-color: #dae5d6;
  --code-bracket-background: rgba(#0d1a0d, 0.067);
  --code-comment: #859682;
  --code-function: #e4bc7f;
  --code-important: #f1bb8a;
  --code-keyword: #ef796a;
  --code-normal: #627460;
  --code-operator: #9a453c;
  --code-property: #9bc7bd;
  --code-punctuation: #a8b8a5;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #8ba481;
  --code-tag: #9a453c;
  --code-value: #a69ab5;
  --collapse-icon-color: #859682;
  --collapse-icon-color-collapsed: hsl(177, 60%, 23%);
  --color-accent: hsl(177, 60%, 23%);
  --color-accent-1: #ef796a;
  --color-accent-1-rgb: 239, 121, 106;
  --color-accent-2: hsl(
        258 88% 71%
    );
  --color-accent-hover: hsl(
        258 88% 71%
    );
  --color-accent-hsl: 177, 60%, 23%;
  --color-accent-rgb: 23, 92, 89;
  --color-base-00: #f6faf5;
  --color-base-10: #f0f5ed;
  --color-base-20: #e9f0e6;
  --divider-color: #dae5d6;
  --divider-color-hover: hsl(177, 60%, 23%);
  --divider-vertical-height: 100%;
  --dropdown-background: #f6faf5;
  --dropdown-background-hover: #f0f5ed;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #f6faf5;
  --flair-color: #627460;
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
  --graph-line: rgb(from #0d1a0d r g b / 0.15);
  --graph-node: #a8b8a5;
  --graph-node-attachment: #e4bc7f;
  --graph-node-focused: hsl(177, 60%, 23%);
  --graph-node-tag: hsl(177, 60%, 23%);
  --graph-node-unresolved: #859682;
  --graph-text: #627460;
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
  --heading-formatting: #859682;
  --heading-spacing: 2.5rem;
  --hr-color: #dae5d6;
  --interactive-accent: hsl(177, 60%, 23%);
  --interactive-accent-hover: hsl(
        258 88% 71%
    );
  --interactive-accent-hsl: 177, 60%, 23%;
  --interactive-hover: #f0f5ed;
  --interactive-normal: #f6faf5;
  --link-color: #a8b8a5;
  --link-color-hover: #627460;
  --link-external-color: hsl(177, 60%, 23%);
  --link-external-color-hover: hsl(
        258 88% 71%
    );
  --link-unresolved-color: #a8b8a5;
  --link-unresolved-decoration-color: transparent;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #e9f0e6;
  --menu-border-color: #d2e0cf;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 3px 5px rgba(0, 0, 0, 0.04);
  --pdf-background: #f6faf5;
  --pdf-page-background: #f6faf5;
  --pdf-sidebar-background: #f6faf5;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #f6faf5 65%, transparent) linear-gradient(#f6faf5, color-mix(in srgb, #f6faf5 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(177, 60%, 23%);
  --scrollbar-bg: rgb(from #0d1a0d r g b / 0.1);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(#0d1a0d, 0.1);
  --search-clear-button-color: #a8b8a5;
  --search-icon-color: #a8b8a5;
  --search-result-background: #f6faf5;
  --setting-group-heading-color: #627460;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #f0f5ed;
  --setting-items-border-color: #dae5d6;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #a8b8a5;
  --shiki-code-background: #f0f5ed;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #859682;
  --shiki-code-function: #8ba481;
  --shiki-code-important: #f1bb8a;
  --shiki-code-keyword: #ef796a;
  --shiki-code-normal: #a8b8a5;
  --shiki-code-property: #9bc7bd;
  --shiki-code-punctuation: #a8b8a5;
  --shiki-code-string: #e4bc7f;
  --shiki-code-value: #a69ab5;
  --shiki-gutter-border-color: #dae5d6;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #859682;
  --shiki-gutter-text-color-highlight: #a8b8a5;
  --shiki-highlight-green: rgba(139, 164, 129, 0.5);
  --shiki-highlight-green-background: rgba(139, 164, 129, 0.1);
  --shiki-highlight-neutral: #a8b8a5;
  --shiki-highlight-neutral-background: rgba(#0d1a0d, .05);
  --shiki-highlight-red: rgba(154, 69, 60, 0.5);
  --shiki-highlight-red-background: rgba(154, 69, 60, 0.1);
  --shiki-terminal-dots-color: #859682;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #f6faf5;
  --swatch-shadow: inset 0 0 0 1px rgba(#0d1a0d, 0.15);
  --sync-avatar-color-1: #9a453c;
  --sync-avatar-color-2: #f1bb8a;
  --sync-avatar-color-3: #e4bc7f;
  --sync-avatar-color-4: #8ba481;
  --sync-avatar-color-5: #9bc7bd;
  --sync-avatar-color-6: #175c59;
  --sync-avatar-color-7: #a69ab5;
  --sync-avatar-color-8: #ef796a;
  --tab-background-active: #f6faf5;
  --tab-divider-color: #d2e0cf;
  --tab-font-size: 13px;
  --tab-outline-color: #dae5d6;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #e9f0e6;
  --tab-switcher-menubar-background: linear-gradient(to top, #e9f0e6, transparent);
  --tab-switcher-preview-radius: 24px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(#0d1a0d, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(177, 60%, 23%);
  --tab-text-color: #859682;
  --tab-text-color-active: #a8b8a5;
  --tab-text-color-focused: #a8b8a5;
  --tab-text-color-focused-active: #a8b8a5;
  --tab-text-color-focused-active-current: #627460;
  --tab-text-color-focused-highlighted: hsl(177, 60%, 23%);
  --table-add-button-border-color: #dae5d6;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(23, 92, 89) 25%, #f6faf5 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(177, 60%, 23%);
  --table-drag-handle-color: #859682;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #dae5d6;
  --table-header-border-width: 1px;
  --table-header-color: #627460;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(177, 60%, 23%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(177, 60%, 23%);
  --table-text-size: 16px;
  --tag-background: hsla(177, 60%, 23%, 0.1);
  --tag-background-hover: hsla(177, 60%, 23%, 0.2);
  --tag-border-color: hsla(177, 60%, 23%, 0.15);
  --tag-border-color-hover: hsla(177, 60%, 23%, 0.15);
  --tag-color: hsl(177, 60%, 23%);
  --tag-color-hover: hsl(177, 60%, 23%);
  --tag-size: 0.875em;
  --text-accent: hsl(177, 60%, 23%);
  --text-accent-hover: hsl(
        258 88% 71%
    );
  --text-error: #9a453c;
  --text-faint: #859682;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #a8b8a5;
  --text-normal: #627460;
  --text-on-button: #627460;
  --text-selection: #dae5d6;
  --text-success: #8ba481;
  --text-warning: #f1bb8a;
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
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(23, 92, 89, 0.3) 50%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(23, 92, 89);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(23, 92, 89);
  border-left-width: 0px;
  border-right-color: rgb(23, 92, 89);
  border-right-width: 0px;
  border-top-color: rgb(23, 92, 89);
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
  --callout-color: var(--callout-summary, 155, 199, 189);
  background: rgba(155, 199, 189, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: var(--text-normal, rgb(98, 116, 96));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 154, 69, 60);
  background: rgba(154, 69, 60, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: var(--text-normal, rgb(98, 116, 96));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 154, 69, 60);
  background: rgba(154, 69, 60, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: var(--text-normal, rgb(98, 116, 96));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 166, 154, 181);
  background: rgba(166, 154, 181, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: var(--text-normal, rgb(98, 116, 96));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 154, 69, 60);
  background: rgba(154, 69, 60, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: var(--text-normal, rgb(98, 116, 96));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 23, 92, 89);
  background: rgba(23, 92, 89, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: var(--text-normal, rgb(98, 116, 96));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 23, 92, 89);
  background: rgba(23, 92, 89, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: var(--text-normal, rgb(98, 116, 96));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 241, 187, 138);
  background: rgba(241, 187, 138, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: var(--text-normal, rgb(98, 116, 96));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(158, 158, 158, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: var(--text-normal, rgb(98, 116, 96));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 139, 164, 129);
  background: rgba(139, 164, 129, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: var(--text-normal, rgb(98, 116, 96));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 155, 199, 189);
  background: rgba(155, 199, 189, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: var(--text-normal, rgb(98, 116, 96));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 23, 92, 89);
  background: rgba(23, 92, 89, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: var(--text-normal, rgb(98, 116, 96));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 241, 187, 138);
  background: rgba(241, 187, 138, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 23, 92, 89;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(23, 92, 89);
  border-right-color: rgb(23, 92, 89);
  border-top-color: rgb(23, 92, 89);
  color: rgba(var(--callout-color), 1);
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(23, 92, 89));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: var(--text-normal, rgb(98, 116, 96));
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
  border-bottom-color: color(srgb 0.0509804 0.101961 0.0509804 / 0.1);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left-color: color(srgb 0.0509804 0.101961 0.0509804 / 0.1);
  border-right-color: color(srgb 0.0509804 0.101961 0.0509804 / 0.1);
  border-top-color: color(srgb 0.0509804 0.101961 0.0509804 / 0.1);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  color: var(--text-normal, rgb(98, 116, 96));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(246, 250, 245));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  box-shadow: var(--shadow-l, rgba(149, 157, 165, 0.2) 0px 8px 24px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(98, 116, 96);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(98, 116, 96) none 0px;
  text-decoration-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(98, 116, 96);
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--interactive-hover, rgb(240, 245, 237));
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(from var(--color-base-0) r g b/0.3);
  border-bottom-color: rgb(218, 229, 214);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(218, 229, 214);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(218, 229, 214);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(218, 229, 214);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: inset 0 2px 4px rgb(from var(--mono-rgb-0) r g b/0.1);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--interactive-hover, rgb(240, 245, 237));
  border-bottom-color: rgb(98, 116, 96);
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--interactive-hover, rgb(240, 245, 237));
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(177, 60%, 23%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(177, 60%, 23%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(177, 60%, 23%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(177, 60%, 23%, 0.15));
  --pill-color: var(--tag-color, hsl(177, 60%, 23%));
  --pill-color-hover: var(--tag-color-hover, hsl(177, 60%, 23%));
  --pill-color-remove: var(--tag-color, hsl(177, 60%, 23%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(177, 60%, 23%));
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: color(srgb 0.092 0.368 0.3542 / 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.092 0.368 0.3542 / 0.4);
  border-left-width: 1px;
  border-right-color: color(srgb 0.092 0.368 0.3542 / 0.4);
  border-right-width: 1px;
  border-top-color: color(srgb 0.092 0.368 0.3542 / 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(98, 116, 96));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 11.2px;
  font-weight: var(--pill-weight, 600);
  line-height: var(--line-height-tight, 11.2px);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: var(--color-base-100, rgb(27, 36, 26));
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 900);
  border-bottom-color: rgb(27, 36, 26);
  border-left-color: rgb(27, 36, 26);
  border-right-color: rgb(27, 36, 26);
  border-top-color: rgb(27, 36, 26);
  color: var(--ulu-h1-text-color, var(--h1-color, var(--color-base-100)));
  font-family: var(--h1-font, Getai);
  font-size: var(--h1-size, 48px);
  font-weight: var(--font-weight, 900);
  letter-spacing: var(--h1-letter-spacing, -0.72px);
  line-height: var(--h1-line-height, 57.6px);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(27, 36, 26));
  font-size: var(--inline-title-size, 48px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 600);
  border-bottom-color: rgb(23, 94, 90);
  border-left-color: rgb(23, 94, 90);
  border-right-color: rgb(23, 94, 90);
  border-top-color: rgb(23, 94, 90);
  color: var(--ulu-h2-text-color, var(--h2-color, var(--color-accent)));
  font-family: var(--h2-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 24px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.36px);
  line-height: var(--h2-line-height, 28.8px);
  padding-bottom: 7.2px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(27, 36, 26);
  border-left-color: rgb(27, 36, 26);
  border-right-color: rgb(27, 36, 26);
  border-top-color: rgb(27, 36, 26);
  color: var(--inline-title-color, rgb(27, 36, 26));
  font-family: var(--inline-title-font, Getai);
  font-size: var(--inline-title-size, 48px);
  font-weight: var(--inline-title-weight, 500);
  letter-spacing: -0.72px;
  line-height: var(--inline-title-line-height, 57.6px);
  margin-bottom: 24px;
}

html[saved-theme="light"] body h2::after {
  --font-weight: var(--h2-weight, 600);
  background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(23, 94, 90) 0%, color(srgb 0.092 0.368 0.3542 / 0.2) 60%, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(90deg, rgb(23, 94, 90) 0%, color(srgb 0.092 0.368 0.3542 / 0.2) 60%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(23, 94, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(23, 94, 90);
  border-left-width: 0px;
  border-right-color: rgb(23, 94, 90);
  border-right-width: 0px;
  border-top-color: rgb(23, 94, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--ulu-h2-text-color, var(--h2-color, var(--color-accent)));
  content: "";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 636px;
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 600);
  border-bottom-color: rgb(27, 36, 26);
  border-left-color: rgb(27, 36, 26);
  border-right-color: rgb(27, 36, 26);
  border-top-color: rgb(27, 36, 26);
  color: var(--ulu-h3-text-color, var(--h3-color, var(--color-base-100)));
  font-family: var(--h3-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.31632px);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 600);
  border-bottom-color: rgb(27, 36, 26);
  border-left-color: rgb(27, 36, 26);
  border-right-color: rgb(27, 36, 26);
  border-top-color: rgb(27, 36, 26);
  color: var(--ulu-h4-text-color, var(--h4-color, var(--color-base-100)));
  font-family: var(--h4-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h4-letter-spacing, -0.28512px);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 600);
  border-bottom-color: rgb(27, 36, 26);
  border-left-color: rgb(27, 36, 26);
  border-right-color: rgb(27, 36, 26);
  border-top-color: rgb(27, 36, 26);
  color: var(--ulu-h5-text-color, var(--h5-color, var(--color-base-100)));
  font-family: var(--h5-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h5-letter-spacing, -0.25824px);
  line-height: var(--h5-line-height, 28.4064px);
}

html[saved-theme="light"] body h6 {
  border-bottom-color: rgb(27, 36, 26);
  border-left-color: rgb(27, 36, 26);
  border-right-color: rgb(27, 36, 26);
  border-top-color: rgb(27, 36, 26);
  color: var(--ulu-h6-text-color, var(--h6-color, var(--color-base-100)));
  font-family: var(--h6-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  letter-spacing: var(--h6-letter-spacing, -0.24px);
  line-height: var(--h6-line-height, 26.4px);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 23, 92, 89);
  border-bottom-color: rgb(98, 116, 96);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(225, 234, 222);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(168, 184, 165));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(168, 184, 165));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  color: rgb(98, 116, 96);
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
  color: var(--text-muted, rgb(168, 184, 165));
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
  color: var(--status-bar-text-color, rgb(168, 184, 165));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: var(--text-normal, rgb(98, 116, 96));
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(98, 116, 96);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(98, 116, 96);
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(168, 184, 165));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(168, 184, 165);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(98, 116, 96);
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(168, 184, 165);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(168, 184, 165));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(98, 116, 96);
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
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
  color: var(--text-muted, rgb(168, 184, 165));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(168, 184, 165);
  stroke: rgb(168, 184, 165);
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
  color: rgb(168, 184, 165);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(133, 150, 130));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  --canvas-card-base: var(--color-blue-rgb, 23, 92, 89);
  border-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(98, 116, 96));
}

html[saved-theme="light"] body .canvas-node-group {
  --canvas-card-base: var(--color-blue-rgb, 23, 92, 89);
  border-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgba(var(--canvas-card-base), 0.05);
  border-color: rgb(98, 116, 96);
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(168, 184, 165);
  color: var(--text-muted, rgb(168, 184, 165));
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
  color: var(--text-muted, rgb(168, 184, 165));
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

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(168, 184, 165);
  border-right-color: rgb(168, 184, 165);
  border-top-color: rgb(168, 184, 165);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(168, 184, 165);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: -12px;
  margin-right: -12px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(168, 184, 165);
  border-left-color: rgb(168, 184, 165);
  border-right-color: rgb(168, 184, 165);
  border-top-color: rgb(168, 184, 165);
  color: rgb(168, 184, 165);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgb(168, 184, 165);
  font-family: var(--metadata-label-font, "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgb(168, 184, 165);
  font-family: var(--metadata-input-font, "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
  border-radius: 16px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(168, 184, 165);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(168, 184, 165) rgb(168, 184, 165) rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(177, 60%, 23%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(177, 60%, 23%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(177, 60%, 23%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(177, 60%, 23%, 0.15));
  --pill-color: var(--tag-color, hsl(177, 60%, 23%));
  --pill-color-hover: var(--tag-color-hover, hsl(177, 60%, 23%));
  --pill-color-remove: var(--tag-color, hsl(177, 60%, 23%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(177, 60%, 23%));
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-radius: 8px;
  color: var(--text-normal, rgb(98, 116, 96));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(168, 184, 165);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(246, 250, 245));
  color: var(--text-normal, rgb(98, 116, 96));
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
  border-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(98, 116, 96);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(98, 116, 96);
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(98, 116, 96);
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
  color: var(--text-normal, rgb(98, 116, 96));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(98, 116, 96);
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(from var(--color-base-0) r g b/0.3);
  border-bottom-color: rgb(168, 184, 165);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left-color: rgb(168, 184, 165);
  border-right-color: rgb(168, 184, 165);
  border-top-color: rgb(168, 184, 165);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  color: var(--text-normal, rgb(168, 184, 165));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-left: 28px;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, color(srgb 0.092 0.368 0.3542 / 0.7));
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
  border-bottom-color: rgb(98, 116, 96);
  border-left-color: rgb(98, 116, 96);
  border-right-color: rgb(98, 116, 96);
  border-top-color: rgb(98, 116, 96);
}

html[saved-theme="light"] body sub {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body summary {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body sup {
  color: rgb(98, 116, 96);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(from var(--color-accent) r g b/0.05);
  border-bottom-color: color(srgb 0.092 0.368 0.3542 / 0.3);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.092 0.368 0.3542 / 0.3);
  border-left-width: 1px;
  border-right-color: color(srgb 0.092 0.368 0.3542 / 0.3);
  border-right-width: 1px;
  border-top-color: color(srgb 0.092 0.368 0.3542 / 0.3);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--color-accent, rgb(23, 94, 90));
}`,
  },
};
