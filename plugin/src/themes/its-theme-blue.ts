import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.blue",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #394d64;
  --accent-color: 57, 77, 100;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #4c78cc;
  --accent2-lite: #4c87cc;
  --aside-bg: #11151d;
  --background-modifier-active-hover: #293e64;
  --background-modifier-border: #283345;
  --background-modifier-border-focus: #394d64;
  --background-modifier-border-hover: #252c36;
  --background-modifier-cover: #030a1495;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #030a1495;
  --background-modifier-form-field-hover: #030a1495;
  --background-modifier-hover: rgba(60, 102, 168, 0.4);
  --background-modifier-message: #293e64;
  --background-modifier-success: #32603e;
  --background-primary: #1a1e24;
  --background-primary-alt: #1f283b;
  --background-secondary: #1a1e24;
  --background-secondary-alt: #0e0f15;
  --bases-cards-background: #1a1e24;
  --bases-cards-cover-background: #1f283b;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #283345;
  --bases-cards-shadow-hover: 0 0 0 1px #252c36;
  --bases-embed-border-color: #283345;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #6d7a9b;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #1a1e24;
  --bases-table-cell-background-active: #1a1e24;
  --bases-table-cell-background-disabled: #1f283b;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #394d64;
  --bases-table-cell-shadow-focus: 0 0 0 2px #293e64;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #1f283b;
  --bases-table-header-background: #1a1e24;
  --bases-table-header-background-hover: rgba(60, 102, 168, 0.4);
  --bases-table-header-color: #6d7a9b;
  --bases-table-row-background-hover: rgba(46, 124, 214, 0.3);
  --bases-table-summary-background: #1a1e24;
  --bases-table-summary-background-hover: rgba(60, 102, 168, 0.4);
  --bg: #252c36;
  --blockquote-background-color: #10161d;
  --blockquote-border-color: #252c36;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #AAB3CA;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #0e0f15 65%, transparent) linear-gradient(#0e0f15, color-mix(in srgb, #0e0f15 65%, transparent));
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #0e0f15;
  --box-border-m: 3px solid #0e0f15;
  --box-border-s: 1px solid #0e0f15;
  --bttn: #293e64;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #293e64;
  --button-background-hover: #586477;
  --button-border: #293e64;
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
  --caret-color: #AAB3CA;
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
  --checkbox-border-color: #394d64;
  --checkbox-border-color-hover: #293e64;
  --checkbox-color: #394d64;
  --checkbox-color-hover: #293e64;
  --checkbox-marker-color: #1a1e24;
  --checkbox-radius: 0;
  --checklist-done-color: #586477;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #232831;
  --code-bg: #232831;
  --code-border-color: #283345;
  --code-bracket-background: rgba(60, 102, 168, 0.4);
  --code-comment: #4e5b6f;
  --code-normal: slategray;
  --code-punctuation: #6d7a9b;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #0e0f15;
  --code-size: .90em;
  --code-text: slategray;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #586477;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(199, 87, 92);
  --color-accent-2: rgb(209, 113, 121);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #293e64;
  --dark-sidebar: #10161d;
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(57, 77, 100, 0.1);
  --dataview-th-background: #0e0f15;
  --dataview-th-border-bottom: 2px solid #2b71cd;
  --dataview-th-color: #2b71cd;
  --dataview-th-count-color: #2b71cd;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #1f283b;
  --divider-color: #0e0f15;
  --divider-color-hover: #394d64;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #293e64;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #06080c60;
  --dropdown-background: #0e0f15;
  --dropdown-background-hover: #586477;
  --embed-bg: #10161d;
  --embed-block-shadow-hover: 2px 2px 0 #0e0f15;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #0e0f15;
  --embed-border-color: transparent;
  --embed-border-color-hover: #0e0f15;
  --embed-border-left: 2px solid #2b71cd;
  --embed-border-left-color: #2b71cd;
  --embed-border-left-color-hover: #2b71cd;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #0e0f15;
  --embed-border-start: 2px solid #293e64;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #0e0f15;
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
  --file-header-color-active: #AAB3CA;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #293e64;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #0e0f15;
  --file-icon: "";
  --file-icon-color: #63748d;
  --file-icon-margin: 6px;
  --file-text-color: #AAB3CA;
  --flair-background: #0e0f15;
  --flair-color: #AAB3CA;
  --folder: #2b71cd;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #2b71cd;
  --folder-icon-open-color: #386ab6;
  --folder-open: #386ab6;
  --folder-open-text-color: #AAB3CA;
  --folder-text-color: #AAB3CA;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
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
  --footnote: #6e7e89;
  --footnote-divider-color: #283345;
  --footnote-id-color: #6d7a9b;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #030a1495;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #586477;
  --graph-arrow: #6d7a9b;
  --graph-background: #1a1e24;
  --graph-bg: #1a1e24;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #6ca6e0;
  --graph-focused: #4c87cc;
  --graph-img: #4c78cc;
  --graph-line: rgba(46, 124, 214, 0.3);
  --graph-line-hover: #394d64;
  --graph-lines: rgba(46, 124, 214, 0.3);
  --graph-node: #AAB3CA;
  --graph-node-attachment: #4c78cc;
  --graph-node-focused: #4c87cc;
  --graph-node-hover-fill: #6ca6e0;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #293e64;
  --graph-node-unresolved: #586477;
  --graph-tag: #293e64;
  --graph-text: #AAB3CA;
  --h1-background: transparent;
  --h1-border-color: #4c78cc;
  --h1-border-left-color: #283345;
  --h1-border-line-color: #283345;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #283345;
  --h1-border-width: 0;
  --h1-color: #2b71cd;
  --h1-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #2b71cd;
  --h2-border-left-color: #283345;
  --h2-border-line-color: #283345;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #283345;
  --h2-border-width: 0;
  --h2-color: #2b71cd;
  --h2-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #293e64;
  --h3-border-left-color: #283345;
  --h3-border-line-color: #283345;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #283345;
  --h3-border-width: 0;
  --h3-color: #2b71cd;
  --h3-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #1f283b;
  --h4-border-left-color: #283345;
  --h4-border-line-color: #283345;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #283345;
  --h4-border-width: 0;
  --h4-color: #2b71cd;
  --h4-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #394d64;
  --h5-border-left-color: #283345;
  --h5-border-line-color: #283345;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #283345;
  --h5-border-width: 0;
  --h5-color: #2b71cd;
  --h5-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #6d7a9b;
  --h6-border-left-color: #283345;
  --h6-border-line-color: #283345;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: #283345;
  --h6-border-width: 0;
  --h6-color: #2b71cd;
  --h6-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #2b71cd;
  --he-text-on-accent-inactive: #AAB3CA;
  --he-title-bar-active-action: #6ca6e0;
  --he-title-bar-active-bg: #10161d;
  --he-title-bar-active-fg: #AAB3CA;
  --he-title-bar-active-pinned-bg: #1a1e24;
  --he-title-bar-inactive-action: #6d7a9b;
  --he-title-bar-inactive-bg: #1a1e24;
  --he-title-bar-inactive-fg: #586477;
  --he-title-bar-inactive-pinned-bg: #1a1e24;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #283345;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 700;
  --headers: #2b71cd;
  --heading-formatting: #586477;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(46, 124, 214, 0.3);
  --hr: #3c5274;
  --hr-alignment: -50%, -50%;
  --hr-color: #3c5274;
  --hr-icon-background: #1a1e24;
  --hr-icon-color: #2b71cd;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(0, 137, 255, 0.4);
  --hvr-active: rgba(60, 102, 168, 0.4);
  --hvr2: rgba(46, 124, 214, 0.3);
  --i-at: #5d7b98;
  --icon-btn-radius: 0;
  --icon-color: #6d7a9b;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #AAB3CA;
  --icon-color-hover: #AAB3CA;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #0e0f15;
  --illusion-h1-background: #4c78cc;
  --illusion-h2-background: #2b71cd;
  --illusion-h3-background: #293e64;
  --illusion-h4-background: #1f283b;
  --illusion-h5-background: #394d64;
  --illusion-h6-background: #6d7a9b;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: #030a1495;
  --image-border-color: #283345;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #586477;
  --indentation-guide-color: #465164;
  --indentation-guide-color-active: #394d64;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #465164;
  --initiative-xp: sandybrown;
  --inline-title-color: #2b71cd;
  --inline-title-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: rgba(0, 0, 0, 0.3);
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #0e0f15;
  --input-shadow-hover: 3px 3px 0 #0e0f15;
  --interactive-accent: #293e64;
  --interactive-accent-hover: #586477;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #586477;
  --interactive-normal: #0e0f15;
  --its: "its";
  --kanban-button-background: #232831;
  --kanban-button-shadow: 2px 2px 0 #0e0f15;
  --kanban-card-border: 2px solid #0e0f15;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #1a1e24;
  --kanban-card-text-color: #AAB3CA;
  --kanban-card-title-background: #1a1e24;
  --kanban-card-title-border: 0 1px 0 #0e0f15;
  --kanban-lane-background: #232831;
  --kanban-lane-border: 3px solid #0e0f15;
  --kanban-lane-box-shadow: 2px 2px 0 #0e0f15;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #4c87cc;
  --kanban-tag-background: #293e64;
  --latex-color: #6ca6e0;
  --latex-format-color: #586477;
  --latex-syntax-color: #6d7a9b;
  --line-height-tight: 1.3em;
  --lines: #465164;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #4c87cc;
  --link-color-hover: #6ca6e0;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #4c87cc;
  --link-external-color-hover: #4c78cc;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #586477;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #283345;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #465164;
  --list-color-2: #465164;
  --list-color-3: #465164;
  --list-color-4: #465164;
  --list-color-5: #465164;
  --list-color-6: #465164;
  --list-indent: 25px;
  --list-marker-color: #394d64;
  --list-marker-color-collapsed: #586477;
  --list-marker-color-hover: #6d7a9b;
  --list-marker-color-other: #4c78cc;
  --list-marker-min-width: 0;
  --list-numbered-color: #6ca6e0;
  --list-spacing: 1px;
  --lite-accent: #6ca6e0;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #1a1e24;
  --menu-border-color: #252c36;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #0e0f15;
  --message-border-color: #0e0f15;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #0e0f15;
  --message-color: #e5ebee;
  --metadata-border-color: #283345;
  --metadata-button-text-color: #586477;
  --metadata-divider-color: #283345;
  --metadata-icon-color: #6d7a9b;
  --metadata-input-background-active: #030a1495;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #AAB3CA;
  --metadata-label-background-active: #030a1495;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #6d7a9b;
  --metadata-label-text-color-hover: #6d7a9b;
  --metadata-property-background-active: rgba(60, 102, 168, 0.4);
  --metadata-property-box-shadow-focus: 0 0 0 2px #394d64;
  --metadata-property-box-shadow-hover: 0 0 0 1px #252c36;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #e5ebee;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #6d7a9b;
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
  --modal-nav-item-background-hover: #030a1495;
  --modal-radius: 0;
  --modal-sidebar-background: #10161d;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #AAB3CA;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #6d7a9b;
  --nav-heading-color-hover: #AAB3CA;
  --nav-indentation-guide-color: #465164;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #293e64;
  --nav-item-background-border-color-hover: #293e64;
  --nav-item-background-hover: #293e64;
  --nav-item-background-selected: rgba(0, 137, 255, 0.4);
  --nav-item-border-color: #6ca6e0;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #AAB3CA;
  --nav-item-color-active: #e5ebee;
  --nav-item-color-highlighted: #e5ebee;
  --nav-item-color-hover: #e5ebee;
  --nav-item-color-selected: #AAB3CA;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 0;
  --nav-item-size: 14px;
  --nav-item-weight: 500;
  --nav-item-weight-active: 700;
  --nav-item-weight-hover: 700;
  --nav-item-white-space: wrap;
  --nav-tag-color: #4e5b6f;
  --nav-tag-color-active: #6d7a9b;
  --nav-tag-color-hover: #6d7a9b;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #1a1e24;
  --note-rgb: 26, 30, 36;
  --note-title-border-color: #2b71cd;
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
  --pdf-shadow: 0 0 0 1px #283345;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #283345;
  --pill-border-color: #283345;
  --pill-border-color-hover: #252c36;
  --pill-color: #6d7a9b;
  --pill-color-hover: #AAB3CA;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #4c87cc;
  --pill-radius: 0;
  --popover-background: #1a1e24;
  --popover-border: 3px solid #0e0f15;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #394d64;
  --progress-bg: #252c36;
  --prompt-background: #1a1e24;
  --prompt-border-color: #0e0f15;
  --prompt-border-width: 3px;
  --r-heading-color: #2b71cd;
  --r-heading-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #6ca6e0;
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
  --scrollbar-active-thumb-bg: #6ca6e0;
  --scrollbar-bg: #252c36;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #293e64;
  --scrollbar-track-bg: #1a1e24;
  --search-border: 2px solid #0e0f15;
  --search-box-shadow: 2px 2px 0 #0e0f15;
  --search-clear-button-color: #6d7a9b;
  --search-icon-color: #6d7a9b;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #AAB3CA;
  --setting-item-alt-background-hover: #030a1495;
  --setting-item-background-hover: rgba(0, 137, 255, 0.4);
  --setting-item-border-color: #283345;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #2b71cd;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #030a1495;
  --setting-items-background: transparent;
  --setting-items-border-color: #283345;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #0e0f15;
  --shadow-m: 3px 3px 0 #0e0f15;
  --shadow-ml: 4px 4px 0 #0e0f15;
  --shadow-s: 2px 2px 0 #0e0f15;
  --side-bar: #1a1e24;
  --side-bar-bg: #0e0f15;
  --sidebar-icon-color: #AAB3CA;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #293e64;
  --sidebar-tab-background-color-hover: #394d64;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #293e64;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #1a1e24;
  --slider-thumb-border-color: #252c36;
  --slider-thumb-radius: 0;
  --slider-track-background: #283345;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #6d7a9b;
  --statblock-alt: #030a1495;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #1a1e24;
  --statblock-bar-border-color: #394d64;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #394d64;
  --statblock-border-color: #465164;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #0e0f15;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #AAB3CA;
  --statblock-heading-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --statblock-heading-font-color: #2b71cd;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #3c5274;
  --statblock-primary-color: #AAB3CA;
  --statblock-property-font-color: #AAB3CA;
  --statblock-property-name-font-color: #2b71cd;
  --statblock-rule-color: #394d64;
  --statblock-section-heading-border-color: #283345;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --statblock-section-heading-font-color: #6e7e89;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #0e0f15;
  --status-bar-border-color: #394d64;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #6d7a9b;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #293e64;
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
  --tab-divider-color: #3c5274;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #394d64;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px #6ca6e0, 5px 5px 0 #0e0f15;
  --tab-text-color: #586477;
  --tab-text-color-active: #AAB3CA;
  --tab-text-color-focused: #586477;
  --tab-text-color-focused-active: #AAB3CA;
  --tab-text-color-focused-active-current: #AAB3CA;
  --tab-text-color-focused-highlighted: #4c87cc;
  --tab-text-color-hover: #AAB3CA;
  --tab-top-outline-width: 0;
  --table: #283345;
  --table-add-button-background: #293e64;
  --table-add-button-border-color: #1a1e24;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #1a1e24;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #030a1495;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #293e64;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #293e64;
  --table-header-background-hover: #394d64;
  --table-header-border-color: #1a1e24;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #6ca6e0;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #030a1495;
  --table-row-alt-background-hover: rgba(46, 124, 214, 0.3);
  --table-row-background-hover: rgba(46, 124, 214, 0.3);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #293e64;
  --table-selection-border-radius: 0;
  --tag: #293e64;
  --tag-background: #293e64;
  --tag-background-color: #293e64;
  --tag-background-hover: #394d64;
  --tag-border-color: #293e64;
  --tag-border-color-hover: #394d64;
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
  --td: #030a1495;
  --text: #AAB3CA;
  --text-accent: #4c87cc;
  --text-accent-hover: #4c78cc;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(0, 137, 255, 0.4);
  --text-highlight-bg-active: rgba(60, 102, 168, 0.4);
  --text-muted: #6d7a9b;
  --text-normal: #AAB3CA;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(46, 124, 214, 0.3);
  --th: #293e64;
  --th-text: #e5ebee;
  --theme-rainbow-1: #4c78cc;
  --theme-rainbow-2: #2b71cd;
  --theme-rainbow-3: #293e64;
  --theme-rainbow-4: #1f283b;
  --theme-rainbow-5: #394d64;
  --theme-rainbow-6: #6d7a9b;
  --tiny: 100px;
  --titlebar-background: #1a1e24;
  --titlebar-background-focused: #0e0f15;
  --titlebar-border-color: #283345;
  --titlebar-text-color: #AAB3CA;
  --titlebar-text-color-focused: #AAB3CA;
  --toggle-border-width: 1px;
  --toggle-radius: 0;
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: 0;
  --toggle-width: 20px;
  --tooltip-color: #e5ebee;
  --vault-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --vault-name-color: #2b71cd;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #AAB3CA;
  --vault-profile-color-hover: #AAB3CA;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(14, 15, 21);
  color: rgb(170, 179, 202);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 30, 36);
  color: rgb(170, 179, 202);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 30, 36);
  color: rgb(170, 179, 202);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(14, 15, 21);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(14, 15, 21);
  border-left-color: rgb(14, 15, 21);
  color: rgb(170, 179, 202);
}

