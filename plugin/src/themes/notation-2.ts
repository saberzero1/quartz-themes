import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "notation-2",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lyons-serif", "ia-writer-duospace"],
    fontFiles: [
      {
        family: "Lyon-Text",
        style: "normal",
        weight: "600",
        file: "lyon-text.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Lyon-Text",
        style: "normal",
        weight: "bold",
        file: "lyon-text-1.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Lyon-Text",
        style: "normal",
        weight: "normal",
        file: "lyon-text-2.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Lyon-Text",
        style: "italic",
        weight: "bold",
        file: "lyon-text-3.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "iA Writer Duospace",
        style: "normal",
        weight: "600",
        file: "ia-writer-duospace.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "iA Writer Duospace",
        style: "normal",
        weight: "normal",
        file: "ia-writer-duospace-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "iA Writer Duospace",
        style: "italic",
        weight: "bold",
        file: "ia-writer-duospace-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "iA Writer Duospace",
        style: "italic",
        weight: "normal",
        file: "ia-writer-duospace-3.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Lyon-Text",
        style: "normal",
        weight: "bold",
        file: "lyon-text-4.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Lyon-Text",
        style: "normal",
        weight: "normal",
        file: "lyon-text-5.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Lyon-Text",
        style: "italic",
        weight: "normal",
        file: "lyon-text-6.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Lyon-Text",
        style: "italic",
        weight: "normal",
        file: "lyon-text-7.woff",
        format: "woff",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "notation-2-theme",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --L0: 0%;
  --L1: 20%;
  --L2: 23%;
  --L3: 26%;
  --accent-h: 210;
  --accent-l: 51%;
  --accent-s: 77%;
  --background-accent: hsl(var(--hue), var(--sat), var(--L0));
  --background-modifier-border: rgba(var(--text-rgb), 0.14);
  --background-modifier-border-focus: var(--color-base-40, #535353);
  --background-modifier-border-hover: var(--color-base-35, #363636);
  --background-modifier-error: var(--color-red, rgb(255, 115, 105));
  --background-modifier-error-hover: var(--color-red, rgb(255, 115, 105));
  --background-modifier-error-rgb: var(--color-red-rgb, 89, 65, 65);
  --background-modifier-form-field: var(--color-base-25, #21201e);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #21201e);
  --background-modifier-success: var(--color-green, rgb(77, 171, 154));
  --background-modifier-success-rgb: var(--color-green-rgb, 53, 76, 75);
  --background-primary: hsl(var(--hue), var(--sat), var(--L1));
  --background-primary-alt: hsl(var(--hue), var(--sat), var(--L3));
  --background-secondary: hsl(var(--hue), var(--sat), var(--L2));
  --background-secondary-alt: hsl(var(--hue), var(--sat), var(--L3));
  --banner-size: 220px;
  --bases-cards-background: var(--background-primary, hsl(203, 8%, 20%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(203, 8%, 26%));
  --bases-embed-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.14));
  --bases-embed-border-radius: var(--radius-s, 3px);
  --bases-group-heading-property-color: var(--text-muted, rgba(255, 255, 255, 0.7));
  --bases-group-heading-property-size: var(--font-ui-smaller, 0.9em);
  --bases-table-border-color: var(--table-border-color, rgba(255, 255, 255, 0.14));
  --bases-table-cell-background-active: var(--background-primary, hsl(203, 8%, 20%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(203, 8%, 26%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(210, 77%, 51%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 3px);
  --bases-table-group-background: var(--background-primary-alt, hsl(203, 8%, 26%));
  --bases-table-header-background: var(--background-primary, hsl(203, 8%, 20%));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.04));
  --bases-table-header-color: var(--text-muted, rgba(255, 255, 255, 0.7));
  --bases-table-summary-background: var(--background-primary, hsl(203, 8%, 20%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.04));
  --blockquote-border-color: var(--text-normal, rgba(255, 255, 255, 0.9));
  --blockquote-border-thickness: 3px;
  --bodyFont: var(--font-text, var(--font-default, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"));
  --callout-bug: var(--color-red-rgb, 89, 65, 65);
  --callout-default: var(--color-blue-rgb, 54, 73, 84);
  --callout-error: var(--color-red-rgb, 89, 65, 65);
  --callout-example: var(--color-purple-rgb, 68, 63, 87);
  --callout-fail: var(--color-red-rgb, 89, 65, 65);
  --callout-important: var(--color-cyan-rgb, 29, 40, 46);
  --callout-info: var(--color-blue-rgb, 54, 73, 84);
  --callout-question: var(--color-orange-rgb, 89, 74, 58);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 3px);
  --callout-success: var(--color-green-rgb, 53, 76, 75);
  --callout-summary: var(--color-cyan-rgb, 29, 40, 46);
  --callout-tip: var(--color-cyan-rgb, 29, 40, 46);
  --callout-todo: var(--color-blue-rgb, 54, 73, 84);
  --callout-warning: var(--color-orange-rgb, 89, 74, 58);
  --canvas-background: var(--background-primary, hsl(203, 8%, 20%));
  --canvas-card-label-color: var(--text-faint, rgba(255, 255, 255, 0.55));
  --canvas-color-1: var(--color-red-rgb, 89, 65, 65);
  --canvas-color-2: var(--color-orange-rgb, 89, 74, 58);
  --canvas-color-3: var(--color-yellow-rgb, 89, 86, 59);
  --canvas-color-4: var(--color-green-rgb, 53, 76, 75);
  --canvas-color-5: var(--color-cyan-rgb, 29, 40, 46);
  --canvas-color-6: var(--color-purple-rgb, 68, 63, 87);
  --canvas-controls-radius: var(--radius-s, 3px);
  --canvas-dot-pattern: var(--color-base-30, #21201e);
  --caret-color: var(--text-normal, rgba(255, 255, 255, 0.9));
  --checkbox-border-color: var(--text-faint, rgba(255, 255, 255, 0.55));
  --checkbox-border-color-hover: var(--text-muted, rgba(255, 255, 255, 0.7));
  --checkbox-color: var(--interactive-accent, rgb(46, 170, 220));
  --checkbox-color-hover: var(--interactive-accent-hover, rgba(46, 170, 220, 0.8));
  --checkbox-marker-color: var(--background-primary, hsl(203, 8%, 20%));
  --checkbox-radius: var(--radius-s, 3px);
  --checklist-done-color: var(--text-muted, rgba(255, 255, 255, 0.7));
  --clickable-icon-radius: var(--radius-s, 3px);
  --code: #EB5757;
  --code-background: var(--background-primary-alt, hsl(0, 1%, 70%, 14%));
  --code-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.14));
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.04));
  --code-comment: var(--text-faint, rgba(255, 255, 255, 0.55));
  --code-function: var(--color-yellow, rgb(255, 220, 73));
  --code-important: var(--color-orange, rgb(255, 163, 68));
  --code-keyword: var(--color-pink, rgb(226, 85, 161));
  --code-normal: var(--text-normal, rgba(255, 255, 255, 0.9));
  --code-operator: var(--color-red, rgb(255, 115, 105));
  --code-property: var(--color-cyan, rgb(51, 126, 169));
  --code-punctuation: var(--text-muted, rgba(255, 255, 255, 0.7));
  --code-radius: var(--radius-s, 3px);
  --code-string: var(--color-green, rgb(77, 171, 154));
  --code-tag: var(--color-red, rgb(255, 115, 105));
  --code-value: var(--color-purple, rgb(154, 109, 215));
  --codeFont: var(--font-text, var(--font-default, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"));
  --collapse-icon-color: var(--text-faint, rgba(255, 255, 255, 0.55));
  --collapse-icon-color-collapsed: var(--text-accent, rgba(255, 255, 255, 0.45));
  --color-base-00: #191919;
  --color-base-10: rgb(32, 32, 32);
  --color-base-20: rgb(32, 32, 32);
  --color-base-25: #21201e;
  --color-base-30: #21201e;
  --color-base-35: #363636;
  --color-base-40: #535353;
  --color-base-50: #707070;
  --color-base-60: #5d5d5d;
  --color-base-70: #a0a0a0;
  --color-blue: rgb(82, 156, 202);
  --color-blue-rgb: 54, 73, 84;
  --color-brown: rgb(147, 114, 100);
  --color-brown-rgb: 67, 64, 64;
  --color-cyan: rgb(51, 126, 169);
  --color-cyan-rgb: 29, 40, 46;
  --color-gray: rgba(255, 255, 255, 0.6);
  --color-gray-rgb: 69, 75, 78;
  --color-green: rgb(77, 171, 154);
  --color-green-rgb: 53, 76, 75;
  --color-orange: rgb(255, 163, 68);
  --color-orange-rgb: 89, 74, 58;
  --color-pink: rgb(226, 85, 161);
  --color-pink-rgb: 83, 59, 76;
  --color-purple: rgb(154, 109, 215);
  --color-purple-rgb: 68, 63, 87;
  --color-red: rgb(255, 115, 105);
  --color-red-rgb: 89, 65, 65;
  --color-yellow: rgb(255, 220, 73);
  --color-yellow-rgb: 89, 86, 59;
  --custom-line-height: 1.5em;
  --dark: var(--text-normal, rgba(var(--text-rgb), 0.9));
  --darkgray: var(--text-normal, rgba(var(--text-rgb), 0.9));
  --divider-color: var(--background-modifier-border, rgba(255, 255, 255, 0.14));
  --divider-color-hover: var(--interactive-accent, rgb(46, 170, 220));
  --divider-width: 0.05em;
  --dropdown-background: var(--interactive-normal, #2a2a2a);
  --dropdown-background-hover: var(--interactive-hover, #303030);
  --file-header-background: var(--background-primary, hsl(203, 8%, 20%));
  --file-header-background-focused: var(--background-primary, hsl(203, 8%, 20%));
  --file-header-font: var(--font-interface, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  --file-header-font-size: var(--font-ui-small, 0.95em);
  --flair-background: var(--interactive-normal, #2a2a2a);
  --flair-color: var(--text-normal, rgba(255, 255, 255, 0.9));
  --font-bold: 500;
  --font-default: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-mermaid: var(--font-text, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  --font-monospace-default: 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace;
  --font-text: var(--font-default, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  --font-ui-large: 1.15em;
  --font-ui-medium: 0.97em;
  --font-ui-small: 0.95em;
  --font-ui-smaller: 0.9em;
  --footnote-divider-color: var(--metadata-divider-color, rgba(255, 255, 255, 0.14));
  --footnote-id-color: var(--text-muted, rgba(255, 255, 255, 0.7));
  --footnote-id-color-no-occurrences: var(--text-faint, rgba(255, 255, 255, 0.55));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.04));
  --footnote-radius: var(--radius-s, 3px);
  --graph-line: var(--background-modifier-border, rgba(255, 255, 255, 0.14));
  --graph-node: var(--color-blue, rgb(82, 156, 202));
  --graph-node-attachment: var(--color-yellow, rgb(255, 220, 73));
  --graph-node-focused: var(--interactive-accent, rgb(46, 170, 220));
  --graph-node-tag: var(--color-green, rgb(77, 171, 154));
  --graph-node-unresolved: var(--color-cyan, rgb(51, 126, 169));
  --graph-text: var(--text-normal, rgba(255, 255, 255, 0.9));
  --gray: var(--text-muted, rgba(var(--text-rgb), 0.7));
  --h-bg: transparent;
  --h-color: var(--text-normal, rgba(255, 255, 255, 0.9));
  --h1-bg: var(--h-bg, transparent);
  --h1-color: var(--h-color, rgba(255, 255, 255, 0.9));
  --h1-size: 1.875em;
  --h1-weight: 600;
  --h2-bg: var(--h-bg, transparent);
  --h2-color: var(--h-color, rgba(255, 255, 255, 0.9));
  --h2-size: 1.5em;
  --h2-weight: 600;
  --h3-bg: var(--h-bg, transparent);
  --h3-color: var(--h-color, rgba(255, 255, 255, 0.9));
  --h3-size: 1.25em;
  --h3-weight: 600;
  --h4-bg: var(--h-bg, transparent);
  --h4-color: var(--h-color, rgba(255, 255, 255, 0.9));
  --h4-weight: 600;
  --h5-bg: var(--h-bg, transparent);
  --h5-color: var(--h-color, rgba(255, 255, 255, 0.9));
  --h5-weight: 600;
  --h6-bg: var(--h-bg, transparent);
  --h6-color: var(--h-color, rgba(255, 255, 255, 0.9));
  --headerFont: var(--font-text, var(--font-default, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"));
  --heading-formatting: var(--text-faint, rgba(255, 255, 255, 0.55));
  --highlight: var(--text-highlight-bg, var(--tag-1-default, rgb(89, 86, 59)));
  --hr-color: var(--background-modifier-border, rgba(255, 255, 255, 0.14));
  --hue: 203;
  --icon-color: var(--text-muted, rgba(255, 255, 255, 0.7));
  --icon-color-active: var(--text-accent, rgba(255, 255, 255, 0.45));
  --icon-color-focused: var(--text-normal, rgba(255, 255, 255, 0.9));
  --icon-color-hover: var(--text-muted, rgba(255, 255, 255, 0.7));
  --inline-title-color: var(--h1-color, rgba(255, 255, 255, 0.9));
  --inline-title-size: var(--h1-size, 1.875em);
  --inline-title-weight: var(--h1-weight, 600);
  --input-date-separator: var(--text-faint, rgba(255, 255, 255, 0.55));
  --input-placeholder-color: var(--text-faint, rgba(255, 255, 255, 0.55));
  --interactive-accent: rgb(var(--interactive-accent-rgb));
  --interactive-accent-hover: rgba(var(--interactive-accent-rgb), 0.8);
  --interactive-accent-hsl: var(--color-accent-hsl, 210, 77%, 51%);
  --interactive-accent-rgb: 46, 170, 220;
  --interactive-hover: var(--color-base-35, #303030);
  --interactive-normal: var(--color-base-30, #2a2a2a);
  --light: var(--background-primary, hsl(var(--hue), var(--sat), var(--L1)));
  --lightgray: var(--background-secondary, hsl(var(--hue), var(--sat), var(--L2)));
  --link-color: var(--text-accent, rgba(255, 255, 255, 0.45));
  --link-color-hover: var(--text-muted, rgba(255, 255, 255, 0.7));
  --link-external-color: var(--text-accent, rgba(255, 255, 255, 0.45));
  --link-external-color-hover: var(--text-accent-hover, rgba(255, 255, 255, 0.45));
  --link-unresolved-color: var(--text-accent, rgba(255, 255, 255, 0.45));
  --list-bullet-size: 0.37em;
  --list-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --list-marker-color: var(--text-normal, rgba(255, 255, 255, 0.9));
  --list-marker-color-collapsed: var(--text-accent, rgba(255, 255, 255, 0.45));
  --list-marker-color-hover: var(--text-normal, rgba(255, 255, 255, 0.9));
  --list-menu-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 25 25' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --list-spacing: 0.3em;
  --menu-background: var(--background-secondary, hsl(203, 8%, 23%));
  --menu-border-color: var(--background-modifier-border-hover, #363636);
  --metadata-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.14));
  --metadata-divider-color: var(--background-modifier-border, rgba(255, 255, 255, 0.14));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.04));
  --metadata-input-font: var(--font-interface, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  --metadata-input-text-color: var(--text-normal, rgba(255, 255, 255, 0.9));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.04));
  --metadata-label-font: var(--font-interface, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  --metadata-label-text-color: var(--text-muted, rgba(255, 255, 255, 0.7));
  --metadata-label-text-color-hover: var(--text-muted, rgba(255, 255, 255, 0.7));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.04));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 0.95em);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 0.95em);
  --modal-background: var(--background-primary, hsl(203, 8%, 20%));
  --modal-height: calc(100vh - 100px);
  --modal-max-height: 715px;
  --modal-max-width: calc(100vw - 100px);
  --nav-collapse-icon-color: var(--collapse-icon-color, rgba(255, 255, 255, 0.55));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgba(255, 255, 255, 0.55));
  --nav-heading-color: var(--text-normal, rgba(255, 255, 255, 0.9));
  --nav-heading-color-collapsed: var(--text-faint, rgba(255, 255, 255, 0.55));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgba(255, 255, 255, 0.7));
  --nav-heading-color-hover: var(--text-normal, rgba(255, 255, 255, 0.9));
  --nav-indentation-guide-color: var(--indentation-guide-color, transparent);
  --nav-item-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.04));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.04));
  --nav-item-color: var(--text-muted, rgba(255, 255, 255, 0.7));
  --nav-item-color-active: var(--text-normal, rgba(255, 255, 255, 0.9));
  --nav-item-color-highlighted: var(--text-accent, rgba(255, 255, 255, 0.45));
  --nav-item-color-hover: var(--text-normal, rgba(255, 255, 255, 0.9));
  --nav-item-color-selected: var(--text-normal, rgba(255, 255, 255, 0.9));
  --nav-item-radius: var(--radius-s, 3px);
  --nav-item-size: var(--font-ui-small, 0.95em);
  --nav-tag-color: var(--text-faint, rgba(255, 255, 255, 0.55));
  --nav-tag-color-active: var(--text-muted, rgba(255, 255, 255, 0.7));
  --nav-tag-color-hover: var(--text-muted, rgba(255, 255, 255, 0.7));
  --nav-tag-radius: var(--radius-s, 3px);
  --number-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='4' y1='9' x2='20' y2='9'%3E%3C/line%3E%3Cline x1='4' y1='15' x2='20' y2='15'%3E%3C/line%3E%3Cline x1='10' y1='3' x2='8' y2='21'%3E%3C/line%3E%3Cline x1='16' y1='3' x2='14' y2='21'%3E%3C/line%3E%3C/svg%3E");
  --opacity-translucency: 0.7;
  --pdf-background: var(--background-primary, hsl(203, 8%, 20%));
  --pdf-page-background: var(--background-primary, hsl(203, 8%, 20%));
  --pdf-sidebar-background: var(--background-primary, hsl(203, 8%, 20%));
  --pill-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.14));
  --pill-border-color-hover: var(--background-modifier-border-hover, #363636);
  --pill-color: var(--text-muted, rgba(255, 255, 255, 0.7));
  --pill-color-hover: var(--text-normal, rgba(255, 255, 255, 0.9));
  --pill-color-remove: var(--text-faint, rgba(255, 255, 255, 0.55));
  --pill-color-remove-hover: var(--text-accent, rgba(255, 255, 255, 0.45));
  --prompt-background: var(--background-primary, hsl(203, 8%, 20%));
  --radius-s: 3px;
  --raised-background: var(--blur-background, color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(203, 8%, 23%));
  --ribbon-background-collapsed: var(--background-primary, hsl(203, 8%, 20%));
  --sat: 8%;
  --search-clear-button-color: var(--text-muted, rgba(255, 255, 255, 0.7));
  --search-icon-color: var(--text-muted, rgba(255, 255, 255, 0.7));
  --search-result-background: var(--background-primary, hsl(203, 8%, 20%));
  --secondary: var(--text-accent, rgba(var(--text-rgb), 0.45));
  --setting-group-heading-color: var(--text-normal, rgba(255, 255, 255, 0.9));
  --setting-group-heading-size: var(--font-ui-medium, 0.97em);
  --setting-items-background: var(--background-primary-alt, hsl(203, 8%, 26%));
  --setting-items-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.14));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgba(255, 255, 255, 0.7));
  --shiki-code-background: var(--code-background, hsl(0, 1%, 70%, 14%));
  --shiki-code-block-border-radius: var(--code-radius, 3px);
  --shiki-code-comment: var(--text-faint, rgba(255, 255, 255, 0.55));
  --shiki-code-function: var(--color-green, rgb(77, 171, 154));
  --shiki-code-important: var(--color-orange, rgb(255, 163, 68));
  --shiki-code-keyword: var(--color-pink, rgb(226, 85, 161));
  --shiki-code-normal: var(--text-muted, rgba(255, 255, 255, 0.7));
  --shiki-code-property: var(--color-cyan, rgb(51, 126, 169));
  --shiki-code-punctuation: var(--text-muted, rgba(255, 255, 255, 0.7));
  --shiki-code-string: var(--color-yellow, rgb(255, 220, 73));
  --shiki-code-value: var(--color-purple, rgb(154, 109, 215));
  --shiki-gutter-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.14));
  --shiki-gutter-text-color: var(--text-faint, rgba(255, 255, 255, 0.55));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgba(255, 255, 255, 0.7));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgba(255, 255, 255, 0.7));
  --shiki-terminal-dots-color: var(--text-faint, rgba(255, 255, 255, 0.55));
  --slider-thumb-border-color: var(--background-modifier-border-hover, #363636);
  --slider-track-background: var(--background-modifier-border, rgba(255, 255, 255, 0.14));
  --status-bar-background: var(--background-secondary, hsl(203, 8%, 23%));
  --status-bar-border-color: var(--divider-color, rgba(255, 255, 255, 0.14));
  --status-bar-font-size: var(--font-ui-smaller, 0.9em);
  --status-bar-text-color: var(--text-muted, rgba(255, 255, 255, 0.7));
  --status-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='2' x2='12' y2='6'%3E%3C/line%3E%3Cline x1='12' y1='18' x2='12' y2='22'%3E%3C/line%3E%3Cline x1='4.93' y1='4.93' x2='7.76' y2='7.76'%3E%3C/line%3E%3Cline x1='16.24' y1='16.24' x2='19.07' y2='19.07'%3E%3C/line%3E%3Cline x1='2' y1='12' x2='6' y2='12'%3E%3C/line%3E%3Cline x1='18' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cline x1='4.93' y1='19.07' x2='7.76' y2='16.24'%3E%3C/line%3E%3Cline x1='16.24' y1='7.76' x2='19.07' y2='4.93'%3E%3C/line%3E%3C/svg%3E");
  --suggestion-background: var(--background-primary, hsl(203, 8%, 20%));
  --sync-avatar-color-1: var(--color-red, rgb(255, 115, 105));
  --sync-avatar-color-2: var(--color-orange, rgb(255, 163, 68));
  --sync-avatar-color-3: var(--color-yellow, rgb(255, 220, 73));
  --sync-avatar-color-4: var(--color-green, rgb(77, 171, 154));
  --sync-avatar-color-5: var(--color-cyan, rgb(51, 126, 169));
  --sync-avatar-color-6: var(--color-blue, rgb(82, 156, 202));
  --sync-avatar-color-7: var(--color-purple, rgb(154, 109, 215));
  --sync-avatar-color-8: var(--color-pink, rgb(226, 85, 161));
  --tab-background-active: var(--background-primary, transparent);
  --tab-container-background: var(--background-secondary, hsl(203, 8%, 23%));
  --tab-curve: 0px;
  --tab-divider-color: var(--background-modifier-border-hover, #363636);
  --tab-font-size: var(--font-ui-small, 0.95em);
  --tab-outline-color: var(--divider-color, transparent);
  --tab-radius: var(--radius-s, 3px);
  --tab-stacked-font-size: var(--font-ui-small, 0.95em);
  --tab-switcher-background: var(--background-secondary, hsl(203, 8%, 23%));
  --tab-text-color: var(--text-faint, rgba(255, 255, 255, 0.55));
  --tab-text-color-active: var(--text-muted, rgba(255, 255, 255, 0.7));
  --tab-text-color-focused: var(--text-muted, rgba(255, 255, 255, 0.7));
  --tab-text-color-focused-active: var(--text-muted, rgba(255, 255, 255, 0.7));
  --tab-text-color-focused-active-current: var(--text-normal, rgba(255, 255, 255, 0.9));
  --tab-text-color-focused-highlighted: var(--text-accent, rgba(255, 255, 255, 0.45));
  --table-add-button-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.14));
  --table-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.14));
  --table-drag-handle-background-active: var(--table-selection-border-color, rgb(46, 170, 220));
  --table-drag-handle-color: var(--text-faint, rgba(255, 255, 255, 0.55));
  --table-drag-handle-color-active: var(--text-on-accent, rgba(255, 255, 255, 0.9));
  --table-header-background: rgba(var(--color-gray-rgb), 0.5);
  --table-header-background-hover: rgba(var(--color-gray-rgb), 0.5);
  --table-header-border-color: var(--table-border-color, rgba(255, 255, 255, 0.14));
  --table-header-color: var(--text-normal, rgba(255, 255, 255, 0.9));
  --table-selection-border-color: var(--interactive-accent, rgb(46, 170, 220));
  --tag-1-default: rgb(137, 99, 42);
  --tag-10-default: rgb(55, 55, 55);
  --tag-2-default: rgb(43, 89, 63);
  --tag-3-default: rgb(40, 69, 108);
  --tag-4-default: rgb(73, 47, 100);
  --tag-5-default: rgb(105, 49, 76);
  --tag-6-default: rgb(110, 54, 48);
  --tag-7-default: rgb(133, 76, 29);
  --tag-8-default: rgb(90, 90, 90);
  --tag-9-default: rgb(96, 59, 44);
  --tag-color: var(--text-normal, rgba(255, 255, 255, 0.9));
  --tag-color-hover: var(--text-accent, rgba(255, 255, 255, 0.45));
  --tag-radius: var(--radius-s, 3px);
  --tertiary: var(--text-accent-hover, rgba(var(--text-rgb), 0.45));
  --text-accent: rgba(var(--text-rgb), 0.45);
  --text-accent-hover: rgba(var(--text-rgb), 0.45);
  --text-error: var(--color-red, rgb(255, 115, 105));
  --text-faint: rgba(var(--text-rgb), 0.55);
  --text-highlight-bg: var(--tag-1-default, rgb(89, 86, 59));
  --text-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='21' y1='6' x2='3' y2='6'%3E%3C/line%3E%3Cline x1='15' y1='12' x2='3' y2='12'%3E%3C/line%3E%3Cline x1='17' y1='18' x2='3' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --text-muted: rgba(var(--text-rgb), 0.7);
  --text-normal: rgba(var(--text-rgb), 0.9);
  --text-on-accent: rgba(var(--text-rgb), 0.9);
  --text-rgb: 255, 255, 255;
  --text-success: var(--color-green, rgb(77, 171, 154));
  --text-warning: var(--color-orange, rgb(255, 163, 68));
  --textHighlight: var(--text-highlight-bg, var(--tag-1-default, rgb(89, 86, 59)));
  --titleFont: var(--font-text, var(--font-default, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"));
  --titlebar-background: var(--background-secondary, hsl(203, 8%, 23%));
  --titlebar-background-focused: var(--background-secondary-alt, hsl(203, 8%, 26%));
  --titlebar-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.14));
  --titlebar-text-color: var(--text-muted, rgba(255, 255, 255, 0.7));
  --titlebar-text-color-focused: var(--text-normal, rgba(255, 255, 255, 0.9));
  --titlebar-text-weight: var(--font-bold, 500);
  --vault-profile-color: var(--text-normal, rgba(255, 255, 255, 0.9));
  --vault-profile-color-hover: var(--vault-profile-color, rgba(255, 255, 255, 0.9));
  --vault-profile-font-size: var(--font-ui-small, 0.95em);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(203, 8%, 23%));
  background-color: var(--tab-container-background, rgb(54, 60, 63));
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(47, 52, 55));
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(54, 60, 63));
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(255, 255, 255, 0.14);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(203, 8%, 23%));
  background-color: var(--tab-container-background, rgb(54, 60, 63));
  border-left-color: rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgba(255, 255, 255, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgba(255, 255, 255, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgba(255, 255, 255, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, rgba(255, 255, 255, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgba(255, 255, 255, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(89, 86, 59));
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body del {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(255, 255, 255, 0.9);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(46, 170, 220));
  border-color: rgb(46, 170, 220);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgba(255, 255, 255, 0.7));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.7) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.7);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--link-weight, 500);
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration: underline 1px rgba(255, 255, 255, 0.14);
  text-decoration-color: rgba(255, 255, 255, 0.14);
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--text-muted, rgba(255, 255, 255, 0.7));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--link-weight, 500);
  outline: rgba(255, 255, 255, 0.7) none 0px;
  text-decoration: underline 1px rgba(255, 255, 255, 0.14);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(255, 255, 255, 0.14));
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgba(255, 255, 255, 0.9);
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body ol > li {
  color: rgba(255, 255, 255, 0.9);
  margin-left: 26.6953px;
  padding-bottom: var(--list-spacing, 4.8px);
  padding-top: var(--list-spacing, 4.8px);
}

