import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.tangerine-dunes",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #DF7B41;
  --accent-color: 223, 123, 65;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #8F3F2B;
  --accent2-lite: #E57858;
  --aside-bg: #11151d;
  --background-modifier-active-hover: #c66c39;
  --background-modifier-border: #463228;
  --background-modifier-border-focus: #DF7B41;
  --background-modifier-border-hover: #252c36;
  --background-modifier-cover: rgba(12, 9, 6, 0.38);
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: rgba(12, 9, 6, 0.38);
  --background-modifier-form-field-hover: rgba(12, 9, 6, 0.38);
  --background-modifier-hover: rgba(236, 110, 52, 0.3);
  --background-modifier-message: #c66c39;
  --background-modifier-success: #32603e;
  --background-primary: #1a1e24;
  --background-primary-alt: #62250F;
  --background-secondary: #1a1e24;
  --background-secondary-alt: #0b0f13;
  --bases-cards-background: #1a1e24;
  --bases-cards-cover-background: #62250F;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #463228;
  --bases-cards-shadow-hover: 0 0 0 1px #252c36;
  --bases-embed-border-color: #463228;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #97a1b9;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #1a1e24;
  --bases-table-cell-background-active: #1a1e24;
  --bases-table-cell-background-disabled: #62250F;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #DF7B41;
  --bases-table-cell-shadow-focus: 0 0 0 2px #c66c39;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #62250F;
  --bases-table-header-background: #1a1e24;
  --bases-table-header-background-hover: rgba(236, 110, 52, 0.3);
  --bases-table-header-color: #97a1b9;
  --bases-table-row-background-hover: rgba(148, 87, 49, 0.575);
  --bases-table-summary-background: #1a1e24;
  --bases-table-summary-background-hover: rgba(236, 110, 52, 0.3);
  --bg: #252c36;
  --blockquote-background-color: #0d1014;
  --blockquote-border-color: #252c36;
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
  --bttn: #c66c39;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #c66c39;
  --button-background-hover: #586477;
  --button-border: #c66c39;
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
  --checkbox-border-color: #DF7B41;
  --checkbox-border-color-hover: #c66c39;
  --checkbox-color: #DF7B41;
  --checkbox-color-hover: #c66c39;
  --checkbox-marker-color: #1a1e24;
  --checkbox-radius: 0;
  --checklist-done-color: #586477;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #232831;
  --code-bg: #232831;
  --code-border-color: #463228;
  --code-bracket-background: rgba(236, 110, 52, 0.3);
  --code-comment: #4e5b6f;
  --code-normal: #FA8A45;
  --code-punctuation: #97a1b9;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #0b0f13;
  --code-size: .90em;
  --code-text: #FA8A45;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #586477;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(199, 87, 92);
  --color-accent-2: rgb(209, 113, 121);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark: var(--text-normal);
  --dark-accent: #c66c39;
  --dark-sidebar: #0d1014;
  --darkgray: var(--text-normal);
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(223, 123, 65, 0.1);
  --dataview-th-background: #0b0f13;
  --dataview-th-border-bottom: 2px solid #DF7B41;
  --dataview-th-color: #DF7B41;
  --dataview-th-count-color: #DF7B41;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 500;
  --deep-dark-accent: #62250F;
  --divider-color: #0b0f13;
  --divider-color-hover: #DF7B41;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #c66c39;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #06080c60;
  --dropdown-background: #0b0f13;
  --dropdown-background-hover: #586477;
  --embed-bg: #0d1014;
  --embed-block-shadow-hover: 2px 2px 0 #0b0f13;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #0b0f13;
  --embed-border-color: transparent;
  --embed-border-color-hover: #0b0f13;
  --embed-border-left: 2px solid #DF7B41;
  --embed-border-left-color: #DF7B41;
  --embed-border-left-color-hover: #DF7B41;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #0b0f13;
  --embed-border-start: 2px solid #c66c39;
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
  --file-header-breadcrumb-color: #586477;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #586477;
  --file-header-color-active: #bccad8;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #c66c39;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #0b0f13;
  --file-icon: "";
  --file-icon-color: #8F3F2B;
  --file-icon-margin: 6px;
  --file-text-color: #bccad8;
  --flair-background: #0b0f13;
  --flair-color: #bccad8;
  --folder: #DF7B41;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #DF7B41;
  --folder-icon-open-color: #D8AF97;
  --folder-open: #D8AF97;
  --folder-open-text-color: #bccad8;
  --folder-text-color: #bccad8;
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
  --footnote-divider-color: #463228;
  --footnote-id-color: #97a1b9;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: rgba(12, 9, 6, 0.38);
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #586477;
  --graph-arrow: #97a1b9;
  --graph-background: #1a1e24;
  --graph-bg: #1a1e24;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #C48A69;
  --graph-focused: #E57858;
  --graph-img: #8F3F2B;
  --graph-line: rgba(148, 87, 49, 0.575);
  --graph-line-hover: #DF7B41;
  --graph-lines: rgba(148, 87, 49, 0.575);
  --graph-node: #bccad8;
  --graph-node-attachment: #8F3F2B;
  --graph-node-focused: #E57858;
  --graph-node-hover-fill: #C48A69;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #c66c39;
  --graph-node-unresolved: #586477;
  --graph-tag: #c66c39;
  --graph-text: #bccad8;
  --gray: var(--text-muted);
  --h1-background: transparent;
  --h1-border-color: #BF7F5E;
  --h1-border-left-color: #463228;
  --h1-border-line-color: #463228;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #463228;
  --h1-border-width: 0;
  --h1-color: #DF7B41;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h1-weight: 500;
  --h2-background: transparent;
  --h2-border-color: #DF7B41;
  --h2-border-left-color: #463228;
  --h2-border-line-color: #463228;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #463228;
  --h2-border-width: 0;
  --h2-color: #DF7B41;
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 500;
  --h3-background: transparent;
  --h3-border-color: #8F3F2B;
  --h3-border-left-color: #463228;
  --h3-border-line-color: #463228;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #463228;
  --h3-border-width: 0;
  --h3-color: #DF7B41;
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 500;
  --h4-background: transparent;
  --h4-border-color: #a66038;
  --h4-border-left-color: #463228;
  --h4-border-line-color: #463228;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #463228;
  --h4-border-width: 0;
  --h4-color: #DF7B41;
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 500;
  --h5-background: transparent;
  --h5-border-color: #463228;
  --h5-border-left-color: #463228;
  --h5-border-line-color: #463228;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #463228;
  --h5-border-width: 0;
  --h5-color: #DF7B41;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 500;
  --h6-background: transparent;
  --h6-border-color: #0d1014;
  --h6-border-left-color: #463228;
  --h6-border-line-color: #463228;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: #463228;
  --h6-border-width: 0;
  --h6-color: #DF7B41;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 500;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #DF7B41;
  --he-text-on-accent-inactive: #bccad8;
  --he-title-bar-active-action: #C48A69;
  --he-title-bar-active-bg: #0d1014;
  --he-title-bar-active-fg: #bccad8;
  --he-title-bar-active-pinned-bg: #1a1e24;
  --he-title-bar-inactive-action: #97a1b9;
  --he-title-bar-inactive-bg: #1a1e24;
  --he-title-bar-inactive-fg: #586477;
  --he-title-bar-inactive-pinned-bg: #1a1e24;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #463228;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 500;
  --headerFont: var(--font-text);
  --headers: #DF7B41;
  --heading-formatting: #586477;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(148, 87, 49, 0.575);
  --hr: #744F3C;
  --hr-alignment: -50%, -50%;
  --hr-color: #744F3C;
  --hr-f: "Material Icons Sharp";
  --hr-icon-background: #1a1e24;
  --hr-icon-color: #DF7B41;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "";
  --hr-sym: "";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(253, 162, 115, 0.25);
  --hvr-active: rgba(236, 110, 52, 0.3);
  --hvr2: rgba(148, 87, 49, 0.575);
  --i-at: #BF7F5E;
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
  --illusion-h1-background: #BF7F5E;
  --illusion-h2-background: #DF7B41;
  --illusion-h3-background: #8F3F2B;
  --illusion-h4-background: #a66038;
  --illusion-h5-background: #463228;
  --illusion-h6-background: #0d1014;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: rgba(12, 9, 6, 0.38);
  --image-border-color: #463228;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #586477;
  --indentation-guide-color: #744F3C;
  --indentation-guide-color-active: #DF7B41;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #744F3C;
  --initiative-xp: sandybrown;
  --inline-title-color: #DF7B41;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --inline-title-weight: 500;
  --input-bg: rgba(0, 0, 0, 0.3);
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #0b0f13;
  --input-shadow-hover: 3px 3px 0 #0b0f13;
  --interactive-accent: #c66c39;
  --interactive-accent-hover: #586477;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #586477;
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
  --kanban-link-color: #E57858;
  --kanban-tag-background: #a66038;
  --latex-color: #C48A69;
  --latex-format-color: #586477;
  --latex-syntax-color: #97a1b9;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-tight: 1.3em;
  --lines: #744F3C;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #E57858;
  --link-color-hover: #C48A69;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #E57858;
  --link-external-color-hover: #8F3F2B;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #586477;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #463228;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #744F3C;
  --list-color-2: #744F3C;
  --list-color-3: #744F3C;
  --list-color-4: #744F3C;
  --list-color-5: #744F3C;
  --list-color-6: #744F3C;
  --list-indent: 25px;
  --list-marker-color: #DF7B41;
  --list-marker-color-collapsed: #586477;
  --list-marker-color-hover: #97a1b9;
  --list-marker-color-other: #8F3F2B;
  --list-marker-min-width: 0;
  --list-numbered-color: #C48A69;
  --list-spacing: 1px;
  --lite-accent: #C48A69;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #1a1e24;
  --menu-border-color: #252c36;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #0b0f13;
  --message-border-color: #0b0f13;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #0b0f13;
  --message-color: #e5ebee;
  --metadata-border-color: #463228;
  --metadata-button-text-color: #586477;
  --metadata-divider-color: #463228;
  --metadata-icon-color: #97a1b9;
  --metadata-input-background-active: rgba(12, 9, 6, 0.38);
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #bccad8;
  --metadata-label-background-active: rgba(12, 9, 6, 0.38);
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #97a1b9;
  --metadata-label-text-color-hover: #97a1b9;
  --metadata-property-background-active: rgba(236, 110, 52, 0.3);
  --metadata-property-box-shadow-focus: 0 0 0 2px #DF7B41;
  --metadata-property-box-shadow-hover: 0 0 0 1px #252c36;
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
  --modal-nav-item-background-hover: rgba(12, 9, 6, 0.38);
  --modal-radius: 0;
  --modal-sidebar-background: #0d1014;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #bccad8;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #97a1b9;
  --nav-heading-color-hover: #bccad8;
  --nav-indentation-guide-color: #744F3C;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #c66c39;
  --nav-item-background-border-color-hover: #c66c39;
  --nav-item-background-hover: #c66c39;
  --nav-item-background-selected: rgba(253, 162, 115, 0.25);
  --nav-item-border-color: #C48A69;
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
  --note-title-border-color: #DF7B41;
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
  --pdf-shadow: 0 0 0 1px #463228;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #463228;
  --pill-border-color: #463228;
  --pill-border-color-hover: #252c36;
  --pill-color: #97a1b9;
  --pill-color-hover: #bccad8;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #E57858;
  --pill-radius: 0;
  --popover-background: #1a1e24;
  --popover-border: 3px solid #0b0f13;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #DF7B41;
  --progress-bg: #252c36;
  --prompt-background: #1a1e24;
  --prompt-border-color: #0b0f13;
  --prompt-border-width: 3px;
  --r-heading-color: #DF7B41;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 500;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #C48A69;
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
  --scrollbar-active-thumb-bg: #C48A69;
  --scrollbar-bg: #252c36;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #a66038;
  --scrollbar-track-bg: #1a1e24;
  --search-border: 2px solid #0b0f13;
  --search-box-shadow: 2px 2px 0 #0b0f13;
  --search-clear-button-color: #97a1b9;
  --search-icon-color: #97a1b9;
  --search-result-background: #1a1e24;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #bccad8;
  --setting-item-alt-background-hover: rgba(12, 9, 6, 0.38);
  --setting-item-background-hover: rgba(253, 162, 115, 0.25);
  --setting-item-border-color: #463228;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #DF7B41;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: rgba(12, 9, 6, 0.38);
  --setting-items-background: transparent;
  --setting-items-border-color: #463228;
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
  --sidebar-tab-background-color: #c66c39;
  --sidebar-tab-background-color-hover: #DF7B41;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #c66c39;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #1a1e24;
  --slider-thumb-border-color: #252c36;
  --slider-thumb-radius: 0;
  --slider-track-background: #463228;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #97a1b9;
  --statblock-alt: rgba(12, 9, 6, 0.38);
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #1a1e24;
  --statblock-bar-border-color: #DF7B41;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #DF7B41;
  --statblock-border-color: #744F3C;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #0b0f13;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #bccad8;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #DF7B41;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 500;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #744F3C;
  --statblock-primary-color: #bccad8;
  --statblock-property-font-color: #bccad8;
  --statblock-property-name-font-color: #DF7B41;
  --statblock-rule-color: #DF7B41;
  --statblock-section-heading-border-color: #463228;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #63778f;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 500;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #0b0f13;
  --status-bar-border-color: #DF7B41;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #97a1b9;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #c66c39;
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
  --tab-divider-color: #744F3C;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #DF7B41;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #06080c60;
  --tab-stacked-shadow-color: #06080c60;
  --tab-switcher-background: #1a1e24;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1e24, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #0b0f13;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #0b0f13;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #C48A69, 5px 5px 0 #0b0f13;
  --tab-text-color: #586477;
  --tab-text-color-active: #bccad8;
  --tab-text-color-focused: #586477;
  --tab-text-color-focused-active: #bccad8;
  --tab-text-color-focused-active-current: #bccad8;
  --tab-text-color-focused-highlighted: #E57858;
  --tab-text-color-hover: #bccad8;
  --tab-top-outline-width: 0;
  --table: #463228;
  --table-add-button-background: #c66c39;
  --table-add-button-border-color: #1a1e24;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #1a1e24;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: rgba(12, 9, 6, 0.38);
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #c66c39;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #a66038;
  --table-header-background-hover: #DF7B41;
  --table-header-border-color: #1a1e24;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #C48A69;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: rgba(12, 9, 6, 0.38);
  --table-row-alt-background-hover: rgba(148, 87, 49, 0.575);
  --table-row-background-hover: rgba(148, 87, 49, 0.575);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #c66c39;
  --table-selection-border-radius: 0;
  --tag: #a66038;
  --tag-background: #a66038;
  --tag-background-color: #a66038;
  --tag-background-hover: #DF7B41;
  --tag-border-color: #a66038;
  --tag-border-color-hover: #DF7B41;
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
  --td: rgba(12, 9, 6, 0.38);
  --tertiary: var(--text-accent-hover);
  --text: #bccad8;
  --text-accent: #E57858;
  --text-accent-hover: #8F3F2B;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(253, 162, 115, 0.25);
  --text-highlight-bg-active: rgba(236, 110, 52, 0.3);
  --text-muted: #97a1b9;
  --text-normal: #bccad8;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(148, 87, 49, 0.575);
  --textHighlight: var(--text-highlight-bg);
  --th: #a66038;
  --th-text: #e5ebee;
  --theme-rainbow-1: #BF7F5E;
  --theme-rainbow-2: #DF7B41;
  --theme-rainbow-3: #8F3F2B;
  --theme-rainbow-4: #a66038;
  --theme-rainbow-5: #463228;
  --theme-rainbow-6: #0d1014;
  --tiny: 100px;
  --titleFont: var(--font-text);
  --titlebar-background: #1a1e24;
  --titlebar-background-focused: #0b0f13;
  --titlebar-border-color: #463228;
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
  --vault-name-color: #DF7B41;
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
  background-color: rgba(253, 162, 115, 0.25);
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
  color: rgb(229, 120, 88);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(229, 120, 88) none 0px;
  text-decoration: rgb(229, 120, 88);
  text-decoration-color: rgb(229, 120, 88);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(229, 120, 88);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(229, 120, 88) none 0px;
  text-decoration: rgb(229, 120, 88);
  text-decoration-color: rgb(229, 120, 88);
}

