import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "prism",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono", "source-sans-3"],
    fontFiles: [
      {
        family: "Source Sans 3",
        style: "normal",
        weight: "200 900",
        file: "source-sans-3.woff2",
        format: "woff2",
        unicodeRange:
          "U+0000-1FFF, U+2070-20CF, U+2150-218F, U+2400-245F, U+2500-259F, U+27C0-28FF, U+2980-2AFF, U+2C00-2FFF, U+3040-31FF, U+3300-FFFF, U+10000-1EEFF, U+1F700-1F77F, U+1F800-1F8FF, U+1FB00-10FFFD",
      },
      {
        family: "Source Sans 3",
        style: "italic",
        weight: "200 900",
        file: "source-sans-3-1.woff2",
        format: "woff2",
        unicodeRange:
          "U+0000-1FFF, U+2070-20CF, U+2150-218F, U+2400-245F, U+2500-259F, U+27C0-28FF, U+2980-2AFF, U+2C00-2FFF, U+3040-31FF, U+3300-FFFF, U+10000-1EEFF, U+1F700-1F77F, U+1F800-1F8FF, U+1FB00-10FFFD",
      },
      {
        family: "JetBrains Mono",
        style: "normal",
        weight: "100 800",
        file: "jetbrains-mono.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "JetBrains Mono",
        style: "italic",
        weight: "100 800",
        file: "jetbrains-mono-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "obsidian-prism-theme",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-border-width: 2px;
  --background-modifier-border: var(--window-border-color, hsl(0, 0%, 30%));
  --background-modifier-border-focus: var(--interactive-accent-tint, hsl(271, 43%, 51%));
  --background-modifier-border-hover: var(--interactive-accent-tint, hsl(271, 43%, 51%));
  --background-modifier-error: var(--color-red-text, hsl(4, 74%, 74%));
  --background-modifier-error-hover: var(--color-red, hsl(4, 74%, 74%));
  --background-modifier-form-field: var(--background-secondary-alt, hsl(0, 0%, 8%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(0, 0%, 8%));
  --background-modifier-success: var(--color-green, hsl(124, 48%, 54%));
  --background-primary: var(--color-base-00, hsl(0, 0%, 18%));
  --background-primary-alt: var(--color-base-10, hsl(0, 0%, 30%));
  --background-primary-alt-hsl: 0, 0%, 30%;
  --background-primary-blur: hsl(0, 0%, 18%, 80%);
  --background-primary-hsl: 0, 0%, 18%;
  --background-secondary: var(--color-base-20, hsl(0, 0%, 12%));
  --background-secondary-alt: var(--color-base-30, hsl(0, 0%, 8%));
  --background-secondary-alt-blur: hsla(0, 0%, 8%, 80%);
  --background-secondary-alt-hsl: 0, 0%, 8%;
  --background-secondary-blur: hsla(0, 0%, 13%, 80%);
  --background-secondary-blur-hsl: 0, 0%, 13%;
  --background-secondary-hsl: 0, 0%, 12%;
  --bases-cards-background: var(--background-primary, hsl(0, 0%, 18%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(0, 0%, 30%));
  --bases-embed-border-color: var(--background-modifier-border, hsl(0, 0%, 30%));
  --bases-group-heading-property-color: var(--text-muted, hsl(0, 0%, 86%));
  --bases-table-border-color: var(--table-border-color, hsl(0, 0%, 30%));
  --bases-table-cell-background-active: var(--background-secondary-alt, hsl(0, 0%, 8%));
  --bases-table-cell-background-disabled: var(--background-secondary, hsl(0, 0%, 12%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(267, 52%, 75%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(0, 0%, 30%));
  --bases-table-header-background: var(--background-secondary-alt, hsl(0, 0%, 8%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsla(271, 48%, 21%, 90%));
  --bases-table-header-color: var(--text-muted, hsl(0, 0%, 86%));
  --bases-table-summary-background: var(--background-primary, hsl(0, 0%, 18%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsla(271, 48%, 21%, 90%));
  --blockquote-background-color: hsl(var(--background-secondary-hsl));
  --blockquote-border-color: var(--window-border-color, hsl(0, 0%, 30%));
  --blur-intensity: 8px;
  --bodyFont: var(--font-text-theme, "Source Sans 3");
  --bold-color: var(--text-bold-color-dt, hsl(0, 0%, 91%));
  --button-radius: var(--input-radius, 4px);
  --callout-background-alpha: 20%;
  --callout-bug: var(--callout-bug, 251, 70, 76);
  --callout-default: var(--callout-default, 2, 122, 255);
  --callout-error: var(--callout-error, 251, 70, 76);
  --callout-example: var(--callout-example, 168, 130, 255);
  --callout-fail: var(--callout-fail, 251, 70, 76);
  --callout-info: var(--callout-info, 2, 122, 255);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 4px);
  --callout-question: var(--callout-question, 233, 151, 63);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-m, 8px);
  --callout-success: var(--callout-success, 68, 207, 110);
  --callout-summary: var(--callout-summary, 83, 223, 221);
  --callout-tip: var(--callout-tip, 83, 223, 221);
  --callout-todo: var(--callout-todo, 2, 122, 255);
  --callout-warning: var(--callout-warning, 233, 151, 63);
  --canvas-background: var(--background-primary, hsl(0, 0%, 18%));
  --canvas-background-color: var(--color-grey-base-hsl, 0, 0%, 16%);
  --canvas-card-label-color: var(--text-faint, hsl(0, 0%, 81%));
  --canvas-color: var(--color-grey-tint-hsl, 0, 0%, 40%);
  --canvas-dot-pattern: hsla(var(--background-primary-alt-hsl), 80%);
  --canvas-highlight-color: var(--color-grey-text-hsl, 0, 0%, 67%);
  --caret-color: var(--text-normal, hsl(0, 0%, 91%));
  --cg-nt-tbar-bg-color: var(--background-secondary, hsl(0, 0%, 12%));
  --cg-nt-tbar-top-sticky-pos-desktop: calc(var(--header-height)*-1 + 8px);
  --checkbox-border-color: var(--background-primary-alt, hsl(0, 0%, 30%));
  --checkbox-border-color-hover: var(--interactive-accent-tint, hsl(271, 43%, 51%));
  --checkbox-color: var(--background-primary, hsl(0, 0%, 18%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(271, 43%, 51%));
  --checkbox-margin-inline-start: var(--indentation-guide-editing-indent, 0.85em);
  --checkbox-marker-color: var(--highlight-text-normal, hsl(267, 52%, 75%));
  --checklist-done-color: var(--interactive-accent-tint, hsl(271, 43%, 51%));
  --code-background: var(--background-secondary-alt, hsl(0, 0%, 8%));
  --code-border-color: var(--background-modifier-border, hsl(0, 0%, 30%));
  --code-border-width: 1px;
  --code-bracket-background: var(--background-modifier-hover, hsla(271, 48%, 21%, 90%));
  --code-comment: var(--color-grey-text, hsl(0, 0%, 67%));
  --code-function: var(--color-yellow, hsl(44, 60%, 53%));
  --code-important: var(--color-orange, hsl(26, 85%, 63%));
  --code-keyword: var(--color-pink, hsl(330, 64%, 74%));
  --code-normal: var(--text-normal, hsl(0, 0%, 91%));
  --code-operator: var(--color-red, hsl(4, 74%, 74%));
  --code-property: var(--color-cyan, hsl(195, 69%, 58%));
  --code-punctuation: var(--text-muted, hsl(0, 0%, 86%));
  --code-string: var(--color-green, hsl(124, 48%, 54%));
  --code-tag: var(--color-red, hsl(4, 74%, 74%));
  --code-value: var(--color-purple, hsl(267, 52%, 75%));
  --collapse-icon-color: var(--text-faint, hsl(0, 0%, 81%));
  --collapse-icon-color-collapsed: var(--text-normal, hsl(0, 0%, 91%));
  --color-accent-base-dt: 2, 55%, 19%;
  --color-accent-base-lt: 2, 55%, 19%;
  --color-accent-text-dt: 4, 74%, 74%;
  --color-accent-text-lt: 4, 74%, 74%;
  --color-accent-tint-dt: 3, 49%, 46%;
  --color-accent-tint-lt: 3, 49%, 46%;
  --color-blue: hsl(225, 61%, 75%);
  --color-blue-base: hsl(225, 50%, 20%);
  --color-blue-base-hsl: 225, 50%, 20%;
  --color-blue-text: hsl(225, 61%, 75%);
  --color-blue-text-hsl: 225, 61%, 75%;
  --color-blue-tint: hsl(224, 44%, 49%);
  --color-blue-tint-hsl: 224, 44%, 49%;
  --color-cyan: hsl(195, 69%, 58%);
  --color-cyan-base: hsl(195, 65%, 13%);
  --color-cyan-base-hsl: 195, 65%, 13%;
  --color-cyan-text: hsl(195, 69%, 58%);
  --color-cyan-text-hsl: 195, 69%, 58%;
  --color-cyan-tint: hsl(195, 52%, 34%);
  --color-cyan-tint-hsl: 195, 52%, 34%;
  --color-green: hsl(124, 48%, 54%);
  --color-green-base: hsl(124, 54%, 12%);
  --color-green-base-hsl: 124, 54%, 12%;
  --color-green-text: hsl(124, 48%, 54%);
  --color-green-text-hsl: 124, 48%, 54%;
  --color-green-tint: hsl(123, 43%, 32%);
  --color-green-tint-hsl: 123, 43%, 32%;
  --color-grey-base: hsl(0, 0%, 16%);
  --color-grey-base-hsl: 0, 0%, 16%;
  --color-grey-text: hsl(0, 0%, 67%);
  --color-grey-text-hsl: 0, 0%, 67%;
  --color-grey-tint: hsl(0, 0%, 40%);
  --color-grey-tint-hsl: 0, 0%, 40%;
  --color-mint-base: hsl(165, 88%, 10%);
  --color-mint-base-hsl: 165, 88%, 10%;
  --color-mint-text: hsl(166, 67%, 45%);
  --color-mint-text-hsl: 166, 67%, 45%;
  --color-mint-tint: hsl(166, 73%, 26%);
  --color-mint-tint-hsl: 166, 73%, 26%;
  --color-orange: hsl(26, 85%, 63%);
  --color-orange-base: hsl(26, 65%, 15%);
  --color-orange-base-hsl: 26, 65%, 15%;
  --color-orange-text: hsl(26, 85%, 63%);
  --color-orange-text-hsl: 26, 85%, 63%;
  --color-orange-tint: hsl(27, 53%, 37%);
  --color-orange-tint-hsl: 27, 53%, 37%;
  --color-pink: hsl(330, 64%, 74%);
  --color-pink-base: hsl(325, 55%, 18%);
  --color-pink-base-hsl: 325, 55%, 18%;
  --color-pink-text: hsl(330, 64%, 74%);
  --color-pink-text-hsl: 330, 64%, 74%;
  --color-pink-tint: hsl(325, 47%, 45%);
  --color-pink-tint-hsl: 325, 47%, 45%;
  --color-purple: hsl(267, 52%, 75%);
  --color-purple-base: hsl(271, 48%, 21%);
  --color-purple-base-hsl: 271, 48%, 21%;
  --color-purple-text: hsl(267, 52%, 75%);
  --color-purple-text-hsl: 267, 52%, 75%;
  --color-purple-tint: hsl(271, 43%, 51%);
  --color-purple-tint-hsl: 271, 43%, 51%;
  --color-red: hsl(4, 74%, 74%);
  --color-red-base: hsl(2, 55%, 19%);
  --color-red-base-hsl: 2, 55%, 19%;
  --color-red-text: hsl(4, 74%, 74%);
  --color-red-text-hsl: 4, 74%, 74%;
  --color-red-tint: hsl(3, 49%, 46%);
  --color-red-tint-hsl: 3, 49%, 46%;
  --color-yellow: hsl(44, 60%, 53%);
  --color-yellow-base: hsl(43, 73%, 12%);
  --color-yellow-base-hsl: 43, 73%, 12%;
  --color-yellow-text: hsl(44, 60%, 53%);
  --color-yellow-text-hsl: 44, 60%, 53%;
  --color-yellow-tint: hsl(44, 59%, 31%);
  --color-yellow-tint-hsl: 44, 59%, 31%;
  --custom-vault-banner-icon-url: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'%0Awidth='40' height='40'%0AviewBox='0 0 40 40'%0Astyle=' fill:%23000000'%3E%3Cpath fill='%23dbb065' d='M1.5 35.5L1.5 4.5 11.793 4.5 14.793 7.5 35.5 7.5 35.5 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M11.586,5l2.707,2.707L14.586,8H15h20v27H2V5H11.586 M12,4H1v32h35V7H15L12,4L12,4z'%3E%3C/path%3E%3Cg%3E%3Cpath fill='%23f5ce85' d='M1.599 35.5L5.417 14.5 16.151 14.5 19.151 12.5 39.41 12.5 35.577 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M38.82,13l-3.667,22H2.198l3.636-20H16h0.303l0.252-0.168L19.303,13H38.82 M40,12H19l-3,2H5L1,36 h35L40,12L40,12z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  --dark: var(--text-normal, var(--color-base-100, hsl(0, 0%, 91%)));
  --darkgray: var(--text-normal, var(--color-base-100, hsl(0, 0%, 91%)));
  --divider-color: var(--background-modifier-border, hsl(0, 0%, 30%));
  --divider-color-hover: var(--interactive-accent-tint, hsl(271, 43%, 51%));
  --drag-ghost-text-color: var(--text-normal, hsl(0, 0%, 91%));
  --dropdown-background: var(--interactive-normal, hsl(0, 0%, 12%));
  --dropdown-background-hover: var(--interactive-hover, hsl(0, 0%, 18%));
  --embed-border-bottom: 1px solid var(--window-border-color);
  --embed-border-end: 1px solid var(--window-border-color);
  --embed-border-top: 1px solid var(--window-border-color);
  --embed-max-height: 800px;
  --embed-padding: var(--size-4-2) var(--size-4-4, 8px 16px);
  --fade-away-delay: 850ms;
  --fade-away-opacity: 0.25;
  --file-folding-offset: 20px;
  --file-header-background: var(--background-primary, hsl(0, 0%, 18%));
  --file-header-background-focused: var(--background-primary, hsl(0, 0%, 18%));
  --file-header-font: var(--font-interface, "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-medium, 15px);
  --flair-background: var(--interactive-normal, hsl(0, 0%, 12%));
  --flair-color: var(--text-normal, hsl(0, 0%, 91%));
  --font-interface-theme: "Source Sans 3";
  --font-mermaid: var(--font-text, "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: "JetBrains Mono";
  --font-text-theme: "Source Sans 3";
  --footnote-divider-color: var(--metadata-divider-color, hsl(0, 0%, 30%));
  --footnote-id-color: var(--text-muted, hsl(0, 0%, 86%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(0, 0%, 81%));
  --footnote-input-background-active: var(--metadata-input-background-active, hsl(0, 0%, 12%));
  --graph-attachment-color-dt: var(--color-yellow-text, hsl(44, 60%, 53%));
  --graph-controls-width: 150px;
  --graph-fill-color-dt: var(--color-grey-text, hsl(0, 0%, 67%));
  --graph-fill-focused-color-dt: var(--interactive-accent-text, hsl(267, 52%, 75%));
  --graph-line: var(--graph-line-color-dt, hsl(0, 0%, 30%));
  --graph-line-color-dt: var(--background-primary-alt, hsl(0, 0%, 30%));
  --graph-node: var(--graph-fill-color-dt, hsl(0, 0%, 67%));
  --graph-node-attachment: var(--graph-attachment-color-dt, hsl(44, 60%, 53%));
  --graph-node-focused: var(--graph-fill-focused-color-dt, hsl(267, 52%, 75%));
  --graph-node-tag: var(--graph-tag-color-dt, hsl(225, 61%, 75%));
  --graph-node-unresolved: var(--graph-unresolved-color-dt, hsl(4, 74%, 74%));
  --graph-tag-color-dt: var(--color-blue-text, hsl(225, 61%, 75%));
  --graph-text: var(--text-normal, hsl(0, 0%, 91%));
  --graph-unresolved-color-dt: var(--color-red-text, hsl(4, 74%, 74%));
  --gray: var(--text-muted, var(--color-base-70, hsl(0, 0%, 86%)));
  --h1-color: var(--h1-text-color-dt, hsl(0, 0%, 91%));
  --h1-line-height: 1.3;
  --h1-size: 2.2em;
  --h1-text-color-dt: var(--text-normal, hsl(0, 0%, 91%));
  --h1-weight: var(--font-extrabold, 800);
  --h2-color: var(--h2-text-color-dt, hsl(0, 0%, 91%));
  --h2-line-height: 1.3;
  --h2-size: 2em;
  --h2-text-color-dt: var(--text-normal, hsl(0, 0%, 91%));
  --h2-weight: var(--font-extrabold, 800);
  --h3-color: var(--h3-text-color-dt, hsl(0, 0%, 91%));
  --h3-line-height: 1.35;
  --h3-size: 1.8em;
  --h3-text-color-dt: var(--text-normal, hsl(0, 0%, 91%));
  --h3-weight: var(--font-extrabold, 800);
  --h4-color: var(--h4-text-color-dt, hsl(0, 0%, 91%));
  --h4-size: 1.6em;
  --h4-text-color-dt: var(--text-normal, hsl(0, 0%, 91%));
  --h4-weight: var(--font-extrabold, 800);
  --h5-color: var(--h5-text-color-dt, hsl(0, 0%, 91%));
  --h5-size: 1.4em;
  --h5-text-color-dt: var(--text-normal, hsl(0, 0%, 91%));
  --h5-weight: var(--font-extrabold, 800);
  --h6-color: var(--h6-text-color-dt, hsl(0, 0%, 91%));
  --h6-size: 1.2em;
  --h6-text-color-dt: var(--text-normal, hsl(0, 0%, 91%));
  --h6-weight: var(--font-extrabold, 800);
  --header-height: 41px;
  --headerFont: var(--font-text-theme, "Source Sans 3");
  --heading-formatting: var(--text-faint, hsl(0, 0%, 81%));
  --highlight-text-normal: var(--interactive-accent-text, hsl(267, 52%, 75%));
  --hr-color: var(--background-modifier-border, hsl(0, 0%, 30%));
  --icon-color: var(--highlight-text-normal, hsl(0, 0%, 86%));
  --icon-color-active: var(--text-accent, hsl(271, 43%, 51%));
  --icon-color-focused: var(--interactive-accent-text, hsl(267, 52%, 75%));
  --icon-color-hover: var(--highlight-text-normal, hsl(267, 52%, 75%));
  --indentation-guide-color: hsla(var(--background-primary-alt-hsl), 80%);
  --indentation-guide-color-active: var(--interactive-accent-tint, hsl(271, 43%, 51%));
  --indentation-guide-reading-indent: -0.55em;
  --indentation-guide-source-indent: 0.85em;
  --inline-title-line-height: var(--h1-line-height, 1.3);
  --inline-title-size: var(--h1-size, 2.2em);
  --inline-title-weight: var(--h1-weight, 800);
  --input-date-separator: var(--text-faint, hsl(0, 0%, 81%));
  --input-height: 32px;
  --input-placeholder-color: var(--text-faint, hsl(0, 0%, 81%));
  --input-radius: var(--radius-s, 4px);
  --interactive-accent: var(--color-accent, hsl(271, 43%, 51%));
  --interactive-accent-base: var(--color-purple-base, hsl(271, 48%, 21%));
  --interactive-accent-base-hsl: var(--color-purple-base-hsl, 271, 48%, 21%);
  --interactive-accent-hover: var(--color-purple-tint, hsl(271, 43%, 51%));
  --interactive-accent-hsl: var(--color-accent-hsl, 267, 52%, 75%);
  --interactive-accent-text: var(--color-purple-text, hsl(267, 52%, 75%));
  --interactive-accent-text-hsl: var(--color-purple-text-hsl, 267, 52%, 75%);
  --interactive-accent-tint: var(--color-purple-tint, hsl(271, 43%, 51%));
  --interactive-accent-tint-hsl: var(--color-purple-tint-hsl, 271, 43%, 51%);
  --interactive-hover: var(--color-base-35, hsl(0, 0%, 18%));
  --interactive-normal: var(--background-secondary, hsl(0, 0%, 12%));
  --italic-color: var(--text-italic-color-dt, hsl(0, 0%, 91%));
  --light: var(--background-primary, var(--color-base-00, hsl(0, 0%, 18%)));
  --lightgray: var(--background-secondary, var(--color-base-20, hsl(0, 0%, 12%)));
  --link-color: hsl(var(--link-internal-color-dt));
  --link-color-hover: hsla(var(--link-internal-color-dt), 60%);
  --link-external-color: hsl(var(--link-external-color-dt));
  --link-external-color-dt: var(--interactive-accent-text-hsl, 267, 52%, 75%);
  --link-external-color-hover: hsla(var(--link-external-color-dt), 60%);
  --link-internal-color-dt: var(--interactive-accent-text-hsl, 267, 52%, 75%);
  --link-unresolved-color: hsl(var(--link-internal-color-dt));
  --list-bullet-end-padding: 3rem;
  --list-indent-source: 0.75em;
  --list-marker-color: var(--text-faint, hsl(0, 0%, 81%));
  --list-marker-color-collapsed: var(--text-accent, hsl(271, 43%, 51%));
  --list-marker-color-hover: var(--text-muted, hsl(0, 0%, 86%));
  --mark-highlight-base: var(--color-yellow-base, hsl(43, 73%, 12%));
  --menu-background: var(--background-secondary, hsl(0, 0%, 12%));
  --menu-border-color: var(--background-modifier-border-hover, hsl(271, 43%, 51%));
  --menu-shadow: var(--shadow-s, hsla(0, 0%, 0%, 10%) 0 1px 2px 0);
  --metadata-border-color: var(--background-modifier-border, hsl(0, 0%, 30%));
  --metadata-divider-color: var(--background-modifier-border, hsl(0, 0%, 30%));
  --metadata-gap: var(--size-2-1, 2px);
  --metadata-input-background-active: var(--background-secondary, hsl(0, 0%, 12%));
  --metadata-input-font: var(--font-interface, "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, hsl(0, 0%, 91%));
  --metadata-label-background-active: var(--background-secondary, hsl(0, 0%, 12%));
  --metadata-label-font: var(--font-interface, "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsl(0, 0%, 86%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(0, 0%, 86%));
  --metadata-property-background-active: var(--background-modifier-hover, hsla(271, 48%, 21%, 90%));
  --modal-background: var(--background-secondary-alt, hsl(0, 0%, 8%));
  --modal-border-color: var(--window-border-color, hsl(0, 0%, 30%));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(0, 0%, 81%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(0, 0%, 81%));
  --nav-header-padding-bottom: 40px;
  --nav-heading-color: var(--text-normal, hsl(0, 0%, 91%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(0, 0%, 81%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(0, 0%, 86%));
  --nav-heading-color-hover: var(--text-normal, hsl(0, 0%, 91%));
  --nav-indentation-guide-color: var(--indentation-guide-color, hsla(0, 0%, 30%, 80%));
  --nav-item-background-active: var(--background-modifier-hover, hsla(271, 48%, 21%, 90%));
  --nav-item-background-hover: var(--background-modifier-hover, hsla(271, 48%, 21%, 90%));
  --nav-item-children-margin-left: 13px;
  --nav-item-color: var(--text-muted, hsl(0, 0%, 86%));
  --nav-item-color-active: var(--text-normal, hsl(0, 0%, 91%));
  --nav-item-color-highlighted: var(--text-accent, hsl(271, 43%, 51%));
  --nav-item-color-hover: var(--highlight-text-normal, hsl(267, 52%, 75%));
  --nav-item-color-selected: var(--text-normal, hsl(0, 0%, 91%));
  --nav-item-padding: var(--size-2-1) var(--size-4-2) var(--size-2-1) var(--size-4-6, 2px 8px 2px 24px);
  --nav-item-parent-padding: var(--nav-item-padding, 2px 8px 2px 24px);
  --nav-tag-color: var(--text-faint, hsl(0, 0%, 81%));
  --nav-tag-color-active: var(--text-muted, hsl(0, 0%, 86%));
  --nav-tag-color-hover: var(--text-muted, hsl(0, 0%, 86%));
  --p-spacing: 0.5em;
  --pdf-background: var(--background-secondary-alt, hsl(0, 0%, 8%));
  --pdf-page-background: var(--background-primary, hsl(0, 0%, 18%));
  --pdf-sidebar-background: var(--background-secondary-alt, hsl(0, 0%, 8%));
  --pill-border-color: var(--background-modifier-border, hsl(0, 0%, 30%));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(271, 43%, 51%));
  --pill-color: var(--text-muted, hsl(0, 0%, 86%));
  --pill-color-hover: var(--text-normal, hsl(0, 0%, 91%));
  --pill-color-remove: var(--text-faint, hsl(0, 0%, 81%));
  --pill-color-remove-hover: var(--text-accent, hsl(271, 43%, 51%));
  --pill-radius: var(--radius-s, 4px);
  --prompt-background: var(--background-primary, hsl(0, 0%, 18%));
  --prompt-border-color: var(--window-border-color, hsl(0, 0%, 30%));
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(0, 0%, 12%) 65%, transparent) linear-gradient(hsl(0, 0%, 12%), color-mix(in srgb, hsl(0, 0%, 12%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(0, 0%, 12%));
  --ribbon-background-collapsed: var(--background-secondary, hsl(0, 0%, 12%));
  --scroll-bar-size: 12px;
  --scroll-button-background-color: hsl(0, 0%, 18%);
  --scrollbar-active-thumb-bg: var(--interactive-accent-base, hsl(271, 48%, 21%));
  --scrollbar-bg: var(--background-secondary, hsl(0, 0%, 12%));
  --scrollbar-thumb-bg: var(--background-primary-alt, hsl(0, 0%, 30%));
  --search-clear-button-color: var(--text-muted, hsl(0, 0%, 86%));
  --search-icon-color: var(--text-muted, hsl(0, 0%, 86%));
  --search-result-background: var(--background-primary, hsl(0, 0%, 18%));
  --secondary: var(--text-accent, var(--interactive-accent-text, hsl(271, 43%, 51%)));
  --setting-group-heading-color: var(--text-normal, hsl(0, 0%, 91%));
  --setting-items-background: var(--background-secondary-alt, hsl(0, 0%, 8%));
  --setting-items-border-color: var(--background-modifier-border, hsl(0, 0%, 30%));
  --setting-items-padding: var(--size-4-2, 8px);
  --shadow-color-hsl: 0, 0%, 0%;
  --shadow-l: hsla(var(--shadow-color-hsl), 5%) 0 1px 2px, hsla(var(--shadow-color-hsl), 5%) 0 2px 4px,
  	hsla(var(--shadow-color-hsl), 5%) 0 4px 8px, hsla(var(--shadow-color-hsl), 5%) 0 6px 12px;
  --shadow-s: hsla(var(--shadow-color-hsl), 10%) 0 1px 2px 0;
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(0, 0%, 86%));
  --shiki-code-background: var(--code-background, hsl(0, 0%, 8%));
  --shiki-code-block-spacing: var(--p-spacing, 0.5em);
  --shiki-code-comment: var(--text-faint, hsl(0, 0%, 81%));
  --shiki-code-function: var(--color-green, hsl(124, 48%, 54%));
  --shiki-code-important: var(--color-orange, hsl(26, 85%, 63%));
  --shiki-code-keyword: var(--color-pink, hsl(330, 64%, 74%));
  --shiki-code-normal: var(--text-muted, hsl(0, 0%, 86%));
  --shiki-code-property: var(--color-cyan, hsl(195, 69%, 58%));
  --shiki-code-punctuation: var(--text-muted, hsl(0, 0%, 86%));
  --shiki-code-string: var(--color-yellow, hsl(44, 60%, 53%));
  --shiki-code-value: var(--color-purple, hsl(267, 52%, 75%));
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(0, 0%, 30%));
  --shiki-gutter-text-color: var(--text-faint, hsl(0, 0%, 81%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(0, 0%, 86%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(0, 0%, 86%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(0, 0%, 81%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(271, 43%, 51%));
  --slider-thumb-radius: var(--size-4-1, 4px);
  --slider-thumb-width: 10px;
  --slider-track-background: var(--background-modifier-border, hsl(0, 0%, 30%));
  --status-bar-background: var(--background-secondary, hsl(0, 0%, 12%));
  --status-bar-background-color-dt: #2b2b2b;
  --status-bar-background-color-lt: #ebecef;
  --status-bar-border-color: var(--divider-color, hsl(0, 0%, 30%));
  --status-bar-font-size: var(--font-ui-small, 13px);
  --status-bar-text-color: var(--text-muted, hsl(0, 0%, 86%));
  --strikethrough-line-color: var(--strikethrough-line-color-dt, hsl(0, 0%, 86%));
  --strikethrough-line-color-dt: var(--text-muted, hsl(0, 0%, 86%));
  --strikethrough-text-color: var(--strikethrough-text-color-dt, hsl(0, 0%, 86%));
  --strikethrough-text-color-dt: var(--text-muted, hsl(0, 0%, 86%));
  --suggestion-background: var(--background-primary, hsl(0, 0%, 18%));
  --sync-avatar-color-1: var(--color-red, hsl(4, 74%, 74%));
  --sync-avatar-color-2: var(--color-orange, hsl(26, 85%, 63%));
  --sync-avatar-color-3: var(--color-yellow, hsl(44, 60%, 53%));
  --sync-avatar-color-4: var(--color-green, hsl(124, 48%, 54%));
  --sync-avatar-color-5: var(--color-cyan, hsl(195, 69%, 58%));
  --sync-avatar-color-6: var(--color-blue, hsl(225, 61%, 75%));
  --sync-avatar-color-7: var(--color-purple, hsl(267, 52%, 75%));
  --sync-avatar-color-8: var(--color-pink, hsl(330, 64%, 74%));
  --tab-background-active: var(--background-primary, hsl(0, 0%, 18%));
  --tab-container-background: var(--background-secondary, hsl(0, 0%, 12%));
  --tab-divider-color: var(--background-modifier-border-hover, hsl(271, 43%, 51%));
  --tab-outline-color: var(--divider-color, hsl(0, 0%, 30%));
  --tab-radius-active: var(--radius-m, 8px);
  --tab-stacked-font-size: var(--font-ui-medium, 15px);
  --tab-stacked-header-width: var(--header-height, 41px);
  --tab-stacked-shadow: 0;
  --tab-switcher-background: var(--background-secondary, hsl(0, 0%, 12%));
  --tab-text-color: var(--text-faint, hsl(0, 0%, 81%));
  --tab-text-color-active: var(--text-muted, hsl(0, 0%, 86%));
  --tab-text-color-focused: var(--text-muted, hsl(0, 0%, 86%));
  --tab-text-color-focused-active: var(--text-muted, hsl(0, 0%, 86%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(0, 0%, 91%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(271, 43%, 51%));
  --table-add-button-border-color: var(--background-modifier-border, hsl(0, 0%, 30%));
  --table-border-color: var(--background-modifier-border, hsl(0, 0%, 30%));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(271, 43%, 51%));
  --table-drag-handle-color: var(--text-faint, hsl(0, 0%, 81%));
  --table-drag-handle-color-active: var(--text-on-accent, hsl(267, 52%, 75%));
  --table-header-border-color: var(--table-border-color, hsl(0, 0%, 30%));
  --table-header-color: var(--text-normal, hsl(0, 0%, 91%));
  --table-selection-border-color: var(--interactive-accent, hsl(271, 43%, 51%));
  --tag-border-width: 2px;
  --tag-color: var(--text-accent, hsl(271, 43%, 51%));
  --tag-color-hover: var(--text-accent, hsl(271, 43%, 51%));
  --tag-padding-x: 0.75ch;
  --tag-padding-y: 0;
  --tag-radius: var(--radius-s, 4px);
  --tag-size: var(--font-smallest, 0.8em);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(271, 43%, 51%)));
  --text-accent: var(--interactive-accent-text, hsl(271, 43%, 51%));
  --text-accent-hover: var(--color-accent-2, hsl(271, 43%, 51%));
  --text-bold-color-dt: var(--text-normal, hsl(0, 0%, 91%));
  --text-error: var(--color-red-text, hsl(4, 74%, 74%));
  --text-faint: var(--color-base-50, hsl(0, 0%, 81%));
  --text-faint-hsl: 0, 0%, 81%;
  --text-italic-bold-color-dt: var(--text-normal, hsl(0, 0%, 91%));
  --text-italic-color-dt: var(--text-normal, hsl(0, 0%, 91%));
  --text-muted: var(--color-base-70, hsl(0, 0%, 86%));
  --text-muted-hsl: 0, 0%, 86%;
  --text-normal: var(--color-base-100, hsl(0, 0%, 91%));
  --text-normal-hsl: 0, 0%, 91%;
  --text-on-accent: var(--highlight-text-normal, hsl(267, 52%, 75%));
  --text-on-accent-inverted: var(--text-normal, hsl(0, 0%, 91%));
  --text-success: var(--color-green, hsl(124, 48%, 54%));
  --text-warning: var(--color-orange, hsl(26, 85%, 63%));
  --titleFont: var(--font-text-theme, "Source Sans 3");
  --titlebar-background: var(--background-secondary, hsl(0, 0%, 12%));
  --titlebar-background-focused: var(--background-secondary, hsl(0, 0%, 12%));
  --titlebar-border-color: var(--background-modifier-border, hsl(0, 0%, 30%));
  --titlebar-text-color: var(--text-muted, hsl(0, 0%, 86%));
  --titlebar-text-color-focused: var(--text-normal, hsl(0, 0%, 91%));
  --toggle-radius: var(--size-4-1, 4px);
  --toggle-s-border-width: 1px;
  --toggle-s-thumb-height: 18px;
  --toggle-s-thumb-width: 18px;
  --toggle-s-width: 44px;
  --toggle-thumb-color: var(--text-normal, hsl(0, 0%, 91%));
  --toggle-thumb-height: 20px;
  --toggle-thumb-radius: 3px;
  --toggle-thumb-width: 20px;
  --toggle-width: 42px;
  --traffic-lights-offset-x: var(--header-height, 41px);
  --traffic-lights-offset-y: var(--header-height, 41px);
  --underline-line-color: var(--underline-line-color-dt, hsl(0, 0%, 91%));
  --underline-line-color-dt: var(--text-normal, hsl(0, 0%, 91%));
  --underline-text-color: var(--underline-text-color-dt, hsl(0, 0%, 91%));
  --underline-text-color-dt: var(--text-normal, hsl(0, 0%, 91%));
  --vault-name-font-size: var(--font-ui-medium, 15px);
  --vault-profile-color: var(--text-normal, hsl(0, 0%, 91%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(0, 0%, 91%));
  --vault-profile-font-size: var(--font-ui-medium, 15px);
  --window-border: 1px solid var(--window-border-color);
  --window-border-color: var(--background-primary-alt, hsl(0, 0%, 30%));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(0, 0%, 12%));
  background-color: var(--background-modifier-hover, rgb(31, 31, 31));
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-secondary-alt, rgb(20, 20, 20));
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary-alt, rgb(20, 20, 20));
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(0, 0%, 12%));
  background-color: var(--background-modifier-hover, rgb(31, 31, 31));
  border-left-color: rgb(77, 77, 77);
  color: rgb(232, 232, 232);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(232, 232, 232));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(232, 232, 232));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(232, 232, 232));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--text-italic-bold-color-dt, rgb(232, 232, 232));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(232, 232, 232));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(54, 28, 79));
  color: var(--text-normal, rgb(232, 232, 232));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body del {
  color: var(--strikethrough-text-color-dt, rgb(219, 219, 219));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 219, 219) none 0px;
  text-decoration: line-through 2px rgb(219, 219, 219);
  text-decoration-color: var(--strikethrough-line-color-dt, rgb(219, 219, 219));
  text-decoration-thickness: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(77, 77, 77);
  border-width: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(46, 46, 46));
  border-color: rgb(132, 76, 184);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(219, 219, 219));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 219, 219) none 0px;
  text-decoration-color: rgb(219, 219, 219);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(188, 158, 224));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 158, 224) none 0px;
  text-decoration-color: rgb(188, 158, 224);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(188, 158, 224));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 158, 224) none 0px;
  text-decoration-color: rgb(188, 158, 224);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(188, 158, 224));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 158, 224) none 0px;
  text-decoration: underline rgba(188, 158, 224, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(188, 158, 224, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(232, 232, 232);
  margin-left: 24px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(232, 232, 232);
  margin-left: 24px;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(207, 207, 207));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(31, 31, 31));
  color: var(--blockquote-color, rgb(232, 232, 232));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body table {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: var(--heading-spacing, 8px);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: var(--table-text-color, rgb(232, 232, 232));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: var(--table-header-color, rgb(232, 232, 232));
  font-weight: var(--font-semibold, 600);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(20, 20, 20));
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-width: 1px;
  color: var(--code-normal, rgb(232, 232, 232));
  font-family: var(--font-monospace, "??", "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(20, 20, 20));
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(0, 0%, 8%));
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(77, 77, 77));
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: var(--text-muted, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(132, 76, 184);
  border-right-color: rgb(77, 77, 77);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: hsla(var(--canvas-background-color), 20%);
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-style: solid;
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-right-style: solid;
  border-top-color: rgb(232, 232, 232);
  border-top-style: solid;
  color: rgb(232, 232, 232);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-width: 2px;
  border-left-color: rgb(77, 77, 77);
  border-left-width: 2px;
  border-right-color: rgb(77, 77, 77);
  border-right-width: 2px;
  border-top-color: rgb(77, 77, 77);
  border-top-width: 2px;
  margin-left: -18.4px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(132, 76, 184);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(132, 76, 184);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(188, 158, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(188, 158, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(241, 150, 80);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 169, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 185, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 172, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 146, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 146, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 146, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 146, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 172, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 169, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 169, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(188, 158, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(238, 146, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(81, 194, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(81, 194, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(81, 194, 89);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(232, 232, 232);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-cyan-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-cyan-text, rgb(232, 232, 232));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(232, 232, 232);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(232, 232, 232);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-red-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-red-text, rgb(232, 232, 232));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(232, 232, 232);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(232, 232, 232);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-red-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-red-text, rgb(232, 232, 232));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(232, 232, 232);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-blue-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-blue-text, rgb(232, 232, 232));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(232, 232, 232);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(232, 232, 232);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="note-toolbar"] {
  --background-modifier-active-hover: hsla(267, 52%, 75%, 0.1);
  --background-modifier-border: hsl(0, 0%, 30%);
  --background-modifier-border-focus: hsl(271, 43%, 51%);
  --background-modifier-border-hover: hsl(271, 43%, 51%);
  --background-modifier-error: hsl(4, 74%, 74%);
  --background-modifier-error-hover: hsl(4, 74%, 74%);
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: hsl(0, 0%, 8%);
  --background-modifier-form-field-hover: hsl(0, 0%, 8%);
  --background-modifier-hover: hsla(271, 48%, 21%, 90%);
  --background-modifier-success: hsl(124, 48%, 54%);
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(0, 0%, 18%);
  --background-primary-alt: hsl(0, 0%, 30%);
  --background-secondary: hsl(0, 0%, 12%);
  --background-secondary-alt: hsl(0, 0%, 8%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-background-color: hsl(0, 0%, 12%);
  --blockquote-border-color: hsl(0, 0%, 30%);
  --blur-background: color-mix(in srgb, hsl(0, 0%, 12%) 65%, transparent) linear-gradient(hsl(0, 0%, 12%), color-mix(in srgb, hsl(0, 0%, 12%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(0, 0%, 91%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 4px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 4px;
  --callout-question: 233, 151, 63;
  --callout-radius: 8px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(0, 0%, 18%);
  --canvas-background-color: 0, 0%, 16%;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: hsla(0, 0%, 30%, 80%);
  --canvas-highlight-color: 0, 0%, 67%;
  --caret-color: hsl(0, 0%, 91%);
  --cg-nt-tbar-bg-color: hsl(0, 0%, 12%);
  --cg-nt-tbar-top-sticky-pos-desktop: -33px;
  --checkbox-border-color: hsl(0, 0%, 30%);
  --checkbox-border-color-hover: hsl(271, 43%, 51%);
  --checkbox-color: hsl(0, 0%, 18%);
  --checkbox-color-hover: hsl(271, 43%, 51%);
  --checkbox-margin-inline-start: 0.85em;
  --checkbox-marker-color: hsl(267, 52%, 75%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(271, 43%, 51%);
  --clickable-icon-radius: 4px;
  --code-background: hsl(0, 0%, 8%);
  --code-border-color: hsl(0, 0%, 30%);
  --code-bracket-background: hsla(271, 48%, 21%, 90%);
  --code-comment: hsl(0, 0%, 67%);
  --code-function: hsl(44, 60%, 53%);
  --code-important: hsl(26, 85%, 63%);
  --code-keyword: hsl(330, 64%, 74%);
  --code-normal: hsl(0, 0%, 91%);
  --code-operator: hsl(4, 74%, 74%);
  --code-property: hsl(195, 69%, 58%);
  --code-punctuation: hsl(0, 0%, 86%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: hsl(124, 48%, 54%);
  --code-tag: hsl(4, 74%, 74%);
  --code-value: hsl(267, 52%, 75%);
  --collapse-icon-color: hsl(0, 0%, 81%);
  --collapse-icon-color-collapsed: hsl(0, 0%, 91%);
  --color-accent: hsl(267, 52%, 75%);
  --color-accent-1: hsl(271, 43%, 51%);
  --color-accent-2: hsl(271, 48%, 21%);
  --color-accent-hsl: 267, 52%, 75%;
  --divider-color: hsl(0, 0%, 30%);
  --divider-color-hover: hsl(271, 43%, 51%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(0, 0%, 12%);
  --dropdown-background-hover: hsl(0, 0%, 18%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(0, 0%, 12%);
  --flair-color: hsl(0, 0%, 91%);
  --font-interface: '??', "Source Sans 3", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', "Source Sans 3", 'Arial';
  --font-text: '??', "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-attachment-color-dt: hsl(44, 60%, 53%);
  --graph-fill-color-dt: hsl(0, 0%, 67%);
  --graph-fill-focused-color-dt: hsl(267, 52%, 75%);
  --graph-line: hsl(0, 0%, 30%);
  --graph-line-color-dt: hsl(0, 0%, 30%);
  --graph-node: hsl(0, 0%, 67%);
  --graph-node-attachment: hsl(44, 60%, 53%);
  --graph-node-focused: hsl(267, 52%, 75%);
  --graph-node-tag: hsl(225, 61%, 75%);
  --graph-node-unresolved: hsl(4, 74%, 74%);
  --graph-tag-color-dt: hsl(225, 61%, 75%);
  --graph-text: hsl(0, 0%, 91%);
  --graph-unresolved-color-dt: hsl(4, 74%, 74%);
  --h1-color: hsl(0, 0%, 91%);
  --h1-text-color-dt: hsl(0, 0%, 91%);
  --h1-weight: 800;
  --h2-color: hsl(0, 0%, 91%);
  --h2-text-color-dt: hsl(0, 0%, 91%);
  --h2-weight: 800;
  --h3-color: hsl(0, 0%, 91%);
  --h3-text-color-dt: hsl(0, 0%, 91%);
  --h3-weight: 800;
  --h4-color: hsl(0, 0%, 91%);
  --h4-text-color-dt: hsl(0, 0%, 91%);
  --h4-weight: 800;
  --h5-color: hsl(0, 0%, 91%);
  --h5-line-height: 1.5;
  --h5-text-color-dt: hsl(0, 0%, 91%);
  --h5-weight: 800;
  --h6-color: hsl(0, 0%, 91%);
  --h6-line-height: 1.5;
  --h6-text-color-dt: hsl(0, 0%, 91%);
  --h6-weight: 800;
  --heading-formatting: hsl(0, 0%, 81%);
  --heading-spacing: 1.25em;
  --highlight-text-normal: hsl(267, 52%, 75%);
  --hr-color: hsl(0, 0%, 30%);
  --interactive-accent: hsl(271, 43%, 51%);
  --interactive-accent-base: hsl(271, 48%, 21%);
  --interactive-accent-base-hsl: 271, 48%, 21%;
  --interactive-accent-hover: hsl(271, 43%, 51%);
  --interactive-accent-hsl: 267, 52%, 75%;
  --interactive-accent-text: hsl(267, 52%, 75%);
  --interactive-accent-text-hsl: 267, 52%, 75%;
  --interactive-accent-tint: hsl(271, 43%, 51%);
  --interactive-accent-tint-hsl: 271, 43%, 51%;
  --interactive-hover: hsl(0, 0%, 18%);
  --interactive-normal: hsl(0, 0%, 12%);
  --italic-color: hsl(0, 0%, 91%);
  --link-color: hsl(267, 52%, 75%);
  --link-color-hover: hsla(267, 52%, 75%, 60%);
  --link-external-color: hsl(267, 52%, 75%);
  --link-external-color-dt: 267, 52%, 75%;
  --link-external-color-hover: hsla(267, 52%, 75%, 60%);
  --link-internal-color-dt: 267, 52%, 75%;
  --link-unresolved-color: hsl(267, 52%, 75%);
  --link-unresolved-decoration-color: hsla(267, 52%, 75%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mark-highlight-base: hsl(43, 73%, 12%);
  --menu-background: hsl(0, 0%, 12%);
  --menu-border-color: hsl(271, 43%, 51%);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: hsla(0, 0%, 0%, 10%) 0 1px 2px 0;
  --pdf-background: hsl(0, 0%, 8%);
  --pdf-page-background: hsl(0, 0%, 18%);
  --pdf-shadow: 0 0 0 1px hsl(0, 0%, 30%);
  --pdf-sidebar-background: hsl(0, 0%, 8%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(0, 0%, 30%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(0, 0%, 12%) 65%, transparent) linear-gradient(hsl(0, 0%, 12%), color-mix(in srgb, hsl(0, 0%, 12%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(271, 48%, 21%);
  --scrollbar-bg: hsl(0, 0%, 12%);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsl(0, 0%, 30%);
  --search-clear-button-color: hsl(0, 0%, 86%);
  --search-icon-color: hsl(0, 0%, 86%);
  --search-result-background: hsl(0, 0%, 18%);
  --setting-group-heading-color: hsl(0, 0%, 91%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(0, 0%, 8%);
  --setting-items-border-color: hsl(0, 0%, 30%);
  --setting-items-padding: 8px;
  --shadow-l: hsla(0, 0%, 0%, 5%) 0 1px 2px, hsla(0, 0%, 0%, 5%) 0 2px 4px,
  	hsla(0, 0%, 0%, 5%) 0 4px 8px, hsla(0, 0%, 0%, 5%) 0 6px 12px;
  --shadow-s: hsla(0, 0%, 0%, 10%) 0 1px 2px 0;
  --shiki-active-tab-border-color: hsl(0, 0%, 86%);
  --shiki-code-background: hsl(0, 0%, 8%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 0.5em;
  --shiki-code-comment: hsl(0, 0%, 81%);
  --shiki-code-function: hsl(124, 48%, 54%);
  --shiki-code-important: hsl(26, 85%, 63%);
  --shiki-code-keyword: hsl(330, 64%, 74%);
  --shiki-code-normal: hsl(0, 0%, 86%);
  --shiki-code-property: hsl(195, 69%, 58%);
  --shiki-code-punctuation: hsl(0, 0%, 86%);
  --shiki-code-string: hsl(44, 60%, 53%);
  --shiki-code-value: hsl(267, 52%, 75%);
  --shiki-gutter-border-color: hsl(0, 0%, 30%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(0, 0%, 81%);
  --shiki-gutter-text-color-highlight: hsl(0, 0%, 86%);
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: hsl(0, 0%, 86%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(0, 0%, 81%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --strikethrough-line-color: hsl(0, 0%, 86%);
  --strikethrough-line-color-dt: hsl(0, 0%, 86%);
  --strikethrough-text-color: hsl(0, 0%, 86%);
  --strikethrough-text-color-dt: hsl(0, 0%, 86%);
  --suggestion-background: hsl(0, 0%, 18%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: hsl(4, 74%, 74%);
  --sync-avatar-color-2: hsl(26, 85%, 63%);
  --sync-avatar-color-3: hsl(44, 60%, 53%);
  --sync-avatar-color-4: hsl(124, 48%, 54%);
  --sync-avatar-color-5: hsl(195, 69%, 58%);
  --sync-avatar-color-6: hsl(225, 61%, 75%);
  --sync-avatar-color-7: hsl(267, 52%, 75%);
  --sync-avatar-color-8: hsl(330, 64%, 74%);
  --tab-background-active: hsl(0, 0%, 18%);
  --tab-divider-color: hsl(271, 43%, 51%);
  --tab-font-size: 13px;
  --tab-outline-color: hsl(0, 0%, 30%);
  --tab-radius: 4px;
  --tab-radius-active: 8px;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 41px;
  --tab-switcher-background: hsl(0, 0%, 12%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 12%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(267, 52%, 75%);
  --tab-text-color: hsl(0, 0%, 81%);
  --tab-text-color-active: hsl(0, 0%, 86%);
  --tab-text-color-focused: hsl(0, 0%, 86%);
  --tab-text-color-focused-active: hsl(0, 0%, 86%);
  --tab-text-color-focused-active-current: hsl(0, 0%, 91%);
  --tab-text-color-focused-highlighted: hsl(271, 43%, 51%);
  --table-add-button-border-color: hsl(0, 0%, 30%);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(271, 43%, 51%);
  --table-drag-handle-color: hsl(0, 0%, 81%);
  --table-drag-handle-color-active: hsl(267, 52%, 75%);
  --table-header-background: transparent;
  --table-header-border-color: hsl(0, 0%, 30%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(0, 0%, 91%);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(267, 52%, 75%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(271, 43%, 51%);
  --table-text-size: 16px;
  --tag-background: hsla(267, 52%, 75%, 0.1);
  --tag-background-hover: hsla(267, 52%, 75%, 0.2);
  --tag-border-color: hsla(267, 52%, 75%, 0.15);
  --tag-border-color-hover: hsla(267, 52%, 75%, 0.15);
  --tag-color: hsl(271, 43%, 51%);
  --tag-color-hover: hsl(271, 43%, 51%);
  --tag-radius: 4px;
  --tag-size: 0.8em;
  --text-accent: hsl(271, 43%, 51%);
  --text-accent-hover: hsl(271, 43%, 51%);
  --text-bold-color-dt: hsl(0, 0%, 91%);
  --text-error: hsl(4, 74%, 74%);
  --text-faint: hsl(0, 0%, 81%);
  --text-highlight-bg: hsl(271, 48%, 21%);
  --text-italic-bold-color-dt: hsl(0, 0%, 91%);
  --text-italic-color-dt: hsl(0, 0%, 91%);
  --text-muted: hsl(0, 0%, 86%);
  --text-normal: hsl(0, 0%, 91%);
  --text-on-accent: hsl(267, 52%, 75%);
  --text-on-accent-inverted: hsl(0, 0%, 91%);
  --text-selection: hsla(271, 43%, 51%, 55%);
  --text-success: hsl(124, 48%, 54%);
  --text-warning: hsl(26, 85%, 63%);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 41px;
  --traffic-lights-offset-y: 41px;
  --underline-line-color: hsl(0, 0%, 91%);
  --underline-line-color-dt: hsl(0, 0%, 91%);
  --underline-text-color: hsl(0, 0%, 91%);
  --underline-text-color-dt: hsl(0, 0%, 91%);
  --window-border: 1px solid hsl(0, 0%, 30%);
  --window-border-color: hsl(0, 0%, 30%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-yellow-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-yellow-text, rgb(232, 232, 232));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(232, 232, 232);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-grey-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-grey-text, rgb(232, 232, 232));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(232, 232, 232);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-green-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-green-text, rgb(232, 232, 232));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(232, 232, 232);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-mint-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-mint-text, rgb(232, 232, 232));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(232, 232, 232);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(232, 232, 232);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-orange-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-orange-text, rgb(232, 232, 232));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(232, 232, 232);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
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

html[saved-theme="dark"] body .callout[data-callout="note-toolbar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--text-normal, rgb(232, 232, 232));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(46, 46, 46));
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 4px 8px 0px, rgba(0, 0, 0, 0.05) 0px 6px 12px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  background-color: var(--background-secondary-alt, rgb(20, 20, 20));
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--highlight-text-normal, rgb(188, 158, 224));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(188, 158, 224);
  border-left-color: rgb(188, 158, 224);
  border-right-color: rgb(188, 158, 224);
  border-top-color: rgb(188, 158, 224);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: var(--highlight-text-normal, rgb(188, 158, 224));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--interactive-accent-base, rgb(54, 28, 79));
  color: var(--highlight-text-normal, rgb(188, 158, 224));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: var(--background-secondary-alt, rgb(20, 20, 20));
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(77, 77, 77);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--interactive-accent-base, rgb(54, 28, 79));
  border-bottom-color: rgb(188, 158, 224);
  border-left-color: rgb(188, 158, 224);
  border-right-color: rgb(188, 158, 224);
  border-top-color: rgb(188, 158, 224);
  color: var(--highlight-text-normal, rgb(188, 158, 224));
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--interactive-accent-base, rgb(54, 28, 79));
  color: var(--highlight-text-normal, rgb(188, 158, 224));
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(267, 52%, 75%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(267, 52%, 75%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(267, 52%, 75%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(267, 52%, 75%, 0.15));
  --pill-border-width: var(--tag-border-width, 2px);
  --pill-color: var(--tag-color, hsl(271, 43%, 51%));
  --pill-color-hover: var(--tag-color-hover, hsl(271, 43%, 51%));
  --pill-color-remove: var(--tag-color, hsl(271, 43%, 51%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(271, 43%, 51%));
  --pill-padding-x: var(--tag-padding-x, 0.75ch);
  --pill-padding-y: var(--tag-padding-y, 0);
  --pill-radius: var(--tag-radius, 4px);
  background-color: var(--pill-background, rgba(188, 158, 224, 0.1));
  border-bottom-color: rgba(188, 158, 224, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgba(188, 158, 224, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(188, 158, 224, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(188, 158, 224, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
  color: var(--pill-color, rgb(132, 76, 184));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(132, 76, 184);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 800);
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: var(--h1-color, rgb(232, 232, 232));
  font-family: var(--h1-font, "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 35.2px);
  font-weight: var(--font-weight, 800);
  letter-spacing: var(--h1-letter-spacing, -0.528px);
  line-height: var(--h1-line-height, 45.76px);
  margin-bottom: 0px;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(232, 232, 232));
  font-size: var(--inline-title-size, 35.2px);
  font-weight: var(--inline-title-weight, 800);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 800);
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: var(--h2-color, rgb(232, 232, 232));
  font-family: var(--h2-font, "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 32px);
  font-weight: var(--font-weight, 800);
  letter-spacing: var(--h2-letter-spacing, -0.352px);
  line-height: var(--h2-line-height, 41.6px);
  margin-bottom: 0px;
  margin-top: var(--size-4-2, 0px);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: var(--inline-title-color, rgb(232, 232, 232));
  font-family: var(--inline-title-font, "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--inline-title-size, 35.2px);
  font-weight: var(--inline-title-weight, 800);
  letter-spacing: -0.528px;
  line-height: var(--inline-title-line-height, 45.76px);
  margin-bottom: 17.6px;
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 800);
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: var(--h3-color, rgb(232, 232, 232));
  font-family: var(--h3-font, "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 28.8px);
  font-weight: var(--font-weight, 800);
  letter-spacing: var(--h3-letter-spacing, -0.2304px);
  line-height: var(--h3-line-height, 38.88px);
  margin-bottom: 0px;
  margin-top: var(--size-4-2, 0px);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 800);
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: var(--h4-color, rgb(232, 232, 232));
  font-family: var(--h4-font, "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 25.6px);
  font-weight: var(--font-weight, 800);
  letter-spacing: var(--h4-letter-spacing, -0.128px);
  line-height: var(--h4-line-height, 35.84px);
  margin-bottom: 0px;
  margin-top: var(--size-4-2, 0px);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 800);
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: var(--h5-color, rgb(232, 232, 232));
  font-family: var(--h5-font, "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 22.4px);
  font-weight: var(--font-weight, 800);
  letter-spacing: var(--h5-letter-spacing, -0.0448px);
  line-height: var(--h5-line-height, 33.6px);
  margin-bottom: 0px;
  margin-top: var(--heading-spacing, 0px);
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 800);
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: var(--h6-color, rgb(232, 232, 232));
  font-family: var(--h6-font, "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 19.2px);
  font-weight: var(--font-weight, 800);
  line-height: var(--h6-line-height, 28.8px);
  margin-bottom: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(77, 77, 77, 0.8);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-normal, rgb(232, 232, 232));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-normal, rgb(232, 232, 232));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  color: rgb(232, 232, 232);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: var(--icon-color, rgb(219, 219, 219));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgba(33, 33, 33, 0.8));
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--status-bar-text-color, rgb(219, 219, 219));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: var(--status-bar-font-size, 13px);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(219, 219, 219);
  font-size: 13px;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: var(--icon-color, rgb(219, 219, 219));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(188, 158, 224);
  stroke: rgb(188, 158, 224);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(207, 207, 207));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  --shadow-border-themed: 0 0 0 2px hsl(var(--canvas-color));
  --shadow-border-themed-inset: inset 0 0 0 1px hsl(var(--canvas-color));
  border-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(232, 232, 232));
}

html[saved-theme="dark"] body .canvas-node-group {
  --shadow-border-themed: 0 0 0 2px hsl(var(--canvas-color));
  --shadow-border-themed-inset: inset 0 0 0 1px hsl(var(--canvas-color));
  border-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary-blur, rgba(33, 33, 33, 0.8));
  border-color: rgb(77, 77, 77);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(77, 77, 77);
  color: var(--table-header-color, rgb(232, 232, 232));
  font-weight: var(--font-semibold, 600);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: var(--text-muted, rgb(219, 219, 219));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgb(219, 219, 219);
  font-family: var(--metadata-label-font, "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgb(219, 219, 219);
  font-family: var(--metadata-input-font, "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(267, 52%, 75%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(267, 52%, 75%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(267, 52%, 75%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(267, 52%, 75%, 0.15));
  --pill-border-width: var(--tag-border-width, 2px);
  --pill-color: var(--tag-color, hsl(271, 43%, 51%));
  --pill-color-hover: var(--tag-color-hover, hsl(271, 43%, 51%));
  --pill-color-remove: var(--tag-color, hsl(271, 43%, 51%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(271, 43%, 51%));
  --pill-padding-x: var(--tag-padding-x, 0.75ch);
  --pill-padding-y: var(--tag-padding-y, 0);
  --pill-radius: var(--tag-radius, 4px);
  background-color: var(--pill-background, rgba(188, 158, 224, 0.1));
  border-radius: 4px;
  color: var(--pill-color, rgb(132, 76, 184));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--interactive-accent-base, rgb(46, 46, 46));
  color: var(--interactive-accent-hover, rgb(232, 232, 232));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary-alt, rgb(20, 20, 20));
  border-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(31, 31, 31));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(232, 232, 232);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(33, 33, 33, 0.8));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(188, 158, 224);
  border-left-color: rgb(188, 158, 224);
  border-right-color: rgb(188, 158, 224);
  border-top-color: rgb(188, 158, 224);
  color: var(--interactive-accent-text, rgb(188, 158, 224));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 15px;
  line-height: 19.5px;
}

html[saved-theme="dark"] body abbr {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: var(--text-normal, rgb(219, 219, 219));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(20, 20, 20));
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--code-normal, rgb(232, 232, 232));
  font-family: var(--font-monospace, "??", "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

html[saved-theme="dark"] body progress {
  background-color: var(--color-yellow-base, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body sub {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body summary {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body sup {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--background-secondary, rgb(31, 31, 31));
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgb(77, 77, 77);
  border-left-width: 2px;
  border-right-color: rgb(77, 77, 77);
  border-right-width: 2px;
  border-top-color: rgb(77, 77, 77);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
  color: var(--tag-color, rgb(132, 76, 184));
}`,
  },
  light: {
    base: `:root:root {
  --accent-border-width: 2px;
  --background-modifier-border: var(--window-border-color, hsl(0, 0%, 69%));
  --background-modifier-border-focus: var(--interactive-accent-tint, hsl(252, 84%, 83%));
  --background-modifier-border-hover: var(--interactive-accent-tint, hsl(252, 84%, 83%));
  --background-modifier-error: var(--color-red-text, hsl(3, 68%, 52%));
  --background-modifier-error-hover: var(--color-red, hsl(3, 68%, 52%));
  --background-modifier-form-field: var(--background-primary, hsl(0, 0%, 100%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(0, 0%, 100%));
  --background-modifier-hover: hsla(var(--interactive-accent-base-hsl), 90%);
  --background-modifier-success: var(--color-green, hsl(93, 100%, 27%));
  --background-primary: hsl(var(--background-primary-hsl));
  --background-primary-alt: hsl(var(--background-primary-alt-hsl));
  --background-primary-alt-hsl: 0, 0%, 96%;
  --background-primary-blur: hsl(var(--background-primary-hsl), 80%);
  --background-primary-hsl: 0, 0%, 100%;
  --background-secondary: hsl(var(--background-secondary-hsl));
  --background-secondary-alt: hsl(var(--background-secondary-alt-hsl));
  --background-secondary-alt-blur: hsla(var(--background-secondary-alt-hsl), 80%);
  --background-secondary-alt-hsl: 0, 0%, 69%;
  --background-secondary-blur: var(--background-secondary, hsla(0, 0%, 92%, 80%));
  --background-secondary-blur-hsl: 0, 0%, 92%;
  --background-secondary-hsl: 0, 0%, 93%;
  --bases-cards-background: var(--background-primary, hsl(0, 0%, 100%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(0, 0%, 96%));
  --bases-embed-border-color: var(--background-modifier-border, hsl(0, 0%, 69%));
  --bases-group-heading-property-color: var(--text-muted, hsl(0, 0%, 20%));
  --bases-table-border-color: var(--table-border-color, hsl(0, 0%, 69%));
  --bases-table-cell-background-active: var(--background-primary, hsl(0, 0%, 100%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(0, 0%, 96%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(258, 75%, 63%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(0, 0%, 96%));
  --bases-table-header-background: var(--background-primary, hsl(0, 0%, 100%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsla(251, 87%, 94%, 90%));
  --bases-table-header-color: var(--text-muted, hsl(0, 0%, 20%));
  --bases-table-summary-background: var(--background-primary, hsl(0, 0%, 100%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsla(251, 87%, 94%, 90%));
  --blockquote-background-color: var(--background-primary-alt, hsl(0, 0%, 96%));
  --blockquote-border-color: var(--window-border-color, hsl(0, 0%, 69%));
  --blur-intensity: 8px;
  --bodyFont: var(--font-text-theme, "Source Sans 3");
  --bold-color: var(--text-bold-color-lt, hsl(0, 0%, 15%));
  --button-radius: var(--input-radius, 4px);
  --callout-background-alpha: 20%;
  --callout-bug: var(--callout-bug, 233, 49, 71);
  --callout-default: var(--callout-default, 8, 109, 221);
  --callout-error: var(--callout-error, 233, 49, 71);
  --callout-example: var(--callout-example, 120, 82, 238);
  --callout-fail: var(--callout-fail, 233, 49, 71);
  --callout-info: var(--callout-info, 8, 109, 221);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 4px);
  --callout-question: var(--callout-question, 236, 117, 0);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-m, 8px);
  --callout-success: var(--callout-success, 8, 185, 78);
  --callout-summary: var(--callout-summary, 0, 191, 188);
  --callout-tip: var(--callout-tip, 0, 191, 188);
  --callout-todo: var(--callout-todo, 8, 109, 221);
  --callout-warning: var(--callout-warning, 236, 117, 0);
  --canvas-background: var(--background-primary, hsl(0, 0%, 100%));
  --canvas-background-color: var(--color-grey-base-hsl, 0, 0%, 90%);
  --canvas-card-label-color: var(--text-faint, hsl(0, 0%, 35%));
  --canvas-color: var(--color-grey-tint-hsl, 0, 0%, 73%);
  --canvas-dot-pattern: hsla(var(--background-secondary-alt-hsl), 75%);
  --canvas-highlight-color: var(--color-grey-text-hsl, 0, 0%, 47%);
  --caret-color: var(--text-normal, hsl(0, 0%, 15%));
  --cg-nt-tbar-top-sticky-pos-desktop: calc(var(--header-height)*-1 + 8px);
  --checkbox-border-color: var(--background-secondary-alt, hsl(0, 0%, 69%));
  --checkbox-border-color-hover: var(--interactive-accent-tint, hsl(252, 84%, 83%));
  --checkbox-color: var(--background-primary-alt, hsl(0, 0%, 96%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(252, 84%, 83%));
  --checkbox-margin-inline-start: var(--indentation-guide-editing-indent, 0.85em);
  --checkbox-marker-color: var(--highlight-text-normal, hsl(258, 75%, 63%));
  --checklist-done-color: var(--interactive-accent-tint, hsl(252, 84%, 83%));
  --code-background: var(--background-primary, hsl(0, 0%, 100%));
  --code-border-color: var(--background-modifier-border, hsl(0, 0%, 69%));
  --code-border-width: 1px;
  --code-bracket-background: var(--background-modifier-hover, hsla(251, 87%, 94%, 90%));
  --code-comment: var(--color-grey-text, hsl(0, 0%, 47%));
  --code-function: var(--color-yellow, hsl(38, 62%, 37%));
  --code-important: var(--color-orange, hsl(31, 100%, 36%));
  --code-keyword: var(--color-pink, hsl(320, 60%, 50%));
  --code-normal: var(--text-normal, hsl(0, 0%, 15%));
  --code-operator: var(--color-red, hsl(3, 68%, 52%));
  --code-property: var(--color-cyan, hsl(184, 100%, 28%));
  --code-punctuation: var(--text-muted, hsl(0, 0%, 20%));
  --code-string: var(--color-green, hsl(93, 100%, 27%));
  --code-tag: var(--color-red, hsl(3, 68%, 52%));
  --code-value: var(--color-purple, hsl(258, 75%, 63%));
  --collapse-icon-color: var(--text-faint, hsl(0, 0%, 35%));
  --collapse-icon-color-collapsed: var(--text-normal, hsl(0, 0%, 15%));
  --color-accent: var(--interactive-accent-text, hsl(258, 75%, 63%));
  --color-accent-1: var(--interactive-accent-tint, hsl(252, 84%, 83%));
  --color-accent-2: var(--interactive-accent-base, hsl(251, 87%, 94%));
  --color-accent-base-dt: var(--color-red-base-hsl, 7, 90%, 92%);
  --color-accent-base-lt: var(--color-red-base-hsl, 7, 90%, 92%);
  --color-accent-hsl: var(--interactive-accent-text-hsl, 258, 75%, 63%);
  --color-accent-text-dt: var(--color-red-text-hsl, 3, 68%, 52%);
  --color-accent-text-lt: var(--color-red-text-hsl, 3, 68%, 52%);
  --color-accent-tint-dt: var(--color-red-tint-hsl, 7, 82%, 78%);
  --color-accent-tint-lt: var(--color-red-tint-hsl, 7, 82%, 78%);
  --color-blue: var(--color-blue-text, hsl(221, 67%, 56%));
  --color-blue-base: hsl(var(--color-blue-base-hsl));
  --color-blue-base-hsl: 217, 76%, 92%;
  --color-blue-text: hsl(var(--color-blue-text-hsl));
  --color-blue-text-hsl: 221, 67%, 56%;
  --color-blue-tint: hsl(var(--color-blue-tint-hsl));
  --color-blue-tint-hsl: 219, 73%, 78%;
  --color-cyan: var(--color-cyan-text, hsl(184, 100%, 28%));
  --color-cyan-base: hsl(var(--color-cyan-base-hsl));
  --color-cyan-base-hsl: 184, 60%, 85%;
  --color-cyan-text: hsl(var(--color-cyan-text-hsl));
  --color-cyan-text-hsl: 184, 100%, 28%;
  --color-cyan-tint: hsl(var(--color-cyan-tint-hsl));
  --color-cyan-tint-hsl: 184, 61%, 56%;
  --color-green: var(--color-green-text, hsl(93, 100%, 27%));
  --color-green-base: hsl(var(--color-green-base-hsl));
  --color-green-base-hsl: 101, 49%, 85%;
  --color-green-text: hsl(var(--color-green-text-hsl));
  --color-green-text-hsl: 93, 100%, 27%;
  --color-green-tint: hsl(var(--color-green-tint-hsl));
  --color-green-tint-hsl: 99, 50%, 59%;
  --color-grey-base: hsl(var(--color-grey-base-hsl));
  --color-grey-base-hsl: 0, 0%, 90%;
  --color-grey-text: hsl(var(--color-grey-text-hsl));
  --color-grey-text-hsl: 0, 0%, 47%;
  --color-grey-tint: hsl(var(--color-grey-tint-hsl));
  --color-grey-tint-hsl: 0, 0%, 73%;
  --color-mint-base: hsl(var(--color-mint-base-hsl));
  --color-mint-base-hsl: 152, 62%, 85%;
  --color-mint-text: hsl(var(--color-mint-text-hsl));
  --color-mint-text-hsl: 161, 100%, 26%;
  --color-mint-tint: hsl(var(--color-mint-tint-hsl));
  --color-mint-tint-hsl: 158, 59%, 55%;
  --color-orange: var(--color-orange-text, hsl(31, 100%, 36%));
  --color-orange-base: hsl(var(--color-orange-base-hsl));
  --color-orange-base-hsl: 26, 85%, 89%;
  --color-orange-text: hsl(var(--color-orange-text-hsl));
  --color-orange-text-hsl: 31, 100%, 36%;
  --color-orange-tint: hsl(var(--color-orange-tint-hsl));
  --color-orange-tint-hsl: 27, 80%, 69%;
  --color-pink: var(--color-pink-text, hsl(320, 60%, 50%));
  --color-pink-base: hsl(var(--color-pink-base-hsl));
  --color-pink-base-hsl: 328, 79%, 93%;
  --color-pink-text: hsl(var(--color-pink-text-hsl));
  --color-pink-text-hsl: 320, 60%, 50%;
  --color-pink-tint: hsl(var(--color-pink-tint-hsl));
  --color-pink-tint-hsl: 327, 72%, 79%;
  --color-purple: var(--color-purple-text, hsl(258, 75%, 63%));
  --color-purple-base: hsl(var(--color-purple-base-hsl));
  --color-purple-base-hsl: 251, 87%, 94%;
  --color-purple-text: hsl(var(--color-purple-text-hsl));
  --color-purple-text-hsl: 258, 75%, 63%;
  --color-purple-tint: hsl(var(--color-purple-tint-hsl));
  --color-purple-tint-hsl: 252, 84%, 83%;
  --color-red: var(--color-red-text, hsl(3, 68%, 52%));
  --color-red-base: hsl(var(--color-red-base-hsl));
  --color-red-base-hsl: 7, 90%, 92%;
  --color-red-text: hsl(var(--color-red-text-hsl));
  --color-red-text-hsl: 3, 68%, 52%;
  --color-red-tint: hsl(var(--color-red-tint-hsl));
  --color-red-tint-hsl: 7, 82%, 78%;
  --color-yellow: var(--color-yellow-text, hsl(38, 62%, 37%));
  --color-yellow-base: hsl(var(--color-yellow-base-hsl));
  --color-yellow-base-hsl: 42, 88%, 83%;
  --color-yellow-text: hsl(var(--color-yellow-text-hsl));
  --color-yellow-text-hsl: 38, 62%, 37%;
  --color-yellow-tint: hsl(var(--color-yellow-tint-hsl));
  --color-yellow-tint-hsl: 44, 67%, 58%;
  --custom-vault-banner-icon-url: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'%0Awidth='40' height='40'%0AviewBox='0 0 40 40'%0Astyle=' fill:%23000000'%3E%3Cpath fill='%23dbb065' d='M1.5 35.5L1.5 4.5 11.793 4.5 14.793 7.5 35.5 7.5 35.5 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M11.586,5l2.707,2.707L14.586,8H15h20v27H2V5H11.586 M12,4H1v32h35V7H15L12,4L12,4z'%3E%3C/path%3E%3Cg%3E%3Cpath fill='%23f5ce85' d='M1.599 35.5L5.417 14.5 16.151 14.5 19.151 12.5 39.41 12.5 35.577 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M38.82,13l-3.667,22H2.198l3.636-20H16h0.303l0.252-0.168L19.303,13H38.82 M40,12H19l-3,2H5L1,36 h35L40,12L40,12z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  --dark: var(--text-normal, hsl(var(--text-normal-hsl)));
  --darkgray: var(--text-normal, hsl(var(--text-normal-hsl)));
  --divider-color: var(--background-modifier-border, hsl(0, 0%, 69%));
  --divider-color-hover: var(--interactive-accent-tint, hsl(252, 84%, 83%));
  --drag-ghost-text-color: var(--text-normal, hsl(0, 0%, 15%));
  --dropdown-background: var(--interactive-normal, hsl(0, 0%, 100%));
  --dropdown-background-hover: var(--interactive-hover, hsl(0, 0%, 100%));
  --embed-border-bottom: 1px solid var(--window-border-color);
  --embed-border-end: 1px solid var(--window-border-color);
  --embed-border-top: 1px solid var(--window-border-color);
  --embed-max-height: 800px;
  --embed-padding: var(--size-4-2) var(--size-4-4, 8px 16px);
  --fade-away-delay: 850ms;
  --fade-away-opacity: 0.25;
  --file-folding-offset: 20px;
  --file-header-background: var(--background-primary, hsl(0, 0%, 100%));
  --file-header-background-focused: var(--background-primary, hsl(0, 0%, 100%));
  --file-header-font: var(--font-interface, "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-medium, 15px);
  --flair-background: var(--interactive-normal, hsl(0, 0%, 100%));
  --flair-color: var(--text-normal, hsl(0, 0%, 15%));
  --font-interface-theme: "Source Sans 3";
  --font-mermaid: var(--font-text, "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: "JetBrains Mono";
  --font-text-theme: "Source Sans 3";
  --footnote-divider-color: var(--metadata-divider-color, hsl(0, 0%, 69%));
  --footnote-id-color: var(--text-muted, hsl(0, 0%, 20%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(0, 0%, 35%));
  --footnote-input-background-active: var(--metadata-input-background-active, hsl(0, 0%, 93%));
  --graph-attachment-color-lt: var(--color-yellow-tint, hsl(44, 67%, 58%));
  --graph-controls-width: 150px;
  --graph-fill-color-lt: var(--color-grey-tint, hsl(0, 0%, 73%));
  --graph-fill-focused-color-lt: var(--interactive-accent-tint, hsl(252, 84%, 83%));
  --graph-line: var(--graph-line-color-lt, hsl(0, 0%, 69%));
  --graph-line-color-lt: var(--background-secondary-alt, hsl(0, 0%, 69%));
  --graph-node: var(--graph-fill-color-lt, hsl(0, 0%, 73%));
  --graph-node-attachment: var(--graph-attachment-color-lt, hsl(44, 67%, 58%));
  --graph-node-focused: var(--graph-fill-focused-color-lt, hsl(252, 84%, 83%));
  --graph-node-tag: var(--graph-tag-color-lt, hsl(219, 73%, 78%));
  --graph-node-unresolved: var(--graph-unresolved-color-lt, hsl(7, 82%, 78%));
  --graph-tag-color-lt: var(--color-blue-tint, hsl(219, 73%, 78%));
  --graph-text: var(--text-normal, hsl(0, 0%, 15%));
  --graph-unresolved-color-lt: var(--color-red-tint, hsl(7, 82%, 78%));
  --gray: var(--text-muted, hsl(var(--text-muted-hsl)));
  --h1-color: var(--h1-text-color-lt, hsl(0, 0%, 15%));
  --h1-line-height: 1.3;
  --h1-size: 2.2em;
  --h1-text-color-lt: var(--text-normal, hsl(0, 0%, 15%));
  --h1-weight: var(--font-extrabold, 800);
  --h2-color: var(--h2-text-color-lt, hsl(0, 0%, 15%));
  --h2-line-height: 1.3;
  --h2-size: 2em;
  --h2-text-color-lt: var(--text-normal, hsl(0, 0%, 15%));
  --h2-weight: var(--font-extrabold, 800);
  --h3-color: var(--h3-text-color-lt, hsl(0, 0%, 15%));
  --h3-line-height: 1.35;
  --h3-size: 1.8em;
  --h3-text-color-lt: var(--text-normal, hsl(0, 0%, 15%));
  --h3-weight: var(--font-extrabold, 800);
  --h4-color: var(--h4-text-color-lt, hsl(0, 0%, 15%));
  --h4-size: 1.6em;
  --h4-text-color-lt: var(--text-normal, hsl(0, 0%, 15%));
  --h4-weight: var(--font-extrabold, 800);
  --h5-color: var(--h5-text-color-lt, hsl(0, 0%, 15%));
  --h5-size: 1.4em;
  --h5-text-color-lt: var(--text-normal, hsl(0, 0%, 15%));
  --h5-weight: var(--font-extrabold, 800);
  --h6-color: var(--h6-text-color-lt, hsl(0, 0%, 15%));
  --h6-size: 1.2em;
  --h6-text-color-lt: var(--text-normal, hsl(0, 0%, 15%));
  --h6-weight: var(--font-extrabold, 800);
  --header-height: 41px;
  --headerFont: var(--font-text-theme, "Source Sans 3");
  --heading-formatting: var(--text-faint, hsl(0, 0%, 35%));
  --highlight: var(--text-highlight-bg, var(--interactive-accent-base, hsl(251, 87%, 94%)));
  --highlight-text-normal: var(--interactive-accent-text, hsl(258, 75%, 63%));
  --hr-color: var(--background-modifier-border, hsl(0, 0%, 69%));
  --icon-color: var(--text-muted, hsl(0, 0%, 20%));
  --icon-color-active: var(--text-accent, hsl(258, 75%, 63%));
  --icon-color-focused: var(--interactive-accent-text, hsl(258, 75%, 63%));
  --icon-color-hover: var(--highlight-text-normal, hsl(258, 75%, 63%));
  --indentation-guide-color: hsla(var(--background-secondary-alt-hsl), 75%);
  --indentation-guide-color-active: var(--interactive-accent-tint, hsl(252, 84%, 83%));
  --indentation-guide-reading-indent: -0.55em;
  --indentation-guide-source-indent: 0.85em;
  --inline-title-line-height: var(--h1-line-height, 1.3);
  --inline-title-size: var(--h1-size, 2.2em);
  --inline-title-weight: var(--h1-weight, 800);
  --input-date-separator: var(--text-faint, hsl(0, 0%, 35%));
  --input-height: 32px;
  --input-placeholder-color: var(--text-faint, hsl(0, 0%, 35%));
  --input-radius: var(--radius-s, 4px);
  --interactive-accent: var(--interactive-accent-tint, hsl(252, 84%, 83%));
  --interactive-accent-base: var(--color-purple-base, hsl(251, 87%, 94%));
  --interactive-accent-base-hsl: var(--color-purple-base-hsl, 251, 87%, 94%);
  --interactive-accent-hover: var(--color-purple-tint, hsl(252, 84%, 83%));
  --interactive-accent-hsl: var(--color-accent-hsl, 258, 75%, 63%);
  --interactive-accent-text: var(--color-purple-text, hsl(258, 75%, 63%));
  --interactive-accent-text-hsl: var(--color-purple-text-hsl, 258, 75%, 63%);
  --interactive-accent-tint: var(--color-purple-tint, hsl(252, 84%, 83%));
  --interactive-accent-tint-hsl: var(--color-purple-tint-hsl, 252, 84%, 83%);
  --interactive-hover: var(--background-primary, hsl(0, 0%, 100%));
  --interactive-normal: var(--background-primary, hsl(0, 0%, 100%));
  --italic-color: var(--text-italic-color-lt, hsl(0, 0%, 15%));
  --light: var(--background-primary, hsl(var(--background-primary-hsl)));
  --lightgray: var(--background-secondary, hsl(var(--background-secondary-hsl)));
  --link-color: hsl(var(--link-internal-color-lt));
  --link-color-hover: hsla(var(--link-internal-color-lt), 60%);
  --link-external-color: hsl(var(--link-external-color-lt));
  --link-external-color-hover: hsla(var(--link-external-color-lt), 60%);
  --link-external-color-lt: var(--interactive-accent-text-hsl, 258, 75%, 63%);
  --link-internal-color-lt: var(--interactive-accent-text-hsl, 258, 75%, 63%);
  --link-unresolved-color: hsl(var(--link-internal-color-lt));
  --list-bullet-end-padding: 3rem;
  --list-indent-source: 0.75em;
  --list-marker-color: var(--text-faint, hsl(0, 0%, 35%));
  --list-marker-color-collapsed: var(--text-accent, hsl(258, 75%, 63%));
  --list-marker-color-hover: var(--text-muted, hsl(0, 0%, 20%));
  --mark-highlight-base: var(--color-yellow-base, hsl(42, 88%, 83%));
  --menu-background: var(--background-secondary, hsl(0, 0%, 93%));
  --menu-border-color: var(--background-modifier-border-hover, hsl(252, 84%, 83%));
  --menu-shadow: var(--shadow-s, hsla(0, 0%, 0%, 10%) 0 1px 2px 0);
  --metadata-border-color: var(--background-modifier-border, hsl(0, 0%, 69%));
  --metadata-divider-color: var(--background-modifier-border, hsl(0, 0%, 69%));
  --metadata-gap: var(--size-2-1, 2px);
  --metadata-input-background-active: var(--background-secondary, hsl(0, 0%, 93%));
  --metadata-input-font: var(--font-interface, "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, hsl(0, 0%, 15%));
  --metadata-label-background-active: var(--background-secondary, hsl(0, 0%, 93%));
  --metadata-label-font: var(--font-interface, "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsl(0, 0%, 20%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(0, 0%, 20%));
  --metadata-property-background-active: var(--background-modifier-hover, hsla(251, 87%, 94%, 90%));
  --modal-background: var(--background-primary, hsl(0, 0%, 100%));
  --modal-border-color: var(--window-border-color, hsl(0, 0%, 69%));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(0, 0%, 35%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(0, 0%, 35%));
  --nav-header-padding-bottom: 40px;
  --nav-heading-color: var(--text-normal, hsl(0, 0%, 15%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(0, 0%, 35%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(0, 0%, 20%));
  --nav-heading-color-hover: var(--text-normal, hsl(0, 0%, 15%));
  --nav-indentation-guide-color: var(--indentation-guide-color, hsla(0, 0%, 69%, 75%));
  --nav-item-background-active: var(--background-modifier-hover, hsla(251, 87%, 94%, 90%));
  --nav-item-background-hover: var(--background-modifier-hover, hsla(251, 87%, 94%, 90%));
  --nav-item-children-margin-left: 13px;
  --nav-item-color: var(--text-muted, hsl(0, 0%, 20%));
  --nav-item-color-active: var(--text-normal, hsl(0, 0%, 15%));
  --nav-item-color-highlighted: var(--text-accent, hsl(258, 75%, 63%));
  --nav-item-color-hover: var(--highlight-text-normal, hsl(258, 75%, 63%));
  --nav-item-color-selected: var(--text-normal, hsl(0, 0%, 15%));
  --nav-item-padding: var(--size-2-1) var(--size-4-2) var(--size-2-1) var(--size-4-6, 2px 8px 2px 24px);
  --nav-item-parent-padding: var(--nav-item-padding, 2px 8px 2px 24px);
  --nav-tag-color: var(--text-faint, hsl(0, 0%, 35%));
  --nav-tag-color-active: var(--text-muted, hsl(0, 0%, 20%));
  --nav-tag-color-hover: var(--text-muted, hsl(0, 0%, 20%));
  --p-spacing: 0.5em;
  --pdf-background: var(--background-primary, hsl(0, 0%, 100%));
  --pdf-page-background: var(--background-primary, hsl(0, 0%, 100%));
  --pdf-sidebar-background: var(--background-primary, hsl(0, 0%, 100%));
  --pill-border-color: var(--background-modifier-border, hsl(0, 0%, 69%));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(252, 84%, 83%));
  --pill-color: var(--text-muted, hsl(0, 0%, 20%));
  --pill-color-hover: var(--text-normal, hsl(0, 0%, 15%));
  --pill-color-remove: var(--text-faint, hsl(0, 0%, 35%));
  --pill-color-remove-hover: var(--text-accent, hsl(258, 75%, 63%));
  --pill-radius: var(--radius-s, 4px);
  --prompt-background: var(--background-primary, hsl(0, 0%, 100%));
  --prompt-border-color: var(--window-border-color, hsl(0, 0%, 69%));
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent) linear-gradient(hsl(0, 0%, 100%), color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(0, 0%, 93%));
  --ribbon-background-collapsed: var(--background-secondary, hsl(0, 0%, 93%));
  --scroll-bar-size: 12px;
  --scroll-button-background-color: var(--background-primary, hsl(0, 0%, 100%));
  --scrollbar-active-thumb-bg: var(--interactive-accent-base, hsl(251, 87%, 94%));
  --scrollbar-bg: var(--background-secondary, hsl(0, 0%, 93%));
  --scrollbar-thumb-bg: var(--background-primary-alt, hsl(0, 0%, 96%));
  --search-clear-button-color: var(--text-muted, hsl(0, 0%, 20%));
  --search-icon-color: var(--text-muted, hsl(0, 0%, 20%));
  --search-result-background: var(--background-primary, hsl(0, 0%, 100%));
  --secondary: var(--text-accent, var(--interactive-accent-text, hsl(258, 75%, 63%)));
  --setting-group-heading-color: var(--text-normal, hsl(0, 0%, 15%));
  --setting-items-background: var(--background-primary, hsl(0, 0%, 100%));
  --setting-items-border-color: var(--background-modifier-border, hsl(0, 0%, 69%));
  --setting-items-padding: var(--size-4-2, 8px);
  --shadow-color-hsl: 0, 0%, 0%;
  --shadow-l: hsla(var(--shadow-color-hsl), 3%) 0 1px 2px, hsla(var(--shadow-color-hsl), 3%) 0 2px 4px,
  	hsla(var(--shadow-color-hsl), 3%) 0 4px 8px, hsla(var(--shadow-color-hsl), 3%) 0 6px 12px;
  --shadow-s: hsla(var(--shadow-color-hsl), 10%) 0 1px 2px 0;
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(0, 0%, 20%));
  --shiki-code-background: var(--code-background, hsl(0, 0%, 100%));
  --shiki-code-block-spacing: var(--p-spacing, 0.5em);
  --shiki-code-comment: var(--text-faint, hsl(0, 0%, 35%));
  --shiki-code-function: var(--color-green, hsl(93, 100%, 27%));
  --shiki-code-important: var(--color-orange, hsl(31, 100%, 36%));
  --shiki-code-keyword: var(--color-pink, hsl(320, 60%, 50%));
  --shiki-code-normal: var(--text-muted, hsl(0, 0%, 20%));
  --shiki-code-property: var(--color-cyan, hsl(184, 100%, 28%));
  --shiki-code-punctuation: var(--text-muted, hsl(0, 0%, 20%));
  --shiki-code-string: var(--color-yellow, hsl(38, 62%, 37%));
  --shiki-code-value: var(--color-purple, hsl(258, 75%, 63%));
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(0, 0%, 69%));
  --shiki-gutter-text-color: var(--text-faint, hsl(0, 0%, 35%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(0, 0%, 20%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(0, 0%, 20%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(0, 0%, 35%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(252, 84%, 83%));
  --slider-thumb-radius: var(--size-4-1, 4px);
  --slider-thumb-width: 10px;
  --slider-track-background: var(--background-modifier-border, hsl(0, 0%, 69%));
  --status-bar-background: var(--background-secondary, hsl(0, 0%, 93%));
  --status-bar-background-color-dt: #2b2b2b;
  --status-bar-background-color-lt: #ebecef;
  --status-bar-border-color: var(--divider-color, hsl(0, 0%, 69%));
  --status-bar-font-size: var(--font-ui-small, 13px);
  --status-bar-text-color: var(--text-muted, hsl(0, 0%, 20%));
  --strikethrough-line-color: var(--strikethrough-line-color-lt, hsl(0, 0%, 20%));
  --strikethrough-line-color-lt: var(--text-muted, hsl(0, 0%, 20%));
  --strikethrough-text-color: var(--strikethrough-text-color-lt, hsl(0, 0%, 20%));
  --strikethrough-text-color-lt: var(--text-muted, hsl(0, 0%, 20%));
  --suggestion-background: var(--background-primary, hsl(0, 0%, 100%));
  --sync-avatar-color-1: var(--color-red, hsl(3, 68%, 52%));
  --sync-avatar-color-2: var(--color-orange, hsl(31, 100%, 36%));
  --sync-avatar-color-3: var(--color-yellow, hsl(38, 62%, 37%));
  --sync-avatar-color-4: var(--color-green, hsl(93, 100%, 27%));
  --sync-avatar-color-5: var(--color-cyan, hsl(184, 100%, 28%));
  --sync-avatar-color-6: var(--color-blue, hsl(221, 67%, 56%));
  --sync-avatar-color-7: var(--color-purple, hsl(258, 75%, 63%));
  --sync-avatar-color-8: var(--color-pink, hsl(320, 60%, 50%));
  --tab-background-active: var(--background-primary, hsl(0, 0%, 100%));
  --tab-container-background: var(--background-secondary, hsl(0, 0%, 93%));
  --tab-divider-color: var(--background-modifier-border-hover, hsl(252, 84%, 83%));
  --tab-outline-color: var(--divider-color, hsl(0, 0%, 69%));
  --tab-radius-active: var(--radius-m, 8px);
  --tab-stacked-font-size: var(--font-ui-medium, 15px);
  --tab-stacked-header-width: var(--header-height, 41px);
  --tab-stacked-shadow: 0;
  --tab-switcher-background: var(--background-secondary, hsl(0, 0%, 93%));
  --tab-text-color: var(--text-faint, hsl(0, 0%, 35%));
  --tab-text-color-active: var(--text-muted, hsl(0, 0%, 20%));
  --tab-text-color-focused: var(--text-muted, hsl(0, 0%, 20%));
  --tab-text-color-focused-active: var(--text-muted, hsl(0, 0%, 20%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(0, 0%, 15%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(258, 75%, 63%));
  --table-add-button-border-color: var(--background-modifier-border, hsl(0, 0%, 69%));
  --table-border-color: var(--background-modifier-border, hsl(0, 0%, 69%));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(252, 84%, 83%));
  --table-drag-handle-color: var(--text-faint, hsl(0, 0%, 35%));
  --table-drag-handle-color-active: var(--text-on-accent, hsl(258, 75%, 63%));
  --table-header-border-color: var(--table-border-color, hsl(0, 0%, 69%));
  --table-header-color: var(--text-normal, hsl(0, 0%, 15%));
  --table-selection-border-color: var(--interactive-accent, hsl(252, 84%, 83%));
  --tag-border-width: 2px;
  --tag-color: var(--text-accent, hsl(258, 75%, 63%));
  --tag-color-hover: var(--text-accent, hsl(258, 75%, 63%));
  --tag-padding-x: 0.75ch;
  --tag-padding-y: 0;
  --tag-radius: var(--radius-s, 4px);
  --tag-size: var(--font-smallest, 0.8em);
  --tertiary: var(--text-accent-hover, var(--interactive-accent-hover, hsl(252, 84%, 83%)));
  --text-accent: var(--interactive-accent-text, hsl(258, 75%, 63%));
  --text-accent-hover: var(--interactive-accent-hover, hsl(252, 84%, 83%));
  --text-bold-color-lt: var(--text-normal, hsl(0, 0%, 15%));
  --text-error: var(--color-red-text, hsl(3, 68%, 52%));
  --text-faint: hsl(var(--text-faint-hsl));
  --text-faint-hsl: 0, 0%, 35%;
  --text-highlight-bg: var(--interactive-accent-base, hsl(251, 87%, 94%));
  --text-italic-bold-color-lt: var(--text-normal, hsl(0, 0%, 15%));
  --text-italic-color-lt: var(--text-normal, hsl(0, 0%, 15%));
  --text-muted: hsl(var(--text-muted-hsl));
  --text-muted-hsl: 0, 0%, 20%;
  --text-normal: hsl(var(--text-normal-hsl));
  --text-normal-hsl: 0, 0%, 15%;
  --text-on-accent: var(--highlight-text-normal, hsl(258, 75%, 63%));
  --text-on-accent-inverted: var(--text-normal, hsl(0, 0%, 15%));
  --text-selection: hsla(var(--interactive-accent-tint-hsl), 55%);
  --text-success: var(--color-green, hsl(93, 100%, 27%));
  --text-warning: var(--color-orange, hsl(31, 100%, 36%));
  --textHighlight: var(--text-highlight-bg, var(--interactive-accent-base, hsl(251, 87%, 94%)));
  --titleFont: var(--font-text-theme, "Source Sans 3");
  --titlebar-background: var(--background-secondary, hsl(0, 0%, 93%));
  --titlebar-background-focused: var(--background-secondary, hsl(0, 0%, 93%));
  --titlebar-border-color: var(--background-modifier-border, hsl(0, 0%, 69%));
  --titlebar-text-color: var(--text-muted, hsl(0, 0%, 20%));
  --titlebar-text-color-focused: var(--text-normal, hsl(0, 0%, 15%));
  --toggle-radius: var(--size-4-1, 4px);
  --toggle-s-border-width: 1px;
  --toggle-s-thumb-height: 18px;
  --toggle-s-thumb-width: 18px;
  --toggle-s-width: 44px;
  --toggle-thumb-color: var(--background-primary, hsl(0, 0%, 100%));
  --toggle-thumb-height: 20px;
  --toggle-thumb-radius: 3px;
  --toggle-thumb-width: 20px;
  --toggle-width: 42px;
  --traffic-lights-offset-x: var(--header-height, 41px);
  --traffic-lights-offset-y: var(--header-height, 41px);
  --underline-line-color: var(--underline-line-color-lt, hsl(0, 0%, 15%));
  --underline-line-color-lt: var(--text-normal, hsl(0, 0%, 15%));
  --underline-text-color: var(--underline-text-color-lt, hsl(0, 0%, 15%));
  --underline-text-color-lt: var(--text-normal, hsl(0, 0%, 15%));
  --vault-name-font-size: var(--font-ui-medium, 15px);
  --vault-profile-color: var(--text-normal, hsl(0, 0%, 15%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(0, 0%, 15%));
  --vault-profile-font-size: var(--font-ui-medium, 15px);
  --window-border: 1px solid var(--window-border-color);
  --window-border-color: var(--background-secondary-alt, hsl(0, 0%, 69%));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(0, 0%, 93%));
  background-color: var(--background-modifier-hover, rgb(237, 237, 237));
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-primary, rgb(255, 255, 255));
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(176, 176, 176);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(0, 0%, 93%));
  background-color: var(--background-modifier-hover, rgb(237, 237, 237));
  border-left-color: rgb(176, 176, 176);
  color: rgb(38, 38, 38);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(38, 38, 38));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(38, 38, 38));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(38, 38, 38));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--text-italic-bold-color-dt, rgb(38, 38, 38));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(38, 38, 38));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(231, 226, 253));
  color: var(--text-normal, rgb(38, 38, 38));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body del {
  color: var(--strikethrough-text-color-lt, rgb(51, 51, 51));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: line-through 2px rgb(51, 51, 51);
  text-decoration-color: var(--strikethrough-line-color-lt, rgb(51, 51, 51));
  text-decoration-thickness: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(176, 176, 176);
  border-width: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(245, 245, 245));
  border-color: rgb(190, 175, 248);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(51, 51, 51));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(132, 90, 231));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(132, 90, 231) none 0px;
  text-decoration-color: rgb(132, 90, 231);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(132, 90, 231));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(132, 90, 231) none 0px;
  text-decoration-color: rgb(132, 90, 231);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(132, 90, 231));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(132, 90, 231) none 0px;
  text-decoration: underline rgba(132, 90, 231, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(132, 90, 231, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body ol > li {
  color: rgb(38, 38, 38);
  margin-left: 24px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(38, 38, 38);
  margin-left: 24px;
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(89, 89, 89));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(245, 245, 245));
  color: var(--blockquote-color, rgb(38, 38, 38));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body table {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: var(--heading-spacing, 8px);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  color: var(--table-text-color, rgb(38, 38, 38));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  color: var(--table-header-color, rgb(38, 38, 38));
  font-weight: var(--font-semibold, 600);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(255, 255, 255));
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-width: 1px;
  color: var(--code-normal, rgb(38, 38, 38));
  font-family: var(--font-monospace, "??", "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(255, 255, 255));
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body figcaption {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(0, 0%, 100%));
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(245, 245, 245));
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: var(--text-muted, rgb(51, 51, 51));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(190, 175, 248);
  border-right-color: rgb(176, 176, 176);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: hsla(var(--canvas-background-color), 20%);
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-style: solid;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-right-style: solid;
  border-top-color: rgb(38, 38, 38);
  border-top-style: solid;
  color: rgb(38, 38, 38);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-width: 2px;
  border-left-color: rgb(176, 176, 176);
  border-left-width: 2px;
  border-right-color: rgb(176, 176, 176);
  border-right-width: 2px;
  border-top-color: rgb(176, 176, 176);
  border-top-width: 2px;
  margin-left: -18.4px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(190, 175, 248);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(190, 175, 248);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(132, 90, 231);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(132, 90, 231);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(184, 95, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 133, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 115, 218);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(216, 58, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(216, 58, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(216, 58, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(216, 58, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 115, 218);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(153, 110, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(132, 90, 231);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(216, 58, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(62, 138, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(62, 138, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(62, 138, 0);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(38, 38, 38);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-cyan-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-cyan-text, rgb(38, 38, 38));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(38, 38, 38);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(38, 38, 38);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-red-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-red-text, rgb(38, 38, 38));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(38, 38, 38);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(38, 38, 38);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-red-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-red-text, rgb(38, 38, 38));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(38, 38, 38);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-blue-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-blue-text, rgb(38, 38, 38));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(38, 38, 38);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(38, 38, 38);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="light"] body .callout[data-callout="note-toolbar"] {
  --background-modifier-active-hover: hsla(258, 75%, 63%, 0.1);
  --background-modifier-border: hsl(0, 0%, 69%);
  --background-modifier-border-focus: hsl(252, 84%, 83%);
  --background-modifier-border-hover: hsl(252, 84%, 83%);
  --background-modifier-error: hsl(3, 68%, 52%);
  --background-modifier-error-hover: hsl(3, 68%, 52%);
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: hsl(0, 0%, 100%);
  --background-modifier-form-field-hover: hsl(0, 0%, 100%);
  --background-modifier-hover: hsla(251, 87%, 94%, 90%);
  --background-modifier-success: hsl(93, 100%, 27%);
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(0, 0%, 100%);
  --background-primary-alt: hsl(0, 0%, 96%);
  --background-secondary: hsl(0, 0%, 93%);
  --background-secondary-alt: hsl(0, 0%, 69%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-background-color: hsl(0, 0%, 96%);
  --blockquote-border-color: hsl(0, 0%, 69%);
  --blur-background: color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent) linear-gradient(hsl(0, 0%, 100%), color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(0, 0%, 15%);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 4px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 4px;
  --callout-question: 236, 117, 0;
  --callout-radius: 8px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(0, 0%, 100%);
  --canvas-background-color: 0, 0%, 90%;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: hsla(0, 0%, 69%, 75%);
  --canvas-highlight-color: 0, 0%, 47%;
  --caret-color: hsl(0, 0%, 15%);
  --cg-nt-tbar-top-sticky-pos-desktop: -33px;
  --checkbox-border-color: hsl(0, 0%, 69%);
  --checkbox-border-color-hover: hsl(252, 84%, 83%);
  --checkbox-color: hsl(0, 0%, 96%);
  --checkbox-color-hover: hsl(252, 84%, 83%);
  --checkbox-margin-inline-start: 0.85em;
  --checkbox-marker-color: hsl(258, 75%, 63%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(252, 84%, 83%);
  --clickable-icon-radius: 4px;
  --code-background: hsl(0, 0%, 100%);
  --code-border-color: hsl(0, 0%, 69%);
  --code-bracket-background: hsla(251, 87%, 94%, 90%);
  --code-comment: hsl(0, 0%, 47%);
  --code-function: hsl(38, 62%, 37%);
  --code-important: hsl(31, 100%, 36%);
  --code-keyword: hsl(320, 60%, 50%);
  --code-normal: hsl(0, 0%, 15%);
  --code-operator: hsl(3, 68%, 52%);
  --code-property: hsl(184, 100%, 28%);
  --code-punctuation: hsl(0, 0%, 20%);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: hsl(93, 100%, 27%);
  --code-tag: hsl(3, 68%, 52%);
  --code-value: hsl(258, 75%, 63%);
  --collapse-icon-color: hsl(0, 0%, 35%);
  --collapse-icon-color-collapsed: hsl(0, 0%, 15%);
  --color-accent: hsl(258, 75%, 63%);
  --color-accent-1: hsl(252, 84%, 83%);
  --color-accent-2: hsl(251, 87%, 94%);
  --color-accent-hsl: 258, 75%, 63%;
  --divider-color: hsl(0, 0%, 69%);
  --divider-color-hover: hsl(252, 84%, 83%);
  --divider-vertical-height: 100%;
  --dropdown-background: hsl(0, 0%, 100%);
  --dropdown-background-hover: hsl(0, 0%, 100%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(0, 0%, 100%);
  --flair-color: hsl(0, 0%, 15%);
  --font-interface: '??', "Source Sans 3", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', "Source Sans 3", 'Arial';
  --font-text: '??', "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: hsl(0, 0%, 69%);
  --graph-node: hsl(0, 0%, 73%);
  --graph-node-attachment: hsl(44, 67%, 58%);
  --graph-node-focused: hsl(252, 84%, 83%);
  --graph-node-tag: hsl(219, 73%, 78%);
  --graph-node-unresolved: hsl(7, 82%, 78%);
  --graph-text: hsl(0, 0%, 15%);
  --h1-color: hsl(0, 0%, 15%);
  --h1-weight: 800;
  --h2-color: hsl(0, 0%, 15%);
  --h2-weight: 800;
  --h3-color: hsl(0, 0%, 15%);
  --h3-weight: 800;
  --h4-color: hsl(0, 0%, 15%);
  --h4-weight: 800;
  --h5-color: hsl(0, 0%, 15%);
  --h5-line-height: 1.5;
  --h5-weight: 800;
  --h6-color: hsl(0, 0%, 15%);
  --h6-line-height: 1.5;
  --h6-weight: 800;
  --heading-formatting: hsl(0, 0%, 35%);
  --heading-spacing: 1.25em;
  --highlight-text-normal: hsl(258, 75%, 63%);
  --hr-color: hsl(0, 0%, 69%);
  --interactive-accent: hsl(252, 84%, 83%);
  --interactive-accent-base: hsl(251, 87%, 94%);
  --interactive-accent-base-hsl: 251, 87%, 94%;
  --interactive-accent-hover: hsl(252, 84%, 83%);
  --interactive-accent-hsl: 258, 75%, 63%;
  --interactive-accent-text: hsl(258, 75%, 63%);
  --interactive-accent-text-hsl: 258, 75%, 63%;
  --interactive-accent-tint: hsl(252, 84%, 83%);
  --interactive-accent-tint-hsl: 252, 84%, 83%;
  --interactive-hover: hsl(0, 0%, 100%);
  --interactive-normal: hsl(0, 0%, 100%);
  --italic-color: hsl(0, 0%, 15%);
  --link-color: hsl(258, 75%, 63%);
  --link-color-hover: hsla(258, 75%, 63%, 60%);
  --link-external-color: hsl(258, 75%, 63%);
  --link-external-color-hover: hsla(258, 75%, 63%, 60%);
  --link-unresolved-color: hsl(258, 75%, 63%);
  --link-unresolved-decoration-color: hsla(258, 75%, 63%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mark-highlight-base: hsl(42, 88%, 83%);
  --menu-background: hsl(0, 0%, 93%);
  --menu-border-color: hsl(252, 84%, 83%);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: hsla(0, 0%, 0%, 10%) 0 1px 2px 0;
  --pdf-background: hsl(0, 0%, 100%);
  --pdf-page-background: hsl(0, 0%, 100%);
  --pdf-sidebar-background: hsl(0, 0%, 100%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent) linear-gradient(hsl(0, 0%, 100%), color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(251, 87%, 94%);
  --scrollbar-bg: hsl(0, 0%, 93%);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: hsl(0, 0%, 96%);
  --search-clear-button-color: hsl(0, 0%, 20%);
  --search-icon-color: hsl(0, 0%, 20%);
  --search-result-background: hsl(0, 0%, 100%);
  --setting-group-heading-color: hsl(0, 0%, 15%);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(0, 0%, 100%);
  --setting-items-border-color: hsl(0, 0%, 69%);
  --setting-items-padding: 8px;
  --shadow-l: hsla(0, 0%, 0%, 3%) 0 1px 2px, hsla(0, 0%, 0%, 3%) 0 2px 4px,
  	hsla(0, 0%, 0%, 3%) 0 4px 8px, hsla(0, 0%, 0%, 3%) 0 6px 12px;
  --shadow-s: hsla(0, 0%, 0%, 10%) 0 1px 2px 0;
  --shiki-active-tab-border-color: hsl(0, 0%, 20%);
  --shiki-code-background: hsl(0, 0%, 100%);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 0.5em;
  --shiki-code-comment: hsl(0, 0%, 35%);
  --shiki-code-function: hsl(93, 100%, 27%);
  --shiki-code-important: hsl(31, 100%, 36%);
  --shiki-code-keyword: hsl(320, 60%, 50%);
  --shiki-code-normal: hsl(0, 0%, 20%);
  --shiki-code-property: hsl(184, 100%, 28%);
  --shiki-code-punctuation: hsl(0, 0%, 20%);
  --shiki-code-string: hsl(38, 62%, 37%);
  --shiki-code-value: hsl(258, 75%, 63%);
  --shiki-gutter-border-color: hsl(0, 0%, 69%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(0, 0%, 35%);
  --shiki-gutter-text-color-highlight: hsl(0, 0%, 20%);
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: hsl(0, 0%, 20%);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: hsl(0, 0%, 35%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --strikethrough-line-color: hsl(0, 0%, 20%);
  --strikethrough-text-color: hsl(0, 0%, 20%);
  --suggestion-background: hsl(0, 0%, 100%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: hsl(3, 68%, 52%);
  --sync-avatar-color-2: hsl(31, 100%, 36%);
  --sync-avatar-color-3: hsl(38, 62%, 37%);
  --sync-avatar-color-4: hsl(93, 100%, 27%);
  --sync-avatar-color-5: hsl(184, 100%, 28%);
  --sync-avatar-color-6: hsl(221, 67%, 56%);
  --sync-avatar-color-7: hsl(258, 75%, 63%);
  --sync-avatar-color-8: hsl(320, 60%, 50%);
  --tab-background-active: hsl(0, 0%, 100%);
  --tab-divider-color: hsl(252, 84%, 83%);
  --tab-font-size: 13px;
  --tab-outline-color: hsl(0, 0%, 69%);
  --tab-radius: 4px;
  --tab-radius-active: 8px;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 41px;
  --tab-switcher-background: hsl(0, 0%, 93%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 93%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 75%, 63%);
  --tab-text-color: hsl(0, 0%, 35%);
  --tab-text-color-active: hsl(0, 0%, 20%);
  --tab-text-color-focused: hsl(0, 0%, 20%);
  --tab-text-color-focused-active: hsl(0, 0%, 20%);
  --tab-text-color-focused-active-current: hsl(0, 0%, 15%);
  --tab-text-color-focused-highlighted: hsl(258, 75%, 63%);
  --table-add-button-border-color: hsl(0, 0%, 69%);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(252, 84%, 83%);
  --table-drag-handle-color: hsl(0, 0%, 35%);
  --table-drag-handle-color-active: hsl(258, 75%, 63%);
  --table-header-background: transparent;
  --table-header-border-color: hsl(0, 0%, 69%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(0, 0%, 15%);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 75%, 63%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(252, 84%, 83%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 75%, 63%, 0.1);
  --tag-background-hover: hsla(258, 75%, 63%, 0.2);
  --tag-border-color: hsla(258, 75%, 63%, 0.15);
  --tag-border-color-hover: hsla(258, 75%, 63%, 0.15);
  --tag-color: hsl(258, 75%, 63%);
  --tag-color-hover: hsl(258, 75%, 63%);
  --tag-radius: 4px;
  --tag-size: 0.8em;
  --text-accent: hsl(258, 75%, 63%);
  --text-accent-hover: hsl(252, 84%, 83%);
  --text-error: hsl(3, 68%, 52%);
  --text-faint: hsl(0, 0%, 35%);
  --text-highlight-bg: hsl(251, 87%, 94%);
  --text-muted: hsl(0, 0%, 20%);
  --text-normal: hsl(0, 0%, 15%);
  --text-on-accent: hsl(258, 75%, 63%);
  --text-on-accent-inverted: hsl(0, 0%, 15%);
  --text-selection: hsla(252, 84%, 83%, 55%);
  --text-success: hsl(93, 100%, 27%);
  --text-warning: hsl(31, 100%, 36%);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 41px;
  --traffic-lights-offset-y: 41px;
  --underline-line-color: hsl(0, 0%, 15%);
  --underline-text-color: hsl(0, 0%, 15%);
  --window-border: 1px solid hsl(0, 0%, 69%);
  --window-border-color: hsl(0, 0%, 69%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-yellow-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-yellow-text, rgb(38, 38, 38));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(38, 38, 38);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-grey-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-grey-text, rgb(38, 38, 38));
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(38, 38, 38);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-green-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-green-text, rgb(38, 38, 38));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(38, 38, 38);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-mint-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-mint-text, rgb(38, 38, 38));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(38, 38, 38);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(38, 38, 38);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: hsla(var(--color-orange-base-hsl), var(--callout-background-alpha));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--color-orange-text, rgb(38, 38, 38));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(38, 38, 38);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
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

html[saved-theme="light"] body .callout[data-callout="note-toolbar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--text-normal, rgb(38, 38, 38));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.03) 0px 1px 2px 0px, rgba(0, 0, 0, 0.03) 0px 2px 4px 0px, rgba(0, 0, 0, 0.03) 0px 4px 8px 0px, rgba(0, 0, 0, 0.03) 0px 6px 12px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  background-color: var(--background-primary, rgb(255, 255, 255));
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--highlight-text-normal, rgb(132, 90, 231));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(132, 90, 231);
  border-left-color: rgb(132, 90, 231);
  border-right-color: rgb(132, 90, 231);
  border-top-color: rgb(132, 90, 231);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: var(--highlight-text-normal, rgb(132, 90, 231));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--interactive-accent-base, rgb(231, 226, 253));
  color: var(--highlight-text-normal, rgb(132, 90, 231));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: var(--background-primary, rgb(255, 255, 255));
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(176, 176, 176);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--interactive-accent-base, rgb(231, 226, 253));
  border-bottom-color: rgb(132, 90, 231);
  border-left-color: rgb(132, 90, 231);
  border-right-color: rgb(132, 90, 231);
  border-top-color: rgb(132, 90, 231);
  color: var(--highlight-text-normal, rgb(132, 90, 231));
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--interactive-accent-base, rgb(231, 226, 253));
  color: var(--highlight-text-normal, rgb(132, 90, 231));
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(258, 75%, 63%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(258, 75%, 63%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(258, 75%, 63%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(258, 75%, 63%, 0.15));
  --pill-border-width: var(--tag-border-width, 2px);
  --pill-color: var(--tag-color, hsl(258, 75%, 63%));
  --pill-color-hover: var(--tag-color-hover, hsl(258, 75%, 63%));
  --pill-color-remove: var(--tag-color, hsl(258, 75%, 63%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(258, 75%, 63%));
  --pill-padding-x: var(--tag-padding-x, 0.75ch);
  --pill-padding-y: var(--tag-padding-y, 0);
  --pill-radius: var(--tag-radius, 4px);
  background-color: var(--pill-background, rgba(132, 90, 231, 0.1));
  border-bottom-color: rgba(132, 90, 231, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgba(132, 90, 231, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(132, 90, 231, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(132, 90, 231, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
  color: var(--pill-color, rgb(132, 90, 231));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(132, 90, 231);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 800);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: var(--h1-color, rgb(38, 38, 38));
  font-family: var(--h1-font, "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 35.2px);
  font-weight: var(--font-weight, 800);
  letter-spacing: var(--h1-letter-spacing, -0.528px);
  line-height: var(--h1-line-height, 45.76px);
  margin-bottom: 0px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(38, 38, 38));
  font-size: var(--inline-title-size, 35.2px);
  font-weight: var(--inline-title-weight, 800);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 800);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: var(--h2-color, rgb(38, 38, 38));
  font-family: var(--h2-font, "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 32px);
  font-weight: var(--font-weight, 800);
  letter-spacing: var(--h2-letter-spacing, -0.352px);
  line-height: var(--h2-line-height, 41.6px);
  margin-bottom: 0px;
  margin-top: var(--size-4-2, 0px);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: var(--inline-title-color, rgb(38, 38, 38));
  font-family: var(--inline-title-font, "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--inline-title-size, 35.2px);
  font-weight: var(--inline-title-weight, 800);
  letter-spacing: -0.528px;
  line-height: var(--inline-title-line-height, 45.76px);
  margin-bottom: 17.6px;
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 800);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: var(--h3-color, rgb(38, 38, 38));
  font-family: var(--h3-font, "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 28.8px);
  font-weight: var(--font-weight, 800);
  letter-spacing: var(--h3-letter-spacing, -0.2304px);
  line-height: var(--h3-line-height, 38.88px);
  margin-bottom: 0px;
  margin-top: var(--size-4-2, 0px);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 800);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: var(--h4-color, rgb(38, 38, 38));
  font-family: var(--h4-font, "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 25.6px);
  font-weight: var(--font-weight, 800);
  letter-spacing: var(--h4-letter-spacing, -0.128px);
  line-height: var(--h4-line-height, 35.84px);
  margin-bottom: 0px;
  margin-top: var(--size-4-2, 0px);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 800);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: var(--h5-color, rgb(38, 38, 38));
  font-family: var(--h5-font, "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 22.4px);
  font-weight: var(--font-weight, 800);
  letter-spacing: var(--h5-letter-spacing, -0.0448px);
  line-height: var(--h5-line-height, 33.6px);
  margin-bottom: 0px;
  margin-top: var(--heading-spacing, 0px);
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 800);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: var(--h6-color, rgb(38, 38, 38));
  font-family: var(--h6-font, "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 19.2px);
  font-weight: var(--font-weight, 800);
  line-height: var(--h6-line-height, 28.8px);
  margin-bottom: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(176, 176, 176, 0.75);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-normal, rgb(38, 38, 38));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-normal, rgb(38, 38, 38));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  color: rgb(38, 38, 38);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: var(--icon-color, rgb(51, 51, 51));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgba(235, 235, 235, 0.8));
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--status-bar-text-color, rgb(51, 51, 51));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: var(--status-bar-font-size, 13px);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(51, 51, 51);
  font-size: 13px;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(51, 51, 51));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(51, 51, 51));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: var(--icon-color, rgb(51, 51, 51));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(132, 90, 231);
  stroke: rgb(132, 90, 231);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(89, 89, 89));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  --shadow-border-themed: 0 0 0 2px hsl(var(--canvas-color));
  --shadow-border-themed-inset: inset 0 0 0 1px hsl(var(--canvas-color));
  border-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(38, 38, 38));
}

html[saved-theme="light"] body .canvas-node-group {
  --shadow-border-themed: 0 0 0 2px hsl(var(--canvas-color));
  --shadow-border-themed-inset: inset 0 0 0 1px hsl(var(--canvas-color));
  border-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-secondary-blur, rgba(235, 235, 235, 0.8));
  border-color: rgb(176, 176, 176);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(176, 176, 176);
  color: var(--table-header-color, rgb(38, 38, 38));
  font-weight: var(--font-semibold, 600);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  color: var(--text-muted, rgb(51, 51, 51));
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgb(51, 51, 51);
  font-family: var(--metadata-label-font, "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgb(51, 51, 51);
  font-family: var(--metadata-input-font, "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(176, 176, 176);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(258, 75%, 63%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(258, 75%, 63%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(258, 75%, 63%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(258, 75%, 63%, 0.15));
  --pill-border-width: var(--tag-border-width, 2px);
  --pill-color: var(--tag-color, hsl(258, 75%, 63%));
  --pill-color-hover: var(--tag-color-hover, hsl(258, 75%, 63%));
  --pill-color-remove: var(--tag-color, hsl(258, 75%, 63%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(258, 75%, 63%));
  --pill-padding-x: var(--tag-padding-x, 0.75ch);
  --pill-padding-y: var(--tag-padding-y, 0);
  --pill-radius: var(--tag-radius, 4px);
  background-color: var(--pill-background, rgba(132, 90, 231, 0.1));
  border-radius: 4px;
  color: var(--pill-color, rgb(132, 90, 231));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body div#quartz-root {
  color: var(--link-color-hover, rgb(38, 38, 38));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-primary, rgb(255, 255, 255));
  border-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(237, 237, 237));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(38, 38, 38);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(235, 235, 235, 0.8));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(132, 90, 231);
  border-left-color: rgb(132, 90, 231);
  border-right-color: rgb(132, 90, 231);
  border-top-color: rgb(132, 90, 231);
  color: var(--interactive-accent-text, rgb(132, 90, 231));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 15px;
  line-height: 19.5px;
}

html[saved-theme="light"] body abbr {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: var(--text-normal, rgb(51, 51, 51));
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(255, 255, 255));
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--code-normal, rgb(38, 38, 38));
  font-family: var(--font-monospace, "??", "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

html[saved-theme="light"] body progress {
  background-color: var(--color-yellow-base, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sub {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body summary {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sup {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--background-secondary, rgb(237, 237, 237));
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgb(176, 176, 176);
  border-left-width: 2px;
  border-right-color: rgb(176, 176, 176);
  border-right-width: 2px;
  border-top-color: rgb(176, 176, 176);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
  color: var(--tag-color, rgb(132, 90, 231));
}`,
  },
  classSettings: {
    "pt-color-scheme-latte-lt": {
      light: `.pt-color-scheme-latte-lt {
--color-grey-base-hsl: 0, 0%, 90%;
--color-red-base-hsl: 11, 100%, 92%;
--color-orange-base-hsl: 30, 90%, 88%;
--color-yellow-base-hsl: 41, 88%, 84%;
--color-green-base-hsl: 101, 47%, 86%;
--color-mint-base-hsl: 153, 61%, 85%;
--color-cyan-base-hsl: 184, 58%, 86%;
--color-blue-base-hsl: 220, 75%, 92%;
--color-purple-base-hsl: 252, 81%, 94%;
--color-pink-base-hsl: 329, 73%, 93%;
--color-grey-tint-hsl: 0, 0%, 73%;
--color-red-tint-hsl: 10, 91%, 78%;
--color-orange-tint-hsl: 30, 79%, 68%;
--color-yellow-tint-hsl: 43, 65%, 59%;
--color-green-tint-hsl: 99, 48%, 60%;
--color-mint-tint-hsl: 158, 56%, 56%;
--color-cyan-tint-hsl: 184, 58%, 58%;
--color-blue-tint-hsl: 220, 70%, 78%;
--color-purple-tint-hsl: 253, 75%, 83%;
--color-pink-tint-hsl: 327, 67%, 79%;
--color-grey-text-hsl: 0, 0%, 47%;
--color-red-text-hsl: 3, 64%, 53%;
--color-orange-text-hsl: 33, 100%, 35%;
--color-yellow-text-hsl: 37, 55%, 39%;
--color-green-text-hsl: 91, 93%, 27%;
--color-mint-text-hsl: 162, 100%, 27%;
--color-cyan-text-hsl: 184, 100%, 28%;
--color-blue-text-hsl: 221, 64%, 56%;
--color-purple-text-hsl: 257, 69%, 63%;
--color-pink-text-hsl: 321, 57%, 51%;
--text-normal-hsl: 28, 42%, 15%;
--text-muted-hsl: 28, 42%, 20%;
--text-faint-hsl: 28, 42%, 35%;
--background-primary-hsl: 28, 42%, 98%;
--background-primary-alt-hsl: 28, 42%, 94%;
--background-secondary-hsl: 28, 42%, 90%;
--background-secondary-blur-hsl: 28, 42%, 88%;
--background-secondary-alt-hsl: 28, 42%, 66%;
--shadow-color-hsl: 28, 42%, 7%;
--shadow-s: hsla(var(--shadow-color-hsl), 10%) 0 1px 2px 0;
--shadow-l: hsla(var(--shadow-color-hsl), 4%) 0 1px 2px, hsla(var(--shadow-color-hsl), 4%) 0 2px 4px,
  	hsla(var(--shadow-color-hsl), 4%) 0 4px 8px, hsla(var(--shadow-color-hsl), 4%) 0 6px 12px;
}`,
    },
    "pt-color-scheme-periwinkle-lt": {
      light: `.pt-color-scheme-periwinkle-lt {
--color-grey-base-hsl: 0, 0%, 92%;
--color-red-base-hsl: 6, 100%, 94%;
--color-orange-base-hsl: 30, 100%, 91%;
--color-yellow-base-hsl: 42, 80%, 88%;
--color-green-base-hsl: 100, 52%, 89%;
--color-mint-base-hsl: 153, 65%, 88%;
--color-cyan-base-hsl: 185, 63%, 88%;
--color-blue-base-hsl: 220, 100%, 94%;
--color-purple-base-hsl: 250, 100%, 95%;
--color-pink-base-hsl: 329, 86%, 94%;
--color-grey-tint-hsl: 0, 0%, 75%;
--color-red-tint-hsl: 8, 88%, 81%;
--color-orange-tint-hsl: 31, 90%, 69%;
--color-yellow-tint-hsl: 45, 60%, 64%;
--color-green-tint-hsl: 99, 52%, 62%;
--color-mint-tint-hsl: 159, 64%, 55%;
--color-cyan-tint-hsl: 184, 67%, 58%;
--color-blue-tint-hsl: 219, 96%, 81%;
--color-purple-tint-hsl: 252, 100%, 86%;
--color-pink-tint-hsl: 327, 77%, 81%;
--color-grey-text-hsl: 0, 0%, 50%;
--color-red-text-hsl: 3, 73%, 55%;
--color-orange-text-hsl: 31, 100%, 38%;
--color-yellow-text-hsl: 39, 78%, 37%;
--color-green-text-hsl: 93, 100%, 28%;
--color-mint-text-hsl: 161, 100%, 28%;
--color-cyan-text-hsl: 184, 100%, 29%;
--color-blue-text-hsl: 221, 87%, 60%;
--color-purple-text-hsl: 257, 92%, 68%;
--color-pink-text-hsl: 321, 67%, 54%;
--text-normal-hsl: 221, 55%, 15%;
--text-muted-hsl: 221, 55%, 20%;
--text-faint-hsl: 221, 55%, 35%;
--background-primary-hsl: 221, 55%, 98%;
--background-primary-alt-hsl: 221, 55%, 95%;
--background-secondary-hsl: 221, 55%, 92%;
--background-secondary-blur-hsl: 221, 55%, 91%;
--background-secondary-alt-hsl: 221, 55%, 72%;
--shadow-color-hsl: 221, 55%, 7%;
--shadow-s: hsla(var(--shadow-color-hsl), 10%) 0 1px 2px 0;
--shadow-l: hsla(var(--shadow-color-hsl), 4%) 0 1px 2px, hsla(var(--shadow-color-hsl), 4%) 0 2px 4px,
  	hsla(var(--shadow-color-hsl), 4%) 0 4px 8px, hsla(var(--shadow-color-hsl), 4%) 0 6px 12px;
}`,
    },
    "pt-color-scheme-pistachio-lt": {
      light: `.pt-color-scheme-pistachio-lt {
--color-grey-base-hsl: 0, 0%, 90%;
--color-red-base-hsl: 8, 100%, 93%;
--color-orange-base-hsl: 26, 89%, 89%;
--color-yellow-base-hsl: 41, 90%, 84%;
--color-green-base-hsl: 109, 52%, 86%;
--color-mint-base-hsl: 152, 65%, 85%;
--color-cyan-base-hsl: 184, 63%, 85%;
--color-blue-base-hsl: 220, 85%, 92%;
--color-purple-base-hsl: 250, 100%, 94%;
--color-pink-base-hsl: 327, 84%, 93%;
--color-grey-tint-hsl: 0, 0%, 73%;
--color-red-tint-hsl: 7, 85%, 79%;
--color-orange-tint-hsl: 27, 83%, 69%;
--color-yellow-tint-hsl: 44, 70%, 56%;
--color-green-tint-hsl: 108, 52%, 60%;
--color-mint-tint-hsl: 160, 61%, 52%;
--color-cyan-tint-hsl: 184, 64%, 55%;
--color-blue-tint-hsl: 220, 78%, 78%;
--color-purple-tint-hsl: 252, 90%, 84%;
--color-pink-tint-hsl: 326, 76%, 79%;
--color-grey-text-hsl: 0, 0%, 47%;
--color-red-text-hsl: 2, 71%, 52%;
--color-orange-text-hsl: 30, 100%, 36%;
--color-yellow-text-hsl: 39, 71%, 36%;
--color-green-text-hsl: 116, 42%, 37%;
--color-mint-text-hsl: 160, 100%, 27%;
--color-cyan-text-hsl: 185, 100%, 28%;
--color-blue-text-hsl: 221, 72%, 56%;
--color-purple-text-hsl: 259, 80%, 64%;
--color-pink-text-hsl: 319, 65%, 50%;
--text-normal-hsl: 101, 35%, 15%;
--text-muted-hsl: 101, 35%, 20%;
--text-faint-hsl: 101, 35%, 35%;
--background-primary-hsl: 101, 35%, 99%;
--background-primary-alt-hsl: 101, 35%, 95%;
--background-secondary-hsl: 101, 35%, 91%;
--background-secondary-blur-hsl: 101, 35%, 90%;
--background-secondary-alt-hsl: 101, 35%, 62%;
--shadow-color-hsl: 101, 35%, 7%;
--shadow-s: hsla(var(--shadow-color-hsl), 10%) 0 1px 2px 0;
--shadow-l: hsla(var(--shadow-color-hsl), 4%) 0 1px 2px, hsla(var(--shadow-color-hsl), 4%) 0 2px 4px,
  	hsla(var(--shadow-color-hsl), 4%) 0 4px 8px, hsla(var(--shadow-color-hsl), 4%) 0 6px 12px;
}`,
    },
    "pt-color-scheme-peach-lt": {
      light: `.pt-color-scheme-peach-lt {
--color-grey-base-hsl: 0, 0%, 90%;
--color-red-base-hsl: 9, 90%, 92%;
--color-orange-base-hsl: 25, 96%, 89%;
--color-yellow-base-hsl: 41, 91%, 83%;
--color-green-base-hsl: 101, 53%, 85%;
--color-mint-base-hsl: 153, 64%, 84%;
--color-cyan-base-hsl: 184, 63%, 85%;
--color-blue-base-hsl: 221, 85%, 92%;
--color-purple-base-hsl: 250, 100%, 94%;
--color-pink-base-hsl: 328, 84%, 93%;
--color-grey-tint-hsl: 0, 0%, 73%;
--color-red-tint-hsl: 7, 79%, 78%;
--color-orange-tint-hsl: 26, 89%, 69%;
--color-yellow-tint-hsl: 44, 70%, 56%;
--color-green-tint-hsl: 98, 52%, 58%;
--color-mint-tint-hsl: 160, 61%, 52%;
--color-cyan-tint-hsl: 184, 63%, 54%;
--color-blue-tint-hsl: 219, 78%, 78%;
--color-purple-tint-hsl: 252, 90%, 84%;
--color-pink-tint-hsl: 326, 76%, 79%;
--color-grey-text-hsl: 0, 0%, 47%;
--color-red-text-hsl: 4, 67%, 51%;
--color-orange-text-hsl: 29, 100%, 37%;
--color-yellow-text-hsl: 39, 70%, 36%;
--color-green-text-hsl: 95, 100%, 26%;
--color-mint-text-hsl: 160, 100%, 26%;
--color-cyan-text-hsl: 185, 100%, 28%;
--color-blue-text-hsl: 221, 72%, 56%;
--color-purple-text-hsl: 259, 81%, 64%;
--color-pink-text-hsl: 319, 66%, 49%;
--text-normal-hsl: 3, 55%, 15%;
--text-muted-hsl: 3, 55%, 20%;
--text-faint-hsl: 3, 55%, 35%;
--background-primary-hsl: 3, 55%, 98%;
--background-primary-alt-hsl: 3, 55%, 95%;
--background-secondary-hsl: 3, 55%, 93%;
--background-secondary-blur-hsl: 3, 55%, 92%;
--background-secondary-alt-hsl: 3, 55%, 74%;
--shadow-color-hsl: 3, 55%, 7%;
--shadow-s: hsla(var(--shadow-color-hsl), 10%) 0 1px 2px 0;
--shadow-l: hsla(var(--shadow-color-hsl), 4%) 0 1px 2px, hsla(var(--shadow-color-hsl), 4%) 0 2px 4px,
  	hsla(var(--shadow-color-hsl), 4%) 0 4px 8px, hsla(var(--shadow-color-hsl), 4%) 0 6px 12px;
}`,
    },
    "pt-color-scheme-custom-lt": {
      light: `.pt-color-scheme-custom-lt {
--color-grey-base-hsl: 0, 0%, 90%;
--color-red-base-hsl: 7, 90%, 92%;
--color-orange-base-hsl: 26, 85%, 89%;
--color-yellow-base-hsl: 42, 88%, 83%;
--color-green-base-hsl: 101, 49%, 85%;
--color-mint-base-hsl: 152, 62%, 85%;
--color-cyan-base-hsl: 184, 60%, 85%;
--color-blue-base-hsl: 217, 76%, 92%;
--color-purple-base-hsl: 251, 87%, 94%;
--color-pink-base-hsl: 328, 79%, 93%;
--color-grey-tint-hsl: 0, 0%, 73%;
--color-red-tint-hsl: 7, 82%, 78%;
--color-orange-tint-hsl: 27, 80%, 69%;
--color-yellow-tint-hsl: 44, 67%, 58%;
--color-green-tint-hsl: 99, 50%, 59%;
--color-mint-tint-hsl: 158, 59%, 55%;
--color-cyan-tint-hsl: 184, 61%, 56%;
--color-blue-tint-hsl: 219, 73%, 78%;
--color-purple-tint-hsl: 252, 84%, 83%;
--color-pink-tint-hsl: 327, 72%, 79%;
--color-grey-text-hsl: 0, 0%, 47%;
--color-red-text-hsl: 3, 68%, 52%;
--color-orange-text-hsl: 31, 100%, 36%;
--color-yellow-text-hsl: 38, 62%, 37%;
--color-green-text-hsl: 93, 100%, 27%;
--color-mint-text-hsl: 161, 100%, 26%;
--color-cyan-text-hsl: 184, 100%, 28%;
--color-blue-text-hsl: 221, 67%, 56%;
--color-purple-text-hsl: 258, 75%, 63%;
--color-pink-text-hsl: 320, 60%, 50%;
--text-normal-hsl: 0, 0%, 15%;
--text-muted-hsl: 0, 0%, 20%;
--text-faint-hsl: 0, 0%, 35%;
--background-primary-hsl: 0, 0%, 100%;
--background-primary-alt-hsl: 0, 0%, 96%;
--background-secondary-hsl: 0, 0%, 93%;
--background-secondary-blur-hsl: 0, 0%, 92%;
--background-secondary-alt-hsl: 0, 0%, 69%;
--shadow-color-hsl: 0, 0%, 0%;
--shadow-s: hsla(var(--shadow-color-hsl), 10%) 0 1px 2px 0;
--shadow-l: hsla(var(--shadow-color-hsl), 3%) 0 1px 2px, hsla(var(--shadow-color-hsl), 3%) 0 2px 4px,
  	hsla(var(--shadow-color-hsl), 3%) 0 4px 8px, hsla(var(--shadow-color-hsl), 3%) 0 6px 12px;
}`,
    },
    "pt-color-scheme-style-minimal-lt": {
      general: `.pt-color-scheme-style-minimal-lt .workspace-leaf div.workspace-leaf-content[data-type=file-tree-view] #file-tree-divider {
background-color: transparent;
}`,
      light: `body.pt-color-scheme-style-minimal-lt {
--background-secondary: var(--background-primary);
--background-secondary-blur: var(--background-primary-blur);
--window-border: 1px solid transparent;
}

body.pt-disable-blur {
--background-secondary-blur: var(--background-primary);
}`,
    },
    "pt-color-scheme-style-border-lt": {
      light: `body.pt-color-scheme-style-border-lt {
--background-secondary: var(--background-primary);
--background-secondary-blur: var(--background-primary-blur);
}

body.pt-disable-blur {
--background-secondary-blur: var(--background-primary);
}`,
    },
    "pt-accent-color-custom-lt": {
      light: `body.pt-accent-color-custom-lt {
--interactive-accent-base-hsl: var(--color-accent-base-lt);
--interactive-accent-tint-hsl: var(--color-accent-tint-lt);
--interactive-accent-text-hsl: var(--color-accent-text-lt);
--interactive-accent-base: hsl(var(--color-accent-base-lt));
--interactive-accent-tint: hsl(var(--color-accent-tint-lt));
--interactive-accent-text: hsl(var(--color-accent-text-lt));
--interactive-accent-hover: hsl(var(--color-accent-tint-lt));
}`,
    },
    "pt-accent-color-red-lt": {
      light: `body.pt-accent-color-red-lt {
--interactive-accent-base-hsl: var(--color-red-base-hsl);
--interactive-accent-tint-hsl: var(--color-red-tint-hsl);
--interactive-accent-text-hsl: var(--color-red-text-hsl);
--interactive-accent-base: var(--color-red-base);
--interactive-accent-tint: var(--color-red-tint);
--interactive-accent-text: var(--color-red-text);
--interactive-accent-hover: var(--color-red-tint);
}`,
    },
    "pt-accent-color-orange-lt": {
      light: `body.pt-accent-color-orange-lt {
--interactive-accent-base-hsl: var(--color-orange-base-hsl);
--interactive-accent-tint-hsl: var(--color-orange-tint-hsl);
--interactive-accent-text-hsl: var(--color-orange-text-hsl);
--interactive-accent-base: var(--color-orange-base);
--interactive-accent-tint: var(--color-orange-tint);
--interactive-accent-text: var(--color-orange-text);
--interactive-accent-hover: var(--color-orange-tint);
}`,
    },
    "pt-accent-color-yellow-lt": {
      light: `body.pt-accent-color-yellow-lt {
--interactive-accent-base-hsl: var(--color-yellow-base-hsl);
--interactive-accent-tint-hsl: var(--color-yellow-tint-hsl);
--interactive-accent-text-hsl: var(--color-yellow-text-hsl);
--interactive-accent-base: var(--color-yellow-base);
--interactive-accent-tint: var(--color-yellow-tint);
--interactive-accent-text: var(--color-yellow-text);
--interactive-accent-hover: var(--color-yellow-tint);
}`,
    },
    "pt-accent-color-green-lt": {
      light: `body.pt-accent-color-green-lt {
--interactive-accent-base-hsl: var(--color-green-base-hsl);
--interactive-accent-tint-hsl: var(--color-green-tint-hsl);
--interactive-accent-text-hsl: var(--color-green-text-hsl);
--interactive-accent-base: var(--color-green-base);
--interactive-accent-tint: var(--color-green-tint);
--interactive-accent-text: var(--color-green-text);
--interactive-accent-hover: var(--color-green-tint);
}`,
    },
    "pt-accent-color-mint-lt": {
      light: `body.pt-accent-color-mint-lt {
--interactive-accent-base-hsl: var(--color-mint-base-hsl);
--interactive-accent-tint-hsl: var(--color-mint-tint-hsl);
--interactive-accent-text-hsl: var(--color-mint-text-hsl);
--interactive-accent-base: var(--color-mint-base);
--interactive-accent-tint: var(--color-mint-tint);
--interactive-accent-text: var(--color-mint-text);
--interactive-accent-hover: var(--color-mint-tint);
}`,
    },
    "pt-accent-color-cyan-lt": {
      light: `body.pt-accent-color-cyan-lt {
--interactive-accent-base-hsl: var(--color-cyan-base-hsl);
--interactive-accent-tint-hsl: var(--color-cyan-tint-hsl);
--interactive-accent-text-hsl: var(--color-cyan-text-hsl);
--interactive-accent-base: var(--color-cyan-base);
--interactive-accent-tint: var(--color-cyan-tint);
--interactive-accent-text: var(--color-cyan-text);
--interactive-accent-hover: var(--color-cyan-tint);
}`,
    },
    "pt-accent-color-blue-lt": {
      light: `body.pt-accent-color-blue-lt {
--interactive-accent-base-hsl: var(--color-blue-base-hsl);
--interactive-accent-tint-hsl: var(--color-blue-tint-hsl);
--interactive-accent-text-hsl: var(--color-blue-text-hsl);
--interactive-accent-base: var(--color-blue-base);
--interactive-accent-tint: var(--color-blue-tint);
--interactive-accent-text: var(--color-blue-text);
--interactive-accent-hover: var(--color-blue-tint);
}`,
    },
    "pt-accent-color-purple-lt": {
      light: `body.pt-accent-color-purple-lt {
--interactive-accent-base-hsl: var(--color-purple-base-hsl);
--interactive-accent-tint-hsl: var(--color-purple-tint-hsl);
--interactive-accent-text-hsl: var(--color-purple-text-hsl);
--interactive-accent-base: var(--color-purple-base);
--interactive-accent-tint: var(--color-purple-tint);
--interactive-accent-text: var(--color-purple-text);
--interactive-accent-hover: var(--color-purple-tint);
}`,
    },
    "pt-accent-color-pink-lt": {
      light: `body.pt-accent-color-pink-lt {
--interactive-accent-base-hsl: var(--color-pink-base-hsl);
--interactive-accent-tint-hsl: var(--color-pink-tint-hsl);
--interactive-accent-text-hsl: var(--color-pink-text-hsl);
--interactive-accent-base: var(--color-pink-base);
--interactive-accent-tint: var(--color-pink-tint);
--interactive-accent-text: var(--color-pink-text);
--interactive-accent-hover: var(--color-pink-tint);
}`,
    },
    "pt-accent-color-grey-lt": {
      light: `body.pt-accent-color-grey-lt {
--interactive-accent-base-hsl: var(--color-grey-base-hsl);
--interactive-accent-tint-hsl: var(--color-grey-tint-hsl);
--interactive-accent-text-hsl: var(--color-grey-text-hsl);
--interactive-accent-base: var(--color-grey-base);
--interactive-accent-tint: var(--color-grey-tint);
--interactive-accent-text: var(--color-grey-text);
--interactive-accent-hover: var(--color-grey-tint);
}`,
    },
    "pt-highlight-text-custom-lt": {
      light: `body.pt-highlight-text-custom-lt {
--highlight-text-normal: var(--highlight-text-accent-custom-lt);
}`,
    },
    "pt-highlight-text-dark-lt": {
      light: `body.pt-highlight-text-dark-lt {
--highlight-text-normal: var(--text-normal);
}`,
    },
    "pt-highlight-text-light-lt": {
      light: `body.pt-highlight-text-light-lt {
--highlight-text-normal: var(--background-primary);
}`,
    },
    "pt-highlight-text-accent-lt": {
      light: `body.pt-highlight-text-accent-lt {
--highlight-text-normal: var(--interactive-accent-text);
}`,
    },
    "pt-color-scheme-mocha-dt": {
      dark: `.pt-color-scheme-mocha-dt {
--color-grey-base-hsl: 0, 0%, 17%;
--color-red-base-hsl: 2, 50%, 20%;
--color-orange-base-hsl: 26, 58%, 16%;
--color-yellow-base-hsl: 43, 64%, 13%;
--color-green-base-hsl: 122, 47%, 13%;
--color-mint-base-hsl: 165, 75%, 11%;
--color-cyan-base-hsl: 196, 57%, 15%;
--color-blue-base-hsl: 225, 47%, 21%;
--color-purple-base-hsl: 271, 45%, 22%;
--color-pink-base-hsl: 326, 50%, 20%;
--color-grey-tint-hsl: 0, 0%, 41%;
--color-red-tint-hsl: 4, 46%, 47%;
--color-orange-tint-hsl: 26, 49%, 38%;
--color-yellow-tint-hsl: 43, 53%, 32%;
--color-green-tint-hsl: 123, 39%, 33%;
--color-mint-tint-hsl: 164, 61%, 29%;
--color-cyan-tint-hsl: 195, 47%, 36%;
--color-blue-tint-hsl: 225, 42%, 50%;
--color-purple-tint-hsl: 271, 41%, 51%;
--color-pink-tint-hsl: 326, 44%, 46%;
--color-grey-text-hsl: 0, 0%, 65%;
--color-red-text-hsl: 4, 69%, 72%;
--color-orange-text-hsl: 26, 74%, 61%;
--color-yellow-text-hsl: 43, 53%, 52%;
--color-green-text-hsl: 123, 43%, 54%;
--color-mint-text-hsl: 165, 56%, 46%;
--color-cyan-text-hsl: 196, 60%, 57%;
--color-blue-text-hsl: 226, 56%, 72%;
--color-purple-text-hsl: 267, 48%, 73%;
--color-pink-text-hsl: 329, 60%, 71%;
--text-normal-hsl: 25, 40%, 91%;
--text-muted-hsl: 25, 40%, 86%;
--text-faint-hsl: 25, 40%, 81%;
--background-primary-hsl: 25, 40%, 18%;
--background-primary-alt-hsl: 25, 40%, 28%;
--background-secondary-hsl: 25, 40%, 12%;
--background-secondary-blur-hsl: 25, 40%, 13%;
--background-secondary-alt-hsl: 25, 40%, 8%;
--shadow-color-hsl: 25, 40%, 7%;
--shadow-s: hsla(var(--shadow-color-hsl), 50%) 0 1px 2px 0;
--shadow-l: hsla(var(--shadow-color-hsl), 50%) 0 1px 2px, hsla(var(--shadow-color-hsl), 50%) 0 2px 4px,
  	hsla(var(--shadow-color-hsl), 50%) 0 4px 8px, hsla(var(--shadow-color-hsl), 50%) 0 6px 12px;
}`,
    },
    "pt-color-scheme-indigo-dt": {
      dark: `.pt-color-scheme-indigo-dt {
--color-grey-base-hsl: 0, 0%, 17%;
--color-red-base-hsl: 2, 50%, 20%;
--color-orange-base-hsl: 26, 58%, 16%;
--color-yellow-base-hsl: 43, 64%, 13%;
--color-green-base-hsl: 124, 48%, 14%;
--color-mint-base-hsl: 165, 75%, 11%;
--color-cyan-base-hsl: 196, 57%, 15%;
--color-blue-base-hsl: 225, 47%, 21%;
--color-purple-base-hsl: 271, 45%, 22%;
--color-pink-base-hsl: 326, 50%, 20%;
--color-grey-tint-hsl: 0, 0%, 41%;
--color-red-tint-hsl: 4, 46%, 47%;
--color-orange-tint-hsl: 26, 49%, 38%;
--color-yellow-tint-hsl: 43, 53%, 32%;
--color-green-tint-hsl: 123, 39%, 33%;
--color-mint-tint-hsl: 164, 61%, 29%;
--color-cyan-tint-hsl: 196, 48%, 36%;
--color-blue-tint-hsl: 225, 42%, 50%;
--color-purple-tint-hsl: 271, 41%, 51%;
--color-pink-tint-hsl: 326, 44%, 46%;
--color-grey-text-hsl: 0, 0%, 65%;
--color-red-text-hsl: 4, 69%, 72%;
--color-orange-text-hsl: 26, 74%, 61%;
--color-yellow-text-hsl: 43, 53%, 52%;
--color-green-text-hsl: 123, 43%, 54%;
--color-mint-text-hsl: 165, 56%, 46%;
--color-cyan-text-hsl: 196, 60%, 57%;
--color-blue-text-hsl: 226, 56%, 72%;
--color-purple-text-hsl: 267, 48%, 73%;
--color-pink-text-hsl: 329, 60%, 71%;
--text-normal-hsl: 225, 40%, 91%;
--text-muted-hsl: 225, 40%, 86%;
--text-faint-hsl: 225, 40%, 81%;
--background-primary-hsl: 225, 40%, 20%;
--background-primary-alt-hsl: 225, 40%, 33%;
--background-secondary-hsl: 225, 40%, 13%;
--background-secondary-blur-hsl: 225, 40%, 14%;
--background-secondary-alt-hsl: 225, 40%, 9%;
--shadow-color-hsl: 225, 40%, 7%;
--shadow-s: hsla(var(--shadow-color-hsl), 10%) 0 1px 2px 0;
--shadow-l: hsla(var(--shadow-color-hsl), 10%) 0 1px 2px, hsla(var(--shadow-color-hsl), 10%) 0 2px 4px,
  	hsla(var(--shadow-color-hsl), 10%) 0 4px 8px, hsla(var(--shadow-color-hsl), 10%) 0 6px 12px;
}`,
    },
    "pt-color-scheme-pine-dt": {
      dark: `.pt-color-scheme-pine-dt {
--color-grey-base-hsl: 0, 0%, 17%;
--color-red-base-hsl: 2, 50%, 20%;
--color-orange-base-hsl: 26, 59%, 15%;
--color-yellow-base-hsl: 43, 66%, 13%;
--color-green-base-hsl: 122, 48%, 13%;
--color-mint-base-hsl: 164, 75%, 11%;
--color-cyan-base-hsl: 196, 56%, 14%;
--color-blue-base-hsl: 225, 48%, 21%;
--color-purple-base-hsl: 272, 45%, 21%;
--color-pink-base-hsl: 326, 52%, 19%;
--color-grey-tint-hsl: 0, 0%, 40%;
--color-red-tint-hsl: 3, 46%, 47%;
--color-orange-tint-hsl: 26, 49%, 38%;
--color-yellow-tint-hsl: 43, 52%, 32%;
--color-green-tint-hsl: 123, 39%, 33%;
--color-mint-tint-hsl: 165, 60%, 28%;
--color-cyan-tint-hsl: 195, 48%, 35%;
--color-blue-tint-hsl: 225, 42%, 49%;
--color-purple-tint-hsl: 271, 41%, 51%;
--color-pink-tint-hsl: 327, 44%, 46%;
--color-grey-text-hsl: 0, 0%, 66%;
--color-red-text-hsl: 5, 70%, 73%;
--color-orange-text-hsl: 26, 78%, 63%;
--color-yellow-text-hsl: 43, 56%, 53%;
--color-green-text-hsl: 123, 44%, 55%;
--color-mint-text-hsl: 165, 56%, 48%;
--color-cyan-text-hsl: 196, 63%, 58%;
--color-blue-text-hsl: 226, 56%, 74%;
--color-purple-text-hsl: 268, 48%, 74%;
--color-pink-text-hsl: 330, 59%, 73%;
--text-normal-hsl: 123, 39%, 93%;
--text-muted-hsl: 123, 39%, 88%;
--text-faint-hsl: 123, 39%, 83%;
--background-primary-hsl: 123, 39%, 15%;
--background-primary-alt-hsl: 123, 39%, 23%;
--background-secondary-hsl: 123, 39%, 9%;
--background-secondary-blur-hsl: 123, 39%, 10%;
--background-secondary-alt-hsl: 123, 39%, 6%;
--shadow-color-hsl: 123, 39%, 7%;
--shadow-s: hsla(var(--shadow-color-hsl), 10%) 0 1px 2px 0;
--shadow-l: hsla(var(--shadow-color-hsl), 10%) 0 1px 2px, hsla(var(--shadow-color-hsl), 10%) 0 2px 4px,
  	hsla(var(--shadow-color-hsl), 10%) 0 4px 8px, hsla(var(--shadow-color-hsl), 10%) 0 6px 12px;
}`,
    },
    "pt-color-scheme-cherry-dt": {
      dark: `.pt-color-scheme-cherry-dt {
--color-grey-base-hsl: 0, 0%, 17%;
--color-red-base-hsl: 2, 50%, 20%;
--color-orange-base-hsl: 26, 59%, 16%;
--color-yellow-base-hsl: 43, 64%, 13%;
--color-green-base-hsl: 124, 48%, 14%;
--color-mint-base-hsl: 165, 75%, 11%;
--color-cyan-base-hsl: 196, 57%, 15%;
--color-blue-base-hsl: 225, 47%, 21%;
--color-purple-base-hsl: 272, 45%, 22%;
--color-pink-base-hsl: 326, 50%, 20%;
--color-grey-tint-hsl: 0, 0%, 41%;
--color-red-tint-hsl: 4, 46%, 47%;
--color-orange-tint-hsl: 26, 49%, 38%;
--color-yellow-tint-hsl: 43, 53%, 32%;
--color-green-tint-hsl: 123, 39%, 33%;
--color-mint-tint-hsl: 164, 61%, 29%;
--color-cyan-tint-hsl: 196, 48%, 36%;
--color-blue-tint-hsl: 225, 42%, 50%;
--color-purple-tint-hsl: 272, 42%, 51%;
--color-pink-tint-hsl: 326, 44%, 46%;
--color-grey-text-hsl: 0, 0%, 67%;
--color-red-text-hsl: 4, 70%, 74%;
--color-orange-text-hsl: 26, 80%, 63%;
--color-yellow-text-hsl: 43, 57%, 54%;
--color-green-text-hsl: 123, 45%, 55%;
--color-mint-text-hsl: 165, 56%, 48%;
--color-cyan-text-hsl: 195, 64%, 59%;
--color-blue-text-hsl: 226, 56%, 74%;
--color-purple-text-hsl: 268, 48%, 75%;
--color-pink-text-hsl: 330, 60%, 74%;
--text-normal-hsl: 2, 48%, 93%;
--text-muted-hsl: 2, 48%, 88%;
--text-faint-hsl: 2, 48%, 83%;
--background-primary-hsl: 2, 48%, 19%;
--background-primary-alt-hsl: 2, 48%, 29%;
--background-secondary-hsl: 2, 48%, 12%;
--background-secondary-blur-hsl: 2, 48%, 13%;
--background-secondary-alt-hsl: 2, 48%, 8%;
--shadow-color-hsl: 2, 48%, 7%;
--shadow-s: hsla(var(--shadow-color-hsl), 10%) 0 1px 2px 0;
--shadow-l: hsla(var(--shadow-color-hsl), 10%) 0 1px 2px, hsla(var(--shadow-color-hsl), 10%) 0 2px 4px,
  	hsla(var(--shadow-color-hsl), 10%) 0 4px 8px, hsla(var(--shadow-color-hsl), 10%) 0 6px 12px;
}`,
    },
    "pt-color-scheme-custom-dt": {
      dark: `.pt-color-scheme-custom-dt {
--color-grey-base-hsl: 0, 0%, 16%;
--color-red-base-hsl: 2, 55%, 19%;
--color-orange-base-hsl: 26, 65%, 15%;
--color-yellow-base-hsl: 43, 73%, 12%;
--color-green-base-hsl: 124, 54%, 12%;
--color-mint-base-hsl: 165, 88%, 10%;
--color-cyan-base-hsl: 195, 65%, 13%;
--color-blue-base-hsl: 225, 50%, 20%;
--color-purple-base-hsl: 271, 48%, 21%;
--color-pink-base-hsl: 325, 55%, 18%;
--color-grey-tint-hsl: 0, 0%, 40%;
--color-red-tint-hsl: 3, 49%, 46%;
--color-orange-tint-hsl: 27, 53%, 37%;
--color-yellow-tint-hsl: 44, 59%, 31%;
--color-green-tint-hsl: 123, 43%, 32%;
--color-mint-tint-hsl: 166, 73%, 26%;
--color-cyan-tint-hsl: 195, 52%, 34%;
--color-blue-tint-hsl: 224, 44%, 49%;
--color-purple-tint-hsl: 271, 43%, 51%;
--color-pink-tint-hsl: 325, 47%, 45%;
--color-grey-text-hsl: 0, 0%, 67%;
--color-red-text-hsl: 4, 74%, 74%;
--color-orange-text-hsl: 26, 85%, 63%;
--color-yellow-text-hsl: 44, 60%, 53%;
--color-green-text-hsl: 124, 48%, 54%;
--color-mint-text-hsl: 166, 67%, 45%;
--color-cyan-text-hsl: 195, 69%, 58%;
--color-blue-text-hsl: 225, 61%, 75%;
--color-purple-text-hsl: 267, 52%, 75%;
--color-pink-text-hsl: 330, 64%, 74%;
--text-normal-hsl: 0, 0%, 91%;
--text-muted-hsl: 0, 0%, 86%;
--text-faint-hsl: 0, 0%, 81%;
--background-primary-hsl: 0, 0%, 18%;
--background-primary-alt-hsl: 0, 0%, 30%;
--background-secondary-hsl: 0, 0%, 12%;
--background-secondary-blur-hsl: 0, 0%, 13%;
--background-secondary-alt-hsl: 0, 0%, 8%;
--shadow-color-hsl: 0, 0%, 0%;
--shadow-s: hsla(var(--shadow-color-hsl), 10%) 0 1px 2px 0;
--shadow-l: hsla(var(--shadow-color-hsl), 5%) 0 1px 2px, hsla(var(--shadow-color-hsl), 5%) 0 2px 4px,
  	hsla(var(--shadow-color-hsl), 5%) 0 4px 8px, hsla(var(--shadow-color-hsl), 5%) 0 6px 12px;
}`,
    },
    "pt-color-scheme-style-minimal-dt": {
      general: `.pt-color-scheme-style-minimal-dt .workspace-ribbon.mod-left.is-collapsed {
border-right-color: transparent;
}

.pt-color-scheme-style-minimal-dt .workspace-leaf div.workspace-leaf-content[data-type=file-tree-view] #file-tree-divider {
background-color: transparent;
}`,
      dark: `body.pt-color-scheme-style-minimal-dt {
--background-secondary: var(--background-secondary-alt);
--background-secondary-blur: var(--background-secondary-alt-blur);
--window-border: 1px solid transparent;
}

body.pt-disable-blur {
--background-secondary-blur: var(--background-secondary-alt);
}`,
    },
    "pt-color-scheme-style-border-dt": {
      dark: `body.pt-color-scheme-style-border-dt {
--background-secondary: var(--background-secondary-alt);
--background-secondary-blur: var(--background-secondary-alt-blur);
}

body.pt-disable-blur {
--background-secondary-blur: var(--background-secondary-alt);
}`,
    },
    "pt-accent-color-custom-dt": {
      dark: `body.pt-accent-color-custom-dt {
--interactive-accent-base-hsl: var(--color-accent-base-dt);
--interactive-accent-tint-hsl: var(--color-accent-tint-dt);
--interactive-accent-text-hsl: var(--color-accent-text-dt);
--interactive-accent-base: hsl(var(--color-accent-base-dt));
--interactive-accent-tint: hsl(var(--color-accent-tint-dt));
--interactive-accent-text: hsl(var(--color-accent-text-dt));
--interactive-accent-hover: hsl(var(--color-accent-tint-dt));
}`,
    },
    "pt-accent-color-red-dt": {
      dark: `body.pt-accent-color-red-dt {
--interactive-accent-base-hsl: var(--color-red-base-hsl);
--interactive-accent-tint-hsl: var(--color-red-tint-hsl);
--interactive-accent-text-hsl: var(--color-red-text-hsl);
--interactive-accent-base: var(--color-red-base);
--interactive-accent-tint: var(--color-red-tint);
--interactive-accent-text: var(--color-red-text);
--interactive-accent-hover: var(--color-red-tint);
}`,
    },
    "pt-accent-color-orange-dt": {
      dark: `body.pt-accent-color-orange-dt {
--interactive-accent-base-hsl: var(--color-orange-base-hsl);
--interactive-accent-tint-hsl: var(--color-orange-tint-hsl);
--interactive-accent-text-hsl: var(--color-orange-text-hsl);
--interactive-accent-base: var(--color-orange-base);
--interactive-accent-tint: var(--color-orange-tint);
--interactive-accent-text: var(--color-orange-text);
--interactive-accent-hover: var(--color-orange-tint);
}`,
    },
    "pt-accent-color-yellow-dt": {
      dark: `body.pt-accent-color-yellow-dt {
--interactive-accent-base-hsl: var(--color-yellow-base-hsl);
--interactive-accent-tint-hsl: var(--color-yellow-tint-hsl);
--interactive-accent-text-hsl: var(--color-yellow-text-hsl);
--interactive-accent-base: var(--color-yellow-base);
--interactive-accent-tint: var(--color-yellow-tint);
--interactive-accent-text: var(--color-yellow-text);
--interactive-accent-hover: var(--color-yellow-tint);
}`,
    },
    "pt-accent-color-green-dt": {
      dark: `body.pt-accent-color-green-dt {
--interactive-accent-base-hsl: var(--color-green-base-hsl);
--interactive-accent-tint-hsl: var(--color-green-tint-hsl);
--interactive-accent-text-hsl: var(--color-green-text-hsl);
--interactive-accent-base: var(--color-green-base);
--interactive-accent-tint: var(--color-green-tint);
--interactive-accent-text: var(--color-green-text);
--interactive-accent-hover: var(--color-green-tint);
}`,
    },
    "pt-accent-color-mint-dt": {
      dark: `body.pt-accent-color-mint-dt {
--interactive-accent-base-hsl: var(--color-mint-base-hsl);
--interactive-accent-tint-hsl: var(--color-mint-tint-hsl);
--interactive-accent-text-hsl: var(--color-mint-text-hsl);
--interactive-accent-base: var(--color-mint-base);
--interactive-accent-tint: var(--color-mint-tint);
--interactive-accent-text: var(--color-mint-text);
--interactive-accent-hover: var(--color-mint-tint);
}`,
    },
    "pt-accent-color-cyan-dt": {
      dark: `body.pt-accent-color-cyan-dt {
--interactive-accent-base-hsl: var(--color-cyan-base-hsl);
--interactive-accent-tint-hsl: var(--color-cyan-tint-hsl);
--interactive-accent-text-hsl: var(--color-cyan-text-hsl);
--interactive-accent-base: var(--color-cyan-base);
--interactive-accent-tint: var(--color-cyan-tint);
--interactive-accent-text: var(--color-cyan-text);
--interactive-accent-hover: var(--color-cyan-tint);
}`,
    },
    "pt-accent-color-blue-dt": {
      dark: `body.pt-accent-color-blue-dt {
--interactive-accent-base-hsl: var(--color-blue-base-hsl);
--interactive-accent-tint-hsl: var(--color-blue-tint-hsl);
--interactive-accent-text-hsl: var(--color-blue-text-hsl);
--interactive-accent-base: var(--color-blue-base);
--interactive-accent-tint: var(--color-blue-tint);
--interactive-accent-text: var(--color-blue-text);
--interactive-accent-hover: var(--color-blue-tint);
}`,
    },
    "pt-accent-color-purple-dt": {
      dark: `body.pt-accent-color-purple-dt {
--interactive-accent-base-hsl: var(--color-purple-base-hsl);
--interactive-accent-tint-hsl: var(--color-purple-tint-hsl);
--interactive-accent-text-hsl: var(--color-purple-text-hsl);
--interactive-accent-base: var(--color-purple-base);
--interactive-accent-tint: var(--color-purple-tint);
--interactive-accent-text: var(--color-purple-text);
--interactive-accent-hover: var(--color-purple-tint);
}`,
    },
    "pt-accent-color-pink-dt": {
      dark: `body.pt-accent-color-pink-dt {
--interactive-accent-base-hsl: var(--color-pink-base-hsl);
--interactive-accent-tint-hsl: var(--color-pink-tint-hsl);
--interactive-accent-text-hsl: var(--color-pink-text-hsl);
--interactive-accent-base: var(--color-pink-base);
--interactive-accent-tint: var(--color-pink-tint);
--interactive-accent-text: var(--color-pink-text);
--interactive-accent-hover: var(--color-pink-tint);
}`,
    },
    "pt-accent-color-grey-dt": {
      dark: `body.pt-accent-color-grey-dt {
--interactive-accent-base-hsl: var(--color-grey-base-hsl);
--interactive-accent-tint-hsl: var(--color-grey-tint-hsl);
--interactive-accent-text-hsl: var(--color-grey-text-hsl);
--interactive-accent-base: var(--color-grey-base);
--interactive-accent-tint: var(--color-grey-tint);
--interactive-accent-text: var(--color-grey-text);
--interactive-accent-hover: var(--color-grey-tint);
}`,
    },
    "pt-highlight-text-custom-dt": {
      dark: `body.pt-highlight-text-custom-dt {
--highlight-text-normal: var(--highlight-text-accent-custom-dt);
}`,
    },
    "pt-highlight-text-dark-dt": {
      dark: `body.pt-highlight-text-dark-dt {
--highlight-text-normal: var(--background-primary);
}`,
    },
    "pt-highlight-text-light-dt": {
      dark: `body.pt-highlight-text-light-dt {
--highlight-text-normal: var(--text-normal);
}`,
    },
    "pt-highlight-text-accent-dt": {
      dark: `body.pt-highlight-text-accent-dt {
--highlight-text-normal: var(--interactive-accent-text);
}`,
    },
    "pt-custom-vault-banner": {
      general: `.pt-custom-vault-banner .workspace-drawer-vault-name {
display: flex;
align-items: center;
}

.pt-custom-vault-banner .workspace-drawer-vault-name::before {
display: inline-flex;
min-width: 24px;
height: 24px;
margin-right: var(--size-4-2);
content: "";
background-image: var(--custom-vault-banner-icon-url);
background-repeat: no-repeat;
background-position: center;
background-size: contain;
}

.is-mobile .mod-left .workspace-drawer-header::before {
display: block;
width: 32px;
height: 48px;
margin: 0 var(--size-4-2);
content: "";
background-image: var(--custom-vault-banner-icon-url);
background-repeat: no-repeat;
background-position: center;
background-size: contain;
border-radius: unset;
}`,
    },
    "pt-focused-mode": {
      general: `body.pt-focused-style-main-only:not(.is-popout-window) .status-bar, body.pt-focused-style-main-only:not(.is-popout-window) .workspace-ribbon, body.pt-focused-style-main-only:not(.is-popout-window) .view-header, body.pt-focused-style-main-only:not(.is-popout-window) .workspace-split.mod-root .workspace-tab-header-container, body.pt-focused-style-main-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-left-split, body.pt-focused-style-main-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-right-split, body.pt-focused-style-main-only:not(.is-popout-window) .workspace-ribbon.mod-left.is-collapsed, body.pt-focused-style-main-only:not(.is-popout-window) .workspace-ribbon.mod-right.is-collapsed, body.pt-focused-style-main-only:not(.is-popout-window) .mobile-navbar, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .status-bar, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-ribbon, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .view-header, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-split.mod-root .workspace-tab-header-container, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-left-split, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-right-split, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-ribbon.mod-left.is-collapsed, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-ribbon.mod-right.is-collapsed, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .mobile-navbar, body.is-popout-window.pt-focused-style-popout-only .status-bar, body.is-popout-window.pt-focused-style-popout-only .workspace-ribbon, body.is-popout-window.pt-focused-style-popout-only .view-header, body.is-popout-window.pt-focused-style-popout-only .workspace-split.mod-root .workspace-tab-header-container, body.is-popout-window.pt-focused-style-popout-only .workspace-split.mod-horizontal.mod-left-split, body.is-popout-window.pt-focused-style-popout-only .workspace-split.mod-horizontal.mod-right-split, body.is-popout-window.pt-focused-style-popout-only .workspace-ribbon.mod-left.is-collapsed, body.is-popout-window.pt-focused-style-popout-only .workspace-ribbon.mod-right.is-collapsed, body.is-popout-window.pt-focused-style-popout-only .mobile-navbar, body.is-popout-window.pt-focused-style-main-and-popout-only .status-bar, body.is-popout-window.pt-focused-style-main-and-popout-only .workspace-ribbon, body.is-popout-window.pt-focused-style-main-and-popout-only .view-header, body.is-popout-window.pt-focused-style-main-and-popout-only .workspace-split.mod-root .workspace-tab-header-container, body.is-popout-window.pt-focused-style-main-and-popout-only .workspace-split.mod-horizontal.mod-left-split, body.is-popout-window.pt-focused-style-main-and-popout-only .workspace-split.mod-horizontal.mod-right-split, body.is-popout-window.pt-focused-style-main-and-popout-only .workspace-ribbon.mod-left.is-collapsed, body.is-popout-window.pt-focused-style-main-and-popout-only .workspace-ribbon.mod-right.is-collapsed, body.is-popout-window.pt-focused-style-main-and-popout-only .mobile-navbar {
opacity: var(--fade-away-opacity);
transition: opacity 250ms;
transition-delay: var(--fade-away-delay);
}

body.pt-focused-style-main-only:not(.is-popout-window) .status-bar:hover, body.pt-focused-style-main-only:not(.is-popout-window) .workspace-ribbon:hover, body.pt-focused-style-main-only:not(.is-popout-window) .view-header:hover, body.pt-focused-style-main-only:not(.is-popout-window) .workspace-split.mod-root .workspace-tab-header-container:hover, body.pt-focused-style-main-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-left-split:hover, body.pt-focused-style-main-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-right-split:hover, body.pt-focused-style-main-only:not(.is-popout-window) .workspace-ribbon.mod-left.is-collapsed:hover, body.pt-focused-style-main-only:not(.is-popout-window) .workspace-ribbon.mod-right.is-collapsed:hover, body.pt-focused-style-main-only:not(.is-popout-window) .mobile-navbar:hover, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .status-bar:hover, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-ribbon:hover, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .view-header:hover, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-split.mod-root .workspace-tab-header-container:hover, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-left-split:hover, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-right-split:hover, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-ribbon.mod-left.is-collapsed:hover, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-ribbon.mod-right.is-collapsed:hover, body.pt-focused-style-main-and-popout-only:not(.is-popout-window) .mobile-navbar:hover, body.is-popout-window.pt-focused-style-popout-only .status-bar:hover, body.is-popout-window.pt-focused-style-popout-only .workspace-ribbon:hover, body.is-popout-window.pt-focused-style-popout-only .view-header:hover, body.is-popout-window.pt-focused-style-popout-only .workspace-split.mod-root .workspace-tab-header-container:hover, body.is-popout-window.pt-focused-style-popout-only .workspace-split.mod-horizontal.mod-left-split:hover, body.is-popout-window.pt-focused-style-popout-only .workspace-split.mod-horizontal.mod-right-split:hover, body.is-popout-window.pt-focused-style-popout-only .workspace-ribbon.mod-left.is-collapsed:hover, body.is-popout-window.pt-focused-style-popout-only .workspace-ribbon.mod-right.is-collapsed:hover, body.is-popout-window.pt-focused-style-popout-only .mobile-navbar:hover, body.is-popout-window.pt-focused-style-main-and-popout-only .status-bar:hover, body.is-popout-window.pt-focused-style-main-and-popout-only .workspace-ribbon:hover, body.is-popout-window.pt-focused-style-main-and-popout-only .view-header:hover, body.is-popout-window.pt-focused-style-main-and-popout-only .workspace-split.mod-root .workspace-tab-header-container:hover, body.is-popout-window.pt-focused-style-main-and-popout-only .workspace-split.mod-horizontal.mod-left-split:hover, body.is-popout-window.pt-focused-style-main-and-popout-only .workspace-split.mod-horizontal.mod-right-split:hover, body.is-popout-window.pt-focused-style-main-and-popout-only .workspace-ribbon.mod-left.is-collapsed:hover, body.is-popout-window.pt-focused-style-main-and-popout-only .workspace-ribbon.mod-right.is-collapsed:hover, body.is-popout-window.pt-focused-style-main-and-popout-only .mobile-navbar:hover {
opacity: unset;
transition: opacity 50ms;
}`,
    },
    "pt-focused-style-main-only": {
      general: `body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .status-bar, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .workspace-ribbon, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .view-header, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .workspace-split.mod-root .workspace-tab-header-container, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-left-split, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-right-split, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .workspace-ribbon.mod-left.is-collapsed, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .workspace-ribbon.mod-right.is-collapsed, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .mobile-navbar {
opacity: var(--fade-away-opacity);
transition: opacity 250ms;
transition-delay: var(--fade-away-delay);
}

body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .status-bar:hover, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .workspace-ribbon:hover, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .view-header:hover, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .workspace-split.mod-root .workspace-tab-header-container:hover, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-left-split:hover, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-right-split:hover, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .workspace-ribbon.mod-left.is-collapsed:hover, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .workspace-ribbon.mod-right.is-collapsed:hover, body.pt-focused-mode.pt-focused-style-main-only:not(.is-popout-window) .mobile-navbar:hover {
opacity: unset;
transition: opacity 50ms;
}`,
    },
    "pt-focused-style-popout-only": {
      general: `body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .status-bar, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .workspace-ribbon, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .view-header, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .workspace-split.mod-root .workspace-tab-header-container, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .workspace-split.mod-horizontal.mod-left-split, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .workspace-split.mod-horizontal.mod-right-split, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .workspace-ribbon.mod-left.is-collapsed, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .workspace-ribbon.mod-right.is-collapsed, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .mobile-navbar {
opacity: var(--fade-away-opacity);
transition: opacity 250ms;
transition-delay: var(--fade-away-delay);
}

body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .status-bar:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .workspace-ribbon:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .view-header:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .workspace-split.mod-root .workspace-tab-header-container:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .workspace-split.mod-horizontal.mod-left-split:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .workspace-split.mod-horizontal.mod-right-split:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .workspace-ribbon.mod-left.is-collapsed:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .workspace-ribbon.mod-right.is-collapsed:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-popout-only .mobile-navbar:hover {
opacity: unset;
transition: opacity 50ms;
}`,
    },
    "pt-focused-style-main-and-popout-only": {
      general: `body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .status-bar, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-ribbon, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .view-header, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-split.mod-root .workspace-tab-header-container, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-left-split, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-right-split, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-ribbon.mod-left.is-collapsed, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-ribbon.mod-right.is-collapsed, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .mobile-navbar, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .status-bar, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .workspace-ribbon, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .view-header, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .workspace-split.mod-root .workspace-tab-header-container, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .workspace-split.mod-horizontal.mod-left-split, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .workspace-split.mod-horizontal.mod-right-split, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .workspace-ribbon.mod-left.is-collapsed, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .workspace-ribbon.mod-right.is-collapsed, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .mobile-navbar {
opacity: var(--fade-away-opacity);
transition: opacity 250ms;
transition-delay: var(--fade-away-delay);
}

body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .status-bar:hover, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-ribbon:hover, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .view-header:hover, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-split.mod-root .workspace-tab-header-container:hover, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-left-split:hover, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-split.mod-horizontal.mod-right-split:hover, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-ribbon.mod-left.is-collapsed:hover, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .workspace-ribbon.mod-right.is-collapsed:hover, body.pt-focused-mode.pt-focused-style-main-and-popout-only:not(.is-popout-window) .mobile-navbar:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .status-bar:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .workspace-ribbon:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .view-header:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .workspace-split.mod-root .workspace-tab-header-container:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .workspace-split.mod-horizontal.mod-left-split:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .workspace-split.mod-horizontal.mod-right-split:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .workspace-ribbon.mod-left.is-collapsed:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .workspace-ribbon.mod-right.is-collapsed:hover, body.pt-focused-mode.is-popout-window.pt-focused-style-main-and-popout-only .mobile-navbar:hover {
opacity: unset;
transition: opacity 50ms;
}`,
    },
    "pt-font-alt-a": {
      general: `.pt-font-alt-a * {
font-feature-settings: "ss03";
}

.pt-font-alt-g * {
font-feature-settings: "ss03", "ss04";
}`,
    },
    "pt-font-alt-g": {
      general: `.pt-font-alt-g * {
font-feature-settings: "ss04";
}

.pt-font-alt-a.pt-font-alt-g * {
font-feature-settings: "ss03", "ss04";
}`,
    },
    "pt-font-slashed-zero": {
      general: `.pt-font-slashed-zero * {
font-variant: slashed-zero;
}`,
    },
    "pt-font-disable-ligatures": {
      general: `.pt-font-disable-ligatures * {
font-variant-ligatures: none;
}`,
    },
    "pt-highlight-style-default-lt": {
      dark: `:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class], body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
      light: `:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class], body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
    },
    "pt-highlight-style-border-lt": {
      dark: `:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class], body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
      light: `:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class], body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
    },
    "pt-highlight-style-filled-lt": {
      dark: `:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class], body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
      light: `:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class], body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
    },
    "pt-highlight-style-borderandfilled-lt": {
      dark: `:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class], body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
      light: `:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class], body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
    },
    "pt-highlight-text-default-lt": {
      dark: `:is(body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-text-default-lt mark[class], body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-default-dt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-text-default-lt mark[class].mark-text-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-default-dt mark[class]).mark-text-default {
color: var(--text-normal);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-text-default-lt mark[class].mark-text-color, body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-default-dt mark[class]).mark-text-color {
color: var(--mark-highlight-text);
}`,
      light: `:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-default-lt mark[class], body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-text-default-dt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-default-lt mark[class].mark-text-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-text-default-dt mark[class]).mark-text-default {
color: var(--text-normal);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-default-lt mark[class].mark-text-color, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-text-default-dt mark[class]).mark-text-color {
color: var(--mark-highlight-text);
}`,
    },
    "pt-highlight-text-color-lt": {
      dark: `:is(body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-text-color-lt mark[class], body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-color-dt mark[class]), body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-text-color-lt mark[class].mark-text-color {
color: var(--mark-highlight-text);
}`,
      light: `body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-color-lt mark[class].mark-text-default {
color: var(--text-normal);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-color-lt mark[class], body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-text-color-dt mark[class]), body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-color-lt mark[class].mark-text-color {
color: var(--mark-highlight-text);
}`,
    },
    "pt-highlight-style-default-dt": {
      dark: `:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class], body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
      light: `:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class], body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
    },
    "pt-highlight-style-border-dt": {
      dark: `:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class], body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
      light: `:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class], body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
    },
    "pt-highlight-style-filled-dt": {
      dark: `:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class], body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
      light: `:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class], body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
    },
    "pt-highlight-style-borderandfilled-dt": {
      dark: `:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class], body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
      light: `:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-default) {
padding: 0;
font-size: 1em;
background-color: unset;
border: unset;
opacity: 1;
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-border, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-border) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: unset;
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-filled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-filled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-base);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class], body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-default-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-default-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-border-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-border-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-filled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-filled-lt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-style-borderandfilled-dt mark[class].mark-borderandfilled, body:not(.pt-disable-mark-highlight-styling).pt-highlight-style-borderandfilled-lt mark[class].mark-borderandfilled) {
padding: 0 3px;
font-size: var(--font-smallest);
background-color: var(--mark-highlight-base);
border: var(--accent-border-width) solid var(--mark-highlight-tint);
}`,
    },
    "pt-highlight-text-default-dt": {
      dark: `:is(body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-text-default-lt mark[class], body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-default-dt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-text-default-lt mark[class].mark-text-default, body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-default-dt mark[class]).mark-text-default {
color: var(--text-normal);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-text-default-lt mark[class].mark-text-color, body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-default-dt mark[class]).mark-text-color {
color: var(--mark-highlight-text);
}`,
      light: `:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-default-lt mark[class], body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-text-default-dt mark[class]), :is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-default-lt mark[class].mark-text-default, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-text-default-dt mark[class]).mark-text-default {
color: var(--text-normal);
}

:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-default-lt mark[class].mark-text-color, body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-text-default-dt mark[class]).mark-text-color {
color: var(--mark-highlight-text);
}`,
    },
    "pt-highlight-text-color-dt": {
      dark: `body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-color-dt mark[class].mark-text-default {
color: var(--text-normal);
}

:is(body:not(.pt-disable-mark-highlight-styling).theme-light.pt-highlight-text-color-lt mark[class], body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-color-dt mark[class]), body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-color-dt mark[class].mark-text-color {
color: var(--mark-highlight-text);
}`,
      light: `:is(body:not(.pt-disable-mark-highlight-styling).pt-highlight-text-color-lt mark[class], body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-text-color-dt mark[class]), body:not(.pt-disable-mark-highlight-styling).theme-dark.pt-highlight-text-color-dt mark[class].mark-text-color {
color: var(--mark-highlight-text);
}`,
    },
    "pt-tab-label-left-sidebar-left": {
      general: `.pt-tab-label-left-sidebar-left .workspace-split.mod-left-split .workspace-tab-header-container {
justify-content: flex-start;
}`,
    },
    "pt-tab-label-left-sidebar-center": {
      general: `.pt-tab-label-left-sidebar-center .workspace-split.mod-left-split .workspace-tab-header-container {
justify-content: center;
}

.pt-tab-label-left-sidebar-center .workspace-split.mod-left-split .workspace-tab-header-container .workspace-tab-header-spacer {
display: none;
}

.pt-tab-label-left-sidebar-center .workspace-split.mod-left-split .workspace-tab-header-container .workspace-tab-header-container-inner {
margin-left: auto;
margin-right: auto;
}`,
    },
    "pt-tab-label-left-sidebar-right": {
      general: `.pt-tab-label-left-sidebar-right .workspace-split.mod-left-split .workspace-tab-header-container {
justify-content: flex-end;
}

.pt-tab-label-left-sidebar-right .workspace-split.mod-left-split .workspace-tab-header-container .workspace-tab-header-spacer {
display: none;
}`,
    },
    "pt-tab-label-right-sidebar-left": {
      general: `.pt-tab-label-right-sidebar-left .workspace-split.mod-right-split .workspace-tab-header-container {
justify-content: flex-start;
}`,
    },
    "pt-tab-label-right-sidebar-center": {
      general: `.pt-tab-label-right-sidebar-center .workspace-split.mod-right-split .workspace-tab-header-container {
justify-content: center;
}

.pt-tab-label-right-sidebar-center .workspace-split.mod-right-split .workspace-tab-header-container .workspace-tab-header-spacer {
display: none;
}

.pt-tab-label-right-sidebar-center .workspace-split.mod-right-split .workspace-tab-header-container .workspace-tab-header-container-inner {
margin-left: auto;
margin-right: auto;
}`,
    },
    "pt-tab-label-right-sidebar-right": {
      general: `.pt-tab-label-right-sidebar-right .workspace-split.mod-right-split .workspace-tab-header-container {
justify-content: flex-end;
}

.pt-tab-label-right-sidebar-right .workspace-split.mod-right-split .workspace-tab-header-container .workspace-tab-header-spacer {
display: none;
}`,
    },
    "pt-nav-header-left-sidebar-position-top": {
      general: `.pt-nav-header-left-sidebar-position-top .workspace-leaf-content[data-type=dictionary-view] .search-input-container {
border-top: var(--window-border);
}`,
    },
    "pt-nav-header-left-sidebar-position-bottom": {
      general: `.pt-nav-header-left-sidebar-position-bottom .workspace-drawer.mod-left .nav-header, .pt-nav-header-left-sidebar-position-bottom .workspace-split.mod-left-split .nav-header {
position: absolute;
bottom: calc(var(--size-2-2) + var(--scroll-bar-size));
z-index: var(--layer-popover);
order: 10;
width: -webkit-fill-available;
width: fill-available;
height: unset;
padding: 0 calc(var(--size-2-2) + var(--scroll-bar-size)) 0 var(--size-2-2);
pointer-events: none;
background-color: unset;
border-bottom: unset;
}

.pt-nav-header-left-sidebar-position-bottom .workspace-drawer.mod-left .nav-buttons-container, .pt-nav-header-left-sidebar-position-bottom .workspace-drawer.mod-left .workspace-leaf-content[data-type=dangling-links] .nav-header, .pt-nav-header-left-sidebar-position-bottom .workspace-split.mod-left-split .nav-buttons-container, .pt-nav-header-left-sidebar-position-bottom .workspace-split.mod-left-split .workspace-leaf-content[data-type=dangling-links] .nav-header {
padding: var(--size-4-1);
pointer-events: auto;
background: var(--background-secondary-blur);
-webkit-backdrop-filter: blur(var(--blur-intensity));
backdrop-filter: blur(var(--blur-intensity));
border: 1px solid var(--window-border-color);
border-radius: var(--radius-m);
box-shadow: var(--shadow-l);
}

.pt-nav-header-left-sidebar-position-bottom .workspace-drawer.mod-left .workspace-leaf-content[data-type=dangling-links] .nav-header, .pt-nav-header-left-sidebar-position-bottom .workspace-split.mod-left-split .workspace-leaf-content[data-type=dangling-links] .nav-header {
width: fit-content;
}

.pt-nav-header-left-sidebar-position-bottom .workspace-drawer.mod-left .workspace-leaf-content[data-type=dictionary-view] .nav-buttons-container, .pt-nav-header-left-sidebar-position-bottom .workspace-split.mod-left-split .workspace-leaf-content[data-type=dictionary-view] .nav-buttons-container {
position: fixed;
bottom: calc(var(--size-2-3) + var(--scroll-bar-size));
z-index: var(--layer-popover);
min-height: unset;
}

.pt-nav-header-left-sidebar-position-bottom .workspace-drawer.mod-left :is(.nav-files-container, .workspace-leaf-content[data-type=tag] .tag-container, .workspace-leaf-content[data-type=backlink] .backlink-pane, .workspace-leaf-content[data-type=starred] .item-list, .workspace-leaf-content[data-type=dictionary-view] .contents, .workspace-leaf-content[data-type=dangling-links] .view-content .container, .workspace-leaf-content[data-type=bookmarks] .view-content > div, .workspace-leaf-content[data-type=all-properties] .view-content, .workspace-leaf-content[data-type=properties] .view-content, .workspace-leaf-content[data-type=outline] .view-content), .pt-nav-header-left-sidebar-position-bottom .workspace-split.mod-left-split :is(.nav-files-container, .workspace-leaf-content[data-type=tag] .tag-container, .workspace-leaf-content[data-type=backlink] .backlink-pane, .workspace-leaf-content[data-type=starred] .item-list, .workspace-leaf-content[data-type=dictionary-view] .contents, .workspace-leaf-content[data-type=dangling-links] .view-content .container, .workspace-leaf-content[data-type=bookmarks] .view-content > div, .workspace-leaf-content[data-type=all-properties] .view-content, .workspace-leaf-content[data-type=properties] .view-content, .workspace-leaf-content[data-type=outline] .view-content) {
padding-bottom: calc(var(--nav-header-padding-bottom) + 2 * var(--scroll-bar-size));
}

.is-mobile .workspace-drawer.mod-left .nav-buttons-container, .is-mobile .workspace-drawer.mod-left .workspace-leaf-content[data-type=dangling-links] .nav-header {
padding: var(--size-4-1);
}`,
    },
    "pt-nav-header-left-sidebar-align-left": {
      general: `.pt-nav-header-left-sidebar-align-left .workspace-split.mod-left-split .embedded-backlinks .nav-header {
position: sticky;
top: 0;
padding: 0 var(--size-2-2);
}`,
    },
    "pt-nav-header-left-sidebar-align-center": {
      general: `.pt-nav-header-left-sidebar-align-center .workspace-split.mod-left-split .embedded-backlinks .nav-header {
position: sticky;
top: 0;
padding: 0 var(--size-2-2);
}`,
    },
    "pt-nav-header-left-sidebar-align-right": {
      general: `.pt-nav-header-left-sidebar-align-right .workspace-split.mod-left-split .embedded-backlinks .nav-header {
position: sticky;
top: 0;
padding: 0 var(--size-2-2);
}`,
    },
    "pt-nav-header-right-sidebar-position-top": {
      general: `.pt-nav-header-right-sidebar-position-top .workspace-leaf-content[data-type=dictionary-view] .search-input-container {
border-top: var(--window-border);
}`,
    },
    "pt-nav-header-right-sidebar-position-bottom": {
      general: `.pt-nav-header-right-sidebar-position-bottom .workspace-drawer.mod-right .nav-header, .pt-nav-header-right-sidebar-position-bottom .workspace-split.mod-right-split .nav-header {
position: absolute;
bottom: calc(var(--size-2-2) + var(--scroll-bar-size));
z-index: var(--layer-popover);
order: 10;
width: -webkit-fill-available;
width: fill-available;
height: unset;
padding: 0 calc(var(--size-2-2) + var(--scroll-bar-size)) 0 var(--size-2-2);
pointer-events: none;
background-color: unset;
border-bottom: unset;
}

.pt-nav-header-right-sidebar-position-bottom .workspace-drawer.mod-right .nav-buttons-container, .pt-nav-header-right-sidebar-position-bottom .workspace-drawer.mod-right .workspace-leaf-content[data-type=dangling-links] .nav-header, .pt-nav-header-right-sidebar-position-bottom .workspace-split.mod-right-split .nav-buttons-container, .pt-nav-header-right-sidebar-position-bottom .workspace-split.mod-right-split .workspace-leaf-content[data-type=dangling-links] .nav-header {
padding: var(--size-4-1);
pointer-events: auto;
background: var(--background-secondary-blur);
-webkit-backdrop-filter: blur(var(--blur-intensity));
backdrop-filter: blur(var(--blur-intensity));
border: 1px solid var(--window-border-color);
border-radius: var(--radius-m);
box-shadow: var(--shadow-l);
}

.pt-nav-header-right-sidebar-position-bottom .workspace-drawer.mod-right .workspace-leaf-content[data-type=dangling-links] .nav-header, .pt-nav-header-right-sidebar-position-bottom .workspace-split.mod-right-split .workspace-leaf-content[data-type=dangling-links] .nav-header {
width: fit-content;
}

.pt-nav-header-right-sidebar-position-bottom .workspace-drawer.mod-right .workspace-leaf-content[data-type=dictionary-view] .nav-buttons-container, .pt-nav-header-right-sidebar-position-bottom .workspace-split.mod-right-split .workspace-leaf-content[data-type=dictionary-view] .nav-buttons-container {
position: fixed;
bottom: calc(var(--size-2-3) + var(--scroll-bar-size));
z-index: var(--layer-popover);
min-height: unset;
}

.pt-nav-header-right-sidebar-position-bottom .workspace-drawer.mod-right :is(.nav-files-container, .workspace-leaf-content[data-type=tag] .tag-container, .workspace-leaf-content[data-type=backlink] .backlink-pane, .workspace-leaf-content[data-type=starred] .item-list, .workspace-leaf-content[data-type=dictionary-view] .contents, .workspace-leaf-content[data-type=dangling-links] .view-content .container, .workspace-leaf-content[data-type=bookmarks] .view-content > div, .workspace-leaf-content[data-type=all-properties] .view-content, .workspace-leaf-content[data-type=properties] .view-content, .workspace-leaf-content[data-type=outline] .view-content), .pt-nav-header-right-sidebar-position-bottom .workspace-split.mod-right-split :is(.nav-files-container, .workspace-leaf-content[data-type=tag] .tag-container, .workspace-leaf-content[data-type=backlink] .backlink-pane, .workspace-leaf-content[data-type=starred] .item-list, .workspace-leaf-content[data-type=dictionary-view] .contents, .workspace-leaf-content[data-type=dangling-links] .view-content .container, .workspace-leaf-content[data-type=bookmarks] .view-content > div, .workspace-leaf-content[data-type=all-properties] .view-content, .workspace-leaf-content[data-type=properties] .view-content, .workspace-leaf-content[data-type=outline] .view-content) {
padding-bottom: calc(var(--nav-header-padding-bottom) + 2 * var(--scroll-bar-size));
}

.is-mobile .workspace-drawer.mod-right .nav-buttons-container, .is-mobile .workspace-drawer.mod-right .workspace-leaf-content[data-type=dangling-links] .nav-header {
padding: var(--size-4-1);
}`,
    },
    "pt-nav-header-right-sidebar-align-left": {
      general: `.pt-nav-header-right-sidebar-align-left .workspace-split.mod-right-split .embedded-backlinks .nav-header {
position: sticky;
top: 0;
padding: 0 var(--size-2-2);
}`,
    },
    "pt-nav-header-right-sidebar-align-center": {
      general: `.pt-nav-header-right-sidebar-align-center .workspace-split.mod-right-split .embedded-backlinks .nav-header {
position: sticky;
top: 0;
padding: 0 var(--size-2-2);
}`,
    },
    "pt-nav-header-right-sidebar-align-right": {
      general: `.pt-nav-header-right-sidebar-align-right .workspace-split.mod-right-split .embedded-backlinks .nav-header {
position: sticky;
top: 0;
padding: 0 var(--size-2-2);
}`,
    },
    "pt-tab-header-center": {
      general: `.pt-tab-header-center .mod-root .workspace-tab-header-container-inner {
margin-left: auto;
}

.pt-tab-header-center .mod-root .workspace-tab-header-new-tab {
margin-right: auto;
}`,
    },
    "pt-tab-header-right": {
      general: `.pt-tab-header-right .mod-root .workspace-tab-header-container-inner {
margin-left: auto;
}

.pt-tab-header-right .mod-root .workspace-tab-header-new-tab {
margin-right: var(--size-4-1);
}`,
    },
    "pt-file-explorer-folder-icon": {
      general: `.pt-file-explorer-folder-icon .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon {
display: inline-flex;
width: 17px;
height: -webkit-fill-available;
height: fill-available;
content: " ";
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2'%3E%3C/path%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
-webkit-mask-size: 17px;
stroke-width: unset;
}

.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon {
background-color: var(--text-muted);
}

.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon {
background-color: var(--interactive-accent-text);
}

.pt-file-explorer-folder-icon .nav-folder.is-collapsed .collapse-icon svg.svg-icon {
display: inline-flex;
width: 17px;
height: -webkit-fill-available;
height: fill-available;
content: " ";
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z'%3E%3C/path%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
-webkit-mask-position: center;
-webkit-mask-size: 17px;
stroke-width: unset;
transform: rotate(0);
}

.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-file-explorer-folder-icon-default .nav-folder.is-collapsed .collapse-icon svg.svg-icon {
background-color: var(--text-muted);
}

.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-file-explorer-folder-icon-default .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon {
background-color: var(--interactive-accent-text);
}

.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed .collapse-icon svg.svg-icon {
background-color: var(--interactive-accent-text);
}

.pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
background-color: var(--interactive-accent-text);
}

.pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
background-color: var(--rainbow-text-color);
}`,
    },
    "pt-file-explorer-folder-icon-default": {
      general: `.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon {
background-color: var(--text-muted);
}

.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed .collapse-icon svg.svg-icon {
background-color: var(--text-muted);
}

.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon {
background-color: var(--interactive-accent-text);
}

.pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
background-color: var(--interactive-accent-text);
}

.pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
background-color: var(--rainbow-text-color);
}`,
    },
    "pt-file-explorer-folder-icon-accent": {
      general: `.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon {
background-color: var(--interactive-accent-text);
}

.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed .collapse-icon svg.svg-icon {
background-color: var(--interactive-accent-text);
}

.pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
background-color: var(--interactive-accent-text);
}

.pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
background-color: var(--rainbow-text-color);
}`,
    },
    "pt-file-explorer-folder-icon-active": {
      general: `.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon {
background-color: var(--interactive-accent-text);
}

.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed .collapse-icon svg.svg-icon {
background-color: var(--text-muted);
}

.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon {
background-color: var(--interactive-accent-text);
}

.pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
background-color: var(--interactive-accent-text);
}

.pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
background-color: var(--rainbow-text-color);
}`,
    },
    "pt-colored-folders": {
      general: `.pt-colored-folders-style-accent.pt-colored-folders-files-match .workspace-leaf-content[data-type=file-explorer] .nav-folder .nav-file-title:not(.is-active, :hover) {
color: var(--interactive-accent-text);
}

.pt-colored-folders-style-accent .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder {
--nav-indentation-guide-color: var(--interactive-accent-tint);
}

.pt-colored-folders-style-accent .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder .nav-folder-title {
color: var(--interactive-accent-text);
}

.pt-colored-folders-style-accent .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder .nav-file-title:hover, .pt-colored-folders-style-accent .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder .nav-folder-title:hover {
color: var(--interactive-accent-text);
background-color: var(--interactive-accent-base);
}

.pt-colored-folders-style-accent .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders-style-accent .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders-style-accent .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders-style-accent .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
color: var(--interactive-accent-text);
}

.pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon, .pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon, .pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders-style-accent.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
background-color: var(--interactive-accent-text);
}

.pt-colored-folders-style-rainbow.pt-colored-folders-files-match .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder .nav-file-title:not(.is-active, :hover) {
color: var(--rainbow-text-color);
}

.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder {
--nav-indentation-guide-color: var(--rainbow-indent-color);
}

.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder .nav-folder-title {
color: var(--rainbow-text-color);
}

.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder .nav-file-title:hover, .pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder .nav-folder-title:hover {
color: var(--rainbow-text-color);
background-color: var(--rainbow-background-color);
}

.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+2) {
--rainbow-text-color: var(--color-red-text);
--rainbow-background-color: var(--color-red-base);
--rainbow-indent-color: var(--color-red-tint);
}

.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+3) {
--rainbow-text-color: var(--color-orange-text);
--rainbow-background-color: var(--color-orange-base);
--rainbow-indent-color: var(--color-orange-tint);
}

.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+4) {
--rainbow-text-color: var(--color-yellow-text);
--rainbow-background-color: var(--color-yellow-base);
--rainbow-indent-color: var(--color-yellow-tint);
}

.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+5) {
--rainbow-text-color: var(--color-green-text);
--rainbow-background-color: var(--color-green-base);
--rainbow-indent-color: var(--color-green-tint);
}

.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+6) {
--rainbow-text-color: var(--color-mint-text);
--rainbow-background-color: var(--color-mint-base);
--rainbow-indent-color: var(--color-mint-tint);
}

.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+7) {
--rainbow-text-color: var(--color-cyan-text);
--rainbow-background-color: var(--color-cyan-base);
--rainbow-indent-color: var(--color-cyan-tint);
}

.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+8) {
--rainbow-text-color: var(--color-blue-text);
--rainbow-background-color: var(--color-blue-base);
--rainbow-indent-color: var(--color-blue-tint);
}

.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+9) {
--rainbow-text-color: var(--color-purple-text);
--rainbow-background-color: var(--color-purple-base);
--rainbow-indent-color: var(--color-purple-tint);
}

.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+10) {
--rainbow-text-color: var(--color-pink-text);
--rainbow-background-color: var(--color-pink-base);
--rainbow-indent-color: var(--color-pink-tint);
}

.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+11) {
--rainbow-text-color: var(--color-grey-text);
--rainbow-background-color: var(--color-grey-base);
--rainbow-indent-color: var(--color-grey-tint);
}

.pt-colored-folders-style-rainbow .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders-style-rainbow .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders-style-rainbow .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders-style-rainbow .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
color: var(--rainbow-text-color);
}

.pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon, .pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon, .pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders-style-rainbow.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
background-color: var(--rainbow-text-color);
}`,
    },
    "pt-colored-folders-style-accent": {
      general: `.pt-colored-folders.pt-colored-folders-files-match .workspace-leaf-content[data-type=file-explorer] .nav-folder .nav-file-title:not(.is-active, :hover) {
color: var(--interactive-accent-text);
}

.pt-colored-folders.pt-colored-folders-style-accent .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder {
--nav-indentation-guide-color: var(--interactive-accent-tint);
}

.pt-colored-folders.pt-colored-folders-style-accent .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder .nav-folder-title {
color: var(--interactive-accent-text);
}

.pt-colored-folders.pt-colored-folders-style-accent .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder .nav-file-title:hover, .pt-colored-folders.pt-colored-folders-style-accent .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder .nav-folder-title:hover {
color: var(--interactive-accent-text);
background-color: var(--interactive-accent-base);
}

.pt-colored-folders.pt-colored-folders-style-accent .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-accent .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
color: var(--interactive-accent-text);
}

.pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
background-color: var(--interactive-accent-text);
}`,
    },
    "pt-colored-folders-style-rainbow": {
      general: `.pt-colored-folders.pt-colored-folders-files-match .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder .nav-file-title:not(.is-active, :hover) {
color: var(--rainbow-text-color);
}

.pt-colored-folders.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder {
--nav-indentation-guide-color: var(--rainbow-indent-color);
}

.pt-colored-folders.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder .nav-folder-title {
color: var(--rainbow-text-color);
}

.pt-colored-folders.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder .nav-file-title:hover, .pt-colored-folders.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder .nav-folder-title:hover {
color: var(--rainbow-text-color);
background-color: var(--rainbow-background-color);
}

.pt-colored-folders.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+2) {
--rainbow-text-color: var(--color-red-text);
--rainbow-background-color: var(--color-red-base);
--rainbow-indent-color: var(--color-red-tint);
}

.pt-colored-folders.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+3) {
--rainbow-text-color: var(--color-orange-text);
--rainbow-background-color: var(--color-orange-base);
--rainbow-indent-color: var(--color-orange-tint);
}

.pt-colored-folders.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+4) {
--rainbow-text-color: var(--color-yellow-text);
--rainbow-background-color: var(--color-yellow-base);
--rainbow-indent-color: var(--color-yellow-tint);
}

.pt-colored-folders.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+5) {
--rainbow-text-color: var(--color-green-text);
--rainbow-background-color: var(--color-green-base);
--rainbow-indent-color: var(--color-green-tint);
}

.pt-colored-folders.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+6) {
--rainbow-text-color: var(--color-mint-text);
--rainbow-background-color: var(--color-mint-base);
--rainbow-indent-color: var(--color-mint-tint);
}

.pt-colored-folders.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+7) {
--rainbow-text-color: var(--color-cyan-text);
--rainbow-background-color: var(--color-cyan-base);
--rainbow-indent-color: var(--color-cyan-tint);
}

.pt-colored-folders.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+8) {
--rainbow-text-color: var(--color-blue-text);
--rainbow-background-color: var(--color-blue-base);
--rainbow-indent-color: var(--color-blue-tint);
}

.pt-colored-folders.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+9) {
--rainbow-text-color: var(--color-purple-text);
--rainbow-background-color: var(--color-purple-base);
--rainbow-indent-color: var(--color-purple-tint);
}

.pt-colored-folders.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+10) {
--rainbow-text-color: var(--color-pink-text);
--rainbow-background-color: var(--color-pink-base);
--rainbow-indent-color: var(--color-pink-tint);
}

.pt-colored-folders.pt-colored-folders-style-rainbow .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder:nth-child(10n+11) {
--rainbow-text-color: var(--color-grey-text);
--rainbow-background-color: var(--color-grey-base);
--rainbow-indent-color: var(--color-grey-tint);
}

.pt-colored-folders.pt-colored-folders-style-rainbow .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-colored-folders-style-rainbow .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
color: var(--rainbow-text-color);
}

.pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-active .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-default .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder.is-collapsed:hover .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed) .collapse-icon svg.svg-icon, .pt-colored-folders.pt-file-explorer-folder-icon.pt-file-explorer-folder-icon-accent .nav-folder:not(.is-collapsed):hover .collapse-icon svg.svg-icon {
background-color: var(--rainbow-text-color);
}`,
    },
    "pt-colored-folders-files-match": {
      general: `.pt-colored-folders.pt-colored-folders-style-accent.pt-colored-folders-files-match .workspace-leaf-content[data-type=file-explorer] .nav-folder .nav-file-title:not(.is-active, :hover) {
color: var(--interactive-accent-text);
}

.pt-colored-folders.pt-colored-folders-style-rainbow.pt-colored-folders-files-match .workspace-leaf-content[data-type=file-explorer] .nav-files-container > div > .nav-folder .nav-file-title:not(.is-active, :hover) {
color: var(--rainbow-text-color);
}`,
    },
    "pt-titlebar-hide-text": {
      general: `body.pt-titlebar-hide-text .titlebar .titlebar-text {
display: none;
}`,
    },
    "pt-status-bar-position-hidden": {
      general: `.pt-status-bar-position-hidden .status-bar {
display: none;
}`,
    },
    "pt-status-bar-position-floating": {
      general: `.pt-status-bar-position-floating .status-bar {
--status-bar-position: absolute;
right: 0;
left: 0;
width: fit-content;
margin: 0 auto calc(var(--size-2-3) + var(--scroll-bar-size));
background: var(--background-secondary-blur);
-webkit-backdrop-filter: blur(var(--blur-intensity));
backdrop-filter: blur(var(--blur-intensity));
border: 1px solid var(--window-border-color);
border-radius: var(--radius-s);
box-shadow: var(--shadow-l);
}

.pt-status-bar-position-floating div#cMenuModalBar {
bottom: calc(var(--size-4-3) + 33px + var(--scroll-bar-size)) !important;
}`,
    },
    "pt-status-bar-position-fixed": {
      general: `.pt-status-bar-position-fixed .status-bar {
--status-bar-position: relative;
padding: 1px var(--size-4-2);
border: unset;
border-top: var(--window-border);
border-radius: unset;
}

.pt-status-bar-position-fixed div#cMenuModalBar {
bottom: calc(var(--size-2-3) + 26px + var(--scroll-bar-size)) !important;
}`,
    },
    "pt-fixed-status-bar-align-left": {
      general: `.pt-fixed-status-bar-align-left .status-bar {
justify-content: flex-start;
}`,
    },
    "pt-fixed-status-bar-align-center": {
      general: `.pt-fixed-status-bar-align-center .status-bar {
justify-content: center;
}`,
    },
    "pt-fixed-status-bar-align-right": {
      general: `.pt-fixed-status-bar-align-right .status-bar {
justify-content: flex-end;
}`,
    },
    "pt-status-bar-custom-lt": {
      light: `.pt-status-bar-custom-lt .status-bar {
background: var(--status-bar-background-color-lt);
}`,
    },
    "pt-status-bar-custom-dt": {
      dark: `.pt-status-bar-custom-dt .status-bar {
background: var(--status-bar-background-color-dt);
}`,
    },
    "pt-disable-kanban-title-count": {
      general: `.pt-disable-kanban-title-count div.kanban-plugin__lane-title-count {
display: none;
}`,
    },
    "pt-center-kanban-title-text": {
      general: `.pt-center-kanban-title-text .kanban-plugin__lane-title {
align-items: center;
}

.pt-center-kanban-title-text .kanban-plugin__lane-input {
width: -webkit-fill-available;
width: fill-available;
}`,
    },
    "pt-kanban-background-dots-lt": {
      light: `.pt-kanban-background-dots-lt .kanban-plugin__board {
background-image: radial-gradient(circle, hsla(var(--background-secondary-hsl), 90%) 1px, rgba(0, 0, 0, 0) 1px);
background-attachment: local;
background-size: 8px 8px;
}`,
    },
    "pt-kanban-background-grid-lt": {
      light: `.pt-kanban-background-grid-lt .kanban-plugin__board {
background-image: linear-gradient(to right, hsla(var(--background-secondary-hsl), 90%) 1px, transparent 1px), linear-gradient(to bottom, hsla(var(--background-secondary-hsl), 90%) 1px, transparent 1px);
background-attachment: local;
background-size: 8px 8px;
}`,
    },
    "pt-kanban-background-dots-dt": {
      dark: `.pt-kanban-background-dots-dt .kanban-plugin__board {
background-image: radial-gradient(circle, hsla(var(--background-secondary-hsl), 90%) 1px, rgba(0, 0, 0, 0) 1px);
background-attachment: local;
background-size: 8px 8px;
}`,
    },
    "pt-kanban-background-grid-dt": {
      dark: `.pt-kanban-background-grid-dt .kanban-plugin__board {
background-image: linear-gradient(to right, hsla(var(--background-secondary-hsl), 90%) 1px, transparent 1px), linear-gradient(to bottom, hsla(var(--background-secondary-hsl), 90%) 1px, transparent 1px);
background-attachment: local;
background-size: 8px 8px;
}`,
    },
    "pt-icon-folder-accent": {
      general: `.pt-icon-folder-accent .obsidian-icon-folder-icon {
color: var(--interactive-accent-text);
}`,
    },
    "pt-icons-accent": {
      general: `.pt-icons-accent .obsidian-icon {
color: var(--interactive-accent-text);
}`,
    },
    "pt-fade-inactive-tabs": {
      general: `.pt-fade-inactive-tabs :not(.mod-active) .workspace-tab-header.is-active:not(.mod-active) {
opacity: 0.55;
}`,
    },
    "pt-disable-blur": {
      dark: `body:is(.theme-light, .theme-dark).pt-disable-blur {
--background-secondary-blur: var(--background-secondary);
}

body.pt-color-scheme-style-border-dt.pt-disable-blur {
--background-secondary-blur: var(--background-secondary-alt);
}

body.pt-color-scheme-style-minimal-dt.pt-disable-blur {
--background-secondary-blur: var(--background-secondary-alt);
}`,
      light: `body:is(.theme-light, .theme-dark).pt-disable-blur {
--background-secondary-blur: var(--background-secondary);
}

body.pt-color-scheme-style-border-lt.pt-disable-blur {
--background-secondary-blur: var(--background-primary);
}

body.pt-color-scheme-style-minimal-lt.pt-disable-blur {
--background-secondary-blur: var(--background-primary);
}`,
    },
    "pt-collapsed-pinned-tab": {
      general: `.pt-collapsed-pinned-tab .workspace .mod-root .workspace-tab-header[data-type=markdown]:has(.mod-pinned) .workspace-tab-header-inner-icon, .pt-collapsed-pinned-tab .workspace .mod-root .workspace-tab-header[data-type=empty]:has(.mod-pinned) .workspace-tab-header-inner-icon {
display: flex;
}

.pt-collapsed-pinned-tab .workspace-tab-header:has(.mod-pinned) .workspace-tab-header-inner-title {
display: none;
}

.pt-collapsed-pinned-tab .workspace .mod-root .workspace-tab-header:has(.mod-pinned), .pt-collapsed-pinned-tab .workspace-tab-header:has(.mod-pinned) .workspace-tab-header-inner {
flex: unset;
width: fit-content;
min-width: unset;
}`,
    },
    "pt-pdf-dark-theme": {
      dark: `.theme-dark .pdfViewer .canvasWrapper, .theme-dark .pdf-sidebar-container img.thumbnailImage {
filter: invert(1) hue-rotate(180deg) saturate(100%);
mix-blend-mode: screen;
}`,
    },
    "enable-alternative-checkboxes": {
      general: `body.enable-alternative-checkboxes {
/* - [/] Incomplete */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task="/"], body.enable-alternative-checkboxes ul > li[data-task="/"] {
/* Icon used: https://lucide.dev/icons/square-dashed */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNxdWFyZS1kYXNoZWQiPjxwYXRoIGQ9Ik01IDNhMiAyIDAgMCAwLTIgMiIvPjxwYXRoIGQ9Ik0xOSAzYTIgMiAwIDAgMSAyIDIiLz48cGF0aCBkPSJNMjEgMTlhMiAyIDAgMCAxLTIgMiIvPjxwYXRoIGQ9Ik01IDIxYTIgMiAwIDAgMS0yLTIiLz48cGF0aCBkPSJNOSAzaDEiLz48cGF0aCBkPSJNOSAyMWgxIi8+PHBhdGggZD0iTTE0IDNoMSIvPjxwYXRoIGQ9Ik0xNCAyMWgxIi8+PHBhdGggZD0iTTMgOXYxIi8+PHBhdGggZD0iTTIxIDl2MSIvPjxwYXRoIGQ9Ik0zIDE0djEiLz48cGF0aCBkPSJNMjEgMTR2MSIvPjwvc3ZnPg==");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task="/"], body.pt-alternative-checkboxes-color-icon ul > li[data-task="/"] {
--icon-mask-color: var(--color-grey-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task="/"], body.pt-alternative-checkboxes-color-text ul > li[data-task="/"] {
--line-text-color: var(--color-grey-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task="/"], body.pt-alternative-checkboxes-color-background ul > li[data-task="/"] {
--line-background: var(--color-grey-base);
}

body.enable-alternative-checkboxes {
/* - [-] Cancelled */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task="-"], body.enable-alternative-checkboxes ul > li[data-task="-"] {
/* Icon used: https://lucide.dev/icons/ban */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1iYW4iPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBhdGggZD0ibTQuOSA0LjkgMTQuMiAxNC4yIi8+PC9zdmc+");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task="-"], body.pt-alternative-checkboxes-color-icon ul > li[data-task="-"] {
--icon-mask-color: var(--color-red-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task="-"], body.pt-alternative-checkboxes-color-text ul > li[data-task="-"] {
--line-text-color: var(--color-red-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task="-"], body.pt-alternative-checkboxes-color-background ul > li[data-task="-"] {
--line-background: var(--color-red-base);
}

body.enable-alternative-checkboxes {
/* - [>] Forwarded */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task=">"], body.enable-alternative-checkboxes ul > li[data-task=">"] {
/* Icon used: https://lucide.dev/icons/send-horizontal */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZW5kLWhvcml6b250YWwiPjxwYXRoIGQ9Ik0zLjcxNCAzLjA0OGEuNDk4LjQ5OCAwIDAgMC0uNjgzLjYyN2wyLjg0MyA3LjYyN2EyIDIgMCAwIDEgMCAxLjM5NmwtMi44NDIgNy42MjdhLjQ5OC40OTggMCAwIDAgLjY4Mi42MjdsMTgtOC41YS41LjUgMCAwIDAgMC0uOTA0eiIvPjxwYXRoIGQ9Ik02IDEyaDE2Ii8+PC9zdmc+");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=">"], body.pt-alternative-checkboxes-color-icon ul > li[data-task=">"] {
--icon-mask-color: var(--color-blue-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=">"], body.pt-alternative-checkboxes-color-text ul > li[data-task=">"] {
--line-text-color: var(--color-blue-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=">"], body.pt-alternative-checkboxes-color-background ul > li[data-task=">"] {
--line-background: var(--color-blue-base);
}

body.enable-alternative-checkboxes {
/* - [<] Scheduling */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task="<"], body.enable-alternative-checkboxes ul > li[data-task="<"] {
/* Icon used: https://lucide.dev/icons/calendar */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jYWxlbmRhciI+PHBhdGggZD0iTTggMnY0Ii8+PHBhdGggZD0iTTE2IDJ2NCIvPjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeD0iMyIgeT0iNCIgcng9IjIiLz48cGF0aCBkPSJNMyAxMGgxOCIvPjwvc3ZnPg==");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task="<"], body.pt-alternative-checkboxes-color-icon ul > li[data-task="<"] {
--icon-mask-color: var(--color-green-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task="<"], body.pt-alternative-checkboxes-color-text ul > li[data-task="<"] {
--line-text-color: var(--color-green-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task="<"], body.pt-alternative-checkboxes-color-background ul > li[data-task="<"] {
--line-background: var(--color-green-base);
}

body.enable-alternative-checkboxes {
/* - [?] Question */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task="?"], body.enable-alternative-checkboxes ul > li[data-task="?"] {
/* Icon used: https://lucide.dev/icons/circle-help */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtaGVscCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiLz48cGF0aCBkPSJNMTIgMTdoLjAxIi8+PC9zdmc+");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task="?"], body.pt-alternative-checkboxes-color-icon ul > li[data-task="?"] {
--icon-mask-color: var(--color-yellow-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task="?"], body.pt-alternative-checkboxes-color-text ul > li[data-task="?"] {
--line-text-color: var(--color-yellow-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task="?"], body.pt-alternative-checkboxes-color-background ul > li[data-task="?"] {
--line-background: var(--color-yellow-base);
}

body.enable-alternative-checkboxes {
/* - [!] Important */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task="!"], body.enable-alternative-checkboxes ul > li[data-task="!"] {
/* Icon used: https://lucide.dev/icons/triangle-alert */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cmlhbmdsZS1hbGVydCI+PHBhdGggZD0ibTIxLjczIDE4LTgtMTRhMiAyIDAgMCAwLTMuNDggMGwtOCAxNEEyIDIgMCAwIDAgNCAyMWgxNmEyIDIgMCAwIDAgMS43My0zIi8+PHBhdGggZD0iTTEyIDl2NCIvPjxwYXRoIGQ9Ik0xMiAxN2guMDEiLz48L3N2Zz4=");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task="!"], body.pt-alternative-checkboxes-color-icon ul > li[data-task="!"] {
--icon-mask-color: var(--color-orange-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task="!"], body.pt-alternative-checkboxes-color-text ul > li[data-task="!"] {
--line-text-color: var(--color-orange-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task="!"], body.pt-alternative-checkboxes-color-background ul > li[data-task="!"] {
--line-background: var(--color-orange-base);
}

body.enable-alternative-checkboxes {
/* - [*] Star */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task="*"], body.enable-alternative-checkboxes ul > li[data-task="*"] {
/* Icon used: https://lucide.dev/icons/star */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zdGFyIj48cG9seWdvbiBwb2ludHM9IjEyIDIgMTUuMDkgOC4yNiAyMiA5LjI3IDE3IDE0LjE0IDE4LjE4IDIxLjAyIDEyIDE3Ljc3IDUuODIgMjEuMDIgNyAxNC4xNCAyIDkuMjcgOC45MSA4LjI2IDEyIDIiLz48L3N2Zz4=");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task="*"], body.pt-alternative-checkboxes-color-icon ul > li[data-task="*"] {
--icon-mask-color: var(--color-yellow-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task="*"], body.pt-alternative-checkboxes-color-text ul > li[data-task="*"] {
--line-text-color: var(--color-yellow-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task="*"], body.pt-alternative-checkboxes-color-background ul > li[data-task="*"] {
--line-background: var(--color-yellow-base);
}

body.enable-alternative-checkboxes {
/* - ["] Quote */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task='"'], body.enable-alternative-checkboxes ul > li[data-task='"'] {
/* Icon used: https://lucide.dev/icons/quote */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1xdW90ZSI+PHBhdGggZD0iTTE2IDNhMiAyIDAgMCAwLTIgMnY2YTIgMiAwIDAgMCAyIDIgMSAxIDAgMCAxIDEgMXYxYTIgMiAwIDAgMS0yIDIgMSAxIDAgMCAwLTEgMXYyYTEgMSAwIDAgMCAxIDEgNiA2IDAgMCAwIDYtNlY1YTIgMiAwIDAgMC0yLTJ6Ii8+PHBhdGggZD0iTTUgM2EyIDIgMCAwIDAtMiAydjZhMiAyIDAgMCAwIDIgMiAxIDEgMCAwIDEgMSAxdjFhMiAyIDAgMCAxLTIgMiAxIDEgMCAwIDAtMSAxdjJhMSAxIDAgMCAwIDEgMSA2IDYgMCAwIDAgNi02VjVhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task='"'], body.pt-alternative-checkboxes-color-icon ul > li[data-task='"'] {
--icon-mask-color: var(--color-grey-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task='"'], body.pt-alternative-checkboxes-color-text ul > li[data-task='"'] {
--line-text-color: var(--color-grey-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task='"'], body.pt-alternative-checkboxes-color-background ul > li[data-task='"'] {
--line-background: var(--color-grey-base);
}

body.enable-alternative-checkboxes {
/* - [l] Location */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task=l], body.enable-alternative-checkboxes ul > li[data-task=l] {
/* Icon used: https://lucide.dev/icons/map-pin */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXAtcGluIj48cGF0aCBkPSJNMjAgMTBjMCA0Ljk5My01LjUzOSAxMC4xOTMtNy4zOTkgMTEuNzk5YTEgMSAwIDAgMS0xLjIwMiAwQzkuNTM5IDIwLjE5MyA0IDE0Ljk5MyA0IDEwYTggOCAwIDAgMSAxNiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iMyIvPjwvc3ZnPg==");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=l], body.pt-alternative-checkboxes-color-icon ul > li[data-task=l] {
--icon-mask-color: var(--color-red-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=l], body.pt-alternative-checkboxes-color-text ul > li[data-task=l] {
--line-text-color: var(--color-red-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=l], body.pt-alternative-checkboxes-color-background ul > li[data-task=l] {
--line-background: var(--color-red-base);
}

body.enable-alternative-checkboxes {
/* - [b] Bookmark */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task=b], body.enable-alternative-checkboxes ul > li[data-task=b] {
/* Icon used: https://lucide.dev/icons/bookmark */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ib29rbWFyayI+PHBhdGggZD0ibTE5IDIxLTctNC03IDRWNWEyIDIgMCAwIDEgMi0yaDEwYTIgMiAwIDAgMSAyIDJ2MTZ6Ii8+PC9zdmc+");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=b], body.pt-alternative-checkboxes-color-icon ul > li[data-task=b] {
--icon-mask-color: var(--color-mint-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=b], body.pt-alternative-checkboxes-color-text ul > li[data-task=b] {
--line-text-color: var(--color-mint-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=b], body.pt-alternative-checkboxes-color-background ul > li[data-task=b] {
--line-background: var(--color-mint-base);
}

body.enable-alternative-checkboxes {
/* - [i] Information */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task=i], body.enable-alternative-checkboxes ul > li[data-task=i] {
/* Icon used: https://lucide.dev/icons/info */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1pbmZvIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik0xMiAxNnYtNCIvPjxwYXRoIGQ9Ik0xMiA4aC4wMSIvPjwvc3ZnPg==");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=i], body.pt-alternative-checkboxes-color-icon ul > li[data-task=i] {
--icon-mask-color: var(--color-blue-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=i], body.pt-alternative-checkboxes-color-text ul > li[data-task=i] {
--line-text-color: var(--color-blue-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=i], body.pt-alternative-checkboxes-color-background ul > li[data-task=i] {
--line-background: var(--color-blue-base);
}

body.enable-alternative-checkboxes {
/* - [S] Savings */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task=S], body.enable-alternative-checkboxes ul > li[data-task=S] {
/* Icon used: https://lucide.dev/icons/dollar-sign */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvbGxhci1zaWduIj48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSIyMiIvPjxwYXRoIGQ9Ik0xNyA1SDkuNWEzLjUgMy41IDAgMCAwIDAgN2g1YTMuNSAzLjUgMCAwIDEgMCA3SDYiLz48L3N2Zz4=");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=S], body.pt-alternative-checkboxes-color-icon ul > li[data-task=S] {
--icon-mask-color: var(--color-green-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=S], body.pt-alternative-checkboxes-color-text ul > li[data-task=S] {
--line-text-color: var(--color-green-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=S], body.pt-alternative-checkboxes-color-background ul > li[data-task=S] {
--line-background: var(--color-green-base);
}

body.enable-alternative-checkboxes {
/* - [I] Idea */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task=I], body.enable-alternative-checkboxes ul > li[data-task=I] {
/* Icon used: https://lucide.dev/icons/lightbulb */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1saWdodGJ1bGIiPjxwYXRoIGQ9Ik0xNSAxNGMuMi0xIC43LTEuNyAxLjUtMi41IDEtLjkgMS41LTIuMiAxLjUtMy41QTYgNiAwIDAgMCA2IDhjMCAxIC4yIDIuMiAxLjUgMy41LjcuNyAxLjMgMS41IDEuNSAyLjUiLz48cGF0aCBkPSJNOSAxOGg2Ii8+PHBhdGggZD0iTTEwIDIyaDQiLz48L3N2Zz4=");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=I], body.pt-alternative-checkboxes-color-icon ul > li[data-task=I] {
--icon-mask-color: var(--color-yellow-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=I], body.pt-alternative-checkboxes-color-text ul > li[data-task=I] {
--line-text-color: var(--color-yellow-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=I], body.pt-alternative-checkboxes-color-background ul > li[data-task=I] {
--line-background: var(--color-yellow-base);
}

body.enable-alternative-checkboxes {
/* - [p] Pros */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task=p], body.enable-alternative-checkboxes ul > li[data-task=p] {
/* Icon used: https://lucide.dev/icons/thumbs-up */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10aHVtYnMtdXAiPjxwYXRoIGQ9Ik03IDEwdjEyIi8+PHBhdGggZD0iTTE1IDUuODggMTQgMTBoNS44M2EyIDIgMCAwIDEgMS45MiAyLjU2bC0yLjMzIDhBMiAyIDAgMCAxIDE3LjUgMjJINGEyIDIgMCAwIDEtMi0ydi04YTIgMiAwIDAgMSAyLTJoMi43NmEyIDIgMCAwIDAgMS43OS0xLjExTDEyIDJhMy4xMyAzLjEzIDAgMCAxIDMgMy44OFoiLz48L3N2Zz4=");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=p], body.pt-alternative-checkboxes-color-icon ul > li[data-task=p] {
--icon-mask-color: var(--color-green-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=p], body.pt-alternative-checkboxes-color-text ul > li[data-task=p] {
--line-text-color: var(--color-green-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=p], body.pt-alternative-checkboxes-color-background ul > li[data-task=p] {
--line-background: var(--color-green-base);
}

body.enable-alternative-checkboxes {
/* - [c] Cons */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task=c], body.enable-alternative-checkboxes ul > li[data-task=c] {
/* Icon used: https://lucide.dev/icons/thumbs-down */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10aHVtYnMtZG93biI+PHBhdGggZD0iTTE3IDE0VjIiLz48cGF0aCBkPSJNOSAxOC4xMiAxMCAxNEg0LjE3YTIgMiAwIDAgMS0xLjkyLTIuNTZsMi4zMy04QTIgMiAwIDAgMSA2LjUgMkgyMGEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMmgtMi43NmEyIDIgMCAwIDAtMS43OSAxLjExTDEyIDIyYTMuMTMgMy4xMyAwIDAgMS0zLTMuODhaIi8+PC9zdmc+");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=c], body.pt-alternative-checkboxes-color-icon ul > li[data-task=c] {
--icon-mask-color: var(--color-red-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=c], body.pt-alternative-checkboxes-color-text ul > li[data-task=c] {
--line-text-color: var(--color-red-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=c], body.pt-alternative-checkboxes-color-background ul > li[data-task=c] {
--line-background: var(--color-red-base);
}

body.enable-alternative-checkboxes {
/* - [f] Fire */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task=f], body.enable-alternative-checkboxes ul > li[data-task=f] {
/* Icon used: https://lucide.dev/icons/flame */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1mbGFtZSI+PHBhdGggZD0iTTguNSAxNC41QTIuNSAyLjUgMCAwIDAgMTEgMTJjMC0xLjM4LS41LTItMS0zLTEuMDcyLTIuMTQzLS4yMjQtNC4wNTQgMi02IC41IDIuNSAyIDQuOSA0IDYuNSAyIDEuNiAzIDMuNSAzIDUuNWE3IDcgMCAxIDEtMTQgMGMwLTEuMTUzLjQzMy0yLjI5NCAxLTNhMi41IDIuNSAwIDAgMCAyLjUgMi41eiIvPjwvc3ZnPg==");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=f], body.pt-alternative-checkboxes-color-icon ul > li[data-task=f] {
--icon-mask-color: var(--color-orange-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=f], body.pt-alternative-checkboxes-color-text ul > li[data-task=f] {
--line-text-color: var(--color-orange-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=f], body.pt-alternative-checkboxes-color-background ul > li[data-task=f] {
--line-background: var(--color-orange-base);
}

body.enable-alternative-checkboxes {
/* - [k] Key */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task=k], body.enable-alternative-checkboxes ul > li[data-task=k] {
/* Icon used: https://lucide.dev/icons/key-round */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1rZXktcm91bmQiPjxwYXRoIGQ9Ik0yLjU4NiAxNy40MTRBMiAyIDAgMCAwIDIgMTguODI4VjIxYTEgMSAwIDAgMCAxIDFoM2ExIDEgMCAwIDAgMS0xdi0xYTEgMSAwIDAgMSAxLTFoMWExIDEgMCAwIDAgMS0xdi0xYTEgMSAwIDAgMSAxLTFoLjE3MmEyIDIgMCAwIDAgMS40MTQtLjU4NmwuODE0LS44MTRhNi41IDYuNSAwIDEgMC00LTR6Ii8+PGNpcmNsZSBjeD0iMTYuNSIgY3k9IjcuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=k], body.pt-alternative-checkboxes-color-icon ul > li[data-task=k] {
--icon-mask-color: var(--color-cyan-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=k], body.pt-alternative-checkboxes-color-text ul > li[data-task=k] {
--line-text-color: var(--color-cyan-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=k], body.pt-alternative-checkboxes-color-background ul > li[data-task=k] {
--line-background: var(--color-cyan-base);
}

body.enable-alternative-checkboxes {
/* - [w] Win */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task=w], body.enable-alternative-checkboxes ul > li[data-task=w] {
/* Icon used: https://lucide.dev/icons/trophy */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cm9waHkiPjxwYXRoIGQ9Ik02IDlINC41YTIuNSAyLjUgMCAwIDEgMC01SDYiLz48cGF0aCBkPSJNMTggOWgxLjVhMi41IDIuNSAwIDAgMCAwLTVIMTgiLz48cGF0aCBkPSJNNCAyMmgxNiIvPjxwYXRoIGQ9Ik0xMCAxNC42NlYxN2MwIC41NS0uNDcuOTgtLjk3IDEuMjFDNy44NSAxOC43NSA3IDIwLjI0IDcgMjIiLz48cGF0aCBkPSJNMTQgMTQuNjZWMTdjMCAuNTUuNDcuOTguOTcgMS4yMUMxNi4xNSAxOC43NSAxNyAyMC4yNCAxNyAyMiIvPjxwYXRoIGQ9Ik0xOCAySDZ2N2E2IDYgMCAwIDAgMTIgMFYyWiIvPjwvc3ZnPg==");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=w], body.pt-alternative-checkboxes-color-icon ul > li[data-task=w] {
--icon-mask-color: var(--color-yellow-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=w], body.pt-alternative-checkboxes-color-text ul > li[data-task=w] {
--line-text-color: var(--color-yellow-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=w], body.pt-alternative-checkboxes-color-background ul > li[data-task=w] {
--line-background: var(--color-yellow-base);
}

body.enable-alternative-checkboxes {
/* - [u] Up */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task=u], body.enable-alternative-checkboxes ul > li[data-task=u] {
/* Icon used: https://lucide.dev/icons/trending-up */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cmVuZGluZy11cCI+PHBvbHlsaW5lIHBvaW50cz0iMjIgNyAxMy41IDE1LjUgOC41IDEwLjUgMiAxNyIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDcgMjIgNyAyMiAxMyIvPjwvc3ZnPg==");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=u], body.pt-alternative-checkboxes-color-icon ul > li[data-task=u] {
--icon-mask-color: var(--color-green-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=u], body.pt-alternative-checkboxes-color-text ul > li[data-task=u] {
--line-text-color: var(--color-green-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=u], body.pt-alternative-checkboxes-color-background ul > li[data-task=u] {
--line-background: var(--color-green-base);
}

body.enable-alternative-checkboxes {
/* - [d] Down */
}

body.enable-alternative-checkboxes div.HyperMD-task-line[data-task=d], body.enable-alternative-checkboxes ul > li[data-task=d] {
/* Icon used: https://lucide.dev/icons/trending-down */
--icon-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cmVuZGluZy1kb3duIj48cG9seWxpbmUgcG9pbnRzPSIyMiAxNyAxMy41IDguNSA4LjUgMTMuNSAyIDciLz48cG9seWxpbmUgcG9pbnRzPSIxNiAxNyAyMiAxNyAyMiAxMSIvPjwvc3ZnPg==");
}

body.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=d], body.pt-alternative-checkboxes-color-icon ul > li[data-task=d] {
--icon-mask-color: var(--color-red-text);
}

body.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=d], body.pt-alternative-checkboxes-color-text ul > li[data-task=d] {
--line-text-color: var(--color-red-text);
}

body.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=d], body.pt-alternative-checkboxes-color-background ul > li[data-task=d] {
--line-background: var(--color-red-base);
}

body.enable-alternative-checkboxes {
/* ----------------------------------------------------------------------- */
}

body.enable-alternative-checkboxes .HyperMD-task-line:not([data-task=x], [data-task=X], [data-task=" "]), body.enable-alternative-checkboxes li:not([data-task=x], [data-task=X], [data-task=" "]) {
--icon-mask-image: unset;
--icon-mask-color: var(--text-normal);
--icon-content: "";
--icon-content-font: var(--font-monospace);
--icon-content-weight: var(--font-bold);
--icon-content-color: var(--text-normal);
--icon-background: transparent;
--icon-background-hover: transparent;
--icon-border: unset;
--icon-border-radius: unset;
--line-text-color: inherit;
--line-background: unset;
--line-border: unset;
--line-border-radius: unset;
}

body.enable-alternative-checkboxes .HyperMD-task-line:not([data-task=x], [data-task=X], [data-task=" "]), body.enable-alternative-checkboxes li:not([data-task=x], [data-task=X], [data-task=" "]).is-checked {
color: var(--line-text-color);
background: var(--line-background);
border: var(--line-border);
border-radius: var(--line-border-radius);
}

body.enable-alternative-checkboxes {
/* Swapping margin for padding to allow background color to apply in Reading view the same
     as in Live Preview */
}

body.enable-alternative-checkboxes .task-list-item.is-checked {
margin-inline-start: unset;
padding-inline-start: 3ch;
}

body.enable-alternative-checkboxes .markdown-reading-view li .task-list-item-checkbox {
margin-inline-start: calc(var(--checkbox-size) * -1.5 + var(--size-4-2));
}

body.enable-alternative-checkboxes div.is-live-preview label > input[type=checkbox]:not([data-task=x], [data-task=X], [data-task=" "]):checked, body.enable-alternative-checkboxes li:not([data-task=x], [data-task=X], [data-task=" "]) > input[type=checkbox]:checked, body.enable-alternative-checkboxes li:not([data-task=x], [data-task=X], [data-task=" "]) > p > input[type=checkbox]:checked {
--checkbox-marker-color: transparent;
border: var(--icon-border);
border-radius: var(--icon-border-radius);
background: var(--icon-background);
}

body.enable-alternative-checkboxes div.is-live-preview label > input[type=checkbox]:not([data-task=x], [data-task=X], [data-task=" "]):checked:hover, body.enable-alternative-checkboxes li:not([data-task=x], [data-task=X], [data-task=" "]) > input[type=checkbox]:checked:hover, body.enable-alternative-checkboxes li:not([data-task=x], [data-task=X], [data-task=" "]) > p > input[type=checkbox]:checked:hover {
background: var(--icon-background-hover);
}

body.enable-alternative-checkboxes div.is-live-preview label > input[type=checkbox]:not([data-task=x], [data-task=X], [data-task=" "]):checked::after, body.enable-alternative-checkboxes li:not([data-task=x], [data-task=X], [data-task=" "]) > input[type=checkbox]:checked::after, body.enable-alternative-checkboxes li:not([data-task=x], [data-task=X], [data-task=" "]) > p > input[type=checkbox]:checked::after {
background-color: var(--icon-mask-color);
-webkit-mask-image: var(--icon-mask-image);
-webkit-mask-size: contain;
-webkit-mask-position: center;
color: var(--icon-content-color);
background-image: var(--icon-image);
background-repeat: no-repeat;
background-position: center;
content: var(--icon-content);
text-align: center;
font-weight: var(--icon-content-weight);
font-family: var(--icon-content-font);
font-size: 1rem;
display: flex;
align-items: center;
justify-content: center;
/* Allows icons to remain scaled correctly within the checkbox when using a border */
width: -webkit-fill-available;
width: fill-available;
/* Fallback for Safari */
height: -webkit-fill-available;
height: fill-available;
/* Fallback for Safari */
}`,
    },
    "pt-alternative-checkboxes-color-icon": {
      general: `body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task="/"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task="/"] {
--icon-mask-color: var(--color-grey-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task="-"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task="-"] {
--icon-mask-color: var(--color-red-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=">"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task=">"] {
--icon-mask-color: var(--color-blue-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task="<"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task="<"] {
--icon-mask-color: var(--color-green-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task="?"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task="?"] {
--icon-mask-color: var(--color-yellow-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task="!"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task="!"] {
--icon-mask-color: var(--color-orange-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task="*"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task="*"] {
--icon-mask-color: var(--color-yellow-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task='"'], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task='"'] {
--icon-mask-color: var(--color-grey-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=l], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task=l] {
--icon-mask-color: var(--color-red-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=b], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task=b] {
--icon-mask-color: var(--color-mint-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=i], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task=i] {
--icon-mask-color: var(--color-blue-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=S], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task=S] {
--icon-mask-color: var(--color-green-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=I], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task=I] {
--icon-mask-color: var(--color-yellow-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=p], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task=p] {
--icon-mask-color: var(--color-green-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=c], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task=c] {
--icon-mask-color: var(--color-red-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=f], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task=f] {
--icon-mask-color: var(--color-orange-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=k], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task=k] {
--icon-mask-color: var(--color-cyan-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=w], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task=w] {
--icon-mask-color: var(--color-yellow-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=u], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task=u] {
--icon-mask-color: var(--color-green-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon div.HyperMD-task-line[data-task=d], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-icon ul > li[data-task=d] {
--icon-mask-color: var(--color-red-text);
}`,
    },
    "pt-alternative-checkboxes-color-text": {
      general: `body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task="/"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task="/"] {
--line-text-color: var(--color-grey-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task="-"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task="-"] {
--line-text-color: var(--color-red-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=">"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task=">"] {
--line-text-color: var(--color-blue-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task="<"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task="<"] {
--line-text-color: var(--color-green-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task="?"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task="?"] {
--line-text-color: var(--color-yellow-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task="!"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task="!"] {
--line-text-color: var(--color-orange-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task="*"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task="*"] {
--line-text-color: var(--color-yellow-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task='"'], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task='"'] {
--line-text-color: var(--color-grey-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=l], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task=l] {
--line-text-color: var(--color-red-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=b], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task=b] {
--line-text-color: var(--color-mint-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=i], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task=i] {
--line-text-color: var(--color-blue-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=S], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task=S] {
--line-text-color: var(--color-green-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=I], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task=I] {
--line-text-color: var(--color-yellow-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=p], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task=p] {
--line-text-color: var(--color-green-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=c], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task=c] {
--line-text-color: var(--color-red-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=f], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task=f] {
--line-text-color: var(--color-orange-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=k], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task=k] {
--line-text-color: var(--color-cyan-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=w], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task=w] {
--line-text-color: var(--color-yellow-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=u], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task=u] {
--line-text-color: var(--color-green-text);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text div.HyperMD-task-line[data-task=d], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-text ul > li[data-task=d] {
--line-text-color: var(--color-red-text);
}`,
    },
    "pt-alternative-checkboxes-color-background": {
      general: `body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task="/"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task="/"] {
--line-background: var(--color-grey-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task="-"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task="-"] {
--line-background: var(--color-red-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=">"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task=">"] {
--line-background: var(--color-blue-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task="<"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task="<"] {
--line-background: var(--color-green-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task="?"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task="?"] {
--line-background: var(--color-yellow-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task="!"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task="!"] {
--line-background: var(--color-orange-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task="*"], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task="*"] {
--line-background: var(--color-yellow-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task='"'], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task='"'] {
--line-background: var(--color-grey-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=l], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task=l] {
--line-background: var(--color-red-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=b], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task=b] {
--line-background: var(--color-mint-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=i], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task=i] {
--line-background: var(--color-blue-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=S], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task=S] {
--line-background: var(--color-green-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=I], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task=I] {
--line-background: var(--color-yellow-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=p], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task=p] {
--line-background: var(--color-green-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=c], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task=c] {
--line-background: var(--color-red-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=f], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task=f] {
--line-background: var(--color-orange-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=k], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task=k] {
--line-background: var(--color-cyan-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=w], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task=w] {
--line-background: var(--color-yellow-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=u], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task=u] {
--line-background: var(--color-green-base);
}

body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background div.HyperMD-task-line[data-task=d], body.enable-alternative-checkboxes.pt-alternative-checkboxes-color-background ul > li[data-task=d] {
--line-background: var(--color-red-base);
}`,
    },
  },
};
