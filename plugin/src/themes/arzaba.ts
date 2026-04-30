import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "arzaba",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["open-sans"],
    fontFiles: [
      {
        family: "Open Sans Light Obsidian",
        style: "normal",
        weight: "400",
        file: "open-sans-light-obsidian.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Open Sans Regular Obsidian",
        style: "normal",
        weight: "400",
        file: "open-sans-regular-obsidian.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Source Code Pro Medium Obsidian",
        style: "normal",
        weight: "400",
        file: "source-code-pro-medium-obsidian.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Playwrite DE Grund Obsidian",
        style: "normal",
        weight: "400",
        file: "playwrite-de-grund-obsidian.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Quicksand Obsidian",
        style: "normal",
        weight: "400",
        file: "quicksand-obsidian.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Mono Obsidian",
        style: "normal",
        weight: "400",
        file: "ibm-plex-mono-obsidian.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Cormorant Obsidian",
        style: "normal",
        weight: "400",
        file: "cormorant-obsidian.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Playfair Display Obsidian",
        style: "normal",
        weight: "400",
        file: "playfair-display-obsidian.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Orbit Obsidian",
        style: "normal",
        weight: "400",
        file: "orbit-obsidian.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Share Tech Mono Obsidian",
        style: "normal",
        weight: "400",
        file: "share-tech-mono-obsidian.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "VT323 Obsidian",
        style: "normal",
        weight: "400",
        file: "vt323-obsidian.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Cutive Mono Obsidian",
        style: "normal",
        weight: "400",
        file: "cutive-mono-obsidian.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "EB Garamond Obsidian",
        style: "normal",
        weight: "400",
        file: "eb-garamond-obsidian.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Gentium Obsidian",
        style: "normal",
        weight: "400",
        file: "gentium-obsidian.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "arzaba-theme-settings",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 254;
  --accent-l: 68%;
  --accent-s: 80%;
  --background-modifier-border: var(--color-base-30, #3b3b3e);
  --background-modifier-border-focus: var(--color-base-40, #282828);
  --background-modifier-border-hover: var(--color-base-35, #282828);
  --background-modifier-form-field: var(--color-base-25, #1f2f3d);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #1f2f3d);
  --background-primary: var(--color-base-00, #050606);
  --background-primary-alt: var(--color-base-10, #101113);
  --background-secondary: var(--color-base-20, #0a0a0b);
  --background-secondary-alt: var(--color-base-30, #1a1d20);
  --bases-cards-background: var(--background-primary, #050606);
  --bases-cards-cover-background: var(--background-primary-alt, #101113);
  --bases-cards-font-size: var(--font-smaller, 0.8em);
  --bases-cards-radius: var(--radius-m, 10px);
  --bases-embed-border-color: var(--background-modifier-border, #3b3b3e);
  --bases-embed-border-radius: var(--radius-s, 8px);
  --bases-group-heading-property-color: var(--text-muted, #6f7a88);
  --bases-group-heading-property-size: var(--font-ui-smaller, 13px);
  --bases-group-heading-value-size: var(--font-smaller, 0.8em);
  --bases-table-border-color: var(--table-border-color, #3a3a3a);
  --bases-table-cell-background-active: var(--background-primary, #050606);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #101113);
  --bases-table-cell-background-selected: var(--table-selection, hsla(254, 80%, 68%, 0.05));
  --bases-table-container-border-radius: var(--radius-s, 8px);
  --bases-table-font-size: var(--font-smaller, 0.8em);
  --bases-table-group-background: var(--background-primary-alt, #101113);
  --bases-table-header-background: var(--background-primary, #050606);
  --bases-table-header-background-hover: var(--background-modifier-hover, #1b3b45);
  --bases-table-header-color: var(--text-muted, #6f7a88);
  --bases-table-row-background-hover: var(--table-row-background-hover, #020807);
  --bases-table-summary-background: var(--background-primary, #050606);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #1b3b45);
  --blockquote-background-color: #130f12;
  --blockquote-border-color: var(--interactive-accent, #bd95e6);
  --blockquote-border-thickness: 4px;
  --blockquote-color: #e4d8e3;
  --bodyFont: var(--font-text-theme, "Open Sans Light Obsidian", sans-serif);
  --bold-color: #dad79b;
  --button-radius: var(--input-radius, 0);
  --callout-radius: var(--radius-s, 8px);
  --canvas-background: var(--background-primary, #050606);
  --canvas-card-label-color: var(--text-faint, #798a8e);
  --canvas-controls-radius: var(--radius-s, 8px);
  --caret-color: var(--text-normal, #6cda6c);
  --checkbox-border-color: var(--text-faint, #798a8e);
  --checkbox-border-color-hover: var(--text-muted, #6f7a88);
  --checkbox-color: var(--interactive-accent, #6186ec);
  --checkbox-color-hover: var(--interactive-accent-hover, #e9626d);
  --checkbox-margin-inline-start: 0;
  --checkbox-marker-color: var(--background-primary, #050606);
  --checkbox-radius: var(--radius-s, 25%);
  --checkbox-size: var(--font-text-size, 1.2em);
  --checklist-done-color: var(--text-muted, #283f42);
  --checklist-done-decoration: none;
  --clickable-icon-radius: var(--radius-s, 0);
  --code-background: var(--background-primary-alt, #000000);
  --code-border-color: var(--background-modifier-border, #3b3b3e);
  --code-bracket-background: var(--background-modifier-hover, #1b3b45);
  --code-comment: var(--text-faint, #8a8a8a);
  --code-function: var(--color-yellow, #96cf70);
  --code-important: var(--color-orange, #e4d386);
  --code-keyword: var(--color-pink, #56B6C2);
  --code-normal: var(--text-normal, #fffcfe);
  --code-operator: var(--color-red, #e9626d);
  --code-property: var(--color-cyan, #6186ec);
  --code-punctuation: var(--text-muted, #e2e8ff);
  --code-radius: var(--radius-s, 12px);
  --code-size: var(--font-smaller, 0.8em);
  --code-string: var(--color-green, #E5C07B);
  --code-tag: var(--color-red, #6186ec);
  --code-value: var(--color-purple, #d66af7);
  --collapse-icon-color: var(--text-faint, #798a8e);
  --collapse-icon-color-collapsed: var(--text-accent, #72c6ea);
  --dark: var(--text-normal, var(--color-base-100, #e1e1eb));
  --darkgray: var(--text-normal, var(--color-base-100, #e1e1eb));
  --divider-color: var(--background-modifier-border, #3b3b3e);
  --divider-color-hover: var(--interactive-accent, #21431a);
  --dropdown-background: var(--interactive-normal, #193755);
  --dropdown-background-hover: var(--interactive-hover, #2c0f23);
  --file-header-background: var(--background-primary, #050606);
  --file-header-background-focused: var(--background-primary, #050606);
  --file-header-border: var(--border-width, none) solid transparent;
  --file-header-font: var(--font-interface, "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 0.8rem);
  --file-header-font-weight: 100;
  --file-line-width: 1000px;
  --flair-background: var(--interactive-normal, #193755);
  --flair-color: var(--text-normal, #e1e1eb);
  --font-interface-theme: "Open Sans Light Obsidian", sans-serif;
  --font-mermaid: var(--font-text, "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
  --font-smaller: 0.8em;
  --font-smallest: 0.65em;
  --font-text-theme: "Open Sans Light Obsidian", sans-serif;
  --font-ui-larger: 18px;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: var(--metadata-divider-color, #3b3b3e);
  --footnote-id-color: var(--text-muted, #6f7a88);
  --footnote-id-color-no-occurrences: var(--text-faint, #798a8e);
  --footnote-input-background-active: var(--metadata-input-background-active, #1b3b45);
  --footnote-line-height: var(--line-height-normal, 1.61);
  --footnote-radius: var(--radius-s, 8px);
  --footnote-size: var(--font-smaller, 0.8em);
  --graph-node: var(--text-muted, #9b8c06);
  --graph-node-attachment: var(--color-yellow, #00e5ff);
  --graph-node-focused: var(--text-accent, #33ff57);
  --graph-node-tag: var(--color-green, #c072a1);
  --graph-node-unresolved: var(--text-faint, #9f297b);
  --graph-text: var(--text-normal, #e1e1eb);
  --gray: var(--text-muted, var(--color-base-70, #6f7a88));
  --h1-color: #6f9fd6;
  --h1-font: "Open Sans Light Obsidian", sans-serif;
  --h1-size: 1.9em;
  --h1-weight: 400;
  --h2-color: #78c988;
  --h2-font: "Open Sans Light Obsidian", sans-serif;
  --h2-size: 1.75em;
  --h2-weight: 400;
  --h3-color: #a497f0;
  --h3-font: "Open Sans Light Obsidian", sans-serif;
  --h3-size: 1.61em;
  --h3-weight: 400;
  --h4-color: #c285b9;
  --h4-font: "Open Sans Light Obsidian", sans-serif;
  --h4-size: 1.45em;
  --h4-weight: 400;
  --h5-color: #e07a6e;
  --h5-font: "Open Sans Light Obsidian", sans-serif;
  --h5-line-height: var(--line-height-normal, 1.61);
  --h5-size: 1.33em;
  --h5-weight: 400;
  --h6-color: #d9c47a;
  --h6-font: "Open Sans Light Obsidian", sans-serif;
  --h6-line-height: var(--line-height-normal, 1.61);
  --h6-size: 1.23em;
  --h6-weight: 400;
  --headerFont: var(--font-text-theme, "Open Sans Light Obsidian", sans-serif);
  --heading-formatting: var(--text-faint, #798a8e);
  --hr-color: var(--background-modifier-border, #637884);
  --hr-thickness: 1px;
  --icon-color: var(--text-muted, #58919a);
  --icon-color-active: var(--text-accent, #72c6ea);
  --icon-color-focused: var(--text-normal, #7ad67f);
  --icon-color-hover: var(--text-muted, #8bb188);
  --icon-opacity: 1;
  --indentation-guide-editing-indent: 1.1em;
  --indentation-guide-source-indent: 0.85em;
  --indentation-guide-width-active: var(--border-width, 2px);
  --inline-title-color: var(--h1-color, #d3dfe6);
  --inline-title-font: var(--h1-font, "Open Sans Light Obsidian", sans-serif);
  --inline-title-line-height: var(--h1-line-height, 1.61);
  --inline-title-size: var(--h1-size, 2.2em);
  --inline-title-weight: var(--h1-weight, 300);
  --input-date-separator: var(--text-faint, #798a8e);
  --input-placeholder-color: var(--text-faint, #798a8e);
  --interactive-accent: var(--color-accent, #21431a);
  --interactive-accent-hover: var(--color-accent-1, #602e2e);
  --interactive-accent-hsl: var(--color-accent-hsl, 254, 80%, 68%);
  --interactive-hover: var(--color-base-35, #2c0f23);
  --interactive-normal: var(--color-base-30, #193755);
  --italic-color: #86b7f0;
  --light: var(--background-primary, var(--color-base-00, #050606));
  --lightgray: var(--background-secondary, var(--color-base-20, #0a0a0b));
  --line-height-normal: 1.61;
  --line-height-tight: 1.4;
  --link-color: var(--text-accent, #9ed2fd);
  --link-color-hover: var(--text-accent-hover, #69d1d1);
  --link-decoration: none;
  --link-decoration-thickness: 1px;
  --link-external-color: var(--text-accent, #bfacf1);
  --link-external-color-hover: var(--text-accent-hover, #d0839e);
  --link-unresolved-color: var(--text-accent, #f4b2b2);
  --link-unresolved-opacity: 0.9;
  --list-bullet-size: 0.31em;
  --list-indent-editing: 1em;
  --list-indent-source: 1em;
  --list-marker-color: var(--text-faint, #70b5d6);
  --list-marker-color-collapsed: var(--text-accent, #35b035);
  --list-marker-color-hover: var(--text-muted, #d43dca);
  --list-spacing: 0.12em;
  --menu-background: var(--background-secondary, #0a0a0b);
  --menu-border-color: var(--background-modifier-border-hover, #282828);
  --menu-radius: var(--radius-m, 10px);
  --metadata-border-color: var(--background-modifier-border, #3b3b3e);
  --metadata-divider-color: var(--background-modifier-border, #3b3b3e);
  --metadata-gap: 1px;
  --metadata-input-background-active: var(--background-modifier-hover, #1b3b45);
  --metadata-input-font: var(--font-interface, "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-font-size: var(--font-smaller, 0.8em);
  --metadata-input-text-color: var(--text-normal, #e1e1eb);
  --metadata-label-background-active: var(--background-modifier-hover, #1b3b45);
  --metadata-label-font: var(--font-interface, "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font-size: var(--font-smaller, 0.8em);
  --metadata-label-text-color: var(--text-muted, #e1e1eb);
  --metadata-label-text-color-hover: var(--text-muted, #6f7a88);
  --metadata-label-width: 8.5em;
  --metadata-property-background: #050606;
  --metadata-property-background-active: var(--background-modifier-hover, #1b3b45);
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0px;
  --metadata-property-radius-hover: 0;
  --metadata-sidebar-input-font-size: var(--font-ui-small, 0.8em);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 0.8em);
  --modal-background: var(--background-primary, #050606);
  --modal-border-width: var(--border-width, 2px);
  --modal-community-sidebar-width: 290px;
  --modal-max-width: 1000px;
  --modal-radius: var(--radius-l, 0px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #408b39);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #798a8e);
  --nav-heading-color: var(--text-normal, #e1e1eb);
  --nav-heading-color-collapsed: var(--text-faint, #798a8e);
  --nav-heading-color-collapsed-hover: var(--text-muted, #6f7a88);
  --nav-heading-color-hover: var(--text-normal, #e1e1eb);
  --nav-indentation-guide-color: var(--indentation-guide-color, #6386d2);
  --nav-item-background-active: var(--background-modifier-hover, #2d1d1d);
  --nav-item-background-hover: var(--background-modifier-hover, #1d2d1f);
  --nav-item-color: var(--text-muted, #dfdfe0);
  --nav-item-color-active: var(--text-normal, #ffffff);
  --nav-item-color-highlighted: var(--text-accent, #72c6ea);
  --nav-item-color-hover: var(--text-normal, #ffffff);
  --nav-item-color-selected: var(--text-normal, #e1e1eb);
  --nav-item-radius: var(--radius-s, 8px);
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, #798a8e);
  --nav-tag-color-active: var(--text-muted, #6f7a88);
  --nav-tag-color-hover: var(--text-muted, #6f7a88);
  --nav-tag-radius: var(--radius-s, 8px);
  --pdf-background: var(--background-primary, #050606);
  --pdf-page-background: var(--background-primary, #050606);
  --pdf-sidebar-background: var(--background-primary, #050606);
  --pill-border-color: var(--background-modifier-border, #3b3b3e);
  --pill-border-color-hover: var(--background-modifier-border-hover, #282828);
  --pill-color: var(--text-muted, #6f7a88);
  --pill-color-hover: var(--text-normal, #e1e1eb);
  --pill-color-remove: var(--text-faint, #798a8e);
  --pill-color-remove-hover: var(--text-accent, #72c6ea);
  --popover-height: 600px;
  --popover-max-height: 100vh;
  --popover-pdf-height: 700px;
  --popover-pdf-width: 700px;
  --popover-width: 800px;
  --prompt-background: var(--background-primary, #050606);
  --prompt-border-width: var(--border-width, 2px);
  --prompt-width: 1000px;
  --radius-l: 14px;
  --radius-m: 10px;
  --radius-s: 8px;
  --raised-background: var(--blur-background, color-mix(in srgb, #193755 65%, transparent) linear-gradient(#193755, color-mix(in srgb, #193755 65%, transparent)));
  --ribbon-background: var(--background-secondary, #0a0a0b);
  --ribbon-background-collapsed: var(--background-primary, #050606);
  --scrollbar-radius: var(--radius-l, 14px);
  --search-clear-button-color: var(--text-muted, #f15b5b);
  --search-icon-color: var(--text-muted, #6f7a88);
  --search-result-background: var(--background-primary, #050606);
  --secondary: var(--text-accent, var(--color-accent-1, #72c6ea));
  --setting-group-heading-color: var(--text-normal, #e1e1eb);
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-items-background: var(--background-primary-alt, #101113);
  --setting-items-border-color: var(--background-modifier-border, #3b3b3e);
  --setting-items-radius: var(--radius-l, 14px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #6f7a88);
  --shiki-code-background: var(--code-background, #000000);
  --shiki-code-block-border-radius: var(--code-radius, 12px);
  --shiki-code-comment: var(--text-faint, #798a8e);
  --shiki-code-normal: var(--text-muted, #6f7a88);
  --shiki-code-punctuation: var(--text-muted, #6f7a88);
  --shiki-gutter-border-color: var(--background-modifier-border, #3b3b3e);
  --shiki-gutter-text-color: var(--text-faint, #798a8e);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #6f7a88);
  --shiki-highlight-neutral: var(--shiki-code-normal, #6f7a88);
  --shiki-terminal-dots-color: var(--text-faint, #798a8e);
  --slider-s-thumb-size: 18px;
  --slider-thumb-border-color: var(--background-modifier-border-hover, #da65bb);
  --slider-thumb-border-width: var(--border-width, 3px);
  --slider-thumb-height: 14px;
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --slider-thumb-width: 14px;
  --slider-thumb-y: -5px;
  --slider-track-background: var(--background-modifier-border, #176b80);
  --status-bar-background: var(--background-secondary, #0a0a0b);
  --status-bar-border-color: var(--divider-color, #3b3b3e);
  --status-bar-font-size: var(--font-ui-smaller, 13px);
  --status-bar-radius: var(--radius-m, 10px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #6f7a88);
  --suggestion-background: var(--background-primary, #050606);
  --swatch-height: 24px;
  --swatch-width: 24px;
  --tab-background-active: var(--background-primary, #050606);
  --tab-container-background: var(--background-secondary, #080808);
  --tab-curve: 0;
  --tab-divider-color: var(--background-modifier-border-hover, #352121);
  --tab-font-size: var(--font-ui-small, 0.85em);
  --tab-max-width: 15em;
  --tab-outline-color: var(--divider-color, #1f1b32);
  --tab-radius: var(--radius-s, 0);
  --tab-radius-active: 0;
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-switcher-background: var(--background-secondary, #0a0a0b);
  --tab-text-color: var(--text-faint, #718183);
  --tab-text-color-active: var(--text-muted, #a9bfc2);
  --tab-text-color-focused: var(--text-muted, #8fa2a5);
  --tab-text-color-focused-active: var(--text-muted, #58919a);
  --tab-text-color-focused-active-current: var(--text-normal, #85bfc5);
  --tab-text-color-focused-highlighted: var(--text-accent, #2c0f23);
  --table-add-button-border-color: var(--background-modifier-border, #3a3a3a);
  --table-add-button-border-width: var(--table-border-width, 2px);
  --table-border-color: var(--background-modifier-border, #3a3a3a);
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: var(--table-selection-border-color, #5fa4b0);
  --table-drag-handle-color: var(--text-faint, #c64e4e);
  --table-drag-handle-color-active: var(--text-on-accent, #ddff1b);
  --table-header-background: var(--table-background, #0f0f0f);
  --table-header-background-hover: #1b0f17;
  --table-header-border-color: var(--table-border-color, #171717);
  --table-header-color: var(--text-normal, #d6d7dc);
  --table-header-size: var(--table-text-size, 0.8em);
  --table-line-height: var(--line-height-tight, 1.4);
  --table-row-alt-background-hover: var(--table-background, #020807);
  --table-row-background-hover: var(--table-background, #020807);
  --table-selection: hsla(var(--color-accent-hsl), 0.05);
  --table-selection-border-color: var(--interactive-accent, #5fa4b0);
  --table-text-size: var(--font-text-size, 0.8em);
  --tag-color: var(--text-accent, #72c6ea);
  --tag-color-hover: var(--text-accent, #72c6ea);
  --tag-radius: 0;
  --tag-size: var(--font-smaller, 0.8em);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #66cccc));
  --text-accent: var(--color-accent-1, #72c6ea);
  --text-accent-hover: var(--color-accent-2, #66cccc);
  --text-faint: var(--color-base-50, #798a8e);
  --text-muted: var(--color-base-70, #6f7a88);
  --text-normal: var(--color-base-100, #e1e1eb);
  --text-on-accent: #dadde4;
  --titleFont: var(--font-text-theme, "Open Sans Light Obsidian", sans-serif);
  --titlebar-background: var(--background-secondary, #0a0a0b);
  --titlebar-background-focused: var(--background-secondary-alt, #1a1d20);
  --titlebar-border-color: var(--background-modifier-border, #3b3b3e);
  --titlebar-text-color: var(--text-muted, #6f7a88);
  --titlebar-text-color-focused: var(--text-normal, #e1e1eb);
  --vault-profile-color: var(--text-normal, #e1e1eb);
  --vault-profile-color-hover: var(--vault-profile-color, #e1e1eb);
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(8, 8, 8));
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(5, 6, 6));
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(10, 10, 11));
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(59, 59, 62);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(8, 8, 8));
  border-left-color: rgb(59, 59, 62);
  color: rgb(225, 225, 235);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(218, 215, 155));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(218, 215, 155) none 0px;
  text-decoration-color: rgb(218, 215, 155);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(134, 183, 240));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(134, 183, 240) none 0px;
  text-decoration-color: rgb(134, 183, 240);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(134, 183, 240));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(134, 183, 240) none 0px;
  text-decoration-color: rgb(134, 183, 240);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(218, 215, 155));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(218, 215, 155) none 0px;
  text-decoration-color: rgb(218, 215, 155);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(36, 102, 7));
  color: var(--text-normal, rgb(225, 225, 235));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(225, 225, 235) none 0px;
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body del {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(225, 225, 235) none 0px;
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(225, 225, 235));
  font-size: 12.8px;
  font-weight: 100;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(121, 138, 142);
  border-radius: 25%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(97, 134, 236));
  border-color: rgb(97, 134, 236);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(111, 122, 136));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(111, 122, 136) none 0px;
  text-decoration-color: rgb(111, 122, 136);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(191, 172, 241));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 172, 241) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(191, 172, 241);
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(158, 210, 253));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(158, 210, 253) none 0px;
  text-decoration: 1px;
  text-decoration-color: rgb(158, 210, 253);
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(244, 178, 178));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 178, 178) none 0px;
  text-decoration: 1px rgb(158, 210, 253);
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(158, 210, 253));
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body dt {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(121, 138, 142));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(19, 15, 18));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body table {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 403.438px;
  margin-right: 403.438px;
  width: 155.125px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(58, 58, 58);
  border-left-color: rgb(58, 58, 58);
  border-right-color: rgb(58, 58, 58);
  border-top-color: rgb(58, 58, 58);
  color: var(--table-text-color, rgb(225, 225, 235));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(23, 23, 23);
  border-left-color: rgb(23, 23, 23);
  border-right-color: rgb(23, 23, 23);
  border-top-color: rgb(23, 23, 23);
  color: var(--table-header-color, rgb(214, 215, 220));
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgb(15, 15, 15));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(0, 0, 0));
  border-bottom-color: rgb(59, 59, 62);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
  border-top-color: rgb(59, 59, 62);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--code-normal, rgb(255, 252, 254));
  font-family: var(--font-monospace, "??", "Source Code Pro Medium Obsidian", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 1.92px;
  padding-left: 3.84px;
  padding-right: 3.84px;
  padding-top: 1.92px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(225, 225, 235);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(111, 159, 214);
  border-left-color: rgb(111, 159, 214);
  border-right-color: rgb(111, 159, 214);
  border-top-color: rgb(111, 159, 214);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(16, 17, 19));
  border-bottom-color: rgb(111, 122, 136);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(111, 122, 136);
  border-right-color: rgb(111, 122, 136);
  border-top-color: rgb(111, 122, 136);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(225, 225, 235);
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(33, 67, 26);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(121, 138, 142);
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
  border-left-color: rgb(121, 138, 142);
  border-right-color: rgb(121, 138, 142);
  border-top-color: rgb(121, 138, 142);
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(40, 63, 66);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(40, 63, 66);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(5, 6, 6);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(5, 6, 6);
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
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
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

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
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

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(225, 225, 235);
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
  background-color: rgb(31, 47, 61);
  border-bottom-color: rgb(59, 59, 62);
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
  border-top-color: rgb(59, 59, 62);
  color: var(--text-normal, rgb(225, 225, 235));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(5, 6, 6));
  border-bottom-color: rgb(79, 192, 192);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 2px;
  border-left-color: rgb(79, 192, 192);
  border-left-width: 2px;
  border-right-color: rgb(79, 192, 192);
  border-right-width: 2px;
  border-top-color: rgb(79, 192, 192);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(225, 225, 235) none 0px;
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(225, 225, 235);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(27, 59, 69));
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(79, 192, 192);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 2px;
  border-left-color: rgb(79, 192, 192);
  border-left-width: 2px;
  border-right-color: rgb(79, 192, 192);
  border-right-width: 2px;
  border-top-color: rgb(79, 192, 192);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(10, 10, 11);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(27, 59, 69));
  border-bottom-color: rgb(225, 225, 235);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(27, 59, 69));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(139, 108, 239, 0.1));
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(114, 198, 234);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(111, 159, 214));
  font-family: var(--h1-font, "Open Sans Light Obsidian", sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(211, 223, 230));
  font-size: var(--inline-title-size, 35.2px);
  font-weight: var(--inline-title-weight, 300);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(120, 201, 136));
  font-family: var(--h2-font, "Open Sans Light Obsidian", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(211, 223, 230));
  font-family: var(--inline-title-font, "Open Sans Light Obsidian", sans-serif);
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(164, 151, 240));
  font-family: var(--h3-font, "Open Sans Light Obsidian", sans-serif);
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(194, 133, 185));
  font-family: var(--h4-font, "Open Sans Light Obsidian", sans-serif);
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(224, 122, 110));
  font-family: var(--h5-font, "Open Sans Light Obsidian", sans-serif);
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(217, 196, 122));
  font-family: var(--h6-font, "Open Sans Light Obsidian", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(59, 59, 62);
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(99, 134, 210);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(223, 223, 224));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(223, 223, 224));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(225, 225, 235);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(88, 145, 154);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(88, 145, 154);
  border-right-color: rgb(88, 145, 154);
  border-top-color: rgb(88, 145, 154);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(88, 145, 154));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(10, 10, 11));
  border-bottom-color: rgb(59, 59, 62);
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
  border-top-color: rgb(59, 59, 62);
  border-top-left-radius: 10px;
  color: var(--status-bar-text-color, rgb(111, 122, 136));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(111, 122, 136);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(223, 223, 224));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(223, 223, 224);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(223, 223, 224);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(223, 223, 224));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(88, 145, 154);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(88, 145, 154);
  border-right-color: rgb(88, 145, 154);
  border-top-color: rgb(88, 145, 154);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(88, 145, 154));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(88, 145, 154);
  stroke: rgb(88, 145, 154);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(111, 122, 136);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(111, 122, 136);
  border-right-color: rgb(111, 122, 136);
  border-top-color: rgb(111, 122, 136);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(111, 122, 136);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(121, 138, 142));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(225, 225, 235));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(10, 10, 11));
  border-color: rgb(225, 225, 235);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(23, 23, 23);
  color: var(--table-header-color, rgb(214, 215, 220));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(59, 59, 62);
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
  border-top-color: rgb(59, 59, 62);
  color: var(--text-muted, rgb(111, 122, 136));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(111, 122, 136);
  border-left-color: rgb(111, 122, 136);
  border-right-color: rgb(111, 122, 136);
  border-top-color: rgb(111, 122, 136);
  color: rgb(111, 122, 136);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(59, 59, 62);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(111, 122, 136);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(111, 122, 136);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(139, 108, 239, 0.1));
  border-radius: 0px;
  color: var(--pill-color, rgb(114, 198, 234));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(111, 122, 136);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(5, 6, 6));
  color: var(--text-normal, rgb(225, 225, 235));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(10, 10, 11));
  border-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(10, 10, 11));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(225, 225, 235);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(10, 10, 11));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(225, 225, 235));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
  color: var(--text-normal, rgb(225, 225, 235));
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(0, 0, 0));
  border-bottom-color: rgb(255, 252, 254);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 252, 254);
  border-right-color: rgb(255, 252, 254);
  border-top-color: rgb(255, 252, 254);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, rgb(255, 252, 254));
  font-family: var(--font-monospace, "??", "Source Code Pro Medium Obsidian", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  font-size: var(--code-size, 12.8px);
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body sub {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body summary {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body sup {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(139, 108, 239, 0.1));
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--tag-color, rgb(114, 198, 234));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 254;
  --accent-l: 68%;
  --accent-s: 80%;
  --background-modifier-border: var(--color-base-30, #c7c7ca);
  --background-modifier-border-focus: var(--color-base-40, #8a8a8a);
  --background-modifier-border-hover: var(--color-base-35, #a6a6a6);
  --background-modifier-form-field: var(--color-base-00, #e3edf4);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #e3edf4);
  --background-primary: var(--color-base-00, #efefe7);
  --background-primary-alt: var(--color-base-10, #f3f3f2);
  --background-secondary: var(--color-base-20, #e6e6dd);
  --background-secondary-alt: var(--color-base-05, #ececeb);
  --bases-cards-background: var(--background-primary, #efefe7);
  --bases-cards-border-width: var(--border-width, 2px);
  --bases-cards-cover-background: var(--background-primary-alt, #f3f3f2);
  --bases-cards-font-size: var(--font-smaller, 0.8em);
  --bases-cards-radius: var(--radius-m, 10px);
  --bases-embed-border-color: var(--background-modifier-border, #c7c7ca);
  --bases-embed-border-radius: var(--radius-s, 8px);
  --bases-group-heading-property-color: var(--text-muted, #5e6978);
  --bases-group-heading-property-size: var(--font-ui-smaller, 13px);
  --bases-group-heading-value-size: var(--font-smaller, 0.8em);
  --bases-table-border-color: var(--table-border-color, #c5c5c5);
  --bases-table-cell-background-active: var(--background-primary, #efefe7);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #f3f3f2);
  --bases-table-cell-background-selected: var(--table-selection, hsla(254, 80%, 68%, 0.05));
  --bases-table-column-border-width: var(--border-width, 2px);
  --bases-table-container-border-radius: var(--radius-s, 8px);
  --bases-table-container-border-width: var(--border-width, 2px);
  --bases-table-font-size: var(--font-smaller, 0.8em);
  --bases-table-group-background: var(--background-primary-alt, #f3f3f2);
  --bases-table-header-background: var(--background-primary, #efefe7);
  --bases-table-header-background-hover: var(--background-modifier-hover, #e6f3f6);
  --bases-table-header-color: var(--text-muted, #5e6978);
  --bases-table-row-background-hover: var(--table-row-background-hover, #dae6d8);
  --bases-table-row-border-width: var(--border-width, 2px);
  --bases-table-summary-background: var(--background-primary, #efefe7);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #e6f3f6);
  --blockquote-background-color: #f6f2f6;
  --blockquote-border-color: var(--interactive-accent, #8b62b5);
  --blockquote-border-thickness: 4px;
  --blockquote-color: #4c4049;
  --bodyFont: var(--font-text-theme, "Open Sans Regular Obsidian", sans-serif);
  --bold-color: #754b79;
  --border-width: 2px;
  --button-radius: var(--input-radius, 0);
  --callout-radius: var(--radius-s, 8px);
  --canvas-background: var(--background-primary, #efefe7);
  --canvas-card-label-color: var(--text-faint, #7b8b8f);
  --canvas-controls-radius: var(--radius-s, 8px);
  --caret-color: var(--text-normal, #1f7a1f);
  --checkbox-border-color: var(--text-faint, #7b8b8f);
  --checkbox-border-color-hover: var(--text-muted, #5e6978);
  --checkbox-color: var(--interactive-accent, #6186ec);
  --checkbox-color-hover: var(--interactive-accent-hover, #e9626d);
  --checkbox-margin-inline-start: 0;
  --checkbox-marker-color: var(--background-primary, #efefe7);
  --checkbox-radius: var(--radius-s, 25%);
  --checkbox-size: var(--font-text-size, 1.2em);
  --checklist-done-color: var(--text-muted, #283f42);
  --checklist-done-decoration: none;
  --clickable-icon-radius: var(--radius-s, 0);
  --code-background: var(--background-primary-alt, #fefdf6);
  --code-border-color: var(--background-modifier-border, #c7c7ca);
  --code-bracket-background: var(--background-modifier-hover, #e6f3f6);
  --code-comment: var(--text-faint, #091c00);
  --code-function: var(--color-yellow, #23800b);
  --code-important: var(--color-orange, #7e6909);
  --code-keyword: var(--color-pink, #01818f);
  --code-normal: var(--text-normal, #0c0c0c);
  --code-operator: var(--color-red, #950007);
  --code-property: var(--color-cyan, #00339f);
  --code-punctuation: var(--text-muted, #1a1919);
  --code-radius: var(--radius-s, 0px);
  --code-size: var(--font-smaller, 0.8em);
  --code-string: var(--color-green, #845b02);
  --code-tag: var(--color-red, #193164);
  --code-value: var(--color-purple, #4e1d5f);
  --collapse-icon-color: var(--text-faint, #7b8b8f);
  --collapse-icon-color-collapsed: var(--text-accent, #007ab3);
  --dark: var(--text-normal, var(--color-base-100, #282828));
  --darkgray: var(--text-normal, var(--color-base-100, #282828));
  --divider-color: var(--background-modifier-border, #c7c7ca);
  --divider-color-hover: var(--interactive-accent, #9fc593);
  --dropdown-background: var(--interactive-normal, #c6def5);
  --dropdown-background-hover: var(--interactive-hover, #f7d7e9);
  --file-header-background: var(--background-primary, #efefe7);
  --file-header-background-focused: var(--background-primary, #efefe7);
  --file-header-border: var(--border-width, none) solid transparent;
  --file-header-font: var(--font-interface, "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 0.8rem);
  --file-line-width: 1000px;
  --flair-background: var(--interactive-normal, #c6def5);
  --flair-color: var(--text-normal, #282828);
  --font-interface-theme: "Open Sans Regular Obsidian", sans-serif;
  --font-mermaid: var(--font-text, "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
  --font-smaller: 0.8em;
  --font-smallest: 0.65em;
  --font-text-theme: "Open Sans Regular Obsidian", sans-serif;
  --font-ui-larger: 18px;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: var(--metadata-divider-color, #c7c7ca);
  --footnote-divider-width: var(--border-width, 2px);
  --footnote-id-color: var(--text-muted, #5e6978);
  --footnote-id-color-no-occurrences: var(--text-faint, #7b8b8f);
  --footnote-input-background-active: var(--metadata-input-background-active, #e6f3f6);
  --footnote-line-height: var(--line-height-normal, 1.61);
  --footnote-radius: var(--radius-s, 8px);
  --footnote-size: var(--font-smaller, 0.8em);
  --graph-node: var(--text-muted, #9a216e);
  --graph-node-attachment: var(--color-yellow, #00b3cc);
  --graph-node-focused: var(--text-accent, #0ca332);
  --graph-node-tag: var(--color-green, #a04a7d);
  --graph-node-unresolved: var(--text-faint, #e0d058);
  --graph-text: var(--text-normal, #282828);
  --gray: var(--text-muted, var(--color-base-70, #5e6978));
  --h1-color: #2b69b1;
  --h1-font: "Open Sans Regular Obsidian", sans-serif;
  --h1-size: 1.9em;
  --h1-weight: 400;
  --h2-color: #349b60;
  --h2-font: "Open Sans Regular Obsidian", sans-serif;
  --h2-size: 1.75em;
  --h2-weight: 400;
  --h3-color: #6655c9;
  --h3-font: "Open Sans Regular Obsidian", sans-serif;
  --h3-size: 1.61em;
  --h3-weight: 400;
  --h4-color: #a44f8a;
  --h4-font: "Open Sans Regular Obsidian", sans-serif;
  --h4-size: 1.45em;
  --h4-weight: 400;
  --h5-color: #c64539;
  --h5-font: "Open Sans Regular Obsidian", sans-serif;
  --h5-line-height: var(--line-height-normal, 1.61);
  --h5-size: 1.33em;
  --h5-weight: 400;
  --h6-color: #a68a2d;
  --h6-font: "Open Sans Regular Obsidian", sans-serif;
  --h6-line-height: var(--line-height-normal, 1.61);
  --h6-size: 1.23em;
  --h6-weight: 400;
  --headerFont: var(--font-text-theme, "Open Sans Regular Obsidian", sans-serif);
  --heading-formatting: var(--text-faint, #7b8b8f);
  --hr-color: var(--background-modifier-border, #5e6b72);
  --hr-thickness: 1px;
  --icon-color: var(--text-muted, #075661);
  --icon-color-active: var(--text-accent, #007ab3);
  --icon-color-focused: var(--text-normal, #1ebbd3);
  --icon-color-hover: var(--text-muted, #32a732);
  --icon-opacity: 1;
  --indentation-guide-editing-indent: 1.1em;
  --indentation-guide-source-indent: 0.85em;
  --indentation-guide-width-active: var(--border-width, 2px);
  --inline-title-color: var(--h1-color, #354247);
  --inline-title-font: var(--h1-font, "Open Sans Regular Obsidian", sans-serif);
  --inline-title-line-height: var(--h1-line-height, 1.61);
  --inline-title-size: var(--h1-size, 2.2em);
  --inline-title-weight: var(--h1-weight, 400);
  --input-border-width: var(--border-width, 2px);
  --input-date-separator: var(--text-faint, #7b8b8f);
  --input-placeholder-color: var(--text-faint, #7b8b8f);
  --interactive-accent: var(--color-accent-1, #9fc593);
  --interactive-accent-hover: var(--color-accent-2, #f5d7d7);
  --interactive-accent-hsl: var(--color-accent-hsl, 254, 80%, 68%);
  --interactive-hover: var(--color-base-10, #f7d7e9);
  --interactive-normal: var(--color-base-00, #c6def5);
  --italic-color: #1e4a7d;
  --light: var(--background-primary, var(--color-base-00, #efefe7));
  --lightgray: var(--background-secondary, var(--color-base-20, #e6e6dd));
  --line-height-normal: 1.61;
  --line-height-tight: 1.4;
  --link-color: var(--text-accent, #016bb8);
  --link-color-hover: var(--text-accent-hover, #028e8e);
  --link-decoration: none;
  --link-decoration-thickness: 1px;
  --link-external-color: var(--text-accent, #bfacf1);
  --link-external-color-hover: var(--text-accent-hover, #d0839e);
  --link-unresolved-color: var(--text-accent, #853232);
  --link-unresolved-opacity: 0.9;
  --list-bullet-size: 0.31em;
  --list-indent-editing: 1em;
  --list-indent-source: 1em;
  --list-marker-color: var(--text-faint, #3693c2);
  --list-marker-color-collapsed: var(--text-accent, #2a8f2a);
  --list-marker-color-hover: var(--text-muted, #b338a6);
  --list-spacing: 0.12em;
  --menu-background: var(--background-secondary, #e6e6dd);
  --menu-border-color: var(--background-modifier-border-hover, #a6a6a6);
  --menu-border-width: var(--border-width, 2px);
  --menu-radius: var(--radius-m, 10px);
  --metadata-border-color: var(--background-modifier-border, #c7c7ca);
  --metadata-divider-color: var(--background-modifier-border, #c7c7ca);
  --metadata-gap: 1px;
  --metadata-input-background-active: var(--background-modifier-hover, #e6f3f6);
  --metadata-input-font: var(--font-interface, "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-font-size: var(--font-smaller, 0.8em);
  --metadata-input-text-color: var(--text-normal, #282828);
  --metadata-label-background-active: var(--background-modifier-hover, #e6f3f6);
  --metadata-label-font: var(--font-interface, "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font-size: var(--font-smaller, 0.8em);
  --metadata-label-text-color: var(--text-muted, #2f2f30);
  --metadata-label-text-color-hover: var(--text-muted, #5e6978);
  --metadata-label-width: 8.5em;
  --metadata-property-background: #eae9e0;
  --metadata-property-background-active: var(--background-modifier-hover, #e6f3f6);
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0px;
  --metadata-property-radius-hover: 0;
  --metadata-sidebar-input-font-size: var(--font-ui-small, 0.8em);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 0.8em);
  --modal-background: var(--background-primary, #efefe7);
  --modal-border-width: var(--border-width, 2px);
  --modal-community-sidebar-width: 290px;
  --modal-max-width: 1000px;
  --modal-radius: var(--radius-l, 0px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #2e6c28);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #7b8b8f);
  --nav-heading-color: var(--text-normal, #282828);
  --nav-heading-color-collapsed: var(--text-faint, #7b8b8f);
  --nav-heading-color-collapsed-hover: var(--text-muted, #5e6978);
  --nav-heading-color-hover: var(--text-normal, #282828);
  --nav-indentation-guide-color: var(--indentation-guide-color, #4266a1);
  --nav-item-background-active: var(--background-modifier-hover, #f0e0e0);
  --nav-item-background-hover: var(--background-modifier-hover, #e0f0e3);
  --nav-item-color: var(--text-muted, #2c2c2d);
  --nav-item-color-active: var(--text-normal, #000000);
  --nav-item-color-highlighted: var(--text-accent, #007ab3);
  --nav-item-color-hover: var(--text-normal, #000000);
  --nav-item-color-selected: var(--text-normal, #282828);
  --nav-item-radius: var(--radius-s, 8px);
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, #7b8b8f);
  --nav-tag-color-active: var(--text-muted, #5e6978);
  --nav-tag-color-hover: var(--text-muted, #5e6978);
  --nav-tag-radius: var(--radius-s, 8px);
  --pdf-background: var(--background-primary, #efefe7);
  --pdf-page-background: var(--background-primary, #efefe7);
  --pdf-sidebar-background: var(--background-primary, #efefe7);
  --pill-border-color: var(--background-modifier-border, #c7c7ca);
  --pill-border-color-hover: var(--background-modifier-border-hover, #a6a6a6);
  --pill-border-width: var(--border-width, 2px);
  --pill-color: var(--text-muted, #5e6978);
  --pill-color-hover: var(--text-normal, #282828);
  --pill-color-remove: var(--text-faint, #7b8b8f);
  --pill-color-remove-hover: var(--text-accent, #007ab3);
  --popover-height: 600px;
  --popover-max-height: 100vh;
  --popover-pdf-height: 700px;
  --popover-pdf-width: 700px;
  --popover-width: 800px;
  --prompt-background: var(--background-primary, #efefe7);
  --prompt-border-width: var(--border-width, 2px);
  --prompt-width: 1000px;
  --radius-l: 14px;
  --radius-m: 10px;
  --radius-s: 8px;
  --raised-background: var(--blur-background, color-mix(in srgb, #efefe7 65%, transparent) linear-gradient(#efefe7, color-mix(in srgb, #efefe7 65%, transparent)));
  --ribbon-background: var(--background-secondary, #e6e6dd);
  --ribbon-background-collapsed: var(--background-primary, #efefe7);
  --scrollbar-radius: var(--radius-l, 14px);
  --search-clear-button-color: var(--text-muted, #d64c4c);
  --search-icon-color: var(--text-muted, #5e6978);
  --search-result-background: var(--background-primary, #efefe7);
  --secondary: var(--text-accent, var(--color-accent, #007ab3));
  --setting-group-heading-color: var(--text-normal, #282828);
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-items-background: var(--background-primary-alt, #f3f3f2);
  --setting-items-border-color: var(--background-modifier-border, #c7c7ca);
  --setting-items-radius: var(--radius-l, 14px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #5e6978);
  --shiki-code-background: var(--code-background, #fefdf6);
  --shiki-code-block-border-radius: var(--code-radius, 0px);
  --shiki-code-comment: var(--text-faint, #7b8b8f);
  --shiki-code-normal: var(--text-muted, #5e6978);
  --shiki-code-punctuation: var(--text-muted, #5e6978);
  --shiki-gutter-border-color: var(--background-modifier-border, #c7c7ca);
  --shiki-gutter-border-width: var(--border-width, 2px);
  --shiki-gutter-text-color: var(--text-faint, #7b8b8f);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #5e6978);
  --shiki-highlight-neutral: var(--shiki-code-normal, #5e6978);
  --shiki-terminal-dots-color: var(--text-faint, #7b8b8f);
  --slider-s-thumb-size: 18px;
  --slider-thumb-border-color: var(--background-modifier-border-hover, #a43d82);
  --slider-thumb-border-width: var(--border-width, 3px);
  --slider-thumb-height: 14px;
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --slider-thumb-width: 14px;
  --slider-thumb-y: -5px;
  --slider-track-background: var(--background-modifier-border, #4a98ac);
  --status-bar-background: var(--background-secondary, #e6e6dd);
  --status-bar-border-color: var(--divider-color, #c7c7ca);
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 2px 0 0 2px);
  --status-bar-font-size: var(--font-ui-smaller, 13px);
  --status-bar-radius: var(--radius-m, 10px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #5e6978);
  --suggestion-background: var(--background-primary, #efefe7);
  --swatch-height: 24px;
  --swatch-width: 24px;
  --tab-background-active: var(--background-primary, #efefe7);
  --tab-container-background: var(--background-secondary, #ebe7db);
  --tab-curve: 0;
  --tab-divider-color: var(--background-modifier-border-hover, #d8c9c9);
  --tab-font-size: var(--font-ui-small, 0.85em);
  --tab-max-width: 15em;
  --tab-outline-color: var(--divider-color, #c4bcd6);
  --tab-radius: var(--radius-s, 0);
  --tab-radius-active: 0;
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-switcher-background: var(--background-secondary, #e6e6dd);
  --tab-text-color: var(--text-faint, #6a7779);
  --tab-text-color-active: var(--text-muted, #2c3b3d);
  --tab-text-color-focused: var(--text-muted, #374547);
  --tab-text-color-focused-active: var(--text-muted, #14525a);
  --tab-text-color-focused-active-current: var(--text-normal, #1a6b73);
  --tab-text-color-focused-highlighted: var(--text-accent, #a13563);
  --table-add-button-border-color: var(--background-modifier-border, #c5c5c5);
  --table-add-button-border-width: var(--table-border-width, 2px);
  --table-border-color: var(--background-modifier-border, #c5c5c5);
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: var(--table-selection-border-color, #2a91a1);
  --table-drag-handle-color: var(--text-faint, #aa3535);
  --table-drag-handle-color-active: var(--text-on-accent, #9eb000);
  --table-header-background: var(--table-background, #e3e3e3);
  --table-header-background-hover: #f0e6ef;
  --table-header-border-color: var(--table-border-color, #d9d9d9);
  --table-header-color: var(--text-normal, #2e2f33);
  --table-header-size: var(--table-text-size, 0.8em);
  --table-line-height: var(--line-height-tight, 1.4);
  --table-row-alt-background-hover: var(--table-background, #dae6d8);
  --table-row-background-hover: var(--table-background, #dae6d8);
  --table-selection: hsla(var(--color-accent-hsl), 0.05);
  --table-selection-border-color: var(--interactive-accent, #2a91a1);
  --table-text-size: var(--font-text-size, 0.8em);
  --tag-color: var(--text-accent, #007ab3);
  --tag-color-hover: var(--text-accent, #007ab3);
  --tag-radius: 0;
  --tag-size: var(--font-smaller, 0.8em);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #009999));
  --text-accent: var(--color-accent, #007ab3);
  --text-accent-hover: var(--color-accent-2, #009999);
  --text-faint: var(--color-base-50, #7b8b8f);
  --text-muted: var(--color-base-70, #5e6978);
  --text-normal: var(--color-base-100, #282828);
  --text-on-accent: #1c1f24;
  --titleFont: var(--font-text-theme, "Open Sans Regular Obsidian", sans-serif);
  --titlebar-background: var(--background-secondary, #e6e6dd);
  --titlebar-background-focused: var(--background-secondary-alt, #ececeb);
  --titlebar-border-color: var(--background-modifier-border, #c7c7ca);
  --titlebar-text-color: var(--text-muted, #5e6978);
  --titlebar-text-color-focused: var(--text-normal, #282828);
  --vault-profile-color: var(--text-normal, #282828);
  --vault-profile-color-hover: var(--vault-profile-color, #282828);
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(235, 231, 219));
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(239, 239, 231));
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(230, 230, 221));
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(199, 199, 202);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(235, 231, 219));
  border-left-color: rgb(199, 199, 202);
  color: rgb(40, 40, 40);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(117, 75, 121));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(117, 75, 121) none 0px;
  text-decoration-color: rgb(117, 75, 121);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(30, 74, 125));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 74, 125) none 0px;
  text-decoration-color: rgb(30, 74, 125);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(30, 74, 125));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 74, 125) none 0px;
  text-decoration-color: rgb(30, 74, 125);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(117, 75, 121));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(117, 75, 121) none 0px;
  text-decoration-color: rgb(117, 75, 121);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(194, 231, 180));
  color: var(--text-normal, rgb(40, 40, 40));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(40, 40, 40) none 0px;
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body del {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(40, 40, 40) none 0px;
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(40, 40, 40));
  font-size: 12.8px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(123, 139, 143);
  border-radius: 25%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(97, 134, 236));
  border-color: rgb(97, 134, 236);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(94, 105, 120));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(94, 105, 120) none 0px;
  text-decoration-color: rgb(94, 105, 120);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(191, 172, 241));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 172, 241) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(191, 172, 241);
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(1, 107, 184));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(1, 107, 184) none 0px;
  text-decoration: 1px;
  text-decoration-color: rgb(1, 107, 184);
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(133, 50, 50));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(133, 50, 50) none 0px;
  text-decoration: 1px rgb(106, 166, 216);
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(106, 166, 216));
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body dt {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body ol > li {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body ul > li {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(123, 139, 143));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(246, 242, 246));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body table {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 401.078px;
  margin-right: 401.094px;
  width: 159.828px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(197, 197, 197);
  border-left-color: rgb(197, 197, 197);
  border-right-color: rgb(197, 197, 197);
  border-top-color: rgb(197, 197, 197);
  color: var(--table-text-color, rgb(40, 40, 40));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: var(--table-header-color, rgb(46, 47, 51));
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgb(227, 227, 227));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(254, 253, 246));
  border-bottom-color: rgb(199, 199, 202);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(199, 199, 202);
  border-right-color: rgb(199, 199, 202);
  border-top-color: rgb(199, 199, 202);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--code-normal, rgb(12, 12, 12));
  font-family: var(--font-monospace, "??", "Source Code Pro Medium Obsidian", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 1.92px;
  padding-left: 3.84px;
  padding-right: 3.84px;
  padding-top: 1.92px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(254, 253, 246));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body figcaption {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(43, 105, 177);
  border-left-color: rgb(43, 105, 177);
  border-right-color: rgb(43, 105, 177);
  border-top-color: rgb(43, 105, 177);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(243, 243, 242));
  border-bottom-color: rgb(94, 105, 120);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(94, 105, 120);
  border-right-color: rgb(94, 105, 120);
  border-top-color: rgb(94, 105, 120);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(159, 197, 147);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(123, 139, 143);
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
  border-left-color: rgb(123, 139, 143);
  border-right-color: rgb(123, 139, 143);
  border-top-color: rgb(123, 139, 143);
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(40, 63, 66);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(40, 63, 66);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 239, 231);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 239, 231);
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

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
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

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
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

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(40, 40, 40);
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
  background-color: rgb(227, 237, 244);
  border-bottom-color: rgb(199, 199, 202);
  border-bottom-width: 2px;
  border-left-color: rgb(199, 199, 202);
  border-left-width: 2px;
  border-right-color: rgb(199, 199, 202);
  border-right-width: 2px;
  border-top-color: rgb(199, 199, 202);
  border-top-width: 2px;
  color: var(--text-normal, rgb(40, 40, 40));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(239, 239, 231));
  border-bottom-color: rgb(42, 145, 145);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 2px;
  border-left-color: rgb(42, 145, 145);
  border-left-width: 2px;
  border-right-color: rgb(42, 145, 145);
  border-right-width: 2px;
  border-top-color: rgb(42, 145, 145);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(40, 40, 40) none 0px;
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(230, 243, 246));
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(42, 145, 145);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 2px;
  border-left-color: rgb(42, 145, 145);
  border-left-width: 2px;
  border-right-color: rgb(42, 145, 145);
  border-right-width: 2px;
  border-top-color: rgb(42, 145, 145);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(230, 230, 221);
  border-bottom-width: 2px;
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(230, 243, 246));
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(230, 243, 246));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(139, 108, 239, 0.1));
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(0, 122, 179);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(43, 105, 177));
  font-family: var(--h1-font, "Open Sans Regular Obsidian", sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(53, 66, 71));
  font-size: var(--inline-title-size, 35.2px);
  font-weight: var(--inline-title-weight, 400);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(52, 155, 96));
  font-family: var(--h2-font, "Open Sans Regular Obsidian", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(53, 66, 71));
  font-family: var(--inline-title-font, "Open Sans Regular Obsidian", sans-serif);
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(102, 85, 201));
  font-family: var(--h3-font, "Open Sans Regular Obsidian", sans-serif);
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(164, 79, 138));
  font-family: var(--h4-font, "Open Sans Regular Obsidian", sans-serif);
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(198, 69, 57));
  font-family: var(--h5-font, "Open Sans Regular Obsidian", sans-serif);
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(166, 138, 45));
  font-family: var(--h6-font, "Open Sans Regular Obsidian", sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(199, 199, 202);
  border-left-color: rgb(199, 199, 202);
  border-right-color: rgb(199, 199, 202);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(66, 102, 161);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(44, 44, 45));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(44, 44, 45));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(40, 40, 40);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(7, 86, 97);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(7, 86, 97);
  border-right-color: rgb(7, 86, 97);
  border-top-color: rgb(7, 86, 97);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(7, 86, 97));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(230, 230, 221));
  border-bottom-color: rgb(199, 199, 202);
  border-left-color: rgb(199, 199, 202);
  border-left-width: 2px;
  border-right-color: rgb(199, 199, 202);
  border-top-color: rgb(199, 199, 202);
  border-top-left-radius: 10px;
  border-top-width: 2px;
  color: var(--status-bar-text-color, rgb(94, 105, 120));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(94, 105, 120);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(44, 44, 45));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(44, 44, 45);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(44, 44, 45);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(44, 44, 45));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(7, 86, 97);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(7, 86, 97);
  border-right-color: rgb(7, 86, 97);
  border-top-color: rgb(7, 86, 97);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(7, 86, 97));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(7, 86, 97);
  stroke: rgb(7, 86, 97);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(94, 105, 120);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(94, 105, 120);
  border-right-color: rgb(94, 105, 120);
  border-top-color: rgb(94, 105, 120);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(94, 105, 120);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(123, 139, 143));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(40, 40, 40));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(239, 239, 231));
  border-color: rgb(40, 40, 40);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(217, 217, 217);
  color: var(--table-header-color, rgb(46, 47, 51));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(199, 199, 202);
  border-left-color: rgb(199, 199, 202);
  border-right-color: rgb(199, 199, 202);
  border-top-color: rgb(199, 199, 202);
  color: var(--text-muted, rgb(94, 105, 120));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(94, 105, 120);
  border-left-color: rgb(94, 105, 120);
  border-right-color: rgb(94, 105, 120);
  border-top-color: rgb(94, 105, 120);
  color: rgb(94, 105, 120);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(199, 199, 202);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(94, 105, 120);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(94, 105, 120);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(139, 108, 239, 0.1));
  border-radius: 0px;
  color: var(--pill-color, rgb(0, 122, 179));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(94, 105, 120);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(239, 239, 231));
  color: var(--text-normal, rgb(40, 40, 40));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(230, 230, 221));
  border-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(239, 239, 231));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(40, 40, 40);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(230, 230, 221));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(40, 40, 40));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(47, 47, 48);
  border-left-color: rgb(47, 47, 48);
  border-right-color: rgb(47, 47, 48);
  border-top-color: rgb(47, 47, 48);
  color: var(--text-normal, rgb(47, 47, 48));
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(254, 253, 246));
  border-bottom-color: rgb(12, 12, 12);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(12, 12, 12);
  border-right-color: rgb(12, 12, 12);
  border-top-color: rgb(12, 12, 12);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, rgb(12, 12, 12));
  font-family: var(--font-monospace, "??", "Source Code Pro Medium Obsidian", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  font-size: var(--code-size, 12.8px);
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body sub {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body summary {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body sup {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(139, 108, 239, 0.1));
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--tag-color, rgb(0, 122, 179));
}`,
  },
  classSettings: {
    "arzaba-ivy": {
      dark: `.theme-dark, .theme-light {
/*Typography*/
--font-text-theme: "Open Sans Light Obsidian", sans-serif;
--font-interface-theme: "Open Sans Light Obsidian", sans-serif;
--font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
--inline-title-font: "Open Sans Light Obsidian", sans-serif;
--h1-font: "Open Sans Light Obsidian", sans-serif;
--h2-font: "Open Sans Light Obsidian", sans-serif;
--h3-font: "Open Sans Light Obsidian", sans-serif;
--h4-font: "Open Sans Light Obsidian", sans-serif;
--h5-font: "Open Sans Light Obsidian", sans-serif;
--h6-font: "Open Sans Light Obsidian", sans-serif;
--font-text-size: 22px;
--font-smallest: 0.65em;
--font-smaller: 0.8em;
--font-small: 0.933em;
--font-weight: 400;
--bold-modifier: 200;
--bold-weight: 700;
--line-height-normal: 1.61;
--line-height-tight: 1.4;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
--font-ui-medium: 16px;
--font-ui-larger: 18px;
--radius-s: 8px;
--radius-m: 10px;
--radius-l: 14px;
--radius-xl: 16px;
/* Main Colors */
--accent-h: 254;
--accent-s: 80%;
--accent-l: 68%;
--background-primary: #050606;
--background-primary-alt: #101113;
--background-secondary: #0a0a0b;
--background-secondary-alt: #1a1d20;
--background-modifier-hover: #1b3b45;
--background-modifier-active-hover: #2c2c32;
--background-modifier-border: #3b3b3e;
--background-modifier-border-hover: #282828;
--background-modifier-border-focus: #282828;
--background-modifier-form-field: #1f2f3d;
--interactive-normal: #193755;
--interactive-hover: #2c0f23;
--interactive-accent: #21431a;
--interactive-accent-hover: #602e2e;
--caret-color: #6cda6c;
--bold-color: #dad79b;
--italic-color: #86b7f0;
--text-highlight-bg: #246607;
--text-normal: #e1e1eb;
--text-muted: #6f7a88;
--text-faint: #798a8e;
--text-on-accent: #dadde4;
--text-accent: #72c6ea;
--text-accent-hover: #66cccc;
--text-selection: #32537b;
/* Headers */
--inline-title-color: #d3dfe6;
--inline-title-line-height: 1.61;
--inline-title-size: 2.2em;
--inline-title-weight: 300;
--h1-color: #6f9fd6;
--h2-color: #78c988;
--h3-color: #a497f0;
--h4-color: #c285b9;
--h5-color: #e07a6e;
--h6-color: #d9c47a;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.23em;
--h1-weight: 400;
--h2-weight: 400;
--h3-weight: 400;
--h4-weight: 400;
--h5-weight: 400;
--h6-weight: 400;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 1000px;
--file-folding-offset: 24px;
--hr-color: #637884;
--hr-thickness: 1px;
--border-width: 1px;
--tag-background-hover: #312c47;
--tag-radius: 0;
--button-radius: 0;
--search-clear-button-color: #f15b5b;
/* Links */
--link-color: #9ed2fd;
--link-color-hover: #69d1d1;
--link-unresolved-color: #f4b2b2;
--link-unresolved-decoration-color: #9ed2fd;
--link-unresolved-opacity: 0.9;
--link-decoration-thickness: 1px;
--link-decoration: none;
--link-external-color: #bfacf1;
--link-external-color-hover: #d0839e;
--link-external-decoration: underline;
--link-external-decoration-hover: underline;
/* Lists */
--list-indent: 2.8em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.12em;
--list-marker-color: #70b5d6;
--list-marker-color-hover: #d43dca;
--list-marker-color-collapsed: #35b035;
--list-bullet-size: 0.31em;
/* Blockquote */
--blockquote-background-color: #130f12;
--blockquote-border-thickness: 4px;
--blockquote-border-color: #bd95e6;
--blockquote-color: #e4d8e3;
/* Code */
--code-background: #000000;
--code-size: 0.8em;
--code-normal: #fffcfe;
--code-comment: #8a8a8a;
--code-function: #96cf70;
--code-important: #e4d386;
--code-keyword: #56B6C2;
--code-operator: #e9626d;
--code-property: #6186ec;
--code-punctuation: #e2e8ff;
--code-string: #E5C07B;
--code-tag: #6186ec;
--code-value: #d66af7;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 25%;
--checkbox-size: 1.2em;
--checkbox-marker-color: var(--background-primary);
--checkbox-color: #6186ec;
--checkbox-color-hover: #e9626d;
--checkbox-border-color: var(--text-faint);
--checkbox-border-color-hover: var(--text-muted);
--checkbox-margin-inline-start: 0;
--checklist-done-decoration: none;
--checklist-done-color: #283f42;
/* Tables */
--table-white-space: break-spaces;
--table-background: transparent;
--table-drag-handle-background: transparent;
--table-add-button-background: transparent;
--table-text-color: inherit;
--table-header-background: #0f0f0f;
--table-header-color: #d6d7dc;
--table-border-color: #3a3a3a;
--table-header-border-color: #171717;
--table-header-background-hover: #1b0f17;
--table-row-background-hover: #020807;
--table-row-alt-background-hover: #020807;
--table-selection-border-color: #5fa4b0;
--table-drag-handle-background-active: #5fa4b0;
--table-drag-handle-color: #c64e4e;
--table-drag-handle-color-active: #ddff1b;
--table-add-button-border-color: #3a3a3a;
--table-selection: hsla(var(--color-accent-hsl), 0.05);
--table-selection-blend-mode: var(--highlight-mix-blend-mode);
--table-border-width: 1px;
--table-header-border-width: 1px;
--table-header-font: inherit;
--table-header-size: 0.8em;
--table-text-size: 0.8em;
--table-column-min-width: 3ch;
--table-column-max-width: none;
--table-column-first-border-width: 1px;
--table-column-last-border-width: 1px;
--table-row-last-border-width: 1px;
--table-add-button-border-width: 2px;
--table-selection-border-width: 2px;
--table-selection-border-radius: 4px;
--table-cell-vertical-alignment: top;
--table-header-weight: calc(var(--font-weight) + var(--bold-modifier));
--table-line-height: var(--line-height-tight);
/* Tabs */
--tab-background-active: #050606;
--tab-text-color: #718183;
--tab-text-color-active: #a9bfc2;
--tab-text-color-focused: #8fa2a5;
--tab-text-color-focused-active: #58919a;
--tab-text-color-focused-highlighted: #2c0f23;
--tab-text-color-focused-active-current: #85bfc5;
--tab-font-size: 0.85em;
--tab-container-background: #080808;
--tab-divider-color: #352121;
--tab-outline-color: #1f1b32;
--tab-curve: 0;
--tab-radius: 0;
--tab-radius-active: 0;
--tab-max-width: 15em;
/* Metadata */
--metadata-label-text-color: #e1e1eb;
--metadata-label-width: 8.5em;
--metadata-divider-width: 0;
--metadata-gap: 1px;
--metadata-property-radius: 0;
--metadata-property-radius-hover: 0;
--metadata-property-radius-focus: 0px;
--metadata-property-background: #050606;
--metadata-property-background-hover: transparent;
--metadata-label-font-size: 0.8em;
--metadata-input-font-size: 0.8em;
--metadata-sidebar-label-font-size: 0.8em;
--metadata-sidebar-input-font-size: 0.8em;
/* Graph View */
--graph-node: #9b8c06;
--graph-line: #2979ff;
--graph-node-unresolved: #9f297b;
--graph-node-focused: #33ff57;
--graph-node-tag: #c072a1;
--graph-node-attachment: #00e5ff;
/* UI Icons */
--icon-color: #58919a;
--icon-color-hover: #8bb188;
--icon-color-focused: #7ad67f;
--icon-opacity: 1;
--icon-opacity-hover: 1;
--icon-opacity-active: 1;
--clickable-icon-radius: 0;
/* Swatch */
--swatch-radius: 14px;
--swatch-height: 24px;
--swatch-width: 24px;
--swatch-shadow: inset 0 0 0 2px #000001;
/* Indentation */
--indentation-guide-width: 1px;
--indentation-guide-width-active: 2px;
--indentation-guide-color: #245f5f;
--indentation-guide-color-active: #5a245f;
--indentation-guide-editing-indent: 1.1em;
--indentation-guide-reading-indent: -0.85em;
--indentation-guide-source-indent: 0.85em;
/* Navigation */
--nav-item-color: #dfdfe0;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #1d2d1f;
--nav-item-background-active: #2d1d1d;
--nav-item-white-space: pre;
--nav-indentation-guide-width: 1px;
--nav-indentation-guide-color: #6386d2;
--nav-collapse-icon-color: #408b39;
/* Popover (Hover Links) */
--popover-width: 800px;
--popover-height: 600px;
--popover-max-height: 100vh;
--popover-pdf-width: 700px;
--popover-pdf-height: 700px;
/* Prompt (Command Palette) */
--prompt-input-height: 40px;
--prompt-width: 1000px;
--prompt-border-width: 2px;
--prompt-border-color: #4fc0c0;
/* Modal */
--modal-width: 90vw;
--modal-height: 85vh;
--modal-max-width: 1000px;
--modal-border-color: #4fc0c0;
--modal-radius: 0px;
--modal-border-width: 2px;
--modal-community-sidebar-width: 290px;
/* Slider */
--slider-thumb-border-width: 3px;
--slider-thumb-border-color: #da65bb;
--slider-thumb-height: 14px;
--slider-thumb-width: 14px;
--slider-thumb-y: -5px;
--slider-thumb-radius: 50%;
--slider-s-thumb-size: 18px;
--slider-s-thumb-position: -5px;
--slider-track-background: #176b80;
--slider-track-height: 3px;
/* Dialog */
--dialog-width: 560px;
--dialog-max-width: 80vw;
--dialog-max-height: 85vh;
--drag-ghost-background: rgba(0, 0, 0, 0.85);
--drag-ghost-text-color: #fff;
}

.theme-light, .theme-dark {
/*Typography*/
--font-text-theme: "Quicksand Obsidian", sans-serif;
--font-interface-theme: "Playwrite DE Grund Obsidian", serif;
--font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
--inline-title-font: "Playwrite DE Grund Obsidian", sans-serif;
--h1-font: "Playwrite DE Grund Obsidian", serif;
--h2-font: "Playwrite DE Grund Obsidian", serif;
--h3-font: "Playwrite DE Grund Obsidian", serif;
--h4-font: "Playwrite DE Grund Obsidian", serif;
--h5-font: "Playwrite DE Grund Obsidian", serif;
--h6-font: "Playwrite DE Grund Obsidian", serif;
--font-text-size: 20px;
--font-smallest: 0.65em;
--font-smaller: 0.8em;
--font-small: 0.933em;
--line-height-normal: 1.61;
--line-height-tight: 1.4;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
--font-ui-medium: 16px;
--font-ui-larger: 18px;
/* Headers */
--inline-title-line-height: 1.6;
--inline-title-size: 44px;
--h1-size: 1.8em;
--h2-size: 1.67em;
--h3-size: 1.52em;
--h4-size: 1.3em;
--h5-size: 1.1em;
--h6-size: 0.9em;
/* Other */
--file-line-width: 820px;
--hr-thickness: 2px;
--border-width: 2px;
--tag-radius: 10px;
/* Links */
--link-decoration: underline;
/* Lists */
--list-indent: 2.3em;
--list-bullet-size: 0.4em;
--list-marker-color-hover: transparent;
/* Blockquote */
--blockquote-border-thickness: 6px;
/* Code */
--code-size: 0.9em;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 50%;
--checkbox-size: 1.5em;
--checkbox-margin-inline-start: 1.2em;
--checklist-done-decoration: line-through;
/* Tables */
--table-header-size: 1.05em;
--table-text-size: 1em;
/* Tabs */
--tab-font-size: 0.85em;
--tab-curve: 12px;
--tab-radius: 12px;
--tab-radius-active: 12px;
/* UI Icons */
--clickable-icon-radius: 12px;
/* Indentation */
--indentation-guide-width: 2px;
--indentation-guide-width-active: 3px;
/* Navigation */
--nav-indentation-guide-width: 2px;
/* Prompt (Command Palette) */
--prompt-input-height: 50px;
--prompt-width: 700px;
--prompt-border-width: 3px;
/* Modal */
--modal-max-width: 1000px;
--modal-radius: 24px;
--modal-border-width: 3px;
}

.theme-dark {
/* COLORS */
--background-primary: #3d2032;
--background-primary-alt: #221017;
--background-secondary: #2e1323;
--background-secondary-alt: #341120;
--background-modifier-hover: #1a415a;
--background-modifier-active-hover: #472430;
--background-modifier-border: #7b3468;
--background-modifier-border-hover: #734956;
--background-modifier-border-focus: #8a5866;
--background-modifier-form-field: #5d3e4f;
--interactive-normal: #396439;
--interactive-hover: #6b4552;
--interactive-accent: #5a7bd4;
--interactive-accent-hover: #4a9c9c;
--caret-color: #ebb0c9;
--bold-color: #e77fb8;
--italic-color: #90b2dc;
--text-highlight-bg: #2e5476;
--text-normal: #ebe1e4;
--text-muted: #9e7a8d;
--text-faint: #7a5f70;
--text-on-accent: #1a0d15;
--text-accent: #7db5e6;
--text-accent-hover: #96c7ed;
--inline-title-color: #f3aeca;
--h1-color: #fc8bb4;
--h2-color: #7fd68c;
--h3-color: #a691fa;
--h4-color: #fa6767;
--h5-color: #fc8e69;
--h6-color: #e9c86c;
--hr-color: #c98299;
--tag-background-hover: #3d1f2a;
--search-clear-button-color: #3f62fd;
--link-color: #5d97ee;
--link-color-hover: #5da8d7;
--link-unresolved-color: #f79e9e;
--link-unresolved-decoration-color: #f79e9e;
--link-external-color: #b299f6;
--link-external-color-hover: #fdb981;
--list-marker-color: #5167d7;
--list-marker-color-hover: #b077d6;
--list-marker-color-collapsed: #78d9a1;
--blockquote-background-color: #482136;
--blockquote-border-color: #5a67cc;
--blockquote-color: #e7cfda;
--code-background: #2e1426;
--code-normal: #d4bfc8;
--code-comment: #8a707e;
--code-function: #78d9a1;
--code-important: #e9c86c;
--code-keyword: #5cb6c8;
--code-operator: #e87575;
--code-property: #8a94f7;
--code-punctuation: #d5d5d5;
--code-string: #eba562;
--code-tag: #8a94f7;
--code-value: #ca74f5;
--checkbox-marker-color: #1b1c1c;
--checkbox-color: #5a67cc;
--checkbox-color-hover: #f18189;
--checkbox-border-color: #8a9fa3;
--checkbox-border-color-hover: #9faabd;
--checklist-done-color: #91a2a4;
--table-header-background: #552b41;
--table-header-color: #d0adbe;
--table-border-color: #8a969b;
--table-header-border-color: #8a969b;
--table-header-background-hover: #192f38;
--table-row-background-hover: #1f3b46;
--table-row-alt-background-hover: #1f3b46;
--table-selection-border-color: #7db5e6;
--table-drag-handle-background-active: #7db5e6;
--table-drag-handle-color: #e87575;
--table-drag-handle-color-active: #e9c86c;
--table-add-button-border-color: #8a969b;
--tab-background-active: #3d2032;
--tab-text-color: #d3b9c8;
--tab-text-color-active: #d4c1ca;
--tab-text-color-focused: #d3b9c8;
--tab-text-color-focused-active: #6c95c4;
--tab-text-color-focused-highlighted: #ff9dbe;
--tab-text-color-focused-active-current: #76d4e7;
--tab-container-background: #2a2c35;
--tab-divider-color: #3a5d3a;
--tab-outline-color: #734963;
--metadata-label-text-color: #d9d9da;
--metadata-property-background: #4a2538;
--graph-node: #d679a4;
--graph-line: #7db5e6;
--graph-node-unresolved: #ca74f5;
--graph-node-focused: #78d9a1;
--graph-node-tag: #e87575;
--graph-node-attachment: #ff7dd4;
--icon-color: #8692c4;
--icon-color-hover: #47e885;
--icon-color-focused: #ffd3a2;
--indentation-guide-color: #c69b3d;
--indentation-guide-color-active: #978cc2;
--nav-item-color: #e3c7d8;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #6c1f35;
--nav-item-background-active: #404c7a;
--nav-indentation-guide-color: #f071a0;
--nav-collapse-icon-color: #25cbbe;
--prompt-border-color: #bc6192;
--modal-border-color: #8166ac;
--slider-thumb-border-color: #e5759b;
--slider-track-background: #5cf5a6;
--file-header-border: dotted #824c6b;
--list-spacing: 0.1em;
}

.theme-dark .workspace-tab-header-container {
background-color: #3d2032;
}

.theme-light.arzaba-font-override, .arzaba-font-override {
--font-text-size: 20px !important;
}

.theme-dark:not(:is(.arzaba-past, .arzaba-retro, .arzaba-future, .arzaba-black-and-white, .arzaba-wiki)) .list-bullet.list-bullet.list-bullet:after, .theme-light:not(:is(.arzaba-past, .arzaba-retro, .arzaba-future, .arzaba-black-and-white, .arzaba-wiki)) .list-bullet.list-bullet.list-bullet:after {
content: "♥";
height: unset;
width: unset;
background: transparent;
color: var(--text-accent);
}`,
      light: `.theme-dark, .theme-light {
/*Typography*/
--font-text-theme: "Open Sans Light Obsidian", sans-serif;
--font-interface-theme: "Open Sans Light Obsidian", sans-serif;
--font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
--inline-title-font: "Open Sans Light Obsidian", sans-serif;
--h1-font: "Open Sans Light Obsidian", sans-serif;
--h2-font: "Open Sans Light Obsidian", sans-serif;
--h3-font: "Open Sans Light Obsidian", sans-serif;
--h4-font: "Open Sans Light Obsidian", sans-serif;
--h5-font: "Open Sans Light Obsidian", sans-serif;
--h6-font: "Open Sans Light Obsidian", sans-serif;
--font-text-size: 22px;
--font-smallest: 0.65em;
--font-smaller: 0.8em;
--font-small: 0.933em;
--font-weight: 400;
--bold-modifier: 200;
--bold-weight: 700;
--line-height-normal: 1.61;
--line-height-tight: 1.4;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
--font-ui-medium: 16px;
--font-ui-larger: 18px;
--radius-s: 8px;
--radius-m: 10px;
--radius-l: 14px;
--radius-xl: 16px;
/* Main Colors */
--accent-h: 254;
--accent-s: 80%;
--accent-l: 68%;
--background-primary: #050606;
--background-primary-alt: #101113;
--background-secondary: #0a0a0b;
--background-secondary-alt: #1a1d20;
--background-modifier-hover: #1b3b45;
--background-modifier-active-hover: #2c2c32;
--background-modifier-border: #3b3b3e;
--background-modifier-border-hover: #282828;
--background-modifier-border-focus: #282828;
--background-modifier-form-field: #1f2f3d;
--interactive-normal: #193755;
--interactive-hover: #2c0f23;
--interactive-accent: #21431a;
--interactive-accent-hover: #602e2e;
--caret-color: #6cda6c;
--bold-color: #dad79b;
--italic-color: #86b7f0;
--text-highlight-bg: #246607;
--text-normal: #e1e1eb;
--text-muted: #6f7a88;
--text-faint: #798a8e;
--text-on-accent: #dadde4;
--text-accent: #72c6ea;
--text-accent-hover: #66cccc;
--text-selection: #32537b;
/* Headers */
--inline-title-color: #d3dfe6;
--inline-title-line-height: 1.61;
--inline-title-size: 2.2em;
--inline-title-weight: 300;
--h1-color: #6f9fd6;
--h2-color: #78c988;
--h3-color: #a497f0;
--h4-color: #c285b9;
--h5-color: #e07a6e;
--h6-color: #d9c47a;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.23em;
--h1-weight: 400;
--h2-weight: 400;
--h3-weight: 400;
--h4-weight: 400;
--h5-weight: 400;
--h6-weight: 400;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 1000px;
--file-folding-offset: 24px;
--hr-color: #637884;
--hr-thickness: 1px;
--border-width: 1px;
--tag-background-hover: #312c47;
--tag-radius: 0;
--button-radius: 0;
--search-clear-button-color: #f15b5b;
/* Links */
--link-color: #9ed2fd;
--link-color-hover: #69d1d1;
--link-unresolved-color: #f4b2b2;
--link-unresolved-decoration-color: #9ed2fd;
--link-unresolved-opacity: 0.9;
--link-decoration-thickness: 1px;
--link-decoration: none;
--link-external-color: #bfacf1;
--link-external-color-hover: #d0839e;
--link-external-decoration: underline;
--link-external-decoration-hover: underline;
/* Lists */
--list-indent: 2.8em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.12em;
--list-marker-color: #70b5d6;
--list-marker-color-hover: #d43dca;
--list-marker-color-collapsed: #35b035;
--list-bullet-size: 0.31em;
/* Blockquote */
--blockquote-background-color: #130f12;
--blockquote-border-thickness: 4px;
--blockquote-border-color: #bd95e6;
--blockquote-color: #e4d8e3;
/* Code */
--code-background: #000000;
--code-size: 0.8em;
--code-normal: #fffcfe;
--code-comment: #8a8a8a;
--code-function: #96cf70;
--code-important: #e4d386;
--code-keyword: #56B6C2;
--code-operator: #e9626d;
--code-property: #6186ec;
--code-punctuation: #e2e8ff;
--code-string: #E5C07B;
--code-tag: #6186ec;
--code-value: #d66af7;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 25%;
--checkbox-size: 1.2em;
--checkbox-marker-color: var(--background-primary);
--checkbox-color: #6186ec;
--checkbox-color-hover: #e9626d;
--checkbox-border-color: var(--text-faint);
--checkbox-border-color-hover: var(--text-muted);
--checkbox-margin-inline-start: 0;
--checklist-done-decoration: none;
--checklist-done-color: #283f42;
/* Tables */
--table-white-space: break-spaces;
--table-background: transparent;
--table-drag-handle-background: transparent;
--table-add-button-background: transparent;
--table-text-color: inherit;
--table-header-background: #0f0f0f;
--table-header-color: #d6d7dc;
--table-border-color: #3a3a3a;
--table-header-border-color: #171717;
--table-header-background-hover: #1b0f17;
--table-row-background-hover: #020807;
--table-row-alt-background-hover: #020807;
--table-selection-border-color: #5fa4b0;
--table-drag-handle-background-active: #5fa4b0;
--table-drag-handle-color: #c64e4e;
--table-drag-handle-color-active: #ddff1b;
--table-add-button-border-color: #3a3a3a;
--table-selection: hsla(var(--color-accent-hsl), 0.05);
--table-selection-blend-mode: var(--highlight-mix-blend-mode);
--table-border-width: 1px;
--table-header-border-width: 1px;
--table-header-font: inherit;
--table-header-size: 0.8em;
--table-text-size: 0.8em;
--table-column-min-width: 3ch;
--table-column-max-width: none;
--table-column-first-border-width: 1px;
--table-column-last-border-width: 1px;
--table-row-last-border-width: 1px;
--table-add-button-border-width: 2px;
--table-selection-border-width: 2px;
--table-selection-border-radius: 4px;
--table-cell-vertical-alignment: top;
--table-header-weight: calc(var(--font-weight) + var(--bold-modifier));
--table-line-height: var(--line-height-tight);
/* Tabs */
--tab-background-active: #050606;
--tab-text-color: #718183;
--tab-text-color-active: #a9bfc2;
--tab-text-color-focused: #8fa2a5;
--tab-text-color-focused-active: #58919a;
--tab-text-color-focused-highlighted: #2c0f23;
--tab-text-color-focused-active-current: #85bfc5;
--tab-font-size: 0.85em;
--tab-container-background: #080808;
--tab-divider-color: #352121;
--tab-outline-color: #1f1b32;
--tab-curve: 0;
--tab-radius: 0;
--tab-radius-active: 0;
--tab-max-width: 15em;
/* Metadata */
--metadata-label-text-color: #e1e1eb;
--metadata-label-width: 8.5em;
--metadata-divider-width: 0;
--metadata-gap: 1px;
--metadata-property-radius: 0;
--metadata-property-radius-hover: 0;
--metadata-property-radius-focus: 0px;
--metadata-property-background: #050606;
--metadata-property-background-hover: transparent;
--metadata-label-font-size: 0.8em;
--metadata-input-font-size: 0.8em;
--metadata-sidebar-label-font-size: 0.8em;
--metadata-sidebar-input-font-size: 0.8em;
/* Graph View */
--graph-node: #9b8c06;
--graph-line: #2979ff;
--graph-node-unresolved: #9f297b;
--graph-node-focused: #33ff57;
--graph-node-tag: #c072a1;
--graph-node-attachment: #00e5ff;
/* UI Icons */
--icon-color: #58919a;
--icon-color-hover: #8bb188;
--icon-color-focused: #7ad67f;
--icon-opacity: 1;
--icon-opacity-hover: 1;
--icon-opacity-active: 1;
--clickable-icon-radius: 0;
/* Swatch */
--swatch-radius: 14px;
--swatch-height: 24px;
--swatch-width: 24px;
--swatch-shadow: inset 0 0 0 2px #000001;
/* Indentation */
--indentation-guide-width: 1px;
--indentation-guide-width-active: 2px;
--indentation-guide-color: #245f5f;
--indentation-guide-color-active: #5a245f;
--indentation-guide-editing-indent: 1.1em;
--indentation-guide-reading-indent: -0.85em;
--indentation-guide-source-indent: 0.85em;
/* Navigation */
--nav-item-color: #dfdfe0;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #1d2d1f;
--nav-item-background-active: #2d1d1d;
--nav-item-white-space: pre;
--nav-indentation-guide-width: 1px;
--nav-indentation-guide-color: #6386d2;
--nav-collapse-icon-color: #408b39;
/* Popover (Hover Links) */
--popover-width: 800px;
--popover-height: 600px;
--popover-max-height: 100vh;
--popover-pdf-width: 700px;
--popover-pdf-height: 700px;
/* Prompt (Command Palette) */
--prompt-input-height: 40px;
--prompt-width: 1000px;
--prompt-border-width: 2px;
--prompt-border-color: #4fc0c0;
/* Modal */
--modal-width: 90vw;
--modal-height: 85vh;
--modal-max-width: 1000px;
--modal-border-color: #4fc0c0;
--modal-radius: 0px;
--modal-border-width: 2px;
--modal-community-sidebar-width: 290px;
/* Slider */
--slider-thumb-border-width: 3px;
--slider-thumb-border-color: #da65bb;
--slider-thumb-height: 14px;
--slider-thumb-width: 14px;
--slider-thumb-y: -5px;
--slider-thumb-radius: 50%;
--slider-s-thumb-size: 18px;
--slider-s-thumb-position: -5px;
--slider-track-background: #176b80;
--slider-track-height: 3px;
/* Dialog */
--dialog-width: 560px;
--dialog-max-width: 80vw;
--dialog-max-height: 85vh;
--drag-ghost-background: rgba(0, 0, 0, 0.85);
--drag-ghost-text-color: #fff;
}

.theme-light, .theme-dark {
/*Typography*/
--font-text-theme: "Quicksand Obsidian", sans-serif;
--font-interface-theme: "Playwrite DE Grund Obsidian", serif;
--font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
--inline-title-font: "Playwrite DE Grund Obsidian", sans-serif;
--h1-font: "Playwrite DE Grund Obsidian", serif;
--h2-font: "Playwrite DE Grund Obsidian", serif;
--h3-font: "Playwrite DE Grund Obsidian", serif;
--h4-font: "Playwrite DE Grund Obsidian", serif;
--h5-font: "Playwrite DE Grund Obsidian", serif;
--h6-font: "Playwrite DE Grund Obsidian", serif;
--font-text-size: 20px;
--font-smallest: 0.65em;
--font-smaller: 0.8em;
--font-small: 0.933em;
--line-height-normal: 1.61;
--line-height-tight: 1.4;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
--font-ui-medium: 16px;
--font-ui-larger: 18px;
/* Headers */
--inline-title-line-height: 1.6;
--inline-title-size: 44px;
--h1-size: 1.8em;
--h2-size: 1.67em;
--h3-size: 1.52em;
--h4-size: 1.3em;
--h5-size: 1.1em;
--h6-size: 0.9em;
/* Other */
--file-line-width: 820px;
--hr-thickness: 2px;
--border-width: 2px;
--tag-radius: 10px;
/* Links */
--link-decoration: underline;
/* Lists */
--list-indent: 2.3em;
--list-bullet-size: 0.4em;
--list-marker-color-hover: transparent;
/* Blockquote */
--blockquote-border-thickness: 6px;
/* Code */
--code-size: 0.9em;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 50%;
--checkbox-size: 1.5em;
--checkbox-margin-inline-start: 1.2em;
--checklist-done-decoration: line-through;
/* Tables */
--table-header-size: 1.05em;
--table-text-size: 1em;
/* Tabs */
--tab-font-size: 0.85em;
--tab-curve: 12px;
--tab-radius: 12px;
--tab-radius-active: 12px;
/* UI Icons */
--clickable-icon-radius: 12px;
/* Indentation */
--indentation-guide-width: 2px;
--indentation-guide-width-active: 3px;
/* Navigation */
--nav-indentation-guide-width: 2px;
/* Prompt (Command Palette) */
--prompt-input-height: 50px;
--prompt-width: 700px;
--prompt-border-width: 3px;
/* Modal */
--modal-max-width: 1000px;
--modal-radius: 24px;
--modal-border-width: 3px;
}

.theme-light {
/* COLORS */
--background-primary: #fffafd;
--background-primary-alt: #fef6fb;
--background-secondary: #fff1f7;
--background-secondary-alt: #fceaf2;
--background-modifier-hover: #cbeaee;
--background-modifier-active-hover: #f6dbe9;
--background-modifier-border: #e6b8cd;
--background-modifier-border-hover: #d49db6;
--background-modifier-border-focus: #c2869f;
--background-modifier-form-field: #fff1f7;
--interactive-normal: #f7c3d6;
--interactive-hover: #e37c9e;
--interactive-accent: #7a94e8;
--interactive-accent-hover: #59a3a3;
--caret-color: #c9186b;
--bold-color: #c75f89;
--italic-color: #6896db;
--text-highlight-bg: #ffe0eb;
--text-normal: #281e24;
--text-muted: #8b617a;
--text-faint: #9a7f8f;
--text-on-accent: #fffafd;
--text-accent: #6ca6d9;
--text-accent-hover: #4d99b8;
--text-selection: #c5ddf5;
--inline-title-color: #b13f6f;
--h1-color: #be7695;
--h2-color: #5bb480;
--h3-color: #9384d2;
--h4-color: #d97fb3;
--h5-color: #f38a68;
--h6-color: #dcb357;
--hr-color: #d49db6;
--tag-background-hover: #f9e3ef;
--search-clear-button-color: #e36262;
--link-color: #0366bd;
--link-color-hover: #1ab2ef;
--link-unresolved-color: #e40808;
--link-unresolved-decoration-color: #e40808;
--link-external-color: #622bef;
--link-external-color-hover: #e48f3a;
--list-marker-color: #f48fb1;
--list-marker-color-hover: #9f8fe6;
--list-marker-color-collapsed: #63c48c;
--blockquote-background-color: #fff1f7;
--blockquote-border-color: #d49db6;
--blockquote-color: #3b2c35;
--code-background: #ede5e8;
--code-normal: #402534;
--code-comment: #7f6b77;
--code-function: #63c48c;
--code-important: #dcb357;
--code-keyword: #4aa1b3;
--code-operator: #d96161;
--code-property: #6f7fe2;
--code-punctuation: #2a2a2a;
--code-string: #d68f4d;
--code-tag: #6f7fe2;
--code-value: #bb5fe0;
--checkbox-marker-color: #aec3c3;
--checkbox-color: #6186ec;
--checkbox-color-hover: #e9626d;
--checkbox-border-color: #798a8e;
--checkbox-border-color-hover: #6f7a88;
--checklist-done-color: #283f42;
--table-header-background: #ffe6f0;
--table-header-color: #5c2945;
--table-border-color: #efcbdb;
--table-header-border-color: #e79ec6;
--table-header-background-hover: #e6ecff;
--table-row-background-hover: #e6ecff;
--table-row-alt-background-hover: #e6ecff;
--table-selection-border-color: #6ca6d9;
--table-drag-handle-background-active: #6ca6d9;
--table-drag-handle-color: #e36262;
--table-drag-handle-color-active: #dcb357;
--table-add-button-border-color: #e6b8cd;
--tab-background-active: #fffafd;
--tab-text-color: #6e5865;
--tab-text-color-active: #3b2c35;
--tab-text-color-focused: #6e5865;
--tab-text-color-focused-active: #5c8eba;
--tab-text-color-focused-highlighted: #f48fb1;
--tab-text-color-focused-active-current: #5c8eba;
--tab-container-background: #dcdad3;
--tab-divider-color: #e6b8cd;
--tab-outline-color: #d49db6;
--metadata-label-text-color: #262627;
--metadata-property-background: #f7f1f6;
--graph-node: #ed9db8;
--graph-line: #6ca6d9;
--graph-node-unresolved: #bb5fe0;
--graph-node-focused: #63c48c;
--graph-node-tag: #e36262;
--graph-node-attachment: #ffc1e3;
--icon-color: #5c8eba;
--icon-color-hover: #04d85c;
--icon-color-focused: #ea1212;
--indentation-guide-color: #d49db6;
--indentation-guide-color-active: #9f8fe6;
--nav-item-color: #34385b;
--nav-item-color-hover: #000000;
--nav-item-color-active: #000000;
--nav-item-background-hover: #ffe0eb;
--nav-item-background-active: #ffb6dc;
--nav-indentation-guide-color: #f48585;
--nav-collapse-icon-color: #6cac6b;
--prompt-border-color: #eb70ce;
--modal-border-color: #eb70ce;
--slider-thumb-border-color: #ea608e;
--slider-track-background: #4ee08b;
--file-header-border: dotted #d97fb3;
--list-spacing: 0.14em;
}

.theme-light .workspace-tab-header-container {
background-color: #fff1f7;
}

.arzaba-font-override, .theme-dark.arzaba-font-override {
--font-text-size: 20px !important;
}

.theme-dark:not(:is(.arzaba-past, .arzaba-retro, .arzaba-future, .arzaba-black-and-white, .arzaba-wiki)) .list-bullet.list-bullet.list-bullet:after, .theme-light:not(:is(.arzaba-past, .arzaba-retro, .arzaba-future, .arzaba-black-and-white, .arzaba-wiki)) .list-bullet.list-bullet.list-bullet:after {
content: "♥";
height: unset;
width: unset;
background: transparent;
color: var(--text-accent);
}`,
    },
    "arzaba-wiki": {
      dark: `.theme-dark, .theme-light {
/*Typography*/
--font-text-theme: "Open Sans Light Obsidian", sans-serif;
--font-interface-theme: "Open Sans Light Obsidian", sans-serif;
--font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
--inline-title-font: "Open Sans Light Obsidian", sans-serif;
--h1-font: "Open Sans Light Obsidian", sans-serif;
--h2-font: "Open Sans Light Obsidian", sans-serif;
--h3-font: "Open Sans Light Obsidian", sans-serif;
--h4-font: "Open Sans Light Obsidian", sans-serif;
--h5-font: "Open Sans Light Obsidian", sans-serif;
--h6-font: "Open Sans Light Obsidian", sans-serif;
--font-text-size: 22px;
--font-smallest: 0.65em;
--font-smaller: 0.8em;
--font-small: 0.933em;
--font-weight: 400;
--bold-modifier: 200;
--bold-weight: 700;
--line-height-normal: 1.61;
--line-height-tight: 1.4;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
--font-ui-medium: 16px;
--font-ui-larger: 18px;
--radius-s: 8px;
--radius-m: 10px;
--radius-l: 14px;
--radius-xl: 16px;
/* Main Colors */
--accent-h: 254;
--accent-s: 80%;
--accent-l: 68%;
--background-primary: #050606;
--background-primary-alt: #101113;
--background-secondary: #0a0a0b;
--background-secondary-alt: #1a1d20;
--background-modifier-hover: #1b3b45;
--background-modifier-active-hover: #2c2c32;
--background-modifier-border: #3b3b3e;
--background-modifier-border-hover: #282828;
--background-modifier-border-focus: #282828;
--background-modifier-form-field: #1f2f3d;
--interactive-normal: #193755;
--interactive-hover: #2c0f23;
--interactive-accent: #21431a;
--interactive-accent-hover: #602e2e;
--caret-color: #6cda6c;
--bold-color: #dad79b;
--italic-color: #86b7f0;
--text-highlight-bg: #246607;
--text-normal: #e1e1eb;
--text-muted: #6f7a88;
--text-faint: #798a8e;
--text-on-accent: #dadde4;
--text-accent: #72c6ea;
--text-accent-hover: #66cccc;
--text-selection: #32537b;
/* Headers */
--inline-title-color: #d3dfe6;
--inline-title-line-height: 1.61;
--inline-title-size: 2.2em;
--inline-title-weight: 300;
--h1-color: #6f9fd6;
--h2-color: #78c988;
--h3-color: #a497f0;
--h4-color: #c285b9;
--h5-color: #e07a6e;
--h6-color: #d9c47a;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.23em;
--h1-weight: 400;
--h2-weight: 400;
--h3-weight: 400;
--h4-weight: 400;
--h5-weight: 400;
--h6-weight: 400;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 1000px;
--file-folding-offset: 24px;
--hr-color: #637884;
--hr-thickness: 1px;
--border-width: 1px;
--tag-background-hover: #312c47;
--tag-radius: 0;
--button-radius: 0;
--search-clear-button-color: #f15b5b;
/* Links */
--link-color: #9ed2fd;
--link-color-hover: #69d1d1;
--link-unresolved-color: #f4b2b2;
--link-unresolved-decoration-color: #9ed2fd;
--link-unresolved-opacity: 0.9;
--link-decoration-thickness: 1px;
--link-decoration: none;
--link-external-color: #bfacf1;
--link-external-color-hover: #d0839e;
--link-external-decoration: underline;
--link-external-decoration-hover: underline;
/* Lists */
--list-indent: 2.8em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.12em;
--list-marker-color: #70b5d6;
--list-marker-color-hover: #d43dca;
--list-marker-color-collapsed: #35b035;
--list-bullet-size: 0.31em;
/* Blockquote */
--blockquote-background-color: #130f12;
--blockquote-border-thickness: 4px;
--blockquote-border-color: #bd95e6;
--blockquote-color: #e4d8e3;
/* Code */
--code-background: #000000;
--code-size: 0.8em;
--code-normal: #fffcfe;
--code-comment: #8a8a8a;
--code-function: #96cf70;
--code-important: #e4d386;
--code-keyword: #56B6C2;
--code-operator: #e9626d;
--code-property: #6186ec;
--code-punctuation: #e2e8ff;
--code-string: #E5C07B;
--code-tag: #6186ec;
--code-value: #d66af7;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 25%;
--checkbox-size: 1.2em;
--checkbox-marker-color: var(--background-primary);
--checkbox-color: #6186ec;
--checkbox-color-hover: #e9626d;
--checkbox-border-color: var(--text-faint);
--checkbox-border-color-hover: var(--text-muted);
--checkbox-margin-inline-start: 0;
--checklist-done-decoration: none;
--checklist-done-color: #283f42;
/* Tables */
--table-white-space: break-spaces;
--table-background: transparent;
--table-drag-handle-background: transparent;
--table-add-button-background: transparent;
--table-text-color: inherit;
--table-header-background: #0f0f0f;
--table-header-color: #d6d7dc;
--table-border-color: #3a3a3a;
--table-header-border-color: #171717;
--table-header-background-hover: #1b0f17;
--table-row-background-hover: #020807;
--table-row-alt-background-hover: #020807;
--table-selection-border-color: #5fa4b0;
--table-drag-handle-background-active: #5fa4b0;
--table-drag-handle-color: #c64e4e;
--table-drag-handle-color-active: #ddff1b;
--table-add-button-border-color: #3a3a3a;
--table-selection: hsla(var(--color-accent-hsl), 0.05);
--table-selection-blend-mode: var(--highlight-mix-blend-mode);
--table-border-width: 1px;
--table-header-border-width: 1px;
--table-header-font: inherit;
--table-header-size: 0.8em;
--table-text-size: 0.8em;
--table-column-min-width: 3ch;
--table-column-max-width: none;
--table-column-first-border-width: 1px;
--table-column-last-border-width: 1px;
--table-row-last-border-width: 1px;
--table-add-button-border-width: 2px;
--table-selection-border-width: 2px;
--table-selection-border-radius: 4px;
--table-cell-vertical-alignment: top;
--table-header-weight: calc(var(--font-weight) + var(--bold-modifier));
--table-line-height: var(--line-height-tight);
/* Tabs */
--tab-background-active: #050606;
--tab-text-color: #718183;
--tab-text-color-active: #a9bfc2;
--tab-text-color-focused: #8fa2a5;
--tab-text-color-focused-active: #58919a;
--tab-text-color-focused-highlighted: #2c0f23;
--tab-text-color-focused-active-current: #85bfc5;
--tab-font-size: 0.85em;
--tab-container-background: #080808;
--tab-divider-color: #352121;
--tab-outline-color: #1f1b32;
--tab-curve: 0;
--tab-radius: 0;
--tab-radius-active: 0;
--tab-max-width: 15em;
/* Metadata */
--metadata-label-text-color: #e1e1eb;
--metadata-label-width: 8.5em;
--metadata-divider-width: 0;
--metadata-gap: 1px;
--metadata-property-radius: 0;
--metadata-property-radius-hover: 0;
--metadata-property-radius-focus: 0px;
--metadata-property-background: #050606;
--metadata-property-background-hover: transparent;
--metadata-label-font-size: 0.8em;
--metadata-input-font-size: 0.8em;
--metadata-sidebar-label-font-size: 0.8em;
--metadata-sidebar-input-font-size: 0.8em;
/* Graph View */
--graph-node: #9b8c06;
--graph-line: #2979ff;
--graph-node-unresolved: #9f297b;
--graph-node-focused: #33ff57;
--graph-node-tag: #c072a1;
--graph-node-attachment: #00e5ff;
/* UI Icons */
--icon-color: #58919a;
--icon-color-hover: #8bb188;
--icon-color-focused: #7ad67f;
--icon-opacity: 1;
--icon-opacity-hover: 1;
--icon-opacity-active: 1;
--clickable-icon-radius: 0;
/* Swatch */
--swatch-radius: 14px;
--swatch-height: 24px;
--swatch-width: 24px;
--swatch-shadow: inset 0 0 0 2px #000001;
/* Indentation */
--indentation-guide-width: 1px;
--indentation-guide-width-active: 2px;
--indentation-guide-color: #245f5f;
--indentation-guide-color-active: #5a245f;
--indentation-guide-editing-indent: 1.1em;
--indentation-guide-reading-indent: -0.85em;
--indentation-guide-source-indent: 0.85em;
/* Navigation */
--nav-item-color: #dfdfe0;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #1d2d1f;
--nav-item-background-active: #2d1d1d;
--nav-item-white-space: pre;
--nav-indentation-guide-width: 1px;
--nav-indentation-guide-color: #6386d2;
--nav-collapse-icon-color: #408b39;
/* Popover (Hover Links) */
--popover-width: 800px;
--popover-height: 600px;
--popover-max-height: 100vh;
--popover-pdf-width: 700px;
--popover-pdf-height: 700px;
/* Prompt (Command Palette) */
--prompt-input-height: 40px;
--prompt-width: 1000px;
--prompt-border-width: 2px;
--prompt-border-color: #4fc0c0;
/* Modal */
--modal-width: 90vw;
--modal-height: 85vh;
--modal-max-width: 1000px;
--modal-border-color: #4fc0c0;
--modal-radius: 0px;
--modal-border-width: 2px;
--modal-community-sidebar-width: 290px;
/* Slider */
--slider-thumb-border-width: 3px;
--slider-thumb-border-color: #da65bb;
--slider-thumb-height: 14px;
--slider-thumb-width: 14px;
--slider-thumb-y: -5px;
--slider-thumb-radius: 50%;
--slider-s-thumb-size: 18px;
--slider-s-thumb-position: -5px;
--slider-track-background: #176b80;
--slider-track-height: 3px;
/* Dialog */
--dialog-width: 560px;
--dialog-max-width: 80vw;
--dialog-max-height: 85vh;
--drag-ghost-background: rgba(0, 0, 0, 0.85);
--drag-ghost-text-color: #fff;
}

.theme-light, .theme-dark {
/* Fonts */
--font-text-theme: sans-serif;
--font-interface-theme: sans-serif;
--font-monospace-theme: "IBM Plex Mono Obsidian", monospace;
--inline-title-font: serif;
--h1-font: serif;
--h2-font: serif;
--h3-font: serif;
--h4-font: serif;
--h5-font: serif;
--h6-font: serif;
/*Typography*/
--font-text-size: 18px;
/* Headers */
--inline-title-line-height: 1.61;
--inline-title-size: 2.2em;
--inline-title-weight: 400;
--inline-title-margin-bottom: 0.5em;
--h1-size: 1.6em;
--h2-size: 1.4em;
--h3-size: 1.3em;
--h4-size: 1.2em;
--h5-size: 1em;
--h6-size: 1em;
--h1-weight: 200;
--h2-weight: 600;
--h3-weight: 600;
--h4-weight: 600;
--h5-weight: 600;
--h6-weight: 600;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-justify: center;
/* Other */
--file-line-width: 1100px;
/* Links */
--link-unresolved-opacity: 0.8;
--link-decoration: none;
--link-external-decoration: none;
/* Lists */
--list-indent: 2em;
--list-bullet-size: 0.29em;
/* Code */
--code-radius: 4px;
/* Prompt (Command Palette) */
--prompt-border-width: 1px;
/* Modal */
--modal-width: 100vw;
--modal-max-width: 1300px;
--modal-radius: 8px;
--modal-border-width: 1px;
}

.theme-dark {
--background-primary: #101418;
--background-primary-alt: #242424;
--background-secondary: #1b2026;
--background-secondary-alt: #304050;
--background-modifier-hover: #374258;
--background-modifier-active-hover: #3d4656;
--background-modifier-border: #34373d;
--background-modifier-border-hover: #777d85;
--background-modifier-border-focus: #777d85;
--background-modifier-form-field: #3a3d40;
--interactive-normal: #2d2f33;
--interactive-hover: #3a3d42;
--interactive-accent: #4b6cd0;
--interactive-accent-hover: #5b80e0;
--caret-color: #5b80e0;
--bold-color: #ffffff;
--italic-color: #ffffff;
--text-highlight-bg: #2e487b;
--text-normal: #ffffff;
--text-muted: #cccccc;
--text-faint: #888888;
--text-on-accent: #ffffff;
--text-accent: #5b80e0;
--text-accent-hover: #6d90f0;
--text-selection: #304060;
--inline-title-color: #e6e6e6;
--h1-color: #ffffff;
--h2-color: #dddddd;
--h3-color: #dddddd;
--h4-color: #dddddd;
--h5-color: #dddddd;
--h6-color: #dddddd;
--hr-color: #a2a8b0;
--tag-background-hover: #22272d;
--search-clear-button-color: #d46a6a;
--link-color: #92B3F5;
--link-color-hover: #b7c9fc;
--link-unresolved-color: #b2bfdf;
--link-unresolved-decoration-color: #b2bfdf;
--link-external-color: #92B3F5;
--link-external-color-hover: #b7c9fc;
--list-marker-color: #e6e6e6;
--list-marker-color-hover: #ffffff;
--list-marker-color-collapsed: #888888;
--blockquote-background-color: #24282e;
--blockquote-border-color: #555a63;
--blockquote-color: #cccccc;
--code-background: #23232a;
--code-normal: #ffffff;
--code-comment: #6a8759;
--code-function: #80c67d;
--code-important: #d1b35d;
--code-keyword: #4cb3c9;
--code-operator: #d46a6a;
--code-property: #6d9df1;
--code-punctuation: #dcdcdc;
--code-string: #d4a24b;
--code-tag: #7a9dd9;
--code-value: #bb6bd9;
--checkbox-color: #5b80e0;
--checkbox-color-hover: #6d90f0;
--checklist-done-color: #555a63;
--table-header-background: #1b1b1e;
--table-header-color: #d8d8d8;
--table-border-color: #555a63;
--table-header-border-color: #777d85;
--table-header-background-hover: #333333;
--table-row-background-hover: #2f2f2f;
--table-row-alt-background-hover: #343434;
--table-selection-border-color: #5b80e0;
--table-drag-handle-background-active: #5b80e0;
--table-drag-handle-color: #888888;
--table-drag-handle-color-active: #ffffff;
--table-add-button-border-color: #555a63;
--tab-background-active: #1c1c1c;
--tab-text-color: #888888;
--tab-text-color-active: #ffffff;
--tab-text-color-focused: #b8b8b8;
--tab-text-color-focused-active: #f1f1f1;
--tab-text-color-focused-highlighted: #b8b8b8;
--tab-text-color-focused-active-current: #ffffff;
--tab-container-background: #2a2a2a;
--tab-divider-color: #878a91;
--tab-outline-color: #575757;
--metadata-label-text-color: #e6e6e6;
--metadata-property-background: #202225;
--graph-node: #7d9cea;
--graph-line: #555a63;
--graph-node-unresolved: #ffffff;
--graph-node-focused: #9bb1ed;
--graph-node-tag: #aaaaaa;
--graph-node-attachment: #888888;
--icon-color: #cccccc;
--icon-color-hover: #ffffff;
--icon-color-focused: #6d90f0;
--indentation-guide-color: #555a63;
--indentation-guide-color-active: #5b80e0;
--nav-item-color: #e0e0e0;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #333a48;
--nav-item-background-active: #3d4656;
--nav-indentation-guide-color: #5b80e0;
--nav-collapse-icon-color: #6d90f0;
--prompt-border-color: #5b80e0;
--modal-border-color: #5b80e0;
--slider-thumb-border-color: #5b80e0;
--slider-track-background: #555a63;
--file-header-border: 1px solid #494949;
}

.theme-dark .HyperMD-header-1, .theme-light .HyperMD-header-1 {
padding-bottom: 0.4rem;
border-bottom: 1px solid grey;
margin-bottom: 0.6rem;
}

.theme-dark .workspace-tab-header-container {
background-color: #1b2026;
}

.theme-light.arzaba-font-override, .arzaba-font-override {
--font-text-size: 18px !important;
}

.theme-dark .HyperMD-header-1, .theme-light .HyperMD-header-1 {
padding-bottom: 0.4rem;
border-bottom: 1px solid grey;
margin-bottom: 0.6rem;
}`,
      light: `.theme-dark, .theme-light {
/*Typography*/
--font-text-theme: "Open Sans Light Obsidian", sans-serif;
--font-interface-theme: "Open Sans Light Obsidian", sans-serif;
--font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
--inline-title-font: "Open Sans Light Obsidian", sans-serif;
--h1-font: "Open Sans Light Obsidian", sans-serif;
--h2-font: "Open Sans Light Obsidian", sans-serif;
--h3-font: "Open Sans Light Obsidian", sans-serif;
--h4-font: "Open Sans Light Obsidian", sans-serif;
--h5-font: "Open Sans Light Obsidian", sans-serif;
--h6-font: "Open Sans Light Obsidian", sans-serif;
--font-text-size: 22px;
--font-smallest: 0.65em;
--font-smaller: 0.8em;
--font-small: 0.933em;
--font-weight: 400;
--bold-modifier: 200;
--bold-weight: 700;
--line-height-normal: 1.61;
--line-height-tight: 1.4;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
--font-ui-medium: 16px;
--font-ui-larger: 18px;
--radius-s: 8px;
--radius-m: 10px;
--radius-l: 14px;
--radius-xl: 16px;
/* Main Colors */
--accent-h: 254;
--accent-s: 80%;
--accent-l: 68%;
--background-primary: #050606;
--background-primary-alt: #101113;
--background-secondary: #0a0a0b;
--background-secondary-alt: #1a1d20;
--background-modifier-hover: #1b3b45;
--background-modifier-active-hover: #2c2c32;
--background-modifier-border: #3b3b3e;
--background-modifier-border-hover: #282828;
--background-modifier-border-focus: #282828;
--background-modifier-form-field: #1f2f3d;
--interactive-normal: #193755;
--interactive-hover: #2c0f23;
--interactive-accent: #21431a;
--interactive-accent-hover: #602e2e;
--caret-color: #6cda6c;
--bold-color: #dad79b;
--italic-color: #86b7f0;
--text-highlight-bg: #246607;
--text-normal: #e1e1eb;
--text-muted: #6f7a88;
--text-faint: #798a8e;
--text-on-accent: #dadde4;
--text-accent: #72c6ea;
--text-accent-hover: #66cccc;
--text-selection: #32537b;
/* Headers */
--inline-title-color: #d3dfe6;
--inline-title-line-height: 1.61;
--inline-title-size: 2.2em;
--inline-title-weight: 300;
--h1-color: #6f9fd6;
--h2-color: #78c988;
--h3-color: #a497f0;
--h4-color: #c285b9;
--h5-color: #e07a6e;
--h6-color: #d9c47a;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.23em;
--h1-weight: 400;
--h2-weight: 400;
--h3-weight: 400;
--h4-weight: 400;
--h5-weight: 400;
--h6-weight: 400;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 1000px;
--file-folding-offset: 24px;
--hr-color: #637884;
--hr-thickness: 1px;
--border-width: 1px;
--tag-background-hover: #312c47;
--tag-radius: 0;
--button-radius: 0;
--search-clear-button-color: #f15b5b;
/* Links */
--link-color: #9ed2fd;
--link-color-hover: #69d1d1;
--link-unresolved-color: #f4b2b2;
--link-unresolved-decoration-color: #9ed2fd;
--link-unresolved-opacity: 0.9;
--link-decoration-thickness: 1px;
--link-decoration: none;
--link-external-color: #bfacf1;
--link-external-color-hover: #d0839e;
--link-external-decoration: underline;
--link-external-decoration-hover: underline;
/* Lists */
--list-indent: 2.8em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.12em;
--list-marker-color: #70b5d6;
--list-marker-color-hover: #d43dca;
--list-marker-color-collapsed: #35b035;
--list-bullet-size: 0.31em;
/* Blockquote */
--blockquote-background-color: #130f12;
--blockquote-border-thickness: 4px;
--blockquote-border-color: #bd95e6;
--blockquote-color: #e4d8e3;
/* Code */
--code-background: #000000;
--code-size: 0.8em;
--code-normal: #fffcfe;
--code-comment: #8a8a8a;
--code-function: #96cf70;
--code-important: #e4d386;
--code-keyword: #56B6C2;
--code-operator: #e9626d;
--code-property: #6186ec;
--code-punctuation: #e2e8ff;
--code-string: #E5C07B;
--code-tag: #6186ec;
--code-value: #d66af7;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 25%;
--checkbox-size: 1.2em;
--checkbox-marker-color: var(--background-primary);
--checkbox-color: #6186ec;
--checkbox-color-hover: #e9626d;
--checkbox-border-color: var(--text-faint);
--checkbox-border-color-hover: var(--text-muted);
--checkbox-margin-inline-start: 0;
--checklist-done-decoration: none;
--checklist-done-color: #283f42;
/* Tables */
--table-white-space: break-spaces;
--table-background: transparent;
--table-drag-handle-background: transparent;
--table-add-button-background: transparent;
--table-text-color: inherit;
--table-header-background: #0f0f0f;
--table-header-color: #d6d7dc;
--table-border-color: #3a3a3a;
--table-header-border-color: #171717;
--table-header-background-hover: #1b0f17;
--table-row-background-hover: #020807;
--table-row-alt-background-hover: #020807;
--table-selection-border-color: #5fa4b0;
--table-drag-handle-background-active: #5fa4b0;
--table-drag-handle-color: #c64e4e;
--table-drag-handle-color-active: #ddff1b;
--table-add-button-border-color: #3a3a3a;
--table-selection: hsla(var(--color-accent-hsl), 0.05);
--table-selection-blend-mode: var(--highlight-mix-blend-mode);
--table-border-width: 1px;
--table-header-border-width: 1px;
--table-header-font: inherit;
--table-header-size: 0.8em;
--table-text-size: 0.8em;
--table-column-min-width: 3ch;
--table-column-max-width: none;
--table-column-first-border-width: 1px;
--table-column-last-border-width: 1px;
--table-row-last-border-width: 1px;
--table-add-button-border-width: 2px;
--table-selection-border-width: 2px;
--table-selection-border-radius: 4px;
--table-cell-vertical-alignment: top;
--table-header-weight: calc(var(--font-weight) + var(--bold-modifier));
--table-line-height: var(--line-height-tight);
/* Tabs */
--tab-background-active: #050606;
--tab-text-color: #718183;
--tab-text-color-active: #a9bfc2;
--tab-text-color-focused: #8fa2a5;
--tab-text-color-focused-active: #58919a;
--tab-text-color-focused-highlighted: #2c0f23;
--tab-text-color-focused-active-current: #85bfc5;
--tab-font-size: 0.85em;
--tab-container-background: #080808;
--tab-divider-color: #352121;
--tab-outline-color: #1f1b32;
--tab-curve: 0;
--tab-radius: 0;
--tab-radius-active: 0;
--tab-max-width: 15em;
/* Metadata */
--metadata-label-text-color: #e1e1eb;
--metadata-label-width: 8.5em;
--metadata-divider-width: 0;
--metadata-gap: 1px;
--metadata-property-radius: 0;
--metadata-property-radius-hover: 0;
--metadata-property-radius-focus: 0px;
--metadata-property-background: #050606;
--metadata-property-background-hover: transparent;
--metadata-label-font-size: 0.8em;
--metadata-input-font-size: 0.8em;
--metadata-sidebar-label-font-size: 0.8em;
--metadata-sidebar-input-font-size: 0.8em;
/* Graph View */
--graph-node: #9b8c06;
--graph-line: #2979ff;
--graph-node-unresolved: #9f297b;
--graph-node-focused: #33ff57;
--graph-node-tag: #c072a1;
--graph-node-attachment: #00e5ff;
/* UI Icons */
--icon-color: #58919a;
--icon-color-hover: #8bb188;
--icon-color-focused: #7ad67f;
--icon-opacity: 1;
--icon-opacity-hover: 1;
--icon-opacity-active: 1;
--clickable-icon-radius: 0;
/* Swatch */
--swatch-radius: 14px;
--swatch-height: 24px;
--swatch-width: 24px;
--swatch-shadow: inset 0 0 0 2px #000001;
/* Indentation */
--indentation-guide-width: 1px;
--indentation-guide-width-active: 2px;
--indentation-guide-color: #245f5f;
--indentation-guide-color-active: #5a245f;
--indentation-guide-editing-indent: 1.1em;
--indentation-guide-reading-indent: -0.85em;
--indentation-guide-source-indent: 0.85em;
/* Navigation */
--nav-item-color: #dfdfe0;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #1d2d1f;
--nav-item-background-active: #2d1d1d;
--nav-item-white-space: pre;
--nav-indentation-guide-width: 1px;
--nav-indentation-guide-color: #6386d2;
--nav-collapse-icon-color: #408b39;
/* Popover (Hover Links) */
--popover-width: 800px;
--popover-height: 600px;
--popover-max-height: 100vh;
--popover-pdf-width: 700px;
--popover-pdf-height: 700px;
/* Prompt (Command Palette) */
--prompt-input-height: 40px;
--prompt-width: 1000px;
--prompt-border-width: 2px;
--prompt-border-color: #4fc0c0;
/* Modal */
--modal-width: 90vw;
--modal-height: 85vh;
--modal-max-width: 1000px;
--modal-border-color: #4fc0c0;
--modal-radius: 0px;
--modal-border-width: 2px;
--modal-community-sidebar-width: 290px;
/* Slider */
--slider-thumb-border-width: 3px;
--slider-thumb-border-color: #da65bb;
--slider-thumb-height: 14px;
--slider-thumb-width: 14px;
--slider-thumb-y: -5px;
--slider-thumb-radius: 50%;
--slider-s-thumb-size: 18px;
--slider-s-thumb-position: -5px;
--slider-track-background: #176b80;
--slider-track-height: 3px;
/* Dialog */
--dialog-width: 560px;
--dialog-max-width: 80vw;
--dialog-max-height: 85vh;
--drag-ghost-background: rgba(0, 0, 0, 0.85);
--drag-ghost-text-color: #fff;
}

.theme-light, .theme-dark {
/* Fonts */
--font-text-theme: sans-serif;
--font-interface-theme: sans-serif;
--font-monospace-theme: "IBM Plex Mono Obsidian", monospace;
--inline-title-font: serif;
--h1-font: serif;
--h2-font: serif;
--h3-font: serif;
--h4-font: serif;
--h5-font: serif;
--h6-font: serif;
/*Typography*/
--font-text-size: 18px;
/* Headers */
--inline-title-line-height: 1.61;
--inline-title-size: 2.2em;
--inline-title-weight: 400;
--inline-title-margin-bottom: 0.5em;
--h1-size: 1.6em;
--h2-size: 1.4em;
--h3-size: 1.3em;
--h4-size: 1.2em;
--h5-size: 1em;
--h6-size: 1em;
--h1-weight: 200;
--h2-weight: 600;
--h3-weight: 600;
--h4-weight: 600;
--h5-weight: 600;
--h6-weight: 600;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-justify: center;
/* Other */
--file-line-width: 1100px;
/* Links */
--link-unresolved-opacity: 0.8;
--link-decoration: none;
--link-external-decoration: none;
/* Lists */
--list-indent: 2em;
--list-bullet-size: 0.29em;
/* Code */
--code-radius: 4px;
/* Prompt (Command Palette) */
--prompt-border-width: 1px;
/* Modal */
--modal-width: 100vw;
--modal-max-width: 1300px;
--modal-radius: 8px;
--modal-border-width: 1px;
}

.theme-light {
--background-primary: #ffffff;
--background-primary-alt: #f4f4f4;
--background-secondary: #f1f3f5;
--background-secondary-alt: #bdd7f1;
--background-modifier-hover: #d7e1f6;
--background-modifier-active-hover: #c5d4e7;
--background-modifier-border: #a2a9b1;
--background-modifier-border-hover: #7d8590;
--background-modifier-border-focus: #7d8590;
--background-modifier-form-field: #d2d5d8;
--interactive-normal: #eaecf0;
--interactive-hover: #dde1e6;
--interactive-accent: #375eb4;
--interactive-accent-hover: #4477dd;
--caret-color: #4477dd;
--bold-color: #000000;
--italic-color: #000000;
--text-highlight-bg: #c8e1ff;
--text-normal: #262626;
--text-muted: #444444;
--text-faint: #777777;
--text-on-accent: #ffffff;
--text-accent: #3056A9;
--text-accent-hover: #4477dd;
--text-selection: #c8e1ff;
--inline-title-color: #202122;
--h1-color: #000000;
--h2-color: #222222;
--h3-color: #222222;
--h4-color: #222222;
--h5-color: #222222;
--h6-color: #222222;
--hr-color: #222222;
--tag-background-hover: #eaecf0;
--search-clear-button-color: #a93030;
--link-color: #3056A9;
--link-color-hover: #4477dd;
--link-unresolved-color: #0c3a6a;
--link-unresolved-decoration-color: #0c3a6a;
--link-external-color: #3056A9;
--link-external-color-hover: #4477dd;
--list-marker-color: #202122;
--list-marker-color-hover: #111111;
--list-marker-color-collapsed: #777777;
--blockquote-background-color: #f8f9fa;
--blockquote-border-color: #a2a9b1;
--blockquote-color: #444444;
--code-background: #ececec;
--code-normal: #000000;
--code-comment: #143504;
--code-function: #23800b;
--code-important: #7e6909;
--code-keyword: #008291;
--code-operator: #950007;
--code-property: #00339f;
--code-punctuation: #1a1919;
--code-string: #845b02;
--code-tag: #193164;
--code-value: #4e1d5f;
--checkbox-color: #3366cc;
--checkbox-color-hover: #4477dd;
--checklist-done-color: #a2a9b1;
--table-header-background: #f1f3f5;
--table-header-color: #202122;
--table-border-color: #a2a9b1;
--table-header-border-color: #7d8590;
--table-header-background-hover: #eaecf0;
--table-row-background-hover: #f8f9fa;
--table-row-alt-background-hover: #f8f9fa;
--table-selection-border-color: #3366cc;
--table-drag-handle-background-active: #3366cc;
--table-drag-handle-color: #777777;
--table-drag-handle-color-active: #000000;
--table-add-button-border-color: #a2a9b1;
--tab-background-active: #ffffff;
--tab-text-color: #444444;
--tab-text-color-active: #777777;
--tab-text-color-focused: #777777;
--tab-text-color-focused-active: #777777;
--tab-text-color-focused-highlighted: #777777;
--tab-text-color-focused-active-current: #000000;
--tab-container-background: #f8f9fa;
--tab-divider-color: #a2a9b1;
--tab-outline-color: #777777;
--metadata-label-text-color: #202122;
--metadata-property-background: #fafcff;
--graph-node: #3366cc;
--graph-line: #a2a9b1;
--graph-node-unresolved: #777777;
--graph-node-focused: #4477dd;
--graph-node-tag: #444444;
--graph-node-attachment: #000000;
--icon-color: #444444;
--icon-color-hover: #000000;
--icon-color-focused: #1c5ad6;
--indentation-guide-color: #a2a9b1;
--indentation-guide-color-active: #3366cc;
--nav-item-color: #131414;
--nav-item-color-hover: #000000;
--nav-item-color-active: #000000;
--nav-item-background-hover: #d2dbef;
--nav-item-background-active: #c2d2e7;
--nav-indentation-guide-color: #3882d5;
--nav-collapse-icon-color: #2737e4;
--prompt-border-color: #3366cc;
--modal-border-color: #3366cc;
--slider-thumb-border-color: #3366cc;
--slider-track-background: #a2a9b1;
--file-header-border: 1px solid lightgrey;
}

.theme-dark .HyperMD-header-1, .theme-light .HyperMD-header-1 {
padding-bottom: 0.4rem;
border-bottom: 1px solid grey;
margin-bottom: 0.6rem;
}

.theme-light .workspace-tab-header-container {
background-color: #f1f3f5;
}

.arzaba-font-override, .theme-dark.arzaba-font-override {
--font-text-size: 18px !important;
}

.theme-dark .HyperMD-header-1, .theme-light .HyperMD-header-1 {
padding-bottom: 0.4rem;
border-bottom: 1px solid grey;
margin-bottom: 0.6rem;
}`,
    },
    "arzaba-black-and-white": {
      dark: `.theme-dark, .theme-light {
/*Typography*/
--font-text-theme: "Open Sans Light Obsidian", sans-serif;
--font-interface-theme: "Open Sans Light Obsidian", sans-serif;
--font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
--inline-title-font: "Open Sans Light Obsidian", sans-serif;
--h1-font: "Open Sans Light Obsidian", sans-serif;
--h2-font: "Open Sans Light Obsidian", sans-serif;
--h3-font: "Open Sans Light Obsidian", sans-serif;
--h4-font: "Open Sans Light Obsidian", sans-serif;
--h5-font: "Open Sans Light Obsidian", sans-serif;
--h6-font: "Open Sans Light Obsidian", sans-serif;
--font-text-size: 22px;
--font-smallest: 0.65em;
--font-smaller: 0.8em;
--font-small: 0.933em;
--font-weight: 400;
--bold-modifier: 200;
--bold-weight: 700;
--line-height-normal: 1.61;
--line-height-tight: 1.4;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
--font-ui-medium: 16px;
--font-ui-larger: 18px;
--radius-s: 8px;
--radius-m: 10px;
--radius-l: 14px;
--radius-xl: 16px;
/* Main Colors */
--accent-h: 254;
--accent-s: 80%;
--accent-l: 68%;
--background-primary: #050606;
--background-primary-alt: #101113;
--background-secondary: #0a0a0b;
--background-secondary-alt: #1a1d20;
--background-modifier-hover: #1b3b45;
--background-modifier-active-hover: #2c2c32;
--background-modifier-border: #3b3b3e;
--background-modifier-border-hover: #282828;
--background-modifier-border-focus: #282828;
--background-modifier-form-field: #1f2f3d;
--interactive-normal: #193755;
--interactive-hover: #2c0f23;
--interactive-accent: #21431a;
--interactive-accent-hover: #602e2e;
--caret-color: #6cda6c;
--bold-color: #dad79b;
--italic-color: #86b7f0;
--text-highlight-bg: #246607;
--text-normal: #e1e1eb;
--text-muted: #6f7a88;
--text-faint: #798a8e;
--text-on-accent: #dadde4;
--text-accent: #72c6ea;
--text-accent-hover: #66cccc;
--text-selection: #32537b;
/* Headers */
--inline-title-color: #d3dfe6;
--inline-title-line-height: 1.61;
--inline-title-size: 2.2em;
--inline-title-weight: 300;
--h1-color: #6f9fd6;
--h2-color: #78c988;
--h3-color: #a497f0;
--h4-color: #c285b9;
--h5-color: #e07a6e;
--h6-color: #d9c47a;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.23em;
--h1-weight: 400;
--h2-weight: 400;
--h3-weight: 400;
--h4-weight: 400;
--h5-weight: 400;
--h6-weight: 400;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 1000px;
--file-folding-offset: 24px;
--hr-color: #637884;
--hr-thickness: 1px;
--border-width: 1px;
--tag-background-hover: #312c47;
--tag-radius: 0;
--button-radius: 0;
--search-clear-button-color: #f15b5b;
/* Links */
--link-color: #9ed2fd;
--link-color-hover: #69d1d1;
--link-unresolved-color: #f4b2b2;
--link-unresolved-decoration-color: #9ed2fd;
--link-unresolved-opacity: 0.9;
--link-decoration-thickness: 1px;
--link-decoration: none;
--link-external-color: #bfacf1;
--link-external-color-hover: #d0839e;
--link-external-decoration: underline;
--link-external-decoration-hover: underline;
/* Lists */
--list-indent: 2.8em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.12em;
--list-marker-color: #70b5d6;
--list-marker-color-hover: #d43dca;
--list-marker-color-collapsed: #35b035;
--list-bullet-size: 0.31em;
/* Blockquote */
--blockquote-background-color: #130f12;
--blockquote-border-thickness: 4px;
--blockquote-border-color: #bd95e6;
--blockquote-color: #e4d8e3;
/* Code */
--code-background: #000000;
--code-size: 0.8em;
--code-normal: #fffcfe;
--code-comment: #8a8a8a;
--code-function: #96cf70;
--code-important: #e4d386;
--code-keyword: #56B6C2;
--code-operator: #e9626d;
--code-property: #6186ec;
--code-punctuation: #e2e8ff;
--code-string: #E5C07B;
--code-tag: #6186ec;
--code-value: #d66af7;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 25%;
--checkbox-size: 1.2em;
--checkbox-marker-color: var(--background-primary);
--checkbox-color: #6186ec;
--checkbox-color-hover: #e9626d;
--checkbox-border-color: var(--text-faint);
--checkbox-border-color-hover: var(--text-muted);
--checkbox-margin-inline-start: 0;
--checklist-done-decoration: none;
--checklist-done-color: #283f42;
/* Tables */
--table-white-space: break-spaces;
--table-background: transparent;
--table-drag-handle-background: transparent;
--table-add-button-background: transparent;
--table-text-color: inherit;
--table-header-background: #0f0f0f;
--table-header-color: #d6d7dc;
--table-border-color: #3a3a3a;
--table-header-border-color: #171717;
--table-header-background-hover: #1b0f17;
--table-row-background-hover: #020807;
--table-row-alt-background-hover: #020807;
--table-selection-border-color: #5fa4b0;
--table-drag-handle-background-active: #5fa4b0;
--table-drag-handle-color: #c64e4e;
--table-drag-handle-color-active: #ddff1b;
--table-add-button-border-color: #3a3a3a;
--table-selection: hsla(var(--color-accent-hsl), 0.05);
--table-selection-blend-mode: var(--highlight-mix-blend-mode);
--table-border-width: 1px;
--table-header-border-width: 1px;
--table-header-font: inherit;
--table-header-size: 0.8em;
--table-text-size: 0.8em;
--table-column-min-width: 3ch;
--table-column-max-width: none;
--table-column-first-border-width: 1px;
--table-column-last-border-width: 1px;
--table-row-last-border-width: 1px;
--table-add-button-border-width: 2px;
--table-selection-border-width: 2px;
--table-selection-border-radius: 4px;
--table-cell-vertical-alignment: top;
--table-header-weight: calc(var(--font-weight) + var(--bold-modifier));
--table-line-height: var(--line-height-tight);
/* Tabs */
--tab-background-active: #050606;
--tab-text-color: #718183;
--tab-text-color-active: #a9bfc2;
--tab-text-color-focused: #8fa2a5;
--tab-text-color-focused-active: #58919a;
--tab-text-color-focused-highlighted: #2c0f23;
--tab-text-color-focused-active-current: #85bfc5;
--tab-font-size: 0.85em;
--tab-container-background: #080808;
--tab-divider-color: #352121;
--tab-outline-color: #1f1b32;
--tab-curve: 0;
--tab-radius: 0;
--tab-radius-active: 0;
--tab-max-width: 15em;
/* Metadata */
--metadata-label-text-color: #e1e1eb;
--metadata-label-width: 8.5em;
--metadata-divider-width: 0;
--metadata-gap: 1px;
--metadata-property-radius: 0;
--metadata-property-radius-hover: 0;
--metadata-property-radius-focus: 0px;
--metadata-property-background: #050606;
--metadata-property-background-hover: transparent;
--metadata-label-font-size: 0.8em;
--metadata-input-font-size: 0.8em;
--metadata-sidebar-label-font-size: 0.8em;
--metadata-sidebar-input-font-size: 0.8em;
/* Graph View */
--graph-node: #9b8c06;
--graph-line: #2979ff;
--graph-node-unresolved: #9f297b;
--graph-node-focused: #33ff57;
--graph-node-tag: #c072a1;
--graph-node-attachment: #00e5ff;
/* UI Icons */
--icon-color: #58919a;
--icon-color-hover: #8bb188;
--icon-color-focused: #7ad67f;
--icon-opacity: 1;
--icon-opacity-hover: 1;
--icon-opacity-active: 1;
--clickable-icon-radius: 0;
/* Swatch */
--swatch-radius: 14px;
--swatch-height: 24px;
--swatch-width: 24px;
--swatch-shadow: inset 0 0 0 2px #000001;
/* Indentation */
--indentation-guide-width: 1px;
--indentation-guide-width-active: 2px;
--indentation-guide-color: #245f5f;
--indentation-guide-color-active: #5a245f;
--indentation-guide-editing-indent: 1.1em;
--indentation-guide-reading-indent: -0.85em;
--indentation-guide-source-indent: 0.85em;
/* Navigation */
--nav-item-color: #dfdfe0;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #1d2d1f;
--nav-item-background-active: #2d1d1d;
--nav-item-white-space: pre;
--nav-indentation-guide-width: 1px;
--nav-indentation-guide-color: #6386d2;
--nav-collapse-icon-color: #408b39;
/* Popover (Hover Links) */
--popover-width: 800px;
--popover-height: 600px;
--popover-max-height: 100vh;
--popover-pdf-width: 700px;
--popover-pdf-height: 700px;
/* Prompt (Command Palette) */
--prompt-input-height: 40px;
--prompt-width: 1000px;
--prompt-border-width: 2px;
--prompt-border-color: #4fc0c0;
/* Modal */
--modal-width: 90vw;
--modal-height: 85vh;
--modal-max-width: 1000px;
--modal-border-color: #4fc0c0;
--modal-radius: 0px;
--modal-border-width: 2px;
--modal-community-sidebar-width: 290px;
/* Slider */
--slider-thumb-border-width: 3px;
--slider-thumb-border-color: #da65bb;
--slider-thumb-height: 14px;
--slider-thumb-width: 14px;
--slider-thumb-y: -5px;
--slider-thumb-radius: 50%;
--slider-s-thumb-size: 18px;
--slider-s-thumb-position: -5px;
--slider-track-background: #176b80;
--slider-track-height: 3px;
/* Dialog */
--dialog-width: 560px;
--dialog-max-width: 80vw;
--dialog-max-height: 85vh;
--drag-ghost-background: rgba(0, 0, 0, 0.85);
--drag-ghost-text-color: #fff;
}

.theme-light, .theme-dark {
--font-text-theme: "Cormorant Obsidian", sans-serif;
--font-interface-theme: "Cormorant Obsidian", sans-serif;
--font-monospace-theme: "IBM Plex Mono Obsidian", monospace;
--inline-title-font: "Playfair Display Obsidian", serif;
--h1-font: "Playfair Display Obsidian", serif;
--h2-font: "Playfair Display Obsidian", serif;
--h3-font: "Playfair Display Obsidian", serif;
--h4-font: "Playfair Display Obsidian", serif;
--h5-font: "Playfair Display Obsidian", serif;
--h6-font: "Playfair Display Obsidian", serif;
/*Typography*/
--font-text-size: 26px;
--font-smallest: 0.75em;
--font-smaller: 0.8em;
--font-small: 0.963em;
--line-height-normal: 1.65;
--line-height-tight: 1.5;
--font-ui-smaller: 13px;
--font-ui-small: 18px;
--font-ui-medium: 20px;
--font-ui-larger: 22px;
/* Headers */
--inline-title-line-height: 1.5;
--inline-title-size: 1.8em;
--h1-size: 1.6em;
--h2-size: 1.5em;
--h3-size: 1.48em;
--h4-size: 1.44em;
--h5-size: 1.42em;
--h6-size: 1.36em;
--h1-weight: 400;
--h2-weight: 400;
--h3-weight: 400;
--h4-weight: 400;
--h5-weight: 400;
--h6-weight: 400;
--file-header-font-size: 1.1em;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: left;
/* Other */
--file-line-width: 720px;
/* Links */
--link-unresolved-opacity: 0.8;
--link-decoration-thickness: 1px;
--link-decoration: underline;
/* Lists */
--list-indent: 1.3em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.04em;
--list-bullet-size: 0.31em;
/* Blockquote */
--blockquote-border-thickness: 8px;
/* Code */
--code-size: 0.7em;
--code-radius: 0;
/* Checkbox */
--checkbox-radius: 50%;
--checkbox-size: 1.4em;
--checkbox-margin-inline-start: 0;
--checklist-done-decoration: line-through;
/* Metadata */
--metadata-label-font-size: 0.7em;
--metadata-input-font-size: 0.7em;
--metadata-sidebar-label-font-size: 0.7em;
--metadata-sidebar-input-font-size: 0.7em;
/* Navigation */
--nav-item-white-space: pre;
--nav-indentation-guide-width: 2px;
/* Popover (Hover Links) */
--popover-width: 650px;
--popover-height: 450px;
/* Prompt (Command Palette) */
--prompt-input-height: 50px;
--prompt-width: 750px;
--prompt-border-width: 2px;
/* Modal */
--modal-width: 90vw;
--modal-height: 85vh;
--modal-max-width: 950px;
--modal-radius: 20px;
--modal-border-width: 2px;
--modal-community-sidebar-width: 290px;
/* Dialog */
--dialog-width: 560px;
--dialog-max-width: 80vw;
--dialog-max-height: 85vh;
--drag-ghost-background: rgba(0, 0, 0, 0.85);
--drag-ghost-text-color: #fff;
}

.theme-dark {
--background-primary: #000000;
--background-primary-alt: #0a0a0a;
--background-secondary: #111111;
--background-secondary-alt: #1a1a1a;
--background-modifier-hover: #1f1f1f;
--background-modifier-active-hover: #262626;
--background-modifier-border: #333333;
--background-modifier-border-hover: #444444;
--background-modifier-border-focus: #555555;
--background-modifier-form-field: #0f0f0f;
--interactive-normal: #1a1a1a;
--interactive-hover: #2a2a2a;
--interactive-accent: #666666;
--interactive-accent-hover: #888888;
--caret-color: #ffffff;
--bold-color: #f4f4f4;
--italic-color: #ffffff;
--text-highlight-bg: #222222;
--text-normal: #ffffff;
--text-muted: #cacaca;
--text-faint: #777777;
--text-on-accent: #000000;
--text-accent: #aaaaaa;
--text-accent-hover: #ffffff;
--text-selection: #1f1f1f;
--h1-color: #ffffff;
--h2-color: #e6e6e6;
--h3-color: #d1d1d1;
--h4-color: #bcbcbc;
--h5-color: #a7a7a7;
--h6-color: #929292;
--inline-title-color: #ffffff;
--hr-color: #8d8d8d;
--tag-background-hover: #1f1f1f;
--search-clear-button-color: #cccccc;
--link-color: #c5c4c4;
--link-color-hover: #ececec;
--link-unresolved-color: #c5c5c5;
--link-unresolved-decoration-color: #444444;
--link-external-color: #c7c7c7;
--link-external-color-hover: #ececec;
--list-marker-color: #f0f0f0;
--list-marker-color-hover: #ffffff;
--list-marker-color-collapsed: #777777;
--blockquote-background-color: #0d0d0d;
--blockquote-border-color: #333333;
--blockquote-color: #cccccc;
--checkbox-color: #777777;
--checkbox-color-hover: #aaaaaa;
--checklist-done-color: #bdbdbd;
--code-background: #0a0a0a;
--code-normal: #ffffff;
--code-comment: #777777;
--code-function: #cccccc;
--code-important: #ffffff;
--code-keyword: #dddddd;
--code-operator: #bbbbbb;
--code-property: #cccccc;
--code-punctuation: #eeeeee;
--code-string: #d1d1d1;
--code-tag: #aaaaaa;
--code-value: #ffffff;
--table-header-background: #111111;
--table-header-color: #f5f5f5;
--table-border-color: #333333;
--table-header-border-color: #444444;
--table-header-background-hover: #1a1a1a;
--table-row-background-hover: #0f0f0f;
--table-row-alt-background-hover: #141414;
--table-selection-border-color: #666666;
--table-drag-handle-background-active: #888888;
--table-drag-handle-color: #aaaaaa;
--table-drag-handle-color-active: #ffffff;
--table-add-button-border-color: #333333;
--tab-background-active: #000000;
--tab-text-color: #aaaaaa;
--tab-text-color-active: #ffffff;
--tab-text-color-focused: #cccccc;
--tab-text-color-focused-active: #f0f0f0;
--tab-text-color-focused-highlighted: #dddddd;
--tab-text-color-focused-active-current: #ffffff;
--tab-container-background: #0d0d0d;
--tab-divider-color: #222222;
--tab-outline-color: #444444;
--metadata-property-background: #0f0f0f;
--graph-node: #bbbbbb;
--graph-line: #444444;
--graph-node-unresolved: #666666;
--graph-node-focused: #ffffff;
--graph-node-tag: #999999;
--graph-node-attachment: #dddddd;
--icon-color: #bbbbbb;
--icon-color-hover: #ffffff;
--icon-color-focused: #f0f0f0;
--indentation-guide-color: #444444;
--indentation-guide-color-active: #777777;
--nav-item-color: #f0f0f0;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #1a1a1a;
--nav-item-background-active: #262626;
--nav-indentation-guide-color: #555555;
--nav-collapse-icon-color: #aaaaaa;
--prompt-border-color: #777777;
--modal-border-color: #888888;
--slider-thumb-border-color: #aaaaaa;
--slider-track-background: #333333;
}

.theme-dark .workspace-tab-header-container {
background-color: #111111;
}

.theme-light.arzaba-font-override, .arzaba-font-override {
--font-text-size: 26px !important;
}`,
      light: `.theme-dark, .theme-light {
/*Typography*/
--font-text-theme: "Open Sans Light Obsidian", sans-serif;
--font-interface-theme: "Open Sans Light Obsidian", sans-serif;
--font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
--inline-title-font: "Open Sans Light Obsidian", sans-serif;
--h1-font: "Open Sans Light Obsidian", sans-serif;
--h2-font: "Open Sans Light Obsidian", sans-serif;
--h3-font: "Open Sans Light Obsidian", sans-serif;
--h4-font: "Open Sans Light Obsidian", sans-serif;
--h5-font: "Open Sans Light Obsidian", sans-serif;
--h6-font: "Open Sans Light Obsidian", sans-serif;
--font-text-size: 22px;
--font-smallest: 0.65em;
--font-smaller: 0.8em;
--font-small: 0.933em;
--font-weight: 400;
--bold-modifier: 200;
--bold-weight: 700;
--line-height-normal: 1.61;
--line-height-tight: 1.4;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
--font-ui-medium: 16px;
--font-ui-larger: 18px;
--radius-s: 8px;
--radius-m: 10px;
--radius-l: 14px;
--radius-xl: 16px;
/* Main Colors */
--accent-h: 254;
--accent-s: 80%;
--accent-l: 68%;
--background-primary: #050606;
--background-primary-alt: #101113;
--background-secondary: #0a0a0b;
--background-secondary-alt: #1a1d20;
--background-modifier-hover: #1b3b45;
--background-modifier-active-hover: #2c2c32;
--background-modifier-border: #3b3b3e;
--background-modifier-border-hover: #282828;
--background-modifier-border-focus: #282828;
--background-modifier-form-field: #1f2f3d;
--interactive-normal: #193755;
--interactive-hover: #2c0f23;
--interactive-accent: #21431a;
--interactive-accent-hover: #602e2e;
--caret-color: #6cda6c;
--bold-color: #dad79b;
--italic-color: #86b7f0;
--text-highlight-bg: #246607;
--text-normal: #e1e1eb;
--text-muted: #6f7a88;
--text-faint: #798a8e;
--text-on-accent: #dadde4;
--text-accent: #72c6ea;
--text-accent-hover: #66cccc;
--text-selection: #32537b;
/* Headers */
--inline-title-color: #d3dfe6;
--inline-title-line-height: 1.61;
--inline-title-size: 2.2em;
--inline-title-weight: 300;
--h1-color: #6f9fd6;
--h2-color: #78c988;
--h3-color: #a497f0;
--h4-color: #c285b9;
--h5-color: #e07a6e;
--h6-color: #d9c47a;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.23em;
--h1-weight: 400;
--h2-weight: 400;
--h3-weight: 400;
--h4-weight: 400;
--h5-weight: 400;
--h6-weight: 400;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 1000px;
--file-folding-offset: 24px;
--hr-color: #637884;
--hr-thickness: 1px;
--border-width: 1px;
--tag-background-hover: #312c47;
--tag-radius: 0;
--button-radius: 0;
--search-clear-button-color: #f15b5b;
/* Links */
--link-color: #9ed2fd;
--link-color-hover: #69d1d1;
--link-unresolved-color: #f4b2b2;
--link-unresolved-decoration-color: #9ed2fd;
--link-unresolved-opacity: 0.9;
--link-decoration-thickness: 1px;
--link-decoration: none;
--link-external-color: #bfacf1;
--link-external-color-hover: #d0839e;
--link-external-decoration: underline;
--link-external-decoration-hover: underline;
/* Lists */
--list-indent: 2.8em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.12em;
--list-marker-color: #70b5d6;
--list-marker-color-hover: #d43dca;
--list-marker-color-collapsed: #35b035;
--list-bullet-size: 0.31em;
/* Blockquote */
--blockquote-background-color: #130f12;
--blockquote-border-thickness: 4px;
--blockquote-border-color: #bd95e6;
--blockquote-color: #e4d8e3;
/* Code */
--code-background: #000000;
--code-size: 0.8em;
--code-normal: #fffcfe;
--code-comment: #8a8a8a;
--code-function: #96cf70;
--code-important: #e4d386;
--code-keyword: #56B6C2;
--code-operator: #e9626d;
--code-property: #6186ec;
--code-punctuation: #e2e8ff;
--code-string: #E5C07B;
--code-tag: #6186ec;
--code-value: #d66af7;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 25%;
--checkbox-size: 1.2em;
--checkbox-marker-color: var(--background-primary);
--checkbox-color: #6186ec;
--checkbox-color-hover: #e9626d;
--checkbox-border-color: var(--text-faint);
--checkbox-border-color-hover: var(--text-muted);
--checkbox-margin-inline-start: 0;
--checklist-done-decoration: none;
--checklist-done-color: #283f42;
/* Tables */
--table-white-space: break-spaces;
--table-background: transparent;
--table-drag-handle-background: transparent;
--table-add-button-background: transparent;
--table-text-color: inherit;
--table-header-background: #0f0f0f;
--table-header-color: #d6d7dc;
--table-border-color: #3a3a3a;
--table-header-border-color: #171717;
--table-header-background-hover: #1b0f17;
--table-row-background-hover: #020807;
--table-row-alt-background-hover: #020807;
--table-selection-border-color: #5fa4b0;
--table-drag-handle-background-active: #5fa4b0;
--table-drag-handle-color: #c64e4e;
--table-drag-handle-color-active: #ddff1b;
--table-add-button-border-color: #3a3a3a;
--table-selection: hsla(var(--color-accent-hsl), 0.05);
--table-selection-blend-mode: var(--highlight-mix-blend-mode);
--table-border-width: 1px;
--table-header-border-width: 1px;
--table-header-font: inherit;
--table-header-size: 0.8em;
--table-text-size: 0.8em;
--table-column-min-width: 3ch;
--table-column-max-width: none;
--table-column-first-border-width: 1px;
--table-column-last-border-width: 1px;
--table-row-last-border-width: 1px;
--table-add-button-border-width: 2px;
--table-selection-border-width: 2px;
--table-selection-border-radius: 4px;
--table-cell-vertical-alignment: top;
--table-header-weight: calc(var(--font-weight) + var(--bold-modifier));
--table-line-height: var(--line-height-tight);
/* Tabs */
--tab-background-active: #050606;
--tab-text-color: #718183;
--tab-text-color-active: #a9bfc2;
--tab-text-color-focused: #8fa2a5;
--tab-text-color-focused-active: #58919a;
--tab-text-color-focused-highlighted: #2c0f23;
--tab-text-color-focused-active-current: #85bfc5;
--tab-font-size: 0.85em;
--tab-container-background: #080808;
--tab-divider-color: #352121;
--tab-outline-color: #1f1b32;
--tab-curve: 0;
--tab-radius: 0;
--tab-radius-active: 0;
--tab-max-width: 15em;
/* Metadata */
--metadata-label-text-color: #e1e1eb;
--metadata-label-width: 8.5em;
--metadata-divider-width: 0;
--metadata-gap: 1px;
--metadata-property-radius: 0;
--metadata-property-radius-hover: 0;
--metadata-property-radius-focus: 0px;
--metadata-property-background: #050606;
--metadata-property-background-hover: transparent;
--metadata-label-font-size: 0.8em;
--metadata-input-font-size: 0.8em;
--metadata-sidebar-label-font-size: 0.8em;
--metadata-sidebar-input-font-size: 0.8em;
/* Graph View */
--graph-node: #9b8c06;
--graph-line: #2979ff;
--graph-node-unresolved: #9f297b;
--graph-node-focused: #33ff57;
--graph-node-tag: #c072a1;
--graph-node-attachment: #00e5ff;
/* UI Icons */
--icon-color: #58919a;
--icon-color-hover: #8bb188;
--icon-color-focused: #7ad67f;
--icon-opacity: 1;
--icon-opacity-hover: 1;
--icon-opacity-active: 1;
--clickable-icon-radius: 0;
/* Swatch */
--swatch-radius: 14px;
--swatch-height: 24px;
--swatch-width: 24px;
--swatch-shadow: inset 0 0 0 2px #000001;
/* Indentation */
--indentation-guide-width: 1px;
--indentation-guide-width-active: 2px;
--indentation-guide-color: #245f5f;
--indentation-guide-color-active: #5a245f;
--indentation-guide-editing-indent: 1.1em;
--indentation-guide-reading-indent: -0.85em;
--indentation-guide-source-indent: 0.85em;
/* Navigation */
--nav-item-color: #dfdfe0;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #1d2d1f;
--nav-item-background-active: #2d1d1d;
--nav-item-white-space: pre;
--nav-indentation-guide-width: 1px;
--nav-indentation-guide-color: #6386d2;
--nav-collapse-icon-color: #408b39;
/* Popover (Hover Links) */
--popover-width: 800px;
--popover-height: 600px;
--popover-max-height: 100vh;
--popover-pdf-width: 700px;
--popover-pdf-height: 700px;
/* Prompt (Command Palette) */
--prompt-input-height: 40px;
--prompt-width: 1000px;
--prompt-border-width: 2px;
--prompt-border-color: #4fc0c0;
/* Modal */
--modal-width: 90vw;
--modal-height: 85vh;
--modal-max-width: 1000px;
--modal-border-color: #4fc0c0;
--modal-radius: 0px;
--modal-border-width: 2px;
--modal-community-sidebar-width: 290px;
/* Slider */
--slider-thumb-border-width: 3px;
--slider-thumb-border-color: #da65bb;
--slider-thumb-height: 14px;
--slider-thumb-width: 14px;
--slider-thumb-y: -5px;
--slider-thumb-radius: 50%;
--slider-s-thumb-size: 18px;
--slider-s-thumb-position: -5px;
--slider-track-background: #176b80;
--slider-track-height: 3px;
/* Dialog */
--dialog-width: 560px;
--dialog-max-width: 80vw;
--dialog-max-height: 85vh;
--drag-ghost-background: rgba(0, 0, 0, 0.85);
--drag-ghost-text-color: #fff;
}

.theme-light, .theme-dark {
--font-text-theme: "Cormorant Obsidian", sans-serif;
--font-interface-theme: "Cormorant Obsidian", sans-serif;
--font-monospace-theme: "IBM Plex Mono Obsidian", monospace;
--inline-title-font: "Playfair Display Obsidian", serif;
--h1-font: "Playfair Display Obsidian", serif;
--h2-font: "Playfair Display Obsidian", serif;
--h3-font: "Playfair Display Obsidian", serif;
--h4-font: "Playfair Display Obsidian", serif;
--h5-font: "Playfair Display Obsidian", serif;
--h6-font: "Playfair Display Obsidian", serif;
/*Typography*/
--font-text-size: 26px;
--font-smallest: 0.75em;
--font-smaller: 0.8em;
--font-small: 0.963em;
--line-height-normal: 1.65;
--line-height-tight: 1.5;
--font-ui-smaller: 13px;
--font-ui-small: 18px;
--font-ui-medium: 20px;
--font-ui-larger: 22px;
/* Headers */
--inline-title-line-height: 1.5;
--inline-title-size: 1.8em;
--h1-size: 1.6em;
--h2-size: 1.5em;
--h3-size: 1.48em;
--h4-size: 1.44em;
--h5-size: 1.42em;
--h6-size: 1.36em;
--h1-weight: 400;
--h2-weight: 400;
--h3-weight: 400;
--h4-weight: 400;
--h5-weight: 400;
--h6-weight: 400;
--file-header-font-size: 1.1em;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: left;
/* Other */
--file-line-width: 720px;
/* Links */
--link-unresolved-opacity: 0.8;
--link-decoration-thickness: 1px;
--link-decoration: underline;
/* Lists */
--list-indent: 1.3em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.04em;
--list-bullet-size: 0.31em;
/* Blockquote */
--blockquote-border-thickness: 8px;
/* Code */
--code-size: 0.7em;
--code-radius: 0;
/* Checkbox */
--checkbox-radius: 50%;
--checkbox-size: 1.4em;
--checkbox-margin-inline-start: 0;
--checklist-done-decoration: line-through;
/* Metadata */
--metadata-label-font-size: 0.7em;
--metadata-input-font-size: 0.7em;
--metadata-sidebar-label-font-size: 0.7em;
--metadata-sidebar-input-font-size: 0.7em;
/* Navigation */
--nav-item-white-space: pre;
--nav-indentation-guide-width: 2px;
/* Popover (Hover Links) */
--popover-width: 650px;
--popover-height: 450px;
/* Prompt (Command Palette) */
--prompt-input-height: 50px;
--prompt-width: 750px;
--prompt-border-width: 2px;
/* Modal */
--modal-width: 90vw;
--modal-height: 85vh;
--modal-max-width: 950px;
--modal-radius: 20px;
--modal-border-width: 2px;
--modal-community-sidebar-width: 290px;
/* Dialog */
--dialog-width: 560px;
--dialog-max-width: 80vw;
--dialog-max-height: 85vh;
--drag-ghost-background: rgba(0, 0, 0, 0.85);
--drag-ghost-text-color: #fff;
}

.theme-light {
/* COLORS */
--background-primary: #ffffff;
--background-primary-alt: #f9f9f9;
--background-secondary: #f0f0f0;
--background-secondary-alt: #e6e6e6;
--background-modifier-hover: #e0e0e0;
--background-modifier-active-hover: #d9d9d9;
--background-modifier-border: #cccccc;
--background-modifier-border-hover: #bbbbbb;
--background-modifier-border-focus: #aaaaaa;
--background-modifier-form-field: #f2f2f2;
--interactive-normal: #dddddd;
--interactive-hover: #cccccc;
--interactive-accent: #bbbbbb;
--interactive-accent-hover: #aaaaaa;
--caret-color: #000000;
--bold-color: #333333;
--italic-color: #0f0f0f;
--text-highlight-bg: #e0e0e0;
--text-normal: #000000;
--text-muted: #666666;
--text-faint: #999999;
--text-on-accent: #000000;
--text-accent: #444444;
--text-accent-hover: #000000;
--text-selection: #dedede;
--h1-color: #000000;
--h2-color: #2d2d2d;
--h3-color: #494949;
--h4-color: #5e5e5e;
--h5-color: #7a7a7a;
--h6-color: #989898;
--inline-title-color: #000000;
--hr-color: #aaaaaa;
--tag-background-hover: #dddddd;
--search-clear-button-color: #303030;
--link-color: #171717;
--link-color-hover: #000000;
--link-unresolved-color: #000000;
--link-unresolved-decoration-color: #000000;
--link-external-color: #1a1a1a;
--link-external-color-hover: #000000;
--list-marker-color: #000000;
--list-marker-color-hover: #000000;
--list-marker-color-collapsed: #7d7d7d;
--blockquote-background-color: #f6f6f6;
--blockquote-border-color: #929292;
--blockquote-color: #000000;
--checkbox-color: #888888;
--checkbox-color-hover: #5c5c5c;
--checklist-done-color: #5c5c5c;
--code-background: #eeeeee;
--code-normal: #000000;
--code-comment: #777777;
--code-function: #333333;
--code-important: #000000;
--code-keyword: #000000;
--code-operator: #666666;
--code-property: #333333;
--code-punctuation: #111111;
--code-string: #222222;
--code-tag: #444444;
--code-value: #000000;
--table-header-background: #ebebeb;
--table-header-color: #141414;
--table-border-color: #cccccc;
--table-header-border-color: #dddddd;
--table-header-background-hover: #e6e6e6;
--table-row-background-hover: #f9f9f9;
--table-row-alt-background-hover: #f9f9f9;
--table-selection-border-color: #999999;
--table-drag-handle-background-active: #999999;
--table-drag-handle-color: #666666;
--table-drag-handle-color-active: #000000;
--table-add-button-border-color: #cccccc;
--tab-background-active: #ffffff;
--tab-text-color: #777777;
--tab-text-color-active: #333333;
--tab-text-color-focused: #444444;
--tab-text-color-focused-active: #000000;
--tab-text-color-focused-highlighted: #666666;
--tab-text-color-focused-active-current: #000000;
--tab-container-background: #f2f2f2;
--tab-divider-color: #cccccc;
--tab-outline-color: #bbbbbb;
--metadata-property-background: #f5f5f5;
--graph-node: #555555;
--graph-line: #999999;
--graph-node-unresolved: #aaaaaa;
--graph-node-focused: #000000;
--graph-node-tag: #777777;
--graph-node-attachment: #333333;
--icon-color: #292929;
--icon-color-hover: #000000;
--icon-color-focused: #111111;
--indentation-guide-color: #8b8b8b;
--indentation-guide-color-active: #666666;
--nav-item-color: #000000;
--nav-item-color-hover: #000000;
--nav-item-color-active: #000000;
--nav-item-background-hover: #dedede;
--nav-item-background-active: #c3c2c2;
--nav-indentation-guide-color: #999999;
--nav-collapse-icon-color: #666666;
--prompt-border-color: #373737;
--modal-border-color: #454545;
--slider-thumb-border-color: #777777;
--slider-track-background: #bbbbbb;
}

.theme-light .workspace-tab-header-container {
background-color: #f0f0f0;
}

.arzaba-font-override, .theme-dark.arzaba-font-override {
--font-text-size: 26px !important;
}`,
    },
    "arzaba-future": {
      dark: `.theme-dark, .theme-light {
/*Typography*/
--font-text-theme: "Open Sans Light Obsidian", sans-serif;
--font-interface-theme: "Open Sans Light Obsidian", sans-serif;
--font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
--inline-title-font: "Open Sans Light Obsidian", sans-serif;
--h1-font: "Open Sans Light Obsidian", sans-serif;
--h2-font: "Open Sans Light Obsidian", sans-serif;
--h3-font: "Open Sans Light Obsidian", sans-serif;
--h4-font: "Open Sans Light Obsidian", sans-serif;
--h5-font: "Open Sans Light Obsidian", sans-serif;
--h6-font: "Open Sans Light Obsidian", sans-serif;
--font-text-size: 22px;
--font-smallest: 0.65em;
--font-smaller: 0.8em;
--font-small: 0.933em;
--font-weight: 400;
--bold-modifier: 200;
--bold-weight: 700;
--line-height-normal: 1.61;
--line-height-tight: 1.4;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
--font-ui-medium: 16px;
--font-ui-larger: 18px;
--radius-s: 8px;
--radius-m: 10px;
--radius-l: 14px;
--radius-xl: 16px;
/* Main Colors */
--accent-h: 254;
--accent-s: 80%;
--accent-l: 68%;
--background-primary: #050606;
--background-primary-alt: #101113;
--background-secondary: #0a0a0b;
--background-secondary-alt: #1a1d20;
--background-modifier-hover: #1b3b45;
--background-modifier-active-hover: #2c2c32;
--background-modifier-border: #3b3b3e;
--background-modifier-border-hover: #282828;
--background-modifier-border-focus: #282828;
--background-modifier-form-field: #1f2f3d;
--interactive-normal: #193755;
--interactive-hover: #2c0f23;
--interactive-accent: #21431a;
--interactive-accent-hover: #602e2e;
--caret-color: #6cda6c;
--bold-color: #dad79b;
--italic-color: #86b7f0;
--text-highlight-bg: #246607;
--text-normal: #e1e1eb;
--text-muted: #6f7a88;
--text-faint: #798a8e;
--text-on-accent: #dadde4;
--text-accent: #72c6ea;
--text-accent-hover: #66cccc;
--text-selection: #32537b;
/* Headers */
--inline-title-color: #d3dfe6;
--inline-title-line-height: 1.61;
--inline-title-size: 2.2em;
--inline-title-weight: 300;
--h1-color: #6f9fd6;
--h2-color: #78c988;
--h3-color: #a497f0;
--h4-color: #c285b9;
--h5-color: #e07a6e;
--h6-color: #d9c47a;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.23em;
--h1-weight: 400;
--h2-weight: 400;
--h3-weight: 400;
--h4-weight: 400;
--h5-weight: 400;
--h6-weight: 400;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 1000px;
--file-folding-offset: 24px;
--hr-color: #637884;
--hr-thickness: 1px;
--border-width: 1px;
--tag-background-hover: #312c47;
--tag-radius: 0;
--button-radius: 0;
--search-clear-button-color: #f15b5b;
/* Links */
--link-color: #9ed2fd;
--link-color-hover: #69d1d1;
--link-unresolved-color: #f4b2b2;
--link-unresolved-decoration-color: #9ed2fd;
--link-unresolved-opacity: 0.9;
--link-decoration-thickness: 1px;
--link-decoration: none;
--link-external-color: #bfacf1;
--link-external-color-hover: #d0839e;
--link-external-decoration: underline;
--link-external-decoration-hover: underline;
/* Lists */
--list-indent: 2.8em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.12em;
--list-marker-color: #70b5d6;
--list-marker-color-hover: #d43dca;
--list-marker-color-collapsed: #35b035;
--list-bullet-size: 0.31em;
/* Blockquote */
--blockquote-background-color: #130f12;
--blockquote-border-thickness: 4px;
--blockquote-border-color: #bd95e6;
--blockquote-color: #e4d8e3;
/* Code */
--code-background: #000000;
--code-size: 0.8em;
--code-normal: #fffcfe;
--code-comment: #8a8a8a;
--code-function: #96cf70;
--code-important: #e4d386;
--code-keyword: #56B6C2;
--code-operator: #e9626d;
--code-property: #6186ec;
--code-punctuation: #e2e8ff;
--code-string: #E5C07B;
--code-tag: #6186ec;
--code-value: #d66af7;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 25%;
--checkbox-size: 1.2em;
--checkbox-marker-color: var(--background-primary);
--checkbox-color: #6186ec;
--checkbox-color-hover: #e9626d;
--checkbox-border-color: var(--text-faint);
--checkbox-border-color-hover: var(--text-muted);
--checkbox-margin-inline-start: 0;
--checklist-done-decoration: none;
--checklist-done-color: #283f42;
/* Tables */
--table-white-space: break-spaces;
--table-background: transparent;
--table-drag-handle-background: transparent;
--table-add-button-background: transparent;
--table-text-color: inherit;
--table-header-background: #0f0f0f;
--table-header-color: #d6d7dc;
--table-border-color: #3a3a3a;
--table-header-border-color: #171717;
--table-header-background-hover: #1b0f17;
--table-row-background-hover: #020807;
--table-row-alt-background-hover: #020807;
--table-selection-border-color: #5fa4b0;
--table-drag-handle-background-active: #5fa4b0;
--table-drag-handle-color: #c64e4e;
--table-drag-handle-color-active: #ddff1b;
--table-add-button-border-color: #3a3a3a;
--table-selection: hsla(var(--color-accent-hsl), 0.05);
--table-selection-blend-mode: var(--highlight-mix-blend-mode);
--table-border-width: 1px;
--table-header-border-width: 1px;
--table-header-font: inherit;
--table-header-size: 0.8em;
--table-text-size: 0.8em;
--table-column-min-width: 3ch;
--table-column-max-width: none;
--table-column-first-border-width: 1px;
--table-column-last-border-width: 1px;
--table-row-last-border-width: 1px;
--table-add-button-border-width: 2px;
--table-selection-border-width: 2px;
--table-selection-border-radius: 4px;
--table-cell-vertical-alignment: top;
--table-header-weight: calc(var(--font-weight) + var(--bold-modifier));
--table-line-height: var(--line-height-tight);
/* Tabs */
--tab-background-active: #050606;
--tab-text-color: #718183;
--tab-text-color-active: #a9bfc2;
--tab-text-color-focused: #8fa2a5;
--tab-text-color-focused-active: #58919a;
--tab-text-color-focused-highlighted: #2c0f23;
--tab-text-color-focused-active-current: #85bfc5;
--tab-font-size: 0.85em;
--tab-container-background: #080808;
--tab-divider-color: #352121;
--tab-outline-color: #1f1b32;
--tab-curve: 0;
--tab-radius: 0;
--tab-radius-active: 0;
--tab-max-width: 15em;
/* Metadata */
--metadata-label-text-color: #e1e1eb;
--metadata-label-width: 8.5em;
--metadata-divider-width: 0;
--metadata-gap: 1px;
--metadata-property-radius: 0;
--metadata-property-radius-hover: 0;
--metadata-property-radius-focus: 0px;
--metadata-property-background: #050606;
--metadata-property-background-hover: transparent;
--metadata-label-font-size: 0.8em;
--metadata-input-font-size: 0.8em;
--metadata-sidebar-label-font-size: 0.8em;
--metadata-sidebar-input-font-size: 0.8em;
/* Graph View */
--graph-node: #9b8c06;
--graph-line: #2979ff;
--graph-node-unresolved: #9f297b;
--graph-node-focused: #33ff57;
--graph-node-tag: #c072a1;
--graph-node-attachment: #00e5ff;
/* UI Icons */
--icon-color: #58919a;
--icon-color-hover: #8bb188;
--icon-color-focused: #7ad67f;
--icon-opacity: 1;
--icon-opacity-hover: 1;
--icon-opacity-active: 1;
--clickable-icon-radius: 0;
/* Swatch */
--swatch-radius: 14px;
--swatch-height: 24px;
--swatch-width: 24px;
--swatch-shadow: inset 0 0 0 2px #000001;
/* Indentation */
--indentation-guide-width: 1px;
--indentation-guide-width-active: 2px;
--indentation-guide-color: #245f5f;
--indentation-guide-color-active: #5a245f;
--indentation-guide-editing-indent: 1.1em;
--indentation-guide-reading-indent: -0.85em;
--indentation-guide-source-indent: 0.85em;
/* Navigation */
--nav-item-color: #dfdfe0;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #1d2d1f;
--nav-item-background-active: #2d1d1d;
--nav-item-white-space: pre;
--nav-indentation-guide-width: 1px;
--nav-indentation-guide-color: #6386d2;
--nav-collapse-icon-color: #408b39;
/* Popover (Hover Links) */
--popover-width: 800px;
--popover-height: 600px;
--popover-max-height: 100vh;
--popover-pdf-width: 700px;
--popover-pdf-height: 700px;
/* Prompt (Command Palette) */
--prompt-input-height: 40px;
--prompt-width: 1000px;
--prompt-border-width: 2px;
--prompt-border-color: #4fc0c0;
/* Modal */
--modal-width: 90vw;
--modal-height: 85vh;
--modal-max-width: 1000px;
--modal-border-color: #4fc0c0;
--modal-radius: 0px;
--modal-border-width: 2px;
--modal-community-sidebar-width: 290px;
/* Slider */
--slider-thumb-border-width: 3px;
--slider-thumb-border-color: #da65bb;
--slider-thumb-height: 14px;
--slider-thumb-width: 14px;
--slider-thumb-y: -5px;
--slider-thumb-radius: 50%;
--slider-s-thumb-size: 18px;
--slider-s-thumb-position: -5px;
--slider-track-background: #176b80;
--slider-track-height: 3px;
/* Dialog */
--dialog-width: 560px;
--dialog-max-width: 80vw;
--dialog-max-height: 85vh;
--drag-ghost-background: rgba(0, 0, 0, 0.85);
--drag-ghost-text-color: #fff;
}

.theme-light, .theme-dark {
--font-text-theme: "Orbit Obsidian", sans-serif;
--font-interface-theme: "Orbit Obsidian", sans-serif;
--font-monospace-theme: "Share Tech Mono Obsidian", monospace;
--inline-title-font: "Share Tech Mono Obsidian", serif;
--h1-font: "Share Tech Mono Obsidian", serif;
--h2-font: "Share Tech Mono Obsidian", serif;
--h3-font: "Share Tech Mono Obsidian", serif;
--h4-font: "Share Tech Mono Obsidian", serif;
--h5-font: "Share Tech Mono Obsidian", serif;
--h6-font: "Share Tech Mono Obsidian", serif;
/*Typography*/
--font-text-size: 20px;
--line-height-normal: 1.5;
--line-height-tight: 1.34;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
/* Headers */
--inline-title-line-height: 1.4;
--inline-title-size: 2.2em;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.2em;
--file-header-font-size: 0.7rem;
/* Lists */
--list-indent: 2.5em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.09em;
/* Code */
--code-size: 0.8em;
--code-radius: 0;
/* Checkbox */
--checkbox-radius: 0%;
/* Tables */
--table-border-width: 2px;
--table-header-border-width: 2px;
--table-column-first-border-width: 2px;
--table-column-last-border-width: 2px;
--table-row-last-border-width: 2px;
--table-add-button-border-width: 2px;
--table-selection-border-width: 2px;
--table-selection-border-radius: 2px;
/* Metadata */
--metadata-label-font-size: 0.7em;
--metadata-input-font-size: 0.7em;
/* Navigation */
--nav-indentation-guide-width: 2px;
/* Prompt (Command Palette) */
--prompt-border-width: 2px;
/* Modal */
--modal-border-width: 1px;
/* Slider */
--slider-thumb-radius: 0%;
}

.theme-dark {
/* COLORS */
--background-primary: #0a0014;
--background-primary-alt: #120024;
--background-secondary: #1a002b;
--background-secondary-alt: #240036;
--background-modifier-hover: #00474f;
--background-modifier-active-hover: #2b0047;
--background-modifier-border: #3d1f59;
--background-modifier-border-hover: #4d007d;
--background-modifier-border-focus: #4d007d;
--background-modifier-form-field: #1a1a33;
--interactive-normal: #a82b53;
--interactive-hover: #ad336e;
--interactive-accent: #12c5d2;
--interactive-accent-hover: #01e8e8;
--caret-color: #00ffee;
--bold-color: #d874d8;
--italic-color: #6ecceb;
--text-highlight-bg: #522a6f;
--text-normal: #f2f2f2;
--text-muted: #b382d9;
--text-faint: #7776a1;
--text-on-accent: #000000;
--text-accent: #ff2aff;
--text-accent-hover: #ff66ff;
--text-selection: #004d99;
--inline-title-color: #ee5ebe;
--h1-color: #abbaff;
--h2-color: #5ad6e1;
--h3-color: #da88da;
--h4-color: #4fda74;
--h5-color: #e67b9a;
--h6-color: #e4ca7d;
--hr-color: #dde999;
--link-color: #58f4ff;
--link-color-hover: #ff7ad3;
--link-unresolved-color: #ff9e9e;
--link-unresolved-decoration-color: #ff9e9e;
--link-external-color: #d67dc4;
--link-external-color-hover: #79d9e2;
--list-marker-color: #ff89ff;
--list-marker-color-hover: #00eaff;
--list-marker-color-collapsed: #ffdd00;
--blockquote-background-color: #14142f;
--blockquote-border-color: #ff2a6d;
--blockquote-color: #fdf3ff;
--code-background: #171733;
--code-normal: #a9a9fd;
--code-comment: #d4cbd8;
--code-function: #10dcdc;
--code-important: #d3ab0a;
--code-keyword: #ff74dc;
--code-operator: #96ff8c;
--code-property: #66aaff;
--code-punctuation: #c0c0d8;
--code-string: #0ae9bc;
--code-tag: #dd3b8c;
--code-value: #7285ff;
--checkbox-color: #28dddd;
--checkbox-color-hover: #a73b8c;
--checklist-done-color: #5f5f82;
--table-header-background: #1a0030;
--table-header-color: #ffffff;
--table-border-color: #5b9fbc;
--table-header-border-color: #5b9fbc;
--table-header-background-hover: #081800;
--table-row-background-hover: #081800;
--table-row-alt-background-hover: #081800;
--table-selection-border-color: #89e16c;
--table-drag-handle-background-active: #00ff88;
--table-drag-handle-color: #ff2a6d;
--table-drag-handle-color-active: #ffcc00;
--table-add-button-border-color: #3d1f59;
--tab-background-active: #0a0014;
--tab-text-color: #b382d9;
--tab-text-color-active: #4190a6;
--tab-text-color-focused: #ca76ca;
--tab-text-color-focused-active: #5df4ff;
--tab-text-color-focused-highlighted: #b3258f;
--tab-text-color-focused-active-current: #13e0d2;
--tab-container-background: #1a002b;
--tab-divider-color: #386e86;
--tab-outline-color: #5a2a8a;
--nav-item-color: #e6e6ff;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #66fffa;
--nav-item-background-hover: #3c185a;
--nav-item-background-active: #401140;
--nav-indentation-guide-color: #8a2a7c;
--nav-collapse-icon-color: #00eaff;
--icon-color: #e12762;
--icon-color-hover: #00f0ff;
--icon-color-focused: #2bff00;
--graph-node: #ff2a6d;
--graph-line: #00eaff;
--graph-node-unresolved: #ffcc00;
--graph-node-focused: #ff00ff;
--graph-node-tag: #00ffee;
--graph-node-attachment: #01cf7d;
--prompt-border-color: #00ffff;
--modal-border-color: #ff2a6d;
--slider-thumb-border-color: #af2faf;
--slider-track-background: #0cc5d6;
--tag-background-hover: #1f1f1f;
--search-clear-button-color: #06c109;
--metadata-property-background: #1b0c23;
--indentation-guide-color: #1f6b75;
--indentation-guide-color-active: #67b967;
}

.theme-dark .workspace-tab-header-container {
background-color: #1a002b;
}

.theme-light.arzaba-font-override, .arzaba-font-override {
--font-text-size: 20px !important;
}`,
      light: `.theme-dark, .theme-light {
/*Typography*/
--font-text-theme: "Open Sans Light Obsidian", sans-serif;
--font-interface-theme: "Open Sans Light Obsidian", sans-serif;
--font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
--inline-title-font: "Open Sans Light Obsidian", sans-serif;
--h1-font: "Open Sans Light Obsidian", sans-serif;
--h2-font: "Open Sans Light Obsidian", sans-serif;
--h3-font: "Open Sans Light Obsidian", sans-serif;
--h4-font: "Open Sans Light Obsidian", sans-serif;
--h5-font: "Open Sans Light Obsidian", sans-serif;
--h6-font: "Open Sans Light Obsidian", sans-serif;
--font-text-size: 22px;
--font-smallest: 0.65em;
--font-smaller: 0.8em;
--font-small: 0.933em;
--font-weight: 400;
--bold-modifier: 200;
--bold-weight: 700;
--line-height-normal: 1.61;
--line-height-tight: 1.4;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
--font-ui-medium: 16px;
--font-ui-larger: 18px;
--radius-s: 8px;
--radius-m: 10px;
--radius-l: 14px;
--radius-xl: 16px;
/* Main Colors */
--accent-h: 254;
--accent-s: 80%;
--accent-l: 68%;
--background-primary: #050606;
--background-primary-alt: #101113;
--background-secondary: #0a0a0b;
--background-secondary-alt: #1a1d20;
--background-modifier-hover: #1b3b45;
--background-modifier-active-hover: #2c2c32;
--background-modifier-border: #3b3b3e;
--background-modifier-border-hover: #282828;
--background-modifier-border-focus: #282828;
--background-modifier-form-field: #1f2f3d;
--interactive-normal: #193755;
--interactive-hover: #2c0f23;
--interactive-accent: #21431a;
--interactive-accent-hover: #602e2e;
--caret-color: #6cda6c;
--bold-color: #dad79b;
--italic-color: #86b7f0;
--text-highlight-bg: #246607;
--text-normal: #e1e1eb;
--text-muted: #6f7a88;
--text-faint: #798a8e;
--text-on-accent: #dadde4;
--text-accent: #72c6ea;
--text-accent-hover: #66cccc;
--text-selection: #32537b;
/* Headers */
--inline-title-color: #d3dfe6;
--inline-title-line-height: 1.61;
--inline-title-size: 2.2em;
--inline-title-weight: 300;
--h1-color: #6f9fd6;
--h2-color: #78c988;
--h3-color: #a497f0;
--h4-color: #c285b9;
--h5-color: #e07a6e;
--h6-color: #d9c47a;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.23em;
--h1-weight: 400;
--h2-weight: 400;
--h3-weight: 400;
--h4-weight: 400;
--h5-weight: 400;
--h6-weight: 400;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 1000px;
--file-folding-offset: 24px;
--hr-color: #637884;
--hr-thickness: 1px;
--border-width: 1px;
--tag-background-hover: #312c47;
--tag-radius: 0;
--button-radius: 0;
--search-clear-button-color: #f15b5b;
/* Links */
--link-color: #9ed2fd;
--link-color-hover: #69d1d1;
--link-unresolved-color: #f4b2b2;
--link-unresolved-decoration-color: #9ed2fd;
--link-unresolved-opacity: 0.9;
--link-decoration-thickness: 1px;
--link-decoration: none;
--link-external-color: #bfacf1;
--link-external-color-hover: #d0839e;
--link-external-decoration: underline;
--link-external-decoration-hover: underline;
/* Lists */
--list-indent: 2.8em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.12em;
--list-marker-color: #70b5d6;
--list-marker-color-hover: #d43dca;
--list-marker-color-collapsed: #35b035;
--list-bullet-size: 0.31em;
/* Blockquote */
--blockquote-background-color: #130f12;
--blockquote-border-thickness: 4px;
--blockquote-border-color: #bd95e6;
--blockquote-color: #e4d8e3;
/* Code */
--code-background: #000000;
--code-size: 0.8em;
--code-normal: #fffcfe;
--code-comment: #8a8a8a;
--code-function: #96cf70;
--code-important: #e4d386;
--code-keyword: #56B6C2;
--code-operator: #e9626d;
--code-property: #6186ec;
--code-punctuation: #e2e8ff;
--code-string: #E5C07B;
--code-tag: #6186ec;
--code-value: #d66af7;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 25%;
--checkbox-size: 1.2em;
--checkbox-marker-color: var(--background-primary);
--checkbox-color: #6186ec;
--checkbox-color-hover: #e9626d;
--checkbox-border-color: var(--text-faint);
--checkbox-border-color-hover: var(--text-muted);
--checkbox-margin-inline-start: 0;
--checklist-done-decoration: none;
--checklist-done-color: #283f42;
/* Tables */
--table-white-space: break-spaces;
--table-background: transparent;
--table-drag-handle-background: transparent;
--table-add-button-background: transparent;
--table-text-color: inherit;
--table-header-background: #0f0f0f;
--table-header-color: #d6d7dc;
--table-border-color: #3a3a3a;
--table-header-border-color: #171717;
--table-header-background-hover: #1b0f17;
--table-row-background-hover: #020807;
--table-row-alt-background-hover: #020807;
--table-selection-border-color: #5fa4b0;
--table-drag-handle-background-active: #5fa4b0;
--table-drag-handle-color: #c64e4e;
--table-drag-handle-color-active: #ddff1b;
--table-add-button-border-color: #3a3a3a;
--table-selection: hsla(var(--color-accent-hsl), 0.05);
--table-selection-blend-mode: var(--highlight-mix-blend-mode);
--table-border-width: 1px;
--table-header-border-width: 1px;
--table-header-font: inherit;
--table-header-size: 0.8em;
--table-text-size: 0.8em;
--table-column-min-width: 3ch;
--table-column-max-width: none;
--table-column-first-border-width: 1px;
--table-column-last-border-width: 1px;
--table-row-last-border-width: 1px;
--table-add-button-border-width: 2px;
--table-selection-border-width: 2px;
--table-selection-border-radius: 4px;
--table-cell-vertical-alignment: top;
--table-header-weight: calc(var(--font-weight) + var(--bold-modifier));
--table-line-height: var(--line-height-tight);
/* Tabs */
--tab-background-active: #050606;
--tab-text-color: #718183;
--tab-text-color-active: #a9bfc2;
--tab-text-color-focused: #8fa2a5;
--tab-text-color-focused-active: #58919a;
--tab-text-color-focused-highlighted: #2c0f23;
--tab-text-color-focused-active-current: #85bfc5;
--tab-font-size: 0.85em;
--tab-container-background: #080808;
--tab-divider-color: #352121;
--tab-outline-color: #1f1b32;
--tab-curve: 0;
--tab-radius: 0;
--tab-radius-active: 0;
--tab-max-width: 15em;
/* Metadata */
--metadata-label-text-color: #e1e1eb;
--metadata-label-width: 8.5em;
--metadata-divider-width: 0;
--metadata-gap: 1px;
--metadata-property-radius: 0;
--metadata-property-radius-hover: 0;
--metadata-property-radius-focus: 0px;
--metadata-property-background: #050606;
--metadata-property-background-hover: transparent;
--metadata-label-font-size: 0.8em;
--metadata-input-font-size: 0.8em;
--metadata-sidebar-label-font-size: 0.8em;
--metadata-sidebar-input-font-size: 0.8em;
/* Graph View */
--graph-node: #9b8c06;
--graph-line: #2979ff;
--graph-node-unresolved: #9f297b;
--graph-node-focused: #33ff57;
--graph-node-tag: #c072a1;
--graph-node-attachment: #00e5ff;
/* UI Icons */
--icon-color: #58919a;
--icon-color-hover: #8bb188;
--icon-color-focused: #7ad67f;
--icon-opacity: 1;
--icon-opacity-hover: 1;
--icon-opacity-active: 1;
--clickable-icon-radius: 0;
/* Swatch */
--swatch-radius: 14px;
--swatch-height: 24px;
--swatch-width: 24px;
--swatch-shadow: inset 0 0 0 2px #000001;
/* Indentation */
--indentation-guide-width: 1px;
--indentation-guide-width-active: 2px;
--indentation-guide-color: #245f5f;
--indentation-guide-color-active: #5a245f;
--indentation-guide-editing-indent: 1.1em;
--indentation-guide-reading-indent: -0.85em;
--indentation-guide-source-indent: 0.85em;
/* Navigation */
--nav-item-color: #dfdfe0;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #1d2d1f;
--nav-item-background-active: #2d1d1d;
--nav-item-white-space: pre;
--nav-indentation-guide-width: 1px;
--nav-indentation-guide-color: #6386d2;
--nav-collapse-icon-color: #408b39;
/* Popover (Hover Links) */
--popover-width: 800px;
--popover-height: 600px;
--popover-max-height: 100vh;
--popover-pdf-width: 700px;
--popover-pdf-height: 700px;
/* Prompt (Command Palette) */
--prompt-input-height: 40px;
--prompt-width: 1000px;
--prompt-border-width: 2px;
--prompt-border-color: #4fc0c0;
/* Modal */
--modal-width: 90vw;
--modal-height: 85vh;
--modal-max-width: 1000px;
--modal-border-color: #4fc0c0;
--modal-radius: 0px;
--modal-border-width: 2px;
--modal-community-sidebar-width: 290px;
/* Slider */
--slider-thumb-border-width: 3px;
--slider-thumb-border-color: #da65bb;
--slider-thumb-height: 14px;
--slider-thumb-width: 14px;
--slider-thumb-y: -5px;
--slider-thumb-radius: 50%;
--slider-s-thumb-size: 18px;
--slider-s-thumb-position: -5px;
--slider-track-background: #176b80;
--slider-track-height: 3px;
/* Dialog */
--dialog-width: 560px;
--dialog-max-width: 80vw;
--dialog-max-height: 85vh;
--drag-ghost-background: rgba(0, 0, 0, 0.85);
--drag-ghost-text-color: #fff;
}

.theme-light, .theme-dark {
--font-text-theme: "Orbit Obsidian", sans-serif;
--font-interface-theme: "Orbit Obsidian", sans-serif;
--font-monospace-theme: "Share Tech Mono Obsidian", monospace;
--inline-title-font: "Share Tech Mono Obsidian", serif;
--h1-font: "Share Tech Mono Obsidian", serif;
--h2-font: "Share Tech Mono Obsidian", serif;
--h3-font: "Share Tech Mono Obsidian", serif;
--h4-font: "Share Tech Mono Obsidian", serif;
--h5-font: "Share Tech Mono Obsidian", serif;
--h6-font: "Share Tech Mono Obsidian", serif;
/*Typography*/
--font-text-size: 20px;
--line-height-normal: 1.5;
--line-height-tight: 1.34;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
/* Headers */
--inline-title-line-height: 1.4;
--inline-title-size: 2.2em;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.2em;
--file-header-font-size: 0.7rem;
/* Lists */
--list-indent: 2.5em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.09em;
/* Code */
--code-size: 0.8em;
--code-radius: 0;
/* Checkbox */
--checkbox-radius: 0%;
/* Tables */
--table-border-width: 2px;
--table-header-border-width: 2px;
--table-column-first-border-width: 2px;
--table-column-last-border-width: 2px;
--table-row-last-border-width: 2px;
--table-add-button-border-width: 2px;
--table-selection-border-width: 2px;
--table-selection-border-radius: 2px;
/* Metadata */
--metadata-label-font-size: 0.7em;
--metadata-input-font-size: 0.7em;
/* Navigation */
--nav-indentation-guide-width: 2px;
/* Prompt (Command Palette) */
--prompt-border-width: 2px;
/* Modal */
--modal-border-width: 1px;
/* Slider */
--slider-thumb-radius: 0%;
}

.theme-light {
--background-primary: #ffffff;
--background-primary-alt: #f7f7ff;
--background-secondary: #f2f2f9;
--background-secondary-alt: #ececf7;
--background-modifier-hover: #e0faff;
--background-modifier-active-hover: #ffe6ff;
--background-modifier-border: #ccccdd;
--background-modifier-border-hover: #b399ff;
--background-modifier-border-focus: #a366ff;
--background-modifier-form-field: #f0f0ff;
--interactive-normal: #e77898;
--interactive-hover: #ea5fa7;
--interactive-accent: #3dabb5;
--interactive-accent-hover: #1bc4c4;
--caret-color: #00c0bb;
--bold-color: #c265c2;
--italic-color: #5ca6c6;
--text-highlight-bg: #e4caf3;
--text-normal: #1a1a1a;
--text-muted: #6e5e8c;
--text-faint: #9999bb;
--text-on-accent: #ffffff;
--text-accent: #d624d6;
--text-accent-hover: #ff33ff;
--text-selection: #b3e0ff;
--inline-title-color: #bc468f;
--h1-color: #3344aa;
--h2-color: #0099aa;
--h3-color: #b84cb8;
--h4-color: #1a9a4f;
--h5-color: #c24063;
--h6-color: #a68b29;
--hr-color: #999966;
--link-color: #0077cc;
--link-color-hover: #b0398c;
--link-unresolved-color: #b72626;
--link-unresolved-decoration-color: #b72626;
--link-external-color: #8d2384;
--link-external-color-hover: #1b7491;
--list-marker-color: #cc00cc;
--list-marker-color-hover: #00bbbb;
--list-marker-color-collapsed: #e6b800;
--blockquote-background-color: #efe7fe;
--blockquote-border-color: #fd77a1;
--blockquote-color: #222222;
--code-background: #e5e5fd;
--code-normal: #333388;
--code-comment: #616161;
--code-function: #008c8c;
--code-important: #b38a00;
--code-keyword: #d62ad6;
--code-operator: #008f44;
--code-property: #004d99;
--code-punctuation: #555577;
--code-string: #009977;
--code-tag: #bb2266;
--code-value: #3344aa;
--checkbox-color: #22aaaa;
--checkbox-color-hover: #b84ca0;
--checklist-done-color: #888899;
--table-header-background: #f2f2ff;
--table-header-color: #000000;
--table-border-color: #6699aa;
--table-header-border-color: #6699aa;
--table-header-background-hover: #e8ffe8;
--table-row-background-hover: #f2fff2;
--table-row-alt-background-hover: #f2fff2;
--table-selection-border-color: #66aa66;
--table-drag-handle-background-active: #11a058;
--table-drag-handle-color: #b80751;
--table-drag-handle-color-active: #e6b800;
--table-add-button-border-color: #9292d1;
--tab-background-active: #ffffff;
--tab-text-color: #6e5e8c;
--tab-text-color-active: #007799;
--tab-text-color-focused: #a64ca6;
--tab-text-color-focused-active: #00aacc;
--tab-text-color-focused-highlighted: #a61f7c;
--tab-text-color-focused-active-current: #00abab;
--tab-container-background: #f2f2f9;
--tab-divider-color: #4494c3;
--tab-outline-color: #9966cc;
--nav-item-color: #242424;
--nav-item-color-hover: #000000;
--nav-item-color-active: #000000;
--nav-item-background-hover: #f0e6ff;
--nav-item-background-active: #dbbbdb;
--nav-indentation-guide-color: #bb66aa;
--nav-collapse-icon-color: #009999;
--icon-color: #aa2266;
--icon-color-hover: #00aabb;
--icon-color-focused: #00aa33;
--graph-node: #ff2a6d;
--graph-line: #00bbbb;
--graph-node-unresolved: #e6b800;
--graph-node-focused: #ff00ff;
--graph-node-tag: #00bbbb;
--graph-node-attachment: #00aa66;
--prompt-border-color: #00cccc;
--modal-border-color: #ff2a6d;
--slider-thumb-border-color: #993399;
--slider-track-background: #00aacc;
--tag-background-hover: #eeeeee;
--search-clear-button-color: #28b758;
--metadata-label-text-color: #1a1a1a;
--metadata-property-background: #f7f7f7;
--indentation-guide-color: #99bbbb;
--indentation-guide-color-active: #55aa88;
}

.theme-light .workspace-tab-header-container {
background-color: #f2f2f9;
}

.arzaba-font-override, .theme-dark.arzaba-font-override {
--font-text-size: 20px !important;
}`,
    },
    "arzaba-retro": {
      dark: `.theme-dark, .theme-light {
/*Typography*/
--font-text-theme: "Open Sans Light Obsidian", sans-serif;
--font-interface-theme: "Open Sans Light Obsidian", sans-serif;
--font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
--inline-title-font: "Open Sans Light Obsidian", sans-serif;
--h1-font: "Open Sans Light Obsidian", sans-serif;
--h2-font: "Open Sans Light Obsidian", sans-serif;
--h3-font: "Open Sans Light Obsidian", sans-serif;
--h4-font: "Open Sans Light Obsidian", sans-serif;
--h5-font: "Open Sans Light Obsidian", sans-serif;
--h6-font: "Open Sans Light Obsidian", sans-serif;
--font-text-size: 22px;
--font-smallest: 0.65em;
--font-smaller: 0.8em;
--font-small: 0.933em;
--font-weight: 400;
--bold-modifier: 200;
--bold-weight: 700;
--line-height-normal: 1.61;
--line-height-tight: 1.4;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
--font-ui-medium: 16px;
--font-ui-larger: 18px;
--radius-s: 8px;
--radius-m: 10px;
--radius-l: 14px;
--radius-xl: 16px;
/* Main Colors */
--accent-h: 254;
--accent-s: 80%;
--accent-l: 68%;
--background-primary: #050606;
--background-primary-alt: #101113;
--background-secondary: #0a0a0b;
--background-secondary-alt: #1a1d20;
--background-modifier-hover: #1b3b45;
--background-modifier-active-hover: #2c2c32;
--background-modifier-border: #3b3b3e;
--background-modifier-border-hover: #282828;
--background-modifier-border-focus: #282828;
--background-modifier-form-field: #1f2f3d;
--interactive-normal: #193755;
--interactive-hover: #2c0f23;
--interactive-accent: #21431a;
--interactive-accent-hover: #602e2e;
--caret-color: #6cda6c;
--bold-color: #dad79b;
--italic-color: #86b7f0;
--text-highlight-bg: #246607;
--text-normal: #e1e1eb;
--text-muted: #6f7a88;
--text-faint: #798a8e;
--text-on-accent: #dadde4;
--text-accent: #72c6ea;
--text-accent-hover: #66cccc;
--text-selection: #32537b;
/* Headers */
--inline-title-color: #d3dfe6;
--inline-title-line-height: 1.61;
--inline-title-size: 2.2em;
--inline-title-weight: 300;
--h1-color: #6f9fd6;
--h2-color: #78c988;
--h3-color: #a497f0;
--h4-color: #c285b9;
--h5-color: #e07a6e;
--h6-color: #d9c47a;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.23em;
--h1-weight: 400;
--h2-weight: 400;
--h3-weight: 400;
--h4-weight: 400;
--h5-weight: 400;
--h6-weight: 400;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 1000px;
--file-folding-offset: 24px;
--hr-color: #637884;
--hr-thickness: 1px;
--border-width: 1px;
--tag-background-hover: #312c47;
--tag-radius: 0;
--button-radius: 0;
--search-clear-button-color: #f15b5b;
/* Links */
--link-color: #9ed2fd;
--link-color-hover: #69d1d1;
--link-unresolved-color: #f4b2b2;
--link-unresolved-decoration-color: #9ed2fd;
--link-unresolved-opacity: 0.9;
--link-decoration-thickness: 1px;
--link-decoration: none;
--link-external-color: #bfacf1;
--link-external-color-hover: #d0839e;
--link-external-decoration: underline;
--link-external-decoration-hover: underline;
/* Lists */
--list-indent: 2.8em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.12em;
--list-marker-color: #70b5d6;
--list-marker-color-hover: #d43dca;
--list-marker-color-collapsed: #35b035;
--list-bullet-size: 0.31em;
/* Blockquote */
--blockquote-background-color: #130f12;
--blockquote-border-thickness: 4px;
--blockquote-border-color: #bd95e6;
--blockquote-color: #e4d8e3;
/* Code */
--code-background: #000000;
--code-size: 0.8em;
--code-normal: #fffcfe;
--code-comment: #8a8a8a;
--code-function: #96cf70;
--code-important: #e4d386;
--code-keyword: #56B6C2;
--code-operator: #e9626d;
--code-property: #6186ec;
--code-punctuation: #e2e8ff;
--code-string: #E5C07B;
--code-tag: #6186ec;
--code-value: #d66af7;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 25%;
--checkbox-size: 1.2em;
--checkbox-marker-color: var(--background-primary);
--checkbox-color: #6186ec;
--checkbox-color-hover: #e9626d;
--checkbox-border-color: var(--text-faint);
--checkbox-border-color-hover: var(--text-muted);
--checkbox-margin-inline-start: 0;
--checklist-done-decoration: none;
--checklist-done-color: #283f42;
/* Tables */
--table-white-space: break-spaces;
--table-background: transparent;
--table-drag-handle-background: transparent;
--table-add-button-background: transparent;
--table-text-color: inherit;
--table-header-background: #0f0f0f;
--table-header-color: #d6d7dc;
--table-border-color: #3a3a3a;
--table-header-border-color: #171717;
--table-header-background-hover: #1b0f17;
--table-row-background-hover: #020807;
--table-row-alt-background-hover: #020807;
--table-selection-border-color: #5fa4b0;
--table-drag-handle-background-active: #5fa4b0;
--table-drag-handle-color: #c64e4e;
--table-drag-handle-color-active: #ddff1b;
--table-add-button-border-color: #3a3a3a;
--table-selection: hsla(var(--color-accent-hsl), 0.05);
--table-selection-blend-mode: var(--highlight-mix-blend-mode);
--table-border-width: 1px;
--table-header-border-width: 1px;
--table-header-font: inherit;
--table-header-size: 0.8em;
--table-text-size: 0.8em;
--table-column-min-width: 3ch;
--table-column-max-width: none;
--table-column-first-border-width: 1px;
--table-column-last-border-width: 1px;
--table-row-last-border-width: 1px;
--table-add-button-border-width: 2px;
--table-selection-border-width: 2px;
--table-selection-border-radius: 4px;
--table-cell-vertical-alignment: top;
--table-header-weight: calc(var(--font-weight) + var(--bold-modifier));
--table-line-height: var(--line-height-tight);
/* Tabs */
--tab-background-active: #050606;
--tab-text-color: #718183;
--tab-text-color-active: #a9bfc2;
--tab-text-color-focused: #8fa2a5;
--tab-text-color-focused-active: #58919a;
--tab-text-color-focused-highlighted: #2c0f23;
--tab-text-color-focused-active-current: #85bfc5;
--tab-font-size: 0.85em;
--tab-container-background: #080808;
--tab-divider-color: #352121;
--tab-outline-color: #1f1b32;
--tab-curve: 0;
--tab-radius: 0;
--tab-radius-active: 0;
--tab-max-width: 15em;
/* Metadata */
--metadata-label-text-color: #e1e1eb;
--metadata-label-width: 8.5em;
--metadata-divider-width: 0;
--metadata-gap: 1px;
--metadata-property-radius: 0;
--metadata-property-radius-hover: 0;
--metadata-property-radius-focus: 0px;
--metadata-property-background: #050606;
--metadata-property-background-hover: transparent;
--metadata-label-font-size: 0.8em;
--metadata-input-font-size: 0.8em;
--metadata-sidebar-label-font-size: 0.8em;
--metadata-sidebar-input-font-size: 0.8em;
/* Graph View */
--graph-node: #9b8c06;
--graph-line: #2979ff;
--graph-node-unresolved: #9f297b;
--graph-node-focused: #33ff57;
--graph-node-tag: #c072a1;
--graph-node-attachment: #00e5ff;
/* UI Icons */
--icon-color: #58919a;
--icon-color-hover: #8bb188;
--icon-color-focused: #7ad67f;
--icon-opacity: 1;
--icon-opacity-hover: 1;
--icon-opacity-active: 1;
--clickable-icon-radius: 0;
/* Swatch */
--swatch-radius: 14px;
--swatch-height: 24px;
--swatch-width: 24px;
--swatch-shadow: inset 0 0 0 2px #000001;
/* Indentation */
--indentation-guide-width: 1px;
--indentation-guide-width-active: 2px;
--indentation-guide-color: #245f5f;
--indentation-guide-color-active: #5a245f;
--indentation-guide-editing-indent: 1.1em;
--indentation-guide-reading-indent: -0.85em;
--indentation-guide-source-indent: 0.85em;
/* Navigation */
--nav-item-color: #dfdfe0;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #1d2d1f;
--nav-item-background-active: #2d1d1d;
--nav-item-white-space: pre;
--nav-indentation-guide-width: 1px;
--nav-indentation-guide-color: #6386d2;
--nav-collapse-icon-color: #408b39;
/* Popover (Hover Links) */
--popover-width: 800px;
--popover-height: 600px;
--popover-max-height: 100vh;
--popover-pdf-width: 700px;
--popover-pdf-height: 700px;
/* Prompt (Command Palette) */
--prompt-input-height: 40px;
--prompt-width: 1000px;
--prompt-border-width: 2px;
--prompt-border-color: #4fc0c0;
/* Modal */
--modal-width: 90vw;
--modal-height: 85vh;
--modal-max-width: 1000px;
--modal-border-color: #4fc0c0;
--modal-radius: 0px;
--modal-border-width: 2px;
--modal-community-sidebar-width: 290px;
/* Slider */
--slider-thumb-border-width: 3px;
--slider-thumb-border-color: #da65bb;
--slider-thumb-height: 14px;
--slider-thumb-width: 14px;
--slider-thumb-y: -5px;
--slider-thumb-radius: 50%;
--slider-s-thumb-size: 18px;
--slider-s-thumb-position: -5px;
--slider-track-background: #176b80;
--slider-track-height: 3px;
/* Dialog */
--dialog-width: 560px;
--dialog-max-width: 80vw;
--dialog-max-height: 85vh;
--drag-ghost-background: rgba(0, 0, 0, 0.85);
--drag-ghost-text-color: #fff;
}

.theme-dark, .theme-light {
--font-text-theme: "VT323 Obsidian", sans-serif;
--font-interface-theme: "VT323 Obsidian", sans-serif;
--font-monospace-theme: "VT323 Obsidian", monospace;
--inline-title-font: "VT323 Obsidian", serif;
--h1-font: "VT323 Obsidian", serif;
--h2-font: "VT323 Obsidian", serif;
--h3-font: "VT323 Obsidian", serif;
--h4-font: "VT323 Obsidian", serif;
--h5-font: "VT323 Obsidian", serif;
--h6-font: "VT323 Obsidian", serif;
/*Typography*/
--font-text-size: 34px;
--line-height-normal: 1;
--line-height-tight: 0.9;
--font-ui-smaller: 18px;
--font-ui-small: 22px;
--font-ui-medium: 25px;
--font-ui-larger: 18px;
/* Headers */
--inline-title-line-height: 1;
--inline-title-size: 2em;
--inline-title-weight: 400;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 800px;
--file-folding-offset: 24px;
--hr-thickness: 4px;
--border-width: 4px;
/* Links */
--link-unresolved-opacity: 1;
--link-decoration-thickness: 1px;
--link-decoration: underline;
/* Lists */
--list-indent: 1.5em;
--list-spacing: 0.05em;
/* Blockquote */
--blockquote-border-thickness: 0px;
/* Code */
--code-size: 0.8em;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 0%;
--checkbox-size: 1.3em;
--checklist-done-decoration: line-through;
/* Tables */
--table-border-width: 4px;
--table-header-border-width: 4px;
--table-column-max-width: none;
--table-column-first-border-width: 4px;
--table-column-last-border-width: 4px;
--table-row-last-border-width: 4px;
--table-add-button-border-width: 4px;
--table-selection-border-width: 4px;
--table-selection-border-radius: 0px;
/* Metadata */
--metadata-label-width: 6.5em;
--metadata-label-font-size: 0.7em;
--metadata-input-font-size: 0.7em;
/* Indentation */
--indentation-guide-width: 4px;
--indentation-guide-width-active: 4px;
/* Navigation */
--nav-indentation-guide-width: 3px;
/* Prompt (Command Palette) */
--prompt-input-height: 60px;
--prompt-width: 1100px;
--prompt-border-width: 4px;
/* Modal */
--modal-max-width: 1100px;
--modal-border-width: 4px;
/* Slider */
--slider-thumb-radius: 0%;
}

.theme-dark {
text-shadow:
		0 0 1px #006600,
		0 0 3px #1d541d,
		0 0 4px #0d1e0d;
--background-primary: #000000;
--background-primary-alt: #000000;
--background-secondary: #000000;
--background-secondary-alt: #000000;
--background-modifier-hover: #042e00;
--background-modifier-active-hover: #000000;
--background-modifier-border: #5bdb5b;
--background-modifier-border-hover: #55dd88;
--background-modifier-border-focus: #88ffbb;
--background-modifier-form-field: #000000;
--interactive-normal: #296029;
--interactive-hover: #0e790e;
--interactive-accent: #0b5e0b;
--interactive-accent-hover: #0e850e;
--caret-color: #02ff1f;
--bold-color: #4bf74b;
--italic-color: #42fd77;
--text-highlight-bg: #004500;
--text-normal: #7afe7a;
--text-muted: #c3fcc3;
--text-faint: #379f37;
--text-on-accent: #bbffaa;
--text-accent: #346a34;
--text-accent-hover: #38c638;
--text-selection: #024002;
--inline-title-color: #b3ffb3;
--h1-color: #aaffaa;
--h2-color: #99ff99;
--h3-color: #88ff88;
--h4-color: #77ff77;
--h5-color: #66ff77;
--h6-color: #55ff77;
--hr-color: #55aa55;
--link-color: #a9fcbf;
--link-color-hover: #89ff89;
--link-unresolved-color: #3fcb42;
--link-unresolved-decoration-color: #2e5e2d;
--link-external-color: #b8facd;
--link-external-color-hover: #ccffcc;
--list-marker-color: #25ff25;
--list-marker-color-hover: #bbffbb;
--list-marker-color-collapsed: #94ff56;
--blockquote-background-color: #010801;
--blockquote-border-color: #66ff88;
--blockquote-color: #88ff88;
--code-background: #010a00;
--code-normal: #99ff99;
--code-comment: #447744;
--code-function: #70ff70;
--code-important: #b0ff7b;
--code-keyword: #e3ffe3;
--code-operator: #38ff56;
--code-property: #aeffb9;
--code-punctuation: #48a548;
--code-string: #aaffaa;
--code-tag: #77ff77;
--code-value: #0eaf0e;
--checkbox-color: #1edc1e;
--checkbox-color-hover: #bbffbb;
--checklist-done-color: #446644;
--table-header-background: #000000;
--table-header-color: #8bff8b;
--table-border-color: #004400;
--table-header-border-color: #006600;
--table-header-background-hover: #111111;
--table-row-background-hover: #111111;
--table-row-alt-background-hover: #111111;
--table-selection-border-color: #99ff99;
--table-drag-handle-background-active: #001100;
--table-drag-handle-color: #88ff88;
--table-drag-handle-color-active: #ccffaa;
--table-add-button-border-color: #66aa66;
--tab-background-active: #000000;
--tab-text-color: #66ff66;
--tab-text-color-active: #88ff88;
--tab-text-color-focused: #aaffaa;
--tab-text-color-focused-active: #bbffbb;
--tab-text-color-focused-highlighted: #ccffcc;
--tab-text-color-focused-active-current: #53fe70;
--tab-container-background: #000000;
--tab-divider-color: #00e800;
--tab-outline-color: #61dc61;
--nav-item-color: #81ff81;
--nav-item-color-hover: #fdfffd;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #062100;
--nav-item-background-active: #042900;
--nav-indentation-guide-color: #004400;
--nav-collapse-icon-color: #00ff00;
--icon-color: #84ff84;
--icon-color-hover: #00ff00;
--icon-color-focused: #aaffaa;
--graph-node: #28c928;
--graph-line: #33aa66;
--graph-node-unresolved: #077007;
--graph-node-focused: #00ff00;
--graph-node-tag: #84ff84;
--graph-node-attachment: #98bb98;
--prompt-border-color: #88ff88;
--modal-border-color: #99ff99;
--slider-thumb-border-color: #aaffaa;
--slider-track-background: #002200;
--tag-background-hover: #000000;
--search-clear-button-color: #ffffff;
--metadata-label-text-color: #99ff99;
--metadata-property-background: #000000;
--indentation-guide-color: #113e11;
--indentation-guide-color-active: #00c000;
}

.theme-dark .workspace-tab-header-container {
background-color: #000000;
}

.theme-light.arzaba-font-override, .arzaba-font-override {
--font-text-size: 34px !important
;
}`,
      light: `.theme-dark, .theme-light {
/*Typography*/
--font-text-theme: "Open Sans Light Obsidian", sans-serif;
--font-interface-theme: "Open Sans Light Obsidian", sans-serif;
--font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
--inline-title-font: "Open Sans Light Obsidian", sans-serif;
--h1-font: "Open Sans Light Obsidian", sans-serif;
--h2-font: "Open Sans Light Obsidian", sans-serif;
--h3-font: "Open Sans Light Obsidian", sans-serif;
--h4-font: "Open Sans Light Obsidian", sans-serif;
--h5-font: "Open Sans Light Obsidian", sans-serif;
--h6-font: "Open Sans Light Obsidian", sans-serif;
--font-text-size: 22px;
--font-smallest: 0.65em;
--font-smaller: 0.8em;
--font-small: 0.933em;
--font-weight: 400;
--bold-modifier: 200;
--bold-weight: 700;
--line-height-normal: 1.61;
--line-height-tight: 1.4;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
--font-ui-medium: 16px;
--font-ui-larger: 18px;
--radius-s: 8px;
--radius-m: 10px;
--radius-l: 14px;
--radius-xl: 16px;
/* Main Colors */
--accent-h: 254;
--accent-s: 80%;
--accent-l: 68%;
--background-primary: #050606;
--background-primary-alt: #101113;
--background-secondary: #0a0a0b;
--background-secondary-alt: #1a1d20;
--background-modifier-hover: #1b3b45;
--background-modifier-active-hover: #2c2c32;
--background-modifier-border: #3b3b3e;
--background-modifier-border-hover: #282828;
--background-modifier-border-focus: #282828;
--background-modifier-form-field: #1f2f3d;
--interactive-normal: #193755;
--interactive-hover: #2c0f23;
--interactive-accent: #21431a;
--interactive-accent-hover: #602e2e;
--caret-color: #6cda6c;
--bold-color: #dad79b;
--italic-color: #86b7f0;
--text-highlight-bg: #246607;
--text-normal: #e1e1eb;
--text-muted: #6f7a88;
--text-faint: #798a8e;
--text-on-accent: #dadde4;
--text-accent: #72c6ea;
--text-accent-hover: #66cccc;
--text-selection: #32537b;
/* Headers */
--inline-title-color: #d3dfe6;
--inline-title-line-height: 1.61;
--inline-title-size: 2.2em;
--inline-title-weight: 300;
--h1-color: #6f9fd6;
--h2-color: #78c988;
--h3-color: #a497f0;
--h4-color: #c285b9;
--h5-color: #e07a6e;
--h6-color: #d9c47a;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.23em;
--h1-weight: 400;
--h2-weight: 400;
--h3-weight: 400;
--h4-weight: 400;
--h5-weight: 400;
--h6-weight: 400;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 1000px;
--file-folding-offset: 24px;
--hr-color: #637884;
--hr-thickness: 1px;
--border-width: 1px;
--tag-background-hover: #312c47;
--tag-radius: 0;
--button-radius: 0;
--search-clear-button-color: #f15b5b;
/* Links */
--link-color: #9ed2fd;
--link-color-hover: #69d1d1;
--link-unresolved-color: #f4b2b2;
--link-unresolved-decoration-color: #9ed2fd;
--link-unresolved-opacity: 0.9;
--link-decoration-thickness: 1px;
--link-decoration: none;
--link-external-color: #bfacf1;
--link-external-color-hover: #d0839e;
--link-external-decoration: underline;
--link-external-decoration-hover: underline;
/* Lists */
--list-indent: 2.8em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.12em;
--list-marker-color: #70b5d6;
--list-marker-color-hover: #d43dca;
--list-marker-color-collapsed: #35b035;
--list-bullet-size: 0.31em;
/* Blockquote */
--blockquote-background-color: #130f12;
--blockquote-border-thickness: 4px;
--blockquote-border-color: #bd95e6;
--blockquote-color: #e4d8e3;
/* Code */
--code-background: #000000;
--code-size: 0.8em;
--code-normal: #fffcfe;
--code-comment: #8a8a8a;
--code-function: #96cf70;
--code-important: #e4d386;
--code-keyword: #56B6C2;
--code-operator: #e9626d;
--code-property: #6186ec;
--code-punctuation: #e2e8ff;
--code-string: #E5C07B;
--code-tag: #6186ec;
--code-value: #d66af7;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 25%;
--checkbox-size: 1.2em;
--checkbox-marker-color: var(--background-primary);
--checkbox-color: #6186ec;
--checkbox-color-hover: #e9626d;
--checkbox-border-color: var(--text-faint);
--checkbox-border-color-hover: var(--text-muted);
--checkbox-margin-inline-start: 0;
--checklist-done-decoration: none;
--checklist-done-color: #283f42;
/* Tables */
--table-white-space: break-spaces;
--table-background: transparent;
--table-drag-handle-background: transparent;
--table-add-button-background: transparent;
--table-text-color: inherit;
--table-header-background: #0f0f0f;
--table-header-color: #d6d7dc;
--table-border-color: #3a3a3a;
--table-header-border-color: #171717;
--table-header-background-hover: #1b0f17;
--table-row-background-hover: #020807;
--table-row-alt-background-hover: #020807;
--table-selection-border-color: #5fa4b0;
--table-drag-handle-background-active: #5fa4b0;
--table-drag-handle-color: #c64e4e;
--table-drag-handle-color-active: #ddff1b;
--table-add-button-border-color: #3a3a3a;
--table-selection: hsla(var(--color-accent-hsl), 0.05);
--table-selection-blend-mode: var(--highlight-mix-blend-mode);
--table-border-width: 1px;
--table-header-border-width: 1px;
--table-header-font: inherit;
--table-header-size: 0.8em;
--table-text-size: 0.8em;
--table-column-min-width: 3ch;
--table-column-max-width: none;
--table-column-first-border-width: 1px;
--table-column-last-border-width: 1px;
--table-row-last-border-width: 1px;
--table-add-button-border-width: 2px;
--table-selection-border-width: 2px;
--table-selection-border-radius: 4px;
--table-cell-vertical-alignment: top;
--table-header-weight: calc(var(--font-weight) + var(--bold-modifier));
--table-line-height: var(--line-height-tight);
/* Tabs */
--tab-background-active: #050606;
--tab-text-color: #718183;
--tab-text-color-active: #a9bfc2;
--tab-text-color-focused: #8fa2a5;
--tab-text-color-focused-active: #58919a;
--tab-text-color-focused-highlighted: #2c0f23;
--tab-text-color-focused-active-current: #85bfc5;
--tab-font-size: 0.85em;
--tab-container-background: #080808;
--tab-divider-color: #352121;
--tab-outline-color: #1f1b32;
--tab-curve: 0;
--tab-radius: 0;
--tab-radius-active: 0;
--tab-max-width: 15em;
/* Metadata */
--metadata-label-text-color: #e1e1eb;
--metadata-label-width: 8.5em;
--metadata-divider-width: 0;
--metadata-gap: 1px;
--metadata-property-radius: 0;
--metadata-property-radius-hover: 0;
--metadata-property-radius-focus: 0px;
--metadata-property-background: #050606;
--metadata-property-background-hover: transparent;
--metadata-label-font-size: 0.8em;
--metadata-input-font-size: 0.8em;
--metadata-sidebar-label-font-size: 0.8em;
--metadata-sidebar-input-font-size: 0.8em;
/* Graph View */
--graph-node: #9b8c06;
--graph-line: #2979ff;
--graph-node-unresolved: #9f297b;
--graph-node-focused: #33ff57;
--graph-node-tag: #c072a1;
--graph-node-attachment: #00e5ff;
/* UI Icons */
--icon-color: #58919a;
--icon-color-hover: #8bb188;
--icon-color-focused: #7ad67f;
--icon-opacity: 1;
--icon-opacity-hover: 1;
--icon-opacity-active: 1;
--clickable-icon-radius: 0;
/* Swatch */
--swatch-radius: 14px;
--swatch-height: 24px;
--swatch-width: 24px;
--swatch-shadow: inset 0 0 0 2px #000001;
/* Indentation */
--indentation-guide-width: 1px;
--indentation-guide-width-active: 2px;
--indentation-guide-color: #245f5f;
--indentation-guide-color-active: #5a245f;
--indentation-guide-editing-indent: 1.1em;
--indentation-guide-reading-indent: -0.85em;
--indentation-guide-source-indent: 0.85em;
/* Navigation */
--nav-item-color: #dfdfe0;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #1d2d1f;
--nav-item-background-active: #2d1d1d;
--nav-item-white-space: pre;
--nav-indentation-guide-width: 1px;
--nav-indentation-guide-color: #6386d2;
--nav-collapse-icon-color: #408b39;
/* Popover (Hover Links) */
--popover-width: 800px;
--popover-height: 600px;
--popover-max-height: 100vh;
--popover-pdf-width: 700px;
--popover-pdf-height: 700px;
/* Prompt (Command Palette) */
--prompt-input-height: 40px;
--prompt-width: 1000px;
--prompt-border-width: 2px;
--prompt-border-color: #4fc0c0;
/* Modal */
--modal-width: 90vw;
--modal-height: 85vh;
--modal-max-width: 1000px;
--modal-border-color: #4fc0c0;
--modal-radius: 0px;
--modal-border-width: 2px;
--modal-community-sidebar-width: 290px;
/* Slider */
--slider-thumb-border-width: 3px;
--slider-thumb-border-color: #da65bb;
--slider-thumb-height: 14px;
--slider-thumb-width: 14px;
--slider-thumb-y: -5px;
--slider-thumb-radius: 50%;
--slider-s-thumb-size: 18px;
--slider-s-thumb-position: -5px;
--slider-track-background: #176b80;
--slider-track-height: 3px;
/* Dialog */
--dialog-width: 560px;
--dialog-max-width: 80vw;
--dialog-max-height: 85vh;
--drag-ghost-background: rgba(0, 0, 0, 0.85);
--drag-ghost-text-color: #fff;
}

.theme-dark, .theme-light {
--font-text-theme: "VT323 Obsidian", sans-serif;
--font-interface-theme: "VT323 Obsidian", sans-serif;
--font-monospace-theme: "VT323 Obsidian", monospace;
--inline-title-font: "VT323 Obsidian", serif;
--h1-font: "VT323 Obsidian", serif;
--h2-font: "VT323 Obsidian", serif;
--h3-font: "VT323 Obsidian", serif;
--h4-font: "VT323 Obsidian", serif;
--h5-font: "VT323 Obsidian", serif;
--h6-font: "VT323 Obsidian", serif;
/*Typography*/
--font-text-size: 34px;
--line-height-normal: 1;
--line-height-tight: 0.9;
--font-ui-smaller: 18px;
--font-ui-small: 22px;
--font-ui-medium: 25px;
--font-ui-larger: 18px;
/* Headers */
--inline-title-line-height: 1;
--inline-title-size: 2em;
--inline-title-weight: 400;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 800px;
--file-folding-offset: 24px;
--hr-thickness: 4px;
--border-width: 4px;
/* Links */
--link-unresolved-opacity: 1;
--link-decoration-thickness: 1px;
--link-decoration: underline;
/* Lists */
--list-indent: 1.5em;
--list-spacing: 0.05em;
/* Blockquote */
--blockquote-border-thickness: 0px;
/* Code */
--code-size: 0.8em;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 0%;
--checkbox-size: 1.3em;
--checklist-done-decoration: line-through;
/* Tables */
--table-border-width: 4px;
--table-header-border-width: 4px;
--table-column-max-width: none;
--table-column-first-border-width: 4px;
--table-column-last-border-width: 4px;
--table-row-last-border-width: 4px;
--table-add-button-border-width: 4px;
--table-selection-border-width: 4px;
--table-selection-border-radius: 0px;
/* Metadata */
--metadata-label-width: 6.5em;
--metadata-label-font-size: 0.7em;
--metadata-input-font-size: 0.7em;
/* Indentation */
--indentation-guide-width: 4px;
--indentation-guide-width-active: 4px;
/* Navigation */
--nav-indentation-guide-width: 3px;
/* Prompt (Command Palette) */
--prompt-input-height: 60px;
--prompt-width: 1100px;
--prompt-border-width: 4px;
/* Modal */
--modal-max-width: 1100px;
--modal-border-width: 4px;
/* Slider */
--slider-thumb-radius: 0%;
}

.theme-light {
text-shadow:
		0 0 1px #00a3a3,
		0 0 3px #1d4d54,
		0 0 4px #0d1e2e;
--background-primary: #000000;
--background-primary-alt: #000000;
--background-secondary: #000000;
--background-secondary-alt: #000000;
--background-modifier-hover: #002c2e;
--background-modifier-active-hover: #000000;
--background-modifier-border: #3bd5d5;
--background-modifier-border-hover: #44dde5;
--background-modifier-border-focus: #66f0ff;
--background-modifier-form-field: #000000;
--interactive-normal: #207080;
--interactive-hover: #108999;
--interactive-accent: #0b6e8a;
--interactive-accent-hover: #0ea5c9;
--caret-color: #00faff;
--bold-color: #4be3f7;
--italic-color: #42eafd;
--text-highlight-bg: #002845;
--text-normal: #7af7fe;
--text-muted: #c3f9fc;
--text-faint: #37949f;
--text-on-accent: #aaf7ff;
--text-accent: #34706a;
--text-accent-hover: #38b6c6;
--text-selection: #023240;
--inline-title-color: #b3f3ff;
--h1-color: #aaf2ff;
--h2-color: #99ebff;
--h3-color: #88e4ff;
--h4-color: #77ddff;
--h5-color: #66d6ff;
--h6-color: #55ccff;
--hr-color: #55aaff;
--link-color: #a9f6fc;
--link-color-hover: #89eaff;
--link-unresolved-color: #3fa9cb;
--link-unresolved-decoration-color: #2e4e5e;
--link-external-color: #b8f2fa;
--link-external-color-hover: #ccfcff;
--list-marker-color: #25e5ff;
--list-marker-color-hover: #bbf8ff;
--list-marker-color-collapsed: #94f1ff;
--blockquote-background-color: #010808;
--blockquote-border-color: #66ddff;
--blockquote-color: #88e8ff;
--code-background: #000a0d;
--code-normal: #99f3ff;
--code-comment: #447077;
--code-function: #70e0ff;
--code-important: #7bf0ff;
--code-keyword: #e3fcff;
--code-operator: #38e1ff;
--code-property: #aee7ff;
--code-punctuation: #48a1a5;
--code-string: #aaf2ff;
--code-tag: #77e4ff;
--code-value: #0ea0af;
--checkbox-color: #1ed3dc;
--checkbox-color-hover: #bbf7ff;
--checklist-done-color: #446066;
--table-header-background: #000000;
--table-header-color: #8beeff;
--table-border-color: #004444;
--table-header-border-color: #006666;
--table-header-background-hover: #111111;
--table-row-background-hover: #111111;
--table-row-alt-background-hover: #111111;
--table-selection-border-color: #99f9ff;
--table-drag-handle-background-active: #001011;
--table-drag-handle-color: #88e9ff;
--table-drag-handle-color-active: #ccfcff;
--table-add-button-border-color: #66bbcc;
--tab-background-active: #000000;
--tab-text-color: #66eeff;
--tab-text-color-active: #88f1ff;
--tab-text-color-focused: #aaf6ff;
--tab-text-color-focused-active: #bbfcff;
--tab-text-color-focused-highlighted: #ccfeff;
--tab-text-color-focused-active-current: #53e5fe;
--tab-container-background: #000000;
--tab-divider-color: #00d8e8;
--tab-outline-color: #61cfdc;
--nav-item-color: #81f0ff;
--nav-item-color-hover: #fdffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #001d21;
--nav-item-background-active: #002429;
--nav-indentation-guide-color: #004444;
--nav-collapse-icon-color: #00eaff;
--icon-color: #84f0ff;
--icon-color-hover: #00e5ff;
--icon-color-focused: #aaf7ff;
--graph-node: #28c9c9;
--graph-line: #33aadd;
--graph-node-unresolved: #077070;
--graph-node-focused: #00f5ff;
--graph-node-tag: #84f3ff;
--graph-node-attachment: #98c9bb;
--prompt-border-color: #88f5ff;
--modal-border-color: #99faff;
--slider-thumb-border-color: #aaf7ff;
--slider-track-background: #002222;
--tag-background-hover: #000000;
--search-clear-button-color: #ffffff;
--metadata-label-text-color: #99f6ff;
--metadata-property-background: #000000;
--indentation-guide-color: #113e3e;
--indentation-guide-color-active: #00c0c0;
}

.theme-light .workspace-tab-header-container {
background-color: #000000;
}

.arzaba-font-override, .theme-dark.arzaba-font-override {
--font-text-size: 34px !important
;
}`,
    },
    "arzaba-past": {
      dark: `.theme-dark, .theme-light {
/*Typography*/
--font-text-theme: "Open Sans Light Obsidian", sans-serif;
--font-interface-theme: "Open Sans Light Obsidian", sans-serif;
--font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
--inline-title-font: "Open Sans Light Obsidian", sans-serif;
--h1-font: "Open Sans Light Obsidian", sans-serif;
--h2-font: "Open Sans Light Obsidian", sans-serif;
--h3-font: "Open Sans Light Obsidian", sans-serif;
--h4-font: "Open Sans Light Obsidian", sans-serif;
--h5-font: "Open Sans Light Obsidian", sans-serif;
--h6-font: "Open Sans Light Obsidian", sans-serif;
--font-text-size: 22px;
--font-smallest: 0.65em;
--font-smaller: 0.8em;
--font-small: 0.933em;
--font-weight: 400;
--bold-modifier: 200;
--bold-weight: 700;
--line-height-normal: 1.61;
--line-height-tight: 1.4;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
--font-ui-medium: 16px;
--font-ui-larger: 18px;
--radius-s: 8px;
--radius-m: 10px;
--radius-l: 14px;
--radius-xl: 16px;
/* Main Colors */
--accent-h: 254;
--accent-s: 80%;
--accent-l: 68%;
--background-primary: #050606;
--background-primary-alt: #101113;
--background-secondary: #0a0a0b;
--background-secondary-alt: #1a1d20;
--background-modifier-hover: #1b3b45;
--background-modifier-active-hover: #2c2c32;
--background-modifier-border: #3b3b3e;
--background-modifier-border-hover: #282828;
--background-modifier-border-focus: #282828;
--background-modifier-form-field: #1f2f3d;
--interactive-normal: #193755;
--interactive-hover: #2c0f23;
--interactive-accent: #21431a;
--interactive-accent-hover: #602e2e;
--caret-color: #6cda6c;
--bold-color: #dad79b;
--italic-color: #86b7f0;
--text-highlight-bg: #246607;
--text-normal: #e1e1eb;
--text-muted: #6f7a88;
--text-faint: #798a8e;
--text-on-accent: #dadde4;
--text-accent: #72c6ea;
--text-accent-hover: #66cccc;
--text-selection: #32537b;
/* Headers */
--inline-title-color: #d3dfe6;
--inline-title-line-height: 1.61;
--inline-title-size: 2.2em;
--inline-title-weight: 300;
--h1-color: #6f9fd6;
--h2-color: #78c988;
--h3-color: #a497f0;
--h4-color: #c285b9;
--h5-color: #e07a6e;
--h6-color: #d9c47a;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.23em;
--h1-weight: 400;
--h2-weight: 400;
--h3-weight: 400;
--h4-weight: 400;
--h5-weight: 400;
--h6-weight: 400;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 1000px;
--file-folding-offset: 24px;
--hr-color: #637884;
--hr-thickness: 1px;
--border-width: 1px;
--tag-background-hover: #312c47;
--tag-radius: 0;
--button-radius: 0;
--search-clear-button-color: #f15b5b;
/* Links */
--link-color: #9ed2fd;
--link-color-hover: #69d1d1;
--link-unresolved-color: #f4b2b2;
--link-unresolved-decoration-color: #9ed2fd;
--link-unresolved-opacity: 0.9;
--link-decoration-thickness: 1px;
--link-decoration: none;
--link-external-color: #bfacf1;
--link-external-color-hover: #d0839e;
--link-external-decoration: underline;
--link-external-decoration-hover: underline;
/* Lists */
--list-indent: 2.8em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.12em;
--list-marker-color: #70b5d6;
--list-marker-color-hover: #d43dca;
--list-marker-color-collapsed: #35b035;
--list-bullet-size: 0.31em;
/* Blockquote */
--blockquote-background-color: #130f12;
--blockquote-border-thickness: 4px;
--blockquote-border-color: #bd95e6;
--blockquote-color: #e4d8e3;
/* Code */
--code-background: #000000;
--code-size: 0.8em;
--code-normal: #fffcfe;
--code-comment: #8a8a8a;
--code-function: #96cf70;
--code-important: #e4d386;
--code-keyword: #56B6C2;
--code-operator: #e9626d;
--code-property: #6186ec;
--code-punctuation: #e2e8ff;
--code-string: #E5C07B;
--code-tag: #6186ec;
--code-value: #d66af7;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 25%;
--checkbox-size: 1.2em;
--checkbox-marker-color: var(--background-primary);
--checkbox-color: #6186ec;
--checkbox-color-hover: #e9626d;
--checkbox-border-color: var(--text-faint);
--checkbox-border-color-hover: var(--text-muted);
--checkbox-margin-inline-start: 0;
--checklist-done-decoration: none;
--checklist-done-color: #283f42;
/* Tables */
--table-white-space: break-spaces;
--table-background: transparent;
--table-drag-handle-background: transparent;
--table-add-button-background: transparent;
--table-text-color: inherit;
--table-header-background: #0f0f0f;
--table-header-color: #d6d7dc;
--table-border-color: #3a3a3a;
--table-header-border-color: #171717;
--table-header-background-hover: #1b0f17;
--table-row-background-hover: #020807;
--table-row-alt-background-hover: #020807;
--table-selection-border-color: #5fa4b0;
--table-drag-handle-background-active: #5fa4b0;
--table-drag-handle-color: #c64e4e;
--table-drag-handle-color-active: #ddff1b;
--table-add-button-border-color: #3a3a3a;
--table-selection: hsla(var(--color-accent-hsl), 0.05);
--table-selection-blend-mode: var(--highlight-mix-blend-mode);
--table-border-width: 1px;
--table-header-border-width: 1px;
--table-header-font: inherit;
--table-header-size: 0.8em;
--table-text-size: 0.8em;
--table-column-min-width: 3ch;
--table-column-max-width: none;
--table-column-first-border-width: 1px;
--table-column-last-border-width: 1px;
--table-row-last-border-width: 1px;
--table-add-button-border-width: 2px;
--table-selection-border-width: 2px;
--table-selection-border-radius: 4px;
--table-cell-vertical-alignment: top;
--table-header-weight: calc(var(--font-weight) + var(--bold-modifier));
--table-line-height: var(--line-height-tight);
/* Tabs */
--tab-background-active: #050606;
--tab-text-color: #718183;
--tab-text-color-active: #a9bfc2;
--tab-text-color-focused: #8fa2a5;
--tab-text-color-focused-active: #58919a;
--tab-text-color-focused-highlighted: #2c0f23;
--tab-text-color-focused-active-current: #85bfc5;
--tab-font-size: 0.85em;
--tab-container-background: #080808;
--tab-divider-color: #352121;
--tab-outline-color: #1f1b32;
--tab-curve: 0;
--tab-radius: 0;
--tab-radius-active: 0;
--tab-max-width: 15em;
/* Metadata */
--metadata-label-text-color: #e1e1eb;
--metadata-label-width: 8.5em;
--metadata-divider-width: 0;
--metadata-gap: 1px;
--metadata-property-radius: 0;
--metadata-property-radius-hover: 0;
--metadata-property-radius-focus: 0px;
--metadata-property-background: #050606;
--metadata-property-background-hover: transparent;
--metadata-label-font-size: 0.8em;
--metadata-input-font-size: 0.8em;
--metadata-sidebar-label-font-size: 0.8em;
--metadata-sidebar-input-font-size: 0.8em;
/* Graph View */
--graph-node: #9b8c06;
--graph-line: #2979ff;
--graph-node-unresolved: #9f297b;
--graph-node-focused: #33ff57;
--graph-node-tag: #c072a1;
--graph-node-attachment: #00e5ff;
/* UI Icons */
--icon-color: #58919a;
--icon-color-hover: #8bb188;
--icon-color-focused: #7ad67f;
--icon-opacity: 1;
--icon-opacity-hover: 1;
--icon-opacity-active: 1;
--clickable-icon-radius: 0;
/* Swatch */
--swatch-radius: 14px;
--swatch-height: 24px;
--swatch-width: 24px;
--swatch-shadow: inset 0 0 0 2px #000001;
/* Indentation */
--indentation-guide-width: 1px;
--indentation-guide-width-active: 2px;
--indentation-guide-color: #245f5f;
--indentation-guide-color-active: #5a245f;
--indentation-guide-editing-indent: 1.1em;
--indentation-guide-reading-indent: -0.85em;
--indentation-guide-source-indent: 0.85em;
/* Navigation */
--nav-item-color: #dfdfe0;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #1d2d1f;
--nav-item-background-active: #2d1d1d;
--nav-item-white-space: pre;
--nav-indentation-guide-width: 1px;
--nav-indentation-guide-color: #6386d2;
--nav-collapse-icon-color: #408b39;
/* Popover (Hover Links) */
--popover-width: 800px;
--popover-height: 600px;
--popover-max-height: 100vh;
--popover-pdf-width: 700px;
--popover-pdf-height: 700px;
/* Prompt (Command Palette) */
--prompt-input-height: 40px;
--prompt-width: 1000px;
--prompt-border-width: 2px;
--prompt-border-color: #4fc0c0;
/* Modal */
--modal-width: 90vw;
--modal-height: 85vh;
--modal-max-width: 1000px;
--modal-border-color: #4fc0c0;
--modal-radius: 0px;
--modal-border-width: 2px;
--modal-community-sidebar-width: 290px;
/* Slider */
--slider-thumb-border-width: 3px;
--slider-thumb-border-color: #da65bb;
--slider-thumb-height: 14px;
--slider-thumb-width: 14px;
--slider-thumb-y: -5px;
--slider-thumb-radius: 50%;
--slider-s-thumb-size: 18px;
--slider-s-thumb-position: -5px;
--slider-track-background: #176b80;
--slider-track-height: 3px;
/* Dialog */
--dialog-width: 560px;
--dialog-max-width: 80vw;
--dialog-max-height: 85vh;
--drag-ghost-background: rgba(0, 0, 0, 0.85);
--drag-ghost-text-color: #fff;
}

.theme-light, .theme-dark {
--font-text-theme: "Gentium Obsidian", sans-serif;
--font-interface-theme: "EB Garamond Obsidian", sans-serif;
--font-monospace-theme: "Gentium Obsidian", monospace;
--inline-title-font: "EB Garamond Obsidian", serif;
--h1-font: "EB Garamond Obsidian", serif;
--h2-font: "EB Garamond Obsidian", serif;
--h3-font: "VTEB Garamond323 Obsidian", serif;
--h4-font: "EB Garamond Obsidian", serif;
--h5-font: "EB Garamond Obsidian", serif;
--h6-font: "EB Garamond Obsidian", serif;
/*Typography*/
--font-text-size: 24px;
--font-smallest: 0.75em;
--line-height-normal: 1.65;
--line-height-tight: 1.5;
--font-ui-smaller: 16px;
--font-ui-small: 19px;
--font-ui-medium: 22px;
--font-ui-larger: 24px;
/* Headers */
--inline-title-line-height: 1.61;
--inline-title-size: 2em;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.23em;
--h1-weight: 200;
--h2-weight: 200;
--h3-weight: 200;
--h4-weight: 200;
--h5-weight: 200;
--h6-weight: 200;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 1100px;
--tag-radius: 4px;
--button-radius: 6px;
/* Code */
--code-size: 0.9em;
--code-radius: 12px;
/* Checkbox */
--checklist-done-decoration: line-through;
/* Tabs */
--tab-curve: 12px;
--tab-radius: 12px;
--tab-radius-active: 4px;
/* Metadata */
--metadata-property-radius: 12px;
--metadata-property-radius-hover: 12px;
--metadata-property-radius-focus: 12px;
/* Indentation */
--indentation-guide-width-active: 1px;
/* Prompt (Command Palette) */
--prompt-input-height: 50px;
--prompt-border-width: 0px;
/* Modal */
--modal-radius: 12px;
--modal-border-width: 0px;
}

.theme-dark {
--background-primary: #1a1410;
--background-primary-alt: #211a15;
--background-secondary: #2a211c;
--background-secondary-alt: #332820;
--background-modifier-hover: #3a2c1f;
--background-modifier-active-hover: #5a4027;
--background-modifier-border: #5e4a38;
--background-modifier-border-hover: #7a6249;
--background-modifier-border-focus: #7a6249;
--background-modifier-form-field: #2d241d;
--interactive-normal: #7c5f4a;
--interactive-hover: #9b7a62;
--interactive-accent: #a67858;
--interactive-accent-hover: #c18d67;
--caret-color: #ffddb8;
--bold-color: #e6c7a9;
--italic-color: #f1b16e;
--text-highlight-bg: #4d3b2c;
--text-normal: #e8dfd6;
--text-muted: #b3a693;
--text-faint: #8f857a;
--text-on-accent: #1c130c;
--text-accent: #d9a679;
--text-accent-hover: #f0b987;
--text-selection: #5a4937;
--inline-title-color: #eac093;
--h1-color: #f5d3b1;
--h2-color: #d8b38c;
--h3-color: #caa077;
--h4-color: #b28b67;
--h5-color: #9c7555;
--h6-color: #846043;
--hr-color: #885022;
--link-color: #e0a86e;
--link-color-hover: #ffbe80;
--link-unresolved-color: #b8967d;
--link-unresolved-decoration-color: #c38e6e;
--link-external-color: #d6a073;
--link-external-color-hover: #f0b987;
--list-marker-color: #d0a678;
--list-marker-color-hover: #b98c59;
--list-marker-color-collapsed: #a3784c;
--blockquote-background-color: #261e17;
--blockquote-border-color: #7a4f32;
--blockquote-color: #e8d6c2;
--code-background: #1f1915;
--code-normal: #d0bfa8;
--code-comment: #8c7b69;
--code-function: #c29772;
--code-important: #e0a679;
--code-keyword: #d6a073;
--code-operator: #b68961;
--code-property: #cfa67f;
--code-punctuation: #9e8b78;
--code-string: #e3a673;
--code-tag: #c58c63;
--code-value: #ccb193;
--checkbox-color: #d9a679;
--checkbox-color-hover: #f0b987;
--checklist-done-color: #7a6e61;
--table-header-background: #2a211c;
--table-header-color: #e8dfd6;
--table-border-color: #5e4a38;
--table-header-border-color: #7a6249;
--table-header-background-hover: #3a2c1f;
--table-row-background-hover: #2d241d;
--table-row-alt-background-hover: #332820;
--table-selection-border-color: #9f7d5c;
--table-drag-handle-background-active: #7a4f32;
--table-drag-handle-color: #d9a679;
--table-drag-handle-color-active: #f0b987;
--table-add-button-border-color: #5e4a38;
--tab-background-active: #1a1410;
--tab-text-color: #b3a693;
--tab-text-color-active: #e8dfd6;
--tab-text-color-focused: #d9a679;
--tab-text-color-focused-active: #f0b987;
--tab-text-color-focused-highlighted: #ffbe80;
--tab-text-color-focused-active-current: #ffd9b3;
--tab-container-background: #211a15;
--tab-divider-color: #5e4a38;
--tab-outline-color: #7a6249;
--nav-item-color: #e8dfd6;
--nav-item-color-hover: #f0e4d6;
--nav-item-color-active: #ffd9b3;
--nav-item-background-hover: #3a2c1f;
--nav-item-background-active: #4d3b2c;
--nav-indentation-guide-color: #5e4a38;
--nav-collapse-icon-color: #d9a679;
--icon-color: #c58c63;
--icon-color-hover: #f0b987;
--icon-color-focused: #ffbe80;
--graph-node: #d9a679;
--graph-line: #5e4a38;
--graph-node-unresolved: #c38e6e;
--graph-node-focused: #f0b987;
--graph-node-tag: #e09156;
--graph-node-attachment: #a38d6f;
--prompt-border-color: #7a6249;
--modal-border-color: #7a4f32;
--slider-thumb-border-color: #cfa67f;
--slider-track-background: #3a2c1f;
--tag-background-hover: #2a211c;
--search-clear-button-color: #d9a679;
--metadata-property-background: #211a15;
--indentation-guide-color: #5e4a38;
--indentation-guide-color-active: #e09156;
}

.theme-dark .workspace-tab-header-container {
background-color: #2a211c;
}

.theme-light.arzaba-font-override, .arzaba-font-override {
--font-text-size: 24px !important
;
}`,
      light: `.theme-dark, .theme-light {
/*Typography*/
--font-text-theme: "Open Sans Light Obsidian", sans-serif;
--font-interface-theme: "Open Sans Light Obsidian", sans-serif;
--font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
--inline-title-font: "Open Sans Light Obsidian", sans-serif;
--h1-font: "Open Sans Light Obsidian", sans-serif;
--h2-font: "Open Sans Light Obsidian", sans-serif;
--h3-font: "Open Sans Light Obsidian", sans-serif;
--h4-font: "Open Sans Light Obsidian", sans-serif;
--h5-font: "Open Sans Light Obsidian", sans-serif;
--h6-font: "Open Sans Light Obsidian", sans-serif;
--font-text-size: 22px;
--font-smallest: 0.65em;
--font-smaller: 0.8em;
--font-small: 0.933em;
--font-weight: 400;
--bold-modifier: 200;
--bold-weight: 700;
--line-height-normal: 1.61;
--line-height-tight: 1.4;
--font-ui-smaller: 13px;
--font-ui-small: 14px;
--font-ui-medium: 16px;
--font-ui-larger: 18px;
--radius-s: 8px;
--radius-m: 10px;
--radius-l: 14px;
--radius-xl: 16px;
/* Main Colors */
--accent-h: 254;
--accent-s: 80%;
--accent-l: 68%;
--background-primary: #050606;
--background-primary-alt: #101113;
--background-secondary: #0a0a0b;
--background-secondary-alt: #1a1d20;
--background-modifier-hover: #1b3b45;
--background-modifier-active-hover: #2c2c32;
--background-modifier-border: #3b3b3e;
--background-modifier-border-hover: #282828;
--background-modifier-border-focus: #282828;
--background-modifier-form-field: #1f2f3d;
--interactive-normal: #193755;
--interactive-hover: #2c0f23;
--interactive-accent: #21431a;
--interactive-accent-hover: #602e2e;
--caret-color: #6cda6c;
--bold-color: #dad79b;
--italic-color: #86b7f0;
--text-highlight-bg: #246607;
--text-normal: #e1e1eb;
--text-muted: #6f7a88;
--text-faint: #798a8e;
--text-on-accent: #dadde4;
--text-accent: #72c6ea;
--text-accent-hover: #66cccc;
--text-selection: #32537b;
/* Headers */
--inline-title-color: #d3dfe6;
--inline-title-line-height: 1.61;
--inline-title-size: 2.2em;
--inline-title-weight: 300;
--h1-color: #6f9fd6;
--h2-color: #78c988;
--h3-color: #a497f0;
--h4-color: #c285b9;
--h5-color: #e07a6e;
--h6-color: #d9c47a;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.23em;
--h1-weight: 400;
--h2-weight: 400;
--h3-weight: 400;
--h4-weight: 400;
--h5-weight: 400;
--h6-weight: 400;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 1000px;
--file-folding-offset: 24px;
--hr-color: #637884;
--hr-thickness: 1px;
--border-width: 1px;
--tag-background-hover: #312c47;
--tag-radius: 0;
--button-radius: 0;
--search-clear-button-color: #f15b5b;
/* Links */
--link-color: #9ed2fd;
--link-color-hover: #69d1d1;
--link-unresolved-color: #f4b2b2;
--link-unresolved-decoration-color: #9ed2fd;
--link-unresolved-opacity: 0.9;
--link-decoration-thickness: 1px;
--link-decoration: none;
--link-external-color: #bfacf1;
--link-external-color-hover: #d0839e;
--link-external-decoration: underline;
--link-external-decoration-hover: underline;
/* Lists */
--list-indent: 2.8em;
--list-indent-editing: 1em;
--list-indent-source: 1em;
--list-spacing: 0.12em;
--list-marker-color: #70b5d6;
--list-marker-color-hover: #d43dca;
--list-marker-color-collapsed: #35b035;
--list-bullet-size: 0.31em;
/* Blockquote */
--blockquote-background-color: #130f12;
--blockquote-border-thickness: 4px;
--blockquote-border-color: #bd95e6;
--blockquote-color: #e4d8e3;
/* Code */
--code-background: #000000;
--code-size: 0.8em;
--code-normal: #fffcfe;
--code-comment: #8a8a8a;
--code-function: #96cf70;
--code-important: #e4d386;
--code-keyword: #56B6C2;
--code-operator: #e9626d;
--code-property: #6186ec;
--code-punctuation: #e2e8ff;
--code-string: #E5C07B;
--code-tag: #6186ec;
--code-value: #d66af7;
--code-radius: 12px;
/* Checkbox */
--checkbox-radius: 25%;
--checkbox-size: 1.2em;
--checkbox-marker-color: var(--background-primary);
--checkbox-color: #6186ec;
--checkbox-color-hover: #e9626d;
--checkbox-border-color: var(--text-faint);
--checkbox-border-color-hover: var(--text-muted);
--checkbox-margin-inline-start: 0;
--checklist-done-decoration: none;
--checklist-done-color: #283f42;
/* Tables */
--table-white-space: break-spaces;
--table-background: transparent;
--table-drag-handle-background: transparent;
--table-add-button-background: transparent;
--table-text-color: inherit;
--table-header-background: #0f0f0f;
--table-header-color: #d6d7dc;
--table-border-color: #3a3a3a;
--table-header-border-color: #171717;
--table-header-background-hover: #1b0f17;
--table-row-background-hover: #020807;
--table-row-alt-background-hover: #020807;
--table-selection-border-color: #5fa4b0;
--table-drag-handle-background-active: #5fa4b0;
--table-drag-handle-color: #c64e4e;
--table-drag-handle-color-active: #ddff1b;
--table-add-button-border-color: #3a3a3a;
--table-selection: hsla(var(--color-accent-hsl), 0.05);
--table-selection-blend-mode: var(--highlight-mix-blend-mode);
--table-border-width: 1px;
--table-header-border-width: 1px;
--table-header-font: inherit;
--table-header-size: 0.8em;
--table-text-size: 0.8em;
--table-column-min-width: 3ch;
--table-column-max-width: none;
--table-column-first-border-width: 1px;
--table-column-last-border-width: 1px;
--table-row-last-border-width: 1px;
--table-add-button-border-width: 2px;
--table-selection-border-width: 2px;
--table-selection-border-radius: 4px;
--table-cell-vertical-alignment: top;
--table-header-weight: calc(var(--font-weight) + var(--bold-modifier));
--table-line-height: var(--line-height-tight);
/* Tabs */
--tab-background-active: #050606;
--tab-text-color: #718183;
--tab-text-color-active: #a9bfc2;
--tab-text-color-focused: #8fa2a5;
--tab-text-color-focused-active: #58919a;
--tab-text-color-focused-highlighted: #2c0f23;
--tab-text-color-focused-active-current: #85bfc5;
--tab-font-size: 0.85em;
--tab-container-background: #080808;
--tab-divider-color: #352121;
--tab-outline-color: #1f1b32;
--tab-curve: 0;
--tab-radius: 0;
--tab-radius-active: 0;
--tab-max-width: 15em;
/* Metadata */
--metadata-label-text-color: #e1e1eb;
--metadata-label-width: 8.5em;
--metadata-divider-width: 0;
--metadata-gap: 1px;
--metadata-property-radius: 0;
--metadata-property-radius-hover: 0;
--metadata-property-radius-focus: 0px;
--metadata-property-background: #050606;
--metadata-property-background-hover: transparent;
--metadata-label-font-size: 0.8em;
--metadata-input-font-size: 0.8em;
--metadata-sidebar-label-font-size: 0.8em;
--metadata-sidebar-input-font-size: 0.8em;
/* Graph View */
--graph-node: #9b8c06;
--graph-line: #2979ff;
--graph-node-unresolved: #9f297b;
--graph-node-focused: #33ff57;
--graph-node-tag: #c072a1;
--graph-node-attachment: #00e5ff;
/* UI Icons */
--icon-color: #58919a;
--icon-color-hover: #8bb188;
--icon-color-focused: #7ad67f;
--icon-opacity: 1;
--icon-opacity-hover: 1;
--icon-opacity-active: 1;
--clickable-icon-radius: 0;
/* Swatch */
--swatch-radius: 14px;
--swatch-height: 24px;
--swatch-width: 24px;
--swatch-shadow: inset 0 0 0 2px #000001;
/* Indentation */
--indentation-guide-width: 1px;
--indentation-guide-width-active: 2px;
--indentation-guide-color: #245f5f;
--indentation-guide-color-active: #5a245f;
--indentation-guide-editing-indent: 1.1em;
--indentation-guide-reading-indent: -0.85em;
--indentation-guide-source-indent: 0.85em;
/* Navigation */
--nav-item-color: #dfdfe0;
--nav-item-color-hover: #ffffff;
--nav-item-color-active: #ffffff;
--nav-item-background-hover: #1d2d1f;
--nav-item-background-active: #2d1d1d;
--nav-item-white-space: pre;
--nav-indentation-guide-width: 1px;
--nav-indentation-guide-color: #6386d2;
--nav-collapse-icon-color: #408b39;
/* Popover (Hover Links) */
--popover-width: 800px;
--popover-height: 600px;
--popover-max-height: 100vh;
--popover-pdf-width: 700px;
--popover-pdf-height: 700px;
/* Prompt (Command Palette) */
--prompt-input-height: 40px;
--prompt-width: 1000px;
--prompt-border-width: 2px;
--prompt-border-color: #4fc0c0;
/* Modal */
--modal-width: 90vw;
--modal-height: 85vh;
--modal-max-width: 1000px;
--modal-border-color: #4fc0c0;
--modal-radius: 0px;
--modal-border-width: 2px;
--modal-community-sidebar-width: 290px;
/* Slider */
--slider-thumb-border-width: 3px;
--slider-thumb-border-color: #da65bb;
--slider-thumb-height: 14px;
--slider-thumb-width: 14px;
--slider-thumb-y: -5px;
--slider-thumb-radius: 50%;
--slider-s-thumb-size: 18px;
--slider-s-thumb-position: -5px;
--slider-track-background: #176b80;
--slider-track-height: 3px;
/* Dialog */
--dialog-width: 560px;
--dialog-max-width: 80vw;
--dialog-max-height: 85vh;
--drag-ghost-background: rgba(0, 0, 0, 0.85);
--drag-ghost-text-color: #fff;
}

.theme-light, .theme-dark {
--font-text-theme: "Gentium Obsidian", sans-serif;
--font-interface-theme: "EB Garamond Obsidian", sans-serif;
--font-monospace-theme: "Gentium Obsidian", monospace;
--inline-title-font: "EB Garamond Obsidian", serif;
--h1-font: "EB Garamond Obsidian", serif;
--h2-font: "EB Garamond Obsidian", serif;
--h3-font: "VTEB Garamond323 Obsidian", serif;
--h4-font: "EB Garamond Obsidian", serif;
--h5-font: "EB Garamond Obsidian", serif;
--h6-font: "EB Garamond Obsidian", serif;
/*Typography*/
--font-text-size: 24px;
--font-smallest: 0.75em;
--line-height-normal: 1.65;
--line-height-tight: 1.5;
--font-ui-smaller: 16px;
--font-ui-small: 19px;
--font-ui-medium: 22px;
--font-ui-larger: 24px;
/* Headers */
--inline-title-line-height: 1.61;
--inline-title-size: 2em;
--h1-size: 1.9em;
--h2-size: 1.75em;
--h3-size: 1.61em;
--h4-size: 1.45em;
--h5-size: 1.33em;
--h6-size: 1.23em;
--h1-weight: 200;
--h2-weight: 200;
--h3-weight: 200;
--h4-weight: 200;
--h5-weight: 200;
--h6-weight: 200;
--file-header-font-size: 0.8rem;
--file-header-font-weight: 100;
--file-header-border: none;
--file-header-justify: center;
/* Other */
--file-line-width: 1100px;
--tag-radius: 4px;
--button-radius: 6px;
/* Code */
--code-size: 0.9em;
--code-radius: 12px;
/* Checkbox */
--checklist-done-decoration: line-through;
/* Tabs */
--tab-curve: 12px;
--tab-radius: 12px;
--tab-radius-active: 4px;
/* Metadata */
--metadata-property-radius: 12px;
--metadata-property-radius-hover: 12px;
--metadata-property-radius-focus: 12px;
/* Indentation */
--indentation-guide-width-active: 1px;
/* Prompt (Command Palette) */
--prompt-input-height: 50px;
--prompt-border-width: 0px;
/* Modal */
--modal-radius: 12px;
--modal-border-width: 0px;
}

.theme-light {
--background-primary: #f6f1e7;
--background-primary-alt: #efe6d9;
--background-secondary: #e6dccb;
--background-secondary-alt: #ded2bd;
--background-modifier-hover: #ffe9c5;
--background-modifier-active-hover: #b39566;
--background-modifier-border: #b39c7c;
--background-modifier-border-hover: #9d8565;
--background-modifier-border-focus: #9d8565;
--background-modifier-form-field: #f2e8da;
--interactive-normal: #d2ae94;
--interactive-hover: #b79780;
--interactive-accent: #957556;
--interactive-accent-hover: #785e44;
--caret-color: #421b00;
--bold-color: #613e2e;
--italic-color: #8b4d0e;
--text-highlight-bg: #ecd7bb;
--text-normal: #1f1c19;
--text-muted: #5e5346;
--text-faint: #8c8176;
--text-on-accent: #ffeed8;
--text-accent: #8a5d3a;
--text-accent-hover: #a46f49;
--text-selection: #cdbba7;
--inline-title-color: #462207;
--h1-color: #2b1c13;
--h2-color: #553a27;
--h3-color: #62432f;
--h4-color: #72533d;
--h5-color: #8f6e58;
--h6-color: #a48a70;
--hr-color: #6a3700;
--link-color: #7a4f2c;
--link-color-hover: #a0643d;
--link-unresolved-color: #a27d6b;
--link-unresolved-decoration-color: #b07a60;
--link-external-color: #916549;
--link-external-color-hover: #704b31;
--list-marker-color: #7c5c40;
--list-marker-color-hover: #5f4229;
--list-marker-color-collapsed: #9b7c58;
--blockquote-background-color: #f2e9dc;
--blockquote-border-color: #b38363;
--blockquote-color: #3a2f24;
--code-background: #ede3d6;
--code-normal: #5c4c3b;
--code-comment: #9a8c79;
--code-function: #7c5d3d;
--code-important: #8c643e;
--code-keyword: #5e4229;
--code-operator: #6b4c33;
--code-property: #9a7652;
--code-punctuation: #7a6652;
--code-string: #a86f45;
--code-tag: #6f4c33;
--code-value: #5c4c3b;
--checkbox-color: #8c5e3c;
--checkbox-color-hover: #b38363;
--checklist-done-color: #a69a8c;
--table-header-background: #e9decf;
--table-header-color: #2e2a25;
--table-border-color: #bca98f;
--table-header-border-color: #bca98f;
--table-header-background-hover: #ded2bd;
--table-row-background-hover: #f2e8da;
--table-row-alt-background-hover: #ede3d6;
--table-selection-border-color: #9f7d5c;
--table-drag-handle-background-active: #b38363;
--table-drag-handle-color: #6b3f2a;
--table-drag-handle-color-active: #8c5e3c;
--table-add-button-border-color: #b39c7c;
--tab-background-active: #f6f1e7;
--tab-text-color: #7a6652;
--tab-text-color-active: #5c4c3b;
--tab-text-color-focused: #6f4c33;
--tab-text-color-focused-active: #4a2f1a;
--tab-text-color-focused-highlighted: #8a5d3a;
--tab-text-color-focused-active-current: #2d1e12;
--tab-container-background: #e6dccb;
--tab-divider-color: #b39c7c;
--tab-outline-color: #9d8565;
--nav-item-color: #2e2a25;
--nav-item-color-hover: #3a2f24;
--nav-item-color-active: #582710;
--nav-item-background-hover: #decdb3;
--nav-item-background-active: #d8c3a3;
--nav-indentation-guide-color: #b39c7c;
--nav-collapse-icon-color: #7e5933;
--icon-color: #6b3f2a;
--icon-color-hover: #a46f49;
--icon-color-focused: #8c5e3c;
--graph-node: #7a4f2c;
--graph-line: #b39c7c;
--graph-node-unresolved: #b07a60;
--graph-node-focused: #8c5e3c;
--graph-node-tag: #a85b21;
--graph-node-attachment: #b19f77;
--prompt-border-color: #b39c7c;
--modal-border-color: #7c5d3d;
--slider-thumb-border-color: #a67858;
--slider-track-background: #dac9b2;
--tag-background-hover: #e6dccb;
--search-clear-button-color: #6b3f2a;
--metadata-property-background: #efe6d9;
--indentation-guide-color: #c1b095;
--indentation-guide-color-active: #975300;
}

.theme-light .workspace-tab-header-container {
background-color: #e6dccb;
}

.arzaba-font-override, .theme-dark.arzaba-font-override {
--font-text-size: 24px !important
;
}`,
    },
    "arzaba-font-override": {
      dark: `.theme-light.arzaba-font-override, .arzaba-font-override {
--font-text-size: 22px !important;
}

.arzaba-ivy.theme-light.arzaba-font-override, .arzaba-ivy.arzaba-font-override {
--font-text-size: 20px !important;
}

.arzaba-wiki.theme-light.arzaba-font-override, .arzaba-wiki.arzaba-font-override {
--font-text-size: 18px !important;
}

.arzaba-black-and-white.theme-light.arzaba-font-override, .arzaba-black-and-white.arzaba-font-override {
--font-text-size: 26px !important;
}

.arzaba-future.theme-light.arzaba-font-override, .arzaba-future.arzaba-font-override {
--font-text-size: 20px !important;
}

.arzaba-retro.theme-light.arzaba-font-override, .arzaba-retro.arzaba-font-override {
--font-text-size: 34px !important
;
}

.arzaba-past.theme-light.arzaba-font-override, .arzaba-past.arzaba-font-override {
--font-text-size: 24px !important
;
}`,
      light: `.arzaba-font-override, .theme-dark.arzaba-font-override {
--font-text-size: 22px !important;
}

.arzaba-ivy.arzaba-font-override, .arzaba-ivy.theme-dark.arzaba-font-override {
--font-text-size: 20px !important;
}

.arzaba-wiki.arzaba-font-override, .arzaba-wiki.theme-dark.arzaba-font-override {
--font-text-size: 18px !important;
}

.arzaba-black-and-white.arzaba-font-override, .arzaba-black-and-white.theme-dark.arzaba-font-override {
--font-text-size: 26px !important;
}

.arzaba-future.arzaba-font-override, .arzaba-future.theme-dark.arzaba-font-override {
--font-text-size: 20px !important;
}

.arzaba-retro.arzaba-font-override, .arzaba-retro.theme-dark.arzaba-font-override {
--font-text-size: 34px !important
;
}

.arzaba-past.arzaba-font-override, .arzaba-past.theme-dark.arzaba-font-override {
--font-text-size: 24px !important
;
}`,
    },
  },
};
