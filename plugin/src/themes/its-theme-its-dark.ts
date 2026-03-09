import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.its-dark",
    modes: ["dark"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #803232;
  --accent-color: 134, 55, 55;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #475569;
  --accent2-lite: #c5575b;
  --aside-bg: #04070c;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-cards-background: #070b11;
  --bases-cards-cover-background: #270f0f;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #380b13;
  --bases-cards-shadow-hover: 0 0 0 1px #1b262f;
  --bases-embed-border-color: #380b13;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #803232;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #070b11;
  --bases-table-cell-background-active: #070b11;
  --bases-table-cell-background-disabled: #270f0f;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #803232;
  --bases-table-cell-shadow-focus: 0 0 0 2px #04070c;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #270f0f;
  --bases-table-header-background: #070b11;
  --bases-table-header-background-hover: rgba(212, 47, 47, 0.4);
  --bases-table-header-color: #803232;
  --bases-table-row-background-hover: rgba(139, 6, 6, 0.4);
  --bases-table-summary-background: #070b11;
  --bases-table-summary-background-hover: rgba(212, 47, 47, 0.4);
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #070b11;
  --canvas-card-label-color: #4e5b6f;
  --canvas-color: 88, 100, 159;
  --canvas-color-opacity: 0.07;
  --canvas-controls-radius: 0;
  --canvas-node-padding: 0 7px;
  --caret-color: #475569;
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
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checklist-done-color: #1b262f;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-normal: #803232;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-text: #803232;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(199, 87, 92);
  --color-accent-2: rgb(209, 113, 121);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dark-sidebar: #000000;
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #270f0f;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #04070c;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #06080c60;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --embed-bg: black;
  --embed-block-shadow-hover: 2px 2px 0 black;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: black;
  --embed-border-color: transparent;
  --embed-border-color-hover: black;
  --embed-border-left: 2px solid #aa3333;
  --embed-border-left-color: #aa3333;
  --embed-border-left-color-hover: #aa3333;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: black;
  --embed-border-start: 2px solid #04070c;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: black;
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
  --fg: #aa3333;
  --file-font: "its";
  --file-header-background: #070b11;
  --file-header-background-focused: #070b11;
  --file-header-breadcrumb-color: #1b262f;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #1b262f;
  --file-header-color-active: #475569;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #04070c;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: black;
  --file-icon: "";
  --file-icon-color: #475569;
  --file-icon-margin: 6px;
  --file-text-color: #475569;
  --flair-background: black;
  --flair-color: #475569;
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
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
  --footnote: #577093;
  --footnote-divider-color: #380b13;
  --footnote-id-color: #803232;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #03000054;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #1b262f;
  --graph-arrow: #803232;
  --graph-background: rgba(13, 20, 29, 0.51);
  --graph-bg: rgba(13, 20, 29, 0.51);
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #c94d4d;
  --graph-focused: #c5575b;
  --graph-img: #475569;
  --graph-line: #571a1a;
  --graph-line-hover: #803232;
  --graph-lines: #571a1a;
  --graph-node: #475569;
  --graph-node-attachment: #475569;
  --graph-node-focused: #c5575b;
  --graph-node-hover-fill: #c94d4d;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #04070c;
  --graph-node-unresolved: #1b262f;
  --graph-tag: #04070c;
  --graph-text: #475569;
  --h1-background: transparent;
  --h1-border-color: #aa3333;
  --h1-border-left-color: #380b13;
  --h1-border-line-color: #380b13;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #380b13;
  --h1-border-width: 0;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #380b13;
  --h2-border-width: 0;
  --h2-color: #aa3333;
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #571a1a;
  --h3-border-left-color: #380b13;
  --h3-border-line-color: #380b13;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #380b13;
  --h3-border-width: 0;
  --h3-color: #aa3333;
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #380b13;
  --h4-border-left-color: #380b13;
  --h4-border-line-color: #380b13;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #380b13;
  --h4-border-width: 0;
  --h4-color: #aa3333;
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #475569;
  --h5-border-left-color: #380b13;
  --h5-border-line-color: #380b13;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #380b13;
  --h5-border-width: 0;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #04070c;
  --h6-border-left-color: #380b13;
  --h6-border-line-color: #380b13;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: #380b13;
  --h6-border-width: 0;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #aa3333;
  --he-text-on-accent-inactive: #475569;
  --he-title-bar-active-action: #c94d4d;
  --he-title-bar-active-bg: black;
  --he-title-bar-active-fg: #475569;
  --he-title-bar-active-pinned-bg: #070b11;
  --he-title-bar-inactive-action: #803232;
  --he-title-bar-inactive-bg: #070b11;
  --he-title-bar-inactive-fg: #1b262f;
  --he-title-bar-inactive-pinned-bg: #070b11;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #380b13;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 700;
  --headers: #aa3333;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(139, 6, 6, 0.4);
  --hr: #571a1a;
  --hr-alignment: -50%, -50%;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(60, 8, 8, 0.46);
  --hvr-active: rgba(212, 47, 47, 0.4);
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --icon-btn-radius: 0;
  --icon-color: #803232;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #475569;
  --icon-color-hover: #475569;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #1b262f;
  --indentation-guide-color: #571a1a;
  --indentation-guide-color-active: #803232;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #571a1a;
  --initiative-xp: sandybrown;
  --inline-title-color: #aa3333;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: rgba(0, 0, 0, 0.3);
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 black;
  --input-shadow-hover: 3px 3px 0 black;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --its: "its";
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --line-height-tight: 1.3em;
  --lines: #571a1a;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-marker-color: #803232;
  --list-marker-color-collapsed: #1b262f;
  --list-marker-color-hover: #803232;
  --list-marker-color-other: #475569;
  --list-marker-min-width: 0;
  --list-numbered-color: #c94d4d;
  --list-spacing: 1px;
  --lite-accent: #c94d4d;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --metadata-border-color: #380b13;
  --metadata-button-text-color: #1b262f;
  --metadata-divider-color: #380b13;
  --metadata-icon-color: #803232;
  --metadata-input-background-active: #03000054;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #475569;
  --metadata-label-background-active: #03000054;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #803232;
  --metadata-label-text-color-hover: #803232;
  --metadata-property-background-active: rgba(212, 47, 47, 0.4);
  --metadata-property-box-shadow-focus: 0 0 0 2px #803232;
  --metadata-property-box-shadow-hover: 0 0 0 1px #1b262f;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #e5ebee;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #803232;
  --metadata-title-icon: "";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #070b11;
  --modal-border-color: black;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: #03000054;
  --modal-radius: 0;
  --modal-sidebar-background: #000000;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #475569;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #803232;
  --nav-heading-color-hover: #475569;
  --nav-indentation-guide-color: #571a1a;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #04070c;
  --nav-item-background-border-color-hover: #04070c;
  --nav-item-background-hover: #04070c;
  --nav-item-background-selected: rgba(60, 8, 8, 0.46);
  --nav-item-border-color: #c94d4d;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #475569;
  --nav-item-color-active: #e5ebee;
  --nav-item-color-highlighted: #e5ebee;
  --nav-item-color-hover: #e5ebee;
  --nav-item-color-selected: #475569;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 0;
  --nav-item-size: 14px;
  --nav-item-weight: 500;
  --nav-item-weight-active: 700;
  --nav-item-weight-hover: 700;
  --nav-item-white-space: wrap;
  --nav-tag-color: #4e5b6f;
  --nav-tag-color-active: #803232;
  --nav-tag-color-hover: #803232;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #070b11;
  --note-rgb: 26, 30, 36;
  --note-title-border-color: #aa3333;
  --outer-bar: black;
  --outline: black;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --pill-border-color: #380b13;
  --pill-border-color-hover: #1b262f;
  --pill-color: #803232;
  --pill-color-hover: #475569;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #c5575b;
  --pill-radius: 0;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #803232;
  --progress-bg: #1b262f;
  --prompt-background: #070b11;
  --prompt-border-color: black;
  --prompt-border-width: 3px;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
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
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --ribbon-background: black;
  --ribbon-background-collapsed: #070b11;
  --ribbon-border-color: black;
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
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --side-bar: black;
  --side-bar-bg: black;
  --sidebar-icon-color: #475569;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #04070c;
  --sidebar-tab-background-color-hover: #803232;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #04070c;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #070b11;
  --slider-thumb-border-color: #1b262f;
  --slider-thumb-radius: 0;
  --slider-track-background: #380b13;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: black;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: black;
  --status-bar-border-color: #803232;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #803232;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --success-bg: #32603e;
  --suggestion-background: #070b11;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-container-background: black;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #803232;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #06080c60;
  --tab-stacked-shadow-color: #06080c60;
  --tab-switcher-background: black;
  --tab-switcher-menubar-background: linear-gradient(to top, black, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 black;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 black;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #c94d4d, 5px 5px 0 black;
  --tab-text-color: #1b262f;
  --tab-text-color-active: #475569;
  --tab-text-color-focused: #1b262f;
  --tab-text-color-focused-active: #475569;
  --tab-text-color-focused-active-current: #475569;
  --tab-text-color-focused-highlighted: #c5575b;
  --tab-text-color-hover: #475569;
  --tab-top-outline-width: 0;
  --table: #380b13;
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #070b11;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #c94d4d;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #03000054;
  --table-row-alt-background-hover: rgba(139, 6, 6, 0.4);
  --table-row-background-hover: rgba(139, 6, 6, 0.4);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
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
  --td: #03000054;
  --text: #475569;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --tiny: 100px;
  --titlebar-background: #070b11;
  --titlebar-background-focused: black;
  --titlebar-border-color: #380b13;
  --titlebar-text-color: #475569;
  --titlebar-text-color-focused: #475569;
  --toggle-border-width: 1px;
  --toggle-radius: 0;
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: 0;
  --toggle-width: 20px;
  --tooltip-color: #e5ebee;
  --vault-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --vault-name-color: #aa3333;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #475569;
  --vault-profile-color-hover: #475569;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(71, 85, 105);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(7, 11, 17);
  color: rgb(71, 85, 105);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(71, 85, 105);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 0, 0);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  color: rgb(71, 85, 105);
}

