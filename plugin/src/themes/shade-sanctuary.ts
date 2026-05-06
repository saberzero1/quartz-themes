import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "shade-sanctuary",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["computer-modern-bright", "jetbrains-mono"],
    fontFiles: [
      {
        family: "Computer Modern",
        style: "normal",
        weight: "normal",
        file: "computer-modern.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Computer Modern",
        style: "italic",
        weight: "normal",
        file: "computer-modern-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Computer Modern",
        style: "normal",
        weight: "bold",
        file: "computer-modern-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Computer Modern",
        style: "italic",
        weight: "bold",
        file: "computer-modern-3.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "JetBrains Mono",
        style: "normal",
        weight: "normal",
        file: "jetbrains-mono.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "colorthemes",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background: hsl(var(--hue-bg), var(--sat-bg), var(--lum));
  --background-modifier-border: var(--color-base-30, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --background-modifier-border-focus: var(--color-base-40, color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)));
  --background-modifier-border-hover: var(--color-base-35, color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)));
  --background-modifier-form-field: var(--color-base-20, color-mix(in srgb, hsl(265, 60%, 11%) 80%, #000));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, color-mix(in srgb, hsl(265, 60%, 11%) 80%, #000));
  --background-modifier-hover: var(--color-base-40, color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)));
  --background-primary: var(--color-base-00, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --background-primary-alt: var(--color-base-10, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  --background-secondary: var(--color-base-10, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  --background-secondary-alt: var(--color-base-30, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --bases-cards-background: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --bases-cards-cover-background: var(--background-primary-alt, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  --bases-embed-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --bases-group-heading-property-color: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --bases-table-border-color: var(--table-border-color, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --bases-table-cell-background-active: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --bases-table-cell-background-disabled: var(--background-primary-alt, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  --bases-table-group-background: var(--background-primary-alt, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  --bases-table-header-background: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --bases-table-header-background-hover: var(--background-modifier-hover, color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)));
  --bases-table-header-color: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --bases-table-summary-background: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --bases-table-summary-background-hover: var(--background-modifier-hover, color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)));
  --black: #000;
  --blue: #437cf3;
  --blue-violet: #6f51f4;
  --callout-bug: var(--callout-bug, 251, 70, 76);
  --callout-default: var(--callout-default, 2, 122, 255);
  --callout-error: var(--callout-error, 251, 70, 76);
  --callout-example: var(--callout-example, 168, 130, 255);
  --callout-fail: var(--callout-fail, 251, 70, 76);
  --callout-info: var(--callout-info, 2, 122, 255);
  --callout-question: var(--callout-question, 233, 151, 63);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 68, 207, 110);
  --callout-summary: var(--callout-summary, 83, 223, 221);
  --callout-tip: var(--callout-tip, 83, 223, 221);
  --callout-todo: var(--callout-todo, 2, 122, 255);
  --callout-warning: var(--callout-warning, 233, 151, 63);
  --canvas-background: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --canvas-card-label-color: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --canvas-dot-pattern: var(--color-base-30, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --caret-color: var(--text-normal, #faf4ed);
  --checkbox-border-color: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --checkbox-border-color-hover: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --checkbox-color: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --checkbox-marker-color: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --checklist-done-color: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --code-background: var(--background-primary-alt, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  --code-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --code-bracket-background: var(--background-modifier-hover, color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)));
  --code-comment: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --code-normal: var(--text-normal, #faf4ed);
  --code-punctuation: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --collapse-icon-color: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --color-base-00: color-mix(in srgb, var(--background) 25%, var(--black));
  --color-base-05: color-mix(in srgb, var(--background) 40%, var(--black));
  --color-base-10: color-mix(in srgb, var(--background) 50%, var(--black));
  --color-base-100: color-mix(in srgb, var(--background) 0%, var(--foreground));
  --color-base-20: color-mix(in srgb, var(--background) 80%, var(--black));
  --color-base-25: color-mix(in srgb, var(--background) 80%, var(--black));
  --color-base-30: color-mix(in srgb, var(--background) 90%, var(--foreground));
  --color-base-35: color-mix(in srgb, var(--background) 95%, var(--foreground));
  --color-base-40: color-mix(in srgb, var(--background) 80%, var(--foreground));
  --color-base-50: color-mix(in srgb, var(--background) 60%, var(--foreground));
  --color-base-60: color-mix(in srgb, var(--background) 60%, var(--foreground));
  --color-base-70: color-mix(in srgb, var(--background) 30%, var(--foreground));
  --cool-cyan: #43cfea;
  --cool-gray: #515768;
  --cyan: #51e1e9;
  --dark: var(--text-normal, var(--color-base-100, #faf4ed));
  --darkgray: var(--text-normal, var(--color-base-100, #faf4ed));
  --divider-color: var(--background-modifier-border, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --dropdown-background: var(--interactive-normal, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --dropdown-background-hover: var(--interactive-hover, color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)));
  --file-header-background: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --file-header-background-focused: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --file-header-font: var(--font-interface, "Jetbrains Mono", "Inter", Sans-Serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --flair-color: var(--text-normal, #faf4ed);
  --font-callout-theme: "Computer Modern", "Sans-Serif";
  --font-interface-theme: "Jetbrains Mono", "Inter", Sans-Serif;
  --font-mermaid: var(--font-text, "Computer Modern", "Inter", Sans-Serif);
  --font-monospace-theme: "Jetbrains Mono", "Source Code Pro", monospace;
  --footnote-divider-color: var(--metadata-divider-color, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --footnote-id-color: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --footnote-id-color-no-occurrences: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --footnote-input-background-active: var(--metadata-input-background-active, color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)));
  --foreground: hsl(var(--hue-fg), var(--sat-fg), 80%);
  --graph-node: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --graph-node-unresolved: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --graph-text: var(--text-normal, #faf4ed);
  --gray: var(--text-muted, var(--color-base-70, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%))));
  --h1-color: hsl(var(--hue-bg), var(--sat-fg), 65%);
  --h1-size: calc(var(--font-text-size) + 8px);
  --h2-color: hsl(var(--hue-bg), var(--sat-fg), 75%);
  --h2-size: calc(var(--font-text-size) + 6px);
  --h3-color: hsl(var(--hue-bg), var(--sat-fg), 80%);
  --h3-size: calc(var(--font-text-size) + 4px);
  --h4-color: hsl(var(--hue-bg), var(--sat-fg), 80%);
  --h4-size: calc(var(--font-text-size) + 2px);
  --h5-color: hsl(var(--hue-bg), var(--sat-fg), 90%);
  --h5-size: calc(var(--font-text-size) + 1px);
  --h6-color: hsl(var(--hue-bg), var(--sat-fg), 95%);
  --h6-size: calc(var(--font-text-size));
  --header-title-color: hsl(var(--hue-bg), var(--sat-fg), 65%);
  --heading-formatting: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --highlight: var(--text-highlight-bg, color-mix(in srgb, var(--h1-color) 25%, transparent));
  --hot-red: #e3365e;
  --hr-color: var(--background-modifier-border, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --hue-bg: 265;
  --hue-fg: 265;
  --icon-color: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --icon-color-focused: var(--text-normal, #faf4ed);
  --icon-color-hover: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --indentation-guide-color: var(--color-base-30, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --indentation-guide-color-active: var(--color-base-35, color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)));
  --inline-title-color: var(--h1-color, hsl(265, 100%, 65%));
  --inline-title-size: var(--h1-size, 24px);
  --input-date-separator: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --input-placeholder-color: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --interactive-hover: var(--color-base-35, color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)));
  --interactive-normal: var(--color-base-30, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --light: var(--background-primary, var(--color-base-00, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000)));
  --light-blue: #54b6f8;
  --lightgray: var(--background-secondary, var(--color-base-10, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000)));
  --list-marker-color: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --list-marker-color-hover: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --lum: 11%;
  --magenta: #e54f9b;
  --menu-background: var(--background-secondary, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  --menu-border-color: var(--background-modifier-border-hover, color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)));
  --metadata-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --metadata-divider-color: var(--background-modifier-border, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --metadata-input-background-active: var(--background-modifier-hover, color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)));
  --metadata-input-font: var(--font-interface, "Jetbrains Mono", "Inter", Sans-Serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #faf4ed);
  --metadata-label-background-active: var(--background-modifier-hover, color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)));
  --metadata-label-font: var(--font-interface, "Jetbrains Mono", "Inter", Sans-Serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --metadata-label-text-color-hover: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --metadata-property-background-active: var(--background-modifier-hover, color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)));
  --mint: #52eea3;
  --modal-background: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --nav-collapse-icon-color: var(--collapse-icon-color, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --nav-collapse-icon-color-collapsed: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --nav-heading-color: var(--text-normal, #faf4ed);
  --nav-heading-color-collapsed: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --nav-heading-color-collapsed-hover: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --nav-heading-color-hover: var(--text-normal, #faf4ed);
  --nav-indentation-guide-color: var(--color-base-30, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --nav-item-background-active: var(--background-modifier-hover, color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)));
  --nav-item-background-hover: var(--background-modifier-hover, color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)));
  --nav-item-color: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --nav-item-color-active: var(--text-normal, #faf4ed);
  --nav-item-color-hover: var(--text-normal, #faf4ed);
  --nav-item-color-selected: var(--text-normal, #faf4ed);
  --nav-tag-color: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --nav-tag-color-active: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --nav-tag-color-hover: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --pdf-background: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --pdf-page-background: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --pdf-sidebar-background: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --pill-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --pill-border-color-hover: var(--background-modifier-border-hover, color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)));
  --pill-color: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --pill-color-hover: var(--text-normal, #faf4ed);
  --pill-color-remove: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --prompt-background: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --purple: #c952ed;
  --raised-background: var(--blur-background, color-mix(in srgb, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)), color-mix(in srgb, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) 65%, transparent)));
  --ribbon-background: var(--background-secondary, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  --ribbon-background-collapsed: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --sat-bg: 60%;
  --sat-fg: 100%;
  --scrollbar-active-thumb-bg: var(--color-base-40, color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)));
  --scrollbar-thumb-bg: var(--color-base-30, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --search-clear-button-color: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --search-icon-color: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --search-result-background: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --setting-group-heading-color: var(--text-normal, #faf4ed);
  --setting-items-background: var(--background-primary-alt, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  --setting-items-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --shiki-code-background: var(--code-background, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  --shiki-code-comment: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --shiki-code-normal: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --shiki-code-punctuation: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --shiki-gutter-text-color: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --shiki-highlight-neutral: var(--shiki-code-normal, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --shiki-terminal-dots-color: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --slider-thumb-border-color: var(--background-modifier-border-hover, color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)));
  --slider-track-background: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --status-bar-background: var(--background-secondary, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  --status-bar-border-color: var(--divider-color, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --status-bar-text-color: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --suggestion-background: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --tab-background-active: var(--background-primary, color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000));
  --tab-container-background: var(--background-secondary, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  --tab-curve: 10px;
  --tab-divider-color: var(--background-modifier-border-hover, color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)));
  --tab-font-size: var(--font-ui-small, 10pt);
  --tab-max-width: 300px;
  --tab-outline-color: var(--divider-color, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --tab-switcher-background: var(--background-secondary, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  --tab-text-color: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --tab-text-color-active: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --tab-text-color-focused: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --tab-text-color-focused-active: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --tab-text-color-focused-active-current: var(--text-normal, #faf4ed);
  --tab-width: 180px;
  --table-add-button-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --table-border-color: var(--color-base-60, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --table-drag-handle-color: var(--text-faint, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --table-header-border-color: var(--table-border-color, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --table-header-color: var(--text-normal, #faf4ed);
  --text-faint: var(--color-base-50, color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)));
  --text-highlight-bg: color-mix(in srgb, var(--h1-color) 25%, transparent);
  --text-highlight-bg-active: color-mix(in srgb, var(--h1-color) 25%, transparent);
  --text-muted: var(--color-base-70, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --text-normal: var(--color-base-100, #faf4ed);
  --textHighlight: var(--text-highlight-bg, color-mix(in srgb, var(--h1-color) 25%, transparent));
  --title-color: hsl(var(--hue-bg), var(--sat-fg), 65%);
  --titlebar-background: var(--color-base-10, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  --titlebar-background-focused: var(--color-base-10, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  --titlebar-border-color: var(--background-modifier-border, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)));
  --titlebar-text-color: var(--text-muted, color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)));
  --titlebar-text-color-focused: var(--text-normal, #faf4ed);
  --unified-heading-space: 10px;
  --vault-profile-color: var(--text-normal, #faf4ed);
  --vault-profile-color-hover: var(--vault-profile-color, #faf4ed);
  --violet: #9446f8;
  --white: #fff;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, color(srgb 0.02475 0.011 0.044));
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  color: rgb(250, 244, 237);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(250, 244, 237));
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(250, 244, 237));
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(250, 244, 237));
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, rgb(250, 244, 237));
  font-family: "Computer Modern", Inter, sans-serif;
  font-weight: 900;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(250, 244, 237));
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, color(srgb 0.591667 0.3 1 / 0.25));
  color: var(--text-normal, rgb(250, 244, 237));
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body del {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: color(srgb 0.366067 0.2664 0.5056);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(166, 138, 249));
  border-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, color(srgb 0.566367 0.4332 0.7528));
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.566367 0.4332 0.7528) none 0px;
  text-decoration-color: color(srgb 0.566367 0.4332 0.7528);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body a.internal-link.broken {
  font-family: "Computer Modern", Inter, sans-serif;
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body dl {
  margin-bottom: 18px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(250, 244, 237);
  margin-bottom: 0px;
  margin-left: 24px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(250, 244, 237);
  margin-bottom: 0px;
  margin-left: 24px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, color(srgb 0.366067 0.2664 0.5056));
}

html[saved-theme="dark"] body blockquote {
  color: var(--blockquote-color, rgb(250, 244, 237));
  font-family: "Computer Modern", Inter, sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
}

html[saved-theme="dark"] body table {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  margin-bottom: 0px;
  margin-left: 215.969px;
  margin-right: 215.984px;
  margin-top: 0px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: color(srgb 0.366067 0.2664 0.5056);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.366067 0.2664 0.5056);
  border-left-width: 0px;
  border-right-color: color(srgb 0.366067 0.2664 0.5056);
  border-right-width: 0px;
  border-top-color: color(srgb 0.366067 0.2664 0.5056);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(250, 244, 237));
}

html[saved-theme="dark"] body th {
  border-bottom-color: color(srgb 0.366067 0.2664 0.5056);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.366067 0.2664 0.5056);
  border-left-width: 0px;
  border-right-color: color(srgb 0.366067 0.2664 0.5056);
  border-right-width: 0px;
  border-top-color: color(srgb 0.366067 0.2664 0.5056);
  border-top-left-radius: var(--table-border-radius, 10px);
  border-top-width: 0px;
  color: var(--table-header-color, rgb(250, 244, 237));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, color(srgb 0.0495 0.022 0.088));
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-width: 0px;
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-width: 0px;
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-width: 0px;
  color: var(--code-normal, rgb(250, 244, 237));
  font-family: var(--font-monospace, "??", "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, color(srgb 0.0495 0.022 0.088));
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-width: 0px;
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-width: 0px;
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-width: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(250, 244, 237);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000));
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(151, 77, 255);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgb(151, 77, 255);
  border-left-width: 0px;
  border-radius: 6px;
  border-right-color: rgb(151, 77, 255);
  border-right-width: 0px;
  border-top-color: rgb(151, 77, 255);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, color(srgb 0.0495 0.022 0.088));
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-width: 0px;
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-width: 0px;
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-width: 0px;
  color: var(--text-muted, color(srgb 0.566367 0.4332 0.7528));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
  color: rgb(250, 244, 237);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: color(srgb 0.366067 0.2664 0.5056);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.366067 0.2664 0.5056);
  border-left-width: 0px;
  border-right-color: color(srgb 0.366067 0.2664 0.5056);
  border-right-width: 0px;
  border-top-color: color(srgb 0.366067 0.2664 0.5056);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: color(srgb 0.566367 0.4332 0.7528);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: color(srgb 0.566367 0.4332 0.7528);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.366067 0.2664 0.5056);
  text-decoration: line-through 1px color(srgb 0.366067 0.2664 0.5056);
  text-decoration-color: color(srgb 0.366067 0.2664 0.5056);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.366067 0.2664 0.5056);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: color(srgb 0.366067 0.2664 0.5056);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(83, 223, 221, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(251, 70, 76, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(251, 70, 76, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  border-bottom-color: rgba(168, 130, 255, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(168, 130, 255, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(168, 130, 255, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(168, 130, 255, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(251, 70, 76, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(233, 151, 63, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(158, 158, 158, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  border-bottom-color: rgba(68, 207, 110, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(68, 207, 110, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(68, 207, 110, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(68, 207, 110, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(83, 223, 221, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(233, 151, 63, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(250, 244, 237);
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
  background-color: color(srgb 0.0792 0.0352 0.1408);
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-width: 0px;
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-width: 0px;
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-width: 0px;
  color: var(--text-normal, rgb(250, 244, 237));
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, color(srgb 0.02475 0.011 0.044));
  border-bottom-color: color(srgb 0.232533 0.1552 0.3408);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.232533 0.1552 0.3408);
  border-left-width: 0px;
  border-right-color: color(srgb 0.232533 0.1552 0.3408);
  border-right-width: 0px;
  border-top-color: color(srgb 0.232533 0.1552 0.3408);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.232533 0.1552 0.3408));
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.232533 0.1552 0.3408);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.232533 0.1552 0.3408);
  border-left-width: 0px;
  border-right-color: color(srgb 0.232533 0.1552 0.3408);
  border-right-width: 0px;
  border-top-color: color(srgb 0.232533 0.1552 0.3408);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, color(srgb 0.232533 0.1552 0.3408));
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.232533 0.1552 0.3408));
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: rgb(151, 77, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(151, 77, 255);
  border-left-width: 0px;
  border-right-color: rgb(151, 77, 255);
  border-right-width: 0px;
  border-top-color: rgb(151, 77, 255);
  border-top-width: 0px;
  color: var(--h1-color, rgb(151, 77, 255));
  font-family: var(--h1-font, "Computer Modern", Inter, sans-serif);
  font-size: var(--h1-size, 24px);
  letter-spacing: var(--h1-letter-spacing, -0.36px);
  line-height: var(--h1-line-height, 28.8px);
  margin-bottom: 18px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--title-color, rgb(151, 77, 255));
  font-size: var(--inline-title-size, 24px);
}

html[saved-theme="dark"] body h2 {
  border-bottom-color: rgb(181, 128, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(181, 128, 255);
  border-left-width: 0px;
  border-right-color: rgb(181, 128, 255);
  border-right-width: 0px;
  border-top-color: rgb(181, 128, 255);
  border-top-width: 0px;
  color: var(--h2-color, rgb(181, 128, 255));
  font-family: var(--h2-font, "Computer Modern", Inter, sans-serif);
  font-size: var(--h2-size, 22px);
  letter-spacing: var(--h2-letter-spacing, -0.242px);
  line-height: var(--h2-line-height, 26.4px);
  margin-bottom: 18px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(151, 77, 255);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(151, 77, 255);
  border-left-width: 0px;
  border-right-color: rgb(151, 77, 255);
  border-right-width: 0px;
  border-top-color: rgb(151, 77, 255);
  border-top-width: 0px;
  color: var(--title-color, rgb(151, 77, 255));
  font-family: var(--inline-title-font, "Computer Modern", Inter, sans-serif);
  font-size: var(--inline-title-size, 24px);
  letter-spacing: -0.36px;
  line-height: var(--inline-title-line-height, 28.8px);
  margin-bottom: 24px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h3 {
  border-bottom-color: rgb(196, 153, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(196, 153, 255);
  border-left-width: 0px;
  border-right-color: rgb(196, 153, 255);
  border-right-width: 0px;
  border-top-color: rgb(196, 153, 255);
  border-top-width: 0px;
  color: var(--h3-color, rgb(196, 153, 255));
  font-family: var(--h3-font, "Computer Modern", Inter, sans-serif);
  font-size: var(--h3-size, 20px);
  letter-spacing: var(--h3-letter-spacing, -0.16px);
  line-height: var(--h3-line-height, 26px);
  margin-bottom: 18px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 10px);
}

html[saved-theme="dark"] body h4 {
  border-bottom-color: rgb(196, 153, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(196, 153, 255);
  border-left-width: 0px;
  border-right-color: rgb(196, 153, 255);
  border-right-width: 0px;
  border-top-color: rgb(196, 153, 255);
  border-top-width: 0px;
  color: var(--h4-color, rgb(196, 153, 255));
  font-family: var(--h4-font, "Computer Modern", Inter, sans-serif);
  font-size: var(--h4-size, 18px);
  letter-spacing: var(--h4-letter-spacing, -0.09px);
  line-height: var(--h4-line-height, 25.2px);
  margin-bottom: 18px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 10px);
}

html[saved-theme="dark"] body h5 {
  border-bottom-color: rgb(225, 204, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(225, 204, 255);
  border-left-width: 0px;
  border-right-color: rgb(225, 204, 255);
  border-right-width: 0px;
  border-top-color: rgb(225, 204, 255);
  border-top-width: 0px;
  color: var(--h5-color, rgb(225, 204, 255));
  font-family: var(--h5-font, "Computer Modern", Inter, sans-serif);
  font-size: var(--h5-size, 17px);
  letter-spacing: var(--h5-letter-spacing, -0.034px);
  line-height: var(--h5-line-height, 25.5px);
  margin-bottom: 18px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 10px);
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: rgb(240, 230, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(240, 230, 255);
  border-left-width: 0px;
  border-right-color: rgb(240, 230, 255);
  border-right-width: 0px;
  border-top-color: rgb(240, 230, 255);
  border-top-width: 0px;
  color: var(--h6-color, rgb(240, 230, 255));
  font-family: var(--h6-font, "Computer Modern", Inter, sans-serif);
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.566367 0.4332 0.7528));
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.566367 0.4332 0.7528));
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  color: rgb(250, 244, 237);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-width: 0px;
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-width: 0px;
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-width: 0px;
  color: var(--icon-color, color(srgb 0.566367 0.4332 0.7528));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, color(srgb 0.0495 0.022 0.088));
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-width: 0px;
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-width: 1px;
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, color(srgb 0.566367 0.4332 0.7528));
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: color(srgb 0.566367 0.4332 0.7528);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(250, 244, 237);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.566367 0.4332 0.7528));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.566367 0.4332 0.7528));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-width: 0px;
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-width: 0px;
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-width: 0px;
  color: var(--icon-color, color(srgb 0.566367 0.4332 0.7528));
}