body div#quartz-root {
  background-color: rgb(26, 30, 36);
  color: rgb(170, 179, 202);
}`,
    typography: `body .page article p > b, b {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body .page article p > em, em {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body .page article p > i, i {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body .page article p > strong, strong {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body .text-highlight {
  background-color: rgba(0, 137, 255, 0.4);
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body del {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: line-through 1px rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(109, 122, 155);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(109, 122, 155) none 0px;
  text-decoration: rgb(109, 122, 155);
  text-decoration-color: rgb(109, 122, 155);
}`,
    links: `body a.external, footer a {
  color: rgb(76, 135, 204);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 135, 204) none 0px;
  text-decoration: rgb(76, 135, 204);
  text-decoration-color: rgb(76, 135, 204);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(76, 135, 204);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 135, 204) none 0px;
  text-decoration: rgb(76, 135, 204);
  text-decoration-color: rgb(76, 135, 204);
}

body a.internal.broken {
  color: rgb(88, 100, 119);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(88, 100, 119) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(170, 179, 202);
}

body dt {
  color: rgb(170, 179, 202);
}

body ol > li {
  color: rgb(170, 179, 202);
}

body ol.overflow {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

body ul > li {
  color: rgb(170, 179, 202);
}

body ul.overflow {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(16, 22, 29);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

body table {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(3, 10, 20, 0.584);
}

body td {
  border-bottom-color: rgb(26, 30, 36);
  border-left-color: rgb(26, 30, 36);
  border-right-color: rgb(26, 30, 36);
  border-top-color: rgb(26, 30, 36);
  color: rgb(170, 179, 202);
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
  background-color: rgb(41, 62, 100);
}`,
    code: `body code {
  border-bottom-color: rgb(112, 128, 144);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 128, 144);
  border-right-color: rgb(112, 128, 144);
  border-top-color: rgb(112, 128, 144);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(112, 128, 144);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 51, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 51, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 179, 202);
}

body pre > code, pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 51, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 51, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

body figcaption {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

body img {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

body video {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}`,
    embeds: `body .file-embed {
  background-color: rgb(14, 15, 21);
  border-bottom-color: rgb(109, 122, 155);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(109, 122, 155);
  border-right-color: rgb(109, 122, 155);
  border-top-color: rgb(109, 122, 155);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(170, 179, 202);
  color: rgb(170, 179, 202);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(41, 62, 100);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(41, 62, 100);
  border-right-color: rgb(170, 179, 202);
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
  border-bottom-color: rgb(57, 77, 100);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(57, 77, 100);
  border-right-color: rgb(57, 77, 100);
  border-top-color: rgb(57, 77, 100);
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
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body li.task-list-item[data-task='-'] {
  color: rgb(62, 69, 82);
  text-decoration: rgb(62, 69, 82);
  text-decoration-color: rgb(62, 69, 82);
}

body li.task-list-item[data-task='/'] {
  color: rgb(109, 122, 155);
  text-decoration: rgb(109, 122, 155);
  text-decoration-color: rgb(109, 122, 155);
}

body li.task-list-item[data-task='>'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
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
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
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
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body li.task-list-item[data-task='l'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body li.task-list-item[data-task='u'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body li.task-list-item[data-task='w'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
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
  border-bottom-color: rgb(170, 179, 202);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 179, 202);
  border-left-width: 4px;
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
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
  background-color: rgba(3, 10, 20, 0.584);
  border-bottom-color: rgb(40, 51, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 179, 202);
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
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(170, 179, 202);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(170, 179, 202);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(170, 179, 202);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(60, 102, 168, 0.4);
  color: rgb(170, 179, 202);
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
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(60, 102, 168, 0.4);
  border-bottom-color: rgb(170, 179, 202);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 179, 202);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(60, 102, 168, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 179, 202);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(41, 62, 100);
  border-bottom-color: rgb(41, 62, 100);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(41, 62, 100);
  border-right-color: rgb(41, 62, 100);
  border-top-color: rgb(41, 62, 100);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(43, 113, 205);
  font-family: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
}

body h2 {
  color: rgb(43, 113, 205);
  font-family: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
}

body h2.page-title, h2.page-title a {
  color: rgb(43, 113, 205);
  font-family: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
}

body h3 {
  color: rgb(43, 113, 205);
  font-family: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
}

body h4 {
  color: rgb(43, 113, 205);
  font-family: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
}

body h5 {
  color: rgb(43, 113, 205);
  font-family: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
}

body h6 {
  color: rgb(43, 113, 205);
  font-family: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
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
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
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
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(170, 179, 202);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(170, 179, 202);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(170, 179, 202);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(41, 62, 100);
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
  border-bottom-color: rgb(109, 122, 155);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(109, 122, 155);
  border-right-color: rgb(109, 122, 155);
  border-top-color: rgb(109, 122, 155);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(109, 122, 155);
}`,
    footer: `body footer {
  background-color: rgb(14, 15, 21);
  border-bottom-color: rgb(57, 77, 100);
  border-left-color: rgb(57, 77, 100);
  border-right-color: rgb(57, 77, 100);
  border-top-color: rgb(57, 77, 100);
  border-top-left-radius: 0px;
  color: rgb(109, 122, 155);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(109, 122, 155);
  text-decoration: rgb(109, 122, 155);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
  color: rgb(170, 179, 202);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

body li.section-li > .section .meta {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
}

body ul.section-ul {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(109, 122, 155);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(109, 122, 155);
  border-right-color: rgb(109, 122, 155);
  border-top-color: rgb(109, 122, 155);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(109, 122, 155);
}

body .darkmode svg {
  color: rgb(109, 122, 155);
  stroke: rgb(109, 122, 155);
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
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
  color: rgb(170, 179, 202);
}

body .metadata {
  border-bottom-color: rgb(40, 51, 69);
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
  color: rgb(109, 122, 155);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(109, 122, 155);
  border-left-color: rgb(109, 122, 155);
  border-right-color: rgb(109, 122, 155);
  border-top-color: rgb(109, 122, 155);
  color: rgb(109, 122, 155);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(14, 15, 21);
}

body .page-header h2.page-title {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(170, 179, 202);
  text-decoration: underline dotted rgb(170, 179, 202);
}

body details {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

body input[type=text] {
  border-bottom-color: rgb(109, 122, 155);
  border-left-color: rgb(109, 122, 155);
  border-right-color: rgb(109, 122, 155);
  border-top-color: rgb(109, 122, 155);
  color: rgb(109, 122, 155);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(112, 128, 144);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 128, 144);
  border-right-color: rgb(112, 128, 144);
  border-top-color: rgb(112, 128, 144);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(14, 15, 21) 0px 2px 0px 0px;
  color: rgb(112, 128, 144);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

body sub {
  color: rgb(170, 179, 202);
}

body summary {
  color: rgb(170, 179, 202);
}

body sup {
  color: rgb(170, 179, 202);
}`,
  },
  light: {
    base: `:root:root {
  --accent: #64a0db;
  --accent-color: 100, 160, 219;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #4c78cc;
  --accent2-lite: #5599d0;
  --aside-bg: #f1f5ff;
  --background-modifier-active-hover: #517cbf;
  --background-modifier-border: #ccd6eb;
  --background-modifier-border-focus: #64a0db;
  --background-modifier-border-hover: #dde4ef;
  --background-modifier-cover: #d0ddef62;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #d0ddef62;
  --background-modifier-form-field-hover: #d0ddef62;
  --background-modifier-hover: rgba(60, 102, 168, 0.4);
  --background-modifier-message: #517cbf;
  --background-modifier-success: #599049;
  --background-primary: #f8fbff;
  --background-primary-alt: #101b2f;
  --background-secondary: #f8fbff;
  --background-secondary-alt: #eef3fd;
  --bases-cards-background: #f8fbff;
  --bases-cards-cover-background: #101b2f;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #ccd6eb;
  --bases-cards-shadow-hover: 0 0 0 1px #dde4ef;
  --bases-embed-border-color: #ccd6eb;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #4e99d0;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #f8fbff;
  --bases-table-cell-background-active: #f8fbff;
  --bases-table-cell-background-disabled: #101b2f;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #64a0db;
  --bases-table-cell-shadow-focus: 0 0 0 2px #517cbf;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #101b2f;
  --bases-table-header-background: #f8fbff;
  --bases-table-header-background-hover: rgba(60, 102, 168, 0.4);
  --bases-table-header-color: #4e99d0;
  --bases-table-row-background-hover: rgba(46, 124, 214, 0.2);
  --bases-table-summary-background: #f8fbff;
  --bases-table-summary-background-hover: rgba(60, 102, 168, 0.4);
  --bg: #dde4ef;
  --blockquote-background-color: #f1f5ff;
  --blockquote-border-color: #dde4ef;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #283a67;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #f8fbff 65%, transparent) linear-gradient(#f8fbff, color-mix(in srgb, #f8fbff 65%, transparent));
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #dde4ef;
  --box-border-m: 3px solid #dde4ef;
  --box-border-s: 1px solid #dde4ef;
  --bttn: #4378c1;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #4378c1;
  --button-background-hover: #a6bbde;
  --button-border: #4378c1;
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
  --caret-color: #283a67;
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
  --checkbox-border-color: #64a0db;
  --checkbox-border-color-hover: #517cbf;
  --checkbox-color: #64a0db;
  --checkbox-color-hover: #517cbf;
  --checkbox-marker-color: #f8fbff;
  --checkbox-radius: 0;
  --checklist-done-color: #a6bbde;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #f1f5ff;
  --code-bg: #f1f5ff;
  --code-border-color: #ccd6eb;
  --code-bracket-background: rgba(60, 102, 168, 0.4);
  --code-comment: #4e5b6f;
  --code-normal: #4296ea;
  --code-punctuation: #4e99d0;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #dde4ef;
  --code-size: .90em;
  --code-text: #4296ea;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #a6bbde;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(194, 76, 78);
  --color-accent-2: rgb(199, 87, 92);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #517cbf;
  --dark-sidebar: #f1f5ff;
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(100, 160, 219, 0.1);
  --dataview-th-background: #eef3fd;
  --dataview-th-border-bottom: 2px solid #4378c1;
  --dataview-th-color: #4378c1;
  --dataview-th-count-color: #4378c1;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #101b2f;
  --divider-color: #eef3fd;
  --divider-color-hover: #64a0db;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #517cbf;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #d0ddef62;
  --dropdown-background: #eef3fd;
  --dropdown-background-hover: #a6bbde;
  --embed-bg: #f1f5ff;
  --embed-block-shadow-hover: 2px 2px 0 #dde4ef;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #dde4ef;
  --embed-border-color: transparent;
  --embed-border-color-hover: #dde4ef;
  --embed-border-left: 2px solid #4378c1;
  --embed-border-left-color: #4378c1;
  --embed-border-left-color-hover: #4378c1;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #dde4ef;
  --embed-border-start: 2px solid #517cbf;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #dde4ef;
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
  --fg: #025d9f;
  --file-font: "its";
  --file-header-background: #f8fbff;
  --file-header-background-focused: #f8fbff;
  --file-header-breadcrumb-color: #a6bbde;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #a6bbde;
  --file-header-color-active: #283a67;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #517cbf;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #eef3fd;
  --file-icon: "";
  --file-icon-color: #8897b4;
  --file-icon-margin: 6px;
  --file-text-color: #283a67;
  --flair-background: #eef3fd;
  --flair-color: #283a67;
  --folder: #4378c1;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #4378c1;
  --folder-icon-open-color: #6da5ce;
  --folder-open: #6da5ce;
  --folder-open-text-color: #283a67;
  --folder-text-color: #283a67;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
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
  --footnote-id-color: #4e99d0;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #d0ddef62;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #a6bbde;
  --graph-arrow: #4e99d0;
  --graph-background: #f8fbff;
  --graph-bg: #f8fbff;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #5174a3;
  --graph-focused: #5599d0;
  --graph-img: #4c78cc;
  --graph-line: rgba(46, 124, 214, 0.2);
  --graph-line-hover: #64a0db;
  --graph-lines: rgba(46, 124, 214, 0.2);
  --graph-node: #283a67;
  --graph-node-attachment: #4c78cc;
  --graph-node-focused: #5599d0;
  --graph-node-hover-fill: #5174a3;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #517cbf;
  --graph-node-unresolved: #a6bbde;
  --graph-tag: #517cbf;
  --graph-text: #283a67;
  --h1-background: transparent;
  --h1-border-color: #64a0db;
  --h1-border-left-color: #ccd6eb;
  --h1-border-line-color: #ccd6eb;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #ccd6eb;
  --h1-border-width: 0;
  --h1-color: #4378c1;
  --h1-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #4378c1;
  --h2-border-left-color: #ccd6eb;
  --h2-border-line-color: #ccd6eb;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #ccd6eb;
  --h2-border-width: 0;
  --h2-color: #4378c1;
  --h2-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #587aa8;
  --h3-border-left-color: #ccd6eb;
  --h3-border-line-color: #ccd6eb;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #ccd6eb;
  --h3-border-width: 0;
  --h3-color: #4378c1;
  --h3-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #283a67;
  --h4-border-left-color: #ccd6eb;
  --h4-border-line-color: #ccd6eb;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #ccd6eb;
  --h4-border-width: 0;
  --h4-color: #4378c1;
  --h4-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #8897b4;
  --h5-border-left-color: #ccd6eb;
  --h5-border-line-color: #ccd6eb;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #ccd6eb;
  --h5-border-width: 0;
  --h5-color: #4378c1;
  --h5-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #a6bbde;
  --h6-border-left-color: #ccd6eb;
  --h6-border-line-color: #ccd6eb;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: #ccd6eb;
  --h6-border-width: 0;
  --h6-color: #4378c1;
  --h6-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #4378c1;
  --he-text-on-accent-inactive: #283a67;
  --he-title-bar-active-action: #5174a3;
  --he-title-bar-active-bg: #f1f5ff;
  --he-title-bar-active-fg: #283a67;
  --he-title-bar-active-pinned-bg: #f8fbff;
  --he-title-bar-inactive-action: #4e99d0;
  --he-title-bar-inactive-bg: #f8fbff;
  --he-title-bar-inactive-fg: #a6bbde;
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
  --headers: #4378c1;
  --heading-formatting: #a6bbde;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(46, 124, 214, 0.2);
  --hr: #d6deea;
  --hr-alignment: -50%, -50%;
  --hr-color: #d6deea;
  --hr-icon-background: #f8fbff;
  --hr-icon-color: #4378c1;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(0, 137, 255, 0.4);
  --hvr-active: rgba(60, 102, 168, 0.4);
  --hvr2: rgba(46, 124, 214, 0.2);
  --i-at: #4378c1;
  --icon-btn-radius: 0;
  --icon-color: #4e99d0;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #283a67;
  --icon-color-hover: #283a67;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --icons: #d04e4e;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #dde4ef;
  --illusion-h1-background: #64a0db;
  --illusion-h2-background: #4378c1;
  --illusion-h3-background: #587aa8;
  --illusion-h4-background: #283a67;
  --illusion-h5-background: #8897b4;
  --illusion-h6-background: #a6bbde;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: #d0ddef62;
  --image-border-color: #ccd6eb;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #a6bbde;
  --indentation-guide-color: #b5c2d8;
  --indentation-guide-color-active: #64a0db;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #b5c2d8;
  --initiative-xp: sandybrown;
  --inline-title-color: #4378c1;
  --inline-title-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: #d0ddef62;
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #dde4ef;
  --input-shadow-hover: 3px 3px 0 #dde4ef;
  --interactive-accent: #517cbf;
  --interactive-accent-hover: #a6bbde;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #a6bbde;
  --interactive-normal: #eef3fd;
  --its: "its";
  --kanban-button-background: #f1f5ff;
  --kanban-button-shadow: 2px 2px 0 #dde4ef;
  --kanban-card-border: 2px solid #dde4ef;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #f8fbff;
  --kanban-card-text-color: #283a67;
  --kanban-card-title-background: #f8fbff;
  --kanban-card-title-border: 0 1px 0 #dde4ef;
  --kanban-lane-background: #f1f5ff;
  --kanban-lane-border: 3px solid #dde4ef;
  --kanban-lane-box-shadow: 2px 2px 0 #dde4ef;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #5599d0;
  --kanban-tag-background: #5885b2;
  --latex-color: #5174a3;
  --latex-format-color: #a6bbde;
  --latex-syntax-color: #4e99d0;
  --line-height-tight: 1.3em;
  --lines: #b5c2d8;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #5599d0;
  --link-color-hover: #5174a3;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #5599d0;
  --link-external-color-hover: #4c78cc;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #a6bbde;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #ccd6eb;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #b5c2d8;
  --list-color-2: #b5c2d8;
  --list-color-3: #b5c2d8;
  --list-color-4: #b5c2d8;
  --list-color-5: #b5c2d8;
  --list-color-6: #b5c2d8;
  --list-indent: 25px;
  --list-marker-color: #64a0db;
  --list-marker-color-collapsed: #a6bbde;
  --list-marker-color-hover: #4e99d0;
  --list-marker-color-other: #4c78cc;
  --list-marker-min-width: 0;
  --list-numbered-color: #5174a3;
  --list-spacing: 1px;
  --lite-accent: #5174a3;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #f8fbff;
  --menu-border-color: #dde4ef;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #dde4ef;
  --message-border-color: #dde4ef;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #dde4ef;
  --message-color: #e5ebee;
  --metadata-border-color: #ccd6eb;
  --metadata-button-text-color: #a6bbde;
  --metadata-divider-color: #ccd6eb;
  --metadata-icon-color: #4e99d0;
  --metadata-input-background-active: #d0ddef62;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #283a67;
  --metadata-label-background-active: #d0ddef62;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #4e99d0;
  --metadata-label-text-color-hover: #4e99d0;
  --metadata-property-background-active: rgba(60, 102, 168, 0.4);
  --metadata-property-box-shadow-focus: 0 0 0 2px #64a0db;
  --metadata-property-box-shadow-hover: 0 0 0 1px #dde4ef;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #e5ebee;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #4e99d0;
  --metadata-title-icon: "";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #f8fbff;
  --modal-border-color: #dde4ef;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: #d0ddef62;
  --modal-radius: 0;
  --modal-sidebar-background: #f1f5ff;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #283a67;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #4e99d0;
  --nav-heading-color-hover: #283a67;
  --nav-indentation-guide-color: #b5c2d8;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #517cbf;
  --nav-item-background-border-color-hover: #517cbf;
  --nav-item-background-hover: #517cbf;
  --nav-item-background-selected: rgba(0, 137, 255, 0.4);
  --nav-item-border-color: #5174a3;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #283a67;
  --nav-item-color-active: #e5ebee;
  --nav-item-color-highlighted: #e5ebee;
  --nav-item-color-hover: #e5ebee;
  --nav-item-color-selected: #283a67;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 0;
  --nav-item-size: 14px;
  --nav-item-weight: 500;
  --nav-item-weight-active: 700;
  --nav-item-weight-hover: 700;
  --nav-item-white-space: wrap;
  --nav-tag-color: #4e5b6f;
  --nav-tag-color-active: #4e99d0;
  --nav-tag-color-hover: #4e99d0;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #f8fbff;
  --note-rgb: 248, 251, 255;
  --note-title-border-color: #4378c1;
  --outer-bar: #eef3fd;
  --outline: #dde4ef;
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
  --pill-border-color-hover: #dde4ef;
  --pill-color: #4e99d0;
  --pill-color-hover: #283a67;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #5599d0;
  --pill-radius: 0;
  --popover-background: #f8fbff;
  --popover-border: 3px solid #dde4ef;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #64a0db;
  --progress-bg: #dde4ef;
  --prompt-background: #f8fbff;
  --prompt-border-color: #dde4ef;
  --prompt-border-width: 3px;
  --r-heading-color: #4378c1;
  --r-heading-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #5174a3;
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
  --scrollbar-active-thumb-bg: #5174a3;
  --scrollbar-bg: #dde4ef;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #5885b2;
  --scrollbar-track-bg: #f8fbff;
  --search-border: 2px solid #dde4ef;
  --search-box-shadow: 2px 2px 0 #dde4ef;
  --search-clear-button-color: #4e99d0;
  --search-icon-color: #4e99d0;
  --search-result-background: #f8fbff;
  --setting-group-heading-color: #283a67;
  --setting-item-alt-background-hover: #d0ddef62;
  --setting-item-background-hover: rgba(0, 137, 255, 0.4);
  --setting-item-border-color: #ccd6eb;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #4378c1;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #d0ddef62;
  --setting-items-background: transparent;
  --setting-items-border-color: #ccd6eb;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #dde4ef;
  --shadow-m: 3px 3px 0 #dde4ef;
  --shadow-ml: 4px 4px 0 #dde4ef;
  --shadow-s: 2px 2px 0 #dde4ef;
  --side-bar: #f8fbff;
  --side-bar-bg: #eef3fd;
  --sidebar-icon-color: #283a67;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #4378c1;
  --sidebar-tab-background-color-hover: #64a0db;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #4378c1;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #f8fbff;
  --slider-thumb-border-color: #dde4ef;
  --slider-thumb-radius: 0;
  --slider-track-background: #ccd6eb;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #4e99d0;
  --statblock-alt: #d0ddef62;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #f8fbff;
  --statblock-bar-border-color: #64a0db;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #64a0db;
  --statblock-border-color: #b5c2d8;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #dde4ef;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #283a67;
  --statblock-heading-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --statblock-heading-font-color: #4378c1;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #d6deea;
  --statblock-primary-color: #283a67;
  --statblock-property-font-color: #283a67;
  --statblock-property-name-font-color: #4378c1;
  --statblock-rule-color: #64a0db;
  --statblock-section-heading-border-color: #ccd6eb;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --statblock-section-heading-font-color: #8996a0;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #eef3fd;
  --status-bar-border-color: #64a0db;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #4e99d0;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #517cbf;
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
  --tab-divider-color: #d6deea;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #64a0db;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #d0ddef62;
  --tab-stacked-shadow-color: #d0ddef62;
  --tab-switcher-background: #f8fbff;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8fbff, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #dde4ef;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #dde4ef;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #5174a3, 5px 5px 0 #dde4ef;
  --tab-text-color: #a6bbde;
  --tab-text-color-active: #283a67;
  --tab-text-color-focused: #a6bbde;
  --tab-text-color-focused-active: #283a67;
  --tab-text-color-focused-active-current: #283a67;
  --tab-text-color-focused-highlighted: #5599d0;
  --tab-text-color-hover: #283a67;
  --tab-top-outline-width: 0;
  --table: #ccd6eb;
  --table-add-button-background: #4378c1;
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
  --table-drag-handle-background-active: #517cbf;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #587aa8;
  --table-header-background-hover: #64a0db;
  --table-header-border-color: #f8fbff;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #5174a3;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #d0ddef62;
  --table-row-alt-background-hover: rgba(46, 124, 214, 0.2);
  --table-row-background-hover: rgba(46, 124, 214, 0.2);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #517cbf;
  --table-selection-border-radius: 0;
  --tag: #5885b2;
  --tag-background: #5885b2;
  --tag-background-color: #5885b2;
  --tag-background-hover: #64a0db;
  --tag-border-color: #5885b2;
  --tag-border-color-hover: #64a0db;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #5174a3;
  --tall: 700px;
  --td: #d0ddef62;
  --text: #283a67;
  --text-accent: #5599d0;
  --text-accent-hover: #4c78cc;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(0, 137, 255, 0.4);
  --text-highlight-bg-active: rgba(60, 102, 168, 0.4);
  --text-muted: #4e99d0;
  --text-normal: #283a67;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(46, 124, 214, 0.2);
  --th: #587aa8;
  --th-text: #e5ebee;
  --theme-rainbow-1: #64a0db;
  --theme-rainbow-2: #4378c1;
  --theme-rainbow-3: #587aa8;
  --theme-rainbow-4: #283a67;
  --theme-rainbow-5: #8897b4;
  --theme-rainbow-6: #a6bbde;
  --tiny: 100px;
  --titlebar-background: #f8fbff;
  --titlebar-background-focused: #eef3fd;
  --titlebar-border-color: #ccd6eb;
  --titlebar-text-color: #283a67;
  --titlebar-text-color-focused: #283a67;
  --toggle-border-width: 1px;
  --toggle-radius: 0;
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: 0;
  --toggle-width: 20px;
  --tooltip-color: #e5ebee;
  --vault-font: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
  --vault-name-color: #4378c1;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #283a67;
  --vault-profile-color-hover: #283a67;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 243, 253);
  color: rgb(40, 58, 103);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(248, 251, 255);
  color: rgb(40, 58, 103);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 251, 255);
  color: rgb(40, 58, 103);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(238, 243, 253);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 243, 253);
  border-left-color: rgb(238, 243, 253);
  color: rgb(40, 58, 103);
}

body div#quartz-root {
  background-color: rgb(248, 251, 255);
  color: rgb(40, 58, 103);
}`,
    typography: `body .page article p > b, b {
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(40, 58, 103) none 0px;
  text-decoration: rgb(40, 58, 103);
  text-decoration-color: rgb(40, 58, 103);
}

body .page article p > em, em {
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(40, 58, 103) none 0px;
  text-decoration: rgb(40, 58, 103);
  text-decoration-color: rgb(40, 58, 103);
}

body .page article p > i, i {
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(40, 58, 103) none 0px;
  text-decoration: rgb(40, 58, 103);
  text-decoration-color: rgb(40, 58, 103);
}

body .page article p > strong, strong {
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(40, 58, 103) none 0px;
  text-decoration: rgb(40, 58, 103);
  text-decoration-color: rgb(40, 58, 103);
}

body .text-highlight {
  background-color: rgba(0, 137, 255, 0.4);
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(40, 58, 103) none 0px;
  text-decoration: rgb(40, 58, 103);
  text-decoration-color: rgb(40, 58, 103);
}

body del {
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(40, 58, 103) none 0px;
  text-decoration: line-through 1px rgb(40, 58, 103);
  text-decoration-color: rgb(40, 58, 103);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(78, 153, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(78, 153, 208) none 0px;
  text-decoration: rgb(78, 153, 208);
  text-decoration-color: rgb(78, 153, 208);
}`,
    links: `body a.external, footer a {
  color: rgb(85, 153, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(85, 153, 208) none 0px;
  text-decoration: rgb(85, 153, 208);
  text-decoration-color: rgb(85, 153, 208);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(85, 153, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(85, 153, 208) none 0px;
  text-decoration: rgb(85, 153, 208);
  text-decoration-color: rgb(85, 153, 208);
}

body a.internal.broken {
  color: rgb(166, 187, 222);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(166, 187, 222) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(40, 58, 103);
}

body dt {
  color: rgb(40, 58, 103);
}

body ol > li {
  color: rgb(40, 58, 103);
}

body ol.overflow {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(40, 58, 103);
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
}

body ul > li {
  color: rgb(40, 58, 103);
}

body ul.overflow {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(40, 58, 103);
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
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
  border-bottom-color: rgb(40, 58, 103);
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
}

body table {
  color: rgb(40, 58, 103);
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
  color: rgb(40, 58, 103);
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
  background-color: rgb(88, 122, 168);
}`,
    code: `body code {
  border-bottom-color: rgb(66, 150, 234);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(66, 150, 234);
  border-right-color: rgb(66, 150, 234);
  border-top-color: rgb(66, 150, 234);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(66, 150, 234);
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
  color: rgb(40, 58, 103);
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
  border-bottom-color: rgb(40, 58, 103);
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
}

body figcaption {
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(40, 58, 103);
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
}

body img {
  border-bottom-color: rgb(40, 58, 103);
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
}

body video {
  border-bottom-color: rgb(40, 58, 103);
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
}`,
    embeds: `body .file-embed {
  background-color: rgb(238, 243, 253);
  border-bottom-color: rgb(78, 153, 208);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(78, 153, 208);
  border-right-color: rgb(78, 153, 208);
  border-top-color: rgb(78, 153, 208);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(40, 58, 103);
  color: rgb(40, 58, 103);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(81, 124, 191);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(81, 124, 191);
  border-right-color: rgb(40, 58, 103);
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
  border-bottom-color: rgb(100, 160, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(100, 160, 219);
  border-right-color: rgb(100, 160, 219);
  border-top-color: rgb(100, 160, 219);
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
  color: rgb(40, 58, 103);
  text-decoration: rgb(40, 58, 103);
  text-decoration-color: rgb(40, 58, 103);
}

body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

body li.task-list-item[data-task='/'] {
  color: rgb(78, 153, 208);
  text-decoration: rgb(78, 153, 208);
  text-decoration-color: rgb(78, 153, 208);
}

body li.task-list-item[data-task='>'] {
  color: rgb(40, 58, 103);
  text-decoration: rgb(40, 58, 103);
  text-decoration-color: rgb(40, 58, 103);
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
  color: rgb(40, 58, 103);
  text-decoration: rgb(40, 58, 103);
  text-decoration-color: rgb(40, 58, 103);
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
  color: rgb(40, 58, 103);
  text-decoration: rgb(40, 58, 103);
  text-decoration-color: rgb(40, 58, 103);
}

body li.task-list-item[data-task='l'] {
  color: rgb(40, 58, 103);
  text-decoration: rgb(40, 58, 103);
  text-decoration-color: rgb(40, 58, 103);
}

body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

body li.task-list-item[data-task='u'] {
  color: rgb(40, 58, 103);
  text-decoration: rgb(40, 58, 103);
  text-decoration-color: rgb(40, 58, 103);
}

body li.task-list-item[data-task='w'] {
  color: rgb(40, 58, 103);
  text-decoration: rgb(40, 58, 103);
  text-decoration-color: rgb(40, 58, 103);
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
  border-bottom-color: rgb(40, 58, 103);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 58, 103);
  border-left-width: 4px;
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
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
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(221, 228, 239);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(221, 228, 239);
  border-left-width: 3px;
  border-right-color: rgb(221, 228, 239);
  border-right-width: 3px;
  border-top-color: rgb(221, 228, 239);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(221, 228, 239) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(40, 58, 103) none 0px;
  text-decoration: rgb(40, 58, 103);
  text-decoration-color: rgb(40, 58, 103);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(40, 58, 103);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(40, 58, 103);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(40, 58, 103);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(60, 102, 168, 0.4);
  color: rgb(40, 58, 103);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(221, 228, 239);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(221, 228, 239);
  border-left-width: 3px;
  border-right-color: rgb(221, 228, 239);
  border-right-width: 3px;
  border-top-color: rgb(221, 228, 239);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 251, 255);
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(60, 102, 168, 0.4);
  border-bottom-color: rgb(40, 58, 103);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(40, 58, 103);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(60, 102, 168, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(40, 58, 103);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(88, 133, 178);
  border-bottom-color: rgb(88, 133, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(88, 133, 178);
  border-right-color: rgb(88, 133, 178);
  border-top-color: rgb(88, 133, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(67, 120, 193);
  font-family: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
}

body h2 {
  color: rgb(67, 120, 193);
  font-family: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
}

body h2.page-title, h2.page-title a {
  color: rgb(67, 120, 193);
  font-family: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
}

body h3 {
  color: rgb(67, 120, 193);
  font-family: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
}

body h4 {
  color: rgb(67, 120, 193);
  font-family: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
}

body h5 {
  color: rgb(67, 120, 193);
  font-family: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
}

body h6 {
  color: rgb(67, 120, 193);
  font-family: "Recursive Sans Linear Static Black", "Oleo Script", "Calisto MT";
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
  border-bottom-color: rgb(40, 58, 103);
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
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
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(40, 58, 103);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(40, 58, 103);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(40, 58, 103);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(81, 124, 191);
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
  border-bottom-color: rgb(78, 153, 208);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(78, 153, 208);
  border-right-color: rgb(78, 153, 208);
  border-top-color: rgb(78, 153, 208);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(78, 153, 208);
}`,
    footer: `body footer {
  background-color: rgb(238, 243, 253);
  border-bottom-color: rgb(100, 160, 219);
  border-left-color: rgb(100, 160, 219);
  border-right-color: rgb(100, 160, 219);
  border-top-color: rgb(100, 160, 219);
  border-top-left-radius: 0px;
  color: rgb(78, 153, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(78, 153, 208);
  text-decoration: rgb(78, 153, 208);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(40, 58, 103);
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
  color: rgb(40, 58, 103);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(40, 58, 103);
  text-decoration: rgb(40, 58, 103);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(40, 58, 103);
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
}

body li.section-li > .section .meta {
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(40, 58, 103);
  text-decoration: rgb(40, 58, 103);
}

body ul.section-ul {
  border-bottom-color: rgb(40, 58, 103);
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(78, 153, 208);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(78, 153, 208);
  border-right-color: rgb(78, 153, 208);
  border-top-color: rgb(78, 153, 208);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(78, 153, 208);
}

body .darkmode svg {
  color: rgb(78, 153, 208);
  stroke: rgb(78, 153, 208);
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
  border-bottom-color: rgb(40, 58, 103);
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
  color: rgb(40, 58, 103);
}

body .metadata {
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(78, 153, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(78, 153, 208);
  border-left-color: rgb(78, 153, 208);
  border-right-color: rgb(78, 153, 208);
  border-top-color: rgb(78, 153, 208);
  color: rgb(78, 153, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(238, 243, 253);
}

body .page-header h2.page-title {
  color: rgb(40, 58, 103);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(40, 58, 103);
  text-decoration: underline dotted rgb(40, 58, 103);
}

body details {
  border-bottom-color: rgb(40, 58, 103);
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
}

body input[type=text] {
  border-bottom-color: rgb(78, 153, 208);
  border-left-color: rgb(78, 153, 208);
  border-right-color: rgb(78, 153, 208);
  border-top-color: rgb(78, 153, 208);
  color: rgb(78, 153, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(241, 245, 255);
  border-bottom-color: rgb(66, 150, 234);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(66, 150, 234);
  border-right-color: rgb(66, 150, 234);
  border-top-color: rgb(66, 150, 234);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(221, 228, 239) 0px 2px 0px 0px;
  color: rgb(66, 150, 234);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(40, 58, 103);
  border-left-color: rgb(40, 58, 103);
  border-right-color: rgb(40, 58, 103);
  border-top-color: rgb(40, 58, 103);
}

body sub {
  color: rgb(40, 58, 103);
}

body summary {
  color: rgb(40, 58, 103);
}

body sup {
  color: rgb(40, 58, 103);
}`,
  },
};
