import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ultra-lobster.chameleon",
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
    , color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --background-modifier-border: var(--color-base-30, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --background-modifier-border-alt: color-mix(
        in srgb,
        var(--color-accent) 20%,
        var(--mix-base-dark)
    );
  --background-modifier-border-focus: var(--color-base-40, color-mix(in srgb, hsl(212, 100%, 50%) 30%, #09090b));
  --background-modifier-border-hover: var(--color-base-35, color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818));
  --background-modifier-form-field: var(--color-base-25, color-mix(in srgb, hsl(212, 100%, 50%) 12%, #09090b));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, color-mix(in srgb, hsl(212, 100%, 50%) 12%, #09090b));
  --background-primary: var(--color-base-00, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --background-primary-alt: var(--color-base-10, color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b));
  --background-secondary: var(--color-base-20, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b));
  --background-secondary-alt: var(--color-base-30, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --bases-cards-background: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --bases-cards-cover-background: var(--background-primary-alt, color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b));
  --bases-embed-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --bases-group-heading-property-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --bases-table-border-color: var(--table-border-color, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --bases-table-cell-background-active: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --bases-table-cell-background-disabled: var(--background-primary-alt, color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b));
  --bases-table-cell-background-selected: var(--table-selection, hsla(212, 100%, 50%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b));
  --bases-table-header-background: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.067));
  --bases-table-header-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --bases-table-summary-background: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.067));
  --blockquote-border-color: var(--interactive-accent, hsl(212, 100%, 50%));
  --bodyFont: var(--font-text-theme, var(--ulu-font-general, "Instrument", sans-serif));
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-radius: var(--radius-m, 8px);
  --canvas-background: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --canvas-card-label-color: var(--text-faint, #999999);
  --canvas-color: var(--background-modifier-border, 126, 126, 126);
  --canvas-dot-pattern: var(--color-base-30, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --caret-color: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --checkbox-border-color: var(--text-faint, #999999);
  --checkbox-border-color-hover: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --checkbox-color: var(--interactive-accent, hsl(212, 100%, 50%));
  --checkbox-color-hover: var(--interactive-accent-hover, #fa99cd);
  --checkbox-marker-color: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --checklist-done-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --code-background: var(--background-primary-alt, color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b));
  --code-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --code-bracket-background: var(--background-modifier-hover, rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.067));
  --code-comment: var(--text-faint, #999999);
  --code-normal: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --code-punctuation: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
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
  --color-base-00: var(--proxy-00, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --color-base-10: var(--proxy-10, color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b));
  --color-base-100: var(--mono-rgb-100, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7));
  --color-base-20: var(--proxy-20, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b));
  --color-base-25: color-mix(in srgb, var(--color-accent) 12%, var(--mix-base-dark));
  --color-base-30: color-mix(in srgb, var(--color-accent) 18%, var(--mix-base-dark));
  --color-base-35: color-mix(in srgb, var(--color-accent) 25%, #181818);
  --color-base-40: color-mix(in srgb, var(--color-accent) 30%, var(--mix-base-dark));
  --color-base-50: color-mix(in srgb, var(--color-base-100) 50%, transparent);
  --color-base-70: color-mix(in srgb, var(--color-base-100) 70%, transparent);
  --color-blue-hsl: 212, 100%, 50%;
  --color-cyan-hsl: 179, 69%, 60%;
  --color-green-hsl: 138, 59%, 54%;
  --color-orange-hsl: 31, 79%, 58%;
  --color-pink-hsl: 328, 91%, 79%;
  --color-purple-hsl: 258, 100%, 75%;
  --color-red-hsl: 358, 96%, 63%;
  --color-yellow-hsl: 59, 64%, 66%;
  --dark: var(--text-normal, var(--color-base-70, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent)));
  --darkgray: var(--text-normal, var(--color-base-70, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent)));
  --divider-color: var(--background-modifier-border, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --divider-color-hover: var(--interactive-accent, hsl(212, 100%, 50%));
  --dropdown-background: var(--interactive-normal, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b));
  --dropdown-background-hover: var(--interactive-hover, color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818));
  --file-header-background: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --file-header-background-focused: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --file-header-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b));
  --flair-color: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --font-interface-theme: "Instrument", sans-serif;
  --font-mermaid: var(--font-text, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-serif: "Fraunces", serif;
  --font-text-theme: var(--ulu-font-general, "Instrument", sans-serif);
  --font-title: var(--ulu-font-title, "Getai");
  --footnote-divider-color: var(--metadata-divider-color, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --footnote-id-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --footnote-id-color-no-occurrences: var(--text-faint, #999999);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.067));
  --footnote-line-height: var(--line-height-normal, 1.65);
  --glass-border-dark: #696969;
  --glass-border-light: #ffffff;
  --gradient-bg-primary: linear-gradient(
        135deg,
        color-mix(in srgb, var(--proxy-00), black 5%) 0%,
        var(--proxy-00) 60%
    );
  --gradient-bg-secondary: linear-gradient(
        135deg,
        color-mix(in srgb, var(--proxy-20), var(--color-accent) 8%) 0%,
        var(--proxy-20) 100%
    );
  --graph-line: rgb(from var(--mono-rgb-100) r g b / 0.15);
  --graph-node: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --graph-node-focused: var(--color-accent, hsl(212, 100%, 50%));
  --graph-node-tag: var(--color-accent, hsl(212, 100%, 50%));
  --graph-node-unresolved: var(--text-faint, #999999);
  --graph-text: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --gray: var(--text-muted, var(--color-base-50, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent)));
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
  --hr-color: var(--background-modifier-border, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --icon-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --icon-color-active: var(--color-accent, hsl(212, 100%, 50%));
  --icon-color-focused: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --icon-color-hover: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --inline-title-color: var(--color-base-100, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7));
  --inline-title-font: var(--ulu-inline-title-font, var(--font-title));
  --inline-title-size: var(--h1-size, clamp(2.5rem, 8vw - 2rem, 3rem));
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, #999999);
  --input-placeholder-color: var(--text-faint, #999999);
  --interactive-accent: var(--color-accent, hsl(212, 100%, 50%));
  --interactive-accent-hover: var(--color-accent-2, #fa99cd);
  --interactive-accent-hsl: var(--color-accent-hsl, 212, 100%, 50%);
  --interactive-hover: var(--color-base-35, color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818));
  --interactive-normal: var(--color-base-20, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b));
  --lbs: 0px 20px 30px rgba(0, 0, 5, 0.15);
  --light: var(--background-primary, var(--color-base-00, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b)));
  --lightgray: var(--background-secondary, var(--color-base-20, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b)));
  --line-height-normal: 1.65;
  --link-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --link-color-hover: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --link-decoration-hover: none;
  --link-decoration-thickness: 13%;
  --link-external-color: var(--color-accent, hsl(212, 100%, 50%));
  --link-external-color-hover: var(--color-accent-hover, hsl(
        258 calc(88% + 180) 66%
    ));
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --list-marker-color: var(--text-faint, #999999);
  --list-marker-color-collapsed: var(--color-accent, hsl(212, 100%, 50%));
  --list-marker-color-hover: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --menu-background: var(--background-secondary, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b));
  --menu-border-color: var(--background-modifier-border-hover, color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818));
  --menu-shadow: var(--shadow-s, 0px 1px 4px rgba(0, 0, 0, 0.16));
  --metadata-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --metadata-divider-color: var(--background-modifier-border, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.067));
  --metadata-input-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.067));
  --metadata-label-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --metadata-label-text-color-hover: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.067));
  --mix-base-dark: #09090b;
  --mix-base-light: #e4e4e7;
  --modal-background: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --mono-rgb-0: color-mix(in srgb, var(--color-accent) 5%, #000000);
  --mono-rgb-100: color-mix(in srgb, var(--color-accent) 5%, var(--mix-base-light));
  --nav-collapse-icon-color: var(--collapse-icon-color, #999999);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #999999);
  --nav-heading-color: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --nav-heading-color-collapsed: var(--text-faint, #999999);
  --nav-heading-color-collapsed-hover: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --nav-heading-color-hover: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.12));
  --nav-item-background-active: var(--background-modifier-hover, rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.067));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.067));
  --nav-item-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --nav-item-color-active: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --nav-item-color-highlighted: var(--color-accent-hover, hsl(
        258 calc(88% + 180) 66%
    ));
  --nav-item-color-hover: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --nav-item-color-selected: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --nav-tag-color: var(--text-faint, #999999);
  --nav-tag-color-active: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --nav-tag-color-hover: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --pdf-background: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --pdf-page-background: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --pdf-sidebar-background: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --pill-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --pill-border-color-hover: var(--background-modifier-border-hover, color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818));
  --pill-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --pill-color-hover: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --pill-color-remove: var(--text-faint, #999999);
  --pill-color-remove-hover: var(--text-accent, hsl(212, 100%, 50%));
  --prompt-background: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --proxy-00: color-mix(in srgb, var(--color-accent) 7%, var(--mix-base-dark));
  --proxy-10: color-mix(in srgb, var(--color-accent) 10%, var(--mix-base-dark));
  --proxy-20: color-mix(in srgb, var(--color-accent) 4%, var(--mix-base-dark));
  --radius-xl: 24px;
  --raised-background: var(--blur-background, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b), color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b) 65%, transparent)));
  --ribbon-background: var(--background-secondary, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b));
  --ribbon-background-collapsed: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --sbs: 24px 24px 84px -4px rgba(0, 0, 13, 0.05), 0px 16px 64px 6px rgba(0, 13, 0, 0.007);
  --scrollbar-active-thumb-bg: var(--color-accent, hsl(212, 100%, 50%));
  --scrollbar-bg: rgb(from var(--mono-rgb-100) r g b / 0.1);
  --search-clear-button-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --search-icon-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --search-result-background: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --secondary: var(--text-accent, var(--color-accent, hsl(212, 100%, 50%)));
  --setting-group-heading-color: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --setting-items-background: var(--background-primary-alt, color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b));
  --setting-items-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --shadow-l: 0px 8px 24px rgba(0, 0, 0, 0.2);
  --shadow-lm-only: none;
  --shadow-s: 0px 1px 4px rgba(0, 0, 0, 0.16);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --shiki-code-background: var(--code-background, color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b));
  --shiki-code-comment: var(--text-faint, #999999);
  --shiki-code-normal: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --shiki-code-punctuation: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --shiki-gutter-text-color: var(--text-faint, #999999);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --shiki-highlight-neutral: var(--shiki-code-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --shiki-terminal-dots-color: var(--text-faint, #999999);
  --slider-thumb-border-color: var(--background-modifier-border-hover, color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818));
  --slider-track-background: var(--background-modifier-border, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --status-bar-background: var(--background-secondary, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b));
  --status-bar-border-color: var(--divider-color, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --status-bar-text-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --suggestion-background: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --tab-background-active: var(--background-primary, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b));
  --tab-container-background: var(--background-secondary, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b));
  --tab-divider-color: var(--background-modifier-border-hover, color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818));
  --tab-outline-color: var(--divider-color, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --tab-switcher-background: var(--background-secondary, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b));
  --tab-switcher-preview-radius: var(--radius-xl, 24px);
  --tab-text-color: var(--text-faint, #999999);
  --tab-text-color-active: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --tab-text-color-focused: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --tab-text-color-focused-active: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --tab-text-color-focused-active-current: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --tab-text-color-focused-highlighted: var(--color-accent, hsl(212, 100%, 50%));
  --table-add-button-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --table-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(212, 100%, 50%));
  --table-drag-handle-color: var(--text-faint, #999999);
  --table-header-border-color: var(--table-border-color, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --table-header-color: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
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
  --text-muted: var(--color-base-50, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --text-normal: var(--color-base-70, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --text-on-button: var(--text-on-accent, white);
  --text-selection: var(--background-modifier-border, hsla(212, 100%, 50%, 0.33));
  --titleFont: var(--font-text-theme, var(--ulu-font-general, "Instrument", sans-serif));
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b));
  --titlebar-text-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent));
  --titlebar-text-color-focused: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --ulu-font-general: "Instrument", sans-serif;
  --ulu-font-title: "Getai";
  --ulu-kanban-border-color: transparent;
  --ulu-kanban-border-width: 0px;
  --ulu-radius: var(--radius-m, 8px);
  --vault-profile-color: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --vault-profile-color-hover: var(--vault-profile-color, color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent));
  --view-bottom-fade-mask: none;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.849412 0.872745 0.910588 / 0.7) none 0px;
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--color-base-100, color(srgb 0.849412 0.872745 0.910588));
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  outline: color(srgb 0.849412 0.872745 0.910588) none 0px;
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--color-base-100, color(srgb 0.849412 0.872745 0.910588));
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  outline: color(srgb 0.849412 0.872745 0.910588) none 0px;
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.849412 0.872745 0.910588 / 0.7) none 0px;
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .text-highlight {
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.849412 0.872745 0.910588 / 0.7) none 0px;
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body del {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.849412 0.872745 0.910588 / 0.7) none 0px;
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
}