body a.internal.broken {
  color: rgb(88, 100, 119);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(88, 100, 119) none 0px;
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
  background-color: rgba(12, 9, 6, 0.38);
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
  background-color: rgb(166, 96, 56);
}`,
    code: `body code {
  border-bottom-color: rgb(250, 138, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(250, 138, 69);
  border-right-color: rgb(250, 138, 69);
  border-top-color: rgb(250, 138, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(250, 138, 69);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(70, 50, 40);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(70, 50, 40);
  border-right-color: rgb(70, 50, 40);
  border-top-color: rgb(70, 50, 40);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(70, 50, 40);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(70, 50, 40);
  border-right-color: rgb(70, 50, 40);
  border-top-color: rgb(70, 50, 40);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

body pre > code, pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(70, 50, 40);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(70, 50, 40);
  border-right-color: rgb(70, 50, 40);
  border-top-color: rgb(70, 50, 40);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(70, 50, 40);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(70, 50, 40);
  border-right-color: rgb(70, 50, 40);
  border-top-color: rgb(70, 50, 40);
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
  border-left-color: rgb(198, 108, 57);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(198, 108, 57);
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
  color: rgb(88, 100, 119);
  text-decoration: rgb(88, 100, 119);
  text-decoration-color: rgb(88, 100, 119);
}

body input[type=checkbox] {
  border-bottom-color: rgb(223, 123, 65);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(223, 123, 65);
  border-right-color: rgb(223, 123, 65);
  border-top-color: rgb(223, 123, 65);
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
  background-color: rgba(12, 9, 6, 0.38);
  border-bottom-color: rgb(70, 50, 40);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(70, 50, 40);
  border-right-color: rgb(70, 50, 40);
  border-top-color: rgb(70, 50, 40);
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
  background-color: rgba(236, 110, 52, 0.3);
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
  background-color: rgba(236, 110, 52, 0.3);
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
  background-color: rgba(236, 110, 52, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(166, 96, 56);
  border-bottom-color: rgb(166, 96, 56);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(166, 96, 56);
  border-right-color: rgb(166, 96, 56);
  border-top-color: rgb(166, 96, 56);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(223, 123, 65);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2 {
  color: rgb(223, 123, 65);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(223, 123, 65);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h3 {
  color: rgb(223, 123, 65);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h4 {
  color: rgb(223, 123, 65);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h5 {
  color: rgb(223, 123, 65);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h6 {
  color: rgb(223, 123, 65);
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
  background-color: rgb(198, 108, 57);
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
  border-bottom-color: rgb(223, 123, 65);
  border-left-color: rgb(223, 123, 65);
  border-right-color: rgb(223, 123, 65);
  border-top-color: rgb(223, 123, 65);
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
  border-bottom-color: rgb(88, 100, 119);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(88, 100, 119);
  border-right-color: rgb(88, 100, 119);
  border-top-color: rgb(88, 100, 119);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(88, 100, 119);
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
  border-bottom-color: rgb(70, 50, 40);
  border-left-color: rgb(70, 50, 40);
  border-right-color: rgb(70, 50, 40);
  border-top-color: rgb(70, 50, 40);
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
  border-bottom-color: rgb(250, 138, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(250, 138, 69);
  border-right-color: rgb(250, 138, 69);
  border-top-color: rgb(250, 138, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(11, 15, 19) 0px 2px 0px 0px;
  color: rgb(250, 138, 69);
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
  --accent: #E8AF8E;
  --accent-color: 232, 175, 142;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #A9523C;
  --accent2-lite: #E57858;
  --aside-bg: #f1f5ff;
  --background-modifier-active-hover: #dc8a67;
  --background-modifier-border: #CCD6EB;
  --background-modifier-border-focus: #E8AF8E;
  --background-modifier-border-hover: #e1e9f6;
  --background-modifier-cover: #d0ddef62;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #d0ddef62;
  --background-modifier-form-field-hover: #d0ddef62;
  --background-modifier-hover: rgba(255, 158, 89, 0.4);
  --background-modifier-message: #dc8a67;
  --background-modifier-success: #599049;
  --background-primary: #f8fbff;
  --background-primary-alt: #7B4430;
  --background-secondary: #f8fbff;
  --background-secondary-alt: #eef3fd;
  --bases-cards-background: #f8fbff;
  --bases-cards-cover-background: #7B4430;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #CCD6EB;
  --bases-cards-shadow-hover: 0 0 0 1px #e1e9f6;
  --bases-embed-border-color: #CCD6EB;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #CF9870;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #f8fbff;
  --bases-table-cell-background-active: #f8fbff;
  --bases-table-cell-background-disabled: #7B4430;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #E8AF8E;
  --bases-table-cell-shadow-focus: 0 0 0 2px #dc8a67;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #7B4430;
  --bases-table-header-background: #f8fbff;
  --bases-table-header-background-hover: rgba(255, 158, 89, 0.4);
  --bases-table-header-color: #CF9870;
  --bases-table-row-background-hover: rgba(255, 158, 89, 0.4);
  --bases-table-summary-background: #f8fbff;
  --bases-table-summary-background-hover: rgba(255, 158, 89, 0.4);
  --bg: #e1e9f6;
  --blockquote-background-color: #f1f5ff;
  --blockquote-border-color: #e1e9f6;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #697580;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #f8fbff 65%, transparent) linear-gradient(#f8fbff, color-mix(in srgb, #f8fbff 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #e1e9f6;
  --box-border-m: 3px solid #e1e9f6;
  --box-border-s: 1px solid #e1e9f6;
  --bttn: #E19363;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #E19363;
  --button-background-hover: #a6bbde;
  --button-border: #E19363;
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
  --checkbox-border-color: #E8AF8E;
  --checkbox-border-color-hover: #dc8a67;
  --checkbox-color: #E8AF8E;
  --checkbox-color-hover: #dc8a67;
  --checkbox-marker-color: #f8fbff;
  --checkbox-radius: 0;
  --checklist-done-color: #a6bbde;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #f1f5ff;
  --code-bg: #f1f5ff;
  --code-border-color: #CCD6EB;
  --code-bracket-background: rgba(255, 158, 89, 0.4);
  --code-comment: #4e5b6f;
  --code-normal: #EA7542;
  --code-punctuation: #CF9870;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #e1e9f6;
  --code-size: .90em;
  --code-text: #EA7542;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #a6bbde;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(194, 76, 78);
  --color-accent-2: rgb(199, 87, 92);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark: var(--text-normal);
  --dark-accent: #dc8a67;
  --dark-sidebar: #f1f5ff;
  --darkgray: var(--text-normal);
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(232, 175, 142, 0.1);
  --dataview-th-background: #eef3fd;
  --dataview-th-border-bottom: 2px solid #E19363;
  --dataview-th-color: #E19363;
  --dataview-th-count-color: #E19363;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 500;
  --deep-dark-accent: #7B4430;
  --divider-color: #eef3fd;
  --divider-color-hover: #E8AF8E;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #dc8a67;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #d0ddef62;
  --dropdown-background: #eef3fd;
  --dropdown-background-hover: #a6bbde;
  --embed-bg: #f1f5ff;
  --embed-block-shadow-hover: 2px 2px 0 #e1e9f6;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #e1e9f6;
  --embed-border-color: transparent;
  --embed-border-color-hover: #e1e9f6;
  --embed-border-left: 2px solid #E19363;
  --embed-border-left-color: #E19363;
  --embed-border-left-color-hover: #E19363;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #e1e9f6;
  --embed-border-start: 2px solid #dc8a67;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #e1e9f6;
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
  --fg: #91542E;
  --file-font: "its";
  --file-header-background: #f8fbff;
  --file-header-background-focused: #f8fbff;
  --file-header-breadcrumb-color: #a6bbde;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #a6bbde;
  --file-header-color-active: #697580;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #dc8a67;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #eef3fd;
  --file-icon: "";
  --file-icon-color: #a6bbde;
  --file-icon-margin: 6px;
  --file-text-color: #697580;
  --flair-background: #eef3fd;
  --flair-color: #697580;
  --folder: #BA5D4B;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #BA5D4B;
  --folder-icon-open-color: #EDB595;
  --folder-open: #EDB595;
  --folder-open-text-color: #697580;
  --folder-text-color: #697580;
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
  --footnote: #8996a0;
  --footnote-divider-color: #CCD6EB;
  --footnote-id-color: #CF9870;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #d0ddef62;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #a6bbde;
  --graph-arrow: #CF9870;
  --graph-background: #f8fbff;
  --graph-bg: #f8fbff;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #C48A69;
  --graph-focused: #E57858;
  --graph-img: #A9523C;
  --graph-line: rgba(255, 158, 89, 0.4);
  --graph-line-hover: #E8AF8E;
  --graph-lines: rgba(255, 158, 89, 0.4);
  --graph-node: #697580;
  --graph-node-attachment: #A9523C;
  --graph-node-focused: #E57858;
  --graph-node-hover-fill: #C48A69;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #dc8a67;
  --graph-node-unresolved: #a6bbde;
  --graph-tag: #dc8a67;
  --graph-text: #697580;
  --gray: var(--text-muted);
  --h1-background: transparent;
  --h1-border-color: #E19363;
  --h1-border-left-color: #CCD6EB;
  --h1-border-line-color: #CCD6EB;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #CCD6EB;
  --h1-border-width: 0;
  --h1-color: #E19363;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h1-weight: 500;
  --h2-background: transparent;
  --h2-border-color: #CF9870;
  --h2-border-left-color: #CCD6EB;
  --h2-border-line-color: #CCD6EB;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #CCD6EB;
  --h2-border-width: 0;
  --h2-color: #E19363;
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 500;
  --h3-background: transparent;
  --h3-border-color: #C16E43;
  --h3-border-left-color: #CCD6EB;
  --h3-border-line-color: #CCD6EB;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #CCD6EB;
  --h3-border-width: 0;
  --h3-color: #E19363;
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 500;
  --h4-background: transparent;
  --h4-border-color: #a6bbde;
  --h4-border-left-color: #CCD6EB;
  --h4-border-line-color: #CCD6EB;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #CCD6EB;
  --h4-border-width: 0;
  --h4-color: #E19363;
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 500;
  --h5-background: transparent;
  --h5-border-color: #e48751;
  --h5-border-left-color: #CCD6EB;
  --h5-border-line-color: #CCD6EB;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #CCD6EB;
  --h5-border-width: 0;
  --h5-color: #E19363;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 500;
  --h6-background: transparent;
  --h6-border-color: #a6bbde;
  --h6-border-left-color: #CCD6EB;
  --h6-border-line-color: #CCD6EB;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: #CCD6EB;
  --h6-border-width: 0;
  --h6-color: #E19363;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 500;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #E19363;
  --he-text-on-accent-inactive: #697580;
  --he-title-bar-active-action: #C48A69;
  --he-title-bar-active-bg: #f1f5ff;
  --he-title-bar-active-fg: #697580;
  --he-title-bar-active-pinned-bg: #f8fbff;
  --he-title-bar-inactive-action: #CF9870;
  --he-title-bar-inactive-bg: #f8fbff;
  --he-title-bar-inactive-fg: #a6bbde;
  --he-title-bar-inactive-pinned-bg: #f8fbff;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #CCD6EB;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 500;
  --headerFont: var(--font-text);
  --headers: #E19363;
  --heading-formatting: #a6bbde;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(255, 158, 89, 0.4);
  --hr: #CFC2BB;
  --hr-alignment: -50%, -50%;
  --hr-color: #CFC2BB;
  --hr-f: "Material Icons Sharp";
  --hr-icon-background: #f8fbff;
  --hr-icon-color: #E19363;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "";
  --hr-sym: "";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(253, 157, 115, 0.25);
  --hvr-active: rgba(255, 158, 89, 0.4);
  --hvr2: rgba(255, 158, 89, 0.4);
  --i-at: #C16E43;
  --icon-btn-radius: 0;
  --icon-color: #CF9870;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #697580;
  --icon-color-hover: #697580;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --icons: #d04e4e;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #e1e9f6;
  --illusion-h1-background: #E19363;
  --illusion-h2-background: #CF9870;
  --illusion-h3-background: #C16E43;
  --illusion-h4-background: #a6bbde;
  --illusion-h5-background: #e48751;
  --illusion-h6-background: #a6bbde;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: #d0ddef62;
  --image-border-color: #CCD6EB;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #a6bbde;
  --indentation-guide-color: #CFC2BB;
  --indentation-guide-color-active: #E8AF8E;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #CFC2BB;
  --initiative-xp: sandybrown;
  --inline-title-color: #E19363;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --inline-title-weight: 500;
  --input-bg: #d0ddef62;
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #e1e9f6;
  --input-shadow-hover: 3px 3px 0 #e1e9f6;
  --interactive-accent: #dc8a67;
  --interactive-accent-hover: #a6bbde;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #a6bbde;
  --interactive-normal: #eef3fd;
  --its: "its";
  --kanban-button-background: #f1f5ff;
  --kanban-button-shadow: 2px 2px 0 #e1e9f6;
  --kanban-card-border: 2px solid #e1e9f6;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #f8fbff;
  --kanban-card-text-color: #697580;
  --kanban-card-title-background: #f8fbff;
  --kanban-card-title-border: 0 1px 0 #e1e9f6;
  --kanban-lane-background: #f1f5ff;
  --kanban-lane-border: 3px solid #e1e9f6;
  --kanban-lane-box-shadow: 2px 2px 0 #e1e9f6;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #E57858;
  --kanban-tag-background: #e48751;
  --latex-color: #C48A69;
  --latex-format-color: #a6bbde;
  --latex-syntax-color: #CF9870;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-tight: 1.3em;
  --lines: #CFC2BB;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #E57858;
  --link-color-hover: #C48A69;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #E57858;
  --link-external-color-hover: #A9523C;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #a6bbde;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #CCD6EB;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #CFC2BB;
  --list-color-2: #CFC2BB;
  --list-color-3: #CFC2BB;
  --list-color-4: #CFC2BB;
  --list-color-5: #CFC2BB;
  --list-color-6: #CFC2BB;
  --list-indent: 25px;
  --list-marker-color: #E8AF8E;
  --list-marker-color-collapsed: #a6bbde;
  --list-marker-color-hover: #CF9870;
  --list-marker-color-other: #A9523C;
  --list-marker-min-width: 0;
  --list-numbered-color: #C48A69;
  --list-spacing: 1px;
  --lite-accent: #C48A69;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #f8fbff;
  --menu-border-color: #e1e9f6;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #e1e9f6;
  --message-border-color: #e1e9f6;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #e1e9f6;
  --message-color: #e5ebee;
  --metadata-border-color: #CCD6EB;
  --metadata-button-text-color: #a6bbde;
  --metadata-divider-color: #CCD6EB;
  --metadata-icon-color: #CF9870;
  --metadata-input-background-active: #d0ddef62;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #697580;
  --metadata-label-background-active: #d0ddef62;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #CF9870;
  --metadata-label-text-color-hover: #CF9870;
  --metadata-property-background-active: rgba(255, 158, 89, 0.4);
  --metadata-property-box-shadow-focus: 0 0 0 2px #E8AF8E;
  --metadata-property-box-shadow-hover: 0 0 0 1px #e1e9f6;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #e5ebee;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #CF9870;
  --metadata-title-icon: "";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #f8fbff;
  --modal-border-color: #e1e9f6;
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
  --nav-heading-color-collapsed-hover: #CF9870;
  --nav-heading-color-hover: #697580;
  --nav-indentation-guide-color: #CFC2BB;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #dc8a67;
  --nav-item-background-border-color-hover: #dc8a67;
  --nav-item-background-hover: #dc8a67;
  --nav-item-background-selected: rgba(253, 157, 115, 0.25);
  --nav-item-border-color: #C48A69;
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
  --nav-tag-color-active: #CF9870;
  --nav-tag-color-hover: #CF9870;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #f8fbff;
  --note-rgb: 248, 251, 255;
  --note-title-border-color: #E19363;
  --outer-bar: #eef3fd;
  --outline: #e1e9f6;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #f8fbff;
  --pdf-background: #f8fbff;
  --pdf-page-background: #f8fbff;
  --pdf-sidebar-background: #f8fbff;
  --pill-border-color: #CCD6EB;
  --pill-border-color-hover: #e1e9f6;
  --pill-color: #CF9870;
  --pill-color-hover: #697580;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #E57858;
  --pill-radius: 0;
  --popover-background: #f8fbff;
  --popover-border: 3px solid #e1e9f6;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #E8AF8E;
  --progress-bg: #e1e9f6;
  --prompt-background: #f8fbff;
  --prompt-border-color: #e1e9f6;
  --prompt-border-width: 3px;
  --r-heading-color: #E19363;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 500;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #C48A69;
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
  --scrollbar-active-thumb-bg: #C48A69;
  --scrollbar-bg: #e1e9f6;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #e48751;
  --scrollbar-track-bg: #f8fbff;
  --search-border: 2px solid #e1e9f6;
  --search-box-shadow: 2px 2px 0 #e1e9f6;
  --search-clear-button-color: #CF9870;
  --search-icon-color: #CF9870;
  --search-result-background: #f8fbff;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #697580;
  --setting-item-alt-background-hover: #d0ddef62;
  --setting-item-background-hover: rgba(253, 157, 115, 0.25);
  --setting-item-border-color: #CCD6EB;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #E19363;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #d0ddef62;
  --setting-items-background: transparent;
  --setting-items-border-color: #CCD6EB;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #e1e9f6;
  --shadow-m: 3px 3px 0 #e1e9f6;
  --shadow-ml: 4px 4px 0 #e1e9f6;
  --shadow-s: 2px 2px 0 #e1e9f6;
  --side-bar: #f8fbff;
  --side-bar-bg: #eef3fd;
  --sidebar-icon-color: #697580;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #E19363;
  --sidebar-tab-background-color-hover: #E8AF8E;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #E19363;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #f8fbff;
  --slider-thumb-border-color: #e1e9f6;
  --slider-thumb-radius: 0;
  --slider-track-background: #CCD6EB;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #CF9870;
  --statblock-alt: #d0ddef62;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #f8fbff;
  --statblock-bar-border-color: #E8AF8E;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #E8AF8E;
  --statblock-border-color: #CFC2BB;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #e1e9f6;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #697580;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #E19363;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 500;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #CFC2BB;
  --statblock-primary-color: #697580;
  --statblock-property-font-color: #697580;
  --statblock-property-name-font-color: #E19363;
  --statblock-rule-color: #E8AF8E;
  --statblock-section-heading-border-color: #CCD6EB;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #8996a0;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 500;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #eef3fd;
  --status-bar-border-color: #E8AF8E;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #CF9870;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #dc8a67;
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
  --tab-divider-color: #CFC2BB;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #E8AF8E;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #d0ddef62;
  --tab-stacked-shadow-color: #d0ddef62;
  --tab-switcher-background: #f8fbff;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8fbff, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #e1e9f6;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #e1e9f6;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #C48A69, 5px 5px 0 #e1e9f6;
  --tab-text-color: #a6bbde;
  --tab-text-color-active: #697580;
  --tab-text-color-focused: #a6bbde;
  --tab-text-color-focused-active: #697580;
  --tab-text-color-focused-active-current: #697580;
  --tab-text-color-focused-highlighted: #E57858;
  --tab-text-color-hover: #697580;
  --tab-top-outline-width: 0;
  --table: #CCD6EB;
  --table-add-button-background: #E19363;
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
  --table-drag-handle-background-active: #dc8a67;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #dc8a67;
  --table-header-background-hover: #E8AF8E;
  --table-header-border-color: #f8fbff;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #C48A69;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #d0ddef62;
  --table-row-alt-background-hover: rgba(255, 158, 89, 0.4);
  --table-row-background-hover: rgba(255, 158, 89, 0.4);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #dc8a67;
  --table-selection-border-radius: 0;
  --tag: #e48751;
  --tag-background: #e48751;
  --tag-background-color: #e48751;
  --tag-background-hover: #E8AF8E;
  --tag-border-color: #e48751;
  --tag-border-color-hover: #E8AF8E;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #C48A69;
  --tall: 700px;
  --td: #d0ddef62;
  --tertiary: var(--text-accent-hover);
  --text: #697580;
  --text-accent: #E57858;
  --text-accent-hover: #A9523C;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(253, 157, 115, 0.25);
  --text-highlight-bg-active: rgba(255, 158, 89, 0.4);
  --text-muted: #CF9870;
  --text-normal: #697580;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(255, 158, 89, 0.4);
  --textHighlight: var(--text-highlight-bg);
  --th: #dc8a67;
  --th-text: #e5ebee;
  --theme-rainbow-1: #E19363;
  --theme-rainbow-2: #CF9870;
  --theme-rainbow-3: #C16E43;
  --theme-rainbow-4: #a6bbde;
  --theme-rainbow-5: #e48751;
  --theme-rainbow-6: #a6bbde;
  --tiny: 100px;
  --titleFont: var(--font-text);
  --titlebar-background: #f8fbff;
  --titlebar-background-focused: #eef3fd;
  --titlebar-border-color: #CCD6EB;
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
  --vault-name-color: #E19363;
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
  background-color: rgba(253, 157, 115, 0.25);
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
  color: rgb(207, 152, 112);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(207, 152, 112) none 0px;
  text-decoration: rgb(207, 152, 112);
  text-decoration-color: rgb(207, 152, 112);
}`,
    links: `body a.external, footer a {
  color: rgb(229, 120, 88);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(229, 120, 88) none 0px;
  text-decoration: rgb(229, 120, 88);
  text-decoration-color: rgb(229, 120, 88);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(229, 120, 88);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(229, 120, 88) none 0px;
  text-decoration: rgb(229, 120, 88);
  text-decoration-color: rgb(229, 120, 88);
}

body a.internal.broken {
  color: rgb(166, 187, 222);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(166, 187, 222) none 0px;
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
  background-color: rgb(220, 138, 103);
}`,
    code: `body code {
  border-bottom-color: rgb(234, 117, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(234, 117, 66);
  border-right-color: rgb(234, 117, 66);
  border-top-color: rgb(234, 117, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(234, 117, 66);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
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
  background-color: rgb(238, 243, 253);
  border-bottom-color: rgb(207, 152, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(207, 152, 112);
  border-right-color: rgb(207, 152, 112);
  border-top-color: rgb(207, 152, 112);
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
  border-left-color: rgb(220, 138, 103);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(220, 138, 103);
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
  color: rgb(166, 187, 222);
  text-decoration: rgb(166, 187, 222);
  text-decoration-color: rgb(166, 187, 222);
}

body input[type=checkbox] {
  border-bottom-color: rgb(232, 175, 142);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(232, 175, 142);
  border-right-color: rgb(232, 175, 142);
  border-top-color: rgb(232, 175, 142);
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
  color: rgb(207, 152, 112);
  text-decoration: rgb(207, 152, 112);
  text-decoration-color: rgb(207, 152, 112);
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
  border-bottom-color: rgb(225, 233, 246);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(225, 233, 246);
  border-left-width: 3px;
  border-right-color: rgb(225, 233, 246);
  border-right-width: 3px;
  border-top-color: rgb(225, 233, 246);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(225, 233, 246) 5px 5px 0px 0px;
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
  background-color: rgba(255, 158, 89, 0.4);
  color: rgb(105, 117, 128);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(225, 233, 246);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(225, 233, 246);
  border-left-width: 3px;
  border-right-color: rgb(225, 233, 246);
  border-right-width: 3px;
  border-top-color: rgb(225, 233, 246);
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
  background-color: rgba(255, 158, 89, 0.4);
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
  background-color: rgba(255, 158, 89, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(228, 135, 81);
  border-bottom-color: rgb(228, 135, 81);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 135, 81);
  border-right-color: rgb(228, 135, 81);
  border-top-color: rgb(228, 135, 81);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(225, 147, 99);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2 {
  color: rgb(225, 147, 99);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(225, 147, 99);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h3 {
  color: rgb(225, 147, 99);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h4 {
  color: rgb(225, 147, 99);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h5 {
  color: rgb(225, 147, 99);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h6 {
  color: rgb(225, 147, 99);
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
  background-color: rgb(220, 138, 103);
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
  border-bottom-color: rgb(207, 152, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(207, 152, 112);
  border-right-color: rgb(207, 152, 112);
  border-top-color: rgb(207, 152, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(207, 152, 112);
}`,
    footer: `body footer {
  background-color: rgb(238, 243, 253);
  border-bottom-color: rgb(232, 175, 142);
  border-left-color: rgb(232, 175, 142);
  border-right-color: rgb(232, 175, 142);
  border-top-color: rgb(232, 175, 142);
  border-top-left-radius: 0px;
  color: rgb(207, 152, 112);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(207, 152, 112);
  text-decoration: rgb(207, 152, 112);
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
  border-bottom-color: rgb(207, 152, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(207, 152, 112);
  border-right-color: rgb(207, 152, 112);
  border-top-color: rgb(207, 152, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(207, 152, 112);
}

body .darkmode svg {
  color: rgb(207, 152, 112);
  stroke: rgb(207, 152, 112);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(166, 187, 222);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(166, 187, 222);
  border-right-color: rgb(166, 187, 222);
  border-top-color: rgb(166, 187, 222);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(166, 187, 222);
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
  color: rgb(207, 152, 112);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(207, 152, 112);
  border-left-color: rgb(207, 152, 112);
  border-right-color: rgb(207, 152, 112);
  border-top-color: rgb(207, 152, 112);
  color: rgb(207, 152, 112);
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
  border-bottom-color: rgb(207, 152, 112);
  border-left-color: rgb(207, 152, 112);
  border-right-color: rgb(207, 152, 112);
  border-top-color: rgb(207, 152, 112);
  color: rgb(207, 152, 112);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(234, 117, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(234, 117, 66);
  border-right-color: rgb(234, 117, 66);
  border-top-color: rgb(234, 117, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(225, 233, 246) 0px 2px 0px 0px;
  color: rgb(234, 117, 66);
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
