import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.rainbow",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #883737;
  --accent-color: 134, 55, 55;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #3C5274;
  --accent2-lite: #61AFEF;
  --aside-bg: #11151D;
  --background-image-blur: 11px;
  --background-image-height: 50%;
  --background-image-opacity: 90%;
  --background-image-sidebar-opacity: 90%;
  --background-image-url: url();
  --background-image-width: 50%;
  --background-modifier-active-hover: #652121;
  --background-modifier-border: #283846;
  --background-modifier-border-focus: #883737;
  --background-modifier-border-hover: #252C36;
  --background-modifier-cover: rgba(6, 8, 12, 0.38);
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3);
  --background-modifier-hover: rgba(212, 47, 47, 0.4);
  --background-modifier-message: #652121;
  --background-modifier-success: #32603e;
  --background-primary: #1A1E24;
  --background-primary-alt: #0E0F15;
  --background-secondary: #1A1E24;
  --background-secondary-alt: #0E0F15;
  --bases-cards-background: #1A1E24;
  --bases-cards-cover-background: #0E0F15;
  --bases-cards-font-size: .9em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #283846;
  --bases-cards-shadow-hover: 0 0 0 1px #252C36;
  --bases-embed-border-color: #283846;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #AAB3CA;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .9em;
  --bases-table-border-color: #3C5274;
  --bases-table-cell-background-active: #1A1E24;
  --bases-table-cell-background-disabled: #0E0F15;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #883737;
  --bases-table-cell-shadow-focus: 0 0 0 2px #7C2929;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .9em;
  --bases-table-group-background: #0E0F15;
  --bases-table-header-background: #1A1E24;
  --bases-table-header-background-hover: rgba(212, 47, 47, 0.4);
  --bases-table-header-color: #AAB3CA;
  --bases-table-summary-background: #1A1E24;
  --bases-table-summary-background-hover: rgba(212, 47, 47, 0.4);
  --bg: #252C36;
  --blockquote-background-color: #10161D;
  --blockquote-border-color: #252C36;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #BCCAD8;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #232831 65%, transparent) linear-gradient(#232831, color-mix(in srgb, #232831 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: #BCCAD8;
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #CFD7DD;
  --box-border-m: 3px solid #CFD7DD;
  --box-border-s: 1px solid #CFD7DD;
  --bttn: #7C2929;
  --bullet: ⬥;
  --bullet-font: "ITS";
  --button-background: #7C2929;
  --button-background-hover: #252C36;
  --button-border: #7C2929;
  --button-border-radius: 0;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #1A1E24;
  --canvas-card-label-color: #4E5B6F;
  --canvas-color: 88, 100, 159;
  --canvas-color-opacity: 0.08;
  --canvas-controls-radius: 0;
  --canvas-node-padding: 0 7px;
  --caret-color: #BCCAD8;
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
  --checkbox-border-color: #883737;
  --checkbox-border-color-hover: #652121;
  --checkbox-color: #883737;
  --checkbox-color-hover: #652121;
  --checkbox-marker-color: #1A1E24;
  --checkbox-radius: 0;
  --checklist-done-color: #586477;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #232831;
  --code-bg: #232831;
  --code-border-color: #283846;
  --code-bracket-background: rgba(212, 47, 47, 0.4);
  --code-comment: #4E5B6F;
  --code-normal: #FA4545;
  --code-punctuation: #AAB3CA;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #CFD7DD;
  --code-size: .9em;
  --code-text: #FA4545;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #4E5B6F;
  --collapse-icon-color-collapsed: #586477;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(199, 87, 92);
  --color-accent-2: rgb(209, 113, 121);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: 'Fira Code Medium';
  --dark: var(--text-normal);
  --dark-accent: #652121;
  --dark-sidebar: #10161D;
  --darkgray: var(--text-normal);
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(134, 55, 55, 0.1);
  --dataview-th-background: #0E0F15;
  --dataview-th-border-bottom: 2px solid #C14343;
  --dataview-th-color: #C14343;
  --dataview-th-count-color: #C14343;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #3F1010;
  --default-font: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Microsoft YaHei Light', sans-serif;
  --divider-color: #0E0F15;
  --divider-color-hover: #883737;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #652121;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #06080c60;
  --dropdown-background: #232831;
  --dropdown-background-hover: #10161D;
  --embed-bg: #10161D;
  --embed-block-shadow-hover: 2px 2px 0 #CFD7DD;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #CFD7DD;
  --embed-border-color: transparent;
  --embed-border-color-hover: #CFD7DD;
  --embed-border-left: 2px solid #C14343;
  --embed-border-left-color: #C14343;
  --embed-border-left-color-hover: #C14343;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #CFD7DD;
  --embed-border-start: 2px solid #7C2929;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #CFD7DD;
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
  --fg: #CFD7DD;
  --file-f: its;
  --file-font: "its";
  --file-header-background: linear-gradient(to right, #652121, #0E0F15);
  --file-header-background-focused: #1A1E24;
  --file-header-breadcrumb-color: #586477;
  --file-header-breadcrumb-font-size: 14px;
  --file-header-color: #586477;
  --file-header-color-active: #BCCAD8;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #652121;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #0E0F15;
  --file-icon: "\\e800";
  --file-icon-color: #586477;
  --file-icon-margin: 6px;
  --file-text-color: #AAB3CA;
  --flair-background: #232831;
  --flair-color: #BCCAD8;
  --folder: #883737;
  --folder-f: its;
  --folder-font: "its";
  --folder-icon: "\\e801";
  --folder-icon-color: #883737;
  --folder-icon-open-color: #E05858;
  --folder-open: #E05858;
  --folder-open-text-color: #BCCAD8;
  --folder-text-color: #AAB3CA;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ligatures: none;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-small: .95em;
  --font-smaller: .9em;
  --font-smallest: .88em;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ui-small: 14px;
  --font-ui-smaller: 13.5px;
  --footnote: #6E7E89;
  --footnote-divider-color: #283846;
  --footnote-id-color: #AAB3CA;
  --footnote-id-color-no-occurrences: #4E5B6F;
  --footnote-input-background-active: rgba(6, 8, 12, 0.38);
  --footnote-radius: 0;
  --footnote-size: .9em;
  --graph-404: #727e93;
  --graph-arrow: #AAB3CA;
  --graph-background: #0B0F13;
  --graph-bg: #0B0F13;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #C14343;
  --graph-focused: #FD737366;
  --graph-img: #4C78CC;
  --graph-line: #571A1A;
  --graph-line-hover: #883737;
  --graph-lines: #571A1A;
  --graph-node: #CFD7DD;
  --graph-node-attachment: #4C78CC;
  --graph-node-focused: #FD737366;
  --graph-node-hover-fill: #C14343;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #C14343;
  --graph-node-unresolved: #727e93;
  --graph-tag: #C14343;
  --graph-text: #BCCAD8;
  --gray: var(--text-muted);
  --h1-background: transparent;
  --h1-border-color: #B03A3A;
  --h1-border-left-color: #912E2E;
  --h1-border-line-color: #912E2E;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #912E2E;
  --h1-border-width: 0;
  --h1-color: #C14343;
  --h1-font: "Calisto MT";
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: left;
  --h2-background: transparent;
  --h2-border-color: #D59929;
  --h2-border-left-color: #C14343;
  --h2-border-line-color: #C14343;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 90%;
  --h2-border-right-color: #C14343;
  --h2-border-width: 0;
  --h2-color: #C14343;
  --h2-font: "Calisto MT";
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: left;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #207A20;
  --h3-border-left-color: #BF5E5E;
  --h3-border-line-color: #BF5E5E;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 70%;
  --h3-border-right-color: #BF5E5E;
  --h3-border-width: 0;
  --h3-color: #C14343;
  --h3-font: "Calisto MT";
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: left;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #3232C5;
  --h4-border-left-color: #61AFEF;
  --h4-border-line-color: #61AFEF;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 40%;
  --h4-border-right-color: #61AFEF;
  --h4-border-width: 0;
  --h4-color: #C14343;
  --h4-font: "Calisto MT";
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 24px;
  --h4-text-align: left;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #7F307F;
  --h5-border-left-color: #2F3B4D;
  --h5-border-line-color: #2F3B4D;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 30%;
  --h5-border-right-color: #2F3B4D;
  --h5-border-width: 0;
  --h5-color: #C14343;
  --h5-font: "Calisto MT";
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: left;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #DD4794;
  --h6-border-left-color: #2A2E35;
  --h6-border-line-color: #2A2E35;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0%;
  --h6-border-right-color: #2A2E35;
  --h6-border-width: 0;
  --h6-color: #C14343;
  --h6-font: "Calisto MT";
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: left;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #C14343;
  --he-text-on-accent-inactive: #BCCAD8;
  --he-title-bar-active-action: #E06C75;
  --he-title-bar-active-bg: #10161D;
  --he-title-bar-active-fg: #BCCAD8;
  --he-title-bar-active-pinned-bg: #1A1E24;
  --he-title-bar-inactive-action: #AAB3CA;
  --he-title-bar-inactive-bg: #1A1E24;
  --he-title-bar-inactive-fg: #586477;
  --he-title-bar-inactive-pinned-bg: #1A1E24;
  --header-arrow-icon-color: #4E5B6F;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #283345;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: left;
  --header-weight: 700;
  --headerFont: var(--font-text);
  --headers: #C14343;
  --heading-formatting: #586477;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(122, 20, 20, 0.4);
  --hr: #3C5274;
  --hr-alignment: -50%, -50%;
  --hr-color: #3C5274;
  --hr-icon-background: #1A1E24;
  --hr-icon-color: #883737;
  --hr-icon-font: its;
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "⚡";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(168, 60, 60, 0.4);
  --hvr-active: rgba(212, 47, 47, 0.4);
  --hvr2: rgba(122, 20, 20, 0.4);
  --i-at: #BF5E5E;
  --icon-btn-radius: 0;
  --icon-color: #AAB3CA;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #BCCAD8;
  --icon-color-hover: #BCCAD8;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #CFD7DD;
  --illusion-h1-background: #B03A3A;
  --illusion-h2-background: #D59929;
  --illusion-h3-background: #207A20;
  --illusion-h4-background: #3232C5;
  --illusion-h5-background: #7F307F;
  --illusion-h6-background: #DD4794;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: rgba(6, 8, 12, 0.38);
  --image-border-color: #283846;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #586477;
  --indentation-guide-color: #283846;
  --indentation-guide-color-active: #883737;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #283846;
  --initiative-xp: sandybrown;
  --inline-title-color: #C14343;
  --inline-title-font: Calisto MT;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: rgba(0, 0, 0, 0.3);
  --input-date-separator: #4E5B6F;
  --input-placeholder-color: #4E5B6F;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #CFD7DD;
  --input-shadow-hover: 3px 3px 0 #CFD7DD;
  --interactive-accent: #7C2929;
  --interactive-accent-hover: #252C36;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #10161D;
  --interactive-normal: #232831;
  --italic-color: #BCCAD8;
  --its: "its";
  --kanban-button-background: #232831;
  --kanban-button-shadow: 2px 2px 0 #CFD7DD;
  --kanban-card-border: 2px solid #CFD7DD;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #1A1E24;
  --kanban-card-text-color: #BCCAD8;
  --kanban-card-title-background: #1A1E24;
  --kanban-card-title-border: 0px 2px 0 #CFD7DD;
  --kanban-lane-background: #232831;
  --kanban-lane-border: 3px solid #CFD7DD;
  --kanban-lane-box-shadow: 2px 2px 0 #CFD7DD;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #61AFEF;
  --kanban-tag-background: #571A1A;
  --latex-color: #E06C75;
  --latex-format-color: #586477;
  --latex-syntax-color: #AAB3CA;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-tight: 1.3em;
  --lines: #283846;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #61AFEF;
  --link-color-hover: #E06C75;
  --link-decoration-color: #BCCAD8;
  --link-decoration-hover: none;
  --link-decoration-thickness: 2px;
  --link-external-color: #61AFEF;
  --link-external-color-hover: #E06C75;
  --link-external-font: "Inter";
  --link-font: "Inter";
  --link-transform: none;
  --link-unresolved-color: #586477;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --link-weight: 500;
  --list-bullet-box-shadow-color: #283345;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #283846;
  --list-color-2: #283846;
  --list-color-3: #283846;
  --list-color-4: #283846;
  --list-color-5: #283846;
  --list-color-6: #283846;
  --list-indent: 25px;
  --list-marker-color: #883737;
  --list-marker-color-collapsed: #586477;
  --list-marker-color-hover: #AAB3CA;
  --list-marker-color-other: #3C5274;
  --list-marker-min-width: 0;
  --list-numbered-color: #883737;
  --list-spacing: 1px;
  --lite-accent: #E06C75;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #1A1E24;
  --menu-border-color: #252C36;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #CFD7DD;
  --message-border-color: #CFD7DD;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #CFD7DD;
  --message-color: #e5ebee;
  --metadata-border-color: #283846;
  --metadata-button-text-color: #586477;
  --metadata-divider-color: #283846;
  --metadata-icon-color: #AAB3CA;
  --metadata-input-background-active: rgba(6, 8, 12, 0.38);
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: 0.9em;
  --metadata-input-text-color: #BCCAD8;
  --metadata-label-background-active: rgba(6, 8, 12, 0.38);
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: 0.9em;
  --metadata-label-text-color: #AAB3CA;
  --metadata-label-text-color-hover: #AAB3CA;
  --metadata-property-background-active: rgba(212, 47, 47, 0.4);
  --metadata-property-box-shadow-focus: 0 0 0 2px #883737;
  --metadata-property-box-shadow-hover: 0 0 0 1px #252C36;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #e5ebee;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #AAB3CA;
  --metadata-title-icon: "";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #1A1E24;
  --modal-border-color: #CFD7DD;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: rgba(6, 8, 12, 0.38);
  --modal-radius: 0;
  --modal-sidebar-background: #10161D;
  --nav-collapse-icon-color: #4E5B6F;
  --nav-collapse-icon-color-collapsed: #4E5B6F;
  --nav-heading-color: #BCCAD8;
  --nav-heading-color-collapsed: #4E5B6F;
  --nav-heading-color-collapsed-hover: #AAB3CA;
  --nav-heading-color-hover: #BCCAD8;
  --nav-indentation-guide-color: #283846;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #652121;
  --nav-item-background-border-color-hover: #652121;
  --nav-item-background-hover: #7C2929;
  --nav-item-background-selected: rgba(168, 60, 60, 0.4);
  --nav-item-border-color: #E06C75;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #AAB3CA;
  --nav-item-color-active: #e5ebee;
  --nav-item-color-highlighted: #e5ebee;
  --nav-item-color-hover: #e5ebee;
  --nav-item-color-selected: #BCCAD8;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 0;
  --nav-item-size: 14px;
  --nav-item-weight: 500;
  --nav-item-weight-active: 700;
  --nav-item-weight-hover: 700;
  --nav-item-white-space: wrap;
  --nav-tag-color: #4E5B6F;
  --nav-tag-color-active: #AAB3CA;
  --nav-tag-color-hover: #AAB3CA;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #1A1E24;
  --note-rgb: 26, 30, 36;
  --note-title-border-color: #C14343;
  --outer-bar: #0E0F15;
  --outline: #CFD7DD;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #1A1E24;
  --pdf-background: #1A1E24;
  --pdf-page-background: #1A1E24;
  --pdf-shadow: 0 0 0 1px #283846;
  --pdf-sidebar-background: #1A1E24;
  --pdf-thumbnail-shadow: 0 0 0 1px #283846;
  --pill-border-color: #283846;
  --pill-border-color-hover: #252C36;
  --pill-color: #AAB3CA;
  --pill-color-hover: #BCCAD8;
  --pill-color-remove: #4E5B6F;
  --pill-color-remove-hover: #61AFEF;
  --pill-radius: 0;
  --popover-background: #1A1E24;
  --popover-border: 3px solid #CFD7DD;
  --popover-max-height: 600px;
  --popover-width: 500px;
  --progress: #252C36;
  --progress-bg: #252C36;
  --prompt-background: #1A1E24;
  --prompt-border-color: #CFD7DD;
  --prompt-border-width: 3px;
  --r-heading-color: #C14343;
  --r-heading-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif;
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #E06C75;
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
  --raised-background: color-mix(in srgb, #232831 65%, transparent) linear-gradient(#232831, color-mix(in srgb, #232831 65%, transparent));
  --ribbon-background: #0E0F15;
  --ribbon-background-collapsed: #1A1E24;
  --ribbon-border-color: #0E0F15;
  --ribbon-border-width: 0;
  --ribbon-float-bottom: 45px;
  --ribbon-icon-gap: 15px;
  --ribbon-icon-size: 18px;
  --ribbon-icon-stroke: 1.75px;
  --ribbon-width: 40px;
  --rmx: "remixicon";
  --root-list-bullet-spacing: 0;
  --root-list-spacing: 10px;
  --rpg: "rpg-awesome";
  --scroll-size: 7px;
  --scrollbar-active-thumb-bg: #E06C75;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #863737;
  --scrollbar-track-bg: #1A1E24;
  --search-border: 2px solid #CFD7DD;
  --search-box-shadow: 2px 2px 0 #CFD7DD;
  --search-clear-button-color: #AAB3CA;
  --search-icon-color: #AAB3CA;
  --search-result-background: #1A1E24;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #BCCAD8;
  --setting-item-alt-background-hover: rgba(6, 8, 12, 0.38);
  --setting-item-background-hover: rgba(168, 60, 60, 0.4);
  --setting-item-border-color: #283345;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #C14343;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: rgba(6, 8, 12, 0.38);
  --setting-items-background: transparent;
  --setting-items-border-color: #283846;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #CFD7DD;
  --shadow-m: 3px 3px 0 #CFD7DD;
  --shadow-ml: 4px 4px 0 #CFD7DD;
  --shadow-s: 2px 2px 0 #CFD7DD;
  --side-bar: #1A1E24;
  --side-bar-bg: #0E0F15;
  --sidebar-icon-color: #BCCAD8;
  --sidebar-icon-color-active: #E5EBEE;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #7C2929;
  --sidebar-tab-background-color-hover: #883737;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #7C2929;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #1A1E24;
  --slider-thumb-border-color: #252C36;
  --slider-thumb-radius: 0;
  --slider-track-background: #283846;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #AAB3CA;
  --statblock-alt: rgba(6, 8, 12, 0.38);
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #1A1E24;
  --statblock-bar-border-color: #883737;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #883737;
  --statblock-border-color: #283846;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #CFD7DD;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #BCCAD8;
  --statblock-heading-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif;
  --statblock-heading-font-color: #C14343;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #3C5274;
  --statblock-primary-color: #BCCAD8;
  --statblock-property-font-color: #BCCAD8;
  --statblock-property-name-font-color: #C14343;
  --statblock-rule-color: #883737;
  --statblock-section-heading-border-color: #283345;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Calisto MT";
  --statblock-section-heading-font-color: #6E7E89;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #0E0F15;
  --status-bar-border-color: #883737;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #AAB3CA;
  --strikethrough-color: #BCCAD8;
  --strikethrough-line-color: #BCCAD8;
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
  --suggestion-background: #1A1E24;
  --tab-background: #0E0F15;
  --tab-background-active: #1A1E24;
  --tab-container-background: #0E0F15;
  --tab-curve: 0;
  --tab-divider-color: #3C5274;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #883737;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #001C4A15;
  --tab-stacked-shadow-color: #001C4A15;
  --tab-switcher-background: #1A1E24;
  --tab-switcher-menubar-background: linear-gradient(to top, #1A1E24, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #CFD7DD;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #CFD7DD;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #E06C75, 5px 5px 0 #CFD7DD;
  --tab-text-color: #586477;
  --tab-text-color-active: #BCCAD8;
  --tab-text-color-focused: #586477;
  --tab-text-color-focused-active: #BCCAD8;
  --tab-text-color-focused-active-current: #BCCAD8;
  --tab-text-color-focused-highlighted: #61AFEF;
  --tab-text-color-hover: #BCCAD8;
  --tab-top-outline-width: 0;
  --table: #283345;
  --table-add-button-background: #7C2929;
  --table-add-button-border-color: #1A1E24;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #3C5274;
  --table-cell-padding-x: 10px;
  --table-cell-padding-y: 4px;
  --table-column-background-hover: transparent;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #7C2929;
  --table-drag-handle-color: #4E5B6F;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #652121;
  --table-header-background-hover: #883737;
  --table-header-border-color: #3C5274;
  --table-header-color: #E5EBEE;
  --table-header-padding-x: 10px;
  --table-header-padding-y: 4px;
  --table-header-text-color: #E06C75;
  --table-header-weight: 800;
  --table-line-height: 1.3em;
  --table-row-alt-background-hover: rgba(122, 20, 20, 0.4);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #7C2929;
  --table-selection-border-radius: 0;
  --tag: #571A1A;
  --tag-background: #571A1A;
  --tag-background-color: #571A1A;
  --tag-background-hover: #883737;
  --tag-border-color: #571A1A;
  --tag-border-color-hover: #883737;
  --tag-border-radius: 25px;
  --tag-border-width: 2px;
  --tag-color: #E5EBEE;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "Inter";
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 25px;
  --tag-size: .9em;
  --tag-text: #d04e4e;
  --tall: 700px;
  --td: rgba(6, 8, 12, 0.38);
  --tertiary: var(--text-accent-hover);
  --text: #BCCAD8;
  --text-accent: #61AFEF;
  --text-accent-hover: #E06C75;
  --text-dl: #e5ebee;
  --text-faint: #4E5B6F;
  --text-highlight-bg: rgba(122, 20, 20, 0.4);
  --text-highlight-bg-active: rgba(253, 115, 115, 0.25);
  --text-muted: #AAB3CA;
  --text-normal: #BCCAD8;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(122, 20, 20, 0.4);
  --textHighlight: var(--text-highlight-bg);
  --th: #652121;
  --th-text: #E5EBEE;
  --theme-rainbow-1: #B03A3A;
  --theme-rainbow-2: #D59929;
  --theme-rainbow-3: #207A20;
  --theme-rainbow-4: #3232C5;
  --theme-rainbow-5: #7F307F;
  --theme-rainbow-6: #DD4794;
  --tiny: 100px;
  --titleFont: var(--font-text);
  --titlebar-background: #1A1E24;
  --titlebar-background-focused: #0E0F15;
  --titlebar-border-color: #283846;
  --titlebar-text-color: #BCCAD8;
  --titlebar-text-color-focused: #BCCAD8;
  --toggle-border-width: 1px;
  --toggle-radius: 0;
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: 0;
  --toggle-width: 20px;
  --tooltip-color: #e5ebee;
  --vault-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif;
  --vault-icon-image: url();
  --vault-name-color: #C14343;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 900px;
  --vault-profile-color: #BCCAD8;
  --vault-profile-color-hover: #BCCAD8;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(14, 15, 21);
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
  border-right-color: rgb(14, 15, 21);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(14, 15, 21);
  border-left-color: rgb(14, 15, 21);
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
  background-color: rgba(122, 20, 20, 0.4);
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
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(170, 179, 202) none 0px;
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
}`,
    links: `body a.external, footer a {
  color: rgb(97, 175, 239);
  font-family: Inter;
  font-weight: 500;
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: underline 2px rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
  text-decoration-thickness: 2px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 175, 239);
  font-family: Inter;
  font-weight: 500;
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: underline 2px rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
  text-decoration-thickness: 2px;
}

body a.internal.broken {
  color: rgb(88, 100, 119);
  font-family: Inter;
  font-weight: 500;
  outline: rgb(88, 100, 119) none 0px;
  text-decoration: underline 2px rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
  text-decoration-thickness: 2px;
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
  background-color: rgb(16, 22, 29);
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
  width: 207.125px;
}

body td {
  border-bottom-color: rgb(60, 82, 116);
  border-left-color: rgb(60, 82, 116);
  border-right-color: rgb(60, 82, 116);
  border-top-color: rgb(60, 82, 116);
  color: rgb(188, 202, 216);
  padding-left: 10px;
  padding-right: 10px;
}

body th {
  border-bottom-color: rgb(60, 82, 116);
  border-left-color: rgb(60, 82, 116);
  border-right-color: rgb(60, 82, 116);
  border-top-color: rgb(60, 82, 116);
  color: rgb(229, 235, 238);
  font-weight: 800;
  padding-left: 10px;
  padding-right: 10px;
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
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 56, 70);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 56, 70);
  border-right-color: rgb(40, 56, 70);
  border-top-color: rgb(40, 56, 70);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 56, 70);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 56, 70);
  border-right-color: rgb(40, 56, 70);
  border-top-color: rgb(40, 56, 70);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
}