html[saved-theme="dark"] body ul > li {
  color: rgba(255, 255, 255, 0.9);
  margin-left: 26.6953px;
  padding-bottom: var(--list-spacing, 4.8px);
  padding-top: var(--list-spacing, 4.8px);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgba(255, 255, 255, 0.55));
}

html[saved-theme="dark"] body blockquote {
  color: var(--blockquote-color, rgba(255, 255, 255, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  line-height: 26.4px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body table {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: left;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: var(--table-text-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: var(--table-header-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgba(69, 75, 78, 0.5));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(179, 178, 178, 0.14));
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--code, rgb(235, 87, 87));
  font-family: var(--font-monospace, "??", "??", "iA Writer Duospace", Nitti, Menlo, Courier, monospace);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgba(179, 178, 178, 0.14));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body figcaption {
  color: rgba(255, 255, 255, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(0, 1%, 70%, 14%));
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(61, 68, 72));
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
  color: var(--text-muted, rgba(255, 255, 255, 0.7));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgba(255, 255, 255, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgba(255, 255, 255, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgba(255, 255, 255, 0.9);
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(47, 52, 55);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(47, 52, 55);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 163, 68);
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

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 220, 73);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 126, 169);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 156, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 115, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 115, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 115, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 115, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 156, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 220, 73);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 220, 73);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(154, 109, 215);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 115, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(77, 171, 154);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(77, 171, 154);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(77, 171, 154);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="dark"] body .callout-title {
  --background-accent: hsl(203, 8%, 0%);
  --background-modifier-active-hover: hsla(210, 77%, 51%, 0.1);
  --background-modifier-border: rgba(255, 255, 255, 0.14);
  --background-modifier-border-focus: #535353;
  --background-modifier-border-hover: #363636;
  --background-modifier-error: rgb(255, 115, 105);
  --background-modifier-error-hover: rgb(255, 115, 105);
  --background-modifier-error-rgb: 89, 65, 65;
  --background-modifier-form-field: #21201e;
  --background-modifier-form-field-hover: #21201e;
  --background-modifier-hover: rgba(255, 255, 255, 0.04);
  --background-modifier-success: rgb(77, 171, 154);
  --background-modifier-success-rgb: 53, 76, 75;
  --background-primary: hsl(203, 8%, 20%);
  --background-primary-alt: hsl(203, 8%, 26%);
  --background-secondary: hsl(203, 8%, 23%);
  --background-secondary-alt: hsl(203, 8%, 26%);
  --blockquote-border-color: rgba(255, 255, 255, 0.9);
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 89, 65, 65;
  --callout-color: 54, 73, 84;
  --callout-default: 54, 73, 84;
  --callout-error: 89, 65, 65;
  --callout-example: 68, 63, 87;
  --callout-fail: 89, 65, 65;
  --callout-important: 29, 40, 46;
  --callout-info: 54, 73, 84;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 89, 74, 58;
  --callout-radius: 3px;
  --callout-success: 53, 76, 75;
  --callout-summary: 29, 40, 46;
  --callout-tip: 29, 40, 46;
  --callout-title-weight: 600;
  --callout-todo: 54, 73, 84;
  --callout-warning: 89, 74, 58;
  --canvas-background: hsl(203, 8%, 20%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 3px;
  --canvas-dot-pattern: #21201e;
  --caret-color: rgba(255, 255, 255, 0.9);
  --checkbox-border-color: rgba(255, 255, 255, 0.55);
  --checkbox-border-color-hover: rgba(255, 255, 255, 0.7);
  --checkbox-color: rgb(46, 170, 220);
  --checkbox-color-hover: rgba(46, 170, 220, 0.8);
  --checkbox-marker-color: hsl(203, 8%, 20%);
  --checkbox-radius: 3px;
  --checkbox-size: 16px;
  --checklist-done-color: rgba(255, 255, 255, 0.7);
  --clickable-icon-radius: 3px;
  --code-background: hsl(0, 1%, 70%, 14%);
  --code-border-color: rgba(255, 255, 255, 0.14);
  --code-bracket-background: rgba(255, 255, 255, 0.04);
  --code-comment: rgba(255, 255, 255, 0.55);
  --code-function: rgb(255, 220, 73);
  --code-important: rgb(255, 163, 68);
  --code-keyword: rgb(226, 85, 161);
  --code-normal: rgba(255, 255, 255, 0.9);
  --code-operator: rgb(255, 115, 105);
  --code-property: rgb(51, 126, 169);
  --code-punctuation: rgba(255, 255, 255, 0.7);
  --code-radius: 3px;
  --code-size: 0.875em;
  --code-string: rgb(77, 171, 154);
  --code-tag: rgb(255, 115, 105);
  --code-value: rgb(154, 109, 215);
  --collapse-icon-color: rgba(255, 255, 255, 0.55);
  --collapse-icon-color-collapsed: rgba(255, 255, 255, 0.45);
  --color-accent: hsl(210, 77%, 51%);
  --color-accent-1: hsl(207, 78.54%, 58.65%);
  --color-accent-2: hsl(205, 80.85%, 65.79%);
  --color-accent-hsl: 210, 77%, 51%;
  --divider-color: rgba(255, 255, 255, 0.14);
  --divider-color-hover: rgb(46, 170, 220);
  --divider-vertical-height: 100%;
  --dropdown-background: #2a2a2a;
  --dropdown-background-hover: #303030;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #2a2a2a;
  --flair-color: rgba(255, 255, 255, 0.9);
  --font-interface: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-mermaid: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-monospace: '??', '??', 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-weight: 400;
  --graph-line: rgba(255, 255, 255, 0.14);
  --graph-node: rgb(82, 156, 202);
  --graph-node-attachment: rgb(255, 220, 73);
  --graph-node-focused: rgb(46, 170, 220);
  --graph-node-tag: rgb(77, 171, 154);
  --graph-node-unresolved: rgb(51, 126, 169);
  --graph-text: rgba(255, 255, 255, 0.9);
  --h-color: rgba(255, 255, 255, 0.9);
  --h1-bg: transparent;
  --h1-color: rgba(255, 255, 255, 0.9);
  --h2-bg: transparent;
  --h2-color: rgba(255, 255, 255, 0.9);
  --h3-bg: transparent;
  --h3-color: rgba(255, 255, 255, 0.9);
  --h4-bg: transparent;
  --h4-color: rgba(255, 255, 255, 0.9);
  --h5-bg: transparent;
  --h5-color: rgba(255, 255, 255, 0.9);
  --h5-line-height: 1.5;
  --h6-bg: transparent;
  --h6-color: rgba(255, 255, 255, 0.9);
  --h6-line-height: 1.5;
  --heading-formatting: rgba(255, 255, 255, 0.55);
  --heading-spacing: 2.5rem;
  --hr-color: rgba(255, 255, 255, 0.14);
  --interactive-accent: rgb(46, 170, 220);
  --interactive-accent-hover: rgba(46, 170, 220, 0.8);
  --interactive-accent-hsl: 210, 77%, 51%;
  --interactive-hover: #303030;
  --interactive-normal: #2a2a2a;
  --link-color: rgba(255, 255, 255, 0.45);
  --link-color-hover: rgba(255, 255, 255, 0.7);
  --link-external-color: rgba(255, 255, 255, 0.45);
  --link-external-color-hover: rgba(255, 255, 255, 0.45);
  --link-unresolved-color: rgba(255, 255, 255, 0.45);
  --link-unresolved-decoration-color: hsla(210, 77%, 51%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: hsl(203, 8%, 23%);
  --menu-border-color: #363636;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(203, 8%, 20%);
  --pdf-page-background: hsl(203, 8%, 20%);
  --pdf-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14);
  --pdf-sidebar-background: hsl(203, 8%, 20%);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: rgba(255, 255, 255, 0.7);
  --search-icon-color: rgba(255, 255, 255, 0.7);
  --search-result-background: hsl(203, 8%, 20%);
  --setting-group-heading-color: rgba(255, 255, 255, 0.9);
  --setting-group-heading-size: 0.97em;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(203, 8%, 26%);
  --setting-items-border-color: rgba(255, 255, 255, 0.14);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: rgba(255, 255, 255, 0.7);
  --shiki-code-background: hsl(0, 1%, 70%, 14%);
  --shiki-code-block-border-radius: 3px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: rgba(255, 255, 255, 0.55);
  --shiki-code-function: rgb(77, 171, 154);
  --shiki-code-important: rgb(255, 163, 68);
  --shiki-code-keyword: rgb(226, 85, 161);
  --shiki-code-normal: rgba(255, 255, 255, 0.7);
  --shiki-code-property: rgb(51, 126, 169);
  --shiki-code-punctuation: rgba(255, 255, 255, 0.7);
  --shiki-code-string: rgb(255, 220, 73);
  --shiki-code-value: rgb(154, 109, 215);
  --shiki-gutter-border-color: rgba(255, 255, 255, 0.14);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: rgba(255, 255, 255, 0.55);
  --shiki-gutter-text-color-highlight: rgba(255, 255, 255, 0.7);
  --shiki-highlight-green: rgba(53, 76, 75, 0.5);
  --shiki-highlight-green-background: rgba(53, 76, 75, 0.1);
  --shiki-highlight-neutral: rgba(255, 255, 255, 0.7);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(89, 65, 65, 0.5);
  --shiki-highlight-red-background: rgba(89, 65, 65, 0.1);
  --shiki-terminal-dots-color: rgba(255, 255, 255, 0.55);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(203, 8%, 20%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 115, 105);
  --sync-avatar-color-2: rgb(255, 163, 68);
  --sync-avatar-color-3: rgb(255, 220, 73);
  --sync-avatar-color-4: rgb(77, 171, 154);
  --sync-avatar-color-5: rgb(51, 126, 169);
  --sync-avatar-color-6: rgb(82, 156, 202);
  --sync-avatar-color-7: rgb(154, 109, 215);
  --sync-avatar-color-8: rgb(226, 85, 161);
  --tab-background-active: transparent;
  --tab-divider-color: #363636;
  --tab-font-size: 0.95em;
  --tab-outline-color: transparent;
  --tab-radius: 3px;
  --tab-stacked-font-size: 0.95em;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(203, 8%, 23%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(203, 8%, 23%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 77%, 51%);
  --tab-text-color: rgba(255, 255, 255, 0.55);
  --tab-text-color-active: rgba(255, 255, 255, 0.7);
  --tab-text-color-focused: rgba(255, 255, 255, 0.7);
  --tab-text-color-focused-active: rgba(255, 255, 255, 0.7);
  --tab-text-color-focused-active-current: rgba(255, 255, 255, 0.9);
  --tab-text-color-focused-highlighted: rgba(255, 255, 255, 0.45);
  --table-add-button-border-color: rgba(255, 255, 255, 0.14);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(54, 73, 84) 25%, hsl(203, 8%, 20%) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgb(46, 170, 220);
  --table-drag-handle-color: rgba(255, 255, 255, 0.55);
  --table-drag-handle-color-active: rgba(255, 255, 255, 0.9);
  --table-header-background: rgba(69, 75, 78, 0.5);
  --table-header-background-hover: rgba(69, 75, 78, 0.5);
  --table-header-border-color: rgba(255, 255, 255, 0.14);
  --table-header-border-width: 1px;
  --table-header-color: rgba(255, 255, 255, 0.9);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(210, 77%, 51%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgb(46, 170, 220);
  --table-text-size: 16px;
  --tag-background: hsla(210, 77%, 51%, 0.1);
  --tag-background-hover: hsla(210, 77%, 51%, 0.2);
  --tag-border-color: hsla(210, 77%, 51%, 0.15);
  --tag-border-color-hover: hsla(210, 77%, 51%, 0.15);
  --tag-color: rgba(255, 255, 255, 0.9);
  --tag-color-hover: rgba(255, 255, 255, 0.45);
  --tag-radius: 3px;
  --tag-size: 0.875em;
  --text-accent: rgba(255, 255, 255, 0.45);
  --text-accent-hover: rgba(255, 255, 255, 0.45);
  --text-error: rgb(255, 115, 105);
  --text-faint: rgba(255, 255, 255, 0.55);
  --text-highlight-bg: rgb(89, 86, 59);
  --text-muted: rgba(255, 255, 255, 0.7);
  --text-normal: rgba(255, 255, 255, 0.9);
  --text-on-accent: rgba(255, 255, 255, 0.9);
  --text-selection: hsla(211, 100%, 50%, 0.2);
  --text-success: rgb(77, 171, 154);
  --text-warning: rgb(255, 163, 68);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-left-width: 0px;
  border-right-color: rgba(255, 255, 255, 0.9);
  border-right-width: 0px;
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
  content: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2220\\%22 height=\\%2220\\%22 viewBox=\\%220 0 36 36\\%22%3E%3Cpath fill=\\%22%23D99E82\\%22 d=\\%22M35.222 33.598c-.647-2.101-1.705-6.059-2.325-7.566c-.501-1.216-.969-2.438-1.544-3.014c-.575-.575-1.553-.53-2.143.058c0 0-2.469 1.675-3.354 2.783c-1.108.882-2.785 3.357-2.785 3.357c-.59.59-.635 1.567-.06 2.143c.576.575 1.798 1.043 3.015 1.544c1.506.62 5.465 1.676 7.566 2.325c.359.11 1.74-1.271 1.63-1.63z\\%22%2F%3E%3Cpath fill=\\%22%23EA596E\\%22 d=\\%22M13.643 5.308a2.946 2.946 0 0 1 0 4.167l-4.167 4.168a2.948 2.948 0 0 1-4.167 0L1.141 9.475a2.948 2.948 0 0 1 0-4.167l4.167-4.167a2.946 2.946 0 0 1 4.167 0l4.168 4.167z\\%22%2F%3E%3Cpath fill=\\%22%23FFCC4D\\%22 d=\\%22m31.353 23.018l-4.17 4.17l-4.163 4.165L7.392 15.726l8.335-8.334l15.626 15.626z\\%22%2F%3E%3Cpath fill=\\%22%23292F33\\%22 d=\\%22M32.078 34.763s2.709 1.489 3.441.757c.732-.732-.765-3.435-.765-3.435s-2.566.048-2.676 2.678z\\%22%2F%3E%3Cpath fill=\\%22%23CCD6DD\\%22 d=\\%22m2.183 10.517l8.335-8.335l5.208 5.209l-8.334 8.335z\\%22%2F%3E%3Cpath fill=\\%22%2399AAB5\\%22 d=\\%22m3.225 11.558l8.334-8.334l1.042 1.042L4.267 12.6zm2.083 2.086l8.335-8.335l1.042 1.042l-8.335 8.334z\\%22%2F%3E%3C%2Fsvg%3E");
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: var(--callout-title-size, 16px);
  line-height: var(--line-height-tight, 24px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 9.6px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 29, 40, 46);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 89, 65, 65);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 89, 65, 65);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 68, 63, 87);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 89, 65, 65);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 54, 73, 84);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 54, 73, 84);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 89, 74, 58);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 53, 76, 75);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 29, 40, 46);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 54, 73, 84);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 89, 74, 58);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 54, 73, 84;
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgba(255, 255, 255, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23C1694F" d="M32 34a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v27z"%2F%3E%3Cpath fill="%23FFF" d="M29 32a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v23z"%2F%3E%3Cpath fill="%23CCD6DD" d="M25 3h-4a3 3 0 1 0-6 0h-4a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2z"%2F%3E%3Ccircle cx="18" cy="3" r="2" fill="%23292F33"%2F%3E%3Cpath fill="%2399AAB5" d="M20 14a1 1 0 0 1-1 1h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1zm7 4a1 1 0 0 1-1 1H10a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%2331373D" d="M7.5 24.516a.999.999 0 0 1-.707-1.707L22.81 6.793a.999.999 0 1 1 1.414 1.414L8.207 24.223a1 1 0 0 1-.707.293zm8.282-11.738a1.001 1.001 0 0 1-.784-1.621c.113-.144 2.571-3.361.971-7.572a1 1 0 1 1 1.869-.711c2.017 5.307-1.139 9.357-1.274 9.527a.996.996 0 0 1-.782.377zm3.89 3.888a.997.997 0 0 1-.782-1.621c.138-.172 3.435-4.197 9.323-2.726a.999.999 0 0 1 .727 1.213a1.002 1.002 0 0 1-1.212.728c-4.623-1.157-7.172 1.905-7.278 2.036a1 1 0 0 1-.778.37zM6.454 18.511c-1.096 0-2.301-.186-3.58-.671a1 1 0 1 1 .71-1.87c4.219 1.604 7.439-.866 7.574-.972a1.003 1.003 0 0 1 1.403.166a.997.997 0 0 1-.159 1.4c-.129.103-2.495 1.947-5.948 1.947zm1.564-8.066c-1.829 0-4.968-.482-7.542-3.332a1 1 0 1 1 1.484-1.34C4.984 9.122 8.976 8.392 9.146 8.36a.999.999 0 0 1 .392 1.961a8.243 8.243 0 0 1-1.52.124z"%2F%3E%3Cpath fill="%2331373D" d="M9.341 10.341a1 1 0 0 1-.982-1.195c.034-.173.76-4.163-2.587-7.185A1 1 0 1 1 7.113.477c4.214 3.806 3.251 8.849 3.207 9.062a1 1 0 0 1-.979.802zm3.948 18.63a1 1 0 0 1-.969-.758c-1.473-5.895 2.554-9.186 2.726-9.323a1 1 0 0 1 1.249 1.561c-.14.114-3.187 2.667-2.035 7.277a1 1 0 0 1-.971 1.243z"%2F%3E%3Cpath fill="%2331373D" d="M29.844 19.167c-2.96-2.959-6.095-3.569-8.915-2.069c-.157-1.874-1.166-4.007-2.521-5.363c-1.488-1.488-3.008-1.653-4.405-1.044c1.058-2.465.6-5.43-.826-6.856c-1.843-1.843-4.594-.411-7.174 2.168c-2.58 2.58-4.012 5.331-2.168 7.174c1.425 1.426 4.391 1.883 6.856.826c-.61 1.397-.444 2.918 1.044 4.405c1.354 1.354 3.489 2.363 5.363 2.521c-1.5 2.82-.891 5.954 2.069 8.915c3.75 3.749 12.204 5.527 14.204 3.527s.223-10.455-3.527-14.204z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23DD2E44" d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18s18-8.059 18-18S27.941 0 18 0zm13 18c0 2.565-.753 4.95-2.035 6.965L11.036 7.036A12.916 12.916 0 0 1 18 5c7.18 0 13 5.821 13 13zM5 18c0-2.565.753-4.95 2.036-6.964l17.929 17.929A12.93 12.93 0 0 1 18 31c-7.179 0-13-5.82-13-13z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23553788" d="M15 31c0 2.209-.791 4-3 4H5c-4 0-4-14 0-14h7c2.209 0 3 1.791 3 4v6z"%2F%3E%3Cpath fill="%239266CC" d="M34 33h-1V23h1a1 1 0 1 0 0-2H10c-4 0-4 14 0 14h24a1 1 0 1 0 0-2z"%2F%3E%3Cpath fill="%23CCD6DD" d="M34.172 33H11c-2 0-2-10 0-10h23.172c1.104 0 1.104 10 0 10z"%2F%3E%3Cpath fill="%2399AAB5" d="M11.5 25h23.35c-.135-1.175-.36-2-.678-2H11c-1.651 0-1.938 6.808-.863 9.188C9.745 29.229 10.199 25 11.5 25z"%2F%3E%3Cpath fill="%23269" d="M12 8a4 4 0 0 1-4 4H4C0 12 0 1 4 1h4a4 4 0 0 1 4 4v3z"%2F%3E%3Cpath fill="%2355ACEE" d="M31 10h-1V3h1a1 1 0 1 0 0-2H7C3 1 3 12 7 12h24a1 1 0 1 0 0-2z"%2F%3E%3Cpath fill="%23CCD6DD" d="M31.172 10H8c-2 0-2-7 0-7h23.172c1.104 0 1.104 7 0 7z"%2F%3E%3Cpath fill="%2399AAB5" d="M8 5h23.925c-.114-1.125-.364-2-.753-2H8C6.807 3 6.331 5.489 6.562 7.5C6.718 6.142 7.193 5 8 5z"%2F%3E%3Cpath fill="%23F4900C" d="M20 17a4 4 0 0 1-4 4H6c-4 0-4-9 0-9h10a4 4 0 0 1 4 4v1z"%2F%3E%3Cpath fill="%23FFAC33" d="M35 19h-1v-5h1a1 1 0 1 0 0-2H15c-4 0-4 9 0 9h20a1 1 0 1 0 0-2z"%2F%3E%3Cpath fill="%23CCD6DD" d="M35.172 19H16c-2 0-2-5 0-5h19.172c1.104 0 1.104 5 0 5z"%2F%3E%3Cpath fill="%2399AAB5" d="M16 16h19.984c-.065-1.062-.334-2-.812-2H16c-1.274 0-1.733 2.027-1.383 3.5c.198-.839.657-1.5 1.383-1.5z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23DD2E44" d="M21.533 18.002L33.768 5.768a2.5 2.5 0 0 0-3.535-3.535L17.998 14.467L5.764 2.233a2.498 2.498 0 0 0-3.535 0a2.498 2.498 0 0 0 0 3.535l12.234 12.234L2.201 30.265a2.498 2.498 0 0 0 1.768 4.267c.64 0 1.28-.244 1.768-.732l12.262-12.263l12.234 12.234a2.493 2.493 0 0 0 1.768.732a2.5 2.5 0 0 0 1.768-4.267L21.533 18.002z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%239AAAB4" d="m13.503 19.693l2.828 2.828l-4.95 4.95l-2.828-2.829z"%2F%3E%3Cpath fill="%2366757F" d="m1.257 29.11l5.88-5.879a2 2 0 0 1 2.828 0l2.828 2.828a2 2 0 0 1 0 2.828l-5.879 5.879a4 4 0 1 1-5.657-5.656z"%2F%3E%3Ccircle cx="22.355" cy="13.669" r="13.5" fill="%238899A6"%2F%3E%3Ccircle cx="22.355" cy="13.669" r="9.5" fill="%23BBDDF5"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23D99E82" d="M35.222 33.598c-.647-2.101-1.705-6.059-2.325-7.566c-.501-1.216-.969-2.438-1.544-3.014c-.575-.575-1.553-.53-2.143.058c0 0-2.469 1.675-3.354 2.783c-1.108.882-2.785 3.357-2.785 3.357c-.59.59-.635 1.567-.06 2.143c.576.575 1.798 1.043 3.015 1.544c1.506.62 5.465 1.676 7.566 2.325c.359.11 1.74-1.271 1.63-1.63z"%2F%3E%3Cpath fill="%23EA596E" d="M13.643 5.308a2.946 2.946 0 0 1 0 4.167l-4.167 4.168a2.948 2.948 0 0 1-4.167 0L1.141 9.475a2.948 2.948 0 0 1 0-4.167l4.167-4.167a2.946 2.946 0 0 1 4.167 0l4.168 4.167z"%2F%3E%3Cpath fill="%23FFCC4D" d="m31.353 23.018l-4.17 4.17l-4.163 4.165L7.392 15.726l8.335-8.334l15.626 15.626z"%2F%3E%3Cpath fill="%23292F33" d="M32.078 34.763s2.709 1.489 3.441.757c.732-.732-.765-3.435-.765-3.435s-2.566.048-2.676 2.678z"%2F%3E%3Cpath fill="%23CCD6DD" d="m2.183 10.517l8.335-8.335l5.208 5.209l-8.334 8.335z"%2F%3E%3Cpath fill="%2399AAB5" d="m3.225 11.558l8.334-8.334l1.042 1.042L4.267 12.6zm2.083 2.086l8.335-8.335l1.042 1.042l-8.335 8.334z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23BE1931" d="M17 27a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3c.603-.006 6-1 6-5c0-2-2-4-5-4c-2.441 0-4 2-4 3a3 3 0 1 1-6 0c0-4.878 4.58-9 10-9c8 0 11 5.982 11 11c0 4.145-2.277 7.313-6.413 8.92c-.9.351-1.79.587-2.587.747V24a3 3 0 0 1-3 3z"%2F%3E%3Ccircle cx="17" cy="32" r="3" fill="%23BE1931"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23BDDDF4" d="M18 1C8.059 1 0 7.268 0 15c0 4.368 2.574 8.268 6.604 10.835C6.08 28.144 4.859 31.569 2 35c5.758-.96 9.439-3.761 11.716-6.416c1.376.262 2.805.416 4.284.416c9.941 0 18-6.268 18-14S27.941 1 18 1z"%2F%3E%3Ccircle cx="18" cy="15" r="2" fill="%232A6797"%2F%3E%3Ccircle cx="26" cy="15" r="2" fill="%232A6797"%2F%3E%3Ccircle cx="10" cy="15" r="2" fill="%232A6797"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%2377B255" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"%2F%3E%3Cpath fill="%23FFF" d="M29.28 6.362a2.502 2.502 0 0 0-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665c.673 0 1.534-.282 2.099-1.139c.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23FFAC33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%2331373D" d="M34.459 1.375a2.999 2.999 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a2.999 2.999 0 0 0 4.15-.884L35.343 5.524a2.999 2.999 0 0 0-.884-4.149z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23FFCC4D" d="M2.653 35C.811 35-.001 33.662.847 32.027L16.456 1.972c.849-1.635 2.238-1.635 3.087 0l15.609 30.056c.85 1.634.037 2.972-1.805 2.972H2.653z"%2F%3E%3Cpath fill="%23231F20" d="M15.583 28.953a2.421 2.421 0 0 1 2.419-2.418a2.421 2.421 0 0 1 2.418 2.418a2.422 2.422 0 0 1-2.418 2.419a2.422 2.422 0 0 1-2.419-2.419zm.186-18.293c0-1.302.961-2.108 2.232-2.108c1.241 0 2.233.837 2.233 2.108v11.938c0 1.271-.992 2.108-2.233 2.108c-1.271 0-2.232-.807-2.232-2.108V10.66z"%2F%3E%3C%2Fsvg%3E');
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(33, 32, 30);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(47, 52, 55));
  border-bottom-color: rgb(83, 83, 83);
  border-left-color: rgb(83, 83, 83);
  border-right-color: rgb(83, 83, 83);
  border-top-color: rgb(83, 83, 83);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgba(255, 255, 255, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(255, 255, 255, 0.9) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.04));
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(83, 83, 83);
  border-left-color: rgb(83, 83, 83);
  border-right-color: rgb(83, 83, 83);
  border-top-color: rgb(83, 83, 83);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(54, 60, 63);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.04));
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.04));
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(210, 77%, 51%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(210, 77%, 51%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(210, 77%, 51%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(210, 77%, 51%, 0.15));
  --pill-color: var(--tag-color, rgba(255, 255, 255, 0.9));
  --pill-color-hover: var(--tag-color-hover, rgba(255, 255, 255, 0.45));
  --pill-color-remove: var(--tag-color, rgba(255, 255, 255, 0.9));
  --pill-color-remove-hover: var(--tag-color-hover, rgba(255, 255, 255, 0.45));
  --pill-radius: var(--tag-radius, 3px);
  background-color: var(--tag-1-default, rgb(137, 99, 42));
  border-bottom-color: rgba(34, 130, 226, 0.15);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(34, 130, 226, 0.15);
  border-right-color: rgba(34, 130, 226, 0.15);
  border-top-color: rgba(34, 130, 226, 0.15);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: var(--font-ui-smaller, 12.6px);
  line-height: var(--line-height-tight, 12.6px);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 600);
  background-color: var(--h1-bg, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--h1-color, rgba(255, 255, 255, 0.9));
  font-family: var(--h1-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  font-size: var(--h1-size, 30px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h1-letter-spacing, -0.45px);
  line-height: var(--h1-line-height, 36px);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
  font-size: var(--inline-title-size, 0px);
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 600);
  background-color: var(--h2-bg, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--h2-color, rgba(255, 255, 255, 0.9));
  font-family: var(--h2-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  font-size: var(--h2-size, 24px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.264px);
  line-height: var(--h2-line-height, 28.8px);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
  font-family: var(--inline-title-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  font-size: var(--inline-title-size, 0px);
  font-weight: var(--inline-title-weight, 600);
  line-height: var(--inline-title-line-height, 0px);
  margin-bottom: 1px;
  margin-left: 1px;
  margin-right: 1px;
  margin-top: 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 600);
  background-color: var(--h3-bg, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--h3-color, rgba(255, 255, 255, 0.9));
  font-family: var(--h3-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  font-size: var(--h3-size, 20px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.16px);
  line-height: var(--h3-line-height, 26px);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 600);
  background-color: var(--h4-bg, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--h4-color, rgba(255, 255, 255, 0.9));
  font-family: var(--h4-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  font-weight: var(--font-weight, 600);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 600);
  background-color: var(--h5-bg, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--h5-color, rgba(255, 255, 255, 0.9));
  font-family: var(--h5-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  font-weight: var(--font-weight, 600);
}

html[saved-theme="dark"] body h6 {
  background-color: var(--h6-bg, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--h6-color, rgba(255, 255, 255, 0.9));
  font-family: var(--h6-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 54, 73, 84);
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-muted, rgba(255, 255, 255, 0.7));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--font-bold, 500);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-muted, rgba(255, 255, 255, 0.7));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--font-bold, 500);
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
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--font-bold, 500);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--icon-color, rgba(255, 255, 255, 0.7));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(54, 60, 63));
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  color: var(--status-bar-text-color, rgba(255, 255, 255, 0.7));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: var(--status-bar-font-size, 13.968px);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(255, 255, 255, 0.7);
  font-size: 13.968px;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgba(255, 255, 255, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-muted, rgba(255, 255, 255, 0.7));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgba(255, 255, 255, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--text-muted, rgba(255, 255, 255, 0.7));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--icon-color, rgba(255, 255, 255, 0.7));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgba(255, 255, 255, 0.7);
  stroke: rgba(255, 255, 255, 0.7);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(255, 255, 255, 0.55);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.55);
  border-right-color: rgba(255, 255, 255, 0.55);
  border-top-color: rgba(255, 255, 255, 0.55);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--text-faint, rgba(255, 255, 255, 0.55));
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgba(255, 255, 255, 0.55));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(54, 60, 63));
  border-color: rgba(255, 255, 255, 0.9);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(255, 255, 255, 0.14);
  color: var(--table-header-color, rgba(255, 255, 255, 0.9));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(255, 255, 255, 0.14);
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.14);
  border-right-color: rgba(255, 255, 255, 0.14);
  border-top-color: rgba(255, 255, 255, 0.14);
  border-top-width: 1px;
  color: var(--text-muted, rgba(255, 255, 255, 0.7));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .metadata-property-key {
  color: var(--text-muted, rgba(255, 255, 255, 0.7));
  font-family: var(--metadata-label-font, "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  font-size: var(--font-ui-smaller, 14.4px);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgba(255, 255, 255, 0.7);
  font-family: var(--metadata-input-font, "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(255, 255, 255, 0.14);
}

html[saved-theme="dark"] body .note-properties-key {
  color: var(--text-muted, rgba(255, 255, 255, 0.7));
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(255, 255, 255, 0.7);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(210, 77%, 51%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(210, 77%, 51%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(210, 77%, 51%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(210, 77%, 51%, 0.15));
  --pill-color: var(--tag-color, rgba(255, 255, 255, 0.9));
  --pill-color-hover: var(--tag-color-hover, rgba(255, 255, 255, 0.45));
  --pill-color-remove: var(--tag-color, rgba(255, 255, 255, 0.9));
  --pill-color-remove-hover: var(--tag-color-hover, rgba(255, 255, 255, 0.45));
  --pill-radius: var(--tag-radius, 3px);
  background-color: var(--tag-1-default, rgb(137, 99, 42));
  border-radius: 3px;
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(255, 255, 255, 0.7);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(47, 52, 55));
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(54, 60, 63));
  border-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(61, 68, 72));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgba(255, 255, 255, 0.9);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(54, 60, 63));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  color: var(--text-normal, rgba(255, 255, 255, 0.9));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 41.2832px;
  font-weight: 700;
  line-height: 53.6682px;
}