html[saved-theme="dark"] body h2 {
  --ancestor-editor-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
  --background-modifier-active-hover: hsla(212, 100%, 50%, 0.1);
  --background-modifier-border: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --background-modifier-border-alt: color-mix(
        in srgb,
        hsl(212, 100%, 50%) 20%,
        #09090b
    );
  --background-modifier-border-focus: color-mix(in srgb, hsl(212, 100%, 50%) 30%, #09090b);
  --background-modifier-border-hover: color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818);
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: color-mix(in srgb, hsl(212, 100%, 50%) 12%, #09090b);
  --background-modifier-form-field-hover: color-mix(in srgb, hsl(212, 100%, 50%) 12%, #09090b);
  --background-modifier-hover: rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --background-primary-alt: color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b);
  --background-secondary: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --background-secondary-alt: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --blockquote-border-color: hsl(212, 100%, 50%);
  --blur-background: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b), color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b) 65%, transparent));
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
  --canvas-background: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --caret-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
  --checkbox-border-color: #999999;
  --checkbox-border-color-hover: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --checkbox-color: hsl(212, 100%, 50%);
  --checkbox-color-hover: #fa99cd;
  --checkbox-marker-color: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --clickable-icon-radius: 4px;
  --code-background: color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b);
  --code-border-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --code-bracket-background: rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.067);
  --code-comment: #999999;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
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
  --color-base-00: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --color-base-10: color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b);
  --color-base-100: color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7);
  --color-base-20: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --color-base-25: color-mix(in srgb, hsl(212, 100%, 50%) 12%, #09090b);
  --color-base-30: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --color-base-35: color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818);
  --color-base-40: color-mix(in srgb, hsl(212, 100%, 50%) 30%, #09090b);
  --color-base-50: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --color-base-70: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
  --divider-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --divider-color-hover: hsl(212, 100%, 50%);
  --divider-vertical-height: 100%;
  --dropdown-background: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --dropdown-background-hover: color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --flair-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
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
  --gradient-bg-primary: linear-gradient(
        135deg,
        color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b), black 5%) 0%,
        color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b) 60%
    );
  --gradient-bg-secondary: linear-gradient(
        135deg,
        color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b), hsl(212, 100%, 50%) 8%) 0%,
        color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b) 100%
    );
  --graph-line: rgb(from color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) r g b / 0.15);
  --graph-node: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(212, 100%, 50%);
  --graph-node-tag: hsl(212, 100%, 50%);
  --graph-node-unresolved: #999999;
  --graph-text: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
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
  --hr-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --interactive-accent: hsl(212, 100%, 50%);
  --interactive-accent-hover: #fa99cd;
  --interactive-accent-hsl: 212, 100%, 50%;
  --interactive-hover: color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818);
  --interactive-normal: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --link-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --link-color-hover: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
  --link-external-color: hsl(212, 100%, 50%);
  --link-external-color-hover: hsl(
        258 calc(88% + 180) 66%
    );
  --link-unresolved-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --link-unresolved-decoration-color: transparent;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --menu-border-color: color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  --mono-rgb-0: color-mix(in srgb, hsl(212, 100%, 50%) 5%, #000000);
  --mono-rgb-100: color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7);
  --pdf-background: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --pdf-page-background: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --pdf-shadow: 0 0 0 1px color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --pdf-sidebar-background: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --popover-font-size: 16px;
  --proxy-00: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --proxy-10: color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b);
  --proxy-20: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --raised-background: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b), color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(212, 100%, 50%);
  --scrollbar-bg: rgb(from color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) r g b / 0.1);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.1);
  --search-clear-button-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --search-icon-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --search-result-background: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --setting-group-heading-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b);
  --setting-items-border-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --shiki-code-background: color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #999999;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #999999;
  --shiki-gutter-text-color-highlight: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --shiki-highlight-neutral-background: rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), .05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #999999;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --swatch-shadow: inset 0 0 0 1px rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --tab-divider-color: color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818);
  --tab-font-size: 13px;
  --tab-outline-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b), transparent);
  --tab-switcher-preview-radius: 24px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 100%, 50%);
  --tab-text-color: #999999;
  --tab-text-color-active: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --tab-text-color-focused: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --tab-text-color-focused-active: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --tab-text-color-focused-active-current: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
  --tab-text-color-focused-highlighted: hsl(212, 100%, 50%);
  --table-add-button-border-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 100%, 50%);
  --table-drag-handle-color: #999999;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --table-header-border-width: 1px;
  --table-header-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
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
  --text-muted: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --text-normal: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
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
  border-color: color(srgb 0.849412 0.872745 0.910588 / 0.15);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--color-accent, rgb(0, 119, 255));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, color(srgb 0.849412 0.872745 0.910588 / 0.5));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.849412 0.872745 0.910588 / 0.5) none 0px;
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
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
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body dt {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body ol > li {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body ul > li {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  margin-bottom: 24px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: var(--heading-spacing, 24px);
  width: 604px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-width: 0px;
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-width: 0px;
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  font-weight: 500;
  padding-bottom: 2px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
  text-align: left;
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="dark"] body th {
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  border-right-width: 0px;
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--text-muted, color(srgb 0.849412 0.872745 0.910588 / 0.5));
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
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--ec-codeFg, color(srgb 0.849412 0.872745 0.910588 / 0.5));
  font-family: var(--ec-codeFontFml, Monaspace, monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, color(srgb 0.0317647 0.0784314 0.138824));
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
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body figcaption {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body img {
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588);
  border-left-color: color(srgb 0.849412 0.872745 0.910588);
  border-right-color: color(srgb 0.849412 0.872745 0.910588);
  border-top-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body video {
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(from var(--color-base-25) r g b/0.6);
  border-bottom-color: color(srgb 0.0289412 0.112941 0.215373);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.0289412 0.112941 0.215373);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.0289412 0.112941 0.215373);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.0289412 0.112941 0.215373);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgb(from var(--color-base-25) r g b/0.6);
  border-bottom-color: color(srgb 0.0289412 0.112941 0.215373);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.0289412 0.112941 0.215373);
  border-left-width: 1px;
  border-right-color: color(srgb 0.0289412 0.112941 0.215373);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.0289412 0.112941 0.215373);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-style: solid;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-style: solid;
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.15);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.15);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.15);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.15);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: var(--checkbox-size, 18px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='3' x2='12' y2='14'/%3E%3Cline x1='12' y1='21' x2='12.01' y2='21'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='3' x2='12' y2='14'/%3E%3Cline x1='12' y1='21' x2='12.01' y2='21'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='11' x2='12' y2='21'/%3E%3Cline x1='12' y1='3' x2='12.01' y2='3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='11' x2='12' y2='21'/%3E%3Cline x1='12' y1='3' x2='12.01' y2='3'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.849412 0.872745 0.910588);
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
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout-title {
  --ancestor-editor-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
  --background-modifier-active-hover: hsla(212, 100%, 50%, 0.1);
  --background-modifier-border: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --background-modifier-border-alt: color-mix(
        in srgb,
        hsl(212, 100%, 50%) 20%,
        #09090b
    );
  --background-modifier-border-focus: color-mix(in srgb, hsl(212, 100%, 50%) 30%, #09090b);
  --background-modifier-border-hover: color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818);
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: color-mix(in srgb, hsl(212, 100%, 50%) 12%, #09090b);
  --background-modifier-form-field-hover: color-mix(in srgb, hsl(212, 100%, 50%) 12%, #09090b);
  --background-modifier-hover: rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --background-primary-alt: color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b);
  --background-secondary: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --background-secondary-alt: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --blockquote-border-color: hsl(212, 100%, 50%);
  --blur-background: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b), color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b) 65%, transparent));
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
  --canvas-background: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --caret-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
  --checkbox-border-color: #999999;
  --checkbox-border-color-hover: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --checkbox-color: hsl(212, 100%, 50%);
  --checkbox-color-hover: #fa99cd;
  --checkbox-marker-color: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --clickable-icon-radius: 4px;
  --code-background: color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b);
  --code-border-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --code-bracket-background: rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.067);
  --code-comment: #999999;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
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
  --color-base-00: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --color-base-10: color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b);
  --color-base-100: color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7);
  --color-base-20: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --color-base-25: color-mix(in srgb, hsl(212, 100%, 50%) 12%, #09090b);
  --color-base-30: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --color-base-35: color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818);
  --color-base-40: color-mix(in srgb, hsl(212, 100%, 50%) 30%, #09090b);
  --color-base-50: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --color-base-70: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
  --divider-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --divider-color-hover: hsl(212, 100%, 50%);
  --divider-vertical-height: 100%;
  --dropdown-background: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --dropdown-background-hover: color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --flair-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
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
  --gradient-bg-primary: linear-gradient(
        135deg,
        color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b), black 5%) 0%,
        color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b) 60%
    );
  --gradient-bg-secondary: linear-gradient(
        135deg,
        color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b), hsl(212, 100%, 50%) 8%) 0%,
        color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b) 100%
    );
  --graph-line: rgb(from color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) r g b / 0.15);
  --graph-node: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(212, 100%, 50%);
  --graph-node-tag: hsl(212, 100%, 50%);
  --graph-node-unresolved: #999999;
  --graph-text: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
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
  --hr-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --interactive-accent: hsl(212, 100%, 50%);
  --interactive-accent-hover: #fa99cd;
  --interactive-accent-hsl: 212, 100%, 50%;
  --interactive-hover: color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818);
  --interactive-normal: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --link-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --link-color-hover: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
  --link-external-color: hsl(212, 100%, 50%);
  --link-external-color-hover: hsl(
        258 calc(88% + 180) 66%
    );
  --link-unresolved-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --link-unresolved-decoration-color: transparent;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --menu-border-color: color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  --mono-rgb-0: color-mix(in srgb, hsl(212, 100%, 50%) 5%, #000000);
  --mono-rgb-100: color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7);
  --pdf-background: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --pdf-page-background: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --pdf-shadow: 0 0 0 1px color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --pdf-sidebar-background: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --popover-font-size: 16px;
  --proxy-00: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --proxy-10: color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b);
  --proxy-20: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --raised-background: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b), color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(212, 100%, 50%);
  --scrollbar-bg: rgb(from color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) r g b / 0.1);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.1);
  --search-clear-button-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --search-icon-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --search-result-background: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --setting-group-heading-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b);
  --setting-items-border-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --shiki-code-background: color-mix(in srgb, hsl(212, 100%, 50%) 10%, #09090b);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #999999;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #999999;
  --shiki-gutter-text-color-highlight: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --shiki-highlight-neutral-background: rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), .05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #999999;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --swatch-shadow: inset 0 0 0 1px rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b);
  --tab-divider-color: color-mix(in srgb, hsl(212, 100%, 50%) 25%, #181818);
  --tab-font-size: 13px;
  --tab-outline-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b);
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(in srgb, hsl(212, 100%, 50%) 4%, #09090b), transparent);
  --tab-switcher-preview-radius: 24px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7), 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 100%, 50%);
  --tab-text-color: #999999;
  --tab-text-color-active: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --tab-text-color-focused: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --tab-text-color-focused-active: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --tab-text-color-focused-active-current: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
  --tab-text-color-focused-highlighted: hsl(212, 100%, 50%);
  --table-add-button-border-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, color-mix(in srgb, hsl(212, 100%, 50%) 7%, #09090b) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 100%, 50%);
  --table-drag-handle-color: #999999;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: color-mix(in srgb, hsl(212, 100%, 50%) 18%, #09090b);
  --table-header-border-width: 1px;
  --table-header-color: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
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
  --text-muted: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 50%, transparent);
  --text-normal: color-mix(in srgb, color-mix(in srgb, hsl(212, 100%, 50%) 5%, #e4e4e7) 70%, transparent);
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
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  background: rgba(251, 70, 76, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  background: rgba(251, 70, 76, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  background: rgba(168, 130, 255, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  background: rgba(251, 70, 76, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  background: rgba(2, 122, 255, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  background: rgba(2, 122, 255, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  background: rgba(233, 151, 63, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(158, 158, 158, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  background: rgba(68, 207, 110, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  background: rgba(83, 223, 221, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  background: rgba(2, 122, 255, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  background: rgba(233, 151, 63, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
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
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.1);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.1);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.1);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.1);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, color(srgb 0.0328235 0.0654902 0.110118));
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.08);
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.08);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.08);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.08);
  box-shadow: 0 40px 80px -20px rgb(from var(--mono-rgb-0) r g b/0.6),
        inset 0 1px 0 0 rgb(from var(--mono-rgb-100) r g b/0.1);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.849412 0.872745 0.910588 / 0.7) none 0px;
  text-decoration-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--interactive-hover, color(srgb 0.0705882 0.187255 0.320588));
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.08);
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.08);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.08);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.08);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(from var(--color-base-0) r g b/0.3);
  border-bottom-color: color(srgb 0.0289412 0.112941 0.215373);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.0289412 0.112941 0.215373);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.0289412 0.112941 0.215373);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.0289412 0.112941 0.215373);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: inset 0 2px 4px rgb(from var(--mono-rgb-0) r g b/0.1);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--interactive-hover, color(srgb 0.0705882 0.187255 0.320588));
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--interactive-hover, color(srgb 0.0705882 0.187255 0.320588));
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--color-base-100, color(srgb 0.849412 0.872745 0.910588));
}

