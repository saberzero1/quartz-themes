import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.drowned",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #378876;
  --accent-color: 55, 136, 118;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #5cb2d6;
  --accent2-lite: #49d8e2;
  --aside-bg: #11151d;
  --background-modifier-active-hover: #216565;
  --background-modifier-border: #2b4448;
  --background-modifier-border-focus: #378876;
  --background-modifier-border-hover: #1e2f33;
  --background-modifier-cover: rgba(6, 12, 12, 0.38);
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: rgba(6, 12, 12, 0.38);
  --background-modifier-form-field-hover: rgba(6, 12, 12, 0.38);
  --background-modifier-hover: rgba(52, 237, 181, 0.13);
  --background-modifier-message: #216565;
  --background-modifier-success: #32603e;
  --background-primary: #1a1e24;
  --background-primary-alt: #103F3D;
  --background-secondary: #1a1e24;
  --background-secondary-alt: #0b0f13;
  --bases-cards-background: #1a1e24;
  --bases-cards-cover-background: #103F3D;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #2b4448;
  --bases-cards-shadow-hover: 0 0 0 1px #1e2f33;
  --bases-embed-border-color: #2b4448;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #97a1b9;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #1a1e24;
  --bases-table-cell-background-active: #1a1e24;
  --bases-table-cell-background-disabled: #103F3D;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #378876;
  --bases-table-cell-shadow-focus: 0 0 0 2px #216565;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #103F3D;
  --bases-table-header-background: #1a1e24;
  --bases-table-header-background-hover: rgba(52, 237, 181, 0.13);
  --bases-table-header-color: #97a1b9;
  --bases-table-row-background-hover: rgba(60, 168, 131, 0.25);
  --bases-table-summary-background: #1a1e24;
  --bases-table-summary-background-hover: rgba(52, 237, 181, 0.13);
  --bg: #1e2f33;
  --blockquote-background-color: #0d1014;
  --blockquote-border-color: #1e2f33;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #bccad8;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #0b0f13 65%, transparent) linear-gradient(#0b0f13, color-mix(in srgb, #0b0f13 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #0b0f13;
  --box-border-m: 3px solid #0b0f13;
  --box-border-s: 1px solid #0b0f13;
  --bttn: #216565;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #216565;
  --button-background-hover: #2b5b77;
  --button-border: #216565;
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
  --caret-color: #bccad8;
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
  --checkbox-border-color: #378876;
  --checkbox-border-color-hover: #216565;
  --checkbox-color: #378876;
  --checkbox-color-hover: #216565;
  --checkbox-marker-color: #1a1e24;
  --checkbox-radius: 0;
  --checklist-done-color: #2b5b77;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #232831;
  --code-bg: #232831;
  --code-border-color: #2b4448;
  --code-bracket-background: rgba(52, 237, 181, 0.13);
  --code-comment: #4e5b6f;
  --code-normal: #72cdd0;
  --code-punctuation: #97a1b9;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #0b0f13;
  --code-size: .90em;
  --code-text: #72cdd0;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #2b5b77;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(199, 87, 92);
  --color-accent-2: rgb(209, 113, 121);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark: var(--text-normal);
  --dark-accent: #216565;
  --dark-sidebar: #0d1014;
  --darkgray: var(--text-normal);
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(55, 136, 118, 0.1);
  --dataview-th-background: #0b0f13;
  --dataview-th-border-bottom: 2px solid #399F94;
  --dataview-th-color: #399F94;
  --dataview-th-count-color: #399F94;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #103F3D;
  --divider-color: #0b0f13;
  --divider-color-hover: #378876;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #216565;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #06080c60;
  --dropdown-background: #0b0f13;
  --dropdown-background-hover: #2b5b77;
  --embed-bg: #0d1014;
  --embed-block-shadow-hover: 2px 2px 0 #0b0f13;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #0b0f13;
  --embed-border-color: transparent;
  --embed-border-color-hover: #0b0f13;
  --embed-border-left: 2px solid #399F94;
  --embed-border-left-color: #399F94;
  --embed-border-left-color-hover: #399F94;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #0b0f13;
  --embed-border-start: 2px solid #216565;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #0b0f13;
  --embed-border-type: solid;
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
  --fg: #cfd7dd;
  --file-font: "its";
  --file-header-background: #1a1e24;
  --file-header-background-focused: #1a1e24;
  --file-header-breadcrumb-color: #2b5b77;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #2b5b77;
  --file-header-color-active: #bccad8;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #216565;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #0b0f13;
  --file-icon: "";
  --file-icon-color: #204c5d;
  --file-icon-margin: 6px;
  --file-text-color: #bccad8;
  --flair-background: #0b0f13;
  --flair-color: #bccad8;
  --folder: #399F94;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #399F94;
  --folder-icon-open-color: #58c8e0;
  --folder-open: #58c8e0;
  --folder-open-text-color: #bccad8;
  --folder-text-color: #71a6b7;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ligatures: none;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-small: .95em;
  --font-smaller: .90em;
  --font-smallest: .85em;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ui-small: 14px;
  --font-ui-smaller: 13.5px;
  --footnote: #63778f;
  --footnote-divider-color: #2b4448;
  --footnote-id-color: #97a1b9;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: rgba(6, 12, 12, 0.38);
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #2b5b77;
  --graph-arrow: #97a1b9;
  --graph-background: #1a1e24;
  --graph-bg: #1a1e24;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #6CE0D3;
  --graph-focused: #49d8e2;
  --graph-img: #5cb2d6;
  --graph-line: #04303d;
  --graph-line-hover: #378876;
  --graph-lines: #04303d;
  --graph-node: #bccad8;
  --graph-node-attachment: #5cb2d6;
  --graph-node-focused: #49d8e2;
  --graph-node-hover-fill: #6CE0D3;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #216565;
  --graph-node-unresolved: #2b5b77;
  --graph-tag: #216565;
  --graph-text: #bccad8;
  --gray: var(--text-muted);
  --h1-background: transparent;
  --h1-border-color: #399F94;
  --h1-border-left-color: #2b4448;
  --h1-border-line-color: #2b4448;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #2b4448;
  --h1-border-width: 0;
  --h1-color: #399F94;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #378876;
  --h2-border-left-color: #2b4448;
  --h2-border-line-color: #2b4448;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #2b4448;
  --h2-border-width: 0;
  --h2-color: #399F94;
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #2b5b77;
  --h3-border-left-color: #2b4448;
  --h3-border-line-color: #2b4448;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #2b4448;
  --h3-border-width: 0;
  --h3-color: #399F94;
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #204c5d;
  --h4-border-left-color: #2b4448;
  --h4-border-line-color: #2b4448;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #2b4448;
  --h4-border-width: 0;
  --h4-color: #399F94;
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #2b4448;
  --h5-border-left-color: #2b4448;
  --h5-border-line-color: #2b4448;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #2b4448;
  --h5-border-width: 0;
  --h5-color: #399F94;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #232831;
  --h6-border-left-color: #2b4448;
  --h6-border-line-color: #2b4448;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: #2b4448;
  --h6-border-width: 0;
  --h6-color: #399F94;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #399F94;
  --he-text-on-accent-inactive: #bccad8;
  --he-title-bar-active-action: #6CE0D3;
  --he-title-bar-active-bg: #0d1014;
  --he-title-bar-active-fg: #bccad8;
  --he-title-bar-active-pinned-bg: #1a1e24;
  --he-title-bar-inactive-action: #97a1b9;
  --he-title-bar-inactive-bg: #1a1e24;
  --he-title-bar-inactive-fg: #2b5b77;
  --he-title-bar-inactive-pinned-bg: #1a1e24;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #2b4448;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 700;
  --headerFont: var(--font-text);
  --headers: #399F94;
  --heading-formatting: #2b5b77;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(60, 168, 131, 0.25);
  --hr: #0f465d;
  --hr-alignment: -50%, -50%;
  --hr-color: #0f465d;
  --hr-icon-background: #1a1e24;
  --hr-icon-color: #399F94;
  --hr-icon-font: "Material Icons Sharp";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(115, 253, 190, 0.25);
  --hvr-active: rgba(52, 237, 181, 0.13);
  --hvr2: rgba(60, 168, 131, 0.25);
  --i-at: #5EBFA9;
  --icon-btn-radius: 0;
  --icon-color: #97a1b9;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #bccad8;
  --icon-color-hover: #bccad8;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #0b0f13;
  --illusion-h1-background: #399F94;
  --illusion-h2-background: #378876;
  --illusion-h3-background: #2b5b77;
  --illusion-h4-background: #204c5d;
  --illusion-h5-background: #2b4448;
  --illusion-h6-background: #232831;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: rgba(6, 12, 12, 0.38);
  --image-border-color: #2b4448;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #2b5b77;
  --indentation-guide-color: #1e4765;
  --indentation-guide-color-active: #378876;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #1e4765;
  --initiative-xp: sandybrown;
  --inline-title-color: #399F94;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: rgba(0, 0, 0, 0.3);
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #0b0f13;
  --input-shadow-hover: 3px 3px 0 #0b0f13;
  --interactive-accent: #216565;
  --interactive-accent-hover: #2b5b77;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #2b5b77;
  --interactive-normal: #0b0f13;
  --its: "its";
  --kanban-button-background: #232831;
  --kanban-button-shadow: 2px 2px 0 #0b0f13;
  --kanban-card-border: 2px solid #0b0f13;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #1a1e24;
  --kanban-card-text-color: #bccad8;
  --kanban-card-title-background: #1a1e24;
  --kanban-card-title-border: 0 1px 0 #0b0f13;
  --kanban-lane-background: #232831;
  --kanban-lane-border: 3px solid #0b0f13;
  --kanban-lane-box-shadow: 2px 2px 0 #0b0f13;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #49d8e2;
  --kanban-tag-background: #1A5753;
  --latex-color: #6CE0D3;
  --latex-format-color: #2b5b77;
  --latex-syntax-color: #97a1b9;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-tight: 1.3em;
  --lines: #1e4765;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #49d8e2;
  --link-color-hover: #6CE0D3;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #49d8e2;
  --link-external-color-hover: #5cb2d6;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #2b5b77;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #2b4448;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #1e4765;
  --list-color-2: #1e4765;
  --list-color-3: #1e4765;
  --list-color-4: #1e4765;
  --list-color-5: #1e4765;
  --list-color-6: #1e4765;
  --list-indent: 25px;
  --list-marker-color: #378876;
  --list-marker-color-collapsed: #2b5b77;
  --list-marker-color-hover: #97a1b9;
  --list-marker-color-other: #5cb2d6;
  --list-marker-min-width: 0;
  --list-numbered-color: #6CE0D3;
  --list-spacing: 1px;
  --lite-accent: #6CE0D3;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #1a1e24;
  --menu-border-color: #1e2f33;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #0b0f13;
  --message-border-color: #0b0f13;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #0b0f13;
  --message-color: #e5ebee;
  --metadata-border-color: #2b4448;
  --metadata-button-text-color: #2b5b77;
  --metadata-divider-color: #2b4448;
  --metadata-icon-color: #97a1b9;
  --metadata-input-background-active: rgba(6, 12, 12, 0.38);
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #bccad8;
  --metadata-label-background-active: rgba(6, 12, 12, 0.38);
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #97a1b9;
  --metadata-label-text-color-hover: #97a1b9;
  --metadata-property-background-active: rgba(52, 237, 181, 0.13);
  --metadata-property-box-shadow-focus: 0 0 0 2px #378876;
  --metadata-property-box-shadow-hover: 0 0 0 1px #1e2f33;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #e5ebee;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #97a1b9;
  --metadata-title-icon: "";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #1a1e24;
  --modal-border-color: #0b0f13;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: rgba(6, 12, 12, 0.38);
  --modal-radius: 0;
  --modal-sidebar-background: #0d1014;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #bccad8;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #97a1b9;
  --nav-heading-color-hover: #bccad8;
  --nav-indentation-guide-color: #1e4765;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #216565;
  --nav-item-background-border-color-hover: #216565;
  --nav-item-background-hover: #216565;
  --nav-item-background-selected: rgba(115, 253, 190, 0.25);
  --nav-item-border-color: #6CE0D3;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #bccad8;
  --nav-item-color-active: #e5ebee;
  --nav-item-color-highlighted: #e5ebee;
  --nav-item-color-hover: #e5ebee;
  --nav-item-color-selected: #bccad8;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 0;
  --nav-item-size: 14px;
  --nav-item-weight: 500;
  --nav-item-weight-active: 700;
  --nav-item-weight-hover: 700;
  --nav-item-white-space: wrap;
  --nav-tag-color: #4e5b6f;
  --nav-tag-color-active: #97a1b9;
  --nav-tag-color-hover: #97a1b9;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #1a1e24;
  --note-rgb: 26, 30, 36;
  --note-title-border-color: #399F94;
  --outer-bar: #0b0f13;
  --outline: #0b0f13;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #1a1e24;
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #2b4448;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #2b4448;
  --pill-border-color: #2b4448;
  --pill-border-color-hover: #1e2f33;
  --pill-color: #97a1b9;
  --pill-color-hover: #bccad8;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #49d8e2;
  --pill-radius: 0;
  --popover-background: #1a1e24;
  --popover-border: 3px solid #0b0f13;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #378876;
  --progress-bg: #1e2f33;
  --prompt-background: #1a1e24;
  --prompt-border-color: #0b0f13;
  --prompt-border-width: 3px;
  --r-heading-color: #399F94;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #6CE0D3;
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
  --raised-background: color-mix(in srgb, #0b0f13 65%, transparent) linear-gradient(#0b0f13, color-mix(in srgb, #0b0f13 65%, transparent));
  --ribbon-background: #0b0f13;
  --ribbon-background-collapsed: #1a1e24;
  --ribbon-border-color: #0b0f13;
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
  --scrollbar-active-thumb-bg: #6CE0D3;
  --scrollbar-bg: #1e2f33;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #1A5753;
  --scrollbar-track-bg: #1a1e24;
  --search-border: 2px solid #0b0f13;
  --search-box-shadow: 2px 2px 0 #0b0f13;
  --search-clear-button-color: #97a1b9;
  --search-icon-color: #97a1b9;
  --search-result-background: #1a1e24;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #bccad8;
  --setting-item-alt-background-hover: rgba(6, 12, 12, 0.38);
  --setting-item-background-hover: rgba(115, 253, 190, 0.25);
  --setting-item-border-color: #2b4448;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #399F94;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: rgba(6, 12, 12, 0.38);
  --setting-items-background: transparent;
  --setting-items-border-color: #2b4448;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #0b0f13;
  --shadow-m: 3px 3px 0 #0b0f13;
  --shadow-ml: 4px 4px 0 #0b0f13;
  --shadow-s: 2px 2px 0 #0b0f13;
  --side-bar: #1a1e24;
  --side-bar-bg: #0b0f13;
  --sidebar-icon-color: #bccad8;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #216565;
  --sidebar-tab-background-color-hover: #378876;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #216565;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #1a1e24;
  --slider-thumb-border-color: #1e2f33;
  --slider-thumb-radius: 0;
  --slider-track-background: #2b4448;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #97a1b9;
  --statblock-alt: rgba(6, 12, 12, 0.38);
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #1a1e24;
  --statblock-bar-border-color: #378876;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #378876;
  --statblock-border-color: #1e4765;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #0b0f13;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #bccad8;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #399F94;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #0f465d;
  --statblock-primary-color: #bccad8;
  --statblock-property-font-color: #bccad8;
  --statblock-property-name-font-color: #399F94;
  --statblock-rule-color: #378876;
  --statblock-section-heading-border-color: #2b4448;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #63778f;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #0b0f13;
  --status-bar-border-color: #378876;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #97a1b9;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #216565;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --success-bg: #32603e;
  --suggestion-background: #1a1e24;
  --tab-background: #0b0f13;
  --tab-background-active: #1a1e24;
  --tab-container-background: #0b0f13;
  --tab-curve: 0;
  --tab-divider-color: #0f465d;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #378876;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stack-shadow: rgba(0, 74, 63, 0.08);
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #06080c60;
  --tab-stacked-shadow-color: #06080c60;
  --tab-switcher-background: #1a1e24;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1e24, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #0b0f13;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #0b0f13;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #6CE0D3, 5px 5px 0 #0b0f13;
  --tab-text-color: #2b5b77;
  --tab-text-color-active: #bccad8;
  --tab-text-color-focused: #2b5b77;
  --tab-text-color-focused-active: #bccad8;
  --tab-text-color-focused-active-current: #bccad8;
  --tab-text-color-focused-highlighted: #49d8e2;
  --tab-text-color-hover: #bccad8;
  --tab-top-outline-width: 0;
  --table: #2b4448;
  --table-add-button-background: #216565;
  --table-add-button-border-color: #1a1e24;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #1a1e24;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: rgba(6, 12, 12, 0.38);
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #216565;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #216565;
  --table-header-background-hover: #378876;
  --table-header-border-color: #1a1e24;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #6CE0D3;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: rgba(6, 12, 12, 0.38);
  --table-row-alt-background-hover: rgba(60, 168, 131, 0.25);
  --table-row-background-hover: rgba(60, 168, 131, 0.25);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #216565;
  --table-selection-border-radius: 0;
  --tag: #1A5753;
  --tag-background: #1A5753;
  --tag-background-color: #1A5753;
  --tag-background-hover: #378876;
  --tag-border-color: #1A5753;
  --tag-border-color-hover: #378876;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #58c8e0;
  --tall: 700px;
  --td: rgba(6, 12, 12, 0.38);
  --tertiary: var(--text-accent-hover);
  --text: #bccad8;
  --text-accent: #49d8e2;
  --text-accent-hover: #5cb2d6;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(115, 253, 190, 0.25);
  --text-highlight-bg-active: rgba(52, 237, 181, 0.13);
  --text-muted: #97a1b9;
  --text-normal: #bccad8;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(60, 168, 131, 0.25);
  --textHighlight: var(--text-highlight-bg);
  --th: #216565;
  --th-text: #e5ebee;
  --theme-rainbow-1: #399F94;
  --theme-rainbow-2: #378876;
  --theme-rainbow-3: #2b5b77;
  --theme-rainbow-4: #204c5d;
  --theme-rainbow-5: #2b4448;
  --theme-rainbow-6: #232831;
  --tiny: 100px;
  --titleFont: var(--font-text);
  --titlebar-background: #1a1e24;
  --titlebar-background-focused: #0b0f13;
  --titlebar-border-color: #2b4448;
  --titlebar-text-color: #bccad8;
  --titlebar-text-color-focused: #bccad8;
  --toggle-border-width: 1px;
  --toggle-radius: 0;
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: 0;
  --toggle-width: 20px;
  --tooltip-color: #e5ebee;
  --vault-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --vault-name-color: #399F94;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #bccad8;
  --vault-profile-color-hover: #bccad8;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(11, 15, 19);
  color: rgb(188, 202, 216);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 30, 36);
  color: rgb(188, 202, 216);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 30, 36);
  color: rgb(188, 202, 216);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(11, 15, 19);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(11, 15, 19);
  border-left-color: rgb(11, 15, 19);
  color: rgb(188, 202, 216);
}

