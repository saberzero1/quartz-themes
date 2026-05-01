import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.its-dark",
    modes: ["dark"],
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
  --accent: #803232;
  --accent-color: 134, 55, 55;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: var(--text, #475569);
  --accent2-lite: #c5575b;
  --aside-bg: #04070c;
  --background-modifier-active-hover: var(--dark-accent, #04070c);
  --background-modifier-border: var(--table, #380b13);
  --background-modifier-border-focus: var(--accent, #803232);
  --background-modifier-border-hover: var(--bg, #1b262f);
  --background-modifier-cover: var(--td, #03000054);
  --background-modifier-error: var(--failure-bg, #772d2d);
  --background-modifier-form-field: var(--td, #03000054);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #03000054);
  --background-modifier-hover: var(--hvr-active, rgba(212, 47, 47, 0.4));
  --background-modifier-message: var(--dark-accent, #04070c);
  --background-modifier-success: var(--success-bg, #32603e);
  --background-primary: var(--note, #070b11);
  --background-primary-alt: var(--deep-dark-accent, #270f0f);
  --background-secondary: var(--side-bar, black);
  --background-secondary-alt: var(--outer-bar, black);
  --bases-cards-background: var(--background-primary, #070b11);
  --bases-cards-cover-background: var(--background-primary-alt, #270f0f);
  --bases-cards-font-size: var(--font-smaller, .90em);
  --bases-cards-radius: var(--radius-m, 0);
  --bases-embed-border-color: var(--background-modifier-border, #380b13);
  --bases-embed-border-radius: var(--radius-s, 0);
  --bases-group-heading-property-color: var(--text-muted, #803232);
  --bases-group-heading-property-size: var(--font-ui-smaller, 13.5px);
  --bases-group-heading-value-size: var(--font-smaller, .90em);
  --bases-table-border-color: var(--table-border-color, #070b11);
  --bases-table-cell-background-active: var(--background-primary, #070b11);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #270f0f);
  --bases-table-cell-background-selected: var(--table-selection, hsla(0, 49%, 49%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 0);
  --bases-table-font-size: var(--font-smaller, .90em);
  --bases-table-group-background: var(--background-primary-alt, #270f0f);
  --bases-table-header-background: var(--background-primary, #070b11);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(212, 47, 47, 0.4));
  --bases-table-header-color: var(--text-muted, #803232);
  --bases-table-row-background-hover: var(--table-row-background-hover, rgba(139, 6, 6, 0.4));
  --bases-table-summary-background: var(--background-primary, #070b11);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(212, 47, 47, 0.4));
  --bg: var(--inactive, #1b262f);
  --blockquote-background-color: var(--embed-bg, black);
  --blockquote-border-color: var(--bg, #1b262f);
  --blockquote-border-thickness: 7px;
  --blockquote-color: var(--text-normal, #475569);
  --blockquote-font-style: var(--font-default, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --blockquote-padding: var(--size-4-3) var(--size-4-6, 12px 24px);
  --blockquote-padding-lp: 7px 0;
  --bodyFont: var(--font-text, var(--font-text-override), var(--font-default));
  --bold-modifier: 500;
  --box-border: 2px solid var(--outline);
  --box-border-m: 3px solid var(--outline);
  --box-border-s: 1px solid var(--outline);
  --bttn: var(--dark-accent, #04070c);
  --bullet: "\\e802";
  --bullet-font: var(--its, "its");
  --button-background: var(--bttn, #04070c);
  --button-background-hover: var(--interactive-accent-hover, #1b262f);
  --button-border: var(--bttn, #04070c);
  --button-border-radius: var(--radius-m, 0);
  --button-radius: var(--input-radius, 0);
  --button-text: var(--text-dl, #e5ebee);
  --callout-margin: 5px 0;
  --callout-padding: var(--size-4-3) var(--size-4-4, 12px 16px);
  --callout-radius: var(--radius-s, 0);
  --canvas-background: var(--background-primary, #070b11);
  --canvas-card-label-color: var(--text-faint, #4e5b6f);
  --canvas-color: 88, 100, 159;
  --canvas-color-opacity: 0.07;
  --canvas-controls-radius: var(--radius-s, 0);
  --canvas-node-padding: 0 7px;
  --caret-color: var(--text-normal, #475569);
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
  --checkbox-border-color: var(--accent, #803232);
  --checkbox-border-color-hover: var(--dark-accent, #04070c);
  --checkbox-color: var(--accent, #803232);
  --checkbox-color-hover: var(--dark-accent, #04070c);
  --checkbox-marker-color: var(--background-primary, #070b11);
  --checkbox-radius: var(--radius-m, 0);
  --checklist-done-color: var(--inactive, #1b262f);
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: var(--radius-s, 0);
  --code-background: var(--code-bg, #04070c);
  --code-bg: var(--aside-bg, #04070c);
  --code-border-color: var(--background-modifier-border, #380b13);
  --code-bracket-background: var(--background-modifier-hover, rgba(212, 47, 47, 0.4));
  --code-comment: var(--text-faint, #4e5b6f);
  --code-normal: var(--code-text, #803232);
  --code-punctuation: var(--text-muted, #803232);
  --code-radius: var(--radius-s, 0);
  --code-shadow: 0 2px 0 var(--outline);
  --code-size: var(--font-smaller, .90em);
  --code-text: var(--accent, #803232);
  --codeFont: var(--font-text, var(--font-text-override), var(--font-default));
  --collapse-icon-color: var(--text-faint, #4e5b6f);
  --collapse-icon-color-collapsed: var(--inactive, #1b262f);
  --comment-font: var(--font-monospace, "Fira Code", "Fira Code Medium", "Source Code Pro", monospace);
  --dark: var(--text-normal, var(--text, #475569));
  --dark-accent: var(--aside-bg, #04070c);
  --dark-sidebar: #000000;
  --darkgray: var(--text-normal, var(--text, #475569));
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(var(--accent-color), 10%);
  --dataview-th-background: var(--outer-bar, black);
  --dataview-th-border-bottom: 2px solid var(--headers);
  --dataview-th-color: var(--headers, #aa3333);
  --dataview-th-count-color: var(--dataview-th-color, #aa3333);
  --dataview-th-count-font-size: var(--font-text-size, 16px);
  --dataview-th-font: var(--font, "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif);
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: var(--header-weight, 700);
  --deep-dark-accent: #270f0f;
  --divider-color: var(--outer-bar, black);
  --divider-color-hover: var(--accent, #803232);
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: var(--dark-accent, #04070c);
  --drag-ghost-text-color: var(--text-dl, #e5ebee);
  --drop-shadow: #06080c60;
  --dropdown-background: var(--interactive-normal, black);
  --dropdown-background-hover: var(--interactive-hover, #1b262f);
  --embed-bg: var(--dark-sidebar, black);
  --embed-block-shadow-hover: var(--input-shadow, 2px 2px 0 black);
  --embed-border: var(--embed-thickness) var(--embed-border-type) var(--embed-border-color, 2px solid transparent);
  --embed-border-bottom: 2px solid var(--embed-border-bottom-color);
  --embed-border-bottom-color: var(--embed-border-color, transparent);
  --embed-border-bottom-color-hover: var(--embed-border-color-hover, black);
  --embed-border-color: transparent;
  --embed-border-color-hover: var(--outline, black);
  --embed-border-left: 2px solid var(--headers);
  --embed-border-left-color: var(--headers, #aa3333);
  --embed-border-left-color-hover: var(--embed-border-left-color, #aa3333);
  --embed-border-right: 2px solid var(--embed-border-right-color);
  --embed-border-right-color: var(--embed-border-color, transparent);
  --embed-border-right-color-hover: var(--embed-border-color-hover, black);
  --embed-border-top: 2px solid var(--embed-border-top-color);
  --embed-border-top-color: var(--embed-border-color, transparent);
  --embed-border-top-color-hover: var(--embed-border-color-hover, black);
  --embed-border-type: solid;
  --embed-header-size: 18px;
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
  --fg: var(--headers, #aa3333);
  --file-font: var(--its, "its");
  --file-header-background: var(--note, #070b11);
  --file-header-background-focused: var(--background-primary, #070b11);
  --file-header-breadcrumb-color: var(--inactive, #1b262f);
  --file-header-breadcrumb-font-size: var(--font-ui-smaller, 13.5px);
  --file-header-color: var(--inactive, #1b262f);
  --file-header-color-active: var(--text, #475569);
  --file-header-font: var(--font-interface, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --file-header-font-size: var(--font-ui-medium, 15px);
  --file-header-font-weight: 600;
  --file-header-left-color: var(--dark-accent, #04070c);
  --file-header-parent-font-weight: 600;
  --file-header-right-color: var(--outer-bar, black);
  --file-icon: "\\e800";
  --file-icon-color: var(--text, #475569);
  --file-icon-margin: 6px;
  --file-text-color: var(--nav-item-color, #475569);
  --flair-background: var(--interactive-normal, black);
  --flair-color: var(--text-normal, #475569);
  --folder: var(--headers, #aa3333);
  --folder-font: var(--its, "its");
  --folder-icon: "\\e801";
  --folder-icon-color: var(--folder, #aa3333);
  --folder-icon-open-color: var(--folder-open, #e05858);
  --folder-open: #e05858;
  --folder-open-text-color: var(--text, #475569);
  --folder-text-color: var(--nav-item-color, #475569);
  --folder-weight: 700;
  --folder-weight-hover: var(--folder-weight, 700);
  --font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-frontmatter: var(--font-small, .95em);
  --font-interface: var(--font-interface-override), var(--font-default);
  --font-ligatures: none;
  --font-mermaid: var(--font-text, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --font-print-override: var(--font-default, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --font-small: .95em;
  --font-smaller: .90em;
  --font-smallest: .85em;
  --font-text: var(--font-text-override), var(--font-default);
  --font-ui-small: 14px;
  --font-ui-smaller: 13.5px;
  --footnote: #577093;
  --footnote-divider-color: var(--metadata-divider-color, #380b13);
  --footnote-id-color: var(--text-muted, #803232);
  --footnote-id-color-no-occurrences: var(--text-faint, #4e5b6f);
  --footnote-input-background-active: var(--metadata-input-background-active, #03000054);
  --footnote-radius: var(--radius-s, 0);
  --footnote-size: var(--font-smaller, .90em);
  --graph-404: var(--inactive, #1b262f);
  --graph-arrow: var(--soft-text, #803232);
  --graph-background: var(--graph-bg, rgba(13, 20, 29, 0.51));
  --graph-bg: var(--note, rgba(13, 20, 29, 0.51));
  --graph-controls-section-header-padding: var(--nav-item-parent-padding, 4px 8px);
  --graph-fill: var(--lite-accent, #c94d4d);
  --graph-focused: var(--accent2-lite, #c5575b);
  --graph-img: var(--accent2, #475569);
  --graph-line: var(--graph-lines, #571a1a);
  --graph-line-hover: var(--accent, #803232);
  --graph-lines: var(--hr, #571a1a);
  --graph-node: var(--text, #475569);
  --graph-node-attachment: var(--graph-img, #475569);
  --graph-node-focused: var(--graph-focused, #c5575b);
  --graph-node-hover-fill: var(--graph-fill, #c94d4d);
  --graph-node-hover-outline: var(--text-dl, #e5ebee);
  --graph-node-tag: var(--graph-tag, #04070c);
  --graph-node-unresolved: var(--graph-404, #1b262f);
  --graph-tag: var(--dark-accent, #04070c);
  --graph-text: var(--text-normal, #475569);
  --gray: var(--text-muted, var(--soft-text, #803232));
  --h1-background: var(--header-background, transparent);
  --h1-border-color: var(--theme-rainbow-1, #aa3333);
  --h1-border-left-color: var(--h1-border-line-color, #380b13);
  --h1-border-line-color: var(--header-border-line-color, #380b13);
  --h1-border-line-height: var(--header-border-line-height, 4px);
  --h1-border-line-width: 100%;
  --h1-border-right-color: var(--h1-border-line-color, #380b13);
  --h1-border-width: 0;
  --h1-color: var(--headers, #aa3333);
  --h1-font: var(--font, "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif);
  --h1-padding: var(--header-padding, 0);
  --h1-shadow: var(--header-shadow, transparent);
  --h1-size: 34px;
  --h1-text-align: var(--header-text-align, start);
  --h1-weight: var(--header-weight, 700);
  --h2-background: var(--header-background, transparent);
  --h2-border-color: var(--theme-rainbow-2, #803232);
  --h2-border-left-color: var(--h2-border-line-color, #380b13);
  --h2-border-line-color: var(--header-border-line-color, #380b13);
  --h2-border-line-height: var(--header-border-line-height, 4px);
  --h2-border-line-width: 85%;
  --h2-border-right-color: var(--h2-border-line-color, #380b13);
  --h2-border-width: 0;
  --h2-color: var(--headers, #aa3333);
  --h2-font: var(--font, "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif);
  --h2-padding: var(--header-padding, 0);
  --h2-shadow: var(--header-shadow, transparent);
  --h2-size: calc(var(--h1-size) - 4px);
  --h2-text-align: var(--header-text-align, start);
  --h2-weight: var(--header-weight, 700);
  --h3-background: var(--header-background, transparent);
  --h3-border-color: var(--theme-rainbow-3, #571a1a);
  --h3-border-left-color: var(--h3-border-line-color, #380b13);
  --h3-border-line-color: var(--header-border-line-color, #380b13);
  --h3-border-line-height: var(--header-border-line-height, 4px);
  --h3-border-line-width: 65%;
  --h3-border-right-color: var(--h3-border-line-color, #380b13);
  --h3-border-width: 0;
  --h3-color: var(--headers, #aa3333);
  --h3-font: var(--font, "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif);
  --h3-padding: var(--header-padding, 0);
  --h3-shadow: var(--header-shadow, transparent);
  --h3-size: calc(var(--h1-size) - 8px);
  --h3-text-align: var(--header-text-align, start);
  --h3-weight: var(--header-weight, 700);
  --h4-background: var(--header-background, transparent);
  --h4-border-color: var(--theme-rainbow-4, #380b13);
  --h4-border-left-color: var(--h4-border-line-color, #380b13);
  --h4-border-line-color: var(--header-border-line-color, #380b13);
  --h4-border-line-height: var(--header-border-line-height, 4px);
  --h4-border-line-width: 44%;
  --h4-border-right-color: var(--h4-border-line-color, #380b13);
  --h4-border-width: 0;
  --h4-color: var(--headers, #aa3333);
  --h4-font: var(--font, "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif);
  --h4-padding: var(--header-padding, 0);
  --h4-shadow: var(--header-shadow, transparent);
  --h4-size: calc(var(--h1-size) - 12px);
  --h4-text-align: var(--header-text-align, start);
  --h4-weight: var(--header-weight, 700);
  --h5-background: var(--header-background, transparent);
  --h5-border-color: var(--theme-rainbow-5, #475569);
  --h5-border-left-color: var(--h5-border-line-color, #380b13);
  --h5-border-line-color: var(--header-border-line-color, #380b13);
  --h5-border-line-height: var(--header-border-line-height, 4px);
  --h5-border-line-width: 25%;
  --h5-border-right-color: var(--h5-border-line-color, #380b13);
  --h5-border-width: 0;
  --h5-color: var(--headers, #aa3333);
  --h5-font: var(--font, "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif);
  --h5-padding: var(--header-padding, 0);
  --h5-shadow: var(--header-shadow, transparent);
  --h5-size: calc(var(--h1-size) - 14px);
  --h5-text-align: var(--header-text-align, start);
  --h5-weight: var(--header-weight, 700);
  --h6-background: var(--header-background, transparent);
  --h6-border-color: var(--theme-rainbow-6, #04070c);
  --h6-border-left-color: var(--h6-border-line-color, #380b13);
  --h6-border-line-color: var(--header-border-line-color, #380b13);
  --h6-border-line-height: var(--header-border-line-height, 4px);
  --h6-border-line-width: 0;
  --h6-border-right-color: var(--h6-border-line-color, #380b13);
  --h6-border-width: 0;
  --h6-color: var(--headers, #aa3333);
  --h6-font: var(--font, "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif);
  --h6-padding: var(--header-padding, 0);
  --h6-shadow: var(--header-shadow, transparent);
  --h6-size: calc(var(--h1-size) - 16px);
  --h6-text-align: var(--header-text-align, start);
  --h6-weight: var(--header-weight, 700);
  --he-popover-border-radius: var(--radius-s, 0);
  --he-text-on-accent-active: var(--headers, #aa3333);
  --he-text-on-accent-inactive: var(--text, #475569);
  --he-title-bar-active-action: var(--lite-accent, #c94d4d);
  --he-title-bar-active-bg: var(--embed-bg, black);
  --he-title-bar-active-fg: var(--text, #475569);
  --he-title-bar-active-pinned-bg: var(--note, #070b11);
  --he-title-bar-inactive-action: var(--soft-text, #803232);
  --he-title-bar-inactive-bg: var(--note, #070b11);
  --he-title-bar-inactive-fg: var(--inactive, #1b262f);
  --he-title-bar-inactive-pinned-bg: var(--note, #070b11);
  --header-arrow-icon-color: var(--collapse-icon-color, #4e5b6f);
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: var(--table, #380b13);
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 700;
  --headerFont: var(--font-text, var(--font-text-override), var(--font-default));
  --headers: #aa3333;
  --heading-formatting: var(--inactive, #1b262f);
  --heading-spacing-bottom: var(--heading-spacing, 10px);
  --heading-spacing-top: var(--heading-spacing, 10px);
  --highlight: rgba(139, 6, 6, 0.4);
  --hr: #571a1a;
  --hr-alignment: -50%, -50%;
  --hr-color: var(--hr, #571a1a);
  --hr-icon-background: var(--note, #070b11);
  --hr-icon-color: var(--headers, #aa3333);
  --hr-icon-font: var(--its, "its");
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "\\e817";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(60, 8, 8, 0.46);
  --hvr-active: rgba(212, 47, 47, 0.4);
  --hvr2: var(--highlight, rgba(139, 6, 6, 0.4));
  --i-at: var(--soft-text, #803232);
  --icon-btn-radius: var(--radius-s, 0);
  --icon-color: var(--soft-text, #803232);
  --icon-color-active: var(--text-dl, #e5ebee);
  --icon-color-focused: var(--text, #475569);
  --icon-color-hover: var(--text, #475569);
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: var(--icon-m, 17px);
  --illusion-border-line-height: 0;
  --illusion-box-shadow: var(--shadow-l, 5px 5px 0 black);
  --illusion-h1-background: var(--theme-rainbow-1, #aa3333);
  --illusion-h2-background: var(--theme-rainbow-2, #803232);
  --illusion-h3-background: var(--theme-rainbow-3, #571a1a);
  --illusion-h4-background: var(--theme-rainbow-4, #380b13);
  --illusion-h5-background: var(--theme-rainbow-5, #475569);
  --illusion-h6-background: var(--theme-rainbow-6, #04070c);
  --illusion-header-arrow-color: var(--illusion-header-text, #e5ebee);
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: var(--text-dl, #e5ebee);
  --image-border-background: var(--td, #03000054);
  --image-border-color: var(--background-modifier-border, #380b13);
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #1b262f;
  --indentation-guide-color: var(--lines, #571a1a);
  --indentation-guide-color-active: var(--accent, #803232);
  --indentation-guide-editing-indent: calc(var(--checkbox-size)/3);
  --indentation-guide-reading-indent: calc(var(--checkbox-size)*-1 + 2px);
  --indentation-guide-source-indent: calc(var(--checkbox-size)/3*-1 + var(--checkbox-size)/2.5);
  --indentation-guide-width: var(--border-width, 2px);
  --indentation-guide-width-active: var(--indentation-guide-width, 2px);
  --initiative-tracker-border: var(--lines, #571a1a);
  --initiative-xp: sandybrown;
  --inline-title-color: var(--headers, #aa3333);
  --inline-title-font: var(--h1-font, "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif);
  --inline-title-position: left;
  --inline-title-size: var(--h1-size, 34px);
  --input-bg: rgba(0, 0, 0, 0.3);
  --input-date-separator: var(--text-faint, #4e5b6f);
  --input-placeholder-color: var(--text-faint, #4e5b6f);
  --input-radius: var(--radius-s, 0);
  --input-shadow: var(--shadow-s, 2px 2px 0 black);
  --input-shadow-hover: var(--shadow-m, 3px 3px 0 black);
  --interactive-accent: var(--dark-accent, #04070c);
  --interactive-accent-hover: var(--inactive, #1b262f);
  --interactive-accent-hsl: var(--accent-h), var(--accent-s), var(--accent-l);
  --interactive-hover: var(--inactive, #1b262f);
  --interactive-normal: var(--outer-bar, black);
  --its: "its";
  --kanban-button-background: var(--code-bg, #04070c);
  --kanban-button-shadow: var(--input-shadow, 2px 2px 0 black);
  --kanban-card-border: var(--box-border, 2px solid black);
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: var(--note, #070b11);
  --kanban-card-text-color: var(--text-normal, #475569);
  --kanban-card-title-background: var(--note, #070b11);
  --kanban-card-title-border: 0 1px 0 var(--outline);
  --kanban-lane-background: var(--code-bg, #04070c);
  --kanban-lane-border: var(--box-border-m, 3px solid black);
  --kanban-lane-box-shadow: var(--shadow-s, 2px 2px 0 black);
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: var(--accent2-lite, #c5575b);
  --kanban-tag-background: var(--tag-background, #380b13);
  --latex-color: var(--lite-accent, #c94d4d);
  --latex-format-color: var(--inactive, #1b262f);
  --latex-syntax-color: var(--soft-text, #803232);
  --light: var(--background-primary, var(--note, #070b11));
  --lightgray: var(--background-secondary, var(--side-bar, black));
  --line-height-tight: 1.3em;
  --lines: var(--hr, #571a1a);
  --link-background: transparent;
  --link-background-hover: var(--link-background, transparent);
  --link-border: none;
  --link-color: var(--accent2-lite, #c5575b);
  --link-color-hover: var(--lite-accent, #c94d4d);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--text-accent, #c5575b);
  --link-external-color-hover: var(--text-accent-hover, #475569);
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: var(--inactive, #1b262f);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: var(--table, #380b13);
  --list-bullet-radius: var(--radius-h, 0);
  --list-bullet-size: calc(var(--font-text-size)/2.5);
  --list-bullet-transform: rotate(45deg);
  --list-color-1: var(--indentation-guide-color, #571a1a);
  --list-color-2: var(--indentation-guide-color, #571a1a);
  --list-color-3: var(--indentation-guide-color, #571a1a);
  --list-color-4: var(--indentation-guide-color, #571a1a);
  --list-color-5: var(--indentation-guide-color, #571a1a);
  --list-color-6: var(--indentation-guide-color, #571a1a);
  --list-marker-color: var(--accent, #803232);
  --list-marker-color-collapsed: var(--inactive, #1b262f);
  --list-marker-color-hover: var(--text-muted, #803232);
  --list-marker-color-other: var(--accent2, #475569);
  --list-marker-min-width: 0;
  --list-numbered-color: var(--lite-accent, #c94d4d);
  --list-spacing: 1px;
  --lite-accent: #c94d4d;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: var(--background-secondary, black);
  --menu-border-color: var(--background-modifier-border-hover, #1b262f);
  --menu-radius: var(--radius-m, 0);
  --menu-shadow: var(--shadow-s, 2px 2px 0 black);
  --message-border-color: var(--outline, black);
  --message-border-width: 0px;
  --message-box-shadow: var(--shadow-s, 2px 2px 0 black);
  --message-color: var(--text-dl, #e5ebee);
  --metadata-border-color: var(--background-modifier-border, #380b13);
  --metadata-button-text-color: var(--inactive, #1b262f);
  --metadata-divider-color: var(--background-modifier-border, #380b13);
  --metadata-icon-color: var(--icon-color, #803232);
  --metadata-input-background-active: var(--td, #03000054);
  --metadata-input-font: var(--font-interface, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --metadata-input-font-size: var(--font-smaller, .90em);
  --metadata-input-text-color: var(--text-normal, #475569);
  --metadata-label-background-active: var(--td, #03000054);
  --metadata-label-font: var(--font-interface, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --metadata-label-font-size: var(--font-smaller, .90em);
  --metadata-label-text-color: var(--text-muted, #803232);
  --metadata-label-text-color-hover: var(--text-muted, #803232);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(212, 47, 47, 0.4));
  --metadata-property-radius: var(--radius-s, 0);
  --metadata-property-radius-focus: var(--radius-s, 0);
  --metadata-property-radius-hover: var(--radius-s, 0);
  --metadata-remove-color: var(--accent-text, #dcddde);
  --metadata-remove-color-hover: var(--text-dl, #e5ebee);
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --metadata-title-align: center;
  --metadata-title-color: var(--text-muted, #803232);
  --metadata-title-icon: "\\e805";
  --metadata-title-icon-font: var(--its, "its");
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: var(--font-text-size, 16px);
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: var(--background-primary, #070b11);
  --modal-border-color: var(--outline, black);
  --modal-border-width: var(--border-width, 3px);
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: var(--td, #03000054);
  --modal-radius: var(--radius-l, 0);
  --modal-sidebar-background: var(--dark-sidebar, #000000);
  --nav-collapse-icon-color: var(--collapse-icon-color, #4e5b6f);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #4e5b6f);
  --nav-heading-color: var(--text-normal, #475569);
  --nav-heading-color-collapsed: var(--text-faint, #4e5b6f);
  --nav-heading-color-collapsed-hover: var(--text-muted, #803232);
  --nav-heading-color-hover: var(--text-normal, #475569);
  --nav-indentation-guide-color: var(--lines, #571a1a);
  --nav-indentation-guide-width: var(--indentation-guide-width, 2px);
  --nav-item-background-active: var(--dark-accent, #04070c);
  --nav-item-background-border-color-hover: var(--dark-accent, #04070c);
  --nav-item-background-hover: var(--dark-accent, #04070c);
  --nav-item-background-selected: var(--hvr, rgba(60, 8, 8, 0.46));
  --nav-item-border-color: var(--lite-accent, #c94d4d);
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: var(--text, #475569);
  --nav-item-color-active: var(--text-dl, #e5ebee);
  --nav-item-color-highlighted: var(--text-dl, #e5ebee);
  --nav-item-color-hover: var(--text-dl, #e5ebee);
  --nav-item-color-selected: var(--text-normal, #475569);
  --nav-item-padding: var(--size-4-1) var(--size-4-2) var(--size-4-1) var(--size-4-6, 4px 8px);
  --nav-item-parent-padding: var(--nav-item-padding, 4px 8px);
  --nav-item-radius: var(--radius-s, 0);
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-item-weight: 500;
  --nav-item-weight-active: 700;
  --nav-item-weight-hover: 700;
  --nav-item-white-space: wrap;
  --nav-tag-color: var(--text-faint, #4e5b6f);
  --nav-tag-color-active: var(--text-muted, #803232);
  --nav-tag-color-hover: var(--text-muted, #803232);
  --nav-tag-radius: var(--radius-s, 0);
  --navbar-radius: 0;
  --note: #070b11;
  --note-rgb: 26, 30, 36;
  --note-title-border-color: var(--headers, #aa3333);
  --outer-bar: black;
  --outline: var(--outer-bar, black);
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: var(--note, #070b11);
  --pdf-background: var(--background-primary, #070b11);
  --pdf-page-background: var(--background-primary, #070b11);
  --pdf-sidebar-background: var(--background-primary, #070b11);
  --pill-border-color: var(--background-modifier-border, #380b13);
  --pill-border-color-hover: var(--background-modifier-border-hover, #1b262f);
  --pill-color: var(--text-muted, #803232);
  --pill-color-hover: var(--text-normal, #475569);
  --pill-color-remove: var(--text-faint, #4e5b6f);
  --pill-color-remove-hover: var(--text-accent, #c5575b);
  --pill-radius: var(--radius-m, 0);
  --popover-background: var(--background-primary, #070b11);
  --popover-border: 3px solid var(--outline);
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: var(--accent, #803232);
  --progress-bg: var(--bg, #1b262f);
  --prompt-background: var(--background-primary, #070b11);
  --prompt-border-color: var(--outline, black);
  --prompt-border-width: var(--border-width, 3px);
  --r-heading-color: var(--headers, #aa3333);
  --r-heading-font: var(--font, "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif);
  --r-heading-font-weight: var(--header-weight, 700);
  --r-heading-text-transform: capitalize;
  --r-main-font: var(--font-default, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --r-progress-color: var(--lite-accent, #c94d4d);
  --radius-h: calc(var(--radius-s)/0.5);
  --radius-l: calc(var(--radius-s)*1.2);
  --radius-m: calc(var(--radius-s)*1.1);
  --radius-s: 0;
  --radius-xl: calc(var(--radius-s)*1.5);
  --rainbow-1: #b03a3a;
  --rainbow-2: #d59929;
  --rainbow-3: #207a20;
  --rainbow-4: #3232c5;
  --rainbow-5: #7f307f;
  --rainbow-6: #dd4794;
  --raised-background: var(--blur-background, color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent)));
  --ribbon-background: var(--outer-bar, black);
  --ribbon-background-collapsed: var(--note, #070b11);
  --ribbon-border-color: var(--outer-bar, black);
  --ribbon-border-width: 0;
  --ribbon-icon-gap: 15px;
  --ribbon-icon-size: var(--icon-l, 18px);
  --ribbon-icon-stroke: var(--icon-l-stroke-width, 1.75px);
  --ribbon-width: 40px;
  --rmx: "remixicon";
  --root-list-bullet-spacing: 0;
  --root-list-spacing: 10px;
  --rpg: "rpg-awesome";
  --scroll-size: 7px;
  --scrollbar-active-thumb-bg: var(--lite-accent, #c94d4d);
  --scrollbar-bg: var(--bg, #1b262f);
  --scrollbar-border-width: 0;
  --scrollbar-radius: var(--radius-l, 0);
  --scrollbar-thumb-bg: var(--tag, #380b13);
  --scrollbar-track-bg: var(--note, #070b11);
  --search-border: var(--box-border, 2px solid black);
  --search-box-shadow: var(--shadow-s, 2px 2px 0 black);
  --search-clear-button-color: var(--text-muted, #803232);
  --search-icon-color: var(--text-muted, #803232);
  --search-result-background: var(--background-primary, #070b11);
  --secondary: var(--text-accent, var(--accent2-lite, #c5575b));
  --setting-group-heading-color: var(--text-normal, #475569);
  --setting-item-alt-background-hover: var(--td, #03000054);
  --setting-item-background-hover: var(--hvr, rgba(60, 8, 8, 0.46));
  --setting-item-border-color: var(--table, #380b13);
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid var(--headers);
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: var(--setting-items-background, transparent);
  --setting-items-alt-background-hover: var(--td, #03000054);
  --setting-items-background: var(--background-primary-alt, transparent);
  --setting-items-border-color: var(--background-modifier-border, #380b13);
  --setting-items-radius: var(--radius-l, 0);
  --shadow-l: 5px 5px 0 var(--outline);
  --shadow-m: 3px 3px 0 var(--outline);
  --shadow-ml: 4px 4px 0 var(--outline);
  --shadow-s: 2px 2px 0 var(--outline);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #803232);
  --shiki-code-background: var(--code-background, #04070c);
  --shiki-code-block-border-radius: var(--code-radius, 0);
  --shiki-code-comment: var(--text-faint, #4e5b6f);
  --shiki-code-normal: var(--text-muted, #803232);
  --shiki-code-punctuation: var(--text-muted, #803232);
  --shiki-gutter-border-color: var(--background-modifier-border, #380b13);
  --shiki-gutter-text-color: var(--text-faint, #4e5b6f);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #803232);
  --shiki-highlight-neutral: var(--shiki-code-normal, #803232);
  --shiki-terminal-dots-color: var(--text-faint, #4e5b6f);
  --shiki-tooltip-background: var(--background-modifier-message, #04070c);
  --side-bar: var(--outer-bar, black);
  --side-bar-bg: var(--outer-bar, black);
  --sidebar-icon-color: var(--text, #475569);
  --sidebar-icon-color-active: var(--text-dl, #e5ebee);
  --sidebar-markdown-font-size: var(--font-text-size, 16px);
  --sidebar-tab-background-color: var(--bttn, #04070c);
  --sidebar-tab-background-color-hover: var(--accent, #803232);
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: var(--bttn, #04070c);
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: var(--text-on-accent, #e5ebee);
  --sidebar-tab-icon-size: var(--icon-l, 18px);
  --sidebar-tab-icon-stroke: var(--icon-l-stroke-width, 1.75px);
  --sidebar-tab-padding: 0 var(--size-4-3);
  --slide-background: var(--note, #070b11);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #1b262f);
  --slider-thumb-radius: var(--radius-h, 0);
  --slider-track-background: var(--background-modifier-border, #380b13);
  --slider-track-radius: var(--radius-h, 0);
  --small: 200px;
  --small-med: 300px;
  --soft-text: var(--accent, #803232);
  --statblock-alt: var(--td, #03000054);
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: var(--note, #070b11);
  --statblock-bar-border-color: var(--statblock-bar-color, #803232);
  --statblock-bar-border-size: 0;
  --statblock-bar-color: var(--accent, #803232);
  --statblock-border-color: var(--lines, #571a1a);
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: var(--outline, black);
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: var(--font-default, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --statblock-content-font-size: var(--font-text-size, 16px);
  --statblock-font-color: var(--text, #475569);
  --statblock-heading-font: var(--font, "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif);
  --statblock-heading-font-color: var(--headers, #aa3333);
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: var(--header-weight, 700);
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: var(--hr, #571a1a);
  --statblock-primary-color: var(--text, #475569);
  --statblock-property-font-color: var(--text, #475569);
  --statblock-property-name-font-color: var(--headers, #aa3333);
  --statblock-rule-color: var(--accent, #803232);
  --statblock-section-heading-border-color: var(--table, #380b13);
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: var(--h3-font, "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif);
  --statblock-section-heading-font-color: var(--footnote, #577093);
  --statblock-section-heading-font-size: var(--h3-size, 26px);
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: var(--header-weight, 700);
  --statblock-subheading-font-size: var(--font-small, .95em);
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: var(--outer-bar, black);
  --status-bar-border-color: var(--accent, #803232);
  --status-bar-font-size: var(--font-ui-smaller, 13.5px);
  --status-bar-gap: var(--size-4-1, 4px);
  --status-bar-padding: var(--size-4-1, 4px);
  --status-bar-radius: var(--radius-m, 0 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #803232);
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: var(--dark-accent, #04070c);
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: var(--text-dl, #e5ebee);
  --style-settings-heading-color-hover: var(--text-dl, #e5ebee);
  --success-bg: #32603e;
  --suggestion-background: var(--background-primary, #070b11);
  --tab-background: var(--outer-bar, black);
  --tab-background-active: var(--note, #070b11);
  --tab-container-background: var(--tab-background, black);
  --tab-curve: var(--radius-s, 0);
  --tab-divider-color: var(--hr, #571a1a);
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: var(--accent, #803232);
  --tab-outline-width: 2px;
  --tab-radius: var(--radius-s, 0);
  --tab-radius-active: var(--radius-s, 0);
  --tab-stacked-font-size: var(--font-ui-small, 15px);
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px var(--tab-stacked-shadow-color);
  --tab-stacked-shadow-color: var(--drop-shadow, #06080c60);
  --tab-switcher-background: var(--background-secondary, black);
  --tab-switcher-preview-background-shadow: var(--shadow-m, 3px 3px 0 black);
  --tab-switcher-preview-radius: var(--radius-xl, 0);
  --tab-switcher-preview-shadow: var(--shadow-s, 2px 2px 0 black);
  --tab-switcher-preview-shadow-active: 0 0 0 2px var(--lite-accent), var(--shadow-l);
  --tab-text-color: var(--inactive, #1b262f);
  --tab-text-color-active: var(--text, #475569);
  --tab-text-color-focused: var(--inactive, #1b262f);
  --tab-text-color-focused-active: var(--text, #475569);
  --tab-text-color-focused-active-current: var(--text, #475569);
  --tab-text-color-focused-highlighted: var(--text-accent, #c5575b);
  --tab-text-color-hover: var(--text, #475569);
  --tab-top-outline-width: 0;
  --table: #380b13;
  --table-add-button-background: var(--bttn, #04070c);
  --table-add-button-border-color: var(--note, #070b11);
  --table-add-button-col-width: var(--table-add-button-size, 24px);
  --table-add-button-color: var(--text-dl, #e5ebee);
  --table-add-button-row-height: var(--table-add-button-size, 24px);
  --table-add-button-size: var(--size-4-6, 24px);
  --table-border-color: var(--note, #070b11);
  --table-cell-padding-x: var(--size-4-2, 8px);
  --table-cell-padding-y: var(--size-2-2, 4px);
  --table-column-alt-background: var(--td, #03000054);
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: var(--table-selection-border-color, #04070c);
  --table-drag-handle-color: var(--text-faint, #4e5b6f);
  --table-drag-handle-color-active: var(--text-on-accent, #e5ebee);
  --table-header-background: var(--th, #571a1a);
  --table-header-background-hover: var(--accent, #803232);
  --table-header-border-color: var(--table-border-color, #070b11);
  --table-header-color: var(--th-text, #e5ebee);
  --table-header-padding-x: var(--size-4-2, 8px);
  --table-header-padding-y: var(--size-2-2, 4px);
  --table-header-size: var(--font-text, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --table-header-text-color: var(--lite-accent, #c94d4d);
  --table-header-weight: var(--font-bold, 700);
  --table-line-height: var(--line-height-tight, 1.3em);
  --table-row-alt-background: var(--td, #03000054);
  --table-row-alt-background-hover: var(--highlight, rgba(139, 6, 6, 0.4));
  --table-row-background-hover: var(--highlight, rgba(139, 6, 6, 0.4));
  --table-row-edit-font-size: var(--font-small, .95em);
  --table-selection-border-color: var(--interactive-accent, #04070c);
  --table-selection-border-radius: var(--radius-s, 0);
  --tag: var(--table, #380b13);
  --tag-background: var(--tag, #380b13);
  --tag-background-color: var(--tag-background, #380b13);
  --tag-background-hover: var(--accent, #803232);
  --tag-border-color: var(--tag, #380b13);
  --tag-border-color-hover: var(--accent, #803232);
  --tag-color: var(--text-dl, #e5ebee);
  --tag-color-hover: var(--text-dl, #e5ebee);
  --tag-decoration-hover: underline;
  --tag-font: var(--font-default, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: var(--radius-l, 0);
  --tag-size: var(--font-smaller, .90em);
  --tag-text: #d04e4e;
  --tall: 700px;
  --td: #03000054;
  --tertiary: var(--text-accent-hover, var(--accent2, #475569));
  --text: #475569;
  --text-accent: var(--accent2-lite, #c5575b);
  --text-accent-hover: var(--accent2, #475569);
  --text-dl: #e5ebee;
  --text-faint: var(--faint-text, #4e5b6f);
  --text-highlight-bg: var(--hvr, rgba(60, 8, 8, 0.46));
  --text-highlight-bg-active: var(--hvr-active, rgba(212, 47, 47, 0.4));
  --text-muted: var(--soft-text, #803232);
  --text-normal: var(--text, #475569);
  --text-on-accent: var(--text-dl, #e5ebee);
  --text-selection: var(--highlight, rgba(139, 6, 6, 0.4));
  --textHighlight: var(--text-highlight-bg, var(--hvr, rgba(60, 8, 8, 0.46)));
  --th: var(--hr, #571a1a);
  --th-text: var(--text-dl, #e5ebee);
  --theme-rainbow-1: var(--headers, #aa3333);
  --theme-rainbow-2: var(--accent, #803232);
  --theme-rainbow-3: var(--hr, #571a1a);
  --theme-rainbow-4: var(--table, #380b13);
  --theme-rainbow-5: var(--file-icon-color, #475569);
  --theme-rainbow-6: var(--code-bg, #04070c);
  --tiny: 100px;
  --titleFont: var(--font-text, var(--font-text-override), var(--font-default));
  --titlebar-background: var(--note, #070b11);
  --titlebar-background-focused: var(--outer-bar, black);
  --titlebar-border-color: var(--background-modifier-border, #380b13);
  --titlebar-text-color: var(--text-normal, #475569);
  --titlebar-text-color-focused: var(--text-normal, #475569);
  --toggle-border-width: 1px;
  --toggle-radius: var(--radius-h, 0);
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: var(--radius-h, 0);
  --toggle-width: 20px;
  --tooltip-color: var(--text-dl, #e5ebee);
  --vault-font: var(--font, "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif);
  --vault-name-color: var(--headers, #aa3333);
  --vault-name-font-size: 20px;
  --vault-name-font-weight: var(--font-bold, 700);
  --vault-profile-color: var(--text-normal, #475569);
  --vault-profile-color-hover: var(--vault-profile-color, #475569);
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --background-modifier-hover: var(--sidebar-tab-background-color, rgba(212, 47, 47, 0.4));
  --bases-table-header-background: var(--background-secondary, black);
  --hr-icon-background: var(--side-bar, black);
  --icon-color-focused: var(--sidebar-icon-color-active, #475569);
  --icon-size: var(--sidebar-tab-icon-size, 17px);
  --icon-stroke: var(--sidebar-tab-icon-stroke, 1.75px);
  --tab-text-color: var(--text, #1b262f);
  --tab-text-color-active: var(--text-dl, #475569);
  --tab-text-color-focused: var(--text, #1b262f);
  --tab-text-color-focused-active: var(--text-dl, #475569);
  --tab-text-color-focused-active-current: var(--sidebar-icon-color-active, #475569);
  background-color: var(--tab-container-background, rgb(0, 0, 0));
  color: var(--text-dl, rgb(71, 85, 105));
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(7, 11, 17));
  color: var(--file-header-color-active, rgb(71, 85, 105));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(0, 0, 0));
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 0, 0);
  border-right-width: 2px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, black);
  --sidebar-icon-color: var(--soft-text, #475569);
  --sidebar-icon-color-active: var(--lite-accent, #e5ebee);
  --sidebar-tab-background-color: var(--note, #04070c);
  --sidebar-tab-padding: 0 var(--size-4-4);
  --tab-container-background: var(--outer-bar, black);
  --tab-radius: var(--radius-m, 0);
  --tab-radius-active: var(--radius-m, 0);
  --tab-text-color-hover: var(--text-on-accent, #475569);
  --titlebar-background: var(--outer-bar, #070b11);
  background-color: var(--td, rgb(0, 0, 0));
  border-left-color: rgb(0, 0, 0);
  color: var(--text-on-accent, rgb(71, 85, 105));
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered > h1 {
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 16px;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: var(--h1-weight, 700);
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #070b11;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(56, 11, 19);
  border-bottom-color: rgb(170, 51, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(170, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(170, 51, 51);
  border-right-width: 0px;
  border-top-color: rgb(170, 51, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--header-arrow-icon-color, rgb(170, 51, 51));
  content: "";
  font-family: var(--h1-font, "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif);
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
  color: var(--bold-color, rgb(71, 85, 105));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(71, 85, 105));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(71, 85, 105));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(71, 85, 105));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(60, 8, 8, 0.46));
  color: var(--text-normal, rgb(71, 85, 105));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body del {
  color: var(--strikethrough-color, rgb(71, 85, 105));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration: line-through 1px;
  text-decoration-color: var(--strikethrough-line-color, rgb(71, 85, 105));
  text-decoration-thickness: var(--strikethrough-line-thickness, 1px);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(71, 85, 105));
  font-size: 15px;
  font-weight: 600;
}

html[saved-theme="dark"] body h2 {
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 16px;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: var(--headers, #4e5b6f);
  --collapse-icon-color-collapsed: var(--text-dl, #1b262f);
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: var(--h2-weight, 700);
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
  --h1-background: var(--illusion-h1-background, transparent);
  --h1-border-color: #aa3333;
  --h1-border-left-color: #380b13;
  --h1-border-line-color: #380b13;
  --h1-border-line-height: var(--illusion-border-line-height, 4px);
  --h1-border-right-color: #380b13;
  --h1-color: var(--illusion-header-text, #aa3333);
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: var(--illusion-header-padding, 0);
  --h1-shadow: var(--illusion-box-shadow, transparent);
  --h1-text-align: start;
  --h2-background: var(--illusion-h2-background, transparent);
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: var(--illusion-border-line-height, 4px);
  --h2-border-right-color: #380b13;
  --h2-color: var(--illusion-header-text, #aa3333);
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h2-padding: var(--illusion-header-padding, 0);
  --h2-shadow: var(--illusion-box-shadow, transparent);
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: var(--illusion-h3-background, transparent);
  --h3-border-color: #571a1a;
  --h3-border-left-color: #380b13;
  --h3-border-line-color: #380b13;
  --h3-border-line-height: var(--illusion-border-line-height, 4px);
  --h3-border-right-color: #380b13;
  --h3-color: var(--illusion-header-text, #aa3333);
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h3-padding: var(--illusion-header-padding, 0);
  --h3-shadow: var(--illusion-box-shadow, transparent);
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: var(--illusion-h4-background, transparent);
  --h4-border-color: #380b13;
  --h4-border-left-color: #380b13;
  --h4-border-line-color: #380b13;
  --h4-border-line-height: var(--illusion-border-line-height, 4px);
  --h4-border-right-color: #380b13;
  --h4-color: var(--illusion-header-text, #aa3333);
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h4-padding: var(--illusion-header-padding, 0);
  --h4-shadow: var(--illusion-box-shadow, transparent);
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: var(--illusion-h5-background, transparent);
  --h5-border-color: #475569;
  --h5-border-left-color: #380b13;
  --h5-border-line-color: #380b13;
  --h5-border-line-height: var(--illusion-border-line-height, 4px);
  --h5-border-right-color: #380b13;
  --h5-color: var(--illusion-header-text, #aa3333);
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
  --h5-padding: var(--illusion-header-padding, 0);
  --h5-shadow: var(--illusion-box-shadow, transparent);
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: var(--illusion-h6-background, transparent);
  --h6-border-color: #04070c;
  --h6-border-left-color: #380b13;
  --h6-border-line-color: #380b13;
  --h6-border-line-height: var(--illusion-border-line-height, 4px);
  --h6-border-right-color: #380b13;
  --h6-color: var(--illusion-header-text, #aa3333);
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
  --h6-padding: var(--illusion-header-padding, 0);
  --h6-shadow: var(--illusion-box-shadow, transparent);
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
  --header-arrow-icon-color: var(--text-dl, #4e5b6f);
  --header-border-line-color: #380b13;
  --heading-formatting: var(--illusion-header-text, #1b262f);
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #070b11;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(56, 11, 19);
  border-bottom-color: rgb(170, 51, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(170, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(170, 51, 51);
  border-right-width: 0px;
  border-top-color: rgb(170, 51, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(170, 51, 51));
  content: "";
  font-family: var(--h2-font, "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif);
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
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 16px;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: var(--headers, #4e5b6f);
  --collapse-icon-color-collapsed: var(--text-dl, #1b262f);
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: var(--h3-weight, 700);
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
  --h1-background: var(--illusion-h1-background, transparent);
  --h1-border-color: #aa3333;
  --h1-border-left-color: #380b13;
  --h1-border-line-color: #380b13;
  --h1-border-line-height: var(--illusion-border-line-height, 4px);
  --h1-border-right-color: #380b13;
  --h1-color: var(--illusion-header-text, #aa3333);
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: var(--illusion-header-padding, 0);
  --h1-shadow: var(--illusion-box-shadow, transparent);
  --h1-text-align: start;
  --h2-background: var(--illusion-h2-background, transparent);
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: var(--illusion-border-line-height, 4px);
  --h2-border-right-color: #380b13;
  --h2-color: var(--illusion-header-text, #aa3333);
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h2-padding: var(--illusion-header-padding, 0);
  --h2-shadow: var(--illusion-box-shadow, transparent);
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: var(--illusion-h3-background, transparent);
  --h3-border-color: #571a1a;
  --h3-border-left-color: #380b13;
  --h3-border-line-color: #380b13;
  --h3-border-line-height: var(--illusion-border-line-height, 4px);
  --h3-border-right-color: #380b13;
  --h3-color: var(--illusion-header-text, #aa3333);
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h3-padding: var(--illusion-header-padding, 0);
  --h3-shadow: var(--illusion-box-shadow, transparent);
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: var(--illusion-h4-background, transparent);
  --h4-border-color: #380b13;
  --h4-border-left-color: #380b13;
  --h4-border-line-color: #380b13;
  --h4-border-line-height: var(--illusion-border-line-height, 4px);
  --h4-border-right-color: #380b13;
  --h4-color: var(--illusion-header-text, #aa3333);
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h4-padding: var(--illusion-header-padding, 0);
  --h4-shadow: var(--illusion-box-shadow, transparent);
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: var(--illusion-h5-background, transparent);
  --h5-border-color: #475569;
  --h5-border-left-color: #380b13;
  --h5-border-line-color: #380b13;
  --h5-border-line-height: var(--illusion-border-line-height, 4px);
  --h5-border-right-color: #380b13;
  --h5-color: var(--illusion-header-text, #aa3333);
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
  --h5-padding: var(--illusion-header-padding, 0);
  --h5-shadow: var(--illusion-box-shadow, transparent);
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: var(--illusion-h6-background, transparent);
  --h6-border-color: #04070c;
  --h6-border-left-color: #380b13;
  --h6-border-line-color: #380b13;
  --h6-border-line-height: var(--illusion-border-line-height, 4px);
  --h6-border-right-color: #380b13;
  --h6-color: var(--illusion-header-text, #aa3333);
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
  --h6-padding: var(--illusion-header-padding, 0);
  --h6-shadow: var(--illusion-box-shadow, transparent);
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
  --header-arrow-icon-color: var(--text-dl, #4e5b6f);
  --header-border-line-color: #380b13;
  --heading-formatting: var(--illusion-header-text, #1b262f);
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #070b11;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(56, 11, 19);
  border-bottom-color: rgb(170, 51, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(170, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(170, 51, 51);
  border-right-width: 0px;
  border-top-color: rgb(170, 51, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(170, 51, 51));
  content: "";
  font-family: var(--h3-font, "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif);
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
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 16px;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: var(--headers, #4e5b6f);
  --collapse-icon-color-collapsed: var(--text-dl, #1b262f);
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: var(--h4-weight, 700);
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
  --h1-background: var(--illusion-h1-background, transparent);
  --h1-border-color: #aa3333;
  --h1-border-left-color: #380b13;
  --h1-border-line-color: #380b13;
  --h1-border-line-height: var(--illusion-border-line-height, 4px);
  --h1-border-right-color: #380b13;
  --h1-color: var(--illusion-header-text, #aa3333);
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: var(--illusion-header-padding, 0);
  --h1-shadow: var(--illusion-box-shadow, transparent);
  --h1-text-align: start;
  --h2-background: var(--illusion-h2-background, transparent);
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: var(--illusion-border-line-height, 4px);
  --h2-border-right-color: #380b13;
  --h2-color: var(--illusion-header-text, #aa3333);
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h2-padding: var(--illusion-header-padding, 0);
  --h2-shadow: var(--illusion-box-shadow, transparent);
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: var(--illusion-h3-background, transparent);
  --h3-border-color: #571a1a;
  --h3-border-left-color: #380b13;
  --h3-border-line-color: #380b13;
  --h3-border-line-height: var(--illusion-border-line-height, 4px);
  --h3-border-right-color: #380b13;
  --h3-color: var(--illusion-header-text, #aa3333);
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h3-padding: var(--illusion-header-padding, 0);
  --h3-shadow: var(--illusion-box-shadow, transparent);
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: var(--illusion-h4-background, transparent);
  --h4-border-color: #380b13;
  --h4-border-left-color: #380b13;
  --h4-border-line-color: #380b13;
  --h4-border-line-height: var(--illusion-border-line-height, 4px);
  --h4-border-right-color: #380b13;
  --h4-color: var(--illusion-header-text, #aa3333);
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h4-padding: var(--illusion-header-padding, 0);
  --h4-shadow: var(--illusion-box-shadow, transparent);
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: var(--illusion-h5-background, transparent);
  --h5-border-color: #475569;
  --h5-border-left-color: #380b13;
  --h5-border-line-color: #380b13;
  --h5-border-line-height: var(--illusion-border-line-height, 4px);
  --h5-border-right-color: #380b13;
  --h5-color: var(--illusion-header-text, #aa3333);
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
  --h5-padding: var(--illusion-header-padding, 0);
  --h5-shadow: var(--illusion-box-shadow, transparent);
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: var(--illusion-h6-background, transparent);
  --h6-border-color: #04070c;
  --h6-border-left-color: #380b13;
  --h6-border-line-color: #380b13;
  --h6-border-line-height: var(--illusion-border-line-height, 4px);
  --h6-border-right-color: #380b13;
  --h6-color: var(--illusion-header-text, #aa3333);
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
  --h6-padding: var(--illusion-header-padding, 0);
  --h6-shadow: var(--illusion-box-shadow, transparent);
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
  --header-arrow-icon-color: var(--text-dl, #4e5b6f);
  --header-border-line-color: #380b13;
  --heading-formatting: var(--illusion-header-text, #1b262f);
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #070b11;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(56, 11, 19);
  border-bottom-color: rgb(170, 51, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(170, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(170, 51, 51);
  border-right-width: 0px;
  border-top-color: rgb(170, 51, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(170, 51, 51));
  content: "";
  font-family: var(--h4-font, "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif);
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
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 16px;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: var(--headers, #4e5b6f);
  --collapse-icon-color-collapsed: var(--text-dl, #1b262f);
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: var(--h5-weight, 700);
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
  --h1-background: var(--illusion-h1-background, transparent);
  --h1-border-color: #aa3333;
  --h1-border-left-color: #380b13;
  --h1-border-line-color: #380b13;
  --h1-border-line-height: var(--illusion-border-line-height, 4px);
  --h1-border-right-color: #380b13;
  --h1-color: var(--illusion-header-text, #aa3333);
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: var(--illusion-header-padding, 0);
  --h1-shadow: var(--illusion-box-shadow, transparent);
  --h1-text-align: start;
  --h2-background: var(--illusion-h2-background, transparent);
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: var(--illusion-border-line-height, 4px);
  --h2-border-right-color: #380b13;
  --h2-color: var(--illusion-header-text, #aa3333);
  --h2-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h2-padding: var(--illusion-header-padding, 0);
  --h2-shadow: var(--illusion-box-shadow, transparent);
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 700;
  --h3-background: var(--illusion-h3-background, transparent);
  --h3-border-color: #571a1a;
  --h3-border-left-color: #380b13;
  --h3-border-line-color: #380b13;
  --h3-border-line-height: var(--illusion-border-line-height, 4px);
  --h3-border-right-color: #380b13;
  --h3-color: var(--illusion-header-text, #aa3333);
  --h3-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h3-padding: var(--illusion-header-padding, 0);
  --h3-shadow: var(--illusion-box-shadow, transparent);
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 700;
  --h4-background: var(--illusion-h4-background, transparent);
  --h4-border-color: #380b13;
  --h4-border-left-color: #380b13;
  --h4-border-line-color: #380b13;
  --h4-border-line-height: var(--illusion-border-line-height, 4px);
  --h4-border-right-color: #380b13;
  --h4-color: var(--illusion-header-text, #aa3333);
  --h4-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h4-padding: var(--illusion-header-padding, 0);
  --h4-shadow: var(--illusion-box-shadow, transparent);
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 700;
  --h5-background: var(--illusion-h5-background, transparent);
  --h5-border-color: #475569;
  --h5-border-left-color: #380b13;
  --h5-border-line-color: #380b13;
  --h5-border-line-height: var(--illusion-border-line-height, 4px);
  --h5-border-right-color: #380b13;
  --h5-color: var(--illusion-header-text, #aa3333);
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
  --h5-padding: var(--illusion-header-padding, 0);
  --h5-shadow: var(--illusion-box-shadow, transparent);
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: var(--illusion-h6-background, transparent);
  --h6-border-color: #04070c;
  --h6-border-left-color: #380b13;
  --h6-border-line-color: #380b13;
  --h6-border-line-height: var(--illusion-border-line-height, 4px);
  --h6-border-right-color: #380b13;
  --h6-color: var(--illusion-header-text, #aa3333);
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
  --h6-padding: var(--illusion-header-padding, 0);
  --h6-shadow: var(--illusion-box-shadow, transparent);
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
  --header-arrow-icon-color: var(--text-dl, #4e5b6f);
  --header-border-line-color: #380b13;
  --heading-formatting: var(--illusion-header-text, #1b262f);
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #070b11;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(56, 11, 19);
  border-bottom-color: rgb(170, 51, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(170, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(170, 51, 51);
  border-right-width: 0px;
  border-top-color: rgb(170, 51, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(170, 51, 51));
  content: "";
  font-family: var(--h5-font, "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif);
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
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 16px;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: var(--h6-weight, 700);
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #070b11;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgb(56, 11, 19);
  border-bottom-color: rgb(170, 51, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(170, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(170, 51, 51);
  border-right-width: 0px;
  border-top-color: rgb(170, 51, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(170, 51, 51));
  content: "";
  font-family: var(--h6-font, "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif);
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
  border-color: rgb(128, 50, 50);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgba(0, 0, 0, 0));
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(128, 50, 50));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(128, 50, 50) none 0px;
  text-decoration-color: rgb(128, 50, 50);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 16px;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: var(--link-weight, 400);
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --resizer-size: 20px;
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #070b11;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --zoom-multiplier: 1;
  background-color: var(--link-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(197, 87, 91);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(197, 87, 91);
  border-left-width: 0px;
  border-right-color: rgb(197, 87, 91);
  border-right-width: 0px;
  border-top-color: rgb(197, 87, 91);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--link-external-color, rgb(197, 87, 91));
  content: "\\e809";
  font-family: var(--link-external-font, its);
  font-weight: var(--link-weight, 100);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(197, 87, 91) none 0px;
  padding-bottom: 0px;
  padding-left: 2px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration-color: rgb(197, 87, 91);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  background-color: var(--link-background, rgba(0, 0, 0, 0));
  color: var(--link-color, rgb(197, 87, 91));
  font-family: var(--link-font, "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  outline: rgb(197, 87, 91) none 0px;
  text-decoration-color: rgb(197, 87, 91);
}

html[saved-theme="dark"] body a.internal-link.broken {
  background-color: var(--link-background, rgba(0, 0, 0, 0));
  color: var(--link-unresolved-color, rgb(27, 38, 47));
  font-family: var(--link-font, "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  outline: rgb(27, 38, 47) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(186, 64, 64, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body dt {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(78, 91, 111));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(0, 0, 0));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body table {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgba(3, 0, 0, 0.33));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(7, 11, 17);
  border-left-color: rgb(7, 11, 17);
  border-right-color: rgb(7, 11, 17);
  border-top-color: rgb(7, 11, 17);
  color: var(--table-text-color, rgb(71, 85, 105));
}

html[saved-theme="dark"] body th {
  --latex-color: var(--table-header-color, #e5ebee);
  border-bottom-color: rgb(7, 11, 17);
  border-left-color: rgb(7, 11, 17);
  border-right-color: rgb(7, 11, 17);
  border-top-color: rgb(7, 11, 17);
  border-top-left-radius: var(--radius-s, 0px);
  color: var(--table-header-color, rgb(229, 235, 238));
  font-weight: var(--table-header-weight, 700);
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgb(87, 26, 26));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(4, 7, 12));
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--code-normal, rgb(128, 50, 50));
  font-family: var(--font-monospace, "Fira Code", "Fira Code Medium", "Source Code Pro", monospace);
  padding-bottom: 2.16px;
  padding-left: 4.32px;
  padding-right: 4.32px;
  padding-top: 2.16px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(4, 7, 12));
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #04070c);
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(170, 51, 51);
  border-left-color: rgb(170, 51, 51);
  border-right-color: rgb(170, 51, 51);
  border-top-color: rgb(170, 51, 51);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--outer-bar, rgb(0, 0, 0));
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: var(--callout-cards-notion-padding, 8px);
  padding-right: var(--callout-cards-notion-padding, 8px);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(71, 85, 105);
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(4, 7, 12);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
  padding-left: var(--callout-cards-notion-padding, 0px);
  padding-right: var(--callout-cards-notion-padding, 0px);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-style: solid;
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
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

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(136, 94, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(248, 114, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(78, 91, 111);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(71, 85, 105);
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
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(248, 114, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(133, 91, 65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(71, 85, 105);
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
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(79, 165, 79);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(78, 91, 111);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(230, 129, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(71, 85, 105);
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
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(27, 38, 47);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(207, 67, 67);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(194, 42, 42);
  text-decoration-color: rgb(194, 42, 42);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(62, 69, 82);
  text-decoration-color: rgb(62, 69, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(128, 50, 50);
  text-decoration-color: rgb(128, 50, 50);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
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
  color: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
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
  color: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(71, 85, 105);
  text-decoration-color: rgb(71, 85, 105);
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
  color: rgb(128, 50, 50);
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
  color: rgb(71, 85, 105);
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
  color: rgb(197, 87, 91);
  content: "\\ec01";
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(71, 85, 105));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(71, 85, 105);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(71, 85, 105));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(71, 85, 105);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="aside"] {
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, "");
  --callout-color-opacity: 20%;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-margin: 0 -1.2em 0 5px;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 12px 16px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: var(--aside-bg, var(--background-secondary));
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(71, 85, 105);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(71, 85, 105);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0.3em 0.3em 0 var(--accent, var(--background-modifier-box-shadow)), 0 0 0 1px var(--accent, var(--background-modifier-box-shadow));
  color: rgb(71, 85, 105);
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
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-border-width: 0;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, transparent);
  --callout-color-opacity: 20%;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 12px 16px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(71, 85, 105);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(71, 85, 105);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(71, 85, 105);
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
  --callout-color: var(--callout-bug, 251, 70, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(71, 85, 105));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(71, 85, 105);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="caption"] {
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-color-opacity: 20%;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 12px 16px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(71, 85, 105);
  border-left-width: 0px;
  border-right-color: rgb(71, 85, 105);
  border-right-width: 0px;
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(71, 85, 105);
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
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-color-opacity: 20%;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 12px 16px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
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
  color: rgb(71, 85, 105);
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
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-cards-columns: 3;
  --callout-cards-gap: 5px;
  --callout-color: var(--callout-default, transparent);
  --callout-color-opacity: 20%;
  --callout-content-padding: 0px;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: var(--outer-bar, var(--background-secondary));
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(71, 85, 105);
  border-left-width: 0px;
  border-right-color: rgb(71, 85, 105);
  border-right-width: 0px;
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(71, 85, 105);
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
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color-opacity: 20%;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 0;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --root-list-spacing: 0;
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(71, 85, 105);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(71, 85, 105);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(71, 85, 105);
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
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--text-normal, #475569);
  --callout-color-opacity: 20%;
  --callout-column-gap: 10px;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 12px 16px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --columns: 2;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(71, 85, 105);
  border-left-width: 0px;
  border-right-color: rgb(71, 85, 105);
  border-right-width: 0px;
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(71, 85, 105);
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
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--text-normal, #475569);
  --callout-color-opacity: 20%;
  --callout-column-gap: 10px;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 12px 16px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --columns: 2;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(71, 85, 105);
  border-left-width: 0px;
  border-right-color: rgb(71, 85, 105);
  border-right-width: 0px;
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(71, 85, 105);
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
  --callout-color: var(--callout-error, 251, 70, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(71, 85, 105));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(71, 85, 105);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(71, 85, 105));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(71, 85, 105);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(71, 85, 105));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(71, 85, 105);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="grid"] {
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-color-opacity: 20%;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(71, 85, 105);
  border-left-width: 0px;
  border-right-color: rgb(71, 85, 105);
  border-right-width: 0px;
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(71, 85, 105);
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
  --callout-color: var(--callout-info, 2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(71, 85, 105));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(71, 85, 105);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="infobox"] {
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--note, var(--background-primary));
  --callout-color-opacity: 20%;
  --callout-content-padding: 5px;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
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
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-line-height: 0;
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 0;
  --h2-border-right-color: #380b13;
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
  --h3-border-line-height: 0;
  --h3-border-right-color: #380b13;
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
  --h4-border-line-height: 0;
  --h4-border-right-color: #380b13;
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
  --h5-border-line-height: 0;
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #04070c;
  --h6-border-left-color: #380b13;
  --h6-border-line-color: #380b13;
  --h6-border-line-height: 0;
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(71, 85, 105);
  border-left-width: 0px;
  border-right-color: rgb(71, 85, 105);
  border-right-width: 0px;
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(71, 85, 105);
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
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color-opacity: 20%;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 0;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --item-outline: 0 0 0 1px var(--outline, var(--background-modifier-border));
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --lane-width: 250px;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(71, 85, 105);
  border-left-width: 0px;
  border-right-color: rgb(71, 85, 105);
  border-right-width: 0px;
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(71, 85, 105);
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
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 115, 167, 202);
  --callout-color-opacity: 20%;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 12px 16px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
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
  color: rgb(71, 85, 105);
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
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: rgb(var(--callout-color));
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-border-width: 2px;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 82, 139, 212);
  --callout-color-opacity: 20%;
  --callout-content-padding: 0px 10px 10px;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 12px 16px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-shadow: 0px 0px 0px 1px var(--outline);
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-padding: 5px;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
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
  color: rgb(71, 85, 105);
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
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(71, 85, 105));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(71, 85, 105);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(71, 85, 105));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(71, 85, 105);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, hsl(0, 49%, 49%));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(71, 85, 105);
  border-left-width: 4px;
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(71, 85, 105));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(71, 85, 105);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="quotes"] {
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-color-opacity: 20%;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-med-small: 50%;
  --callout-med-tall: 80%;
  --callout-medium: 60%;
  --callout-micro: 10%;
  --callout-orange: 230, 129, 63;
  --callout-padding: 12px 16px;
  --callout-pink: 227, 107, 167;
  --callout-plain: transparent;
  --callout-purple: 153, 97, 218;
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
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
  color: rgb(71, 85, 105);
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
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 193, 67, 67);
  --callout-color-opacity: 20%;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
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
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
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
  color: rgb(71, 85, 105);
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
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-border-color: var(--hr, var(--hr-color));
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color-opacity: 20%;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
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
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-left-color: rgb(71, 85, 105);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(71, 85, 105);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 5px;
  box-shadow: var(--shadow-l), 0 0 20px var(--outline, var(--hr-color));
  color: rgb(71, 85, 105);
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
  --callout-color: var(--callout-success, 68, 207, 110);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(71, 85, 105));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(71, 85, 105);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="timeline"] {
  --accent2: #475569;
  --background-modifier-active-hover: #04070c;
  --background-modifier-border: #380b13;
  --background-modifier-border-focus: #803232;
  --background-modifier-border-hover: #1b262f;
  --background-modifier-cover: #03000054;
  --background-modifier-error: #772d2d;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #03000054;
  --background-modifier-form-field-hover: #03000054;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #04070c;
  --background-modifier-success: #32603e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #070b11;
  --background-primary-alt: #270f0f;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg: #1b262f;
  --blockquote-background-color: black;
  --blockquote-border-color: #1b262f;
  --blockquote-color: #475569;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blur-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --box-border: 2px solid black;
  --box-border-m: 3px solid black;
  --box-border-s: 1px solid black;
  --bttn: #04070c;
  --bullet-font: "its";
  --button-background: #04070c;
  --button-background-hover: #1b262f;
  --button-border: #04070c;
  --button-border-radius: 0;
  --button-corner-shape: round;
  --button-radius: 0;
  --button-text: #e5ebee;
  --c-timeline: calc(50% - 2px);
  --callout-black: 0, 0, 0;
  --callout-blend-mode: normal;
  --callout-blue: 82, 139, 212;
  --callout-brown: 161, 106, 73;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-color-opacity: 20%;
  --callout-content-background: var(--callout-background, rgb(var(--callout-color), 0.1));
  --callout-content-padding: 10px;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-gray: 166, 189, 197;
  --callout-green: 86, 179, 117;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
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
  --callout-question: 233, 151, 63;
  --callout-radius: 0;
  --callout-red: 193, 67, 67;
  --callout-small: 30%;
  --callout-small-med: 40%;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tall: 95%;
  --callout-tiny: 20%;
  --callout-tip: 83, 223, 221;
  --callout-title-padding: 10px;
  --callout-title-weight: 900;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --callout-white: 256, 256, 256;
  --callout-yellow: 208, 181, 48;
  --canvas-background: #070b11;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0;
  --canvas-dot-pattern: #363636;
  --caret-color: #475569;
  --checkbox-border-color: #803232;
  --checkbox-border-color-hover: #04070c;
  --checkbox-color: #803232;
  --checkbox-color-hover: #04070c;
  --checkbox-marker-color: #070b11;
  --checkbox-radius: 0;
  --checkbox-size: 16px;
  --checklist-done-color: #1b262f;
  --clickable-icon-radius: 0;
  --code-background: #04070c;
  --code-bg: #04070c;
  --code-border-color: #380b13;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #803232;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #803232;
  --code-radius: 0;
  --code-shadow: 0 2px 0 black;
  --code-size: .90em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-text: #803232;
  --code-value: #a882ff;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #1b262f;
  --color-accent: hsl(0, 49%, 49%);
  --color-accent-1: hsl(-3, 49.98%, 56.35%);
  --color-accent-2: hsl(-5, 51.45%, 63.21%);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #04070c;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: black;
  --dataview-th-border-bottom: 2px solid #aa3333;
  --dataview-th-color: #aa3333;
  --dataview-th-count-color: #aa3333;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --dataview-th-font-weight: 700;
  --divider-color: black;
  --divider-color-hover: #803232;
  --divider-vertical-height: 100%;
  --dropdown-background: black;
  --dropdown-background-hover: #1b262f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fg: #aa3333;
  --flair-background: black;
  --flair-color: #475569;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --folder: #aa3333;
  --folder-font: "its";
  --folder-icon-color: #aa3333;
  --folder-icon-open-color: #e05858;
  --folder-open-text-color: #475569;
  --folder-text-color: #475569;
  --folder-weight-hover: 700;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-print: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, '??', '??', 'Arial';
  --font-print-override: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
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
  --h1-border-right-color: #380b13;
  --h1-color: #aa3333;
  --h1-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-text-align: start;
  --h2-background: transparent;
  --h2-border-color: #803232;
  --h2-border-left-color: #380b13;
  --h2-border-line-color: #380b13;
  --h2-border-line-height: 4px;
  --h2-border-right-color: #380b13;
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
  --h3-border-right-color: #380b13;
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
  --h4-border-right-color: #380b13;
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
  --h5-border-right-color: #380b13;
  --h5-color: #aa3333;
  --h5-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h5-line-height: 1.5;
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
  --h6-border-right-color: #380b13;
  --h6-color: #aa3333;
  --h6-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --h6-line-height: 1.5;
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
  --header-border-line-color: #380b13;
  --heading-formatting: #1b262f;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --hr-color: #571a1a;
  --hr-icon-background: #070b11;
  --hr-icon-color: #aa3333;
  --hr-icon-font: "its";
  --hvr2: rgba(139, 6, 6, 0.4);
  --i-at: #803232;
  --illusion-box-shadow: 5px 5px 0 black;
  --illusion-h1-background: #aa3333;
  --illusion-h2-background: #803232;
  --illusion-h3-background: #571a1a;
  --illusion-h4-background: #380b13;
  --illusion-h5-background: #475569;
  --illusion-h6-background: #04070c;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-text: #e5ebee;
  --image-border-background: #03000054;
  --image-border-color: #380b13;
  --initiative-tracker-border: #571a1a;
  --interactive-accent: #04070c;
  --interactive-accent-hover: #1b262f;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #1b262f;
  --interactive-normal: black;
  --kanban-button-background: #04070c;
  --kanban-button-shadow: 2px 2px 0 black;
  --kanban-card-border: 2px solid black;
  --kanban-card-metadata-background: #070b11;
  --kanban-card-text-color: #475569;
  --kanban-card-title-background: #070b11;
  --kanban-card-title-border: 0 1px 0 black;
  --kanban-lane-background: #04070c;
  --kanban-lane-border: 3px solid black;
  --kanban-lane-box-shadow: 2px 2px 0 black;
  --kanban-link-color: #c5575b;
  --kanban-tag-background: #380b13;
  --latex-color: #c94d4d;
  --latex-format-color: #1b262f;
  --latex-syntax-color: #803232;
  --lines: #571a1a;
  --link-background-hover: transparent;
  --link-color: #c5575b;
  --link-color-hover: #c94d4d;
  --link-external-color: #c5575b;
  --link-external-color-hover: #475569;
  --link-unresolved-color: #1b262f;
  --link-unresolved-decoration-color: hsla(0, 49%, 49%, 0.3);
  --link-weight: 400;
  --list-bullet-box-shadow-color: #380b13;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-color-1: #571a1a;
  --list-color-2: #571a1a;
  --list-color-3: #571a1a;
  --list-color-4: #571a1a;
  --list-color-5: #571a1a;
  --list-color-6: #571a1a;
  --list-indent: 25px;
  --list-numbered-color: #c94d4d;
  --menu-background: black;
  --menu-border-color: #1b262f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 black;
  --message-border-color: black;
  --message-box-shadow: 2px 2px 0 black;
  --message-color: #e5ebee;
  --micro: 50px;
  --note-title-border-color: #aa3333;
  --outline: black;
  --pane-background: #070b11;
  --pdf-background: #070b11;
  --pdf-page-background: #070b11;
  --pdf-shadow: 0 0 0 1px #380b13;
  --pdf-sidebar-background: #070b11;
  --pdf-thumbnail-shadow: 0 0 0 1px #380b13;
  --popover-background: #070b11;
  --popover-border: 3px solid black;
  --progress: #803232;
  --progress-bg: #1b262f;
  --r-heading-color: #aa3333;
  --r-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --r-heading-font-weight: 700;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #c94d4d;
  --radius-h: 0;
  --radius-l: 0;
  --radius-m: 0;
  --radius-xl: 0;
  --raised-background: color-mix(in srgb, black 65%, transparent) linear-gradient(black, color-mix(in srgb, black 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #1b262f;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #380b13;
  --scrollbar-track-bg: #070b11;
  --search-border: 2px solid black;
  --search-box-shadow: 2px 2px 0 black;
  --search-clear-button-color: #803232;
  --search-icon-color: #803232;
  --search-result-background: #070b11;
  --setting-group-heading-color: #475569;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-item-alt-background-hover: #03000054;
  --setting-item-background-hover: rgba(60, 8, 8, 0.46);
  --setting-item-border-color: #380b13;
  --setting-item-heading-border: 2px solid #aa3333;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #03000054;
  --setting-items-background: transparent;
  --setting-items-border-color: #380b13;
  --setting-items-padding: 20px;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 black;
  --shadow-m: 3px 3px 0 black;
  --shadow-ml: 4px 4px 0 black;
  --shadow-s: 2px 2px 0 black;
  --shiki-active-tab-border-color: #803232;
  --shiki-code-background: #04070c;
  --shiki-code-block-border-radius: 0;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #4e5b6f;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #803232;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #803232;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #380b13;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #4e5b6f;
  --shiki-gutter-text-color-highlight: #803232;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #803232;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #4e5b6f;
  --shiki-tooltip-background: #04070c;
  --side-bar: black;
  --side-bar-bg: black;
  --slide-background: #070b11;
  --soft-text: #803232;
  --statblock-alt: #03000054;
  --statblock-background-color: #070b11;
  --statblock-bar-border-color: #803232;
  --statblock-bar-color: #803232;
  --statblock-border-color: #571a1a;
  --statblock-box-shadow-color: black;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #475569;
  --statblock-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-heading-font-color: #aa3333;
  --statblock-heading-font-weight: 700;
  --statblock-image-border-color: #571a1a;
  --statblock-primary-color: #475569;
  --statblock-property-font-color: #475569;
  --statblock-property-name-font-color: #aa3333;
  --statblock-rule-color: #803232;
  --statblock-section-heading-border-color: #380b13;
  --statblock-section-heading-font: "Calisto MT", "Palatino Black", "Book Antiqua", "Georgia", "Suez One", serif;
  --statblock-section-heading-font-color: #577093;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --style-settings-heading-background-hover: #04070c;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --suggestion-background: #070b11;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background: black;
  --tab-background-active: #070b11;
  --tab-curve: 0;
  --tab-divider-color: #571a1a;
  --tab-outline-color: #803232;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 40px;
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
  --table-add-button-background: #04070c;
  --table-add-button-border-color: #070b11;
  --table-add-button-border-width: 1px;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #03000054;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #04070c;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #571a1a;
  --table-header-background-hover: #803232;
  --table-header-border-color: #070b11;
  --table-header-border-width: 1px;
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
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 49%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #04070c;
  --table-selection-border-radius: 0;
  --table-text-size: 16px;
  --tag: #380b13;
  --tag-background: #380b13;
  --tag-background-color: #380b13;
  --tag-background-hover: #803232;
  --tag-border-color: #380b13;
  --tag-border-color-hover: #803232;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-radius: 0;
  --tag-size: .90em;
  --text-accent: #c5575b;
  --text-accent-hover: #475569;
  --text-error: #fb464c;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(60, 8, 8, 0.46);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #803232;
  --text-normal: #475569;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(139, 6, 6, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --th: #571a1a;
  --th-text: #e5ebee;
  --theme-rainbow-1: #aa3333;
  --theme-rainbow-2: #803232;
  --theme-rainbow-3: #571a1a;
  --theme-rainbow-4: #380b13;
  --theme-rainbow-5: #475569;
  --theme-rainbow-6: #04070c;
  --timeline-border: rgb(var(--callout-title, var(--callout-color)));
  --timeline-shadow: var(--outline, var(--background-modifier-box-shadow));
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(71, 85, 105);
  border-left-width: 0px;
  border-right-color: rgb(71, 85, 105);
  border-right-width: 0px;
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(71, 85, 105);
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
  --callout-color: var(--callout-tip, 83, 223, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(71, 85, 105));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(71, 85, 105);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(71, 85, 105));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(71, 85, 105);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: "";
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(71, 85, 105));
  font-weight: var(--font-weight, 900);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(71, 85, 105);
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
  background-color: rgba(3, 0, 0, 0.33);
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--text-normal, rgb(71, 85, 105));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(7, 11, 17));
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
  box-shadow: var(--shadow-l, rgb(0, 0, 0) 5px 5px 0px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(71, 85, 105) none 0px;
  text-decoration-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(71, 85, 105);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(212, 47, 47, 0.4));
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(212, 47, 47, 0.4));
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(212, 47, 47, 0.4));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, #380b13);
  --pill-background-hover: var(--tag-background-hover, #803232);
  --pill-border-color: var(--tag-border-color, #380b13);
  --pill-border-color-hover: var(--tag-border-color-hover, #803232);
  --pill-color: var(--tag-color, #e5ebee);
  --pill-color-hover: var(--tag-color-hover, #e5ebee);
  --pill-color-remove: var(--tag-color, #e5ebee);
  --pill-color-remove-hover: var(--tag-color-hover, #e5ebee);
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  --pill-padding-x: var(--tag-padding-x, 7px);
  --pill-padding-y: var(--tag-padding-y, 3px);
  --pill-radius: var(--tag-radius, 0);
  background-color: var(--pill-background, rgb(56, 11, 19));
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

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="dark"] body h1 {
  color: var(--header-arrow-icon-color, rgb(170, 51, 51));
  font-family: var(--h1-font, "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(170, 51, 51));
  font-size: var(--inline-title-size, 34px);
}

html[saved-theme="dark"] body h1::after {
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-weight: var(--h1-weight, 700);
  background: rgb(56, 11, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(56, 11, 19);
  border-bottom-color: rgb(170, 51, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(170, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(170, 51, 51);
  border-right-width: 0px;
  border-top-color: rgb(170, 51, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--header-arrow-icon-color, rgb(170, 51, 51));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  width: var(--header-arrow-icon-size, 700px);
}

html[saved-theme="dark"] body h2 {
  --collapse-icon-color: var(--headers, #4e5b6f);
  --collapse-icon-color-collapsed: var(--text-dl, #1b262f);
  --font-weight: var(--h2-weight, 700);
  --h1-background: var(--illusion-h1-background, transparent);
  --h1-border-line-height: var(--illusion-border-line-height, 4px);
  --h1-color: var(--illusion-header-text, #aa3333);
  --h1-padding: var(--illusion-header-padding, 0);
  --h1-shadow: var(--illusion-box-shadow, transparent);
  --h2-background: var(--illusion-h2-background, transparent);
  --h2-border-line-height: var(--illusion-border-line-height, 4px);
  --h2-color: var(--illusion-header-text, #aa3333);
  --h2-padding: var(--illusion-header-padding, 0);
  --h2-shadow: var(--illusion-box-shadow, transparent);
  --h3-background: var(--illusion-h3-background, transparent);
  --h3-border-line-height: var(--illusion-border-line-height, 4px);
  --h3-color: var(--illusion-header-text, #aa3333);
  --h3-padding: var(--illusion-header-padding, 0);
  --h3-shadow: var(--illusion-box-shadow, transparent);
  --h4-background: var(--illusion-h4-background, transparent);
  --h4-border-line-height: var(--illusion-border-line-height, 4px);
  --h4-color: var(--illusion-header-text, #aa3333);
  --h4-padding: var(--illusion-header-padding, 0);
  --h4-shadow: var(--illusion-box-shadow, transparent);
  --h5-background: var(--illusion-h5-background, transparent);
  --h5-border-line-height: var(--illusion-border-line-height, 4px);
  --h5-color: var(--illusion-header-text, #aa3333);
  --h5-padding: var(--illusion-header-padding, 0);
  --h5-shadow: var(--illusion-box-shadow, transparent);
  --h6-background: var(--illusion-h6-background, transparent);
  --h6-border-line-height: var(--illusion-border-line-height, 4px);
  --h6-color: var(--illusion-header-text, #aa3333);
  --h6-padding: var(--illusion-header-padding, 0);
  --h6-shadow: var(--illusion-box-shadow, transparent);
  --header-arrow-icon-color: var(--text-dl, #4e5b6f);
  --heading-formatting: var(--illusion-header-text, #1b262f);
  color: var(--h2-color, rgb(170, 51, 51));
  font-family: var(--h2-font, "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(170, 51, 51));
  font-family: var(--inline-title-font, "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif);
}

html[saved-theme="dark"] body h2::after {
  --collapse-icon-color: var(--headers, #4e5b6f);
  --collapse-icon-color-collapsed: var(--text-dl, #1b262f);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-weight: var(--h2-weight, 700);
  --h1-background: var(--illusion-h1-background, transparent);
  --h1-border-line-height: var(--illusion-border-line-height, 4px);
  --h1-color: var(--illusion-header-text, #aa3333);
  --h1-padding: var(--illusion-header-padding, 0);
  --h1-shadow: var(--illusion-box-shadow, transparent);
  --h2-background: var(--illusion-h2-background, transparent);
  --h2-border-line-height: var(--illusion-border-line-height, 4px);
  --h2-color: var(--illusion-header-text, #aa3333);
  --h2-padding: var(--illusion-header-padding, 0);
  --h2-shadow: var(--illusion-box-shadow, transparent);
  --h3-background: var(--illusion-h3-background, transparent);
  --h3-border-line-height: var(--illusion-border-line-height, 4px);
  --h3-color: var(--illusion-header-text, #aa3333);
  --h3-padding: var(--illusion-header-padding, 0);
  --h3-shadow: var(--illusion-box-shadow, transparent);
  --h4-background: var(--illusion-h4-background, transparent);
  --h4-border-line-height: var(--illusion-border-line-height, 4px);
  --h4-color: var(--illusion-header-text, #aa3333);
  --h4-padding: var(--illusion-header-padding, 0);
  --h4-shadow: var(--illusion-box-shadow, transparent);
  --h5-background: var(--illusion-h5-background, transparent);
  --h5-border-line-height: var(--illusion-border-line-height, 4px);
  --h5-color: var(--illusion-header-text, #aa3333);
  --h5-padding: var(--illusion-header-padding, 0);
  --h5-shadow: var(--illusion-box-shadow, transparent);
  --h6-background: var(--illusion-h6-background, transparent);
  --h6-border-line-height: var(--illusion-border-line-height, 4px);
  --h6-color: var(--illusion-header-text, #aa3333);
  --h6-padding: var(--illusion-header-padding, 0);
  --h6-shadow: var(--illusion-box-shadow, transparent);
  --header-arrow-icon-color: var(--text-dl, #4e5b6f);
  --heading-formatting: var(--illusion-header-text, #1b262f);
  background: rgb(56, 11, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(56, 11, 19);
  border-bottom-color: rgb(170, 51, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(170, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(170, 51, 51);
  border-right-width: 0px;
  border-top-color: rgb(170, 51, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(170, 51, 51));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  width: var(--header-arrow-icon-size, 525.297px);
}

html[saved-theme="dark"] body h3 {
  --collapse-icon-color: var(--headers, #4e5b6f);
  --collapse-icon-color-collapsed: var(--text-dl, #1b262f);
  --font-weight: var(--h3-weight, 700);
  --h1-background: var(--illusion-h1-background, transparent);
  --h1-border-line-height: var(--illusion-border-line-height, 4px);
  --h1-color: var(--illusion-header-text, #aa3333);
  --h1-padding: var(--illusion-header-padding, 0);
  --h1-shadow: var(--illusion-box-shadow, transparent);
  --h2-background: var(--illusion-h2-background, transparent);
  --h2-border-line-height: var(--illusion-border-line-height, 4px);
  --h2-color: var(--illusion-header-text, #aa3333);
  --h2-padding: var(--illusion-header-padding, 0);
  --h2-shadow: var(--illusion-box-shadow, transparent);
  --h3-background: var(--illusion-h3-background, transparent);
  --h3-border-line-height: var(--illusion-border-line-height, 4px);
  --h3-color: var(--illusion-header-text, #aa3333);
  --h3-padding: var(--illusion-header-padding, 0);
  --h3-shadow: var(--illusion-box-shadow, transparent);
  --h4-background: var(--illusion-h4-background, transparent);
  --h4-border-line-height: var(--illusion-border-line-height, 4px);
  --h4-color: var(--illusion-header-text, #aa3333);
  --h4-padding: var(--illusion-header-padding, 0);
  --h4-shadow: var(--illusion-box-shadow, transparent);
  --h5-background: var(--illusion-h5-background, transparent);
  --h5-border-line-height: var(--illusion-border-line-height, 4px);
  --h5-color: var(--illusion-header-text, #aa3333);
  --h5-padding: var(--illusion-header-padding, 0);
  --h5-shadow: var(--illusion-box-shadow, transparent);
  --h6-background: var(--illusion-h6-background, transparent);
  --h6-border-line-height: var(--illusion-border-line-height, 4px);
  --h6-color: var(--illusion-header-text, #aa3333);
  --h6-padding: var(--illusion-header-padding, 0);
  --h6-shadow: var(--illusion-box-shadow, transparent);
  --header-arrow-icon-color: var(--text-dl, #4e5b6f);
  --heading-formatting: var(--illusion-header-text, #1b262f);
  color: var(--h3-color, rgb(170, 51, 51));
  font-family: var(--h3-font, "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif);
}

html[saved-theme="dark"] body h3::after {
  --collapse-icon-color: var(--headers, #4e5b6f);
  --collapse-icon-color-collapsed: var(--text-dl, #1b262f);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-weight: var(--h3-weight, 700);
  --h1-background: var(--illusion-h1-background, transparent);
  --h1-border-line-height: var(--illusion-border-line-height, 4px);
  --h1-color: var(--illusion-header-text, #aa3333);
  --h1-padding: var(--illusion-header-padding, 0);
  --h1-shadow: var(--illusion-box-shadow, transparent);
  --h2-background: var(--illusion-h2-background, transparent);
  --h2-border-line-height: var(--illusion-border-line-height, 4px);
  --h2-color: var(--illusion-header-text, #aa3333);
  --h2-padding: var(--illusion-header-padding, 0);
  --h2-shadow: var(--illusion-box-shadow, transparent);
  --h3-background: var(--illusion-h3-background, transparent);
  --h3-border-line-height: var(--illusion-border-line-height, 4px);
  --h3-color: var(--illusion-header-text, #aa3333);
  --h3-padding: var(--illusion-header-padding, 0);
  --h3-shadow: var(--illusion-box-shadow, transparent);
  --h4-background: var(--illusion-h4-background, transparent);
  --h4-border-line-height: var(--illusion-border-line-height, 4px);
  --h4-color: var(--illusion-header-text, #aa3333);
  --h4-padding: var(--illusion-header-padding, 0);
  --h4-shadow: var(--illusion-box-shadow, transparent);
  --h5-background: var(--illusion-h5-background, transparent);
  --h5-border-line-height: var(--illusion-border-line-height, 4px);
  --h5-color: var(--illusion-header-text, #aa3333);
  --h5-padding: var(--illusion-header-padding, 0);
  --h5-shadow: var(--illusion-box-shadow, transparent);
  --h6-background: var(--illusion-h6-background, transparent);
  --h6-border-line-height: var(--illusion-border-line-height, 4px);
  --h6-color: var(--illusion-header-text, #aa3333);
  --h6-padding: var(--illusion-header-padding, 0);
  --h6-shadow: var(--illusion-box-shadow, transparent);
  --header-arrow-icon-color: var(--text-dl, #4e5b6f);
  --heading-formatting: var(--illusion-header-text, #1b262f);
  background: rgb(56, 11, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(56, 11, 19);
  border-bottom-color: rgb(170, 51, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(170, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(170, 51, 51);
  border-right-width: 0px;
  border-top-color: rgb(170, 51, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(170, 51, 51));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  width: var(--header-arrow-icon-size, 401.688px);
}

html[saved-theme="dark"] body h4 {
  --collapse-icon-color: var(--headers, #4e5b6f);
  --collapse-icon-color-collapsed: var(--text-dl, #1b262f);
  --font-weight: var(--h4-weight, 700);
  --h1-background: var(--illusion-h1-background, transparent);
  --h1-border-line-height: var(--illusion-border-line-height, 4px);
  --h1-color: var(--illusion-header-text, #aa3333);
  --h1-padding: var(--illusion-header-padding, 0);
  --h1-shadow: var(--illusion-box-shadow, transparent);
  --h2-background: var(--illusion-h2-background, transparent);
  --h2-border-line-height: var(--illusion-border-line-height, 4px);
  --h2-color: var(--illusion-header-text, #aa3333);
  --h2-padding: var(--illusion-header-padding, 0);
  --h2-shadow: var(--illusion-box-shadow, transparent);
  --h3-background: var(--illusion-h3-background, transparent);
  --h3-border-line-height: var(--illusion-border-line-height, 4px);
  --h3-color: var(--illusion-header-text, #aa3333);
  --h3-padding: var(--illusion-header-padding, 0);
  --h3-shadow: var(--illusion-box-shadow, transparent);
  --h4-background: var(--illusion-h4-background, transparent);
  --h4-border-line-height: var(--illusion-border-line-height, 4px);
  --h4-color: var(--illusion-header-text, #aa3333);
  --h4-padding: var(--illusion-header-padding, 0);
  --h4-shadow: var(--illusion-box-shadow, transparent);
  --h5-background: var(--illusion-h5-background, transparent);
  --h5-border-line-height: var(--illusion-border-line-height, 4px);
  --h5-color: var(--illusion-header-text, #aa3333);
  --h5-padding: var(--illusion-header-padding, 0);
  --h5-shadow: var(--illusion-box-shadow, transparent);
  --h6-background: var(--illusion-h6-background, transparent);
  --h6-border-line-height: var(--illusion-border-line-height, 4px);
  --h6-color: var(--illusion-header-text, #aa3333);
  --h6-padding: var(--illusion-header-padding, 0);
  --h6-shadow: var(--illusion-box-shadow, transparent);
  --header-arrow-icon-color: var(--text-dl, #4e5b6f);
  --heading-formatting: var(--illusion-header-text, #1b262f);
  color: var(--h4-color, rgb(170, 51, 51));
  font-family: var(--h4-font, "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif);
}

html[saved-theme="dark"] body h4::after {
  --collapse-icon-color: var(--headers, #4e5b6f);
  --collapse-icon-color-collapsed: var(--text-dl, #1b262f);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-weight: var(--h4-weight, 700);
  --h1-background: var(--illusion-h1-background, transparent);
  --h1-border-line-height: var(--illusion-border-line-height, 4px);
  --h1-color: var(--illusion-header-text, #aa3333);
  --h1-padding: var(--illusion-header-padding, 0);
  --h1-shadow: var(--illusion-box-shadow, transparent);
  --h2-background: var(--illusion-h2-background, transparent);
  --h2-border-line-height: var(--illusion-border-line-height, 4px);
  --h2-color: var(--illusion-header-text, #aa3333);
  --h2-padding: var(--illusion-header-padding, 0);
  --h2-shadow: var(--illusion-box-shadow, transparent);
  --h3-background: var(--illusion-h3-background, transparent);
  --h3-border-line-height: var(--illusion-border-line-height, 4px);
  --h3-color: var(--illusion-header-text, #aa3333);
  --h3-padding: var(--illusion-header-padding, 0);
  --h3-shadow: var(--illusion-box-shadow, transparent);
  --h4-background: var(--illusion-h4-background, transparent);
  --h4-border-line-height: var(--illusion-border-line-height, 4px);
  --h4-color: var(--illusion-header-text, #aa3333);
  --h4-padding: var(--illusion-header-padding, 0);
  --h4-shadow: var(--illusion-box-shadow, transparent);
  --h5-background: var(--illusion-h5-background, transparent);
  --h5-border-line-height: var(--illusion-border-line-height, 4px);
  --h5-color: var(--illusion-header-text, #aa3333);
  --h5-padding: var(--illusion-header-padding, 0);
  --h5-shadow: var(--illusion-box-shadow, transparent);
  --h6-background: var(--illusion-h6-background, transparent);
  --h6-border-line-height: var(--illusion-border-line-height, 4px);
  --h6-color: var(--illusion-header-text, #aa3333);
  --h6-padding: var(--illusion-header-padding, 0);
  --h6-shadow: var(--illusion-box-shadow, transparent);
  --header-arrow-icon-color: var(--text-dl, #4e5b6f);
  --heading-formatting: var(--illusion-header-text, #1b262f);
  background: rgb(56, 11, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(56, 11, 19);
  border-bottom-color: rgb(170, 51, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(170, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(170, 51, 51);
  border-right-width: 0px;
  border-top-color: rgb(170, 51, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(170, 51, 51));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  width: var(--header-arrow-icon-size, 271.906px);
}

html[saved-theme="dark"] body h5 {
  --collapse-icon-color: var(--headers, #4e5b6f);
  --collapse-icon-color-collapsed: var(--text-dl, #1b262f);
  --font-weight: var(--h5-weight, 700);
  --h1-background: var(--illusion-h1-background, transparent);
  --h1-border-line-height: var(--illusion-border-line-height, 4px);
  --h1-color: var(--illusion-header-text, #aa3333);
  --h1-padding: var(--illusion-header-padding, 0);
  --h1-shadow: var(--illusion-box-shadow, transparent);
  --h2-background: var(--illusion-h2-background, transparent);
  --h2-border-line-height: var(--illusion-border-line-height, 4px);
  --h2-color: var(--illusion-header-text, #aa3333);
  --h2-padding: var(--illusion-header-padding, 0);
  --h2-shadow: var(--illusion-box-shadow, transparent);
  --h3-background: var(--illusion-h3-background, transparent);
  --h3-border-line-height: var(--illusion-border-line-height, 4px);
  --h3-color: var(--illusion-header-text, #aa3333);
  --h3-padding: var(--illusion-header-padding, 0);
  --h3-shadow: var(--illusion-box-shadow, transparent);
  --h4-background: var(--illusion-h4-background, transparent);
  --h4-border-line-height: var(--illusion-border-line-height, 4px);
  --h4-color: var(--illusion-header-text, #aa3333);
  --h4-padding: var(--illusion-header-padding, 0);
  --h4-shadow: var(--illusion-box-shadow, transparent);
  --h5-background: var(--illusion-h5-background, transparent);
  --h5-border-line-height: var(--illusion-border-line-height, 4px);
  --h5-color: var(--illusion-header-text, #aa3333);
  --h5-padding: var(--illusion-header-padding, 0);
  --h5-shadow: var(--illusion-box-shadow, transparent);
  --h6-background: var(--illusion-h6-background, transparent);
  --h6-border-line-height: var(--illusion-border-line-height, 4px);
  --h6-color: var(--illusion-header-text, #aa3333);
  --h6-padding: var(--illusion-header-padding, 0);
  --h6-shadow: var(--illusion-box-shadow, transparent);
  --header-arrow-icon-color: var(--text-dl, #4e5b6f);
  --heading-formatting: var(--illusion-header-text, #1b262f);
  color: var(--h5-color, rgb(170, 51, 51));
  font-family: var(--h5-font, "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif);
}

html[saved-theme="dark"] body h5::after {
  --collapse-icon-color: var(--headers, #4e5b6f);
  --collapse-icon-color-collapsed: var(--text-dl, #1b262f);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-weight: var(--h5-weight, 700);
  --h1-background: var(--illusion-h1-background, transparent);
  --h1-border-line-height: var(--illusion-border-line-height, 4px);
  --h1-color: var(--illusion-header-text, #aa3333);
  --h1-padding: var(--illusion-header-padding, 0);
  --h1-shadow: var(--illusion-box-shadow, transparent);
  --h2-background: var(--illusion-h2-background, transparent);
  --h2-border-line-height: var(--illusion-border-line-height, 4px);
  --h2-color: var(--illusion-header-text, #aa3333);
  --h2-padding: var(--illusion-header-padding, 0);
  --h2-shadow: var(--illusion-box-shadow, transparent);
  --h3-background: var(--illusion-h3-background, transparent);
  --h3-border-line-height: var(--illusion-border-line-height, 4px);
  --h3-color: var(--illusion-header-text, #aa3333);
  --h3-padding: var(--illusion-header-padding, 0);
  --h3-shadow: var(--illusion-box-shadow, transparent);
  --h4-background: var(--illusion-h4-background, transparent);
  --h4-border-line-height: var(--illusion-border-line-height, 4px);
  --h4-color: var(--illusion-header-text, #aa3333);
  --h4-padding: var(--illusion-header-padding, 0);
  --h4-shadow: var(--illusion-box-shadow, transparent);
  --h5-background: var(--illusion-h5-background, transparent);
  --h5-border-line-height: var(--illusion-border-line-height, 4px);
  --h5-color: var(--illusion-header-text, #aa3333);
  --h5-padding: var(--illusion-header-padding, 0);
  --h5-shadow: var(--illusion-box-shadow, transparent);
  --h6-background: var(--illusion-h6-background, transparent);
  --h6-border-line-height: var(--illusion-border-line-height, 4px);
  --h6-color: var(--illusion-header-text, #aa3333);
  --h6-padding: var(--illusion-header-padding, 0);
  --h6-shadow: var(--illusion-box-shadow, transparent);
  --header-arrow-icon-color: var(--text-dl, #4e5b6f);
  --heading-formatting: var(--illusion-header-text, #1b262f);
  background: rgb(56, 11, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(56, 11, 19);
  border-bottom-color: rgb(170, 51, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(170, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(170, 51, 51);
  border-right-width: 0px;
  border-top-color: rgb(170, 51, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(170, 51, 51));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  width: var(--header-arrow-icon-size, 154.5px);
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 700);
  color: var(--h6-color, rgb(170, 51, 51));
  font-family: var(--h6-font, "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif);
}

html[saved-theme="dark"] body h6::after {
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-weight: var(--h6-weight, 700);
  background: rgb(56, 11, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(56, 11, 19);
  border-bottom-color: rgb(170, 51, 51);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(170, 51, 51);
  border-left-width: 0px;
  border-right-color: rgb(170, 51, 51);
  border-right-width: 0px;
  border-top-color: rgb(170, 51, 51);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(170, 51, 51));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing-top, 0px);
  width: 0px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-right-width: 2px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 16px;
  padding-right: 16px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(87, 26, 26);
  border-left-width: 2px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  --nav-item-weight: var(--folder-weight, 700);
  color: var(--folder-open-text-color, rgb(71, 85, 105));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: var(--nav-item-weight, 700);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  --nav-item-weight: var(--folder-weight, 700);
  color: var(--folder-open-text-color, rgb(71, 85, 105));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: var(--nav-item-weight, 700);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.depth-0 {
  --nav-item-weight: var(--folder-weight, 700);
  font-weight: var(--nav-item-weight, 700);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(128, 50, 50));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(0, 0, 0));
  border-bottom-color: rgb(128, 50, 50);
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  color: var(--status-bar-text-color, rgb(128, 50, 50));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(128, 50, 50);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--file-text-color, rgb(71, 85, 105));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(71, 85, 105);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--file-text-color, rgb(71, 85, 105));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(128, 50, 50));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(128, 50, 50);
  stroke: rgb(128, 50, 50);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(27, 38, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(27, 38, 47);
  border-right-color: rgb(27, 38, 47);
  border-top-color: rgb(27, 38, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--file-header-breadcrumb-color, rgb(27, 38, 47));
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(78, 91, 111));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: var(--progress, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(71, 85, 105));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(0, 0, 0));
  border-color: rgb(0, 0, 0);
  box-shadow: var(--input-shadow, rgb(0, 0, 0) 2px 2px 0px 0px);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgba(3, 0, 0, 0.33));
}

html[saved-theme="dark"] body .bases-table thead th {
  --latex-color: var(--table-header-color, #e5ebee);
  border-color: rgb(7, 11, 17);
  color: var(--table-header-color, rgb(229, 235, 238));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(56, 11, 19);
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  color: var(--text-muted, rgb(128, 50, 50));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(128, 50, 50);
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  color: rgb(128, 50, 50);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(56, 11, 19);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(128, 50, 50);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(128, 50, 50);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, #380b13);
  --pill-background-hover: var(--tag-background-hover, #803232);
  --pill-border-color: var(--tag-border-color, #380b13);
  --pill-border-color-hover: var(--tag-border-color-hover, #803232);
  --pill-color: var(--tag-color, #e5ebee);
  --pill-color-hover: var(--tag-color-hover, #e5ebee);
  --pill-color-remove: var(--tag-color, #e5ebee);
  --pill-color-remove-hover: var(--tag-color-hover, #e5ebee);
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  --pill-padding-x: var(--tag-padding-x, 7px);
  --pill-padding-y: var(--tag-padding-y, 3px);
  --pill-radius: var(--tag-radius, 0);
  background-color: var(--pill-background, rgb(56, 11, 19));
  border-radius: 0px;
  color: var(--pill-color, rgb(229, 235, 238));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(128, 50, 50);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(7, 11, 17));
  color: var(--headers, rgb(71, 85, 105));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(0, 0, 0));
  border-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .stacked-page-header {
  --background-modifier-hover: var(--sidebar-tab-background-color, #04070c);
  background-color: var(--tab-container-background, rgb(0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(71, 85, 105);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(0, 0, 0));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(71, 85, 105));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(128, 50, 50);
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  color: var(--text-normal, rgb(128, 50, 50));
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(4, 7, 12));
  border-bottom-color: rgb(128, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 50, 50);
  border-right-color: rgb(128, 50, 50);
  border-top-color: rgb(128, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: var(--code-shadow, rgb(0, 0, 0) 0px 2px 0px 0px);
  color: var(--code-normal, rgb(128, 50, 50));
  font-family: var(--font-monospace, "Fira Code", "Fira Code Medium", "Source Code Pro", monospace);
  font-size: var(--code-size, 14.4px);
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(71, 85, 105);
  border-left-color: rgb(71, 85, 105);
  border-right-color: rgb(71, 85, 105);
  border-top-color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body sub {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body summary {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body sup {
  color: rgb(71, 85, 105);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgb(56, 11, 19));
  border-bottom-color: rgb(56, 11, 19);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 11, 19);
  border-right-color: rgb(56, 11, 19);
  border-top-color: rgb(56, 11, 19);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--tag-color, rgb(229, 235, 238));
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
  --bodyFont: var(--font-text, "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #d9e4f0;
  --box-border-m: 3px solid #d9e4f0;
  --box-border-s: 1px solid #d9e4f0;
  --bttn: #c14343;
  --bullet: "\\e802";
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
  --codeFont: var(--font-monospace, "Fira Code", "Fira Code Medium", "Source Code Pro", monospace);
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #a6bbde;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(194, 76, 78);
  --color-accent-2: rgb(199, 87, 92);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark: var(--text-normal, #30353a);
  --dark-accent: #c35c5c;
  --dark-sidebar: #dce4f6;
  --darkgray: var(--text-normal, #30353a);
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
  --file-icon: "\\e800";
  --file-icon-color: #a6bbde;
  --file-icon-margin: 6px;
  --file-text-color: #30353a;
  --flair-background: #d5e1f3;
  --flair-color: #30353a;
  --folder: #c14343;
  --folder-font: "its";
  --folder-icon: "\\e801";
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
  --gray: var(--text-muted, #697580);
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
  --headerFont: var(--font-text, "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
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
  --hr-icon-symbol: "\\e817";
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
  --light: var(--background-primary, #e6edf8);
  --lightgray: var(--background-secondary, #e6edf8);
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
  --metadata-title-icon: "\\e805";
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
  --secondary: var(--text-accent, #5599d0);
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
  --tertiary: var(--text-accent-hover, #aac1d3);
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
  --textHighlight: var(--text-highlight-bg, rgba(255, 0, 0, 0.212));
  --th: #c35c5c;
  --th-text: #e5ebee;
  --theme-rainbow-1: #bb5555;
  --theme-rainbow-2: #a53f3f;
  --theme-rainbow-3: #862c2c;
  --theme-rainbow-4: #662828;
  --theme-rainbow-5: #697795;
  --theme-rainbow-6: #a4aec2;
  --tiny: 100px;
  --titleFont: var(--font-text, "??", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
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
  --xfa-unfocused-field-background: url("data:image/svg+xml,%3Csvg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' style='fill:rgba(0, 54, 255, 0.13)'/%3E%3C/svg%3E");
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(213, 225, 243);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(213, 225, 243);
  border-right-width: 2px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(213, 225, 243);
  border-left-color: rgb(213, 225, 243);
  border-left-width: 2px;
  color: rgb(48, 53, 58);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered > h1 {
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  color: rgb(193, 67, 67);
  content: "";
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
  font-size: 34px;
  letter-spacing: -0.51px;
  line-height: 40.8px;
}

html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 0, 0, 0.21);
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body del {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: line-through 1px solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body h2 {
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  color: rgb(193, 67, 67);
  content: "";
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.33px;
  line-height: 36px;
}

html[saved-theme="light"] body h3 {
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  color: rgb(193, 67, 67);
  content: "";
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.208px;
  line-height: 33.8px;
}

html[saved-theme="light"] body h4 {
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  color: rgb(193, 67, 67);
  content: "";
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.11px;
  line-height: 30.8px;
}

html[saved-theme="light"] body h5 {
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  color: rgb(193, 67, 67);
  content: "";
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.04px;
  line-height: 30px;
}

html[saved-theme="light"] body h6 {
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  color: rgb(193, 67, 67);
  content: "";
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
}

html[saved-theme="light"] body p {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  border-bottom-color: rgb(85, 153, 208);
  border-left-color: rgb(85, 153, 208);
  border-right-color: rgb(85, 153, 208);
  border-top-color: rgb(85, 153, 208);
  color: rgb(85, 153, 208);
  content: "\\e809";
  font-family: its;
  font-weight: 100;
  padding-left: 2px;
  text-decoration: none solid rgb(85, 153, 208);
  text-decoration-color: rgb(85, 153, 208);
  text-decoration-line: none;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(205, 38, 38);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(205, 38, 38);
  text-decoration-color: rgb(205, 38, 38);
  text-decoration-line: none;
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(166, 187, 222);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
  text-decoration-line: none;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body dt {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body ol > li {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body ol > li::marker {
  background-color: rgb(145, 46, 46);
  border-bottom-color: rgb(145, 46, 46);
  border-left-color: rgb(145, 46, 46);
  border-right-color: rgb(145, 46, 46);
  border-top-color: rgb(145, 46, 46);
  color: rgb(145, 46, 46);
}

html[saved-theme="light"] body ul > li {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body ul > li::marker {
  background-color: rgb(145, 46, 46);
  border-bottom-color: rgb(145, 46, 46);
  border-left-color: rgb(145, 46, 46);
  border-right-color: rgb(145, 46, 46);
  border-top-color: rgb(145, 46, 46);
  color: rgb(145, 46, 46);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: none solid rgb(78, 91, 111);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(220, 228, 246);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="light"] body table {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body td {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(230, 237, 248);
  border-left-color: rgb(230, 237, 248);
  border-right-color: rgb(230, 237, 248);
  border-top-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body th {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(230, 237, 248);
  border-left-color: rgb(230, 237, 248);
  border-right-color: rgb(230, 237, 248);
  border-top-color: rgb(230, 237, 248);
  color: rgb(229, 235, 238);
}

html[saved-theme="light"] body tr {
  background-color: rgb(195, 92, 92);
}`,
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(230, 235, 248);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body figcaption {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-left-width: 4px;
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(48, 53, 58);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
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

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: none solid rgb(48, 53, 58);
  text-decoration-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(253, 115, 115, 0.4);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(217, 228, 240);
  border-bottom-width: 3px;
  border-left-color: rgb(217, 228, 240);
  border-left-width: 3px;
  border-right-color: rgb(217, 228, 240);
  border-right-width: 3px;
  border-top-color: rgb(217, 228, 240);
  border-top-width: 3px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(230, 237, 248);
  border-bottom-color: rgb(230, 237, 248);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(253, 115, 115, 0.4);
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(195, 92, 92);
  border-bottom-color: rgb(195, 92, 92);
  border-left-color: rgb(195, 92, 92);
  border-right-color: rgb(195, 92, 92);
  border-top-color: rgb(195, 92, 92);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(229, 235, 238);
}

html[saved-theme="light"] body h1 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h1::after {
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  color: rgb(193, 67, 67);
  content: "";
  height: 4px;
}

html[saved-theme="light"] body h2 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a::after {
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  color: rgb(193, 67, 67);
}

html[saved-theme="light"] body h2::after {
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  color: rgb(193, 67, 67);
  content: "";
  height: 4px;
}

html[saved-theme="light"] body h3 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h3::after {
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  color: rgb(193, 67, 67);
  content: "";
  height: 4px;
}

html[saved-theme="light"] body h4 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h4::after {
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  color: rgb(193, 67, 67);
  content: "";
  height: 4px;
}

html[saved-theme="light"] body h5 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h5::after {
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  color: rgb(193, 67, 67);
  content: "";
  height: 4px;
}

html[saved-theme="light"] body h6 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT", "Palatino Black", "Book Antiqua", Georgia, "Suez One", serif;
}

html[saved-theme="light"] body h6::after {
  background-color: rgb(204, 214, 235);
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  color: rgb(193, 67, 67);
  content: "";
  height: 4px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  padding-left: 16px;
  padding-right: 16px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .nav-file-title {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: none solid rgb(48, 53, 58);
}

html[saved-theme="light"] body .nav-files-container .nav-file-title.is-active {
  background-color: rgb(195, 92, 92);
  border-bottom-color: rgb(229, 235, 238);
  border-left-color: rgb(229, 235, 238);
  border-right-color: rgb(229, 235, 238);
  border-top-color: rgb(229, 235, 238);
  color: rgb(229, 235, 238);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: none solid rgb(48, 53, 58);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(48, 53, 58);
  cursor: default;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: none solid rgb(48, 53, 58);
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    properties: `html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(230, 237, 248);
  color: rgb(48, 53, 58);
}`,
    misc: `html[saved-theme="light"] body abbr {
  color: rgb(48, 53, 58);
  text-decoration: underline dotted rgb(48, 53, 58);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgba(208, 221, 239, 0.384);
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(48, 53, 58);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
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

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(48, 53, 58);
  border-left-color: rgb(48, 53, 58);
  border-right-color: rgb(48, 53, 58);
  border-top-color: rgb(48, 53, 58);
}

html[saved-theme="light"] body sub {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body summary {
  color: rgb(48, 53, 58);
}

html[saved-theme="light"] body sup {
  color: rgb(48, 53, 58);
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
}
`,
};
