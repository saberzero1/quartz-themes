import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.nord",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #5E81AC;
  --accent-color: 94, 129, 172;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #81A1C1;
  --accent2-lite: #88C0D0;
  --aside-bg: #242933;
  --background-modifier-active-hover: #4C566A;
  --background-modifier-border: #434C5E;
  --background-modifier-border-focus: #5E81AC;
  --background-modifier-border-hover: #3B4252;
  --background-modifier-cover: #06080c60;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #06080c60;
  --background-modifier-form-field-hover: #06080c60;
  --background-modifier-hover: rgba(136, 192, 208, 0.565);
  --background-modifier-message: #4C566A;
  --background-modifier-success: #32603e;
  --background-primary: #2E3440;
  --background-primary-alt: #242933;
  --background-secondary: #242933;
  --background-secondary-alt: #242933;
  --bases-cards-background: #2E3440;
  --bases-cards-cover-background: #242933;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #434C5E;
  --bases-cards-shadow-hover: 0 0 0 1px #3B4252;
  --bases-embed-border-color: #434C5E;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #97a1b9;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #2E3440;
  --bases-table-cell-background-active: #2E3440;
  --bases-table-cell-background-disabled: #242933;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #5E81AC;
  --bases-table-cell-shadow-focus: 0 0 0 2px #4C566A;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #242933;
  --bases-table-header-background: #2E3440;
  --bases-table-header-background-hover: rgba(136, 192, 208, 0.565);
  --bases-table-header-color: #97a1b9;
  --bases-table-row-background-hover: rgba(60, 159, 168, 0.4);
  --bases-table-summary-background: #2E3440;
  --bases-table-summary-background-hover: rgba(136, 192, 208, 0.565);
  --bg: #3B4252;
  --blockquote-background-color: #1d2129;
  --blockquote-border-color: #3B4252;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #ECEFF4;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #242933 65%, transparent) linear-gradient(#242933, color-mix(in srgb, #242933 65%, transparent));
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #242933;
  --box-border-m: 3px solid #242933;
  --box-border-s: 1px solid #242933;
  --bttn: #4C566A;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #4C566A;
  --button-background-hover: #586477;
  --button-border: #4C566A;
  --button-border-radius: 0;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #2E3440;
  --canvas-card-label-color: #4e5b6f;
  --canvas-color: 88, 100, 159;
  --canvas-color-opacity: 0.07;
  --canvas-controls-radius: 0;
  --canvas-node-padding: 0 7px;
  --caret-color: #ECEFF4;
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
  --checkbox-border-color: #5E81AC;
  --checkbox-border-color-hover: #4C566A;
  --checkbox-color: #5E81AC;
  --checkbox-color-hover: #4C566A;
  --checkbox-marker-color: #2E3440;
  --checkbox-radius: 0;
  --checklist-done-color: #586477;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #3B4252;
  --code-bg: #3B4252;
  --code-border-color: #434C5E;
  --code-bracket-background: rgba(136, 192, 208, 0.565);
  --code-comment: #4e5b6f;
  --code-normal: #81A1C1;
  --code-punctuation: #97a1b9;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #242933;
  --code-size: .90em;
  --code-text: #81A1C1;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #586477;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(199, 87, 92);
  --color-accent-2: rgb(209, 113, 121);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #4C566A;
  --dark-sidebar: #3B4252;
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(94, 129, 172, 0.1);
  --dataview-th-background: #242933;
  --dataview-th-border-bottom: 2px solid #88C0D0;
  --dataview-th-color: #88C0D0;
  --dataview-th-count-color: #88C0D0;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #242933;
  --divider-color: #242933;
  --divider-color-hover: #5E81AC;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #4C566A;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #06080c60;
  --dropdown-background: #242933;
  --dropdown-background-hover: #586477;
  --embed-bg: #1d2129;
  --embed-block-shadow-hover: 2px 2px 0 #242933;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #242933;
  --embed-border-color: transparent;
  --embed-border-color-hover: #242933;
  --embed-border-left: 2px solid #88C0D0;
  --embed-border-left-color: #88C0D0;
  --embed-border-left-color-hover: #88C0D0;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #242933;
  --embed-border-start: 2px solid #4C566A;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #242933;
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
  --file-header-background: #2E3440;
  --file-header-background-focused: #2E3440;
  --file-header-breadcrumb-color: #586477;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #586477;
  --file-header-color-active: #ECEFF4;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #4C566A;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #242933;
  --file-icon: "";
  --file-icon-color: #586477;
  --file-icon-margin: 6px;
  --file-text-color: #97a1b9;
  --flair-background: #242933;
  --flair-color: #ECEFF4;
  --folder: #A3BE8C;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #A3BE8C;
  --folder-icon-open-color: #3c9ba8;
  --folder-open: #3c9ba8;
  --folder-open-text-color: #ECEFF4;
  --folder-text-color: #97a1b9;
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
  --footnote-divider-color: #434C5E;
  --footnote-id-color: #97a1b9;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #06080c60;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #586477;
  --graph-arrow: #97a1b9;
  --graph-background: #242933;
  --graph-bg: #242933;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #88C0D0;
  --graph-focused: #88C0D0;
  --graph-img: #A3BE8C;
  --graph-line: #4C566A;
  --graph-line-hover: #5E81AC;
  --graph-lines: #4C566A;
  --graph-node: #cfd7dd;
  --graph-node-attachment: #A3BE8C;
  --graph-node-focused: #88C0D0;
  --graph-node-hover-fill: #88C0D0;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #88C0D0;
  --graph-node-unresolved: #586477;
  --graph-tag: #88C0D0;
  --graph-text: #ECEFF4;
  --h1-background: transparent;
  --h1-border-color: #BF616A;
  --h1-border-left-color: #434C5E;
  --h1-border-line-color: #434C5E;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #434C5E;
  --h1-border-width: 0;
  --h1-color: #88C0D0;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #D08770;
  --h2-border-left-color: #434C5E;
  --h2-border-line-color: #434C5E;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #434C5E;
  --h2-border-width: 0;
  --h2-color: #88C0D0;
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #A5916A;
  --h3-border-left-color: #434C5E;
  --h3-border-line-color: #434C5E;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #434C5E;
  --h3-border-width: 0;
  --h3-color: #88C0D0;
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #88A073;
  --h4-border-left-color: #434C5E;
  --h4-border-line-color: #434C5E;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #434C5E;
  --h4-border-width: 0;
  --h4-color: #88C0D0;
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #A48EAD;
  --h5-border-left-color: #434C5E;
  --h5-border-line-color: #434C5E;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #434C5E;
  --h5-border-width: 0;
  --h5-color: #88C0D0;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #29395a;
  --h6-border-left-color: #434C5E;
  --h6-border-line-color: #434C5E;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: #434C5E;
  --h6-border-width: 0;
  --h6-color: #88C0D0;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #88C0D0;
  --he-text-on-accent-inactive: #ECEFF4;
  --he-title-bar-active-action: #5E81AC;
  --he-title-bar-active-bg: #1d2129;
  --he-title-bar-active-fg: #ECEFF4;
  --he-title-bar-active-pinned-bg: #2E3440;
  --he-title-bar-inactive-action: #97a1b9;
  --he-title-bar-inactive-bg: #2E3440;
  --he-title-bar-inactive-fg: #586477;
  --he-title-bar-inactive-pinned-bg: #2E3440;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #434C5E;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 700;
  --headers: #88C0D0;
  --heading-formatting: #586477;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(60, 159, 168, 0.4);
  --hr: #434C5E;
  --hr-alignment: -50%, -50%;
  --hr-color: #434C5E;
  --hr-icon-background: #2E3440;
  --hr-icon-color: #88C0D0;
  --hr-icon-font: "Material Icons Sharp";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(81, 120, 138, 0.48);
  --hvr-active: rgba(136, 192, 208, 0.565);
  --hvr2: rgba(60, 159, 168, 0.4);
  --i-at: #81A1C1;
  --icon-btn-radius: 0;
  --icon-color: #97a1b9;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #ECEFF4;
  --icon-color-hover: #ECEFF4;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #242933;
  --illusion-h1-background: #BF616A;
  --illusion-h2-background: #D08770;
  --illusion-h3-background: #A5916A;
  --illusion-h4-background: #88A073;
  --illusion-h5-background: #A48EAD;
  --illusion-h6-background: #29395a;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: #06080c60;
  --image-border-color: #434C5E;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #586477;
  --indentation-guide-color: #4C566A;
  --indentation-guide-color-active: #5E81AC;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #4C566A;
  --initiative-xp: sandybrown;
  --inline-title-color: #88C0D0;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: rgba(0, 0, 0, 0.3);
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #242933;
  --input-shadow-hover: 3px 3px 0 #242933;
  --interactive-accent: #4C566A;
  --interactive-accent-hover: #586477;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #586477;
  --interactive-normal: #242933;
  --its: "its";
  --kanban-button-background: #3B4252;
  --kanban-button-shadow: 2px 2px 0 #242933;
  --kanban-card-border: 2px solid #242933;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #2E3440;
  --kanban-card-text-color: #ECEFF4;
  --kanban-card-title-background: #2E3440;
  --kanban-card-title-border: 0 1px 0 #242933;
  --kanban-lane-background: #3B4252;
  --kanban-lane-border: 3px solid #242933;
  --kanban-lane-box-shadow: 2px 2px 0 #242933;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #88C0D0;
  --kanban-tag-background: #4C566A;
  --latex-color: #5E81AC;
  --latex-format-color: #586477;
  --latex-syntax-color: #97a1b9;
  --line-height-tight: 1.3em;
  --lines: #4C566A;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #88C0D0;
  --link-color-hover: #5E81AC;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #88C0D0;
  --link-external-color-hover: #81A1C1;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #586477;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #434C5E;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #4C566A;
  --list-color-2: #4C566A;
  --list-color-3: #4C566A;
  --list-color-4: #4C566A;
  --list-color-5: #4C566A;
  --list-color-6: #4C566A;
  --list-indent: 25px;
  --list-marker-color: #5E81AC;
  --list-marker-color-collapsed: #586477;
  --list-marker-color-hover: #97a1b9;
  --list-marker-color-other: #81A1C1;
  --list-marker-min-width: 0;
  --list-numbered-color: #5E81AC;
  --list-spacing: 1px;
  --lite-accent: #5E81AC;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #242933;
  --menu-border-color: #3B4252;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #242933;
  --message-border-color: #242933;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #242933;
  --message-color: #e5ebee;
  --metadata-border-color: #434C5E;
  --metadata-button-text-color: #586477;
  --metadata-divider-color: #434C5E;
  --metadata-icon-color: #97a1b9;
  --metadata-input-background-active: #06080c60;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #ECEFF4;
  --metadata-label-background-active: #06080c60;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #97a1b9;
  --metadata-label-text-color-hover: #97a1b9;
  --metadata-property-background-active: rgba(136, 192, 208, 0.565);
  --metadata-property-box-shadow-focus: 0 0 0 2px #5E81AC;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3B4252;
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
  --modal-background: #2E3440;
  --modal-border-color: #242933;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: #06080c60;
  --modal-radius: 0;
  --modal-sidebar-background: #3B4252;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #ECEFF4;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #97a1b9;
  --nav-heading-color-hover: #ECEFF4;
  --nav-indentation-guide-color: #4C566A;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #4C566A;
  --nav-item-background-border-color-hover: #4C566A;
  --nav-item-background-hover: #4C566A;
  --nav-item-background-selected: rgba(81, 120, 138, 0.48);
  --nav-item-border-color: #5E81AC;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #97a1b9;
  --nav-item-color-active: #e5ebee;
  --nav-item-color-highlighted: #e5ebee;
  --nav-item-color-hover: #e5ebee;
  --nav-item-color-selected: #ECEFF4;
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
  --note: #2E3440;
  --note-rgb: 46, 52, 64;
  --note-title-border-color: #88C0D0;
  --outer-bar: #242933;
  --outline: #242933;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #2E3440;
  --pdf-background: #2E3440;
  --pdf-page-background: #2E3440;
  --pdf-shadow: 0 0 0 1px #434C5E;
  --pdf-sidebar-background: #2E3440;
  --pdf-thumbnail-shadow: 0 0 0 1px #434C5E;
  --pill-border-color: #434C5E;
  --pill-border-color-hover: #3B4252;
  --pill-color: #97a1b9;
  --pill-color-hover: #ECEFF4;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #88C0D0;
  --pill-radius: 0;
  --popover-background: #2E3440;
  --popover-border: 3px solid #242933;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #5E81AC;
  --progress-bg: #3B4252;
  --prompt-background: #2E3440;
  --prompt-border-color: #242933;
  --prompt-border-width: 3px;
  --r-heading-color: #88C0D0;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #5E81AC;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-s: 0;
  --radius-xl: 0;
  --rainbow-1: #BF616A;
  --rainbow-2: #D08770;
  --rainbow-3: #A5916A;
  --rainbow-4: #88A073;
  --rainbow-5: #A48EAD;
  --rainbow-6: #29395a;
  --raised-background: color-mix(in srgb, #242933 65%, transparent) linear-gradient(#242933, color-mix(in srgb, #242933 65%, transparent));
  --ribbon-background: #242933;
  --ribbon-background-collapsed: #2E3440;
  --ribbon-border-color: #242933;
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
  --scrollbar-active-thumb-bg: #5E81AC;
  --scrollbar-bg: #3B4252;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #4C566A;
  --scrollbar-track-bg: #2E3440;
  --search-border: 2px solid #242933;
  --search-box-shadow: 2px 2px 0 #242933;
  --search-clear-button-color: #97a1b9;
  --search-icon-color: #97a1b9;
  --search-result-background: #2E3440;
  --setting-group-heading-color: #ECEFF4;
  --setting-item-alt-background-hover: #06080c60;
  --setting-item-background-hover: rgba(81, 120, 138, 0.48);
  --setting-item-border-color: #434C5E;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #88C0D0;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #06080c60;
  --setting-items-background: transparent;
  --setting-items-border-color: #434C5E;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #242933;
  --shadow-m: 3px 3px 0 #242933;
  --shadow-ml: 4px 4px 0 #242933;
  --shadow-s: 2px 2px 0 #242933;
  --side-bar: #242933;
  --side-bar-bg: #242933;
  --sidebar-icon-color: #ECEFF4;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #4C566A;
  --sidebar-tab-background-color-hover: #5E81AC;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #4C566A;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #2E3440;
  --slider-thumb-border-color: #3B4252;
  --slider-thumb-radius: 0;
  --slider-track-background: #434C5E;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #97a1b9;
  --statblock-alt: #06080c60;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #2E3440;
  --statblock-bar-border-color: #5E81AC;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #5E81AC;
  --statblock-border-color: #4C566A;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #242933;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #ECEFF4;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #88C0D0;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #434C5E;
  --statblock-primary-color: #ECEFF4;
  --statblock-property-font-color: #ECEFF4;
  --statblock-property-name-font-color: #88C0D0;
  --statblock-rule-color: #5E81AC;
  --statblock-section-heading-border-color: #434C5E;
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
  --status-bar-background: #242933;
  --status-bar-border-color: #5E81AC;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #97a1b9;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #4C566A;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --success-bg: #32603e;
  --suggestion-background: #2E3440;
  --tab-background: #242933;
  --tab-background-active: #2E3440;
  --tab-container-background: #242933;
  --tab-curve: 0;
  --tab-divider-color: #434C5E;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #5E81AC;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #06080c60;
  --tab-stacked-shadow-color: #06080c60;
  --tab-switcher-background: #242933;
  --tab-switcher-menubar-background: linear-gradient(to top, #242933, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #242933;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #242933;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #5E81AC, 5px 5px 0 #242933;
  --tab-text-color: #586477;
  --tab-text-color-active: #ECEFF4;
  --tab-text-color-focused: #586477;
  --tab-text-color-focused-active: #ECEFF4;
  --tab-text-color-focused-active-current: #ECEFF4;
  --tab-text-color-focused-highlighted: #88C0D0;
  --tab-text-color-hover: #ECEFF4;
  --tab-top-outline-width: 0;
  --table: #434C5E;
  --table-add-button-background: #4C566A;
  --table-add-button-border-color: #2E3440;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #2E3440;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #06080c60;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #4C566A;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #4C566A;
  --table-header-background-hover: #5E81AC;
  --table-header-border-color: #2E3440;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #5E81AC;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #06080c60;
  --table-row-alt-background-hover: rgba(60, 159, 168, 0.4);
  --table-row-background-hover: rgba(60, 159, 168, 0.4);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #4C566A;
  --table-selection-border-radius: 0;
  --tag: #4C566A;
  --tag-background: #4C566A;
  --tag-background-color: #4C566A;
  --tag-background-hover: #5E81AC;
  --tag-border-color: #4C566A;
  --tag-border-color-hover: #5E81AC;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #A3BE8C;
  --tall: 700px;
  --td: #06080c60;
  --text: #ECEFF4;
  --text-accent: #88C0D0;
  --text-accent-hover: #81A1C1;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(81, 120, 138, 0.48);
  --text-highlight-bg-active: rgba(136, 192, 208, 0.565);
  --text-muted: #97a1b9;
  --text-normal: #ECEFF4;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(60, 159, 168, 0.4);
  --th: #4C566A;
  --th-text: #e5ebee;
  --theme-rainbow-1: #BF616A;
  --theme-rainbow-2: #D08770;
  --theme-rainbow-3: #A5916A;
  --theme-rainbow-4: #88A073;
  --theme-rainbow-5: #A48EAD;
  --theme-rainbow-6: #29395a;
  --tiny: 100px;
  --titlebar-background: #2E3440;
  --titlebar-background-focused: #242933;
  --titlebar-border-color: #434C5E;
  --titlebar-text-color: #ECEFF4;
  --titlebar-text-color-focused: #ECEFF4;
  --toggle-border-width: 1px;
  --toggle-radius: 0;
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: 0;
  --toggle-width: 20px;
  --tooltip-color: #e5ebee;
  --vault-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --vault-name-color: #88C0D0;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #ECEFF4;
  --vault-profile-color-hover: #ECEFF4;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 41, 51);
  color: rgb(236, 239, 244);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(46, 52, 64);
  color: rgb(236, 239, 244);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 41, 51);
  color: rgb(236, 239, 244);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(36, 41, 51);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 41, 51);
  border-left-color: rgb(36, 41, 51);
  color: rgb(236, 239, 244);
}