body div#quartz-root {
  background-color: rgb(7, 11, 17);
  color: rgb(71, 85, 105);
}`,
    typography: `body .page article p > b, b {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body .page article p > em, em {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body .page article p > i, i {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body .page article p > strong, strong {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body .text-highlight {
  background-color: rgba(60, 8, 8, 0.46);
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body del {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: line-through 1px rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(128, 50, 50) none 0px;
  text-decoration: rgb(128, 50, 50);
  text-decoration-color: rgb(128, 50, 50);
}`,
    links: `body a.external, footer a {
  color: rgb(197, 87, 91);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(197, 87, 91) none 0px;
  text-decoration: rgb(197, 87, 91);
  text-decoration-color: rgb(197, 87, 91);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(197, 87, 91);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(197, 87, 91) none 0px;
  text-decoration: rgb(197, 87, 91);
  text-decoration-color: rgb(197, 87, 91);
}

body a.internal.broken {
  color: rgb(27, 38, 47);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(27, 38, 47) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(71, 85, 105);
}

body dt {
  color: rgb(71, 85, 105);
}

body ol > li {
  color: rgb(71, 85, 105);
}

body ol.overflow {
  background-color: rgb(7, 11, 17);
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body ul > li {
  color: rgb(71, 85, 105);
}

body ul.overflow {
  background-color: rgb(7, 11, 17);
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(0, 0, 0);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body table {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(3, 0, 0, 0.33);
}

body td {
  border-bottom-color: rgb(7, 11, 17);
  border-left-color: rgb(7, 11, 17);
  border-right-color: rgb(7, 11, 17);
  border-top-color: rgb(7, 11, 17);
  color: rgb(71, 85, 105);
}

body th {
  border-bottom-color: rgb(7, 11, 17);
  border-left-color: rgb(7, 11, 17);
  border-right-color: rgb(7, 11, 17);
  border-top-color: rgb(7, 11, 17);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

body tr {
  background-color: rgb(87, 26, 26);
}`,
    code: `body code {
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(128, 50, 50);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(4, 7, 12);
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(4, 7, 12);
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

body pre > code, pre:has(> code) {
  background-color: rgb(4, 7, 12);
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(4, 7, 12);
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body figcaption {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body img {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body video {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}`,
    embeds: `body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(71, 85, 105);
  color: rgb(71, 85, 105);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(4, 7, 12);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(4, 7, 12);
  border-right-color: rgb(71, 85, 105);
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
  color: rgb(27, 38, 47);
  text-decoration: rgb(27, 38, 47);
  text-decoration-color: rgb(27, 38, 47);
}

body input[type=checkbox] {
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
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
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body li.task-list-item[data-task='-'] {
  color: rgb(62, 69, 82);
  text-decoration: rgb(62, 69, 82);
  text-decoration-color: rgb(62, 69, 82);
}

body li.task-list-item[data-task='/'] {
  color: rgb(128, 50, 50);
  text-decoration: rgb(128, 50, 50);
  text-decoration-color: rgb(128, 50, 50);
}

body li.task-list-item[data-task='>'] {
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
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
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
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
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body li.task-list-item[data-task='l'] {
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

body li.task-list-item[data-task='u'] {
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body li.task-list-item[data-task='w'] {
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
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
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(71, 85, 105);
  border-left-width: 4px;
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
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
  background-color: rgba(3, 0, 0, 0.33);
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(7, 11, 17);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 3px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(0, 0, 0) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(71, 85, 105);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(71, 85, 105);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(212, 47, 47, 0.4);
  color: rgb(71, 85, 105);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 3px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(212, 47, 47, 0.4);
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(212, 47, 47, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(56, 11, 19);
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h3 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h4 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h5 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h6 {
  color: rgb(170, 51, 51);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body hr {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
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
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
}

body ::-webkit-scrollbar-corner {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
}

body ::-webkit-scrollbar-track {
  background: rgb(7, 11, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(7, 11, 17);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(71, 85, 105);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(71, 85, 105);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(71, 85, 105);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(4, 7, 12);
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
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(128, 50, 50);
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(128, 50, 50);
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(128, 50, 50);
  text-decoration: rgb(128, 50, 50);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  color: rgb(71, 85, 105);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body li.section-li > .section .meta {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(71, 85, 105);
  text-decoration: rgb(71, 85, 105);
}

body ul.section-ul {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(128, 50, 50);
}

body .darkmode svg {
  color: rgb(128, 50, 50);
  stroke: rgb(128, 50, 50);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(27, 38, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(27, 38, 47);
  border-right-color: rgb(27, 38, 47);
  border-top-color: rgb(27, 38, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(27, 38, 47);
}

body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  color: rgb(71, 85, 105);
}

body .metadata {
  border-bottom-color: rgb(56, 11, 19);
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(128, 50, 50);
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(71, 85, 105);
  text-decoration: underline dotted rgb(71, 85, 105);
}

body details {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body input[type=text] {
  border-bottom-color: rgb(128, 50, 50);
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(4, 7, 12);
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(0, 0, 0) 0px 2px 0px 0px;
  color: rgb(128, 50, 50);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

body sub {
  color: rgb(71, 85, 105);
}

body summary {
  color: rgb(71, 85, 105);
}

body sup {
  color: rgb(71, 85, 105);
}`,
  },
  light: {
    base: `:root:root {
  --accent: #912e2e;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #aac1d3;
  --accent2-lite: #5599d0;
  --aside-bg: #dce4f6;
  --background-modifier-active-hover: #c35c5c;
  --background-modifier-border: #ccd6eb;
  --background-modifier-border-focus: #912e2e;
  --background-modifier-border-hover: #d9e4f0;
  --background-modifier-cover: #d0ddef62;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #d0ddef62;
  --background-modifier-form-field-hover: #d0ddef62;
  --background-modifier-hover: rgba(253, 115, 115, 0.4);
  --background-modifier-message: #c35c5c;
  --background-modifier-success: #599049;
  --background-primary: #e6edf8;
  --background-primary-alt: #2f1010;
  --background-secondary: #e6edf8;
  --background-secondary-alt: #d5e1f3;
  --bases-cards-background: #e6edf8;
  --bases-cards-cover-background: #2f1010;
  --bases-cards-font-size: 0.9em;
  --bases-cards-shadow: 0 0 0 1px #ccd6eb;
  --bases-cards-shadow-hover: 0 0 0 1px #d9e4f0;
  --bases-embed-border-color: #ccd6eb;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #697580;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: 0.9em;
  --bases-table-border-color: #e6edf8;
  --bases-table-cell-background-active: #e6edf8;
  --bases-table-cell-background-disabled: #2f1010;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #912e2e;
  --bases-table-cell-shadow-focus: 0 0 0 2px #c35c5c;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: 0.9em;
  --bases-table-group-background: #2f1010;
  --bases-table-header-background: #e6edf8;
  --bases-table-header-background-hover: rgba(253, 115, 115, 0.4);
  --bases-table-header-color: #697580;
  --bases-table-row-background-hover: rgba(229, 149, 149, 0.37);
  --bases-table-summary-background: #e6edf8;
  --bases-table-summary-background-hover: rgba(253, 115, 115, 0.4);
  --bg: #d9e4f0;
  --blockquote-background-color: #dce4f6;
  --blockquote-border-color: #d9e4f0;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #30353a;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #d9e4f0;
  --box-border-m: 3px solid #d9e4f0;
  --box-border-s: 1px solid #d9e4f0;
  --bttn: #c14343;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #c14343;
  --button-background-hover: #a6bbde;
  --button-border: #c14343;
  --button-border-radius: 0;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #e6edf8;
  --canvas-card-label-color: #4e5b6f;
  --canvas-color: 166, 180, 204;
  --canvas-color-opacity: 0.07;
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
  --checkbox-border-color: #912e2e;
  --checkbox-border-color-hover: #c35c5c;
  --checkbox-color: #912e2e;
  --checkbox-color-hover: #c35c5c;
  --checkbox-marker-color: #e6edf8;
  --checkbox-radius: 0;
  --checklist-done-color: #a6bbde;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #e6ebf8;
  --code-bg: #e6ebf8;
  --code-border-color: #ccd6eb;
  --code-bracket-background: rgba(253, 115, 115, 0.4);
  --code-comment: #4e5b6f;
  --code-normal: #ea4262;
  --code-punctuation: #697580;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #d9e4f0;
  --code-size: 0.9em;
  --code-text: #ea4262;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #a6bbde;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(194, 76, 78);
  --color-accent-2: rgb(199, 87, 92);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #c35c5c;
  --dark-sidebar: #dce4f6;
  --dataview-table-width: 100%;
  --dataview-th-background: #d5e1f3;
  --dataview-th-border-bottom: 2px solid #c14343;
  --dataview-th-color: #c14343;
  --dataview-th-count-color: #c14343;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #2f1010;
  --divider-color: #d5e1f3;
  --divider-color-hover: #912e2e;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #c35c5c;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #d0ddef62;
  --dropdown-background: #d5e1f3;
  --dropdown-background-hover: #a6bbde;
  --embed-bg: #dce4f6;
  --embed-block-shadow-hover: 2px 2px 0 #d9e4f0;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #d9e4f0;
  --embed-border-color: transparent;
  --embed-border-color-hover: #d9e4f0;
  --embed-border-left: 2px solid #c14343;
  --embed-border-left-color: #c14343;
  --embed-border-left-color-hover: #c14343;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #d9e4f0;
  --embed-border-start: 2px solid #c35c5c;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #d9e4f0;
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
  --fg: #912e2e;
  --file-font: "its";
  --file-header-background: #e6edf8;
  --file-header-breadcrumb-color: #a6bbde;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #a6bbde;
  --file-header-color-active: #30353a;
  --file-header-font: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #c35c5c;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #d5e1f3;
  --file-icon: "";
  --file-icon-color: #a6bbde;
  --file-icon-margin: 6px;
  --file-text-color: #30353a;
  --flair-background: #d5e1f3;
  --flair-color: #30353a;
  --folder: #c14343;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #c14343;
  --folder-icon-open-color: #ce6d6d;
  --folder-open: #ce6d6d;
  --folder-open-text-color: #30353a;
  --folder-text-color: #30353a;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-frontmatter: 0.95em;
  --font-interface: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ligatures: none;
  --font-mermaid: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, "??", "??", "Arial";
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-small: 0.95em;
  --font-smaller: 0.9em;
  --font-smallest: 0.85em;
  --font-text: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ui-small: 14px;
  --font-ui-smaller: 13.5px;
  --footnote: #8996a0;
  --footnote-divider-color: #ccd6eb;
  --footnote-id-color: #697580;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #d0ddef62;
  --footnote-radius: 0;
  --footnote-size: 0.9em;
  --graph-404: #a6bbde;
  --graph-arrow: #697580;
  --graph-background: #e6edf8;
  --graph-bg: #e6edf8;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #cd2626;
  --graph-focused: #5599d0;
  --graph-img: #aac1d3;
  --graph-line: rgba(229, 149, 149, 0.37);
  --graph-line-hover: #912e2e;
  --graph-lines: rgba(229, 149, 149, 0.37);
  --graph-node: #30353a;
  --graph-node-attachment: #aac1d3;
  --graph-node-focused: #5599d0;
  --graph-node-hover-fill: #cd2626;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #c35c5c;
  --graph-node-unresolved: #a6bbde;
  --graph-tag: #c35c5c;
  --graph-text: #30353a;
  --h1-background: transparent;
  --h1-border-color: #bb5555;
  --h1-border-left-color: #ccd6eb;
  --h1-border-line-color: #ccd6eb;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #ccd6eb;
  --h1-border-width: 0;
  --h1-color: #c14343;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #a53f3f;
  --h2-border-left-color: #ccd6eb;
  --h2-border-line-color: #ccd6eb;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #ccd6eb;
  --h2-border-width: 0;
  --h2-color: #c14343;
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #862c2c;
  --h3-border-left-color: #ccd6eb;
  --h3-border-line-color: #ccd6eb;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #ccd6eb;
  --h3-border-width: 0;
  --h3-color: #c14343;
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #662828;
  --h4-border-left-color: #ccd6eb;
  --h4-border-line-color: #ccd6eb;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #ccd6eb;
  --h4-border-width: 0;
  --h4-color: #c14343;
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #697795;
  --h5-border-left-color: #ccd6eb;
  --h5-border-line-color: #ccd6eb;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #ccd6eb;
  --h5-border-width: 0;
  --h5-color: #c14343;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #a4aec2;
  --h6-border-left-color: #ccd6eb;
  --h6-border-line-color: #ccd6eb;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: #ccd6eb;
  --h6-border-width: 0;
  --h6-color: #c14343;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #c14343;
  --he-text-on-accent-inactive: #30353a;
  --he-title-bar-active-action: #cd2626;
  --he-title-bar-active-bg: #dce4f6;
  --he-title-bar-active-fg: #30353a;
  --he-title-bar-active-pinned-bg: #e6edf8;
  --he-title-bar-inactive-action: #697580;
  --he-title-bar-inactive-bg: #e6edf8;
  --he-title-bar-inactive-fg: #a6bbde;
  --he-title-bar-inactive-pinned-bg: #e6edf8;
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
  --headers: #c14343;
  --heading-formatting: #a6bbde;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(229, 149, 149, 0.37);
  --hr: #d6deea;
  --hr-alignment: -50%, -50%;
  --hr-color: #d6deea;
  --hr-icon-background: #e6edf8;
  --hr-icon-color: #c14343;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(255, 0, 0, 0.212);
  --hvr-active: rgba(253, 115, 115, 0.4);
  --hvr2: rgba(229, 149, 149, 0.37);
  --i-at: #697580;
  --icon-btn-radius: 0;
  --icon-color: #697580;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #30353a;
  --icon-color-hover: #30353a;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --icons: #d04e4e;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #d9e4f0;
  --illusion-h1-background: #bb5555;
  --illusion-h2-background: #a53f3f;
  --illusion-h3-background: #862c2c;
  --illusion-h4-background: #662828;
  --illusion-h5-background: #697795;
  --illusion-h6-background: #a4aec2;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: #d0ddef62;
  --image-border-color: #ccd6eb;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #a6bbde;
  --indentation-guide-color: #d6deea;
  --indentation-guide-color-active: #912e2e;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #d6deea;
  --initiative-xp: sandybrown;
  --inline-title-color: #c14343;
  --inline-title-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: #d0ddef62;
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #d9e4f0;
  --input-shadow-hover: 3px 3px 0 #d9e4f0;
  --interactive-accent: #c35c5c;
  --interactive-accent-hover: #a6bbde;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #a6bbde;
  --interactive-normal: #d5e1f3;
  --its: "its";
  --kanban-button-background: #e6ebf8;
  --kanban-button-shadow: 2px 2px 0 #d9e4f0;
  --kanban-card-border: 2px solid #d9e4f0;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #e6edf8;
  --kanban-card-text-color: #30353a;
  --kanban-card-title-background: #e6edf8;
  --kanban-card-title-border: 0 1px 0 #d9e4f0;
  --kanban-lane-background: #e6ebf8;
  --kanban-lane-border: 3px solid #d9e4f0;
  --kanban-lane-box-shadow: 2px 2px 0 #d9e4f0;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #5599d0;
  --kanban-tag-background: #c35c5c;
  --latex-color: #cd2626;
  --latex-format-color: #a6bbde;
  --latex-syntax-color: #697580;
  --line-height-tight: 1.3em;
  --lines: #d6deea;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #5599d0;
  --link-color-hover: #cd2626;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #5599d0;
  --link-external-color-hover: #aac1d3;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #a6bbde;
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
  --list-marker-color: #912e2e;
  --list-marker-color-collapsed: #a6bbde;
  --list-marker-color-hover: #697580;
  --list-marker-color-other: #aac1d3;
  --list-marker-min-width: 0;
  --list-numbered-color: #cd2626;
  --list-spacing: 1px;
  --lite-accent: #cd2626;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #e6edf8;
  --menu-border-color: #d9e4f0;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #d9e4f0;
  --message-border-color: #d9e4f0;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #d9e4f0;
  --message-color: #e5ebee;
  --metadata-border-color: #ccd6eb;
  --metadata-button-text-color: #a6bbde;
  --metadata-divider-color: #ccd6eb;
  --metadata-icon-color: #697580;
  --metadata-input-background-active: #d0ddef62;
  --metadata-input-font: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: 0.9em;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #30353a;
  --metadata-label-background-active: #d0ddef62;
  --metadata-label-font: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: 0.9em;
  --metadata-label-text-color: #697580;
  --metadata-label-text-color-hover: #697580;
  --metadata-property-background-active: rgba(253, 115, 115, 0.4);
  --metadata-property-box-shadow-focus: 0 0 0 2px #912e2e;
  --metadata-property-box-shadow-hover: 0 0 0 1px #d9e4f0;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #e5ebee;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #697580;
  --metadata-title-icon: "";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #e6edf8;
  --modal-border-color: #d9e4f0;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: #d0ddef62;
  --modal-radius: 0;
  --modal-sidebar-background: #dce4f6;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #30353a;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #697580;
  --nav-heading-color-hover: #30353a;
  --nav-indentation-guide-color: #d6deea;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #c35c5c;
  --nav-item-background-border-color-hover: #c35c5c;
  --nav-item-background-hover: #c35c5c;
  --nav-item-background-selected: rgba(255, 0, 0, 0.212);
  --nav-item-border-color: #cd2626;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #30353a;
  --nav-item-color-active: #e5ebee;
  --nav-item-color-highlighted: #e5ebee;
  --nav-item-color-hover: #e5ebee;
  --nav-item-color-selected: #30353a;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-size: 14px;
  --nav-item-weight: 500;
  --nav-item-weight-active: 700;
  --nav-item-weight-hover: 700;
  --nav-item-white-space: wrap;
  --nav-tag-color: #4e5b6f;
  --nav-tag-color-active: #697580;
  --nav-tag-color-hover: #697580;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #e6edf8;
  --note-rgb: 248, 251, 255;
  --note-title-border-color: #c14343;
  --outer-bar: #d5e1f3;
  --outline: #d9e4f0;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #e6edf8;
  --pdf-background: #e6edf8;
  --pdf-page-background: #e6edf8;
  --pdf-sidebar-background: #e6edf8;
  --pill-border-color: #ccd6eb;
  --pill-border-color-hover: #d9e4f0;
  --pill-color: #697580;
  --pill-color-hover: #30353a;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #5599d0;
  --pill-radius: 0;
  --popover-background: #e6edf8;
  --popover-border: 3px solid #d9e4f0;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #912e2e;
  --progress-bg: #d9e4f0;
  --prompt-border-color: #d9e4f0;
  --prompt-border-width: 3px;
  --r-heading-color: #c14343;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #cd2626;
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
  --ribbon-background: #d5e1f3;
  --ribbon-background-collapsed: #e6edf8;
  --ribbon-border-color: #d5e1f3;
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
  --scrollbar-active-thumb-bg: #cd2626;
  --scrollbar-bg: #d9e4f0;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #c35c5c;
  --scrollbar-track-bg: #e6edf8;
  --search-border: 2px solid #d9e4f0;
  --search-box-shadow: 2px 2px 0 #d9e4f0;
  --search-clear-button-color: #697580;
  --search-icon-color: #697580;
  --search-result-background: #e6edf8;
  --setting-item-alt-background-hover: #d0ddef62;
  --setting-item-background-hover: rgba(255, 0, 0, 0.212);
  --setting-item-border-color: #ccd6eb;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #c14343;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #d0ddef62;
  --setting-items-background: transparent;
  --shadow-l: 5px 5px 0 #d9e4f0;
  --shadow-m: 3px 3px 0 #d9e4f0;
  --shadow-ml: 4px 4px 0 #d9e4f0;
  --shadow-s: 2px 2px 0 #d9e4f0;
  --side-bar: #e6edf8;
  --side-bar-bg: #d5e1f3;
  --sidebar-icon-color: #30353a;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #c14343;
  --sidebar-tab-background-color-hover: #912e2e;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #c14343;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #e6edf8;
  --slider-thumb-border-color: #d9e4f0;
  --slider-thumb-radius: 0;
  --slider-track-background: #ccd6eb;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #697580;
  --statblock-alt: #d0ddef62;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #e6edf8;
  --statblock-bar-border-color: #912e2e;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #912e2e;
  --statblock-border-color: #d6deea;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #d9e4f0;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #30353a;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #c14343;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #d6deea;
  --statblock-primary-color: #30353a;
  --statblock-property-font-color: #30353a;
  --statblock-property-name-font-color: #c14343;
  --statblock-rule-color: #912e2e;
  --statblock-section-heading-border-color: #ccd6eb;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #8996a0;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: 0.95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #d5e1f3;
  --status-bar-border-color: #912e2e;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #697580;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #c35c5c;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --success-bg: #599049;
  --tab-background: #d5e1f3;
  --tab-background-active: #e6edf8;
  --tab-container-background: #d5e1f3;
  --tab-curve: 0;
  --tab-divider-color: #d6deea;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #912e2e;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #d0ddef62;
  --tab-stacked-shadow-color: #d0ddef62;
  --tab-switcher-background: #e6edf8;
  --tab-switcher-preview-background-shadow: 3px 3px 0 #d9e4f0;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #d9e4f0;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #cd2626, 5px 5px 0 #d9e4f0;
  --tab-text-color: #a6bbde;
  --tab-text-color-active: #30353a;
  --tab-text-color-focused: #a6bbde;
  --tab-text-color-focused-active: #30353a;
  --tab-text-color-focused-active-current: #30353a;
  --tab-text-color-focused-highlighted: #5599d0;
  --tab-text-color-hover: #30353a;
  --tab-top-outline-width: 0;
  --table: #ccd6eb;
  --table-add-button-background: #c14343;
  --table-add-button-border-color: #e6edf8;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #e6edf8;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #d0ddef62;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #c35c5c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #c35c5c;
  --table-header-background-hover: #912e2e;
  --table-header-border-color: #e6edf8;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #cd2626;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #d0ddef62;
  --table-row-alt-background-hover: rgba(229, 149, 149, 0.37);
  --table-row-background-hover: rgba(229, 149, 149, 0.37);
  --table-row-edit-font-size: 0.95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #c35c5c;
  --table-selection-border-radius: 0;
  --tag: #c35c5c;
  --tag-background: #c35c5c;
  --tag-background-color: #c35c5c;
  --tag-background-hover: #912e2e;
  --tag-border-color: #c35c5c;
  --tag-border-color-hover: #912e2e;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: 0.9em;
  --tag-text: #cd2626;
  --tall: 700px;
  --td: #d0ddef62;
  --text: #30353a;
  --text-accent: #5599d0;
  --text-accent-hover: #aac1d3;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(255, 0, 0, 0.212);
  --text-highlight-bg-active: rgba(253, 115, 115, 0.4);
  --text-muted: #697580;
  --text-normal: #30353a;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(229, 149, 149, 0.37);
  --th: #c35c5c;
  --th-text: #e5ebee;
  --theme-rainbow-1: #bb5555;
  --theme-rainbow-2: #a53f3f;
  --theme-rainbow-3: #862c2c;
  --theme-rainbow-4: #662828;
  --theme-rainbow-5: #697795;
  --theme-rainbow-6: #a4aec2;
  --tiny: 100px;
  --titlebar-background: #e6edf8;
  --titlebar-background-focused: #d5e1f3;
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
  --tooltip-color: #e5ebee;
  --vault-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --vault-name-color: #c14343;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #30353a;
  --vault-profile-color-hover: #30353a;
  --vault-profile-font-size: 14px;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(213, 225, 243);
  color: rgb(48, 53, 58);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(213, 225, 243);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(213, 225, 243);
  border-left-color: rgb(213, 225, 243);
  border-left-width: 2px;
  color: rgb(48, 53, 58);
}

body div#quartz-root {
  background-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}`,
    typography: `body .page article p > b, b {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .page article p > em, em {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .page article p > i, i {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .page article p > strong, strong {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .text-highlight {
  background-color: rgba(255, 0, 0, 0.21);
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body del {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: line-through 1px solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body p {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}`,
    links: `body a.external, footer a {
  color: rgb(85, 153, 208);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(85, 153, 208);
  text-decoration-color: rgb(85, 153, 208);
  text-decoration-line: none;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(205, 38, 38);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(205, 38, 38);
  text-decoration-color: rgb(205, 38, 38);
  text-decoration-line: none;
}

body a.internal.broken {
  color: rgb(166, 187, 222);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
  text-decoration-line: none;
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

body ol > li::marker {
  background-color: rgb(145, 46, 46);
  border-bottom-color: rgb(145, 46, 46);
  border-left-color: rgb(145, 46, 46);
  border-right-color: rgb(145, 46, 46);
  border-top-color: rgb(145, 46, 46);
  color: rgb(145, 46, 46);
}

body ul > li {
  color: rgb(48, 53, 58);
}

body ul > li::marker {
  background-color: rgb(145, 46, 46);
  border-bottom-color: rgb(145, 46, 46);
  border-left-color: rgb(145, 46, 46);
  border-right-color: rgb(145, 46, 46);
  border-top-color: rgb(145, 46, 46);
  color: rgb(145, 46, 46);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: none solid rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(220, 228, 246);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body table {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body td {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(230, 237, 248);
  border-left-color: rgb(230, 237, 248);
  border-right-color: rgb(230, 237, 248);
  border-top-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}

body th {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(230, 237, 248);
  border-left-color: rgb(230, 237, 248);
  border-right-color: rgb(230, 237, 248);
  border-top-color: rgb(230, 237, 248);
  color: rgb(229, 235, 238);
}

body tr {
  background-color: rgb(195, 92, 92);
}`,
    code: `body code {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(234, 66, 98);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  padding-bottom: 2.16px;
  padding-left: 4.32px;
  padding-right: 4.32px;
  padding-top: 2.16px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(48, 53, 58);
}

body pre > code, pre:has(> code) {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
}

body pre:has(> code) {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
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
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(166, 187, 222);
  text-decoration: none solid rgb(166, 187, 222);
  text-decoration-color: rgb(166, 187, 222);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-left-width: 4px;
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}`,
    search: `body .search > .search-button {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(230, 237, 248);
  border-bottom-color: rgb(217, 228, 240);
  border-bottom-width: 3px;
  border-left-color: rgb(217, 228, 240);
  border-left-width: 3px;
  border-right-color: rgb(217, 228, 240);
  border-right-width: 3px;
  border-top-color: rgb(217, 228, 240);
  border-top-width: 3px;
  box-shadow: rgb(217, 228, 240) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(253, 115, 115, 0.4);
  color: rgb(48, 53, 58);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(217, 228, 240);
  border-bottom-width: 3px;
  border-left-color: rgb(217, 228, 240);
  border-left-width: 3px;
  border-right-color: rgb(217, 228, 240);
  border-right-width: 3px;
  border-top-color: rgb(217, 228, 240);
  border-top-width: 3px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(230, 237, 248);
  border-bottom-color: rgb(230, 237, 248);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
  color: rgb(48, 53, 58);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(253, 115, 115, 0.4);
  color: rgb(48, 53, 58);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(195, 92, 92);
  border-bottom-color: rgb(195, 92, 92);
  border-left-color: rgb(195, 92, 92);
  border-right-color: rgb(195, 92, 92);
  border-top-color: rgb(195, 92, 92);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h3 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h4 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h5 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body h6 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  padding-left: 16px;
  padding-right: 16px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: none solid rgb(48, 53, 58);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(48, 53, 58);
  cursor: default;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: none solid rgb(48, 53, 58);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: none solid rgb(48, 53, 58);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(195, 92, 92);
  border-bottom-color: rgb(229, 235, 238);
  border-left-color: rgb(229, 235, 238);
  border-right-color: rgb(229, 235, 238);
  border-top-color: rgb(229, 235, 238);
  color: rgb(229, 235, 238);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    misc: `body abbr {
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
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(234, 66, 98);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-end-end-radius: 0px;
  border-end-start-radius: 0px;
  border-left-color: rgb(234, 66, 98);
  border-right-color: rgb(234, 66, 98);
  border-start-end-radius: 0px;
  border-start-start-radius: 0px;
  border-top-color: rgb(234, 66, 98);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(234, 66, 98);
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
