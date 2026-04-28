import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.ttrpg-dnd",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
    fontFiles: [
      {
        family: "Fira Code",
        style: "normal",
        weight: "500",
        file: "fira-code.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "its",
        style: "normal",
        weight: "400",
        file: "its.woff",
        format: "woff",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #548b67;
  --accent-color: 84, 139, 103;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #cc824c;
  --accent2-lite: #61efc9;
  --aside-bg: #11151d;
  --background-modifier-active-hover: #2e4d3c;
  --background-modifier-border: #2c3836;
  --background-modifier-border-focus: #548b67;
  --background-modifier-border-hover: #1e3831;
  --background-modifier-cover: #06080c60;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #06080c60;
  --background-modifier-form-field-hover: #06080c60;
  --background-modifier-hover: rgba(255, 128, 0, 0.4);
  --background-modifier-message: #2e4d3c;
  --background-modifier-success: #32603e;
  --background-primary: #1a1e24;
  --background-primary-alt: #1b2c25;
  --background-secondary: #1a1e24;
  --background-secondary-alt: #0e0f15;
  --bases-cards-background: #1a1e24;
  --bases-cards-cover-background: #1b2c25;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #2c3836;
  --bases-cards-shadow-hover: 0 0 0 1px #1e3831;
  --bases-embed-border-color: #2c3836;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #aacac9;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #1a1e24;
  --bases-table-cell-background-active: #1a1e24;
  --bases-table-cell-background-disabled: #1b2c25;
  --bases-table-cell-background-selected: hsla(0, 49%, 49%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #548b67;
  --bases-table-cell-shadow-focus: 0 0 0 2px #2e4d3c;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #1b2c25;
  --bases-table-header-background: #1a1e24;
  --bases-table-header-background-hover: rgba(255, 128, 0, 0.4);
  --bases-table-header-color: #aacac9;
  --bases-table-row-background-hover: rgba(60, 168, 122, 0.4);
  --bases-table-summary-background: #1a1e24;
  --bases-table-summary-background-hover: rgba(255, 128, 0, 0.4);
  --bg: #1e3831;
  --blockquote-background-color: #0e0f15;
  --blockquote-border-color: #1e3831;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #dcdedd;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #0e0f15 65%, transparent) linear-gradient(#0e0f15, color-mix(in srgb, #0e0f15 65%, transparent));
  --bodyFont: var(--font-text, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #0e0f15;
  --box-border-m: 3px solid #0e0f15;
  --box-border-s: 1px solid #0e0f15;
  --bttn: #2e4d3c;
  --bullet: "\\e802";
  --bullet-font: "its";
  --button-background: #2e4d3c;
  --button-background-hover: #587770;
  --button-border: #2e4d3c;
  --button-border-radius: 0;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #1a1e24;
  --canvas-card-label-color: #4e5b6f;
  --canvas-color: 88, 100, 159;
  --canvas-color-opacity: 0.07;
  --canvas-controls-radius: 0;
  --canvas-node-padding: 0 7px;
  --caret-color: #dcdedd;
  --chbx-B: 136, 94, 233;
  --chbx-C: 207, 67, 67;
  --chbx-I: 82, 139, 212;
  --chbx-N: 133, 91, 65;
  --chbx-P: 79, 165, 79;
  --chbx-R: 170, 179, 202;
  --chbx-a: 248, 114, 181;
  --chbx-b: 230, 129, 63;
  --chbx-c: 149, 233, 238;
  --chbx-d: 62, 69, 82;
  --chbx-h: 92, 118, 153;
  --chbx-i: 194, 42, 42;
  --chbx-id: 231, 231, 171;
  --chbx-q: 253, 175, 0;
  --chbx-r: 249, 190, 123;
  --checkbox-border-color: #548b67;
  --checkbox-border-color-hover: #2e4d3c;
  --checkbox-color: #548b67;
  --checkbox-color-hover: #2e4d3c;
  --checkbox-marker-color: #1a1e24;
  --checkbox-radius: 0;
  --checklist-done-color: #587770;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #222e31;
  --code-bg: #222e31;
  --code-border-color: #2c3836;
  --code-bracket-background: rgba(255, 128, 0, 0.4);
  --code-comment: #4e5b6f;
  --code-normal: #71dfac;
  --code-punctuation: #aacac9;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #0e0f15;
  --code-size: .90em;
  --code-text: #71dfac;
  --codeFont: var(--font-monospace, "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter);
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #587770;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
  --dark: var(--text-normal, #dcdedd);
  --dark-accent: #2e4d3c;
  --dark-sidebar: #1c2f2b;
  --darkgray: var(--text-normal, #dcdedd);
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(84, 139, 103, 0.1);
  --dataview-th-background: #0e0f15;
  --dataview-th-border-bottom: 2px solid #3eb281;
  --dataview-th-color: #3eb281;
  --dataview-th-count-color: #3eb281;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #1b2c25;
  --divider-color: #0e0f15;
  --divider-color-hover: #548b67;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #2e4d3c;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #06080c60;
  --dropdown-background: #0e0f15;
  --dropdown-background-hover: #587770;
  --embed-bg: #0e0f15;
  --embed-block-shadow-hover: 2px 2px 0 #0e0f15;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #0e0f15;
  --embed-border-color: transparent;
  --embed-border-color-hover: #0e0f15;
  --embed-border-left: 2px solid #3eb281;
  --embed-border-left-color: #3eb281;
  --embed-border-left-color-hover: #3eb281;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #0e0f15;
  --embed-border-start: 2px solid #2e4d3c;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #0e0f15;
  --embed-border-type: solid;
  --embed-h: #c93c3c;
  --embed-header-size: 18px;
  --embed-padding: 0 10px 0 24px;
  --embed-thickness: 2px;
  --embed-title-align: center;
  --embed-title-padding: 5px 24px;
  --embed-title-white-space: wrap;
  --explorer-item-padding: 2px 8px;
  --explorer-padding: 4px 4px 4px 3px;
  --fa5: "Font Awesome 5 Free Solid";
  --fa6: "Font Awesome 6 Free Solid";
  --failure-bg: #772d2d;
  --faint-text: #4e5b6f;
  --fg: white;
  --file-font: "its";
  --file-header-background: #1a1e24;
  --file-header-background-focused: #1a1e24;
  --file-header-breadcrumb-color: #587770;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #587770;
  --file-header-color-active: #dcdedd;
  --file-header-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #2e4d3c;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #0e0f15;
  --file-icon: "\\e800";
  --file-icon-color: #aacac9;
  --file-icon-margin: 6px;
  --file-text-color: #dcdedd;
  --flair-background: #0e0f15;
  --flair-color: #dcdedd;
  --folder: #548b67;
  --folder-font: "its";
  --folder-icon: "\\e801";
  --folder-icon-color: #548b67;
  --folder-icon-open-color: #9a5f3b;
  --folder-open: #9a5f3b;
  --folder-open-text-color: #dcdedd;
  --folder-text-color: #dcdedd;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-frontmatter: .95em;
  --font-interface: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ligatures: none;
  --font-mermaid: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-small: .95em;
  --font-smaller: .90em;
  --font-smallest: .85em;
  --font-text: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ui-small: 14px;
  --font-ui-smaller: 13.5px;
  --footnote: #63778f;
  --footnote-divider-color: #2c3836;
  --footnote-id-color: #aacac9;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #06080c60;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #1f6f29;
  --graph-arrow: #aacac9;
  --graph-background: #1a1e24;
  --graph-bg: #1a1e24;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #3eb281;
  --graph-focused: #61efc9;
  --graph-img: #cc824c;
  --graph-line: #244047;
  --graph-line-hover: #548b67;
  --graph-lines: #244047;
  --graph-node: #3eb281;
  --graph-node-attachment: #cc824c;
  --graph-node-focused: #61efc9;
  --graph-node-hover-fill: #3eb281;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: saddlebrown;
  --graph-node-unresolved: #1f6f29;
  --graph-tag: saddlebrown;
  --graph-text: #dcdedd;
  --gray: var(--text-muted, #aacac9);
  --h1-background: transparent;
  --h1-border-color: #548b67;
  --h1-border-left-color: #2c3836;
  --h1-border-line-color: #2c3836;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #2c3836;
  --h1-border-width: 0;
  --h1-color: #3eb281;
  --h1-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #cc824c;
  --h2-border-left-color: #2c3836;
  --h2-border-line-color: #2c3836;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #2c3836;
  --h2-border-width: 0;
  --h2-color: sandybrown;
  --h2-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #c93c3c;
  --h3-border-left-color: #2c3836;
  --h3-border-line-color: #2c3836;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #2c3836;
  --h3-border-width: 0;
  --h3-color: #c93c3c;
  --h3-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #2b4e41;
  --h4-border-left-color: #2c3836;
  --h4-border-line-color: #2c3836;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #2c3836;
  --h4-border-width: 0;
  --h4-color: #3eb281;
  --h4-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #1c2f2b;
  --h5-border-left-color: #2c3836;
  --h5-border-line-color: #2c3836;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #2c3836;
  --h5-border-width: 0;
  --h5-color: #3eb281;
  --h5-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #0e0f15;
  --h6-border-left-color: #2c3836;
  --h6-border-line-color: #2c3836;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: #2c3836;
  --h6-border-width: 0;
  --h6-color: #3eb281;
  --h6-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #3eb281;
  --he-text-on-accent-inactive: #dcdedd;
  --he-title-bar-active-action: #45b480;
  --he-title-bar-active-bg: #0e0f15;
  --he-title-bar-active-fg: #dcdedd;
  --he-title-bar-active-pinned-bg: #1a1e24;
  --he-title-bar-inactive-action: #aacac9;
  --he-title-bar-inactive-bg: #1a1e24;
  --he-title-bar-inactive-fg: #587770;
  --he-title-bar-inactive-pinned-bg: #1a1e24;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #2c3836;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 700;
  --headerFont: var(--font-text, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --headers: #3eb281;
  --heading-formatting: #587770;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(60, 168, 122, 0.4);
  --hr: #2b4e41;
  --hr-alignment: -50%, -50%;
  --hr-color: #2b4e41;
  --hr-icon-background: #1a1e24;
  --hr-icon-color: #3eb281;
  --hr-icon-font: "Material Icons Sharp";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "\\e88c";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(66, 157, 104, 0.2);
  --hvr-active: rgba(255, 128, 0, 0.4);
  --hvr2: rgba(60, 168, 122, 0.4);
  --i-at: #5ebfa9;
  --icon-btn-radius: 0;
  --icon-color: #aacac9;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #dcdedd;
  --icon-color-hover: #dcdedd;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #0e0f15;
  --illusion-h1-background: #548b67;
  --illusion-h2-background: #cc824c;
  --illusion-h3-background: #c93c3c;
  --illusion-h4-background: #2b4e41;
  --illusion-h5-background: #1c2f2b;
  --illusion-h6-background: #0e0f15;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: #06080c60;
  --image-border-color: #2c3836;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #587770;
  --indentation-guide-color: #2b4e41;
  --indentation-guide-color-active: #548b67;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #2b4e41;
  --initiative-xp: sandybrown;
  --inline-title-color: #3eb281;
  --inline-title-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: rgba(0, 0, 0, 0.3);
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #0e0f15;
  --input-shadow-hover: 3px 3px 0 #0e0f15;
  --interactive-accent: #2e4d3c;
  --interactive-accent-hover: #587770;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #587770;
  --interactive-normal: #0e0f15;
  --its: "its";
  --kanban-button-background: #222e31;
  --kanban-button-shadow: 2px 2px 0 #0e0f15;
  --kanban-card-border: 2px solid #0e0f15;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #1a1e24;
  --kanban-card-text-color: #dcdedd;
  --kanban-card-title-background: #1a1e24;
  --kanban-card-title-border: 0 1px 0 #0e0f15;
  --kanban-lane-background: #222e31;
  --kanban-lane-border: 3px solid #0e0f15;
  --kanban-lane-box-shadow: 2px 2px 0 #0e0f15;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #61efc9;
  --kanban-tag-background: #2e4d3c;
  --latex-color: #45b480;
  --latex-format-color: #587770;
  --latex-syntax-color: #aacac9;
  --light: var(--background-primary, #1a1e24);
  --lightgray: var(--background-secondary, #1a1e24);
  --line-height-tight: 1.3em;
  --lines: #2b4e41;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #61efc9;
  --link-color-hover: #45b480;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #61efc9;
  --link-external-color-hover: #cc824c;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #587770;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #2c3836;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #2b4e41;
  --list-color-2: #2b4e41;
  --list-color-3: #2b4e41;
  --list-color-4: #2b4e41;
  --list-color-5: #2b4e41;
  --list-color-6: #2b4e41;
  --list-indent: 25px;
  --list-marker-color: #548b67;
  --list-marker-color-collapsed: #587770;
  --list-marker-color-hover: #aacac9;
  --list-marker-color-other: #cc824c;
  --list-marker-min-width: 0;
  --list-numbered-color: #45b480;
  --list-spacing: 1px;
  --lite-accent: #45b480;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #1a1e24;
  --menu-border-color: #1e3831;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #0e0f15;
  --message-border-color: #0e0f15;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #0e0f15;
  --message-color: #e5ebee;
  --metadata-border-color: #2c3836;
  --metadata-button-text-color: #587770;
  --metadata-divider-color: #2c3836;
  --metadata-icon-color: #aacac9;
  --metadata-input-background-active: #06080c60;
  --metadata-input-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #dcdedd;
  --metadata-label-background-active: #06080c60;
  --metadata-label-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #aacac9;
  --metadata-label-text-color-hover: #aacac9;
  --metadata-property-background-active: rgba(255, 128, 0, 0.4);
  --metadata-property-box-shadow-focus: 0 0 0 2px #548b67;
  --metadata-property-box-shadow-hover: 0 0 0 1px #1e3831;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #e5ebee;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #aacac9;
  --metadata-title-icon: "\\e805";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #1a1e24;
  --modal-border-color: #0e0f15;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: #06080c60;
  --modal-radius: 0;
  --modal-sidebar-background: #1c2f2b;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #dcdedd;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #aacac9;
  --nav-heading-color-hover: #dcdedd;
  --nav-indentation-guide-color: #2b4e41;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #2e4d3c;
  --nav-item-background-border-color-hover: #2e4d3c;
  --nav-item-background-hover: #2e4d3c;
  --nav-item-background-selected: rgba(66, 157, 104, 0.2);
  --nav-item-border-color: #45b480;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #dcdedd;
  --nav-item-color-active: #e5ebee;
  --nav-item-color-highlighted: #e5ebee;
  --nav-item-color-hover: #e5ebee;
  --nav-item-color-selected: #dcdedd;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 0;
  --nav-item-size: 14px;
  --nav-item-weight: 500;
  --nav-item-weight-active: 700;
  --nav-item-weight-hover: 700;
  --nav-item-white-space: wrap;
  --nav-tag-color: #4e5b6f;
  --nav-tag-color-active: #aacac9;
  --nav-tag-color-hover: #aacac9;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #1a1e24;
  --note-rgb: 26, 30, 36;
  --note-title-border-color: #3eb281;
  --outer-bar: #0e0f15;
  --outline: #0e0f15;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #1a1e24;
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #2c3836;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #2c3836;
  --pill-border-color: #2c3836;
  --pill-border-color-hover: #1e3831;
  --pill-color: #aacac9;
  --pill-color-hover: #dcdedd;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #61efc9;
  --pill-radius: 0;
  --popover-background: #1a1e24;
  --popover-border: 3px solid #0e0f15;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #548b67;
  --progress-bg: #1e3831;
  --prompt-background: #1a1e24;
  --prompt-border-color: #0e0f15;
  --prompt-border-width: 3px;
  --r-heading-color: #3eb281;
  --r-heading-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #45b480;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-s: 0;
  --radius-xl: 0;
  --rainbow-1: #b03a3a;
  --rainbow-2: #d59929;
  --rainbow-3: #207a20;
  --rainbow-4: #3232c5;
  --rainbow-5: #7f307f;
  --rainbow-6: #dd4794;
  --raised-background: color-mix(in srgb, #0e0f15 65%, transparent) linear-gradient(#0e0f15, color-mix(in srgb, #0e0f15 65%, transparent));
  --ribbon-background: #0e0f15;
  --ribbon-background-collapsed: #1a1e24;
  --ribbon-border-color: #0e0f15;
  --ribbon-border-width: 0;
  --ribbon-icon-gap: 15px;
  --ribbon-icon-size: 18px;
  --ribbon-icon-stroke: 1.75px;
  --ribbon-width: 40px;
  --rmx: "remixicon";
  --root-list-bullet-spacing: 0;
  --root-list-spacing: 10px;
  --rpg: "rpg-awesome";
  --scroll-size: 7px;
  --scrollbar-active-thumb-bg: #45b480;
  --scrollbar-bg: #1e3831;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #2e4d3c;
  --scrollbar-track-bg: #1a1e24;
  --search-border: 2px solid #0e0f15;
  --search-box-shadow: 2px 2px 0 #0e0f15;
  --search-clear-button-color: #aacac9;
  --search-icon-color: #aacac9;
  --search-result-background: #1a1e24;
  --secondary: var(--text-accent, #61efc9);
  --setting-group-heading-color: #dcdedd;
  --setting-item-alt-background-hover: #06080c60;
  --setting-item-background-hover: rgba(66, 157, 104, 0.2);
  --setting-item-border-color: #2c3836;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #3eb281;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #06080c60;
  --setting-items-background: transparent;
  --setting-items-border-color: #2c3836;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #0e0f15;
  --shadow-m: 3px 3px 0 #0e0f15;
  --shadow-ml: 4px 4px 0 #0e0f15;
  --shadow-s: 2px 2px 0 #0e0f15;
  --shiki-active-tab-border-color: #aacac9;
  --shiki-code-background: #222e31;
  --shiki-code-block-border-radius: 0;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-normal: #aacac9;
  --shiki-code-punctuation: #aacac9;
  --shiki-gutter-border-color: #2c3836;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #aacac9;
  --shiki-highlight-neutral: #aacac9;
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #2e4d3c;
  --side-bar: #1a1e24;
  --side-bar-bg: #0e0f15;
  --sidebar-icon-color: #dcdedd;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #2e4d3c;
  --sidebar-tab-background-color-hover: #548b67;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #2e4d3c;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #1a1e24;
  --slider-thumb-border-color: #1e3831;
  --slider-thumb-radius: 0;
  --slider-track-background: #2c3836;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #aacac9;
  --statblock-alt: #06080c60;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #1a1e24;
  --statblock-bar-border-color: #548b67;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #548b67;
  --statblock-border-color: #2b4e41;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #0e0f15;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #dcdedd;
  --statblock-heading-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --statblock-heading-font-color: #3eb281;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #2b4e41;
  --statblock-primary-color: #dcdedd;
  --statblock-property-font-color: #dcdedd;
  --statblock-property-name-font-color: #3eb281;
  --statblock-rule-color: #548b67;
  --statblock-section-heading-border-color: #2c3836;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --statblock-section-heading-font-color: #63778f;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #0e0f15;
  --status-bar-border-color: #548b67;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #aacac9;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #2e4d3c;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --success-bg: #32603e;
  --suggestion-background: #1a1e24;
  --tab-background: #0e0f15;
  --tab-background-active: #1a1e24;
  --tab-container-background: #0e0f15;
  --tab-curve: 0;
  --tab-divider-color: #2b4e41;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #548b67;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #06080c60;
  --tab-stacked-shadow-color: #06080c60;
  --tab-switcher-background: #1a1e24;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1e24, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #0e0f15;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #0e0f15;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #45b480, 5px 5px 0 #0e0f15;
  --tab-text-color: #587770;
  --tab-text-color-active: #dcdedd;
  --tab-text-color-focused: #587770;
  --tab-text-color-focused-active: #dcdedd;
  --tab-text-color-focused-active-current: #dcdedd;
  --tab-text-color-focused-highlighted: #61efc9;
  --tab-text-color-hover: #dcdedd;
  --tab-top-outline-width: 0;
  --table: #2c3836;
  --table-add-button-background: #2e4d3c;
  --table-add-button-border-color: #1a1e24;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #1a1e24;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #06080c60;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #2e4d3c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #2e4d3c;
  --table-header-background-hover: #548b67;
  --table-header-border-color: #1a1e24;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #45b480;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #06080c60;
  --table-row-alt-background-hover: rgba(60, 168, 122, 0.4);
  --table-row-background-hover: rgba(60, 168, 122, 0.4);
  --table-row-edit-font-size: .95em;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-border-color: #2e4d3c;
  --table-selection-border-radius: 0;
  --tag: #2e4d3c;
  --tag-background: #2e4d3c;
  --tag-background-color: #2e4d3c;
  --tag-background-hover: #548b67;
  --tag-border-color: #2e4d3c;
  --tag-border-color-hover: #548b67;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #d04e4e;
  --tall: 700px;
  --td: #06080c60;
  --tertiary: var(--text-accent-hover, #cc824c);
  --text: #dcdedd;
  --text-accent: #61efc9;
  --text-accent-hover: #cc824c;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(66, 157, 104, 0.2);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: #aacac9;
  --text-normal: #dcdedd;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(60, 168, 122, 0.4);
  --textHighlight: var(--text-highlight-bg, rgba(66, 157, 104, 0.2));
  --th: #2e4d3c;
  --th-text: #e5ebee;
  --theme-rainbow-1: #548b67;
  --theme-rainbow-2: #cc824c;
  --theme-rainbow-3: #c93c3c;
  --theme-rainbow-4: #2b4e41;
  --theme-rainbow-5: #1c2f2b;
  --theme-rainbow-6: #0e0f15;
  --tiny: 100px;
  --titleFont: var(--font-text, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --titlebar-background: #1a1e24;
  --titlebar-background-focused: #0e0f15;
  --titlebar-border-color: #2c3836;
  --titlebar-text-color: #dcdedd;
  --titlebar-text-color-focused: #dcdedd;
  --toggle-border-width: 1px;
  --toggle-radius: 0;
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: 0;
  --toggle-width: 20px;
  --tooltip-color: #e5ebee;
  --vault-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --vault-name-color: #3eb281;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #dcdedd;
  --vault-profile-color-hover: #dcdedd;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(14, 15, 21));
  color: var(--text-dl, rgb(220, 222, 221));
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(26, 30, 36));
  color: var(--file-header-color-active, rgb(220, 222, 221));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(26, 30, 36));
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(14, 15, 21);
  border-right-width: 2px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--td, rgb(14, 15, 21));
  border-left-color: rgb(14, 15, 21);
  color: var(--text-on-accent, rgb(220, 222, 221));
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered > h1 {
  --font-weight: 700;
  background-color: rgb(44, 56, 54);
  border-bottom-color: rgb(62, 178, 129);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(62, 178, 129);
  border-left-width: 0px;
  border-right-color: rgb(62, 178, 129);
  border-right-width: 0px;
  border-top-color: rgb(62, 178, 129);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--header-arrow-icon-color, rgb(62, 178, 129));
  content: "";
  font-family: var(--h1-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
  font-size: var(--h1-size, 34px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.51px);
  line-height: var(--h1-line-height, 40.8px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(220, 222, 221));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: calc(var(--font-weight) + var(--bold-modifier), 900);
  outline: rgb(220, 222, 221) none 0px;
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(220, 222, 221));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(220, 222, 221));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(220, 222, 221));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: calc(var(--font-weight) + var(--bold-modifier), 900);
  outline: rgb(220, 222, 221) none 0px;
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(66, 157, 104, 0.2));
  color: var(--text-normal, rgb(220, 222, 221));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body del {
  color: var(--strikethrough-color, rgb(220, 222, 221));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration: line-through 1px;
  text-decoration-color: var(--strikethrough-line-color, rgb(220, 222, 221));
  text-decoration-thickness: var(--strikethrough-line-thickness, 1px);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(220, 222, 221));
  font-size: 15px;
  font-weight: 600;
}

html[saved-theme="dark"] body h2 {
  --font-weight: 700;
  background-color: rgb(44, 56, 54);
  border-bottom-color: rgb(244, 164, 96);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(244, 164, 96);
  border-left-width: 0px;
  border-right-color: rgb(244, 164, 96);
  border-right-width: 0px;
  border-top-color: rgb(244, 164, 96);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(244, 164, 96));
  content: "";
  font-family: var(--h2-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
  font-size: var(--h2-size, 30px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h2-letter-spacing, -0.33px);
  line-height: var(--h2-line-height, 36px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h3 {
  --font-weight: 700;
  background-color: rgb(44, 56, 54);
  border-bottom-color: rgb(201, 60, 60);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(201, 60, 60);
  border-left-width: 0px;
  border-right-color: rgb(201, 60, 60);
  border-right-width: 0px;
  border-top-color: rgb(201, 60, 60);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(201, 60, 60));
  content: "";
  font-family: var(--h3-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
  font-size: var(--h3-size, 26px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h3-letter-spacing, -0.208px);
  line-height: var(--h3-line-height, 33.8px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h4 {
  --font-weight: 700;
  background-color: rgb(44, 56, 54);
  border-bottom-color: rgb(62, 178, 129);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(62, 178, 129);
  border-left-width: 0px;
  border-right-color: rgb(62, 178, 129);
  border-right-width: 0px;
  border-top-color: rgb(62, 178, 129);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(62, 178, 129));
  content: "";
  font-family: var(--h4-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
  font-size: var(--h4-size, 22px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h4-letter-spacing, -0.11px);
  line-height: var(--h4-line-height, 30.8px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h5 {
  --font-weight: 700;
  background-color: rgb(44, 56, 54);
  border-bottom-color: rgb(62, 178, 129);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(62, 178, 129);
  border-left-width: 0px;
  border-right-color: rgb(62, 178, 129);
  border-right-width: 0px;
  border-top-color: rgb(62, 178, 129);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(62, 178, 129));
  content: "";
  font-family: var(--h5-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
  font-size: var(--h5-size, 20px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h5-letter-spacing, -0.04px);
  line-height: var(--h5-line-height, 30px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h6 {
  --font-weight: 700;
  background-color: rgb(44, 56, 54);
  border-bottom-color: rgb(62, 178, 129);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(62, 178, 129);
  border-left-width: 0px;
  border-right-color: rgb(62, 178, 129);
  border-right-width: 0px;
  border-top-color: rgb(62, 178, 129);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(62, 178, 129));
  content: "";
  font-family: var(--h6-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
  font-size: var(--h6-size, 18px);
  font-weight: var(--font-weight, 700);
  line-height: var(--h6-line-height, 27px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(84, 139, 103);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgba(0, 0, 0, 0));
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(170, 202, 201));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(170, 202, 201) none 0px;
  text-decoration-color: rgb(170, 202, 201);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  --resizer-size: 20px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --zoom-multiplier: 1;
  background-color: var(--link-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(97, 239, 201);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(97, 239, 201);
  border-left-width: 0px;
  border-right-color: rgb(97, 239, 201);
  border-right-width: 0px;
  border-top-color: rgb(97, 239, 201);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--link-external-color, rgb(97, 239, 201));
  content: "\\e809";
  font-family: var(--link-external-font, its);
  font-weight: var(--link-weight, 100);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(97, 239, 201) none 0px;
  padding-bottom: 0px;
  padding-left: 2px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration-color: rgb(97, 239, 201);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  background-color: var(--link-background, rgba(0, 0, 0, 0));
  color: var(--link-color, rgb(97, 239, 201));
  font-family: var(--link-font, "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  outline: rgb(97, 239, 201) none 0px;
  text-decoration-color: rgb(97, 239, 201);
}

html[saved-theme="dark"] body a.internal-link.broken {
  background-color: var(--link-background, rgba(0, 0, 0, 0));
  color: var(--link-unresolved-color, rgb(88, 119, 112));
  font-family: var(--link-font, "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  outline: rgb(88, 119, 112) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(186, 64, 64, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body dt {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(78, 91, 111));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(14, 15, 21));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body table {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgba(6, 8, 12, 0.376));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(26, 30, 36);
  border-right-color: rgb(26, 30, 36);
  border-top-color: rgb(26, 30, 36);
  color: var(--table-text-color, rgb(220, 222, 221));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(26, 30, 36);
  border-right-color: rgb(26, 30, 36);
  border-top-color: rgb(26, 30, 36);
  border-top-left-radius: var(--radius-s, 0px);
  color: var(--table-header-color, rgb(229, 235, 238));
  font-weight: var(--table-header-weight, 700);
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgb(46, 77, 60));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(34, 46, 49));
  border-bottom-color: rgb(44, 56, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--code-normal, rgb(113, 223, 172));
  font-family: var(--font-monospace, "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter);
  padding-bottom: 2.16px;
  padding-left: 4.32px;
  padding-right: 4.32px;
  padding-top: 2.16px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(34, 46, 49));
  border-bottom-color: rgb(44, 56, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(62, 178, 129);
  border-left-color: rgb(62, 178, 129);
  border-right-color: rgb(62, 178, 129);
  border-top-color: rgb(62, 178, 129);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--outer-bar, rgb(14, 15, 21));
  border-bottom-color: rgb(170, 202, 201);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 202, 201);
  border-right-color: rgb(170, 202, 201);
  border-top-color: rgb(170, 202, 201);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: var(--callout-cards-notion-padding, 8px);
  padding-right: var(--callout-cards-notion-padding, 8px);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(220, 222, 221);
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(46, 77, 60);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
  padding-left: var(--callout-cards-notion-padding, 0px);
  padding-right: var(--callout-cards-notion-padding, 0px);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-style: solid;
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(84, 139, 103);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(84, 139, 103);
  border-right-color: rgb(84, 139, 103);
  border-top-color: rgb(84, 139, 103);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-left: -22.4px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(136, 94, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(248, 114, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(78, 91, 111);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(230, 129, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(79, 165, 79);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(136, 94, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(207, 67, 67);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(92, 118, 153);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(82, 139, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(92, 118, 153);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(248, 114, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(133, 91, 65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(133, 91, 65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(186, 64, 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(79, 165, 79);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(79, 165, 79);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(78, 91, 111);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(230, 129, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(249, 190, 123);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(62, 69, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(88, 119, 112);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(207, 67, 67);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(194, 42, 42);
  text-decoration-color: rgb(194, 42, 42);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(62, 69, 82);
  text-decoration-color: rgb(62, 69, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(170, 202, 201);
  text-decoration-color: rgb(170, 202, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(253, 175, 0);
  text-decoration-color: rgb(253, 175, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(230, 129, 63);
  text-decoration-color: rgb(230, 129, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(149, 233, 238);
  text-decoration-color: rgb(149, 233, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(133, 91, 65);
  text-decoration-color: rgb(133, 91, 65);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(231, 231, 171);
  text-decoration-color: rgb(231, 231, 171);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(62, 69, 82);
  content: "\\ec02";
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(194, 42, 42);
  content: "\\ec08";
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(253, 175, 0);
  content: "\\ec05";
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  color: rgb(230, 129, 63);
  content: "\\e900";
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(84, 139, 103);
  content: "\\ec17";
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  color: rgb(136, 94, 233);
  content: "\\ec32";
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  color: rgb(248, 114, 181);
  content: "\\ec06";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(78, 91, 111);
  content: "\\ec03";
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(220, 222, 221);
  content: "\\ec03";
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  color: rgb(207, 67, 67);
  content: "\\ec33";
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  color: rgb(79, 165, 79);
  content: "\\ec20";
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(230, 129, 63);
  content: "\\ec15";
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgb(136, 94, 233);
  content: "\\ec10";
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(149, 233, 238);
  content: "\\ec29";
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgb(207, 67, 67);
  content: "\\ec12";
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(82, 139, 212);
  content: "\\ec25";
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(92, 118, 153);
  content: "\\ec04";
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  color: rgb(82, 139, 212);
  content: "\\ec18";
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(133, 91, 65);
  content: "\\e81e";
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  color: rgb(92, 118, 153);
  content: "\\ec28";
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  color: rgb(248, 114, 181);
  content: "\\ec30";
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(231, 231, 171);
  content: "\\ec09";
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(82, 139, 212);
  content: "\\ec16";
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgb(133, 91, 65);
  content: "\\ec21";
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgb(133, 91, 65);
  content: "\\ec14";
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  color: rgb(230, 129, 63);
  content: "\\ec24";
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  color: rgb(186, 64, 64);
  content: "\\e805";
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(170, 179, 202);
  content: "\\ec19";
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(79, 165, 79);
  content: "\\ec11";
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  color: rgb(170, 179, 202);
  content: "\\ec13";
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(249, 190, 123);
  content: "\\ec22";
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  color: rgb(170, 179, 202);
  content: "\\ec07";
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(62, 69, 82);
  content: "\\ec31";
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  color: rgb(170, 179, 202);
  content: "\\ec27";
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  color: rgb(170, 179, 202);
  content: "\\ec26";
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgb(79, 165, 79);
  content: "\\e813";
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  color: rgb(97, 239, 201);
  content: "\\ec01";
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(var(--callout-color), rgb(220, 222, 221));
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(220, 222, 221));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(220, 222, 221);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(var(--callout-color), rgb(220, 222, 221));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(220, 222, 221));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(220, 222, 221);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="aside"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: "";
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-margin: 0 -1.2em 0 5px;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb("") 25%, #1a1e24 50%);
  background-color: var(--aside-bg, var(--background-secondary));
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(220, 222, 221);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(220, 222, 221);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0.3em 0.3em 0 var(--accent, var(--background-modifier-box-shadow)), 0 0 0 1px var(--accent, var(--background-modifier-box-shadow));
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="blank"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-border-width: 0;
  --callout-brown: 161, 106, 73;
  --callout-color: transparent;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(transparent) 25%, #1a1e24 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(220, 222, 221);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(220, 222, 221);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(var(--callout-color), rgb(220, 222, 221));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(220, 222, 221));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(220, 222, 221);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="caption"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: 2, 122, 255;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #1a1e24 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(220, 222, 221);
  border-left-width: 0px;
  border-right-color: rgb(220, 222, 221);
  border-right-width: 0px;
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="captions"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: 2, 122, 255;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #1a1e24 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="cards"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-cards-columns: 3;
  --callout-cards-gap: 5px;
  --callout-color: transparent;
  --callout-color-opacity: 20%;
  --callout-content-padding: 0px;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(transparent) 25%, #1a1e24 50%);
  background-color: var(--outer-bar, var(--background-secondary));
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(220, 222, 221);
  border-left-width: 0px;
  border-right-color: rgb(220, 222, 221);
  border-right-width: 0px;
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="checks"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --list-indent: 0;
  --root-list-spacing: 0;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(220, 222, 221);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(220, 222, 221);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="column"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: #dcdedd;
  --callout-color-opacity: 20%;
  --callout-column-gap: 10px;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --columns: 2;
  --table-border-color: color-mix(in srgb, rgb(#dcdedd) 25%, #1a1e24 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(220, 222, 221);
  border-left-width: 0px;
  border-right-color: rgb(220, 222, 221);
  border-right-width: 0px;
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="columns"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: #dcdedd;
  --callout-color-opacity: 20%;
  --callout-column-gap: 10px;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --columns: 2;
  --table-border-color: color-mix(in srgb, rgb(#dcdedd) 25%, #1a1e24 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(220, 222, 221);
  border-left-width: 0px;
  border-right-color: rgb(220, 222, 221);
  border-right-width: 0px;
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(var(--callout-color), rgb(220, 222, 221));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(220, 222, 221));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(220, 222, 221);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(var(--callout-color), rgb(220, 222, 221));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(220, 222, 221));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(220, 222, 221);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(var(--callout-color), rgb(220, 222, 221));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(220, 222, 221));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(220, 222, 221);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="grid"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: 2, 122, 255;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #1a1e24 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(220, 222, 221);
  border-left-width: 0px;
  border-right-color: rgb(220, 222, 221);
  border-right-width: 0px;
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(var(--callout-color), rgb(220, 222, 221));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(220, 222, 221));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(220, 222, 221);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="infobox"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: #1a1e24;
  --callout-color-opacity: 20%;
  --callout-content-padding: 5px;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-margin: 0 0 0 5px;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --h1-border-line-height: 0;
  --h2-border-line-height: 0;
  --h3-border-line-height: 0;
  --h4-border-line-height: 0;
  --h5-border-line-height: 0;
  --h6-border-line-height: 0;
  --table-border-color: color-mix(in srgb, rgb(#1a1e24) 25%, #1a1e24 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(220, 222, 221);
  border-left-width: 0px;
  border-right-color: rgb(220, 222, 221);
  border-right-width: 0px;
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="kanban"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --item-outline: 0 0 0 1px #0e0f15;
  --lane-width: 250px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(220, 222, 221);
  border-left-width: 0px;
  border-right-color: rgb(220, 222, 221);
  border-right-width: 0px;
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="kith"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: 115, 167, 202;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(115, 167, 202) 25%, #1a1e24 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(115, 167, 202, 0.7);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(115, 167, 202, 0.7);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(115, 167, 202, 0.7);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(115, 167, 202, 0.7);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="metadata"] {
  --bold-color: rgb(82, 139, 212);
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-border-width: 2px;
  --callout-brown: 161, 106, 73;
  --callout-color: 82, 139, 212;
  --callout-color-opacity: 20%;
  --callout-content-padding: 0px 10px 10px;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-shadow: 0px 0px 0px 1px #0e0f15;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-title-padding: 5px;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(82, 139, 212) 25%, #1a1e24 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(82, 139, 212, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(82, 139, 212, 0.25);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(82, 139, 212, 0.25);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(82, 139, 212, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(var(--callout-color), rgb(220, 222, 221));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(220, 222, 221));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(220, 222, 221);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(var(--callout-color), rgb(220, 222, 221));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(220, 222, 221));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(220, 222, 221);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: hsl(0, 49%, 49%);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(220, 222, 221);
  border-left-width: 4px;
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(var(--callout-color), rgb(220, 222, 221));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(220, 222, 221));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(220, 222, 221);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="quotes"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: 2, 122, 255;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #1a1e24 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="recite"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: 193, 67, 67;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-margin: 10px;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 5px 10px 10px 10px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(193, 67, 67) 25%, #1a1e24 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(193, 67, 67, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 11px;
  border-left-color: rgba(193, 67, 67, 0.25);
  border-left-style: solid;
  border-left-width: 11px;
  border-right-color: rgba(193, 67, 67, 0.25);
  border-right-style: solid;
  border-right-width: 11px;
  border-top-color: rgba(193, 67, 67, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 11px;
  box-shadow: 0px 0px 10px var(--outline, var(--background-modifier-box-shadow));
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="statblocks"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-border-color: #2b4e41;
  --callout-brown: 161, 106, 73;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-margin: 10px auto;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 12px 15px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-left-color: rgb(220, 222, 221);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(220, 222, 221);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 5px;
  box-shadow: var(--shadow-l), 0 0 20px var(--outline, var(--hr-color));
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 138.688px;
  margin-right: 138.688px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(var(--callout-color), rgb(220, 222, 221));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(220, 222, 221));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(220, 222, 221);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="timeline"] {
  --c-timeline: calc(50% - 2px);
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: 2, 122, 255;
  --callout-color-opacity: 20%;
  --callout-content-background: rgb(2, 122, 255, 0.1);
  --callout-content-padding: 10px;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-margin: 0;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-title-padding: 10px;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --micro: 50px;
  --table-border-color: color-mix(in srgb, rgb(2, 122, 255) 25%, #1a1e24 50%);
  --timeline-border: rgb(2, 122, 255);
  --timeline-shadow: #0e0f15;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(220, 222, 221);
  border-left-width: 0px;
  border-right-color: rgb(220, 222, 221);
  border-right-width: 0px;
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(var(--callout-color), rgb(220, 222, 221));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(220, 222, 221));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(220, 222, 221);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(var(--callout-color), rgb(220, 222, 221));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(220, 222, 221));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(220, 222, 221);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(var(--callout-color), rgb(220, 222, 221));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(220, 222, 221));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(220, 222, 221);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="aside"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="blank"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="caption"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="captions"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="cards"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='9' x='3' y='3' rx='1'/%3E%3Crect width='7' height='5' x='14' y='3' rx='1'/%3E%3Crect width='7' height='9' x='14' y='12' rx='1'/%3E%3Crect width='7' height='5' x='3' y='16' rx='1'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="checks"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344'/%3E%3Cpath d='m9 11 3 3L22 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='9' x='3' y='3' rx='1'/%3E%3Crect width='7' height='5' x='14' y='3' rx='1'/%3E%3Crect width='7' height='9' x='14' y='12' rx='1'/%3E%3Crect width='7' height='5' x='3' y='16' rx='1'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="columns"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='9' x='3' y='3' rx='1'/%3E%3Crect width='7' height='5' x='14' y='3' rx='1'/%3E%3Crect width='7' height='9' x='14' y='12' rx='1'/%3E%3Crect width='7' height='5' x='3' y='16' rx='1'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="grid"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="infobox"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="kanban"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='9' x='3' y='3' rx='1'/%3E%3Crect width='7' height='5' x='14' y='3' rx='1'/%3E%3Crect width='7' height='9' x='14' y='12' rx='1'/%3E%3Crect width='7' height='5' x='3' y='16' rx='1'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="kith"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="metadata"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z'/%3E%3Cpath d='M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12'/%3E%3Cpath d='M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quotes"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="recite"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath stroke='none' fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455z'/%3E%3C/svg%3E'");
}

html[saved-theme="dark"] body .callout[data-callout="statblocks"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='14.5 17.5 3 6 3 3 6 3 17.5 14.5'/%3E%3Cline x1='13' x2='19' y1='19' y2='13'/%3E%3Cline x1='16' x2='20' y1='16' y2='20'/%3E%3Cline x1='19' x2='21' y1='21' y2='19'/%3E%3Cpolyline points='14.5 6.5 18 3 21 3 21 6 17.5 9.5'/%3E%3Cline x1='5' x2='9' y1='14' y2='18'/%3E%3Cline x1='7' x2='4' y1='17' y2='20'/%3E%3Cline x1='3' x2='5' y1='19' y2='21'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="timeline"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 6v6'/%3E%3C/svg%3E");
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
  background-color: rgba(6, 8, 12, 0.376);
  border-bottom-color: rgb(44, 56, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--text-normal, rgb(220, 222, 221));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(26, 30, 36));
  border-bottom-color: rgb(14, 15, 21);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(14, 15, 21);
  border-left-width: 3px;
  border-right-color: rgb(14, 15, 21);
  border-right-width: 3px;
  border-top-color: rgb(14, 15, 21);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: var(--shadow-l, rgb(14, 15, 21) 5px 5px 0px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 128, 0, 0.4));
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(14, 15, 21);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(14, 15, 21);
  border-left-width: 3px;
  border-right-color: rgb(14, 15, 21);
  border-right-width: 3px;
  border-top-color: rgb(14, 15, 21);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(255, 128, 0, 0.4));
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 128, 0, 0.4));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgb(46, 77, 60));
  border-bottom-color: rgb(46, 77, 60);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(46, 77, 60);
  border-right-color: rgb(46, 77, 60);
  border-top-color: rgb(46, 77, 60);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="dark"] body h1 {
  color: var(--header-arrow-icon-color, rgb(62, 178, 129));
  font-family: var(--h1-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(62, 178, 129));
  font-size: var(--inline-title-size, 34px);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(244, 164, 96));
  font-family: var(--h2-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(62, 178, 129));
  font-family: var(--inline-title-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(201, 60, 60));
  font-family: var(--h3-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(62, 178, 129));
  font-family: var(--h4-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(62, 178, 129));
  font-family: var(--h5-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(62, 178, 129));
  font-family: var(--h6-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(14, 15, 21);
  border-left-color: rgb(14, 15, 21);
  border-right-color: rgb(14, 15, 21);
  border-right-width: 2px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 16px;
  padding-right: 16px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(43, 78, 65);
  border-left-width: 2px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--folder-open-text-color, rgb(220, 222, 221));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: var(--nav-item-weight, 700);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--folder-open-text-color, rgb(220, 222, 221));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: var(--nav-item-weight, 700);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 700);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(170, 202, 201);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 202, 201);
  border-right-color: rgb(170, 202, 201);
  border-top-color: rgb(170, 202, 201);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(170, 202, 201));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(14, 15, 21));
  border-bottom-color: rgb(84, 139, 103);
  border-left-color: rgb(84, 139, 103);
  border-right-color: rgb(84, 139, 103);
  border-top-color: rgb(84, 139, 103);
  border-top-left-radius: 0px;
  color: var(--status-bar-text-color, rgb(170, 202, 201));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(170, 202, 201);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--file-text-color, rgb(220, 222, 221));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--file-text-color, rgb(220, 222, 221));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(170, 202, 201);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 202, 201);
  border-right-color: rgb(170, 202, 201);
  border-top-color: rgb(170, 202, 201);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(170, 202, 201));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(170, 202, 201);
  stroke: rgb(170, 202, 201);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(88, 119, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(88, 119, 112);
  border-right-color: rgb(88, 119, 112);
  border-top-color: rgb(88, 119, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--file-header-breadcrumb-color, rgb(88, 119, 112));
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(78, 91, 111));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: var(--progress, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(220, 222, 221));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(26, 30, 36));
  border-color: rgb(14, 15, 21);
  box-shadow: var(--input-shadow, rgb(14, 15, 21) 2px 2px 0px 0px);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgba(6, 8, 12, 0.376));
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(26, 30, 36);
  color: var(--table-header-color, rgb(229, 235, 238));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(44, 56, 54);
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  color: var(--text-muted, rgb(170, 202, 201));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(170, 202, 201);
  border-left-color: rgb(170, 202, 201);
  border-right-color: rgb(170, 202, 201);
  border-top-color: rgb(170, 202, 201);
  color: rgb(170, 202, 201);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(44, 56, 54);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(170, 202, 201);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(170, 202, 201);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgb(46, 77, 60));
  border-radius: 0px;
  color: var(--pill-color, rgb(229, 235, 238));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(170, 202, 201);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(26, 30, 36));
  color: var(--headers, rgb(220, 222, 221));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(26, 30, 36));
  border-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(14, 15, 21));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(220, 222, 221);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(14, 15, 21));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(220, 222, 221));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(170, 202, 201);
  border-left-color: rgb(170, 202, 201);
  border-right-color: rgb(170, 202, 201);
  border-top-color: rgb(170, 202, 201);
  color: var(--text-normal, rgb(170, 202, 201));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(34, 46, 49));
  border-bottom-color: rgb(113, 223, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 223, 172);
  border-right-color: rgb(113, 223, 172);
  border-top-color: rgb(113, 223, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: var(--code-shadow, rgb(14, 15, 21) 0px 2px 0px 0px);
  color: var(--code-normal, rgb(113, 223, 172));
  font-family: var(--font-monospace, "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter);
  font-size: var(--code-size, 14.4px);
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body sub {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body summary {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body sup {
  color: rgb(220, 222, 221);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgb(46, 77, 60));
  border-bottom-color: rgb(46, 77, 60);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(46, 77, 60);
  border-right-color: rgb(46, 77, 60);
  border-top-color: rgb(46, 77, 60);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--tag-color, rgb(229, 235, 238));
}`,
  },
  light: {
    base: `:root:root {
  --accent: #79c78e;
  --accent-color: 121, 199, 142;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #cca04c;
  --accent2-lite: #35be89;
  --aside-bg: #ecf6f1;
  --background-modifier-active-hover: #5a8d71;
  --background-modifier-border: #ccd6eb;
  --background-modifier-border-focus: #79c78e;
  --background-modifier-border-hover: #cbe2d5;
  --background-modifier-cover: #d0ddef62;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #d0ddef62;
  --background-modifier-form-field-hover: #d0ddef62;
  --background-modifier-hover: rgba(255, 128, 0, 0.2);
  --background-modifier-message: #5a8d71;
  --background-modifier-success: #599049;
  --background-primary: #f8fbff;
  --background-primary-alt: #1b2c25;
  --background-secondary: #f8fbff;
  --background-secondary-alt: #dfefe6;
  --bases-cards-background: #f8fbff;
  --bases-cards-cover-background: #1b2c25;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #ccd6eb;
  --bases-cards-shadow-hover: 0 0 0 1px #cbe2d5;
  --bases-embed-border-color: #ccd6eb;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #52ad67;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #f8fbff;
  --bases-table-cell-background-active: #f8fbff;
  --bases-table-cell-background-disabled: #1b2c25;
  --bases-table-cell-background-selected: hsla(0, 49%, 49%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #79c78e;
  --bases-table-cell-shadow-focus: 0 0 0 2px #5a8d71;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #1b2c25;
  --bases-table-header-background: #f8fbff;
  --bases-table-header-background-hover: rgba(255, 128, 0, 0.2);
  --bases-table-header-color: #52ad67;
  --bases-table-row-background-hover: rgba(60, 168, 122, 0.4);
  --bases-table-summary-background: #f8fbff;
  --bases-table-summary-background-hover: rgba(255, 128, 0, 0.2);
  --bg: #cbe2d5;
  --blockquote-background-color: #f1f5ff;
  --blockquote-border-color: #cbe2d5;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #697580;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #f8fbff 65%, transparent) linear-gradient(#f8fbff, color-mix(in srgb, #f8fbff 65%, transparent));
  --bodyFont: var(--font-text, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #cbe2d5;
  --box-border-m: 3px solid #cbe2d5;
  --box-border-s: 1px solid #cbe2d5;
  --bttn: #0e934c;
  --bullet: "\\e802";
  --bullet-font: "its";
  --button-background: #0e934c;
  --button-background-hover: #91c1ad;
  --button-border: #0e934c;
  --button-border-radius: 0;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #f8fbff;
  --canvas-card-label-color: #4e5b6f;
  --canvas-color: 166, 180, 204;
  --canvas-color-opacity: 0.07;
  --canvas-controls-radius: 0;
  --canvas-node-padding: 0 7px;
  --caret-color: #697580;
  --chbx-B: 182, 118, 255;
  --chbx-C: 214, 108, 108;
  --chbx-I: 82, 139, 212;
  --chbx-N: 161, 106, 73;
  --chbx-P: 79, 165, 79;
  --chbx-R: 159, 186, 223;
  --chbx-a: 248, 114, 181;
  --chbx-b: 251, 146, 76;
  --chbx-c: 149, 217, 238;
  --chbx-d: 203, 212, 235;
  --chbx-h: 168, 177, 189;
  --chbx-i: 219, 1, 1;
  --chbx-id: 202, 199, 0;
  --chbx-q: 253, 175, 0;
  --chbx-r: 249, 190, 123;
  --checkbox-border-color: #79c78e;
  --checkbox-border-color-hover: #5a8d71;
  --checkbox-color: #79c78e;
  --checkbox-color-hover: #5a8d71;
  --checkbox-marker-color: #f8fbff;
  --checkbox-radius: 0;
  --checklist-done-color: #91c1ad;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #f1f5ff;
  --code-bg: #f1f5ff;
  --code-border-color: #ccd6eb;
  --code-bracket-background: rgba(255, 128, 0, 0.2);
  --code-comment: #4e5b6f;
  --code-normal: #35ad76;
  --code-punctuation: #52ad67;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #cbe2d5;
  --code-size: .90em;
  --code-text: #35ad76;
  --codeFont: var(--font-monospace, "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter);
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #91c1ad;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-1, 49.49%, 52.675%);
  --color-accent-2: hsl(-3, 49.98%, 56.35%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
  --dark: var(--text-normal, #697580);
  --dark-accent: #5a8d71;
  --dark-sidebar: #f1f5ff;
  --darkgray: var(--text-normal, #697580);
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(121, 199, 142, 0.1);
  --dataview-th-background: #dfefe6;
  --dataview-th-border-bottom: 2px solid #0e934c;
  --dataview-th-color: #0e934c;
  --dataview-th-count-color: #0e934c;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #1b2c25;
  --divider-color: #dfefe6;
  --divider-color-hover: #79c78e;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #5a8d71;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #d0ddef62;
  --dropdown-background: #dfefe6;
  --dropdown-background-hover: #91c1ad;
  --embed-bg: #f1f5ff;
  --embed-block-shadow-hover: 2px 2px 0 #cbe2d5;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #cbe2d5;
  --embed-border-color: transparent;
  --embed-border-color-hover: #cbe2d5;
  --embed-border-left: 2px solid #0e934c;
  --embed-border-left-color: #0e934c;
  --embed-border-left-color-hover: #0e934c;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #cbe2d5;
  --embed-border-start: 2px solid #5a8d71;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #cbe2d5;
  --embed-border-type: solid;
  --embed-h: #c93c3c;
  --embed-header-size: 18px;
  --embed-padding: 0 10px 0 24px;
  --embed-thickness: 2px;
  --embed-title-align: center;
  --embed-title-padding: 5px 24px;
  --embed-title-white-space: wrap;
  --explorer-item-padding: 2px 8px;
  --explorer-padding: 4px 4px 4px 3px;
  --fa5: "Font Awesome 5 Free Solid";
  --fa6: "Font Awesome 6 Free Solid";
  --failure-bg: #772d2d;
  --faint-text: #4e5b6f;
  --fg: #029f08;
  --file-font: "its";
  --file-header-background: #f8fbff;
  --file-header-background-focused: #f8fbff;
  --file-header-breadcrumb-color: #91c1ad;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #91c1ad;
  --file-header-color-active: #697580;
  --file-header-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #5a8d71;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #dfefe6;
  --file-icon: "\\e800";
  --file-icon-color: #91c1ad;
  --file-icon-margin: 6px;
  --file-text-color: #697580;
  --flair-background: #dfefe6;
  --flair-color: #697580;
  --folder: #64c9a3;
  --folder-font: "its";
  --folder-icon: "\\e801";
  --folder-icon-color: #64c9a3;
  --folder-icon-open-color: #cca04c;
  --folder-open: #cca04c;
  --folder-open-text-color: #697580;
  --folder-text-color: #697580;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-frontmatter: .95em;
  --font-interface: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ligatures: none;
  --font-mermaid: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-small: .95em;
  --font-smaller: .90em;
  --font-smallest: .85em;
  --font-text: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ui-small: 14px;
  --font-ui-smaller: 13.5px;
  --footnote: #8996a0;
  --footnote-divider-color: #ccd6eb;
  --footnote-id-color: #52ad67;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #d0ddef62;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #727e93;
  --graph-arrow: #52ad67;
  --graph-background: #f8fbff;
  --graph-bg: #f8fbff;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #2e5db2;
  --graph-focused: #35be89;
  --graph-img: #cca04c;
  --graph-line: #e4e7f8;
  --graph-line-hover: #79c78e;
  --graph-lines: #e4e7f8;
  --graph-node: #0e934c;
  --graph-node-attachment: #cca04c;
  --graph-node-focused: #35be89;
  --graph-node-hover-fill: #2e5db2;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #000000;
  --graph-node-unresolved: #727e93;
  --graph-tag: #000000;
  --graph-text: #697580;
  --gray: var(--text-muted, #52ad67);
  --h1-background: transparent;
  --h1-border-color: #79c78e;
  --h1-border-left-color: #ccd6eb;
  --h1-border-line-color: #ccd6eb;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #ccd6eb;
  --h1-border-width: 0;
  --h1-color: #0e934c;
  --h1-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #cca04c;
  --h2-border-left-color: #ccd6eb;
  --h2-border-line-color: #ccd6eb;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #ccd6eb;
  --h2-border-width: 0;
  --h2-color: sandybrown;
  --h2-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #c93c3c;
  --h3-border-left-color: #ccd6eb;
  --h3-border-line-color: #ccd6eb;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #ccd6eb;
  --h3-border-width: 0;
  --h3-color: #c93c3c;
  --h3-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #0e934c;
  --h4-border-left-color: #ccd6eb;
  --h4-border-line-color: #ccd6eb;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #ccd6eb;
  --h4-border-width: 0;
  --h4-color: #0e934c;
  --h4-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #35ad76;
  --h5-border-left-color: #ccd6eb;
  --h5-border-line-color: #ccd6eb;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #ccd6eb;
  --h5-border-width: 0;
  --h5-color: #0e934c;
  --h5-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #91c1ad;
  --h6-border-left-color: #ccd6eb;
  --h6-border-line-color: #ccd6eb;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: #ccd6eb;
  --h6-border-width: 0;
  --h6-color: #0e934c;
  --h6-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #0e934c;
  --he-text-on-accent-inactive: #697580;
  --he-title-bar-active-action: #ac7c10;
  --he-title-bar-active-bg: #f1f5ff;
  --he-title-bar-active-fg: #697580;
  --he-title-bar-active-pinned-bg: #f8fbff;
  --he-title-bar-inactive-action: #52ad67;
  --he-title-bar-inactive-bg: #f8fbff;
  --he-title-bar-inactive-fg: #91c1ad;
  --he-title-bar-inactive-pinned-bg: #f8fbff;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #ccd6eb;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 700;
  --headerFont: var(--font-text, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --headers: #0e934c;
  --heading-formatting: #91c1ad;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(60, 168, 122, 0.4);
  --hr: #d6deea;
  --hr-alignment: -50%, -50%;
  --hr-color: #d6deea;
  --hr-icon-background: #f8fbff;
  --hr-icon-color: #0e934c;
  --hr-icon-font: "Material Icons Sharp";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "\\e88c";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(66, 157, 104, 0.2);
  --hvr-active: rgba(255, 128, 0, 0.2);
  --hvr2: rgba(60, 168, 122, 0.4);
  --i-at: #48804e;
  --icon-btn-radius: 0;
  --icon-color: #52ad67;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #697580;
  --icon-color-hover: #697580;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --icons: #d04e4e;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #cbe2d5;
  --illusion-h1-background: #79c78e;
  --illusion-h2-background: #cca04c;
  --illusion-h3-background: #c93c3c;
  --illusion-h4-background: #0e934c;
  --illusion-h5-background: #35ad76;
  --illusion-h6-background: #91c1ad;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: #d0ddef62;
  --image-border-color: #ccd6eb;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #91c1ad;
  --indentation-guide-color: #91c1ad;
  --indentation-guide-color-active: #79c78e;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #91c1ad;
  --initiative-xp: sandybrown;
  --inline-title-color: #0e934c;
  --inline-title-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: #d0ddef62;
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #cbe2d5;
  --input-shadow-hover: 3px 3px 0 #cbe2d5;
  --interactive-accent: #5a8d71;
  --interactive-accent-hover: #91c1ad;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #91c1ad;
  --interactive-normal: #dfefe6;
  --its: "its";
  --kanban-button-background: #f1f5ff;
  --kanban-button-shadow: 2px 2px 0 #cbe2d5;
  --kanban-card-border: 2px solid #cbe2d5;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #f8fbff;
  --kanban-card-text-color: #697580;
  --kanban-card-title-background: #f8fbff;
  --kanban-card-title-border: 0 1px 0 #cbe2d5;
  --kanban-lane-background: #f1f5ff;
  --kanban-lane-border: 3px solid #cbe2d5;
  --kanban-lane-box-shadow: 2px 2px 0 #cbe2d5;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #35be89;
  --kanban-tag-background: #56c681;
  --latex-color: #ac7c10;
  --latex-format-color: #91c1ad;
  --latex-syntax-color: #52ad67;
  --light: var(--background-primary, #f8fbff);
  --lightgray: var(--background-secondary, #f8fbff);
  --line-height-tight: 1.3em;
  --lines: #91c1ad;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #35be89;
  --link-color-hover: #ac7c10;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #35be89;
  --link-external-color-hover: #cca04c;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #91c1ad;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #ccd6eb;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #91c1ad;
  --list-color-2: #91c1ad;
  --list-color-3: #91c1ad;
  --list-color-4: #91c1ad;
  --list-color-5: #91c1ad;
  --list-color-6: #91c1ad;
  --list-indent: 25px;
  --list-marker-color: #79c78e;
  --list-marker-color-collapsed: #91c1ad;
  --list-marker-color-hover: #52ad67;
  --list-marker-color-other: #cca04c;
  --list-marker-min-width: 0;
  --list-numbered-color: #ac7c10;
  --list-spacing: 1px;
  --lite-accent: #ac7c10;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #f8fbff;
  --menu-border-color: #cbe2d5;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #cbe2d5;
  --message-border-color: #cbe2d5;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #cbe2d5;
  --message-color: #e5ebee;
  --metadata-border-color: #ccd6eb;
  --metadata-button-text-color: #91c1ad;
  --metadata-divider-color: #ccd6eb;
  --metadata-icon-color: #52ad67;
  --metadata-input-background-active: #d0ddef62;
  --metadata-input-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #697580;
  --metadata-label-background-active: #d0ddef62;
  --metadata-label-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #52ad67;
  --metadata-label-text-color-hover: #52ad67;
  --metadata-property-background-active: rgba(255, 128, 0, 0.2);
  --metadata-property-box-shadow-focus: 0 0 0 2px #79c78e;
  --metadata-property-box-shadow-hover: 0 0 0 1px #cbe2d5;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #e5ebee;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #52ad67;
  --metadata-title-icon: "\\e805";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #f8fbff;
  --modal-border-color: #cbe2d5;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: #d0ddef62;
  --modal-radius: 0;
  --modal-sidebar-background: #f1f5ff;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #697580;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #52ad67;
  --nav-heading-color-hover: #697580;
  --nav-indentation-guide-color: #91c1ad;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #5a8d71;
  --nav-item-background-border-color-hover: #5a8d71;
  --nav-item-background-hover: #5a8d71;
  --nav-item-background-selected: rgba(66, 157, 104, 0.2);
  --nav-item-border-color: #ac7c10;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #697580;
  --nav-item-color-active: #e5ebee;
  --nav-item-color-highlighted: #e5ebee;
  --nav-item-color-hover: #e5ebee;
  --nav-item-color-selected: #697580;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 0;
  --nav-item-size: 14px;
  --nav-item-weight: 500;
  --nav-item-weight-active: 700;
  --nav-item-weight-hover: 700;
  --nav-item-white-space: wrap;
  --nav-tag-color: #4e5b6f;
  --nav-tag-color-active: #52ad67;
  --nav-tag-color-hover: #52ad67;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #f8fbff;
  --note-rgb: 248, 251, 255;
  --note-title-border-color: #0e934c;
  --outer-bar: #dfefe6;
  --outline: #cbe2d5;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #f8fbff;
  --pdf-background: #f8fbff;
  --pdf-page-background: #f8fbff;
  --pdf-sidebar-background: #f8fbff;
  --pill-border-color: #ccd6eb;
  --pill-border-color-hover: #cbe2d5;
  --pill-color: #52ad67;
  --pill-color-hover: #697580;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #35be89;
  --pill-radius: 0;
  --popover-background: #f8fbff;
  --popover-border: 3px solid #cbe2d5;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #79c78e;
  --progress-bg: #cbe2d5;
  --prompt-background: #f8fbff;
  --prompt-border-color: #cbe2d5;
  --prompt-border-width: 3px;
  --r-heading-color: #0e934c;
  --r-heading-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #ac7c10;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-s: 0;
  --radius-xl: 0;
  --rainbow-1: #dd3c3c;
  --rainbow-2: #f1ab27;
  --rainbow-3: #118811;
  --rainbow-4: #3333cc;
  --rainbow-5: #a824a8;
  --rainbow-6: #e83b94;
  --raised-background: color-mix(in srgb, #f8fbff 65%, transparent) linear-gradient(#f8fbff, color-mix(in srgb, #f8fbff 65%, transparent));
  --ribbon-background: #dfefe6;
  --ribbon-background-collapsed: #f8fbff;
  --ribbon-border-color: #dfefe6;
  --ribbon-border-width: 0;
  --ribbon-icon-gap: 15px;
  --ribbon-icon-size: 18px;
  --ribbon-icon-stroke: 1.75px;
  --ribbon-width: 40px;
  --rmx: "remixicon";
  --root-list-bullet-spacing: 0;
  --root-list-spacing: 10px;
  --rpg: "rpg-awesome";
  --scroll-size: 7px;
  --scrollbar-active-thumb-bg: #ac7c10;
  --scrollbar-bg: #cbe2d5;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #56c681;
  --scrollbar-track-bg: #f8fbff;
  --search-border: 2px solid #cbe2d5;
  --search-box-shadow: 2px 2px 0 #cbe2d5;
  --search-clear-button-color: #52ad67;
  --search-icon-color: #52ad67;
  --search-result-background: #f8fbff;
  --secondary: var(--text-accent, #35be89);
  --setting-group-heading-color: #697580;
  --setting-item-alt-background-hover: #d0ddef62;
  --setting-item-background-hover: rgba(66, 157, 104, 0.2);
  --setting-item-border-color: #ccd6eb;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #0e934c;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #d0ddef62;
  --setting-items-background: transparent;
  --setting-items-border-color: #ccd6eb;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #cbe2d5;
  --shadow-m: 3px 3px 0 #cbe2d5;
  --shadow-ml: 4px 4px 0 #cbe2d5;
  --shadow-s: 2px 2px 0 #cbe2d5;
  --shiki-active-tab-border-color: #52ad67;
  --shiki-code-background: #f1f5ff;
  --shiki-code-block-border-radius: 0;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-normal: #52ad67;
  --shiki-code-punctuation: #52ad67;
  --shiki-gutter-border-color: #ccd6eb;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #52ad67;
  --shiki-highlight-neutral: #52ad67;
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #5a8d71;
  --side-bar: #f8fbff;
  --side-bar-bg: #dfefe6;
  --sidebar-icon-color: #697580;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #0e934c;
  --sidebar-tab-background-color-hover: #79c78e;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #0e934c;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #f8fbff;
  --slider-thumb-border-color: #cbe2d5;
  --slider-thumb-radius: 0;
  --slider-track-background: #ccd6eb;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #52ad67;
  --statblock-alt: #d0ddef62;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #f8fbff;
  --statblock-bar-border-color: #79c78e;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #79c78e;
  --statblock-border-color: #91c1ad;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #cbe2d5;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #697580;
  --statblock-heading-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --statblock-heading-font-color: #0e934c;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #d6deea;
  --statblock-primary-color: #697580;
  --statblock-property-font-color: #697580;
  --statblock-property-name-font-color: #0e934c;
  --statblock-rule-color: #79c78e;
  --statblock-section-heading-border-color: #ccd6eb;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --statblock-section-heading-font-color: #8996a0;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #dfefe6;
  --status-bar-border-color: #79c78e;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #52ad67;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #5a8d71;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --success-bg: #599049;
  --suggestion-background: #f8fbff;
  --tab-background: #dfefe6;
  --tab-background-active: #f8fbff;
  --tab-container-background: #dfefe6;
  --tab-curve: 0;
  --tab-divider-color: #d6deea;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #79c78e;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #d0ddef62;
  --tab-stacked-shadow-color: #d0ddef62;
  --tab-switcher-background: #f8fbff;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8fbff, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #cbe2d5;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #cbe2d5;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #ac7c10, 5px 5px 0 #cbe2d5;
  --tab-text-color: #91c1ad;
  --tab-text-color-active: #697580;
  --tab-text-color-focused: #91c1ad;
  --tab-text-color-focused-active: #697580;
  --tab-text-color-focused-active-current: #697580;
  --tab-text-color-focused-highlighted: #35be89;
  --tab-text-color-hover: #697580;
  --tab-top-outline-width: 0;
  --table: #ccd6eb;
  --table-add-button-background: #0e934c;
  --table-add-button-border-color: #f8fbff;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #f8fbff;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #d0ddef62;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #5a8d71;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #549f54;
  --table-header-background-hover: #79c78e;
  --table-header-border-color: #f8fbff;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #ac7c10;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #d0ddef62;
  --table-row-alt-background-hover: rgba(60, 168, 122, 0.4);
  --table-row-background-hover: rgba(60, 168, 122, 0.4);
  --table-row-edit-font-size: .95em;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-border-color: #5a8d71;
  --table-selection-border-radius: 0;
  --tag: #56c681;
  --tag-background: #56c681;
  --tag-background-color: #56c681;
  --tag-background-hover: #79c78e;
  --tag-border-color: #56c681;
  --tag-border-color-hover: #79c78e;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #ac7c10;
  --tall: 700px;
  --td: #d0ddef62;
  --tertiary: var(--text-accent-hover, #cca04c);
  --text: #697580;
  --text-accent: #35be89;
  --text-accent-hover: #cca04c;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(66, 157, 104, 0.2);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.2);
  --text-muted: #52ad67;
  --text-normal: #697580;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(60, 168, 122, 0.4);
  --textHighlight: var(--text-highlight-bg, rgba(66, 157, 104, 0.2));
  --th: #549f54;
  --th-text: #e5ebee;
  --theme-rainbow-1: #79c78e;
  --theme-rainbow-2: #cca04c;
  --theme-rainbow-3: #c93c3c;
  --theme-rainbow-4: #0e934c;
  --theme-rainbow-5: #35ad76;
  --theme-rainbow-6: #91c1ad;
  --tiny: 100px;
  --titleFont: var(--font-text, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --titlebar-background: #f8fbff;
  --titlebar-background-focused: #dfefe6;
  --titlebar-border-color: #ccd6eb;
  --titlebar-text-color: #697580;
  --titlebar-text-color-focused: #697580;
  --toggle-border-width: 1px;
  --toggle-radius: 0;
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: 0;
  --toggle-width: 20px;
  --tooltip-color: #e5ebee;
  --vault-font: "Cinzel Decorative", "Amarante", "Oleo Script", "Lobster 1.3", Inter;
  --vault-name-color: #0e934c;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #697580;
  --vault-profile-color-hover: #697580;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(223, 239, 230));
  color: var(--text-dl, rgb(105, 117, 128));
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(248, 251, 255));
  color: var(--file-header-color-active, rgb(105, 117, 128));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(248, 251, 255));
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(223, 239, 230);
  border-right-width: 2px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--td, rgb(223, 239, 230));
  border-left-color: rgb(223, 239, 230);
  color: var(--text-on-accent, rgb(105, 117, 128));
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered > h1 {
  --font-weight: 700;
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(14, 147, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(14, 147, 76);
  border-left-width: 0px;
  border-right-color: rgb(14, 147, 76);
  border-right-width: 0px;
  border-top-color: rgb(14, 147, 76);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--header-arrow-icon-color, rgb(14, 147, 76));
  content: "";
  font-family: var(--h1-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
  font-size: var(--h1-size, 34px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.51px);
  line-height: var(--h1-line-height, 40.8px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(105, 117, 128));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: calc(var(--font-weight) + var(--bold-modifier), 900);
  outline: rgb(105, 117, 128) none 0px;
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(105, 117, 128));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(105, 117, 128));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(105, 117, 128));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: calc(var(--font-weight) + var(--bold-modifier), 900);
  outline: rgb(105, 117, 128) none 0px;
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(66, 157, 104, 0.2));
  color: var(--text-normal, rgb(105, 117, 128));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body del {
  color: var(--strikethrough-color, rgb(105, 117, 128));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: line-through 1px;
  text-decoration-color: var(--strikethrough-line-color, rgb(105, 117, 128));
  text-decoration-thickness: var(--strikethrough-line-thickness, 1px);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(105, 117, 128));
  font-size: 15px;
  font-weight: 600;
}

html[saved-theme="light"] body h2 {
  --font-weight: 700;
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(244, 164, 96);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(244, 164, 96);
  border-left-width: 0px;
  border-right-color: rgb(244, 164, 96);
  border-right-width: 0px;
  border-top-color: rgb(244, 164, 96);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(244, 164, 96));
  content: "";
  font-family: var(--h2-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
  font-size: var(--h2-size, 30px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h2-letter-spacing, -0.33px);
  line-height: var(--h2-line-height, 36px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h3 {
  --font-weight: 700;
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(201, 60, 60);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(201, 60, 60);
  border-left-width: 0px;
  border-right-color: rgb(201, 60, 60);
  border-right-width: 0px;
  border-top-color: rgb(201, 60, 60);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(201, 60, 60));
  content: "";
  font-family: var(--h3-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
  font-size: var(--h3-size, 26px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h3-letter-spacing, -0.208px);
  line-height: var(--h3-line-height, 33.8px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h4 {
  --font-weight: 700;
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(14, 147, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(14, 147, 76);
  border-left-width: 0px;
  border-right-color: rgb(14, 147, 76);
  border-right-width: 0px;
  border-top-color: rgb(14, 147, 76);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(14, 147, 76));
  content: "";
  font-family: var(--h4-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
  font-size: var(--h4-size, 22px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h4-letter-spacing, -0.11px);
  line-height: var(--h4-line-height, 30.8px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h5 {
  --font-weight: 700;
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(14, 147, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(14, 147, 76);
  border-left-width: 0px;
  border-right-color: rgb(14, 147, 76);
  border-right-width: 0px;
  border-top-color: rgb(14, 147, 76);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(14, 147, 76));
  content: "";
  font-family: var(--h5-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
  font-size: var(--h5-size, 20px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h5-letter-spacing, -0.04px);
  line-height: var(--h5-line-height, 30px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h6 {
  --font-weight: 700;
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(14, 147, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(14, 147, 76);
  border-left-width: 0px;
  border-right-color: rgb(14, 147, 76);
  border-right-width: 0px;
  border-top-color: rgb(14, 147, 76);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(14, 147, 76));
  content: "";
  font-family: var(--h6-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
  font-size: var(--h6-size, 18px);
  font-weight: var(--font-weight, 700);
  line-height: var(--h6-line-height, 27px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(121, 199, 142);
  border-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgba(0, 0, 0, 0));
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(82, 173, 103));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(82, 173, 103) none 0px;
  text-decoration-color: rgb(82, 173, 103);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  --resizer-size: 20px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --zoom-multiplier: 1;
  background-color: var(--link-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(53, 190, 137);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(53, 190, 137);
  border-left-width: 0px;
  border-right-color: rgb(53, 190, 137);
  border-right-width: 0px;
  border-top-color: rgb(53, 190, 137);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--link-external-color, rgb(53, 190, 137));
  content: "\\e809";
  font-family: var(--link-external-font, its);
  font-weight: var(--link-weight, 100);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(53, 190, 137) none 0px;
  padding-bottom: 0px;
  padding-left: 2px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration-color: rgb(53, 190, 137);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  background-color: var(--link-background, rgba(0, 0, 0, 0));
  color: var(--link-color, rgb(53, 190, 137));
  font-family: var(--link-font, "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  outline: rgb(53, 190, 137) none 0px;
  text-decoration-color: rgb(53, 190, 137);
}

html[saved-theme="light"] body a.internal-link.broken {
  background-color: var(--link-background, rgba(0, 0, 0, 0));
  color: var(--link-unresolved-color, rgb(145, 193, 173));
  font-family: var(--link-font, "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  outline: rgb(145, 193, 173) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(186, 64, 64, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body dt {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body ol > li {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body ul > li {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(78, 91, 111));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(241, 245, 255));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body table {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgba(208, 221, 239, 0.384));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(248, 251, 255);
  border-left-color: rgb(248, 251, 255);
  border-right-color: rgb(248, 251, 255);
  border-top-color: rgb(248, 251, 255);
  color: var(--table-text-color, rgb(105, 117, 128));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(248, 251, 255);
  border-left-color: rgb(248, 251, 255);
  border-right-color: rgb(248, 251, 255);
  border-top-color: rgb(248, 251, 255);
  border-top-left-radius: var(--radius-s, 0px);
  color: var(--table-header-color, rgb(229, 235, 238));
  font-weight: var(--table-header-weight, 700);
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgb(84, 159, 84));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(241, 245, 255));
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--code-normal, rgb(53, 173, 118));
  font-family: var(--font-monospace, "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter);
  padding-bottom: 2.16px;
  padding-left: 4.32px;
  padding-right: 4.32px;
  padding-top: 2.16px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(241, 245, 255));
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body figcaption {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(14, 147, 76);
  border-left-color: rgb(14, 147, 76);
  border-right-color: rgb(14, 147, 76);
  border-top-color: rgb(14, 147, 76);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--outer-bar, rgb(223, 239, 230));
  border-bottom-color: rgb(82, 173, 103);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(82, 173, 103);
  border-right-color: rgb(82, 173, 103);
  border-top-color: rgb(82, 173, 103);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: var(--callout-cards-notion-padding, 8px);
  padding-right: var(--callout-cards-notion-padding, 8px);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(105, 117, 128);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(90, 141, 113);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
  padding-left: var(--callout-cards-notion-padding, 0px);
  padding-right: var(--callout-cards-notion-padding, 0px);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-style: solid;
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(121, 199, 142);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(121, 199, 142);
  border-right-color: rgb(121, 199, 142);
  border-top-color: rgb(121, 199, 142);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-left: -22.4px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(182, 118, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(248, 114, 181);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(78, 91, 111);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(251, 146, 76);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(79, 165, 79);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(182, 118, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(214, 108, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(168, 177, 189);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(82, 139, 212);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(168, 177, 189);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(248, 114, 181);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(161, 106, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(161, 106, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(186, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(79, 165, 79);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(159, 186, 223);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(159, 186, 223);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(159, 186, 223);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(79, 165, 79);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(78, 91, 111);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(251, 146, 76);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(249, 190, 123);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(203, 212, 235);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(159, 186, 223);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(145, 193, 173);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(214, 108, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(219, 1, 1);
  text-decoration-color: rgb(219, 1, 1);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(82, 173, 103);
  text-decoration-color: rgb(82, 173, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(253, 175, 0);
  text-decoration-color: rgb(253, 175, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(251, 146, 76);
  text-decoration-color: rgb(251, 146, 76);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(149, 217, 238);
  text-decoration-color: rgb(149, 217, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(161, 106, 73);
  text-decoration-color: rgb(161, 106, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(202, 199, 0);
  text-decoration-color: rgb(202, 199, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(203, 212, 235);
  content: "\\ec02";
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(219, 1, 1);
  content: "\\ec08";
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(253, 175, 0);
  content: "\\ec05";
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  color: rgb(251, 146, 76);
  content: "\\e900";
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(121, 199, 142);
  content: "\\ec17";
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  color: rgb(182, 118, 255);
  content: "\\ec32";
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  color: rgb(248, 114, 181);
  content: "\\ec06";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(78, 91, 111);
  content: "\\ec03";
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(105, 117, 128);
  content: "\\ec03";
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  color: rgb(214, 108, 108);
  content: "\\ec33";
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  color: rgb(79, 165, 79);
  content: "\\ec20";
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(251, 146, 76);
  content: "\\ec15";
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgb(182, 118, 255);
  content: "\\ec10";
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(149, 217, 238);
  content: "\\ec29";
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgb(214, 108, 108);
  content: "\\ec12";
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(82, 139, 212);
  content: "\\ec25";
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(168, 177, 189);
  content: "\\ec04";
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  color: rgb(82, 139, 212);
  content: "\\ec18";
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(161, 106, 73);
  content: "\\e81e";
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  color: rgb(168, 177, 189);
  content: "\\ec28";
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  color: rgb(248, 114, 181);
  content: "\\ec30";
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(202, 199, 0);
  content: "\\ec09";
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(82, 139, 212);
  content: "\\ec16";
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgb(161, 106, 73);
  content: "\\ec21";
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgb(161, 106, 73);
  content: "\\ec14";
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  color: rgb(251, 146, 76);
  content: "\\ec24";
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  color: rgb(186, 64, 64);
  content: "\\e805";
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(159, 186, 223);
  content: "\\ec19";
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(79, 165, 79);
  content: "\\ec11";
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  color: rgb(159, 186, 223);
  content: "\\ec13";
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(249, 190, 123);
  content: "\\ec22";
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  color: rgb(159, 186, 223);
  content: "\\ec07";
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(203, 212, 235);
  content: "\\ec31";
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  color: rgb(159, 186, 223);
  content: "\\ec27";
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  color: rgb(159, 186, 223);
  content: "\\ec26";
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgb(79, 165, 79);
  content: "\\e813";
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  color: rgb(53, 190, 137);
  content: "\\ec01";
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(var(--callout-color), rgb(105, 117, 128));
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(105, 117, 128));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(105, 117, 128);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(var(--callout-color), rgb(105, 117, 128));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(105, 117, 128));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(105, 117, 128);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="aside"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: "";
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-margin: 0 -1.2em 0 5px;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb("") 25%, #f8fbff 50%);
  background-color: var(--aside-bg, var(--background-secondary));
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(105, 117, 128);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(105, 117, 128);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0.3em 0.3em 0 var(--accent, var(--background-modifier-box-shadow)), 0 0 0 1px var(--accent, var(--background-modifier-box-shadow));
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="blank"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-border-width: 0;
  --callout-brown: 161, 106, 73;
  --callout-color: transparent;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(transparent) 25%, #f8fbff 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(105, 117, 128);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(105, 117, 128);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(var(--callout-color), rgb(105, 117, 128));
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(105, 117, 128));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(105, 117, 128);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="caption"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: 8, 109, 221;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, #f8fbff 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(105, 117, 128);
  border-left-width: 0px;
  border-right-color: rgb(105, 117, 128);
  border-right-width: 0px;
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="captions"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: 8, 109, 221;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, #f8fbff 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="cards"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-cards-columns: 3;
  --callout-cards-gap: 5px;
  --callout-color: transparent;
  --callout-color-opacity: 20%;
  --callout-content-padding: 0px;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(transparent) 25%, #f8fbff 50%);
  background-color: var(--outer-bar, var(--background-secondary));
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(105, 117, 128);
  border-left-width: 0px;
  border-right-color: rgb(105, 117, 128);
  border-right-width: 0px;
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="checks"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --list-indent: 0;
  --root-list-spacing: 0;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(105, 117, 128);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(105, 117, 128);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="column"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: #697580;
  --callout-color-opacity: 20%;
  --callout-column-gap: 10px;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --columns: 2;
  --table-border-color: color-mix(in srgb, rgb(#697580) 25%, #f8fbff 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(105, 117, 128);
  border-left-width: 0px;
  border-right-color: rgb(105, 117, 128);
  border-right-width: 0px;
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="columns"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: #697580;
  --callout-color-opacity: 20%;
  --callout-column-gap: 10px;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --columns: 2;
  --table-border-color: color-mix(in srgb, rgb(#697580) 25%, #f8fbff 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(105, 117, 128);
  border-left-width: 0px;
  border-right-color: rgb(105, 117, 128);
  border-right-width: 0px;
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(var(--callout-color), rgb(105, 117, 128));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(105, 117, 128));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(105, 117, 128);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(var(--callout-color), rgb(105, 117, 128));
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(105, 117, 128));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(105, 117, 128);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(var(--callout-color), rgb(105, 117, 128));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(105, 117, 128));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(105, 117, 128);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="grid"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: 8, 109, 221;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, #f8fbff 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(105, 117, 128);
  border-left-width: 0px;
  border-right-color: rgb(105, 117, 128);
  border-right-width: 0px;
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(var(--callout-color), rgb(105, 117, 128));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(105, 117, 128));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(105, 117, 128);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="infobox"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: #f8fbff;
  --callout-color-opacity: 20%;
  --callout-content-padding: 5px;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-margin: 0 0 0 5px;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --h1-border-line-height: 0;
  --h2-border-line-height: 0;
  --h3-border-line-height: 0;
  --h4-border-line-height: 0;
  --h5-border-line-height: 0;
  --h6-border-line-height: 0;
  --table-border-color: color-mix(in srgb, rgb(#f8fbff) 25%, #f8fbff 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(105, 117, 128);
  border-left-width: 0px;
  border-right-color: rgb(105, 117, 128);
  border-right-width: 0px;
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="kanban"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --item-outline: 0 0 0 1px #cbe2d5;
  --lane-width: 250px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(105, 117, 128);
  border-left-width: 0px;
  border-right-color: rgb(105, 117, 128);
  border-right-width: 0px;
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="kith"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: 115, 167, 202;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(115, 167, 202) 25%, #f8fbff 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(115, 167, 202, 0.7);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(115, 167, 202, 0.7);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(115, 167, 202, 0.7);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(115, 167, 202, 0.7);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="metadata"] {
  --bold-color: rgb(82, 139, 212);
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-border-width: 2px;
  --callout-brown: 161, 106, 73;
  --callout-color: 82, 139, 212;
  --callout-color-opacity: 20%;
  --callout-content-padding: 0px 10px 10px;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-shadow: 0px 0px 0px 1px #cbe2d5;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-title-padding: 5px;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(82, 139, 212) 25%, #f8fbff 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(82, 139, 212, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(82, 139, 212, 0.25);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(82, 139, 212, 0.25);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(82, 139, 212, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(var(--callout-color), rgb(105, 117, 128));
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(105, 117, 128));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(105, 117, 128);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(var(--callout-color), rgb(105, 117, 128));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(105, 117, 128));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(105, 117, 128);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: hsl(0, 49%, 49%);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(105, 117, 128);
  border-left-width: 4px;
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(var(--callout-color), rgb(105, 117, 128));
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(105, 117, 128));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(105, 117, 128);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="quotes"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: 8, 109, 221;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, #f8fbff 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 5px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="recite"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: 193, 67, 67;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-margin: 10px;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 5px 10px 10px 10px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --table-border-color: color-mix(in srgb, rgb(193, 67, 67) 25%, #f8fbff 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(193, 67, 67, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 11px;
  border-left-color: rgba(193, 67, 67, 0.25);
  border-left-style: solid;
  border-left-width: 11px;
  border-right-color: rgba(193, 67, 67, 0.25);
  border-right-style: solid;
  border-right-width: 11px;
  border-top-color: rgba(193, 67, 67, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 11px;
  box-shadow: 0px 0px 10px var(--outline, var(--background-modifier-box-shadow));
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="statblocks"] {
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-border-color: #d6deea;
  --callout-brown: 161, 106, 73;
  --callout-color-opacity: 20%;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-margin: 10px auto;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 12px 15px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-left-color: rgb(105, 117, 128);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(105, 117, 128);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 5px;
  box-shadow: var(--shadow-l), 0 0 20px var(--outline, var(--hr-color));
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 138.688px;
  margin-right: 138.688px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(var(--callout-color), rgb(105, 117, 128));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(105, 117, 128));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(105, 117, 128);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="timeline"] {
  --c-timeline: calc(50% - 2px);
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-color: 8, 109, 221;
  --callout-color-opacity: 20%;
  --callout-content-background: rgb(8, 109, 221, 0.1);
  --callout-content-padding: 10px;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-margin: 0;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-title-padding: 10px;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --micro: 50px;
  --table-border-color: color-mix(in srgb, rgb(8, 109, 221) 25%, #f8fbff 50%);
  --timeline-border: rgb(8, 109, 221);
  --timeline-shadow: #cbe2d5;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(105, 117, 128);
  border-left-width: 0px;
  border-right-color: rgb(105, 117, 128);
  border-right-width: 0px;
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(var(--callout-color), rgb(105, 117, 128));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(105, 117, 128));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(105, 117, 128);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(var(--callout-color), rgb(105, 117, 128));
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(105, 117, 128));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(105, 117, 128);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(var(--callout-color), rgb(105, 117, 128));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(105, 117, 128));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(105, 117, 128);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="aside"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="blank"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="caption"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="captions"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="cards"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='9' x='3' y='3' rx='1'/%3E%3Crect width='7' height='5' x='14' y='3' rx='1'/%3E%3Crect width='7' height='9' x='14' y='12' rx='1'/%3E%3Crect width='7' height='5' x='3' y='16' rx='1'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="checks"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344'/%3E%3Cpath d='m9 11 3 3L22 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='9' x='3' y='3' rx='1'/%3E%3Crect width='7' height='5' x='14' y='3' rx='1'/%3E%3Crect width='7' height='9' x='14' y='12' rx='1'/%3E%3Crect width='7' height='5' x='3' y='16' rx='1'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="columns"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='9' x='3' y='3' rx='1'/%3E%3Crect width='7' height='5' x='14' y='3' rx='1'/%3E%3Crect width='7' height='9' x='14' y='12' rx='1'/%3E%3Crect width='7' height='5' x='3' y='16' rx='1'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="grid"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="infobox"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="kanban"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='9' x='3' y='3' rx='1'/%3E%3Crect width='7' height='5' x='14' y='3' rx='1'/%3E%3Crect width='7' height='9' x='14' y='12' rx='1'/%3E%3Crect width='7' height='5' x='3' y='16' rx='1'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="kith"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="metadata"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z'/%3E%3Cpath d='M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12'/%3E%3Cpath d='M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quotes"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="recite"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath stroke='none' fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455z'/%3E%3C/svg%3E'");
}

html[saved-theme="light"] body .callout[data-callout="statblocks"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='14.5 17.5 3 6 3 3 6 3 17.5 14.5'/%3E%3Cline x1='13' x2='19' y1='19' y2='13'/%3E%3Cline x1='16' x2='20' y1='16' y2='20'/%3E%3Cline x1='19' x2='21' y1='21' y2='19'/%3E%3Cpolyline points='14.5 6.5 18 3 21 3 21 6 17.5 9.5'/%3E%3Cline x1='5' x2='9' y1='14' y2='18'/%3E%3Cline x1='7' x2='4' y1='17' y2='20'/%3E%3Cline x1='3' x2='5' y1='19' y2='21'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="timeline"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 6v6'/%3E%3C/svg%3E");
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
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--text-normal, rgb(105, 117, 128));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(248, 251, 255));
  border-bottom-color: rgb(203, 226, 213);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(203, 226, 213);
  border-left-width: 3px;
  border-right-color: rgb(203, 226, 213);
  border-right-width: 3px;
  border-top-color: rgb(203, 226, 213);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: var(--shadow-l, rgb(203, 226, 213) 5px 5px 0px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 128, 0, 0.2));
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(203, 226, 213);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(203, 226, 213);
  border-left-width: 3px;
  border-right-color: rgb(203, 226, 213);
  border-right-width: 3px;
  border-top-color: rgb(203, 226, 213);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 251, 255);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(255, 128, 0, 0.2));
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 128, 0, 0.2));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgb(86, 198, 129));
  border-bottom-color: rgb(86, 198, 129);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(86, 198, 129);
  border-right-color: rgb(86, 198, 129);
  border-top-color: rgb(86, 198, 129);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="light"] body h1 {
  color: var(--header-arrow-icon-color, rgb(14, 147, 76));
  font-family: var(--h1-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(14, 147, 76));
  font-size: var(--inline-title-size, 34px);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(244, 164, 96));
  font-family: var(--h2-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(14, 147, 76));
  font-family: var(--inline-title-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(201, 60, 60));
  font-family: var(--h3-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(14, 147, 76));
  font-family: var(--h4-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(14, 147, 76));
  font-family: var(--h5-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(14, 147, 76));
  font-family: var(--h6-font, "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(223, 239, 230);
  border-left-color: rgb(223, 239, 230);
  border-right-color: rgb(223, 239, 230);
  border-right-width: 2px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 16px;
  padding-right: 16px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(145, 193, 173);
  border-left-width: 2px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--folder-open-text-color, rgb(105, 117, 128));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: var(--nav-item-weight, 700);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--folder-open-text-color, rgb(105, 117, 128));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: var(--nav-item-weight, 700);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 700);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(82, 173, 103);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(82, 173, 103);
  border-right-color: rgb(82, 173, 103);
  border-top-color: rgb(82, 173, 103);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(82, 173, 103));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(223, 239, 230));
  border-bottom-color: rgb(121, 199, 142);
  border-left-color: rgb(121, 199, 142);
  border-right-color: rgb(121, 199, 142);
  border-top-color: rgb(121, 199, 142);
  border-top-left-radius: 0px;
  color: var(--status-bar-text-color, rgb(82, 173, 103));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(82, 173, 103);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--file-text-color, rgb(105, 117, 128));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--file-text-color, rgb(105, 117, 128));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(82, 173, 103);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(82, 173, 103);
  border-right-color: rgb(82, 173, 103);
  border-top-color: rgb(82, 173, 103);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(82, 173, 103));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(82, 173, 103);
  stroke: rgb(82, 173, 103);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(145, 193, 173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(145, 193, 173);
  border-right-color: rgb(145, 193, 173);
  border-top-color: rgb(145, 193, 173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--file-header-breadcrumb-color, rgb(145, 193, 173));
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(78, 91, 111));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: var(--progress, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(105, 117, 128));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(248, 251, 255));
  border-color: rgb(203, 226, 213);
  box-shadow: var(--input-shadow, rgb(203, 226, 213) 2px 2px 0px 0px);
}`,
    bases: `html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgba(208, 221, 239, 0.384));
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(248, 251, 255);
  color: var(--table-header-color, rgb(229, 235, 238));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: var(--text-muted, rgb(82, 173, 103));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(82, 173, 103);
  border-left-color: rgb(82, 173, 103);
  border-right-color: rgb(82, 173, 103);
  border-top-color: rgb(82, 173, 103);
  color: rgb(82, 173, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(204, 214, 235);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(82, 173, 103);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(82, 173, 103);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgb(86, 198, 129));
  border-radius: 0px;
  color: var(--pill-color, rgb(229, 235, 238));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(82, 173, 103);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(248, 251, 255));
  color: var(--headers, rgb(105, 117, 128));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(248, 251, 255));
  border-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(223, 239, 230));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(105, 117, 128);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(223, 239, 230));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(105, 117, 128));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(82, 173, 103);
  border-left-color: rgb(82, 173, 103);
  border-right-color: rgb(82, 173, 103);
  border-top-color: rgb(82, 173, 103);
  color: var(--text-normal, rgb(82, 173, 103));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(241, 245, 255));
  border-bottom-color: rgb(53, 173, 118);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(53, 173, 118);
  border-right-color: rgb(53, 173, 118);
  border-top-color: rgb(53, 173, 118);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: var(--code-shadow, rgb(203, 226, 213) 0px 2px 0px 0px);
  color: var(--code-normal, rgb(53, 173, 118));
  font-family: var(--font-monospace, "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter);
  font-size: var(--code-size, 14.4px);
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

html[saved-theme="light"] body sub {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body summary {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body sup {
  color: rgb(105, 117, 128);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgb(86, 198, 129));
  border-bottom-color: rgb(86, 198, 129);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(86, 198, 129);
  border-right-color: rgb(86, 198, 129);
  border-top-color: rgb(86, 198, 129);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--tag-color, rgb(229, 235, 238));
}`,
  },
  extras: `/* extras from _index.scss */
/*Callout Positioning*/
body
  :not(.is-live-preview)
  .callout.callout.callout:is(
    [data-callout-metadata~="p+l"],
    [data-callout-metadata~="left"]
  ) {
  float: left;
  margin: unset;
  margin-right: 8px;
}

body
  :not(.is-live-preview)
  .callout.callout:is(
    [data-callout-metadata~="p+r"],
    [data-callout-metadata~="right"]
  ) {
  float: right;
  margin: unset;
  margin-left: 8px;
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="ctr"],
    [data-callout-metadata~="center"]
  ) {
  display: block;
  margin: auto;
  float: unset;
}

body
  .callout.callout.callout.callout:is(
    [data-callout-metadata~="no-t"],
    [data-callout-metadata~="no-title"]
  )
  > .callout-title {
  display: none;
}

body
  .callout.callout.callout.callout:is(
    [data-callout-metadata~="s-t"],
    [data-callout-metadata~="show-title"]
  )
  > .callout-title {
  display: flex;
}

body
  .callout.callout.callout.callout:is(
    [data-callout-metadata~="s-t"],
    [data-callout-metadata~="show-title"]
  )
  > .callout-content
  > p {
  margin-top: 0;
}

body
  .callout.callout.callout.callout:is(
    [data-callout-metadata~="subtitle"],
    [data-callout-metadata~="subt"]
  )
  .callout-title {
  align-content: center;
  align-items: center;
}

body
  .callout.callout.callout.callout:is(
    [data-callout-metadata~="subtitle"],
    [data-callout-metadata~="subt"]
  )
  .callout-title
  em {
  display: block;
  font-style: normal;
  font-size: var(--font-small);
  line-height: 12px;
  font-weight: normal;
}

body
  .callout.callout.callout.callout:is(
    [data-callout-metadata~="subtitle"],
    [data-callout-metadata~="subt"]
  )
  .callout-title
  em
  em {
  font-style: italic;
  display: inline-block;
}

body
  .callout.callout:is(
    [data-callout-metadata~="no-i"],
    [data-callout-metadata~="no-icon"]
  )
  > .callout-title
  > .callout-icon {
  width: 0;
  height: 0;
  --icon-size: 0;
}

body
  .callout:is(
    [data-callout-metadata~="n-th"],
    [data-callout-metadata~="no-table-header"]
  )
  > .callout-content
  table {
  margin-bottom: 5px;
}

body
  .callout:is(
    [data-callout-metadata~="n-th"],
    [data-callout-metadata~="no-table-header"]
  )
  > .callout-content
  table
  thead,
body
  .callout:is(
    [data-callout-metadata~="n-th"],
    [data-callout-metadata~="no-table-header"]
  )
  > .callout-content
  table
  th {
  display: none;
}

body
  .callout:is(
    [data-callout-metadata~="t-w"],
    [data-callout-metadata~="table-wide"]
  )
  table {
  width: 100%;
}

body
  .callout:is(
    [data-callout-metadata~="t-w"],
    [data-callout-metadata~="table-wide"]
  )
  table
  td {
  width: calc(var(--tbl-w) / 2);
}

body .callout[data-callout-metadata~="table-cell-top"] table td {
  vertical-align: top;
}

body
  .callout.callout:is(
    [data-callout-metadata~="t-nmg"],
    [data-callout-metadata~="table-no-margin"]
  )
  table {
  margin-block-start: 0;
  margin-block-end: 0;
}

body .callout[data-callout-metadata~="embed"] .callout-content,
body .callout[data-callout-metadata~="embed"] > .callout-content > p {
  margin: 0;
  padding: 0;
}

body .callout[data-callout-metadata~="collapse"] * {
  margin: 0 !important;
  padding: 0 !important;
  grid-gap: 0 !important;
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="nbrd"],
    [data-callout-metadata~="no-border"]
  ) {
  border: 0;
}

body .callout.callout.callout[data-callout-metadata~="clean"],
body
  .callout.callout.callout[data-callout-metadata~="clean"]
  > .callout-content {
  border: 0;
  box-shadow: none;
  --callout-color: transparent;
  --callout-padding: 0;
}

body .callout.callout.callout[data-callout-metadata~="clean"] .callout-content,
body
  .callout.callout.callout[data-callout-metadata~="clean"]
  > .callout-content
  .callout-content {
  padding: 0;
}

body .callout[data-callout-metadata~="clear"] {
  clear: both;
}

body .callout.callout.callout[data-callout-metadata~="block"] {
  display: block;
  float: unset;
}

body
  .callout.callout.callout[data-callout-metadata~="block"][data-callout-metadata~="right"] {
  margin-left: auto;
}

body
  .callout.callout.callout[data-callout-metadata~="block"][data-callout-metadata~="left"] {
  margin-right: auto;
}

body .callout #vid {
  text-align: left;
}

body
  .callout:is(
    [data-callout-metadata~="dim-hvr"],
    [data-callout-metadata~="dim-hover"],
    [data-callout-metadata~="dim-closed"].is-collapsed,
    [data-callout-metadata~="dim"]
  ):not(:hover) {
  filter: brightness(50%);
  transition: filter 300ms;
}

/*--Callout Coloring--*/
body .callout.callout.callout {
  --callout-color-opacity: 20%;
  --callout-blue: 82, 139, 212;
  --callout-green: 86, 179, 117;
  --callout-orange: 230, 129, 63;
  --callout-red: 193, 67, 67;
  --callout-purple: 153, 97, 218;
  --callout-gray: 166, 189, 197;
  --callout-yellow: 208, 181, 48;
  --callout-pink: 227, 107, 167;
  --callout-brown: 161, 106, 73;
  --callout-black: 0, 0, 0;
  --callout-white: 256, 256, 256;
  --callout-plain: transparent;
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-blue"],
    [data-callout-metadata~="c-blue"],
    [data-callout-metadata~="background-color-blue"],
    [data-callout-metadata~="bg-c-blue"]
  ) {
  --callout-title: var(--callout-blue);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-blue"],
    [data-callout-metadata~="c-blue"],
    [data-callout-metadata~="background-color-blue"],
    [data-callout-metadata~="bg-c-blue"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-blue"],
    [data-callout-metadata~="bg-blue"],
    [data-callout-metadata~="background-color-blue"],
    [data-callout-metadata~="bg-c-blue"]
  ) {
  --callout-background: rgba(var(--callout-blue), var(--callout-color-opacity));
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-blue"],
    [data-callout-metadata~="bg-c-blue"]
  ) {
  --callout-color: var(--callout-blue);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-green"],
    [data-callout-metadata~="c-green"],
    [data-callout-metadata~="background-color-green"],
    [data-callout-metadata~="bg-c-green"]
  ) {
  --callout-title: var(--callout-green);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-green"],
    [data-callout-metadata~="c-green"],
    [data-callout-metadata~="background-color-green"],
    [data-callout-metadata~="bg-c-green"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-green"],
    [data-callout-metadata~="bg-green"],
    [data-callout-metadata~="background-color-green"],
    [data-callout-metadata~="bg-c-green"]
  ) {
  --callout-background: rgba(
    var(--callout-green),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-green"],
    [data-callout-metadata~="bg-c-green"]
  ) {
  --callout-color: var(--callout-green);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-orange"],
    [data-callout-metadata~="c-orange"],
    [data-callout-metadata~="background-color-orange"],
    [data-callout-metadata~="bg-c-orange"]
  ) {
  --callout-title: var(--callout-orange);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-orange"],
    [data-callout-metadata~="c-orange"],
    [data-callout-metadata~="background-color-orange"],
    [data-callout-metadata~="bg-c-orange"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-orange"],
    [data-callout-metadata~="bg-orange"],
    [data-callout-metadata~="background-color-orange"],
    [data-callout-metadata~="bg-c-orange"]
  ) {
  --callout-background: rgba(
    var(--callout-orange),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-orange"],
    [data-callout-metadata~="bg-c-orange"]
  ) {
  --callout-color: var(--callout-orange);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-red"],
    [data-callout-metadata~="c-red"],
    [data-callout-metadata~="background-color-red"],
    [data-callout-metadata~="bg-c-red"]
  ) {
  --callout-title: var(--callout-red);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-red"],
    [data-callout-metadata~="c-red"],
    [data-callout-metadata~="background-color-red"],
    [data-callout-metadata~="bg-c-red"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-red"],
    [data-callout-metadata~="bg-red"],
    [data-callout-metadata~="background-color-red"],
    [data-callout-metadata~="bg-c-red"]
  ) {
  --callout-background: rgba(var(--callout-red), var(--callout-color-opacity));
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-red"],
    [data-callout-metadata~="bg-c-red"]
  ) {
  --callout-color: var(--callout-red);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-purple"],
    [data-callout-metadata~="c-purple"],
    [data-callout-metadata~="background-color-purple"],
    [data-callout-metadata~="bg-c-purple"]
  ) {
  --callout-title: var(--callout-purple);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-purple"],
    [data-callout-metadata~="c-purple"],
    [data-callout-metadata~="background-color-purple"],
    [data-callout-metadata~="bg-c-purple"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-purple"],
    [data-callout-metadata~="bg-purple"],
    [data-callout-metadata~="background-color-purple"],
    [data-callout-metadata~="bg-c-purple"]
  ) {
  --callout-background: rgba(
    var(--callout-purple),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-purple"],
    [data-callout-metadata~="bg-c-purple"]
  ) {
  --callout-color: var(--callout-purple);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-gray"],
    [data-callout-metadata~="c-gray"],
    [data-callout-metadata~="background-color-gray"],
    [data-callout-metadata~="bg-c-gray"]
  ) {
  --callout-title: var(--callout-gray);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-gray"],
    [data-callout-metadata~="c-gray"],
    [data-callout-metadata~="background-color-gray"],
    [data-callout-metadata~="bg-c-gray"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-gray"],
    [data-callout-metadata~="bg-gray"],
    [data-callout-metadata~="background-color-gray"],
    [data-callout-metadata~="bg-c-gray"]
  ) {
  --callout-background: rgba(var(--callout-gray), var(--callout-color-opacity));
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-gray"],
    [data-callout-metadata~="bg-c-gray"]
  ) {
  --callout-color: var(--callout-gray);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-yellow"],
    [data-callout-metadata~="c-yellow"],
    [data-callout-metadata~="background-color-yellow"],
    [data-callout-metadata~="bg-c-yellow"]
  ) {
  --callout-title: var(--callout-yellow);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-yellow"],
    [data-callout-metadata~="c-yellow"],
    [data-callout-metadata~="background-color-yellow"],
    [data-callout-metadata~="bg-c-yellow"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-yellow"],
    [data-callout-metadata~="bg-yellow"],
    [data-callout-metadata~="background-color-yellow"],
    [data-callout-metadata~="bg-c-yellow"]
  ) {
  --callout-background: rgba(
    var(--callout-yellow),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-yellow"],
    [data-callout-metadata~="bg-c-yellow"]
  ) {
  --callout-color: var(--callout-yellow);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-pink"],
    [data-callout-metadata~="c-pink"],
    [data-callout-metadata~="background-color-pink"],
    [data-callout-metadata~="bg-c-pink"]
  ) {
  --callout-title: var(--callout-pink);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-pink"],
    [data-callout-metadata~="c-pink"],
    [data-callout-metadata~="background-color-pink"],
    [data-callout-metadata~="bg-c-pink"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-pink"],
    [data-callout-metadata~="bg-pink"],
    [data-callout-metadata~="background-color-pink"],
    [data-callout-metadata~="bg-c-pink"]
  ) {
  --callout-background: rgba(var(--callout-pink), var(--callout-color-opacity));
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-pink"],
    [data-callout-metadata~="bg-c-pink"]
  ) {
  --callout-color: var(--callout-pink);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-brown"],
    [data-callout-metadata~="c-brown"],
    [data-callout-metadata~="background-color-brown"],
    [data-callout-metadata~="bg-c-brown"]
  ) {
  --callout-title: var(--callout-brown);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-brown"],
    [data-callout-metadata~="c-brown"],
    [data-callout-metadata~="background-color-brown"],
    [data-callout-metadata~="bg-c-brown"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-brown"],
    [data-callout-metadata~="bg-brown"],
    [data-callout-metadata~="background-color-brown"],
    [data-callout-metadata~="bg-c-brown"]
  ) {
  --callout-background: rgba(
    var(--callout-brown),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-brown"],
    [data-callout-metadata~="bg-c-brown"]
  ) {
  --callout-color: var(--callout-brown);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-black"],
    [data-callout-metadata~="c-black"],
    [data-callout-metadata~="background-color-black"],
    [data-callout-metadata~="bg-c-black"]
  ) {
  --callout-title: var(--callout-black);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-black"],
    [data-callout-metadata~="c-black"],
    [data-callout-metadata~="background-color-black"],
    [data-callout-metadata~="bg-c-black"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-black"],
    [data-callout-metadata~="bg-black"],
    [data-callout-metadata~="background-color-black"],
    [data-callout-metadata~="bg-c-black"]
  ) {
  --callout-background: rgba(
    var(--callout-black),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-black"],
    [data-callout-metadata~="bg-c-black"]
  ) {
  --callout-color: var(--callout-black);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-white"],
    [data-callout-metadata~="c-white"],
    [data-callout-metadata~="background-color-white"],
    [data-callout-metadata~="bg-c-white"]
  ) {
  --callout-title: var(--callout-white);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-white"],
    [data-callout-metadata~="c-white"],
    [data-callout-metadata~="background-color-white"],
    [data-callout-metadata~="bg-c-white"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-white"],
    [data-callout-metadata~="bg-white"],
    [data-callout-metadata~="background-color-white"],
    [data-callout-metadata~="bg-c-white"]
  ) {
  --callout-background: rgba(
    var(--callout-white),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-white"],
    [data-callout-metadata~="bg-c-white"]
  ) {
  --callout-color: var(--callout-white);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-plain"],
    [data-callout-metadata~="c-plain"],
    [data-callout-metadata~="background-color-plain"],
    [data-callout-metadata~="bg-c-plain"]
  ) {
  --callout-title: var(--callout-plain);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="color-plain"],
    [data-callout-metadata~="c-plain"],
    [data-callout-metadata~="background-color-plain"],
    [data-callout-metadata~="bg-c-plain"]
  )
  > .callout-title {
  --callout-color: var(--callout-title);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-plain"],
    [data-callout-metadata~="bg-plain"],
    [data-callout-metadata~="background-color-plain"],
    [data-callout-metadata~="bg-c-plain"]
  ) {
  --callout-background: rgba(
    var(--callout-plain),
    var(--callout-color-opacity)
  );
  background-color: var(--callout-background);
}

body
  .callout.callout.callout:is(
    [data-callout-metadata~="background-color-plain"],
    [data-callout-metadata~="bg-c-plain"]
  ) {
  --callout-color: var(--callout-plain);
}

body .callout.callout.callout {
  --callout-micro: 10%;
  --callout-tiny: 20%;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-med-small: 50%;
  --callout-medium: 60%;
  --callout-med-tall: 80%;
  --callout-tall: 95%;
}

body .callout.callout.callout[data-callout-metadata~="wmicro"] {
  max-width: unset;
  width: var(--callout-micro);
}

body .callout.callout.callout[data-callout-metadata~="wtiny"] {
  max-width: unset;
  width: var(--callout-tiny);
}

body .callout.callout.callout[data-callout-metadata~="wsmall"] {
  max-width: unset;
  width: var(--callout-small);
}

body .callout.callout.callout[data-callout-metadata~="ws-med"] {
  max-width: unset;
  width: var(--callout-small-med);
}

body .callout.callout.callout[data-callout-metadata~="wm-sm"] {
  max-width: unset;
  width: var(--callout-med-small);
}

body .callout.callout.callout[data-callout-metadata~="wmed"] {
  max-width: unset;
  width: var(--callout-medium);
}

body .callout.callout.callout[data-callout-metadata~="wm-tl"] {
  max-width: unset;
  width: var(--callout-med-tall);
}

body .callout.callout.callout[data-callout-metadata~="wtall"] {
  max-width: unset;
  width: var(--callout-tall);
}

body .callout.callout.callout[data-callout-metadata~="sban"],
body .callout.callout.callout[data-callout-metadata~="wfull"] {
  width: 100%;
  float: unset;
  max-width: 100%;
}

body .callout.callout.callout[data-callout-metadata~="wtiny-c"] {
  width: 19%;
}

body .callout.callout.callout[data-callout-metadata~="wsmall-c"] {
  width: 32.4%;
}

body .callout.callout.callout[data-callout-metadata~="ws-med-c"] {
  width: 39%;
}

body .callout.callout.callout[data-callout-metadata~="wm-sm-c"] {
  width: 49%;
}

body .callout.callout.callout[data-callout-metadata~="wmed-c"] {
  width: 59%;
}

body .callout.callout.callout[data-callout-metadata~="wm-tl-c"] {
  width: 79%;
}

body .callout.callout.callout[data-callout-metadata~="wfit"] {
  width: fit-content;
  max-width: min-content;
}

body .callout.callout[data-callout-metadata~="static"] {
  --callout-micro: 50px;
  --callout-tiny: 100px;
  --callout-small: 200px;
  --callout-small-med: 300px;
  --callout-med-small: 400px;
  --callout-medium: 500px;
  --callout-med-tall: 600px;
  --callout-tall: 700px;
}

body
  .callout.callout:is(
    [data-callout-metadata~="content-padding-small"],
    [data-callout-metadata~="c-p-sm"]
  ) {
  --callout-content-padding: 6px;
}

body
  .callout.callout:is(
    [data-callout-metadata~="content-padding-medium"],
    [data-callout-metadata~="c-p-med"]
  ) {
  --callout-content-padding: 12px;
}

body
  .callout.callout:is(
    [data-callout-metadata~="content-padding-large"],
    [data-callout-metadata~="c-p-lg"]
  ) {
  --callout-content-padding: 24px;
}

body
  .callout.callout:is(
    [data-callout-metadata~="txt-l"],
    [data-callout-metadata~="text-left"]
  )
  > .callout-content
  > * {
  text-align: left;
}

body
  .callout.callout:is(
    [data-callout-metadata~="txt-r"],
    [data-callout-metadata~="text-right"]
  )
  > .callout-content {
  text-align: right;
}

body
  .callout.callout:is(
    [data-callout-metadata~="txt-c"],
    [data-callout-metadata~="text-center"]
  )
  > .callout-content {
  text-align: center;
}

body
  .callout.callout:is(
    [data-callout-metadata~="ttl-c"],
    [data-callout-metadata~="title-center"]
  )
  .callout-title {
  justify-content: center;
}

body
  .callout.callout:is(
    [data-callout-metadata~="ttl-c"],
    [data-callout-metadata~="title-center"]
  )
  .callout-title-inner {
  display: block;
  flex: unset;
}

body
  .callout.callout:is(
    [data-callout-metadata~="text-small"],
    [data-callout-metadata~="txt-s"]
  )
  > .callout-content
  > * {
  --font-text-size: var(--font-smallest);
  --tag-size: var(--font-smallest);
  --table-text-size: var(--font-smallest);
  font-size: var(--font-text-size);
}

/*Infobox*/
:is(
    .is-mobile:not(.is-tablet),
    .is-mobile .is-live-preview,
    .is-live-preview :not(.markdown-rendered)
  )
  .callout[data-callout~="infobox"]:not([data-callout-metadata~="mobile"]) {
  float: unset !important;
  max-width: 100%;
  margin: 0 !important;
  width: auto;
}

body .callout.callout[data-callout~="infobox"] {
  --callout-color: var(--note, var(--background-primary));
  --callout-padding: 0;
  --callout-content-padding: 5px;
  --callout-margin: 0 0 0 5px;
  background: var(--note, var(--background-primary));
  --h1-border-line-height: 0;
  --h2-border-line-height: 0;
  --h3-border-line-height: 0;
  --h4-border-line-height: 0;
  --h5-border-line-height: 0;
  --h6-border-line-height: 0;
  border: 0;
  box-shadow: none;
  width: auto;
  max-width: 300px;
  float: right;
  border-radius: var(--radius-s);
}

body .callout.callout[data-callout~="infobox"] > .callout-title {
  justify-content: center;
  align-items: center;
  align-self: center;
}

body
  .callout.callout[data-callout~="infobox"]
  > .callout-title
  > .callout-icon {
  align-self: center;
}

body
  .callout.callout[data-callout~="infobox"]:not(.is-collapsed)
  > .callout-title {
  padding: 0;
}

body .callout.callout[data-callout~="infobox"] .callout-fold {
  padding-right: 0;
}

body .callout.callout[data-callout~="infobox"].is-collapsed .callout-fold {
  border: 1px solid var(--hr, var(--background-modifier-border));
  border-radius: var(--radius-m);
}

body
  .callout.callout[data-callout~="infobox"]
  > .callout-title
  .callout-title-inner {
  display: none;
}

body .callout.callout[data-callout~="infobox"] > .callout-title .callout-icon {
  height: 0;
}

body
  .callout.callout[data-callout~="infobox"]:not(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"],
    [data-callout-metadata~="show-icon"],
    [data-callout-metadata~="s-i"]
  )
  > .callout-title
  .callout-icon
  > svg {
  width: 0;
  height: 0;
}

body
  .callout.callout[data-callout~="infobox"]:not(:hover):not(.is-collapsed)
  > .callout-title {
  background-color: transparent;
}

body
  .callout.callout[data-callout~="infobox"]
  > .callout-content
  > .callout[data-callout~="infobox"]:not([data-callout-metadata~="no-t"]):not(
    .is-collapsed
  )
  > .callout-title,
body
  .callout.callout[data-callout~="infobox"]:is(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  ):not(.is-collapsed)
  > .callout-title {
  display: flex;
  gap: 0;
}

body
  .callout.callout[data-callout~="infobox"]
  > .callout-content
  > .callout[data-callout~="infobox"]:not(
    [data-callout-metadata~="no-t"]
  ).is-collapsed
  > .callout-title,
body
  .callout.callout[data-callout~="infobox"]:is(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  ).is-collapsed
  > .callout-title {
  border: 1px solid var(--hr, var(--background-modifier-border));
  display: flex;
  align-items: center;
  align-content: center;
}

body
  .callout.callout[data-callout~="infobox"]
  > .callout-content
  > .callout[data-callout~="infobox"]:not([data-callout-metadata~="no-t"])
  .callout-title
  .callout-title-inner,
body
  .callout.callout[data-callout~="infobox"]:is(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  )
  .callout-title
  .callout-title-inner {
  display: unset;
  align-items: center;
  align-content: center;
  padding: 5px 10px;
}

body
  .callout.callout[data-callout~="infobox"]
  > .callout-content
  > .callout[data-callout~="infobox"]:not([data-callout-metadata~="no-t"])
  .callout-fold,
body
  .callout.callout[data-callout~="infobox"]:is(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  )
  .callout-fold {
  margin-top: auto;
  margin-bottom: auto;
}

body
  .callout.callout[data-callout~="infobox"]
  > .callout-content
  > .callout[data-callout~="infobox"]:not(
    [data-callout-metadata~="no-t"]
  ).is-collapsed
  .callout-fold,
body
  .callout.callout[data-callout~="infobox"]:is(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  ).is-collapsed
  .callout-fold {
  border: 0;
}

body .callout.callout[data-callout~="infobox"] > .callout-content {
  border: 1px solid var(--table, var(--background-modifier-border));
  margin: 0;
  border-radius: var(--radius-s);
}

body .callout.callout[data-callout~="infobox"] table {
  width: 100%;
}

body .callout.callout[data-callout~="infobox"] table td {
  white-space: pre-wrap;
  word-wrap: normal;
  word-break: normal;
}

body .callout.callout[data-callout~="infobox"] :is(p, table) {
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
}

body
  .callout.callout[data-callout~="infobox"]
  .callout-content
  > :is(h1, h2, h3, h4, h5, h6) {
  font-size: 20px;
  text-align: center;
  margin: 0;
  padding: 2px;
  color: var(--text-normal);
  background: var(--outer-bar, var(--background-secondary));
}

body .callout.callout[data-callout~="infobox"] .internal-embed,
body .callout.callout[data-callout~="infobox"] img {
  display: block;
  margin: auto;
  padding: auto;
  text-align: center;
}

body
  .callout.callout[data-callout~="infobox"][data-callout-metadata][data-callout-metadata][data-callout-metadata~="left"] {
  --callout-margin: 0 5px 0 0;
}

body
  .callout.callout[data-callout~="infobox"]
  .callout-content
  > .callout[data-callout~="infobox"] {
  max-width: unset;
  float: unset;
  --callout-margin: 5px 0 0 0;
}

body
  .callout.callout[data-callout~="infobox"]
  .callout-content
  > .callout[data-callout~="infobox"]
  > .callout-title {
  color: var(--text-normal);
  background: var(--outer-bar, var(--background-secondary));
  border: 1px solid var(--table, var(--background-modifier-border));
  border-bottom: none;
}

body
  .callout.callout[data-callout~="infobox"]
  .callout-content
  > .callout[data-callout~="infobox"]:not([data-callout-metadata~="no-t"])
  > .callout-content {
  border-top: none;
}

body
  .callout.callout[data-callout~="infobox"][data-callout-metadata~="wikipedia"]
  table {
  --table-header-color: var(--text, var(--text-normal));
  --table-header-background: transparent;
  --table-header-background-hover: var(--td, var(--table-background));
  --table-row-background-hover: var(--td, var(--table-background));
  --table-row-alt-background: transparent;
  --table-column-alt-background: transparent;
  --table-border-color: transparent;
  --table-header-border-color: transparent;
}

body
  .callout.callout[data-callout~="infobox"][data-callout-metadata~="wikipedia"]
  table
  tr:last-child {
  margin-bottom: 2px;
}

body
  .callout.callout[data-callout~="infobox"][data-callout-metadata~="table-border"] {
  --table-border-color: var(--background-modifier-border);
}

body
  .callout.callout[data-callout~="infobox"][data-callout-metadata~="table-border"]
  th:first-child,
body
  .callout.callout[data-callout~="infobox"][data-callout-metadata~="table-border"]
  tr
  td:first-child {
  border-left-color: transparent;
}

body
  .callout.callout[data-callout~="infobox"][data-callout-metadata~="table-border"]
  th:last-child,
body
  .callout.callout[data-callout~="infobox"][data-callout-metadata~="table-border"]
  tr
  td:last-child {
  border-right-color: transparent;
}

@media print {
  .callout[data-callout~="infobox"] {
    max-width: 400px;
  }
}

.theme-light
  .callout[data-callout~="infobox"][data-callout-metadata~="wikipedia"] {
  --th-text: var(--th);
}

.illusion.illusion
  .callout[data-callout~="infobox"].is-collapsed.is-collapsed[data-callout-metadata~="left"] {
  margin-left: -30px;
}

.illusion.illusion
  .callout[data-callout~="infobox"].is-collapsed.is-collapsed[data-callout-metadata~="right"] {
  margin-right: -30px;
}

.illusion.illusion .callout[data-callout~="infobox"] [data-heading] {
  --illusion-box-shadow: none;
  --header-shadow: var(--illusion-box-shadow);
  --h1-shadow: var(--header-shadow);
  --h2-shadow: var(--header-shadow);
  --h3-shadow: var(--header-shadow);
  --h4-shadow: var(--header-shadow);
  --h5-shadow: var(--header-shadow);
  --h6-shadow: var(--header-shadow);
}

body .callout.callout[data-callout="statblocks"] {
  --callout-color: var(--accent-rgb);
  --callout-icon: swords;
  --callout-padding: 12px 15px;
  --callout-margin: 10px auto;
  --callout-border-color: var(--hr, var(--hr-color));
  border-width: 5px 0 5px 0;
  border-style: solid;
  margin: var(--callout-margin);
  min-width: 10ch;
  max-width: 42ch;
  background: transparent;
  box-shadow:
    var(--shadow-l),
    0 0 20px var(--outline, var(--hr-color));
}

body .callout.callout[data-callout="statblocks"] > .callout-content {
  --heading-spacing-top: 0;
  --heading-spacing-bottom: 0;
  --p-spacing: 7px;
  --bold-color: var(--headers, var(--h1-color));
  --hr-icon-symbol: "";
}

body .callout.callout[data-callout="statblocks"] h1 {
  width: auto;
}

body .callout.callout[data-callout="statblocks"] img:not([class], [width]) {
  box-shadow: 0 0 0 4px var(--headers, var(--background-modifier-border));
  margin-right: 4px;
  margin-bottom: 4px;
}

body .callout.callout[data-callout="statblocks"] h1::after,
body .callout.callout[data-callout="statblocks"] h1::before,
body .callout.callout[data-callout="statblocks"] > .callout-title {
  display: none;
}

body .callout.callout[data-callout="statblocks"] blockquote {
  --blockquote-border-thickness: 0;
  --blockquote-padding: 5px 0px 2px 0;
  --blockquote-color: var(--soft-text, var(--text-faint));
  --blockquote-background-color: transparent;
  margin-block-start: 0;
  margin-block-end: 0;
}

body .callout.callout[data-callout="statblocks"] hr {
  margin: 12px auto;
}

body .callout.callout[data-callout="statblocks"] table {
  --table-header-background: transparent;
  --table-header-background-hover: var(--table-header-background);
  --table-header-color: var(--headers, var(--text-faint));
  --table-header-border-color: transparent;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: var(--table-row-alt-background);
  --table-row-background-hover: var(--table-row-alt-background);
  --table-column-alt-background: transparent;
  --table-border-color: transparent;
  --table-cell-padding-y: 1px;
  --table-cell-padding-x: 4px;
  --table-header-padding-y: 1px;
  --table-header-padding-x: 4px;
  --table-style-column-header-background: transparent;
  --table-style-column-header-bold-weight: var(--text-weight);
  --table-style-column-header-bold-color: var(--text, var(--text-normal));
  margin: 12px auto;
  width: unset;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="full"] {
  max-width: 100%;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"] {
  max-width: 100%;
  --columns: 2;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="1"] {
  --columns: 1;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="2"] {
  --columns: 2;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="3"] {
  --columns: 3;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="4"] {
  --columns: 4;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="5"] {
  --columns: 5;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="6"] {
  --columns: 6;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="7"] {
  --columns: 7;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="8"] {
  --columns: 8;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"][data-callout-metadata~="9"] {
  --columns: 9;
}

body
  .callout.callout[data-callout="statblocks"][data-callout-metadata~="columns"]
  > .callout-content {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 15px;
}

/*Image Grid*/
body .callout.callout[data-callout="grid"] {
  --callout-padding: 0;
  --callout-content-padding: 0;
  background: transparent;
  border: 0;
  margin: 0;
  box-shadow: none;
}

body .callout.callout[data-callout="grid"] .callout-content {
  display: block;
  width: 100%;
  border: 0;
  box-shadow: unset;
  padding: 0;
}

body .callout.callout[data-callout="grid"] .callout-title {
  display: none;
}

body .callout.callout[data-callout="grid"] .callout-content p {
  display: flex;
  margin-block-start: 0;
  margin-block-end: 0;
  justify-content: center;
}

body .callout.callout[data-callout="grid"] .callout-content img {
  display: table-cell;
  vertical-align: middle;
  padding: 3px;
  max-height: 35vh;
}

body .callout.callout[data-callout="grid"] .callout-content img[alt="wfull"] {
  max-height: unset;
}

body
  .callout.callout[data-callout="grid"][data-callout-metadata~="masonry"]
  .callout-content
  p {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, auto));
  grid-gap: 0;
  margin: 0;
  margin-top: 1px;
}

body
  .callout.callout[data-callout="grid"][data-callout-metadata~="masonry"]
  .callout-content
  img {
  display: flex;
  flex: 1;
  align-self: stretch;
  object-fit: cover;
  max-height: unset;
}

/* Cards */
body .callout[data-callout~="cards"] {
  --callout-color: transparent;
  --callout-icon: layout-dashboard;
  --callout-padding: 0;
  --callout-content-padding: 0px;
  --callout-blend-mode: normal;
  --callout-cards-columns: 3;
  --callout-cards-gap: 5px;
  box-shadow: none;
  border: 0;
  width: auto;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="1"]
  .callout-content {
  --callout-cards-columns: 1;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="2"]
  .callout-content {
  --callout-cards-columns: 2;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="3"]
  .callout-content {
  --callout-cards-columns: 3;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="4"]
  .callout-content {
  --callout-cards-columns: 4;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="5"]
  .callout-content {
  --callout-cards-columns: 5;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="6"]
  .callout-content {
  --callout-cards-columns: 6;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="7"]
  .callout-content {
  --callout-cards-columns: 7;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="8"]
  .callout-content {
  --callout-cards-columns: 8;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="9"]
  .callout-content {
  --callout-cards-columns: 9;
}

body .callout[data-callout~="cards"] > .callout-title {
  display: none;
}

body .callout[data-callout~="cards"] > .callout-content {
  display: grid;
  grid-template-columns: repeat(var(--callout-cards-columns), 1fr);
  grid-gap: var(--callout-cards-gap);
  border-radius: 0;
  padding-inline-start: 0px;
  padding: 0;
}

body .callout[data-callout~="cards"] p {
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 0;
}

body
  .callout[data-callout~="cards"]:not(
    [data-callout-metadata~="nstr"],
    [data-callout-metadata~="no-strong"]
  )
  strong {
  display: block;
  text-align: center;
  margin: auto;
  background-color: var(--outer-bar, var(--background-secondary));
}

body .callout[data-callout~="cards"] br {
  display: none;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="flex"]
  > .callout-content,
body
  .callout[data-callout~="cards"][data-callout-metadata~="flex"]
  .dataview.table-view-table
  tbody {
  gap: unset;
  grid-template-columns: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="flex"]
  > .callout-content
  .callout,
body
  .callout[data-callout~="cards"][data-callout-metadata~="flex"]
  .dataview.table-view-table
  tbody
  .callout {
  flex: 1 1 250px;
  margin: var(--callout-cards-gap);
}

body .callout[data-callout~="cards"][data-callout-metadata~="dataview"] {
  --callout-content-padding: 0;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .callout-content {
  display: unset;
  grid-template-columns: unset;
}

body .callout[data-callout~="cards"][data-callout-metadata~="dataview"] br {
  display: block;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .block-language-dataview {
  padding: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .dataview.table-view-table {
  display: grid;
  margin-block-start: 0;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .dataview.table-view-table
  :is(td, tr) {
  border: 0;
  background: transparent;
  padding: 0;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .dataview.table-view-table
  strong {
  background: transparent;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .table-view-thead
  th {
  border: 0;
  background-color: transparent;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .table-view-thead
  tr {
  display: none;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .dataview.table-view-table
  tbody {
  display: grid;
  grid-template-columns: repeat(var(--callout-cards-columns), 1fr);
  grid-gap: calc(var(--callout-cards-gap) * 2);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  .dataview.table-view-table
  tbody
  tr {
  display: grid;
  align-content: flex-start;
  margin: 0;
  padding: 10px;
  border: 2px solid var(--outline, var(--background-modifier-box-shadow));
  box-shadow: var(--shadow-ml, var(--input-shadow));
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="txt-c"]
  .dataview
  td {
  text-align: center;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"]
  img:not(.link-favicon) {
  width: 100%;
  object-fit: cover;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-micro"]
  img {
  height: var(--micro);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-tiny"]
  img {
  height: var(--tiny);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-small"]
  img {
  height: var(--small);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-small-med"]
  img {
  height: var(--small-med);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-med-small"]
  img {
  height: var(--med-small);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-medium"]
  img {
  height: var(--medium);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-med-tall"]
  img {
  height: var(--med-tall);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dataview"][data-callout-metadata~="img-tall"]
  img {
  height: var(--tall);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dvl"]
  .callout-content {
  display: block;
}

body .callout[data-callout~="cards"][data-callout-metadata~="dvl"] br {
  display: unset;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dvl"]
  .block-language-dataviewjs
  .dataview-result-list-li,
body
  .callout[data-callout~="cards"][data-callout-metadata~="dvl"]
  .list-view-ul
  li {
  padding: 10px;
  background-color: var(--outer-bar, var(--background-secondary));
  box-shadow: var(--shadow-s, var(--input-shadow));
  margin-bottom: 5px;
  --list-indent: 0;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="dvl"]
  .dataview.list-view-ul
  li::before {
  --bullet: "";
}

body .callout[data-callout~="cards"][data-callout-metadata~="dvl"] ul {
  padding-inline-start: unset;
}

body .callout[data-callout~="cards"][data-callout-metadata~="list"] {
  --list-indent: 0;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="list"]
  > .callout-content {
  display: block;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="list"]
  ul
  li::before,
body
  .callout[data-callout~="cards"][data-callout-metadata~="list"]
  .list-collapse-indicator {
  display: none;
}

body .callout[data-callout~="cards"][data-callout-metadata~="list"] ul {
  display: grid;
  grid-template-columns: repeat(var(--callout-cards-columns), 1fr);
  grid-gap: 5px;
  border-radius: 0;
  padding-inline-start: 0px;
  margin-right: 3px;
  margin-bottom: 5px;
}

body .callout[data-callout~="cards"][data-callout-metadata~="list"] ul > li {
  padding: 5px 10px;
  box-shadow:
    0 0 0 2px var(--outline) inset,
    var(--shadow-s, var(--input-shadow));
}

body .callout[data-callout~="cards"][data-callout-metadata~="notion"] {
  --callout-cards-notion-padding: 10px;
  --callout-cards-notion-shadow: 0 0 5px var(--outline), 0 0 6px var(--outline);
  --callout-cards-notion-radius: var(--radius-s);
  --callout-content-padding: 15px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]:is(
    [data-callout-metadata~="round"],
    [data-callout-metadata~="rounded"]
  ) {
  --callout-cards-notion-radius: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .dataview.table-view-table
  tbody
  tr {
  padding: 0;
  box-shadow: var(--callout-cards-notion-shadow);
  border: 0;
  border-radius: var(--callout-cards-notion-radius);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .dataview.table-view-table
  tbody
  tr
  td
  > :last-of-type {
  padding-bottom: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .dataview.table-view-table
  tbody
  tr
  td
  > :first-child {
  padding-top: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .dataview.table-view-table
  tbody
  tr
  td
  > ul,
body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .dataview.table-view-table
  tbody
  tr
  td
  > span:not(:has(strong, span)) {
  margin-left: var(--callout-cards-notion-padding);
  margin-right: var(--callout-cards-notion-padding);
  display: inline-block;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .dataview.table-view-table
  tbody
  tr
  td:first-of-type
  strong::after {
  content: "";
  display: block;
  height: 1px;
  background-color: var(--outline);
  margin-top: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .dataview.table-view-table
  tbody
  strong {
  margin-top: 5px;
  margin-bottom: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  .block-language-dataview {
  margin: -25px 0 -25px 0;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content {
  padding: calc(var(--callout-cards-notion-padding) / 2);
  gap: calc(var(--callout-cards-notion-padding) - 3px);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p {
  box-shadow: var(--callout-cards-notion-shadow);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p
  strong {
  background-color: transparent;
  text-align: unset;
  padding: 0 var(--callout-cards-notion-padding);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p
  > :not(img, .internal-embed, strong, br) {
  display: inline-block;
  padding-left: var(--callout-cards-notion-padding);
  padding-right: var(--callout-cards-notion-padding);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p,
body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p
  img {
  border-radius: var(--callout-cards-notion-radius);
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p
  > img:first-child,
body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p
  > .internal-embed:first-child
  img {
  margin-bottom: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p:has(> :is(img, .internal-embed):first-child) {
  padding-bottom: 7px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p
  > img:last-child,
body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p
  > .internal-embed:last-child
  img {
  margin-top: 5px;
}

body
  .callout[data-callout~="cards"][data-callout-metadata~="notion"]
  > .callout-content
  > p:has(> :is(img, .internal-embed):last-child) {
  padding-top: 7px;
}

.view-content > div:is(.markdown-source-view, .markdown-reading-view) > div {
  container: note/inline-size;
}

@container note (max-width: 500px) {
  .callout[data-callout~="cards"] .callout-content {
    --callout-cards-columns: 2;
  }
}

@container note (max-width: 300px) {
  .callout[data-callout~="cards"] .callout-content {
    --callout-cards-columns: 1;
  }
}

/*Captions*/
body .callout.callout[data-callout~="caption"] {
  background: transparent;
  text-align: center;
  box-shadow: none;
  border: 0;
  padding: 0;
  margin: 0;
  --callout-content-padding: 0;
  max-width: 30vh;
}

body .callout.callout[data-callout~="caption"] > .callout-content {
  overflow: hidden;
}

body
  .callout.callout[data-callout~="caption"]
  > .callout-content
  > p
  :is(.image-embed, img)
  + br {
  display: none;
}

body .callout.callout[data-callout~="caption"] > .callout-content img {
  display: block;
  margin: auto;
}

body .callout.callout[data-callout~="caption"] > .callout-title {
  display: none;
}

body .callout.callout[data-callout~="caption"] p {
  margin-block-start: 0;
  margin-block-end: 0;
  color: var(--text-faint);
}

body
  .callout.callout[data-callout~="caption"]:is(
    [data-callout-metadata~="sban"],
    [data-callout-metadata~="banner"]
  )
  .image-embed
  img {
  width: 100%;
}

/* Recite */
body .callout.callout[data-callout="recite"] {
  --callout-color: 193, 67, 67;
  --callout-icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path stroke="none" fill="none" d="M0 0h24v24H0z"/><path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455z"/></svg>';
  --callout-margin: 10px;
  --callout-padding: 5px 10px 10px 10px;
  border-style: solid;
  border-width: 11px;
  border-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA8CAYAAADxJz2MAAAFWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjgwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iNjAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSI4MCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNjAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjMwMC8xIgogICB0aWZmOllSZXNvbHV0aW9uPSIzMDAvMSIKICAgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIKICAgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMS0wMlQxNjowNTo0MS0wODowMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMS0wMlQxNjowNTo0MS0wODowMCI+CiAgIDxkYzp0aXRsZT4KICAgIDxyZGY6QWx0PgogICAgIDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+RCZhbXA7RCBCb3JkZXI8L3JkZjpsaT4KICAgIDwvcmRmOkFsdD4KICAgPC9kYzp0aXRsZT4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0icHJvZHVjZWQiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFmZmluaXR5IERlc2lnbmVyIDEuMTAuNCIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMi0wMS0wMlQxNjowNTo0MS0wODowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+SLcLyAAAAYFpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZHPK0RRFMc/8xD50SiUhcVLWA35UWJjMZNfhcXMKIPNm2fejJo3Xu+NJFtlO0WJjV8L/gK2ylopIiVLWRMbpuc8o0Yy53bP/dzvPed077mgRNO66ZR3g5nJ2uHRoDoTm1Urn/Ch0EQdqqY71mRkJEpJe7+VaLHrTq9W6bh/rWYh4ejgqxIe0i07KzwmPLGStTzeEm7UU9qC8IlwwJYLCt94erzAzx4nC/zpsR0Nh0CpF1aTvzj+i/WUbQrLy2kz08v6z328l9QmMtMRWVtltuAQZpQgKuMME6KfHgbF99NJL12yo0R+93f+FEuSq4u3WMVmkSQpsgREXZbqCVkN0RMy0qx6/f/bV8fo6y1Urw1CxaPrvrZD5Sbkc677ceC6+UMoe4DzTDF/aR8G3kTPFbW2PfCvw+lFUYtvw9kGNN9bmq19S2UyFcOAl2Ooi0HDFVTPFXr2c87RHUTX5KsuYWcXOiTeP/8FK5Jny8RYHqYAAAAJcEhZcwAALiMAAC4jAXilP3YAAAG5SURBVHic7dyxSiNRFMbxv0OwEkvZfrEWleWAvbA+giB5ANtgcx/gFJK0+wAbwUdYV7bZRjiIirXYL1tbiajFXHV3Y5KBbIyTfL8yOQxfPu5kprkXKnCzRTfrVpmdBm7WdbPFKrNFhYt9As6BnVGD1cgOcJ5/+0CNfl+4WQG0AB80N8U+AiduloBOirh/bejVFehmH4AjYJ/ZLO9Jg7KDo9xJj54C3ewzcAlsjjdbrWwCl7mbvzyvLjebp7xdW28YrE6WgG9u1gFSiriFvALdbBk4QeVV0aL8b1wGKNysCVwA6xONVS/rwIWbNefc7GHSaeps6HugiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIyCzQTqURaafSiBpAE/gCLAwbThFzY0/0DlS8K2+A3SJFdIE14Gy8sabKGbCWIroFQIq4AjaA9kRj1UMb2MidvexYzzuw99zsB/CVcoe2vPgNNFPE9z8/7HmI5IEV4PiNgtXBMbDyb3nQ5ymcIn4BW8AecDfebO/aHWUHW7mTHn2PNMnnpLTd7CdwSHmOyiy5BrZTxOmgoaHvgfkCq8DBfwpWBwfA6rDyAB4BTjVxWZByO0gAAAAASUVORK5CYII=")
    11;
  border-image-outset: 9px 0px;
  box-shadow: 0px 0px 10px var(--outline, var(--background-modifier-box-shadow));
  background: var(--note, var(--background-primary));
  text-align: justify;
}

body .callout.callout[data-callout="recite"] .callout-title {
  padding: 0;
  background: transparent;
  color: rgba(var(--callout-color), 1);
  justify-content: center;
}

body
  .callout.callout[data-callout="recite"][data-callout-metadata*="bg-"]:not(
    [data-callout-metadata*="bg-c"]
  )
  .callout-title {
  color: var(--text-normal);
}

body .callout.callout[data-callout="recite"] .callout-title-inner {
  flex: unset;
}

body .callout.callout[data-callout="recite"] .callout-content {
  padding: 0;
  padding-top: 10px;
}

/* Unwrapped Table */
body .callout.callout[data-callout-metadata~="table"] {
  border: 0;
  background-color: transparent;
  --callout-padding: 0;
}

body .callout.callout[data-callout-metadata~="table"] .callout-content {
  padding: 0;
  border: 0;
  background-color: transparent;
  box-shadow: none;
}

body
  .callout.callout[data-callout-metadata~="table"]:not(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  )
  .callout-title {
  display: none;
}

body .callout.callout[data-callout-metadata~="table"] table {
  white-space: nowrap;
  margin: 0;
  margin: auto;
  overflow-x: scroll;
}

body .callout.callout[data-callout-metadata~="table"] table th,
body .callout.callout[data-callout-metadata~="table"] table td {
  white-space: nowrap;
}

body
  .callout.callout:is(
    [data-callout-metadata~="table-unwrap-column-1"],
    [data-callout-metadata~="tbl-u-1"]
  )
  table
  tr
  td:nth-child(1) {
  --table-white-space: nowrap;
}

body
  .callout.callout:is(
    [data-callout-metadata~="table-unwrap-column-2"],
    [data-callout-metadata~="tbl-u-2"]
  )
  table
  tr
  td:nth-child(2) {
  --table-white-space: nowrap;
}

body
  .callout.callout:is(
    [data-callout-metadata~="table-unwrap-column-3"],
    [data-callout-metadata~="tbl-u-3"]
  )
  table
  tr
  td:nth-child(3) {
  --table-white-space: nowrap;
}

body
  .callout.callout:is(
    [data-callout-metadata~="table-unwrap-column-4"],
    [data-callout-metadata~="tbl-u-4"]
  )
  table
  tr
  td:nth-child(4) {
  --table-white-space: nowrap;
}

body
  .callout.callout:is(
    [data-callout-metadata~="table-unwrap-column-5"],
    [data-callout-metadata~="tbl-u-5"]
  )
  table
  tr
  td:nth-child(5) {
  --table-white-space: nowrap;
}

body
  .callout.callout:is(
    [data-callout-metadata~="table-unwrap-column-6"],
    [data-callout-metadata~="tbl-u-6"]
  )
  table
  tr
  td:nth-child(6) {
  --table-white-space: nowrap;
}

body
  .callout.callout:is(
    [data-callout-metadata~="table-unwrap-column-7"],
    [data-callout-metadata~="tbl-u-7"]
  )
  table
  tr
  td:nth-child(7) {
  --table-white-space: nowrap;
}

body .callout[data-callout="blank"] {
  --callout-color: transparent;
  margin: 0;
  padding: 0;
  --callout-border-width: 0;
}

body .callout[data-callout="blank"] .callout-content {
  padding: 0;
}

body .callout[data-callout="blank"] > .callout-title {
  display: none;
}

/* Metadata */
body:not(.callout-no-metadata) .callout.callout[data-callout~="Metadata" i] {
  --callout-icon: layers;
  --callout-border-width: 2px;
  --callout-title-padding: 5px;
  --callout-content-padding: 0px 10px 10px;
  --callout-shadow: 0px 0px 0px 1px var(--outline);
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]:not(
    [data-callout-metadata*="bg-"],
    [data-callout-metadata*="bg-c-"],
    [data-callout-metadata*="c-"],
    [data-callout-metadata*="color-"]
  ) {
  --callout-color: 82, 139, 212;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  .callout-title {
  background-color: transparent;
  justify-content: center;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  .callout-title-inner {
  flex: unset;
  color: rgb(var(--callout-color));
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]:not(
    [data-callout-metadata~="no-strong"],
    [data-callout-metadata~="no-str"]
  ) {
  --bold-color: rgb(var(--callout-color));
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  .dataview.inline-field-key {
  background: rgb(var(--callout-color));
  color: var(--text-on-accent);
  font-weight: 900;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  .dataview.inline-field-value {
  font-weight: unset;
  background: transparent;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  table
  th {
  background-color: var(--aside-bg, rgba(var(--callout-color), 0.5));
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  table {
  --tbl-td-h: 0;
  --tbl-td-w: 5px;
  white-space: nowrap;
  margin: 0;
  width: 100%;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  .callout-content
  p:last-child {
  margin-bottom: 0;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  .callout-content
  p:first-child {
  margin-top: 0;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]
  .callout-content,
body:not(.callout-no-metadata) .callout.callout[data-callout~="Metadata" i] ul {
  margin: 0;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"] {
  background: var(--outer-bar, var(--background-secondary-alt));
  border: 0;
  text-align: center;
  padding: 0;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"]:is(
    [data-callout-metadata*="bg-"],
    [data-callout-metadata*="bg-c-"],
    [data-callout-metadata*="c-"],
    [data-callout-metadata*="color-"]
  ) {
  background: rgba(var(--callout-color), var(--callout-color-opacity));
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"].is-collapsible:not(
    .is-collapsed
  ) {
  display: flex;
  flex-direction: row-reverse;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"]:not(
    .is-collapsible
  )
  .callout-title,
body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"]
  .callout-title-inner,
body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"]:not(
    .is-collapsed
  )
  .callout-icon {
  display: none;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"]
  .callout-fold {
  display: flex;
  align-content: center;
  align-items: center;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"]
  .callout-fold
  svg {
  margin-bottom: unset;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata~="i-at"]
  .callout-content {
  padding: 0px;
  margin: auto;
  overflow-y: hidden;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i]:is(
    [data-callout-metadata~="tbl-cln"],
    [data-callout-metadata~="table-clean"]
  )
  table
  :is(td, tr, th) {
  background-color: transparent;
  border-color: transparent;
}

body:not(.callout-no-metadata)
  .callout.callout[data-callout~="Metadata" i][data-callout-metadata*="bg-"] {
  --callout-border-color: var(--callout-background);
  border-color: var(--callout-border-color);
}

/* Columns */
body .callout[data-callout*="column"] {
  --callout-color: var(--text-normal);
  --callout-icon: layout-dashboard;
  --columns: 2;
  --callout-column-gap: 10px;
  background: transparent;
  box-shadow: none;
  border: 0;
  width: auto;
  padding: 0;
}

body .callout[data-callout*="column"] > .callout-content > .callout {
  margin: 0;
}

body .callout[data-callout*="column"] > .callout-content .callout-content {
  border: 0;
}

body .callout[data-callout*="column"] > .callout-content {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: var(--callout-column-gap);
  background: transparent;
  box-shadow: none;
  border: 0;
  padding: 0;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="3"]
  .callout-content {
  --columns: 3;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="4"]
  .callout-content {
  --columns: 4;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="5"]
  .callout-content {
  --columns: 5;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="6"]
  .callout-content {
  --columns: 6;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="7"]
  .callout-content {
  --columns: 7;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="8"]
  .callout-content {
  --columns: 8;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="9"]
  .callout-content {
  --columns: 9;
}

body
  .callout[data-callout*="column"]:is(
    [data-callout-metadata~="slim-margins"],
    [data-callout-metadata~="s-mg"]
  )
  > .callout-content {
  --callout-column-gap: 2px;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"]
  > .callout-content {
  gap: var(--callout-column-gap);
  grid-template-columns: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"]
  > .callout-content
  .callout {
  flex: 1 1 calc(var(--file-line-width) / 2.5);
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"][data-callout-metadata~="3"]
  > .callout-content
  .callout {
  flex: 1 1 calc(var(--file-line-width) / 3.5);
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"][data-callout-metadata~="resize"]
  .callout {
  flex: 1 1 auto;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"][data-callout-metadata~="resize"]
  .callout[data-callout-metadata~="wmicro"] {
  width: 5%;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"][data-callout-metadata~="resize"]
  .callout[data-callout-metadata~="wtiny"] {
  width: 10%;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"][data-callout-metadata~="resize"]
  .callout[data-callout-metadata~="wsmall"] {
  width: 20%;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"][data-callout-metadata~="resize"]
  .callout[data-callout-metadata~="ws-med"] {
  width: 30%;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="flex"][data-callout-metadata~="resize"]
  .callout[data-callout-metadata~="wmed"] {
  width: 40%;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="dataview"]
  > .callout-content {
  grid-template-columns: unset;
  gap: unset;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="dataview"]
  > .callout-content
  .dataview.list-view-ul {
  columns: var(--columns);
}

body
  .callout[data-callout*="column"][data-callout-metadata~="dataview"]
  > .callout-content
  .dataview
  li {
  break-inside: avoid;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="list-global"]
  .callout
  > .callout-content,
body
  .callout[data-callout*="column"][data-callout-metadata~="list"]
  > .callout-content {
  grid-template-columns: unset;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="list-global"]
  .callout
  > .callout-content
  ul,
body
  .callout[data-callout*="column"][data-callout-metadata~="list-global"]
  .callout
  > .callout-content
  > ul,
body
  .callout[data-callout*="column"][data-callout-metadata~="list"]
  > .callout-content
  ul,
body
  .callout[data-callout*="column"][data-callout-metadata~="list"]
  > .callout-content
  > ul {
  columns: var(--columns);
}

body
  .callout[data-callout*="column"][data-callout-metadata~="list-global"]
  .callout
  > .callout-content
  ul
  > li,
body
  .callout[data-callout*="column"][data-callout-metadata~="list-global"]
  .callout
  > .callout-content
  > ul
  > li,
body
  .callout[data-callout*="column"][data-callout-metadata~="list"]
  > .callout-content
  ul
  > li,
body
  .callout[data-callout*="column"][data-callout-metadata~="list"]
  > .callout-content
  > ul
  > li {
  break-inside: avoid;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="list-global"]
  .callout
  > .callout-content
  ul
  .list-bullet::after,
body
  .callout[data-callout*="column"][data-callout-metadata~="list-global"]
  .callout
  > .callout-content
  > ul
  .list-bullet::after,
body
  .callout[data-callout*="column"][data-callout-metadata~="list"]
  > .callout-content
  ul
  .list-bullet::after,
body
  .callout[data-callout*="column"][data-callout-metadata~="list"]
  > .callout-content
  > ul
  .list-bullet::after {
  position: relative;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="list-x"]
  > .callout-content {
  grid-template-columns: unset;
}

body
  .callout[data-callout*="column"][data-callout-metadata~="list-x"]
  > .callout-content
  > ul {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
}

/*Kanban*/
body .callout.callout[data-callout~="kanban"] {
  --callout-color: unset;
  --callout-icon: layout-dashboard;
  --callout-padding: 0;
  --item-outline: 0 0 0 1px var(--outline, var(--background-modifier-border));
  --lane-width: 250px;
  background: transparent;
  box-shadow: none;
  border: 0;
  width: auto;
}

body .callout.callout[data-callout~="kanban"] .callout-title {
  justify-content: center;
  background: var(--code-bg, var(--background-primary));
  padding: 5px;
  border-radius: var(--radius-s);
}

body .callout.callout[data-callout~="kanban"] .callout-title-inner {
  flex: unset;
}

body .callout.callout[data-callout~="kanban"] .callout-content {
  padding: 0;
}

body .callout.callout[data-callout~="kanban"] ul li::marker,
body .callout.callout[data-callout~="kanban"] ul li::before,
body .callout.callout[data-callout~="kanban"] .list-bullet,
body .callout.callout[data-callout~="kanban"] ul::before,
body
  .callout.callout[data-callout~="kanban"]
  :is(ul, ul ul)
  .list-collapse-indicator {
  list-style-type: none;
  color: transparent;
  display: none !important;
}

body .callout.callout[data-callout~="kanban"] ul {
  display: flex;
  margin-block-start: 5px;
  padding-inline-start: 0;
  text-align: center;
  overflow: auto;
}

body .callout.callout[data-callout~="kanban"] ul.list-view-ul {
  margin-inline-start: unset;
}

body .callout.callout[data-callout~="kanban"] ul li {
  min-width: var(--lane-width);
  border: 0;
  padding: 5px;
  margin: 5px 1px;
  padding-top: 4px;
  background: var(--note, var(--background-primary-alt));
  border-radius: var(--radius-s);
  box-shadow: var(--item-outline), var(--shadow-s);
}

body .callout.callout[data-callout~="kanban"] ul ul {
  flex-direction: column;
  text-align: left;
  overflow: unset;
}

body .callout.callout[data-callout~="kanban"] ul ul li {
  min-width: calc(var(--lane-width) / 2);
  padding: 5px;
  box-shadow: var(--item-outline), var(--shadow-s);
  background: var(--code-bg, var(--background-primary));
}

body
  .callout.callout[data-callout~="kanban"]
  ul
  ul
  li
  :is(img, .internal-embed) {
  margin-bottom: -6px;
}

body
  .callout.callout[data-callout~="kanban"]
  ul.contains-task-list
  .task-list-item-checkbox {
  margin-inline-start: 0;
}

body .callout.callout[data-callout~="kanban"] .task-list-item-checkbox {
  cursor: default;
}

body .callout.callout[data-callout~="kanban"] :is(ul, ol) > li p:first-of-type {
  margin-block-start: 0;
}

/* Timeline */
body .callout.callout[data-callout~="timeline"] {
  --callout-icon: "clock-12";
  --callout-padding: 0;
  --callout-title-padding: 10px;
  --callout-content-padding: 10px;
  --callout-margin: 0;
  --timeline-shadow: var(--outline, var(--background-modifier-box-shadow));
  --callout-content-background: var(
    --callout-background,
    rgb(var(--callout-color), 0.1)
  );
  --timeline-border: rgb(var(--callout-title, var(--callout-color)));
  --micro: 50px;
  --tiny: 100px;
  --small: 200px;
  --small-med: 300px;
  --med-small: 400px;
  --medium: 500px;
  --med-tall: 600px;
  --tall: 700px;
  --c-timeline: calc(50% - 2px);
  background-color: transparent !important;
  margin: 0;
  border: 0;
  clear: both;
  position: unset !important;
}

body .callout.callout[data-callout~="timeline"] .callout-title {
  background: rgba(var(--callout-color), 0.35);
  align-content: center;
  align-items: center;
}

body .callout.callout[data-callout~="timeline"] .callout-title em {
  font-style: normal;
  display: block;
  font-size: 14px;
  line-height: 12px;
  color: rgb(var(--callout-color));
}

body .callout.callout[data-callout~="timeline"] .callout-icon {
  background-color: var(--note, var(--background-primary));
  transform: scale(1.2);
  border-radius: 20px;
  height: var(--icon-size);
  width: var(--icon-size);
}

body .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-l"] {
  border-right: 4px solid var(--timeline-border);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-right: var(--c-timeline);
  z-index: 0;
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-l"]
  > .callout-title,
body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-l"]
  > .callout-content {
  box-shadow: -4px 4px 0 var(--timeline-shadow);
}

body .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-r"] {
  border-left: 4px solid var(--timeline-border);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: var(--c-timeline);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-r"]
  > .callout-title,
body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-r"]
  > .callout-content {
  box-shadow: 4px 4px 0 var(--timeline-shadow);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-l"]
  > .callout-title {
  flex-direction: row-reverse;
  text-align: right;
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-l"]
  > .callout-title
  .callout-icon {
  float: right;
  position: absolute;
  margin-right: -20px;
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-r"]
  > .callout-title
  .callout-icon {
  float: left;
  position: absolute;
  margin-left: -20px;
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-1"]
  .callout-title {
  margin-top: var(--micro);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-2"]
  .callout-title {
  margin-top: var(--tiny);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-3"]
  .callout-title {
  margin-top: var(--small);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-4"]
  .callout-title {
  margin-top: var(--small-med);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-5"]
  .callout-title {
  margin-top: var(--med-small);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-6"]
  .callout-title {
  margin-top: var(--medium);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-7"]
  .callout-title {
  margin-top: 350px;
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-8"]
  .callout-title {
  margin-top: var(--med-tall);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-9"]
  .callout-title {
  margin-top: var(--tall);
}

body
  .callout.callout[data-callout~="timeline"][data-callout-metadata~="t-10"]
  .callout-title {
  margin-top: 750px;
}

body .callout[data-callout="kith"] {
  --callout-icon: user;
  --callout-color: 115, 167, 202;
  border-color: rgba(var(--callout-color), 0.7);
}

body .callout[data-callout="kith"] .callout-title-inner {
  font-weight: unset;
  color: rgb(var(--callout-color));
}

body .callout[data-callout="kith"] .callout-title-inner em {
  display: block;
  font-style: normal;
  font-size: var(--font-small);
  line-height: 12px;
  font-weight: normal;
}

body .callout[data-callout="kith"] .callout-title-inner em em {
  font-style: italic;
  display: inline-block;
}

body .callout[data-callout="kith"][data-callout-metadata="family"] {
  --callout-icon: users;
}

body .callout[data-callout="kith"][data-callout-metadata="friend"] {
  --callout-icon: user-check;
  --callout-color: 115, 202, 144;
}

body .callout[data-callout="kith"][data-callout-metadata="romantic"] {
  --callout-icon: user-plus;
  --callout-color: 202, 115, 180;
}

body .callout[data-callout="kith"][data-callout-metadata="antagonist"] {
  --callout-icon: user-x;
  --callout-color: 241, 74, 74;
}

body .callout[data-callout="checks"] {
  --callout-color: unset;
  --callout-icon: "check-square";
  --callout-padding: 0px;
  --root-list-spacing: 0;
  --list-indent: 0;
}

body .callout[data-callout="checks"] ul.contains-task-list {
  display: flex;
  flex-direction: row;
  padding-inline-start: 0;
}

body .callout[data-callout="checks"] ul.contains-task-list li.task-list-item {
  margin-right: 5px;
}

body .callout[data-callout="checks"] ul.contains-task-list li p {
  margin-block-start: 0;
}

body
  .callout[data-callout="checks"]
  > .callout-content
  > ul:not(.contains-task-list) {
  padding-inline-start: 0;
}

body .callout[data-callout="checks"] ul:not(.contains-task-list) li {
  --bullet: 0;
  --indentation-guide-color: transparent;
  margin-right: 10px;
}

body
  .callout[data-callout="checks"]
  ul:not(.contains-task-list)
  li
  > .list-bullet {
  display: none;
}

body .callout[data-callout="checks"] ul > li .task-list-item-checkbox {
  margin-inline-start: 0 !important;
}

/* Asides */
body .callout[data-callout~="aside"] {
  --callout-icon: message-square;
  --callout-color: "";
  --callout-margin: 0 -1.2em 0 5px;
  background-color: var(--aside-bg, var(--background-secondary));
  box-shadow:
    0.3em 0.3em 0 var(--accent, var(--background-modifier-box-shadow)),
    0 0 0 1px var(--accent, var(--background-modifier-box-shadow));
  float: right;
  position: relative;
  max-width: 400px;
}

body
  .callout[data-callout~="aside"]:not([data-callout-metadata~="no-t"])
  .callout-content {
  padding: 5px 10px;
}

body
  .callout[data-callout~="aside"]:not([data-callout-metadata~="no-t"])
  .callout-content
  p:first-child {
  margin-top: 0;
}

body
  .callout[data-callout~="aside"]:not(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  )
  .callout-title-inner {
  display: none;
}

body
  .callout[data-callout~="aside"]:not(
    [data-callout-metadata~="show-title"],
    [data-callout-metadata~="s-t"]
  )
  .callout-title {
  justify-content: space-between;
}

body .callout[data-callout~="aside"].is-collapsed {
  background-color: transparent;
  box-shadow: none;
  --callout-border-width: 0;
  --callout-padding: 0px 4px;
}

body .callout[data-callout~="aside"].is-collapsed .callout-title-inner {
  display: none;
}

body .callout[data-callout~="aside"].is-collapsed .callout-title {
  justify-content: space-between;
  --callout-title-padding: 0px;
}

body .callout[data-callout~="aside"].is-collapsed .callout-fold {
  margin: 0;
  padding: 0;
  margin-left: -25px;
  visibility: hidden;
}

body .callout[data-callout~="aside"][data-callout-metadata~="clean"] {
  background: transparent;
  box-shadow: none;
}

body .callout[data-callout~="aside"][data-callout-metadata~="tufte"] {
  background: transparent;
  box-shadow: none;
  float: right;
  position: relative;
}

body
  .callout[data-callout~="aside"][data-callout-metadata~="tufte"]:not(
    .is-collapsed
  ) {
  width: 400px;
  margin-right: -25.3em;
}

body
  .callout[data-callout~="aside"][data-callout-metadata~="tufte"]
  .callout-title {
  padding-top: 0;
}

body
  .callout[data-callout~="aside"][data-callout-metadata~="tufte"].is-collapsed
  .callout-title {
  justify-content: unset;
}

body
  .callout[data-callout~="aside"][data-callout-metadata~="tufte"].is-collapsed
  .callout-content {
  display: none;
}

body
  .callout.callout.callout[data-callout~="aside"]:is(
    [data-callout-metadata~="left"],
    [data-callout-metadata~="p+l"]
  ) {
  margin-left: -1.6em;
}

body
  .callout.callout.callout[data-callout~="aside"]:is(
    [data-callout-metadata~="left"],
    [data-callout-metadata~="p+l"]
  ):not(.is-collapsed) {
  margin-right: 10px;
}

body
  .callout.callout.callout[data-callout~="aside"]:is(
    [data-callout-metadata~="left"],
    [data-callout-metadata~="p+l"]
  )[data-callout-metadata~="tufte"]:not(.is-collapsed) {
  margin: unset;
  margin-left: -25em !important;
}

body
  .callout.callout.callout[data-callout~="aside"]:is(
    [data-callout-metadata~="left"],
    [data-callout-metadata~="p+l"]
  )[data-callout-metadata~="tufte"]:not(.is-collapsed)
  .callout-title {
  padding-top: 5px;
  flex-direction: row-reverse;
}

.is-mobile.is-mobile
  .callout[data-callout~="aside"]:is(
    [data-callout-metadata~="left"],
    [data-callout-metadata~="p+l"]
  ) {
  margin-left: 0;
}

.is-live-preview .callout[data-callout~="aside"] {
  float: unset;
}

.is-live-preview.is-live-preview .callout.callout[data-callout~="aside"] {
  margin: 5px;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"] {
  --callout-icon: "";
  --callout-color: var(--color-accent);
  --callout-padding: 20px 30px;
  --callout-border-width: 0 0 0 4px;
  --callout-border-opacity: 0.7;
  display: flex;
  flex-direction: column-reverse;
  box-shadow: var(--shadow-l);
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"]
  > .callout-content {
  overflow: hidden;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"]
  > .callout-content
  p:first-child {
  margin-block-start: 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"]
  > .callout-content
  p:last-child {
  margin-block-end: 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"]
  > .callout-title {
  background: transparent;
  text-align: right;
  padding-top: 5px;
  padding-right: 0;
  justify-content: flex-end;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"]
  > .callout-title
  > .callout-fold {
  padding-inline-end: 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"]
  > .callout-title
  > .callout-icon {
  height: 0;
  width: 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"]
  > .callout-title
  > .callout-title-inner::before {
  content: "~ ";
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="author"] {
  --callout-icon: "";
  --callout-color: var(--color-accent);
  --callout-padding: 20px 30px;
  --callout-border-width: 0 0 0 4px;
  --callout-border-opacity: 0.7;
  display: flex;
  flex-direction: column-reverse;
  box-shadow: var(--shadow-l);
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="author"]
  .callout-content {
  overflow: hidden;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="author"]
  .callout-content
  p:first-child {
  margin-block-start: 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="author"]
  .callout-content
  p:last-child {
  margin-block-end: 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="author"]
  .callout-icon {
  height: 0;
  width: 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="author"]
  .callout-title {
  background: transparent;
  text-align: right;
  padding-top: 5px;
  padding-right: 0;
  display: block;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="author"]
  .callout-title-inner::before {
  content: "~ ";
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="mark"] {
  --callout-content-padding: 0 30px 0 0;
}

body:not(.default-callout-quote, .callout-no-quote)
  .callout.callout[data-callout="quote"][data-callout-metadata~="mark"]
  .callout-content::before {
  display: block;
  float: right;
  content: "”";
  font-family: var(--font);
  color: var(--headers);
  transform: scale(4);
  position: absolute;
  right: 40px;
  margin-top: 20px;
}

.published-container
  .callout.callout[data-callout="quote"][data-callout-metadata~="mark"]
  .callout-content::before {
  right: 65px;
}

body .callout-original .callout,
body
  .callout:is(
    [data-callout-metadata~="callout-original"],
    [data-callout-metadata~="co-o"]
  ) {
  --callout-padding: 0;
  --callout-title-padding: 10px 15px;
  --callout-content-padding: 5px 15px;
  --callout-border-opacity: 1;
  --callout-margin: 5px 5px 5px 0;
  --callout-border-width: 0 0 0 3px;
  background-color: var(--note, var(--background-primary));
  box-shadow: var(--shadow-m);
  margin: var(--callout-margin);
}

body .callout-original .callout .callout-title,
body
  .callout:is(
    [data-callout-metadata~="callout-original"],
    [data-callout-metadata~="co-o"]
  )
  .callout-title {
  background: rgba(var(--callout-color), 0.1);
}

body .callout-block .callout,
body
  .callout:is(
    [data-callout-metadata~="callout-block"],
    [data-callout-metadata~="co-block"]
  ) {
  --callout-padding: 0;
  --callout-content-padding: 0 10px;
  --callout-title-padding: 6px 10px;
  --callout-title-background: var(--callout-color);
  --callout-border-opacity: 0.5;
}

body .callout-block .callout .callout-title,
body
  .callout:is(
    [data-callout-metadata~="callout-block"],
    [data-callout-metadata~="co-block"]
  )
  .callout-title {
  background-color: rgba(
    var(--callout-title-background, var(--callout-color)),
    0.2
  );
}

body
  .callout-block
  .callout.is-collapsible:not(.is-collapsed)
  > .callout-content,
body
  .callout:is(
    [data-callout-metadata~="callout-block"],
    [data-callout-metadata~="co-block"]
  ).is-collapsible:not(.is-collapsed)
  > .callout-content {
  border-bottom: 1px solid
    rgba(var(--callout-color), var(--callout-border-opacity));
}

body .callout-alternate-line .callout,
body .callout.callout[data-callout-metadata~="alt-line"] {
  border: 0;
  background-color: transparent;
  --callout-padding: 0;
  --callout-title-padding: 5px 10px;
  --callout-content-padding: 0px 10px 10px;
}

body .callout-alternate-line .callout .callout-title,
body .callout.callout[data-callout-metadata~="alt-line"] .callout-title {
  background: transparent;
  border-bottom: 2px solid var(--table, var(--background-modifier-border));
}

body .callout-alternate-line .callout .callout-fold,
body .callout.callout[data-callout-metadata~="alt-line"] .callout-fold {
  color: rgb(var(--callout-color));
}

body .callout-alternate-line .callout .callout-content.callout-content,
body
  .callout.callout[data-callout-metadata~="alt-line"]
  .callout-content.callout-content {
  border: 0;
  border-bottom: 1px solid rgba(var(--callout-color), 0.5);
}

body
  .callout-bordered
  .callout:not(
    [data-callout-metadata~="callout-block"],
    [data-callout-metadata~="co-block"],
    [data-callout-metadata~="callout-original"],
    [data-callout-metadata~="co-o"],
    [data-callout-metadata~="alt-line"]
  ):not(
    [data-callout="aside"],
    [data-callout="blank"],
    [data-callout="captions"],
    [data-callout="cards"],
    [data-callout="checks"],
    [data-callout="column"],
    [data-callout="grid"],
    [data-callout="infobox"],
    [data-callout="kanban"],
    [data-callout="metadata"],
    [data-callout="quotes"],
    [data-callout="recite"],
    [data-callout="statblocks"],
    [data-callout="timeline"]
  ),
body .callout[data-callout-metadata~="callout-bordered"] {
  --callout-border-width: 2px;
  --callout-title-padding: 5px;
  --callout-content-padding: 0px 10px 10px;
  --callout-shadow: 0px 0px 0px 1px var(--outline);
}

body
  .callout-bordered
  .callout:not(
    [data-callout-metadata~="callout-block"],
    [data-callout-metadata~="co-block"],
    [data-callout-metadata~="callout-original"],
    [data-callout-metadata~="co-o"],
    [data-callout-metadata~="alt-line"]
  ):not(
    [data-callout="aside"],
    [data-callout="blank"],
    [data-callout="captions"],
    [data-callout="cards"],
    [data-callout="checks"],
    [data-callout="column"],
    [data-callout="grid"],
    [data-callout="infobox"],
    [data-callout="kanban"],
    [data-callout="metadata"],
    [data-callout="quotes"],
    [data-callout="recite"],
    [data-callout="statblocks"],
    [data-callout="timeline"]
  )[data-callout-metadata*="bg-"],
body
  .callout[data-callout-metadata~="callout-bordered"][data-callout-metadata*="bg-"] {
  --callout-border-color: var(--callout-background);
  border-color: var(--callout-border-color);
}

@media print {
  .print.print
    .markdown-preview-view
    .callout:is([data-callout*="cards"], [data-callout*="column"])
    .callout-content {
    display: grid !important;
  }

  .print.print
    .markdown-preview-view
    .callout:is([data-callout*="column"][data-callout-metadata*="flex"])
    .callout-content {
    display: flex !important;
  }
}

.markdown-rendered table tr {
  height: unset;
}

body .callout.callout.callout {
  --callout-blend-mode: normal;
  margin: var(--callout-margin);
  z-index: 1;
  position: relative;
}

.markdown-preview-view .callout {
  --callout-margin: 1em 0;
}

body
  .callouts-outlined
  .callout.callout:is(
    [data-callout="Metadata" i],
    [data-callout="Timeline" i],
    [data-callout="Recite" i],
    [data-callout="Columns" i],
    [data-callout="Infobox" i],
    [data-callout="Quote" i]
  )
  > .callout-title {
  display: flex;
  margin: unset;
  padding: var(--callout-title-padding);
  width: unset;
}

body
  .callouts-outlined
  .callout.callout:is(
    [data-callout="Metadata" i],
    [data-callout="Timeline" i],
    [data-callout="Recite" i],
    [data-callout="Columns" i],
    [data-callout="Infobox" i],
    [data-callout="Quote" i]
  )
  > .callout-title
  > .callout-icon {
  position: relative;
}

body .callout-infobox-table-borders .callout[data-callout~="infobox"] {
  --table-border-color: var(--background-modifier-border);
}

body
  .callout-infobox-table-borders
  .callout[data-callout~="infobox"]
  th:first-child,
body
  .callout-infobox-table-borders
  .callout[data-callout~="infobox"]
  tr
  td:first-child {
  border-left-color: transparent;
}

body
  .callout-infobox-table-borders
  .callout[data-callout~="infobox"]
  th:last-child,
body
  .callout-infobox-table-borders
  .callout[data-callout~="infobox"]
  tr
  td:last-child {
  border-right-color: transparent;
}

/*@settings
name: Callout Adjustments
id: callout-adjustments
settings:
    - 
        id: info-text-SlRvb-callouts
        type: info-text
        title: Callout Adjustments by SlRvb
        description: "[Callout Snippet How-To Guide](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Callout+Adjustments)"
        markdown: true
    -
        title: Callout Styling
        id: callout-style
        type: class-select
        allowEmpty: true
        default: none
        options:
            - 
                label: Original Callout Styling
                value: callout-original
            -
                label: Callout Block Styling
                value: callout-block
            -
                label: Callout Alternate Line Styling
                value: callout-alternate-line
            -
                label: Callout Bordered Styling
                value: callout-bordered
    -
        title: Infobox Add Table Borders
        id: callout-infobox-table-borders
        type: class-toggle
    -
        title: Remove Callout Styling
        description: Remove certain callouts to use your own styling
        id: remove-callout-style
        type: heading
        level: 1
        collapsed: true           
    - 
        title: Remove Metadata Callout Styling
        id: callout-no-metadata
        type: class-toggle
    - 
        title: Remove Quote Callout Styling
        id: callout-no-quote
        type: class-toggle
    #- 
    #    title: Center Callout Titles
    #    id: co-ttl-ctr
    #    type: class-toggle
*/

/*
body blockquote.callout {
  &[data-callout] {
    --color: rgb(var(--callout-color));
    --border: rgb(var(--callout-border-color));
  }

  &.statblocks {
    mix-blend-mode: unset;

    table {
      th,
      td,
      tr {
        min-width: unset;
        padding: unset;
        color: unset;
        border-bottom: unset;
      }

      & > * {
        line-height: unset;
      }
    }

    tbody,
    li,
    p {
      line-height: unset;
    }

    .callout.checks {
      --bg: transparent;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
      margin-bottom: 0;
    }

    blockquote {
      padding: unset;
      margin: unset;
      background-color: unset;
    }
  }
}*/

/* Fix: mirror < checkbox icon (lost during extraction) */
li.task-list-item[data-task="<"]::before {
  transform: scale(-1, 1);
}

:root[saved-theme="dark"]
  body
  li.task-list-item
  input[type="checkbox"]:checked {
  background-color: var(--checkbox-color);
  border-color: var(--checkbox-color);
}

:root[saved-theme="light"]
  body
  li.task-list-item
  input[type="checkbox"]:checked {
  background-color: var(--checkbox-color);
  border-color: var(--checkbox-color);
}

/* Fix: increase title size */
html[saved-theme="dark"] body h1.article-title,
html[saved-theme="light"] body h1.article-title {
  font-size: 2rem;
  background-color: transparent;
}

/* Fix: heading sizing */
html[saved-theme="dark"] body h1,
html[saved-theme="light"] body h1,
html[saved-theme="dark"] body h2,
html[saved-theme="light"] body h2,
html[saved-theme="dark"] body h3,
html[saved-theme="light"] body h3,
html[saved-theme="dark"] body h4,
html[saved-theme="light"] body h4,
html[saved-theme="dark"] body h5,
html[saved-theme="light"] body h5,
html[saved-theme="dark"] body h6,
html[saved-theme="light"] body h6,
html[saved-theme="dark"] body .graph > h3,
html[saved-theme="light"] body .graph > h3,
html[saved-theme="dark"] body .backlinks > h3,
html[saved-theme="light"] body .backlinks > h3,
html[saved-theme="dark"] body button.desktop-explorer h2,
html[saved-theme="light"] body button.desktop-explorer h2 {
  background-color: transparent;
}
`,
};