body div#quartz-root {
  background-color: rgb(26, 30, 36);
  color: rgb(188, 202, 216);
}`,
    typography: `body .page article p > b, b {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body .page article p > em, em {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body .page article p > i, i {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body .page article p > strong, strong {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body .text-highlight {
  background-color: rgba(115, 253, 190, 0.25);
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body del {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: line-through 1px rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(151, 161, 185) none 0px;
  text-decoration: rgb(151, 161, 185);
  text-decoration-color: rgb(151, 161, 185);
}`,
    links: `body a.external, footer a {
  color: rgb(73, 216, 226);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(73, 216, 226) none 0px;
  text-decoration: rgb(73, 216, 226);
  text-decoration-color: rgb(73, 216, 226);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(73, 216, 226);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(73, 216, 226) none 0px;
  text-decoration: rgb(73, 216, 226);
  text-decoration-color: rgb(73, 216, 226);
}

body a.internal.broken {
  color: rgb(43, 91, 119);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(43, 91, 119) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(188, 202, 216);
}

body dt {
  color: rgb(188, 202, 216);
}

body ol > li {
  color: rgb(188, 202, 216);
}

body ol.overflow {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body ul > li {
  color: rgb(188, 202, 216);
}

body ul.overflow {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(13, 16, 20);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body table {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(6, 12, 12, 0.38);
}

body td {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(26, 30, 36);
  border-right-color: rgb(26, 30, 36);
  border-top-color: rgb(26, 30, 36);
  color: rgb(188, 202, 216);
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
  background-color: rgb(33, 101, 101);
}`,
    code: `body code {
  border-bottom-color: rgb(114, 205, 208);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(114, 205, 208);
  border-right-color: rgb(114, 205, 208);
  border-top-color: rgb(114, 205, 208);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(114, 205, 208);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(43, 68, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(43, 68, 72);
  border-right-color: rgb(43, 68, 72);
  border-top-color: rgb(43, 68, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(43, 68, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(43, 68, 72);
  border-right-color: rgb(43, 68, 72);
  border-top-color: rgb(43, 68, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

body pre > code, pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(43, 68, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(43, 68, 72);
  border-right-color: rgb(43, 68, 72);
  border-top-color: rgb(43, 68, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(43, 68, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(43, 68, 72);
  border-right-color: rgb(43, 68, 72);
  border-top-color: rgb(43, 68, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body figcaption {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body img {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body video {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}`,
    embeds: `body .file-embed {
  background-color: rgb(11, 15, 19);
  border-bottom-color: rgb(151, 161, 185);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(151, 161, 185);
  border-right-color: rgb(151, 161, 185);
  border-top-color: rgb(151, 161, 185);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(188, 202, 216);
  color: rgb(188, 202, 216);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(33, 101, 101);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(33, 101, 101);
  border-right-color: rgb(188, 202, 216);
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
  color: rgb(43, 91, 119);
  text-decoration: rgb(43, 91, 119);
  text-decoration-color: rgb(43, 91, 119);
}

body input[type=checkbox] {
  border-bottom-color: rgb(55, 136, 118);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 136, 118);
  border-right-color: rgb(55, 136, 118);
  border-top-color: rgb(55, 136, 118);
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
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body li.task-list-item[data-task='-'] {
  color: rgb(62, 69, 82);
  text-decoration: rgb(62, 69, 82);
  text-decoration-color: rgb(62, 69, 82);
}

body li.task-list-item[data-task='/'] {
  color: rgb(151, 161, 185);
  text-decoration: rgb(151, 161, 185);
  text-decoration-color: rgb(151, 161, 185);
}

body li.task-list-item[data-task='>'] {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
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
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
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
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body li.task-list-item[data-task='l'] {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body li.task-list-item[data-task='u'] {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body li.task-list-item[data-task='w'] {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
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
  border-bottom-color: rgb(188, 202, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 202, 216);
  border-left-width: 4px;
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
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
  background-color: rgba(6, 12, 12, 0.38);
  border-bottom-color: rgb(43, 68, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(43, 68, 72);
  border-right-color: rgb(43, 68, 72);
  border-top-color: rgb(43, 68, 72);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(11, 15, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(11, 15, 19);
  border-left-width: 3px;
  border-right-color: rgb(11, 15, 19);
  border-right-width: 3px;
  border-top-color: rgb(11, 15, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(11, 15, 19) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(188, 202, 216);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(188, 202, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(188, 202, 216);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(52, 237, 181, 0.13);
  color: rgb(188, 202, 216);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(11, 15, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(11, 15, 19);
  border-left-width: 3px;
  border-right-color: rgb(11, 15, 19);
  border-right-width: 3px;
  border-top-color: rgb(11, 15, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(52, 237, 181, 0.13);
  border-bottom-color: rgb(188, 202, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(52, 237, 181, 0.13);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(26, 87, 83);
  border-bottom-color: rgb(26, 87, 83);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(26, 87, 83);
  border-right-color: rgb(26, 87, 83);
  border-top-color: rgb(26, 87, 83);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(57, 159, 148);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2 {
  color: rgb(57, 159, 148);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(57, 159, 148);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h3 {
  color: rgb(57, 159, 148);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h4 {
  color: rgb(57, 159, 148);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h5 {
  color: rgb(57, 159, 148);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h6 {
  color: rgb(57, 159, 148);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body hr {
  border-bottom-color: rgb(11, 15, 19);
  border-left-color: rgb(11, 15, 19);
  border-right-color: rgb(11, 15, 19);
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
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
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
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(188, 202, 216);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(188, 202, 216);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(188, 202, 216);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(33, 101, 101);
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
  border-bottom-color: rgb(151, 161, 185);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(151, 161, 185);
  border-right-color: rgb(151, 161, 185);
  border-top-color: rgb(151, 161, 185);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(151, 161, 185);
}`,
    footer: `body footer {
  background-color: rgb(11, 15, 19);
  border-bottom-color: rgb(55, 136, 118);
  border-left-color: rgb(55, 136, 118);
  border-right-color: rgb(55, 136, 118);
  border-top-color: rgb(55, 136, 118);
  border-top-left-radius: 0px;
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(151, 161, 185);
  text-decoration: rgb(151, 161, 185);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  color: rgb(188, 202, 216);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body li.section-li > .section .meta {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(188, 202, 216);
  text-decoration: rgb(188, 202, 216);
}

body ul.section-ul {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(151, 161, 185);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(151, 161, 185);
  border-right-color: rgb(151, 161, 185);
  border-top-color: rgb(151, 161, 185);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(151, 161, 185);
}

body .darkmode svg {
  color: rgb(151, 161, 185);
  stroke: rgb(151, 161, 185);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(43, 91, 119);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(43, 91, 119);
  border-right-color: rgb(43, 91, 119);
  border-top-color: rgb(43, 91, 119);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(43, 91, 119);
}

body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  color: rgb(188, 202, 216);
}

body .metadata {
  border-bottom-color: rgb(43, 68, 72);
  border-left-color: rgb(43, 68, 72);
  border-right-color: rgb(43, 68, 72);
  border-top-color: rgb(43, 68, 72);
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(151, 161, 185);
  border-left-color: rgb(151, 161, 185);
  border-right-color: rgb(151, 161, 185);
  border-top-color: rgb(151, 161, 185);
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(11, 15, 19);
}

body .page-header h2.page-title {
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(188, 202, 216);
  text-decoration: underline dotted rgb(188, 202, 216);
}

body details {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body input[type=text] {
  border-bottom-color: rgb(151, 161, 185);
  border-left-color: rgb(151, 161, 185);
  border-right-color: rgb(151, 161, 185);
  border-top-color: rgb(151, 161, 185);
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(114, 205, 208);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(114, 205, 208);
  border-right-color: rgb(114, 205, 208);
  border-top-color: rgb(114, 205, 208);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(11, 15, 19) 0px 2px 0px 0px;
  color: rgb(114, 205, 208);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body sub {
  color: rgb(188, 202, 216);
}

body summary {
  color: rgb(188, 202, 216);
}

body sup {
  color: rgb(188, 202, 216);
}`,
  },
  light: {
    base: `:root:root {
  --accent: #43C1A5;
  --accent-color: 67, 193, 165;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #D6EAE3;
  --accent2-lite: #75c8b9;
  --aside-bg: #e8f9f7;
  --background-modifier-active-hover: #25a99e;
  --background-modifier-border: #CCEBE2;
  --background-modifier-border-focus: #43C1A5;
  --background-modifier-border-hover: #CCEBE2;
  --background-modifier-cover: rgba(145, 212, 199, 0.27);
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: rgba(145, 212, 199, 0.27);
  --background-modifier-form-field-hover: rgba(145, 212, 199, 0.27);
  --background-modifier-hover: rgba(119, 220, 193, 0.5);
  --background-modifier-message: #25a99e;
  --background-modifier-success: #599049;
  --background-primary: #f8fbff;
  --background-primary-alt: #102F26;
  --background-secondary: #f8fbff;
  --background-secondary-alt: #eef3fd;
  --bases-cards-background: #f8fbff;
  --bases-cards-cover-background: #102F26;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #CCEBE2;
  --bases-cards-shadow-hover: 0 0 0 1px #CCEBE2;
  --bases-embed-border-color: #CCEBE2;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #4ED0B8;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #f8fbff;
  --bases-table-cell-background-active: #f8fbff;
  --bases-table-cell-background-disabled: #102F26;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #43C1A5;
  --bases-table-cell-shadow-focus: 0 0 0 2px #25a99e;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #102F26;
  --bases-table-header-background: #f8fbff;
  --bases-table-header-background-hover: rgba(119, 220, 193, 0.5);
  --bases-table-header-color: #4ED0B8;
  --bases-table-row-background-hover: rgba(144, 237, 231, 0.5);
  --bases-table-summary-background: #f8fbff;
  --bases-table-summary-background-hover: rgba(119, 220, 193, 0.5);
  --bg: #CCEBE2;
  --blockquote-background-color: #f1f5ff;
  --blockquote-border-color: #CCEBE2;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #697580;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #f8fbff 65%, transparent) linear-gradient(#f8fbff, color-mix(in srgb, #f8fbff 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #CCEBE2;
  --box-border-m: 3px solid #CCEBE2;
  --box-border-s: 1px solid #CCEBE2;
  --bttn: #40B1A4;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #40B1A4;
  --button-background-hover: #A6DED4;
  --button-border: #40B1A4;
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
  --checkbox-border-color: #43C1A5;
  --checkbox-border-color-hover: #25a99e;
  --checkbox-color: #43C1A5;
  --checkbox-color-hover: #25a99e;
  --checkbox-marker-color: #f8fbff;
  --checkbox-radius: 0;
  --checklist-done-color: #A6DED4;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #f1f5ff;
  --code-bg: #f1f5ff;
  --code-border-color: #CCEBE2;
  --code-bracket-background: rgba(119, 220, 193, 0.5);
  --code-comment: #4e5b6f;
  --code-normal: #69cfd2;
  --code-punctuation: #4ED0B8;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #CCEBE2;
  --code-size: .90em;
  --code-text: #69cfd2;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #A6DED4;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(194, 76, 78);
  --color-accent-2: rgb(199, 87, 92);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark: var(--text-normal);
  --dark-accent: #25a99e;
  --dark-sidebar: #e8f9f7;
  --darkgray: var(--text-normal);
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(67, 193, 165, 0.1);
  --dataview-th-background: #eef3fd;
  --dataview-th-border-bottom: 2px solid #40B1A4;
  --dataview-th-color: #40B1A4;
  --dataview-th-count-color: #40B1A4;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #102F26;
  --divider-color: #eef3fd;
  --divider-color-hover: #43C1A5;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #25a99e;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: rgba(0, 74, 52, 0.08);
  --dropdown-background: #eef3fd;
  --dropdown-background-hover: #A6DED4;
  --embed-bg: #f1f5ff;
  --embed-block-shadow-hover: 2px 2px 0 #CCEBE2;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #CCEBE2;
  --embed-border-color: transparent;
  --embed-border-color-hover: #CCEBE2;
  --embed-border-left: 2px solid #40B1A4;
  --embed-border-left-color: #40B1A4;
  --embed-border-left-color-hover: #40B1A4;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #CCEBE2;
  --embed-border-start: 2px solid #25a99e;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #CCEBE2;
  --embed-border-type: solid;
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
  --fg: #2E918A;
  --file-font: "its";
  --file-header-background: #f8fbff;
  --file-header-background-focused: #f8fbff;
  --file-header-breadcrumb-color: #A6DED4;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #A6DED4;
  --file-header-color-active: #697580;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #25a99e;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #eef3fd;
  --file-icon: "";
  --file-icon-color: #A6DED8;
  --file-icon-margin: 6px;
  --file-text-color: #697580;
  --flair-background: #eef3fd;
  --flair-color: #697580;
  --folder: #40B1A4;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #40B1A4;
  --folder-icon-open-color: #a1d9ff;
  --folder-open: #a1d9ff;
  --folder-open-text-color: #697580;
  --folder-text-color: #7EA3A2;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ligatures: none;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-small: .95em;
  --font-smaller: .90em;
  --font-smallest: .85em;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ui-small: 14px;
  --font-ui-smaller: 13.5px;
  --footnote: #89A09E;
  --footnote-divider-color: #CCEBE2;
  --footnote-id-color: #4ED0B8;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: rgba(145, 212, 199, 0.27);
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #A6DED4;
  --graph-arrow: #4ED0B8;
  --graph-background: #f8fbff;
  --graph-bg: #f8fbff;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #51a38e;
  --graph-focused: #75c8b9;
  --graph-img: #D6EAE3;
  --graph-line: rgba(144, 237, 231, 0.5);
  --graph-line-hover: #43C1A5;
  --graph-lines: rgba(144, 237, 231, 0.5);
  --graph-node: #697580;
  --graph-node-attachment: #D6EAE3;
  --graph-node-focused: #75c8b9;
  --graph-node-hover-fill: #51a38e;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #25a99e;
  --graph-node-unresolved: #A6DED4;
  --graph-tag: #25a99e;
  --graph-text: #697580;
  --gray: var(--text-muted);
  --h1-background: transparent;
  --h1-border-color: #69cfd2;
  --h1-border-left-color: #CCEBE2;
  --h1-border-line-color: #CCEBE2;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #CCEBE2;
  --h1-border-width: 0;
  --h1-color: #40B1A4;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #75c8b9;
  --h2-border-left-color: #CCEBE2;
  --h2-border-line-color: #CCEBE2;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #CCEBE2;
  --h2-border-width: 0;
  --h2-color: #40B1A4;
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #43C1A5;
  --h3-border-left-color: #CCEBE2;
  --h3-border-line-color: #CCEBE2;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #CCEBE2;
  --h3-border-width: 0;
  --h3-color: #40B1A4;
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #51a38e;
  --h4-border-left-color: #CCEBE2;
  --h4-border-line-color: #CCEBE2;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #CCEBE2;
  --h4-border-width: 0;
  --h4-color: #40B1A4;
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #2E918A;
  --h5-border-left-color: #CCEBE2;
  --h5-border-line-color: #CCEBE2;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #CCEBE2;
  --h5-border-width: 0;
  --h5-color: #40B1A4;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #102F26;
  --h6-border-left-color: #CCEBE2;
  --h6-border-line-color: #CCEBE2;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: #CCEBE2;
  --h6-border-width: 0;
  --h6-color: #40B1A4;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #40B1A4;
  --he-text-on-accent-inactive: #697580;
  --he-title-bar-active-action: #51a38e;
  --he-title-bar-active-bg: #f1f5ff;
  --he-title-bar-active-fg: #697580;
  --he-title-bar-active-pinned-bg: #f8fbff;
  --he-title-bar-inactive-action: #4ED0B8;
  --he-title-bar-inactive-bg: #f8fbff;
  --he-title-bar-inactive-fg: #A6DED4;
  --he-title-bar-inactive-pinned-bg: #f8fbff;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #CCEBE2;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 700;
  --headerFont: var(--font-text);
  --headers: #40B1A4;
  --heading-formatting: #A6DED4;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(144, 237, 231, 0.5);
  --hr: #D6EAE9;
  --hr-alignment: -50%, -50%;
  --hr-color: #D6EAE9;
  --hr-icon-background: #f8fbff;
  --hr-icon-color: #40B1A4;
  --hr-icon-font: "Material Icons Sharp";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(131, 240, 207, 0.3);
  --hvr-active: rgba(119, 220, 193, 0.5);
  --hvr2: rgba(144, 237, 231, 0.5);
  --i-at: #43C1AE;
  --icon-btn-radius: 0;
  --icon-color: #4ED0B8;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #697580;
  --icon-color-hover: #697580;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --icons: #d04e4e;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #CCEBE2;
  --illusion-h1-background: #69cfd2;
  --illusion-h2-background: #75c8b9;
  --illusion-h3-background: #43C1A5;
  --illusion-h4-background: #51a38e;
  --illusion-h5-background: #2E918A;
  --illusion-h6-background: #102F26;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: rgba(145, 212, 199, 0.27);
  --image-border-color: #CCEBE2;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #A6DED4;
  --indentation-guide-color: #b8e5e7;
  --indentation-guide-color-active: #43C1A5;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #b8e5e7;
  --initiative-xp: sandybrown;
  --inline-title-color: #40B1A4;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: rgba(145, 212, 199, 0.27);
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #CCEBE2;
  --input-shadow-hover: 3px 3px 0 #CCEBE2;
  --interactive-accent: #25a99e;
  --interactive-accent-hover: #A6DED4;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #A6DED4;
  --interactive-normal: #eef3fd;
  --its: "its";
  --kanban-button-background: #f1f5ff;
  --kanban-button-shadow: 2px 2px 0 #CCEBE2;
  --kanban-card-border: 2px solid #CCEBE2;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #f8fbff;
  --kanban-card-text-color: #697580;
  --kanban-card-title-background: #f8fbff;
  --kanban-card-title-border: 0 1px 0 #CCEBE2;
  --kanban-lane-background: #f1f5ff;
  --kanban-lane-border: 3px solid #CCEBE2;
  --kanban-lane-box-shadow: 2px 2px 0 #CCEBE2;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #75c8b9;
  --kanban-tag-background: #49b99d;
  --latex-color: #51a38e;
  --latex-format-color: #A6DED4;
  --latex-syntax-color: #4ED0B8;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-tight: 1.3em;
  --lines: #b8e5e7;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #75c8b9;
  --link-color-hover: #51a38e;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #75c8b9;
  --link-external-color-hover: #D6EAE3;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #A6DED4;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #CCEBE2;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #b8e5e7;
  --list-color-2: #b8e5e7;
  --list-color-3: #b8e5e7;
  --list-color-4: #b8e5e7;
  --list-color-5: #b8e5e7;
  --list-color-6: #b8e5e7;
  --list-indent: 25px;
  --list-marker-color: #43C1A5;
  --list-marker-color-collapsed: #A6DED4;
  --list-marker-color-hover: #4ED0B8;
  --list-marker-color-other: #D6EAE3;
  --list-marker-min-width: 0;
  --list-numbered-color: #51a38e;
  --list-spacing: 1px;
  --lite-accent: #51a38e;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #f8fbff;
  --menu-border-color: #CCEBE2;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #CCEBE2;
  --message-border-color: #CCEBE2;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #CCEBE2;
  --message-color: #e5ebee;
  --metadata-border-color: #CCEBE2;
  --metadata-button-text-color: #A6DED4;
  --metadata-divider-color: #CCEBE2;
  --metadata-icon-color: #4ED0B8;
  --metadata-input-background-active: rgba(145, 212, 199, 0.27);
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #697580;
  --metadata-label-background-active: rgba(145, 212, 199, 0.27);
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #4ED0B8;
  --metadata-label-text-color-hover: #4ED0B8;
  --metadata-property-background-active: rgba(119, 220, 193, 0.5);
  --metadata-property-box-shadow-focus: 0 0 0 2px #43C1A5;
  --metadata-property-box-shadow-hover: 0 0 0 1px #CCEBE2;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #e5ebee;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #4ED0B8;
  --metadata-title-icon: "";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #f8fbff;
  --modal-border-color: #CCEBE2;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: rgba(145, 212, 199, 0.27);
  --modal-radius: 0;
  --modal-sidebar-background: #e8f9f7;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #697580;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #4ED0B8;
  --nav-heading-color-hover: #697580;
  --nav-indentation-guide-color: #b8e5e7;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #25a99e;
  --nav-item-background-border-color-hover: #25a99e;
  --nav-item-background-hover: #25a99e;
  --nav-item-background-selected: rgba(131, 240, 207, 0.3);
  --nav-item-border-color: #51a38e;
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
  --nav-tag-color-active: #4ED0B8;
  --nav-tag-color-hover: #4ED0B8;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #f8fbff;
  --note-rgb: 248, 251, 255;
  --note-title-border-color: #40B1A4;
  --outer-bar: #eef3fd;
  --outline: #CCEBE2;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #f8fbff;
  --pdf-background: #f8fbff;
  --pdf-page-background: #f8fbff;
  --pdf-sidebar-background: #f8fbff;
  --pill-border-color: #CCEBE2;
  --pill-border-color-hover: #CCEBE2;
  --pill-color: #4ED0B8;
  --pill-color-hover: #697580;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #75c8b9;
  --pill-radius: 0;
  --popover-background: #f8fbff;
  --popover-border: 3px solid #CCEBE2;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #43C1A5;
  --progress-bg: #CCEBE2;
  --prompt-background: #f8fbff;
  --prompt-border-color: #CCEBE2;
  --prompt-border-width: 3px;
  --r-heading-color: #40B1A4;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #51a38e;
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
  --ribbon-background: #eef3fd;
  --ribbon-background-collapsed: #f8fbff;
  --ribbon-border-color: #eef3fd;
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
  --scrollbar-active-thumb-bg: #51a38e;
  --scrollbar-bg: #CCEBE2;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #49b99d;
  --scrollbar-track-bg: #f8fbff;
  --search-border: 2px solid #CCEBE2;
  --search-box-shadow: 2px 2px 0 #CCEBE2;
  --search-clear-button-color: #4ED0B8;
  --search-icon-color: #4ED0B8;
  --search-result-background: #f8fbff;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #697580;
  --setting-item-alt-background-hover: rgba(145, 212, 199, 0.27);
  --setting-item-background-hover: rgba(131, 240, 207, 0.3);
  --setting-item-border-color: #CCEBE2;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #40B1A4;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: rgba(145, 212, 199, 0.27);
  --setting-items-background: transparent;
  --setting-items-border-color: #CCEBE2;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #CCEBE2;
  --shadow-m: 3px 3px 0 #CCEBE2;
  --shadow-ml: 4px 4px 0 #CCEBE2;
  --shadow-s: 2px 2px 0 #CCEBE2;
  --side-bar: #f8fbff;
  --side-bar-bg: #eef3fd;
  --sidebar-icon-color: #697580;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #40B1A4;
  --sidebar-tab-background-color-hover: #43C1A5;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #40B1A4;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #f8fbff;
  --slider-thumb-border-color: #CCEBE2;
  --slider-thumb-radius: 0;
  --slider-track-background: #CCEBE2;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #4ED0B8;
  --statblock-alt: rgba(145, 212, 199, 0.27);
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #f8fbff;
  --statblock-bar-border-color: #43C1A5;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #43C1A5;
  --statblock-border-color: #b8e5e7;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #CCEBE2;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #697580;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #40B1A4;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #D6EAE9;
  --statblock-primary-color: #697580;
  --statblock-property-font-color: #697580;
  --statblock-property-name-font-color: #40B1A4;
  --statblock-rule-color: #43C1A5;
  --statblock-section-heading-border-color: #CCEBE2;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #89A09E;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #eef3fd;
  --status-bar-border-color: #43C1A5;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #4ED0B8;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #25a99e;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --success-bg: #599049;
  --suggestion-background: #f8fbff;
  --tab-background: #eef3fd;
  --tab-background-active: #f8fbff;
  --tab-container-background: #eef3fd;
  --tab-curve: 0;
  --tab-divider-color: #D6EAE9;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #43C1A5;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px rgba(0, 74, 52, 0.08);
  --tab-stacked-shadow-color: rgba(0, 74, 52, 0.08);
  --tab-switcher-background: #f8fbff;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8fbff, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #CCEBE2;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #CCEBE2;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #51a38e, 5px 5px 0 #CCEBE2;
  --tab-text-color: #A6DED4;
  --tab-text-color-active: #697580;
  --tab-text-color-focused: #A6DED4;
  --tab-text-color-focused-active: #697580;
  --tab-text-color-focused-active-current: #697580;
  --tab-text-color-focused-highlighted: #75c8b9;
  --tab-text-color-hover: #697580;
  --tab-top-outline-width: 0;
  --table: #CCEBE2;
  --table-add-button-background: #40B1A4;
  --table-add-button-border-color: #f8fbff;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #f8fbff;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: rgba(145, 212, 199, 0.27);
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #25a99e;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #40B1A4;
  --table-header-background-hover: #43C1A5;
  --table-header-border-color: #f8fbff;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #51a38e;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: rgba(145, 212, 199, 0.27);
  --table-row-alt-background-hover: rgba(144, 237, 231, 0.5);
  --table-row-background-hover: rgba(144, 237, 231, 0.5);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #25a99e;
  --table-selection-border-radius: 0;
  --tag: #49b99d;
  --tag-background: #49b99d;
  --tag-background-color: #49b99d;
  --tag-background-hover: #43C1A5;
  --tag-border-color: #49b99d;
  --tag-border-color-hover: #43C1A5;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #43C1A5;
  --tall: 700px;
  --td: rgba(145, 212, 199, 0.27);
  --tertiary: var(--text-accent-hover);
  --text: #697580;
  --text-accent: #75c8b9;
  --text-accent-hover: #D6EAE3;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(131, 240, 207, 0.3);
  --text-highlight-bg-active: rgba(119, 220, 193, 0.5);
  --text-muted: #4ED0B8;
  --text-normal: #697580;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(144, 237, 231, 0.5);
  --textHighlight: var(--text-highlight-bg);
  --th: #40B1A4;
  --th-text: #e5ebee;
  --theme-rainbow-1: #69cfd2;
  --theme-rainbow-2: #75c8b9;
  --theme-rainbow-3: #43C1A5;
  --theme-rainbow-4: #51a38e;
  --theme-rainbow-5: #2E918A;
  --theme-rainbow-6: #102F26;
  --tiny: 100px;
  --titleFont: var(--font-text);
  --titlebar-background: #f8fbff;
  --titlebar-background-focused: #eef3fd;
  --titlebar-border-color: #CCEBE2;
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
  --vault-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --vault-name-color: #40B1A4;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #697580;
  --vault-profile-color-hover: #697580;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 243, 253);
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
  border-right-color: rgb(238, 243, 253);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 243, 253);
  border-left-color: rgb(238, 243, 253);
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
  background-color: rgba(131, 240, 207, 0.3);
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
  color: rgb(78, 208, 184);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(78, 208, 184) none 0px;
  text-decoration: rgb(78, 208, 184);
  text-decoration-color: rgb(78, 208, 184);
}`,
    links: `body a.external, footer a {
  color: rgb(117, 200, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(117, 200, 185) none 0px;
  text-decoration: rgb(117, 200, 185);
  text-decoration-color: rgb(117, 200, 185);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(117, 200, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(117, 200, 185) none 0px;
  text-decoration: rgb(117, 200, 185);
  text-decoration-color: rgb(117, 200, 185);
}

body a.internal.broken {
  color: rgb(166, 222, 212);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(166, 222, 212) none 0px;
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
  background-color: rgba(145, 212, 199, 0.27);
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
  background-color: rgb(64, 177, 164);
}`,
    code: `body code {
  border-bottom-color: rgb(105, 207, 210);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(105, 207, 210);
  border-right-color: rgb(105, 207, 210);
  border-top-color: rgb(105, 207, 210);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 207, 210);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(204, 235, 226);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 235, 226);
  border-right-color: rgb(204, 235, 226);
  border-top-color: rgb(204, 235, 226);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(204, 235, 226);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 235, 226);
  border-right-color: rgb(204, 235, 226);
  border-top-color: rgb(204, 235, 226);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

body pre > code, pre:has(> code) {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(204, 235, 226);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 235, 226);
  border-right-color: rgb(204, 235, 226);
  border-top-color: rgb(204, 235, 226);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(204, 235, 226);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 235, 226);
  border-right-color: rgb(204, 235, 226);
  border-top-color: rgb(204, 235, 226);
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
  background-color: rgb(238, 243, 253);
  border-bottom-color: rgb(78, 208, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(78, 208, 184);
  border-right-color: rgb(78, 208, 184);
  border-top-color: rgb(78, 208, 184);
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
  border-left-color: rgb(37, 169, 158);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(37, 169, 158);
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
  color: rgb(166, 222, 212);
  text-decoration: rgb(166, 222, 212);
  text-decoration-color: rgb(166, 222, 212);
}

body input[type=checkbox] {
  border-bottom-color: rgb(67, 193, 165);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 193, 165);
  border-right-color: rgb(67, 193, 165);
  border-top-color: rgb(67, 193, 165);
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
  color: rgb(78, 208, 184);
  text-decoration: rgb(78, 208, 184);
  text-decoration-color: rgb(78, 208, 184);
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
  background-color: rgba(145, 212, 199, 0.27);
  border-bottom-color: rgb(204, 235, 226);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 235, 226);
  border-right-color: rgb(204, 235, 226);
  border-top-color: rgb(204, 235, 226);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(204, 235, 226);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(204, 235, 226);
  border-left-width: 3px;
  border-right-color: rgb(204, 235, 226);
  border-right-width: 3px;
  border-top-color: rgb(204, 235, 226);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(204, 235, 226) 5px 5px 0px 0px;
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
  background-color: rgba(119, 220, 193, 0.5);
  color: rgb(105, 117, 128);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(204, 235, 226);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(204, 235, 226);
  border-left-width: 3px;
  border-right-color: rgb(204, 235, 226);
  border-right-width: 3px;
  border-top-color: rgb(204, 235, 226);
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
  background-color: rgba(119, 220, 193, 0.5);
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
  background-color: rgba(119, 220, 193, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(73, 185, 157);
  border-bottom-color: rgb(73, 185, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(73, 185, 157);
  border-right-color: rgb(73, 185, 157);
  border-top-color: rgb(73, 185, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(64, 177, 164);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2 {
  color: rgb(64, 177, 164);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(64, 177, 164);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h3 {
  color: rgb(64, 177, 164);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h4 {
  color: rgb(64, 177, 164);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h5 {
  color: rgb(64, 177, 164);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h6 {
  color: rgb(64, 177, 164);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body hr {
  border-bottom-color: rgb(238, 243, 253);
  border-left-color: rgb(238, 243, 253);
  border-right-color: rgb(238, 243, 253);
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
  background-color: rgb(37, 169, 158);
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
  border-bottom-color: rgb(78, 208, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(78, 208, 184);
  border-right-color: rgb(78, 208, 184);
  border-top-color: rgb(78, 208, 184);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(78, 208, 184);
}`,
    footer: `body footer {
  background-color: rgb(238, 243, 253);
  border-bottom-color: rgb(67, 193, 165);
  border-left-color: rgb(67, 193, 165);
  border-right-color: rgb(67, 193, 165);
  border-top-color: rgb(67, 193, 165);
  border-top-left-radius: 0px;
  color: rgb(78, 208, 184);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(78, 208, 184);
  text-decoration: rgb(78, 208, 184);
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
  border-bottom-color: rgb(78, 208, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(78, 208, 184);
  border-right-color: rgb(78, 208, 184);
  border-top-color: rgb(78, 208, 184);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(78, 208, 184);
}

body .darkmode svg {
  color: rgb(78, 208, 184);
  stroke: rgb(78, 208, 184);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(166, 222, 212);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(166, 222, 212);
  border-right-color: rgb(166, 222, 212);
  border-top-color: rgb(166, 222, 212);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(166, 222, 212);
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
  border-bottom-color: rgb(204, 235, 226);
  border-left-color: rgb(204, 235, 226);
  border-right-color: rgb(204, 235, 226);
  border-top-color: rgb(204, 235, 226);
  color: rgb(78, 208, 184);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(78, 208, 184);
  border-left-color: rgb(78, 208, 184);
  border-right-color: rgb(78, 208, 184);
  border-top-color: rgb(78, 208, 184);
  color: rgb(78, 208, 184);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(238, 243, 253);
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
  border-bottom-color: rgb(78, 208, 184);
  border-left-color: rgb(78, 208, 184);
  border-right-color: rgb(78, 208, 184);
  border-top-color: rgb(78, 208, 184);
  color: rgb(78, 208, 184);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(105, 207, 210);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(105, 207, 210);
  border-right-color: rgb(105, 207, 210);
  border-top-color: rgb(105, 207, 210);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(204, 235, 226) 0px 2px 0px 0px;
  color: rgb(105, 207, 210);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
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