html[saved-theme="dark"] body h1 {
  color: var(--ulu-h1-text-color, var(--h1-color, var(--color-base-100)));
  font-family: var(--h1-font, Getai);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, color(srgb 0.849412 0.872745 0.910588));
  font-size: var(--inline-title-size, 48px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="dark"] body h2 {
  color: var(--ulu-h2-text-color, var(--h2-color, var(--color-accent)));
  font-family: var(--h2-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, color(srgb 0.849412 0.872745 0.910588));
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
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: color(srgb 0.0310588 0.0870588 0.157961);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.849412 0.872745 0.910588 / 0.5));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.849412 0.872745 0.910588 / 0.5));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--text-muted, color(srgb 0.849412 0.872745 0.910588 / 0.5));
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
  color: var(--status-bar-text-color, color(srgb 0.849412 0.872745 0.910588 / 0.5));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.849412 0.872745 0.910588 / 0.5));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.849412 0.872745 0.910588 / 0.5));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
  color: var(--text-muted, color(srgb 0.849412 0.872745 0.910588 / 0.5));
}

html[saved-theme="dark"] body .darkmode svg {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  stroke: color(srgb 0.849412 0.872745 0.910588 / 0.5);
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
  color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(153, 153, 153));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgba(var(--canvas-card-base), 0.05);
  border-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  color: var(--text-muted, color(srgb 0.849412 0.872745 0.910588 / 0.5));
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
  color: var(--text-muted, color(srgb 0.849412 0.872745 0.910588 / 0.5));
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
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
  border-radius: 16px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: color(srgb 0.849412 0.872745 0.910588 / 0.5) color(srgb 0.849412 0.872745 0.910588 / 0.5) rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-radius: 8px;
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
}