html[saved-theme="dark"] body .darkmode svg {
  color: color(srgb 0.566367 0.4332 0.7528);
  stroke: color(srgb 0.566367 0.4332 0.7528);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(151, 77, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(151, 77, 255);
  border-left-width: 0px;
  border-right-color: rgb(151, 77, 255);
  border-right-width: 0px;
  border-top-color: rgb(151, 77, 255);
  border-top-width: 0px;
  color: rgb(151, 77, 255);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, color(srgb 0.366067 0.2664 0.5056));
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(250, 244, 237));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, color(srgb 0.0495 0.022 0.088));
  border-color: rgb(250, 244, 237);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: color(srgb 0.366067 0.2664 0.5056);
  color: var(--table-header-color, rgb(250, 244, 237));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-width: 0px;
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-width: 0px;
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-width: 0px;
  color: var(--text-muted, color(srgb 0.566367 0.4332 0.7528));
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-width: 0px;
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-width: 0px;
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-width: 0px;
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-width: 0px;
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-width: 0px;
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-width: 0px;
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body .metadata-property-key {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: var(--metadata-label-font, "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: var(--metadata-input-font, "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .note-properties {
  border-color: color(srgb 0.165767 0.0996 0.2584);
}

html[saved-theme="dark"] body .note-properties-key {
  color: color(srgb 0.566367 0.4332 0.7528);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: color(srgb 0.566367 0.4332 0.7528);
}

html[saved-theme="dark"] body .note-properties-value {
  color: color(srgb 0.566367 0.4332 0.7528);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-secondary, color(srgb 0.0495 0.022 0.088));
  color: var(--text-normal, rgb(250, 244, 237));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, color(srgb 0.0495 0.022 0.088));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: color(srgb 0.165767 0.0996 0.2584);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, color(srgb 0.0495 0.022 0.088));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
  color: var(--text-normal, rgb(250, 244, 237));
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-width: 0px;
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-width: 0px;
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-width: 0px;
  color: var(--text-normal, color(srgb 0.566367 0.4332 0.7528));
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, color(srgb 0.0495 0.022 0.088));
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
  color: var(--code-normal, rgb(250, 244, 237));
  font-family: var(--font-monospace, "??", "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-width: 0px;
  border-left-color: rgb(250, 244, 237);
  border-left-width: 0px;
  border-right-color: rgb(250, 244, 237);
  border-right-width: 0px;
  border-top-color: rgb(250, 244, 237);
  border-top-width: 0px;
}

