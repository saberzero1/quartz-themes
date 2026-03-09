import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "its-theme.ttrpg-pathfinder",
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
  --background-modifier-hover: #e5800040;
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
  --bases-table-header-background-hover: #e5800040;
  --bases-table-header-color: #97a1b9;
  --bases-table-row-background-hover: rgba(191, 0, 0, 0.2);
  --bases-table-summary-background: #1a1e24;
  --bases-table-summary-background-hover: #e5800040;
  --bg: #252c36;
  --blockquote-background-color: #0d1014;
  --blockquote-border-color: #252c36;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #bccad8;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #0b0f13 65%, transparent) linear-gradient(#0b0f13, color-mix(in srgb, #0b0f13 65%, transparent));
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid #0b0f13;
  --box-border-m: 3px solid #0b0f13;
  --box-border-s: 1px solid #0b0f13;
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
  --code-bracket-background: #e5800040;
  --code-comment: #4e5b6f;
  --code-normal: #c94d4d;
  --code-punctuation: #97a1b9;
  --code-radius: 0;
  --code-shadow: 0 2px 0 #0b0f13;
  --code-size: .90em;
  --code-text: #c94d4d;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #586477;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(199, 87, 92);
  --color-accent-2: rgb(209, 113, 121);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #652121;
  --dark-sidebar: #0d1014;
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(191, 0, 0, 0.2);
  --dataview-th-background: #652121;
  --dataview-th-border-bottom: #652121;
  --dataview-th-color: #e5ebee;
  --dataview-th-count-color: #e5ebee;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Taroca";
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 100;
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
  --embed-block-shadow-hover: 2px 2px 0 #0b0f13;
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: #0b0f13;
  --embed-border-color: transparent;
  --embed-border-color-hover: #0b0f13;
  --embed-border-left: 2px solid #ddaf78;
  --embed-border-left-color: #ddaf78;
  --embed-border-left-color-hover: #ddaf78;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: #0b0f13;
  --embed-border-start: 2px solid #652121;
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
  --file-header-left-color: #652121;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #0b0f13;
  --file-icon: "";
  --file-icon-color: #586477;
  --file-icon-margin: 6px;
  --file-text-color: #bccad8;
  --flair-background: #0b0f13;
  --flair-color: #bccad8;
  --folder: #a22b30;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #a22b30;
  --folder-icon-open-color: #e58000;
  --folder-open: #e58000;
  --folder-open-text-color: #bccad8;
  --folder-text-color: #bccad8;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: "Taroca";
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
  --footnote-divider-color: #283345;
  --footnote-id-color: #97a1b9;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #06080c60;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #586477;
  --graph-arrow: #97a1b9;
  --graph-background: #0d1014;
  --graph-bg: #0d1014;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #c94d4d;
  --graph-focused: #61afef;
  --graph-img: #2f4f87;
  --graph-line: #65212190;
  --graph-line-hover: #8b262d;
  --graph-lines: #65212190;
  --graph-node: #ddaf78;
  --graph-node-attachment: #2f4f87;
  --graph-node-focused: #61afef;
  --graph-node-hover-fill: #d0765b;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #a22b30;
  --graph-node-unresolved: #586477;
  --graph-tag: #a22b30;
  --graph-text: #bccad8;
  --h1-background: transparent;
  --h1-border-color: #ddaf78;
  --h1-border-left-color: #652121;
  --h1-border-line-color: #652121;
  --h1-border-line-height: 1.5px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: #652121;
  --h1-border-width: 0;
  --h1-color: #ddaf78;
  --h1-font: "Taroca";
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h1-weight: 100;
  --h2-background: transparent;
  --h2-border-color: #2f4f87;
  --h2-border-left-color: #652121;
  --h2-border-line-color: #652121;
  --h2-border-line-height: 1.5px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: #652121;
  --h2-border-width: 0;
  --h2-color: #2f4f87;
  --h2-font: "Taroca";
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 100;
  --h3-background: transparent;
  --h3-border-color: #a22b30;
  --h3-border-left-color: #652121;
  --h3-border-line-color: #652121;
  --h3-border-line-height: 2px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: #652121;
  --h3-border-width: 0;
  --h3-color: #a22b30;
  --h3-font: "Norwester";
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 100;
  --h4-background: transparent;
  --h4-border-color: #d0765b;
  --h4-border-left-color: #652121;
  --h4-border-line-color: #652121;
  --h4-border-line-height: 0;
  --h4-border-line-width: 44%;
  --h4-border-right-color: #652121;
  --h4-border-width: 0;
  --h4-color: #d0765b;
  --h4-font: "Norwester";
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 100;
  --h5-background: transparent;
  --h5-border-color: #694b3c;
  --h5-border-left-color: #652121;
  --h5-border-line-color: #652121;
  --h5-border-line-height: 0;
  --h5-border-line-width: 25%;
  --h5-border-right-color: #652121;
  --h5-border-width: 0;
  --h5-color: #694b3c;
  --h5-font: "Norwester";
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 100;
  --h6-background: transparent;
  --h6-border-color: #2e333d;
  --h6-border-left-color: #652121;
  --h6-border-line-color: #652121;
  --h6-border-line-height: 0;
  --h6-border-line-width: 0;
  --h6-border-right-color: #652121;
  --h6-border-width: 0;
  --h6-color: #bccad8;
  --h6-font: "Norwester";
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 100;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #ddaf78;
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
  --header-border-line-color: #652121;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 100;
  --headers: #ddaf78;
  --heading-formatting: #586477;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(191, 0, 0, 0.2);
  --hr: #8b262d;
  --hr-alignment: -50%, -50%;
  --hr-color: #8b262d;
  --hr-icon-background: #1a1e24;
  --hr-icon-color: #ddaf78;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-image: url("data:image/svg+xml,%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg width='100%25' height='100%25' viewBox='0 0 1000 204' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenoddclip-rule:evenoddstroke-linejoin:roundstroke-miterlimit:2'%3E%3Cg transform='matrix(1,0,0,1,1.7053e-13,-398.169)'%3E%3Crect id='Artboard1' x='-0' y='398.169' width='1000' height='203.661' style='fill:none'/%3E%3CclipPath id='_clip1'%3E%3Crect id='Artboard11' serif:id='Artboard1' x='-0' y='398.169' width='1000' height='203.661'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23_clip1)'%3E%3Cg transform='matrix(4.31034,0,0,4.31034,-267.917,-1094.41)'%3E%3Cpath d='M178.389,380.983C175.751,387.924 169.433,393.494 159,393.565C127.289,393.78 136.335,361.89 118,362C108.448,361.996 110.806,374.866 115,377C114.833,377.167 100.762,372.819 105,357C76.617,370.354 62.389,358 62.389,358C62.389,358 80.399,363.885 90.791,357.333C109.271,345.683 133.119,337.401 142,364C147.001,347.144 172.305,357.468 163,370.565C163.721,364.587 151.808,358.708 151,370.565C150.447,378.68 162.397,385.825 170.144,377.076C176.411,369.999 170.344,356.114 162,354C170.327,353.643 175.921,358.556 178.389,365.031C180.857,358.556 186.45,353.643 194.777,354C186.434,356.114 180.367,369.999 186.634,377.076C194.38,385.825 206.33,378.68 205.777,370.565C204.97,358.708 193.056,364.587 193.777,370.565C184.472,357.468 209.776,347.144 214.777,364C223.658,337.401 247.507,345.683 265.986,357.333C276.379,363.885 294.389,358 294.389,358C294.389,358 280.16,370.354 251.777,357C256.015,372.819 241.944,377.167 241.777,377C245.971,374.866 248.329,361.996 238.777,362C220.443,361.89 229.488,393.78 197.777,393.565C187.344,393.494 181.027,387.924 178.389,380.983Z' style='fill:rgb(139, 38, 45)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
  --hr-image-height: 16px;
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(191, 0, 0, 0.2);
  --hvr-active: #e5800040;
  --hvr2: rgba(191, 0, 0, 0.2);
  --i-at: #bf5e5e;
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
  --illusion-h1-background: #ddaf78;
  --illusion-h2-background: #2f4f87;
  --illusion-h3-background: #a22b30;
  --illusion-h4-background: #d0765b;
  --illusion-h5-background: #694b3c;
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
  --indentation-guide-color: #8b262d;
  --indentation-guide-color-active: #863737;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #8b262d;
  --initiative-xp: sandybrown;
  --inline-title-color: #ddaf78;
  --inline-title-font: "Taroca";
  --inline-title-position: left;
  --inline-title-size: 34px;
  --inline-title-weight: 100;
  --input-bg: rgba(0, 0, 0, 0.3);
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 #0b0f13;
  --input-shadow-hover: 3px 3px 0 #0b0f13;
  --interactive-accent: #652121;
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
  --kanban-link-color: #61afef;
  --kanban-tag-background: #652121;
  --latex-color: #c94d4d;
  --latex-format-color: #586477;
  --latex-syntax-color: #97a1b9;
  --line-height-tight: 1.3em;
  --lines: #8b262d;
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
  --list-color-1: #8b262d;
  --list-color-2: #8b262d;
  --list-color-3: #8b262d;
  --list-color-4: #8b262d;
  --list-color-5: #8b262d;
  --list-color-6: #8b262d;
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
  --menu-shadow: 2px 2px 0 #0b0f13;
  --message-border-color: #0b0f13;
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 #0b0f13;
  --message-color: #e5ebee;
  --metadata-border-color: #283345;
  --metadata-button-text-color: #586477;
  --metadata-divider-color: #283345;
  --metadata-icon-color: #97a1b9;
  --metadata-input-background-active: #06080c60;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #bccad8;
  --metadata-label-background-active: #06080c60;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #97a1b9;
  --metadata-label-text-color-hover: #97a1b9;
  --metadata-property-background-active: #e5800040;
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
  --modal-border-color: #0b0f13;
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
  --nav-indentation-guide-color: #8b262d;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #652121;
  --nav-item-background-border-color-hover: #652121;
  --nav-item-background-hover: #652121;
  --nav-item-background-selected: rgba(191, 0, 0, 0.2);
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
  --note-title-border-color: #ddaf78;
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
  --popover-border: 3px solid #0b0f13;
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #863737;
  --progress-bg: #252c36;
  --prompt-background: #1a1e24;
  --prompt-border-color: #0b0f13;
  --prompt-border-width: 3px;
  --r-heading-color: #ddaf78;
  --r-heading-font: "Taroca";
  --r-heading-font-weight: 100;
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
  --search-border: 2px solid #0b0f13;
  --search-box-shadow: 2px 2px 0 #0b0f13;
  --search-clear-button-color: #97a1b9;
  --search-icon-color: #97a1b9;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #bccad8;
  --setting-item-alt-background-hover: #06080c60;
  --setting-item-background-hover: rgba(191, 0, 0, 0.2);
  --setting-item-border-color: #283345;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #ddaf78;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #06080c60;
  --setting-items-background: transparent;
  --setting-items-border-color: #283345;
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
  --statblock-border-color: #8b262d;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: #0b0f13;
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #bccad8;
  --statblock-heading-font: "Taroca";
  --statblock-heading-font-color: #ddaf78;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 100;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #8b262d;
  --statblock-primary-color: #bccad8;
  --statblock-property-font-color: #bccad8;
  --statblock-property-name-font-color: #ddaf78;
  --statblock-rule-color: #863737;
  --statblock-section-heading-border-color: #283345;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Norwester";
  --statblock-section-heading-font-color: #63778f;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 100;
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
  --tab-container-background: #0b0f13;
  --tab-curve: 0;
  --tab-divider-color: #8b262d;
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
  --tab-switcher-preview-background-shadow: 3px 3px 0 #0b0f13;
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 #0b0f13;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #c94d4d, 5px 5px 0 #0b0f13;
  --tab-text-color: #586477;
  --tab-text-color-active: #bccad8;
  --tab-text-color-focused: #586477;
  --tab-text-color-focused-active: #bccad8;
  --tab-text-color-focused-active-current: #bccad8;
  --tab-text-color-focused-highlighted: #61afef;
  --tab-text-color-hover: #bccad8;
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
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #c94d4d;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #06080c60;
  --table-row-alt-background-hover: rgba(191, 0, 0, 0.2);
  --table-row-background-hover: rgba(191, 0, 0, 0.2);
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
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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
  --text-highlight-bg: rgba(191, 0, 0, 0.2);
  --text-highlight-bg-active: #e5800040;
  --text-muted: #97a1b9;
  --text-normal: #bccad8;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(191, 0, 0, 0.2);
  --th: #652121;
  --th-text: #e5ebee;
  --theme-rainbow-1: #ddaf78;
  --theme-rainbow-2: #2f4f87;
  --theme-rainbow-3: #a22b30;
  --theme-rainbow-4: #d0765b;
  --theme-rainbow-5: #694b3c;
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
  --vault-font: "Taroca";
  --vault-name-color: #ddaf78;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 100;
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
  background-color: rgba(191, 0, 0, 0.2);
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
  color: rgb(97, 175, 239);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 175, 239);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
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
  border-bottom-color: rgb(201, 77, 77);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(201, 77, 77);
  border-right-color: rgb(201, 77, 77);
  border-top-color: rgb(201, 77, 77);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(201, 77, 77);
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
  border-left-color: rgb(101, 33, 33);
  border-right-color: rgb(188, 202, 216);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(101, 33, 33);
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
  background-color: rgba(229, 128, 0, 0.25);
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
  background-color: rgba(229, 128, 0, 0.25);
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
  background-color: rgba(229, 128, 0, 0.25);
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
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(221, 175, 120);
  font-family: Taroca;
}