body pre > code, pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 56, 70);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 56, 70);
  border-right-color: rgb(40, 56, 70);
  border-top-color: rgb(40, 56, 70);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(35, 40, 49);
  border-bottom-color: rgb(40, 56, 70);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 56, 70);
  border-right-color: rgb(40, 56, 70);
  border-top-color: rgb(40, 56, 70);
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
  background-color: rgb(14, 15, 21);
  border-bottom-color: rgb(170, 179, 202);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
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
  border-left-color: rgb(124, 41, 41);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(124, 41, 41);
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
  border-bottom-color: rgb(136, 55, 55);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(136, 55, 55);
  border-right-color: rgb(136, 55, 55);
  border-top-color: rgb(136, 55, 55);
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
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
  text-decoration-color: rgb(170, 179, 202);
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
    callouts: `body .callout .callout-title {
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

body .callout > .callout-content {
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
}

body .callout[data-callout="abstract"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(83, 223, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 3px;
  border-right-color: rgb(83, 223, 221);
  border-top-color: rgb(83, 223, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(168, 130, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 130, 255);
  border-left-width: 3px;
  border-right-color: rgb(168, 130, 255);
  border-top-color: rgb(168, 130, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 3px;
  border-right-color: rgb(251, 70, 76);
  border-top-color: rgb(251, 70, 76);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(233, 151, 63);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 3px;
  border-right-color: rgb(233, 151, 63);
  border-top-color: rgb(233, 151, 63);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  --callout-color: rgb(186, 64, 64);
  background-color: rgb(26, 30, 36);
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
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(68, 207, 110);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(68, 207, 110);
  border-left-width: 3px;
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(83, 223, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 3px;
  border-right-color: rgb(83, 223, 221);
  border-top-color: rgb(83, 223, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(233, 151, 63);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 3px;
  border-right-color: rgb(233, 151, 63);
  border-top-color: rgb(233, 151, 63);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(40, 56, 70);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 56, 70);
  border-right-color: rgb(40, 56, 70);
  border-top-color: rgb(40, 56, 70);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 202, 216);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 30, 36);
  border-bottom-color: rgb(207, 215, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(207, 215, 221);
  border-left-width: 3px;
  border-right-color: rgb(207, 215, 221);
  border-right-width: 3px;
  border-top-color: rgb(207, 215, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(207, 215, 221) 5px 5px 0px 0px;
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
  background-color: rgba(212, 47, 47, 0.4);
  color: rgb(188, 202, 216);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(207, 215, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(207, 215, 221);
  border-left-width: 3px;
  border-right-color: rgb(207, 215, 221);
  border-right-width: 3px;
  border-top-color: rgb(207, 215, 221);
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
  background-color: rgb(87, 26, 26);
  border-bottom-color: rgb(87, 26, 26);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-width: 2px;
  border-left-color: rgb(87, 26, 26);
  border-left-width: 2px;
  border-right-color: rgb(87, 26, 26);
  border-right-width: 2px;
  border-top-color: rgb(87, 26, 26);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-top-width: 2px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

body h2 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

body h2.page-title, h2.page-title a {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

body h3 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

body h4 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

body h5 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

body h6 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

body hr {
  border-bottom-color: rgb(14, 15, 21);
  border-left-color: rgb(14, 15, 21);
  border-right-color: rgb(14, 15, 21);
  border-right-width: 2px;
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 3px;
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(170, 179, 202);
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
  border-bottom-color: rgb(170, 179, 202);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 179, 202);
}`,
    footer: `body footer {
  background-color: rgb(14, 15, 21);
  border-bottom-color: rgb(136, 55, 55);
  border-left-color: rgb(136, 55, 55);
  border-right-color: rgb(136, 55, 55);
  border-top-color: rgb(136, 55, 55);
  border-top-left-radius: 0px;
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
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
  color: rgb(170, 179, 202);
  text-decoration: rgb(170, 179, 202);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
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
  border-bottom-color: rgb(188, 202, 216);
  border-left-color: rgb(188, 202, 216);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgb(188, 202, 216);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(170, 179, 202);
  stroke: rgb(170, 179, 202);
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
  border-bottom-color: rgb(40, 56, 70);
  border-left-color: rgb(40, 56, 70);
  border-right-color: rgb(40, 56, 70);
  border-top-color: rgb(40, 56, 70);
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(170, 179, 202);
  border-left-color: rgb(170, 179, 202);
  border-right-color: rgb(170, 179, 202);
  border-top-color: rgb(170, 179, 202);
  color: rgb(170, 179, 202);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(14, 15, 21);
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
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  color: rgb(193, 67, 67);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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
  box-shadow: rgb(207, 215, 221) 0px 2px 0px 0px;
  color: rgb(250, 69, 69);
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
  --accent: #C14343;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #D6DEEA;
  --accent2-lite: #5599D0;
  --aside-bg: #F1F5FF;
  --background-image-blur: 11px;
  --background-image-height: 50%;
  --background-image-opacity: 90%;
  --background-image-sidebar-opacity: 90%;
  --background-image-url: url();
  --background-image-width: 50%;
  --background-modifier-active-hover: #C35C5C;
  --background-modifier-border: #CCD6EB;
  --background-modifier-border-focus: #C14343;
  --background-modifier-border-hover: #DDE4EF;
  --background-modifier-cover: rgba(208, 221, 239, 0.38);
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: rgba(208, 221, 239, 0.38);
  --background-modifier-form-field-hover: rgba(208, 221, 239, 0.38);
  --background-modifier-hover: rgba(253, 115, 115, 0.4);
  --background-modifier-message: #C35C5C;
  --background-modifier-success: #599049;
  --background-primary: #F8FBFF;
  --background-primary-alt: #DFE7EF;
  --background-secondary: #F8FBFF;
  --background-secondary-alt: #DFE7EF;
  --bases-cards-background: #F8FBFF;
  --bases-cards-cover-background: #DFE7EF;
  --bases-cards-font-size: .9em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #CCD6EB;
  --bases-cards-shadow-hover: 0 0 0 1px #DDE4EF;
  --bases-embed-border-color: #CCD6EB;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #D04E4E;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .9em;
  --bases-table-border-color: #D6DEEA;
  --bases-table-cell-background-active: #F8FBFF;
  --bases-table-cell-background-disabled: #DFE7EF;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #C14343;
  --bases-table-cell-shadow-focus: 0 0 0 2px #C24747;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .9em;
  --bases-table-group-background: #DFE7EF;
  --bases-table-header-background: #F8FBFF;
  --bases-table-header-background-hover: rgba(253, 115, 115, 0.4);
  --bases-table-header-color: #D04E4E;
  --bases-table-summary-background: #F8FBFF;
  --bases-table-summary-background-hover: rgba(253, 115, 115, 0.4);
  --bg: #DDE4EF;
  --blockquote-background-color: #F1F5FF;
  --blockquote-border-color: #DDE4EF;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #697580;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #F8FBFF 65%, transparent) linear-gradient(#F8FBFF, color-mix(in srgb, #F8FBFF 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: #697580;
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #912E2E;
  --box-border-m: 3px solid #912E2E;
  --box-border-s: 1px solid #912E2E;
  --bttn: #C24747;
  --bullet: ⬥;
  --bullet-font: "ITS";
  --button-background: #C24747;
  --button-background-hover: #DDE4EF;
  --button-border: #C24747;
  --button-border-radius: 0;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #F8FBFF;
  --canvas-card-label-color: #4E5B6F;
  --canvas-color: 166, 180, 204;
  --canvas-color-opacity: 0.08;
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
  --checkbox-border-color: #C14343;
  --checkbox-border-color-hover: #C35C5C;
  --checkbox-color: #C14343;
  --checkbox-color-hover: #C35C5C;
  --checkbox-marker-color: #F8FBFF;
  --checkbox-radius: 0;
  --checklist-done-color: #A6BBDE;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #EEF6FF;
  --code-bg: #EEF6FF;
  --code-border-color: #CCD6EB;
  --code-bracket-background: rgba(253, 115, 115, 0.4);
  --code-comment: #4E5B6F;
  --code-normal: #EA4262;
  --code-punctuation: #D04E4E;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #912E2E;
  --code-size: .9em;
  --code-text: #EA4262;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #4E5B6F;
  --collapse-icon-color-collapsed: #A6BBDE;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(194, 76, 78);
  --color-accent-2: rgb(199, 87, 92);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: 'Fira Code Medium';
  --dark: var(--text-normal);
  --dark-accent: #C35C5C;
  --dark-sidebar: #7E8EA3;
  --darkgray: var(--text-normal);
  --dataview-table-width: 100%;
  --dataview-th-background: #DFE7EF;
  --dataview-th-border-bottom: 2px solid #D04E4E;
  --dataview-th-color: #D04E4E;
  --dataview-th-count-color: #D04E4E;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif;
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 700;
  --deep-dark-accent: #2F1010;
  --default-font: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Microsoft YaHei Light', sans-serif;
  --divider-color: #DFE7EF;
  --divider-color-hover: #C14343;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #C35C5C;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #d0ddef62;
  --dropdown-background: #EEF6FF;
  --dropdown-background-hover: #F1F5FF;
  --embed-bg: #F1F5FF;
  --embed-block-shadow-hover: 2px 2px 0 #912E2E;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #912E2E;
  --embed-border-color: transparent;
  --embed-border-color-hover: #912E2E;
  --embed-border-left: 2px solid #D04E4E;
  --embed-border-left-color: #D04E4E;
  --embed-border-left-color-hover: #D04E4E;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #912E2E;
  --embed-border-start: 2px solid #C24747;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: #912E2E;
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
  --fg: #912E2E;
  --file-f: its;
  --file-font: "its";
  --file-header-background: linear-gradient(to right, #C35C5C, #DFE7EF);
  --file-header-background-focused: #F8FBFF;
  --file-header-breadcrumb-color: #A6BBDE;
  --file-header-breadcrumb-font-size: 14px;
  --file-header-color: #A6BBDE;
  --file-header-color-active: #697580;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #C35C5C;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #DFE7EF;
  --file-icon: "\\e800";
  --file-icon-color: #A6BBDE;
  --file-icon-margin: 6px;
  --file-text-color: #7E8EA3;
  --flair-background: #EEF6FF;
  --flair-color: #697580;
  --folder: #C14343;
  --folder-f: its;
  --folder-font: "its";
  --folder-icon: "\\e801";
  --folder-icon-color: #C14343;
  --folder-icon-open-color: #CE6D6D;
  --folder-open: #CE6D6D;
  --folder-open-text-color: #697580;
  --folder-text-color: #7E8EA3;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif;
  --font-default: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-frontmatter: .95em;
  --font-interface: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ligatures: none;
  --font-mermaid: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --font-small: .95em;
  --font-smaller: .9em;
  --font-smallest: .88em;
  --font-text: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-ui-small: 14px;
  --font-ui-smaller: 13.5px;
  --footnote: #8996A0;
  --footnote-divider-color: #CCD6EB;
  --footnote-id-color: #D04E4E;
  --footnote-id-color-no-occurrences: #4E5B6F;
  --footnote-input-background-active: rgba(208, 221, 239, 0.38);
  --footnote-radius: 0;
  --footnote-size: .9em;
  --graph-404: #727e93;
  --graph-arrow: #D04E4E;
  --graph-background: #EEF3FD;
  --graph-bg: #EEF3FD;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #C14343;
  --graph-focused: #FD737366;
  --graph-img: #4C78CC;
  --graph-line: #E4E7F8;
  --graph-line-hover: #C14343;
  --graph-lines: #E4E7F8;
  --graph-node: #C14343;
  --graph-node-attachment: #4C78CC;
  --graph-node-focused: #FD737366;
  --graph-node-hover-fill: #C14343;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #000000;
  --graph-node-unresolved: #727e93;
  --graph-tag: #000000;
  --graph-text: #697580;
  --gray: var(--text-muted);
  --h1-background: transparent;
  --h1-border-color: #DD3C3C;
  --h1-border-left-color: #BB5555;
  --h1-border-line-color: #BB5555;
  --h1-border-line-height: 4px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #BB5555;
  --h1-border-width: 0;
  --h1-color: #C14343;
  --h1-font: "Calisto MT";
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: left;
  --h2-background: transparent;
  --h2-border-color: #F1AB27;
  --h2-border-left-color: #C14343;
  --h2-border-line-color: #C14343;
  --h2-border-line-height: 4px;
  --h2-border-line-width: 90%;
  --h2-border-right-color: #C14343;
  --h2-border-width: 0;
  --h2-color: #C14343;
  --h2-font: "Calisto MT";
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: left;
  --h2-weight: 700;
  --h3-background: transparent;
  --h3-border-color: #118811;
  --h3-border-left-color: #CE6D6D;
  --h3-border-line-color: #CE6D6D;
  --h3-border-line-height: 4px;
  --h3-border-line-width: 70%;
  --h3-border-right-color: #CE6D6D;
  --h3-border-width: 0;
  --h3-color: #C14343;
  --h3-font: "Calisto MT";
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: left;
  --h3-weight: 700;
  --h4-background: transparent;
  --h4-border-color: #3333CC;
  --h4-border-left-color: #5599D0;
  --h4-border-line-color: #5599D0;
  --h4-border-line-height: 4px;
  --h4-border-line-width: 40%;
  --h4-border-right-color: #5599D0;
  --h4-border-width: 0;
  --h4-color: #C14343;
  --h4-font: "Calisto MT";
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 24px;
  --h4-text-align: left;
  --h4-weight: 700;
  --h5-background: transparent;
  --h5-border-color: #A824A8;
  --h5-border-left-color: #B5C2D8;
  --h5-border-line-color: #B5C2D8;
  --h5-border-line-height: 4px;
  --h5-border-line-width: 30%;
  --h5-border-right-color: #B5C2D8;
  --h5-border-width: 0;
  --h5-color: #C14343;
  --h5-font: "Calisto MT";
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: left;
  --h5-weight: 700;
  --h6-background: transparent;
  --h6-border-color: #E83B94;
  --h6-border-left-color: #CCD6EB;
  --h6-border-line-color: #CCD6EB;
  --h6-border-line-height: 4px;
  --h6-border-line-width: 0%;
  --h6-border-right-color: #CCD6EB;
  --h6-border-width: 0;
  --h6-color: #C14343;
  --h6-font: "Calisto MT";
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: left;
  --h6-weight: 700;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #D04E4E;
  --he-text-on-accent-inactive: #697580;
  --he-title-bar-active-action: #A35158;
  --he-title-bar-active-bg: #F1F5FF;
  --he-title-bar-active-fg: #697580;
  --he-title-bar-active-pinned-bg: #F8FBFF;
  --he-title-bar-inactive-action: #D04E4E;
  --he-title-bar-inactive-bg: #F8FBFF;
  --he-title-bar-inactive-fg: #A6BBDE;
  --he-title-bar-inactive-pinned-bg: #F8FBFF;
  --header-arrow-icon-color: #4E5B6F;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: #ccd6eb;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: left;
  --header-weight: 700;
  --headerFont: var(--font-text);
  --headers: #D04E4E;
  --heading-formatting: #A6BBDE;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(229, 149, 149, 0.37);
  --hr: #D6DEEA;
  --hr-alignment: -50%, -50%;
  --hr-color: #D6DEEA;
  --hr-icon-background: #F8FBFF;
  --hr-icon-color: #C14343;
  --hr-icon-font: its;
  --hr-icon-padding-x: 4px;
  --hr-icon-symbol: "⚡";
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(255, 0, 0, 0.21);
  --hvr-active: rgba(253, 115, 115, 0.4);
  --hvr2: rgba(229, 149, 149, 0.37);
  --i-at: #C14343;
  --icon-btn-radius: 0;
  --icon-color: #D04E4E;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #697580;
  --icon-color-hover: #697580;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --icons: #d04e4e;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 #912E2E;
  --illusion-h1-background: #DD3C3C;
  --illusion-h2-background: #F1AB27;
  --illusion-h3-background: #118811;
  --illusion-h4-background: #3333CC;
  --illusion-h5-background: #A824A8;
  --illusion-h6-background: #E83B94;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: rgba(208, 221, 239, 0.38);
  --image-border-color: #CCD6EB;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #A6BBDE;
  --indentation-guide-color: #CCD6EB;
  --indentation-guide-color-active: #C14343;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #CCD6EB;
  --initiative-xp: sandybrown;
  --inline-title-color: #C14343;
  --inline-title-font: Calisto MT;
  --inline-title-position: left;
  --inline-title-size: 34px;
  --input-bg: rgba(208, 221, 239, 0.38);
  --input-date-separator: #4E5B6F;
  --input-placeholder-color: #4E5B6F;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #912E2E;
  --input-shadow-hover: 3px 3px 0 #912E2E;
  --interactive-accent: #C24747;
  --interactive-accent-hover: #DDE4EF;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #F1F5FF;
  --interactive-normal: #EEF6FF;
  --italic-color: #697580;
  --its: "its";
  --kanban-button-background: #EEF6FF;
  --kanban-button-shadow: 2px 2px 0 #912E2E;
  --kanban-card-border: 2px solid #912E2E;
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #F8FBFF;
  --kanban-card-text-color: #697580;
  --kanban-card-title-background: #F8FBFF;
  --kanban-card-title-border: 0px 2px 0 #912E2E;
  --kanban-lane-background: #EEF6FF;
  --kanban-lane-border: 3px solid #912E2E;
  --kanban-lane-box-shadow: 2px 2px 0 #912E2E;
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #5599D0;
  --kanban-tag-background: #C65656;
  --latex-color: #A35158;
  --latex-format-color: #A6BBDE;
  --latex-syntax-color: #D04E4E;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-tight: 1.3em;
  --lines: #CCD6EB;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #5599D0;
  --link-color-hover: #A35158;
  --link-decoration-color: #697580;
  --link-decoration-hover: none;
  --link-decoration-thickness: 2px;
  --link-external-color: #5599D0;
  --link-external-color-hover: #A35158;
  --link-external-font: "Inter";
  --link-font: "Inter";
  --link-transform: none;
  --link-unresolved-color: #A6BBDE;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --link-weight: 500;
  --list-bullet-box-shadow-color: #ccd6eb;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #CCD6EB;
  --list-color-2: #CCD6EB;
  --list-color-3: #CCD6EB;
  --list-color-4: #CCD6EB;
  --list-color-5: #CCD6EB;
  --list-color-6: #CCD6EB;
  --list-indent: 25px;
  --list-marker-color: #C14343;
  --list-marker-color-collapsed: #A6BBDE;
  --list-marker-color-hover: #D04E4E;
  --list-marker-color-other: #D6DEEA;
  --list-marker-min-width: 0;
  --list-numbered-color: #C14343;
  --list-spacing: 1px;
  --lite-accent: #A35158;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #F8FBFF;
  --menu-border-color: #DDE4EF;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 #912E2E;
  --message-border-color: #912E2E;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #912E2E;
  --message-color: #e5ebee;
  --metadata-border-color: #CCD6EB;
  --metadata-button-text-color: #A6BBDE;
  --metadata-divider-color: #CCD6EB;
  --metadata-icon-color: #D04E4E;
  --metadata-input-background-active: rgba(208, 221, 239, 0.38);
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: 0.9em;
  --metadata-input-text-color: #697580;
  --metadata-label-background-active: rgba(208, 221, 239, 0.38);
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: 0.9em;
  --metadata-label-text-color: #D04E4E;
  --metadata-label-text-color-hover: #D04E4E;
  --metadata-property-background-active: rgba(253, 115, 115, 0.4);
  --metadata-property-box-shadow-focus: 0 0 0 2px #C14343;
  --metadata-property-box-shadow-hover: 0 0 0 1px #DDE4EF;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #e5ebee;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #D04E4E;
  --metadata-title-icon: "";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #F8FBFF;
  --modal-border-color: #912E2E;
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: rgba(208, 221, 239, 0.38);
  --modal-radius: 0;
  --modal-sidebar-background: #7E8EA3;
  --nav-collapse-icon-color: #4E5B6F;
  --nav-collapse-icon-color-collapsed: #4E5B6F;
  --nav-heading-color: #697580;
  --nav-heading-color-collapsed: #4E5B6F;
  --nav-heading-color-collapsed-hover: #D04E4E;
  --nav-heading-color-hover: #697580;
  --nav-indentation-guide-color: #CCD6EB;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #C35C5C;
  --nav-item-background-border-color-hover: #C35C5C;
  --nav-item-background-hover: #C24747;
  --nav-item-background-selected: rgba(255, 0, 0, 0.21);
  --nav-item-border-color: #A35158;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #7E8EA3;
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
  --nav-tag-color: #4E5B6F;
  --nav-tag-color-active: #D04E4E;
  --nav-tag-color-hover: #D04E4E;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #F8FBFF;
  --note-rgb: 248, 251, 255;
  --note-title-border-color: #D04E4E;
  --outer-bar: #DFE7EF;
  --outline: #912E2E;
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #F8FBFF;
  --pdf-background: #F8FBFF;
  --pdf-page-background: #F8FBFF;
  --pdf-sidebar-background: #F8FBFF;
  --pill-border-color: #CCD6EB;
  --pill-border-color-hover: #DDE4EF;
  --pill-color: #D04E4E;
  --pill-color-hover: #697580;
  --pill-color-remove: #4E5B6F;
  --pill-color-remove-hover: #5599D0;
  --pill-radius: 0;
  --popover-background: #F8FBFF;
  --popover-border: 3px solid #912E2E;
  --popover-max-height: 600px;
  --popover-width: 500px;
  --progress: #E1E9F6;
  --progress-bg: #DDE4EF;
  --prompt-background: #F8FBFF;
  --prompt-border-color: #912E2E;
  --prompt-border-width: 3px;
  --r-heading-color: #D04E4E;
  --r-heading-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif;
  --r-heading-font-weight: 700;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #A35158;
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
  --raised-background: color-mix(in srgb, #F8FBFF 65%, transparent) linear-gradient(#F8FBFF, color-mix(in srgb, #F8FBFF 65%, transparent));
  --ribbon-background: #DFE7EF;
  --ribbon-background-collapsed: #F8FBFF;
  --ribbon-border-color: #DFE7EF;
  --ribbon-border-width: 0;
  --ribbon-float-bottom: 45px;
  --ribbon-icon-gap: 15px;
  --ribbon-icon-size: 18px;
  --ribbon-icon-stroke: 1.75px;
  --ribbon-width: 40px;
  --rmx: "remixicon";
  --root-list-bullet-spacing: 0;
  --root-list-spacing: 10px;
  --rpg: "rpg-awesome";
  --scroll-size: 7px;
  --scrollbar-active-thumb-bg: #A35158;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #86ADDA28;
  --scrollbar-track-bg: #F8FBFF;
  --search-border: 2px solid #912E2E;
  --search-box-shadow: 2px 2px 0 #912E2E;
  --search-clear-button-color: #D04E4E;
  --search-icon-color: #D04E4E;
  --search-result-background: #F8FBFF;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #697580;
  --setting-item-alt-background-hover: rgba(208, 221, 239, 0.38);
  --setting-item-background-hover: rgba(255, 0, 0, 0.21);
  --setting-item-border-color: #ccd6eb;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #D04E4E;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: rgba(208, 221, 239, 0.38);
  --setting-items-background: transparent;
  --setting-items-border-color: #CCD6EB;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 #912E2E;
  --shadow-m: 3px 3px 0 #912E2E;
  --shadow-ml: 4px 4px 0 #912E2E;
  --shadow-s: 2px 2px 0 #912E2E;
  --side-bar: #F8FBFF;
  --side-bar-bg: #DFE7EF;
  --sidebar-icon-color: #697580;
  --sidebar-icon-color-active: #E5EBEE;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #C24747;
  --sidebar-tab-background-color-hover: #C14343;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #C24747;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #F8FBFF;
  --slider-thumb-border-color: #DDE4EF;
  --slider-thumb-radius: 0;
  --slider-track-background: #CCD6EB;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #D04E4E;
  --statblock-alt: rgba(208, 221, 239, 0.38);
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #F8FBFF;
  --statblock-bar-border-color: #C14343;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #C14343;
  --statblock-border-color: #CCD6EB;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #912E2E;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #697580;
  --statblock-heading-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif;
  --statblock-heading-font-color: #D04E4E;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 700;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #D6DEEA;
  --statblock-primary-color: #697580;
  --statblock-property-font-color: #697580;
  --statblock-property-name-font-color: #D04E4E;
  --statblock-rule-color: #C14343;
  --statblock-section-heading-border-color: #ccd6eb;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Calisto MT";
  --statblock-section-heading-font-color: #8996A0;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 700;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #DFE7EF;
  --status-bar-border-color: #C14343;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #D04E4E;
  --strikethrough-color: #697580;
  --strikethrough-line-color: #697580;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #C35C5C;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --success-bg: #599049;
  --suggestion-background: #F8FBFF;
  --tab-background: #DFE7EF;
  --tab-background-active: #F8FBFF;
  --tab-container-background: #DFE7EF;
  --tab-curve: 0;
  --tab-divider-color: #D6DEEA;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #C14343;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #001C4A15;
  --tab-stacked-shadow-color: #001C4A15;
  --tab-switcher-background: #F8FBFF;
  --tab-switcher-menubar-background: linear-gradient(to top, #F8FBFF, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 #912E2E;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #912E2E;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #A35158, 5px 5px 0 #912E2E;
  --tab-text-color: #A6BBDE;
  --tab-text-color-active: #697580;
  --tab-text-color-focused: #A6BBDE;
  --tab-text-color-focused-active: #697580;
  --tab-text-color-focused-active-current: #697580;
  --tab-text-color-focused-highlighted: #5599D0;
  --tab-text-color-hover: #697580;
  --tab-top-outline-width: 0;
  --table: #ccd6eb;
  --table-add-button-background: #C24747;
  --table-add-button-border-color: #F8FBFF;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #D6DEEA;
  --table-cell-padding-x: 10px;
  --table-cell-padding-y: 4px;
  --table-column-background-hover: transparent;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #C24747;
  --table-drag-handle-color: #4E5B6F;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #C14343;
  --table-header-background-hover: #C14343;
  --table-header-border-color: #D6DEEA;
  --table-header-color: #E5EBEE;
  --table-header-padding-x: 10px;
  --table-header-padding-y: 4px;
  --table-header-text-color: #A35158;
  --table-header-weight: 800;
  --table-line-height: 1.3em;
  --table-row-alt-background-hover: rgba(229, 149, 149, 0.37);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #C24747;
  --table-selection-border-radius: 0;
  --tag: #C65656;
  --tag-background: #C65656;
  --tag-background-color: #C65656;
  --tag-background-hover: #C14343;
  --tag-border-color: #C65656;
  --tag-border-color-hover: #C14343;
  --tag-border-radius: 25px;
  --tag-border-width: 2px;
  --tag-color: #E5EBEE;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "Inter";
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 25px;
  --tag-size: .9em;
  --tag-text: #A35158;
  --tall: 700px;
  --td: rgba(208, 221, 239, 0.38);
  --tertiary: var(--text-accent-hover);
  --text: #697580;
  --text-accent: #5599D0;
  --text-accent-hover: #A35158;
  --text-dl: #e5ebee;
  --text-faint: #4E5B6F;
  --text-highlight-bg: rgba(229, 149, 149, 0.37);
  --text-highlight-bg-active: rgba(253, 115, 115, 0.25);
  --text-muted: #D04E4E;
  --text-normal: #697580;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(229, 149, 149, 0.37);
  --textHighlight: var(--text-highlight-bg);
  --th: #C14343;
  --th-text: #E5EBEE;
  --theme-rainbow-1: #DD3C3C;
  --theme-rainbow-2: #F1AB27;
  --theme-rainbow-3: #118811;
  --theme-rainbow-4: #3333CC;
  --theme-rainbow-5: #A824A8;
  --theme-rainbow-6: #E83B94;
  --tiny: 100px;
  --titleFont: var(--font-text);
  --titlebar-background: #F8FBFF;
  --titlebar-background-focused: #DFE7EF;
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
  --vault-font: 'Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif;
  --vault-icon-image: url();
  --vault-name-color: #C14343;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 900px;
  --vault-profile-color: #697580;
  --vault-profile-color-hover: #697580;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(223, 231, 239);
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
  border-right-color: rgb(223, 231, 239);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(223, 231, 239);
  border-left-color: rgb(223, 231, 239);
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
  background-color: rgba(229, 149, 149, 0.37);
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
  color: rgb(208, 78, 78);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(208, 78, 78) none 0px;
  text-decoration: rgb(208, 78, 78);
  text-decoration-color: rgb(208, 78, 78);
}`,
    links: `body a.external, footer a {
  color: rgb(85, 153, 208);
  font-family: Inter;
  font-weight: 500;
  outline: rgb(85, 153, 208) none 0px;
  text-decoration: underline 2px rgb(85, 153, 208);
  text-decoration-color: rgb(85, 153, 208);
  text-decoration-thickness: 2px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(85, 153, 208);
  font-family: Inter;
  font-weight: 500;
  outline: rgb(85, 153, 208) none 0px;
  text-decoration: underline 2px rgb(85, 153, 208);
  text-decoration-color: rgb(85, 153, 208);
  text-decoration-thickness: 2px;
}

body a.internal.broken {
  color: rgb(166, 187, 222);
  font-family: Inter;
  font-weight: 500;
  outline: rgb(166, 187, 222) none 0px;
  text-decoration: underline 2px rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
  text-decoration-thickness: 2px;
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
  width: 207.125px;
}

body td {
  border-bottom-color: rgb(214, 222, 234);
  border-left-color: rgb(214, 222, 234);
  border-right-color: rgb(214, 222, 234);
  border-top-color: rgb(214, 222, 234);
  color: rgb(105, 117, 128);
  padding-left: 10px;
  padding-right: 10px;
}

body th {
  border-bottom-color: rgb(214, 222, 234);
  border-left-color: rgb(214, 222, 234);
  border-right-color: rgb(214, 222, 234);
  border-top-color: rgb(214, 222, 234);
  color: rgb(229, 235, 238);
  font-weight: 800;
  padding-left: 10px;
  padding-right: 10px;
}

body tr {
  background-color: rgb(193, 67, 67);
}`,
    code: `body code {
  border-bottom-color: rgb(234, 66, 98);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(234, 66, 98);
  border-right-color: rgb(234, 66, 98);
  border-top-color: rgb(234, 66, 98);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(234, 66, 98);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(238, 246, 255);
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
  background-color: rgb(238, 246, 255);
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
  background-color: rgb(238, 246, 255);
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
  background-color: rgb(238, 246, 255);
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
  background-color: rgb(223, 231, 239);
  border-bottom-color: rgb(208, 78, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 78, 78);
  border-right-color: rgb(208, 78, 78);
  border-top-color: rgb(208, 78, 78);
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
  border-left-color: rgb(194, 71, 71);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(194, 71, 71);
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
  border-bottom-color: rgb(193, 67, 67);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
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
  color: rgb(208, 78, 78);
  text-decoration: rgb(208, 78, 78);
  text-decoration-color: rgb(208, 78, 78);
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
    callouts: `body .callout .callout-title {
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 900;
}