html[saved-theme="dark"] body abbr {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(255, 255, 255, 0.7);
  border-left-color: rgba(255, 255, 255, 0.7);
  border-right-color: rgba(255, 255, 255, 0.7);
  border-top-color: rgba(255, 255, 255, 0.7);
  color: var(--text-normal, rgba(255, 255, 255, 0.7));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgba(179, 178, 178, 0.14));
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--code-normal, rgba(255, 255, 255, 0.9));
  font-family: var(--font-monospace, "??", "??", "iA Writer Duospace", Nitti, Menlo, Courier, monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgba(255, 255, 255, 0.9);
  border-left-color: rgba(255, 255, 255, 0.9);
  border-right-color: rgba(255, 255, 255, 0.9);
  border-top-color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body sub {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body summary {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body sup {
  color: rgba(255, 255, 255, 0.9);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-1, var(--tag-1-default));
  border-bottom-color: rgba(34, 130, 226, 0.15);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(34, 130, 226, 0.15);
  border-right-color: rgba(34, 130, 226, 0.15);
  border-top-color: rgba(34, 130, 226, 0.15);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--tag-color, rgba(255, 255, 255, 0.9));
}`,
  },
  light: {
    base: `:root:root {
  --L0: 0%;
  --L1: 100%;
  --L2: 96%;
  --L3: 90%;
  --accent-h: 210;
  --accent-l: 51%;
  --accent-s: 77%;
  --background-accent: hsl(var(--hue), var(--sat), var(--L0));
  --background-modifier-border: rgba(var(--text-rgb), 0.14);
  --background-modifier-border-focus: var(--color-base-40, #afafaf);
  --background-modifier-border-hover: var(--color-base-35, #f1f1f0);
  --background-modifier-error: var(--color-red, rgb(224, 62, 62));
  --background-modifier-error-hover: var(--color-red, rgb(224, 62, 62));
  --background-modifier-error-rgb: var(--color-red-rgb, 251, 228, 228);
  --background-modifier-form-field: var(--color-base-00, hsl(0, 0%, 100%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(0, 0%, 100%));
  --background-modifier-success: var(--color-green, rgb(15, 123, 108));
  --background-modifier-success-rgb: var(--color-green-rgb, 221, 237, 234);
  --background-primary: hsl(var(--hue), var(--sat), var(--L1));
  --background-primary-alt: hsl(var(--hue), var(--sat), var(--L3));
  --background-secondary: hsl(var(--hue), var(--sat), var(--L2));
  --background-secondary-alt: hsl(var(--hue), var(--sat), var(--L3));
  --banner-size: 220px;
  --bases-cards-background: var(--background-primary, hsl(203, 8%, 100%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(203, 8%, 90%));
  --bases-embed-border-color: var(--background-modifier-border, rgba(55, 53, 47, 0.14));
  --bases-embed-border-radius: var(--radius-s, 3px);
  --bases-group-heading-property-color: var(--text-muted, rgba(55, 53, 47, 0.7));
  --bases-group-heading-property-size: var(--font-ui-smaller, 0.9em);
  --bases-table-border-color: var(--table-border-color, rgba(55, 53, 47, 0.14));
  --bases-table-cell-background-active: var(--background-primary, hsl(203, 8%, 100%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(203, 8%, 90%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(210, 77%, 51%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 3px);
  --bases-table-group-background: var(--background-primary-alt, hsl(203, 8%, 90%));
  --bases-table-header-background: var(--background-primary, hsl(203, 8%, 100%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsl(60, 3%, 0%, 4%));
  --bases-table-header-color: var(--text-muted, rgba(55, 53, 47, 0.7));
  --bases-table-summary-background: var(--background-primary, hsl(203, 8%, 100%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsl(60, 3%, 0%, 4%));
  --blockquote-border-color: var(--text-normal, rgba(55, 53, 47, 0.9));
  --blockquote-border-thickness: 3px;
  --bodyFont: var(--font-text, var(--font-default, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"));
  --callout-bug: var(--color-red-rgb, 251, 228, 228);
  --callout-default: var(--color-blue-rgb, 221, 235, 241);
  --callout-error: var(--color-red-rgb, 251, 228, 228);
  --callout-example: var(--color-purple-rgb, 234, 228, 242);
  --callout-fail: var(--color-red-rgb, 251, 228, 228);
  --callout-important: var(--color-cyan-rgb, 231, 243, 248);
  --callout-info: var(--color-blue-rgb, 221, 235, 241);
  --callout-question: var(--color-orange-rgb, 250, 235, 221);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 3px);
  --callout-success: var(--color-green-rgb, 221, 237, 234);
  --callout-summary: var(--color-cyan-rgb, 231, 243, 248);
  --callout-tip: var(--color-cyan-rgb, 231, 243, 248);
  --callout-todo: var(--color-blue-rgb, 221, 235, 241);
  --callout-warning: var(--color-orange-rgb, 250, 235, 221);
  --canvas-background: var(--background-primary, hsl(203, 8%, 100%));
  --canvas-card-label-color: var(--text-faint, rgba(55, 53, 47, 0.55));
  --canvas-color-1: var(--color-red-rgb, 251, 228, 228);
  --canvas-color-2: var(--color-orange-rgb, 250, 235, 221);
  --canvas-color-3: var(--color-yellow-rgb, 251, 243, 219);
  --canvas-color-4: var(--color-green-rgb, 221, 237, 234);
  --canvas-color-5: var(--color-cyan-rgb, 231, 243, 248);
  --canvas-color-6: var(--color-purple-rgb, 234, 228, 242);
  --canvas-controls-radius: var(--radius-s, 3px);
  --canvas-dot-pattern: var(--color-base-30, #dfdfdf);
  --caret-color: var(--text-normal, rgba(55, 53, 47, 0.9));
  --checkbox-border-color: var(--text-faint, rgba(55, 53, 47, 0.55));
  --checkbox-border-color-hover: var(--text-muted, rgba(55, 53, 47, 0.7));
  --checkbox-color: var(--interactive-accent, rgb(46, 170, 220));
  --checkbox-color-hover: var(--interactive-accent-hover, rgba(46, 170, 220, 0.8));
  --checkbox-marker-color: var(--background-primary, hsl(203, 8%, 100%));
  --checkbox-radius: var(--radius-s, 3px);
  --checklist-done-color: var(--text-muted, rgba(55, 53, 47, 0.7));
  --clickable-icon-radius: var(--radius-s, 3px);
  --code: #EB5757;
  --code-background: var(--background-primary-alt, hsl(0, 1%, 70%, 14%));
  --code-border-color: var(--background-modifier-border, rgba(55, 53, 47, 0.14));
  --code-bracket-background: var(--background-modifier-hover, hsl(60, 3%, 0%, 4%));
  --code-comment: var(--text-faint, rgba(55, 53, 47, 0.55));
  --code-function: var(--color-yellow, rgb(223, 171, 1));
  --code-important: var(--color-orange, rgb(217, 115, 13));
  --code-keyword: var(--color-pink, rgb(173, 26, 114));
  --code-normal: var(--text-normal, rgba(55, 53, 47, 0.9));
  --code-operator: var(--color-red, rgb(224, 62, 62));
  --code-property: var(--color-cyan, rgb(51, 126, 169));
  --code-punctuation: var(--text-muted, rgba(55, 53, 47, 0.7));
  --code-radius: var(--radius-s, 3px);
  --code-string: var(--color-green, rgb(15, 123, 108));
  --code-tag: var(--color-red, rgb(224, 62, 62));
  --code-value: var(--color-purple, rgb(105, 64, 165));
  --codeFont: var(--font-text, var(--font-default, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"));
  --collapse-icon-color: var(--text-faint, rgba(55, 53, 47, 0.55));
  --collapse-icon-color-collapsed: var(--text-accent, rgba(55, 53, 47, 0.45));
  --color-base-00: hsl(0, 0%, 100%);
  --color-base-05: #fbfbfa;
  --color-base-10: #fbfbfa;
  --color-base-100: #37352f;
  --color-base-20: #fbfbfa;
  --color-base-25: #e1e1e1;
  --color-base-30: #dfdfdf;
  --color-base-35: #f1f1f0;
  --color-base-40: #afafaf;
  --color-base-50: #a3a29e;
  --color-base-60: #7b7b7b;
  --color-base-70: #737272;
  --color-blue: rgb(11, 110, 153);
  --color-blue-rgb: 221, 235, 241;
  --color-brown: rgb(100, 71, 58);
  --color-brown-rgb: 233, 229, 227;
  --color-cyan: rgb(51, 126, 169);
  --color-cyan-rgb: 231, 243, 248;
  --color-gray: rgba(55, 53, 47, 0.6);
  --color-gray-rgb: 235, 236, 237;
  --color-green: rgb(15, 123, 108);
  --color-green-rgb: 221, 237, 234;
  --color-orange: rgb(217, 115, 13);
  --color-orange-rgb: 250, 235, 221;
  --color-pink: rgb(173, 26, 114);
  --color-pink-rgb: 244, 223, 235;
  --color-purple: rgb(105, 64, 165);
  --color-purple-rgb: 234, 228, 242;
  --color-red: rgb(224, 62, 62);
  --color-red-rgb: 251, 228, 228;
  --color-yellow: rgb(223, 171, 1);
  --color-yellow-rgb: 251, 243, 219;
  --custom-line-height: 1.5em;
  --dark: var(--text-normal, rgba(var(--text-rgb), 0.9));
  --darkgray: var(--text-normal, rgba(var(--text-rgb), 0.9));
  --divider-color: var(--background-modifier-border, rgba(55, 53, 47, 0.14));
  --divider-color-hover: var(--interactive-accent, rgb(46, 170, 220));
  --divider-width: 0.05em;
  --dropdown-background: var(--interactive-normal, #f2f3f5);
  --dropdown-background-hover: var(--interactive-hover, #e9e9e9);
  --file-header-background: var(--background-primary, hsl(203, 8%, 100%));
  --file-header-background-focused: var(--background-primary, hsl(203, 8%, 100%));
  --file-header-font: var(--font-interface, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  --file-header-font-size: var(--font-ui-small, 0.95em);
  --flair-background: var(--interactive-normal, #f2f3f5);
  --flair-color: var(--text-normal, rgba(55, 53, 47, 0.9));
  --font-bold: 500;
  --font-default: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-mermaid: var(--font-text, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  --font-monospace-default: 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace;
  --font-text: var(--font-default, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  --font-ui-large: 1.15em;
  --font-ui-medium: 0.97em;
  --font-ui-small: 0.95em;
  --font-ui-smaller: 0.9em;
  --footnote-divider-color: var(--metadata-divider-color, rgba(55, 53, 47, 0.14));
  --footnote-id-color: var(--text-muted, rgba(55, 53, 47, 0.7));
  --footnote-id-color-no-occurrences: var(--text-faint, rgba(55, 53, 47, 0.55));
  --footnote-input-background-active: var(--metadata-input-background-active, hsl(60, 3%, 0%, 4%));
  --footnote-radius: var(--radius-s, 3px);
  --graph-line: var(--background-modifier-border, rgba(55, 53, 47, 0.14));
  --graph-node: var(--color-blue, rgb(11, 110, 153));
  --graph-node-attachment: var(--color-yellow, rgb(223, 171, 1));
  --graph-node-focused: var(--interactive-accent, rgb(46, 170, 220));
  --graph-node-tag: var(--color-green, rgb(15, 123, 108));
  --graph-node-unresolved: var(--color-cyan, rgb(51, 126, 169));
  --graph-text: var(--text-normal, rgba(55, 53, 47, 0.9));
  --gray: var(--text-muted, rgba(var(--text-rgb), 0.7));
  --h-bg: transparent;
  --h-color: var(--text-normal, rgba(55, 53, 47, 0.9));
  --h1-bg: var(--h-bg, transparent);
  --h1-color: var(--h-color, rgba(55, 53, 47, 0.9));
  --h1-size: 1.875em;
  --h1-weight: 600;
  --h2-bg: var(--h-bg, transparent);
  --h2-color: var(--h-color, rgba(55, 53, 47, 0.9));
  --h2-size: 1.5em;
  --h2-weight: 600;
  --h3-bg: var(--h-bg, transparent);
  --h3-color: var(--h-color, rgba(55, 53, 47, 0.9));
  --h3-size: 1.25em;
  --h3-weight: 600;
  --h4-bg: var(--h-bg, transparent);
  --h4-color: var(--h-color, rgba(55, 53, 47, 0.9));
  --h4-weight: 600;
  --h5-bg: var(--h-bg, transparent);
  --h5-color: var(--h-color, rgba(55, 53, 47, 0.9));
  --h5-weight: 600;
  --h6-bg: var(--h-bg, transparent);
  --h6-color: var(--h-color, rgba(55, 53, 47, 0.9));
  --headerFont: var(--font-text, var(--font-default, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"));
  --heading-formatting: var(--text-faint, rgba(55, 53, 47, 0.55));
  --highlight: var(--text-highlight-bg, var(--tag-1-default, rgb(251, 243, 219)));
  --hr-color: var(--background-modifier-border, rgba(55, 53, 47, 0.14));
  --hue: 203;
  --icon-color: var(--text-muted, rgba(55, 53, 47, 0.7));
  --icon-color-active: var(--text-accent, rgba(55, 53, 47, 0.45));
  --icon-color-focused: var(--text-normal, rgba(55, 53, 47, 0.9));
  --icon-color-hover: var(--text-muted, rgba(55, 53, 47, 0.7));
  --inline-title-color: var(--h1-color, rgba(55, 53, 47, 0.9));
  --inline-title-size: var(--h1-size, 1.875em);
  --inline-title-weight: var(--h1-weight, 600);
  --input-date-separator: var(--text-faint, rgba(55, 53, 47, 0.55));
  --input-placeholder-color: var(--text-faint, rgba(55, 53, 47, 0.55));
  --interactive-accent: rgb(var(--interactive-accent-rgb));
  --interactive-accent-hover: rgba(var(--interactive-accent-rgb), 0.8);
  --interactive-accent-hsl: var(--color-accent-hsl, 210, 77%, 51%);
  --interactive-accent-rgb: 46, 170, 220;
  --interactive-hover: var(--color-base-10, #e9e9e9);
  --interactive-normal: var(--color-base-00, #f2f3f5);
  --light: var(--background-primary, hsl(var(--hue), var(--sat), var(--L1)));
  --lightgray: var(--background-secondary, hsl(var(--hue), var(--sat), var(--L2)));
  --link-color: var(--text-accent, rgba(55, 53, 47, 0.45));
  --link-color-hover: var(--text-muted, rgba(55, 53, 47, 0.7));
  --link-external-color: var(--text-accent, rgba(55, 53, 47, 0.45));
  --link-external-color-hover: var(--text-accent-hover, rgba(55, 53, 47, 0.45));
  --link-unresolved-color: var(--text-accent, rgba(55, 53, 47, 0.45));
  --list-bullet-size: 0.37em;
  --list-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --list-marker-color: var(--text-normal, rgba(55, 53, 47, 0.9));
  --list-marker-color-collapsed: var(--text-accent, rgba(55, 53, 47, 0.45));
  --list-marker-color-hover: var(--text-normal, rgba(55, 53, 47, 0.9));
  --list-menu-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 25 25' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='8' y1='6' x2='21' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='21' y2='12'%3E%3C/line%3E%3Cline x1='8' y1='18' x2='21' y2='18'%3E%3C/line%3E%3Cline x1='3' y1='6' x2='3.01' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='12' x2='3.01' y2='12'%3E%3C/line%3E%3Cline x1='3' y1='18' x2='3.01' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --list-spacing: 0.3em;
  --menu-background: var(--background-secondary, hsl(203, 8%, 96%));
  --menu-border-color: var(--background-modifier-border-hover, #f1f1f0);
  --metadata-border-color: var(--background-modifier-border, rgba(55, 53, 47, 0.14));
  --metadata-divider-color: var(--background-modifier-border, rgba(55, 53, 47, 0.14));
  --metadata-input-background-active: var(--background-modifier-hover, hsl(60, 3%, 0%, 4%));
  --metadata-input-font: var(--font-interface, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  --metadata-input-text-color: var(--text-normal, rgba(55, 53, 47, 0.9));
  --metadata-label-background-active: var(--background-modifier-hover, hsl(60, 3%, 0%, 4%));
  --metadata-label-font: var(--font-interface, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  --metadata-label-text-color: var(--text-muted, rgba(55, 53, 47, 0.7));
  --metadata-label-text-color-hover: var(--text-muted, rgba(55, 53, 47, 0.7));
  --metadata-property-background-active: var(--background-modifier-hover, hsl(60, 3%, 0%, 4%));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 0.95em);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 0.95em);
  --modal-background: var(--background-primary, hsl(203, 8%, 100%));
  --modal-height: calc(100vh - 100px);
  --modal-max-height: 715px;
  --modal-max-width: calc(100vw - 100px);
  --nav-collapse-icon-color: var(--collapse-icon-color, rgba(55, 53, 47, 0.55));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgba(55, 53, 47, 0.55));
  --nav-heading-color: var(--text-normal, rgba(55, 53, 47, 0.9));
  --nav-heading-color-collapsed: var(--text-faint, rgba(55, 53, 47, 0.55));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgba(55, 53, 47, 0.7));
  --nav-heading-color-hover: var(--text-normal, rgba(55, 53, 47, 0.9));
  --nav-indentation-guide-color: var(--indentation-guide-color, transparent);
  --nav-item-background-active: var(--background-modifier-hover, hsl(60, 3%, 0%, 4%));
  --nav-item-background-hover: var(--background-modifier-hover, hsl(60, 3%, 0%, 4%));
  --nav-item-color: var(--text-muted, rgba(55, 53, 47, 0.7));
  --nav-item-color-active: var(--text-normal, rgba(55, 53, 47, 0.9));
  --nav-item-color-highlighted: var(--text-accent, rgba(55, 53, 47, 0.45));
  --nav-item-color-hover: var(--text-normal, rgba(55, 53, 47, 0.9));
  --nav-item-color-selected: var(--text-normal, rgba(55, 53, 47, 0.9));
  --nav-item-radius: var(--radius-s, 3px);
  --nav-item-size: var(--font-ui-small, 0.95em);
  --nav-tag-color: var(--text-faint, rgba(55, 53, 47, 0.55));
  --nav-tag-color-active: var(--text-muted, rgba(55, 53, 47, 0.7));
  --nav-tag-color-hover: var(--text-muted, rgba(55, 53, 47, 0.7));
  --nav-tag-radius: var(--radius-s, 3px);
  --number-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='4' y1='9' x2='20' y2='9'%3E%3C/line%3E%3Cline x1='4' y1='15' x2='20' y2='15'%3E%3C/line%3E%3Cline x1='10' y1='3' x2='8' y2='21'%3E%3C/line%3E%3Cline x1='16' y1='3' x2='14' y2='21'%3E%3C/line%3E%3C/svg%3E");
  --opacity-translucency: 0.7;
  --pdf-background: var(--background-primary, hsl(203, 8%, 100%));
  --pdf-page-background: var(--background-primary, hsl(203, 8%, 100%));
  --pdf-sidebar-background: var(--background-primary, hsl(203, 8%, 100%));
  --pill-border-color: var(--background-modifier-border, rgba(55, 53, 47, 0.14));
  --pill-border-color-hover: var(--background-modifier-border-hover, #f1f1f0);
  --pill-color: var(--text-muted, rgba(55, 53, 47, 0.7));
  --pill-color-hover: var(--text-normal, rgba(55, 53, 47, 0.9));
  --pill-color-remove: var(--text-faint, rgba(55, 53, 47, 0.55));
  --pill-color-remove-hover: var(--text-accent, rgba(55, 53, 47, 0.45));
  --prompt-background: var(--background-primary, hsl(203, 8%, 100%));
  --radius-s: 3px;
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(203, 8%, 100%) 65%, transparent) linear-gradient(hsl(203, 8%, 100%), color-mix(in srgb, hsl(203, 8%, 100%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(203, 8%, 96%));
  --ribbon-background-collapsed: var(--background-primary, hsl(203, 8%, 100%));
  --sat: 8%;
  --search-clear-button-color: var(--text-muted, rgba(55, 53, 47, 0.7));
  --search-icon-color: var(--text-muted, rgba(55, 53, 47, 0.7));
  --search-result-background: var(--background-primary, hsl(203, 8%, 100%));
  --secondary: var(--text-accent, rgba(var(--text-rgb), 0.45));
  --setting-group-heading-color: var(--text-normal, rgba(55, 53, 47, 0.9));
  --setting-group-heading-size: var(--font-ui-medium, 0.97em);
  --setting-items-background: var(--background-primary-alt, hsl(203, 8%, 90%));
  --setting-items-border-color: var(--background-modifier-border, rgba(55, 53, 47, 0.14));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgba(55, 53, 47, 0.7));
  --shiki-code-background: var(--code-background, hsl(0, 1%, 70%, 14%));
  --shiki-code-block-border-radius: var(--code-radius, 3px);
  --shiki-code-comment: var(--text-faint, rgba(55, 53, 47, 0.55));
  --shiki-code-function: var(--color-green, rgb(15, 123, 108));
  --shiki-code-important: var(--color-orange, rgb(217, 115, 13));
  --shiki-code-keyword: var(--color-pink, rgb(173, 26, 114));
  --shiki-code-normal: var(--text-muted, rgba(55, 53, 47, 0.7));
  --shiki-code-property: var(--color-cyan, rgb(51, 126, 169));
  --shiki-code-punctuation: var(--text-muted, rgba(55, 53, 47, 0.7));
  --shiki-code-string: var(--color-yellow, rgb(223, 171, 1));
  --shiki-code-value: var(--color-purple, rgb(105, 64, 165));
  --shiki-gutter-border-color: var(--background-modifier-border, rgba(55, 53, 47, 0.14));
  --shiki-gutter-text-color: var(--text-faint, rgba(55, 53, 47, 0.55));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgba(55, 53, 47, 0.7));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgba(55, 53, 47, 0.7));
  --shiki-terminal-dots-color: var(--text-faint, rgba(55, 53, 47, 0.55));
  --slider-thumb-border-color: var(--background-modifier-border-hover, #f1f1f0);
  --slider-track-background: var(--background-modifier-border, rgba(55, 53, 47, 0.14));
  --status-bar-background: var(--background-secondary, hsl(203, 8%, 96%));
  --status-bar-border-color: var(--divider-color, rgba(55, 53, 47, 0.14));
  --status-bar-font-size: var(--font-ui-smaller, 0.9em);
  --status-bar-text-color: var(--text-muted, rgba(55, 53, 47, 0.7));
  --status-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='2' x2='12' y2='6'%3E%3C/line%3E%3Cline x1='12' y1='18' x2='12' y2='22'%3E%3C/line%3E%3Cline x1='4.93' y1='4.93' x2='7.76' y2='7.76'%3E%3C/line%3E%3Cline x1='16.24' y1='16.24' x2='19.07' y2='19.07'%3E%3C/line%3E%3Cline x1='2' y1='12' x2='6' y2='12'%3E%3C/line%3E%3Cline x1='18' y1='12' x2='22' y2='12'%3E%3C/line%3E%3Cline x1='4.93' y1='19.07' x2='7.76' y2='16.24'%3E%3C/line%3E%3Cline x1='16.24' y1='7.76' x2='19.07' y2='4.93'%3E%3C/line%3E%3C/svg%3E");
  --suggestion-background: var(--background-primary, hsl(203, 8%, 100%));
  --sync-avatar-color-1: var(--color-red, rgb(224, 62, 62));
  --sync-avatar-color-2: var(--color-orange, rgb(217, 115, 13));
  --sync-avatar-color-3: var(--color-yellow, rgb(223, 171, 1));
  --sync-avatar-color-4: var(--color-green, rgb(15, 123, 108));
  --sync-avatar-color-5: var(--color-cyan, rgb(51, 126, 169));
  --sync-avatar-color-6: var(--color-blue, rgb(11, 110, 153));
  --sync-avatar-color-7: var(--color-purple, rgb(105, 64, 165));
  --sync-avatar-color-8: var(--color-pink, rgb(173, 26, 114));
  --tab-background-active: var(--background-primary, transparent);
  --tab-container-background: var(--background-secondary, hsl(203, 8%, 96%));
  --tab-curve: 0px;
  --tab-divider-color: var(--background-modifier-border-hover, #f1f1f0);
  --tab-font-size: var(--font-ui-small, 0.95em);
  --tab-outline-color: var(--divider-color, transparent);
  --tab-radius: var(--radius-s, 3px);
  --tab-stacked-font-size: var(--font-ui-small, 0.95em);
  --tab-switcher-background: var(--background-secondary, hsl(203, 8%, 96%));
  --tab-text-color: var(--text-faint, rgba(55, 53, 47, 0.55));
  --tab-text-color-active: var(--text-muted, rgba(55, 53, 47, 0.7));
  --tab-text-color-focused: var(--text-muted, rgba(55, 53, 47, 0.7));
  --tab-text-color-focused-active: var(--text-muted, rgba(55, 53, 47, 0.7));
  --tab-text-color-focused-active-current: var(--text-normal, rgba(55, 53, 47, 0.9));
  --tab-text-color-focused-highlighted: var(--text-accent, rgba(55, 53, 47, 0.45));
  --table-add-button-border-color: var(--background-modifier-border, rgba(55, 53, 47, 0.14));
  --table-border-color: var(--background-modifier-border, rgba(55, 53, 47, 0.14));
  --table-drag-handle-background-active: var(--table-selection-border-color, rgb(46, 170, 220));
  --table-drag-handle-color: var(--text-faint, rgba(55, 53, 47, 0.55));
  --table-drag-handle-color-active: var(--text-on-accent, rgba(55, 53, 47, 0.9));
  --table-header-background: rgba(var(--color-gray-rgb), 0.5);
  --table-header-background-hover: rgba(var(--color-gray-rgb), 0.5);
  --table-header-border-color: var(--table-border-color, rgba(55, 53, 47, 0.14));
  --table-header-color: var(--text-normal, rgba(55, 53, 47, 0.9));
  --table-selection-border-color: var(--interactive-accent, rgb(46, 170, 220));
  --tag-1-default: rgb(253, 236, 200);
  --tag-10-default: rgb(227, 226, 224, 0.5);
  --tag-2-default: rgb(219, 237, 219);
  --tag-3-default: rgb(211, 229, 239);
  --tag-4-default: rgb(232, 222, 238);
  --tag-5-default: rgb(245, 224, 233);
  --tag-6-default: rgb(255, 226, 221);
  --tag-7-default: rgb(250, 222, 201);
  --tag-8-default: rgb(238, 224, 218);
  --tag-9-default: rgb(227, 226, 224);
  --tag-color: var(--text-normal, rgba(55, 53, 47, 0.9));
  --tag-color-hover: var(--text-accent, rgba(55, 53, 47, 0.45));
  --tag-radius: var(--radius-s, 3px);
  --tertiary: var(--text-accent-hover, rgba(var(--text-rgb), 0.45));
  --text-accent: rgba(var(--text-rgb), 0.45);
  --text-accent-hover: rgba(var(--text-rgb), 0.45);
  --text-error: var(--color-red, rgb(224, 62, 62));
  --text-faint: rgba(var(--text-rgb), 0.55);
  --text-highlight-bg: var(--tag-1-default, rgb(251, 243, 219));
  --text-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='21' y1='6' x2='3' y2='6'%3E%3C/line%3E%3Cline x1='15' y1='12' x2='3' y2='12'%3E%3C/line%3E%3Cline x1='17' y1='18' x2='3' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --text-muted: rgba(var(--text-rgb), 0.7);
  --text-normal: rgba(var(--text-rgb), 0.9);
  --text-on-accent: rgba(var(--text-rgb), 0.9);
  --text-rgb: 55, 53, 47;
  --text-success: var(--color-green, rgb(15, 123, 108));
  --text-warning: var(--color-orange, rgb(217, 115, 13));
  --textHighlight: var(--text-highlight-bg, var(--tag-1-default, rgb(251, 243, 219)));
  --titleFont: var(--font-text, var(--font-default, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"));
  --titlebar-background: var(--background-secondary, hsl(203, 8%, 96%));
  --titlebar-background-focused: var(--background-secondary-alt, hsl(203, 8%, 90%));
  --titlebar-border-color: var(--background-modifier-border, rgba(55, 53, 47, 0.14));
  --titlebar-text-color: var(--text-muted, rgba(55, 53, 47, 0.7));
  --titlebar-text-color-focused: var(--text-normal, rgba(55, 53, 47, 0.9));
  --titlebar-text-weight: var(--font-bold, 500);
  --vault-profile-color: var(--text-normal, rgba(55, 53, 47, 0.9));
  --vault-profile-color-hover: var(--vault-profile-color, rgba(55, 53, 47, 0.9));
  --vault-profile-font-size: var(--font-ui-small, 0.95em);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(203, 8%, 96%));
  background-color: var(--tab-container-background, rgb(244, 245, 246));
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(244, 245, 246));
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(55, 53, 47, 0.14);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(203, 8%, 96%));
  background-color: var(--tab-container-background, rgb(244, 245, 246));
  border-left-color: rgba(55, 53, 47, 0.14);
  color: rgba(55, 53, 47, 0.9);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgba(55, 53, 47, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgba(55, 53, 47, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgba(55, 53, 47, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--italic-color, rgba(55, 53, 47, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgba(55, 53, 47, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(251, 243, 219));
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body del {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(55, 53, 47, 0.9);
  border-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(46, 170, 220));
  border-color: rgb(46, 170, 220);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgba(55, 53, 47, 0.7));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.7) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.7);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--link-weight, 500);
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration: underline 1px rgba(55, 53, 47, 0.14);
  text-decoration-color: rgba(55, 53, 47, 0.14);
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--text-muted, rgba(55, 53, 47, 0.7));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--link-weight, 500);
  outline: rgba(55, 53, 47, 0.7) none 0px;
  text-decoration: underline 1px rgba(55, 53, 47, 0.14);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(55, 53, 47, 0.14));
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgba(55, 53, 47, 0.9);
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body ol > li {
  color: rgba(55, 53, 47, 0.9);
  margin-left: 26.6953px;
  padding-bottom: var(--list-spacing, 4.8px);
  padding-top: var(--list-spacing, 4.8px);
}

html[saved-theme="light"] body ul > li {
  color: rgba(55, 53, 47, 0.9);
  margin-left: 26.6953px;
  padding-bottom: var(--list-spacing, 4.8px);
  padding-top: var(--list-spacing, 4.8px);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgba(55, 53, 47, 0.55));
}

html[saved-theme="light"] body blockquote {
  color: var(--blockquote-color, rgba(55, 53, 47, 0.9));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  line-height: 26.4px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body table {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: left;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: var(--table-text-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: var(--table-header-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgba(235, 236, 237, 0.5));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(179, 178, 178, 0.14));
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--code, rgb(235, 87, 87));
  font-family: var(--font-monospace, "??", "??", "iA Writer Duospace", Nitti, Menlo, Courier, monospace);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgba(179, 178, 178, 0.14));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body figcaption {
  color: rgba(55, 53, 47, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(0, 1%, 70%, 14%));
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(227, 230, 232));
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
  color: var(--text-muted, rgba(55, 53, 47, 0.7));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgb(46, 170, 220);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgba(55, 53, 47, 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgba(55, 53, 47, 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgba(55, 53, 47, 0.9);
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(217, 115, 13);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 162, 158);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(223, 171, 1);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 126, 169);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(11, 110, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 62, 62);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 62, 62);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 62, 62);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 62, 62);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(11, 110, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(223, 171, 1);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(223, 171, 1);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(105, 64, 165);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 62, 62);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(15, 123, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(15, 123, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(15, 123, 108);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgba(55, 53, 47, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="light"] body .callout-title {
  --background-accent: hsl(203, 8%, 0%);
  --background-modifier-active-hover: hsla(210, 77%, 51%, 0.1);
  --background-modifier-border: rgba(55, 53, 47, 0.14);
  --background-modifier-border-focus: #afafaf;
  --background-modifier-border-hover: #f1f1f0;
  --background-modifier-error: rgb(224, 62, 62);
  --background-modifier-error-hover: rgb(224, 62, 62);
  --background-modifier-error-rgb: 251, 228, 228;
  --background-modifier-form-field: hsl(0, 0%, 100%);
  --background-modifier-form-field-hover: hsl(0, 0%, 100%);
  --background-modifier-hover: hsl(60, 3%, 0%, 4%);
  --background-modifier-success: rgb(15, 123, 108);
  --background-modifier-success-rgb: 221, 237, 234;
  --background-primary: hsl(203, 8%, 100%);
  --background-primary-alt: hsl(203, 8%, 90%);
  --background-secondary: hsl(203, 8%, 96%);
  --background-secondary-alt: hsl(203, 8%, 90%);
  --blockquote-border-color: rgba(55, 53, 47, 0.9);
  --blur-background: color-mix(in srgb, hsl(203, 8%, 100%) 65%, transparent) linear-gradient(hsl(203, 8%, 100%), color-mix(in srgb, hsl(203, 8%, 100%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 251, 228, 228;
  --callout-color: 221, 235, 241;
  --callout-default: 221, 235, 241;
  --callout-error: 251, 228, 228;
  --callout-example: 234, 228, 242;
  --callout-fail: 251, 228, 228;
  --callout-important: 231, 243, 248;
  --callout-info: 221, 235, 241;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 250, 235, 221;
  --callout-radius: 3px;
  --callout-success: 221, 237, 234;
  --callout-summary: 231, 243, 248;
  --callout-tip: 231, 243, 248;
  --callout-title-weight: 600;
  --callout-todo: 221, 235, 241;
  --callout-warning: 250, 235, 221;
  --canvas-background: hsl(203, 8%, 100%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 3px;
  --canvas-dot-pattern: #dfdfdf;
  --caret-color: rgba(55, 53, 47, 0.9);
  --checkbox-border-color: rgba(55, 53, 47, 0.55);
  --checkbox-border-color-hover: rgba(55, 53, 47, 0.7);
  --checkbox-color: rgb(46, 170, 220);
  --checkbox-color-hover: rgba(46, 170, 220, 0.8);
  --checkbox-marker-color: hsl(203, 8%, 100%);
  --checkbox-radius: 3px;
  --checkbox-size: 16px;
  --checklist-done-color: rgba(55, 53, 47, 0.7);
  --clickable-icon-radius: 3px;
  --code-background: hsl(0, 1%, 70%, 14%);
  --code-border-color: rgba(55, 53, 47, 0.14);
  --code-bracket-background: hsl(60, 3%, 0%, 4%);
  --code-comment: rgba(55, 53, 47, 0.55);
  --code-function: rgb(223, 171, 1);
  --code-important: rgb(217, 115, 13);
  --code-keyword: rgb(173, 26, 114);
  --code-normal: rgba(55, 53, 47, 0.9);
  --code-operator: rgb(224, 62, 62);
  --code-property: rgb(51, 126, 169);
  --code-punctuation: rgba(55, 53, 47, 0.7);
  --code-radius: 3px;
  --code-size: 0.875em;
  --code-string: rgb(15, 123, 108);
  --code-tag: rgb(224, 62, 62);
  --code-value: rgb(105, 64, 165);
  --collapse-icon-color: rgba(55, 53, 47, 0.55);
  --collapse-icon-color-collapsed: rgba(55, 53, 47, 0.45);
  --color-accent: hsl(210, 77%, 51%);
  --color-accent-1: hsl(209, 77.77%, 54.825%);
  --color-accent-2: hsl(207, 78.54%, 58.65%);
  --color-accent-hsl: 210, 77%, 51%;
  --divider-color: rgba(55, 53, 47, 0.14);
  --divider-color-hover: rgb(46, 170, 220);
  --divider-vertical-height: 100%;
  --dropdown-background: #f2f3f5;
  --dropdown-background-hover: #e9e9e9;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #f2f3f5;
  --flair-color: rgba(55, 53, 47, 0.9);
  --font-interface: '??', '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-mermaid: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-monospace: '??', '??', 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  --font-weight: 400;
  --graph-line: rgba(55, 53, 47, 0.14);
  --graph-node: rgb(11, 110, 153);
  --graph-node-attachment: rgb(223, 171, 1);
  --graph-node-focused: rgb(46, 170, 220);
  --graph-node-tag: rgb(15, 123, 108);
  --graph-node-unresolved: rgb(51, 126, 169);
  --graph-text: rgba(55, 53, 47, 0.9);
  --h-color: rgba(55, 53, 47, 0.9);
  --h1-bg: transparent;
  --h1-color: rgba(55, 53, 47, 0.9);
  --h2-bg: transparent;
  --h2-color: rgba(55, 53, 47, 0.9);
  --h3-bg: transparent;
  --h3-color: rgba(55, 53, 47, 0.9);
  --h4-bg: transparent;
  --h4-color: rgba(55, 53, 47, 0.9);
  --h5-bg: transparent;
  --h5-color: rgba(55, 53, 47, 0.9);
  --h5-line-height: 1.5;
  --h6-bg: transparent;
  --h6-color: rgba(55, 53, 47, 0.9);
  --h6-line-height: 1.5;
  --heading-formatting: rgba(55, 53, 47, 0.55);
  --heading-spacing: 2.5rem;
  --hr-color: rgba(55, 53, 47, 0.14);
  --interactive-accent: rgb(46, 170, 220);
  --interactive-accent-hover: rgba(46, 170, 220, 0.8);
  --interactive-accent-hsl: 210, 77%, 51%;
  --interactive-hover: #e9e9e9;
  --interactive-normal: #f2f3f5;
  --link-color: rgba(55, 53, 47, 0.45);
  --link-color-hover: rgba(55, 53, 47, 0.7);
  --link-external-color: rgba(55, 53, 47, 0.45);
  --link-external-color-hover: rgba(55, 53, 47, 0.45);
  --link-unresolved-color: rgba(55, 53, 47, 0.45);
  --link-unresolved-decoration-color: hsla(210, 77%, 51%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: hsl(203, 8%, 96%);
  --menu-border-color: #f1f1f0;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(203, 8%, 100%);
  --pdf-page-background: hsl(203, 8%, 100%);
  --pdf-sidebar-background: hsl(203, 8%, 100%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(203, 8%, 100%) 65%, transparent) linear-gradient(hsl(203, 8%, 100%), color-mix(in srgb, hsl(203, 8%, 100%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: rgba(55, 53, 47, 0.7);
  --search-icon-color: rgba(55, 53, 47, 0.7);
  --search-result-background: hsl(203, 8%, 100%);
  --setting-group-heading-color: rgba(55, 53, 47, 0.9);
  --setting-group-heading-size: 0.97em;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(203, 8%, 90%);
  --setting-items-border-color: rgba(55, 53, 47, 0.14);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: rgba(55, 53, 47, 0.7);
  --shiki-code-background: hsl(0, 1%, 70%, 14%);
  --shiki-code-block-border-radius: 3px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: rgba(55, 53, 47, 0.55);
  --shiki-code-function: rgb(15, 123, 108);
  --shiki-code-important: rgb(217, 115, 13);
  --shiki-code-keyword: rgb(173, 26, 114);
  --shiki-code-normal: rgba(55, 53, 47, 0.7);
  --shiki-code-property: rgb(51, 126, 169);
  --shiki-code-punctuation: rgba(55, 53, 47, 0.7);
  --shiki-code-string: rgb(223, 171, 1);
  --shiki-code-value: rgb(105, 64, 165);
  --shiki-gutter-border-color: rgba(55, 53, 47, 0.14);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: rgba(55, 53, 47, 0.55);
  --shiki-gutter-text-color-highlight: rgba(55, 53, 47, 0.7);
  --shiki-highlight-green: rgba(221, 237, 234, 0.5);
  --shiki-highlight-green-background: rgba(221, 237, 234, 0.1);
  --shiki-highlight-neutral: rgba(55, 53, 47, 0.7);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(251, 228, 228, 0.5);
  --shiki-highlight-red-background: rgba(251, 228, 228, 0.1);
  --shiki-terminal-dots-color: rgba(55, 53, 47, 0.55);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(203, 8%, 100%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(224, 62, 62);
  --sync-avatar-color-2: rgb(217, 115, 13);
  --sync-avatar-color-3: rgb(223, 171, 1);
  --sync-avatar-color-4: rgb(15, 123, 108);
  --sync-avatar-color-5: rgb(51, 126, 169);
  --sync-avatar-color-6: rgb(11, 110, 153);
  --sync-avatar-color-7: rgb(105, 64, 165);
  --sync-avatar-color-8: rgb(173, 26, 114);
  --tab-background-active: transparent;
  --tab-divider-color: #f1f1f0;
  --tab-font-size: 0.95em;
  --tab-outline-color: transparent;
  --tab-radius: 3px;
  --tab-stacked-font-size: 0.95em;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(203, 8%, 96%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(203, 8%, 96%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 77%, 51%);
  --tab-text-color: rgba(55, 53, 47, 0.55);
  --tab-text-color-active: rgba(55, 53, 47, 0.7);
  --tab-text-color-focused: rgba(55, 53, 47, 0.7);
  --tab-text-color-focused-active: rgba(55, 53, 47, 0.7);
  --tab-text-color-focused-active-current: rgba(55, 53, 47, 0.9);
  --tab-text-color-focused-highlighted: rgba(55, 53, 47, 0.45);
  --table-add-button-border-color: rgba(55, 53, 47, 0.14);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(221, 235, 241) 25%, hsl(203, 8%, 100%) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgb(46, 170, 220);
  --table-drag-handle-color: rgba(55, 53, 47, 0.55);
  --table-drag-handle-color-active: rgba(55, 53, 47, 0.9);
  --table-header-background: rgba(235, 236, 237, 0.5);
  --table-header-background-hover: rgba(235, 236, 237, 0.5);
  --table-header-border-color: rgba(55, 53, 47, 0.14);
  --table-header-border-width: 1px;
  --table-header-color: rgba(55, 53, 47, 0.9);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(210, 77%, 51%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: rgb(46, 170, 220);
  --table-text-size: 16px;
  --tag-background: hsla(210, 77%, 51%, 0.1);
  --tag-background-hover: hsla(210, 77%, 51%, 0.2);
  --tag-border-color: hsla(210, 77%, 51%, 0.15);
  --tag-border-color-hover: hsla(210, 77%, 51%, 0.15);
  --tag-color: rgba(55, 53, 47, 0.9);
  --tag-color-hover: rgba(55, 53, 47, 0.45);
  --tag-radius: 3px;
  --tag-size: 0.875em;
  --text-accent: rgba(55, 53, 47, 0.45);
  --text-accent-hover: rgba(55, 53, 47, 0.45);
  --text-error: rgb(224, 62, 62);
  --text-faint: rgba(55, 53, 47, 0.55);
  --text-highlight-bg: rgb(251, 243, 219);
  --text-muted: rgba(55, 53, 47, 0.7);
  --text-normal: rgba(55, 53, 47, 0.9);
  --text-on-accent: rgba(55, 53, 47, 0.9);
  --text-selection: rgba(0, 122, 255, 0.15);
  --text-success: rgb(15, 123, 108);
  --text-warning: rgb(217, 115, 13);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-left-width: 0px;
  border-right-color: rgba(55, 53, 47, 0.9);
  border-right-width: 0px;
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
  content: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2220\\%22 height=\\%2220\\%22 viewBox=\\%220 0 36 36\\%22%3E%3Cpath fill=\\%22%23D99E82\\%22 d=\\%22M35.222 33.598c-.647-2.101-1.705-6.059-2.325-7.566c-.501-1.216-.969-2.438-1.544-3.014c-.575-.575-1.553-.53-2.143.058c0 0-2.469 1.675-3.354 2.783c-1.108.882-2.785 3.357-2.785 3.357c-.59.59-.635 1.567-.06 2.143c.576.575 1.798 1.043 3.015 1.544c1.506.62 5.465 1.676 7.566 2.325c.359.11 1.74-1.271 1.63-1.63z\\%22%2F%3E%3Cpath fill=\\%22%23EA596E\\%22 d=\\%22M13.643 5.308a2.946 2.946 0 0 1 0 4.167l-4.167 4.168a2.948 2.948 0 0 1-4.167 0L1.141 9.475a2.948 2.948 0 0 1 0-4.167l4.167-4.167a2.946 2.946 0 0 1 4.167 0l4.168 4.167z\\%22%2F%3E%3Cpath fill=\\%22%23FFCC4D\\%22 d=\\%22m31.353 23.018l-4.17 4.17l-4.163 4.165L7.392 15.726l8.335-8.334l15.626 15.626z\\%22%2F%3E%3Cpath fill=\\%22%23292F33\\%22 d=\\%22M32.078 34.763s2.709 1.489 3.441.757c.732-.732-.765-3.435-.765-3.435s-2.566.048-2.676 2.678z\\%22%2F%3E%3Cpath fill=\\%22%23CCD6DD\\%22 d=\\%22m2.183 10.517l8.335-8.335l5.208 5.209l-8.334 8.335z\\%22%2F%3E%3Cpath fill=\\%22%2399AAB5\\%22 d=\\%22m3.225 11.558l8.334-8.334l1.042 1.042L4.267 12.6zm2.083 2.086l8.335-8.335l1.042 1.042l-8.335 8.334z\\%22%2F%3E%3C%2Fsvg%3E");
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: var(--callout-title-size, 16px);
  line-height: var(--line-height-tight, 24px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 9.6px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 231, 243, 248);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgba(55, 53, 47, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 228, 228);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgba(55, 53, 47, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 228, 228);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgba(55, 53, 47, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 234, 228, 242);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgba(55, 53, 47, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 228, 228);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgba(55, 53, 47, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 221, 235, 241);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgba(55, 53, 47, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 221, 235, 241);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgba(55, 53, 47, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 250, 235, 221);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgba(55, 53, 47, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgba(55, 53, 47, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 221, 237, 234);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgba(55, 53, 47, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 231, 243, 248);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgba(55, 53, 47, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 221, 235, 241);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgba(55, 53, 47, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 250, 235, 221);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 221, 235, 241;
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgba(55, 53, 47, 0.9);
  padding-left: 36.8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23C1694F" d="M32 34a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v27z"%2F%3E%3Cpath fill="%23FFF" d="M29 32a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v23z"%2F%3E%3Cpath fill="%23CCD6DD" d="M25 3h-4a3 3 0 1 0-6 0h-4a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2z"%2F%3E%3Ccircle cx="18" cy="3" r="2" fill="%23292F33"%2F%3E%3Cpath fill="%2399AAB5" d="M20 14a1 1 0 0 1-1 1h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1zm7 4a1 1 0 0 1-1 1H10a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1zm0 4a1 1 0 0 1-1 1h-9a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%2331373D" d="M7.5 24.516a.999.999 0 0 1-.707-1.707L22.81 6.793a.999.999 0 1 1 1.414 1.414L8.207 24.223a1 1 0 0 1-.707.293zm8.282-11.738a1.001 1.001 0 0 1-.784-1.621c.113-.144 2.571-3.361.971-7.572a1 1 0 1 1 1.869-.711c2.017 5.307-1.139 9.357-1.274 9.527a.996.996 0 0 1-.782.377zm3.89 3.888a.997.997 0 0 1-.782-1.621c.138-.172 3.435-4.197 9.323-2.726a.999.999 0 0 1 .727 1.213a1.002 1.002 0 0 1-1.212.728c-4.623-1.157-7.172 1.905-7.278 2.036a1 1 0 0 1-.778.37zM6.454 18.511c-1.096 0-2.301-.186-3.58-.671a1 1 0 1 1 .71-1.87c4.219 1.604 7.439-.866 7.574-.972a1.003 1.003 0 0 1 1.403.166a.997.997 0 0 1-.159 1.4c-.129.103-2.495 1.947-5.948 1.947zm1.564-8.066c-1.829 0-4.968-.482-7.542-3.332a1 1 0 1 1 1.484-1.34C4.984 9.122 8.976 8.392 9.146 8.36a.999.999 0 0 1 .392 1.961a8.243 8.243 0 0 1-1.52.124z"%2F%3E%3Cpath fill="%2331373D" d="M9.341 10.341a1 1 0 0 1-.982-1.195c.034-.173.76-4.163-2.587-7.185A1 1 0 1 1 7.113.477c4.214 3.806 3.251 8.849 3.207 9.062a1 1 0 0 1-.979.802zm3.948 18.63a1 1 0 0 1-.969-.758c-1.473-5.895 2.554-9.186 2.726-9.323a1 1 0 0 1 1.249 1.561c-.14.114-3.187 2.667-2.035 7.277a1 1 0 0 1-.971 1.243z"%2F%3E%3Cpath fill="%2331373D" d="M29.844 19.167c-2.96-2.959-6.095-3.569-8.915-2.069c-.157-1.874-1.166-4.007-2.521-5.363c-1.488-1.488-3.008-1.653-4.405-1.044c1.058-2.465.6-5.43-.826-6.856c-1.843-1.843-4.594-.411-7.174 2.168c-2.58 2.58-4.012 5.331-2.168 7.174c1.425 1.426 4.391 1.883 6.856.826c-.61 1.397-.444 2.918 1.044 4.405c1.354 1.354 3.489 2.363 5.363 2.521c-1.5 2.82-.891 5.954 2.069 8.915c3.75 3.749 12.204 5.527 14.204 3.527s.223-10.455-3.527-14.204z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23DD2E44" d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18s18-8.059 18-18S27.941 0 18 0zm13 18c0 2.565-.753 4.95-2.035 6.965L11.036 7.036A12.916 12.916 0 0 1 18 5c7.18 0 13 5.821 13 13zM5 18c0-2.565.753-4.95 2.036-6.964l17.929 17.929A12.93 12.93 0 0 1 18 31c-7.179 0-13-5.82-13-13z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23553788" d="M15 31c0 2.209-.791 4-3 4H5c-4 0-4-14 0-14h7c2.209 0 3 1.791 3 4v6z"%2F%3E%3Cpath fill="%239266CC" d="M34 33h-1V23h1a1 1 0 1 0 0-2H10c-4 0-4 14 0 14h24a1 1 0 1 0 0-2z"%2F%3E%3Cpath fill="%23CCD6DD" d="M34.172 33H11c-2 0-2-10 0-10h23.172c1.104 0 1.104 10 0 10z"%2F%3E%3Cpath fill="%2399AAB5" d="M11.5 25h23.35c-.135-1.175-.36-2-.678-2H11c-1.651 0-1.938 6.808-.863 9.188C9.745 29.229 10.199 25 11.5 25z"%2F%3E%3Cpath fill="%23269" d="M12 8a4 4 0 0 1-4 4H4C0 12 0 1 4 1h4a4 4 0 0 1 4 4v3z"%2F%3E%3Cpath fill="%2355ACEE" d="M31 10h-1V3h1a1 1 0 1 0 0-2H7C3 1 3 12 7 12h24a1 1 0 1 0 0-2z"%2F%3E%3Cpath fill="%23CCD6DD" d="M31.172 10H8c-2 0-2-7 0-7h23.172c1.104 0 1.104 7 0 7z"%2F%3E%3Cpath fill="%2399AAB5" d="M8 5h23.925c-.114-1.125-.364-2-.753-2H8C6.807 3 6.331 5.489 6.562 7.5C6.718 6.142 7.193 5 8 5z"%2F%3E%3Cpath fill="%23F4900C" d="M20 17a4 4 0 0 1-4 4H6c-4 0-4-9 0-9h10a4 4 0 0 1 4 4v1z"%2F%3E%3Cpath fill="%23FFAC33" d="M35 19h-1v-5h1a1 1 0 1 0 0-2H15c-4 0-4 9 0 9h20a1 1 0 1 0 0-2z"%2F%3E%3Cpath fill="%23CCD6DD" d="M35.172 19H16c-2 0-2-5 0-5h19.172c1.104 0 1.104 5 0 5z"%2F%3E%3Cpath fill="%2399AAB5" d="M16 16h19.984c-.065-1.062-.334-2-.812-2H16c-1.274 0-1.733 2.027-1.383 3.5c.198-.839.657-1.5 1.383-1.5z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23DD2E44" d="M21.533 18.002L33.768 5.768a2.5 2.5 0 0 0-3.535-3.535L17.998 14.467L5.764 2.233a2.498 2.498 0 0 0-3.535 0a2.498 2.498 0 0 0 0 3.535l12.234 12.234L2.201 30.265a2.498 2.498 0 0 0 1.768 4.267c.64 0 1.28-.244 1.768-.732l12.262-12.263l12.234 12.234a2.493 2.493 0 0 0 1.768.732a2.5 2.5 0 0 0 1.768-4.267L21.533 18.002z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%239AAAB4" d="m13.503 19.693l2.828 2.828l-4.95 4.95l-2.828-2.829z"%2F%3E%3Cpath fill="%2366757F" d="m1.257 29.11l5.88-5.879a2 2 0 0 1 2.828 0l2.828 2.828a2 2 0 0 1 0 2.828l-5.879 5.879a4 4 0 1 1-5.657-5.656z"%2F%3E%3Ccircle cx="22.355" cy="13.669" r="13.5" fill="%238899A6"%2F%3E%3Ccircle cx="22.355" cy="13.669" r="9.5" fill="%23BBDDF5"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23D99E82" d="M35.222 33.598c-.647-2.101-1.705-6.059-2.325-7.566c-.501-1.216-.969-2.438-1.544-3.014c-.575-.575-1.553-.53-2.143.058c0 0-2.469 1.675-3.354 2.783c-1.108.882-2.785 3.357-2.785 3.357c-.59.59-.635 1.567-.06 2.143c.576.575 1.798 1.043 3.015 1.544c1.506.62 5.465 1.676 7.566 2.325c.359.11 1.74-1.271 1.63-1.63z"%2F%3E%3Cpath fill="%23EA596E" d="M13.643 5.308a2.946 2.946 0 0 1 0 4.167l-4.167 4.168a2.948 2.948 0 0 1-4.167 0L1.141 9.475a2.948 2.948 0 0 1 0-4.167l4.167-4.167a2.946 2.946 0 0 1 4.167 0l4.168 4.167z"%2F%3E%3Cpath fill="%23FFCC4D" d="m31.353 23.018l-4.17 4.17l-4.163 4.165L7.392 15.726l8.335-8.334l15.626 15.626z"%2F%3E%3Cpath fill="%23292F33" d="M32.078 34.763s2.709 1.489 3.441.757c.732-.732-.765-3.435-.765-3.435s-2.566.048-2.676 2.678z"%2F%3E%3Cpath fill="%23CCD6DD" d="m2.183 10.517l8.335-8.335l5.208 5.209l-8.334 8.335z"%2F%3E%3Cpath fill="%2399AAB5" d="m3.225 11.558l8.334-8.334l1.042 1.042L4.267 12.6zm2.083 2.086l8.335-8.335l1.042 1.042l-8.335 8.334z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23BE1931" d="M17 27a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3c.603-.006 6-1 6-5c0-2-2-4-5-4c-2.441 0-4 2-4 3a3 3 0 1 1-6 0c0-4.878 4.58-9 10-9c8 0 11 5.982 11 11c0 4.145-2.277 7.313-6.413 8.92c-.9.351-1.79.587-2.587.747V24a3 3 0 0 1-3 3z"%2F%3E%3Ccircle cx="17" cy="32" r="3" fill="%23BE1931"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23BDDDF4" d="M18 1C8.059 1 0 7.268 0 15c0 4.368 2.574 8.268 6.604 10.835C6.08 28.144 4.859 31.569 2 35c5.758-.96 9.439-3.761 11.716-6.416c1.376.262 2.805.416 4.284.416c9.941 0 18-6.268 18-14S27.941 1 18 1z"%2F%3E%3Ccircle cx="18" cy="15" r="2" fill="%232A6797"%2F%3E%3Ccircle cx="26" cy="15" r="2" fill="%232A6797"%2F%3E%3Ccircle cx="10" cy="15" r="2" fill="%232A6797"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%2377B255" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"%2F%3E%3Cpath fill="%23FFF" d="M29.28 6.362a2.502 2.502 0 0 0-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665c.673 0 1.534-.282 2.099-1.139c.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23FFAC33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%2331373D" d="M34.459 1.375a2.999 2.999 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a2.999 2.999 0 0 0 4.15-.884L35.343 5.524a2.999 2.999 0 0 0-.884-4.149z"%2F%3E%3C%2Fsvg%3E');
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" viewBox="0 0 36 36"%3E%3Cpath fill="%23FFCC4D" d="M2.653 35C.811 35-.001 33.662.847 32.027L16.456 1.972c.849-1.635 2.238-1.635 3.087 0l15.609 30.056c.85 1.634.037 2.972-1.805 2.972H2.653z"%2F%3E%3Cpath fill="%23231F20" d="M15.583 28.953a2.421 2.421 0 0 1 2.419-2.418a2.421 2.421 0 0 1 2.418 2.418a2.422 2.422 0 0 1-2.418 2.419a2.422 2.422 0 0 1-2.419-2.419zm.186-18.293c0-1.302.961-2.108 2.232-2.108c1.241 0 2.233.837 2.233 2.108v11.938c0 1.271-.992 2.108-2.233 2.108c-1.271 0-2.232-.807-2.232-2.108V10.66z"%2F%3E%3C%2Fsvg%3E');
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgba(55, 53, 47, 0.9);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  outline: rgba(55, 53, 47, 0.9) none 0px;
  text-decoration-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.04));
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 245, 246);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.04));
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.04));
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(210, 77%, 51%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(210, 77%, 51%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(210, 77%, 51%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(210, 77%, 51%, 0.15));
  --pill-color: var(--tag-color, rgba(55, 53, 47, 0.9));
  --pill-color-hover: var(--tag-color-hover, rgba(55, 53, 47, 0.45));
  --pill-color-remove: var(--tag-color, rgba(55, 53, 47, 0.9));
  --pill-color-remove-hover: var(--tag-color-hover, rgba(55, 53, 47, 0.45));
  --pill-radius: var(--tag-radius, 3px);
  background-color: var(--tag-1-default, rgb(253, 236, 200));
  border-bottom-color: rgba(34, 130, 226, 0.15);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(34, 130, 226, 0.15);
  border-right-color: rgba(34, 130, 226, 0.15);
  border-top-color: rgba(34, 130, 226, 0.15);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: var(--font-ui-smaller, 12.6px);
  line-height: var(--line-height-tight, 12.6px);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 600);
  background-color: var(--h1-bg, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--h1-color, rgba(55, 53, 47, 0.9));
  font-family: var(--h1-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  font-size: var(--h1-size, 30px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h1-letter-spacing, -0.45px);
  line-height: var(--h1-line-height, 36px);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
  font-size: var(--inline-title-size, 0px);
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 600);
  background-color: var(--h2-bg, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--h2-color, rgba(55, 53, 47, 0.9));
  font-family: var(--h2-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  font-size: var(--h2-size, 24px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.264px);
  line-height: var(--h2-line-height, 28.8px);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
  font-family: var(--inline-title-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  font-size: var(--inline-title-size, 0px);
  font-weight: var(--inline-title-weight, 600);
  line-height: var(--inline-title-line-height, 0px);
  margin-bottom: 1px;
  margin-left: 1px;
  margin-right: 1px;
  margin-top: 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 600);
  background-color: var(--h3-bg, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--h3-color, rgba(55, 53, 47, 0.9));
  font-family: var(--h3-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  font-size: var(--h3-size, 20px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.16px);
  line-height: var(--h3-line-height, 26px);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 600);
  background-color: var(--h4-bg, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--h4-color, rgba(55, 53, 47, 0.9));
  font-family: var(--h4-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  font-weight: var(--font-weight, 600);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 600);
  background-color: var(--h5-bg, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--h5-color, rgba(55, 53, 47, 0.9));
  font-family: var(--h5-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  font-weight: var(--font-weight, 600);
}

html[saved-theme="light"] body h6 {
  background-color: var(--h6-bg, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--h6-color, rgba(55, 53, 47, 0.9));
  font-family: var(--h6-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 221, 235, 241);
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-left-width: 1px;
  border-right-color: rgba(55, 53, 47, 0.14);
  border-right-width: 1px;
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-muted, rgba(55, 53, 47, 0.7));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--font-bold, 500);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-muted, rgba(55, 53, 47, 0.7));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--font-bold, 500);
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
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: var(--font-bold, 500);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--icon-color, rgba(55, 53, 47, 0.7));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(244, 245, 246));
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  color: var(--status-bar-text-color, rgba(55, 53, 47, 0.7));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: var(--status-bar-font-size, 13.968px);
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(55, 53, 47, 0.7);
  font-size: 13.968px;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgba(55, 53, 47, 0.9);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-muted, rgba(55, 53, 47, 0.7));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgba(55, 53, 47, 0.7);
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--text-muted, rgba(55, 53, 47, 0.7));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--icon-color, rgba(55, 53, 47, 0.7));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgba(55, 53, 47, 0.7);
  stroke: rgba(55, 53, 47, 0.7);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(55, 53, 47, 0.55);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.55);
  border-right-color: rgba(55, 53, 47, 0.55);
  border-top-color: rgba(55, 53, 47, 0.55);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--text-faint, rgba(55, 53, 47, 0.55));
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgba(55, 53, 47, 0.55));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgba(55, 53, 47, 0.9);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(55, 53, 47, 0.14);
  color: var(--table-header-color, rgba(55, 53, 47, 0.9));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(55, 53, 47, 0.14);
  border-bottom-width: 1px;
  border-left-color: rgba(55, 53, 47, 0.14);
  border-right-color: rgba(55, 53, 47, 0.14);
  border-top-color: rgba(55, 53, 47, 0.14);
  border-top-width: 1px;
  color: var(--text-muted, rgba(55, 53, 47, 0.7));
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
  color: rgba(55, 53, 47, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
  color: rgba(55, 53, 47, 0.7);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .metadata-property-key {
  color: var(--text-muted, rgba(55, 53, 47, 0.7));
  font-family: var(--metadata-label-font, "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
  font-size: var(--font-ui-smaller, 14.4px);
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgba(55, 53, 47, 0.7);
  font-family: var(--metadata-input-font, "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol");
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(55, 53, 47, 0.14);
}

html[saved-theme="light"] body .note-properties-key {
  color: var(--text-muted, rgba(55, 53, 47, 0.7));
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(55, 53, 47, 0.7);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(210, 77%, 51%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(210, 77%, 51%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(210, 77%, 51%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(210, 77%, 51%, 0.15));
  --pill-color: var(--tag-color, rgba(55, 53, 47, 0.9));
  --pill-color-hover: var(--tag-color-hover, rgba(55, 53, 47, 0.45));
  --pill-color-remove: var(--tag-color, rgba(55, 53, 47, 0.9));
  --pill-color-remove-hover: var(--tag-color-hover, rgba(55, 53, 47, 0.45));
  --pill-radius: var(--tag-radius, 3px);
  background-color: var(--tag-1-default, rgb(253, 236, 200));
  border-radius: 3px;
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(55, 53, 47, 0.7);
}

html[saved-theme="light"] body div#quartz-root {
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(244, 245, 246));
  border-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(227, 230, 232));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgba(55, 53, 47, 0.9);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(244, 245, 246));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  color: var(--text-normal, rgba(55, 53, 47, 0.9));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 41.2832px;
  font-weight: 700;
  line-height: 53.6682px;
}

html[saved-theme="light"] body abbr {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(55, 53, 47, 0.7);
  border-left-color: rgba(55, 53, 47, 0.7);
  border-right-color: rgba(55, 53, 47, 0.7);
  border-top-color: rgba(55, 53, 47, 0.7);
  color: var(--text-normal, rgba(55, 53, 47, 0.7));
  font-family: "??", "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgba(179, 178, 178, 0.14));
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--code-normal, rgba(55, 53, 47, 0.9));
  font-family: var(--font-monospace, "??", "??", "iA Writer Duospace", Nitti, Menlo, Courier, monospace);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgba(55, 53, 47, 0.9);
  border-left-color: rgba(55, 53, 47, 0.9);
  border-right-color: rgba(55, 53, 47, 0.9);
  border-top-color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body sub {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body summary {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body sup {
  color: rgba(55, 53, 47, 0.9);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-1, var(--tag-1-default));
  border-bottom-color: rgba(34, 130, 226, 0.15);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(34, 130, 226, 0.15);
  border-right-color: rgba(34, 130, 226, 0.15);
  border-top-color: rgba(34, 130, 226, 0.15);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--tag-color, rgba(55, 53, 47, 0.9));
}`,
  },
  classSettings: {
    "notation-colors": {
      dark: `body.theme-light, body.theme-dark {
/* change these numbers for an entirely new look */
--hue: 203;
--sat: 8%;
--interactive-accent-rgb: 46, 170, 220;
--code: #EB5757;
--opacity-translucency: 0.7;
}

.theme-dark {
--L0: 0%;
--L1: 20%;
--L2: 23%;
--L3: 26%;
--text-rgb: 255, 255, 255;
--text-highlight-bg: rgb(89, 86, 59);
--text-selection: hsla(211, 100%, 50%, 0.2);
--interactive-normal: #2a2a2a;
--interactive-hover: #303030;
--color-gray: rgba(255, 255, 255, 0.6);
--color-brown: rgb(147, 114, 100);
--color-orange: rgb(255, 163, 68);
--color-yellow: rgb(255, 220, 73);
--color-green: rgb(77, 171, 154);
--color-blue: rgb(82, 156, 202);
--color-purple: rgb(154, 109, 215);
--color-pink: rgb(226, 85, 161);
--color-red: rgb(255, 115, 105);
--color-gray-rgb: 69, 75, 78;
--color-brown-rgb: 67, 64, 64;
--color-orange-rgb: 89, 74, 58;
--color-yellow-rgb: 89, 86, 59;
--color-green-rgb: 53, 76, 75;
--color-blue-rgb: 54, 73, 84;
--color-purple-rgb: 68, 63, 87;
--color-pink-rgb: 83, 59, 76;
--color-red-rgb: 89, 65, 65;
}

body.theme-light, body.theme-dark {
--background-primary: hsl(var(--hue), var(--sat), var(--L1));
--background-primary-alt: hsl(var(--hue), var(--sat), var(--L3));
--background-secondary: hsl(var(--hue), var(--sat), var(--L2));
--background-secondary-alt: hsl(var(--hue), var(--sat), var(--L3));
--background-accent: hsl(var(--hue), var(--sat), var(--L0));
--background-modifier-border: rgba(var(--text-rgb), 0.14);
--text-accent: rgba(var(--text-rgb), 0.45);
--text-accent-hover: rgba(var(--text-rgb), 0.45);
--text-normal: rgba(var(--text-rgb), 0.9);
--text-muted: rgba(var(--text-rgb), 0.7);
--text-faint: rgba(var(--text-rgb), 0.55);
--text-on-accent: rgba(var(--text-rgb), 0.9);
--interactive-accent: rgb(var(--interactive-accent-rgb));
--interactive-accent-hover: rgba(var(--interactive-accent-rgb), 0.8);
}`,
      light: `body.theme-light, body.theme-dark {
/* change these numbers for an entirely new look */
--hue: 203;
--sat: 8%;
--interactive-accent-rgb: 46, 170, 220;
--code: #EB5757;
--opacity-translucency: 0.7;
}

.theme-light {
--L0: 0%;
--L1: 100%;
--L2: 96%;
--L3: 90%;
--text-rgb: 55, 53, 47;
--text-highlight-bg: rgb(251, 243, 219);
--text-selection: rgba(0, 122, 255, 0.15);
--interactive-normal: #f2f3f5;
--interactive-hover: #e9e9e9;
--color-gray: rgba(55, 53, 47, 0.6);
--color-brown: rgb(100, 71, 58);
--color-orange: rgb(217, 115, 13);
--color-yellow: rgb(223, 171, 1);
--color-green: rgb(15, 123, 108);
--color-blue: rgb(11, 110, 153);
--color-purple: rgb(105, 64, 165);
--color-pink: rgb(173, 26, 114);
--color-red: rgb(224, 62, 62);
--color-gray-rgb: 235, 236, 237;
--color-brown-rgb: 233, 229, 227;
--color-orange-rgb: 250, 235, 221;
--color-yellow-rgb: 251, 243, 219;
--color-green-rgb: 221, 237, 234;
--color-blue-rgb: 221, 235, 241;
--color-purple-rgb: 234, 228, 242;
--color-pink-rgb: 244, 223, 235;
--color-red-rgb: 251, 228, 228;
}

body.theme-light, body.theme-dark {
--background-primary: hsl(var(--hue), var(--sat), var(--L1));
--background-primary-alt: hsl(var(--hue), var(--sat), var(--L3));
--background-secondary: hsl(var(--hue), var(--sat), var(--L2));
--background-secondary-alt: hsl(var(--hue), var(--sat), var(--L3));
--background-accent: hsl(var(--hue), var(--sat), var(--L0));
--background-modifier-border: rgba(var(--text-rgb), 0.14);
--text-accent: rgba(var(--text-rgb), 0.45);
--text-accent-hover: rgba(var(--text-rgb), 0.45);
--text-normal: rgba(var(--text-rgb), 0.9);
--text-muted: rgba(var(--text-rgb), 0.7);
--text-faint: rgba(var(--text-rgb), 0.55);
--text-on-accent: rgba(var(--text-rgb), 0.9);
--interactive-accent: rgb(var(--interactive-accent-rgb));
--interactive-accent-hover: rgba(var(--interactive-accent-rgb), 0.8);
}`,
    },
    "hide-new-folder": {
      general: `.hide-new-folder .clickable-icon[aria-label="New folder"] {
display: none;
}

.hide-new-folder .clickable-icon[aria-label="New note"] {
width: 100%;
}`,
    },
    "hide-other-icons": {
      general: `.hide-other-icons .clickable-icon[aria-label="Change sort order"], .hide-other-icons .clickable-icon[aria-label="Collapse all"], .hide-other-icons .clickable-icon[aria-label="Expand all"] {
display: none;
}`,
    },
    "notation-titlebar": {
      general: `.notation-titlebar .view-header {
max-width: unset;
margin-left: auto;
margin-right: auto;
padding: 0;
border: none;
background-color: transparent;
height: auto;
padding-top: 2.5em;
}

.notation-titlebar .view-header-title-container {
margin-top: auto;
height: auto;
padding: 1em;
}

.notation-titlebar .view-header-title {
font-size: 2.8em;
color: var(--text-normal);
white-space: normal;
font-weight: 700;
}

.notation-titlebar .view-actions {
position: absolute;
top: 1em;
right: 0;
left: 0;
background-color: transparent;
z-index: 1;
}

.notation-titlebar .view-header .view-action {
color: var(--text-normal);
margin: 0;
padding: 0 8px;
height: 28px;
line-height: 28px;
border-radius: 3px;
transition: background-color 20ms ease-in 0s;
}

.notation-titlebar .view-action>svg {
max-width: 14px;
max-height: 14px;
}

.notation-titlebar .view-action:hover, .notation-titlebar .view-action.is-active {
color: var(--text-normal);
background-color: var(--background-primary-alt);
}

.notation-titlebar .view-header-title-parent .view-header-breadcrumb {
color: var(--text-faint);
}

.notation-titlebar .inline-title {
opacity: 0;
margin: 1px;
padding: 10px;
font-size: 0;
}`,
    },
    "headings-red": {
      general: `.headings-red-text {
--h-color: var(--color-red);
}

.headings-red {
--h-bg: rgb(var(--color-red-rgb));
}`,
    },
    "headings-orange": {
      general: `.headings-orange-text {
--h-color: var(--color-orange);
}

.headings-orange {
--h-bg: rgb(var(--color-orange-rgb));
}`,
    },
    "headings-yellow": {
      general: `.headings-yellow-text {
--h-color: var(--color-yellow);
}

.headings-yellow {
--h-bg: rgb(var(--color-yellow-rgb));
}`,
    },
    "headings-green": {
      general: `.headings-green-text {
--h-color: var(--color-green);
}

.headings-green {
--h-bg: rgb(var(--color-green-rgb));
}`,
    },
    "headings-blue": {
      general: `.headings-blue-text {
--h-color: var(--color-blue);
}

.headings-blue {
--h-bg: rgb(var(--color-blue-rgb));
}`,
    },
    "headings-purple": {
      general: `.headings-purple-text {
--h-color: var(--color-purple);
}

.headings-purple {
--h-bg: rgb(var(--color-purple-rgb));
}`,
    },
    "headings-pink": {
      general: `.headings-pink-text {
--h-color: var(--color-pink);
}

.headings-pink {
--h-bg: rgb(var(--color-pink-rgb));
}`,
    },
    "headings-brown": {
      general: `.headings-brown-text {
--h-color: var(--color-brown);
}

.headings-brown {
--h-bg: rgb(var(--color-brown-rgb));
}`,
    },
    "headings-gray": {
      general: `.headings-gray-text {
--h-color: var(--color-gray);
}

.headings-gray {
--h-bg: rgb(var(--color-gray-rgb));
}`,
    },
    "headings-rainbow": {
      general: `.headings-rainbow-text {
--h1-color: var(--color-red);
--h2-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h4-color: var(--color-green);
--h5-color: var(--color-blue);
--h6-color: var(--color-purple);
}

.headings-rainbow {
--h1-bg: rgb(var(--color-red-rgb));
--h2-bg: rgb(var(--color-orange-rgb));
--h3-bg: rgb(var(--color-yellow-rgb));
--h4-bg: rgb(var(--color-green-rgb));
--h5-bg: rgb(var(--color-blue-rgb));
--h6-bg: rgb(var(--color-purple-rgb));
}`,
    },
    "headings-red-text": {
      general: `.headings-red-text {
--h-color: var(--color-red);
}`,
    },
    "headings-orange-text": {
      general: `.headings-orange-text {
--h-color: var(--color-orange);
}`,
    },
    "headings-yellow-text": {
      general: `.headings-yellow-text {
--h-color: var(--color-yellow);
}`,
    },
    "headings-green-text": {
      general: `.headings-green-text {
--h-color: var(--color-green);
}`,
    },
    "headings-blue-text": {
      general: `.headings-blue-text {
--h-color: var(--color-blue);
}`,
    },
    "headings-purple-text": {
      general: `.headings-purple-text {
--h-color: var(--color-purple);
}`,
    },
    "headings-pink-text": {
      general: `.headings-pink-text {
--h-color: var(--color-pink);
}`,
    },
    "headings-brown-text": {
      general: `.headings-brown-text {
--h-color: var(--color-brown);
}`,
    },
    "headings-gray-text": {
      general: `.headings-gray-text {
--h-color: var(--color-gray);
}`,
    },
    "headings-rainbow-text": {
      general: `.headings-rainbow-text {
--h1-color: var(--color-red);
--h2-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h4-color: var(--color-green);
--h5-color: var(--color-blue);
--h6-color: var(--color-purple);
}`,
    },
    "default-serif": {
      general: `body.default-serif {
--font-text: 'Gambetta','Lyon-Text',  Georgia, ui-serif, serif;
}`,
    },
    "default-mono": {
      general: `body.default-mono {
--font-text: 'iA Writer Duospace', 'Nitti', Menlo, Courier, monospace;
}`,
    },
    wys: {
      general: `.wys .markdown-preview-view br, .wys br {
content: '';
display: block;
margin-top: calc(var(--custom-line-height) / 2);
}

.wys .markdown-source-view.mod-cm6 .cm-line {
padding: calc(var(--custom-line-height) / 3) 0px calc(var(--custom-line-height) / 3) 0px;
line-height: var(--custom-line-height) !important;
}

.wys .markdown-rendered h1, .wys .markdown-rendered h2, .wys .markdown-rendered h3, .wys .markdown-rendered h4, .wys .markdown-rendered h5, .wys .markdown-rendered h6 {
margin: var(--custom-line-height) 0px calc(var(--custom-line-height) * 0.4) 0px !important;
padding: 0.1em 0.15em 0.2em 0.15em;
width: 100%;
}

.wys .cm-s-obsidian .HyperMD-header {
margin: var(--custom-line-height) 2px 3px 2px !important;
padding: 0px 2px !important;
}`,
    },
    "banner-default": {
      general: `.banner-default .cover-img img[alt*="banner"] {
-webkit-mask-image: none;
mask-image: none;
}

.banner-default .cover-img .inline-title {
position: relative;
padding-top: calc(var(--banner-size) - 0.2em) !important;
z-index: 1;
}`,
    },
    "banner-gradient": {
      general: `.banner-gradient .cover-img .inline-title {
position: relative;
padding-top: calc(var(--banner-size) - 60px);
z-index: 1;
}

.banner-gradient .cover-img img[alt*="banner"] {
-webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
}`,
    },
    "banner-glow": {
      general: `.banner-glow .cover-img img[alt*="banner"] {
-webkit-mask-image: none;
mask-image: none;
filter: brightness(70%);
}

.banner-glow .cover-img .inline-title {
position: relative;
margin-top: calc(var(--banner-size) - 160px) !important;
line-height: 1em !important;
font-size: 3em !important;
margin-bottom: calc(var(--banner-size) * 0.1);
text-align: center;
padding: 0.8em 1.8em;
margin-right: auto;
margin-left: auto;
color: hsl(var(--accent-h), var(--accent-s), 99.8%);
border-radius: var(--radius-m);
border: none;
text-shadow: hsl(var(--accent-h), var(--accent-s), 97%) 0px 0px 2px, hsl(var(--accent-h), var(--accent-s), 90%) 0px 0px 10px;
transition: text-shadow .15s;
}

.banner-glow .cover-img .inline-title:hover {
text-shadow: hsl(var(--accent-h), var(--accent-s), 95%) 0px 0px 7px, hsl(var(--accent-h), var(--accent-s), 88%) 0px 0px 15px;
}`,
    },
  },
};