body h2 {
  color: rgb(47, 79, 135);
  font-family: Taroca;
}

body h2.page-title, h2.page-title a {
  color: rgb(221, 175, 120);
  font-family: Taroca;
}

body h3 {
  color: rgb(162, 43, 48);
  font-family: Norwester;
}

body h4 {
  color: rgb(208, 118, 91);
  font-family: Norwester;
}

body h5 {
  color: rgb(105, 75, 60);
  font-family: Norwester;
}

body h6 {
  color: rgb(188, 202, 216);
  font-family: Norwester;
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
  border-bottom-color: rgb(134, 55, 55);
  border-left-color: rgb(134, 55, 55);
  border-right-color: rgb(134, 55, 55);
  border-top-color: rgb(134, 55, 55);
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
  border-bottom-color: rgb(40, 51, 69);
  border-left-color: rgb(40, 51, 69);
  border-right-color: rgb(40, 51, 69);
  border-top-color: rgb(40, 51, 69);
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
  border-bottom-color: rgb(201, 77, 77);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(201, 77, 77);
  border-right-color: rgb(201, 77, 77);
  border-top-color: rgb(201, 77, 77);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(11, 15, 19) 0px 2px 0px 0px;
  color: rgb(201, 77, 77);
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
  --accent: #800008;
  --accent-color: 94, 0, 0;
  --accent-h: 0;
  --accent-l: 49%;
  --accent-s: 49%;
  --accent-text: #dcddde;
  --accent2: #461413;
  --accent2-lite: #0f5cbc;
  --aside-bg: #E0DACB;
  --background-modifier-active-hover: #800008;
  --background-modifier-border: #00000060;
  --background-modifier-border-focus: #800008;
  --background-modifier-border-hover: #d2c4be;
  --background-modifier-cover: #E0DACB99;
  --background-modifier-error: #772d2d;
  --background-modifier-form-field: #E0DACB99;
  --background-modifier-form-field-hover: #E0DACB99;
  --background-modifier-hover: #e5800040;
  --background-modifier-message: #800008;
  --background-modifier-success: #599049;
  --background-primary: #ECE9E4;
  --background-primary-alt: #5e0000;
  --background-secondary: #ECE9E4;
  --background-secondary-alt: #e2ded8;
  --bases-cards-background: #ECE9E4;
  --bases-cards-cover-background: #5e0000;
  --bases-cards-font-size: .90em;
  --bases-cards-radius: 0;
  --bases-cards-shadow: 0 0 0 1px #00000060;
  --bases-cards-shadow-hover: 0 0 0 1px #d2c4be;
  --bases-embed-border-color: #00000060;
  --bases-embed-border-radius: 0;
  --bases-group-heading-property-color: #5C1C16;
  --bases-group-heading-property-size: 13.5px;
  --bases-group-heading-value-size: .90em;
  --bases-table-border-color: #ECE9E4;
  --bases-table-cell-background-active: #ECE9E4;
  --bases-table-cell-background-disabled: #5e0000;
  --bases-table-cell-background-selected: rgba(186, 64, 64, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #800008;
  --bases-table-cell-shadow-focus: 0 0 0 2px #800008;
  --bases-table-container-border-radius: 0;
  --bases-table-font-size: .90em;
  --bases-table-group-background: #5e0000;
  --bases-table-header-background: #ECE9E4;
  --bases-table-header-background-hover: #e5800040;
  --bases-table-header-color: #5C1C16;
  --bases-table-row-background-hover: rgba(191, 0, 0, 0.2);
  --bases-table-summary-background: #ECE9E4;
  --bases-table-summary-background-hover: #e5800040;
  --bg: #d2c4be;
  --blockquote-background-color: #E0DACB;
  --blockquote-border-color: #d2c4be;
  --blockquote-border-thickness: 7px;
  --blockquote-color: #393636;
  --blockquote-font-style: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --blockquote-padding: 12px 24px;
  --blockquote-padding-lp: 7px 0;
  --blur-background: color-mix(in srgb, #ECE9E4 65%, transparent) linear-gradient(#ECE9E4, color-mix(in srgb, #ECE9E4 65%, transparent));
  --bold-modifier: 500;
  --bold-weight: 900;
  --box-border: 2px solid rgba(124, 49, 3, 0.4);
  --box-border-m: 3px solid rgba(124, 49, 3, 0.4);
  --box-border-s: 1px solid rgba(124, 49, 3, 0.4);
  --bttn: #ca9759;
  --bullet: "";
  --bullet-font: "its";
  --button-background: #ca9759;
  --button-background-hover: #cdab9a;
  --button-border: #ca9759;
  --button-border-radius: 0;
  --button-radius: 0;
  --button-text: #e5ebee;
  --callout-margin: 5px 0;
  --callout-padding: 12px 16px;
  --callout-radius: 0;
  --callout-title-weight: 900;
  --canvas-background: #ECE9E4;
  --canvas-card-label-color: #4e5b6f;
  --canvas-color: 166, 180, 204;
  --canvas-color-opacity: 0.07;
  --canvas-controls-radius: 0;
  --canvas-node-padding: 0 7px;
  --caret-color: #393636;
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
  --checkbox-border-color: #800008;
  --checkbox-border-color-hover: #800008;
  --checkbox-color: #800008;
  --checkbox-color-hover: #800008;
  --checkbox-marker-color: #ECE9E4;
  --checkbox-radius: 0;
  --checklist-done-color: #cdab9a;
  --checklist-done-decoration: none;
  --checklist-done-weight: 900;
  --clickable-icon-radius: 0;
  --code-background: #E0DACB;
  --code-bg: #E0DACB;
  --code-border-color: #00000060;
  --code-bracket-background: #e5800040;
  --code-comment: #4e5b6f;
  --code-normal: #5C1C16;
  --code-punctuation: #5C1C16;
  --code-radius: 0;
  --code-shadow: 0 2px 0 rgba(124, 49, 3, 0.4);
  --code-size: .90em;
  --code-text: #5C1C16;
  --collapse-icon-color: #4e5b6f;
  --collapse-icon-color-collapsed: #cdab9a;
  --color-accent: rgb(186, 64, 64);
  --color-accent-1: rgb(194, 76, 78);
  --color-accent-2: rgb(199, 87, 92);
  --color-accent-hsl: 0, 49%, 49%;
  --comment-font: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  --dark-accent: #800008;
  --dark-sidebar: #e2ded8;
  --dataview-table-width: 100%;
  --dataview-th-alt-color: rgba(191, 0, 0, 0.2);
  --dataview-th-background: #5e0000;
  --dataview-th-border-bottom: #5e0000;
  --dataview-th-color: #e5ebee;
  --dataview-th-count-color: #e5ebee;
  --dataview-th-count-font-size: 16px;
  --dataview-th-font: "Taroca";
  --dataview-th-font-size: larger;
  --dataview-th-font-weight: 100;
  --deep-dark-accent: #5e0000;
  --divider-color: #e2ded8;
  --divider-color-hover: #800008;
  --divider-width: 2px;
  --divider-width-hover: 5px;
  --drag-ghost-background: #800008;
  --drag-ghost-text-color: #e5ebee;
  --drop-shadow: #d0ddef62;
  --dropdown-background: #e2ded8;
  --dropdown-background-hover: #cdab9a;
  --embed-bg: #E0DACB;
  --embed-block-shadow-hover: 2px 2px 0 rgba(124, 49, 3, 0.4);
  --embed-border: 2px solid transparent;
  --embed-border-bottom: 2px solid transparent;
  --embed-border-bottom-color: transparent;
  --embed-border-bottom-color-hover: rgba(124, 49, 3, 0.4);
  --embed-border-color: transparent;
  --embed-border-color-hover: rgba(124, 49, 3, 0.4);
  --embed-border-left: 2px solid #ca9759;
  --embed-border-left-color: #ca9759;
  --embed-border-left-color-hover: #ca9759;
  --embed-border-right: 2px solid transparent;
  --embed-border-right-color: transparent;
  --embed-border-right-color-hover: rgba(124, 49, 3, 0.4);
  --embed-border-start: 2px solid #800008;
  --embed-border-top: 2px solid transparent;
  --embed-border-top-color: transparent;
  --embed-border-top-color-hover: rgba(124, 49, 3, 0.4);
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
  --fg: #800008;
  --file-font: "its";
  --file-header-background: #ECE9E4;
  --file-header-background-focused: #ECE9E4;
  --file-header-breadcrumb-color: #cdab9a;
  --file-header-breadcrumb-font-size: 13.5px;
  --file-header-color: #cdab9a;
  --file-header-color-active: #393636;
  --file-header-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-header-font-size: 15px;
  --file-header-font-weight: 600;
  --file-header-left-color: #800008;
  --file-header-parent-font-weight: 600;
  --file-header-right-color: #e2ded8;
  --file-icon: "";
  --file-icon-color: #676767;
  --file-icon-margin: 6px;
  --file-text-color: #393636;
  --flair-background: #e2ded8;
  --flair-color: #393636;
  --folder: #a22b30;
  --folder-font: "its";
  --folder-icon: "";
  --folder-icon-color: #a22b30;
  --folder-icon-open-color: #ca9759;
  --folder-open: #ca9759;
  --folder-open-text-color: #393636;
  --folder-text-color: #393636;
  --folder-weight: 700;
  --folder-weight-hover: 700;
  --font: "Taroca";
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
  --footnote: #676767;
  --footnote-divider-color: #00000060;
  --footnote-id-color: #5C1C16;
  --footnote-id-color-no-occurrences: #4e5b6f;
  --footnote-input-background-active: #E0DACB99;
  --footnote-radius: 0;
  --footnote-size: .90em;
  --graph-404: #cdab9a;
  --graph-arrow: #5C1C16;
  --graph-background: #ECE9E4;
  --graph-bg: #ECE9E4;
  --graph-controls-section-header-padding: 4px 8px;
  --graph-fill: #e58000;
  --graph-focused: #0f5cbc;
  --graph-img: #3276b5;
  --graph-line: #E0DACB;
  --graph-line-hover: #b6a697;
  --graph-lines: #E0DACB;
  --graph-node: #ca9759;
  --graph-node-attachment: #3276b5;
  --graph-node-focused: #0f5cbc;
  --graph-node-hover-fill: #5d0000;
  --graph-node-hover-outline: #e5ebee;
  --graph-node-tag: #5d0000;
  --graph-node-unresolved: #cdab9a;
  --graph-tag: #5d0000;
  --graph-text: #393636;
  --h1-background: transparent;
  --h1-border-color: #ca9759;
  --h1-border-left-color: black;
  --h1-border-line-color: black;
  --h1-border-line-height: 1.5px;
  --h1-border-line-width: 100%;
  --h1-border-right-color: black;
  --h1-border-width: 0;
  --h1-color: #ca9759;
  --h1-font: "Taroca";
  --h1-padding: 0;
  --h1-shadow: transparent;
  --h1-size: 34px;
  --h1-text-align: start;
  --h1-weight: 100;
  --h2-background: transparent;
  --h2-border-color: #3276b5;
  --h2-border-left-color: black;
  --h2-border-line-color: black;
  --h2-border-line-height: 1.5px;
  --h2-border-line-width: 85%;
  --h2-border-right-color: black;
  --h2-border-width: 0;
  --h2-color: #002564;
  --h2-font: "Taroca";
  --h2-padding: 0;
  --h2-shadow: transparent;
  --h2-size: 30px;
  --h2-text-align: start;
  --h2-weight: 100;
  --h3-background: transparent;
  --h3-border-color: #002564;
  --h3-border-left-color: black;
  --h3-border-line-color: black;
  --h3-border-line-height: 2px;
  --h3-border-line-width: 65%;
  --h3-border-right-color: black;
  --h3-border-width: 0;
  --h3-color: #5d0000;
  --h3-font: "Norwester";
  --h3-padding: 0;
  --h3-shadow: transparent;
  --h3-size: 26px;
  --h3-text-align: start;
  --h3-weight: 100;
  --h4-background: transparent;
  --h4-border-color: #5d0000;
  --h4-border-left-color: black;
  --h4-border-line-color: black;
  --h4-border-line-height: 0;
  --h4-border-line-width: 44%;
  --h4-border-right-color: black;
  --h4-border-width: 0;
  --h4-color: #a76652;
  --h4-font: "Norwester";
  --h4-padding: 0;
  --h4-shadow: transparent;
  --h4-size: 22px;
  --h4-text-align: start;
  --h4-weight: 100;
  --h5-background: transparent;
  --h5-border-color: #e58000;
  --h5-border-left-color: black;
  --h5-border-line-color: black;
  --h5-border-line-height: 0;
  --h5-border-line-width: 25%;
  --h5-border-right-color: black;
  --h5-border-width: 0;
  --h5-color: #393636;
  --h5-font: "Norwester";
  --h5-padding: 0;
  --h5-shadow: transparent;
  --h5-size: 20px;
  --h5-text-align: start;
  --h5-weight: 100;
  --h6-background: transparent;
  --h6-border-color: #393636;
  --h6-border-left-color: black;
  --h6-border-line-color: black;
  --h6-border-line-height: 0;
  --h6-border-line-width: 0;
  --h6-border-right-color: black;
  --h6-border-width: 0;
  --h6-color: #ca9759;
  --h6-font: "Norwester";
  --h6-padding: 0;
  --h6-shadow: transparent;
  --h6-size: 18px;
  --h6-text-align: start;
  --h6-weight: 100;
  --he-popover-border-radius: 0;
  --he-text-on-accent-active: #ca9759;
  --he-text-on-accent-inactive: #393636;
  --he-title-bar-active-action: #e58000;
  --he-title-bar-active-bg: #E0DACB;
  --he-title-bar-active-fg: #393636;
  --he-title-bar-active-pinned-bg: #ECE9E4;
  --he-title-bar-inactive-action: #5C1C16;
  --he-title-bar-inactive-bg: #ECE9E4;
  --he-title-bar-inactive-fg: #cdab9a;
  --he-title-bar-inactive-pinned-bg: #ECE9E4;
  --header-arrow-icon-color: #4e5b6f;
  --header-arrow-icon-size: 10px;
  --header-background: transparent;
  --header-border-line-align: none;
  --header-border-line-color: black;
  --header-border-line-height: 4px;
  --header-border-line-left: none;
  --header-border-line-width: 100%;
  --header-padding: 0;
  --header-shadow: transparent;
  --header-text-align: start;
  --header-weight: 100;
  --headers: #ca9759;
  --heading-formatting: #cdab9a;
  --heading-spacing: 10px;
  --heading-spacing-bottom: 10px;
  --heading-spacing-top: 10px;
  --highlight: rgba(191, 0, 0, 0.2);
  --hr: #5C1C16;
  --hr-alignment: -50%, -50%;
  --hr-color: #5C1C16;
  --hr-icon-background: #ECE9E4;
  --hr-icon-color: #ca9759;
  --hr-icon-font: "its";
  --hr-icon-padding-x: 4px;
  --hr-image: url("data:image/svg+xml,%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg width='100%25' height='100%25' viewBox='0 0 1000 204' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenoddclip-rule:evenoddstroke-linejoin:roundstroke-miterlimit:2'%3E%3Cg transform='matrix(1,0,0,1,1.7053e-13,-398.169)'%3E%3Crect id='Artboard1' x='-0' y='398.169' width='1000' height='203.661' style='fill:none'/%3E%3CclipPath id='_clip1'%3E%3Crect id='Artboard11' serif:id='Artboard1' x='-0' y='398.169' width='1000' height='203.661'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23_clip1)'%3E%3Cg transform='matrix(4.31034,0,0,4.31034,-267.917,-1094.41)'%3E%3Cpath d='M178.389,380.983C175.751,387.924 169.433,393.494 159,393.565C127.289,393.78 136.335,361.89 118,362C108.448,361.996 110.806,374.866 115,377C114.833,377.167 100.762,372.819 105,357C76.617,370.354 62.389,358 62.389,358C62.389,358 80.399,363.885 90.791,357.333C109.271,345.683 133.119,337.401 142,364C147.001,347.144 172.305,357.468 163,370.565C163.721,364.587 151.808,358.708 151,370.565C150.447,378.68 162.397,385.825 170.144,377.076C176.411,369.999 170.344,356.114 162,354C170.327,353.643 175.921,358.556 178.389,365.031C180.857,358.556 186.45,353.643 194.777,354C186.434,356.114 180.367,369.999 186.634,377.076C194.38,385.825 206.33,378.68 205.777,370.565C204.97,358.708 193.056,364.587 193.777,370.565C184.472,357.468 209.776,347.144 214.777,364C223.658,337.401 247.507,345.683 265.986,357.333C276.379,363.885 294.389,358 294.389,358C294.389,358 280.16,370.354 251.777,357C256.015,372.819 241.944,377.167 241.777,377C245.971,374.866 248.329,361.996 238.777,362C220.443,361.89 229.488,393.78 197.777,393.565C187.344,393.494 181.027,387.924 178.389,380.983Z' style='fill:rgb(139, 38, 45)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
  --hr-image-height: 16px;
  --hr-image-width: contain;
  --hr-text-offset: 12px;
  --hr-width: auto;
  --hvr: rgba(191, 0, 0, 0.2);
  --hvr-active: #e5800040;
  --hvr2: rgba(191, 0, 0, 0.2);
  --i-at: #5C1C16;
  --icon-btn-radius: 0;
  --icon-color: #5C1C16;
  --icon-color-active: #e5ebee;
  --icon-color-focused: #393636;
  --icon-color-hover: #393636;
  --icon-m: 17px;
  --icon-opacity: 1;
  --icon-size: 17px;
  --icons: #d04e4e;
  --illusion-border-line-height: 0;
  --illusion-box-shadow: 5px 5px 0 rgba(124, 49, 3, 0.4);
  --illusion-h1-background: #ca9759;
  --illusion-h2-background: #3276b5;
  --illusion-h3-background: #002564;
  --illusion-h4-background: #5d0000;
  --illusion-h5-background: #e58000;
  --illusion-h6-background: #393636;
  --illusion-header-arrow-color: #e5ebee;
  --illusion-header-arrow-icon-size: 13px;
  --illusion-header-padding: 5px 25px;
  --illusion-header-text: #e5ebee;
  --image-border-background: #E0DACB99;
  --image-border-color: #00000060;
  --image-border-padding: 8px;
  --image-border-width: 1px;
  --inactive: #cdab9a;
  --indentation-guide-color: #b6a697;
  --indentation-guide-color-active: #800008;
  --indentation-guide-editing-indent: 5.33333px;
  --indentation-guide-reading-indent: -14px;
  --indentation-guide-source-indent: 1.06667px;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --initiative-tracker-border: #b6a697;
  --initiative-xp: sandybrown;
  --inline-title-color: #ca9759;
  --inline-title-font: "Taroca";
  --inline-title-position: left;
  --inline-title-size: 34px;
  --inline-title-weight: 100;
  --input-bg: #E0DACB99;
  --input-date-separator: #4e5b6f;
  --input-placeholder-color: #4e5b6f;
  --input-radius: 0;
  --input-shadow: 2px 2px 0 rgba(124, 49, 3, 0.4);
  --input-shadow-hover: 3px 3px 0 rgba(124, 49, 3, 0.4);
  --interactive-accent: #800008;
  --interactive-accent-hover: #cdab9a;
  --interactive-accent-hsl: 0, 49%, 49%;
  --interactive-hover: #cdab9a;
  --interactive-normal: #e2ded8;
  --its: "its";
  --kanban-button-background: #E0DACB;
  --kanban-button-shadow: 2px 2px 0 rgba(124, 49, 3, 0.4);
  --kanban-card-border: 2px solid rgba(124, 49, 3, 0.4);
  --kanban-card-margin: 2px 0;
  --kanban-card-metadata-background: #ECE9E4;
  --kanban-card-text-color: #393636;
  --kanban-card-title-background: #ECE9E4;
  --kanban-card-title-border: 0 1px 0 rgba(124, 49, 3, 0.4);
  --kanban-lane-background: #E0DACB;
  --kanban-lane-border: 3px solid rgba(124, 49, 3, 0.4);
  --kanban-lane-box-shadow: 2px 2px 0 rgba(124, 49, 3, 0.4);
  --kanban-lane-padding: 0 4px;
  --kanban-link-color: #0f5cbc;
  --kanban-tag-background: #5e0000;
  --latex-color: #e58000;
  --latex-format-color: #cdab9a;
  --latex-syntax-color: #5C1C16;
  --line-height-tight: 1.3em;
  --lines: #b6a697;
  --link-background: transparent;
  --link-background-hover: transparent;
  --link-border: none;
  --link-color: #0f5cbc;
  --link-color-hover: #1B9AF0;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #0f5cbc;
  --link-external-color-hover: #461413;
  --link-external-decoration: none;
  --link-transform: none;
  --link-unresolved-color: #cdab9a;
  --link-unresolved-decoration-color: rgba(186, 64, 64, 0.3);
  --link-unresolved-opacity: 1;
  --list-bullet-box-shadow-color: #00000060;
  --list-bullet-radius: 0;
  --list-bullet-size: 6.4px;
  --list-bullet-transform: rotate(45deg);
  --list-color-1: #b6a697;
  --list-color-2: #b6a697;
  --list-color-3: #b6a697;
  --list-color-4: #b6a697;
  --list-color-5: #b6a697;
  --list-color-6: #b6a697;
  --list-indent: 25px;
  --list-marker-color: #800008;
  --list-marker-color-collapsed: #cdab9a;
  --list-marker-color-hover: #5C1C16;
  --list-marker-color-other: #461413;
  --list-marker-min-width: 0;
  --list-numbered-color: #e58000;
  --list-spacing: 1px;
  --lite-accent: #e58000;
  --mdi: "Material Icons Sharp";
  --med-small: 400px;
  --med-tall: 600px;
  --medium: 500px;
  --menu-background: #ECE9E4;
  --menu-border-color: #d2c4be;
  --menu-radius: 0;
  --menu-shadow: 2px 2px 0 rgba(124, 49, 3, 0.4);
  --message-border-color: rgba(124, 49, 3, 0.4);
  --message-border-width: 0px;
  --message-box-shadow: 2px 2px 0 rgba(124, 49, 3, 0.4);
  --message-color: #e5ebee;
  --metadata-border-color: #00000060;
  --metadata-button-text-color: #cdab9a;
  --metadata-divider-color: #00000060;
  --metadata-icon-color: #5C1C16;
  --metadata-input-background-active: #E0DACB99;
  --metadata-input-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: .90em;
  --metadata-input-text-color: #393636;
  --metadata-label-background-active: #E0DACB99;
  --metadata-label-font: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: .90em;
  --metadata-label-text-color: #5C1C16;
  --metadata-label-text-color-hover: #5C1C16;
  --metadata-property-background-active: #e5800040;
  --metadata-property-box-shadow-focus: 0 0 0 2px #800008;
  --metadata-property-box-shadow-hover: 0 0 0 1px #d2c4be;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0;
  --metadata-property-radius-hover: 0;
  --metadata-remove-color: #dcddde;
  --metadata-remove-color-hover: #e5ebee;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --metadata-title-align: center;
  --metadata-title-color: #5C1C16;
  --metadata-title-icon: "";
  --metadata-title-icon-font: "its";
  --metadata-title-icon-padding: 5px;
  --metadata-title-size: 16px;
  --metadata-title-weight: 900;
  --micro: 70px;
  --modal-background: #ECE9E4;
  --modal-border-color: rgba(124, 49, 3, 0.4);
  --modal-border-width: 3px;
  --modal-community-sidebar-width: 310px;
  --modal-nav-item-background: transparent;
  --modal-nav-item-background-hover: #E0DACB99;
  --modal-radius: 0;
  --modal-sidebar-background: #e2ded8;
  --nav-collapse-icon-color: #4e5b6f;
  --nav-collapse-icon-color-collapsed: #4e5b6f;
  --nav-heading-color: #393636;
  --nav-heading-color-collapsed: #4e5b6f;
  --nav-heading-color-collapsed-hover: #5C1C16;
  --nav-heading-color-hover: #393636;
  --nav-indentation-guide-color: #b6a697;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #800008;
  --nav-item-background-border-color-hover: #800008;
  --nav-item-background-hover: #800008;
  --nav-item-background-selected: rgba(191, 0, 0, 0.2);
  --nav-item-border-color: #e58000;
  --nav-item-border-width: 0px;
  --nav-item-children-margin-left: 15px;
  --nav-item-children-padding-left: 2px;
  --nav-item-color: #393636;
  --nav-item-color-active: #e5ebee;
  --nav-item-color-highlighted: #e5ebee;
  --nav-item-color-hover: #e5ebee;
  --nav-item-color-selected: #393636;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 0;
  --nav-item-size: 14px;
  --nav-item-weight: 500;
  --nav-item-weight-active: 700;
  --nav-item-weight-hover: 700;
  --nav-item-white-space: wrap;
  --nav-tag-color: #4e5b6f;
  --nav-tag-color-active: #5C1C16;
  --nav-tag-color-hover: #5C1C16;
  --nav-tag-radius: 0;
  --navbar-radius: 0;
  --note: #ECE9E4;
  --note-rgb: 236, 233, 228;
  --note-title-border-color: #ca9759;
  --outer-bar: #e2ded8;
  --outline: rgba(124, 49, 3, 0.4);
  --outline-arrow-display: none;
  --outline-arrow-margin: -16px;
  --outline-arrow-visibility: hidden;
  --outline-symbol: "H";
  --outline-symbol-padding-right: 4px;
  --pane-background: #ECE9E4;
  --pdf-background: #ECE9E4;
  --pdf-page-background: #ECE9E4;
  --pdf-sidebar-background: #ECE9E4;
  --pill-border-color: #00000060;
  --pill-border-color-hover: #d2c4be;
  --pill-color: #5C1C16;
  --pill-color-hover: #393636;
  --pill-color-remove: #4e5b6f;
  --pill-color-remove-hover: #0f5cbc;
  --pill-radius: 0;
  --popover-background: #ECE9E4;
  --popover-border: 3px solid rgba(124, 49, 3, 0.4);
  --popover-max-height: 600px;
  --popover-width: 650px;
  --progress: #800008;
  --progress-bg: #d2c4be;
  --prompt-background: #ECE9E4;
  --prompt-border-color: rgba(124, 49, 3, 0.4);
  --prompt-border-width: 3px;
  --r-heading-color: #ca9759;
  --r-heading-font: "Taroca";
  --r-heading-font-weight: 100;
  --r-heading-text-transform: capitalize;
  --r-main-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --r-progress-color: #e58000;
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
  --raised-background: color-mix(in srgb, #ECE9E4 65%, transparent) linear-gradient(#ECE9E4, color-mix(in srgb, #ECE9E4 65%, transparent));
  --ribbon-background: #e2ded8;
  --ribbon-background-collapsed: #ECE9E4;
  --ribbon-border-color: #e2ded8;
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
  --scrollbar-active-thumb-bg: #e58000;
  --scrollbar-bg: #d2c4be;
  --scrollbar-border-width: 0;
  --scrollbar-radius: 0;
  --scrollbar-thumb-bg: #5e0000;
  --scrollbar-track-bg: #ECE9E4;
  --search-border: 2px solid rgba(124, 49, 3, 0.4);
  --search-box-shadow: 2px 2px 0 rgba(124, 49, 3, 0.4);
  --search-clear-button-color: #5C1C16;
  --search-icon-color: #5C1C16;
  --search-result-background: #ECE9E4;
  --setting-group-heading-color: #393636;
  --setting-item-alt-background-hover: #E0DACB99;
  --setting-item-background-hover: rgba(191, 0, 0, 0.2);
  --setting-item-border-color: #00000060;
  --setting-item-heading-background: transparent;
  --setting-item-heading-border: 2px solid #ca9759;
  --setting-item-padding: 10px 15px;
  --setting-items-alt-background: transparent;
  --setting-items-alt-background-hover: #E0DACB99;
  --setting-items-background: transparent;
  --setting-items-border-color: #00000060;
  --setting-items-radius: 0;
  --shadow-l: 5px 5px 0 rgba(124, 49, 3, 0.4);
  --shadow-m: 3px 3px 0 rgba(124, 49, 3, 0.4);
  --shadow-ml: 4px 4px 0 rgba(124, 49, 3, 0.4);
  --shadow-s: 2px 2px 0 rgba(124, 49, 3, 0.4);
  --side-bar: #ECE9E4;
  --side-bar-bg: #e2ded8;
  --sidebar-icon-color: #393636;
  --sidebar-icon-color-active: #e5ebee;
  --sidebar-markdown-font-size: 16px;
  --sidebar-tab-background-color: #ca9759;
  --sidebar-tab-background-color-hover: #800008;
  --sidebar-tab-border-color: transparent;
  --sidebar-tab-border-color-active: #ca9759;
  --sidebar-tab-border-width: 0;
  --sidebar-tab-color-hover: #e5ebee;
  --sidebar-tab-icon-size: 18px;
  --sidebar-tab-icon-stroke: 1.75px;
  --sidebar-tab-padding: 0 12px;
  --slide-background: #ECE9E4;
  --slider-thumb-border-color: #d2c4be;
  --slider-thumb-radius: 0;
  --slider-track-background: #00000060;
  --slider-track-radius: 0;
  --small: 200px;
  --small-med: 300px;
  --soft-text: #5C1C16;
  --statblock-alt: #E0DACB99;
  --statblock-alt-padding: 0.25em 0.3em;
  --statblock-background-color: #ECE9E4;
  --statblock-bar-border-color: #800008;
  --statblock-bar-border-size: 0;
  --statblock-bar-color: #800008;
  --statblock-border-color: #b6a697;
  --statblock-border-size: 0;
  --statblock-box-shadow-blur: 20px;
  --statblock-box-shadow-color: rgba(124, 49, 3, 0.4);
  --statblock-box-shadow-x-offset: 0;
  --statblock-box-shadow-y-offset: 0;
  --statblock-content-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --statblock-content-font-size: 16px;
  --statblock-font-color: #393636;
  --statblock-heading-font: "Taroca";
  --statblock-heading-font-color: #ca9759;
  --statblock-heading-font-variant: normal;
  --statblock-heading-font-weight: 100;
  --statblock-heading-line-height: 28px;
  --statblock-image-border-color: #5C1C16;
  --statblock-primary-color: #393636;
  --statblock-property-font-color: #393636;
  --statblock-property-name-font-color: #ca9759;
  --statblock-rule-color: #800008;
  --statblock-section-heading-border-color: #00000060;
  --statblock-section-heading-border-size: 4px;
  --statblock-section-heading-font: "Norwester";
  --statblock-section-heading-font-color: #676767;
  --statblock-section-heading-font-size: 26px;
  --statblock-section-heading-font-variant: normal;
  --statblock-section-heading-font-weight: 100;
  --statblock-subheading-font-size: .95em;
  --statblock-subheading-font-style: italic;
  --statblock-subheading-font-weight: normal;
  --statblock-traits-font-style: normal;
  --status-bar-background: #e2ded8;
  --status-bar-border-color: #800008;
  --status-bar-font-size: 13.5px;
  --status-bar-gap: 4px;
  --status-bar-padding: 4px;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: #5C1C16;
  --strikethrough-line-thickness: 1px;
  --style-settings-background-color: transparent;
  --style-settings-border-bottom-color: transparent;
  --style-settings-border-top-color: transparent;
  --style-settings-heading-background-hover: #800008;
  --style-settings-heading-border-bottom-color: transparent;
  --style-settings-heading-border-top-color: transparent;
  --style-settings-heading-color: #e5ebee;
  --style-settings-heading-color-hover: #e5ebee;
  --success-bg: #599049;
  --suggestion-background: #ECE9E4;
  --tab-background: #e2ded8;
  --tab-background-active: #ECE9E4;
  --tab-container-background: #e2ded8;
  --tab-curve: 0;
  --tab-divider-color: #5C1C16;
  --tab-font-weight: 500;
  --tab-font-weight-active: 900;
  --tab-min-width: min-content;
  --tab-outline-color: #800008;
  --tab-outline-width: 2px;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 15px;
  --tab-stacked-font-weight: 700;
  --tab-stacked-shadow: -10px 0 10px #d0ddef62;
  --tab-stacked-shadow-color: #d0ddef62;
  --tab-switcher-background: #ECE9E4;
  --tab-switcher-menubar-background: linear-gradient(to top, #ECE9E4, transparent);
  --tab-switcher-preview-background-shadow: 3px 3px 0 rgba(124, 49, 3, 0.4);
  --tab-switcher-preview-radius: 0;
  --tab-switcher-preview-shadow: 2px 2px 0 rgba(124, 49, 3, 0.4);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #e58000, 5px 5px 0 rgba(124, 49, 3, 0.4);
  --tab-text-color: #cdab9a;
  --tab-text-color-active: #393636;
  --tab-text-color-focused: #cdab9a;
  --tab-text-color-focused-active: #393636;
  --tab-text-color-focused-active-current: #393636;
  --tab-text-color-focused-highlighted: #0f5cbc;
  --tab-text-color-hover: #393636;
  --tab-top-outline-width: 0;
  --table: #00000060;
  --table-add-button-background: #ca9759;
  --table-add-button-border-color: #ECE9E4;
  --table-add-button-col-width: 24px;
  --table-add-button-color: #e5ebee;
  --table-add-button-row-height: 24px;
  --table-add-button-size: 24px;
  --table-border-color: #ECE9E4;
  --table-cell-padding-x: 8px;
  --table-cell-padding-y: 4px;
  --table-column-alt-background: #E0DACB99;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #800008;
  --table-drag-handle-color: #4e5b6f;
  --table-drag-handle-color-active: #e5ebee;
  --table-header-background: #5e0000;
  --table-header-background-hover: #800008;
  --table-header-border-color: #ECE9E4;
  --table-header-color: #e5ebee;
  --table-header-padding-x: 8px;
  --table-header-padding-y: 4px;
  --table-header-size: '??', "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --table-header-text-color: #e58000;
  --table-header-weight: 700;
  --table-line-height: 1.3em;
  --table-row-alt-background: #E0DACB99;
  --table-row-alt-background-hover: rgba(191, 0, 0, 0.2);
  --table-row-background-hover: rgba(191, 0, 0, 0.2);
  --table-row-edit-font-size: .95em;
  --table-selection: rgba(186, 64, 64, 0.1);
  --table-selection-border-color: #800008;
  --table-selection-border-radius: 0;
  --tag: #5e0000;
  --tag-background: #5e0000;
  --tag-background-color: #5e0000;
  --tag-background-hover: #800008;
  --tag-border-color: #5e0000;
  --tag-border-color-hover: #800008;
  --tag-color: #e5ebee;
  --tag-color-hover: #e5ebee;
  --tag-decoration-hover: underline;
  --tag-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --tag-padding-x: 7px;
  --tag-padding-y: 3px;
  --tag-radius: 0;
  --tag-size: .90em;
  --tag-text: #e58000;
  --tall: 700px;
  --td: #E0DACB99;
  --text: #393636;
  --text-accent: #0f5cbc;
  --text-accent-hover: #461413;
  --text-dl: #e5ebee;
  --text-faint: #4e5b6f;
  --text-highlight-bg: rgba(191, 0, 0, 0.2);
  --text-highlight-bg-active: #e5800040;
  --text-muted: #5C1C16;
  --text-normal: #393636;
  --text-on-accent: #e5ebee;
  --text-selection: rgba(191, 0, 0, 0.2);
  --th: #5e0000;
  --th-text: #e5ebee;
  --theme-rainbow-1: #ca9759;
  --theme-rainbow-2: #3276b5;
  --theme-rainbow-3: #002564;
  --theme-rainbow-4: #5d0000;
  --theme-rainbow-5: #e58000;
  --theme-rainbow-6: #393636;
  --tiny: 100px;
  --titlebar-background: #ECE9E4;
  --titlebar-background-focused: #e2ded8;
  --titlebar-border-color: #00000060;
  --titlebar-text-color: #393636;
  --titlebar-text-color-focused: #393636;
  --toggle-border-width: 1px;
  --toggle-radius: 0;
  --toggle-s-width: 20px;
  --toggle-shadow: none;
  --toggle-thumb-color: transparent;
  --toggle-thumb-radius: 0;
  --toggle-width: 20px;
  --tooltip-color: #e5ebee;
  --vault-font: "Taroca";
  --vault-name-color: #ca9759;
  --vault-name-font-size: 20px;
  --vault-name-font-weight: 100;
  --vault-profile-color: #393636;
  --vault-profile-color-hover: #393636;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(226, 222, 216);
  color: rgb(57, 54, 54);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(236, 233, 228);
  color: rgb(57, 54, 54);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(236, 233, 228);
  color: rgb(57, 54, 54);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(226, 222, 216);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(226, 222, 216);
  border-left-color: rgb(226, 222, 216);
  color: rgb(57, 54, 54);
}

body div#quartz-root {
  background-color: rgb(236, 233, 228);
  color: rgb(57, 54, 54);
}`,
    typography: `body .page article p > b, b {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(57, 54, 54) none 0px;
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body .page article p > em, em {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(57, 54, 54) none 0px;
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body .page article p > i, i {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(57, 54, 54) none 0px;
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body .page article p > strong, strong {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 900;
  outline: rgb(57, 54, 54) none 0px;
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body .text-highlight {
  background-color: rgba(191, 0, 0, 0.2);
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(57, 54, 54) none 0px;
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body del {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(57, 54, 54) none 0px;
  text-decoration: line-through 1px rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
  text-decoration-thickness: 1px;
}

body p {
  color: rgb(92, 28, 22);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(92, 28, 22) none 0px;
  text-decoration: rgb(92, 28, 22);
  text-decoration-color: rgb(92, 28, 22);
}`,
    links: `body a.external, footer a {
  color: rgb(15, 92, 188);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(15, 92, 188) none 0px;
  text-decoration: rgb(15, 92, 188);
  text-decoration-color: rgb(15, 92, 188);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(15, 92, 188);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(15, 92, 188) none 0px;
  text-decoration: rgb(15, 92, 188);
  text-decoration-color: rgb(15, 92, 188);
}

body a.internal.broken {
  color: rgb(205, 171, 154);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(205, 171, 154) none 0px;
  text-decoration: rgba(186, 64, 64, 0.3);
  text-decoration-color: rgba(186, 64, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(57, 54, 54);
}

body dt {
  color: rgb(57, 54, 54);
}

body ol > li {
  color: rgb(57, 54, 54);
}

body ol.overflow {
  background-color: rgb(236, 233, 228);
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body ul > li {
  color: rgb(57, 54, 54);
}

body ul.overflow {
  background-color: rgb(236, 233, 228);
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 91, 111);
  text-decoration: rgb(78, 91, 111);
}

body blockquote {
  background-color: rgb(224, 218, 203);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body table {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 196.766px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(224, 218, 203, 0.6);
}

body td {
  border-bottom-color: rgb(236, 233, 228);
  border-left-color: rgb(236, 233, 228);
  border-right-color: rgb(236, 233, 228);
  border-top-color: rgb(236, 233, 228);
  color: rgb(57, 54, 54);
}

body th {
  border-bottom-color: rgb(236, 233, 228);
  border-left-color: rgb(236, 233, 228);
  border-right-color: rgb(236, 233, 228);
  border-top-color: rgb(236, 233, 228);
  color: rgb(229, 235, 238);
  font-weight: 700;
}

body tr {
  background-color: rgb(94, 0, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(92, 28, 22);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(92, 28, 22);
  border-right-color: rgb(92, 28, 22);
  border-top-color: rgb(92, 28, 22);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(92, 28, 22);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(224, 218, 203);
  border-bottom-color: rgba(0, 0, 0, 0.376);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0.376);
  border-right-color: rgba(0, 0, 0, 0.376);
  border-top-color: rgba(0, 0, 0, 0.376);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(224, 218, 203);
  border-bottom-color: rgba(0, 0, 0, 0.376);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0.376);
  border-right-color: rgba(0, 0, 0, 0.376);
  border-top-color: rgba(0, 0, 0, 0.376);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(57, 54, 54);
}

body pre > code, pre:has(> code) {
  background-color: rgb(224, 218, 203);
  border-bottom-color: rgba(0, 0, 0, 0.376);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0.376);
  border-right-color: rgba(0, 0, 0, 0.376);
  border-top-color: rgba(0, 0, 0, 0.376);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(224, 218, 203);
  border-bottom-color: rgba(0, 0, 0, 0.376);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0.376);
  border-right-color: rgba(0, 0, 0, 0.376);
  border-top-color: rgba(0, 0, 0, 0.376);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body figcaption {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body img {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body video {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}`,
    embeds: `body .file-embed {
  background-color: rgb(226, 222, 216);
  border-bottom-color: rgb(92, 28, 22);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(92, 28, 22);
  border-right-color: rgb(92, 28, 22);
  border-top-color: rgb(92, 28, 22);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(57, 54, 54);
  color: rgb(57, 54, 54);
}

body .transclude {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(128, 0, 8);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 2px;
}

body .transclude-inner {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(128, 0, 8);
  border-right-color: rgb(57, 54, 54);
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
  color: rgb(205, 171, 154);
  text-decoration: rgb(205, 171, 154);
  text-decoration-color: rgb(205, 171, 154);
}

body input[type=checkbox] {
  border-bottom-color: rgb(128, 0, 8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 0, 8);
  border-right-color: rgb(128, 0, 8);
  border-top-color: rgb(128, 0, 8);
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
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body li.task-list-item[data-task='-'] {
  color: rgb(203, 212, 235);
  text-decoration: rgb(203, 212, 235);
  text-decoration-color: rgb(203, 212, 235);
}

body li.task-list-item[data-task='/'] {
  color: rgb(92, 28, 22);
  text-decoration: rgb(92, 28, 22);
  text-decoration-color: rgb(92, 28, 22);
}

body li.task-list-item[data-task='>'] {
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
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
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
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
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body li.task-list-item[data-task='l'] {
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body li.task-list-item[data-task='p'] {
  color: rgb(159, 186, 223);
  text-decoration: rgb(159, 186, 223);
  text-decoration-color: rgb(159, 186, 223);
}

body li.task-list-item[data-task='u'] {
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body li.task-list-item[data-task='w'] {
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
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
  border-bottom-color: rgb(57, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(57, 54, 54);
  border-left-width: 4px;
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
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
  background-color: rgba(224, 218, 203, 0.6);
  border-bottom-color: rgba(0, 0, 0, 0.376);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(0, 0, 0, 0.376);
  border-right-color: rgba(0, 0, 0, 0.376);
  border-top-color: rgba(0, 0, 0, 0.376);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(236, 233, 228);
  border-bottom-color: rgba(124, 49, 3, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(124, 49, 3, 0.4);
  border-left-width: 3px;
  border-right-color: rgba(124, 49, 3, 0.4);
  border-right-width: 3px;
  border-top-color: rgba(124, 49, 3, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
  box-shadow: rgba(124, 49, 3, 0.4) 5px 5px 0px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(57, 54, 54) none 0px;
  text-decoration: rgb(57, 54, 54);
  text-decoration-color: rgb(57, 54, 54);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(57, 54, 54);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(57, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(57, 54, 54);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(229, 128, 0, 0.25);
  color: rgb(57, 54, 54);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(124, 49, 3, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 3px;
  border-left-color: rgba(124, 49, 3, 0.4);
  border-left-width: 3px;
  border-right-color: rgba(124, 49, 3, 0.4);
  border-right-width: 3px;
  border-top-color: rgba(124, 49, 3, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 3px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(236, 233, 228);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(229, 128, 0, 0.25);
  border-bottom-color: rgb(57, 54, 54);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(57, 54, 54);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(229, 128, 0, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(57, 54, 54);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(94, 0, 0);
  border-bottom-color: rgb(94, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(94, 0, 0);
  border-right-color: rgb(94, 0, 0);
  border-top-color: rgb(94, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(229, 235, 238);
}

body h1 {
  color: rgb(202, 151, 89);
  font-family: Taroca;
}

body h2 {
  color: rgb(0, 37, 100);
  font-family: Taroca;
}

body h2.page-title, h2.page-title a {
  color: rgb(202, 151, 89);
  font-family: Taroca;
}

body h3 {
  color: rgb(93, 0, 0);
  font-family: Norwester;
}

body h4 {
  color: rgb(167, 102, 82);
  font-family: Norwester;
}

body h5 {
  color: rgb(57, 54, 54);
  font-family: Norwester;
}

body h6 {
  color: rgb(202, 151, 89);
  font-family: Norwester;
}

body hr {
  border-bottom-color: rgb(226, 222, 216);
  border-left-color: rgb(226, 222, 216);
  border-right-color: rgb(226, 222, 216);
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
  background: rgb(236, 233, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 233, 228);
}

body ::-webkit-scrollbar-corner {
  background: rgb(236, 233, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 233, 228);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(236, 233, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 233, 228);
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(236, 233, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 233, 228);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(236, 233, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 233, 228);
}

body ::-webkit-scrollbar-track {
  background: rgb(236, 233, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(236, 233, 228);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(57, 54, 54);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  text-decoration: rgb(57, 54, 54);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  text-decoration: rgb(57, 54, 54);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(128, 0, 8);
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
  border-bottom-color: rgb(92, 28, 22);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(92, 28, 22);
  border-right-color: rgb(92, 28, 22);
  border-top-color: rgb(92, 28, 22);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(92, 28, 22);
}`,
    footer: `body footer {
  background-color: rgb(226, 222, 216);
  border-bottom-color: rgb(128, 0, 8);
  border-left-color: rgb(128, 0, 8);
  border-right-color: rgb(128, 0, 8);
  border-top-color: rgb(128, 0, 8);
  border-top-left-radius: 0px;
  color: rgb(92, 28, 22);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(92, 28, 22);
  text-decoration: rgb(92, 28, 22);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
  color: rgb(57, 54, 54);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body li.section-li > .section .meta {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(57, 54, 54);
  text-decoration: rgb(57, 54, 54);
}

body ul.section-ul {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(92, 28, 22);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(92, 28, 22);
  border-right-color: rgb(92, 28, 22);
  border-top-color: rgb(92, 28, 22);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(92, 28, 22);
}

body .darkmode svg {
  color: rgb(92, 28, 22);
  stroke: rgb(92, 28, 22);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(205, 171, 154);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(205, 171, 154);
  border-right-color: rgb(205, 171, 154);
  border-top-color: rgb(205, 171, 154);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(205, 171, 154);
}

body .breadcrumb-element p {
  color: rgb(78, 91, 111);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
  color: rgb(57, 54, 54);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.376);
  border-left-color: rgba(0, 0, 0, 0.376);
  border-right-color: rgba(0, 0, 0, 0.376);
  border-top-color: rgba(0, 0, 0, 0.376);
  color: rgb(92, 28, 22);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(92, 28, 22);
  border-left-color: rgb(92, 28, 22);
  border-right-color: rgb(92, 28, 22);
  border-top-color: rgb(92, 28, 22);
  color: rgb(92, 28, 22);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(226, 222, 216);
}

body .page-header h2.page-title {
  color: rgb(57, 54, 54);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(57, 54, 54);
  text-decoration: underline dotted rgb(57, 54, 54);
}

body details {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body input[type=text] {
  border-bottom-color: rgb(92, 28, 22);
  border-left-color: rgb(92, 28, 22);
  border-right-color: rgb(92, 28, 22);
  border-top-color: rgb(92, 28, 22);
  color: rgb(92, 28, 22);
  font-family: "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgb(224, 218, 203);
  border-bottom-color: rgb(92, 28, 22);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(92, 28, 22);
  border-right-color: rgb(92, 28, 22);
  border-top-color: rgb(92, 28, 22);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgba(124, 49, 3, 0.4) 0px 2px 0px 0px;
  color: rgb(92, 28, 22);
  font-family: "Fira Code", "Fira Code Medium", "Source Code Pro", monospace;
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

body progress {
  border-bottom-color: rgb(57, 54, 54);
  border-left-color: rgb(57, 54, 54);
  border-right-color: rgb(57, 54, 54);
  border-top-color: rgb(57, 54, 54);
}

body sub {
  color: rgb(57, 54, 54);
}

body summary {
  color: rgb(57, 54, 54);
}

body sup {
  color: rgb(57, 54, 54);
}`,
  },
};