html[saved-theme="dark"] body sub {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body summary {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body sup {
  color: rgb(250, 244, 237);
}`,
  },
  light: {
    base: `:root:root {
  --callout-bug: var(--callout-bug, 233, 49, 71);
  --callout-default: var(--callout-default, 8, 109, 221);
  --callout-error: var(--callout-error, 233, 49, 71);
  --callout-example: var(--callout-example, 120, 82, 238);
  --callout-fail: var(--callout-fail, 233, 49, 71);
  --callout-info: var(--callout-info, 8, 109, 221);
  --callout-question: var(--callout-question, 236, 117, 0);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 8, 185, 78);
  --callout-summary: var(--callout-summary, 0, 191, 188);
  --callout-tip: var(--callout-tip, 0, 191, 188);
  --callout-todo: var(--callout-todo, 8, 109, 221);
  --callout-warning: var(--callout-warning, 236, 117, 0);
  --file-header-font: var(--font-interface, "Jetbrains Mono", "Inter", Sans-Serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-callout-theme: "Computer Modern", "Sans-Serif";
  --font-interface-theme: "Jetbrains Mono", "Inter", Sans-Serif;
  --font-mermaid: var(--font-text, "Computer Modern", "Inter", Sans-Serif);
  --font-monospace-theme: "Jetbrains Mono", "Source Code Pro", monospace;
  --h1-size: calc(var(--font-text-size) + 8px);
  --h2-size: calc(var(--font-text-size) + 6px);
  --h3-size: calc(var(--font-text-size) + 4px);
  --h4-size: calc(var(--font-text-size) + 2px);
  --h5-size: calc(var(--font-text-size) + 1px);
  --h6-size: calc(var(--font-text-size));
  --hue-bg: 265;
  --hue-fg: 265;
  --inline-title-size: var(--h1-size, 24px);
  --lum: 11%;
  --lum-bg: 95%;
  --lum-fg: 50%;
  --metadata-input-font: var(--font-interface, "Jetbrains Mono", "Inter", Sans-Serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font: var(--font-interface, "Jetbrains Mono", "Inter", Sans-Serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --sat-bg: 60%;
  --sat-fg: 100%;
  --tab-curve: 10px;
  --tab-font-size: var(--font-ui-small, 10pt);
  --tab-max-width: 300px;
  --tab-width: 180px;
  --title-color: black;
  --unified-heading-space: 10px;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  font-family: "Computer Modern", Inter, sans-serif;
  font-weight: 900;
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body .text-highlight {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body del {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body p {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body a.internal-link.broken {
  font-family: "Computer Modern", Inter, sans-serif;
}`,
    lists: `html[saved-theme="light"] body dd {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body dl {
  margin-bottom: 18px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
}

html[saved-theme="light"] body dt {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body ol > li {
  margin-bottom: 0px;
  margin-left: 24px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul > li {
  margin-bottom: 0px;
  margin-left: 24px;
  margin-right: 0px;
  margin-top: 0px;
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: "Computer Modern", Inter, sans-serif;
}`,
    tables: `html[saved-theme="light"] body table {
  font-family: "Computer Modern", Inter, sans-serif;
  margin-bottom: 0px;
  margin-left: 215.969px;
  margin-right: 215.984px;
  margin-top: 0px;
}

html[saved-theme="light"] body td {
  border-top-width: 0px;
}

html[saved-theme="light"] body th {
  border-top-left-radius: var(--table-border-radius, 10px);
}`,
    code: `html[saved-theme="light"] body code {
  font-family: var(--font-monospace, "??", "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}`,
    images: `html[saved-theme="light"] body figcaption {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body img {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: line-through 1px rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
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
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
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

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(171, 171, 171);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 191, 188, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(233, 49, 71, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(233, 49, 71, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  border-bottom-color: rgba(120, 82, 238, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(120, 82, 238, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(120, 82, 238, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(120, 82, 238, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(233, 49, 71, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(236, 117, 0, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(158, 158, 158, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  border-bottom-color: rgba(8, 185, 78, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(8, 185, 78, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(8, 185, 78, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(8, 185, 78, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 191, 188, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(236, 117, 0, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 400);
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
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h1 {
  font-family: var(--h1-font, "Computer Modern", Inter, sans-serif);
  font-size: var(--h1-size, 24px);
  letter-spacing: var(--h1-letter-spacing, -0.36px);
  line-height: var(--h1-line-height, 28.8px);
  margin-bottom: 18px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--title-color, rgb(0, 0, 0));
  font-size: var(--inline-title-size, 24px);
}

html[saved-theme="light"] body h2 {
  font-family: var(--h2-font, "Computer Modern", Inter, sans-serif);
  font-size: var(--h2-size, 22px);
  letter-spacing: var(--h2-letter-spacing, -0.242px);
  line-height: var(--h2-line-height, 26.4px);
  margin-bottom: 18px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: var(--title-color, rgb(0, 0, 0));
  font-family: var(--inline-title-font, "Computer Modern", Inter, sans-serif);
  font-size: var(--inline-title-size, 24px);
  letter-spacing: -0.36px;
  line-height: var(--inline-title-line-height, 28.8px);
  margin-bottom: 24px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h3 {
  font-family: var(--h3-font, "Computer Modern", Inter, sans-serif);
  font-size: var(--h3-size, 20px);
  letter-spacing: var(--h3-letter-spacing, -0.16px);
  line-height: var(--h3-line-height, 26px);
  margin-bottom: 18px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 10px);
}

html[saved-theme="light"] body h4 {
  font-family: var(--h4-font, "Computer Modern", Inter, sans-serif);
  font-size: var(--h4-size, 18px);
  letter-spacing: var(--h4-letter-spacing, -0.09px);
  line-height: var(--h4-line-height, 25.2px);
  margin-bottom: 18px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 10px);
}

html[saved-theme="light"] body h5 {
  font-family: var(--h5-font, "Computer Modern", Inter, sans-serif);
  font-size: var(--h5-size, 17px);
  letter-spacing: var(--h5-letter-spacing, -0.034px);
  line-height: var(--h5-line-height, 25.5px);
  margin-bottom: 18px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 10px);
}

html[saved-theme="light"] body h6 {
  font-family: var(--h6-font, "Computer Modern", Inter, sans-serif);
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    footer: `html[saved-theme="light"] body footer {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-right-width: 1px;
  border-top-right-radius: 8px;
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    properties: `html[saved-theme="light"] body .metadata {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body .metadata-property-key {
  font-family: var(--metadata-label-font, "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .metadata-property-value {
  font-family: var(--metadata-input-font, "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-secondary, rgb(246, 246, 246));
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(224, 224, 224);
}`,
    misc: `html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body details {
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
}

html[saved-theme="light"] body input[type=text] {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  font-family: var(--font-monospace, "??", "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}`,
  },
  classSettings: {
    "red-passion": {
      general: `.red-passion {
--hue-bg: 340;
--hue-fg: 320;
--sat-bg: 60%;
--sat-fg: 100%;
&.theme-light {
    --lum-fg: 50%;
    --lum-bg: 95%;
  };
}`,
    },
    "orange-sunset": {
      general: `.orange-sunset {
--hue-bg: 30;
--hue-fg: 30;
--sat-bg: 60%;
--sat-fg: 100%;
&.theme-light {
    --lum-fg: 50%;
    --lum-bg: 95%;
  };
}`,
    },
    "yellow-glow": {
      general: `.yellow-glow {
--hue-bg: 60;
--hue-fg: 60;
--sat-bg: 60%;
--sat-fg: 100%;
&.theme-light {
    --lum-fg: 50%;
    --lum-bg: 95%;
  };
}`,
    },
    "green-serenity": {
      general: `.green-serenity {
--hue-bg: 120;
--hue-fg: 120;
--sat-bg: 60%;
--sat-fg: 100%;
&.theme-light {
    --lum-fg: 50%;
    --lum-bg: 95%;
  };
}`,
    },
    "indigo-harmony": {
      general: `.indigo-harmony {
--hue-bg: 238;
--hue-fg: 255;
--sat-bg: 60%;
--sat-fg: 100%;
&.theme-light {
    --lum-fg: 50%;
    --lum-bg: 95%;
  };
}`,
    },
    "blue-ocean": {
      general: `.blue-ocean {
--hue-bg: 228;
--hue-fg: 220;
--sat-bg: 60%;
--sat-fg: 100%;
&.theme-light {
    --lum-fg: 50%;
    --lum-bg: 95%;
  };
}`,
    },
    "purple-mystic": {
      general: `.purple-mystic {
--hue-bg: 265;
--hue-fg: 265;
--sat-bg: 60%;
--sat-fg: 100%;
&.theme-light {
    --lum-fg: 50%;
    --lum-bg: 95%;
  };
}`,
    },
    "white-dawn": {
      general: `.white-dawn {
--hue-bg: 228;
--hue-fg: 220;
--sat-bg: 20%;
--sat-fg: 20%;
&.theme-light {
    --sat-bg: 30%;
    --sat-fg: 0%;
    --lum-bg: 90%;
    --lum-fg: 0%;
    &.intensity-abyss {
      --lum-bg: 100%;
    }
    &.intensity-dawn {
      --lum-bg: 80%;
    }
  };
}`,
    },
    "black-night": {
      general: `.black-night {
--hue-bg: 0;
--hue-fg: 0;
--sat-bg: 0%;
--sat-fg: 0%;
&.theme-light {
    --lum-fg: 20%;
    --lum-bg: 80%;
  };
}`,
    },
    "intensity-abyss": {
      general: `&.intensity-abyss {
--lum-bg: 100%;
}

.intensity-abyss {
--lum: 0%;
--background-modifier-border: var(--color-base-40) !important;
}`,
    },
    "intensity-twilight": {
      general: `.intensity-twilight {
--lum: 11%;
}`,
    },
    "intensity-dawn": {
      general: `&.intensity-dawn {
--lum-bg: 80%;
}

.intensity-dawn {
--lum: 22%;
--background-secondary: var(--color-base-00) !important;
--titlebar-background-focused: var(--color-base-05) !important;
--background-modifier-form-field: var(--color-base-05) !important;
}`,
    },
  },
};