html[saved-theme="dark"] body .note-properties-value {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, color(srgb 0.0328235 0.0654902 0.110118));
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
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
  border-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.7));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body details {
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgb(from var(--color-base-0) r g b/0.3);
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.5);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  color: var(--text-normal, color(srgb 0.849412 0.872745 0.910588 / 0.5));
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
  border-bottom-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-left-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-right-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
  border-top-color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body sub {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body summary {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
}

html[saved-theme="dark"] body sup {
  color: color(srgb 0.849412 0.872745 0.910588 / 0.7);
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
    , color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --background-modifier-border: var(--color-base-30, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --background-modifier-border-alt: color-mix(in srgb, var(--color-accent) 25%, white);
  --background-modifier-border-focus: var(--color-base-40, color-mix(in srgb, hsl(197, 95%, 67%) 22%, white));
  --background-modifier-border-hover: var(--color-base-35, color-mix(in srgb, hsl(197, 95%, 67%) 15%, white));
  --background-modifier-box-shadow: rgb(from var(--mono-rgb-0) r g b / 0.1);
  --background-modifier-cover: rgb(from var(--mono-rgb-0) r g b / 0.2);
  --background-modifier-form-field: var(--color-base-25, color-mix(in srgb, hsl(197, 95%, 67%) 12%, white));
  --background-modifier-form-field-highlighted: var(--color-base-35, color-mix(in srgb, hsl(197, 95%, 67%) 15%, white));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, color-mix(in srgb, hsl(197, 95%, 67%) 12%, white));
  --background-modifier-success: var(--color-green, #8fbc8f);
  --background-modifier-success-rgb: var(--color-green-rgb, 143, 188, 143);
  --background-primary: var(--color-base-00, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --background-primary-alt: var(--color-base-10, color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --background-secondary: var(--color-base-20, color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --bases-cards-background: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --bases-cards-cover-background: var(--background-primary-alt, color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --bases-embed-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --bases-group-heading-property-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --bases-table-border-color: var(--table-border-color, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --bases-table-cell-background-active: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --bases-table-cell-background-disabled: var(--background-primary-alt, color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --bases-table-cell-background-selected: var(--table-selection, hsla(197, 95%, 67%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --bases-table-header-background: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --bases-table-header-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --bases-table-summary-background: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --blockquote-border-color: var(--interactive-accent, hsl(197, 95%, 67%));
  --bodyFont: var(--font-text-theme, var(--ulu-font-general, "Instrument", sans-serif));
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-default: var(--color-blue-rgb, 91, 206, 250);
  --callout-info: var(--color-blue-rgb, 91, 206, 250);
  --callout-radius: var(--radius-m, 8px);
  --callout-success: var(--color-green-rgb, 143, 188, 143);
  --callout-todo: var(--color-blue-rgb, 91, 206, 250);
  --canvas-background: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --canvas-card-label-color: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --canvas-color: var(--background-modifier-border, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --canvas-color-4: var(--color-green-rgb, 143, 188, 143);
  --canvas-dot-pattern: var(--color-base-30, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --caret-color: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --checkbox-border-color: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --checkbox-border-color-hover: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --checkbox-color: var(--interactive-accent, hsl(197, 95%, 67%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(
        258 88% 71%
    ));
  --checkbox-marker-color: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --checklist-done-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --code-background: var(--background-primary-alt, color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --code-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --code-bracket-background: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --code-comment: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --code-keyword: var(--color-pink, #f5a9b8);
  --code-normal: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --code-punctuation: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --code-string: var(--color-green, #8fbc8f);
  --collapse-icon-color: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
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
  --color-base-00: var(--proxy-00, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --color-base-10: var(--proxy-10, color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --color-base-100: var(--mono-rgb-0, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000));
  --color-base-20: var(--proxy-20, color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --color-base-25: color-mix(in srgb, var(--color-accent) 12%, white);
  --color-base-30: color-mix(in srgb, var(--color-accent) 18%, white);
  --color-base-35: color-mix(in srgb, var(--color-accent) 15%, white);
  --color-base-40: color-mix(in srgb, var(--color-accent) 22%, white);
  --color-base-50: color-mix(in srgb, var(--color-base-100) 70%, transparent);
  --color-base-60: color-mix(in srgb, var(--color-accent) 50%, white);
  --color-base-70: color-mix(in srgb, var(--color-base-100) 70%, transparent);
  --color-blue: #5bcefa;
  --color-blue-hsl: 197, 95%, 67%;
  --color-blue-rgb: 91, 206, 250;
  --color-cyan-hsl: 179, 100%, 37%;
  --color-green: #8fbc8f;
  --color-green-hsl: 120, 25%, 65%;
  --color-green-rgb: 143, 188, 143;
  --color-orange-hsl: 30, 100%, 46%;
  --color-pink: #f5a9b8;
  --color-pink-hsl: 348, 83%, 81%;
  --color-pink-rgb: 245, 169, 184;
  --color-purple-hsl: 255, 82%, 63%;
  --color-red-hsl: 353, 81%, 55%;
  --color-yellow-hsl: 46, 100%, 44%;
  --dark: var(--text-normal, var(--color-base-70, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent)));
  --darkgray: var(--text-normal, var(--color-base-70, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent)));
  --divider-color: var(--background-modifier-border, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --divider-color-hover: var(--interactive-accent, hsl(197, 95%, 67%));
  --dropdown-background: var(--interactive-normal, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --dropdown-background-hover: var(--interactive-hover, color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --file-header-background: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --file-header-background-focused: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --file-header-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --flair-color: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --font-interface-theme: "Instrument", sans-serif;
  --font-mermaid: var(--font-text, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-serif: "Fraunces", serif;
  --font-text-theme: var(--ulu-font-general, "Instrument", sans-serif);
  --font-title: var(--ulu-font-title, "Getai");
  --footnote-divider-color: var(--metadata-divider-color, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --footnote-id-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --footnote-id-color-no-occurrences: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(#ffffff, 0.067));
  --footnote-line-height: var(--line-height-normal, 1.65);
  --gradient-bg-primary: linear-gradient(
        135deg,
        color-mix(in srgb, var(--proxy-00), var(--color-accent) 10%) 0%,
        var(--proxy-00) 100%
    );
  --gradient-bg-secondary: linear-gradient(
        135deg,
        color-mix(in srgb, var(--proxy-20), var(--color-accent) 15%) 0%,
        var(--proxy-20) 100%
    );
  --graph-line: rgb(from var(--mono-rgb-100) r g b / 0.15);
  --graph-node: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --graph-node-focused: var(--color-accent, hsl(197, 95%, 67%));
  --graph-node-tag: var(--color-accent, hsl(197, 95%, 67%));
  --graph-node-unresolved: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --graph-text: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --gray: var(--text-muted, var(--color-base-50, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent)));
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
  --heading-formatting: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --hr-color: var(--background-modifier-border, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --icon-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --icon-color-active: var(--color-accent, hsl(197, 95%, 67%));
  --icon-color-focused: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --icon-color-hover: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --inline-title-color: var(--color-base-100, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000));
  --inline-title-font: var(--ulu-inline-title-font, var(--font-title));
  --inline-title-size: var(--h1-size, clamp(2.5rem, 8vw - 2rem, 3rem));
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --input-placeholder-color: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --interactive-accent: var(--color-accent, hsl(197, 95%, 67%));
  --interactive-accent-hover: var(--color-accent-2, hsl(
        258 88% 71%
    ));
  --interactive-accent-hsl: var(--color-accent-hsl, 197, 95%, 67%);
  --interactive-hover: var(--color-base-10, color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --interactive-normal: var(--color-base-00, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --lbs: 0px 20px 30px rgba(0, 5, 0, 0.03);
  --light: var(--background-primary, var(--color-base-00, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc))));
  --lightgray: var(--background-secondary, var(--color-base-20, color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc))));
  --line-height-normal: 1.65;
  --link-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --link-color-hover: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --link-decoration-hover: none;
  --link-decoration-thickness: 13%;
  --link-external-color: var(--color-accent, hsl(197, 95%, 67%));
  --link-external-color-hover: var(--color-accent-hover, hsl(
        258 88% 71%
    ));
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --list-marker-color: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --list-marker-color-collapsed: var(--color-accent, hsl(197, 95%, 67%));
  --list-marker-color-hover: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --menu-background: var(--background-secondary, color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --menu-border-color: var(--background-modifier-border-hover, color-mix(in srgb, hsl(197, 95%, 67%) 15%, white));
  --menu-shadow: var(--shadow-s, 0px 3px 5px rgba(0, 0, 0, 0.04));
  --metadata-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --metadata-divider-color: var(--background-modifier-border, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --metadata-input-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --metadata-label-font: var(--font-interface, "Instrument", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --metadata-label-text-color-hover: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --mix-base-dark: #18181b;
  --mix-base-light: color-mix(in srgb, var(--color-accent) 3%, #fcfcfc);
  --modal-background: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --mono-rgb-0: color-mix(in srgb, var(--color-accent) 40%, #000000);
  --mono-rgb-100: #ffffff;
  --nav-collapse-icon-color: var(--collapse-icon-color, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --nav-collapse-icon-color-collapsed: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --nav-heading-color: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --nav-heading-color-collapsed: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --nav-heading-color-collapsed-hover: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --nav-heading-color-hover: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(#ffffff, 0.12));
  --nav-item-background-active: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(#ffffff, 0.067));
  --nav-item-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --nav-item-color-active: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --nav-item-color-highlighted: var(--color-accent-hover, hsl(
        258 88% 71%
    ));
  --nav-item-color-hover: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --nav-item-color-selected: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --nav-tag-color: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --nav-tag-color-active: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --nav-tag-color-hover: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --pdf-background: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --pdf-page-background: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --pdf-sidebar-background: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --pill-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --pill-border-color-hover: var(--background-modifier-border-hover, color-mix(in srgb, hsl(197, 95%, 67%) 15%, white));
  --pill-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --pill-color-hover: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --pill-color-remove: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --pill-color-remove-hover: var(--text-accent, hsl(197, 95%, 67%));
  --prompt-background: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --proxy-00: color-mix(in srgb, var(--color-accent) 6%, var(--mix-base-light));
  --proxy-10: color-mix(in srgb, var(--color-accent) 12%, var(--mix-base-light));
  --proxy-20: color-mix(in srgb, var(--color-accent) 9%, var(--mix-base-light));
  --radius-xl: 24px;
  --raised-background: var(--blur-background, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)), color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)) 65%, transparent)));
  --ribbon-background: var(--background-secondary, color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --ribbon-background-collapsed: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --sbs: 24px 24px 84px -4px rgba(0, 0, 0, 0.05), 0px 16px 64px 6px rgba(0, 0, 0, 0.007);
  --scrollbar-active-thumb-bg: var(--color-accent, hsl(197, 95%, 67%));
  --scrollbar-bg: rgb(from var(--mono-rgb-100) r g b / 0.1);
  --search-clear-button-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --search-icon-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --search-result-background: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --secondary: var(--text-accent, var(--color-accent, hsl(197, 95%, 67%)));
  --setting-group-heading-color: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --setting-items-background: var(--background-primary-alt, color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --setting-items-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --shadow-l: 0px 8px 24px rgba(149, 157, 165, 0.2);
  --shadow-lm-only: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-s: 0px 3px 5px rgba(0, 0, 0, 0.04);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --shiki-code-background: var(--code-background, color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --shiki-code-comment: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --shiki-code-function: var(--color-green, #8fbc8f);
  --shiki-code-keyword: var(--color-pink, #f5a9b8);
  --shiki-code-normal: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --shiki-code-punctuation: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --shiki-gutter-text-color: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --shiki-highlight-neutral: var(--shiki-code-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --shiki-terminal-dots-color: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --slider-thumb-border-color: var(--background-modifier-border-hover, color-mix(in srgb, hsl(197, 95%, 67%) 15%, white));
  --slider-track-background: var(--background-modifier-border, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --status-bar-background: var(--background-secondary, color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --status-bar-border-color: var(--divider-color, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --status-bar-text-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --suggestion-background: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --sync-avatar-color-4: var(--color-green, #8fbc8f);
  --sync-avatar-color-6: var(--color-blue, #5bcefa);
  --sync-avatar-color-8: var(--color-pink, #f5a9b8);
  --tab-background-active: var(--background-primary, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --tab-container-background: var(--background-secondary, color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --tab-divider-color: var(--background-modifier-border-hover, color-mix(in srgb, hsl(197, 95%, 67%) 15%, white));
  --tab-outline-color: var(--divider-color, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --tab-switcher-background: var(--background-secondary, color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)));
  --tab-switcher-preview-radius: var(--radius-xl, 24px);
  --tab-text-color: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --tab-text-color-active: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --tab-text-color-focused: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --tab-text-color-focused-active: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --tab-text-color-focused-active-current: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --tab-text-color-focused-highlighted: var(--color-accent, hsl(197, 95%, 67%));
  --table-add-button-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --table-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(197, 95%, 67%));
  --table-drag-handle-color: var(--text-faint, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --table-drag-handle-color-active: var(--text-on-accent, #ffffff);
  --table-header-border-color: var(--table-border-color, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --table-header-color: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
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
  --text-faint: var(--color-base-60, color-mix(in srgb, hsl(197, 95%, 67%) 50%, white));
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: var(--color-base-50, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --text-normal: var(--color-base-70, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --text-on-accent: #ffffff;
  --text-on-accent-inverted: #000000;
  --text-on-button: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --text-selection: var(--background-modifier-border, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --text-success: var(--color-green, #8fbc8f);
  --titleFont: var(--font-text-theme, var(--ulu-font-general, "Instrument", sans-serif));
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(197, 95%, 67%) 18%, white));
  --titlebar-text-color: var(--text-muted, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --titlebar-text-color-focused: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --ulu-font-general: "Instrument", sans-serif;
  --ulu-font-title: "Getai";
  --ulu-kanban-border-color: transparent;
  --ulu-kanban-border-width: 0px;
  --ulu-radius: var(--radius-m, 8px);
  --vault-profile-color: var(--text-normal, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --vault-profile-color-hover: var(--vault-profile-color, color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent));
  --view-bottom-fade-mask: none;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.1426 0.32234 0.3934 / 0.7) none 0px;
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--color-base-100, color(srgb 0.1426 0.32234 0.3934));
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  outline: color(srgb 0.1426 0.32234 0.3934) none 0px;
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--color-base-100, color(srgb 0.1426 0.32234 0.3934));
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  outline: color(srgb 0.1426 0.32234 0.3934) none 0px;
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.1426 0.32234 0.3934 / 0.7) none 0px;
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .text-highlight {
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.1426 0.32234 0.3934 / 0.7) none 0px;
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body del {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.1426 0.32234 0.3934 / 0.7) none 0px;
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
}

html[saved-theme="light"] body h2 {
  --ancestor-editor-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --background-modifier-active-hover: hsla(197, 95%, 67%, 0.1);
  --background-modifier-border: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --background-modifier-border-alt: #fff;
  --background-modifier-border-focus: color-mix(in srgb, hsl(197, 95%, 67%) 22%, white);
  --background-modifier-border-hover: color-mix(in srgb, hsl(197, 95%, 67%) 15%, white);
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: color-mix(in srgb, hsl(197, 95%, 67%) 12%, white);
  --background-modifier-form-field-hover: color-mix(in srgb, hsl(197, 95%, 67%) 12%, white);
  --background-modifier-hover: rgba(#ffffff, 0.067);
  --background-modifier-success: #8fbc8f;
  --background-modifier-success-rgb: 143, 188, 143;
  --background-primary: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --background-primary-alt: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --background-secondary: color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --background-secondary-alt: #fcfcfc;
  --blockquote-border-color: hsl(197, 95%, 67%);
  --blur-background: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)), color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)) 65%, transparent));
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
  --callout-success: 143, 188, 143;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 91, 206, 250;
  --callout-warning: 236, 117, 0;
  --canvas-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --caret-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --checkbox-border-color: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --checkbox-border-color-hover: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --checkbox-color: hsl(197, 95%, 67%);
  --checkbox-color-hover: hsl(
        258 88% 71%
    );
  --checkbox-marker-color: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --clickable-icon-radius: 4px;
  --code-background: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --code-border-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --code-bracket-background: rgba(#ffffff, 0.067);
  --code-comment: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #f5a9b8;
  --code-normal: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #8fbc8f;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
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
  --color-base-00: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --color-base-10: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --color-base-100: color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000);
  --color-base-20: color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --color-base-25: color-mix(in srgb, hsl(197, 95%, 67%) 12%, white);
  --color-base-30: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --color-base-35: color-mix(in srgb, hsl(197, 95%, 67%) 15%, white);
  --color-base-40: color-mix(in srgb, hsl(197, 95%, 67%) 22%, white);
  --color-base-50: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --color-base-70: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --divider-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --divider-color-hover: hsl(197, 95%, 67%);
  --divider-vertical-height: 100%;
  --dropdown-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --dropdown-background-hover: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --flair-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
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
  --gradient-bg-primary: linear-gradient(
        135deg,
        color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)), hsl(197, 95%, 67%) 10%) 0%,
        color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)) 100%
    );
  --gradient-bg-secondary: linear-gradient(
        135deg,
        color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)), hsl(197, 95%, 67%) 15%) 0%,
        color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)) 100%
    );
  --graph-line: rgb(from #ffffff r g b / 0.15);
  --graph-node: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(197, 95%, 67%);
  --graph-node-tag: hsl(197, 95%, 67%);
  --graph-node-unresolved: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --graph-text: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
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
  --heading-formatting: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --heading-spacing: 2.5rem;
  --hr-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --interactive-accent: hsl(197, 95%, 67%);
  --interactive-accent-hover: hsl(
        258 88% 71%
    );
  --interactive-accent-hsl: 197, 95%, 67%;
  --interactive-hover: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --interactive-normal: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --link-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --link-color-hover: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --link-external-color: hsl(197, 95%, 67%);
  --link-external-color-hover: hsl(
        258 88% 71%
    );
  --link-unresolved-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --link-unresolved-decoration-color: transparent;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --menu-border-color: color-mix(in srgb, hsl(197, 95%, 67%) 15%, white);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 3px 5px rgba(0, 0, 0, 0.04);
  --mono-rgb-0: color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000);
  --pdf-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --pdf-page-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --pdf-sidebar-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --popover-font-size: 16px;
  --proxy-00: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --proxy-10: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --proxy-20: color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --raised-background: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)), color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(197, 95%, 67%);
  --scrollbar-bg: rgb(from #ffffff r g b / 0.1);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(#ffffff, 0.1);
  --search-clear-button-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --search-icon-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --search-result-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --setting-group-heading-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --setting-items-border-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --shiki-code-background: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --shiki-code-function: #8fbc8f;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #f5a9b8;
  --shiki-code-normal: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --shiki-gutter-text-color-highlight: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --shiki-highlight-green: rgba(143, 188, 143, 0.5);
  --shiki-highlight-green-background: rgba(143, 188, 143, 0.1);
  --shiki-highlight-neutral: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --shiki-highlight-neutral-background: rgba(#ffffff, .05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --swatch-shadow: inset 0 0 0 1px rgba(#ffffff, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #8fbc8f;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #5bcefa;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #f5a9b8;
  --tab-background-active: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --tab-divider-color: color-mix(in srgb, hsl(197, 95%, 67%) 15%, white);
  --tab-font-size: 13px;
  --tab-outline-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)), transparent);
  --tab-switcher-preview-radius: 24px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(#ffffff, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(197, 95%, 67%);
  --tab-text-color: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --tab-text-color-active: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --tab-text-color-focused: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --tab-text-color-focused-active: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --tab-text-color-focused-active-current: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --tab-text-color-focused-highlighted: hsl(197, 95%, 67%);
  --table-add-button-border-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(197, 95%, 67%);
  --table-drag-handle-color: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: transparent;
  --table-header-border-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --table-header-border-width: 1px;
  --table-header-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
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
  --text-faint: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --text-normal: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --text-on-button: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --text-selection: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --text-success: #8fbc8f;
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
  border-color: color(srgb 1 1 1 / 0.15);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--color-accent, rgb(91, 205, 251));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.1426 0.32234 0.3934 / 0.7) none 0px;
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  background-color: rgb(from var(--mono-rgb-0) r g b/0.05);
  color: var(--text-faint, color(srgb 0.67825 0.902925 0.99175));
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 500);
  outline: color(srgb 0.67825 0.902925 0.99175) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, color(srgb 0.67825 0.902925 0.99175));
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body dt {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body ol > li {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body ul > li {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-faint, color(srgb 0.67825 0.902925 0.99175));
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(from var(--color-base-00) r g b/0.3);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  font-family: var(--font-text, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  margin-bottom: 24px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: var(--heading-spacing, 24px);
  width: 604px;
}

html[saved-theme="light"] body td {
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-width: 0px;
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-width: 0px;
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  font-weight: 500;
  padding-bottom: 2px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
  text-align: left;
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="light"] body th {
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-width: 0px;
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--text-muted, color(srgb 0.1426 0.32234 0.3934 / 0.7));
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
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--ec-codeFg, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  font-family: var(--ec-codeFontFml, Monaspace, monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, color(srgb 0.895749 0.961534 0.987542));
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
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body figcaption {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body img {
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934);
  border-left-color: color(srgb 0.1426 0.32234 0.3934);
  border-right-color: color(srgb 0.1426 0.32234 0.3934);
  border-top-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body video {
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(from var(--color-base-25) r g b/0.6);
  border-bottom-color: color(srgb 0.88417 0.965053 0.99703);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.88417 0.965053 0.99703);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.88417 0.965053 0.99703);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.88417 0.965053 0.99703);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .transclude {
  background-color: rgb(from var(--color-base-25) r g b/0.6);
  border-bottom-color: color(srgb 0.88417 0.965053 0.99703);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.88417 0.965053 0.99703);
  border-left-width: 1px;
  border-right-color: color(srgb 0.88417 0.965053 0.99703);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.88417 0.965053 0.99703);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-style: solid;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-style: solid;
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
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

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='3' x2='12' y2='14'/%3E%3Cline x1='12' y1='21' x2='12.01' y2='21'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='3' x2='12' y2='14'/%3E%3Cline x1='12' y1='21' x2='12.01' y2='21'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cline x1='12' y1='17' x2='12.01' y2='17'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3Cline x1='5' y1='12' x2='19' y2='12'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='11' x2='12' y2='21'/%3E%3Cline x1='12' y1='3' x2='12.01' y2='3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='11' x2='12' y2='21'/%3E%3Cline x1='12' y1='3' x2='12.01' y2='3'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17L4 12' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1426 0.32234 0.3934);
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
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout-title {
  --ancestor-editor-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --background-modifier-active-hover: hsla(197, 95%, 67%, 0.1);
  --background-modifier-border: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --background-modifier-border-alt: #fff;
  --background-modifier-border-focus: color-mix(in srgb, hsl(197, 95%, 67%) 22%, white);
  --background-modifier-border-hover: color-mix(in srgb, hsl(197, 95%, 67%) 15%, white);
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: color-mix(in srgb, hsl(197, 95%, 67%) 12%, white);
  --background-modifier-form-field-hover: color-mix(in srgb, hsl(197, 95%, 67%) 12%, white);
  --background-modifier-hover: rgba(#ffffff, 0.067);
  --background-modifier-success: #8fbc8f;
  --background-modifier-success-rgb: 143, 188, 143;
  --background-primary: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --background-primary-alt: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --background-secondary: color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --background-secondary-alt: #fcfcfc;
  --blockquote-border-color: hsl(197, 95%, 67%);
  --blur-background: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)), color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)) 65%, transparent));
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
  --callout-success: 143, 188, 143;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 91, 206, 250;
  --callout-warning: 236, 117, 0;
  --canvas-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --caret-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --checkbox-border-color: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --checkbox-border-color-hover: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --checkbox-color: hsl(197, 95%, 67%);
  --checkbox-color-hover: hsl(
        258 88% 71%
    );
  --checkbox-marker-color: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --clickable-icon-radius: 4px;
  --code-background: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --code-border-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --code-bracket-background: rgba(#ffffff, 0.067);
  --code-comment: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #f5a9b8;
  --code-normal: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #8fbc8f;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
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
  --color-base-00: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --color-base-10: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --color-base-100: color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000);
  --color-base-20: color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --color-base-25: color-mix(in srgb, hsl(197, 95%, 67%) 12%, white);
  --color-base-30: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --color-base-35: color-mix(in srgb, hsl(197, 95%, 67%) 15%, white);
  --color-base-40: color-mix(in srgb, hsl(197, 95%, 67%) 22%, white);
  --color-base-50: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --color-base-70: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --divider-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --divider-color-hover: hsl(197, 95%, 67%);
  --divider-vertical-height: 100%;
  --dropdown-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --dropdown-background-hover: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --flair-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
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
  --gradient-bg-primary: linear-gradient(
        135deg,
        color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)), hsl(197, 95%, 67%) 10%) 0%,
        color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)) 100%
    );
  --gradient-bg-secondary: linear-gradient(
        135deg,
        color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)), hsl(197, 95%, 67%) 15%) 0%,
        color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)) 100%
    );
  --graph-line: rgb(from #ffffff r g b / 0.15);
  --graph-node: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(197, 95%, 67%);
  --graph-node-tag: hsl(197, 95%, 67%);
  --graph-node-unresolved: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --graph-text: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
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
  --heading-formatting: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --heading-spacing: 2.5rem;
  --hr-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --interactive-accent: hsl(197, 95%, 67%);
  --interactive-accent-hover: hsl(
        258 88% 71%
    );
  --interactive-accent-hsl: 197, 95%, 67%;
  --interactive-hover: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --interactive-normal: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --link-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --link-color-hover: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --link-external-color: hsl(197, 95%, 67%);
  --link-external-color-hover: hsl(
        258 88% 71%
    );
  --link-unresolved-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --link-unresolved-decoration-color: transparent;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --menu-border-color: color-mix(in srgb, hsl(197, 95%, 67%) 15%, white);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 3px 5px rgba(0, 0, 0, 0.04);
  --mono-rgb-0: color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000);
  --pdf-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --pdf-page-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --pdf-sidebar-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --popover-font-size: 16px;
  --proxy-00: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --proxy-10: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --proxy-20: color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --raised-background: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)), color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(197, 95%, 67%);
  --scrollbar-bg: rgb(from #ffffff r g b / 0.1);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(#ffffff, 0.1);
  --search-clear-button-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --search-icon-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --search-result-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --setting-group-heading-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --setting-items-border-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --shiki-code-background: color-mix(in srgb, hsl(197, 95%, 67%) 12%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --shiki-code-function: #8fbc8f;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #f5a9b8;
  --shiki-code-normal: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --shiki-gutter-text-color-highlight: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --shiki-highlight-green: rgba(143, 188, 143, 0.5);
  --shiki-highlight-green-background: rgba(143, 188, 143, 0.1);
  --shiki-highlight-neutral: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --shiki-highlight-neutral-background: rgba(#ffffff, .05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --swatch-shadow: inset 0 0 0 1px rgba(#ffffff, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #8fbc8f;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #5bcefa;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #f5a9b8;
  --tab-background-active: color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --tab-divider-color: color-mix(in srgb, hsl(197, 95%, 67%) 15%, white);
  --tab-font-size: 13px;
  --tab-outline-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc));
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(in srgb, hsl(197, 95%, 67%) 9%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)), transparent);
  --tab-switcher-preview-radius: 24px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(#ffffff, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(197, 95%, 67%);
  --tab-text-color: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --tab-text-color-active: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --tab-text-color-focused: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --tab-text-color-focused-active: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --tab-text-color-focused-active-current: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --tab-text-color-focused-highlighted: hsl(197, 95%, 67%);
  --table-add-button-border-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(91, 206, 250) 25%, color-mix(in srgb, hsl(197, 95%, 67%) 6%, color-mix(in srgb, hsl(197, 95%, 67%) 3%, #fcfcfc)) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(197, 95%, 67%);
  --table-drag-handle-color: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: transparent;
  --table-header-border-color: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --table-header-border-width: 1px;
  --table-header-color: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
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
  --text-faint: color-mix(in srgb, hsl(197, 95%, 67%) 50%, white);
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --text-normal: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --text-on-button: color-mix(in srgb, color-mix(in srgb, hsl(197, 95%, 67%) 40%, #000000) 70%, transparent);
  --text-selection: color-mix(in srgb, hsl(197, 95%, 67%) 18%, white);
  --text-success: #8fbc8f;
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
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  background: rgba(233, 49, 71, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  background: rgba(233, 49, 71, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  background: rgba(120, 82, 238, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  background: rgba(233, 49, 71, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 91, 206, 250);
  background: rgba(91, 206, 250, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 91, 206, 250);
  background: rgba(91, 206, 250, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  background: rgba(236, 117, 0, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(158, 158, 158, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 143, 188, 143);
  background: rgba(143, 188, 143, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  background: rgba(0, 191, 188, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 91, 206, 250);
  background: rgba(91, 206, 250, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  background: rgba(236, 117, 0, 0.05) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.05);
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
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
  border-bottom-color: color(srgb 1 1 1 / 0.1);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left-color: color(srgb 1 1 1 / 0.1);
  border-right-color: color(srgb 1 1 1 / 0.1);
  border-top-color: color(srgb 1 1 1 / 0.1);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, color(srgb 0.932516 0.972149 0.987818));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  box-shadow: var(--shadow-l, rgba(149, 157, 165, 0.2) 0px 8px 24px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.1426 0.32234 0.3934 / 0.7) none 0px;
  text-decoration-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--interactive-hover, color(srgb 0.895749 0.961534 0.987542));
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(from var(--color-base-0) r g b/0.3);
  border-bottom-color: color(srgb 0.88417 0.965053 0.99703);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.88417 0.965053 0.99703);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.88417 0.965053 0.99703);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.88417 0.965053 0.99703);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: inset 0 2px 4px rgb(from var(--mono-rgb-0) r g b/0.1);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--interactive-hover, color(srgb 0.895749 0.961534 0.987542));
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--interactive-hover, color(srgb 0.895749 0.961534 0.987542));
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--color-base-100, color(srgb 0.1426 0.32234 0.3934));
}

html[saved-theme="light"] body h1 {
  color: var(--ulu-h1-text-color, var(--h1-color, var(--color-base-100)));
  font-family: var(--h1-font, Getai);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, color(srgb 0.1426 0.32234 0.3934));
  font-size: var(--inline-title-size, 48px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="light"] body h2 {
  color: var(--ulu-h2-text-color, var(--h2-color, var(--color-accent)));
  font-family: var(--h2-font, "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, color(srgb 0.1426 0.32234 0.3934));
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
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: color(srgb 0.92278 0.976702 0.99802);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-muted, color(srgb 0.1426 0.32234 0.3934 / 0.7));
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
  color: var(--status-bar-text-color, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.1426 0.32234 0.3934 / 0.7));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.1426 0.32234 0.3934 / 0.7));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: var(--text-muted, color(srgb 0.1426 0.32234 0.3934 / 0.7));
}

html[saved-theme="light"] body .darkmode svg {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  stroke: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, color(srgb 0.67825 0.902925 0.99175));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .canvas-node-content {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgba(var(--canvas-card-base), 0.05);
  border-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  color: var(--text-muted, color(srgb 0.1426 0.32234 0.3934 / 0.7));
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
  color: var(--text-muted, color(srgb 0.1426 0.32234 0.3934 / 0.7));
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
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  font-family: "??", Instrument, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
  border-radius: 16px;
}

html[saved-theme="light"] body .note-properties-key {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: color(srgb 0.1426 0.32234 0.3934 / 0.7) color(srgb 0.1426 0.32234 0.3934 / 0.7) rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-radius: 8px;
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
}

html[saved-theme="light"] body .note-properties-value {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, color(srgb 0.932516 0.972149 0.987818));
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
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
  border-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
  font-family: "??", Instrument, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body details {
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(from var(--color-base-0) r g b/0.3);
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  color: var(--text-normal, color(srgb 0.1426 0.32234 0.3934 / 0.7));
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
  border-bottom-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-left-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-right-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
  border-top-color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body sub {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body summary {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
}

html[saved-theme="light"] body sup {
  color: color(srgb 0.1426 0.32234 0.3934 / 0.7);
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
};
