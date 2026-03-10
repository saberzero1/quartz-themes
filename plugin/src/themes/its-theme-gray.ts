import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.gray",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #515b71;
  --accent-color: 81, 91, 113;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #889FC3;
  --accent2-lite: #cde2ff;
  --aside-bg: #11151d;
  --background-modifier-active-hover: #333A49;
  --background-modifier-border: #242b3d;
  --background-modifier-border-focus: #515b71;
  --background-modifier-border-hover: #252c36;
  --background-modifier-cover: #06080c60;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #06080c60;
  --background-modifier-form-field-hover: #06080c60;
  --background-modifier-hover: rgba(163, 188, 218, 0.22);
  --background-modifier-message: #333A49;
  --background-modifier-success: #32603e;
  --background-primary: #171B21;
  --background-primary-alt: #222731;
  --background-secondary: #171B21;
  --background-secondary-alt: #0E0F15;
  --bases-cards-background: #171B21;
  --bases-cards-cover-background: #222731;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #242b3d;
  --bases-cards-shadow-hover: 0 0 0 1px #252c36;
  --bases-embed-border-color: #242b3d;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #778495;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #171B21;
  --bases-table-cell-background-active: #171B21;
  --bases-table-cell-background-disabled: #222731;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #515b71;
  --bases-table-cell-shadow-focus: 0 0 0 2px #333A49;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #222731;
  --bases-table-header-background: #171B21;
  --bases-table-header-background-hover: rgba(163, 188, 218, 0.22);
  --bases-table-header-color: #778495;
  --bases-table-row-background-hover: rgba(101, 116, 135, 0.27);
  --bases-table-summary-background: #171B21;
  --bases-table-summary-background-hover: rgba(163, 188, 218, 0.22);
  --bg: #252c36;
  --blockquote-background-color: #090C0E;
  --blockquote-border-color: #252c36;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #AAB3CA;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #0E0F15 65%, transparent) linear-gradient(#0E0F15, color-mix(in srgb, #0E0F15 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #0E0F15;
  --box-border-m: 3px solid #0E0F15;
  --box-border-s: 1px solid #0E0F15;
  --bttn: #333A49;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #333A49;
  --button-background-hover: #3c4a64;
  --button-border: #333A49;
  --button-border-radius: 0;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #171B21;
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
  --checkbox-border-color: #515b71;
  --checkbox-border-color-hover: #333A49;
  --checkbox-color: #515b71;
  --checkbox-color-hover: #333A49;
  --checkbox-marker-color: #171B21;
  --checkbox-radius: 0;
  --checklist-done-color: #3c4a64;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #232831;
  --code-bg: #232831;
  --code-border-color: #242b3d;
  --code-bracket-background: rgba(163, 188, 218, 0.22);
  --code-comment: #4e5b6f;
  --code-normal: #707a90;
  --code-punctuation: #778495;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #0E0F15;
  --code-size: .90em;
  --code-text: #707a90;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #3c4a64;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(199, 87, 92);
  --color-accent-2: rgb(209, 113, 121);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark: var(--text-normal);
  --dark-accent: #333A49;
  --dark-sidebar: #090C0E;
  --darkgray: var(--text-normal);
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(81, 91, 113, 0.1);
  --dataview-th-background: #0E0F15;
  --dataview-th-border-bottom: 2px solid #9DB1CA;
  --dataview-th-color: #9DB1CA;
  --dataview-th-count-color: #9DB1CA;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 100;
  --deep-dark-accent: #222731;
  --divider-color: #0E0F15;
  --divider-color-hover: #515b71;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #333A49;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #06080c60;
  --dropdown-background: #0E0F15;
  --dropdown-background-hover: #3c4a64;
  --embed-bg: #090C0E;
  --embed-block-shadow-hover: 2px 2px 0 #0E0F15;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #0E0F15;
  --embed-border-color: transparent;
  --embed-border-color-hover: #0E0F15;
  --embed-border-left: 2px solid #9DB1CA;
  --embed-border-left-color: #9DB1CA;
  --embed-border-left-color-hover: #9DB1CA;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #0E0F15;
  --embed-border-start: 2px solid #333A49;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #0E0F15;
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
  --file-header-background: #171B21;
  --file-header-background-focused: #171B21;
  --file-header-breadcrumb-color: #3c4a64;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #3c4a64;
  --file-header-color-active: #AAB3CA;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #333A49;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #0E0F15;
  --file-icon: "";
  --file-icon-color: #3c4a64;
  --file-icon-margin: 6px;
  --file-text-color: #AAB3CA;
  --flair-background: #0E0F15;
  --flair-color: #AAB3CA;
  --folder: #9DB1CA;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #9DB1CA;
  --folder-icon-open-color: #F1F7FF;
  --folder-open: #F1F7FF;
  --folder-open-text-color: #AAB3CA;
  --folder-text-color: #AAB3CA;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
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
  --footnote: #576571;
  --footnote-divider-color: #242b3d;
  --footnote-id-color: #778495;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #06080c60;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #3c4a64;
  --graph-arrow: #778495;
  --graph-background: #171B21;
  --graph-bg: #171B21;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #8e9ab4;
  --graph-focused: #cde2ff;
  --graph-img: #889FC3;
  --graph-line: rgba(101, 116, 135, 0.27);
  --graph-line-hover: #515b71;
  --graph-lines: rgba(101, 116, 135, 0.27);
  --graph-node: #AAB3CA;
  --graph-node-attachment: #889FC3;
  --graph-node-focused: #cde2ff;
  --graph-node-hover-fill: #8e9ab4;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #333A49;
  --graph-node-unresolved: #3c4a64;
  --graph-tag: #333A49;
  --graph-text: #AAB3CA;
  --gray: var(--text-muted);
  --h1-background: transparent;
  --h1-border-color: #8e9ab4;
  --h1-border-left-color: #242b3d;
  --h1-border-line-color: #242b3d;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #242b3d;
  --h1-border-width: 0;
  --h1-color: #9DB1CA;
  --h1-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h1-weight: 100;
  --h2-background: transparent;
  --h2-border-color: #707a90;
  --h2-border-left-color: #242b3d;
  --h2-border-line-color: #242b3d;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #242b3d;
  --h2-border-width: 0;
  --h2-color: #9DB1CA;
  --h2-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 100;
  --h3-background: transparent;
  --h3-border-color: #515b71;
  --h3-border-left-color: #242b3d;
  --h3-border-line-color: #242b3d;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #242b3d;
  --h3-border-width: 0;
  --h3-color: #9DB1CA;
  --h3-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 100;
  --h4-background: transparent;
  --h4-border-color: #3c4a64;
  --h4-border-left-color: #242b3d;
  --h4-border-line-color: #242b3d;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #242b3d;
  --h4-border-width: 0;
  --h4-color: #9DB1CA;
  --h4-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 100;
  --h5-background: transparent;
  --h5-border-color: #242b3d;
  --h5-border-left-color: #242b3d;
  --h5-border-line-color: #242b3d;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #242b3d;
  --h5-border-width: 0;
  --h5-color: #9DB1CA;
  --h5-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 100;
  --h6-background: transparent;
  --h6-border-color: #11151d;
  --h6-border-left-color: #242b3d;
  --h6-border-line-color: #242b3d;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: #242b3d;
  --h6-border-width: 0;
  --h6-color: #9DB1CA;
  --h6-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 100;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #9DB1CA;
  --he-text-on-accent-inactive: #AAB3CA;
  --he-title-bar-active-action: #8e9ab4;
  --he-title-bar-active-bg: #090C0E;
  --he-title-bar-active-fg: #AAB3CA;
  --he-title-bar-active-pinned-bg: #171B21;
  --he-title-bar-inactive-action: #778495;
  --he-title-bar-inactive-bg: #171B21;
  --he-title-bar-inactive-fg: #3c4a64;
  --he-title-bar-inactive-pinned-bg: #171B21;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #242b3d;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 100;
  --headerFont: var(--font-text);
  --headers: #9DB1CA;
  --heading-formatting: #3c4a64;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(101, 116, 135, 0.27);
  --hr: #2f3b4d;
  --hr-alignment: -50%, -50%;
  --hr-color: #2f3b4d;
  --hr-icon-background: #171B21;
  --hr-icon-color: #9DB1CA;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "🏴";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(129, 155, 199, 0.25);
  --hvr-active: rgba(163, 188, 218, 0.22);
  --hvr2: rgba(101, 116, 135, 0.27);
  --i-at: #5D7B98;
  --icon-btn-radius: 0;
  --icon-color: #778495;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #AAB3CA;
  --icon-color-hover: #AAB3CA;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #0E0F15;
  --illusion-h1-background: #8e9ab4;
  --illusion-h2-background: #707a90;
  --illusion-h3-background: #515b71;
  --illusion-h4-background: #3c4a64;
  --illusion-h5-background: #242b3d;
  --illusion-h6-background: #11151d;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: #06080c60;
  --image-border-color: #242b3d;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #3c4a64;
  --indentation-guide-color: #2f3b4d;
  --indentation-guide-color-active: #515b71;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #2f3b4d;
  --initiative-xp: sandybrown;
  --inline-title-color: #9DB1CA;
  --inline-title-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --inline-title-weight: 100;
  --input-bg: rgba(0, 0, 0, 0.3);
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #0E0F15;
  --input-shadow-hover: 3px 3px 0 #0E0F15;
  --interactive-accent: #333A49;
  --interactive-accent-hover: #3c4a64;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #3c4a64;
  --interactive-normal: #0E0F15;
  --its: "its";
  --kanban-button-background: #232831;
  --kanban-button-shadow: 2px 2px 0 #0E0F15;
  --kanban-card-border: 2px solid #0E0F15;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #171B21;
  --kanban-card-text-color: #AAB3CA;
  --kanban-card-title-background: #171B21;
  --kanban-card-title-border: 0 1px 0 #0E0F15;
  --kanban-lane-background: #232831;
  --kanban-lane-border: 3px solid #0E0F15;
  --kanban-lane-box-shadow: 2px 2px 0 #0E0F15;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #cde2ff;
  --kanban-tag-background: #353d52;
  --latex-color: #8e9ab4;
  --latex-format-color: #3c4a64;
  --latex-syntax-color: #778495;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-tight: 1.3em;
  --lines: #2f3b4d;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #cde2ff;
  --link-color-hover: #8e9ab4;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #cde2ff;
  --link-external-color-hover: #889FC3;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #3c4a64;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #242b3d;
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
  --list-marker-color: #515b71;
  --list-marker-color-collapsed: #3c4a64;
  --list-marker-color-hover: #778495;
  --list-marker-color-other: #889FC3;
  --list-marker-min-width: 0;
  --list-numbered-color: #8e9ab4;
  --list-spacing: 1px;
  --lite-accent: #8e9ab4;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #171B21;
  --menu-border-color: #252c36;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #0E0F15;
  --message-border-color: #0E0F15;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #0E0F15;
  --message-color: #e5ebee;
  --metadata-border-color: #242b3d;
  --metadata-button-text-color: #3c4a64;
  --metadata-divider-color: #242b3d;
  --metadata-icon-color: #778495;
  --metadata-input-background-active: #06080c60;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #AAB3CA;
  --metadata-label-background-active: #06080c60;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #778495;
  --metadata-label-text-color-hover: #778495;
  --metadata-property-background-active: rgba(163, 188, 218, 0.22);
  --metadata-property-box-shadow-focus: 0 0 0 2px #515b71;
  --metadata-property-box-shadow-hover: 0 0 0 1px #252c36;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #e5ebee;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #778495;
  --metadata-title-icon: "";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #171B21;
  --modal-border-color: #0E0F15;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: #06080c60;
  --modal-radius: 0;
  --modal-sidebar-background: #090C0E;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #AAB3CA;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #778495;
  --nav-heading-color-hover: #AAB3CA;
  --nav-indentation-guide-color: #2f3b4d;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #333A49;
  --nav-item-background-border-color-hover: #333A49;
  --nav-item-background-hover: #333A49;
  --nav-item-background-selected: rgba(129, 155, 199, 0.25);
  --nav-item-border-color: #8e9ab4;
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
  --nav-tag-color-active: #778495;
  --nav-tag-color-hover: #778495;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #171B21;
  --note-rgb: 23, 27, 33;
  --note-title-border-color: #9DB1CA;
  --outer-bar: #0E0F15;
  --outline: #0E0F15;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #171B21;
  --pdf-background: #171B21;
  --pdf-page-background: #171B21;
  --pdf-shadow: 0 0 0 1px #242b3d;
  --pdf-sidebar-background: #171B21;
  --pdf-thumbnail-shadow: 0 0 0 1px #242b3d;
  --pill-border-color: #242b3d;
  --pill-border-color-hover: #252c36;
  --pill-color: #778495;
  --pill-color-hover: #AAB3CA;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #cde2ff;
  --pill-radius: 0;
  --popover-background: #171B21;
  --popover-border: 3px solid #0E0F15;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #515b71;
  --progress-bg: #252c36;
  --prompt-background: #171B21;
  --prompt-border-color: #0E0F15;
  --prompt-border-width: 3px;
  --r-heading-color: #9DB1CA;
  --r-heading-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --r-heading-font-weight: 100;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #8e9ab4;
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
  --raised-background: color-mix(in srgb, #0E0F15 65%, transparent) linear-gradient(#0E0F15, color-mix(in srgb, #0E0F15 65%, transparent));
  --ribbon-background: #0E0F15;
  --ribbon-background-collapsed: #171B21;
  --ribbon-border-color: #0E0F15;
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
  --scrollbar-active-thumb-bg: #8e9ab4;
  --scrollbar-bg: #252c36;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #353d52;
  --scrollbar-track-bg: #171B21;
  --search-border: 2px solid #0E0F15;
  --search-box-shadow: 2px 2px 0 #0E0F15;
  --search-clear-button-color: #778495;
  --search-icon-color: #778495;
  --search-result-background: #171B21;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #AAB3CA;
  --setting-item-alt-background-hover: #06080c60;
  --setting-item-background-hover: rgba(129, 155, 199, 0.25);
  --setting-item-border-color: #242b3d;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #333A49;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #06080c60;
  --setting-items-background: transparent;
  --setting-items-border-color: #242b3d;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #0E0F15;
  --shadow-m: 3px 3px 0 #0E0F15;
  --shadow-ml: 4px 4px 0 #0E0F15;
  --shadow-s: 2px 2px 0 #0E0F15;
  --side-bar: #171B21;
  --side-bar-bg: #0E0F15;
  --sidebar-icon-color: #AAB3CA;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #333A49;
  --sidebar-tab-background-color-hover: #515b71;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #333A49;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #171B21;
  --slider-thumb-border-color: #252c36;
  --slider-thumb-radius: 0;
  --slider-track-background: #242b3d;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #778495;
  --statblock-alt: #06080c60;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #171B21;
  --statblock-bar-border-color: #515b71;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #515b71;
  --statblock-border-color: #2f3b4d;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #0E0F15;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #AAB3CA;
  --statblock-heading-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --statblock-heading-font-color: #9DB1CA;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 100;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #2f3b4d;
  --statblock-primary-color: #AAB3CA;
  --statblock-property-font-color: #AAB3CA;
  --statblock-property-name-font-color: #9DB1CA;
  --statblock-rule-color: #515b71;
  --statblock-section-heading-border-color: #242b3d;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --statblock-section-heading-font-color: #576571;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 100;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #0E0F15;
  --status-bar-border-color: #515b71;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #778495;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #333A49;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --success-bg: #32603e;
  --suggestion-background: #171B21;
  --tab-background: #0E0F15;
  --tab-background-active: #171B21;
  --tab-container-background: #0E0F15;
  --tab-curve: 0;
  --tab-divider-color: #2f3b4d;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #515b71;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #06080c60;
  --tab-stacked-shadow-color: #06080c60;
  --tab-switcher-background: #171B21;
  --tab-switcher-menubar-background: linear-gradient(to top, #171B21, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #0E0F15;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #0E0F15;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #8e9ab4, 5px 5px 0 #0E0F15;
  --tab-text-color: #3c4a64;
  --tab-text-color-active: #AAB3CA;
  --tab-text-color-focused: #3c4a64;
  --tab-text-color-focused-active: #AAB3CA;
  --tab-text-color-focused-active-current: #AAB3CA;
  --tab-text-color-focused-highlighted: #cde2ff;
  --tab-text-color-hover: #AAB3CA;
  --tab-top-outline-width: 0;
  --table: #242b3d;
  --table-add-button-background: #333A49;
  --table-add-button-border-color: #171B21;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #171B21;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #06080c60;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #333A49;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #333A49;
  --table-header-background-hover: #515b71;
  --table-header-border-color: #171B21;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #8e9ab4;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #06080c60;
  --table-row-alt-background-hover: rgba(101, 116, 135, 0.27);
  --table-row-background-hover: rgba(101, 116, 135, 0.27);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #333A49;
  --table-selection-border-radius: 0;
  --tag: #353d52;
  --tag-background: #353d52;
  --tag-background-color: #353d52;
  --tag-background-hover: #515b71;
  --tag-border-color: #353d52;
  --tag-border-color-hover: #515b71;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #8690ab;
  --tall: 700px;
  --td: #06080c60;
  --tertiary: var(--text-accent-hover);
  --text: #AAB3CA;
  --text-accent: #cde2ff;
  --text-accent-hover: #889FC3;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(129, 155, 199, 0.25);
  --text-highlight-bg-active: rgba(163, 188, 218, 0.22);
  --text-muted: #778495;
  --text-normal: #AAB3CA;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(101, 116, 135, 0.27);
  --textHighlight: var(--text-highlight-bg);
  --th: #333A49;
  --th-text: #e5ebee;
  --theme-rainbow-1: #8e9ab4;
  --theme-rainbow-2: #707a90;
  --theme-rainbow-3: #515b71;
  --theme-rainbow-4: #3c4a64;
  --theme-rainbow-5: #242b3d;
  --theme-rainbow-6: #11151d;
  --tiny: 100px;
  --titleFont: var(--font-text);
  --titlebar-background: #171B21;
  --titlebar-background-focused: #0E0F15;
  --titlebar-border-color: #242b3d;
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
  --vault-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --vault-name-color: #9DB1CA;
  --vault-name-font-size: 25px;
  --vault-name-font-weight: 300;
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
  background-color: rgb(23, 27, 33);
  color: rgb(170, 179, 202);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(23, 27, 33);
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
  background-color: rgb(23, 27, 33);
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
  background-color: rgba(129, 155, 199, 0.25);
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
  color: rgb(119, 132, 149);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(119, 132, 149) none 0px;
  text-decoration: rgb(119, 132, 149);
  text-decoration-color: rgb(119, 132, 149);
}`,
    links: `body a.external, footer a {
  color: rgb(205, 226, 255);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(205, 226, 255) none 0px;
  text-decoration: rgb(205, 226, 255);
  text-decoration-color: rgb(205, 226, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(205, 226, 255);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(205, 226, 255) none 0px;
  text-decoration: rgb(205, 226, 255);
  text-decoration-color: rgb(205, 226, 255);
}

body a.internal.broken {
  color: rgb(60, 74, 100);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(60, 74, 100) none 0px;
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
  background-color: rgb(23, 27, 33);
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

body ul > li {
  color: rgb(170, 179, 202);
}

body ul.overflow {
  background-color: rgb(23, 27, 33);
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
  background-color: rgb(9, 12, 14);
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
  background-color: rgba(6, 8, 12, 0.376);
}

body td {
  border-bottom-color: rgb(23, 27, 33);
  border-left-color: rgb(23, 27, 33);
  border-right-color: rgb(23, 27, 33);
  border-top-color: rgb(23, 27, 33);
  color: rgb(170, 179, 202);
}

body th {
  border-bottom-color: rgb(23, 27, 33);
  border-left-color: rgb(23, 27, 33);
  border-right-color: rgb(23, 27, 33);
  border-top-color: rgb(23, 27, 33);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

body tr {
  background-color: rgb(51, 58, 73);
}`,
    code: `body code {
  border-bottom-color: rgb(112, 122, 144);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 122, 144);
  border-right-color: rgb(112, 122, 144);
  border-top-color: rgb(112, 122, 144);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(112, 122, 144);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(36, 43, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(36, 43, 61);
  border-right-color: rgb(36, 43, 61);
  border-top-color: rgb(36, 43, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(36, 43, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(36, 43, 61);
  border-right-color: rgb(36, 43, 61);
  border-top-color: rgb(36, 43, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 179, 202);
}

body pre > code, pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(36, 43, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(36, 43, 61);
  border-right-color: rgb(36, 43, 61);
  border-top-color: rgb(36, 43, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(36, 43, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(36, 43, 61);
  border-right-color: rgb(36, 43, 61);
  border-top-color: rgb(36, 43, 61);
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
  border-bottom-color: rgb(119, 132, 149);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(119, 132, 149);
  border-right-color: rgb(119, 132, 149);
  border-top-color: rgb(119, 132, 149);
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
  border-left-color: rgb(51, 58, 73);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(51, 58, 73);
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
  color: rgb(60, 74, 100);
  text-decoration: rgb(60, 74, 100);
  text-decoration-color: rgb(60, 74, 100);
}

body input[type=checkbox] {
  border-bottom-color: rgb(81, 91, 113);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(81, 91, 113);
  border-right-color: rgb(81, 91, 113);
  border-top-color: rgb(81, 91, 113);
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
  color: rgb(119, 132, 149);
  text-decoration: rgb(119, 132, 149);
  text-decoration-color: rgb(119, 132, 149);
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
  background-color: rgba(6, 8, 12, 0.376);
  border-bottom-color: rgb(36, 43, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(36, 43, 61);
  border-right-color: rgb(36, 43, 61);
  border-top-color: rgb(36, 43, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(23, 27, 33);
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
  background-color: rgba(163, 188, 218, 0.22);
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
  border-bottom-color: rgb(23, 27, 33);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(163, 188, 218, 0.22);
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
  background-color: rgba(163, 188, 218, 0.22);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 179, 202);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(53, 61, 82);
  border-bottom-color: rgb(53, 61, 82);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(53, 61, 82);
  border-right-color: rgb(53, 61, 82);
  border-top-color: rgb(53, 61, 82);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(157, 177, 202);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

body h2 {
  color: rgb(157, 177, 202);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(157, 177, 202);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

body h3 {
  color: rgb(157, 177, 202);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

body h4 {
  color: rgb(157, 177, 202);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

body h5 {
  color: rgb(157, 177, 202);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

body h6 {
  color: rgb(157, 177, 202);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
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
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

body ::-webkit-scrollbar-corner {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
}

body ::-webkit-scrollbar-track {
  background: rgb(23, 27, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 33);
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
  background-color: rgb(51, 58, 73);
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
  border-bottom-color: rgb(119, 132, 149);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(119, 132, 149);
  border-right-color: rgb(119, 132, 149);
  border-top-color: rgb(119, 132, 149);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(119, 132, 149);
}`,
    footer: `body footer {
  background-color: rgb(14, 15, 21);
  border-bottom-color: rgb(81, 91, 113);
  border-left-color: rgb(81, 91, 113);
  border-right-color: rgb(81, 91, 113);
  border-top-color: rgb(81, 91, 113);
  border-top-left-radius: 0px;
  color: rgb(119, 132, 149);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(119, 132, 149);
  text-decoration: rgb(119, 132, 149);
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
  border-bottom-color: rgb(119, 132, 149);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(119, 132, 149);
  border-right-color: rgb(119, 132, 149);
  border-top-color: rgb(119, 132, 149);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(119, 132, 149);
}

body .darkmode svg {
  color: rgb(119, 132, 149);
  stroke: rgb(119, 132, 149);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(60, 74, 100);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(60, 74, 100);
  border-right-color: rgb(60, 74, 100);
  border-top-color: rgb(60, 74, 100);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(60, 74, 100);
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
  border-bottom-color: rgb(36, 43, 61);
  border-left-color: rgb(36, 43, 61);
  border-right-color: rgb(36, 43, 61);
  border-top-color: rgb(36, 43, 61);
  color: rgb(119, 132, 149);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(119, 132, 149);
  border-left-color: rgb(119, 132, 149);
  border-right-color: rgb(119, 132, 149);
  border-top-color: rgb(119, 132, 149);
  color: rgb(119, 132, 149);
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
  border-bottom-color: rgb(119, 132, 149);
  border-left-color: rgb(119, 132, 149);
  border-right-color: rgb(119, 132, 149);
  border-top-color: rgb(119, 132, 149);
  color: rgb(119, 132, 149);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(112, 122, 144);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 122, 144);
  border-right-color: rgb(112, 122, 144);
  border-top-color: rgb(112, 122, 144);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(14, 15, 21) 0px 2px 0px 0px;
  color: rgb(112, 122, 144);
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
  --accent: #aebdd4;
  --accent-color: 174, 189, 212;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #404c62;
  --accent2-lite: #000000;
  --aside-bg: #F1F7FF;
  --background-modifier-active-hover: #6e7a92;
  --background-modifier-border: #ccd6eb;
  --background-modifier-border-focus: #aebdd4;
  --background-modifier-border-hover: #e1e9f6;
  --background-modifier-cover: #d0ddef62;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #d0ddef62;
  --background-modifier-form-field-hover: #d0ddef62;
  --background-modifier-hover: rgba(163, 188, 218, 0.22);
  --background-modifier-message: #6e7a92;
  --background-modifier-success: #599049;
  --background-primary: #f8fbff;
  --background-primary-alt: #171C22;
  --background-secondary: #f8fbff;
  --background-secondary-alt: #eef3fd;
  --bases-cards-background: #f8fbff;
  --bases-cards-cover-background: #171C22;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #ccd6eb;
  --bases-cards-shadow-hover: 0 0 0 1px #e1e9f6;
  --bases-embed-border-color: #ccd6eb;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #90a0c3;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #f8fbff;
  --bases-table-cell-background-active: #f8fbff;
  --bases-table-cell-background-disabled: #171C22;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #aebdd4;
  --bases-table-cell-shadow-focus: 0 0 0 2px #6e7a92;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #171C22;
  --bases-table-header-background: #f8fbff;
  --bases-table-header-background-hover: rgba(163, 188, 218, 0.22);
  --bases-table-header-color: #90a0c3;
  --bases-table-row-background-hover: rgba(163, 188, 218, 0.3);
  --bases-table-summary-background: #f8fbff;
  --bases-table-summary-background-hover: rgba(163, 188, 218, 0.22);
  --bg: #e1e9f6;
  --blockquote-background-color: #F1F7FF;
  --blockquote-border-color: #e1e9f6;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #171C22;
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
  --bttn: #6e7a92;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #6e7a92;
  --button-background-hover: #C0C8D6;
  --button-border: #6e7a92;
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
  --caret-color: #171C22;
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
  --checkbox-border-color: #aebdd4;
  --checkbox-border-color-hover: #6e7a92;
  --checkbox-color: #aebdd4;
  --checkbox-color-hover: #6e7a92;
  --checkbox-marker-color: #f8fbff;
  --checkbox-radius: 0;
  --checklist-done-color: #C0C8D6;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #F1F7FF;
  --code-bg: #F1F7FF;
  --code-border-color: #ccd6eb;
  --code-bracket-background: rgba(163, 188, 218, 0.22);
  --code-comment: #4e5b6f;
  --code-normal: #8193b5;
  --code-punctuation: #90a0c3;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #e1e9f6;
  --code-size: .90em;
  --code-text: #8193b5;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #C0C8D6;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(194, 76, 78);
  --color-accent-2: rgb(199, 87, 92);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark: var(--text-normal);
  --dark-accent: #6e7a92;
  --dark-sidebar: #F1F7FF;
  --darkgray: var(--text-normal);
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(174, 189, 212, 0.1);
  --dataview-th-background: #eef3fd;
  --dataview-th-border-bottom: 2px solid #6e7a92;
  --dataview-th-color: #6e7a92;
  --dataview-th-count-color: #6e7a92;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 100;
  --deep-dark-accent: #171C22;
  --divider-color: #eef3fd;
  --divider-color-hover: #aebdd4;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #6e7a92;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #d0ddef62;
  --dropdown-background: #eef3fd;
  --dropdown-background-hover: #C0C8D6;
  --embed-bg: #F1F7FF;
  --embed-block-shadow-hover: 2px 2px 0 #e1e9f6;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #e1e9f6;
  --embed-border-color: transparent;
  --embed-border-color-hover: #e1e9f6;
  --embed-border-left: 2px solid #6e7a92;
  --embed-border-left-color: #6e7a92;
  --embed-border-left-color-hover: #6e7a92;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #e1e9f6;
  --embed-border-start: 2px solid #6e7a92;
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
  --fg: #aebdd4;
  --file-font: "its";
  --file-header-background: #f8fbff;
  --file-header-background-focused: #f8fbff;
  --file-header-breadcrumb-color: #C0C8D6;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #C0C8D6;
  --file-header-color-active: #171C22;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #6e7a92;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #eef3fd;
  --file-icon: "";
  --file-icon-color: #A6B4CC;
  --file-icon-margin: 6px;
  --file-text-color: #171C22;
  --flair-background: #eef3fd;
  --flair-color: #171C22;
  --folder: #6e7a92;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #6e7a92;
  --folder-icon-open-color: #aebdd4;
  --folder-open: #aebdd4;
  --folder-open-text-color: #171C22;
  --folder-text-color: #171C22;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
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
  --footnote-id-color: #90a0c3;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #d0ddef62;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #C0C8D6;
  --graph-arrow: #90a0c3;
  --graph-background: #f8fbff;
  --graph-bg: #f8fbff;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #a6aec7;
  --graph-focused: #000000;
  --graph-img: #404c62;
  --graph-line: rgba(163, 188, 218, 0.3);
  --graph-line-hover: #aebdd4;
  --graph-lines: rgba(163, 188, 218, 0.3);
  --graph-node: #171C22;
  --graph-node-attachment: #404c62;
  --graph-node-focused: #000000;
  --graph-node-hover-fill: #a6aec7;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #6e7a92;
  --graph-node-unresolved: #C0C8D6;
  --graph-tag: #6e7a92;
  --graph-text: #171C22;
  --gray: var(--text-muted);
  --h1-background: transparent;
  --h1-border-color: #A6B4CC;
  --h1-border-left-color: #ccd6eb;
  --h1-border-line-color: #ccd6eb;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #ccd6eb;
  --h1-border-width: 0;
  --h1-color: #6e7a92;
  --h1-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h1-weight: 100;
  --h2-background: transparent;
  --h2-border-color: #90a0c3;
  --h2-border-left-color: #ccd6eb;
  --h2-border-line-color: #ccd6eb;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #ccd6eb;
  --h2-border-width: 0;
  --h2-color: #6e7a92;
  --h2-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 100;
  --h3-background: transparent;
  --h3-border-color: #7485a3;
  --h3-border-left-color: #ccd6eb;
  --h3-border-line-color: #ccd6eb;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #ccd6eb;
  --h3-border-width: 0;
  --h3-color: #6e7a92;
  --h3-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 100;
  --h4-background: transparent;
  --h4-border-color: #6e7a92;
  --h4-border-left-color: #ccd6eb;
  --h4-border-line-color: #ccd6eb;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #ccd6eb;
  --h4-border-width: 0;
  --h4-color: #6e7a92;
  --h4-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 100;
  --h5-background: transparent;
  --h5-border-color: #404c62;
  --h5-border-left-color: #ccd6eb;
  --h5-border-line-color: #ccd6eb;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #ccd6eb;
  --h5-border-width: 0;
  --h5-color: #6e7a92;
  --h5-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 100;
  --h6-background: transparent;
  --h6-border-color: #171C22;
  --h6-border-left-color: #ccd6eb;
  --h6-border-line-color: #ccd6eb;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: #ccd6eb;
  --h6-border-width: 0;
  --h6-color: #6e7a92;
  --h6-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 100;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #6e7a92;
  --he-text-on-accent-inactive: #171C22;
  --he-title-bar-active-action: #a6aec7;
  --he-title-bar-active-bg: #F1F7FF;
  --he-title-bar-active-fg: #171C22;
  --he-title-bar-active-pinned-bg: #f8fbff;
  --he-title-bar-inactive-action: #90a0c3;
  --he-title-bar-inactive-bg: #f8fbff;
  --he-title-bar-inactive-fg: #C0C8D6;
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
  --header-weight: 100;
  --headerFont: var(--font-text);
  --headers: #6e7a92;
  --heading-formatting: #C0C8D6;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(163, 188, 218, 0.3);
  --hr: #d6deea;
  --hr-alignment: -50%, -50%;
  --hr-color: #d6deea;
  --hr-icon-background: #f8fbff;
  --hr-icon-color: #6e7a92;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "🏴";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(129, 155, 199, 0.25);
  --hvr-active: rgba(163, 188, 218, 0.22);
  --hvr2: rgba(163, 188, 218, 0.3);
  --i-at: #8f9cbe;
  --icon-btn-radius: 0;
  --icon-color: #90a0c3;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #171C22;
  --icon-color-hover: #171C22;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --icons: #d04e4e;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #e1e9f6;
  --illusion-h1-background: #A6B4CC;
  --illusion-h2-background: #90a0c3;
  --illusion-h3-background: #7485a3;
  --illusion-h4-background: #6e7a92;
  --illusion-h5-background: #404c62;
  --illusion-h6-background: #171C22;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: #d0ddef62;
  --image-border-color: #ccd6eb;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #C0C8D6;
  --indentation-guide-color: #d6deea;
  --indentation-guide-color-active: #aebdd4;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #d6deea;
  --initiative-xp: sandybrown;
  --inline-title-color: #6e7a92;
  --inline-title-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --inline-title-weight: 100;
  --input-bg: #d0ddef62;
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #e1e9f6;
  --input-shadow-hover: 3px 3px 0 #e1e9f6;
  --interactive-accent: #6e7a92;
  --interactive-accent-hover: #C0C8D6;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #C0C8D6;
  --interactive-normal: #eef3fd;
  --its: "its";
  --kanban-button-background: #F1F7FF;
  --kanban-button-shadow: 2px 2px 0 #e1e9f6;
  --kanban-card-border: 2px solid #e1e9f6;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #f8fbff;
  --kanban-card-text-color: #171C22;
  --kanban-card-title-background: #f8fbff;
  --kanban-card-title-border: 0 1px 0 #e1e9f6;
  --kanban-lane-background: #F1F7FF;
  --kanban-lane-border: 3px solid #e1e9f6;
  --kanban-lane-box-shadow: 2px 2px 0 #e1e9f6;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #000000;
  --kanban-tag-background: #7485a3;
  --latex-color: #a6aec7;
  --latex-format-color: #C0C8D6;
  --latex-syntax-color: #90a0c3;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-tight: 1.3em;
  --lines: #d6deea;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #000000;
  --link-color-hover: #a6aec7;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #000000;
  --link-external-color-hover: #404c62;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #C0C8D6;
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
  --list-marker-color: #aebdd4;
  --list-marker-color-collapsed: #C0C8D6;
  --list-marker-color-hover: #90a0c3;
  --list-marker-color-other: #404c62;
  --list-marker-min-width: 0;
  --list-numbered-color: #a6aec7;
  --list-spacing: 1px;
  --lite-accent: #a6aec7;
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
  --metadata-border-color: #ccd6eb;
  --metadata-button-text-color: #C0C8D6;
  --metadata-divider-color: #ccd6eb;
  --metadata-icon-color: #90a0c3;
  --metadata-input-background-active: #d0ddef62;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #171C22;
  --metadata-label-background-active: #d0ddef62;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #90a0c3;
  --metadata-label-text-color-hover: #90a0c3;
  --metadata-property-background-active: rgba(163, 188, 218, 0.22);
  --metadata-property-box-shadow-focus: 0 0 0 2px #aebdd4;
  --metadata-property-box-shadow-hover: 0 0 0 1px #e1e9f6;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #e5ebee;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #90a0c3;
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
  --modal-sidebar-background: #F1F7FF;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #171C22;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #90a0c3;
  --nav-heading-color-hover: #171C22;
  --nav-indentation-guide-color: #d6deea;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #6e7a92;
  --nav-item-background-border-color-hover: #6e7a92;
  --nav-item-background-hover: #6e7a92;
  --nav-item-background-selected: rgba(129, 155, 199, 0.25);
  --nav-item-border-color: #a6aec7;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #171C22;
  --nav-item-color-active: #e5ebee;
  --nav-item-color-highlighted: #e5ebee;
  --nav-item-color-hover: #e5ebee;
  --nav-item-color-selected: #171C22;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 0;
  --nav-item-size: 14px;
  --nav-item-weight: 500;
  --nav-item-weight-active: 700;
  --nav-item-weight-hover: 700;
  --nav-item-white-space: wrap;
  --nav-tag-color: #4e5b6f;
  --nav-tag-color-active: #90a0c3;
  --nav-tag-color-hover: #90a0c3;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #f8fbff;
  --note-rgb: 248, 251, 255;
  --note-title-border-color: #6e7a92;
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
  --pill-border-color: #ccd6eb;
  --pill-border-color-hover: #e1e9f6;
  --pill-color: #90a0c3;
  --pill-color-hover: #171C22;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #000000;
  --pill-radius: 0;
  --popover-background: #f8fbff;
  --popover-border: 3px solid #e1e9f6;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #aebdd4;
  --progress-bg: #e1e9f6;
  --prompt-background: #f8fbff;
  --prompt-border-color: #e1e9f6;
  --prompt-border-width: 3px;
  --r-heading-color: #6e7a92;
  --r-heading-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --r-heading-font-weight: 100;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #a6aec7;
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
  --scrollbar-active-thumb-bg: #a6aec7;
  --scrollbar-bg: #e1e9f6;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #7485a3;
  --scrollbar-track-bg: #f8fbff;
  --search-border: 2px solid #e1e9f6;
  --search-box-shadow: 2px 2px 0 #e1e9f6;
  --search-clear-button-color: #90a0c3;
  --search-icon-color: #90a0c3;
  --search-result-background: #f8fbff;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #171C22;
  --setting-item-alt-background-hover: #d0ddef62;
  --setting-item-background-hover: rgba(129, 155, 199, 0.25);
  --setting-item-border-color: #ccd6eb;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #6e7a92;
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
  --side-bar-bg: #eef3fd;
  --sidebar-icon-color: #171C22;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #6e7a92;
  --sidebar-tab-background-color-hover: #aebdd4;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #6e7a92;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #f8fbff;
  --slider-thumb-border-color: #e1e9f6;
  --slider-thumb-radius: 0;
  --slider-track-background: #ccd6eb;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #90a0c3;
  --statblock-alt: #d0ddef62;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #f8fbff;
  --statblock-bar-border-color: #aebdd4;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #aebdd4;
  --statblock-border-color: #d6deea;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #e1e9f6;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #171C22;
  --statblock-heading-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --statblock-heading-font-color: #6e7a92;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 100;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #d6deea;
  --statblock-primary-color: #171C22;
  --statblock-property-font-color: #171C22;
  --statblock-property-name-font-color: #6e7a92;
  --statblock-rule-color: #aebdd4;
  --statblock-section-heading-border-color: #ccd6eb;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --statblock-section-heading-font-color: #8996a0;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 100;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #eef3fd;
  --status-bar-border-color: #aebdd4;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #90a0c3;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #6e7a92;
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
  --tab-outline-color: #aebdd4;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px #a6aec7, 5px 5px 0 #e1e9f6;
  --tab-text-color: #C0C8D6;
  --tab-text-color-active: #171C22;
  --tab-text-color-focused: #C0C8D6;
  --tab-text-color-focused-active: #171C22;
  --tab-text-color-focused-active-current: #171C22;
  --tab-text-color-focused-highlighted: #000000;
  --tab-text-color-hover: #171C22;
  --tab-top-outline-width: 0;
  --table: #ccd6eb;
  --table-add-button-background: #6e7a92;
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
  --table-drag-handle-background-active: #6e7a92;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #6e7a92;
  --table-header-background-hover: #aebdd4;
  --table-header-border-color: #f8fbff;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #a6aec7;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #d0ddef62;
  --table-row-alt-background-hover: rgba(163, 188, 218, 0.3);
  --table-row-background-hover: rgba(163, 188, 218, 0.3);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #6e7a92;
  --table-selection-border-radius: 0;
  --tag: #7485a3;
  --tag-background: #7485a3;
  --tag-background-color: #7485a3;
  --tag-background-hover: #aebdd4;
  --tag-border-color: #7485a3;
  --tag-border-color-hover: #aebdd4;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #7485a3;
  --tall: 700px;
  --td: #d0ddef62;
  --tertiary: var(--text-accent-hover);
  --text: #171C22;
  --text-accent: #000000;
  --text-accent-hover: #404c62;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(129, 155, 199, 0.25);
  --text-highlight-bg-active: rgba(163, 188, 218, 0.22);
  --text-muted: #90a0c3;
  --text-normal: #171C22;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(163, 188, 218, 0.3);
  --textHighlight: var(--text-highlight-bg);
  --th: #6e7a92;
  --th-text: #e5ebee;
  --theme-rainbow-1: #A6B4CC;
  --theme-rainbow-2: #90a0c3;
  --theme-rainbow-3: #7485a3;
  --theme-rainbow-4: #6e7a92;
  --theme-rainbow-5: #404c62;
  --theme-rainbow-6: #171C22;
  --tiny: 100px;
  --titleFont: var(--font-text);
  --titlebar-background: #f8fbff;
  --titlebar-background-focused: #eef3fd;
  --titlebar-border-color: #ccd6eb;
  --titlebar-text-color: #171C22;
  --titlebar-text-color-focused: #171C22;
  --toggle-border-width: 1px;
  --toggle-radius: 0;
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: 0;
  --toggle-width: 20px;
  --tooltip-color: #e5ebee;
  --vault-font: "Norwester", "Staatliches", "Racing Sans One", "Heavitas", "Playfair Display", serif;
  --vault-name-color: #6e7a92;
  --vault-name-font-size: 25px;
  --vault-name-font-weight: 300;
  --vault-profile-color: #171C22;
  --vault-profile-color-hover: #171C22;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 243, 253);
  color: rgb(23, 28, 34);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(248, 251, 255);
  color: rgb(23, 28, 34);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 251, 255);
  color: rgb(23, 28, 34);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(238, 243, 253);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 243, 253);
  border-left-color: rgb(238, 243, 253);
  color: rgb(23, 28, 34);
}

body div#quartz-root {
  background-color: rgb(248, 251, 255);
  color: rgb(23, 28, 34);
}`,
    typography: `body .page article p > b, b {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(23, 28, 34) none 0px;
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

body .page article p > em, em {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(23, 28, 34) none 0px;
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

body .page article p > i, i {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(23, 28, 34) none 0px;
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

body .page article p > strong, strong {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(23, 28, 34) none 0px;
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

body .text-highlight {
  background-color: rgba(129, 155, 199, 0.25);
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(23, 28, 34) none 0px;
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

body del {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(23, 28, 34) none 0px;
  text-decoration: line-through 1px rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(144, 160, 195);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(144, 160, 195) none 0px;
  text-decoration: rgb(144, 160, 195);
  text-decoration-color: rgb(144, 160, 195);
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
  color: rgb(192, 200, 214);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(192, 200, 214) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(23, 28, 34);
}

body dt {
  color: rgb(23, 28, 34);
}

body ol > li {
  color: rgb(23, 28, 34);
}

body ol.overflow {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

body ul > li {
  color: rgb(23, 28, 34);
}

body ul.overflow {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(241, 247, 255);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

body table {
  color: rgb(23, 28, 34);
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
  color: rgb(23, 28, 34);
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
  background-color: rgb(110, 122, 146);
}`,
    code: `body code {
  border-bottom-color: rgb(129, 147, 181);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(129, 147, 181);
  border-right-color: rgb(129, 147, 181);
  border-top-color: rgb(129, 147, 181);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(129, 147, 181);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(241, 247, 255);
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
  background-color: rgb(241, 247, 255);
  border-bottom-color: rgb(204, 214, 235);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(23, 28, 34);
}

body pre > code, pre:has(> code) {
  background-color: rgb(241, 247, 255);
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
  background-color: rgb(241, 247, 255);
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
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

body figcaption {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

body img {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

body video {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}`,
    embeds: `body .file-embed {
  background-color: rgb(238, 243, 253);
  border-bottom-color: rgb(144, 160, 195);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(144, 160, 195);
  border-right-color: rgb(144, 160, 195);
  border-top-color: rgb(144, 160, 195);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(23, 28, 34);
  color: rgb(23, 28, 34);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(110, 122, 146);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(110, 122, 146);
  border-right-color: rgb(23, 28, 34);
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
  color: rgb(192, 200, 214);
  text-decoration: rgb(192, 200, 214);
  text-decoration-color: rgb(192, 200, 214);
}

body input[type=checkbox] {
  border-bottom-color: rgb(174, 189, 212);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(174, 189, 212);
  border-right-color: rgb(174, 189, 212);
  border-top-color: rgb(174, 189, 212);
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
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

body li.task-list-item[data-task='/'] {
  color: rgb(144, 160, 195);
  text-decoration: rgb(144, 160, 195);
  text-decoration-color: rgb(144, 160, 195);
}

body li.task-list-item[data-task='>'] {
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
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
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
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
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

body li.task-list-item[data-task='l'] {
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

body li.task-list-item[data-task='u'] {
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

body li.task-list-item[data-task='w'] {
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
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
  border-bottom-color: rgb(23, 28, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(23, 28, 34);
  border-left-width: 4px;
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
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
  color: rgb(23, 28, 34);
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
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(23, 28, 34) none 0px;
  text-decoration: rgb(23, 28, 34);
  text-decoration-color: rgb(23, 28, 34);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(23, 28, 34);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(23, 28, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(23, 28, 34);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(163, 188, 218, 0.22);
  color: rgb(23, 28, 34);
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
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(163, 188, 218, 0.22);
  border-bottom-color: rgb(23, 28, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(23, 28, 34);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(163, 188, 218, 0.22);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(23, 28, 34);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(116, 133, 163);
  border-bottom-color: rgb(116, 133, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(116, 133, 163);
  border-right-color: rgb(116, 133, 163);
  border-top-color: rgb(116, 133, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(110, 122, 146);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

body h2 {
  color: rgb(110, 122, 146);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(110, 122, 146);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

body h3 {
  color: rgb(110, 122, 146);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

body h4 {
  color: rgb(110, 122, 146);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

body h5 {
  color: rgb(110, 122, 146);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
}

body h6 {
  color: rgb(110, 122, 146);
  font-family: Norwester, Staatliches, "Racing Sans One", Heavitas, "Playfair Display", serif;
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
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
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
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(23, 28, 34);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(23, 28, 34);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(23, 28, 34);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(110, 122, 146);
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
  border-bottom-color: rgb(144, 160, 195);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(144, 160, 195);
  border-right-color: rgb(144, 160, 195);
  border-top-color: rgb(144, 160, 195);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(144, 160, 195);
}`,
    footer: `body footer {
  background-color: rgb(238, 243, 253);
  border-bottom-color: rgb(174, 189, 212);
  border-left-color: rgb(174, 189, 212);
  border-right-color: rgb(174, 189, 212);
  border-top-color: rgb(174, 189, 212);
  border-top-left-radius: 0px;
  color: rgb(144, 160, 195);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(144, 160, 195);
  text-decoration: rgb(144, 160, 195);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
  color: rgb(23, 28, 34);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

body li.section-li > .section .meta {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(23, 28, 34);
  text-decoration: rgb(23, 28, 34);
}

body ul.section-ul {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(144, 160, 195);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(144, 160, 195);
  border-right-color: rgb(144, 160, 195);
  border-top-color: rgb(144, 160, 195);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(144, 160, 195);
}

body .darkmode svg {
  color: rgb(144, 160, 195);
  stroke: rgb(144, 160, 195);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(192, 200, 214);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(192, 200, 214);
  border-right-color: rgb(192, 200, 214);
  border-top-color: rgb(192, 200, 214);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(192, 200, 214);
}

body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
  color: rgb(23, 28, 34);
}

body .metadata {
  border-bottom-color: rgb(204, 214, 235);
  border-left-color: rgb(204, 214, 235);
  border-right-color: rgb(204, 214, 235);
  border-top-color: rgb(204, 214, 235);
  color: rgb(144, 160, 195);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(144, 160, 195);
  border-left-color: rgb(144, 160, 195);
  border-right-color: rgb(144, 160, 195);
  border-top-color: rgb(144, 160, 195);
  color: rgb(144, 160, 195);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(238, 243, 253);
}

body .page-header h2.page-title {
  color: rgb(23, 28, 34);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(23, 28, 34);
  text-decoration: underline dotted rgb(23, 28, 34);
}

body details {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

body input[type=text] {
  border-bottom-color: rgb(144, 160, 195);
  border-left-color: rgb(144, 160, 195);
  border-right-color: rgb(144, 160, 195);
  border-top-color: rgb(144, 160, 195);
  color: rgb(144, 160, 195);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(241, 247, 255);
  border-bottom-color: rgb(129, 147, 181);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(129, 147, 181);
  border-right-color: rgb(129, 147, 181);
  border-top-color: rgb(129, 147, 181);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(225, 233, 246) 0px 2px 0px 0px;
  color: rgb(129, 147, 181);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(23, 28, 34);
  border-left-color: rgb(23, 28, 34);
  border-right-color: rgb(23, 28, 34);
  border-top-color: rgb(23, 28, 34);
}

body sub {
  color: rgb(23, 28, 34);
}

body summary {
  color: rgb(23, 28, 34);
}

body sup {
  color: rgb(23, 28, 34);
}`,
  },
};