body .callout > .callout-content {
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
}

body .callout[data-callout="abstract"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(0, 191, 188);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 191, 188);
  border-left-width: 3px;
  border-right-color: rgb(0, 191, 188);
  border-top-color: rgb(0, 191, 188);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 49, 71);
  border-left-width: 3px;
  border-right-color: rgb(233, 49, 71);
  border-top-color: rgb(233, 49, 71);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 49, 71);
  border-left-width: 3px;
  border-right-color: rgb(233, 49, 71);
  border-top-color: rgb(233, 49, 71);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(120, 82, 238);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(120, 82, 238);
  border-left-width: 3px;
  border-right-color: rgb(120, 82, 238);
  border-top-color: rgb(120, 82, 238);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(233, 49, 71);
  border-left-width: 3px;
  border-right-color: rgb(233, 49, 71);
  border-top-color: rgb(233, 49, 71);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 3px;
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 3px;
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(236, 117, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(236, 117, 0);
  border-left-width: 3px;
  border-right-color: rgb(236, 117, 0);
  border-top-color: rgb(236, 117, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  --callout-color: rgb(186, 64, 64);
  background-color: rgb(248, 251, 255);
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
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(8, 185, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 185, 78);
  border-left-width: 3px;
  border-right-color: rgb(8, 185, 78);
  border-top-color: rgb(8, 185, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(0, 191, 188);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 191, 188);
  border-left-width: 3px;
  border-right-color: rgb(0, 191, 188);
  border-top-color: rgb(0, 191, 188);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 3px;
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(248, 251, 255);
  border-bottom-color: rgb(236, 117, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(236, 117, 0);
  border-left-width: 3px;
  border-right-color: rgb(236, 117, 0);
  border-top-color: rgb(236, 117, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(208, 221, 239, 0.38);
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
  border-bottom-color: rgb(145, 46, 46);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(145, 46, 46);
  border-left-width: 3px;
  border-right-color: rgb(145, 46, 46);
  border-right-width: 3px;
  border-top-color: rgb(145, 46, 46);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgb(145, 46, 46) 5px 5px 0px 0px;
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
  background-color: rgba(253, 115, 115, 0.4);
  color: rgb(105, 117, 128);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(145, 46, 46);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgb(145, 46, 46);
  border-left-width: 3px;
  border-right-color: rgb(145, 46, 46);
  border-right-width: 3px;
  border-top-color: rgb(145, 46, 46);
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
  background-color: rgba(253, 115, 115, 0.4);
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
  background-color: rgba(253, 115, 115, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(105, 117, 128);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(198, 86, 86);
  border-bottom-color: rgb(198, 86, 86);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-width: 2px;
  border-left-color: rgb(198, 86, 86);
  border-left-width: 2px;
  border-right-color: rgb(198, 86, 86);
  border-right-width: 2px;
  border-top-color: rgb(198, 86, 86);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-top-width: 2px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

body h2 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

body h2.page-title, h2.page-title a {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

body h3 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

body h4 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

body h5 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

body h6 {
  color: rgb(193, 67, 67);
  font-family: "Calisto MT";
}

body hr {
  border-bottom-color: rgb(223, 231, 239);
  border-left-color: rgb(223, 231, 239);
  border-right-color: rgb(223, 231, 239);
  border-right-width: 2px;
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 3px;
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
  color: rgb(126, 142, 163);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(126, 142, 163);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(195, 92, 92);
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
  border-bottom-color: rgb(208, 78, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 78, 78);
  border-right-color: rgb(208, 78, 78);
  border-top-color: rgb(208, 78, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(208, 78, 78);
}`,
    footer: `body footer {
  background-color: rgb(223, 231, 239);
  border-bottom-color: rgb(193, 67, 67);
  border-left-color: rgb(193, 67, 67);
  border-right-color: rgb(193, 67, 67);
  border-top-color: rgb(193, 67, 67);
  border-top-left-radius: 0px;
  color: rgb(208, 78, 78);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(208, 78, 78);
  text-decoration: rgb(208, 78, 78);
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
  color: rgb(126, 142, 163);
  text-decoration: rgb(126, 142, 163);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(126, 142, 163);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}

body li.section-li > .section .meta {
  color: rgb(126, 142, 163);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(126, 142, 163);
  text-decoration: rgb(126, 142, 163);
}

body ul.section-ul {
  border-bottom-color: rgb(105, 117, 128);
  border-left-color: rgb(105, 117, 128);
  border-right-color: rgb(105, 117, 128);
  border-top-color: rgb(105, 117, 128);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(208, 78, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 78, 78);
  border-right-color: rgb(208, 78, 78);
  border-top-color: rgb(208, 78, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(208, 78, 78);
}

body .darkmode svg {
  color: rgb(208, 78, 78);
  stroke: rgb(208, 78, 78);
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
  color: rgb(208, 78, 78);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(208, 78, 78);
  border-left-color: rgb(208, 78, 78);
  border-right-color: rgb(208, 78, 78);
  border-top-color: rgb(208, 78, 78);
  color: rgb(208, 78, 78);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(223, 231, 239);
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
  border-bottom-color: rgb(208, 78, 78);
  border-left-color: rgb(208, 78, 78);
  border-right-color: rgb(208, 78, 78);
  border-top-color: rgb(208, 78, 78);
  color: rgb(208, 78, 78);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(238, 246, 255);
  border-bottom-color: rgb(234, 66, 98);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(234, 66, 98);
  border-right-color: rgb(234, 66, 98);
  border-top-color: rgb(234, 66, 98);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(145, 46, 46) 0px 2px 0px 0px;
  color: rgb(234, 66, 98);
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
