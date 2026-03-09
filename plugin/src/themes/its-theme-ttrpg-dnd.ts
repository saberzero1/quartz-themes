import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.ttrpg-dnd",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
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
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
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
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #0e0f15;
  --box-border-m: 3px solid #0e0f15;
  --box-border-s: 1px solid #0e0f15;
  --bttn: #2e4d3c;
  --bullet: "";
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
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #587770;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(199, 87, 92);
  --color-accent-2: rgb(209, 113, 121);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
  --dark-accent: #2e4d3c;
  --dark-sidebar: #1c2f2b;
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
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #2e4d3c;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #0e0f15;
  --file-icon: "";
  --file-icon-color: #aacac9;
  --file-icon-margin: 6px;
  --file-text-color: #dcdedd;
  --flair-background: #0e0f15;
  --flair-color: #dcdedd;
  --folder: #548b67;
  --folder-font: "its";
  --folder-icon: "";
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
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ligatures: none;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-small: .95em;
  --font-smaller: .90em;
  --font-smallest: .85em;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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
  --hr-icon-symbol: "";
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
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
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
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #dcdedd;
  --metadata-label-background-active: #06080c60;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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
  --metadata-title-icon: "";
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
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #45b480;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #06080c60;
  --table-row-alt-background-hover: rgba(60, 168, 122, 0.4);
  --table-row-background-hover: rgba(60, 168, 122, 0.4);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
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
  --th: #2e4d3c;
  --th-text: #e5ebee;
  --theme-rainbow-1: #548b67;
  --theme-rainbow-2: #cc824c;
  --theme-rainbow-3: #c93c3c;
  --theme-rainbow-4: #2b4e41;
  --theme-rainbow-5: #1c2f2b;
  --theme-rainbow-6: #0e0f15;
  --tiny: 100px;
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(14, 15, 21);
  color: rgb(220, 222, 221);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 30, 36);
  color: rgb(220, 222, 221);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 30, 36);
  color: rgb(220, 222, 221);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(14, 15, 21);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(14, 15, 21);
  border-left-color: rgb(14, 15, 21);
  color: rgb(220, 222, 221);
}