body div#quartz-root {
  background-color: rgb(46, 52, 64);
  color: rgb(236, 239, 244);
}`,
    typography: `body .page article p > b, b {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body .page article p > em, em {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body .page article p > i, i {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body .page article p > strong, strong {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body .text-highlight {
  background-color: rgba(81, 120, 138, 0.48);
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body del {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: line-through 1px rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
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
  color: rgb(136, 192, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(136, 192, 208) none 0px;
  text-decoration: rgb(136, 192, 208);
  text-decoration-color: rgb(136, 192, 208);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(136, 192, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(136, 192, 208) none 0px;
  text-decoration: rgb(136, 192, 208);
  text-decoration-color: rgb(136, 192, 208);
}

body a.internal.broken {
  color: rgb(88, 100, 119);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(88, 100, 119) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(236, 239, 244);
}

body dt {
  color: rgb(236, 239, 244);
}

body ol > li {
  color: rgb(236, 239, 244);
}

body ol.overflow {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body ul > li {
  color: rgb(236, 239, 244);
}

body ul.overflow {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(29, 33, 41);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body table {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(6, 8, 12, 0.376);
}

body td {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(236, 239, 244);
}

body th {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

body tr {
  background-color: rgb(76, 86, 106);
}`,
    code: `body code {
  border-bottom-color: rgb(129, 161, 193);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(129, 161, 193);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(236, 239, 244);
}

body pre > code, pre:has(> code) {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body figcaption {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body img {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body video {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    embeds: `body .file-embed {
  background-color: rgb(36, 41, 51);
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
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(236, 239, 244);
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
  border-bottom-color: rgb(94, 129, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
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
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
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
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
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
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
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
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='l'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body li.task-list-item[data-task='u'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='w'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
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
  border-bottom-color: rgb(236, 239, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(236, 239, 244);
  border-left-width: 4px;
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
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
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(36, 41, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(36, 41, 51);
  border-left-width: 3px;
  border-right-color: rgb(36, 41, 51);
  border-right-width: 3px;
  border-top-color: rgb(36, 41, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(36, 41, 51) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(236, 239, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(236, 239, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(236, 239, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(136, 192, 208, 0.565);
  color: rgb(236, 239, 244);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(36, 41, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(36, 41, 51);
  border-left-width: 3px;
  border-right-color: rgb(36, 41, 51);
  border-right-width: 3px;
  border-top-color: rgb(36, 41, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 41, 51);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(136, 192, 208, 0.565);
  border-bottom-color: rgb(236, 239, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(236, 239, 244);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(136, 192, 208, 0.565);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(236, 239, 244);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(76, 86, 106);
  border-bottom-color: rgb(76, 86, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h3 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h4 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h5 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h6 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body hr {
  border-bottom-color: rgb(36, 41, 51);
  border-left-color: rgb(36, 41, 51);
  border-right-color: rgb(36, 41, 51);
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
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-corner {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-track {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(236, 239, 244);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(236, 239, 244);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(151, 161, 185);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(76, 86, 106);
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
  background-color: rgb(36, 41, 51);
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 0px;
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(151, 161, 185);
  text-decoration: rgb(151, 161, 185);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(151, 161, 185);
  text-decoration: rgb(151, 161, 185);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body li.section-li > .section .meta {
  color: rgb(151, 161, 185);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(151, 161, 185);
  text-decoration: rgb(151, 161, 185);
}

body ul.section-ul {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
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
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

body .metadata {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
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
  background-color: rgb(36, 41, 51);
}

body .page-header h2.page-title {
  color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(236, 239, 244);
  text-decoration: underline dotted rgb(236, 239, 244);
}

body details {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
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
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(129, 161, 193);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(36, 41, 51) 0px 2px 0px 0px;
  color: rgb(129, 161, 193);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body sub {
  color: rgb(236, 239, 244);
}

body summary {
  color: rgb(236, 239, 244);
}

body sup {
  color: rgb(236, 239, 244);
}`,
  },
  light: {
    base: `:root:root {
  --accent: #5E81AC;
  --accent-color: 143, 188, 187;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #81A1C1;
  --accent2-lite: #8FBCBB;
  --aside-bg: #D8DEE9;
  --background-modifier-active-hover: #29395a;
  --background-modifier-border: #b5c1d4;
  --background-modifier-border-focus: #5E81AC;
  --background-modifier-border-hover: #bdcce6;
  --background-modifier-cover: #d0ddef62;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #d0ddef62;
  --background-modifier-form-field-hover: #d0ddef62;
  --background-modifier-hover: rgba(92, 207, 228, 0.25);
  --background-modifier-message: #29395a;
  --background-modifier-success: #599049;
  --background-primary: #FBFBFC;
  --background-primary-alt: #4C566A;
  --background-secondary: #E5E9F0;
  --background-secondary-alt: #E5E9F0;
  --bases-cards-background: #FBFBFC;
  --bases-cards-cover-background: #4C566A;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #b5c1d4;
  --bases-cards-shadow-hover: 0 0 0 1px #bdcce6;
  --bases-embed-border-color: #b5c1d4;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #7e8dac;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #FBFBFC;
  --bases-table-cell-background-active: #FBFBFC;
  --bases-table-cell-background-disabled: #4C566A;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #5E81AC;
  --bases-table-cell-shadow-focus: 0 0 0 2px #29395a;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #4C566A;
  --bases-table-header-background: #FBFBFC;
  --bases-table-header-background-hover: rgba(92, 207, 228, 0.25);
  --bases-table-header-color: #7e8dac;
  --bases-table-row-background-hover: rgba(97, 148, 231, 0.3);
  --bases-table-summary-background: #FBFBFC;
  --bases-table-summary-background-hover: rgba(92, 207, 228, 0.25);
  --bg: #bdcce6;
  --blockquote-background-color: #ECEFF4;
  --blockquote-border-color: #bdcce6;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #4C566A;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #FBFBFC 65%, transparent) linear-gradient(#FBFBFC, color-mix(in srgb, #FBFBFC 65%, transparent));
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #bdcce6;
  --box-border-m: 3px solid #bdcce6;
  --box-border-s: 1px solid #bdcce6;
  --bttn: #88C0D0;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #88C0D0;
  --button-background-hover: #7e8dac;
  --button-border: #88C0D0;
  --button-border-radius: 0;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #FBFBFC;
  --canvas-card-label-color: #4e5b6f;
  --canvas-color: 166, 180, 204;
  --canvas-color-opacity: 0.07;
  --canvas-controls-radius: 0;
  --canvas-node-padding: 0 7px;
  --caret-color: #4C566A;
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
  --checkbox-border-color: #5E81AC;
  --checkbox-border-color-hover: #29395a;
  --checkbox-color: #5E81AC;
  --checkbox-color-hover: #29395a;
  --checkbox-marker-color: #FBFBFC;
  --checkbox-radius: 0;
  --checklist-done-color: #7e8dac;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #ECEFF4;
  --code-bg: #ECEFF4;
  --code-border-color: #b5c1d4;
  --code-bracket-background: rgba(92, 207, 228, 0.25);
  --code-comment: #4e5b6f;
  --code-normal: #81A1C1;
  --code-punctuation: #7e8dac;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #bdcce6;
  --code-size: .90em;
  --code-text: #81A1C1;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #7e8dac;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(194, 76, 78);
  --color-accent-2: rgb(199, 87, 92);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #29395a;
  --dark-sidebar: #dde2ec;
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(143, 188, 187, 0.1);
  --dataview-th-background: #E5E9F0;
  --dataview-th-border-bottom: 2px solid #88C0D0;
  --dataview-th-color: #88C0D0;
  --dataview-th-count-color: #88C0D0;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #4C566A;
  --divider-color: #E5E9F0;
  --divider-color-hover: #5E81AC;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #29395a;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #d0ddef62;
  --dropdown-background: #E5E9F0;
  --dropdown-background-hover: #7e8dac;
  --embed-bg: #ECEFF4;
  --embed-block-shadow-hover: 2px 2px 0 #bdcce6;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #bdcce6;
  --embed-border-color: transparent;
  --embed-border-color-hover: #bdcce6;
  --embed-border-left: 2px solid #88C0D0;
  --embed-border-left-color: #88C0D0;
  --embed-border-left-color-hover: #88C0D0;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #bdcce6;
  --embed-border-start: 2px solid #29395a;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #bdcce6;
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
  --fg: #5E81AC;
  --file-font: "its";
  --file-header-background: #FBFBFC;
  --file-header-background-focused: #FBFBFC;
  --file-header-breadcrumb-color: #7e8dac;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #7e8dac;
  --file-header-color-active: #4C566A;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #29395a;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #E5E9F0;
  --file-icon: "";
  --file-icon-color: #7e8dac;
  --file-icon-margin: 6px;
  --file-text-color: #7e8dac;
  --flair-background: #E5E9F0;
  --flair-color: #4C566A;
  --folder: #88C0D0;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #88C0D0;
  --folder-icon-open-color: #4C566A;
  --folder-open: #4C566A;
  --folder-open-text-color: #4C566A;
  --folder-text-color: #7e8dac;
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
  --footnote-divider-color: #b5c1d4;
  --footnote-id-color: #7e8dac;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #d0ddef62;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #7e8dac;
  --graph-arrow: #7e8dac;
  --graph-background: #E5E9F0;
  --graph-bg: #E5E9F0;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #5E81AC;
  --graph-focused: #8FBCBB;
  --graph-line: #b5c1d4;
  --graph-line-hover: #5E81AC;
  --graph-lines: #b5c1d4;
  --graph-node: #4C566A;
  --graph-node-focused: #8FBCBB;
  --graph-node-hover-fill: #5E81AC;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #88C0D0;
  --graph-node-unresolved: #7e8dac;
  --graph-tag: #88C0D0;
  --graph-text: #4C566A;
  --h1-background: transparent;
  --h1-border-color: #BF616A;
  --h1-border-left-color: #b5c1d4;
  --h1-border-line-color: #b5c1d4;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #b5c1d4;
  --h1-border-width: 0;
  --h1-color: #88C0D0;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #D08770;
  --h2-border-left-color: #b5c1d4;
  --h2-border-line-color: #b5c1d4;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #b5c1d4;
  --h2-border-width: 0;
  --h2-color: #88C0D0;
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #A5916A;
  --h3-border-left-color: #b5c1d4;
  --h3-border-line-color: #b5c1d4;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #b5c1d4;
  --h3-border-width: 0;
  --h3-color: #88C0D0;
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #88A073;
  --h4-border-left-color: #b5c1d4;
  --h4-border-line-color: #b5c1d4;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #b5c1d4;
  --h4-border-width: 0;
  --h4-color: #88C0D0;
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #A48EAD;
  --h5-border-left-color: #b5c1d4;
  --h5-border-line-color: #b5c1d4;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #b5c1d4;
  --h5-border-width: 0;
  --h5-color: #88C0D0;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #7e8dac;
  --h6-border-left-color: #b5c1d4;
  --h6-border-line-color: #b5c1d4;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: #b5c1d4;
  --h6-border-width: 0;
  --h6-color: #88C0D0;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #88C0D0;
  --he-text-on-accent-inactive: #4C566A;
  --he-title-bar-active-action: #3c66a8;
  --he-title-bar-active-bg: #ECEFF4;
  --he-title-bar-active-fg: #4C566A;
  --he-title-bar-active-pinned-bg: #FBFBFC;
  --he-title-bar-inactive-action: #7e8dac;
  --he-title-bar-inactive-bg: #FBFBFC;
  --he-title-bar-inactive-fg: #7e8dac;
  --he-title-bar-inactive-pinned-bg: #FBFBFC;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #b5c1d4;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 700;
  --headers: #88C0D0;
  --heading-formatting: #7e8dac;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(97, 148, 231, 0.3);
  --hr: #D8DEE9;
  --hr-alignment: -50%, -50%;
  --hr-color: #D8DEE9;
  --hr-icon-background: #FBFBFC;
  --hr-icon-color: #88C0D0;
  --hr-icon-font: "Material Icons Sharp";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(119, 235, 210, 0.4);
  --hvr-active: rgba(92, 207, 228, 0.25);
  --hvr2: rgba(97, 148, 231, 0.3);
  --i-at: #81A1C1;
  --icon-btn-radius: 0;
  --icon-color: #7e8dac;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #4C566A;
  --icon-color-hover: #4C566A;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --icons: #d04e4e;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #bdcce6;
  --illusion-h1-background: #BF616A;
  --illusion-h2-background: #D08770;
  --illusion-h3-background: #A5916A;
  --illusion-h4-background: #88A073;
  --illusion-h5-background: #A48EAD;
  --illusion-h6-background: #7e8dac;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: #d0ddef62;
  --image-border-color: #b5c1d4;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #7e8dac;
  --indentation-guide-color: #b5c1d4;
  --indentation-guide-color-active: #5E81AC;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #b5c1d4;
  --initiative-xp: sandybrown;
  --inline-title-color: #88C0D0;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: #d0ddef62;
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #bdcce6;
  --input-shadow-hover: 3px 3px 0 #bdcce6;
  --interactive-accent: #29395a;
  --interactive-accent-hover: #7e8dac;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #7e8dac;
  --interactive-normal: #E5E9F0;
  --its: "its";
  --kanban-button-background: #ECEFF4;
  --kanban-button-shadow: 2px 2px 0 #bdcce6;
  --kanban-card-border: 2px solid #bdcce6;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #FBFBFC;
  --kanban-card-text-color: #4C566A;
  --kanban-card-title-background: #FBFBFC;
  --kanban-card-title-border: 0 1px 0 #bdcce6;
  --kanban-lane-background: #ECEFF4;
  --kanban-lane-border: 3px solid #bdcce6;
  --kanban-lane-box-shadow: 2px 2px 0 #bdcce6;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #8FBCBB;
  --kanban-tag-background: #5E81AC;
  --latex-color: #3c66a8;
  --latex-format-color: #7e8dac;
  --latex-syntax-color: #7e8dac;
  --line-height-tight: 1.3em;
  --lines: #b5c1d4;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #8FBCBB;
  --link-color-hover: #3c66a8;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #8FBCBB;
  --link-external-color-hover: #81A1C1;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #7e8dac;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #b5c1d4;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #b5c1d4;
  --list-color-2: #b5c1d4;
  --list-color-3: #b5c1d4;
  --list-color-4: #b5c1d4;
  --list-color-5: #b5c1d4;
  --list-color-6: #b5c1d4;
  --list-indent: 25px;
  --list-marker-color: #5E81AC;
  --list-marker-color-collapsed: #7e8dac;
  --list-marker-color-hover: #7e8dac;
  --list-marker-color-other: #81A1C1;
  --list-marker-min-width: 0;
  --list-numbered-color: #3c66a8;
  --list-spacing: 1px;
  --lite-accent: #3c66a8;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #E5E9F0;
  --menu-border-color: #bdcce6;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #bdcce6;
  --message-border-color: #bdcce6;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #bdcce6;
  --message-color: #e5ebee;
  --metadata-border-color: #b5c1d4;
  --metadata-button-text-color: #7e8dac;
  --metadata-divider-color: #b5c1d4;
  --metadata-icon-color: #7e8dac;
  --metadata-input-background-active: #d0ddef62;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #4C566A;
  --metadata-label-background-active: #d0ddef62;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #7e8dac;
  --metadata-label-text-color-hover: #7e8dac;
  --metadata-property-background-active: rgba(92, 207, 228, 0.25);
  --metadata-property-box-shadow-focus: 0 0 0 2px #5E81AC;
  --metadata-property-box-shadow-hover: 0 0 0 1px #bdcce6;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #e5ebee;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #7e8dac;
  --metadata-title-icon: "";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #FBFBFC;
  --modal-border-color: #bdcce6;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: #d0ddef62;
  --modal-radius: 0;
  --modal-sidebar-background: #dde2ec;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #4C566A;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #7e8dac;
  --nav-heading-color-hover: #4C566A;
  --nav-indentation-guide-color: #b5c1d4;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #29395a;
  --nav-item-background-border-color-hover: #29395a;
  --nav-item-background-hover: #29395a;
  --nav-item-background-selected: rgba(119, 235, 210, 0.4);
  --nav-item-border-color: #3c66a8;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #7e8dac;
  --nav-item-color-active: #e5ebee;
  --nav-item-color-highlighted: #e5ebee;
  --nav-item-color-hover: #e5ebee;
  --nav-item-color-selected: #4C566A;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 0;
  --nav-item-size: 14px;
  --nav-item-weight: 500;
  --nav-item-weight-active: 700;
  --nav-item-weight-hover: 700;
  --nav-item-white-space: wrap;
  --nav-tag-color: #4e5b6f;
  --nav-tag-color-active: #7e8dac;
  --nav-tag-color-hover: #7e8dac;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #FBFBFC;
  --note-rgb: 248, 251, 255;
  --note-title-border-color: #88C0D0;
  --outer-bar: #E5E9F0;
  --outline: #bdcce6;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #FBFBFC;
  --pdf-background: #FBFBFC;
  --pdf-page-background: #FBFBFC;
  --pdf-sidebar-background: #FBFBFC;
  --pill-border-color: #b5c1d4;
  --pill-border-color-hover: #bdcce6;
  --pill-color: #7e8dac;
  --pill-color-hover: #4C566A;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #8FBCBB;
  --pill-radius: 0;
  --popover-background: #FBFBFC;
  --popover-border: 3px solid #bdcce6;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #5E81AC;
  --progress-bg: #bdcce6;
  --prompt-background: #FBFBFC;
  --prompt-border-color: #bdcce6;
  --prompt-border-width: 3px;
  --r-heading-color: #88C0D0;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #3c66a8;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-s: 0;
  --radius-xl: 0;
  --rainbow-1: #BF616A;
  --rainbow-2: #D08770;
  --rainbow-3: #A5916A;
  --rainbow-4: #88A073;
  --rainbow-5: #A48EAD;
  --rainbow-6: #7e8dac;
  --raised-background: color-mix(in srgb, #FBFBFC 65%, transparent) linear-gradient(#FBFBFC, color-mix(in srgb, #FBFBFC 65%, transparent));
  --ribbon-background: #E5E9F0;
  --ribbon-background-collapsed: #FBFBFC;
  --ribbon-border-color: #E5E9F0;
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
  --scrollbar-active-thumb-bg: #3c66a8;
  --scrollbar-bg: #bdcce6;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #5E81AC;
  --scrollbar-track-bg: #FBFBFC;
  --search-border: 2px solid #bdcce6;
  --search-box-shadow: 2px 2px 0 #bdcce6;
  --search-clear-button-color: #7e8dac;
  --search-icon-color: #7e8dac;
  --search-result-background: #FBFBFC;
  --setting-group-heading-color: #4C566A;
  --setting-item-alt-background-hover: #d0ddef62;
  --setting-item-background-hover: rgba(119, 235, 210, 0.4);
  --setting-item-border-color: #b5c1d4;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #88C0D0;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #d0ddef62;
  --setting-items-background: transparent;
  --setting-items-border-color: #b5c1d4;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #bdcce6;
  --shadow-m: 3px 3px 0 #bdcce6;
  --shadow-ml: 4px 4px 0 #bdcce6;
  --shadow-s: 2px 2px 0 #bdcce6;
  --side-bar: #E5E9F0;
  --side-bar-bg: #E5E9F0;
  --sidebar-icon-color: #4C566A;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #88C0D0;
  --sidebar-tab-background-color-hover: #5E81AC;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #88C0D0;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #FBFBFC;
  --slider-thumb-border-color: #bdcce6;
  --slider-thumb-radius: 0;
  --slider-track-background: #b5c1d4;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #7e8dac;
  --statblock-alt: #d0ddef62;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #FBFBFC;
  --statblock-bar-border-color: #5E81AC;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #5E81AC;
  --statblock-border-color: #b5c1d4;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #bdcce6;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #4C566A;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #88C0D0;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #D8DEE9;
  --statblock-primary-color: #4C566A;
  --statblock-property-font-color: #4C566A;
  --statblock-property-name-font-color: #88C0D0;
  --statblock-rule-color: #5E81AC;
  --statblock-section-heading-border-color: #b5c1d4;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #8996a0;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #E5E9F0;
  --status-bar-border-color: #5E81AC;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #7e8dac;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #29395a;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --success-bg: #599049;
  --suggestion-background: #FBFBFC;
  --tab-background: #E5E9F0;
  --tab-background-active: #FBFBFC;
  --tab-container-background: #E5E9F0;
  --tab-curve: 0;
  --tab-divider-color: #D8DEE9;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #5E81AC;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #d0ddef62;
  --tab-stacked-shadow-color: #d0ddef62;
  --tab-switcher-background: #E5E9F0;
  --tab-switcher-menubar-background: linear-gradient(to top, #E5E9F0, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #bdcce6;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #bdcce6;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #3c66a8, 5px 5px 0 #bdcce6;
  --tab-text-color: #7e8dac;
  --tab-text-color-active: #4C566A;
  --tab-text-color-focused: #7e8dac;
  --tab-text-color-focused-active: #4C566A;
  --tab-text-color-focused-active-current: #4C566A;
  --tab-text-color-focused-highlighted: #8FBCBB;
  --tab-text-color-hover: #4C566A;
  --tab-top-outline-width: 0;
  --table: #b5c1d4;
  --table-add-button-background: #88C0D0;
  --table-add-button-border-color: #FBFBFC;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #FBFBFC;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #d0ddef62;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #29395a;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #29395a;
  --table-header-background-hover: #5E81AC;
  --table-header-border-color: #FBFBFC;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #3c66a8;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #d0ddef62;
  --table-row-alt-background-hover: rgba(97, 148, 231, 0.3);
  --table-row-background-hover: rgba(97, 148, 231, 0.3);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #29395a;
  --table-selection-border-radius: 0;
  --tag: #5E81AC;
  --tag-background: #5E81AC;
  --tag-background-color: #5E81AC;
  --tag-background-hover: #5E81AC;
  --tag-border-color: #5E81AC;
  --tag-border-color-hover: #5E81AC;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #8FBCBB;
  --tall: 700px;
  --td: #d0ddef62;
  --text: #4C566A;
  --text-accent: #8FBCBB;
  --text-accent-hover: #81A1C1;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(119, 235, 210, 0.4);
  --text-highlight-bg-active: rgba(92, 207, 228, 0.25);
  --text-muted: #7e8dac;
  --text-normal: #4C566A;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(97, 148, 231, 0.3);
  --th: #29395a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #BF616A;
  --theme-rainbow-2: #D08770;
  --theme-rainbow-3: #A5916A;
  --theme-rainbow-4: #88A073;
  --theme-rainbow-5: #A48EAD;
  --theme-rainbow-6: #7e8dac;
  --tiny: 100px;
  --titlebar-background: #FBFBFC;
  --titlebar-background-focused: #E5E9F0;
  --titlebar-border-color: #b5c1d4;
  --titlebar-text-color: #4C566A;
  --titlebar-text-color-focused: #4C566A;
  --toggle-border-width: 1px;
  --toggle-radius: 0;
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: 0;
  --toggle-width: 20px;
  --tooltip-color: #e5ebee;
  --vault-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --vault-name-color: #88C0D0;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #4C566A;
  --vault-profile-color-hover: #4C566A;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(229, 233, 240);
  color: rgb(76, 86, 106);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(251, 251, 252);
  color: rgb(76, 86, 106);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(229, 233, 240);
  color: rgb(76, 86, 106);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(229, 233, 240);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  color: rgb(76, 86, 106);
}

body div#quartz-root {
  background-color: rgb(251, 251, 252);
  color: rgb(76, 86, 106);
}`,
    typography: `body .page article p > b, b {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(76, 86, 106) none 0px;
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

body .page article p > em, em {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 86, 106) none 0px;
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

body .page article p > i, i {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 86, 106) none 0px;
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

body .page article p > strong, strong {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(76, 86, 106) none 0px;
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

body .text-highlight {
  background-color: rgba(119, 235, 210, 0.4);
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 86, 106) none 0px;
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

body del {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 86, 106) none 0px;
  text-decoration: line-through 1px rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(126, 141, 172) none 0px;
  text-decoration: rgb(126, 141, 172);
  text-decoration-color: rgb(126, 141, 172);
}`,
    links: `body a.external, footer a {
  color: rgb(143, 188, 187);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(143, 188, 187) none 0px;
  text-decoration: rgb(143, 188, 187);
  text-decoration-color: rgb(143, 188, 187);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(143, 188, 187);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(143, 188, 187) none 0px;
  text-decoration: rgb(143, 188, 187);
  text-decoration-color: rgb(143, 188, 187);
}

body a.internal.broken {
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(126, 141, 172) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(76, 86, 106);
}

body dt {
  color: rgb(76, 86, 106);
}

body ol > li {
  color: rgb(76, 86, 106);
}

body ol.overflow {
  background-color: rgb(251, 251, 252);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

body ul > li {
  color: rgb(76, 86, 106);
}

body ul.overflow {
  background-color: rgb(251, 251, 252);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(236, 239, 244);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

body table {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(208, 221, 239, 0.384);
}

body td {
  border-bottom-color: rgb(251, 251, 252);
  border-left-color: rgb(251, 251, 252);
  border-right-color: rgb(251, 251, 252);
  border-top-color: rgb(251, 251, 252);
  color: rgb(76, 86, 106);
}

body th {
  border-bottom-color: rgb(251, 251, 252);
  border-left-color: rgb(251, 251, 252);
  border-right-color: rgb(251, 251, 252);
  border-top-color: rgb(251, 251, 252);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

body tr {
  background-color: rgb(41, 57, 90);
}`,
    code: `body code {
  border-bottom-color: rgb(129, 161, 193);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(129, 161, 193);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(181, 193, 212);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 193, 212);
  border-right-color: rgb(181, 193, 212);
  border-top-color: rgb(181, 193, 212);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(181, 193, 212);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 193, 212);
  border-right-color: rgb(181, 193, 212);
  border-top-color: rgb(181, 193, 212);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(76, 86, 106);
}

body pre > code, pre:has(> code) {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(181, 193, 212);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 193, 212);
  border-right-color: rgb(181, 193, 212);
  border-top-color: rgb(181, 193, 212);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(181, 193, 212);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 193, 212);
  border-right-color: rgb(181, 193, 212);
  border-top-color: rgb(181, 193, 212);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

body figcaption {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

body img {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

body video {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}`,
    embeds: `body .file-embed {
  background-color: rgb(229, 233, 240);
  border-bottom-color: rgb(126, 141, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(126, 141, 172);
  border-right-color: rgb(126, 141, 172);
  border-top-color: rgb(126, 141, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(76, 86, 106);
  color: rgb(76, 86, 106);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(41, 57, 90);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(41, 57, 90);
  border-right-color: rgb(76, 86, 106);
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
  color: rgb(126, 141, 172);
  text-decoration: rgb(126, 141, 172);
  text-decoration-color: rgb(126, 141, 172);
}

body input[type=checkbox] {
  border-bottom-color: rgb(94, 129, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
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
  color: rgb(76, 86, 106);
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

body li.task-list-item[data-task='/'] {
  color: rgb(126, 141, 172);
  text-decoration: rgb(126, 141, 172);
  text-decoration-color: rgb(126, 141, 172);
}

body li.task-list-item[data-task='>'] {
  color: rgb(76, 86, 106);
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
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
  color: rgb(76, 86, 106);
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
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
  color: rgb(76, 86, 106);
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

body li.task-list-item[data-task='l'] {
  color: rgb(76, 86, 106);
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

body li.task-list-item[data-task='u'] {
  color: rgb(76, 86, 106);
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

body li.task-list-item[data-task='w'] {
  color: rgb(76, 86, 106);
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
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
  border-bottom-color: rgb(76, 86, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 86, 106);
  border-left-width: 4px;
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
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
  border-bottom-color: rgb(181, 193, 212);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(181, 193, 212);
  border-right-color: rgb(181, 193, 212);
  border-top-color: rgb(181, 193, 212);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(251, 251, 252);
  border-bottom-color: rgb(189, 204, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(189, 204, 230);
  border-left-width: 3px;
  border-right-color: rgb(189, 204, 230);
  border-right-width: 3px;
  border-top-color: rgb(189, 204, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(189, 204, 230) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 86, 106) none 0px;
  text-decoration: rgb(76, 86, 106);
  text-decoration-color: rgb(76, 86, 106);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(76, 86, 106);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(76, 86, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(76, 86, 106);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(92, 207, 228, 0.25);
  color: rgb(76, 86, 106);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(189, 204, 230);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(189, 204, 230);
  border-left-width: 3px;
  border-right-color: rgb(189, 204, 230);
  border-right-width: 3px;
  border-top-color: rgb(189, 204, 230);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(92, 207, 228, 0.25);
  border-bottom-color: rgb(76, 86, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(76, 86, 106);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(92, 207, 228, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(76, 86, 106);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(94, 129, 172);
  border-bottom-color: rgb(94, 129, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h3 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h4 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h5 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h6 {
  color: rgb(136, 192, 208);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body hr {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
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
  background: rgb(251, 251, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 252);
}

body ::-webkit-scrollbar-corner {
  background: rgb(251, 251, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 252);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(251, 251, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 252);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(251, 251, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 252);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(251, 251, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 252);
}

body ::-webkit-scrollbar-track {
  background: rgb(251, 251, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 252);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(76, 86, 106);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(76, 86, 106);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(126, 141, 172);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(41, 57, 90);
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
  border-bottom-color: rgb(126, 141, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(126, 141, 172);
  border-right-color: rgb(126, 141, 172);
  border-top-color: rgb(126, 141, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(126, 141, 172);
}`,
    footer: `body footer {
  background-color: rgb(229, 233, 240);
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 0px;
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(126, 141, 172);
  text-decoration: rgb(126, 141, 172);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: rgb(76, 86, 106);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(126, 141, 172);
  text-decoration: rgb(126, 141, 172);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

body li.section-li > .section .meta {
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(126, 141, 172);
  text-decoration: rgb(126, 141, 172);
}

body ul.section-ul {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(126, 141, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(126, 141, 172);
  border-right-color: rgb(126, 141, 172);
  border-top-color: rgb(126, 141, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(126, 141, 172);
}

body .darkmode svg {
  color: rgb(126, 141, 172);
  stroke: rgb(126, 141, 172);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(126, 141, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(126, 141, 172);
  border-right-color: rgb(126, 141, 172);
  border-top-color: rgb(126, 141, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(126, 141, 172);
}

body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: rgb(76, 86, 106);
}

body .metadata {
  border-bottom-color: rgb(181, 193, 212);
  border-left-color: rgb(181, 193, 212);
  border-right-color: rgb(181, 193, 212);
  border-top-color: rgb(181, 193, 212);
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(126, 141, 172);
  border-left-color: rgb(126, 141, 172);
  border-right-color: rgb(126, 141, 172);
  border-top-color: rgb(126, 141, 172);
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(229, 233, 240);
}

body .page-header h2.page-title {
  color: rgb(76, 86, 106);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(76, 86, 106);
  text-decoration: underline dotted rgb(76, 86, 106);
}

body details {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

body input[type=text] {
  border-bottom-color: rgb(126, 141, 172);
  border-left-color: rgb(126, 141, 172);
  border-right-color: rgb(126, 141, 172);
  border-top-color: rgb(126, 141, 172);
  color: rgb(126, 141, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(129, 161, 193);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(189, 204, 230) 0px 2px 0px 0px;
  color: rgb(129, 161, 193);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

body sub {
  color: rgb(76, 86, 106);
}

body summary {
  color: rgb(76, 86, 106);
}

body sup {
  color: rgb(76, 86, 106);
}`,
  },
};
