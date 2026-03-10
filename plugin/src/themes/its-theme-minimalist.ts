import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.minimalist",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #546078;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #42536e;
  --accent2-lite: #e5ebee;
  --aside-bg: #1a1e24;
  --background-modifier-active-hover: #394151;
  --background-modifier-border: #252c36;
  --background-modifier-border-focus: #546078;
  --background-modifier-border-hover: #252c36;
  --background-modifier-cover: #06080c50;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #06080c50;
  --background-modifier-form-field-hover: #06080c50;
  --background-modifier-hover: rgba(101, 124, 156, 0.4);
  --background-modifier-message: #394151;
  --background-modifier-success: #32603e;
  --background-primary: #1a1e24;
  --background-primary-alt: #1a1e24;
  --background-secondary: #1a1e24;
  --background-secondary-alt: #1a1e24;
  --bases-cards-background: #1a1e24;
  --bases-cards-cover-background: #1a1e24;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #252c36;
  --bases-cards-shadow-hover: 0 0 0 1px #252c36;
  --bases-embed-border-color: #252c36;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #97a1b9;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #1a1e24;
  --bases-table-cell-background-active: #1a1e24;
  --bases-table-cell-background-disabled: #1a1e24;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #546078;
  --bases-table-cell-shadow-focus: 0 0 0 2px #394151;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #1a1e24;
  --bases-table-header-background: #1a1e24;
  --bases-table-header-background-hover: rgba(101, 124, 156, 0.4);
  --bases-table-header-color: #97a1b9;
  --bases-table-row-background-hover: rgba(81, 100, 122, 0.6);
  --bases-table-summary-background: #1a1e24;
  --bases-table-summary-background-hover: rgba(101, 124, 156, 0.4);
  --bg: #252c36;
  --blockquote-background-color: #1a1e24;
  --blockquote-border-color: #252c36;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #bccad8;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #1a1e24 65%, transparent) linear-gradient(#1a1e24, color-mix(in srgb, #1a1e24 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #0b0f13;
  --box-border-m: 3px solid #0b0f13;
  --box-border-s: 1px solid #0b0f13;
  --bttn: #394151;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #394151;
  --button-background-hover: #586477;
  --button-border: #394151;
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
  --checkbox-border-color: #546078;
  --checkbox-border-color-hover: #394151;
  --checkbox-color: #546078;
  --checkbox-color-hover: #394151;
  --checkbox-marker-color: #1a1e24;
  --checkbox-radius: 0;
  --checklist-done-color: #586477;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #232831;
  --code-bg: #232831;
  --code-border-color: #252c36;
  --code-bracket-background: rgba(101, 124, 156, 0.4);
  --code-comment: #4e5b6f;
  --code-normal: #bccad8;
  --code-punctuation: #97a1b9;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #0b0f13;
  --code-size: .90em;
  --code-text: #bccad8;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #586477;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(199, 87, 92);
  --color-accent-2: rgb(209, 113, 121);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark: var(--text-normal);
  --dark-accent: #394151;
  --dark-sidebar: #1a1e24;
  --darkgray: var(--text-normal);
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(, 10%);
  --dataview-th-background: #1a1e24;
  --dataview-th-border-bottom: 2px solid #bccad8;
  --dataview-th-color: #bccad8;
  --dataview-th-count-color: #bccad8;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #1a1e24;
  --divider-color: #1a1e24;
  --divider-color-hover: #546078;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #394151;
  --drag-ghost-text-color: #bccad8;
  --drop-shadow: #06080c60;
  --dropdown-background: #1a1e24;
  --dropdown-background-hover: #586477;
  --embed-bg: #1a1e24;
  --embed-block-shadow-hover: 2px 2px 0 #0b0f13;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #0b0f13;
  --embed-border-color: transparent;
  --embed-border-color-hover: #0b0f13;
  --embed-border-left: 2px solid #bccad8;
  --embed-border-left-color: #bccad8;
  --embed-border-left-color-hover: #bccad8;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #0b0f13;
  --embed-border-start: 2px solid #394151;
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
  --file-header-left-color: #394151;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #1a1e24;
  --file-icon-color: #aab3ca;
  --file-icon-margin: 6px;
  --file-text-color: #bccad8;
  --flair-background: #1a1e24;
  --flair-color: #bccad8;
  --folder: #e5ebee;
  --folder-font: "its";
  --folder-icon-color: #e5ebee;
  --folder-icon-open-color: #e05858;
  --folder-open: #e05858;
  --folder-open-text-color: #bccad8;
  --folder-text-color: #bccad8;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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
  --footnote-divider-color: #252c36;
  --footnote-id-color: #97a1b9;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #06080c50;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #727e93;
  --graph-arrow: #97a1b9;
  --graph-background: #1a1e24;
  --graph-bg: #1a1e24;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #bccad8;
  --graph-focused: rgba(101, 124, 156, 0.4);
  --graph-img: #6b90ad;
  --graph-line: #363c4950;
  --graph-line-hover: #546078;
  --graph-lines: #363c4950;
  --graph-node: #cfd7dd;
  --graph-node-attachment: #6b90ad;
  --graph-node-focused: rgba(101, 124, 156, 0.4);
  --graph-node-hover-fill: #bccad8;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: black;
  --graph-node-unresolved: #727e93;
  --graph-tag: black;
  --graph-text: #bccad8;
  --gray: var(--text-muted);
  --h1-background: transparent;
  --h1-border-color: #727e93;
  --h1-border-left-color: #252c36;
  --h1-border-line-color: #252c36;
  --h1-border-line-height: 0;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #252c36;
  --h1-border-width: 0;
  --h1-color: #bccad8;
  --h1-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #546078;
  --h2-border-left-color: #252c36;
  --h2-border-line-color: #252c36;
  --h2-border-line-height: 0;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #252c36;
  --h2-border-width: 0;
  --h2-color: #bccad8;
  --h2-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #394151;
  --h3-border-left-color: #252c36;
  --h3-border-line-color: #252c36;
  --h3-border-line-height: 0;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #252c36;
  --h3-border-width: 0;
  --h3-color: #bccad8;
  --h3-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #232831;
  --h4-border-left-color: #252c36;
  --h4-border-line-color: #252c36;
  --h4-border-line-height: 0;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #252c36;
  --h4-border-width: 0;
  --h4-color: #bccad8;
  --h4-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #06080c50;
  --h5-border-left-color: #252c36;
  --h5-border-line-color: #252c36;
  --h5-border-line-height: 0;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #252c36;
  --h5-border-width: 0;
  --h5-color: #bccad8;
  --h5-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: black;
  --h6-border-left-color: #252c36;
  --h6-border-line-color: #252c36;
  --h6-border-line-height: 0;
  --h6-border-line-width: 0;
  --h6-border-right-color: #252c36;
  --h6-border-width: 0;
  --h6-color: #bccad8;
  --h6-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #bccad8;
  --he-text-on-accent-inactive: #bccad8;
  --he-title-bar-active-action: #aab3ca;
  --he-title-bar-active-bg: #1a1e24;
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
  --header-border-line-color: #252c36;
  --header-border-line-height: 0;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 700;
  --headerFont: var(--font-text);
  --headers: #bccad8;
  --heading-formatting: #586477;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(81, 100, 122, 0.6);
  --hr: #2f3b4d;
  --hr-alignment: -50%, -50%;
  --hr-color: #2f3b4d;
  --hr-icon-background: #1a1e24;
  --hr-icon-color: #bccad8;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(87, 113, 156, 0.4);
  --hvr-active: rgba(101, 124, 156, 0.4);
  --hvr2: rgba(81, 100, 122, 0.6);
  --i-at: #4e5b6f;
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
  --illusion-h1-background: #727e93;
  --illusion-h2-background: #546078;
  --illusion-h3-background: #394151;
  --illusion-h4-background: #232831;
  --illusion-h5-background: #06080c50;
  --illusion-h6-background: black;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: #06080c50;
  --image-border-color: #252c36;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #586477;
  --indentation-guide-color: #2f3b4d;
  --indentation-guide-color-active: #546078;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #2f3b4d;
  --initiative-xp: sandybrown;
  --inline-title-color: #bccad8;
  --inline-title-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: rgba(0, 0, 0, 0.3);
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #0b0f13;
  --input-shadow-hover: 3px 3px 0 #0b0f13;
  --interactive-accent: #394151;
  --interactive-accent-hover: #586477;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #586477;
  --interactive-normal: #1a1e24;
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
  --kanban-link-color: #e5ebee;
  --kanban-tag-background: #1a1e24;
  --latex-color: #aab3ca;
  --latex-format-color: #586477;
  --latex-syntax-color: #97a1b9;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-tight: 1.3em;
  --lines: #2f3b4d;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #e5ebee;
  --link-color-hover: #aab3ca;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #e5ebee;
  --link-external-color-hover: #42536e;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #586477;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #252c36;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #2f3b4d;
  --list-color-2: #2f3b4d;
  --list-color-3: #2f3b4d;
  --list-color-4: #2f3b4d;
  --list-color-5: #2f3b4d;
  --list-color-6: #2f3b4d;
  --list-indent: 25px;
  --list-marker-color: #546078;
  --list-marker-color-collapsed: #586477;
  --list-marker-color-hover: #97a1b9;
  --list-marker-color-other: #42536e;
  --list-marker-min-width: 0;
  --list-numbered-color: #aab3ca;
  --list-spacing: 1px;
  --lite-accent: #aab3ca;
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
  --metadata-border-color: #252c36;
  --metadata-button-text-color: #586477;
  --metadata-divider-color: #252c36;
  --metadata-icon-color: #97a1b9;
  --metadata-input-background-active: #06080c50;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #bccad8;
  --metadata-label-background-active: #06080c50;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #97a1b9;
  --metadata-label-text-color-hover: #97a1b9;
  --metadata-property-background-active: rgba(101, 124, 156, 0.4);
  --metadata-property-box-shadow-focus: 0 0 0 2px #546078;
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
  --modal-border-color: #252c36;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: #06080c50;
  --modal-radius: 0;
  --modal-sidebar-background: #1a1e24;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #bccad8;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #97a1b9;
  --nav-heading-color-hover: #bccad8;
  --nav-indentation-guide-color: #2f3b4d;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #394151;
  --nav-item-background-border-color-hover: #394151;
  --nav-item-background-hover: #394151;
  --nav-item-background-selected: rgba(87, 113, 156, 0.4);
  --nav-item-border-color: #bccad8;
  --nav-item-border-width: 2px;
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
  --note-title-border-color: #bccad8;
  --outer-bar: #1a1e24;
  --outline: #0b0f13;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #1a1e24;
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #252c36;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #252c36;
  --pill-border-color: #252c36;
  --pill-border-color-hover: #252c36;
  --pill-color: #97a1b9;
  --pill-color-hover: #bccad8;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #e5ebee;
  --pill-radius: 0;
  --popover-background: #1a1e24;
  --popover-border: 3px solid #0b0f13;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #546078;
  --progress-bg: #252c36;
  --prompt-background: #1a1e24;
  --prompt-border-color: #0b0f13;
  --prompt-border-width: 3px;
  --r-heading-color: #bccad8;
  --r-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #aab3ca;
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
  --raised-background: color-mix(in srgb, #1a1e24 65%, transparent) linear-gradient(#1a1e24, color-mix(in srgb, #1a1e24 65%, transparent));
  --ribbon-background: #1a1e24;
  --ribbon-background-collapsed: #1a1e24;
  --ribbon-border-color: #1a1e24;
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
  --scrollbar-active-thumb-bg: #aab3ca;
  --scrollbar-bg: #252c36;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #1a1e24;
  --scrollbar-track-bg: #1a1e24;
  --search-border: 2px solid #0b0f13;
  --search-box-shadow: 2px 2px 0 #0b0f13;
  --search-clear-button-color: #97a1b9;
  --search-icon-color: #97a1b9;
  --search-result-background: #1a1e24;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #bccad8;
  --setting-item-alt-background-hover: #06080c50;
  --setting-item-background-hover: rgba(87, 113, 156, 0.4);
  --setting-item-border-color: #252c36;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #546078;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #06080c50;
  --setting-items-background: transparent;
  --setting-items-border-color: #252c36;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #0b0f13;
  --shadow-m: 3px 3px 0 #0b0f13;
  --shadow-ml: 4px 4px 0 #0b0f13;
  --shadow-s: 2px 2px 0 #0b0f13;
  --side-bar: #1a1e24;
  --side-bar-bg: #1a1e24;
  --sidebar-icon-color: #bccad8;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #394151;
  --sidebar-tab-background-color-hover: #546078;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #394151;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #1a1e24;
  --slider-thumb-border-color: #252c36;
  --slider-thumb-radius: 0;
  --slider-track-background: #252c36;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #97a1b9;
  --statblock-alt: #06080c50;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #1a1e24;
  --statblock-bar-border-color: #546078;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #546078;
  --statblock-border-color: #2f3b4d;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #0b0f13;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #bccad8;
  --statblock-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-heading-font-color: #bccad8;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #2f3b4d;
  --statblock-primary-color: #bccad8;
  --statblock-property-font-color: #bccad8;
  --statblock-property-name-font-color: #bccad8;
  --statblock-rule-color: #546078;
  --statblock-section-heading-border-color: #252c36;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-section-heading-font-color: #63778f;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #1a1e24;
  --status-bar-border-color: #546078;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #97a1b9;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #394151;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --success-bg: #32603e;
  --suggestion-background: #1a1e24;
  --tab-background: #1a1e24;
  --tab-background-active: #1a1e24;
  --tab-container-background: #1a1e24;
  --tab-curve: 0;
  --tab-divider-color: #2f3b4d;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: transparent;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px #aab3ca, 5px 5px 0 #0b0f13;
  --tab-text-color: #586477;
  --tab-text-color-active: #bccad8;
  --tab-text-color-focused: #586477;
  --tab-text-color-focused-active: #bccad8;
  --tab-text-color-focused-active-current: #bccad8;
  --tab-text-color-focused-highlighted: #e5ebee;
  --tab-text-color-hover: #bccad8;
  --tab-top-outline-width: 0;
  --table: #252c36;
  --table-add-button-background: #394151;
  --table-add-button-border-color: #1a1e24;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #1a1e24;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #06080c50;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #394151;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #1a1e24;
  --table-header-background-hover: #546078;
  --table-header-border-color: #1a1e24;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #aab3ca;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #06080c50;
  --table-row-alt-background-hover: rgba(81, 100, 122, 0.6);
  --table-row-background-hover: rgba(81, 100, 122, 0.6);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #394151;
  --table-selection-border-radius: 0;
  --tag: #1a1e24;
  --tag-background: #1a1e24;
  --tag-background-color: #1a1e24;
  --tag-background-hover: #546078;
  --tag-border-color: #1a1e24;
  --tag-border-color-hover: #546078;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #e5ebee;
  --tall: 700px;
  --td: #06080c50;
  --tertiary: var(--text-accent-hover);
  --text: #bccad8;
  --text-accent: #e5ebee;
  --text-accent-hover: #42536e;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(87, 113, 156, 0.4);
  --text-highlight-bg-active: rgba(101, 124, 156, 0.4);
  --text-muted: #97a1b9;
  --text-normal: #bccad8;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(81, 100, 122, 0.6);
  --textHighlight: var(--text-highlight-bg);
  --th: #1a1e24;
  --th-text: #e5ebee;
  --theme-rainbow-1: #727e93;
  --theme-rainbow-2: #546078;
  --theme-rainbow-3: #394151;
  --theme-rainbow-4: #232831;
  --theme-rainbow-5: #06080c50;
  --theme-rainbow-6: black;
  --tiny: 100px;
  --titleFont: var(--font-text);
  --titlebar-background: #1a1e24;
  --titlebar-background-focused: #1a1e24;
  --titlebar-border-color: #252c36;
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
  --vault-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --vault-name-color: #bccad8;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #bccad8;
  --vault-profile-color-hover: #bccad8;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 30, 36);
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
  border-right-color: rgb(26, 30, 36);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 30, 36);
  border-left-color: rgb(26, 30, 36);
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
  background-color: rgba(87, 113, 156, 0.4);
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
  color: rgb(229, 235, 238);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(229, 235, 238) none 0px;
  text-decoration: rgb(229, 235, 238);
  text-decoration-color: rgb(229, 235, 238);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(229, 235, 238);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(229, 235, 238) none 0px;
  text-decoration: rgb(229, 235, 238);
  text-decoration-color: rgb(229, 235, 238);
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
  background-color: rgb(26, 30, 36);
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
  background-color: rgba(6, 8, 12, 0.314);
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
  background-color: rgb(26, 30, 36);
}`,
    code: `body code {
  border-bottom-color: rgb(188, 202, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(37, 44, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(37, 44, 54);
  border-right-color: rgb(37, 44, 54);
  border-top-color: rgb(37, 44, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(37, 44, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(37, 44, 54);
  border-right-color: rgb(37, 44, 54);
  border-top-color: rgb(37, 44, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

body pre > code, pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(37, 44, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(37, 44, 54);
  border-right-color: rgb(37, 44, 54);
  border-top-color: rgb(37, 44, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(37, 44, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(37, 44, 54);
  border-right-color: rgb(37, 44, 54);
  border-top-color: rgb(37, 44, 54);
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
  background-color: rgb(26, 30, 36);
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
  border-left-color: rgb(57, 65, 81);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(57, 65, 81);
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
  border-bottom-color: rgb(84, 96, 120);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(84, 96, 120);
  border-right-color: rgb(84, 96, 120);
  border-top-color: rgb(84, 96, 120);
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
  background-color: rgba(6, 8, 12, 0.314);
  border-bottom-color: rgb(37, 44, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(37, 44, 54);
  border-right-color: rgb(37, 44, 54);
  border-top-color: rgb(37, 44, 54);
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
  background-color: rgba(101, 124, 156, 0.4);
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
  background-color: rgba(101, 124, 156, 0.4);
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
  background-color: rgba(101, 124, 156, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(26, 30, 36);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(26, 30, 36);
  border-right-color: rgb(26, 30, 36);
  border-top-color: rgb(26, 30, 36);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(188, 202, 216);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h2 {
  color: rgb(188, 202, 216);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(188, 202, 216);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h3 {
  color: rgb(188, 202, 216);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h4 {
  color: rgb(188, 202, 216);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h5 {
  color: rgb(188, 202, 216);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h6 {
  color: rgb(188, 202, 216);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body hr {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(26, 30, 36);
  border-right-color: rgb(26, 30, 36);
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
  background-color: rgb(57, 65, 81);
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
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(84, 96, 120);
  border-left-color: rgb(84, 96, 120);
  border-right-color: rgb(84, 96, 120);
  border-top-color: rgb(84, 96, 120);
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
  border-bottom-color: rgb(37, 44, 54);
  border-left-color: rgb(37, 44, 54);
  border-right-color: rgb(37, 44, 54);
  border-top-color: rgb(37, 44, 54);
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
  background-color: rgb(26, 30, 36);
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
  border-bottom-color: rgb(188, 202, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(11, 15, 19) 0px 2px 0px 0px;
  color: rgb(188, 202, 216);
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
  --accent: #b5c2d8;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #d6def3;
  --accent2-lite: #000000;
  --aside-bg: #f8fbff;
  --background-modifier-active-hover: #d5ddeb;
  --background-modifier-border: #ccd6eb;
  --background-modifier-border-focus: #b5c2d8;
  --background-modifier-border-hover: #eef3ff;
  --background-modifier-cover: #d0ddef62;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #d0ddef62;
  --background-modifier-form-field-highlighted: #99a4bb30;
  --background-modifier-form-field-hover: #d0ddef62;
  --background-modifier-hover: #99a4bb50;
  --background-modifier-message: #d5ddeb;
  --background-modifier-success: #599049;
  --background-primary: #f8fbff;
  --background-primary-alt: #f8fbff;
  --background-secondary: #f8fbff;
  --background-secondary-alt: #f8fbff;
  --bases-cards-background: #f8fbff;
  --bases-cards-cover-background: #f8fbff;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #ccd6eb;
  --bases-cards-shadow-hover: 0 0 0 1px #eef3ff;
  --bases-embed-border-color: #ccd6eb;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #99a4bb;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #f8fbff;
  --bases-table-cell-background-active: #f8fbff;
  --bases-table-cell-background-disabled: #f8fbff;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #b5c2d8;
  --bases-table-cell-shadow-focus: 0 0 0 2px #d5ddeb;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #f8fbff;
  --bases-table-header-background: #f8fbff;
  --bases-table-header-background-hover: #99a4bb50;
  --bases-table-header-color: #99a4bb;
  --bases-table-row-background-hover: #99a4bb50;
  --bases-table-summary-background: #f8fbff;
  --bases-table-summary-background-hover: #99a4bb50;
  --bg: #eef3ff;
  --blockquote-background-color: #f8fbff;
  --blockquote-border-color: #eef3ff;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #30353a;
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
  --bttn: #d5ddeb;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #d5ddeb;
  --button-background-hover: #d2daee;
  --button-border: #d5ddeb;
  --button-border-radius: 0;
  --button-radius: 0;
  --button-text: #000000;
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
  --caret-color: #30353a;
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
  --checkbox-border-color: #b5c2d8;
  --checkbox-border-color-hover: #d5ddeb;
  --checkbox-color: #b5c2d8;
  --checkbox-color-hover: #d5ddeb;
  --checkbox-marker-color: #f8fbff;
  --checkbox-radius: 0;
  --checklist-done-color: #d2daee;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #f8fbff;
  --code-bg: #f8fbff;
  --code-border-color: #ccd6eb;
  --code-bracket-background: #99a4bb50;
  --code-comment: #4e5b6f;
  --code-normal: #30353a;
  --code-punctuation: #99a4bb;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #e1e9f6;
  --code-size: .90em;
  --code-text: #30353a;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #d2daee;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(194, 76, 78);
  --color-accent-2: rgb(199, 87, 92);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark: var(--text-normal);
  --dark-accent: #d5ddeb;
  --dark-sidebar: #f8fbff;
  --darkgray: var(--text-normal);
  --dataview-table-width: 100%;
  --dataview-th-background: #f8fbff;
  --dataview-th-border-bottom: 2px solid #30353a;
  --dataview-th-color: #30353a;
  --dataview-th-count-color: #30353a;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #f8fbff;
  --divider-color: #f8fbff;
  --divider-color-hover: #b5c2d8;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #d5ddeb;
  --drag-ghost-text-color: #30353a;
  --drop-shadow: #d0ddef62;
  --dropdown-background: #f8fbff;
  --dropdown-background-hover: #d2daee;
  --embed-bg: #f8fbff;
  --embed-block-shadow-hover: 2px 2px 0 #e1e9f6;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #e1e9f6;
  --embed-border-color: transparent;
  --embed-border-color-hover: #e1e9f6;
  --embed-border-left: 2px solid #30353a;
  --embed-border-left-color: #30353a;
  --embed-border-left-color-hover: #30353a;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #e1e9f6;
  --embed-border-start: 2px solid #d5ddeb;
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
  --fg: #b5c2d8;
  --file-font: "its";
  --file-header-background: #f8fbff;
  --file-header-background-focused: #f8fbff;
  --file-header-breadcrumb-color: #d2daee;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #d2daee;
  --file-header-color-active: #30353a;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #d5ddeb;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #f8fbff;
  --file-icon-color: #d2daee;
  --file-icon-margin: 6px;
  --file-text-color: #30353a;
  --flair-background: #f8fbff;
  --flair-color: #30353a;
  --folder: #000000;
  --folder-font: "its";
  --folder-icon-color: #000000;
  --folder-icon-open-color: #ce6d6d;
  --folder-open: #ce6d6d;
  --folder-open-text-color: #30353a;
  --folder-text-color: #30353a;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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
  --footnote-divider-color: #ccd6eb;
  --footnote-id-color: #99a4bb;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #d0ddef62;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #727e939c;
  --graph-arrow: #99a4bb;
  --graph-background: #f8fbff;
  --graph-bg: #f8fbff;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #30353a;
  --graph-focused: #b6c9f1;
  --graph-img: #8ec1e9;
  --graph-line: #e5e9f3;
  --graph-line-hover: #b5c2d8;
  --graph-lines: #e5e9f3;
  --graph-node: #30353a;
  --graph-node-attachment: #8ec1e9;
  --graph-node-focused: #b6c9f1;
  --graph-node-hover-fill: #30353a;
  --graph-node-hover-outline: #000000;
  --graph-node-tag: #000000;
  --graph-node-unresolved: #727e939c;
  --graph-tag: #000000;
  --graph-text: #30353a;
  --gray: var(--text-muted);
  --h1-background: transparent;
  --h1-border-color: #eef3ff;
  --h1-border-left-color: #ccd6eb;
  --h1-border-line-color: #ccd6eb;
  --h1-border-line-height: 0;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #ccd6eb;
  --h1-border-width: 0;
  --h1-color: #30353a;
  --h1-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #d0ddef62;
  --h2-border-left-color: #ccd6eb;
  --h2-border-line-color: #ccd6eb;
  --h2-border-line-height: 0;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #ccd6eb;
  --h2-border-width: 0;
  --h2-color: #30353a;
  --h2-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #e1e9f6;
  --h3-border-left-color: #ccd6eb;
  --h3-border-line-color: #ccd6eb;
  --h3-border-line-height: 0;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #ccd6eb;
  --h3-border-width: 0;
  --h3-color: #30353a;
  --h3-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #d2daee;
  --h4-border-left-color: #ccd6eb;
  --h4-border-line-color: #ccd6eb;
  --h4-border-line-height: 0;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #ccd6eb;
  --h4-border-width: 0;
  --h4-color: #30353a;
  --h4-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #b5c2d8;
  --h5-border-left-color: #ccd6eb;
  --h5-border-line-color: #ccd6eb;
  --h5-border-line-height: 0;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #ccd6eb;
  --h5-border-width: 0;
  --h5-color: #30353a;
  --h5-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #8ec1e9;
  --h6-border-left-color: #ccd6eb;
  --h6-border-line-color: #ccd6eb;
  --h6-border-line-height: 0;
  --h6-border-line-width: 0;
  --h6-border-right-color: #ccd6eb;
  --h6-border-width: 0;
  --h6-color: #30353a;
  --h6-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #30353a;
  --he-text-on-accent-inactive: #30353a;
  --he-title-bar-active-action: #aab3ca;
  --he-title-bar-active-bg: #f8fbff;
  --he-title-bar-active-fg: #30353a;
  --he-title-bar-active-pinned-bg: #f8fbff;
  --he-title-bar-inactive-action: #99a4bb;
  --he-title-bar-inactive-bg: #f8fbff;
  --he-title-bar-inactive-fg: #d2daee;
  --he-title-bar-inactive-pinned-bg: #f8fbff;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #ccd6eb;
  --header-border-line-height: 0;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 700;
  --headerFont: var(--font-text);
  --headers: #30353a;
  --heading-formatting: #d2daee;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: #99a4bb50;
  --hr: #d6deea;
  --hr-alignment: -50%, -50%;
  --hr-color: #d6deea;
  --hr-icon-background: #f8fbff;
  --hr-icon-color: #30353a;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: #99a4bb50;
  --hvr-active: #99a4bb50;
  --hvr2: #99a4bb50;
  --i-at: #99a4bb;
  --icon-btn-radius: 0;
  --icon-color: #99a4bb;
  --icon-color-active: #000000;
  --icon-color-focused: #30353a;
  --icon-color-hover: #30353a;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --icons: #d04e4e;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #e1e9f6;
  --illusion-h1-background: #eef3ff;
  --illusion-h2-background: #d0ddef62;
  --illusion-h3-background: #e1e9f6;
  --illusion-h4-background: #d2daee;
  --illusion-h5-background: #b5c2d8;
  --illusion-h6-background: #8ec1e9;
  --illusion-header-arrow-color: #000000;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #000000;
  --image-border-background: #d0ddef62;
  --image-border-color: #ccd6eb;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #d2daee;
  --indentation-guide-color: #d6deea;
  --indentation-guide-color-active: #b5c2d8;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #d6deea;
  --initiative-xp: sandybrown;
  --inline-title-color: #30353a;
  --inline-title-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: #d0ddef62;
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #e1e9f6;
  --input-shadow-hover: 3px 3px 0 #e1e9f6;
  --interactive-accent: #d5ddeb;
  --interactive-accent-hover: #d2daee;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #d2daee;
  --interactive-normal: #f8fbff;
  --its: "its";
  --kanban-button-background: #f8fbff;
  --kanban-button-shadow: 2px 2px 0 #e1e9f6;
  --kanban-card-border: 2px solid #e1e9f6;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #f8fbff;
  --kanban-card-text-color: #30353a;
  --kanban-card-title-background: #f8fbff;
  --kanban-card-title-border: 0 1px 0 #e1e9f6;
  --kanban-lane-background: #f8fbff;
  --kanban-lane-border: 3px solid #e1e9f6;
  --kanban-lane-box-shadow: 2px 2px 0 #e1e9f6;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #000000;
  --kanban-tag-background: #f8fbff;
  --latex-color: #aab3ca;
  --latex-format-color: #d2daee;
  --latex-syntax-color: #99a4bb;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-tight: 1.3em;
  --lines: #d6deea;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #000000;
  --link-color-hover: #aab3ca;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #000000;
  --link-external-color-hover: #d6def3;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #d2daee;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #ccd6eb;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #d6deea;
  --list-color-2: #d6deea;
  --list-color-3: #d6deea;
  --list-color-4: #d6deea;
  --list-color-5: #d6deea;
  --list-color-6: #d6deea;
  --list-indent: 25px;
  --list-marker-color: #b5c2d8;
  --list-marker-color-collapsed: #d2daee;
  --list-marker-color-hover: #99a4bb;
  --list-marker-color-other: #d6def3;
  --list-marker-min-width: 0;
  --list-numbered-color: #aab3ca;
  --list-spacing: 1px;
  --lite-accent: #aab3ca;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #f8fbff;
  --menu-border-color: #eef3ff;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #e1e9f6;
  --message-border-color: #e1e9f6;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #e1e9f6;
  --message-color: #000000;
  --metadata-border-color: #ccd6eb;
  --metadata-button-text-color: #d2daee;
  --metadata-divider-color: #ccd6eb;
  --metadata-icon-color: #99a4bb;
  --metadata-input-background-active: #d0ddef62;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #30353a;
  --metadata-label-background-active: #d0ddef62;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #99a4bb;
  --metadata-label-text-color-hover: #99a4bb;
  --metadata-property-background-active: #99a4bb50;
  --metadata-property-box-shadow-focus: 0 0 0 2px #b5c2d8;
  --metadata-property-box-shadow-hover: 0 0 0 1px #eef3ff;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #000000;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #99a4bb;
  --metadata-title-icon: "";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #f8fbff;
  --modal-border-color: #ccd6eb;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: #d0ddef62;
  --modal-radius: 0;
  --modal-sidebar-background: #f8fbff;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #30353a;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #99a4bb;
  --nav-heading-color-hover: #30353a;
  --nav-indentation-guide-color: #d6deea;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #d5ddeb;
  --nav-item-background-border-color-hover: #d5ddeb;
  --nav-item-background-hover: #d5ddeb;
  --nav-item-background-selected: #99a4bb50;
  --nav-item-border-color: #30353a;
  --nav-item-border-width: 2px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #30353a;
  --nav-item-color-active: #000000;
  --nav-item-color-highlighted: #000000;
  --nav-item-color-hover: #000000;
  --nav-item-color-selected: #30353a;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 0;
  --nav-item-size: 14px;
  --nav-item-weight: 500;
  --nav-item-weight-active: 700;
  --nav-item-weight-hover: 700;
  --nav-item-white-space: wrap;
  --nav-tag-color: #4e5b6f;
  --nav-tag-color-active: #99a4bb;
  --nav-tag-color-hover: #99a4bb;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #f8fbff;
  --note-rgb: 248, 251, 255;
  --note-title-border-color: #30353a;
  --outer-bar: #f8fbff;
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
  --pill-border-color: #ccd6eb;
  --pill-border-color-hover: #eef3ff;
  --pill-color: #99a4bb;
  --pill-color-hover: #30353a;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #000000;
  --pill-radius: 0;
  --popover-background: #f8fbff;
  --popover-border: 3px solid #e1e9f6;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #b5c2d8;
  --progress-bg: #eef3ff;
  --prompt-background: #f8fbff;
  --prompt-border-color: #e1e9f6;
  --prompt-border-width: 3px;
  --r-heading-color: #30353a;
  --r-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #aab3ca;
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
  --ribbon-background: #f8fbff;
  --ribbon-background-collapsed: #f8fbff;
  --ribbon-border-color: #f8fbff;
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
  --scrollbar-active-thumb-bg: #aab3ca;
  --scrollbar-bg: #eef3ff;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #f8fbff;
  --scrollbar-track-bg: #f8fbff;
  --search-border: 2px solid #e1e9f6;
  --search-box-shadow: 2px 2px 0 #e1e9f6;
  --search-clear-button-color: #99a4bb;
  --search-icon-color: #99a4bb;
  --search-result-background: #f8fbff;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #30353a;
  --setting-item-alt-background-hover: #d0ddef62;
  --setting-item-background-hover: #99a4bb50;
  --setting-item-border-color: #ccd6eb;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #b5c2d8;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #d0ddef62;
  --setting-items-background: transparent;
  --setting-items-border-color: #ccd6eb;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #e1e9f6;
  --shadow-m: 3px 3px 0 #e1e9f6;
  --shadow-ml: 4px 4px 0 #e1e9f6;
  --shadow-s: 2px 2px 0 #e1e9f6;
  --side-bar: #f8fbff;
  --side-bar-bg: #f8fbff;
  --sidebar-icon-color: #30353a;
  --sidebar-icon-color-active: #000000;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #d5ddeb;
  --sidebar-tab-background-color-hover: #b5c2d8;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #d5ddeb;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #000000;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #f8fbff;
  --slider-thumb-border-color: #eef3ff;
  --slider-thumb-radius: 0;
  --slider-track-background: #ccd6eb;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #99a4bb;
  --statblock-alt: #d0ddef62;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #f8fbff;
  --statblock-bar-border-color: #b5c2d8;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #b5c2d8;
  --statblock-border-color: #d6deea;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #e1e9f6;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #30353a;
  --statblock-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-heading-font-color: #30353a;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #d6deea;
  --statblock-primary-color: #30353a;
  --statblock-property-font-color: #30353a;
  --statblock-property-name-font-color: #30353a;
  --statblock-rule-color: #b5c2d8;
  --statblock-section-heading-border-color: #ccd6eb;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-section-heading-font-color: #8996a0;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #f8fbff;
  --status-bar-border-color: #b5c2d8;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #99a4bb;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #d5ddeb;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: #000000;
  --style-settings-heading-color-hover: #000000;
  --success-bg: #599049;
  --suggestion-background: #f8fbff;
  --tab-background: #f8fbff;
  --tab-background-active: #f8fbff;
  --tab-container-background: #f8fbff;
  --tab-curve: 0;
  --tab-divider-color: #d6deea;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: transparent;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px #aab3ca, 5px 5px 0 #e1e9f6;
  --tab-text-color: #d2daee;
  --tab-text-color-active: #30353a;
  --tab-text-color-focused: #d2daee;
  --tab-text-color-focused-active: #30353a;
  --tab-text-color-focused-active-current: #30353a;
  --tab-text-color-focused-highlighted: #000000;
  --tab-text-color-hover: #30353a;
  --tab-top-outline-width: 0;
  --table: #ccd6eb;
  --table-add-button-background: #d5ddeb;
  --table-add-button-border-color: #f8fbff;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #000000;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #f8fbff;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #d0ddef62;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #d5ddeb;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #000000;
  --table-header-background: #f8fbff;
  --table-header-background-hover: #b5c2d8;
  --table-header-border-color: #f8fbff;
  --table-header-color: #000000;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #aab3ca;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #d0ddef62;
  --table-row-alt-background-hover: #99a4bb50;
  --table-row-background-hover: #99a4bb50;
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #d5ddeb;
  --table-selection-border-radius: 0;
  --tag: #f8fbff;
  --tag-background: #f8fbff;
  --tag-background-color: #f8fbff;
  --tag-background-hover: #b5c2d8;
  --tag-border-color: #f8fbff;
  --tag-border-color-hover: #b5c2d8;
  --tag-color: #000000;
  --tag-color-hover: #000000;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #aab3ca;
  --tall: 700px;
  --td: #d0ddef62;
  --tertiary: var(--text-accent-hover);
  --text: #30353a;
  --text-accent: #000000;
  --text-accent-hover: #d6def3;
  --text-dl: #000000;
  --text-faint: #4e5b6f;
  --text-highlight-bg: #99a4bb50;
  --text-highlight-bg-active: #99a4bb50;
  --text-muted: #99a4bb;
  --text-normal: #30353a;
  --text-on-accent: #000000;
  --text-selection: #99a4bb50;
  --textHighlight: var(--text-highlight-bg);
  --th: #f8fbff;
  --th-text: #000000;
  --theme-rainbow-1: #eef3ff;
  --theme-rainbow-2: #d0ddef62;
  --theme-rainbow-3: #e1e9f6;
  --theme-rainbow-4: #d2daee;
  --theme-rainbow-5: #b5c2d8;
  --theme-rainbow-6: #8ec1e9;
  --tiny: 100px;
  --titleFont: var(--font-text);
  --titlebar-background: #f8fbff;
  --titlebar-background-focused: #f8fbff;
  --titlebar-border-color: #ccd6eb;
  --titlebar-text-color: #30353a;
  --titlebar-text-color-focused: #30353a;
  --toggle-border-width: 1px;
  --toggle-radius: 0;
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: 0;
  --toggle-width: 20px;
  --tooltip-color: #000000;
  --vault-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --vault-name-color: #30353a;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #30353a;
  --vault-profile-color-hover: #30353a;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(248, 251, 255);
  color: rgb(48, 53, 58);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(248, 251, 255);
  color: rgb(48, 53, 58);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 251, 255);
  color: rgb(48, 53, 58);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(248, 251, 255);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(248, 251, 255);
  border-left-color: rgb(248, 251, 255);
  color: rgb(48, 53, 58);
}

body div#quartz-root {
  background-color: rgb(248, 251, 255);
  color: rgb(48, 53, 58);
}`,
    typography: `body .page article p > b, b {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(48, 53, 58) none 0px;
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .page article p > em, em {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(48, 53, 58) none 0px;
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .page article p > i, i {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(48, 53, 58) none 0px;
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .page article p > strong, strong {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(48, 53, 58) none 0px;
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .text-highlight {
  background-color: rgba(153, 164, 187, 0.314);
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(48, 53, 58) none 0px;
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body del {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(48, 53, 58) none 0px;
  text-decoration: line-through 1px rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(153, 164, 187);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(153, 164, 187) none 0px;
  text-decoration: rgb(153, 164, 187);
  text-decoration-color: rgb(153, 164, 187);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 0, 0);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 0, 0);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body a.internal.broken {
  color: rgb(210, 218, 238);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(210, 218, 238) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(48, 53, 58);
}

body dt {
  color: rgb(48, 53, 58);
}

body ol > li {
  color: rgb(48, 53, 58);
}

body ol.overflow {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body ul > li {
  color: rgb(48, 53, 58);
}

body ul.overflow {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(248, 251, 255);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body table {
  color: rgb(48, 53, 58);
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
  color: rgb(48, 53, 58);
}

body th {
  border-bottom-color: rgb(248, 251, 255);
  border-left-color: rgb(248, 251, 255);
  border-right-color: rgb(248, 251, 255);
  border-top-color: rgb(248, 251, 255);
  color: rgb(0, 0, 0);
  font-weight: 700;
}

body tr {
  background-color: rgb(248, 251, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(48, 53, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(48, 53, 58);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(248, 251, 255);
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
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(48, 53, 58);
}

body pre > code, pre:has(> code) {
  background-color: rgb(248, 251, 255);
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
  background-color: rgb(248, 251, 255);
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
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body figcaption {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body img {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body video {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}`,
    embeds: `body .file-embed {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(153, 164, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(153, 164, 187);
  border-right-color: rgb(153, 164, 187);
  border-top-color: rgb(153, 164, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(48, 53, 58);
  color: rgb(48, 53, 58);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(213, 221, 235);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(213, 221, 235);
  border-right-color: rgb(48, 53, 58);
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
  color: rgb(210, 218, 238);
  text-decoration: rgb(210, 218, 238);
  text-decoration-color: rgb(210, 218, 238);
}

body input[type=checkbox] {
  border-bottom-color: rgb(181, 194, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 194, 216);
  border-right-color: rgb(181, 194, 216);
  border-top-color: rgb(181, 194, 216);
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
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

body li.task-list-item[data-task='/'] {
  color: rgb(153, 164, 187);
  text-decoration: rgb(153, 164, 187);
  text-decoration-color: rgb(153, 164, 187);
}

body li.task-list-item[data-task='>'] {
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
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
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
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
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body li.task-list-item[data-task='l'] {
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

body li.task-list-item[data-task='u'] {
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body li.task-list-item[data-task='w'] {
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
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
  border-bottom-color: rgb(48, 53, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 53, 58);
  border-left-width: 4px;
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
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
  color: rgb(48, 53, 58);
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
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(48, 53, 58) none 0px;
  text-decoration: rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(48, 53, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(153, 164, 187, 0.314);
  color: rgb(48, 53, 58);
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
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(153, 164, 187, 0.314);
  border-bottom-color: rgb(48, 53, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(48, 53, 58);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(153, 164, 187, 0.314);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(48, 53, 58);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(248, 251, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(248, 251, 255);
  border-right-color: rgb(248, 251, 255);
  border-top-color: rgb(248, 251, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 0, 0);
}

body h1 {
  color: rgb(48, 53, 58);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h2 {
  color: rgb(48, 53, 58);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(48, 53, 58);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h3 {
  color: rgb(48, 53, 58);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h4 {
  color: rgb(48, 53, 58);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h5 {
  color: rgb(48, 53, 58);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h6 {
  color: rgb(48, 53, 58);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body hr {
  border-bottom-color: rgb(248, 251, 255);
  border-left-color: rgb(248, 251, 255);
  border-right-color: rgb(248, 251, 255);
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
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
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
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(48, 53, 58);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(48, 53, 58);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(48, 53, 58);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(213, 221, 235);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 164, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(153, 164, 187);
  border-right-color: rgb(153, 164, 187);
  border-top-color: rgb(153, 164, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(153, 164, 187);
}`,
    footer: `body footer {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(181, 194, 216);
  border-left-color: rgb(181, 194, 216);
  border-right-color: rgb(181, 194, 216);
  border-top-color: rgb(181, 194, 216);
  border-top-left-radius: 0px;
  color: rgb(153, 164, 187);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(153, 164, 187);
  text-decoration: rgb(153, 164, 187);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
  color: rgb(48, 53, 58);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body li.section-li > .section .meta {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(48, 53, 58);
  text-decoration: rgb(48, 53, 58);
}

body ul.section-ul {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(153, 164, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(153, 164, 187);
  border-right-color: rgb(153, 164, 187);
  border-top-color: rgb(153, 164, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(153, 164, 187);
}

body .darkmode svg {
  color: rgb(153, 164, 187);
  stroke: rgb(153, 164, 187);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(210, 218, 238);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(210, 218, 238);
  border-right-color: rgb(210, 218, 238);
  border-top-color: rgb(210, 218, 238);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(210, 218, 238);
}

body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
  color: rgb(48, 53, 58);
}

body .metadata {
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(153, 164, 187);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(153, 164, 187);
  border-left-color: rgb(153, 164, 187);
  border-right-color: rgb(153, 164, 187);
  border-top-color: rgb(153, 164, 187);
  color: rgb(153, 164, 187);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(248, 251, 255);
}

body .page-header h2.page-title {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(48, 53, 58);
  text-decoration: underline dotted rgb(48, 53, 58);
}

body details {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body input[type=text] {
  border-bottom-color: rgb(153, 164, 187);
  border-left-color: rgb(153, 164, 187);
  border-right-color: rgb(153, 164, 187);
  border-top-color: rgb(153, 164, 187);
  color: rgb(153, 164, 187);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(48, 53, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(225, 233, 246) 0px 2px 0px 0px;
  color: rgb(48, 53, 58);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body sub {
  color: rgb(48, 53, 58);
}

body summary {
  color: rgb(48, 53, 58);
}

body sup {
  color: rgb(48, 53, 58);
}`,
  },
};