body div#quartz-root {
  background-color: rgb(26, 30, 36);
  color: rgb(220, 222, 221);
}`,
    typography: `body .page article p > b, b {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

body .page article p > em, em {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

body .page article p > i, i {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

body .page article p > strong, strong {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

body .text-highlight {
  background-color: rgba(66, 157, 104, 0.2);
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

body del {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration: line-through 1px rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(170, 202, 201);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(170, 202, 201) none 0px;
  text-decoration: rgb(170, 202, 201);
  text-decoration-color: rgb(170, 202, 201);
}`,
    links: `body a.external, footer a {
  color: rgb(97, 239, 201);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(97, 239, 201) none 0px;
  text-decoration: rgb(97, 239, 201);
  text-decoration-color: rgb(97, 239, 201);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 239, 201);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(97, 239, 201) none 0px;
  text-decoration: rgb(97, 239, 201);
  text-decoration-color: rgb(97, 239, 201);
}

body a.internal.broken {
  color: rgb(88, 119, 112);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(88, 119, 112) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(220, 222, 221);
}

body dt {
  color: rgb(220, 222, 221);
}

body ol > li {
  color: rgb(220, 222, 221);
}

body ol.overflow {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

body ul > li {
  color: rgb(220, 222, 221);
}

body ul.overflow {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(14, 15, 21);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

body table {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(6, 8, 12, 0.376);
}

body td {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(26, 30, 36);
  border-right-color: rgb(26, 30, 36);
  border-top-color: rgb(26, 30, 36);
  color: rgb(220, 222, 221);
}

body th {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(26, 30, 36);
  border-right-color: rgb(26, 30, 36);
  border-top-color: rgb(26, 30, 36);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

body tr {
  background-color: rgb(46, 77, 60);
}`,
    code: `body code {
  border-bottom-color: rgb(113, 223, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 223, 172);
  border-right-color: rgb(113, 223, 172);
  border-top-color: rgb(113, 223, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(113, 223, 172);
  font-family: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(34, 46, 49);
  border-bottom-color: rgb(44, 56, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(34, 46, 49);
  border-bottom-color: rgb(44, 56, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

body pre > code, pre:has(> code) {
  background-color: rgb(34, 46, 49);
  border-bottom-color: rgb(44, 56, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(34, 46, 49);
  border-bottom-color: rgb(44, 56, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

body figcaption {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

body img {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

body video {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}`,
    embeds: `body .file-embed {
  background-color: rgb(14, 15, 21);
  border-bottom-color: rgb(170, 202, 201);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 202, 201);
  border-right-color: rgb(170, 202, 201);
  border-top-color: rgb(170, 202, 201);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(220, 222, 221);
  color: rgb(220, 222, 221);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(46, 77, 60);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(46, 77, 60);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(88, 119, 112);
  text-decoration: rgb(88, 119, 112);
  text-decoration-color: rgb(88, 119, 112);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(194, 42, 42);
  text-decoration: rgb(194, 42, 42);
  text-decoration-color: rgb(194, 42, 42);
}

body li.task-list-item[data-task='*'] {
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

body li.task-list-item[data-task='-'] {
  color: rgb(62, 69, 82);
  text-decoration: rgb(62, 69, 82);
  text-decoration-color: rgb(62, 69, 82);
}

body li.task-list-item[data-task='/'] {
  color: rgb(170, 202, 201);
  text-decoration: rgb(170, 202, 201);
  text-decoration-color: rgb(170, 202, 201);
}

body li.task-list-item[data-task='>'] {
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

body li.task-list-item[data-task='?'] {
  color: rgb(253, 175, 0);
  text-decoration: rgb(253, 175, 0);
  text-decoration-color: rgb(253, 175, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(82, 139, 212);
  text-decoration: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

body li.task-list-item[data-task='S'] {
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

body li.task-list-item[data-task='b'] {
  color: rgb(230, 129, 63);
  text-decoration: rgb(230, 129, 63);
  text-decoration-color: rgb(230, 129, 63);
}

body li.task-list-item[data-task='c'] {
  color: rgb(149, 233, 238);
  text-decoration: rgb(149, 233, 238);
  text-decoration-color: rgb(149, 233, 238);
}

body li.task-list-item[data-task='d'] {
  color: rgb(82, 139, 212);
  text-decoration: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

body li.task-list-item[data-task='f'] {
  color: rgb(133, 91, 65);
  text-decoration: rgb(133, 91, 65);
  text-decoration-color: rgb(133, 91, 65);
}

body li.task-list-item[data-task='i'] {
  color: rgb(231, 231, 171);
  text-decoration: rgb(231, 231, 171);
  text-decoration-color: rgb(231, 231, 171);
}

body li.task-list-item[data-task='k'] {
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

body li.task-list-item[data-task='l'] {
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body li.task-list-item[data-task='u'] {
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

body li.task-list-item[data-task='w'] {
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  --callout-color: rgb(186, 64, 64);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(220, 222, 221);
  border-left-width: 4px;
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(6, 8, 12, 0.376);
  border-bottom-color: rgb(44, 56, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 30, 36);
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
  box-shadow: rgb(14, 15, 21) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(220, 222, 221) none 0px;
  text-decoration: rgb(220, 222, 221);
  text-decoration-color: rgb(220, 222, 221);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 222, 221);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 222, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(220, 222, 221);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 128, 0, 0.4);
  color: rgb(220, 222, 221);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 128, 0, 0.4);
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 128, 0, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 222, 221);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(46, 77, 60);
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

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(62, 178, 129);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

body h2 {
  color: rgb(244, 164, 96);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

body h2.page-title, h2.page-title a {
  color: rgb(62, 178, 129);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

body h3 {
  color: rgb(201, 60, 60);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

body h4 {
  color: rgb(62, 178, 129);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

body h5 {
  color: rgb(62, 178, 129);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

body h6 {
  color: rgb(62, 178, 129);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

body hr {
  border-bottom-color: rgb(14, 15, 21);
  border-left-color: rgb(14, 15, 21);
  border-right-color: rgb(14, 15, 21);
  border-right-width: 2px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 16px;
  padding-right: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 30, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 30, 36);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(220, 222, 221);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(220, 222, 221);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(220, 222, 221);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(46, 77, 60);
  border-bottom-color: rgb(229, 235, 238);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(229, 235, 238);
  border-right-color: rgb(229, 235, 238);
  border-top-color: rgb(229, 235, 238);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(229, 235, 238);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(170, 202, 201);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 202, 201);
  border-right-color: rgb(170, 202, 201);
  border-top-color: rgb(170, 202, 201);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 202, 201);
}`,
    footer: `body footer {
  background-color: rgb(14, 15, 21);
  border-bottom-color: rgb(84, 139, 103);
  border-left-color: rgb(84, 139, 103);
  border-right-color: rgb(84, 139, 103);
  border-top-color: rgb(84, 139, 103);
  border-top-left-radius: 0px;
  color: rgb(170, 202, 201);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(170, 202, 201);
  text-decoration: rgb(170, 202, 201);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(220, 222, 221);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

body li.section-li > .section .meta {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(220, 222, 221);
  text-decoration: rgb(220, 222, 221);
}

body ul.section-ul {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(170, 202, 201);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 202, 201);
  border-right-color: rgb(170, 202, 201);
  border-top-color: rgb(170, 202, 201);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 202, 201);
}

body .darkmode svg {
  color: rgb(170, 202, 201);
  stroke: rgb(170, 202, 201);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(88, 119, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(88, 119, 112);
  border-right-color: rgb(88, 119, 112);
  border-top-color: rgb(88, 119, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(88, 119, 112);
}

body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
  color: rgb(220, 222, 221);
}

body .metadata {
  border-bottom-color: rgb(44, 56, 54);
  border-left-color: rgb(44, 56, 54);
  border-right-color: rgb(44, 56, 54);
  border-top-color: rgb(44, 56, 54);
  color: rgb(170, 202, 201);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(170, 202, 201);
  border-left-color: rgb(170, 202, 201);
  border-right-color: rgb(170, 202, 201);
  border-top-color: rgb(170, 202, 201);
  color: rgb(170, 202, 201);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(14, 15, 21);
}

body .page-header h2.page-title {
  color: rgb(220, 222, 221);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(220, 222, 221);
  text-decoration: underline dotted rgb(220, 222, 221);
}

body details {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

body input[type=text] {
  border-bottom-color: rgb(170, 202, 201);
  border-left-color: rgb(170, 202, 201);
  border-right-color: rgb(170, 202, 201);
  border-top-color: rgb(170, 202, 201);
  color: rgb(170, 202, 201);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(34, 46, 49);
  border-bottom-color: rgb(113, 223, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 223, 172);
  border-right-color: rgb(113, 223, 172);
  border-top-color: rgb(113, 223, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(14, 15, 21) 0px 2px 0px 0px;
  color: rgb(113, 223, 172);
  font-family: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(220, 222, 221);
  border-left-color: rgb(220, 222, 221);
  border-right-color: rgb(220, 222, 221);
  border-top-color: rgb(220, 222, 221);
}

body sub {
  color: rgb(220, 222, 221);
}

body summary {
  color: rgb(220, 222, 221);
}

body sup {
  color: rgb(220, 222, 221);
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
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
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
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #cbe2d5;
  --box-border-m: 3px solid #cbe2d5;
  --box-border-s: 1px solid #cbe2d5;
  --bttn: #0e934c;
  --bullet: "";
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
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #91c1ad;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(194, 76, 78);
  --color-accent-2: rgb(199, 87, 92);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
  --dark-accent: #5a8d71;
  --dark-sidebar: #f1f5ff;
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
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #5a8d71;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #dfefe6;
  --file-icon: "";
  --file-icon-color: #91c1ad;
  --file-icon-margin: 6px;
  --file-text-color: #697580;
  --flair-background: #dfefe6;
  --flair-color: #697580;
  --folder: #64c9a3;
  --folder-font: "its";
  --folder-icon: "";
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
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ligatures: none;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-small: .95em;
  --font-smaller: .90em;
  --font-smallest: .85em;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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
  --hr-icon-symbol: "";
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
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
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
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #697580;
  --metadata-label-background-active: #d0ddef62;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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
  --metadata-title-icon: "";
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
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #ac7c10;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #d0ddef62;
  --table-row-alt-background-hover: rgba(60, 168, 122, 0.4);
  --table-row-background-hover: rgba(60, 168, 122, 0.4);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
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
  --th: #549f54;
  --th-text: #e5ebee;
  --theme-rainbow-1: #79c78e;
  --theme-rainbow-2: #cca04c;
  --theme-rainbow-3: #c93c3c;
  --theme-rainbow-4: #0e934c;
  --theme-rainbow-5: #35ad76;
  --theme-rainbow-6: #91c1ad;
  --tiny: 100px;
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(223, 239, 230);
  color: rgb(105, 117, 128);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(248, 251, 255);
  color: rgb(105, 117, 128);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 251, 255);
  color: rgb(105, 117, 128);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(223, 239, 230);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(223, 239, 230);
  border-left-color: rgb(223, 239, 230);
  color: rgb(105, 117, 128);
}

body div#quartz-root {
  background-color: rgb(248, 251, 255);
  color: rgb(105, 117, 128);
}`,
    typography: `body .page article p > b, b {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

body .page article p > em, em {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

body .page article p > i, i {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

body .page article p > strong, strong {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

body .text-highlight {
  background-color: rgba(66, 157, 104, 0.2);
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

body del {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: line-through 1px rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(82, 173, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(82, 173, 103) none 0px;
  text-decoration: rgb(82, 173, 103);
  text-decoration-color: rgb(82, 173, 103);
}`,
    links: `body a.external, footer a {
  color: rgb(53, 190, 137);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(53, 190, 137) none 0px;
  text-decoration: rgb(53, 190, 137);
  text-decoration-color: rgb(53, 190, 137);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(53, 190, 137);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(53, 190, 137) none 0px;
  text-decoration: rgb(53, 190, 137);
  text-decoration-color: rgb(53, 190, 137);
}

body a.internal.broken {
  color: rgb(145, 193, 173);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(145, 193, 173) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(105, 117, 128);
}

body dt {
  color: rgb(105, 117, 128);
}

body ol > li {
  color: rgb(105, 117, 128);
}

body ol.overflow {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

body ul > li {
  color: rgb(105, 117, 128);
}

body ul.overflow {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(241, 245, 255);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

body table {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(208, 221, 239, 0.384);
}

body td {
  border-bottom-color: rgb(248, 251, 255);
  border-left-color: rgb(248, 251, 255);
  border-right-color: rgb(248, 251, 255);
  border-top-color: rgb(248, 251, 255);
  color: rgb(105, 117, 128);
}

body th {
  border-bottom-color: rgb(248, 251, 255);
  border-left-color: rgb(248, 251, 255);
  border-right-color: rgb(248, 251, 255);
  border-top-color: rgb(248, 251, 255);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

body tr {
  background-color: rgb(84, 159, 84);
}`,
    code: `body code {
  border-bottom-color: rgb(53, 173, 118);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(53, 173, 118);
  border-right-color: rgb(53, 173, 118);
  border-top-color: rgb(53, 173, 118);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(53, 173, 118);
  font-family: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

body pre > code, pre:has(> code) {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

body figcaption {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

body img {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

body video {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}`,
    embeds: `body .file-embed {
  background-color: rgb(223, 239, 230);
  border-bottom-color: rgb(82, 173, 103);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(82, 173, 103);
  border-right-color: rgb(82, 173, 103);
  border-top-color: rgb(82, 173, 103);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(105, 117, 128);
  color: rgb(105, 117, 128);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(90, 141, 113);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(90, 141, 113);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(145, 193, 173);
  text-decoration: rgb(145, 193, 173);
  text-decoration-color: rgb(145, 193, 173);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(219, 1, 1);
  text-decoration: rgb(219, 1, 1);
  text-decoration-color: rgb(219, 1, 1);
}

body li.task-list-item[data-task='*'] {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

body li.task-list-item[data-task='/'] {
  color: rgb(82, 173, 103);
  text-decoration: rgb(82, 173, 103);
  text-decoration-color: rgb(82, 173, 103);
}

body li.task-list-item[data-task='>'] {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

body li.task-list-item[data-task='?'] {
  color: rgb(253, 175, 0);
  text-decoration: rgb(253, 175, 0);
  text-decoration-color: rgb(253, 175, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(82, 139, 212);
  text-decoration: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

body li.task-list-item[data-task='S'] {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

body li.task-list-item[data-task='b'] {
  color: rgb(251, 146, 76);
  text-decoration: rgb(251, 146, 76);
  text-decoration-color: rgb(251, 146, 76);
}

body li.task-list-item[data-task='c'] {
  color: rgb(149, 217, 238);
  text-decoration: rgb(149, 217, 238);
  text-decoration-color: rgb(149, 217, 238);
}

body li.task-list-item[data-task='d'] {
  color: rgb(82, 139, 212);
  text-decoration: rgb(82, 139, 212);
  text-decoration-color: rgb(82, 139, 212);
}

body li.task-list-item[data-task='f'] {
  color: rgb(161, 106, 73);
  text-decoration: rgb(161, 106, 73);
  text-decoration-color: rgb(161, 106, 73);
}

body li.task-list-item[data-task='i'] {
  color: rgb(202, 199, 0);
  text-decoration: rgb(202, 199, 0);
  text-decoration-color: rgb(202, 199, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

body li.task-list-item[data-task='l'] {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

body li.task-list-item[data-task='u'] {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

body li.task-list-item[data-task='w'] {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  --callout-color: rgb(186, 64, 64);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(105, 117, 128);
  border-left-width: 4px;
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(248, 251, 255);
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
  box-shadow: rgb(203, 226, 213) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(105, 117, 128);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(105, 117, 128);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 128, 0, 0.2);
  color: rgb(105, 117, 128);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 251, 255);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 128, 0, 0.2);
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 128, 0, 0.2);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(86, 198, 129);
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

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(14, 147, 76);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

body h2 {
  color: rgb(244, 164, 96);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

body h2.page-title, h2.page-title a {
  color: rgb(14, 147, 76);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

body h3 {
  color: rgb(201, 60, 60);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

body h4 {
  color: rgb(14, 147, 76);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

body h5 {
  color: rgb(14, 147, 76);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

body h6 {
  color: rgb(14, 147, 76);
  font-family: "Cinzel Decorative", Amarante, "Oleo Script", "Lobster 1.3", Inter;
}

body hr {
  border-bottom-color: rgb(223, 239, 230);
  border-left-color: rgb(223, 239, 230);
  border-right-color: rgb(223, 239, 230);
  border-right-width: 2px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 16px;
  padding-right: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
}

body ::-webkit-scrollbar-corner {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
}

body ::-webkit-scrollbar-track {
  background: rgb(248, 251, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 251, 255);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(105, 117, 128);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(105, 117, 128);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(105, 117, 128);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(90, 141, 113);
  border-bottom-color: rgb(229, 235, 238);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(229, 235, 238);
  border-right-color: rgb(229, 235, 238);
  border-top-color: rgb(229, 235, 238);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(229, 235, 238);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(82, 173, 103);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(82, 173, 103);
  border-right-color: rgb(82, 173, 103);
  border-top-color: rgb(82, 173, 103);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(82, 173, 103);
}`,
    footer: `body footer {
  background-color: rgb(223, 239, 230);
  border-bottom-color: rgb(121, 199, 142);
  border-left-color: rgb(121, 199, 142);
  border-right-color: rgb(121, 199, 142);
  border-top-color: rgb(121, 199, 142);
  border-top-left-radius: 0px;
  color: rgb(82, 173, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(82, 173, 103);
  text-decoration: rgb(82, 173, 103);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(105, 117, 128);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

body li.section-li > .section .meta {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
}

body ul.section-ul {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(82, 173, 103);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(82, 173, 103);
  border-right-color: rgb(82, 173, 103);
  border-top-color: rgb(82, 173, 103);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(82, 173, 103);
}

body .darkmode svg {
  color: rgb(82, 173, 103);
  stroke: rgb(82, 173, 103);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(145, 193, 173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(145, 193, 173);
  border-right-color: rgb(145, 193, 173);
  border-top-color: rgb(145, 193, 173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(145, 193, 173);
}

body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(105, 117, 128);
}

body .metadata {
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(82, 173, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(82, 173, 103);
  border-left-color: rgb(82, 173, 103);
  border-right-color: rgb(82, 173, 103);
  border-top-color: rgb(82, 173, 103);
  color: rgb(82, 173, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(223, 239, 230);
}

body .page-header h2.page-title {
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(105, 117, 128);
  text-decoration: underline dotted rgb(105, 117, 128);
}

body details {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

body input[type=text] {
  border-bottom-color: rgb(82, 173, 103);
  border-left-color: rgb(82, 173, 103);
  border-right-color: rgb(82, 173, 103);
  border-top-color: rgb(82, 173, 103);
  color: rgb(82, 173, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(53, 173, 118);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(53, 173, 118);
  border-right-color: rgb(53, 173, 118);
  border-top-color: rgb(53, 173, 118);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(203, 226, 213) 0px 2px 0px 0px;
  color: rgb(53, 173, 118);
  font-family: "Fira Code Medium", "Recursive Mono Linear Static Medium", "Source Code Pro", Inter;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

body sub {
  color: rgb(105, 117, 128);
}

body summary {
  color: rgb(105, 117, 128);
}

body sup {
  color: rgb(105, 117, 128);
}`,
  },
};
