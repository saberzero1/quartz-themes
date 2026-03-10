import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.notion",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #708dbb;
  --accent-color: 66, 180, 224;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #A8ABAC;
  --accent2-lite: #2EA1CF;
  --aside-bg: #2F3437;
  --background-modifier-active-hover: #4B5053;
  --background-modifier-border: #4C5153;
  --background-modifier-border-focus: #708dbb;
  --background-modifier-border-hover: #3C4144;
  --background-modifier-cover: #0f0f0f33;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #0f0f0f33;
  --background-modifier-form-field-hover: #0f0f0f33;
  --background-modifier-hover: rgba(45, 170, 219, 0.3);
  --background-modifier-message: #4B5053;
  --background-modifier-success: #32603e;
  --background-primary: #2F3437;
  --background-primary-alt: #3F4447;
  --background-secondary: #373C3F;
  --background-secondary-alt: #3F4447;
  --bases-cards-background: #2F3437;
  --bases-cards-cover-background: #3F4447;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #4C5153;
  --bases-cards-shadow-hover: 0 0 0 1px #3C4144;
  --bases-embed-border-color: #4C5153;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #A8ABAC;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #2F3437;
  --bases-table-cell-background-active: #2F3437;
  --bases-table-cell-background-disabled: #3F4447;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #708dbb;
  --bases-table-cell-shadow-focus: 0 0 0 2px #4B5053;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #3F4447;
  --bases-table-header-background: #2F3437;
  --bases-table-header-background-hover: rgba(45, 170, 219, 0.3);
  --bases-table-header-color: #A8ABAC;
  --bases-table-row-background-hover: rgb(255, 255, 255, 0.1);
  --bases-table-summary-background: #2F3437;
  --bases-table-summary-background-hover: rgba(45, 170, 219, 0.3);
  --bg: #3C4144;
  --blockquote-background-color: #3F4447;
  --blockquote-border-color: #3C4144;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #EBEBEB;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #3F4447 65%, transparent) linear-gradient(#3F4447, color-mix(in srgb, #3F4447 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #0f0f0f40;
  --box-border-m: 3px solid #0f0f0f40;
  --box-border-s: 1px solid #0f0f0f40;
  --bttn: #43B3E0;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #43B3E0;
  --button-background-hover: #5D6265;
  --button-border: #43B3E0;
  --button-border-radius: 0;
  --button-radius: 0;
  --button-text: white;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #2F3437;
  --canvas-card-label-color: #4e5b6f;
  --canvas-color: 88, 100, 159;
  --canvas-color-opacity: 0.07;
  --canvas-controls-radius: 0;
  --canvas-node-padding: 0 7px;
  --caret-color: #EBEBEB;
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
  --checkbox-border-color: #708dbb;
  --checkbox-border-color-hover: #4B5053;
  --checkbox-color: #708dbb;
  --checkbox-color-hover: #4B5053;
  --checkbox-marker-color: #2F3437;
  --checkbox-radius: 0;
  --checklist-done-color: #5D6265;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #3C4144;
  --code-bg: #3C4144;
  --code-border-color: #4C5153;
  --code-bracket-background: rgba(45, 170, 219, 0.3);
  --code-comment: #4e5b6f;
  --code-normal: #EBEBEB;
  --code-punctuation: #A8ABAC;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #0f0f0f40;
  --code-size: .90em;
  --code-text: #EBEBEB;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #5D6265;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(199, 87, 92);
  --color-accent-2: rgb(209, 113, 121);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark: var(--text-normal);
  --dark-accent: #4B5053;
  --dark-sidebar: #373C3F;
  --darkgray: var(--text-normal);
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(66, 180, 224, 0.1);
  --dataview-th-background: #3F4447;
  --dataview-th-border-bottom: 2px solid #EBEBEB;
  --dataview-th-color: #EBEBEB;
  --dataview-th-count-color: #EBEBEB;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #3F4447;
  --divider-color: #3F4447;
  --divider-color-hover: #708dbb;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #4B5053;
  --drag-ghost-text-color: white;
  --drop-shadow: #06080c60;
  --dropdown-background: #3F4447;
  --dropdown-background-hover: #5D6265;
  --embed-bg: #3F4447;
  --embed-block-shadow-hover: 2px 2px 0 #0f0f0f40;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #0f0f0f40;
  --embed-border-color: transparent;
  --embed-border-color-hover: #0f0f0f40;
  --embed-border-left: 2px solid #EBEBEB;
  --embed-border-left-color: #EBEBEB;
  --embed-border-left-color-hover: #EBEBEB;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #0f0f0f40;
  --embed-border-start: 2px solid #4B5053;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #0f0f0f40;
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
  --file-header-background: #2F3437;
  --file-header-background-focused: #2F3437;
  --file-header-breadcrumb-color: #5D6265;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #5D6265;
  --file-header-color-active: #EBEBEB;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #4B5053;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #3F4447;
  --file-icon: "";
  --file-icon-color: #4B5053;
  --file-icon-margin: 6px;
  --file-text-color: #EBEBEB;
  --flair-background: #3F4447;
  --flair-color: #EBEBEB;
  --folder: #EBEBEB;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #EBEBEB;
  --folder-icon-open-color: #43B3E0;
  --folder-open: #43B3E0;
  --folder-open-text-color: #EBEBEB;
  --folder-text-color: #EBEBEB;
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
  --footnote: #7A7D7F;
  --footnote-divider-color: #4C5153;
  --footnote-id-color: #A8ABAC;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #0f0f0f33;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #5D6265;
  --graph-arrow: #A8ABAC;
  --graph-background: #2F3437;
  --graph-bg: #2F3437;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #EBEBEB;
  --graph-focused: #708dbb;
  --graph-img: #A8ABAC;
  --graph-line: #5D626555;
  --graph-line-hover: #708dbb;
  --graph-lines: #5D626555;
  --graph-node: #EBEBEB;
  --graph-node-attachment: #A8ABAC;
  --graph-node-focused: #708dbb;
  --graph-node-hover-fill: #EBEBEB;
  --graph-node-hover-outline: white;
  --graph-node-tag: #708dbb;
  --graph-node-unresolved: #5D6265;
  --graph-tag: #708dbb;
  --graph-text: #EBEBEB;
  --gray: var(--text-muted);
  --h1-background: transparent;
  --h1-border-color: #43B3E0;
  --h1-border-left-color: #4C5153;
  --h1-border-line-color: #4C5153;
  --h1-border-line-height: 0;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #4C5153;
  --h1-border-width: 0;
  --h1-color: #EBEBEB;
  --h1-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #708dbb;
  --h2-border-left-color: #4C5153;
  --h2-border-line-color: #4C5153;
  --h2-border-line-height: 0;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #4C5153;
  --h2-border-width: 0;
  --h2-color: #EBEBEB;
  --h2-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #4e5b6f;
  --h3-border-left-color: #4C5153;
  --h3-border-line-color: #4C5153;
  --h3-border-line-height: 0;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #4C5153;
  --h3-border-width: 0;
  --h3-color: #EBEBEB;
  --h3-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #5D6265;
  --h4-border-left-color: #4C5153;
  --h4-border-line-color: #4C5153;
  --h4-border-line-height: 0;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #4C5153;
  --h4-border-width: 0;
  --h4-color: #EBEBEB;
  --h4-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #3C3F43;
  --h5-border-left-color: #4C5153;
  --h5-border-line-color: #4C5153;
  --h5-border-line-height: 0;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #4C5153;
  --h5-border-width: 0;
  --h5-color: #EBEBEB;
  --h5-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #0f0f0f33;
  --h6-border-left-color: #4C5153;
  --h6-border-line-color: #4C5153;
  --h6-border-line-height: 0;
  --h6-border-line-width: 0;
  --h6-border-right-color: #4C5153;
  --h6-border-width: 0;
  --h6-color: #EBEBEB;
  --h6-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #EBEBEB;
  --he-text-on-accent-inactive: #EBEBEB;
  --he-title-bar-active-action: #43B3E0;
  --he-title-bar-active-bg: #3F4447;
  --he-title-bar-active-fg: #EBEBEB;
  --he-title-bar-active-pinned-bg: #2F3437;
  --he-title-bar-inactive-action: #A8ABAC;
  --he-title-bar-inactive-bg: #2F3437;
  --he-title-bar-inactive-fg: #5D6265;
  --he-title-bar-inactive-pinned-bg: #2F3437;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #4C5153;
  --header-border-line-height: 0;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-font-weight: 900;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 700;
  --headerFont: var(--font-text);
  --headers: #EBEBEB;
  --heading-formatting: #5D6265;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgb(255, 255, 255, 0.1);
  --hr: #3C3F43;
  --hr-alignment: -50%, -50%;
  --hr-color: #3C3F43;
  --hr-icon-background: #2F3437;
  --hr-icon-color: #EBEBEB;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(45, 170, 219, 0.3);
  --hvr-active: rgba(45, 170, 219, 0.3);
  --hvr2: rgb(255, 255, 255, 0.1);
  --i-at: #43B3E0;
  --icon-btn-radius: 0;
  --icon-color: #A8ABAC;
  --icon-color-active: white;
  --icon-color-focused: #EBEBEB;
  --icon-color-hover: #EBEBEB;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #0f0f0f40;
  --illusion-h1-background: #43B3E0;
  --illusion-h2-background: #708dbb;
  --illusion-h3-background: #4e5b6f;
  --illusion-h4-background: #5D6265;
  --illusion-h5-background: #3C3F43;
  --illusion-h6-background: #0f0f0f33;
  --illusion-header-arrow-color: white;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: white;
  --image-border-background: #0f0f0f33;
  --image-border-color: #4C5153;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #5D6265;
  --indentation-guide-color: #4C5153;
  --indentation-guide-color-active: #708dbb;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #4C5153;
  --initiative-xp: sandybrown;
  --inline-title-color: #EBEBEB;
  --inline-title-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: rgba(0, 0, 0, 0.3);
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #0f0f0f40;
  --input-shadow-hover: 3px 3px 0 #0f0f0f40;
  --interactive-accent: #4B5053;
  --interactive-accent-hover: #5D6265;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #5D6265;
  --interactive-normal: #3F4447;
  --its: "its";
  --kanban-button-background: #3C4144;
  --kanban-button-shadow: 2px 2px 0 #0f0f0f40;
  --kanban-card-border: 2px solid #0f0f0f40;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #2F3437;
  --kanban-card-text-color: #EBEBEB;
  --kanban-card-title-background: #2F3437;
  --kanban-card-title-border: 0 1px 0 #0f0f0f40;
  --kanban-lane-background: #3C4144;
  --kanban-lane-border: 3px solid #0f0f0f40;
  --kanban-lane-box-shadow: 2px 2px 0 #0f0f0f40;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #2EA1CF;
  --kanban-tag-background: #708dbb;
  --latex-color: #43B3E0;
  --latex-format-color: #5D6265;
  --latex-syntax-color: #A8ABAC;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-tight: 1.3em;
  --lines: #4C5153;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #2EA1CF;
  --link-color-hover: #43B3E0;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #2EA1CF;
  --link-external-color-hover: #A8ABAC;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #5D6265;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #4C5153;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #4C5153;
  --list-color-2: #4C5153;
  --list-color-3: #4C5153;
  --list-color-4: #4C5153;
  --list-color-5: #4C5153;
  --list-color-6: #4C5153;
  --list-indent: 25px;
  --list-marker-color: #708dbb;
  --list-marker-color-collapsed: #5D6265;
  --list-marker-color-hover: #A8ABAC;
  --list-marker-color-other: #A8ABAC;
  --list-marker-min-width: 0;
  --list-numbered-color: #43B3E0;
  --list-spacing: 1px;
  --lite-accent: #43B3E0;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #373C3F;
  --menu-border-color: #3C4144;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #0f0f0f40;
  --message-border-color: #0f0f0f40;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #0f0f0f40;
  --message-color: white;
  --metadata-border-color: #4C5153;
  --metadata-button-text-color: #5D6265;
  --metadata-divider-color: #4C5153;
  --metadata-icon-color: #A8ABAC;
  --metadata-input-background-active: #0f0f0f33;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #EBEBEB;
  --metadata-label-background-active: #0f0f0f33;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #A8ABAC;
  --metadata-label-text-color-hover: #A8ABAC;
  --metadata-property-background-active: rgba(45, 170, 219, 0.3);
  --metadata-property-box-shadow-focus: 0 0 0 2px #708dbb;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3C4144;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: white;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #A8ABAC;
  --metadata-title-icon: "";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #2F3437;
  --modal-border-color: #0f0f0f40;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: #0f0f0f33;
  --modal-radius: 0;
  --modal-sidebar-background: #373C3F;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #EBEBEB;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #A8ABAC;
  --nav-heading-color-hover: #EBEBEB;
  --nav-indentation-guide-color: #4C5153;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #4B5053;
  --nav-item-background-border-color-hover: #4B5053;
  --nav-item-background-hover: #4B5053;
  --nav-item-background-selected: rgba(45, 170, 219, 0.3);
  --nav-item-border-color: #43B3E0;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #EBEBEB;
  --nav-item-color-active: #708dbb;
  --nav-item-color-highlighted: white;
  --nav-item-color-hover: white;
  --nav-item-color-selected: #EBEBEB;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 0;
  --nav-item-size: 14px;
  --nav-item-weight: 500;
  --nav-item-weight-active: 700;
  --nav-item-weight-hover: 700;
  --nav-item-white-space: wrap;
  --nav-tag-color: #4e5b6f;
  --nav-tag-color-active: #A8ABAC;
  --nav-tag-color-hover: #A8ABAC;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #2F3437;
  --note-rgb: 47, 52, 55;
  --note-title-border-color: #EBEBEB;
  --outer-bar: #3F4447;
  --outline: #0f0f0f40;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #2F3437;
  --pdf-background: #2F3437;
  --pdf-page-background: #2F3437;
  --pdf-shadow: 0 0 0 1px #4C5153;
  --pdf-sidebar-background: #2F3437;
  --pdf-thumbnail-shadow: 0 0 0 1px #4C5153;
  --pill-border-color: #4C5153;
  --pill-border-color-hover: #3C4144;
  --pill-color: #A8ABAC;
  --pill-color-hover: #EBEBEB;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #2EA1CF;
  --pill-radius: 0;
  --popover-background: #2F3437;
  --popover-border: 3px solid #0f0f0f40;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #708dbb;
  --progress-bg: #3C4144;
  --prompt-background: #2F3437;
  --prompt-border-color: #0f0f0f40;
  --prompt-border-width: 3px;
  --r-heading-color: #EBEBEB;
  --r-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #43B3E0;
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
  --raised-background: color-mix(in srgb, #3F4447 65%, transparent) linear-gradient(#3F4447, color-mix(in srgb, #3F4447 65%, transparent));
  --ribbon-background: #3F4447;
  --ribbon-background-collapsed: #2F3437;
  --ribbon-border-color: #3F4447;
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
  --scrollbar-active-thumb-bg: #43B3E0;
  --scrollbar-bg: #3b4044;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #474C50;
  --scrollbar-track-bg: #2F3437;
  --search-border: 2px solid #0f0f0f40;
  --search-box-shadow: 2px 2px 0 #0f0f0f40;
  --search-clear-button-color: #A8ABAC;
  --search-icon-color: #A8ABAC;
  --search-result-background: #2F3437;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #EBEBEB;
  --setting-item-alt-background-hover: #0f0f0f33;
  --setting-item-background-hover: rgba(45, 170, 219, 0.3);
  --setting-item-border-color: #4C5153;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #EBEBEB;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #0f0f0f33;
  --setting-items-background: transparent;
  --setting-items-border-color: #4C5153;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #0f0f0f40;
  --shadow-m: 3px 3px 0 #0f0f0f40;
  --shadow-ml: 4px 4px 0 #0f0f0f40;
  --shadow-s: 2px 2px 0 #0f0f0f40;
  --side-bar: #373C3F;
  --side-bar-bg: #3F4447;
  --sidebar-icon-color: #EBEBEB;
  --sidebar-icon-color-active: white;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #43B3E0;
  --sidebar-tab-background-color-hover: #708dbb;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #43B3E0;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: white;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #2F3437;
  --slider-thumb-border-color: #3C4144;
  --slider-thumb-radius: 0;
  --slider-track-background: #4C5153;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #A8ABAC;
  --statblock-alt: #0f0f0f33;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #2F3437;
  --statblock-bar-border-color: #708dbb;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #708dbb;
  --statblock-border-color: #4C5153;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #0f0f0f40;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #EBEBEB;
  --statblock-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-heading-font-color: #EBEBEB;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #3C3F43;
  --statblock-primary-color: #EBEBEB;
  --statblock-property-font-color: #EBEBEB;
  --statblock-property-name-font-color: #EBEBEB;
  --statblock-rule-color: #708dbb;
  --statblock-section-heading-border-color: #4C5153;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-section-heading-font-color: #7A7D7F;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #3F4447;
  --status-bar-border-color: #708dbb;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #A8ABAC;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #4B5053;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: white;
  --style-settings-heading-color-hover: white;
  --success-bg: #32603e;
  --suggestion-background: #2F3437;
  --tab-background: #3F4447;
  --tab-background-active: #2F3437;
  --tab-container-background: #3F4447;
  --tab-curve: 0;
  --tab-divider-color: #3C3F43;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #708dbb;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #06080c60;
  --tab-stacked-shadow-color: #06080c60;
  --tab-switcher-background: #373C3F;
  --tab-switcher-menubar-background: linear-gradient(to top, #373C3F, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #0f0f0f40;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #0f0f0f40;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #43B3E0, 5px 5px 0 #0f0f0f40;
  --tab-text-color: #5D6265;
  --tab-text-color-active: #EBEBEB;
  --tab-text-color-focused: #5D6265;
  --tab-text-color-focused-active: #EBEBEB;
  --tab-text-color-focused-active-current: #EBEBEB;
  --tab-text-color-focused-highlighted: #2EA1CF;
  --tab-text-color-hover: #EBEBEB;
  --tab-top-outline-width: 0;
  --table: #4C5153;
  --table-add-button-background: #43B3E0;
  --table-add-button-border-color: #2F3437;
  --table-add-button-col-width: 24px;
  --table-add-button-color: white;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #2F3437;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #0f0f0f33;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #4B5053;
  --table-drag-handle-color: #4e5b6f;
  --table-header-background: #373c3f;
  --table-header-background-hover: #708dbb;
  --table-header-border-color: #2F3437;
  --table-header-color: white;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #43B3E0;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #0f0f0f33;
  --table-row-alt-background-hover: rgb(255, 255, 255, 0.1);
  --table-row-background-hover: rgb(255, 255, 255, 0.1);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #4B5053;
  --table-selection-border-radius: 0;
  --tag: #708dbb;
  --tag-background: #708dbb;
  --tag-background-color: #708dbb;
  --tag-background-hover: #708dbb;
  --tag-border-color: #708dbb;
  --tag-border-color-hover: #708dbb;
  --tag-color: white;
  --tag-color-hover: white;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #d04e4e;
  --tall: 700px;
  --td: #0f0f0f33;
  --tertiary: var(--text-accent-hover);
  --text: #EBEBEB;
  --text-accent: #2EA1CF;
  --text-accent-hover: #A8ABAC;
  --text-dl: white;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(45, 170, 219, 0.3);
  --text-highlight-bg-active: rgba(45, 170, 219, 0.3);
  --text-muted: #A8ABAC;
  --text-normal: #EBEBEB;
  --text-selection: rgb(255, 255, 255, 0.1);
  --textHighlight: var(--text-highlight-bg);
  --th: #373c3f;
  --th-text: white;
  --theme-rainbow-1: #43B3E0;
  --theme-rainbow-2: #708dbb;
  --theme-rainbow-3: #4e5b6f;
  --theme-rainbow-4: #5D6265;
  --theme-rainbow-5: #3C3F43;
  --theme-rainbow-6: #0f0f0f33;
  --tiny: 100px;
  --titleFont: var(--font-text);
  --titlebar-background: #2F3437;
  --titlebar-background-focused: #3F4447;
  --titlebar-border-color: #4C5153;
  --titlebar-text-color: #EBEBEB;
  --titlebar-text-color-focused: #EBEBEB;
  --toggle-border-width: 1px;
  --toggle-radius: 0;
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: 0;
  --toggle-width: 20px;
  --tooltip-color: white;
  --vault-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --vault-name-color: #EBEBEB;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 900;
  --vault-profile-color: #EBEBEB;
  --vault-profile-color-hover: #EBEBEB;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(63, 68, 71);
  color: rgb(235, 235, 235);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(47, 52, 55);
  color: rgb(235, 235, 235);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(55, 60, 63);
  color: rgb(235, 235, 235);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(63, 68, 71);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(63, 68, 71);
  border-left-color: rgb(63, 68, 71);
  color: rgb(235, 235, 235);
}

body div#quartz-root {
  background-color: rgb(47, 52, 55);
  color: rgb(235, 235, 235);
}`,
    typography: `body .page article p > b, b {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(235, 235, 235) none 0px;
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

body .page article p > em, em {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(235, 235, 235) none 0px;
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

body .page article p > i, i {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(235, 235, 235) none 0px;
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

body .page article p > strong, strong {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(235, 235, 235) none 0px;
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

body .text-highlight {
  background-color: rgba(45, 170, 219, 0.3);
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(235, 235, 235) none 0px;
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

body del {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(235, 235, 235) none 0px;
  text-decoration: line-through 1px rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(168, 171, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(168, 171, 172) none 0px;
  text-decoration: rgb(168, 171, 172);
  text-decoration-color: rgb(168, 171, 172);
}`,
    links: `body a.external, footer a {
  color: rgb(46, 161, 207);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 161, 207) none 0px;
  text-decoration: rgb(46, 161, 207);
  text-decoration-color: rgb(46, 161, 207);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(46, 161, 207);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 161, 207) none 0px;
  text-decoration: rgb(46, 161, 207);
  text-decoration-color: rgb(46, 161, 207);
}

body a.internal.broken {
  color: rgb(93, 98, 101);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(93, 98, 101) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(235, 235, 235);
}

body dt {
  color: rgb(235, 235, 235);
}

body ol > li {
  color: rgb(235, 235, 235);
}

body ol.overflow {
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

body ul > li {
  color: rgb(235, 235, 235);
}

body ul.overflow {
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(63, 68, 71);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

body table {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(15, 15, 15, 0.2);
}

body td {
  border-bottom-color: rgb(47, 52, 55);
  border-left-color: rgb(47, 52, 55);
  border-right-color: rgb(47, 52, 55);
  border-top-color: rgb(47, 52, 55);
  color: rgb(235, 235, 235);
}

body th {
  border-bottom-color: rgb(47, 52, 55);
  border-left-color: rgb(47, 52, 55);
  border-right-color: rgb(47, 52, 55);
  border-top-color: rgb(47, 52, 55);
  color: rgb(255, 255, 255);
  font-weight: 700;
}

body tr {
  background-color: rgb(55, 60, 63);
}`,
    code: `body code {
  border-bottom-color: rgb(235, 235, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(235, 235, 235);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(60, 65, 68);
  border-bottom-color: rgb(76, 81, 83);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 81, 83);
  border-right-color: rgb(76, 81, 83);
  border-top-color: rgb(76, 81, 83);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(60, 65, 68);
  border-bottom-color: rgb(76, 81, 83);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 81, 83);
  border-right-color: rgb(76, 81, 83);
  border-top-color: rgb(76, 81, 83);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(235, 235, 235);
}

body pre > code, pre:has(> code) {
  background-color: rgb(60, 65, 68);
  border-bottom-color: rgb(76, 81, 83);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 81, 83);
  border-right-color: rgb(76, 81, 83);
  border-top-color: rgb(76, 81, 83);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(60, 65, 68);
  border-bottom-color: rgb(76, 81, 83);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 81, 83);
  border-right-color: rgb(76, 81, 83);
  border-top-color: rgb(76, 81, 83);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

body figcaption {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

body img {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

body video {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}`,
    embeds: `body .file-embed {
  background-color: rgb(63, 68, 71);
  border-bottom-color: rgb(168, 171, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 171, 172);
  border-right-color: rgb(168, 171, 172);
  border-top-color: rgb(168, 171, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(235, 235, 235);
  color: rgb(235, 235, 235);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(75, 80, 83);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(75, 80, 83);
  border-right-color: rgb(235, 235, 235);
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
  color: rgb(93, 98, 101);
  text-decoration: rgb(93, 98, 101);
  text-decoration-color: rgb(93, 98, 101);
}

body input[type=checkbox] {
  border-bottom-color: rgb(112, 141, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 141, 187);
  border-right-color: rgb(112, 141, 187);
  border-top-color: rgb(112, 141, 187);
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
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

body li.task-list-item[data-task='-'] {
  color: rgb(62, 69, 82);
  text-decoration: rgb(62, 69, 82);
  text-decoration-color: rgb(62, 69, 82);
}

body li.task-list-item[data-task='/'] {
  color: rgb(168, 171, 172);
  text-decoration: rgb(168, 171, 172);
  text-decoration-color: rgb(168, 171, 172);
}

body li.task-list-item[data-task='>'] {
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
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
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
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
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

body li.task-list-item[data-task='l'] {
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body li.task-list-item[data-task='u'] {
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

body li.task-list-item[data-task='w'] {
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
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
  border-bottom-color: rgb(235, 235, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 235, 235);
  border-left-width: 4px;
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
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
  background-color: rgba(15, 15, 15, 0.2);
  border-bottom-color: rgb(76, 81, 83);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 81, 83);
  border-right-color: rgb(76, 81, 83);
  border-top-color: rgb(76, 81, 83);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgba(15, 15, 15, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(15, 15, 15, 0.25);
  border-left-width: 3px;
  border-right-color: rgba(15, 15, 15, 0.25);
  border-right-width: 3px;
  border-top-color: rgba(15, 15, 15, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgba(15, 15, 15, 0.25) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(235, 235, 235) none 0px;
  text-decoration: rgb(235, 235, 235);
  text-decoration-color: rgb(235, 235, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 235, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 235, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(235, 235, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(45, 170, 219, 0.3);
  color: rgb(235, 235, 235);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(15, 15, 15, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(15, 15, 15, 0.25);
  border-left-width: 3px;
  border-right-color: rgba(15, 15, 15, 0.25);
  border-right-width: 3px;
  border-top-color: rgba(15, 15, 15, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(55, 60, 63);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(45, 170, 219, 0.3);
  border-bottom-color: rgb(235, 235, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(235, 235, 235);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(45, 170, 219, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(235, 235, 235);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(112, 141, 187);
  border-bottom-color: rgb(112, 141, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 141, 187);
  border-right-color: rgb(112, 141, 187);
  border-top-color: rgb(112, 141, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

body h1 {
  color: rgb(235, 235, 235);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h2 {
  color: rgb(235, 235, 235);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(235, 235, 235);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h3 {
  color: rgb(235, 235, 235);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h4 {
  color: rgb(235, 235, 235);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h5 {
  color: rgb(235, 235, 235);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h6 {
  color: rgb(235, 235, 235);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body hr {
  border-bottom-color: rgb(63, 68, 71);
  border-left-color: rgb(63, 68, 71);
  border-right-color: rgb(63, 68, 71);
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
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

body ::-webkit-scrollbar-corner {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}

body ::-webkit-scrollbar-track {
  background: rgb(47, 52, 55) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 52, 55);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(235, 235, 235);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(235, 235, 235);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(235, 235, 235);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(75, 80, 83);
  border-bottom-color: rgb(112, 141, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 141, 187);
  border-right-color: rgb(112, 141, 187);
  border-top-color: rgb(112, 141, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(112, 141, 187);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(168, 171, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 171, 172);
  border-right-color: rgb(168, 171, 172);
  border-top-color: rgb(168, 171, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(168, 171, 172);
}`,
    footer: `body footer {
  background-color: rgb(63, 68, 71);
  border-bottom-color: rgb(112, 141, 187);
  border-left-color: rgb(112, 141, 187);
  border-right-color: rgb(112, 141, 187);
  border-top-color: rgb(112, 141, 187);
  border-top-left-radius: 0px;
  color: rgb(168, 171, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(168, 171, 172);
  text-decoration: rgb(168, 171, 172);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
  color: rgb(235, 235, 235);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

body li.section-li > .section .meta {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(235, 235, 235);
  text-decoration: rgb(235, 235, 235);
}

body ul.section-ul {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(168, 171, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 171, 172);
  border-right-color: rgb(168, 171, 172);
  border-top-color: rgb(168, 171, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(168, 171, 172);
}

body .darkmode svg {
  color: rgb(168, 171, 172);
  stroke: rgb(168, 171, 172);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(93, 98, 101);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(93, 98, 101);
  border-right-color: rgb(93, 98, 101);
  border-top-color: rgb(93, 98, 101);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(93, 98, 101);
}

body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
  color: rgb(235, 235, 235);
}

body .metadata {
  border-bottom-color: rgb(76, 81, 83);
  border-left-color: rgb(76, 81, 83);
  border-right-color: rgb(76, 81, 83);
  border-top-color: rgb(76, 81, 83);
  color: rgb(168, 171, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(168, 171, 172);
  border-left-color: rgb(168, 171, 172);
  border-right-color: rgb(168, 171, 172);
  border-top-color: rgb(168, 171, 172);
  color: rgb(168, 171, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(63, 68, 71);
}

body .page-header h2.page-title {
  color: rgb(235, 235, 235);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(235, 235, 235);
  text-decoration: underline dotted rgb(235, 235, 235);
}

body details {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

body input[type=text] {
  border-bottom-color: rgb(168, 171, 172);
  border-left-color: rgb(168, 171, 172);
  border-right-color: rgb(168, 171, 172);
  border-top-color: rgb(168, 171, 172);
  color: rgb(168, 171, 172);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(60, 65, 68);
  border-bottom-color: rgb(235, 235, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgba(15, 15, 15, 0.25) 0px 2px 0px 0px;
  color: rgb(235, 235, 235);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(235, 235, 235);
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
}

body sub {
  color: rgb(235, 235, 235);
}

body summary {
  color: rgb(235, 235, 235);
}

body sup {
  color: rgb(235, 235, 235);
}`,
  },
  light: {
    base: `:root:root {
  --accent: #43B3E0;
  --accent-color: 67, 179, 224;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #82817C;
  --accent2-lite: #2EA1CF;
  --aside-bg: #FFFFFF;
  --background-modifier-active-hover: #43B3E0;
  --background-modifier-border: #e9e9e7;
  --background-modifier-border-focus: #43B3E0;
  --background-modifier-border-hover: #EDECE9;
  --background-modifier-cover: #37352F10;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #37352F10;
  --background-modifier-form-field-hover: #37352F10;
  --background-modifier-hover: rgba(45, 170, 219, 0.3);
  --background-modifier-message: #43B3E0;
  --background-modifier-success: #599049;
  --background-primary: #FFFFFF;
  --background-primary-alt: #F1F1EF;
  --background-secondary: #F7F6F3;
  --background-secondary-alt: #F1F1EF;
  --bases-cards-background: #FFFFFF;
  --bases-cards-cover-background: #F1F1EF;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #e9e9e7;
  --bases-cards-shadow-hover: 0 0 0 1px #EDECE9;
  --bases-embed-border-color: #e9e9e7;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #82817C;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #FFFFFF;
  --bases-table-cell-background-active: #FFFFFF;
  --bases-table-cell-background-disabled: #F1F1EF;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #43B3E0;
  --bases-table-cell-shadow-focus: 0 0 0 2px #43B3E0;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #F1F1EF;
  --bases-table-header-background: #FFFFFF;
  --bases-table-header-background-hover: rgba(45, 170, 219, 0.3);
  --bases-table-header-color: #82817C;
  --bases-table-row-background-hover: rgba(55, 53, 47, 0.078);
  --bases-table-summary-background: #FFFFFF;
  --bases-table-summary-background-hover: rgba(45, 170, 219, 0.3);
  --bg: #EDECE9;
  --blockquote-background-color: #F1F1EF;
  --blockquote-border-color: #EDECE9;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #37352f;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #0f0f0f15;
  --box-border-m: 3px solid #0f0f0f15;
  --box-border-s: 1px solid #0f0f0f15;
  --bttn: #43B3E0;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #43B3E0;
  --button-background-hover: #CFCECD;
  --button-border: #43B3E0;
  --button-border-radius: 0;
  --button-radius: 0;
  --button-text: white;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #FFFFFF;
  --canvas-card-label-color: #4e5b6f;
  --canvas-color: 166, 180, 204;
  --canvas-color-opacity: 0.07;
  --canvas-controls-radius: 0;
  --canvas-node-padding: 0 7px;
  --caret-color: #37352f;
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
  --checkbox-border-color: #43B3E0;
  --checkbox-border-color-hover: #43B3E0;
  --checkbox-color: #43B3E0;
  --checkbox-color-hover: #43B3E0;
  --checkbox-marker-color: #FFFFFF;
  --checkbox-radius: 0;
  --checklist-done-color: #CFCECD;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #f7f6f3;
  --code-bg: #f7f6f3;
  --code-border-color: #e9e9e7;
  --code-bracket-background: rgba(45, 170, 219, 0.3);
  --code-comment: #4e5b6f;
  --code-normal: #37352f;
  --code-punctuation: #82817C;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #0f0f0f15;
  --code-size: .90em;
  --code-text: #37352f;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #CFCECD;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(194, 76, 78);
  --color-accent-2: rgb(199, 87, 92);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark: var(--text-normal);
  --dark-accent: #43B3E0;
  --dark-sidebar: #F7F6F3;
  --darkgray: var(--text-normal);
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(67, 179, 224, 0.1);
  --dataview-th-background: #F1F1EF;
  --dataview-th-border-bottom: 2px solid #37352f;
  --dataview-th-color: #37352f;
  --dataview-th-count-color: #37352f;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #F1F1EF;
  --divider-color: #F1F1EF;
  --divider-color-hover: #43B3E0;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #43B3E0;
  --drag-ghost-text-color: white;
  --drop-shadow: #d0ddef62;
  --dropdown-background: #F1F1EF;
  --dropdown-background-hover: #CFCECD;
  --embed-bg: #F1F1EF;
  --embed-block-shadow-hover: 2px 2px 0 #0f0f0f15;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #0f0f0f15;
  --embed-border-color: transparent;
  --embed-border-color-hover: #0f0f0f15;
  --embed-border-left: 2px solid #37352f;
  --embed-border-left-color: #37352f;
  --embed-border-left-color-hover: #37352f;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #0f0f0f15;
  --embed-border-start: 2px solid #43B3E0;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #0f0f0f15;
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
  --fg: #43B3E0;
  --file-font: "its";
  --file-header-background: #FFFFFF;
  --file-header-background-focused: #FFFFFF;
  --file-header-breadcrumb-color: #CFCECD;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #CFCECD;
  --file-header-color-active: #37352f;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #43B3E0;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #F1F1EF;
  --file-icon: "";
  --file-icon-color: #69685f;
  --file-icon-margin: 6px;
  --file-text-color: #37352f;
  --flair-background: #F1F1EF;
  --flair-color: #37352f;
  --folder: #37352f;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #37352f;
  --folder-icon-open-color: #43B3E0;
  --folder-open: #43B3E0;
  --folder-open-text-color: #37352f;
  --folder-text-color: #37352f;
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
  --footnote: #A09E9A;
  --footnote-divider-color: #e9e9e7;
  --footnote-id-color: #82817C;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #37352F10;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #69685f;
  --graph-arrow: #82817C;
  --graph-background: #FFFFFF;
  --graph-bg: #FFFFFF;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #37352f;
  --graph-focused: #43B3E0;
  --graph-img: #000;
  --graph-line: #CFCECD55;
  --graph-line-hover: #43B3E0;
  --graph-lines: #CFCECD55;
  --graph-node: #82817C;
  --graph-node-attachment: #000;
  --graph-node-focused: #43B3E0;
  --graph-node-hover-fill: #37352f;
  --graph-node-hover-outline: white;
  --graph-node-tag: #43B3E0;
  --graph-node-unresolved: #69685f;
  --graph-tag: #43B3E0;
  --graph-text: #37352f;
  --gray: var(--text-muted);
  --h1-background: transparent;
  --h1-border-color: #43B3E0;
  --h1-border-left-color: #e9e9e7;
  --h1-border-line-color: #e9e9e7;
  --h1-border-line-height: 0;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #e9e9e7;
  --h1-border-width: 0;
  --h1-color: #37352f;
  --h1-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #4e5b6f;
  --h2-border-left-color: #e9e9e7;
  --h2-border-line-color: #e9e9e7;
  --h2-border-line-height: 0;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #e9e9e7;
  --h2-border-width: 0;
  --h2-color: #37352f;
  --h2-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #37352f;
  --h3-border-left-color: #e9e9e7;
  --h3-border-line-color: #e9e9e7;
  --h3-border-line-height: 0;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #e9e9e7;
  --h3-border-width: 0;
  --h3-color: #37352f;
  --h3-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #82817C;
  --h4-border-left-color: #e9e9e7;
  --h4-border-line-color: #e9e9e7;
  --h4-border-line-height: 0;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #e9e9e7;
  --h4-border-width: 0;
  --h4-color: #37352f;
  --h4-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #A09E9A;
  --h5-border-left-color: #e9e9e7;
  --h5-border-line-color: #e9e9e7;
  --h5-border-line-height: 0;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #e9e9e7;
  --h5-border-width: 0;
  --h5-color: #37352f;
  --h5-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #CFCECD;
  --h6-border-left-color: #e9e9e7;
  --h6-border-line-color: #e9e9e7;
  --h6-border-line-height: 0;
  --h6-border-line-width: 0;
  --h6-border-right-color: #e9e9e7;
  --h6-border-width: 0;
  --h6-color: #37352f;
  --h6-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #37352f;
  --he-text-on-accent-inactive: #37352f;
  --he-title-bar-active-action: #43B3E0;
  --he-title-bar-active-bg: #F1F1EF;
  --he-title-bar-active-fg: #37352f;
  --he-title-bar-active-pinned-bg: #FFFFFF;
  --he-title-bar-inactive-action: #82817C;
  --he-title-bar-inactive-bg: #FFFFFF;
  --he-title-bar-inactive-fg: #CFCECD;
  --he-title-bar-inactive-pinned-bg: #FFFFFF;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #e9e9e7;
  --header-border-line-height: 0;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-font-weight: 900;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 700;
  --headerFont: var(--font-text);
  --headers: #37352f;
  --heading-formatting: #CFCECD;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(55, 53, 47, 0.078);
  --hr: rgba(55, 53, 47, 0.1);
  --hr-alignment: -50%, -50%;
  --hr-color: rgba(55, 53, 47, 0.1);
  --hr-icon-background: #FFFFFF;
  --hr-icon-color: #37352f;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(45, 170, 219, 0.2);
  --hvr-active: rgba(45, 170, 219, 0.3);
  --hvr2: rgba(55, 53, 47, 0.078);
  --i-at: #43B3E0;
  --icon-btn-radius: 0;
  --icon-color: #82817C;
  --icon-color-active: white;
  --icon-color-focused: #37352f;
  --icon-color-hover: #37352f;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --icons: #d04e4e;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #0f0f0f15;
  --illusion-h1-background: #43B3E0;
  --illusion-h2-background: #4e5b6f;
  --illusion-h3-background: #37352f;
  --illusion-h4-background: #82817C;
  --illusion-h5-background: #A09E9A;
  --illusion-h6-background: #CFCECD;
  --illusion-header-arrow-color: white;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: white;
  --image-border-background: #37352F10;
  --image-border-color: #e9e9e7;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #CFCECD;
  --indentation-guide-color: rgba(55, 53, 47, 0.1);
  --indentation-guide-color-active: #43B3E0;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: rgba(55, 53, 47, 0.1);
  --initiative-xp: sandybrown;
  --inline-title-color: #37352f;
  --inline-title-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: #37352F10;
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #0f0f0f15;
  --input-shadow-hover: 3px 3px 0 #0f0f0f15;
  --interactive-accent: #43B3E0;
  --interactive-accent-hover: #CFCECD;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #CFCECD;
  --interactive-normal: #F1F1EF;
  --its: "its";
  --kanban-button-background: #f7f6f3;
  --kanban-button-shadow: 2px 2px 0 #0f0f0f15;
  --kanban-card-border: 2px solid #0f0f0f15;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #FFFFFF;
  --kanban-card-text-color: #37352f;
  --kanban-card-title-background: #FFFFFF;
  --kanban-card-title-border: 0 1px 0 #0f0f0f15;
  --kanban-lane-background: #f7f6f3;
  --kanban-lane-border: 3px solid #0f0f0f15;
  --kanban-lane-box-shadow: 2px 2px 0 #0f0f0f15;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #2EA1CF;
  --kanban-tag-background: #43B3E0;
  --latex-color: #43B3E0;
  --latex-format-color: #CFCECD;
  --latex-syntax-color: #82817C;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-tight: 1.3em;
  --lines: rgba(55, 53, 47, 0.1);
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #2EA1CF;
  --link-color-hover: #43B3E0;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #2EA1CF;
  --link-external-color-hover: #82817C;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #CFCECD;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #e9e9e7;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: rgba(55, 53, 47, 0.1);
  --list-color-2: rgba(55, 53, 47, 0.1);
  --list-color-3: rgba(55, 53, 47, 0.1);
  --list-color-4: rgba(55, 53, 47, 0.1);
  --list-color-5: rgba(55, 53, 47, 0.1);
  --list-color-6: rgba(55, 53, 47, 0.1);
  --list-indent: 25px;
  --list-marker-color: #43B3E0;
  --list-marker-color-collapsed: #CFCECD;
  --list-marker-color-hover: #82817C;
  --list-marker-color-other: #82817C;
  --list-marker-min-width: 0;
  --list-numbered-color: #43B3E0;
  --list-spacing: 1px;
  --lite-accent: #43B3E0;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #F7F6F3;
  --menu-border-color: #EDECE9;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #0f0f0f15;
  --message-border-color: #0f0f0f15;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #0f0f0f15;
  --message-color: white;
  --metadata-border-color: #e9e9e7;
  --metadata-button-text-color: #CFCECD;
  --metadata-divider-color: #e9e9e7;
  --metadata-icon-color: #82817C;
  --metadata-input-background-active: #37352F10;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #37352f;
  --metadata-label-background-active: #37352F10;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #82817C;
  --metadata-label-text-color-hover: #82817C;
  --metadata-property-background-active: rgba(45, 170, 219, 0.3);
  --metadata-property-box-shadow-focus: 0 0 0 2px #43B3E0;
  --metadata-property-box-shadow-hover: 0 0 0 1px #EDECE9;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: white;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #82817C;
  --metadata-title-icon: "";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #FFFFFF;
  --modal-border-color: #0f0f0f15;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: #37352F10;
  --modal-radius: 0;
  --modal-sidebar-background: #F7F6F3;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #37352f;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #82817C;
  --nav-heading-color-hover: #37352f;
  --nav-indentation-guide-color: rgba(55, 53, 47, 0.1);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #43B3E0;
  --nav-item-background-border-color-hover: #43B3E0;
  --nav-item-background-hover: #43B3E0;
  --nav-item-background-selected: rgba(45, 170, 219, 0.2);
  --nav-item-border-color: #43B3E0;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #37352f;
  --nav-item-color-active: white;
  --nav-item-color-highlighted: white;
  --nav-item-color-hover: white;
  --nav-item-color-selected: #37352f;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 0;
  --nav-item-size: 14px;
  --nav-item-weight: 500;
  --nav-item-weight-active: 700;
  --nav-item-weight-hover: 700;
  --nav-item-white-space: wrap;
  --nav-tag-color: #4e5b6f;
  --nav-tag-color-active: #82817C;
  --nav-tag-color-hover: #82817C;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #FFFFFF;
  --note-rgb: 247, 246, 243;
  --note-title-border-color: #37352f;
  --outer-bar: #F1F1EF;
  --outline: #0f0f0f15;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #FFFFFF;
  --pdf-background: #FFFFFF;
  --pdf-page-background: #FFFFFF;
  --pdf-sidebar-background: #FFFFFF;
  --pill-border-color: #e9e9e7;
  --pill-border-color-hover: #EDECE9;
  --pill-color: #82817C;
  --pill-color-hover: #37352f;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #2EA1CF;
  --pill-radius: 0;
  --popover-background: #FFFFFF;
  --popover-border: 3px solid #0f0f0f15;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #43B3E0;
  --progress-bg: #EDECE9;
  --prompt-background: #FFFFFF;
  --prompt-border-color: #0f0f0f15;
  --prompt-border-width: 3px;
  --r-heading-color: #37352f;
  --r-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #43B3E0;
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
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --ribbon-background: #F1F1EF;
  --ribbon-background-collapsed: #FFFFFF;
  --ribbon-border-color: #F1F1EF;
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
  --scrollbar-active-thumb-bg: #43B3E0;
  --scrollbar-bg: #EDECE9;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #D3D1CB;
  --scrollbar-track-bg: #FFFFFF;
  --search-border: 2px solid #0f0f0f15;
  --search-box-shadow: 2px 2px 0 #0f0f0f15;
  --search-clear-button-color: #82817C;
  --search-icon-color: #82817C;
  --search-result-background: #FFFFFF;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #37352f;
  --setting-item-alt-background-hover: #37352F10;
  --setting-item-background-hover: rgba(45, 170, 219, 0.2);
  --setting-item-border-color: #e9e9e7;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #37352f;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #37352F10;
  --setting-items-background: transparent;
  --setting-items-border-color: #e9e9e7;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #0f0f0f15;
  --shadow-m: 3px 3px 0 #0f0f0f15;
  --shadow-ml: 4px 4px 0 #0f0f0f15;
  --shadow-s: 2px 2px 0 #0f0f0f15;
  --side-bar: #F7F6F3;
  --side-bar-bg: #F1F1EF;
  --sidebar-icon-color: #37352f;
  --sidebar-icon-color-active: white;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #43B3E0;
  --sidebar-tab-background-color-hover: #43B3E0;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #43B3E0;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: white;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #FFFFFF;
  --slider-thumb-border-color: #EDECE9;
  --slider-thumb-radius: 0;
  --slider-track-background: #e9e9e7;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #82817C;
  --statblock-alt: #37352F10;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #FFFFFF;
  --statblock-bar-border-color: #43B3E0;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #43B3E0;
  --statblock-border-color: rgba(55, 53, 47, 0.1);
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #0f0f0f15;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #37352f;
  --statblock-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-heading-font-color: #37352f;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: rgba(55, 53, 47, 0.1);
  --statblock-primary-color: #37352f;
  --statblock-property-font-color: #37352f;
  --statblock-property-name-font-color: #37352f;
  --statblock-rule-color: #43B3E0;
  --statblock-section-heading-border-color: #e9e9e7;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-section-heading-font-color: #A09E9A;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #F1F1EF;
  --status-bar-border-color: #43B3E0;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #82817C;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #43B3E0;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: white;
  --style-settings-heading-color-hover: white;
  --success-bg: #599049;
  --suggestion-background: #FFFFFF;
  --tab-background: #F1F1EF;
  --tab-background-active: #FFFFFF;
  --tab-container-background: #F1F1EF;
  --tab-curve: 0;
  --tab-divider-color: rgba(55, 53, 47, 0.1);
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #43B3E0;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #d0ddef62;
  --tab-stacked-shadow-color: #d0ddef62;
  --tab-switcher-background: #F7F6F3;
  --tab-switcher-menubar-background: linear-gradient(to top, #F7F6F3, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #0f0f0f15;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #0f0f0f15;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #43B3E0, 5px 5px 0 #0f0f0f15;
  --tab-text-color: #CFCECD;
  --tab-text-color-active: #37352f;
  --tab-text-color-focused: #CFCECD;
  --tab-text-color-focused-active: #37352f;
  --tab-text-color-focused-active-current: #37352f;
  --tab-text-color-focused-highlighted: #2EA1CF;
  --tab-text-color-hover: #37352f;
  --tab-top-outline-width: 0;
  --table: #e9e9e7;
  --table-add-button-background: #43B3E0;
  --table-add-button-border-color: #FFFFFF;
  --table-add-button-col-width: 24px;
  --table-add-button-color: white;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #FFFFFF;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #37352F10;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #43B3E0;
  --table-drag-handle-color: #4e5b6f;
  --table-header-background: #F7F6F3;
  --table-header-background-hover: #43B3E0;
  --table-header-border-color: #FFFFFF;
  --table-header-color: #37352f;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #43B3E0;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #37352F10;
  --table-row-alt-background-hover: rgba(55, 53, 47, 0.078);
  --table-row-background-hover: rgba(55, 53, 47, 0.078);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #43B3E0;
  --table-selection-border-radius: 0;
  --tag: #43B3E0;
  --tag-background: #43B3E0;
  --tag-background-color: #43B3E0;
  --tag-background-hover: #43B3E0;
  --tag-border-color: #43B3E0;
  --tag-border-color-hover: #43B3E0;
  --tag-color: white;
  --tag-color-hover: white;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #43B3E0;
  --tall: 700px;
  --td: #37352F10;
  --tertiary: var(--text-accent-hover);
  --text: #37352f;
  --text-accent: #2EA1CF;
  --text-accent-hover: #82817C;
  --text-dl: white;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(45, 170, 219, 0.2);
  --text-highlight-bg-active: rgba(45, 170, 219, 0.3);
  --text-muted: #82817C;
  --text-normal: #37352f;
  --text-selection: rgba(55, 53, 47, 0.078);
  --textHighlight: var(--text-highlight-bg);
  --th: #F7F6F3;
  --th-text: white;
  --theme-rainbow-1: #43B3E0;
  --theme-rainbow-2: #4e5b6f;
  --theme-rainbow-3: #37352f;
  --theme-rainbow-4: #82817C;
  --theme-rainbow-5: #A09E9A;
  --theme-rainbow-6: #CFCECD;
  --tiny: 100px;
  --titleFont: var(--font-text);
  --titlebar-background: #FFFFFF;
  --titlebar-background-focused: #F1F1EF;
  --titlebar-border-color: #e9e9e7;
  --titlebar-text-color: #37352f;
  --titlebar-text-color-focused: #37352f;
  --toggle-border-width: 1px;
  --toggle-radius: 0;
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: 0;
  --toggle-width: 20px;
  --tooltip-color: white;
  --vault-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --vault-name-color: #37352f;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 900;
  --vault-profile-color: #37352f;
  --vault-profile-color-hover: #37352f;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(241, 241, 239);
  color: rgb(55, 53, 47);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(55, 53, 47);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(247, 246, 243);
  color: rgb(55, 53, 47);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(241, 241, 239);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(241, 241, 239);
  border-left-color: rgb(241, 241, 239);
  color: rgb(55, 53, 47);
}

body div#quartz-root {
  color: rgb(55, 53, 47);
}`,
    typography: `body .page article p > b, b {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(55, 53, 47) none 0px;
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

body .page article p > em, em {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(55, 53, 47) none 0px;
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

body .page article p > i, i {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(55, 53, 47) none 0px;
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

body .page article p > strong, strong {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(55, 53, 47) none 0px;
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

body .text-highlight {
  background-color: rgba(45, 170, 219, 0.2);
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(55, 53, 47) none 0px;
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

body del {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(55, 53, 47) none 0px;
  text-decoration: line-through 1px rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(130, 129, 124);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(130, 129, 124) none 0px;
  text-decoration: rgb(130, 129, 124);
  text-decoration-color: rgb(130, 129, 124);
}`,
    links: `body a.external, footer a {
  color: rgb(46, 161, 207);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 161, 207) none 0px;
  text-decoration: rgb(46, 161, 207);
  text-decoration-color: rgb(46, 161, 207);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(46, 161, 207);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(46, 161, 207) none 0px;
  text-decoration: rgb(46, 161, 207);
  text-decoration-color: rgb(46, 161, 207);
}

body a.internal.broken {
  color: rgb(207, 206, 205);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(207, 206, 205) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(55, 53, 47);
}

body dt {
  color: rgb(55, 53, 47);
}

body ol > li {
  color: rgb(55, 53, 47);
}

body ol.overflow {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

body ul > li {
  color: rgb(55, 53, 47);
}

body ul.overflow {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(241, 241, 239);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

body table {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(55, 53, 47, 0.063);
}

body td {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(55, 53, 47);
}

body th {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(55, 53, 47);
  font-weight: 700;
}

body tr {
  background-color: rgb(247, 246, 243);
}`,
    code: `body code {
  border-bottom-color: rgb(55, 53, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 53, 47);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(247, 246, 243);
  border-bottom-color: rgb(233, 233, 231);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 233, 231);
  border-right-color: rgb(233, 233, 231);
  border-top-color: rgb(233, 233, 231);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(247, 246, 243);
  border-bottom-color: rgb(233, 233, 231);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 233, 231);
  border-right-color: rgb(233, 233, 231);
  border-top-color: rgb(233, 233, 231);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 53, 47);
}

body pre > code, pre:has(> code) {
  background-color: rgb(247, 246, 243);
  border-bottom-color: rgb(233, 233, 231);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 233, 231);
  border-right-color: rgb(233, 233, 231);
  border-top-color: rgb(233, 233, 231);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(247, 246, 243);
  border-bottom-color: rgb(233, 233, 231);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 233, 231);
  border-right-color: rgb(233, 233, 231);
  border-top-color: rgb(233, 233, 231);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

body figcaption {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

body img {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

body video {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}`,
    embeds: `body .file-embed {
  background-color: rgb(241, 241, 239);
  border-bottom-color: rgb(130, 129, 124);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(130, 129, 124);
  border-right-color: rgb(130, 129, 124);
  border-top-color: rgb(130, 129, 124);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(55, 53, 47);
  color: rgb(55, 53, 47);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(67, 179, 224);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(67, 179, 224);
  border-right-color: rgb(55, 53, 47);
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
  color: rgb(207, 206, 205);
  text-decoration: rgb(207, 206, 205);
  text-decoration-color: rgb(207, 206, 205);
}

body input[type=checkbox] {
  border-bottom-color: rgb(67, 179, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 179, 224);
  border-right-color: rgb(67, 179, 224);
  border-top-color: rgb(67, 179, 224);
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
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

body li.task-list-item[data-task='/'] {
  color: rgb(130, 129, 124);
  text-decoration: rgb(130, 129, 124);
  text-decoration-color: rgb(130, 129, 124);
}

body li.task-list-item[data-task='>'] {
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
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
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
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
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

body li.task-list-item[data-task='l'] {
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

body li.task-list-item[data-task='u'] {
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

body li.task-list-item[data-task='w'] {
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
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
  border-bottom-color: rgb(55, 53, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 53, 47);
  border-left-width: 4px;
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
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
  background-color: rgba(55, 53, 47, 0.063);
  border-bottom-color: rgb(233, 233, 231);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 233, 231);
  border-right-color: rgb(233, 233, 231);
  border-top-color: rgb(233, 233, 231);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  border-bottom-color: rgba(15, 15, 15, 0.082);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(15, 15, 15, 0.082);
  border-left-width: 3px;
  border-right-color: rgba(15, 15, 15, 0.082);
  border-right-width: 3px;
  border-top-color: rgba(15, 15, 15, 0.082);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgba(15, 15, 15, 0.082) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(55, 53, 47) none 0px;
  text-decoration: rgb(55, 53, 47);
  text-decoration-color: rgb(55, 53, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(55, 53, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(55, 53, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(55, 53, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(45, 170, 219, 0.3);
  color: rgb(55, 53, 47);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(15, 15, 15, 0.082);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(15, 15, 15, 0.082);
  border-left-width: 3px;
  border-right-color: rgba(15, 15, 15, 0.082);
  border-right-width: 3px;
  border-top-color: rgba(15, 15, 15, 0.082);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(247, 246, 243);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(45, 170, 219, 0.3);
  border-bottom-color: rgb(55, 53, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 53, 47);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(45, 170, 219, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 53, 47);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(67, 179, 224);
  border-bottom-color: rgb(67, 179, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(67, 179, 224);
  border-right-color: rgb(67, 179, 224);
  border-top-color: rgb(67, 179, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

body h1 {
  color: rgb(55, 53, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h2 {
  color: rgb(55, 53, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(55, 53, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h3 {
  color: rgb(55, 53, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h4 {
  color: rgb(55, 53, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h5 {
  color: rgb(55, 53, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h6 {
  color: rgb(55, 53, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body hr {
  border-bottom-color: rgb(241, 241, 239);
  border-left-color: rgb(241, 241, 239);
  border-right-color: rgb(241, 241, 239);
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

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(55, 53, 47);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(55, 53, 47);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(55, 53, 47);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(67, 179, 224);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(130, 129, 124);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(130, 129, 124);
  border-right-color: rgb(130, 129, 124);
  border-top-color: rgb(130, 129, 124);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(130, 129, 124);
}`,
    footer: `body footer {
  background-color: rgb(241, 241, 239);
  border-bottom-color: rgb(67, 179, 224);
  border-left-color: rgb(67, 179, 224);
  border-right-color: rgb(67, 179, 224);
  border-top-color: rgb(67, 179, 224);
  border-top-left-radius: 0px;
  color: rgb(130, 129, 124);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(130, 129, 124);
  text-decoration: rgb(130, 129, 124);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
  color: rgb(55, 53, 47);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

body li.section-li > .section .meta {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(55, 53, 47);
  text-decoration: rgb(55, 53, 47);
}

body ul.section-ul {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(130, 129, 124);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(130, 129, 124);
  border-right-color: rgb(130, 129, 124);
  border-top-color: rgb(130, 129, 124);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(130, 129, 124);
}

body .darkmode svg {
  color: rgb(130, 129, 124);
  stroke: rgb(130, 129, 124);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(207, 206, 205);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(207, 206, 205);
  border-right-color: rgb(207, 206, 205);
  border-top-color: rgb(207, 206, 205);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(207, 206, 205);
}

body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
  color: rgb(55, 53, 47);
}

body .metadata {
  border-bottom-color: rgb(233, 233, 231);
  border-left-color: rgb(233, 233, 231);
  border-right-color: rgb(233, 233, 231);
  border-top-color: rgb(233, 233, 231);
  color: rgb(130, 129, 124);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(130, 129, 124);
  border-left-color: rgb(130, 129, 124);
  border-right-color: rgb(130, 129, 124);
  border-top-color: rgb(130, 129, 124);
  color: rgb(130, 129, 124);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(241, 241, 239);
}

body .page-header h2.page-title {
  color: rgb(55, 53, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(55, 53, 47);
  text-decoration: underline dotted rgb(55, 53, 47);
}

body details {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

body input[type=text] {
  border-bottom-color: rgb(130, 129, 124);
  border-left-color: rgb(130, 129, 124);
  border-right-color: rgb(130, 129, 124);
  border-top-color: rgb(130, 129, 124);
  color: rgb(130, 129, 124);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(247, 246, 243);
  border-bottom-color: rgb(55, 53, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgba(15, 15, 15, 0.082) 0px 2px 0px 0px;
  color: rgb(55, 53, 47);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(55, 53, 47);
  border-left-color: rgb(55, 53, 47);
  border-right-color: rgb(55, 53, 47);
  border-top-color: rgb(55, 53, 47);
}

body sub {
  color: rgb(55, 53, 47);
}

body summary {
  color: rgb(55, 53, 47);
}

body sup {
  color: rgb(55, 53, 47);
}`,
  },
};
