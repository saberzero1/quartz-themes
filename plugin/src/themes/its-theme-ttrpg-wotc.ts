import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.ttrpg-wotc",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #863737;
  --accent-color: 134, 55, 55;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #42536e;
  --accent2-lite: #61afef;
  --aside-bg: #11151d;
  --background-modifier-active-hover: #652121;
  --background-modifier-border: #283345;
  --background-modifier-border-focus: #863737;
  --background-modifier-border-hover: #252c36;
  --background-modifier-cover: #06080c60;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #06080c60;
  --background-modifier-form-field-hover: #06080c60;
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #652121;
  --background-modifier-success: #32603e;
  --background-primary: #1a1e24;
  --background-primary-alt: #3f1010;
  --background-secondary: #1a1e24;
  --background-secondary-alt: #0b0f13;
  --bases-cards-background: #1a1e24;
  --bases-cards-cover-background: #3f1010;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #283345;
  --bases-cards-shadow-hover: 0 0 0 1px #252c36;
  --bases-embed-border-color: #283345;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #97a1b9;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #1a1e24;
  --bases-table-cell-background-active: #1a1e24;
  --bases-table-cell-background-disabled: #3f1010;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #863737;
  --bases-table-cell-shadow-focus: 0 0 0 2px #652121;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #3f1010;
  --bases-table-header-background: #1a1e24;
  --bases-table-header-background-hover: rgba(212, 47, 47, 0.4);
  --bases-table-header-color: #97a1b9;
  --bases-table-row-background-hover: #7a141466;
  --bases-table-summary-background: #1a1e24;
  --bases-table-summary-background-hover: rgba(212, 47, 47, 0.4);
  --bg: #252c36;
  --blockquote-background-color: #0d1014;
  --blockquote-border-color: #252c36;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #bccad8;
  --blockquote-font-style: "its-Bookerly", "Bookerly", Inter;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #0b0f13 65%, transparent) linear-gradient(#0b0f13, color-mix(in srgb, #0b0f13 65%, transparent));
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #0000008c;
  --box-border-m: 3px solid #0000008c;
  --box-border-s: 1px solid #0000008c;
  --bttn: #652121;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #652121;
  --button-background-hover: #586477;
  --button-border: #652121;
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
  --checkbox-border-color: #863737;
  --checkbox-border-color-hover: #652121;
  --checkbox-color: #863737;
  --checkbox-color-hover: #652121;
  --checkbox-marker-color: #1a1e24;
  --checkbox-radius: 0;
  --checklist-done-color: #586477;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #232831;
  --code-bg: #232831;
  --code-border-color: #283345;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4e5b6f;
  --code-normal: #fa4545;
  --code-punctuation: #97a1b9;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #0000008c;
  --code-size: .90em;
  --code-text: #fa4545;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #586477;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(199, 87, 92);
  --color-accent-2: rgb(209, 113, 121);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "its-Fira Code", "Fira Code", Inter;
  --dark-accent: #652121;
  --dark-sidebar: #0d1014;
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: #0b0f13;
  --dataview-th-border-bottom: 2px solid #c14343;
  --dataview-th-color: #c14343;
  --dataview-th-count-color: #c14343;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "its-Draconis", "Draconis", Inter;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 500;
  --deep-dark-accent: #3f1010;
  --divider-color: #0b0f13;
  --divider-color-hover: #863737;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #652121;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #06080c60;
  --dropdown-background: #0b0f13;
  --dropdown-background-hover: #586477;
  --embed-bg: #0d1014;
  --embed-block-shadow-hover: 2px 2px 0 #0000008c;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #0000008c;
  --embed-border-color: transparent;
  --embed-border-color-hover: #0000008c;
  --embed-border-left: 2px solid #c14343;
  --embed-border-left-color: #c14343;
  --embed-border-left-color-hover: #c14343;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #0000008c;
  --embed-border-start: 2px solid #652121;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #0000008c;
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
  --fg: #cfd7dd;
  --file-font: "its";
  --file-header-background: transparent;
  --file-header-background-focused: #1a1e24;
  --file-header-breadcrumb-color: #586477;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #586477;
  --file-header-color-active: #bccad8;
  --file-header-font: '??', "its-Bookerly", "Bookerly", Inter;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #652121;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #0b0f13;
  --file-icon: "";
  --file-icon-color: #586477;
  --file-icon-margin: 6px;
  --file-text-color: #bccad8;
  --flair-background: #0b0f13;
  --flair-color: #bccad8;
  --folder: #863737;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #863737;
  --folder-icon-open-color: #e05858;
  --folder-open: #e05858;
  --folder-open-text-color: #bccad8;
  --folder-text-color: #bccad8;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: "its-Draconis", "Draconis", Inter;
  --font-default: "its-Bookerly", "Bookerly", Inter;
  --font-frontmatter: .95em;
  --font-interface: '??', "its-Bookerly", "Bookerly", Inter;
  --font-ligatures: none;
  --font-mermaid: "its-Bookerly", "Bookerly", Inter;
  --font-monospace: "its-Fira Code", "Fira Code", Inter;
  --font-print: "its-Bookerly", "Bookerly", Inter, '??', '??', 'Arial';
  --font-print-override: "its-Bookerly", "Bookerly", Inter;
  --font-small: .95em;
  --font-smaller: .90em;
  --font-smallest: .85em;
  --font-text: "its-Bookerly", "Bookerly", Inter;
  --font-ui-small: 14px;
  --font-ui-smaller: 13.5px;
  --footnote: #63778f;
  --footnote-divider-color: #283345;
  --footnote-id-color: #97a1b9;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #06080c60;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #586477;
  --graph-arrow: #97a1b9;
  --graph-background: #1a1e24;
  --graph-bg: #1a1e24;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #c94d4d;
  --graph-focused: #61afef;
  --graph-img: #42536e;
  --graph-line: #7a141466;
  --graph-line-hover: #863737;
  --graph-lines: #7a141466;
  --graph-node: #bccad8;
  --graph-node-attachment: #42536e;
  --graph-node-focused: #61afef;
  --graph-node-hover-fill: #c94d4d;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #652121;
  --graph-node-unresolved: #586477;
  --graph-tag: #652121;
  --graph-text: #bccad8;
  --h1-background: transparent;
  --h1-border-color: #7c2929;
  --h1-border-left-color: linear-gradient(to left, #c93c3c, transparent);
  --h1-border-line-color: #c93c3c;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: linear-gradient(to right, #c93c3c, transparent);
  --h1-border-width: 0;
  --h1-color: #c14343;
  --h1-font: "its-Draconis", "Draconis", Inter;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h1-weight: 500;
  --h2-background: transparent;
  --h2-border-color: #652121;
  --h2-border-left-color: linear-gradient(to left, sandybrown, transparent);
  --h2-border-line-color: sandybrown;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: linear-gradient(to right, sandybrown, transparent);
  --h2-border-width: 0;
  --h2-color: sandybrown;
  --h2-font: "its-Draconis", "Draconis", Inter;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 500;
  --h3-background: transparent;
  --h3-border-color: #471d1d;
  --h3-border-left-color: linear-gradient(to left, #a11111, transparent);
  --h3-border-line-color: #a11111;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: linear-gradient(to right, #a11111, transparent);
  --h3-border-width: 0;
  --h3-color: #a11111;
  --h3-font: "its-Draconis", "Draconis", Inter;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 500;
  --h4-background: transparent;
  --h4-border-color: #381919;
  --h4-border-left-color: linear-gradient(to left, #283345, transparent);
  --h4-border-line-color: #283345;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: linear-gradient(to right, #283345, transparent);
  --h4-border-width: 0;
  --h4-color: #c14343;
  --h4-font: "its-Draconis", "Draconis", Inter;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 500;
  --h5-background: transparent;
  --h5-border-color: #424c61;
  --h5-border-left-color: linear-gradient(to left, #283345, transparent);
  --h5-border-line-color: #283345;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: linear-gradient(to right, #283345, transparent);
  --h5-border-width: 0;
  --h5-color: #c14343;
  --h5-font: "its-Draconis", "Draconis", Inter;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 500;
  --h6-background: transparent;
  --h6-border-color: #2e333d;
  --h6-border-left-color: linear-gradient(to left, #283345, transparent);
  --h6-border-line-color: #283345;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: linear-gradient(to right, #283345, transparent);
  --h6-border-width: 0;
  --h6-color: #c14343;
  --h6-font: "its-Draconis", "Draconis", Inter;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 500;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #c14343;
  --he-text-on-accent-inactive: #bccad8;
  --he-title-bar-active-action: #c94d4d;
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
  --header-border-line-color: #283345;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 500;
  --headers: #c14343;
  --heading-formatting: #586477;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: #7a141466;
  --hr: #772d2d;
  --hr-alignment: -50%, -50%;
  --hr-color: #772d2d;
  --hr-icon-background: #1a1e24;
  --hr-icon-color: #c14343;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 100 7' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenoddclip-rule:evenoddstroke-linejoin:roundstroke-miterlimit:2'%3E%3Crect id='Artboard1' x='0' y='0' width='100' height='7' style='fill:none'/%3E%3Cpath d='M50,2.5L100,3.5L50,4L0,3.5L50,2.5Z' style='fill:rgb(146, 47, 47)'/%3E%3C/svg%3E") no-repeat center center;
  --hr-image-height: 5px;
  --hr-image-width: 100%;
  --hr-text-offset: 12px;
  --hr-thickness: 0;
  --hr-width: auto;
  --hvr: rgba(168, 60, 60, 0.4);
  --hvr-active: rgba(212, 47, 47, 0.4);
  --hvr2: #7a141466;
  --i-at: #bf5e5e;
  --icon-btn-radius: 0;
  --icon-color: #bccad8;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #bccad8;
  --icon-color-hover: #bccad8;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #0000008c;
  --illusion-h1-background: #7c2929;
  --illusion-h2-background: #652121;
  --illusion-h3-background: #471d1d;
  --illusion-h4-background: #381919;
  --illusion-h5-background: #424c61;
  --illusion-h6-background: #2e333d;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: #06080c60;
  --image-border-color: #283345;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #586477;
  --indentation-guide-color: #772d2d;
  --indentation-guide-color-active: #863737;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #772d2d;
  --initiative-xp: sandybrown;
  --inline-title-color: #c14343;
  --inline-title-font: "its-Draconis", "Draconis", Inter;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --inline-title-weight: 500;
  --input-bg: rgba(0, 0, 0, 0.3);
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #0000008c;
  --input-shadow-hover: 3px 3px 0 #0000008c;
  --interactive-accent: #652121;
  --interactive-accent-hover: #586477;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #586477;
  --interactive-normal: #0b0f13;
  --its: "its";
  --kanban-button-background: #232831;
  --kanban-button-shadow: 2px 2px 0 #0000008c;
  --kanban-card-border: 2px solid #0000008c;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #1a1e24;
  --kanban-card-text-color: #bccad8;
  --kanban-card-title-background: #06080c60;
  --kanban-card-title-border: 0 1px 0 #0000008c;
  --kanban-lane-background: #232831;
  --kanban-lane-border: 3px solid #0000008c;
  --kanban-lane-box-shadow: 2px 2px 0 #0000008c;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #61afef;
  --kanban-tag-background: #652121;
  --latex-color: #c94d4d;
  --latex-format-color: #586477;
  --latex-syntax-color: #97a1b9;
  --line-height-tight: 1.3em;
  --lines: #772d2d;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #61afef;
  --link-color-hover: #c94d4d;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #61afef;
  --link-external-color-hover: #42536e;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #586477;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #283345;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #772d2d;
  --list-color-2: #772d2d;
  --list-color-3: #772d2d;
  --list-color-4: #772d2d;
  --list-color-5: #772d2d;
  --list-color-6: #772d2d;
  --list-indent: 25px;
  --list-marker-color: #863737;
  --list-marker-color-collapsed: #586477;
  --list-marker-color-hover: #97a1b9;
  --list-marker-color-other: #42536e;
  --list-marker-min-width: 0;
  --list-numbered-color: #c94d4d;
  --list-spacing: 1px;
  --lite-accent: #c94d4d;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #1a1e24;
  --menu-border-color: #252c36;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #0000008c;
  --message-border-color: #0000008c;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #0000008c;
  --message-color: #e5ebee;
  --metadata-border-color: #283345;
  --metadata-button-text-color: #586477;
  --metadata-divider-color: #283345;
  --metadata-icon-color: #bccad8;
  --metadata-input-background-active: #06080c60;
  --metadata-input-font: '??', "its-Bookerly", "Bookerly", Inter;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #bccad8;
  --metadata-label-background-active: #06080c60;
  --metadata-label-font: '??', "its-Bookerly", "Bookerly", Inter;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #97a1b9;
  --metadata-label-text-color-hover: #97a1b9;
  --metadata-property-background-active: rgba(212, 47, 47, 0.4);
  --metadata-property-box-shadow-focus: 0 0 0 2px #863737;
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
  --modal-border-color: #0000008c;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: #06080c60;
  --modal-radius: 0;
  --modal-sidebar-background: #0d1014;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #bccad8;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #97a1b9;
  --nav-heading-color-hover: #bccad8;
  --nav-indentation-guide-color: #772d2d;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #652121;
  --nav-item-background-border-color-hover: #652121;
  --nav-item-background-hover: #652121;
  --nav-item-background-selected: rgba(168, 60, 60, 0.4);
  --nav-item-border-color: #c94d4d;
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
  --note-title-border-color: #c14343;
  --outer-bar: #0b0f13;
  --outline: #0000008c;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: transparent;
  --paper-edges: 0 0 60px #0000008c inset;
  --paper-edges-m: 0 0 100px #0000008c inset;
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #283345;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #283345;
  --pill-border-color: #283345;
  --pill-border-color-hover: #252c36;
  --pill-color: #97a1b9;
  --pill-color-hover: #bccad8;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #61afef;
  --pill-radius: 0;
  --popover-background: #1a1e24;
  --popover-border: 3px solid #0000008c;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #863737;
  --progress-bg: #252c36;
  --prompt-background: #1a1e24;
  --prompt-border-color: #0000008c;
  --prompt-border-width: 3px;
  --r-heading-color: #c14343;
  --r-heading-font: "its-Draconis", "Draconis", Inter;
  --r-heading-font-weight: 500;
  --r-heading-text-transform: capitalize;
  --r-main-font: "its-Bookerly", "Bookerly", Inter;
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
  --scrollbar-active-thumb-bg: #c94d4d;
  --scrollbar-bg: #252c36;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #652121;
  --scrollbar-track-bg: #1a1e24;
  --search-border: 2px solid #0000008c;
  --search-box-shadow: 2px 2px 0 #0000008c;
  --search-clear-button-color: #97a1b9;
  --search-icon-color: #97a1b9;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #bccad8;
  --setting-item-alt-background-hover: #06080c60;
  --setting-item-background-hover: rgba(168, 60, 60, 0.4);
  --setting-item-border-color: #283345;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #c14343;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #06080c60;
  --setting-items-background: transparent;
  --setting-items-border-color: #283345;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #0000008c;
  --shadow-m: 3px 3px 0 #0000008c;
  --shadow-ml: 4px 4px 0 #0000008c;
  --shadow-s: 2px 2px 0 #0000008c;
  --side-bar: #1a1e24;
  --side-bar-bg: #0b0f13;
  --sidebar-icon-color: #bccad8;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #652121;
  --sidebar-tab-background-color-hover: #863737;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #652121;
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
  --soft-text: #97a1b9;
  --statblock-alt: #06080c60;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #1a1e24;
  --statblock-bar-border-color: #863737;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #863737;
  --statblock-border-color: #772d2d;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #0000008c;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "its-Bookerly", "Bookerly", Inter;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #bccad8;
  --statblock-heading-font: "its-Draconis", "Draconis", Inter;
  --statblock-heading-font-color: #c14343;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 500;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #772d2d;
  --statblock-primary-color: #bccad8;
  --statblock-property-font-color: #bccad8;
  --statblock-property-name-font-color: #c14343;
  --statblock-rule-color: #863737;
  --statblock-section-heading-border-color: #283345;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "its-Draconis", "Draconis", Inter;
  --statblock-section-heading-font-color: #63778f;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 500;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #0b0f13;
  --status-bar-border-color: #863737;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #97a1b9;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #652121;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --success-bg: #32603e;
  --suggestion-background: #1a1e24;
  --tab-background: #0b0f13;
  --tab-background-active: #1a1e24;
  --tab-container-background: transparent;
  --tab-curve: 0;
  --tab-divider-color: #772d2d;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #863737;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #06080c60;
  --tab-stacked-shadow-color: #06080c60;
  --tab-switcher-background: #1a1e24;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1e24, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #0000008c;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #0000008c;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #c94d4d, 5px 5px 0 #0000008c;
  --tab-text-color: #586477;
  --tab-text-color-active: #bccad8;
  --tab-text-color-focused: #586477;
  --tab-text-color-focused-active: #bccad8;
  --tab-text-color-focused-active-current: #bccad8;
  --tab-text-color-focused-highlighted: #61afef;
  --tab-text-color-hover: #bccad8;
  --tab-titlebar-color: transparent;
  --tab-top-outline-width: 0;
  --table: #283345;
  --table-add-button-background: #652121;
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
  --table-drag-handle-background-active: #652121;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #652121;
  --table-header-background-hover: #863737;
  --table-header-border-color: #1a1e24;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: "its-Bookerly", "Bookerly", Inter;
  --table-header-text-color: #c94d4d;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #06080c60;
  --table-row-alt-background-hover: #7a141466;
  --table-row-background-hover: #7a141466;
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #652121;
  --table-selection-border-radius: 0;
  --tag: #652121;
  --tag-background: #652121;
  --tag-background-color: #652121;
  --tag-background-hover: #863737;
  --tag-border-color: #652121;
  --tag-border-color-hover: #863737;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "its-Bookerly", "Bookerly", Inter;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #d04e4e;
  --tall: 700px;
  --td: #06080c60;
  --text: #bccad8;
  --text-accent: #61afef;
  --text-accent-hover: #42536e;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(168, 60, 60, 0.4);
  --text-highlight-bg-active: rgba(212, 47, 47, 0.4);
  --text-muted: #97a1b9;
  --text-normal: #bccad8;
  --text-on-accent: #e5ebee;
  --text-selection: #7a141466;
  --th: #652121;
  --th-text: #e5ebee;
  --theme-rainbow-1: #7c2929;
  --theme-rainbow-2: #652121;
  --theme-rainbow-3: #471d1d;
  --theme-rainbow-4: #381919;
  --theme-rainbow-5: #424c61;
  --theme-rainbow-6: #2e333d;
  --tiny: 100px;
  --titlebar-background: #1a1e24;
  --titlebar-background-focused: #0b0f13;
  --titlebar-border-color: #283345;
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
  --vault-font: "its-Draconis", "Draconis", Inter;
  --vault-name-color: #c14343;
  --vault-name-font-size: 25px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #bccad8;
  --vault-profile-color-hover: #bccad8;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
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
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(11, 15, 19);
  color: rgb(188, 202, 216);
}

body div#quartz-root {
  background-color: rgb(26, 30, 36);
  color: rgb(188, 202, 216);
}`,
    typography: `body .page article p > b, b {
  color: rgb(188, 202, 216);
  font-family: its-Bookerly, Bookerly, Inter;
  font-weight: 900;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body .page article p > em, em {
  color: rgb(188, 202, 216);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body .page article p > i, i {
  color: rgb(188, 202, 216);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body .page article p > strong, strong {
  color: rgb(188, 202, 216);
  font-family: its-Bookerly, Bookerly, Inter;
  font-weight: 900;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body .text-highlight {
  background-color: rgba(168, 60, 60, 0.4);
  color: rgb(188, 202, 216);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
}

body del {
  color: rgb(188, 202, 216);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(188, 202, 216) none 0px;
  text-decoration: line-through 1px rgb(188, 202, 216);
  text-decoration-color: rgb(188, 202, 216);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(151, 161, 185);
  font-family: "??", its-Bookerly, Bookerly, Inter;
  outline: rgb(151, 161, 185) none 0px;
  text-decoration: rgb(151, 161, 185);
  text-decoration-color: rgb(151, 161, 185);
}`,
    links: `body a.external, footer a {
  color: rgb(97, 175, 239);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 175, 239);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
}

body a.internal.broken {
  color: rgb(88, 100, 119);
  font-family: its-Bookerly, Bookerly, Inter;
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
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body ul > li {
  color: rgb(188, 202, 216);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
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
  font-family: its-Bookerly, Bookerly, Inter;
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
  font-family: its-Bookerly, Bookerly, Inter;
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
  background-color: rgb(101, 33, 33);
}`,
    code: `body code {
  border-bottom-color: rgb(250, 69, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(250, 69, 69);
  border-right-color: rgb(250, 69, 69);
  border-top-color: rgb(250, 69, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(250, 69, 69);
  font-family: "its-Fira Code", "Fira Code", Inter;
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
  color: rgb(188, 202, 216);
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
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body figcaption {
  color: rgb(188, 202, 216);
  font-family: its-Bookerly, Bookerly, Inter;
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
  border-bottom-width: 11px;
  border-left-color: rgb(101, 33, 33);
  border-left-width: 11px;
  border-right-color: rgb(188, 202, 216);
  border-right-style: solid;
  border-right-width: 11px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 11px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 11px;
  border-left-color: rgb(101, 33, 33);
  border-left-width: 11px;
  border-right-color: rgb(188, 202, 216);
  border-right-style: solid;
  border-right-width: 11px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 11px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: its-Bookerly, Bookerly, Inter;
}

body .katex-display > .katex > .katex-html {
  font-family: its-Bookerly, Bookerly, Inter;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(88, 100, 119);
  text-decoration: rgb(88, 100, 119);
  text-decoration-color: rgb(88, 100, 119);
}

body input[type=checkbox] {
  border-bottom-color: rgb(134, 55, 55);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(134, 55, 55);
  border-right-color: rgb(134, 55, 55);
  border-top-color: rgb(134, 55, 55);
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
  background-color: rgba(6, 8, 12, 0.376);
  border-bottom-color: rgb(40, 51, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgba(0, 0, 0, 0.55);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0.55);
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0.55);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0.55);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgba(0, 0, 0, 0.55) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(188, 202, 216);
  font-family: its-Bookerly, Bookerly, Inter;
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
  background-color: rgba(212, 47, 47, 0.4);
  color: rgb(188, 202, 216);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0.55);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0.55);
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0.55);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0.55);
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
  background-color: rgba(212, 47, 47, 0.4);
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
  background-color: rgba(212, 47, 47, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(101, 33, 33);
  border-bottom-color: rgb(101, 33, 33);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(101, 33, 33);
  border-right-color: rgb(101, 33, 33);
  border-top-color: rgb(101, 33, 33);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

body h2 {
  color: rgb(244, 164, 96);
  font-family: its-Draconis, Draconis, Inter;
}

body h2.page-title, h2.page-title a {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

body h3 {
  color: rgb(161, 17, 17);
  font-family: its-Draconis, Draconis, Inter;
}

body h4 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

body h5 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

body h6 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
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
  font-family: "??", its-Bookerly, Bookerly, Inter;
  font-weight: 700;
  text-decoration: rgb(188, 202, 216);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(188, 202, 216);
  font-family: "??", its-Bookerly, Bookerly, Inter;
  font-weight: 700;
  text-decoration: rgb(188, 202, 216);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(188, 202, 216);
  font-family: "??", its-Bookerly, Bookerly, Inter;
  font-weight: 500;
  text-decoration: rgb(188, 202, 216);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(101, 33, 33);
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
  border-bottom-color: rgb(188, 202, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}`,
    footer: `body footer {
  background-color: rgb(11, 15, 19);
  border-bottom-color: rgb(134, 55, 55);
  border-left-color: rgb(134, 55, 55);
  border-right-color: rgb(134, 55, 55);
  border-top-color: rgb(134, 55, 55);
  border-top-left-radius: 0px;
  color: rgb(151, 161, 185);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

body footer ul li a {
  color: rgb(151, 161, 185);
  text-decoration: rgb(151, 161, 185);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(188, 202, 216);
  font-family: "??", its-Bookerly, Bookerly, Inter;
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
  font-family: "??", its-Bookerly, Bookerly, Inter;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}

body li.section-li > .section .meta {
  color: rgb(188, 202, 216);
  font-family: "??", its-Bookerly, Bookerly, Inter;
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

body .darkmode svg {
  color: rgb(188, 202, 216);
  stroke: rgb(188, 202, 216);
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
  font-family: "??", its-Bookerly, Bookerly, Inter;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
  color: rgb(188, 202, 216);
}

body .metadata {
  border-bottom-color: rgb(40, 51, 69);
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
  color: rgb(151, 161, 185);
  font-family: its-Bookerly, Bookerly, Inter;
}

body .metadata-properties {
  border-bottom-color: rgb(151, 161, 185);
  border-left-color: rgb(151, 161, 185);
  border-right-color: rgb(151, 161, 185);
  border-top-color: rgb(151, 161, 185);
  color: rgb(151, 161, 185);
  font-family: its-Bookerly, Bookerly, Inter;
}

body .navigation-progress {
  background-color: rgb(11, 15, 19);
}

body .page-header h2.page-title {
  color: rgb(188, 202, 216);
  font-family: "??", its-Bookerly, Bookerly, Inter;
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
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

body kbd {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(250, 69, 69);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(250, 69, 69);
  border-right-color: rgb(250, 69, 69);
  border-top-color: rgb(250, 69, 69);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 0px 0px;
  color: rgb(250, 69, 69);
  font-family: "its-Fira Code", "Fira Code", Inter;
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
  --accent: #c75959;
  --accent-color: 199, 89, 89;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #000000;
  --accent2-lite: #df6262;
  --aside-bg: #faf2e9;
  --background-modifier-active-hover: #cd645e;
  --background-modifier-border: #fbb4577e;
  --background-modifier-border-focus: #c75959;
  --background-modifier-border-hover: #f6e3cd;
  --background-modifier-cover: #fae0be60;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #fae0be60;
  --background-modifier-form-field-hover: #fae0be60;
  --background-modifier-hover: rgba(182, 28, 28, 0.5);
  --background-modifier-message: #cd645e;
  --background-modifier-success: #599049;
  --background-primary: #fff9f0;
  --background-primary-alt: #2e1010;
  --background-secondary: #fff6e4;
  --background-secondary-alt: #fbe2c5;
  --bases-cards-background: #fff9f0;
  --bases-cards-cover-background: #2e1010;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #fbb4577e;
  --bases-cards-shadow-hover: 0 0 0 1px #f6e3cd;
  --bases-embed-border-color: #fbb4577e;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #697580;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #fff9f0;
  --bases-table-cell-background-active: #fff9f0;
  --bases-table-cell-background-disabled: #2e1010;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #c75959;
  --bases-table-cell-shadow-focus: 0 0 0 2px #cd645e;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #2e1010;
  --bases-table-header-background: #fff9f0;
  --bases-table-header-background-hover: rgba(182, 28, 28, 0.5);
  --bases-table-header-color: #697580;
  --bases-table-row-background-hover: #c20a0a35;
  --bases-table-summary-background: #fff9f0;
  --bases-table-summary-background-hover: rgba(182, 28, 28, 0.5);
  --bg: #f6e3cd;
  --blockquote-background-color: #faf2e9;
  --blockquote-border-color: #f6e3cd;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #412f2f;
  --blockquote-font-style: "its-Bookerly", "Bookerly", Inter;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #fff9f0 65%, transparent) linear-gradient(#fff9f0, color-mix(in srgb, #fff9f0 65%, transparent));
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #fbb4577e;
  --box-border-m: 3px solid #fbb4577e;
  --box-border-s: 1px solid #fbb4577e;
  --bttn: #c14343;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #c14343;
  --button-background-hover: #e2b7a3;
  --button-border: #c14343;
  --button-border-radius: 0;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #fff9f0;
  --canvas-card-label-color: #4e5b6f;
  --canvas-color: 166, 180, 204;
  --canvas-color-opacity: 0.07;
  --canvas-controls-radius: 0;
  --canvas-node-padding: 0 7px;
  --caret-color: #412f2f;
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
  --checkbox-border-color: #c75959;
  --checkbox-border-color-hover: #cd645e;
  --checkbox-color: #c75959;
  --checkbox-color-hover: #cd645e;
  --checkbox-marker-color: #fff9f0;
  --checkbox-radius: 0;
  --checklist-done-color: #e2b7a3;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #f3e6d2;
  --code-bg: #f3e6d2;
  --code-border-color: #fbb4577e;
  --code-bracket-background: rgba(182, 28, 28, 0.5);
  --code-comment: #4e5b6f;
  --code-normal: #681010;
  --code-punctuation: #697580;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #fbb4577e;
  --code-size: .90em;
  --code-text: #681010;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #e2b7a3;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(194, 76, 78);
  --color-accent-2: rgb(199, 87, 92);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "its-Fira Code", "Fira Code", Inter;
  --dark-accent: #cd645e;
  --dark-sidebar: #f6e3cd;
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(199, 89, 89, 0.1);
  --dataview-th-background: #fbe2c5;
  --dataview-th-border-bottom: 2px solid #c14343;
  --dataview-th-color: #c14343;
  --dataview-th-count-color: #c14343;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "its-Draconis", "Draconis", Inter;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 500;
  --deep-dark-accent: #2e1010;
  --divider-color: #fbe2c5;
  --divider-color-hover: #c75959;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #cd645e;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #fae0be60;
  --dropdown-background: #fbe2c5;
  --dropdown-background-hover: #e2b7a3;
  --embed-bg: #faf2e9;
  --embed-block-shadow-hover: 2px 2px 0 #fbb4577e;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #fbb4577e;
  --embed-border-color: transparent;
  --embed-border-color-hover: #fbb4577e;
  --embed-border-left: 2px solid #c14343;
  --embed-border-left-color: #c14343;
  --embed-border-left-color-hover: #c14343;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #fbb4577e;
  --embed-border-start: 2px solid #cd645e;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #fbb4577e;
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
  --fg: #c75959;
  --file-font: "its";
  --file-header-background: transparent;
  --file-header-background-focused: #fff9f0;
  --file-header-breadcrumb-color: #e2b7a3;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #e2b7a3;
  --file-header-color-active: #412f2f;
  --file-header-font: '??', "its-Bookerly", "Bookerly", Inter;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #cd645e;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #fbe2c5;
  --file-icon: "";
  --file-icon-color: #ebbd92;
  --file-icon-margin: 6px;
  --file-text-color: #412f2f;
  --flair-background: #fbe2c5;
  --flair-color: #412f2f;
  --folder: #c14343;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #c14343;
  --folder-icon-open-color: #412f2f;
  --folder-open: #412f2f;
  --folder-open-text-color: #412f2f;
  --folder-text-color: #412f2f;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: "its-Draconis", "Draconis", Inter;
  --font-default: "its-Bookerly", "Bookerly", Inter;
  --font-frontmatter: .95em;
  --font-interface: '??', "its-Bookerly", "Bookerly", Inter;
  --font-ligatures: none;
  --font-mermaid: "its-Bookerly", "Bookerly", Inter;
  --font-monospace: "its-Fira Code", "Fira Code", Inter;
  --font-print: "its-Bookerly", "Bookerly", Inter, '??', '??', 'Arial';
  --font-print-override: "its-Bookerly", "Bookerly", Inter;
  --font-small: .95em;
  --font-smaller: .90em;
  --font-smallest: .85em;
  --font-text: "its-Bookerly", "Bookerly", Inter;
  --font-ui-small: 14px;
  --font-ui-smaller: 13.5px;
  --footnote: #8996a0;
  --footnote-divider-color: #fbb4577e;
  --footnote-id-color: #697580;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #fae0be60;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #e2b7a3;
  --graph-arrow: #697580;
  --graph-background: #fff9f0;
  --graph-bg: #fff9f0;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #a35158;
  --graph-focused: #df6262;
  --graph-img: #000000;
  --graph-line: #c20a0a35;
  --graph-line-hover: #c75959;
  --graph-lines: #c20a0a35;
  --graph-node: #412f2f;
  --graph-node-attachment: #000000;
  --graph-node-focused: #df6262;
  --graph-node-hover-fill: #a35158;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #cd645e;
  --graph-node-unresolved: #e2b7a3;
  --graph-tag: #cd645e;
  --graph-text: #412f2f;
  --h1-background: transparent;
  --h1-border-color: #bb5555;
  --h1-border-left-color: linear-gradient(to left, #c93c3c, transparent);
  --h1-border-line-color: #c93c3c;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: linear-gradient(to right, #c93c3c, transparent);
  --h1-border-width: 0;
  --h1-color: #c14343;
  --h1-font: "its-Draconis", "Draconis", Inter;
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h1-weight: 500;
  --h2-background: transparent;
  --h2-border-color: #a53f3f;
  --h2-border-left-color: linear-gradient(to left, sandybrown, transparent);
  --h2-border-line-color: sandybrown;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: linear-gradient(to right, sandybrown, transparent);
  --h2-border-width: 0;
  --h2-color: sandybrown;
  --h2-font: "its-Draconis", "Draconis", Inter;
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 500;
  --h3-background: transparent;
  --h3-border-color: #862c2c;
  --h3-border-left-color: linear-gradient(to left, #a11111, transparent);
  --h3-border-line-color: #a11111;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: linear-gradient(to right, #a11111, transparent);
  --h3-border-width: 0;
  --h3-color: #a11111;
  --h3-font: "its-Draconis", "Draconis", Inter;
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 500;
  --h4-background: transparent;
  --h4-border-color: #662828;
  --h4-border-left-color: linear-gradient(to left, #fbb4577e, transparent);
  --h4-border-line-color: #fbb4577e;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 44%;
  --h4-border-right-color: linear-gradient(to right, #fbb4577e, transparent);
  --h4-border-width: 0;
  --h4-color: #c14343;
  --h4-font: "its-Draconis", "Draconis", Inter;
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 500;
  --h5-background: transparent;
  --h5-border-color: #697795;
  --h5-border-left-color: linear-gradient(to left, #fbb4577e, transparent);
  --h5-border-line-color: #fbb4577e;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 25%;
  --h5-border-right-color: linear-gradient(to right, #fbb4577e, transparent);
  --h5-border-width: 0;
  --h5-color: #c14343;
  --h5-font: "its-Draconis", "Draconis", Inter;
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 500;
  --h6-background: transparent;
  --h6-border-color: #a4aec2;
  --h6-border-left-color: linear-gradient(to left, #fbb4577e, transparent);
  --h6-border-line-color: #fbb4577e;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0;
  --h6-border-right-color: linear-gradient(to right, #fbb4577e, transparent);
  --h6-border-width: 0;
  --h6-color: #c14343;
  --h6-font: "its-Draconis", "Draconis", Inter;
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 500;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #c14343;
  --he-text-on-accent-inactive: #412f2f;
  --he-title-bar-active-action: #a35158;
  --he-title-bar-active-bg: #faf2e9;
  --he-title-bar-active-fg: #412f2f;
  --he-title-bar-active-pinned-bg: #fff9f0;
  --he-title-bar-inactive-action: #697580;
  --he-title-bar-inactive-bg: #fff9f0;
  --he-title-bar-inactive-fg: #e2b7a3;
  --he-title-bar-inactive-pinned-bg: #fff9f0;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #fbb4577e;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 500;
  --headers: #c14343;
  --heading-formatting: #e2b7a3;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: #c20a0a35;
  --hr: #fbb4577e;
  --hr-alignment: -50%, -50%;
  --hr-color: #fbb4577e;
  --hr-icon-background: #fff9f0;
  --hr-icon-color: #c14343;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 100 7' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenoddclip-rule:evenoddstroke-linejoin:roundstroke-miterlimit:2'%3E%3Crect id='Artboard1' x='0' y='0' width='100' height='7' style='fill:none'/%3E%3Cpath d='M50,2.5L100,3.5L50,4L0,3.5L50,2.5Z' style='fill:rgb(200, 57, 57)'/%3E%3C/svg%3E") no-repeat center center;
  --hr-image-height: 5px;
  --hr-image-width: 100%;
  --hr-text-offset: 12px;
  --hr-thickness: 0;
  --hr-width: auto;
  --hvr: rgba(255, 0, 0, 0.212);
  --hvr-active: rgba(182, 28, 28, 0.5);
  --hvr2: #c20a0a35;
  --i-at: #697580;
  --icon-btn-radius: 0;
  --icon-color: #412f2f;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #412f2f;
  --icon-color-hover: #412f2f;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --icons: #d04e4e;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #fbb4577e;
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
  --image-border-background: #fae0be60;
  --image-border-color: #fbb4577e;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #e2b7a3;
  --indentation-guide-color: #e2b7a3;
  --indentation-guide-color-active: #c75959;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #e2b7a3;
  --initiative-xp: sandybrown;
  --inline-title-color: #c14343;
  --inline-title-font: "its-Draconis", "Draconis", Inter;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --inline-title-weight: 500;
  --input-bg: #fae0be60;
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #fbb4577e;
  --input-shadow-hover: 3px 3px 0 #fbb4577e;
  --interactive-accent: #cd645e;
  --interactive-accent-hover: #e2b7a3;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #e2b7a3;
  --interactive-normal: #fbe2c5;
  --its: "its";
  --kanban-button-background: #f3e6d2;
  --kanban-button-shadow: 2px 2px 0 #fbb4577e;
  --kanban-card-border: 2px solid #fbb4577e;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #fff9f0;
  --kanban-card-text-color: #412f2f;
  --kanban-card-title-background: #fae0be60;
  --kanban-card-title-border: 0 1px 0 #fbb4577e;
  --kanban-lane-background: #f3e6d2;
  --kanban-lane-border: 3px solid #fbb4577e;
  --kanban-lane-box-shadow: 2px 2px 0 #fbb4577e;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #df6262;
  --kanban-tag-background: #cd645e;
  --latex-color: #a35158;
  --latex-format-color: #e2b7a3;
  --latex-syntax-color: #697580;
  --line-height-tight: 1.3em;
  --lines: #e2b7a3;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #df6262;
  --link-color-hover: #a35158;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #df6262;
  --link-external-color-hover: #000000;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #e2b7a3;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #fbb4577e;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #e2b7a3;
  --list-color-2: #e2b7a3;
  --list-color-3: #e2b7a3;
  --list-color-4: #e2b7a3;
  --list-color-5: #e2b7a3;
  --list-color-6: #e2b7a3;
  --list-indent: 25px;
  --list-marker-color: #c75959;
  --list-marker-color-collapsed: #e2b7a3;
  --list-marker-color-hover: #697580;
  --list-marker-color-other: #000000;
  --list-marker-min-width: 0;
  --list-numbered-color: #a35158;
  --list-spacing: 1px;
  --lite-accent: #a35158;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #fff6e4;
  --menu-border-color: #f6e3cd;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #fbb4577e;
  --message-border-color: #fbb4577e;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #fbb4577e;
  --message-color: #e5ebee;
  --metadata-border-color: #fbb4577e;
  --metadata-button-text-color: #e2b7a3;
  --metadata-divider-color: #fbb4577e;
  --metadata-icon-color: #412f2f;
  --metadata-input-background-active: #fae0be60;
  --metadata-input-font: '??', "its-Bookerly", "Bookerly", Inter;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #412f2f;
  --metadata-label-background-active: #fae0be60;
  --metadata-label-font: '??', "its-Bookerly", "Bookerly", Inter;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #697580;
  --metadata-label-text-color-hover: #697580;
  --metadata-property-background-active: rgba(182, 28, 28, 0.5);
  --metadata-property-box-shadow-focus: 0 0 0 2px #c75959;
  --metadata-property-box-shadow-hover: 0 0 0 1px #f6e3cd;
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
  --modal-background: #fff9f0;
  --modal-border-color: #fbb4577e;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: #fae0be60;
  --modal-radius: 0;
  --modal-sidebar-background: #f6e3cd;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #412f2f;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #697580;
  --nav-heading-color-hover: #412f2f;
  --nav-indentation-guide-color: #e2b7a3;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #cd645e;
  --nav-item-background-border-color-hover: #cd645e;
  --nav-item-background-hover: #cd645e;
  --nav-item-background-selected: rgba(255, 0, 0, 0.212);
  --nav-item-border-color: #a35158;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #412f2f;
  --nav-item-color-active: #e5ebee;
  --nav-item-color-highlighted: #e5ebee;
  --nav-item-color-hover: #e5ebee;
  --nav-item-color-selected: #412f2f;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 0;
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
  --note: #fff9f0;
  --note-rgb: 255, 252, 240;
  --note-title-border-color: #c14343;
  --outer-bar: #fbe2c5;
  --outline: #fbb4577e;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: transparent;
  --paper-edges: 0 0 60px #fbb4577e inset;
  --paper-edges-m: 0 0 100px #fbb4577e inset;
  --pdf-background: #fff9f0;
  --pdf-page-background: #fff9f0;
  --pdf-sidebar-background: #fff9f0;
  --pill-border-color: #fbb4577e;
  --pill-border-color-hover: #f6e3cd;
  --pill-color: #697580;
  --pill-color-hover: #412f2f;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #df6262;
  --pill-radius: 0;
  --popover-background: #fff9f0;
  --popover-border: 3px solid #fbb4577e;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #c75959;
  --progress-bg: #f6e3cd;
  --prompt-background: #fff9f0;
  --prompt-border-color: #fbb4577e;
  --prompt-border-width: 3px;
  --r-heading-color: #c14343;
  --r-heading-font: "its-Draconis", "Draconis", Inter;
  --r-heading-font-weight: 500;
  --r-heading-text-transform: capitalize;
  --r-main-font: "its-Bookerly", "Bookerly", Inter;
  --r-progress-color: #a35158;
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
  --raised-background: color-mix(in srgb, #fff9f0 65%, transparent) linear-gradient(#fff9f0, color-mix(in srgb, #fff9f0 65%, transparent));
  --ribbon-background: #fbe2c5;
  --ribbon-background-collapsed: #fff9f0;
  --ribbon-border-color: #fbe2c5;
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
  --scrollbar-active-thumb-bg: #a35158;
  --scrollbar-bg: #f6e3cd;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #cd645e;
  --scrollbar-track-bg: #fff9f0;
  --search-border: 2px solid #fbb4577e;
  --search-box-shadow: 2px 2px 0 #fbb4577e;
  --search-clear-button-color: #697580;
  --search-icon-color: #697580;
  --search-result-background: #fff9f0;
  --setting-group-heading-color: #412f2f;
  --setting-item-alt-background-hover: #fae0be60;
  --setting-item-background-hover: rgba(255, 0, 0, 0.212);
  --setting-item-border-color: #fbb4577e;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #c14343;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #fae0be60;
  --setting-items-background: transparent;
  --setting-items-border-color: #fbb4577e;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #fbb4577e;
  --shadow-m: 3px 3px 0 #fbb4577e;
  --shadow-ml: 4px 4px 0 #fbb4577e;
  --shadow-s: 2px 2px 0 #fbb4577e;
  --side-bar: #fff6e4;
  --side-bar-bg: #fbe2c5;
  --sidebar-icon-color: #412f2f;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #c14343;
  --sidebar-tab-background-color-hover: #c75959;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #c14343;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #fff9f0;
  --slider-thumb-border-color: #f6e3cd;
  --slider-thumb-radius: 0;
  --slider-track-background: #fbb4577e;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #697580;
  --statblock-alt: #fae0be60;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #fff9f0;
  --statblock-bar-border-color: #c75959;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #c75959;
  --statblock-border-color: #e2b7a3;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #fbb4577e;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "its-Bookerly", "Bookerly", Inter;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #412f2f;
  --statblock-heading-font: "its-Draconis", "Draconis", Inter;
  --statblock-heading-font-color: #c14343;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 500;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #fbb4577e;
  --statblock-primary-color: #412f2f;
  --statblock-property-font-color: #412f2f;
  --statblock-property-name-font-color: #c14343;
  --statblock-rule-color: #c75959;
  --statblock-section-heading-border-color: #fbb4577e;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "its-Draconis", "Draconis", Inter;
  --statblock-section-heading-font-color: #8996a0;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 500;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #fbe2c5;
  --status-bar-border-color: #c75959;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #697580;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #cd645e;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --success-bg: #599049;
  --suggestion-background: #fff9f0;
  --tab-background: #fbe2c5;
  --tab-background-active: #fff9f0;
  --tab-container-background: transparent;
  --tab-curve: 0;
  --tab-divider-color: #fbb4577e;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #c75959;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #fae0be60;
  --tab-stacked-shadow-color: #fae0be60;
  --tab-switcher-background: #fff6e4;
  --tab-switcher-menubar-background: linear-gradient(to top, #fff6e4, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #fbb4577e;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #fbb4577e;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #a35158, 5px 5px 0 #fbb4577e;
  --tab-text-color: #e2b7a3;
  --tab-text-color-active: #412f2f;
  --tab-text-color-focused: #e2b7a3;
  --tab-text-color-focused-active: #412f2f;
  --tab-text-color-focused-active-current: #412f2f;
  --tab-text-color-focused-highlighted: #df6262;
  --tab-text-color-hover: #412f2f;
  --tab-titlebar-color: transparent;
  --tab-top-outline-width: 0;
  --table: #fbb4577e;
  --table-add-button-background: #c14343;
  --table-add-button-border-color: #fff9f0;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #fff9f0;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #fae0be60;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #cd645e;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #cd645e;
  --table-header-background-hover: #c75959;
  --table-header-border-color: #fff9f0;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: "its-Bookerly", "Bookerly", Inter;
  --table-header-text-color: #a35158;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #fae0be60;
  --table-row-alt-background-hover: #c20a0a35;
  --table-row-background-hover: #c20a0a35;
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #cd645e;
  --table-selection-border-radius: 0;
  --tag: #cd645e;
  --tag-background: #cd645e;
  --tag-background-color: #cd645e;
  --tag-background-hover: #c75959;
  --tag-border-color: #cd645e;
  --tag-border-color-hover: #c75959;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "its-Bookerly", "Bookerly", Inter;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #a35158;
  --tall: 700px;
  --td: #fae0be60;
  --text: #412f2f;
  --text-accent: #df6262;
  --text-accent-hover: #000000;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(255, 0, 0, 0.212);
  --text-highlight-bg-active: rgba(182, 28, 28, 0.5);
  --text-muted: #697580;
  --text-normal: #412f2f;
  --text-on-accent: #e5ebee;
  --text-selection: #c20a0a35;
  --th: #cd645e;
  --th-text: #e5ebee;
  --theme-rainbow-1: #bb5555;
  --theme-rainbow-2: #a53f3f;
  --theme-rainbow-3: #862c2c;
  --theme-rainbow-4: #662828;
  --theme-rainbow-5: #697795;
  --theme-rainbow-6: #a4aec2;
  --tiny: 100px;
  --titlebar-background: #fff9f0;
  --titlebar-background-focused: #fbe2c5;
  --titlebar-border-color: #fbb4577e;
  --titlebar-text-color: #412f2f;
  --titlebar-text-color-focused: #412f2f;
  --toggle-border-width: 1px;
  --toggle-radius: 0;
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: 0;
  --toggle-width: 20px;
  --tooltip-color: #e5ebee;
  --vault-font: "its-Draconis", "Draconis", Inter;
  --vault-name-color: #c14343;
  --vault-name-font-size: 25px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #412f2f;
  --vault-profile-color-hover: #412f2f;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(65, 47, 47);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(255, 249, 240);
  color: rgb(65, 47, 47);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 246, 228);
  color: rgb(65, 47, 47);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(251, 226, 197);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(251, 226, 197);
  color: rgb(65, 47, 47);
}

body div#quartz-root {
  background-color: rgb(255, 249, 240);
  color: rgb(65, 47, 47);
}`,
    typography: `body .page article p > b, b {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  font-weight: 900;
  outline: rgb(65, 47, 47) none 0px;
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

body .page article p > em, em {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(65, 47, 47) none 0px;
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

body .page article p > i, i {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(65, 47, 47) none 0px;
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

body .page article p > strong, strong {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  font-weight: 900;
  outline: rgb(65, 47, 47) none 0px;
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

body .text-highlight {
  background-color: rgba(255, 0, 0, 0.21);
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(65, 47, 47) none 0px;
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

body del {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(65, 47, 47) none 0px;
  text-decoration: line-through 1px rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(105, 117, 128);
  font-family: "??", its-Bookerly, Bookerly, Inter;
  outline: rgb(105, 117, 128) none 0px;
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}`,
    links: `body a.external, footer a {
  color: rgb(223, 98, 98);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(223, 98, 98) none 0px;
  text-decoration: rgb(223, 98, 98);
  text-decoration-color: rgb(223, 98, 98);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(223, 98, 98);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(223, 98, 98) none 0px;
  text-decoration: rgb(223, 98, 98);
  text-decoration-color: rgb(223, 98, 98);
}

body a.internal.broken {
  color: rgb(226, 183, 163);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(226, 183, 163) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(65, 47, 47);
}

body dt {
  color: rgb(65, 47, 47);
}

body ol > li {
  color: rgb(65, 47, 47);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

body ul > li {
  color: rgb(65, 47, 47);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(250, 242, 233);
  font-family: its-Bookerly, Bookerly, Inter;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

body table {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  width: 196.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(250, 224, 190, 0.376);
}

body td {
  border-bottom-color: rgb(255, 249, 240);
  border-left-color: rgb(255, 249, 240);
  border-right-color: rgb(255, 249, 240);
  border-top-color: rgb(255, 249, 240);
  color: rgb(65, 47, 47);
}

body th {
  border-bottom-color: rgb(255, 249, 240);
  border-left-color: rgb(255, 249, 240);
  border-right-color: rgb(255, 249, 240);
  border-top-color: rgb(255, 249, 240);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

body tr {
  background-color: rgb(205, 100, 94);
}`,
    code: `body code {
  border-bottom-color: rgb(104, 16, 16);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(104, 16, 16);
  border-right-color: rgb(104, 16, 16);
  border-top-color: rgb(104, 16, 16);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(104, 16, 16);
  font-family: "its-Fira Code", "Fira Code", Inter;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(243, 230, 210);
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(251, 180, 87, 0.494);
  border-right-color: rgba(251, 180, 87, 0.494);
  border-top-color: rgba(251, 180, 87, 0.494);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(243, 230, 210);
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(251, 180, 87, 0.494);
  border-right-color: rgba(251, 180, 87, 0.494);
  border-top-color: rgba(251, 180, 87, 0.494);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(65, 47, 47);
}

body pre > code, pre:has(> code) {
  background-color: rgb(243, 230, 210);
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(251, 180, 87, 0.494);
  border-right-color: rgba(251, 180, 87, 0.494);
  border-top-color: rgba(251, 180, 87, 0.494);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(243, 230, 210);
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(251, 180, 87, 0.494);
  border-right-color: rgba(251, 180, 87, 0.494);
  border-top-color: rgba(251, 180, 87, 0.494);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

body figcaption {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
}

body figure {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

body img {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

body video {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}`,
    embeds: `body .file-embed {
  background-color: rgb(251, 226, 197);
  border-bottom-color: rgb(105, 117, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(65, 47, 47);
  color: rgb(65, 47, 47);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 11px;
  border-left-color: rgb(205, 100, 94);
  border-left-width: 11px;
  border-right-color: rgb(65, 47, 47);
  border-right-style: solid;
  border-right-width: 11px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 11px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 11px;
  border-left-color: rgb(205, 100, 94);
  border-left-width: 11px;
  border-right-color: rgb(65, 47, 47);
  border-right-style: solid;
  border-right-width: 11px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 11px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: its-Bookerly, Bookerly, Inter;
}

body .katex-display > .katex > .katex-html {
  font-family: its-Bookerly, Bookerly, Inter;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(226, 183, 163);
  text-decoration: rgb(226, 183, 163);
  text-decoration-color: rgb(226, 183, 163);
}

body input[type=checkbox] {
  border-bottom-color: rgb(199, 89, 89);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(199, 89, 89);
  border-right-color: rgb(199, 89, 89);
  border-top-color: rgb(199, 89, 89);
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
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

body li.task-list-item[data-task='/'] {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
  text-decoration-color: rgb(105, 117, 128);
}

body li.task-list-item[data-task='>'] {
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
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
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
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
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

body li.task-list-item[data-task='l'] {
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

body li.task-list-item[data-task='u'] {
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

body li.task-list-item[data-task='w'] {
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
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
  border-bottom-color: rgb(65, 47, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(65, 47, 47);
  border-left-width: 4px;
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
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
  background-color: rgba(250, 224, 190, 0.376);
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(251, 180, 87, 0.494);
  border-right-color: rgba(251, 180, 87, 0.494);
  border-top-color: rgba(251, 180, 87, 0.494);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

body .search > .search-container > .search-space {
  background-color: rgb(255, 249, 240);
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(251, 180, 87, 0.494);
  border-left-width: 3px;
  border-right-color: rgba(251, 180, 87, 0.494);
  border-right-width: 3px;
  border-top-color: rgba(251, 180, 87, 0.494);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgba(251, 180, 87, 0.494) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(65, 47, 47);
  font-family: its-Bookerly, Bookerly, Inter;
  outline: rgb(65, 47, 47) none 0px;
  text-decoration: rgb(65, 47, 47);
  text-decoration-color: rgb(65, 47, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(65, 47, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(65, 47, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(65, 47, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(182, 28, 28, 0.5);
  color: rgb(65, 47, 47);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(251, 180, 87, 0.494);
  border-left-width: 3px;
  border-right-color: rgba(251, 180, 87, 0.494);
  border-right-width: 3px;
  border-top-color: rgba(251, 180, 87, 0.494);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 246, 228);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(182, 28, 28, 0.5);
  border-bottom-color: rgb(65, 47, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(65, 47, 47);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(182, 28, 28, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(65, 47, 47);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(205, 100, 94);
  border-bottom-color: rgb(205, 100, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(205, 100, 94);
  border-right-color: rgb(205, 100, 94);
  border-top-color: rgb(205, 100, 94);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

body h2 {
  color: rgb(244, 164, 96);
  font-family: its-Draconis, Draconis, Inter;
}

body h2.page-title, h2.page-title a {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

body h3 {
  color: rgb(161, 17, 17);
  font-family: its-Draconis, Draconis, Inter;
}

body h4 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

body h5 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

body h6 {
  color: rgb(193, 67, 67);
  font-family: its-Draconis, Draconis, Inter;
}

body hr {
  border-bottom-color: rgb(251, 226, 197);
  border-left-color: rgb(251, 226, 197);
  border-right-color: rgb(251, 226, 197);
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
  background: rgb(255, 249, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 249, 240);
}

body ::-webkit-scrollbar-corner {
  background: rgb(255, 249, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 249, 240);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(255, 249, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 249, 240);
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 249, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 249, 240);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 249, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 249, 240);
}

body ::-webkit-scrollbar-track {
  background: rgb(255, 249, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 249, 240);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
  font-weight: 700;
  text-decoration: rgb(65, 47, 47);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
  font-weight: 700;
  text-decoration: rgb(65, 47, 47);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
  font-weight: 500;
  text-decoration: rgb(65, 47, 47);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(205, 100, 94);
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
  border-bottom-color: rgb(65, 47, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(65, 47, 47);
}`,
    footer: `body footer {
  background-color: rgb(251, 226, 197);
  border-bottom-color: rgb(199, 89, 89);
  border-left-color: rgb(199, 89, 89);
  border-right-color: rgb(199, 89, 89);
  border-top-color: rgb(199, 89, 89);
  border-top-left-radius: 0px;
  color: rgb(105, 117, 128);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

body footer ul li a {
  color: rgb(105, 117, 128);
  text-decoration: rgb(105, 117, 128);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
  color: rgb(65, 47, 47);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

body li.section-li > .section .meta {
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(65, 47, 47);
  text-decoration: rgb(65, 47, 47);
}

body ul.section-ul {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(65, 47, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(65, 47, 47);
}

body .darkmode svg {
  color: rgb(65, 47, 47);
  stroke: rgb(65, 47, 47);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(226, 183, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(226, 183, 163);
  border-right-color: rgb(226, 183, 163);
  border-top-color: rgb(226, 183, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(226, 183, 163);
}

body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
  color: rgb(65, 47, 47);
}

body .metadata {
  border-bottom-color: rgba(251, 180, 87, 0.494);
  border-left-color: rgba(251, 180, 87, 0.494);
  border-right-color: rgba(251, 180, 87, 0.494);
  border-top-color: rgba(251, 180, 87, 0.494);
  color: rgb(105, 117, 128);
  font-family: its-Bookerly, Bookerly, Inter;
}

body .metadata-properties {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(105, 117, 128);
  font-family: its-Bookerly, Bookerly, Inter;
}

body .navigation-progress {
  background-color: rgb(251, 226, 197);
}

body .page-header h2.page-title {
  color: rgb(65, 47, 47);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

body abbr {
  color: rgb(65, 47, 47);
  text-decoration: underline dotted rgb(65, 47, 47);
}

body details {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

body input[type=text] {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
  color: rgb(105, 117, 128);
  font-family: "??", its-Bookerly, Bookerly, Inter;
}

body kbd {
  background-color: rgb(243, 230, 210);
  border-bottom-color: rgb(104, 16, 16);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(104, 16, 16);
  border-right-color: rgb(104, 16, 16);
  border-top-color: rgb(104, 16, 16);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgba(251, 180, 87, 0.494) 0px 2px 0px 0px;
  color: rgb(104, 16, 16);
  font-family: "its-Fira Code", "Fira Code", Inter;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(65, 47, 47);
  border-left-color: rgb(65, 47, 47);
  border-right-color: rgb(65, 47, 47);
  border-top-color: rgb(65, 47, 47);
}

body sub {
  color: rgb(65, 47, 47);
}

body summary {
  color: rgb(65, 47, 47);
}

body sup {
  color: rgb(65, 47, 47);
}`,
  },
};
