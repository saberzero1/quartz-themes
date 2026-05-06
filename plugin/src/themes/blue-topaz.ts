import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "blue-topaz",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lucida-handwriting", "icons/boxicons"],
    fontFiles: [
      {
        family: "Lucida Handwriting",
        style: "italic",
        weight: "normal",
        file: "lucida-handwriting.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "boxicons",
        style: "normal",
        weight: "normal",
        file: "boxicons.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: ["blue-topaz-theme", "Blue-Topaz-Codebox-Highlight"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --Fold0: #fc5c65;
  --Fold1: #fd9644;
  --Fold2: #fed330;
  --Fold3: #26de81;
  --Fold4: #2bcbba;
  --Fold5: #45aaf2;
  --Fold6: #4b7bec;
  --Fold7: #a55eea;
  --Fold8: #d1d8e0;
  --Fold9: #778ca3;
  --FoldA: #eb3b5a;
  --FoldB: #fa8231;
  --FoldC: #f7b731;
  --FoldD: #20bf6b;
  --FoldE: #0fb9b1;
  --FoldF: #2d98da;
  --FoldG: #3867d6;
  --FoldH: #8854d0;
  --FoldI: #a5b1c2;
  --FoldJ: #4b6584;
  --FoldK: #fc5c65;
  --FoldL: #fd9644;
  --FoldM: #fed330;
  --FoldN: #26de81;
  --FoldO: #2bcbba;
  --FoldP: #45aaf2;
  --FoldQ: #4b7bec;
  --FoldR: #a55eea;
  --FoldS: #d1d8e0;
  --FoldT: #778ca3;
  --FoldU: #eb3b5a;
  --FoldV: #fa8231;
  --FoldW: #f7b731;
  --FoldX: #20bf6b;
  --FoldY: #0fb9b1;
  --FoldZ: #2d98da;
  --accent-em: #a4ca8e;
  --accent-h: 208;
  --accent-l: 49%;
  --accent-l-alt: calc(var(--accent-l)*1.05);
  --accent-s: 64%;
  --accent-strong: #e7e7e7;
  --activeline-background: var(--theme-color-translucent-005, hsla(208, 64%, 49%,0.05));
  --admonition-bg-color: #11111100;
  --aqua: #35bed0;
  --background-4-sliding-pane: #252525ed;
  --background-asymm-split-left: var(--background-secondary-alt, #000000);
  --background-black-or-white-1: #353535;
  --background-blockquote: #9191911c;
  --background-blue: #2f5264;
  --background-brown: #493a3a;
  --background-code: #1111118c;
  --background-code-2: #4c4c4cb0;
  --background-command-palette-theme-dark-custom: url("https://");
  --background-command-palette-theme-light-custom: url("https://");
  --background-gray: #535353;
  --background-green: #32503e;
  --background-markdown-page-theme-dark-custom: url("https://");
  --background-markdown-page-theme-light-custom: url("https://");
  --background-mobile-drawer-1: #1b1b1b;
  --background-mobile-drawer-2: #1b1b1b69;
  --background-modifier-border: var(--color-base-30, #343434);
  --background-modifier-border-1: #000000;
  --background-modifier-border-asymm: #343434;
  --background-modifier-border-checkbox: #7b7b7b;
  --background-modifier-border-hr: #3f3f3f;
  --background-modifier-box-shadow: rgba(228, 228, 228, 0.08);
  --background-modifier-error: var(--color-red, #9b4343);
  --background-modifier-error-rgb: var(--color-red-rgb, 155, 67, 67);
  --background-modifier-success: var(--color-green, #539126);
  --background-modifier-success-rgb: var(--color-green-rgb, 83, 145, 38);
  --background-nonoverlapping-note: #000000;
  --background-orange: #53422f;
  --background-panel-page-theme-dark-custom: url("https://");
  --background-panel-page-theme-light-custom: url("https://");
  --background-pink: #533b4a;
  --background-popover: var(--color-base-10, #242424);
  --background-primary: var(--background-primary-bg-4-bt,#202020);
  --background-primary-alt: var(--background-primary-alt-bg-4-bt,#444444);
  --background-purple: #443f57;
  --background-red: #683c3c;
  --background-secondary: var(--background-secondary-bg-4-bt,#151515);
  --background-secondary-alt: var(--background-secondary-alt-bg-4-bt,#000000);
  --background-secondary-translucent: #2c2c2c26;
  --background-secondary-translucent-1: #2c2c2c26;
  --background-settings-workplace-theme-dark-custom: url("https://");
  --background-settings-workplace-theme-light-custom: url("https://");
  --background-titlebar-inner: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 10%);
  --background-transparent-black-or-white-1: #1b1b1b9a;
  --background-transparent-black-or-white-2: #1e1e1ebd;
  --background-transparent-black-or-white-3: #2f2f2f6c;
  --background-transparent-black-or-white-3-1: #00000064;
  --background-transparent-black-or-white-4: #7e7e7e1d;
  --background-transparent-black-or-white-5: #0f0f0f6c;
  --background-transparent-blue: #003e759a;
  --background-waves-color: #4A75DB8C;
  --background-yellow: #585536;
  --bases-cards-background: var(--background-primary, #202020);
  --bases-cards-cover-background: var(--background-primary-alt, #444444);
  --bases-cards-radius: var(--radius-m, 7px);
  --bases-embed-border-color: var(--background-modifier-border, #343434);
  --bases-embed-border-radius: var(--radius-s, 5px);
  --bases-group-heading-property-color: var(--text-muted, #8a8a8a);
  --bases-table-border-color: var(--table-border-color, #4a4a4a);
  --bases-table-cell-background-active: var(--background-primary, #202020);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #444444);
  --bases-table-cell-background-selected: var(--table-selection, hsla(208, 64%, 49%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 5px);
  --bases-table-group-background: var(--background-primary-alt, #444444);
  --bases-table-header-background: var(--background-primary, #202020);
  --bases-table-header-color: var(--text-muted, #8a8a8a);
  --bases-table-summary-background: var(--background-primary, #202020);
  --bg-color-highlight-1: #c865656f;
  --bg-color-highlight-2: #54b9476f;
  --bg-color-highlight-3: #1e83d086;
  --bg-color-notebook: #FFFFFF00;
  --bg-color-settings-0: #07070747;
  --bg-color-settings-0-1: #ffffff00;
  --bg-color-settings-1: #7c7c7c6d;
  --bg-color-settings-2: #1f1f1f52;
  --bg-color-settings-3: #141414be;
  --bg-color-settings-4: #2e2e2e9d;
  --bg-color-settings-5: #424242aa;
  --bg-color-settings-6: #191919c7;
  --bg-panel-page-opacity-cp: 0.25;
  --bg-sliding-pane-header: #00000043;
  --bg-sliding-pane-leaf: #0f0f0f36;
  --blockquote-border-color: var(--interactive-accent, hsl(208, 64%, 49%));
  --blue: #a0c7e9;
  --blur-codebox-frosted-glass: 2;
  --blur-depth: 10px;
  --blur-depth-cp: 10px;
  --blur-p-kanban-frosted-glass: 5;
  --bodyFont: var(--font-text-theme, Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei");
  --bottom-padding-value: 0em;
  --brightness-4-bg: 0.9;
  --brightness-4-bg-cp: 0.9;
  --bt-bubble-background-color: transparent;
  --bt-bubble-border-color: var(--background-modifier-border, #343434);
  --bt-bubble-layout-padding: 8px;
  --bt-colorful-indentation-width: 1px;
  --bt-connected-indent-line-color: #926a6a;
  --bt-indentation-gradient-color-1: var(--theme-color, hsl(208, 64%, 49%));
  --bt-indentation-gradient-color-2: transparent;
  --bt-indentation-line-image: url("");
  --bt-indentation-width-hover: 3px;
  --c-1: #da2400;
  --c-2: #ffb623;
  --c-3: #8c6e22;
  --calendar-active-color: var(--theme-color-translucent-04, hsla(208, 64%, 49%,0.4));
  --calendar-hover-color: var(--theme-color-translucent-02, hsla(208, 64%, 49%,0.2));
  --calendar-today-background-color: #8c4545;
  --calendar-week-background-color: #4a5842;
  --calendar-week-color: #a2df94;
  --calendar-week-hover: #61815c;
  --callout-bug: var(--callout-bug, 251, 70, 76);
  --callout-default: var(--callout-default, 2, 122, 255);
  --callout-error: var(--callout-error, 251, 70, 76);
  --callout-example: var(--callout-example, 168, 130, 255);
  --callout-fail: var(--callout-fail, 251, 70, 76);
  --callout-info: var(--callout-info, 2, 122, 255);
  --callout-question: var(--callout-question, 233, 151, 63);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 5px);
  --callout-success: var(--callout-success, 68, 207, 110);
  --callout-summary: var(--callout-summary, 83, 223, 221);
  --callout-tip: var(--callout-tip, 83, 223, 221);
  --callout-todo: var(--callout-todo, 2, 122, 255);
  --callout-warning: var(--callout-warning, 233, 151, 63);
  --canvas-background: var(--background-primary, #202020);
  --canvas-card-label-color: var(--text-faint, #797979);
  --canvas-card-opacity: 0.1;
  --canvas-controls-radius: var(--radius-s, 5px);
  --cards-width: 138px;
  --caret-color: var(--text-normal, #c6c6c6);
  --checkbox-border-color: var(--text-faint, #797979);
  --checkbox-border-color-hover: var(--text-muted, #8a8a8a);
  --checkbox-color: var(--interactive-accent, hsl(208, 64%, 49%));
  --checkbox-color-0: #3187d3;
  --checkbox-color-1: #a9a608;
  --checkbox-color-2: #1dac10;
  --checkbox-color-3: #ffd1d1;
  --checkbox-color-4: #625d4c;
  --checkbox-color-5: #9a67ae;
  --checkbox-color-6: #5f5f5f;
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(203, 67.2%, 63.21%));
  --checkbox-marker-color: var(--background-primary, #202020);
  --checkbox-radius: var(--radius-s, 5px);
  --checkbox-size: var(--font-text-size, 0.9rem);
  --checklist-bg: #1d1d1d96;
  --checklist-bg-hover: #08080896;
  --checklist-color-1: #005aa486;
  --checklist-color-2: #00798986;
  --checklist-color-3: #12781586;
  --checklist-color-4: #897b0086;
  --checklist-color-5: #a4620086;
  --checklist-color-6: #ab100586;
  --checklist-color-7: #7f1f9086;
  --checklist-done-color: var(--text-muted, #8a8a8a);
  --clickable-icon-radius: var(--radius-s, 5px);
  --cloze-bg-color: var(--accent-strong, #e7e7e7);
  --cloze-bg-color-3: transparent;
  --cloze-decoration: none;
  --cloze-decoration-2: dashed;
  --cloze-decoration-3: dashed;
  --cloze-decoration-color: red;
  --cloze-decoration-color-2: var(--theme-color, hsl(208, 64%, 49%));
  --cloze-decoration-color-3: var(--theme-color, hsl(208, 64%, 49%));
  --code-active-line-background-color: var(--activeline-background, #111111eb);
  --code-atom: var(--orange-1, #da904b);
  --code-attribute: var(--code-function, #cac685);
  --code-attribute-in-comment: #c792ea;
  --code-background: var(--background-code, #1111118c);
  --code-border-color: var(--background-modifier-border, #343434);
  --code-bracket: #ff5370;
  --code-builtin: #ffcb6b;
  --code-callee: #89ddff;
  --code-comment: var(--darkgreen, #568060);
  --code-def: #82aaff;
  --code-definition: #82aaff;
  --code-error-bg: #ff5370;
  --code-function: var(--light-yellow, #cac685);
  --code-header: #da7dae;
  --code-hr: var(--code-punctuation, #abb2bf);
  --code-important: var(--darkblue, #478fee);
  --code-keyword: var(--darkblue, #478fee);
  --code-language: var(--text-muted, #8a8a8a);
  --code-link: #696d70;
  --code-matching-bracket: #ffffff;
  --code-meta: #ffcb6b;
  --code-normal: var(--text-normal, #ebdbb2);
  --code-number: #ff5370;
  --code-operator: var(--code-property, #a89984);
  --code-property: var(--blue, #a0c7e9);
  --code-punctuation: var(--gray-2, #abb2bf);
  --code-qualifier: var(--aqua, #35bed0);
  --code-radius: var(--radius-s, 5px);
  --code-selection-background: var(--text-selection, #3b767160);
  --code-selection-color: var(--code-normal, #ebdbb2);
  --code-string: var(--green, #abd58e);
  --code-string-2: var(--yellow, #d6b87f);
  --code-tag: var(--red, #db7c84);
  --code-tag-in-comment: #ff5370;
  --code-type: var(--code-function, #cac685);
  --code-value: var(--green, #abd58e);
  --code-variable: var(--red, #db7c84);
  --code-variable-2: #53ada3;
  --code-variable-3: #e7852fe7;
  --collapse-icon-color: var(--text-faint, #797979);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(208, 64%, 49%));
  --color-highlight-1: var(--text-normal, #c6c6c6);
  --color-highlight-2: var(--text-normal, #c6c6c6);
  --color-highlight-3: var(--text-normal, #c6c6c6);
  --color-view-header-gradient-1: #060813de;
  --color-view-header-gradient-2: #00285dc0;
  --colorA: rgba(152, 0, 240, 0.13);
  --colorB: rgba(0, 72, 240, 0.13);
  --colorC: rgba(0, 240, 44, 0.13);
  --cursor-blue: #8ac7ff;
  --cursor-green: #7dff7d;
  --cursor-red: #ff3939;
  --cursor-violet: #bf76ff;
  --cursor-yellow: #fff955;
  --custom-titlebar-bg: var(--background-secondary-alt, #000000);
  --dark: var(--text-normal, var(--color-base-100, #c6c6c6));
  --darkblue: #478fee;
  --darkgray: var(--text-normal, var(--color-base-100, #c6c6c6));
  --darkgreen: #568060;
  --day-planner-dot: #dfcf77;
  --day-planner-item-hover: #053c85;
  --day-planner-line: #dfcf77;
  --day-planner-pie: #f19c1c;
  --day-planner-timeline: #000000;
  --divider-color: var(--background-modifier-border, #000000);
  --divider-color-hover: var(--interactive-accent, hsl(208, 64%, 49%));
  --dotted-notebook-dot-color: #c7c7c71f;
  --dropdown-background: var(--interactive-normal, #2b2b2b);
  --dropdown-background-hover: var(--interactive-hover, #373737);
  --embed-color: hsla(calc(var(--accent-h)*1),calc(var(--accent-s)*1.2),calc(var(--accent-l)*2),0.055);
  --embed-content-height: 600px;
  --event-item-color1: #283493bb;
  --event-item-color10: #6a1b9abb;
  --event-item-color2: #1565c0bb;
  --event-item-color3: #00838fbb;
  --event-item-color4: #2e7d32bb;
  --event-item-color5: #9e9d24bb;
  --event-item-color6: #ff8f00bb;
  --event-item-color7: #d84315bb;
  --event-item-color8: #c62828bb;
  --event-item-color9: #ad1457bb;
  --external-link-color: var(--internal-link-color, hsl(208, 64%, 49%));
  --fancy-cursor-width: 2px;
  --fancy-hr-icon: '😀';
  --fancy-hr-rotate: 0deg;
  --file-header-background: var(--background-primary, #202020);
  --file-header-background-focused: var(--background-primary, #202020);
  --file-header-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --file-line-width: 45rem;
  --flair-background: var(--interactive-normal, #2b2b2b);
  --flair-color: var(--text-normal, #c6c6c6);
  --folder-title: #ffffff;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-family-better-footnote: Arlrdbd, "Source Han Sans", "Segoe UI Emoji";
  --font-family-folder-file-title: var(--font-text-override),Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: var(--font-monospace-override), var(--font-monospace-theme);
  --font-family-special-tag: "Lucida Handwriting", "Segoe UI Emoji";
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", var(--font-interface);
  --font-family-tag: Bookerly, 'Inter', "Segoe UI", "Microsoft YaHei", STzhongsong, STSong, "Segoe UI Emoji", Serif;
  --font-family-vault: "Lucida Handwriting", "Segoe UI Emoji";
  --font-loading-text: var(--font-monospace-theme, 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace);
  --font-mermaid: var(--font-text, Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --font-monospace-theme: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-size-better-footnote: 1.3em;
  --font-size-checklist: 0.85em;
  --font-size-cloze: 0.9375em;
  --font-size-code: 0.825em;
  --font-size-edit-blockquote: 1em;
  --font-size-edit-normal: 1em;
  --font-size-embed-file: 1.25em;
  --font-size-embed-title-size: 1.3em;
  --font-size-emoji-after-tag: 1.5625em;
  --font-size-file-header-title: 0.9em;
  --font-size-file-header-title-andy-plugin: 1em;
  --font-size-folder-and-file: 0.9em;
  --font-size-latex: 1em;
  --font-size-list: 1em;
  --font-size-loading-add: 1.5em;
  --font-size-loading-diy-text: 3em;
  --font-size-obsidian-titlebar: 13px;
  --font-size-outline: var(--nav-item-size, 13px);
  --font-size-preview-blockquote: 1em;
  --font-size-preview-normal: 1em;
  --font-size-split: 0.85em;
  --font-size-tag: 0.85em;
  --font-size-vault-name: 1em;
  --font-style-em: italic;
  --font-text-theme: Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei";
  --font-weight-highlight-1: normal;
  --font-weight-highlight-2: normal;
  --font-weight-highlight-3: normal;
  --font-weight-inline-code: bold;
  --font-weight-strong: bold;
  --footnote-divider-color: var(--metadata-divider-color, #343434);
  --footnote-id-color: var(--text-muted, #8a8a8a);
  --footnote-id-color-no-occurrences: var(--text-faint, #797979);
  --footnote-radius: var(--radius-s, 5px);
  --graph-arrow: #c23917;
  --graph-attach: #b2cfe0bb;
  --graph-canvas-bg: var(--background-primary, #202020);
  --graph-circle: #55a2d6bb;
  --graph-circle-fill-highlight: var(--interactive-accent, hsl(208, 64%, 49%));
  --graph-circle-outline: transparent;
  --graph-control-bg: #00000080;
  --graph-line-fill-highlight: rgb(var(--interactive-accent-rgb));
  --graph-node: var(--text-muted, #8a8a8a);
  --graph-node-focused: var(--text-accent, hsl(208, 64%, 49%));
  --graph-node-unresolved: var(--text-faint, #797979);
  --graph-tag: #88d842bb;
  --graph-text: var(--text-normal, #c6c6c6);
  --graph-text-color: #B5B5B5;
  --graph-unresolved: #f08080de;
  --gray: var(--text-muted, var(--color-base-70, #8a8a8a));
  --gray-1: #5C6370;
  --gray-2: #abb2bf;
  --green: #abd58e;
  --green-1: #79c142;
  --grid-notebook-line-color-1: #c7c7c71f;
  --grid-notebook-line-color-2: #74747440;
  --h1-bg-color: color-mix(in srgb, var(--h1-color) 15%, transparent);
  --h1-color: var(--print-h1-color,hsl(78, 62%, 47%));
  --h1-font: var(--font-text),var(--font-default);
  --h1-size: 1.5625em;
  --h2-bg-color: color-mix(in srgb, var(--h2-color) 15%, transparent);
  --h2-color: var(--print-h2-color,hsl(118, 42%, 49%));
  --h2-font: var(--font-text),var(--font-default);
  --h2-size: 1.4375em;
  --h3-bg-color: color-mix(in srgb, var(--h3-color) 15%, transparent);
  --h3-color: var(--print-h3-color,hsl(180, 53%, 48%));
  --h3-font: var(--font-text),var(--font-default);
  --h3-size: 1.3125em;
  --h4-bg-color: color-mix(in srgb, var(--h4-color) 15%, transparent);
  --h4-color: var(--print-h4-color,hsl(216, 69%, 68%));
  --h4-font: var(--font-text),var(--font-default);
  --h4-size: 1.1875em;
  --h5-bg-color: color-mix(in srgb, var(--h5-color) 15%, transparent);
  --h5-color: var(--print-h5-color,hsl(258, 79%, 77%));
  --h5-size: 1.0625em;
  --h6-bg-color: color-mix(in srgb, var(--h6-color) 15%, transparent);
  --h6-color: var(--print-h6-color,hsl(290, 85%, 81%));
  --he-title-bar-active-action: var(--theme-color, hsl(208, 64%, 49%));
  --he-title-bar-active-bg: var(--theme-color-translucent-005, hsla(208, 64%, 49%,0.05));
  --he-title-bar-active-fg: var(--text-normal, #c6c6c6);
  --he-title-bar-active-pinned-bg: var(--theme-color-translucent-005, hsla(208, 64%, 49%,0.05));
  --he-title-bar-inactive-action: var(--text-normal, #c6c6c6);
  --he-title-bar-inactive-bg: var(--theme-color-translucent-001, hsla(208, 64%, 49%,0.01));
  --he-title-bar-inactive-fg: var(--text-muted, #8a8a8a);
  --he-title-bar-inactive-pinned-bg: var(--theme-color-translucent-001, hsla(208, 64%, 49%,0.01));
  --headerFont: var(--font-text-theme, Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei");
  --heading-formatting: var(--text-faint, #797979);
  --hibox: 24px;
  --highlight: var(--text-highlight-bg, hsla(var(--text-highlight-bg-h-dark), var(--text-highlight-bg-s-dark), var(--text-highlight-bg-l-dark), var(--text-highlight-bg-a-dark)));
  --hr-color: var(--color-base-10, #242424);
  --hr-color-1: var(--theme-color, hsl(208, 64%, 49%));
  --hr-color-2: var(--theme-color, hsl(208, 64%, 49%));
  --hr-color-3: var(--theme-color, hsl(208, 64%, 49%));
  --hr-color-4: var(--theme-color, hsl(208, 64%, 49%));
  --hr-color-icon-1: var(--theme-color, hsl(208, 64%, 49%));
  --hr-color-icon-2: var(--theme-color, hsl(208, 64%, 49%));
  --hr-color-icon-3: var(--theme-color, hsl(208, 64%, 49%));
  --hr-color-icon-4: var(--theme-color, hsl(208, 64%, 49%));
  --hr-color-numbers-bg-color: var(--theme-color-translucent-015, hsla(208, 64%, 49%,0.15));
  --hr-color-numbers-color: var(--theme-color, hsl(208, 64%, 49%));
  --hr-color-numbers-line-1: var(--theme-color, hsl(208, 64%, 49%));
  --hr-color-numbers-line-2: var(--theme-color, hsl(208, 64%, 49%));
  --hr-color-numbers-line-3: var(--theme-color, hsl(208, 64%, 49%));
  --hr-color-numbers-line-4: var(--theme-color, hsl(208, 64%, 49%));
  --hr-numbers-text-fill: transparent;
  --hr-numbers-text-stroke: var(--text-normal, #c6c6c6);
  --icon-color: var(--text-muted, #8a8a8a);
  --icon-color-active: var(--text-accent, hsl(208, 64%, 49%));
  --icon-color-focused: var(--text-normal, #c6c6c6);
  --icon-color-hover: var(--text-muted, #8a8a8a);
  --image-max-width: 100%;
  --inline-title-bg-color: color-mix(in srgb, var(--h1-color) 15%, transparent);
  --inline-title-color: var(--h1-color, hsl(78, 62%, 47%));
  --inline-title-font: var(--h1-font, Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --inline-title-size: var(--h1-size, 1.5625em);
  --input-date-separator: var(--text-faint, #797979);
  --input-placeholder-color: var(--text-faint, #797979);
  --interactive-accent: var(--color-accent, hsl(208, 64%, 49%));
  --interactive-accent-hover: var(--color-accent-2, hsl(203, 67.2%, 63.21%));
  --interactive-accent-hsl: var(--color-accent-hsl, 208, 64%, 49%);
  --interactive-accent-rgb: 45, 130, 204;
  --interactive-hover: var(--color-base-35, #373737);
  --interactive-normal: var(--color-base-30, #2b2b2b);
  --internal-link-color: var(--text-accent, hsl(208, 64%, 49%));
  --kanban-color-1: #0065d852;
  --kanban-color-2: #30e4e441;
  --kanban-color-3: #1cb54f44;
  --kanban-color-4: #97b82b49;
  --kanban-color-5: #bb722d41;
  --kanban-color-6: #d12e2e42;
  --kanban-color-7: #8f36cb3f;
  --letter-space-code: 0;
  --letter-space-main: 0;
  --light: var(--background-primary, var(--background-primary-bg-4-bt,#202020));
  --light-yellow: #cac685;
  --lightgray: var(--background-secondary, var(--background-secondary-bg-4-bt,#151515));
  --line-height-list: 2;
  --line-height-main: 1.5;
  --line-height-split: 1.3;
  --link-color: var(--text-accent, hsl(208, 64%, 49%));
  --link-color-hover: var(--text-accent-hover, hsl(203, 67.2%, 63.21%));
  --link-external-color: var(--text-accent, hsl(208, 64%, 49%));
  --link-external-color-hover: var(--text-accent-hover, hsl(203, 67.2%, 63.21%));
  --link-unresolved-color: var(--text-accent, hsl(208, 64%, 49%));
  --link-unresolved-decoration-color: var(--graph-unresolved, #f08080de);
  --list-colorful-marker: #ff8686;
  --list-marker-color: var(--text-faint, #797979);
  --list-marker-color-collapsed: var(--theme-color, hsl(208, 64%, 49%));
  --list-marker-color-hover: var(--text-muted, #8a8a8a);
  --list-ol-block-color: #2685bbb4;
  --list-ol-hover: #2c7bd6;
  --list-ol-marker-1: decimal;
  --list-ol-marker-2: lower-latin;
  --list-ol-marker-3: lower-roman;
  --list-ol-marker-4: decimal;
  --list-ol-number-color: var(--list-marker-color, #797979);
  --list-spacing-bt: 1;
  --list-ul-block-color: #e19742a9;
  --list-ul-colorful-marker-content: '\\2022';
  --list-ul-disc-color: #eb9563;
  --list-ul-hover: #e28915de;
  --list-ul-marker-1: '\\2022';
  --list-ul-marker-2: '\\25E6';
  --list-ul-marker-3: '\\25AA';
  --list-ul-marker-4: '\\25E6';
  --list-ul-marker-color: var(--list-marker-color, #797979);
  --loading-add-text-color: #d47e86;
  --loading-add-text-color-alt: #a4e39c;
  --loading-diy-text: "快乐摸鱼又一天，人生还剩多少天？";
  --loading-diy-text-color: var(--text-normal, #c6c6c6);
  --loading-page-custom-gif-caption: " ";
  --loading-page-custom-gif-caption-alt: " ";
  --loading-page-custom-gif-url: url(https://);
  --loading-text-after: "✿❀";
  --loading-text-before: "❀✿";
  --mark-highlight-strong-em: #fff7603a;
  --matrix-1: var(--p-kanban-color-2, #2ec4c452);
  --matrix-2: var(--p-kanban-color-3, #38ce2a52);
  --matrix-4: var(--p-kanban-color-5, #eb973752);
  --matrix-5: var(--p-kanban-color-6, #f3424252);
  --menu-background: var(--background-secondary, #151515);
  --menu-radius: var(--radius-m, 7px);
  --mermaid-active-task-color: #187ef1;
  --mermaid-font-family: Segoe UI, "Microsoft YaHei", "Segoe UI Emoji", "trebuchet ms", verdana, Arial, cursive;
  --mermaid-seq-dia-color: #1371be;
  --metadata-border-color: var(--background-modifier-border, #343434);
  --metadata-divider-color: var(--background-modifier-border, #343434);
  --metadata-input-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --metadata-input-text-color: var(--text-normal, #c6c6c6);
  --metadata-label-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --metadata-label-text-color: var(--text-muted, #8a8a8a);
  --metadata-label-text-color-hover: var(--text-muted, #8a8a8a);
  --mjx-inline-math-color: var(--text-normal, #c6c6c6);
  --mjx-math-color: var(--text-normal, #c6c6c6);
  --modal-background: var(--background-primary, #202020);
  --modal-radius: var(--radius-l, 15px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #797979);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #797979);
  --nav-heading-color: var(--text-normal, #c6c6c6);
  --nav-heading-color-collapsed: var(--text-faint, #797979);
  --nav-heading-color-collapsed-hover: var(--text-muted, #8a8a8a);
  --nav-heading-color-hover: var(--text-normal, #c6c6c6);
  --nav-item-color: var(--text-muted, #8a8a8a);
  --nav-item-color-active: var(--text-normal, #c6c6c6);
  --nav-item-color-highlighted: var(--text-accent, hsl(208, 64%, 49%));
  --nav-item-color-hover: var(--text-normal, #c6c6c6);
  --nav-item-color-selected: var(--text-normal, #c6c6c6);
  --nav-item-radius: var(--radius-s, 5px);
  --nav-tag-color: var(--text-faint, #797979);
  --nav-tag-color-active: var(--text-muted, #8a8a8a);
  --nav-tag-color-hover: var(--text-muted, #8a8a8a);
  --nav-tag-radius: var(--radius-s, 5px);
  --nord0: #2E3440;
  --nord1: #3B4252;
  --nord1-1: #3B425251;
  --nord10: #5e81ac;
  --nord11: #BF616A;
  --nord11-1: #BF616A4b;
  --nord12: #D08770;
  --nord13: #EBCB8B;
  --nord13-0: #e2b65e;
  --nord13-1: #ebca894b;
  --nord14: #A3BE8C;
  --nord14-0: #95b677;
  --nord15: #B48EAD;
  --nord2: #434C5E;
  --nord3: #4C566A;
  --nord3-1: #717a91;
  --nord4: #d8dee9;
  --nord4-1: #d8dee95c;
  --nord5: #E5E9F0;
  --nord5-1: #E5E9F053;
  --nord6: #ECEFF4;
  --nord6-1: #ECEFF46c;
  --nord6-2: #ECEFF43c;
  --nord7: #8fbcbb;
  --nord7-transparent: #8fbcbb2f;
  --nord8: #88C0D0;
  --nord8-0: #65afc4;
  --nord9: #81a1c1;
  --nord9-1: #81a1c16c;
  --nord9-2: #81a1c13c;
  --note-cloze: #ffffff;
  --note-important: #d64545;
  --opacity-cp: 0.25;
  --orange: #d1945b;
  --orange-1: #da904b;
  --p-kanban-bg-color: #6c6c6c42;
  --p-kanban-border-color: transparent;
  --p-kanban-card-color-1: #0000003f;
  --p-kanban-card-color-2: #41414136;
  --p-kanban-color-1: #3496e652;
  --p-kanban-color-2: #2ec4c452;
  --p-kanban-color-3: #38ce2a52;
  --p-kanban-color-4: #d2dd3852;
  --p-kanban-color-5: #eb973752;
  --p-kanban-color-6: #f3424252;
  --p-kanban-color-7: #e45bdd52;
  --p-kanban-color-8: #b962ff52;
  --p-kanban-color-shadow: #0000004d;
  --p-kanban-color-simple: #8e8e8e41;
  --page-border-bottom: var(--background-secondary-alt, #000000);
  --panel-border-color: #18191e;
  --paragraph-spacing: 1;
  --pdf-background: var(--background-primary, #202020);
  --pdf-page-background: var(--background-primary, #202020);
  --pdf-sidebar-background: var(--background-primary, #202020);
  --pill-border-color: var(--background-modifier-border, #343434);
  --pill-color: var(--text-muted, #8a8a8a);
  --pill-color-hover: var(--text-normal, #c6c6c6);
  --pill-color-remove: var(--text-faint, #797979);
  --pill-color-remove-hover: var(--text-accent, hsl(208, 64%, 49%));
  --pixel: 20px;
  --popover-height-factor: 1;
  --popover-width-factor: 1;
  --print-em-color: var(--accent-em, #a4ca8e);
  --prompt-background: var(--background-primary, #202020);
  --prompt-box-shadow: #555555;
  --purple: #c594d4;
  --radius-l: 15px;
  --radius-m: 7px;
  --radius-s: 5px;
  --radius-xs: 3px;
  --raised-background: var(--blur-background, color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent)));
  --red: #db7c84;
  --red-1: #d05a63;
  --ribbon-background: var(--background-secondary-alt, #000000);
  --ribbon-background-collapsed: var(--background-secondary-alt, #000000);
  --saturate-4-bg: 1;
  --saturate-4-bg-cp: 1;
  --scrollbar-radius: var(--radius-l, 15px);
  --search-clear-button-color: var(--text-muted, #8a8a8a);
  --search-icon-color: var(--text-muted, #8a8a8a);
  --search-result-file-matched-bg: #023774;
  --search-result-file-title-color: var(--text-normal, #c6c6c6);
  --search-text: #e0e0e0;
  --secondary: var(--text-accent, var(--color-accent, hsl(208, 64%, 49%)));
  --setting-group-heading-color: var(--text-normal, #c6c6c6);
  --setting-items-background: var(--background-primary-alt, #444444);
  --setting-items-border-color: var(--background-modifier-border, #343434);
  --setting-items-radius: var(--radius-l, 15px);
  --share-card-background-opacity-cp: 0.6;
  --share-thino-background-dark-custom: url("https://");
  --share-thino-background-light-custom: url("https://");
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #8a8a8a);
  --shiki-code-background: var(--code-background, #1111118c);
  --shiki-code-block-border-radius: var(--code-radius, 5px);
  --shiki-code-comment: var(--text-faint, #797979);
  --shiki-code-normal: var(--text-muted, #8a8a8a);
  --shiki-code-punctuation: var(--text-muted, #8a8a8a);
  --shiki-gutter-border-color: var(--background-modifier-border, #343434);
  --shiki-gutter-text-color: var(--text-faint, #797979);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #8a8a8a);
  --shiki-highlight-neutral: var(--shiki-code-normal, #8a8a8a);
  --shiki-terminal-dots-color: var(--text-faint, #797979);
  --simple-black-1: hsla(0, 0%, 13%, 1);
  --simple-black-2: hsla(220, 20%, 35%, 1);
  --simple-blue-1: hsla(209, 95%, 62%, 1);
  --simple-blue-2: hsla(209, 85%, 72%, 0.5);
  --simple-blue-3: hsla(245, 60%, 67%, 1);
  --simple-blue-4: hsla(209, 20%, 66%, 0.62);
  --simple-gray-1: hsla(0, 0%, 33%, 1);
  --simple-gray-2: hsla(210, 15%, 70%, 0.2);
  --simple-gray-3: hsla(210, 15%, 20%, 0.2);
  --simple-gray-4: hsla(210, 6%, 38%, 0.5);
  --simple-gray-5: hsla(207, 17%, 90%, 1);
  --simple-gray-6: hsla(217, 15%, 83%, 1);
  --simple-gray-7: hsla(217, 15%, 83%, 0.7);
  --simple-orange: hsla(25, 75%, 65%, 1);
  --simple-red-1: hsla(365, 90%, 62%, 1);
  --simple-red-2: hsl(365, 95%, 85%, 1);
  --simple-red-3: hsl(365, 85%, 45%, 1);
  --simple-tran: hsla(204, 45%, 97%, 0);
  --simple-white-1: hsla(204, 45%, 97%, 1);
  --simple-white-2: hsla(210, 45%, 95%, 1);
  --simple-white-3: hsla(212, 17%, 80%, 0.2);
  --simple-white-4: hsla(180, 33%, 99%, 1);
  --simple-white-5: hsla(207, 10%, 90%, 0.1);
  --simple-white-6: hsla(212, 17%, 80%, 0.3);
  --simple-yellow: hsla(60, 100%, 50%, 0.4);
  --slider-track-background: var(--background-modifier-border, #343434);
  --sliding-panes-header-color: #f1a634d0;
  --stack-tabs-background-blur-depth: 40px;
  --stag1: #f08383;
  --stag1-bg: #bd1919;
  --stag2: #e7b263;
  --stag2-bg: #ac6700;
  --stag3: #77df89;
  --stag3-bg: #058c1c;
  --status-bar-background: var(--background-secondary, #151515);
  --status-bar-bg: var(--background-secondary-alt, #000000);
  --status-bar-border-color: var(--divider-color, #000000);
  --status-bar-radius: var(--radius-m, 7px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #8a8a8a);
  --stickies-color-1: #84c584;
  --stickies-color-2: #c7a3cf;
  --stripe-notebook-stripe-color: #162419;
  --strong-em-color-1: #43d3ff;
  --strong-em-color-2: #baaaff;
  --strong-em-highlight-color: #a7b4ff;
  --suggestion-background: var(--background-primary, #202020);
  --tab-background-active: var(--background-primary, #202020);
  --tab-container-background: var(--background-secondary, #151515);
  --tab-outline-color: var(--divider-color, #151515);
  --tab-radius: var(--radius-s, 5px);
  --tab-stacked-shadow: #0e0e0e;
  --tab-switcher-background: var(--background-secondary, #151515);
  --tab-text-color: var(--text-faint, #797979);
  --tab-text-color-active: var(--text-muted, #8a8a8a);
  --tab-text-color-focused: var(--text-muted, #8a8a8a);
  --tab-text-color-focused-active: var(--text-muted, #8a8a8a);
  --tab-text-color-focused-active-current: var(--text-normal, #c6c6c6);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(208, 64%, 49%));
  --table-add-button-border-color: var(--background-modifier-border, #343434);
  --table-background-color: #2f2f2f32;
  --table-background-color-odd: #00000033;
  --table-border-color: var(--background-modifier-border, #4a4a4a);
  --table-color-calendar-2: rgb(0, 91, 144);
  --table-color-rgb: 0, 91, 144;
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(208, 64%, 49%));
  --table-drag-handle-color: var(--text-faint, #797979);
  --table-drag-handle-color-active: var(--text-on-accent, #e4e4e4);
  --table-header-border-color: var(--table-border-color, #4a4a4a);
  --table-header-color: var(--text-normal, #c6c6c6);
  --table-hover-color: #1f65a221;
  --table-hover-raw-color: #08569a21;
  --table-hover-thead-color: #21395bc7;
  --table-selection-border-color: var(--interactive-accent, hsl(208, 64%, 49%));
  --table-text-size: calc(var(--font-text-size)*0.9375);
  --table-thead-background-color: var(--theme-color-translucent-01, hsla(208, 64%, 49%,0.1));
  --tag-border-width: 1px;
  --tag-color: var(--text-accent, hsl(208, 64%, 49%));
  --tag-color-hover: var(--text-accent, hsl(208, 64%, 49%));
  --tag-dailynote: #98c8ff;
  --tag-dailynote-bg: #0f60bd;
  --tag-ideas: #fcfcc0;
  --tag-ideas-bg: #565656d8;
  --tag-questions: #d4bdff;
  --tag-questions-bg: #6640ae;
  --tag-text: #e4e4e4;
  --tag-weeklynote: #d1e6ff;
  --tag-weeklynote-bg: #3971b1;
  --tag1: #3674bb;
  --tag2: #3685ad;
  --tag3: #2a8f91;
  --tag4: #43804f;
  --tag5: #5f932e;
  --tape-color: #99999967;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(203, 67.2%, 63.21%)));
  --text-accent: var(--color-accent, hsl(208, 64%, 49%));
  --text-accent-hover: var(--color-accent-2, hsl(203, 67.2%, 63.21%));
  --text-blue: #7c94ff;
  --text-brown: #be9684;
  --text-checked-checkbox: #8e8e8e;
  --text-color-code: #d58000;
  --text-error: var(--color-red, #e16d76);
  --text-error-hover: #c9626a;
  --text-faint: var(--color-base-50, #797979);
  --text-folder-file: #b3b3b3;
  --text-folder-file-icon: var(--theme-color, hsl(208, 64%, 49%));
  --text-gray: #acacac;
  --text-green: #52c7b2;
  --text-highlight: var(--text-normal, #c6c6c6);
  --text-highlight-bg: hsla(var(--text-highlight-bg-h-dark), var(--text-highlight-bg-s-dark), var(--text-highlight-bg-l-dark), var(--text-highlight-bg-a-dark));
  --text-highlight-bg-a-dark: 0.541;
  --text-highlight-bg-a-light: 0.847;
  --text-highlight-bg-h-dark: 57;
  --text-highlight-bg-h-light: 34;
  --text-highlight-bg-l-dark: 38%;
  --text-highlight-bg-l-light: 80%;
  --text-highlight-bg-s-dark: 40%;
  --text-highlight-bg-s-light: 100%;
  --text-muted: var(--color-base-70, #8a8a8a);
  --text-muted-rgb: 138, 138, 138;
  --text-normal: var(--color-base-100, #c6c6c6);
  --text-on-accent: #e4e4e4;
  --text-orange: #ffa344;
  --text-pink: #ff6bba;
  --text-purple: #b386f1;
  --text-red: #ff4f4f;
  --text-search-highlight-bg: #bb4361;
  --text-yellow: #ffdc51;
  --text-yellow-2: #cca217;
  --textHighlight: var(--text-highlight-bg, hsla(var(--text-highlight-bg-h-dark), var(--text-highlight-bg-s-dark), var(--text-highlight-bg-l-dark), var(--text-highlight-bg-a-dark)));
  --theme-color: var(--interactive-accent, hsl(208, 64%, 49%));
  --theme-color-translucent-001: hsla(var(--interactive-accent-hsl),0.01);
  --theme-color-translucent-005: hsla(var(--interactive-accent-hsl),0.05);
  --theme-color-translucent-01: hsla(var(--interactive-accent-hsl),0.1);
  --theme-color-translucent-015: hsla(var(--interactive-accent-hsl),0.15);
  --theme-color-translucent-02: hsla(var(--interactive-accent-hsl),0.2);
  --theme-color-translucent-04: hsla(var(--interactive-accent-hsl),0.4);
  --theme-color-translucent-06: hsla(var(--interactive-accent-hsl),0.6);
  --thino-background-dark-custom: url("https://");
  --thino-background-light-custom: url("https://");
  --titleFont: var(--font-text-theme, Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei");
  --titlebar-background: var(--background-secondary, #151515);
  --titlebar-background-focused: var(--background-secondary-alt, #000000);
  --titlebar-blur-depth: 8px;
  --titlebar-border-color: var(--background-modifier-border, #343434);
  --titlebar-brightness: 1;
  --titlebar-text-color: var(--text-muted, #8a8a8a);
  --titlebar-text-color-focused: var(--text-normal, #c6c6c6);
  --unresolved-link: var(--graph-unresolved, #f08080de);
  --variable-2: #0072d0;
  --variable-3: #5a96f7;
  --vault-profile-color: var(--text-normal, #c6c6c6);
  --vault-profile-color-hover: var(--vault-profile-color, #c6c6c6);
  --white: #ffffff;
  --window-radius: 8px;
  --window-shadow: 0 1px 3px hsla(207, 10%, 10%, 0.1);
  --window-shadow2: 0 0 9px hsla(212, 17%, 0%, 0.3);
  --yellow: #d6b87f;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #151515);
  --divider-color: var(--background-primary, #000000);
  background-color: var(--background-secondary-alt, rgb(0, 0, 0));
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(21, 21, 21));
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #151515);
  background-color: var(--background-secondary-alt, rgb(0, 0, 0));
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body html {
  --background-code: #292d3e;
  --button-radius: 4px;
  --cards-width: 138px;
  --code-atom: #f78c6c;
  --code-attribute: #c792ea;
  --code-attribute-in-comment: #c792ea;
  --code-bracket: #ff5370;
  --code-builtin: #ffcb6b;
  --code-callee: #89ddff;
  --code-comment: #676e95;
  --code-def: #82aaff;
  --code-definition: #82aaff;
  --code-error-bg: #ff5370;
  --code-header: #da7dae;
  --code-hr: #98e342;
  --code-keyword: #c792ea;
  --code-link: #696d70;
  --code-matching-bracket: #ffffff;
  --code-meta: #ffcb6b;
  --code-normal: #d4d4d4;
  --code-number: #ff5370;
  --code-operator: #89ddff;
  --code-property: #c792ea;
  --code-qualifier: #decb6b;
  --code-string: #c3e88d;
  --code-string-2: #f07178;
  --code-tag: #ff5370;
  --code-tag-in-comment: #ff5370;
  --code-type: #decb6b;
  --code-variable: #f07178;
  --code-variable-2: #53ada3;
  --code-variable-3: #e7852fe7;
  --colorA: rgba(152, 0, 240, 0.13);
  --colorB: rgba(0, 72, 240, 0.13);
  --colorC: rgba(0, 240, 44, 0.13);
  --hibox: 24px;
  --simple-black-1: hsla(0, 0%, 13%, 1);
  --simple-black-2: hsla(220, 20%, 35%, 1);
  --simple-blue-1: hsla(209, 95%, 62%, 1);
  --simple-blue-2: hsla(209, 85%, 72%, 0.5);
  --simple-blue-3: hsla(245, 60%, 67%, 1);
  --simple-blue-4: hsla(209, 20%, 66%, 0.62);
  --simple-gray-1: hsla(0, 0%, 33%, 1);
  --simple-gray-2: hsla(210, 15%, 70%, 0.2);
  --simple-gray-3: hsla(210, 15%, 20%, 0.2);
  --simple-gray-4: hsla(210, 6%, 38%, 0.5);
  --simple-gray-5: hsla(207, 17%, 90%, 1);
  --simple-gray-6: hsla(217, 15%, 83%, 1);
  --simple-gray-7: hsla(217, 15%, 83%, 0.7);
  --simple-orange: hsla(25, 75%, 65%, 1);
  --simple-red-1: hsla(365, 90%, 62%, 1);
  --simple-red-2: hsl(365, 95%, 85%, 1);
  --simple-red-3: hsl(365, 85%, 45%, 1);
  --simple-tran: hsla(204, 45%, 97%, 0);
  --simple-white-1: hsla(204, 45%, 97%, 1);
  --simple-white-2: hsla(210, 45%, 95%, 1);
  --simple-white-3: hsla(212, 17%, 80%, 0.2);
  --simple-white-4: hsla(180, 33%, 99%, 1);
  --simple-white-5: hsla(207, 10%, 90%, 0.1);
  --simple-white-6: hsla(212, 17%, 80%, 0.3);
  --simple-yellow: hsla(60, 100%, 50%, 0.4);
  --window-radius: 8px;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--accent-strong, rgb(231, 231, 231));
  font-family: var(--font-family-strong, Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-weight: var(--font-weight-strong, 700);
  outline: rgb(231, 231, 231) none 0px;
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(164, 202, 142));
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(164, 202, 142) none 0px;
  text-decoration-color: rgb(164, 202, 142);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(164, 202, 142));
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(164, 202, 142) none 0px;
  text-decoration-color: rgb(164, 202, 142);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  background-color: rgb(245, 84, 84);
  color: var(--italic-color, rgb(231, 231, 231));
  font-family: var(--font-family-strong, Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-weight: 700;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--accent-strong, rgb(231, 231, 231));
  font-family: var(--font-family-strong, Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-weight: var(--font-weight-strong, 700);
  outline: rgb(231, 231, 231) none 0px;
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(136, 132, 58, 0.54));
  color: var(--text-normal, rgb(198, 198, 198));
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(198, 198, 198) none 0px;
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body del {
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(198, 198, 198) none 0px;
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body footer {
  --bar-height: calc(22px + var(--bar-vertical-padding));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(123, 123, 123);
  border-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color-0, rgba(0, 0, 0, 0));
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(138, 138, 138));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(138, 138, 138) none 0px;
  text-decoration-color: rgb(138, 138, 138);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--external-link-color, rgb(45, 130, 205));
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(45, 130, 205) none 0px;
  text-decoration-color: rgb(45, 130, 205);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--internal-link-color, rgb(45, 130, 205));
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(45, 130, 205) none 0px;
  text-decoration-color: rgb(45, 130, 205);
}

html[saved-theme="dark"] body a.internal-link.broken {
  --link-unresolved-decoration-color: var(--unresolved-link, #f08080de);
  color: var(--unresolved-link, rgba(240, 128, 128, 0.87));
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgba(240, 128, 128, 0.87) none 0px;
  text-decoration: underline rgba(240, 128, 128, 0.87);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(240, 128, 128, 0.87));
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(198, 198, 198);
  margin-bottom: 0px;
  margin-left: 30.1875px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: calc(var(--list-spacing-bt)*0.075em);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: calc(var(--list-spacing-bt)*0.075em);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(198, 198, 198);
  margin-bottom: 0px;
  margin-left: 30.1875px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: calc(var(--list-spacing-bt)*0.075em);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: calc(var(--list-spacing-bt)*0.075em);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(121, 121, 121));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(145, 145, 145, 0.11));
  color: var(--blockquote-color, rgb(198, 198, 198));
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
}

html[saved-theme="dark"] body table {
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  margin-bottom: calc(var(--p-spacing)*0.5);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: calc(var(--p-spacing)*0.5);
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgba(47, 47, 47, 0.196));
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgba(0, 0, 0, 0.2));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(198, 198, 198));
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body th {
  background-color: rgba(45, 130, 205, 0.1);
  border-bottom-color: rgb(74, 74, 74);
  border-bottom-width: 0px;
  border-left-color: rgb(74, 74, 74);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(74, 74, 74);
  border-right-width: 0px;
  border-top-color: rgb(74, 74, 74);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(198, 198, 198));
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(76, 76, 76, 0.69));
  border-bottom-color: rgb(52, 52, 52);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(52, 52, 52);
  border-left-width: 0px;
  border-right-color: rgb(52, 52, 52);
  border-right-width: 0px;
  border-top-color: rgb(52, 52, 52);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--text-color-code, rgb(213, 128, 0));
  font-family: var(--font-family-inline-code, "??", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace);
  padding-bottom: 1px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgba(17, 17, 17, 0.55));
  border-bottom-color: rgb(52, 52, 52);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(52, 52, 52);
  border-left-width: 0px;
  border-right-color: rgb(52, 52, 52);
  border-right-width: 0px;
  border-top-color: rgb(52, 52, 52);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(198, 198, 198);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #1111118c);
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(150, 194, 46);
  border-bottom-width: 0px;
  border-left-color: rgb(150, 194, 46);
  border-left-width: 0px;
  border-right-color: rgb(150, 194, 46);
  border-right-width: 0px;
  border-top-color: rgb(150, 194, 46);
  border-top-width: 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(246, 250, 254, 0.055);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(246, 250, 254, 0.055);
  border-left-style: solid;
  border-left-width: 2px;
  border-radius: 15px;
  border-right-color: rgba(246, 250, 254, 0.055);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(246, 250, 254, 0.055);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: solid;
  border-top-width: 2px;
  color: var(--text-muted, rgb(138, 138, 138));
  padding-bottom: 1.4px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 1.4px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--embed-color, rgba(246, 250, 254, 0.055));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-radius: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(198, 198, 198);
  padding-bottom: 0px;
  padding-left: 16px;
  padding-right: 8px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 198, 198);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(123, 123, 123);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(123, 123, 123);
  border-left-width: 0px;
  border-right-color: rgb(123, 123, 123);
  border-right-width: 0px;
  border-top-color: rgb(123, 123, 123);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  margin-bottom: 2px;
  margin-left: -21.6px;
  margin-right: 0px;
  margin-top: 0px;
  width: var(--checkbox-size, 14.3906px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(138, 138, 138);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(138, 138, 138);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(121, 121, 121);
  text-decoration: line-through;
  text-decoration-color: rgb(121, 121, 121);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(214, 184, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 12V2h10l9.44 9.44a2 2 0 0 1 0 2.82l-7.18 7.18a2 2 0 0 1-2.82 0L2 12Z'%3E%3C/path%3E%3Cpath d='M7 7h.01'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 12V2h10l9.44 9.44a2 2 0 0 1 0 2.82l-7.18 7.18a2 2 0 0 1-2.82 0L2 12Z'%3E%3C/path%3E%3Cpath d='M7 7h.01'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M16.5 8c0 1.5-.5 3.5-2.9 4.3.7-1.7.8-3.4.3-5-.7-2.1-3-3.7-4.6-4.6-.4-.3-1.1.1-1 .7 0 1.1-.3 2.7-2 4.4C4.1 10 3 12.3 3 14.5 3 17.4 5 21 9 21c-4-4-1-7.5-1-7.5.8 5.9 5 7.5 7 7.5 1.7 0 5-1.2 5-6.4 0-3.1-1.3-5.5-2.4-6.9-.3-.5-1-.2-1.1.3'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M16.5 8c0 1.5-.5 3.5-2.9 4.3.7-1.7.8-3.4.3-5-.7-2.1-3-3.7-4.6-4.6-.4-.3-1.1.1-1 .7 0 1.1-.3 2.7-2 4.4C4.1 10 3 12.3 3 14.5 3 17.4 5 21 9 21c-4-4-1-7.5-1-7.5.8 5.9 5 7.5 7 7.5 1.7 0 5-1.2 5-6.4 0-3.1-1.3-5.5-2.4-6.9-.3-.5-1-.2-1.1.3'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='white' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='white' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='9' y1='18' x2='15' y2='18'%3E%3C/line%3E%3Cline x1='10' y1='22' x2='14' y2='22'%3E%3C/line%3E%3Cpath d='M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='9' y1='18' x2='15' y2='18'%3E%3C/line%3E%3Cline x1='10' y1='22' x2='14' y2='22'%3E%3C/line%3E%3Cpath d='M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: rotate(45deg)msFilter:'%3E%3Cpath d='M7 17a5.007 5.007 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: rotate(45deg)msFilter:'%3E%3Cpath d='M7 17a5.007 5.007 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
  color: rgb(219, 124, 132);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 2 6 6L8 22l-6-6L16 2'%3E%3C/path%3E%3Cpath d='m7.5 10.5 2 2'%3E%3C/path%3E%3Cpath d='m10.5 7.5 2 2'%3E%3C/path%3E%3Cpath d='m13.5 4.5 2 2'%3E%3C/path%3E%3Cpath d='m4.5 13.5 2 2'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 2 6 6L8 22l-6-6L16 2'%3E%3C/path%3E%3Cpath d='m7.5 10.5 2 2'%3E%3C/path%3E%3Cpath d='m10.5 7.5 2 2'%3E%3C/path%3E%3Cpath d='m13.5 4.5 2 2'%3E%3C/path%3E%3Cpath d='m4.5 13.5 2 2'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M15 11.586V6h2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2h2v5.586l-2.707 1.707A.996.996 0 0 0 6 14v2a1 1 0 0 0 1 1h4v3l1 2 1-2v-3h4a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L15 11.586z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M15 11.586V6h2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2h2v5.586l-2.707 1.707A.996.996 0 0 0 6 14v2a1 1 0 0 0 1 1h4v3l1 2 1-2v-3h4a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L15 11.586z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 16 3-8 3.001 8A5.002 5.002 0 0 1 16 16z'%3E%3C/path%3E%3Cpath d='m2 16 3-8 3.001 8A5.002 5.002 0 0 1 2 16z'%3E%3C/path%3E%3Cpath d='M7 21h10'%3E%3C/path%3E%3Cpath d='M12 3v18'%3E%3C/path%3E%3Cpath d='M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 16 3-8 3.001 8A5.002 5.002 0 0 1 16 16z'%3E%3C/path%3E%3Cpath d='m2 16 3-8 3.001 8A5.002 5.002 0 0 1 2 16z'%3E%3C/path%3E%3Cpath d='M7 21h10'%3E%3C/path%3E%3Cpath d='M12 3v18'%3E%3C/path%3E%3Cpath d='M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.8 6.91 4.82 7A6 6 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09A6 6 0 0 0 17.18 15c3-.1 4.82-2.7 4.82-7V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.22 12.08 4 9.3 4 8zm14 4.83V6h2v2c0 1.3-.22 4.08-2 4.83z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.8 6.91 4.82 7A6 6 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09A6 6 0 0 0 17.18 15c3-.1 4.82-2.7 4.82-7V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.22 12.08 4 9.3 4 8zm14 4.83V6h2v2c0 1.3-.22 4.08-2 4.83z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(198, 198, 198);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(83, 223, 221, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(198, 198, 198);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(251, 70, 76, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(198, 198, 198);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="cloze"] {
  --accent-l-alt: 51.45%;
  --activeline-background: hsla(208, 64%, 49%,0.05);
  --background-asymm-split-left: #000000;
  --background-modifier-active-hover: hsla(208, 64%, 49%, 0.1);
  --background-modifier-border: #343434;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #9b4343;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 155, 67, 67;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #539126;
  --background-modifier-success-rgb: 83, 145, 38;
  --background-popover: #242424;
  --background-primary: #202020;
  --background-primary-alt: #444444;
  --background-secondary: #151515;
  --background-secondary-alt: #000000;
  --background-titlebar-inner: hsla(208, 64%, 49%, 10%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(208, 64%, 49%);
  --blur-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --bt-bubble-border-color: #343434;
  --bt-indentation-gradient-color-1: hsl(208, 64%, 49%);
  --button-corner-shape: round;
  --button-radius: 5px;
  --calendar-active-color: hsla(208, 64%, 49%,0.4);
  --calendar-hover-color: hsla(208, 64%, 49%,0.2);
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 5px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #202020;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #363636;
  --caret-color: #c6c6c6;
  --checkbox-border-color: #797979;
  --checkbox-border-color-hover: #8a8a8a;
  --checkbox-color: hsl(208, 64%, 49%);
  --checkbox-color-hover: hsl(203, 67.2%, 63.21%);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-done-color: #8a8a8a;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #e7e7e7;
  --cloze-decoration-color-2: hsl(208, 64%, 49%);
  --cloze-decoration-color-3: hsl(208, 64%, 49%);
  --code-active-line-background-color: #111111eb;
  --code-atom: #da904b;
  --code-attribute: #cac685;
  --code-background: #1111118c;
  --code-border-color: #343434;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #568060;
  --code-function: #cac685;
  --code-hr: #abb2bf;
  --code-important: #478fee;
  --code-keyword: #478fee;
  --code-language: #8a8a8a;
  --code-normal: #ebdbb2;
  --code-operator: #a89984;
  --code-property: #a0c7e9;
  --code-punctuation: #abb2bf;
  --code-qualifier: #35bed0;
  --code-radius: 5px;
  --code-selection-background: #3b767160;
  --code-selection-color: #ebdbb2;
  --code-size: 0.875em;
  --code-string: #abd58e;
  --code-string-2: #d6b87f;
  --code-tag: #db7c84;
  --code-type: #cac685;
  --code-value: #abd58e;
  --code-variable: #db7c84;
  --collapse-icon-color: #797979;
  --collapse-icon-color-collapsed: hsl(208, 64%, 49%);
  --color-accent: hsl(208, 64%, 49%);
  --color-accent-1: hsl(205, 65.28%, 56.35%);
  --color-accent-2: hsl(203, 67.2%, 63.21%);
  --color-accent-hsl: 208, 64%, 49%;
  --color-highlight-1: #c6c6c6;
  --color-highlight-2: #c6c6c6;
  --color-highlight-3: #c6c6c6;
  --custom-titlebar-bg: #000000;
  --divider-color: #000000;
  --divider-color-hover: hsl(208, 64%, 49%);
  --divider-vertical-height: 100%;
  --dropdown-background: #2b2b2b;
  --dropdown-background-hover: #373737;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: hsl(208, 64%, 49%);
  --flair-background: #2b2b2b;
  --flair-color: #c6c6c6;
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
  --font-size-outline: 13px;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-canvas-bg: #202020;
  --graph-circle-fill-highlight: hsl(208, 64%, 49%);
  --graph-line: #8c8c8c;
  --graph-line-fill-highlight: rgb(45, 130, 204);
  --graph-node: #8a8a8a;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(208, 64%, 49%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #797979;
  --graph-text: #c6c6c6;
  --h1-bg-color: color-mix(in srgb, hsl(78, 62%, 47%) 15%, transparent);
  --h1-color: hsl(78, 62%, 47%);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-bg-color: color-mix(in srgb, hsl(118, 42%, 49%) 15%, transparent);
  --h2-color: hsl(118, 42%, 49%);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-bg-color: color-mix(in srgb, hsl(180, 53%, 48%) 15%, transparent);
  --h3-color: hsl(180, 53%, 48%);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-bg-color: color-mix(in srgb, hsl(216, 69%, 68%) 15%, transparent);
  --h4-color: hsl(216, 69%, 68%);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-bg-color: color-mix(in srgb, hsl(258, 79%, 77%) 15%, transparent);
  --h5-color: hsl(258, 79%, 77%);
  --h5-line-height: 1.5;
  --h6-bg-color: color-mix(in srgb, hsl(290, 85%, 81%) 15%, transparent);
  --h6-color: hsl(290, 85%, 81%);
  --h6-line-height: 1.5;
  --he-title-bar-active-action: hsl(208, 64%, 49%);
  --he-title-bar-active-bg: hsla(208, 64%, 49%,0.05);
  --he-title-bar-active-fg: #c6c6c6;
  --he-title-bar-active-pinned-bg: hsla(208, 64%, 49%,0.05);
  --he-title-bar-inactive-action: #c6c6c6;
  --he-title-bar-inactive-bg: hsla(208, 64%, 49%,0.01);
  --he-title-bar-inactive-fg: #8a8a8a;
  --he-title-bar-inactive-pinned-bg: hsla(208, 64%, 49%,0.01);
  --heading-formatting: #797979;
  --heading-spacing: 2.5rem;
  --hr-color: #242424;
  --hr-color-1: hsl(208, 64%, 49%);
  --hr-color-2: hsl(208, 64%, 49%);
  --hr-color-3: hsl(208, 64%, 49%);
  --hr-color-4: hsl(208, 64%, 49%);
  --hr-color-icon-1: hsl(208, 64%, 49%);
  --hr-color-icon-2: hsl(208, 64%, 49%);
  --hr-color-icon-3: hsl(208, 64%, 49%);
  --hr-color-icon-4: hsl(208, 64%, 49%);
  --hr-color-numbers-bg-color: hsla(208, 64%, 49%,0.15);
  --hr-color-numbers-color: hsl(208, 64%, 49%);
  --hr-color-numbers-line-1: hsl(208, 64%, 49%);
  --hr-color-numbers-line-2: hsl(208, 64%, 49%);
  --hr-color-numbers-line-3: hsl(208, 64%, 49%);
  --hr-color-numbers-line-4: hsl(208, 64%, 49%);
  --hr-numbers-text-stroke: #c6c6c6;
  --interactive-accent: hsl(208, 64%, 49%);
  --interactive-accent-hover: hsl(203, 67.2%, 63.21%);
  --interactive-accent-hsl: 208, 64%, 49%;
  --interactive-hover: #373737;
  --interactive-normal: #2b2b2b;
  --internal-link-color: hsl(208, 64%, 49%);
  --link-color: hsl(208, 64%, 49%);
  --link-color-hover: hsl(203, 67.2%, 63.21%);
  --link-external-color: hsl(208, 64%, 49%);
  --link-external-color-hover: hsl(203, 67.2%, 63.21%);
  --link-unresolved-color: hsl(208, 64%, 49%);
  --link-unresolved-decoration-color: #f08080de;
  --link-weight: 400;
  --list-indent: 2.25em;
  --list-ol-number-color: #797979;
  --list-ul-marker-color: #797979;
  --loading-diy-text-color: #c6c6c6;
  --matrix-1: #2ec4c452;
  --matrix-2: #38ce2a52;
  --matrix-4: #eb973752;
  --matrix-5: #f3424252;
  --menu-background: #151515;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --mjx-inline-math-color: #c6c6c6;
  --mjx-math-color: #c6c6c6;
  --page-border-bottom: #000000;
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #343434;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #343434;
  --popover-font-size: 16px;
  --print-em-color: #a4ca8e;
  --raised-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #4d4d4d88;
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #3f3f3f7e;
  --search-clear-button-color: #8a8a8a;
  --search-icon-color: #8a8a8a;
  --search-result-file-title-color: #c6c6c6;
  --setting-group-heading-color: #c6c6c6;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #444444;
  --setting-items-border-color: #343434;
  --setting-items-padding: 20px;
  --setting-items-radius: 15px;
  --shiki-active-tab-border-color: #8a8a8a;
  --shiki-code-background: #1111118c;
  --shiki-code-block-border-radius: 5px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #797979;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #8a8a8a;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #8a8a8a;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #343434;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #797979;
  --shiki-gutter-text-color-highlight: #8a8a8a;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #8a8a8a;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #797979;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #202020;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #202020;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #151515;
  --tab-radius: 5px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #151515;
  --tab-switcher-menubar-background: linear-gradient(to top, #151515, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(208, 64%, 49%);
  --tab-text-color: #797979;
  --tab-text-color-active: #8a8a8a;
  --tab-text-color-focused: #8a8a8a;
  --tab-text-color-focused-active: #8a8a8a;
  --tab-text-color-focused-active-current: #c6c6c6;
  --tab-text-color-focused-highlighted: hsl(208, 64%, 49%);
  --table-add-button-border-color: #343434;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(208, 64%, 49%);
  --table-drag-handle-color: #797979;
  --table-drag-handle-color-active: #e4e4e4;
  --table-header-background: transparent;
  --table-header-border-color: #4a4a4a;
  --table-header-border-width: 1px;
  --table-header-color: #c6c6c6;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(208, 64%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(208, 64%, 49%);
  --table-text-size: 15px;
  --table-thead-background-color: hsla(208, 64%, 49%,0.1);
  --tag-background: hsla(208, 64%, 49%, 0.1);
  --tag-background-hover: hsla(208, 64%, 49%, 0.2);
  --tag-border-color: hsla(208, 64%, 49%, 0.15);
  --tag-border-color-hover: hsla(208, 64%, 49%, 0.15);
  --tag-color: hsl(208, 64%, 49%);
  --tag-color-hover: hsl(208, 64%, 49%);
  --tag-size: 0.875em;
  --text-accent: hsl(208, 64%, 49%);
  --text-accent-hover: hsl(203, 67.2%, 63.21%);
  --text-error: #e16d76;
  --text-faint: #797979;
  --text-folder-file-icon: hsl(208, 64%, 49%);
  --text-highlight: #c6c6c6;
  --text-highlight-bg: hsla(57, 40%, 38%, 0.541);
  --text-muted: #8a8a8a;
  --text-normal: #c6c6c6;
  --text-selection: #3b767160;
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --theme-color: hsl(208, 64%, 49%);
  --theme-color-translucent-001: hsla(208, 64%, 49%,0.01);
  --theme-color-translucent-005: hsla(208, 64%, 49%,0.05);
  --theme-color-translucent-01: hsla(208, 64%, 49%,0.1);
  --theme-color-translucent-015: hsla(208, 64%, 49%,0.15);
  --theme-color-translucent-02: hsla(208, 64%, 49%,0.2);
  --theme-color-translucent-04: hsla(208, 64%, 49%,0.4);
  --theme-color-translucent-06: hsla(208, 64%, 49%,0.6);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link: #f08080de;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.15);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 198, 198);
  filter: blur(4px);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(251, 70, 76, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(198, 198, 198);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(168, 130, 255, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(198, 198, 198);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(251, 70, 76, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(198, 198, 198);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="icon"] {
  --accent-l-alt: 51.45%;
  --activeline-background: hsla(208, 64%, 49%,0.05);
  --background-asymm-split-left: #000000;
  --background-modifier-active-hover: hsla(208, 64%, 49%, 0.1);
  --background-modifier-border: #343434;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #9b4343;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 155, 67, 67;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #539126;
  --background-modifier-success-rgb: 83, 145, 38;
  --background-popover: #242424;
  --background-primary: #202020;
  --background-primary-alt: #444444;
  --background-secondary: #151515;
  --background-secondary-alt: #000000;
  --background-titlebar-inner: hsla(208, 64%, 49%, 10%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(208, 64%, 49%);
  --blur-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --bt-bubble-border-color: #343434;
  --bt-indentation-gradient-color-1: hsl(208, 64%, 49%);
  --button-corner-shape: round;
  --button-radius: 5px;
  --calendar-active-color: hsla(208, 64%, 49%,0.4);
  --calendar-hover-color: hsla(208, 64%, 49%,0.2);
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 5px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #202020;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #363636;
  --caret-color: #c6c6c6;
  --checkbox-border-color: #797979;
  --checkbox-border-color-hover: #8a8a8a;
  --checkbox-color: hsl(208, 64%, 49%);
  --checkbox-color-hover: hsl(203, 67.2%, 63.21%);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-done-color: #8a8a8a;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #e7e7e7;
  --cloze-decoration-color-2: hsl(208, 64%, 49%);
  --cloze-decoration-color-3: hsl(208, 64%, 49%);
  --code-active-line-background-color: #111111eb;
  --code-atom: #da904b;
  --code-attribute: #cac685;
  --code-background: #1111118c;
  --code-border-color: #343434;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #568060;
  --code-function: #cac685;
  --code-hr: #abb2bf;
  --code-important: #478fee;
  --code-keyword: #478fee;
  --code-language: #8a8a8a;
  --code-normal: #ebdbb2;
  --code-operator: #a89984;
  --code-property: #a0c7e9;
  --code-punctuation: #abb2bf;
  --code-qualifier: #35bed0;
  --code-radius: 5px;
  --code-selection-background: #3b767160;
  --code-selection-color: #ebdbb2;
  --code-size: 0.875em;
  --code-string: #abd58e;
  --code-string-2: #d6b87f;
  --code-tag: #db7c84;
  --code-type: #cac685;
  --code-value: #abd58e;
  --code-variable: #db7c84;
  --collapse-icon-color: #797979;
  --collapse-icon-color-collapsed: hsl(208, 64%, 49%);
  --color-accent: hsl(208, 64%, 49%);
  --color-accent-1: hsl(205, 65.28%, 56.35%);
  --color-accent-2: hsl(203, 67.2%, 63.21%);
  --color-accent-hsl: 208, 64%, 49%;
  --color-highlight-1: #c6c6c6;
  --color-highlight-2: #c6c6c6;
  --color-highlight-3: #c6c6c6;
  --custom-titlebar-bg: #000000;
  --divider-color: #000000;
  --divider-color-hover: hsl(208, 64%, 49%);
  --divider-vertical-height: 100%;
  --dropdown-background: #2b2b2b;
  --dropdown-background-hover: #373737;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: hsl(208, 64%, 49%);
  --flair-background: #2b2b2b;
  --flair-color: #c6c6c6;
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
  --font-size-outline: 13px;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-canvas-bg: #202020;
  --graph-circle-fill-highlight: hsl(208, 64%, 49%);
  --graph-line: #8c8c8c;
  --graph-line-fill-highlight: rgb(45, 130, 204);
  --graph-node: #8a8a8a;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(208, 64%, 49%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #797979;
  --graph-text: #c6c6c6;
  --h1-bg-color: color-mix(in srgb, hsl(78, 62%, 47%) 15%, transparent);
  --h1-color: hsl(78, 62%, 47%);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-bg-color: color-mix(in srgb, hsl(118, 42%, 49%) 15%, transparent);
  --h2-color: hsl(118, 42%, 49%);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-bg-color: color-mix(in srgb, hsl(180, 53%, 48%) 15%, transparent);
  --h3-color: hsl(180, 53%, 48%);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-bg-color: color-mix(in srgb, hsl(216, 69%, 68%) 15%, transparent);
  --h4-color: hsl(216, 69%, 68%);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-bg-color: color-mix(in srgb, hsl(258, 79%, 77%) 15%, transparent);
  --h5-color: hsl(258, 79%, 77%);
  --h5-line-height: 1.5;
  --h6-bg-color: color-mix(in srgb, hsl(290, 85%, 81%) 15%, transparent);
  --h6-color: hsl(290, 85%, 81%);
  --h6-line-height: 1.5;
  --he-title-bar-active-action: hsl(208, 64%, 49%);
  --he-title-bar-active-bg: hsla(208, 64%, 49%,0.05);
  --he-title-bar-active-fg: #c6c6c6;
  --he-title-bar-active-pinned-bg: hsla(208, 64%, 49%,0.05);
  --he-title-bar-inactive-action: #c6c6c6;
  --he-title-bar-inactive-bg: hsla(208, 64%, 49%,0.01);
  --he-title-bar-inactive-fg: #8a8a8a;
  --he-title-bar-inactive-pinned-bg: hsla(208, 64%, 49%,0.01);
  --heading-formatting: #797979;
  --heading-spacing: 2.5rem;
  --hr-color: #242424;
  --hr-color-1: hsl(208, 64%, 49%);
  --hr-color-2: hsl(208, 64%, 49%);
  --hr-color-3: hsl(208, 64%, 49%);
  --hr-color-4: hsl(208, 64%, 49%);
  --hr-color-icon-1: hsl(208, 64%, 49%);
  --hr-color-icon-2: hsl(208, 64%, 49%);
  --hr-color-icon-3: hsl(208, 64%, 49%);
  --hr-color-icon-4: hsl(208, 64%, 49%);
  --hr-color-numbers-bg-color: hsla(208, 64%, 49%,0.15);
  --hr-color-numbers-color: hsl(208, 64%, 49%);
  --hr-color-numbers-line-1: hsl(208, 64%, 49%);
  --hr-color-numbers-line-2: hsl(208, 64%, 49%);
  --hr-color-numbers-line-3: hsl(208, 64%, 49%);
  --hr-color-numbers-line-4: hsl(208, 64%, 49%);
  --hr-numbers-text-stroke: #c6c6c6;
  --interactive-accent: hsl(208, 64%, 49%);
  --interactive-accent-hover: hsl(203, 67.2%, 63.21%);
  --interactive-accent-hsl: 208, 64%, 49%;
  --interactive-hover: #373737;
  --interactive-normal: #2b2b2b;
  --internal-link-color: hsl(208, 64%, 49%);
  --link-color: hsl(208, 64%, 49%);
  --link-color-hover: hsl(203, 67.2%, 63.21%);
  --link-external-color: hsl(208, 64%, 49%);
  --link-external-color-hover: hsl(203, 67.2%, 63.21%);
  --link-unresolved-color: hsl(208, 64%, 49%);
  --link-unresolved-decoration-color: #f08080de;
  --link-weight: 400;
  --list-indent: 2.25em;
  --list-ol-number-color: #797979;
  --list-ul-marker-color: #797979;
  --loading-diy-text-color: #c6c6c6;
  --matrix-1: #2ec4c452;
  --matrix-2: #38ce2a52;
  --matrix-4: #eb973752;
  --matrix-5: #f3424252;
  --menu-background: #151515;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --mjx-inline-math-color: #c6c6c6;
  --mjx-math-color: #c6c6c6;
  --page-border-bottom: #000000;
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #343434;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #343434;
  --popover-font-size: 16px;
  --print-em-color: #a4ca8e;
  --raised-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #4d4d4d88;
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #3f3f3f7e;
  --search-clear-button-color: #8a8a8a;
  --search-icon-color: #8a8a8a;
  --search-result-file-title-color: #c6c6c6;
  --setting-group-heading-color: #c6c6c6;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #444444;
  --setting-items-border-color: #343434;
  --setting-items-padding: 20px;
  --setting-items-radius: 15px;
  --shiki-active-tab-border-color: #8a8a8a;
  --shiki-code-background: #1111118c;
  --shiki-code-block-border-radius: 5px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #797979;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #8a8a8a;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #8a8a8a;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #343434;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #797979;
  --shiki-gutter-text-color-highlight: #8a8a8a;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #8a8a8a;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #797979;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #202020;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #202020;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #151515;
  --tab-radius: 5px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #151515;
  --tab-switcher-menubar-background: linear-gradient(to top, #151515, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(208, 64%, 49%);
  --tab-text-color: #797979;
  --tab-text-color-active: #8a8a8a;
  --tab-text-color-focused: #8a8a8a;
  --tab-text-color-focused-active: #8a8a8a;
  --tab-text-color-focused-active-current: #c6c6c6;
  --tab-text-color-focused-highlighted: hsl(208, 64%, 49%);
  --table-add-button-border-color: #343434;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(208, 64%, 49%);
  --table-drag-handle-color: #797979;
  --table-drag-handle-color-active: #e4e4e4;
  --table-header-background: transparent;
  --table-header-border-color: #4a4a4a;
  --table-header-border-width: 1px;
  --table-header-color: #c6c6c6;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(208, 64%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(208, 64%, 49%);
  --table-text-size: 15px;
  --table-thead-background-color: hsla(208, 64%, 49%,0.1);
  --tag-background: hsla(208, 64%, 49%, 0.1);
  --tag-background-hover: hsla(208, 64%, 49%, 0.2);
  --tag-border-color: hsla(208, 64%, 49%, 0.15);
  --tag-border-color-hover: hsla(208, 64%, 49%, 0.15);
  --tag-color: hsl(208, 64%, 49%);
  --tag-color-hover: hsl(208, 64%, 49%);
  --tag-size: 0.875em;
  --text-accent: hsl(208, 64%, 49%);
  --text-accent-hover: hsl(203, 67.2%, 63.21%);
  --text-error: #e16d76;
  --text-faint: #797979;
  --text-folder-file-icon: hsl(208, 64%, 49%);
  --text-highlight: #c6c6c6;
  --text-highlight-bg: hsla(57, 40%, 38%, 0.541);
  --text-muted: #8a8a8a;
  --text-normal: #c6c6c6;
  --text-selection: #3b767160;
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --theme-color: hsl(208, 64%, 49%);
  --theme-color-translucent-001: hsla(208, 64%, 49%,0.01);
  --theme-color-translucent-005: hsla(208, 64%, 49%,0.05);
  --theme-color-translucent-01: hsla(208, 64%, 49%,0.1);
  --theme-color-translucent-015: hsla(208, 64%, 49%,0.15);
  --theme-color-translucent-02: hsla(208, 64%, 49%,0.2);
  --theme-color-translucent-04: hsla(208, 64%, 49%,0.4);
  --theme-color-translucent-06: hsla(208, 64%, 49%,0.6);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link: #f08080de;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: -112px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(2, 122, 255, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(198, 198, 198);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="kanban"] {
  --accent-l-alt: 51.45%;
  --activeline-background: hsla(208, 64%, 49%,0.05);
  --background-asymm-split-left: #000000;
  --background-modifier-active-hover: hsla(208, 64%, 49%, 0.1);
  --background-modifier-border: #343434;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #9b4343;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 155, 67, 67;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #539126;
  --background-modifier-success-rgb: 83, 145, 38;
  --background-popover: #242424;
  --background-primary: #202020;
  --background-primary-alt: #444444;
  --background-secondary: #151515;
  --background-secondary-alt: #000000;
  --background-titlebar-inner: hsla(208, 64%, 49%, 10%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(208, 64%, 49%);
  --blur-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --bt-bubble-border-color: #343434;
  --bt-indentation-gradient-color-1: hsl(208, 64%, 49%);
  --button-corner-shape: round;
  --button-radius: 5px;
  --calendar-active-color: hsla(208, 64%, 49%,0.4);
  --calendar-hover-color: hsla(208, 64%, 49%,0.2);
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 5px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #202020;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #363636;
  --caret-color: #c6c6c6;
  --checkbox-border-color: #797979;
  --checkbox-border-color-hover: #8a8a8a;
  --checkbox-color: hsl(208, 64%, 49%);
  --checkbox-color-hover: hsl(203, 67.2%, 63.21%);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-done-color: #8a8a8a;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #e7e7e7;
  --cloze-decoration-color-2: hsl(208, 64%, 49%);
  --cloze-decoration-color-3: hsl(208, 64%, 49%);
  --code-active-line-background-color: #111111eb;
  --code-atom: #da904b;
  --code-attribute: #cac685;
  --code-background: #1111118c;
  --code-border-color: #343434;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #568060;
  --code-function: #cac685;
  --code-hr: #abb2bf;
  --code-important: #478fee;
  --code-keyword: #478fee;
  --code-language: #8a8a8a;
  --code-normal: #ebdbb2;
  --code-operator: #a89984;
  --code-property: #a0c7e9;
  --code-punctuation: #abb2bf;
  --code-qualifier: #35bed0;
  --code-radius: 5px;
  --code-selection-background: #3b767160;
  --code-selection-color: #ebdbb2;
  --code-size: 0.875em;
  --code-string: #abd58e;
  --code-string-2: #d6b87f;
  --code-tag: #db7c84;
  --code-type: #cac685;
  --code-value: #abd58e;
  --code-variable: #db7c84;
  --collapse-icon-color: #797979;
  --collapse-icon-color-collapsed: hsl(208, 64%, 49%);
  --color-accent: hsl(208, 64%, 49%);
  --color-accent-1: hsl(205, 65.28%, 56.35%);
  --color-accent-2: hsl(203, 67.2%, 63.21%);
  --color-accent-hsl: 208, 64%, 49%;
  --color-highlight-1: #c6c6c6;
  --color-highlight-2: #c6c6c6;
  --color-highlight-3: #c6c6c6;
  --custom-titlebar-bg: #000000;
  --divider-color: #000000;
  --divider-color-hover: hsl(208, 64%, 49%);
  --divider-vertical-height: 100%;
  --dropdown-background: #2b2b2b;
  --dropdown-background-hover: #373737;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: hsl(208, 64%, 49%);
  --flair-background: #2b2b2b;
  --flair-color: #c6c6c6;
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
  --font-size-outline: 13px;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-canvas-bg: #202020;
  --graph-circle-fill-highlight: hsl(208, 64%, 49%);
  --graph-line: #8c8c8c;
  --graph-line-fill-highlight: rgb(45, 130, 204);
  --graph-node: #8a8a8a;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(208, 64%, 49%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #797979;
  --graph-text: #c6c6c6;
  --h1-bg-color: color-mix(in srgb, hsl(78, 62%, 47%) 15%, transparent);
  --h1-color: hsl(78, 62%, 47%);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-bg-color: color-mix(in srgb, hsl(118, 42%, 49%) 15%, transparent);
  --h2-color: hsl(118, 42%, 49%);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-bg-color: color-mix(in srgb, hsl(180, 53%, 48%) 15%, transparent);
  --h3-color: hsl(180, 53%, 48%);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-bg-color: color-mix(in srgb, hsl(216, 69%, 68%) 15%, transparent);
  --h4-color: hsl(216, 69%, 68%);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-bg-color: color-mix(in srgb, hsl(258, 79%, 77%) 15%, transparent);
  --h5-color: hsl(258, 79%, 77%);
  --h5-line-height: 1.5;
  --h6-bg-color: color-mix(in srgb, hsl(290, 85%, 81%) 15%, transparent);
  --h6-color: hsl(290, 85%, 81%);
  --h6-line-height: 1.5;
  --he-title-bar-active-action: hsl(208, 64%, 49%);
  --he-title-bar-active-bg: hsla(208, 64%, 49%,0.05);
  --he-title-bar-active-fg: #c6c6c6;
  --he-title-bar-active-pinned-bg: hsla(208, 64%, 49%,0.05);
  --he-title-bar-inactive-action: #c6c6c6;
  --he-title-bar-inactive-bg: hsla(208, 64%, 49%,0.01);
  --he-title-bar-inactive-fg: #8a8a8a;
  --he-title-bar-inactive-pinned-bg: hsla(208, 64%, 49%,0.01);
  --heading-formatting: #797979;
  --heading-spacing: 2.5rem;
  --hr-color: #242424;
  --hr-color-1: hsl(208, 64%, 49%);
  --hr-color-2: hsl(208, 64%, 49%);
  --hr-color-3: hsl(208, 64%, 49%);
  --hr-color-4: hsl(208, 64%, 49%);
  --hr-color-icon-1: hsl(208, 64%, 49%);
  --hr-color-icon-2: hsl(208, 64%, 49%);
  --hr-color-icon-3: hsl(208, 64%, 49%);
  --hr-color-icon-4: hsl(208, 64%, 49%);
  --hr-color-numbers-bg-color: hsla(208, 64%, 49%,0.15);
  --hr-color-numbers-color: hsl(208, 64%, 49%);
  --hr-color-numbers-line-1: hsl(208, 64%, 49%);
  --hr-color-numbers-line-2: hsl(208, 64%, 49%);
  --hr-color-numbers-line-3: hsl(208, 64%, 49%);
  --hr-color-numbers-line-4: hsl(208, 64%, 49%);
  --hr-numbers-text-stroke: #c6c6c6;
  --interactive-accent: hsl(208, 64%, 49%);
  --interactive-accent-hover: hsl(203, 67.2%, 63.21%);
  --interactive-accent-hsl: 208, 64%, 49%;
  --interactive-hover: #373737;
  --interactive-normal: #2b2b2b;
  --internal-link-color: hsl(208, 64%, 49%);
  --link-color: hsl(208, 64%, 49%);
  --link-color-hover: hsl(203, 67.2%, 63.21%);
  --link-external-color: hsl(208, 64%, 49%);
  --link-external-color-hover: hsl(203, 67.2%, 63.21%);
  --link-unresolved-color: hsl(208, 64%, 49%);
  --link-unresolved-decoration-color: #f08080de;
  --link-weight: 400;
  --list-indent: 2.25em;
  --list-ol-number-color: #797979;
  --list-ul-marker-color: #797979;
  --loading-diy-text-color: #c6c6c6;
  --matrix-1: #2ec4c452;
  --matrix-2: #38ce2a52;
  --matrix-4: #eb973752;
  --matrix-5: #f3424252;
  --menu-background: #151515;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --mjx-inline-math-color: #c6c6c6;
  --mjx-math-color: #c6c6c6;
  --page-border-bottom: #000000;
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #343434;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #343434;
  --popover-font-size: 16px;
  --print-em-color: #a4ca8e;
  --raised-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #4d4d4d88;
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #3f3f3f7e;
  --search-clear-button-color: #8a8a8a;
  --search-icon-color: #8a8a8a;
  --search-result-file-title-color: #c6c6c6;
  --setting-group-heading-color: #c6c6c6;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #444444;
  --setting-items-border-color: #343434;
  --setting-items-padding: 20px;
  --setting-items-radius: 15px;
  --shiki-active-tab-border-color: #8a8a8a;
  --shiki-code-background: #1111118c;
  --shiki-code-block-border-radius: 5px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #797979;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #8a8a8a;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #8a8a8a;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #343434;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #797979;
  --shiki-gutter-text-color-highlight: #8a8a8a;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #8a8a8a;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #797979;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #202020;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #202020;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #151515;
  --tab-radius: 5px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #151515;
  --tab-switcher-menubar-background: linear-gradient(to top, #151515, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(208, 64%, 49%);
  --tab-text-color: #797979;
  --tab-text-color-active: #8a8a8a;
  --tab-text-color-focused: #8a8a8a;
  --tab-text-color-focused-active: #8a8a8a;
  --tab-text-color-focused-active-current: #c6c6c6;
  --tab-text-color-focused-highlighted: hsl(208, 64%, 49%);
  --table-add-button-border-color: #343434;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(208, 64%, 49%);
  --table-drag-handle-color: #797979;
  --table-drag-handle-color-active: #e4e4e4;
  --table-header-background: transparent;
  --table-header-border-color: #4a4a4a;
  --table-header-border-width: 1px;
  --table-header-color: #c6c6c6;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(208, 64%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(208, 64%, 49%);
  --table-text-size: 15px;
  --table-thead-background-color: hsla(208, 64%, 49%,0.1);
  --tag-background: hsla(208, 64%, 49%, 0.1);
  --tag-background-hover: hsla(208, 64%, 49%, 0.2);
  --tag-border-color: hsla(208, 64%, 49%, 0.15);
  --tag-border-color-hover: hsla(208, 64%, 49%, 0.15);
  --tag-color: hsl(208, 64%, 49%);
  --tag-color-hover: hsl(208, 64%, 49%);
  --tag-size: 0.875em;
  --text-accent: hsl(208, 64%, 49%);
  --text-accent-hover: hsl(203, 67.2%, 63.21%);
  --text-error: #e16d76;
  --text-faint: #797979;
  --text-folder-file-icon: hsl(208, 64%, 49%);
  --text-highlight: #c6c6c6;
  --text-highlight-bg: hsla(57, 40%, 38%, 0.541);
  --text-muted: #8a8a8a;
  --text-normal: #c6c6c6;
  --text-selection: #3b767160;
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --theme-color: hsl(208, 64%, 49%);
  --theme-color-translucent-001: hsla(208, 64%, 49%,0.01);
  --theme-color-translucent-005: hsla(208, 64%, 49%,0.05);
  --theme-color-translucent-01: hsla(208, 64%, 49%,0.1);
  --theme-color-translucent-015: hsla(208, 64%, 49%,0.15);
  --theme-color-translucent-02: hsla(208, 64%, 49%,0.2);
  --theme-color-translucent-04: hsla(208, 64%, 49%,0.4);
  --theme-color-translucent-06: hsla(208, 64%, 49%,0.6);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link: #f08080de;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.15);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(2, 122, 255, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(198, 198, 198);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(233, 151, 63, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(198, 198, 198);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(158, 158, 158, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(198, 198, 198);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="stickies"] {
  --accent-l-alt: 51.45%;
  --activeline-background: hsla(208, 64%, 49%,0.05);
  --background-asymm-split-left: #000000;
  --background-modifier-active-hover: hsla(208, 64%, 49%, 0.1);
  --background-modifier-border: #343434;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #9b4343;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 155, 67, 67;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #539126;
  --background-modifier-success-rgb: 83, 145, 38;
  --background-popover: #242424;
  --background-primary: #202020;
  --background-primary-alt: #444444;
  --background-secondary: #151515;
  --background-secondary-alt: #000000;
  --background-titlebar-inner: hsla(208, 64%, 49%, 10%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(208, 64%, 49%);
  --blur-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --bt-bubble-border-color: #343434;
  --bt-indentation-gradient-color-1: hsl(208, 64%, 49%);
  --button-corner-shape: round;
  --button-radius: 5px;
  --calendar-active-color: hsla(208, 64%, 49%,0.4);
  --calendar-hover-color: hsla(208, 64%, 49%,0.2);
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 5px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #202020;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #363636;
  --caret-color: #c6c6c6;
  --checkbox-border-color: #797979;
  --checkbox-border-color-hover: #8a8a8a;
  --checkbox-color: hsl(208, 64%, 49%);
  --checkbox-color-hover: hsl(203, 67.2%, 63.21%);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-done-color: #8a8a8a;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #e7e7e7;
  --cloze-decoration-color-2: hsl(208, 64%, 49%);
  --cloze-decoration-color-3: hsl(208, 64%, 49%);
  --code-active-line-background-color: #111111eb;
  --code-atom: #da904b;
  --code-attribute: #cac685;
  --code-background: #1111118c;
  --code-border-color: #343434;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #568060;
  --code-function: #cac685;
  --code-hr: #abb2bf;
  --code-important: #478fee;
  --code-keyword: #478fee;
  --code-language: #8a8a8a;
  --code-normal: #ebdbb2;
  --code-operator: #a89984;
  --code-property: #a0c7e9;
  --code-punctuation: #abb2bf;
  --code-qualifier: #35bed0;
  --code-radius: 5px;
  --code-selection-background: #3b767160;
  --code-selection-color: #ebdbb2;
  --code-size: 0.875em;
  --code-string: #abd58e;
  --code-string-2: #d6b87f;
  --code-tag: #db7c84;
  --code-type: #cac685;
  --code-value: #abd58e;
  --code-variable: #db7c84;
  --collapse-icon-color: #797979;
  --collapse-icon-color-collapsed: hsl(208, 64%, 49%);
  --color-accent: hsl(208, 64%, 49%);
  --color-accent-1: hsl(205, 65.28%, 56.35%);
  --color-accent-2: hsl(203, 67.2%, 63.21%);
  --color-accent-hsl: 208, 64%, 49%;
  --color-highlight-1: #c6c6c6;
  --color-highlight-2: #c6c6c6;
  --color-highlight-3: #c6c6c6;
  --custom-titlebar-bg: #000000;
  --divider-color: #000000;
  --divider-color-hover: hsl(208, 64%, 49%);
  --divider-vertical-height: 100%;
  --dropdown-background: #2b2b2b;
  --dropdown-background-hover: #373737;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: hsl(208, 64%, 49%);
  --flair-background: #2b2b2b;
  --flair-color: #c6c6c6;
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
  --font-size-outline: 13px;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-canvas-bg: #202020;
  --graph-circle-fill-highlight: hsl(208, 64%, 49%);
  --graph-line: #8c8c8c;
  --graph-line-fill-highlight: rgb(45, 130, 204);
  --graph-node: #8a8a8a;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(208, 64%, 49%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #797979;
  --graph-text: #c6c6c6;
  --h1-bg-color: color-mix(in srgb, hsl(78, 62%, 47%) 15%, transparent);
  --h1-color: hsl(78, 62%, 47%);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-bg-color: color-mix(in srgb, hsl(118, 42%, 49%) 15%, transparent);
  --h2-color: hsl(118, 42%, 49%);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-bg-color: color-mix(in srgb, hsl(180, 53%, 48%) 15%, transparent);
  --h3-color: hsl(180, 53%, 48%);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-bg-color: color-mix(in srgb, hsl(216, 69%, 68%) 15%, transparent);
  --h4-color: hsl(216, 69%, 68%);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-bg-color: color-mix(in srgb, hsl(258, 79%, 77%) 15%, transparent);
  --h5-color: hsl(258, 79%, 77%);
  --h5-line-height: 1.5;
  --h6-bg-color: color-mix(in srgb, hsl(290, 85%, 81%) 15%, transparent);
  --h6-color: hsl(290, 85%, 81%);
  --h6-line-height: 1.5;
  --he-title-bar-active-action: hsl(208, 64%, 49%);
  --he-title-bar-active-bg: hsla(208, 64%, 49%,0.05);
  --he-title-bar-active-fg: #c6c6c6;
  --he-title-bar-active-pinned-bg: hsla(208, 64%, 49%,0.05);
  --he-title-bar-inactive-action: #c6c6c6;
  --he-title-bar-inactive-bg: hsla(208, 64%, 49%,0.01);
  --he-title-bar-inactive-fg: #8a8a8a;
  --he-title-bar-inactive-pinned-bg: hsla(208, 64%, 49%,0.01);
  --heading-formatting: #797979;
  --heading-spacing: 2.5rem;
  --hr-color: #242424;
  --hr-color-1: hsl(208, 64%, 49%);
  --hr-color-2: hsl(208, 64%, 49%);
  --hr-color-3: hsl(208, 64%, 49%);
  --hr-color-4: hsl(208, 64%, 49%);
  --hr-color-icon-1: hsl(208, 64%, 49%);
  --hr-color-icon-2: hsl(208, 64%, 49%);
  --hr-color-icon-3: hsl(208, 64%, 49%);
  --hr-color-icon-4: hsl(208, 64%, 49%);
  --hr-color-numbers-bg-color: hsla(208, 64%, 49%,0.15);
  --hr-color-numbers-color: hsl(208, 64%, 49%);
  --hr-color-numbers-line-1: hsl(208, 64%, 49%);
  --hr-color-numbers-line-2: hsl(208, 64%, 49%);
  --hr-color-numbers-line-3: hsl(208, 64%, 49%);
  --hr-color-numbers-line-4: hsl(208, 64%, 49%);
  --hr-numbers-text-stroke: #c6c6c6;
  --interactive-accent: hsl(208, 64%, 49%);
  --interactive-accent-hover: hsl(203, 67.2%, 63.21%);
  --interactive-accent-hsl: 208, 64%, 49%;
  --interactive-hover: #373737;
  --interactive-normal: #2b2b2b;
  --internal-link-color: hsl(208, 64%, 49%);
  --link-color: hsl(208, 64%, 49%);
  --link-color-hover: hsl(203, 67.2%, 63.21%);
  --link-external-color: hsl(208, 64%, 49%);
  --link-external-color-hover: hsl(203, 67.2%, 63.21%);
  --link-unresolved-color: hsl(208, 64%, 49%);
  --link-unresolved-decoration-color: #f08080de;
  --link-weight: 400;
  --list-indent: 2.25em;
  --list-ol-number-color: #797979;
  --list-ul-marker-color: #797979;
  --loading-diy-text-color: #c6c6c6;
  --matrix-1: #2ec4c452;
  --matrix-2: #38ce2a52;
  --matrix-4: #eb973752;
  --matrix-5: #f3424252;
  --menu-background: #151515;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --mjx-inline-math-color: #c6c6c6;
  --mjx-math-color: #c6c6c6;
  --page-border-bottom: #000000;
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #343434;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #343434;
  --popover-font-size: 16px;
  --print-em-color: #a4ca8e;
  --raised-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #4d4d4d88;
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #3f3f3f7e;
  --search-clear-button-color: #8a8a8a;
  --search-icon-color: #8a8a8a;
  --search-result-file-title-color: #c6c6c6;
  --setting-group-heading-color: #c6c6c6;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #444444;
  --setting-items-border-color: #343434;
  --setting-items-padding: 20px;
  --setting-items-radius: 15px;
  --shiki-active-tab-border-color: #8a8a8a;
  --shiki-code-background: #1111118c;
  --shiki-code-block-border-radius: 5px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #797979;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #8a8a8a;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #8a8a8a;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #343434;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #797979;
  --shiki-gutter-text-color-highlight: #8a8a8a;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #8a8a8a;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #797979;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #202020;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #202020;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #151515;
  --tab-radius: 5px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #151515;
  --tab-switcher-menubar-background: linear-gradient(to top, #151515, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(208, 64%, 49%);
  --tab-text-color: #797979;
  --tab-text-color-active: #8a8a8a;
  --tab-text-color-focused: #8a8a8a;
  --tab-text-color-focused-active: #8a8a8a;
  --tab-text-color-focused-active-current: #c6c6c6;
  --tab-text-color-focused-highlighted: hsl(208, 64%, 49%);
  --table-add-button-border-color: #343434;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(208, 64%, 49%);
  --table-drag-handle-color: #797979;
  --table-drag-handle-color-active: #e4e4e4;
  --table-header-background: transparent;
  --table-header-border-color: #4a4a4a;
  --table-header-border-width: 1px;
  --table-header-color: #c6c6c6;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(208, 64%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(208, 64%, 49%);
  --table-text-size: 15px;
  --table-thead-background-color: hsla(208, 64%, 49%,0.1);
  --tag-background: hsla(208, 64%, 49%, 0.1);
  --tag-background-hover: hsla(208, 64%, 49%, 0.2);
  --tag-border-color: hsla(208, 64%, 49%, 0.15);
  --tag-border-color-hover: hsla(208, 64%, 49%, 0.15);
  --tag-color: hsl(208, 64%, 49%);
  --tag-color-hover: hsl(208, 64%, 49%);
  --tag-size: 0.875em;
  --text-accent: hsl(208, 64%, 49%);
  --text-accent-hover: hsl(203, 67.2%, 63.21%);
  --text-error: #e16d76;
  --text-faint: #797979;
  --text-folder-file-icon: hsl(208, 64%, 49%);
  --text-highlight: #c6c6c6;
  --text-highlight-bg: hsla(57, 40%, 38%, 0.541);
  --text-muted: #8a8a8a;
  --text-normal: #c6c6c6;
  --text-selection: #3b767160;
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --theme-color: hsl(208, 64%, 49%);
  --theme-color-translucent-001: hsla(208, 64%, 49%,0.01);
  --theme-color-translucent-005: hsla(208, 64%, 49%,0.05);
  --theme-color-translucent-01: hsla(208, 64%, 49%,0.1);
  --theme-color-translucent-015: hsla(208, 64%, 49%,0.15);
  --theme-color-translucent-02: hsla(208, 64%, 49%,0.2);
  --theme-color-translucent-04: hsla(208, 64%, 49%,0.4);
  --theme-color-translucent-06: hsla(208, 64%, 49%,0.6);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link: #f08080de;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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

html[saved-theme="dark"] body .callout[data-callout="stickies2"] {
  --accent-l-alt: 51.45%;
  --activeline-background: hsla(208, 64%, 49%,0.05);
  --background-asymm-split-left: #000000;
  --background-modifier-active-hover: hsla(208, 64%, 49%, 0.1);
  --background-modifier-border: #343434;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #9b4343;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 155, 67, 67;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #539126;
  --background-modifier-success-rgb: 83, 145, 38;
  --background-popover: #242424;
  --background-primary: #202020;
  --background-primary-alt: #444444;
  --background-secondary: #151515;
  --background-secondary-alt: #000000;
  --background-titlebar-inner: hsla(208, 64%, 49%, 10%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(208, 64%, 49%);
  --blur-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --bt-bubble-border-color: #343434;
  --bt-indentation-gradient-color-1: hsl(208, 64%, 49%);
  --button-corner-shape: round;
  --button-radius: 5px;
  --calendar-active-color: hsla(208, 64%, 49%,0.4);
  --calendar-hover-color: hsla(208, 64%, 49%,0.2);
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 5px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #202020;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #363636;
  --caret-color: #c6c6c6;
  --checkbox-border-color: #797979;
  --checkbox-border-color-hover: #8a8a8a;
  --checkbox-color: hsl(208, 64%, 49%);
  --checkbox-color-hover: hsl(203, 67.2%, 63.21%);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-done-color: #8a8a8a;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #e7e7e7;
  --cloze-decoration-color-2: hsl(208, 64%, 49%);
  --cloze-decoration-color-3: hsl(208, 64%, 49%);
  --code-active-line-background-color: #111111eb;
  --code-atom: #da904b;
  --code-attribute: #cac685;
  --code-background: #1111118c;
  --code-border-color: #343434;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #568060;
  --code-function: #cac685;
  --code-hr: #abb2bf;
  --code-important: #478fee;
  --code-keyword: #478fee;
  --code-language: #8a8a8a;
  --code-normal: #ebdbb2;
  --code-operator: #a89984;
  --code-property: #a0c7e9;
  --code-punctuation: #abb2bf;
  --code-qualifier: #35bed0;
  --code-radius: 5px;
  --code-selection-background: #3b767160;
  --code-selection-color: #ebdbb2;
  --code-size: 0.875em;
  --code-string: #abd58e;
  --code-string-2: #d6b87f;
  --code-tag: #db7c84;
  --code-type: #cac685;
  --code-value: #abd58e;
  --code-variable: #db7c84;
  --collapse-icon-color: #797979;
  --collapse-icon-color-collapsed: hsl(208, 64%, 49%);
  --color-accent: hsl(208, 64%, 49%);
  --color-accent-1: hsl(205, 65.28%, 56.35%);
  --color-accent-2: hsl(203, 67.2%, 63.21%);
  --color-accent-hsl: 208, 64%, 49%;
  --color-highlight-1: #c6c6c6;
  --color-highlight-2: #c6c6c6;
  --color-highlight-3: #c6c6c6;
  --custom-titlebar-bg: #000000;
  --divider-color: #000000;
  --divider-color-hover: hsl(208, 64%, 49%);
  --divider-vertical-height: 100%;
  --dropdown-background: #2b2b2b;
  --dropdown-background-hover: #373737;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: hsl(208, 64%, 49%);
  --flair-background: #2b2b2b;
  --flair-color: #c6c6c6;
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
  --font-size-outline: 13px;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-canvas-bg: #202020;
  --graph-circle-fill-highlight: hsl(208, 64%, 49%);
  --graph-line: #8c8c8c;
  --graph-line-fill-highlight: rgb(45, 130, 204);
  --graph-node: #8a8a8a;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(208, 64%, 49%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #797979;
  --graph-text: #c6c6c6;
  --h1-bg-color: color-mix(in srgb, hsl(78, 62%, 47%) 15%, transparent);
  --h1-color: hsl(78, 62%, 47%);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-bg-color: color-mix(in srgb, hsl(118, 42%, 49%) 15%, transparent);
  --h2-color: hsl(118, 42%, 49%);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-bg-color: color-mix(in srgb, hsl(180, 53%, 48%) 15%, transparent);
  --h3-color: hsl(180, 53%, 48%);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-bg-color: color-mix(in srgb, hsl(216, 69%, 68%) 15%, transparent);
  --h4-color: hsl(216, 69%, 68%);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-bg-color: color-mix(in srgb, hsl(258, 79%, 77%) 15%, transparent);
  --h5-color: hsl(258, 79%, 77%);
  --h5-line-height: 1.5;
  --h6-bg-color: color-mix(in srgb, hsl(290, 85%, 81%) 15%, transparent);
  --h6-color: hsl(290, 85%, 81%);
  --h6-line-height: 1.5;
  --he-title-bar-active-action: hsl(208, 64%, 49%);
  --he-title-bar-active-bg: hsla(208, 64%, 49%,0.05);
  --he-title-bar-active-fg: #c6c6c6;
  --he-title-bar-active-pinned-bg: hsla(208, 64%, 49%,0.05);
  --he-title-bar-inactive-action: #c6c6c6;
  --he-title-bar-inactive-bg: hsla(208, 64%, 49%,0.01);
  --he-title-bar-inactive-fg: #8a8a8a;
  --he-title-bar-inactive-pinned-bg: hsla(208, 64%, 49%,0.01);
  --heading-formatting: #797979;
  --heading-spacing: 2.5rem;
  --hr-color: #242424;
  --hr-color-1: hsl(208, 64%, 49%);
  --hr-color-2: hsl(208, 64%, 49%);
  --hr-color-3: hsl(208, 64%, 49%);
  --hr-color-4: hsl(208, 64%, 49%);
  --hr-color-icon-1: hsl(208, 64%, 49%);
  --hr-color-icon-2: hsl(208, 64%, 49%);
  --hr-color-icon-3: hsl(208, 64%, 49%);
  --hr-color-icon-4: hsl(208, 64%, 49%);
  --hr-color-numbers-bg-color: hsla(208, 64%, 49%,0.15);
  --hr-color-numbers-color: hsl(208, 64%, 49%);
  --hr-color-numbers-line-1: hsl(208, 64%, 49%);
  --hr-color-numbers-line-2: hsl(208, 64%, 49%);
  --hr-color-numbers-line-3: hsl(208, 64%, 49%);
  --hr-color-numbers-line-4: hsl(208, 64%, 49%);
  --hr-numbers-text-stroke: #c6c6c6;
  --interactive-accent: hsl(208, 64%, 49%);
  --interactive-accent-hover: hsl(203, 67.2%, 63.21%);
  --interactive-accent-hsl: 208, 64%, 49%;
  --interactive-hover: #373737;
  --interactive-normal: #2b2b2b;
  --internal-link-color: hsl(208, 64%, 49%);
  --link-color: hsl(208, 64%, 49%);
  --link-color-hover: hsl(203, 67.2%, 63.21%);
  --link-external-color: hsl(208, 64%, 49%);
  --link-external-color-hover: hsl(203, 67.2%, 63.21%);
  --link-unresolved-color: hsl(208, 64%, 49%);
  --link-unresolved-decoration-color: #f08080de;
  --link-weight: 400;
  --list-indent: 2.25em;
  --list-ol-number-color: #797979;
  --list-ul-marker-color: #797979;
  --loading-diy-text-color: #c6c6c6;
  --matrix-1: #2ec4c452;
  --matrix-2: #38ce2a52;
  --matrix-4: #eb973752;
  --matrix-5: #f3424252;
  --menu-background: #151515;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --mjx-inline-math-color: #c6c6c6;
  --mjx-math-color: #c6c6c6;
  --page-border-bottom: #000000;
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #343434;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #343434;
  --popover-font-size: 16px;
  --print-em-color: #a4ca8e;
  --raised-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #4d4d4d88;
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #3f3f3f7e;
  --search-clear-button-color: #8a8a8a;
  --search-icon-color: #8a8a8a;
  --search-result-file-title-color: #c6c6c6;
  --setting-group-heading-color: #c6c6c6;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #444444;
  --setting-items-border-color: #343434;
  --setting-items-padding: 20px;
  --setting-items-radius: 15px;
  --shiki-active-tab-border-color: #8a8a8a;
  --shiki-code-background: #1111118c;
  --shiki-code-block-border-radius: 5px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #797979;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #8a8a8a;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #8a8a8a;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #343434;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #797979;
  --shiki-gutter-text-color-highlight: #8a8a8a;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #8a8a8a;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #797979;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #202020;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #202020;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #151515;
  --tab-radius: 5px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #151515;
  --tab-switcher-menubar-background: linear-gradient(to top, #151515, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(208, 64%, 49%);
  --tab-text-color: #797979;
  --tab-text-color-active: #8a8a8a;
  --tab-text-color-focused: #8a8a8a;
  --tab-text-color-focused-active: #8a8a8a;
  --tab-text-color-focused-active-current: #c6c6c6;
  --tab-text-color-focused-highlighted: hsl(208, 64%, 49%);
  --table-add-button-border-color: #343434;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(208, 64%, 49%);
  --table-drag-handle-color: #797979;
  --table-drag-handle-color-active: #e4e4e4;
  --table-header-background: transparent;
  --table-header-border-color: #4a4a4a;
  --table-header-border-width: 1px;
  --table-header-color: #c6c6c6;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(208, 64%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(208, 64%, 49%);
  --table-text-size: 15px;
  --table-thead-background-color: hsla(208, 64%, 49%,0.1);
  --tag-background: hsla(208, 64%, 49%, 0.1);
  --tag-background-hover: hsla(208, 64%, 49%, 0.2);
  --tag-border-color: hsla(208, 64%, 49%, 0.15);
  --tag-border-color-hover: hsla(208, 64%, 49%, 0.15);
  --tag-color: hsl(208, 64%, 49%);
  --tag-color-hover: hsl(208, 64%, 49%);
  --tag-size: 0.875em;
  --text-accent: hsl(208, 64%, 49%);
  --text-accent-hover: hsl(203, 67.2%, 63.21%);
  --text-error: #e16d76;
  --text-faint: #797979;
  --text-folder-file-icon: hsl(208, 64%, 49%);
  --text-highlight: #c6c6c6;
  --text-highlight-bg: hsla(57, 40%, 38%, 0.541);
  --text-muted: #8a8a8a;
  --text-normal: #c6c6c6;
  --text-selection: #3b767160;
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --theme-color: hsl(208, 64%, 49%);
  --theme-color-translucent-001: hsla(208, 64%, 49%,0.01);
  --theme-color-translucent-005: hsla(208, 64%, 49%,0.05);
  --theme-color-translucent-01: hsla(208, 64%, 49%,0.1);
  --theme-color-translucent-015: hsla(208, 64%, 49%,0.15);
  --theme-color-translucent-02: hsla(208, 64%, 49%,0.2);
  --theme-color-translucent-04: hsla(208, 64%, 49%,0.4);
  --theme-color-translucent-06: hsla(208, 64%, 49%,0.6);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link: #f08080de;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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

html[saved-theme="dark"] body .callout[data-callout="stickies3"] {
  --accent-l-alt: 51.45%;
  --activeline-background: hsla(208, 64%, 49%,0.05);
  --background-asymm-split-left: #000000;
  --background-modifier-active-hover: hsla(208, 64%, 49%, 0.1);
  --background-modifier-border: #343434;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #9b4343;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 155, 67, 67;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #539126;
  --background-modifier-success-rgb: 83, 145, 38;
  --background-popover: #242424;
  --background-primary: #202020;
  --background-primary-alt: #444444;
  --background-secondary: #151515;
  --background-secondary-alt: #000000;
  --background-titlebar-inner: hsla(208, 64%, 49%, 10%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(208, 64%, 49%);
  --blur-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --bt-bubble-border-color: #343434;
  --bt-indentation-gradient-color-1: hsl(208, 64%, 49%);
  --button-corner-shape: round;
  --button-radius: 5px;
  --calendar-active-color: hsla(208, 64%, 49%,0.4);
  --calendar-hover-color: hsla(208, 64%, 49%,0.2);
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 5px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #202020;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #363636;
  --caret-color: #c6c6c6;
  --checkbox-border-color: #797979;
  --checkbox-border-color-hover: #8a8a8a;
  --checkbox-color: hsl(208, 64%, 49%);
  --checkbox-color-hover: hsl(203, 67.2%, 63.21%);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-done-color: #8a8a8a;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #e7e7e7;
  --cloze-decoration-color-2: hsl(208, 64%, 49%);
  --cloze-decoration-color-3: hsl(208, 64%, 49%);
  --code-active-line-background-color: #111111eb;
  --code-atom: #da904b;
  --code-attribute: #cac685;
  --code-background: #1111118c;
  --code-border-color: #343434;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #568060;
  --code-function: #cac685;
  --code-hr: #abb2bf;
  --code-important: #478fee;
  --code-keyword: #478fee;
  --code-language: #8a8a8a;
  --code-normal: #ebdbb2;
  --code-operator: #a89984;
  --code-property: #a0c7e9;
  --code-punctuation: #abb2bf;
  --code-qualifier: #35bed0;
  --code-radius: 5px;
  --code-selection-background: #3b767160;
  --code-selection-color: #ebdbb2;
  --code-size: 0.875em;
  --code-string: #abd58e;
  --code-string-2: #d6b87f;
  --code-tag: #db7c84;
  --code-type: #cac685;
  --code-value: #abd58e;
  --code-variable: #db7c84;
  --collapse-icon-color: #797979;
  --collapse-icon-color-collapsed: hsl(208, 64%, 49%);
  --color-accent: hsl(208, 64%, 49%);
  --color-accent-1: hsl(205, 65.28%, 56.35%);
  --color-accent-2: hsl(203, 67.2%, 63.21%);
  --color-accent-hsl: 208, 64%, 49%;
  --color-highlight-1: #c6c6c6;
  --color-highlight-2: #c6c6c6;
  --color-highlight-3: #c6c6c6;
  --custom-titlebar-bg: #000000;
  --divider-color: #000000;
  --divider-color-hover: hsl(208, 64%, 49%);
  --divider-vertical-height: 100%;
  --dropdown-background: #2b2b2b;
  --dropdown-background-hover: #373737;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: hsl(208, 64%, 49%);
  --flair-background: #2b2b2b;
  --flair-color: #c6c6c6;
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
  --font-size-outline: 13px;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-canvas-bg: #202020;
  --graph-circle-fill-highlight: hsl(208, 64%, 49%);
  --graph-line: #8c8c8c;
  --graph-line-fill-highlight: rgb(45, 130, 204);
  --graph-node: #8a8a8a;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(208, 64%, 49%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #797979;
  --graph-text: #c6c6c6;
  --h1-bg-color: color-mix(in srgb, hsl(78, 62%, 47%) 15%, transparent);
  --h1-color: hsl(78, 62%, 47%);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-bg-color: color-mix(in srgb, hsl(118, 42%, 49%) 15%, transparent);
  --h2-color: hsl(118, 42%, 49%);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-bg-color: color-mix(in srgb, hsl(180, 53%, 48%) 15%, transparent);
  --h3-color: hsl(180, 53%, 48%);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-bg-color: color-mix(in srgb, hsl(216, 69%, 68%) 15%, transparent);
  --h4-color: hsl(216, 69%, 68%);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-bg-color: color-mix(in srgb, hsl(258, 79%, 77%) 15%, transparent);
  --h5-color: hsl(258, 79%, 77%);
  --h5-line-height: 1.5;
  --h6-bg-color: color-mix(in srgb, hsl(290, 85%, 81%) 15%, transparent);
  --h6-color: hsl(290, 85%, 81%);
  --h6-line-height: 1.5;
  --he-title-bar-active-action: hsl(208, 64%, 49%);
  --he-title-bar-active-bg: hsla(208, 64%, 49%,0.05);
  --he-title-bar-active-fg: #c6c6c6;
  --he-title-bar-active-pinned-bg: hsla(208, 64%, 49%,0.05);
  --he-title-bar-inactive-action: #c6c6c6;
  --he-title-bar-inactive-bg: hsla(208, 64%, 49%,0.01);
  --he-title-bar-inactive-fg: #8a8a8a;
  --he-title-bar-inactive-pinned-bg: hsla(208, 64%, 49%,0.01);
  --heading-formatting: #797979;
  --heading-spacing: 2.5rem;
  --hr-color: #242424;
  --hr-color-1: hsl(208, 64%, 49%);
  --hr-color-2: hsl(208, 64%, 49%);
  --hr-color-3: hsl(208, 64%, 49%);
  --hr-color-4: hsl(208, 64%, 49%);
  --hr-color-icon-1: hsl(208, 64%, 49%);
  --hr-color-icon-2: hsl(208, 64%, 49%);
  --hr-color-icon-3: hsl(208, 64%, 49%);
  --hr-color-icon-4: hsl(208, 64%, 49%);
  --hr-color-numbers-bg-color: hsla(208, 64%, 49%,0.15);
  --hr-color-numbers-color: hsl(208, 64%, 49%);
  --hr-color-numbers-line-1: hsl(208, 64%, 49%);
  --hr-color-numbers-line-2: hsl(208, 64%, 49%);
  --hr-color-numbers-line-3: hsl(208, 64%, 49%);
  --hr-color-numbers-line-4: hsl(208, 64%, 49%);
  --hr-numbers-text-stroke: #c6c6c6;
  --interactive-accent: hsl(208, 64%, 49%);
  --interactive-accent-hover: hsl(203, 67.2%, 63.21%);
  --interactive-accent-hsl: 208, 64%, 49%;
  --interactive-hover: #373737;
  --interactive-normal: #2b2b2b;
  --internal-link-color: hsl(208, 64%, 49%);
  --link-color: hsl(208, 64%, 49%);
  --link-color-hover: hsl(203, 67.2%, 63.21%);
  --link-external-color: hsl(208, 64%, 49%);
  --link-external-color-hover: hsl(203, 67.2%, 63.21%);
  --link-unresolved-color: hsl(208, 64%, 49%);
  --link-unresolved-decoration-color: #f08080de;
  --link-weight: 400;
  --list-indent: 2.25em;
  --list-ol-number-color: #797979;
  --list-ul-marker-color: #797979;
  --loading-diy-text-color: #c6c6c6;
  --matrix-1: #2ec4c452;
  --matrix-2: #38ce2a52;
  --matrix-4: #eb973752;
  --matrix-5: #f3424252;
  --menu-background: #151515;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --mjx-inline-math-color: #c6c6c6;
  --mjx-math-color: #c6c6c6;
  --page-border-bottom: #000000;
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #343434;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #343434;
  --popover-font-size: 16px;
  --print-em-color: #a4ca8e;
  --raised-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #4d4d4d88;
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #3f3f3f7e;
  --search-clear-button-color: #8a8a8a;
  --search-icon-color: #8a8a8a;
  --search-result-file-title-color: #c6c6c6;
  --setting-group-heading-color: #c6c6c6;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #444444;
  --setting-items-border-color: #343434;
  --setting-items-padding: 20px;
  --setting-items-radius: 15px;
  --shiki-active-tab-border-color: #8a8a8a;
  --shiki-code-background: #1111118c;
  --shiki-code-block-border-radius: 5px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #797979;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #8a8a8a;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #8a8a8a;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #343434;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #797979;
  --shiki-gutter-text-color-highlight: #8a8a8a;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #8a8a8a;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #797979;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #202020;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #202020;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #151515;
  --tab-radius: 5px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #151515;
  --tab-switcher-menubar-background: linear-gradient(to top, #151515, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(208, 64%, 49%);
  --tab-text-color: #797979;
  --tab-text-color-active: #8a8a8a;
  --tab-text-color-focused: #8a8a8a;
  --tab-text-color-focused-active: #8a8a8a;
  --tab-text-color-focused-active-current: #c6c6c6;
  --tab-text-color-focused-highlighted: hsl(208, 64%, 49%);
  --table-add-button-border-color: #343434;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(208, 64%, 49%);
  --table-drag-handle-color: #797979;
  --table-drag-handle-color-active: #e4e4e4;
  --table-header-background: transparent;
  --table-header-border-color: #4a4a4a;
  --table-header-border-width: 1px;
  --table-header-color: #c6c6c6;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(208, 64%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(208, 64%, 49%);
  --table-text-size: 15px;
  --table-thead-background-color: hsla(208, 64%, 49%,0.1);
  --tag-background: hsla(208, 64%, 49%, 0.1);
  --tag-background-hover: hsla(208, 64%, 49%, 0.2);
  --tag-border-color: hsla(208, 64%, 49%, 0.15);
  --tag-border-color-hover: hsla(208, 64%, 49%, 0.15);
  --tag-color: hsl(208, 64%, 49%);
  --tag-color-hover: hsl(208, 64%, 49%);
  --tag-size: 0.875em;
  --text-accent: hsl(208, 64%, 49%);
  --text-accent-hover: hsl(203, 67.2%, 63.21%);
  --text-error: #e16d76;
  --text-faint: #797979;
  --text-folder-file-icon: hsl(208, 64%, 49%);
  --text-highlight: #c6c6c6;
  --text-highlight-bg: hsla(57, 40%, 38%, 0.541);
  --text-muted: #8a8a8a;
  --text-normal: #c6c6c6;
  --text-selection: #3b767160;
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --theme-color: hsl(208, 64%, 49%);
  --theme-color-translucent-001: hsla(208, 64%, 49%,0.01);
  --theme-color-translucent-005: hsla(208, 64%, 49%,0.05);
  --theme-color-translucent-01: hsla(208, 64%, 49%,0.1);
  --theme-color-translucent-015: hsla(208, 64%, 49%,0.15);
  --theme-color-translucent-02: hsla(208, 64%, 49%,0.2);
  --theme-color-translucent-04: hsla(208, 64%, 49%,0.4);
  --theme-color-translucent-06: hsla(208, 64%, 49%,0.6);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link: #f08080de;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 20px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(68, 207, 110, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(198, 198, 198);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="timeline"] {
  --accent-l-alt: 51.45%;
  --activeline-background: hsla(208, 64%, 49%,0.05);
  --background-asymm-split-left: #000000;
  --background-modifier-active-hover: hsla(208, 64%, 49%, 0.1);
  --background-modifier-border: #343434;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #9b4343;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 155, 67, 67;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #539126;
  --background-modifier-success-rgb: 83, 145, 38;
  --background-popover: #242424;
  --background-primary: #202020;
  --background-primary-alt: #444444;
  --background-secondary: #151515;
  --background-secondary-alt: #000000;
  --background-titlebar-inner: hsla(208, 64%, 49%, 10%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(208, 64%, 49%);
  --blur-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --bt-bubble-border-color: #343434;
  --bt-indentation-gradient-color-1: hsl(208, 64%, 49%);
  --button-corner-shape: round;
  --button-radius: 5px;
  --calendar-active-color: hsla(208, 64%, 49%,0.4);
  --calendar-hover-color: hsla(208, 64%, 49%,0.2);
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 31, 172, 139);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 5px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #202020;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #363636;
  --caret-color: #c6c6c6;
  --checkbox-border-color: #797979;
  --checkbox-border-color-hover: #8a8a8a;
  --checkbox-color: hsl(208, 64%, 49%);
  --checkbox-color-hover: hsl(203, 67.2%, 63.21%);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-done-color: #8a8a8a;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #e7e7e7;
  --cloze-decoration-color-2: hsl(208, 64%, 49%);
  --cloze-decoration-color-3: hsl(208, 64%, 49%);
  --code-active-line-background-color: #111111eb;
  --code-atom: #da904b;
  --code-attribute: #cac685;
  --code-background: #1111118c;
  --code-border-color: #343434;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #568060;
  --code-function: #cac685;
  --code-hr: #abb2bf;
  --code-important: #478fee;
  --code-keyword: #478fee;
  --code-language: #8a8a8a;
  --code-normal: #ebdbb2;
  --code-operator: #a89984;
  --code-property: #a0c7e9;
  --code-punctuation: #abb2bf;
  --code-qualifier: #35bed0;
  --code-radius: 5px;
  --code-selection-background: #3b767160;
  --code-selection-color: #ebdbb2;
  --code-size: 0.875em;
  --code-string: #abd58e;
  --code-string-2: #d6b87f;
  --code-tag: #db7c84;
  --code-type: #cac685;
  --code-value: #abd58e;
  --code-variable: #db7c84;
  --collapse-icon-color: #797979;
  --collapse-icon-color-collapsed: hsl(208, 64%, 49%);
  --color-accent: hsl(208, 64%, 49%);
  --color-accent-1: hsl(205, 65.28%, 56.35%);
  --color-accent-2: hsl(203, 67.2%, 63.21%);
  --color-accent-hsl: 208, 64%, 49%;
  --color-highlight-1: #c6c6c6;
  --color-highlight-2: #c6c6c6;
  --color-highlight-3: #c6c6c6;
  --custom-titlebar-bg: #000000;
  --divider-color: #000000;
  --divider-color-hover: hsl(208, 64%, 49%);
  --divider-vertical-height: 100%;
  --dropdown-background: #2b2b2b;
  --dropdown-background-hover: #373737;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: hsl(208, 64%, 49%);
  --flair-background: #2b2b2b;
  --flair-color: #c6c6c6;
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
  --font-size-outline: 13px;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-canvas-bg: #202020;
  --graph-circle-fill-highlight: hsl(208, 64%, 49%);
  --graph-line: #8c8c8c;
  --graph-line-fill-highlight: rgb(45, 130, 204);
  --graph-node: #8a8a8a;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(208, 64%, 49%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #797979;
  --graph-text: #c6c6c6;
  --h1-bg-color: color-mix(in srgb, hsl(78, 62%, 47%) 15%, transparent);
  --h1-color: hsl(78, 62%, 47%);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-bg-color: color-mix(in srgb, hsl(118, 42%, 49%) 15%, transparent);
  --h2-color: hsl(118, 42%, 49%);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-bg-color: color-mix(in srgb, hsl(180, 53%, 48%) 15%, transparent);
  --h3-color: hsl(180, 53%, 48%);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-bg-color: color-mix(in srgb, hsl(216, 69%, 68%) 15%, transparent);
  --h4-color: hsl(216, 69%, 68%);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-bg-color: color-mix(in srgb, hsl(258, 79%, 77%) 15%, transparent);
  --h5-color: hsl(258, 79%, 77%);
  --h5-line-height: 1.5;
  --h6-bg-color: color-mix(in srgb, hsl(290, 85%, 81%) 15%, transparent);
  --h6-color: hsl(290, 85%, 81%);
  --h6-line-height: 1.5;
  --he-title-bar-active-action: hsl(208, 64%, 49%);
  --he-title-bar-active-bg: hsla(208, 64%, 49%,0.05);
  --he-title-bar-active-fg: #c6c6c6;
  --he-title-bar-active-pinned-bg: hsla(208, 64%, 49%,0.05);
  --he-title-bar-inactive-action: #c6c6c6;
  --he-title-bar-inactive-bg: hsla(208, 64%, 49%,0.01);
  --he-title-bar-inactive-fg: #8a8a8a;
  --he-title-bar-inactive-pinned-bg: hsla(208, 64%, 49%,0.01);
  --heading-formatting: #797979;
  --heading-spacing: 2.5rem;
  --hr-color: #242424;
  --hr-color-1: hsl(208, 64%, 49%);
  --hr-color-2: hsl(208, 64%, 49%);
  --hr-color-3: hsl(208, 64%, 49%);
  --hr-color-4: hsl(208, 64%, 49%);
  --hr-color-icon-1: hsl(208, 64%, 49%);
  --hr-color-icon-2: hsl(208, 64%, 49%);
  --hr-color-icon-3: hsl(208, 64%, 49%);
  --hr-color-icon-4: hsl(208, 64%, 49%);
  --hr-color-numbers-bg-color: hsla(208, 64%, 49%,0.15);
  --hr-color-numbers-color: hsl(208, 64%, 49%);
  --hr-color-numbers-line-1: hsl(208, 64%, 49%);
  --hr-color-numbers-line-2: hsl(208, 64%, 49%);
  --hr-color-numbers-line-3: hsl(208, 64%, 49%);
  --hr-color-numbers-line-4: hsl(208, 64%, 49%);
  --hr-numbers-text-stroke: #c6c6c6;
  --interactive-accent: hsl(208, 64%, 49%);
  --interactive-accent-hover: hsl(203, 67.2%, 63.21%);
  --interactive-accent-hsl: 208, 64%, 49%;
  --interactive-hover: #373737;
  --interactive-normal: #2b2b2b;
  --internal-link-color: hsl(208, 64%, 49%);
  --link-color: hsl(208, 64%, 49%);
  --link-color-hover: hsl(203, 67.2%, 63.21%);
  --link-external-color: hsl(208, 64%, 49%);
  --link-external-color-hover: hsl(203, 67.2%, 63.21%);
  --link-unresolved-color: hsl(208, 64%, 49%);
  --link-unresolved-decoration-color: #f08080de;
  --link-weight: 400;
  --list-indent: 2.25em;
  --list-ol-number-color: #797979;
  --list-ul-marker-color: #797979;
  --loading-diy-text-color: #c6c6c6;
  --matrix-1: #2ec4c452;
  --matrix-2: #38ce2a52;
  --matrix-4: #eb973752;
  --matrix-5: #f3424252;
  --menu-background: #151515;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --mjx-inline-math-color: #c6c6c6;
  --mjx-math-color: #c6c6c6;
  --page-border-bottom: #000000;
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #343434;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #343434;
  --popover-font-size: 16px;
  --print-em-color: #a4ca8e;
  --raised-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #4d4d4d88;
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #3f3f3f7e;
  --search-clear-button-color: #8a8a8a;
  --search-icon-color: #8a8a8a;
  --search-result-file-title-color: #c6c6c6;
  --setting-group-heading-color: #c6c6c6;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #444444;
  --setting-items-border-color: #343434;
  --setting-items-padding: 20px;
  --setting-items-radius: 15px;
  --shiki-active-tab-border-color: #8a8a8a;
  --shiki-code-background: #1111118c;
  --shiki-code-block-border-radius: 5px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #797979;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #8a8a8a;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #8a8a8a;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #343434;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #797979;
  --shiki-gutter-text-color-highlight: #8a8a8a;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #8a8a8a;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #797979;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #202020;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #202020;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: #151515;
  --tab-radius: 5px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #151515;
  --tab-switcher-menubar-background: linear-gradient(to top, #151515, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(208, 64%, 49%);
  --tab-text-color: #797979;
  --tab-text-color-active: #8a8a8a;
  --tab-text-color-focused: #8a8a8a;
  --tab-text-color-focused-active: #8a8a8a;
  --tab-text-color-focused-active-current: #c6c6c6;
  --tab-text-color-focused-highlighted: hsl(208, 64%, 49%);
  --table-add-button-border-color: #343434;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(208, 64%, 49%);
  --table-drag-handle-color: #797979;
  --table-drag-handle-color-active: #e4e4e4;
  --table-header-background: transparent;
  --table-header-border-color: #4a4a4a;
  --table-header-border-width: 1px;
  --table-header-color: #c6c6c6;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(208, 64%, 49%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(208, 64%, 49%);
  --table-text-size: 15px;
  --table-thead-background-color: hsla(208, 64%, 49%,0.1);
  --tag-background: hsla(208, 64%, 49%, 0.1);
  --tag-background-hover: hsla(208, 64%, 49%, 0.2);
  --tag-border-color: hsla(208, 64%, 49%, 0.15);
  --tag-border-color-hover: hsla(208, 64%, 49%, 0.15);
  --tag-color: hsl(208, 64%, 49%);
  --tag-color-hover: hsl(208, 64%, 49%);
  --tag-size: 0.875em;
  --text-accent: hsl(208, 64%, 49%);
  --text-accent-hover: hsl(203, 67.2%, 63.21%);
  --text-error: #e16d76;
  --text-faint: #797979;
  --text-folder-file-icon: hsl(208, 64%, 49%);
  --text-highlight: #c6c6c6;
  --text-highlight-bg: hsla(57, 40%, 38%, 0.541);
  --text-muted: #8a8a8a;
  --text-normal: #c6c6c6;
  --text-selection: #3b767160;
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --theme-color: hsl(208, 64%, 49%);
  --theme-color-translucent-001: hsla(208, 64%, 49%,0.01);
  --theme-color-translucent-005: hsla(208, 64%, 49%,0.05);
  --theme-color-translucent-01: hsla(208, 64%, 49%,0.1);
  --theme-color-translucent-015: hsla(208, 64%, 49%,0.15);
  --theme-color-translucent-02: hsla(208, 64%, 49%,0.2);
  --theme-color-translucent-04: hsla(208, 64%, 49%,0.4);
  --theme-color-translucent-06: hsla(208, 64%, 49%,0.6);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link: #f08080de;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(31, 172, 139, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgba(31, 172, 139, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(31, 172, 139, 0.25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(83, 223, 221, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(198, 198, 198);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(2, 122, 255, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(198, 198, 198);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(233, 151, 63, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(198, 198, 198);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="cloze"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="icon"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="kanban"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="stickies"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="stickies2"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="stickies3"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="timeline"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg t='1649346326592' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2210'%3E%3Cpath d='M384 170.666667m42.666667 0l512 0q42.666667 0 42.666666 42.666666l0 0q0 42.666667-42.666666 42.666667l-512 0q-42.666667 0-42.666667-42.666667l0 0q0-42.666667 42.666667-42.666666Z' p-id='2211'%3E%3C/path%3E%3Cpath d='M384 469.333333m42.666667 0l512 0q42.666667 0 42.666666 42.666667l0 0q0 42.666667-42.666666 42.666667l-512 0q-42.666667 0-42.666667-42.666667l0 0q0-42.666667 42.666667-42.666667Z' p-id='2212'%3E%3C/path%3E%3Cpath d='M384 768m42.666667 0l512 0q42.666667 0 42.666666 42.666667l0 0q0 42.666667-42.666666 42.666666l-512 0q-42.666667 0-42.666667-42.666666l0 0q0-42.666667 42.666667-42.666667Z' p-id='2213'%3E%3C/path%3E%3Cpath d='M239.835143 127.973411m15.084945 15.084944l60.339779 60.339779q15.084945 15.084945 0 30.169889l-60.339779 60.339779q-15.084945 15.084945-30.169889 0l-60.339779-60.339779q-15.084945-15.084945 0-30.169889l60.339779-60.339779q15.084945-15.084945 30.169889 0Z' p-id='2214'%3E%3C/path%3E%3Cpath d='M239.831988 426.647696m15.084944 15.084945l60.339779 60.339778q15.084945 15.084945 0 30.16989l-60.339779 60.339778q-15.084945 15.084945-30.169889 0l-60.339779-60.339778q-15.084945-15.084945 0-30.16989l60.339779-60.339778q15.084945-15.084945 30.169889 0Z' p-id='2215'%3E%3C/path%3E%3Cpath d='M239.828832 725.321982m15.084944 15.084944l60.339779 60.339779q15.084945 15.084945 0 30.169889l-60.339779 60.339779q-15.084945 15.084945-30.169889 0l-60.339779-60.339779q-15.084945-15.084945 0-30.169889l60.339779-60.339779q15.084945-15.084945 30.169889 0Z' p-id='2216'%3E%3C/path%3E%3Cpath d='M213.333333 853.333333H85.333333a42.666667 42.666667 0 0 1-42.666666-42.666666V213.333333a42.666667 42.666667 0 0 1 42.666666-42.666666h128v85.333333H138.666667a10.709333 10.709333 0 0 0-10.666667 10.666667v192a10.709333 10.709333 0 0 0 10.666667 10.666666H213.333333v85.333334H138.666667a10.709333 10.709333 0 0 0-10.666667 10.666666v192a10.709333 10.709333 0 0 0 10.666667 10.666667H213.333333v85.333333z' p-id='2217'%3E%3C/path%3E%3C/svg%3E'");
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
  background-color: rgba(46, 46, 46, 0.616);
  border-bottom-color: rgb(52, 52, 52);
  border-bottom-width: 0px;
  border-left-color: rgb(52, 52, 52);
  border-left-width: 0px;
  border-right-color: rgb(52, 52, 52);
  border-right-width: 0px;
  border-top-color: rgb(52, 52, 52);
  border-top-width: 0px;
  color: var(--text-normal, rgb(198, 198, 198));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-width: 0px;
  box-shadow: 0 0 10px 1px var(--prompt-box-shadow);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  background-color: var(--scrollbar-active-thumb-bg, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(198, 198, 198));
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(198, 198, 198) none 0px;
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--theme-color-translucent-015, rgba(45, 130, 205, 0.15));
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgba(46, 46, 46, 0.616);
  border-bottom-color: rgb(21, 21, 21);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--theme-color-translucent-015, rgba(45, 130, 205, 0.15));
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--theme-color-translucent-015, rgba(45, 130, 205, 0.15));
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(208, 64%, 49%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(208, 64%, 49%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(208, 64%, 49%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(208, 64%, 49%, 0.15));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsl(208, 64%, 49%));
  --pill-color-hover: var(--tag-color-hover, hsl(208, 64%, 49%));
  --pill-color-remove: var(--tag-color, hsl(208, 64%, 49%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(208, 64%, 49%));
  background-color: var(--pill-background, rgba(45, 130, 205, 0.1));
  border-bottom-color: rgba(45, 130, 205, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(45, 130, 205, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(45, 130, 205, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(45, 130, 205, 0.15);
  border-top-width: 1px;
  color: var(--pill-color, rgb(45, 130, 205));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(45, 130, 205);
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: rgb(150, 194, 46);
  border-bottom-width: 0px;
  border-left-color: rgb(150, 194, 46);
  border-left-width: 0px;
  border-right-color: rgb(150, 194, 46);
  border-right-width: 0px;
  border-top-color: rgb(150, 194, 46);
  border-top-width: 0px;
  color: var(--h1-color, rgb(150, 194, 46));
  font-family: var(--h1-font, "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h1-size, 25px);
  letter-spacing: var(--h1-letter-spacing, -0.375px);
  line-height: var(--h1-line-height, 30px);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(150, 194, 46));
  font-size: var(--inline-title-size, 25px);
}

html[saved-theme="dark"] body h2 {
  background-color: var( --simple-orange, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(76, 177, 72);
  border-bottom-width: 0px;
  border-left-color: rgb(76, 177, 72);
  border-left-width: 0px;
  border-right-color: rgb(76, 177, 72);
  border-right-width: 0px;
  border-top-color: rgb(76, 177, 72);
  border-top-width: 0px;
  color: var(--h2-color, rgb(76, 177, 72));
  font-family: var(--h2-font, "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h2-size, 23px);
  letter-spacing: var(--h2-letter-spacing, -0.253px);
  line-height: var(--h2-line-height, 27.6px);
  margin-bottom: calc(var(--p-spacing)*0.5);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: calc(var(--p-spacing)*0.5);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(150, 194, 46);
  border-bottom-width: 0px;
  border-left-color: rgb(150, 194, 46);
  border-left-width: 0px;
  border-right-color: rgb(150, 194, 46);
  border-right-width: 0px;
  border-top-color: rgb(150, 194, 46);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(150, 194, 46));
  font-family: var(--inline-title-font, "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--inline-title-size, 25px);
  letter-spacing: -0.375px;
  line-height: var(--inline-title-line-height, 30px);
  margin-bottom: 12.5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h3 {
  background-color: var( --simple-orange, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(58, 187, 187);
  border-bottom-width: 0px;
  border-left-color: rgb(58, 187, 187);
  border-left-width: 0px;
  border-right-color: rgb(58, 187, 187);
  border-right-width: 0px;
  border-top-color: rgb(58, 187, 187);
  border-top-width: 0px;
  color: var(--h3-color, rgb(58, 187, 187));
  font-family: var(--h3-font, "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h3-size, 21px);
  letter-spacing: var(--h3-letter-spacing, -0.168px);
  line-height: var(--h3-line-height, 27.3px);
  margin-bottom: calc(var(--p-spacing)*0.5);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: calc(var(--p-spacing)*0.5);
}

html[saved-theme="dark"] body h4 {
  background-color: var( --simple-orange, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(117, 162, 230);
  border-bottom-width: 0px;
  border-left-color: rgb(117, 162, 230);
  border-left-width: 0px;
  border-right-color: rgb(117, 162, 230);
  border-right-width: 0px;
  border-top-color: rgb(117, 162, 230);
  border-top-width: 0px;
  color: var(--h4-color, rgb(117, 162, 230));
  font-family: var(--h4-font, "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h4-size, 19px);
  letter-spacing: var(--h4-letter-spacing, -0.095px);
  line-height: var(--h4-line-height, 26.6px);
  margin-bottom: calc(var(--p-spacing)*0.5);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: calc(var(--p-spacing)*0.5);
}

html[saved-theme="dark"] body h5 {
  background-color: var( --simple-orange, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(178, 150, 243);
  border-bottom-width: 0px;
  border-left-color: rgb(178, 150, 243);
  border-left-width: 0px;
  border-right-color: rgb(178, 150, 243);
  border-right-width: 0px;
  border-top-color: rgb(178, 150, 243);
  border-top-width: 0px;
  color: var(--h5-color, rgb(178, 150, 243));
  font-family: var(--h5-font, "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h5-size, 17px);
  letter-spacing: var(--h5-letter-spacing, -0.034px);
  line-height: var(--h5-line-height, 25.5px);
  margin-bottom: calc(var(--p-spacing)*0.5);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: calc(var(--p-spacing)*0.5);
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: rgb(234, 165, 248);
  border-bottom-width: 0px;
  border-left-color: rgb(234, 165, 248);
  border-left-width: 0px;
  border-right-color: rgb(234, 165, 248);
  border-right-width: 0px;
  border-top-color: rgb(234, 165, 248);
  border-top-width: 0px;
  color: var(--h6-color, rgb(234, 165, 248));
  font-family: var(--h6-font, "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 8px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(2, 122, 255, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container {
  background-color: var(--scrollbar-active-thumb-bg, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: color-mix(in hsl, var(--tab-color), white 38%);
  font-family: var(--font-family-folder-file-title, "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif);
  font-weight: var(--nav-item-weight, 600);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: color-mix(in hsl, var(--tab-color), white 38%);
  font-family: var(--font-family-folder-file-title, "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif);
  font-weight: var(--nav-item-weight, 600);
}

html[saved-theme="dark"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="dark"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 600);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(138, 138, 138);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(138, 138, 138);
  border-left-width: 0px;
  border-right-color: rgb(138, 138, 138);
  border-right-width: 0px;
  border-top-color: rgb(138, 138, 138);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--icon-color, rgb(138, 138, 138));
}`,
    footer: `html[saved-theme="dark"] body footer {
  --bar-height: calc(22px + var(--bar-vertical-padding));
  background-color: var(--status-bar-bg, rgb(0, 0, 0));
  border-bottom-color: rgb(24, 25, 30);
  border-bottom-width: 1px;
  border-left-color: rgb(24, 25, 30);
  border-left-width: 0px;
  border-right-color: rgb(24, 25, 30);
  border-right-width: 1px;
  border-top-color: rgb(24, 25, 30);
  border-top-left-radius: 7px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(138, 138, 138));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(138, 138, 138);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(198, 198, 198);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(52, 52, 52);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(252, 92, 101);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(52, 52, 52);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(52, 52, 52);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-folder-file, rgb(179, 179, 179));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(52, 52, 52);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(252, 92, 101);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(52, 52, 52);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(52, 52, 52);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--text-folder-file, rgb(179, 179, 179));
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: var(--scrollbar-active-thumb-bg, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(45, 130, 205);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(45, 130, 205);
  border-left-width: 0px;
  border-right-color: rgb(45, 130, 205);
  border-right-width: 0px;
  border-top-color: rgb(45, 130, 205);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--theme-color, rgb(45, 130, 205));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(45, 130, 205);
  stroke: rgb(45, 130, 205);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(138, 138, 138);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(138, 138, 138);
  border-left-width: 0px;
  border-right-color: rgb(138, 138, 138);
  border-right-width: 0px;
  border-top-color: rgb(138, 138, 138);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: rgb(138, 138, 138);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(121, 121, 121));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .canvas-node-file {
  --link-unresolved-decoration-color: var(--unresolved-link, #f08080de);
  background-color: var(--bg-color-highlight-3, rgba(0, 0, 0, 0));
  color: var(--unresolved-link, rgb(198, 198, 198));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(21, 21, 21));
  border-color: rgb(198, 198, 198);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgba(0, 0, 0, 0.2));
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgba(45, 130, 205, 0.1);
  border-color: rgb(74, 74, 74);
  color: var(--table-header-color, rgb(198, 198, 198));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(52, 52, 52);
  border-bottom-width: 0px;
  border-left-color: rgb(52, 52, 52);
  border-left-width: 0px;
  border-right-color: rgb(52, 52, 52);
  border-right-width: 0px;
  border-top-color: rgb(52, 52, 52);
  border-top-width: 0px;
  color: var(--text-muted, rgb(138, 138, 138));
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(138, 138, 138);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 138, 138);
  border-left-width: 0px;
  border-right-color: rgb(138, 138, 138);
  border-right-width: 0px;
  border-top-color: rgb(138, 138, 138);
  border-top-width: 0px;
  color: rgb(138, 138, 138);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(138, 138, 138);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 138, 138);
  border-left-width: 0px;
  border-right-color: rgb(138, 138, 138);
  border-right-width: 0px;
  border-top-color: rgb(138, 138, 138);
  border-top-width: 0px;
  color: rgb(138, 138, 138);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgb(138, 138, 138);
  font-family: var(--metadata-label-font, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgb(138, 138, 138);
  font-family: var(--metadata-input-font, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(52, 52, 52);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(138, 138, 138);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(138, 138, 138);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(208, 64%, 49%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(208, 64%, 49%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(208, 64%, 49%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(208, 64%, 49%, 0.15));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsl(208, 64%, 49%));
  --pill-color-hover: var(--tag-color-hover, hsl(208, 64%, 49%));
  --pill-color-remove: var(--tag-color, hsl(208, 64%, 49%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(208, 64%, 49%));
  background-color: var(--pill-background, rgba(45, 130, 205, 0.1));
  color: var(--pill-color, rgb(45, 130, 205));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(138, 138, 138);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(32, 32, 32));
  color: var(--text-normal, rgb(198, 198, 198));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(21, 21, 21));
  border-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(198, 198, 198);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .navigation-progress {
  --bar-height: calc(22px + var(--bar-vertical-padding));
  background-color: var(--status-bar-bg, rgb(0, 0, 0));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
  color: var(--text-normal, rgb(198, 198, 198));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-size: var(--font-size-file-header-title, 11.7px);
  font-weight: 700;
  line-height: 15.21px;
}

html[saved-theme="dark"] body abbr {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(138, 138, 138);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 138, 138);
  border-left-width: 0px;
  border-right-color: rgb(138, 138, 138);
  border-right-width: 0px;
  border-top-color: rgb(138, 138, 138);
  border-top-width: 0px;
  color: var(--text-normal, rgb(138, 138, 138));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgba(17, 17, 17, 0.55));
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 219, 178);
  border-left-width: 0px;
  border-right-color: rgb(235, 219, 178);
  border-right-width: 0px;
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(235, 219, 178));
  font-family: var(--font-monospace, "??", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
}

html[saved-theme="dark"] body sub {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body summary {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body sup {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(45, 130, 205, 0.1));
  border-bottom-color: rgba(45, 130, 205, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(45, 130, 205, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(45, 130, 205, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(45, 130, 205, 0.15);
  border-top-width: 1px;
  color: var(--tag-color, rgb(45, 130, 205));
}`,
  },
  light: {
    base: `:root:root {
  --Fold0: #fc5c65;
  --Fold1: #fd9644;
  --Fold2: #fed330;
  --Fold3: #26de81;
  --Fold4: #2bcbba;
  --Fold5: #45aaf2;
  --Fold6: #4b7bec;
  --Fold7: #a55eea;
  --Fold8: #d1d8e0;
  --Fold9: #778ca3;
  --FoldA: #eb3b5a;
  --FoldB: #fa8231;
  --FoldC: #f7b731;
  --FoldD: #20bf6b;
  --FoldE: #0fb9b1;
  --FoldF: #2d98da;
  --FoldG: #3867d6;
  --FoldH: #8854d0;
  --FoldI: #a5b1c2;
  --FoldJ: #4b6584;
  --FoldK: #fc5c65;
  --FoldL: #fd9644;
  --FoldM: #fed330;
  --FoldN: #26de81;
  --FoldO: #2bcbba;
  --FoldP: #45aaf2;
  --FoldQ: #4b7bec;
  --FoldR: #a55eea;
  --FoldS: #d1d8e0;
  --FoldT: #778ca3;
  --FoldU: #eb3b5a;
  --FoldV: #fa8231;
  --FoldW: #f7b731;
  --FoldX: #20bf6b;
  --FoldY: #0fb9b1;
  --FoldZ: #2d98da;
  --accent-em: #099d4e;
  --accent-h: 207;
  --accent-l: 54%;
  --accent-l-alt: calc(var(--accent-l)*0.9);
  --accent-s: 77%;
  --accent-strong: #000000;
  --activeline-background: var(--theme-color-translucent-005, hsla(207, 77%, 54%,0.05));
  --admonition-bg-color: #FFFFFF00;
  --aqua: var(--nord8, #88C0D0);
  --background-4-sliding-pane: #ffffffef;
  --background-asymm-split-left: var(--background-secondary-alt, #f3f3f3);
  --background-black-or-white-1: #e4e4e4;
  --background-blockquote: #d5d5d52c;
  --background-blue: #ddebf1;
  --background-brown: #e9e5e3;
  --background-code: #e6e6e671;
  --background-code-2: #cccccc62;
  --background-command-palette-theme-dark-custom: url("https://");
  --background-command-palette-theme-light-custom: url("https://");
  --background-gray: #ebeced;
  --background-green: #ddedea;
  --background-markdown-page-theme-dark-custom: url("https://");
  --background-markdown-page-theme-light-custom: url("https://");
  --background-mobile-drawer-1: #ffffff;
  --background-mobile-drawer-2: #ffffffa1;
  --background-modifier-border: var(--color-base-30, #dddddd);
  --background-modifier-border-1: #e1dfdf;
  --background-modifier-border-asymm: #d8d8d8;
  --background-modifier-border-checkbox: #9c9c9c;
  --background-modifier-border-hr: #bfbfbf;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.08);
  --background-modifier-error: var(--color-red, #e68787);
  --background-modifier-error-hover: var(--color-red, #FF9494);
  --background-modifier-error-rgb: var(--color-red-rgb, 230, 135, 135);
  --background-modifier-form-field: var(--color-base-00, #fff);
  --background-modifier-form-field-highlighted: #fff;
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #fff);
  --background-modifier-success: var(--color-green, #A4E7C3);
  --background-nonoverlapping-note: #ffffff;
  --background-orange: #faebdd;
  --background-panel-page-theme-dark-custom: url("https://");
  --background-panel-page-theme-light-custom: url("https://");
  --background-pink: #f4dfeb;
  --background-popover: var(--color-base-10, #fafafa);
  --background-primary: var(--background-primary-bg-4-bt,#ffffff);
  --background-primary-alt: var(--background-primary-alt-bg-4-bt,#e9e9e9);
  --background-purple: #eae4f2;
  --background-red: #ffe3e3;
  --background-secondary: var(--background-secondary-bg-4-bt,#fcfcfc);
  --background-secondary-alt: var(--background-secondary-alt-bg-4-bt,#f3f3f3);
  --background-secondary-alt-bg-4-bt-publish: #f6f6f6;
  --background-secondary-translucent: #ffffff3d;
  --background-secondary-translucent-1: #ffffff5d;
  --background-settings-workplace-theme-dark-custom: url("https://");
  --background-settings-workplace-theme-light-custom: url("https://");
  --background-titlebar-inner: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 10%);
  --background-transparent-black-or-white-1: #ffffffb0;
  --background-transparent-black-or-white-2: #ffffffca;
  --background-transparent-black-or-white-3: #eeeeee91;
  --background-transparent-black-or-white-3-1: #fafafac3;
  --background-transparent-black-or-white-4: #a7a7a765;
  --background-transparent-black-or-white-5: #f0f0f091;
  --background-transparent-blue: #c6e5ffde;
  --background-waves-color: #4A75DB8C;
  --background-yellow: #fbf3db;
  --bases-cards-cover-background: var(--background-primary-alt, #e9e9e9);
  --bases-cards-radius: var(--radius-m, 7px);
  --bases-embed-border-color: var(--background-modifier-border, #dddddd);
  --bases-embed-border-radius: var(--radius-s, 5px);
  --bases-group-heading-property-color: var(--text-muted, #7f7f7f);
  --bases-table-border-color: var(--table-border-color, #7d7d7d);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #e9e9e9);
  --bases-table-cell-background-selected: var(--table-selection, hsla(207, 77%, 54%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 5px);
  --bases-table-group-background: var(--background-primary-alt, #e9e9e9);
  --bases-table-header-color: var(--text-muted, #7f7f7f);
  --bg-color-highlight-1: #ff000034;
  --bg-color-highlight-2: #0fc41835;
  --bg-color-highlight-3: #4ca6ff51;
  --bg-color-notebook: #FFFFFF00;
  --bg-color-settings-0: #7d7d7d6b;
  --bg-color-settings-0-1: #ffffff77;
  --bg-color-settings-1: #ffffff17;
  --bg-color-settings-2: #ffffff5a;
  --bg-color-settings-3: #ffffffda;
  --bg-color-settings-4: #ffffffd2;
  --bg-color-settings-5: #d4d4d464;
  --bg-color-settings-6: #ffffff85;
  --bg-panel-page-opacity-cp: 0.25;
  --bg-sliding-pane-header: #ffffff97;
  --bg-sliding-pane-leaf: #ffffff88;
  --blockquote-border-color: var(--interactive-accent, hsl(206, 77.77%, 58.05%));
  --blue: var(--nord10, #5e81ac);
  --blue-green: #3bd4da;
  --blur-codebox-frosted-glass: 2;
  --blur-depth: 10px;
  --blur-depth-cp: 10px;
  --blur-p-kanban-frosted-glass: 5;
  --bodyFont: var(--font-text-theme, Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei");
  --bottom-padding-value: 0em;
  --brightness-4-bg: 0.9;
  --brightness-4-bg-cp: 0.9;
  --bt-bubble-background-color: transparent;
  --bt-bubble-border-color: var(--background-modifier-border, #dddddd);
  --bt-bubble-layout-padding: 8px;
  --bt-colorful-indentation-width: 1px;
  --bt-connected-indent-line-color: #FFA8A8;
  --bt-indentation-gradient-color-1: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --bt-indentation-gradient-color-2: transparent;
  --bt-indentation-line-image: url("");
  --bt-indentation-width-hover: 3px;
  --c-1: #da2400;
  --c-2: #ffb623;
  --c-3: #8c6e22;
  --calendar-active-color: var(--theme-color-translucent-02, hsla(207, 77%, 54%,0.2));
  --calendar-hover-color: var(--theme-color-translucent-01, hsla(207, 77%, 54%,0.1));
  --calendar-today-background-color: #aaeec6;
  --calendar-week-background-color: #d6e6bf;
  --calendar-week-color: #48b432;
  --calendar-week-hover: #e9ffe3;
  --callout-bug: var(--callout-bug, 233, 49, 71);
  --callout-default: var(--callout-default, 8, 109, 221);
  --callout-error: var(--callout-error, 233, 49, 71);
  --callout-example: var(--callout-example, 120, 82, 238);
  --callout-fail: var(--callout-fail, 233, 49, 71);
  --callout-info: var(--callout-info, 8, 109, 221);
  --callout-question: var(--callout-question, 236, 117, 0);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 5px);
  --callout-success: var(--callout-success, 8, 185, 78);
  --callout-summary: var(--callout-summary, 0, 191, 188);
  --callout-tip: var(--callout-tip, 0, 191, 188);
  --callout-todo: var(--callout-todo, 8, 109, 221);
  --callout-warning: var(--callout-warning, 236, 117, 0);
  --canvas-card-label-color: var(--text-faint, #7f7f7f);
  --canvas-card-opacity: 0.1;
  --canvas-controls-radius: var(--radius-s, 5px);
  --cards-width: 138px;
  --caret-color: var(--text-normal, #0e0e0e);
  --checkbox-border-color: var(--text-faint, #7f7f7f);
  --checkbox-border-color-hover: var(--text-muted, #7f7f7f);
  --checkbox-color: var(--interactive-accent, hsl(206, 77.77%, 58.05%));
  --checkbox-color-0: #2f92e4;
  --checkbox-color-1: #c4c116;
  --checkbox-color-2: #4bbf40;
  --checkbox-color-3: #ffe9e9;
  --checkbox-color-4: #fff8b7;
  --checkbox-color-5: #ad7fbf;
  --checkbox-color-6: #5f5f5f;
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(204, 78.54%, 62.1%));
  --checkbox-radius: var(--radius-s, 5px);
  --checkbox-size: var(--font-text-size, 0.9rem);
  --checklist-bg: #dfdfdf8e;
  --checklist-bg-hover: #ffffffcc;
  --checklist-color-1: #bbdefbab;
  --checklist-color-2: #b2ebf2ab;
  --checklist-color-3: #c8e6c9ab;
  --checklist-color-4: #f8ef99ab;
  --checklist-color-5: #ffe0b2ab;
  --checklist-color-6: #ffcdd2ab;
  --checklist-color-7: #e1bee7ab;
  --checklist-done-color: var(--text-muted, #7f7f7f);
  --clickable-icon-radius: var(--radius-s, 5px);
  --cloze-bg-color: var(--accent-strong, #000000);
  --cloze-bg-color-3: transparent;
  --cloze-decoration: none;
  --cloze-decoration-2: dashed;
  --cloze-decoration-3: dashed;
  --cloze-decoration-color: red;
  --cloze-decoration-color-2: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --cloze-decoration-color-3: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --code-active-line-background-color: var(--activeline-background, hsla(207, 77%, 54%,0.05));
  --code-atom: var(--orange-1, #cc7523);
  --code-attribute: var(--code-function, #BF616A);
  --code-attribute-in-comment: #c792ea;
  --code-background: var(--background-code, #e6e6e671);
  --code-border-color: var(--background-modifier-border, #dddddd);
  --code-bracket: #ff5370;
  --code-builtin: #ffcb6b;
  --code-callee: #89ddff;
  --code-comment: var(--darkgreen, #068a5e);
  --code-def: #82aaff;
  --code-definition: #82aaff;
  --code-error-bg: #ff5370;
  --code-function: var(--red, #BF616A);
  --code-header: #da7dae;
  --code-hr: var(--code-punctuation, #7f7f7f);
  --code-important: var(--blue-green, #3bd4da);
  --code-keyword: var(--blue-green, #3bd4da);
  --code-language: var(--text-muted, #7f7f7f);
  --code-link: #696d70;
  --code-matching-bracket: #ffffff;
  --code-meta: var(--text-faint, #7f7f7f);
  --code-normal: var(--text-normal, #000000);
  --code-number: #ff5370;
  --code-operator: var(--code-property, #5e81ac);
  --code-property: var(--blue, #5e81ac);
  --code-punctuation: var(--text-muted, #7f7f7f);
  --code-qualifier: var(--aqua, #88C0D0);
  --code-radius: var(--radius-s, 5px);
  --code-selection-background: var(--text-selection, #a9d1c859);
  --code-selection-color: var(--code-normal, #000000);
  --code-string-2: var(--orange-1, #cc7523);
  --code-tag: var(--purple, #c74df7);
  --code-tag-in-comment: #ff5370;
  --code-type: var(--code-function, #BF616A);
  --code-value: var(--green, #A3BE8C);
  --code-variable: #f07178;
  --code-variable-2: var(--light-purple, #b74ff3);
  --code-variable-3: #e7852fe7;
  --collapse-icon-color: var(--text-faint, #7f7f7f);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(207, 77%, 54%));
  --color-highlight-1: var(--text-normal, #0e0e0e);
  --color-highlight-2: var(--text-normal, #0e0e0e);
  --color-highlight-3: var(--text-normal, #0e0e0e);
  --color-view-header-gradient-1: #ffffffce;
  --color-view-header-gradient-2: #ffffffce;
  --colorA: rgba(152, 0, 240, 0.13);
  --colorB: rgba(0, 72, 240, 0.13);
  --colorC: rgba(0, 240, 44, 0.13);
  --cursor-blue: #1791e2;
  --cursor-green: #008000;
  --cursor-red: #ff0000;
  --cursor-violet: #ee82ee;
  --cursor-yellow: #d5ca00;
  --custom-titlebar-bg: var(--background-secondary-alt, #f3f3f3);
  --dark: var(--text-normal, var(--color-base-100, #0e0e0e));
  --darkblue: #3b84e4;
  --darkgray: var(--text-normal, var(--color-base-100, #0e0e0e));
  --darkgreen: #068a5e;
  --day-planner-dot: #ffd900;
  --day-planner-item-hover: #8fccff;
  --day-planner-line: #ffd900;
  --day-planner-pie: #eca95c;
  --day-planner-timeline: #d62f2f;
  --divider-color: var(--background-modifier-border, #e3e3e3);
  --divider-color-hover: var(--interactive-accent, hsl(206, 77.77%, 58.05%));
  --dotted-notebook-dot-color: #c7c7c780;
  --dropdown-background: var(--interactive-normal, #efefef);
  --dropdown-background-hover: var(--interactive-hover, #e6e6e6);
  --embed-color: hsla(calc(var(--accent-h)*1),calc(var(--accent-s)*0.8),calc(var(--accent-l)*1),0.035);
  --embed-content-height: 600px;
  --event-item-color1: #65ace6;
  --event-item-color10: #072f6b;
  --event-item-color2: #52a4e7;
  --event-item-color3: #2e96eb;
  --event-item-color4: #2786da;
  --event-item-color5: #1275cc;
  --event-item-color6: #2664c0;
  --event-item-color7: #1652ac;
  --event-item-color8: #0c469c;
  --event-item-color9: #0a3c86;
  --external-link-color: var(--internal-link-color, hsl(207, 77%, 54%));
  --fancy-cursor-width: 2px;
  --fancy-hr-icon: '😀';
  --fancy-hr-rotate: 0deg;
  --file-header-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --file-line-width: 45rem;
  --flair-background: var(--interactive-normal, #efefef);
  --flair-color: var(--text-normal, #0e0e0e);
  --folder-title: #000000;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-family-better-footnote: Arlrdbd, "Source Han Sans", "Segoe UI Emoji";
  --font-family-folder-file-title: var(--font-text-override),Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: var(--font-monospace-override), var(--font-monospace-theme);
  --font-family-special-tag: "Lucida Handwriting", "Segoe UI Emoji";
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", var(--font-interface);
  --font-family-tag: Bookerly, 'Inter', "Segoe UI", "Microsoft YaHei", STzhongsong, STSong, "Segoe UI Emoji", Serif;
  --font-family-vault: "Lucida Handwriting", "Segoe UI Emoji";
  --font-loading-text: var(--font-monospace-theme, 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace);
  --font-mermaid: var(--font-text, Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --font-monospace-theme: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-size-better-footnote: 1.3em;
  --font-size-checklist: 0.85em;
  --font-size-cloze: 0.9375em;
  --font-size-code: 0.825em;
  --font-size-edit-blockquote: 1em;
  --font-size-edit-normal: 1em;
  --font-size-embed-file: 1.25em;
  --font-size-embed-title-size: 1.3em;
  --font-size-emoji-after-tag: 1.5625em;
  --font-size-file-header-title: 0.9em;
  --font-size-file-header-title-andy-plugin: 1em;
  --font-size-folder-and-file: 0.9em;
  --font-size-latex: 1em;
  --font-size-list: 1em;
  --font-size-loading-add: 1.5em;
  --font-size-loading-diy-text: 3em;
  --font-size-obsidian-titlebar: 13px;
  --font-size-outline: var(--nav-item-size, 13px);
  --font-size-preview-blockquote: 1em;
  --font-size-preview-normal: 1em;
  --font-size-split: 0.85em;
  --font-size-tag: 0.85em;
  --font-size-vault-name: 1em;
  --font-style-em: italic;
  --font-text-theme: Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei";
  --font-weight-highlight-1: normal;
  --font-weight-highlight-2: normal;
  --font-weight-highlight-3: normal;
  --font-weight-inline-code: bold;
  --font-weight-strong: bold;
  --footnote-divider-color: var(--metadata-divider-color, #dddddd);
  --footnote-id-color: var(--text-muted, #7f7f7f);
  --footnote-id-color-no-occurrences: var(--text-faint, #7f7f7f);
  --footnote-radius: var(--radius-s, 5px);
  --graph-arrow: #e25300;
  --graph-attach: #afcfe0cc;
  --graph-canvas-bg: var(--background-primary, #ffffff);
  --graph-circle: #1f78b4cc;
  --graph-circle-fill-highlight: var(--interactive-accent, hsl(206, 77.77%, 58.05%));
  --graph-circle-outline: transparent;
  --graph-control-bg: #ffffff9a;
  --graph-line-fill-highlight: rgb(var(--interactive-accent-rgb));
  --graph-node: var(--text-muted, #7f7f7f);
  --graph-node-focused: var(--text-accent, hsl(207, 77%, 54%));
  --graph-node-unresolved: var(--text-faint, #7f7f7f);
  --graph-tag: #77d425cc;
  --graph-text: var(--text-normal, #0e0e0e);
  --graph-text-color: #696969;
  --graph-unresolved: #db4e4ecc;
  --gray: var(--text-muted, var(--color-base-70, #7f7f7f));
  --gray-1: #383a42;
  --gray-2: #383a42;
  --green: var(--nord14, #A3BE8C);
  --green-1: #3dc730;
  --grid-notebook-line-color-1: #c7c7c740;
  --grid-notebook-line-color-2: #afafaf40;
  --h1-bg-color: color-mix(in srgb, var(--h1-color) 15%, transparent);
  --h1-color: var(--print-h1-color,hsl(216, 88%, 26%));
  --h1-font: var(--font-text),var(--font-default);
  --h1-size: 1.5625em;
  --h2-bg-color: color-mix(in srgb, var(--h2-color) 15%, transparent);
  --h2-color: var(--print-h2-color,hsl(212, 100%, 33%));
  --h2-font: var(--font-text),var(--font-default);
  --h2-size: 1.4375em;
  --h3-bg-color: color-mix(in srgb, var(--h3-color) 15%, transparent);
  --h3-color: var(--print-h3-color,hsl(210, 86%, 39%));
  --h3-font: var(--font-text),var(--font-default);
  --h3-size: 1.3125em;
  --h4-bg-color: color-mix(in srgb, var(--h4-color) 15%, transparent);
  --h4-color: var(--print-h4-color,hsl(208, 58%, 49%));
  --h4-font: var(--font-text),var(--font-default);
  --h4-size: 1.1875em;
  --h5-bg-color: color-mix(in srgb, var(--h5-color) 15%, transparent);
  --h5-color: var(--print-h5-color,hsl(209, 70%, 62%));
  --h5-size: 1.0625em;
  --h6-bg-color: color-mix(in srgb, var(--h6-color) 15%, transparent);
  --h6-color: var(--print-h6-color,hsl(209, 65%, 72%));
  --he-title-bar-active-action: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --he-title-bar-active-bg: var(--theme-color-translucent-005, hsla(207, 77%, 54%,0.05));
  --he-title-bar-active-fg: var(--text-normal, #0e0e0e);
  --he-title-bar-active-pinned-bg: var(--theme-color-translucent-005, hsla(207, 77%, 54%,0.05));
  --he-title-bar-inactive-action: var(--text-normal, #0e0e0e);
  --he-title-bar-inactive-bg: var(--theme-color-translucent-001, hsla(207, 77%, 54%,0.01));
  --he-title-bar-inactive-fg: var(--text-muted, #7f7f7f);
  --he-title-bar-inactive-pinned-bg: var(--theme-color-translucent-001, hsla(207, 77%, 54%,0.01));
  --headerFont: var(--font-text-theme, Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei");
  --heading-formatting: var(--text-faint, #7f7f7f);
  --hibox: 24px;
  --highlight: var(--text-highlight-bg, hsla(var(--text-highlight-bg-h-light), var(--text-highlight-bg-s-light), var(--text-highlight-bg-l-light), var(--text-highlight-bg-a-light)));
  --hr-color: var(--background-modifier-border, #dddddd);
  --hr-color-1: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --hr-color-2: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --hr-color-3: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --hr-color-4: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --hr-color-icon-1: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --hr-color-icon-2: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --hr-color-icon-3: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --hr-color-icon-4: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --hr-color-numbers-bg-color: var(--theme-color-translucent-015, hsla(207, 77%, 54%,0.15));
  --hr-color-numbers-color: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --hr-color-numbers-line-1: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --hr-color-numbers-line-2: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --hr-color-numbers-line-3: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --hr-color-numbers-line-4: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --hr-numbers-text-fill: transparent;
  --hr-numbers-text-stroke: var(--text-normal, #0e0e0e);
  --icon-color: var(--text-muted, #7f7f7f);
  --icon-color-active: var(--text-accent, hsl(207, 77%, 54%));
  --icon-color-focused: var(--text-normal, #0e0e0e);
  --icon-color-hover: var(--text-muted, #7f7f7f);
  --image-max-width: 100%;
  --inline-title-bg-color: color-mix(in srgb, var(--h1-color) 15%, transparent);
  --inline-title-color: var(--h1-color, hsl(216, 88%, 26%));
  --inline-title-font: var(--h1-font, Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --inline-title-size: var(--h1-size, 1.5625em);
  --input-date-separator: var(--text-faint, #7f7f7f);
  --input-placeholder-color: var(--text-faint, #7f7f7f);
  --interactive-accent: var(--color-accent-1, hsl(206, 77.77%, 58.05%));
  --interactive-accent-hover: var(--color-accent-2, hsl(204, 78.54%, 62.1%));
  --interactive-accent-hsl: var(--color-accent-hsl, 207, 77%, 54%);
  --interactive-accent-rgb: 70, 142, 235;
  --interactive-hover: var(--color-base-10, #e6e6e6);
  --interactive-normal: var(--color-base-00, #efefef);
  --internal-link-color: var(--text-accent, hsl(207, 77%, 54%));
  --letter-space-code: 0;
  --letter-space-main: 0;
  --light: var(--background-primary, var(--background-primary-bg-4-bt,#ffffff));
  --light-purple: #b74ff3;
  --light-yellow: #ab9a02;
  --lightgray: var(--background-secondary, var(--background-secondary-bg-4-bt,#fcfcfc));
  --line-height-list: 2;
  --line-height-main: 1.5;
  --line-height-split: 1.3;
  --link-color: var(--text-accent, hsl(207, 77%, 54%));
  --link-color-hover: var(--text-accent-hover, hsl(204, 78.54%, 62.1%));
  --link-external-color: var(--text-accent, hsl(207, 77%, 54%));
  --link-external-color-hover: var(--text-accent-hover, hsl(204, 78.54%, 62.1%));
  --link-unresolved-color: var(--text-accent, hsl(207, 77%, 54%));
  --link-unresolved-decoration-color: var(--graph-unresolved, #db4e4ecc);
  --list-colorful-marker: #fd4949;
  --list-marker-color: var(--text-faint, #7f7f7f);
  --list-marker-color-collapsed: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --list-marker-color-hover: var(--text-muted, #7f7f7f);
  --list-ol-block-color: #3573a5;
  --list-ol-hover: #2c7bd6;
  --list-ol-marker-1: decimal;
  --list-ol-marker-2: lower-latin;
  --list-ol-marker-3: lower-roman;
  --list-ol-marker-4: decimal;
  --list-ol-number-color: var(--list-marker-color, #7f7f7f);
  --list-spacing-bt: 1;
  --list-ul-block-color: #b9751b;
  --list-ul-colorful-marker-content: '\\2022';
  --list-ul-disc-color: #f39c55;
  --list-ul-hover: #dd922f;
  --list-ul-marker-1: '\\2022';
  --list-ul-marker-2: '\\25E6';
  --list-ul-marker-3: '\\25AA';
  --list-ul-marker-4: '\\25E6';
  --list-ul-marker-color: var(--list-marker-color, #7f7f7f);
  --loading-add-text-color: #d47e86;
  --loading-add-text-color-alt: #a4e39c;
  --loading-diy-text: "快乐摸鱼又一天，人生还剩多少天？";
  --loading-diy-text-color: var(--text-normal, #0e0e0e);
  --loading-page-custom-gif-caption: " ";
  --loading-page-custom-gif-caption-alt: " ";
  --loading-page-custom-gif-url: url(https://);
  --loading-text-after: "✿❀";
  --loading-text-before: "❀✿";
  --mark-highlight-strong-em: #ff880049;
  --matrix-1: var(--p-kanban-color-2, #7cdddd65);
  --matrix-2: var(--p-kanban-color-3, #8ce38465);
  --matrix-4: var(--p-kanban-color-5, #eeb36f65);
  --matrix-5: var(--p-kanban-color-6, #f18e8e65);
  --menu-background: var(--background-secondary, #fcfcfc);
  --menu-radius: var(--radius-m, 7px);
  --mermaid-active-task-color: #44bbff;
  --mermaid-font-family: Segoe UI, "Microsoft YaHei", "Segoe UI Emoji", "trebuchet ms", verdana, Arial, cursive;
  --mermaid-seq-dia-color: #76c8ff;
  --metadata-border-color: var(--background-modifier-border, #dddddd);
  --metadata-divider-color: var(--background-modifier-border, #dddddd);
  --metadata-input-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --metadata-input-text-color: var(--text-normal, #0e0e0e);
  --metadata-label-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --metadata-label-text-color: var(--text-muted, #7f7f7f);
  --metadata-label-text-color-hover: var(--text-muted, #7f7f7f);
  --mjx-inline-math-color: var(--text-normal, #0e0e0e);
  --mjx-math-color: var(--text-normal, #0e0e0e);
  --modal-radius: var(--radius-l, 15px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #7f7f7f);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #7f7f7f);
  --nav-heading-color: var(--text-normal, #0e0e0e);
  --nav-heading-color-collapsed: var(--text-faint, #7f7f7f);
  --nav-heading-color-collapsed-hover: var(--text-muted, #7f7f7f);
  --nav-heading-color-hover: var(--text-normal, #0e0e0e);
  --nav-item-color: var(--text-muted, #7f7f7f);
  --nav-item-color-active: var(--text-normal, #0e0e0e);
  --nav-item-color-highlighted: var(--text-accent, hsl(207, 77%, 54%));
  --nav-item-color-hover: var(--text-normal, #0e0e0e);
  --nav-item-color-selected: var(--text-normal, #0e0e0e);
  --nav-item-radius: var(--radius-s, 5px);
  --nav-tag-color: var(--text-faint, #7f7f7f);
  --nav-tag-color-active: var(--text-muted, #7f7f7f);
  --nav-tag-color-hover: var(--text-muted, #7f7f7f);
  --nav-tag-radius: var(--radius-s, 5px);
  --nord0: #2E3440;
  --nord1: #3B4252;
  --nord1-1: #3B425251;
  --nord10: #5e81ac;
  --nord11: #BF616A;
  --nord11-1: #BF616A4b;
  --nord12: #D08770;
  --nord13: #EBCB8B;
  --nord13-0: #e2b65e;
  --nord13-1: #ebca894b;
  --nord14: #A3BE8C;
  --nord14-0: #95b677;
  --nord15: #B48EAD;
  --nord2: #434C5E;
  --nord3: #4C566A;
  --nord3-1: #717a91;
  --nord4: #d8dee9;
  --nord4-1: #d8dee95c;
  --nord5: #E5E9F0;
  --nord5-1: #E5E9F053;
  --nord6: #ECEFF4;
  --nord6-1: #ECEFF46c;
  --nord6-2: #ECEFF43c;
  --nord7: #8fbcbb;
  --nord7-transparent: #8fbcbb2f;
  --nord8: #88C0D0;
  --nord8-0: #65afc4;
  --nord9: #81a1c1;
  --nord9-1: #81a1c16c;
  --nord9-2: #81a1c13c;
  --note-cloze: #000000;
  --note-important: #fd4141;
  --opacity-cp: 0.25;
  --orange: #db9600;
  --orange-1: #cc7523;
  --p-kanban-bg-color: #d3d3d32d;
  --p-kanban-border-color: #a0a0a060;
  --p-kanban-card-color-1: #ffffff80;
  --p-kanban-card-color-2: #ffffff;
  --p-kanban-color-1: #52aaf365;
  --p-kanban-color-2: #7cdddd65;
  --p-kanban-color-3: #8ce38465;
  --p-kanban-color-4: #d1d77f65;
  --p-kanban-color-5: #eeb36f65;
  --p-kanban-color-6: #f18e8e65;
  --p-kanban-color-7: #e677e065;
  --p-kanban-color-8: #ba8be165;
  --p-kanban-color-shadow: #cfcfcf4d;
  --p-kanban-color-simple: #cdcdcd2c;
  --page-border-bottom: var(--background-secondary-alt, #f3f3f3);
  --panel-border-color: #dbdbdc;
  --paragraph-spacing: 1;
  --pill-border-color: var(--background-modifier-border, #dddddd);
  --pill-color: var(--text-muted, #7f7f7f);
  --pill-color-hover: var(--text-normal, #0e0e0e);
  --pill-color-remove: var(--text-faint, #7f7f7f);
  --pill-color-remove-hover: var(--text-accent, hsl(207, 77%, 54%));
  --pixel: 20px;
  --popover-height-factor: 1;
  --popover-width-factor: 1;
  --print-em-color: var(--accent-em, #099d4e);
  --prompt-box-shadow: #bebebe;
  --purple: #c74df7;
  --radius-l: 15px;
  --radius-m: 7px;
  --radius-s: 5px;
  --radius-xs: 3px;
  --red: var(--nord11, #BF616A);
  --red-1: #f16464f5;
  --ribbon-background: var(--background-secondary-alt, #f3f3f3);
  --ribbon-background-collapsed: var(--background-secondary-alt, #f3f3f3);
  --saturate-4-bg: 1;
  --saturate-4-bg-cp: 1;
  --scrollbar-radius: var(--radius-l, 15px);
  --search-clear-button-color: var(--text-muted, #7f7f7f);
  --search-icon-color: var(--text-muted, #7f7f7f);
  --search-result-file-matched-bg: #ffd9d9e5;
  --search-result-file-title-color: var(--text-normal, #0e0e0e);
  --search-text: #000000;
  --secondary: var(--text-accent, var(--color-accent, hsl(207, 77%, 54%)));
  --setting-group-heading-color: var(--text-normal, #0e0e0e);
  --setting-items-background: var(--background-primary-alt, #e9e9e9);
  --setting-items-border-color: var(--background-modifier-border, #dddddd);
  --setting-items-radius: var(--radius-l, 15px);
  --share-card-background-opacity-cp: 0.6;
  --share-thino-background-dark-custom: url("https://");
  --share-thino-background-light-custom: url("https://");
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #7f7f7f);
  --shiki-code-background: var(--code-background, #e6e6e671);
  --shiki-code-block-border-radius: var(--code-radius, 5px);
  --shiki-code-comment: var(--text-faint, #7f7f7f);
  --shiki-code-normal: var(--text-muted, #7f7f7f);
  --shiki-code-punctuation: var(--text-muted, #7f7f7f);
  --shiki-gutter-border-color: var(--background-modifier-border, #dddddd);
  --shiki-gutter-text-color: var(--text-faint, #7f7f7f);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #7f7f7f);
  --shiki-highlight-neutral: var(--shiki-code-normal, #7f7f7f);
  --shiki-terminal-dots-color: var(--text-faint, #7f7f7f);
  --simple-black-1: hsla(0, 0%, 13%, 1);
  --simple-black-2: hsla(220, 20%, 35%, 1);
  --simple-blue-1: hsla(209, 95%, 62%, 1);
  --simple-blue-2: hsla(209, 85%, 72%, 0.5);
  --simple-blue-3: hsla(245, 60%, 67%, 1);
  --simple-blue-4: hsla(209, 20%, 66%, 0.62);
  --simple-gray-1: hsla(0, 0%, 33%, 1);
  --simple-gray-2: hsla(210, 15%, 70%, 0.2);
  --simple-gray-3: hsla(210, 15%, 20%, 0.2);
  --simple-gray-4: hsla(210, 6%, 38%, 0.5);
  --simple-gray-5: hsla(207, 17%, 90%, 1);
  --simple-gray-6: hsla(217, 15%, 83%, 1);
  --simple-gray-7: hsla(217, 15%, 83%, 0.7);
  --simple-orange: hsla(25, 75%, 65%, 1);
  --simple-red-1: hsla(365, 90%, 62%, 1);
  --simple-red-2: hsl(365, 95%, 85%, 1);
  --simple-red-3: hsl(365, 85%, 45%, 1);
  --simple-tran: hsla(204, 45%, 97%, 0);
  --simple-white-1: hsla(204, 45%, 97%, 1);
  --simple-white-2: hsla(210, 45%, 95%, 1);
  --simple-white-3: hsla(212, 17%, 80%, 0.2);
  --simple-white-4: hsla(180, 33%, 99%, 1);
  --simple-white-5: hsla(207, 10%, 90%, 0.1);
  --simple-white-6: hsla(212, 17%, 80%, 0.3);
  --simple-yellow: hsla(60, 100%, 50%, 0.4);
  --slider-track-background: var(--background-modifier-border, #dddddd);
  --sliding-panes-header-color: #0e64bb;
  --stack-tabs-background-blur-depth: 40px;
  --stag1: #fa8787;
  --stag1-bg: #eb2727;
  --stag2: #fdbd5c;
  --stag2-bg: #ee9002;
  --stag3: #50ce3a;
  --stag3-bg: #22ac09;
  --status-bar-background: var(--background-secondary, #fcfcfc);
  --status-bar-bg: var(--background-secondary-alt, #f3f3f3);
  --status-bar-border-color: var(--divider-color, #e3e3e3);
  --status-bar-radius: var(--radius-m, 7px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #7f7f7f);
  --stickies-color-1: #b3e2b3;
  --stickies-color-2: #e9c6f1;
  --stripe-notebook-stripe-color: #f5f2e6;
  --strong-em-color-1: #1048ff;
  --strong-em-color-2: #14c8ff;
  --strong-em-highlight-color: #237add;
  --tab-container-background: var(--background-secondary, #fcfcfc);
  --tab-outline-color: var(--divider-color, #e3e3e3);
  --tab-radius: var(--radius-s, 5px);
  --tab-stacked-shadow: #d6d6d6;
  --tab-switcher-background: var(--background-secondary, #fcfcfc);
  --tab-text-color: var(--text-faint, #7f7f7f);
  --tab-text-color-active: var(--text-muted, #7f7f7f);
  --tab-text-color-focused: var(--text-muted, #7f7f7f);
  --tab-text-color-focused-active: var(--text-muted, #7f7f7f);
  --tab-text-color-focused-active-current: var(--text-normal, #0e0e0e);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(207, 77%, 54%));
  --table-add-button-border-color: var(--background-modifier-border, #dddddd);
  --table-background-color: #f1f1f176;
  --table-background-color-odd: #ffffff70;
  --table-border-color: var(--background-modifier-border, #7d7d7d);
  --table-color-calendar-2: rgb(167, 223, 251);
  --table-color-rgb: 167, 223, 251;
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(206, 77.77%, 58.05%));
  --table-drag-handle-color: var(--text-faint, #7f7f7f);
  --table-drag-handle-color-active: var(--text-on-accent, #ffffff);
  --table-header-border-color: var(--table-border-color, #7d7d7d);
  --table-header-color: var(--text-normal, #0e0e0e);
  --table-hover-color: #5dacec34;
  --table-hover-raw-color: #85bfee2f;
  --table-hover-thead-color: #ddefff;
  --table-selection-border-color: var(--interactive-accent, hsl(206, 77.77%, 58.05%));
  --table-text-size: calc(var(--font-text-size)*0.9375);
  --table-thead-background-color: var(--theme-color-translucent-01, hsla(207, 77%, 54%,0.1));
  --tag-border-width: 1px;
  --tag-color: var(--text-accent, hsl(207, 77%, 54%));
  --tag-color-hover: var(--text-accent, hsl(207, 77%, 54%));
  --tag-dailynote: #0077ff;
  --tag-dailynote-bg: #277CDD;
  --tag-ideas: #ceb900;
  --tag-ideas-bg: #444444d8;
  --tag-questions: #b68fff;
  --tag-questions-bg: #b085ff;
  --tag-text: #f8f8f8;
  --tag-weeklynote: #4b9fff;
  --tag-weeklynote-bg: #6aafff;
  --tag1: #2573f0;
  --tag2: #2193f0;
  --tag3: #17a5e7;
  --tag4: #14acc7;
  --tag5: #10bdbd;
  --tape-color: #acacac65;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(204, 78.54%, 62.1%)));
  --text-accent: var(--color-accent, hsl(207, 77%, 54%));
  --text-accent-hover: var(--color-accent-2, hsl(204, 78.54%, 62.1%));
  --text-blue: #0083bb;
  --text-brown: #855a46;
  --text-checked-checkbox: #9b9b9b;
  --text-color-code: #e95d00;
  --text-error: var(--color-red, #e75545);
  --text-error-hover: #f86959;
  --text-faint: var(--color-base-50, #7f7f7f);
  --text-folder-file: #272727;
  --text-folder-file-icon: var(--theme-color, hsl(206, 77.77%, 58.05%));
  --text-gray: #37352f99;
  --text-green: #00927f;
  --text-highlight: var(--text-normal, #0e0e0e);
  --text-highlight-bg: hsla(var(--text-highlight-bg-h-light), var(--text-highlight-bg-s-light), var(--text-highlight-bg-l-light), var(--text-highlight-bg-a-light));
  --text-highlight-bg-a-dark: 0.541;
  --text-highlight-bg-a-light: 0.847;
  --text-highlight-bg-h-dark: 57;
  --text-highlight-bg-h-light: 34;
  --text-highlight-bg-l-dark: 38%;
  --text-highlight-bg-l-light: 80%;
  --text-highlight-bg-s-dark: 40%;
  --text-highlight-bg-s-light: 100%;
  --text-muted: var(--color-base-70, #7f7f7f);
  --text-normal: var(--color-base-100, #0e0e0e);
  --text-on-accent: #ffffff;
  --text-orange: #d9730d;
  --text-pink: #c40075;
  --text-purple: #5d1fb9;
  --text-red: #ff4343;
  --text-search-highlight-bg: #ffd1dd;
  --text-yellow: #d4a300;
  --text-yellow-2: #a78000;
  --textHighlight: var(--text-highlight-bg, hsla(var(--text-highlight-bg-h-light), var(--text-highlight-bg-s-light), var(--text-highlight-bg-l-light), var(--text-highlight-bg-a-light)));
  --theme-color: var(--interactive-accent, hsl(206, 77.77%, 58.05%));
  --theme-color-translucent-001: hsla(var(--interactive-accent-hsl),0.01);
  --theme-color-translucent-005: hsla(var(--interactive-accent-hsl),0.05);
  --theme-color-translucent-01: hsla(var(--interactive-accent-hsl),0.1);
  --theme-color-translucent-015: hsla(var(--interactive-accent-hsl),0.15);
  --theme-color-translucent-02: hsla(var(--interactive-accent-hsl),0.2);
  --theme-color-translucent-04: hsla(var(--interactive-accent-hsl),0.4);
  --theme-color-translucent-06: hsla(var(--interactive-accent-hsl),0.6);
  --thino-background-dark-custom: url("https://");
  --thino-background-light-custom: url("https://");
  --titleFont: var(--font-text-theme, Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei");
  --titlebar-background: var(--background-secondary, #fcfcfc);
  --titlebar-background-focused: var(--background-secondary-alt, #f3f3f3);
  --titlebar-blur-depth: 8px;
  --titlebar-border-color: var(--background-modifier-border, #dddddd);
  --titlebar-brightness: 1;
  --titlebar-text-color: var(--text-muted, #7f7f7f);
  --titlebar-text-color-focused: var(--text-normal, #0e0e0e);
  --unresolved-link: var(--graph-unresolved, #db4e4ecc);
  --variable-2: #0072d0;
  --variable-3: #5a96f7;
  --vault-profile-color: var(--text-normal, #0e0e0e);
  --vault-profile-color-hover: var(--vault-profile-color, #0e0e0e);
  --white: #ffffff;
  --window-radius: 8px;
  --window-shadow: 0 1px 3px hsla(212, 17%, 80%, 0.2);
  --window-shadow2: 0 0 9px hsla(217, 15%, 83%, 0.7);
  --yellow: #e48100;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #fcfcfc);
  background-color: var(--background-secondary-alt, rgba(0, 0, 0, 0));
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(252, 252, 252));
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(227, 227, 227);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #fcfcfc);
  background-color: var(--background-secondary-alt, rgb(243, 243, 243));
  border-left-color: rgb(227, 227, 227);
  border-left-width: 0px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body html {
  --background-code: #292d3e;
  --button-radius: 4px;
  --cards-width: 138px;
  --code-atom: #f78c6c;
  --code-attribute: #c792ea;
  --code-attribute-in-comment: #c792ea;
  --code-bracket: #ff5370;
  --code-builtin: #ffcb6b;
  --code-callee: #89ddff;
  --code-comment: #676e95;
  --code-def: #82aaff;
  --code-definition: #82aaff;
  --code-error-bg: #ff5370;
  --code-header: #da7dae;
  --code-hr: #98e342;
  --code-keyword: #c792ea;
  --code-link: #696d70;
  --code-matching-bracket: #ffffff;
  --code-meta: #ffcb6b;
  --code-normal: #d4d4d4;
  --code-number: #ff5370;
  --code-operator: #89ddff;
  --code-property: #c792ea;
  --code-qualifier: #decb6b;
  --code-string: #c3e88d;
  --code-string-2: #f07178;
  --code-tag: #ff5370;
  --code-tag-in-comment: #ff5370;
  --code-type: #decb6b;
  --code-variable: #f07178;
  --code-variable-2: #53ada3;
  --code-variable-3: #e7852fe7;
  --colorA: rgba(152, 0, 240, 0.13);
  --colorB: rgba(0, 72, 240, 0.13);
  --colorC: rgba(0, 240, 44, 0.13);
  --hibox: 24px;
  --simple-black-1: hsla(0, 0%, 13%, 1);
  --simple-black-2: hsla(220, 20%, 35%, 1);
  --simple-blue-1: hsla(209, 95%, 62%, 1);
  --simple-blue-2: hsla(209, 85%, 72%, 0.5);
  --simple-blue-3: hsla(245, 60%, 67%, 1);
  --simple-blue-4: hsla(209, 20%, 66%, 0.62);
  --simple-gray-1: hsla(0, 0%, 33%, 1);
  --simple-gray-2: hsla(210, 15%, 70%, 0.2);
  --simple-gray-3: hsla(210, 15%, 20%, 0.2);
  --simple-gray-4: hsla(210, 6%, 38%, 0.5);
  --simple-gray-5: hsla(207, 17%, 90%, 1);
  --simple-gray-6: hsla(217, 15%, 83%, 1);
  --simple-gray-7: hsla(217, 15%, 83%, 0.7);
  --simple-orange: hsla(25, 75%, 65%, 1);
  --simple-red-1: hsla(365, 90%, 62%, 1);
  --simple-red-2: hsl(365, 95%, 85%, 1);
  --simple-red-3: hsl(365, 85%, 45%, 1);
  --simple-tran: hsla(204, 45%, 97%, 0);
  --simple-white-1: hsla(204, 45%, 97%, 1);
  --simple-white-2: hsla(210, 45%, 95%, 1);
  --simple-white-3: hsla(212, 17%, 80%, 0.2);
  --simple-white-4: hsla(180, 33%, 99%, 1);
  --simple-white-5: hsla(207, 10%, 90%, 0.1);
  --simple-white-6: hsla(212, 17%, 80%, 0.3);
  --simple-yellow: hsla(60, 100%, 50%, 0.4);
  --window-radius: 8px;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--accent-strong, rgb(0, 0, 0));
  font-family: var(--font-family-strong, Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-weight: var(--font-weight-strong, 700);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(9, 157, 78));
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(9, 157, 78) none 0px;
  text-decoration-color: rgb(9, 157, 78);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(9, 157, 78));
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(9, 157, 78) none 0px;
  text-decoration-color: rgb(9, 157, 78);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  background-color: rgb(245, 84, 84);
  color: var(--italic-color, rgb(0, 0, 0));
  font-family: var(--font-family-strong, Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-weight: 700;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--accent-strong, rgb(0, 0, 0));
  font-family: var(--font-family-strong, Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-weight: var(--font-weight-strong, 700);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 211, 153, 0.847));
  color: var(--text-normal, rgb(14, 14, 14));
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(14, 14, 14) none 0px;
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body del {
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(14, 14, 14) none 0px;
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body footer {
  --bar-height: calc(22px + var(--bar-vertical-padding));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(156, 156, 156);
  border-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color-0, rgba(0, 0, 0, 0));
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(127, 127, 127));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(127, 127, 127) none 0px;
  text-decoration-color: rgb(127, 127, 127);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--external-link-color, rgb(47, 147, 228));
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(47, 147, 228) none 0px;
  text-decoration-color: rgb(47, 147, 228);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--internal-link-color, rgb(47, 147, 228));
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(47, 147, 228) none 0px;
  text-decoration-color: rgb(47, 147, 228);
}

html[saved-theme="light"] body a.internal-link.broken {
  --link-unresolved-decoration-color: var(--unresolved-link, #db4e4ecc);
  color: var(--unresolved-link, rgba(219, 78, 78, 0.8));
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgba(219, 78, 78, 0.8) none 0px;
  text-decoration: underline rgba(219, 78, 78, 0.8);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(219, 78, 78, 0.8));
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body ol > li {
  color: rgb(14, 14, 14);
  margin-bottom: 0px;
  margin-left: 30.1875px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: calc(var(--list-spacing-bt)*0.075em);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: calc(var(--list-spacing-bt)*0.075em);
}

html[saved-theme="light"] body ul > li {
  color: rgb(14, 14, 14);
  margin-bottom: 0px;
  margin-left: 30.1875px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: calc(var(--list-spacing-bt)*0.075em);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: calc(var(--list-spacing-bt)*0.075em);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(127, 127, 127));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(213, 213, 213, 0.173));
  color: var(--blockquote-color, rgb(14, 14, 14));
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
}

html[saved-theme="light"] body table {
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  margin-bottom: calc(var(--p-spacing)*0.5);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: calc(var(--p-spacing)*0.5);
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgba(241, 241, 241, 0.463));
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgba(255, 255, 255, 0.44));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(14, 14, 14));
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body th {
  background-color: rgba(47, 147, 228, 0.1);
  border-bottom-color: rgb(125, 125, 125);
  border-bottom-width: 0px;
  border-left-color: rgb(125, 125, 125);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(125, 125, 125);
  border-right-width: 0px;
  border-top-color: rgb(125, 125, 125);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(14, 14, 14));
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(204, 204, 204, 0.384));
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(221, 221, 221);
  border-left-width: 0px;
  border-right-color: rgb(221, 221, 221);
  border-right-width: 0px;
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--text-color-code, rgb(233, 93, 0));
  font-family: var(--font-family-inline-code, "??", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace);
  padding-bottom: 1px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgba(230, 230, 230, 0.443));
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(221, 221, 221);
  border-left-width: 0px;
  border-right-color: rgb(221, 221, 221);
  border-right-width: 0px;
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(14, 14, 14);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #e6e6e671);
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(8, 55, 125);
  border-bottom-width: 0px;
  border-left-color: rgb(8, 55, 125);
  border-left-width: 0px;
  border-right-color: rgb(8, 55, 125);
  border-right-width: 0px;
  border-top-color: rgb(8, 55, 125);
  border-top-width: 0px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(65, 145, 210, 0.035);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(65, 145, 210, 0.035);
  border-left-style: solid;
  border-left-width: 2px;
  border-radius: 15px;
  border-right-color: rgba(65, 145, 210, 0.035);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(65, 145, 210, 0.035);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: solid;
  border-top-width: 2px;
  color: var(--text-muted, rgb(127, 127, 127));
  padding-bottom: 1.4px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 1.4px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .transclude {
  background-color: var(--embed-color, rgba(65, 145, 210, 0.035));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-radius: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(14, 14, 14);
  padding-bottom: 0px;
  padding-left: 16px;
  padding-right: 8px;
  padding-top: 0px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(14, 14, 14);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(156, 156, 156);
  border-left-width: 0px;
  border-right-color: rgb(156, 156, 156);
  border-right-width: 0px;
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  margin-bottom: 2px;
  margin-left: -21.6px;
  margin-right: 0px;
  margin-top: 0px;
  width: var(--checkbox-size, 14.3906px);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(127, 127, 127);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(127, 127, 127);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(127, 127, 127);
  text-decoration: line-through;
  text-decoration-color: rgb(127, 127, 127);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(228, 129, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 12V2h10l9.44 9.44a2 2 0 0 1 0 2.82l-7.18 7.18a2 2 0 0 1-2.82 0L2 12Z'%3E%3C/path%3E%3Cpath d='M7 7h.01'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 12V2h10l9.44 9.44a2 2 0 0 1 0 2.82l-7.18 7.18a2 2 0 0 1-2.82 0L2 12Z'%3E%3C/path%3E%3Cpath d='M7 7h.01'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M16.5 8c0 1.5-.5 3.5-2.9 4.3.7-1.7.8-3.4.3-5-.7-2.1-3-3.7-4.6-4.6-.4-.3-1.1.1-1 .7 0 1.1-.3 2.7-2 4.4C4.1 10 3 12.3 3 14.5 3 17.4 5 21 9 21c-4-4-1-7.5-1-7.5.8 5.9 5 7.5 7 7.5 1.7 0 5-1.2 5-6.4 0-3.1-1.3-5.5-2.4-6.9-.3-.5-1-.2-1.1.3'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M16.5 8c0 1.5-.5 3.5-2.9 4.3.7-1.7.8-3.4.3-5-.7-2.1-3-3.7-4.6-4.6-.4-.3-1.1.1-1 .7 0 1.1-.3 2.7-2 4.4C4.1 10 3 12.3 3 14.5 3 17.4 5 21 9 21c-4-4-1-7.5-1-7.5.8 5.9 5 7.5 7 7.5 1.7 0 5-1.2 5-6.4 0-3.1-1.3-5.5-2.4-6.9-.3-.5-1-.2-1.1.3'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='white' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='white' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='9' y1='18' x2='15' y2='18'%3E%3C/line%3E%3Cline x1='10' y1='22' x2='14' y2='22'%3E%3C/line%3E%3Cpath d='M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='9' y1='18' x2='15' y2='18'%3E%3C/line%3E%3Cline x1='10' y1='22' x2='14' y2='22'%3E%3C/line%3E%3Cpath d='M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: rotate(45deg)msFilter:'%3E%3Cpath d='M7 17a5.007 5.007 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: rotate(45deg)msFilter:'%3E%3Cpath d='M7 17a5.007 5.007 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
  color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 2 6 6L8 22l-6-6L16 2'%3E%3C/path%3E%3Cpath d='m7.5 10.5 2 2'%3E%3C/path%3E%3Cpath d='m10.5 7.5 2 2'%3E%3C/path%3E%3Cpath d='m13.5 4.5 2 2'%3E%3C/path%3E%3Cpath d='m4.5 13.5 2 2'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 2 6 6L8 22l-6-6L16 2'%3E%3C/path%3E%3Cpath d='m7.5 10.5 2 2'%3E%3C/path%3E%3Cpath d='m10.5 7.5 2 2'%3E%3C/path%3E%3Cpath d='m13.5 4.5 2 2'%3E%3C/path%3E%3Cpath d='m4.5 13.5 2 2'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M15 11.586V6h2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2h2v5.586l-2.707 1.707A.996.996 0 0 0 6 14v2a1 1 0 0 0 1 1h4v3l1 2 1-2v-3h4a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L15 11.586z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M15 11.586V6h2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2h2v5.586l-2.707 1.707A.996.996 0 0 0 6 14v2a1 1 0 0 0 1 1h4v3l1 2 1-2v-3h4a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L15 11.586z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 16 3-8 3.001 8A5.002 5.002 0 0 1 16 16z'%3E%3C/path%3E%3Cpath d='m2 16 3-8 3.001 8A5.002 5.002 0 0 1 2 16z'%3E%3C/path%3E%3Cpath d='M7 21h10'%3E%3C/path%3E%3Cpath d='M12 3v18'%3E%3C/path%3E%3Cpath d='M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 16 3-8 3.001 8A5.002 5.002 0 0 1 16 16z'%3E%3C/path%3E%3Cpath d='m2 16 3-8 3.001 8A5.002 5.002 0 0 1 2 16z'%3E%3C/path%3E%3Cpath d='M7 21h10'%3E%3C/path%3E%3Cpath d='M12 3v18'%3E%3C/path%3E%3Cpath d='M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.8 6.91 4.82 7A6 6 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09A6 6 0 0 0 17.18 15c3-.1 4.82-2.7 4.82-7V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.22 12.08 4 9.3 4 8zm14 4.83V6h2v2c0 1.3-.22 4.08-2 4.83z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.8 6.91 4.82 7A6 6 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09A6 6 0 0 0 17.18 15c3-.1 4.82-2.7 4.82-7V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.22 12.08 4 9.3 4 8zm14 4.83V6h2v2c0 1.3-.22 4.08-2 4.83z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(14, 14, 14);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(0, 191, 188, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(14, 14, 14);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(233, 49, 71, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(14, 14, 14);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="cloze"] {
  --accent-l-alt: 48.6%;
  --activeline-background: hsla(207, 77%, 54%,0.05);
  --background-asymm-split-left: #f3f3f3;
  --background-modifier-active-hover: hsla(207, 77%, 54%, 0.1);
  --background-modifier-border: #dddddd;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e68787;
  --background-modifier-error-hover: #FF9494;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #A4E7C3;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-popover: #fafafa;
  --background-primary: #ffffff;
  --background-primary-alt: #e9e9e9;
  --background-secondary: #fcfcfc;
  --background-secondary-alt: #f3f3f3;
  --background-titlebar-inner: hsla(207, 77%, 54%, 10%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(206, 77.77%, 58.05%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --bt-bubble-border-color: #dddddd;
  --bt-indentation-gradient-color-1: hsl(206, 77.77%, 58.05%);
  --button-corner-shape: round;
  --button-radius: 5px;
  --calendar-active-color: hsla(207, 77%, 54%,0.2);
  --calendar-hover-color: hsla(207, 77%, 54%,0.1);
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 5px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #0e0e0e;
  --checkbox-border-color: #7f7f7f;
  --checkbox-border-color-hover: #7f7f7f;
  --checkbox-color: hsl(206, 77.77%, 58.05%);
  --checkbox-color-hover: hsl(204, 78.54%, 62.1%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-done-color: #7f7f7f;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #000000;
  --cloze-decoration-color-2: hsl(206, 77.77%, 58.05%);
  --cloze-decoration-color-3: hsl(206, 77.77%, 58.05%);
  --code-active-line-background-color: hsla(207, 77%, 54%,0.05);
  --code-atom: #cc7523;
  --code-attribute: #BF616A;
  --code-background: #e6e6e671;
  --code-border-color: #dddddd;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #068a5e;
  --code-function: #BF616A;
  --code-hr: #7f7f7f;
  --code-important: #3bd4da;
  --code-keyword: #3bd4da;
  --code-language: #7f7f7f;
  --code-normal: #000000;
  --code-operator: #5e81ac;
  --code-property: #5e81ac;
  --code-punctuation: #7f7f7f;
  --code-qualifier: #88C0D0;
  --code-radius: 5px;
  --code-selection-background: #a9d1c859;
  --code-selection-color: #000000;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-string-2: #cc7523;
  --code-tag: #c74df7;
  --code-type: #BF616A;
  --code-value: #A3BE8C;
  --collapse-icon-color: #7f7f7f;
  --collapse-icon-color-collapsed: hsl(207, 77%, 54%);
  --color-accent: hsl(207, 77%, 54%);
  --color-accent-1: hsl(206, 77.77%, 58.05%);
  --color-accent-2: hsl(204, 78.54%, 62.1%);
  --color-accent-hsl: 207, 77%, 54%;
  --color-highlight-1: #0e0e0e;
  --color-highlight-2: #0e0e0e;
  --color-highlight-3: #0e0e0e;
  --custom-titlebar-bg: #f3f3f3;
  --divider-color: #e3e3e3;
  --divider-color-hover: hsl(206, 77.77%, 58.05%);
  --divider-vertical-height: 100%;
  --dropdown-background: #efefef;
  --dropdown-background-hover: #e6e6e6;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: hsl(207, 77%, 54%);
  --flair-background: #efefef;
  --flair-color: #0e0e0e;
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
  --font-size-outline: 13px;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-canvas-bg: #ffffff;
  --graph-circle-fill-highlight: hsl(206, 77.77%, 58.05%);
  --graph-line: #b1b1b1;
  --graph-line-fill-highlight: rgb(70, 142, 235);
  --graph-node: #7f7f7f;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(207, 77%, 54%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #7f7f7f;
  --graph-text: #0e0e0e;
  --h1-bg-color: color-mix(in srgb, hsl(216, 88%, 26%) 15%, transparent);
  --h1-color: hsl(216, 88%, 26%);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-bg-color: color-mix(in srgb, hsl(212, 100%, 33%) 15%, transparent);
  --h2-color: hsl(212, 100%, 33%);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-bg-color: color-mix(in srgb, hsl(210, 86%, 39%) 15%, transparent);
  --h3-color: hsl(210, 86%, 39%);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-bg-color: color-mix(in srgb, hsl(208, 58%, 49%) 15%, transparent);
  --h4-color: hsl(208, 58%, 49%);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-bg-color: color-mix(in srgb, hsl(209, 70%, 62%) 15%, transparent);
  --h5-color: hsl(209, 70%, 62%);
  --h5-line-height: 1.5;
  --h6-bg-color: color-mix(in srgb, hsl(209, 65%, 72%) 15%, transparent);
  --h6-color: hsl(209, 65%, 72%);
  --h6-line-height: 1.5;
  --he-title-bar-active-action: hsl(206, 77.77%, 58.05%);
  --he-title-bar-active-bg: hsla(207, 77%, 54%,0.05);
  --he-title-bar-active-fg: #0e0e0e;
  --he-title-bar-active-pinned-bg: hsla(207, 77%, 54%,0.05);
  --he-title-bar-inactive-action: #0e0e0e;
  --he-title-bar-inactive-bg: hsla(207, 77%, 54%,0.01);
  --he-title-bar-inactive-fg: #7f7f7f;
  --he-title-bar-inactive-pinned-bg: hsla(207, 77%, 54%,0.01);
  --heading-formatting: #7f7f7f;
  --heading-spacing: 2.5rem;
  --hr-color: #dddddd;
  --hr-color-1: hsl(206, 77.77%, 58.05%);
  --hr-color-2: hsl(206, 77.77%, 58.05%);
  --hr-color-3: hsl(206, 77.77%, 58.05%);
  --hr-color-4: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-1: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-2: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-3: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-4: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-bg-color: hsla(207, 77%, 54%,0.15);
  --hr-color-numbers-color: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-1: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-2: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-3: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-4: hsl(206, 77.77%, 58.05%);
  --hr-numbers-text-stroke: #0e0e0e;
  --interactive-accent: hsl(206, 77.77%, 58.05%);
  --interactive-accent-hover: hsl(204, 78.54%, 62.1%);
  --interactive-accent-hsl: 207, 77%, 54%;
  --interactive-hover: #e6e6e6;
  --interactive-normal: #efefef;
  --internal-link-color: hsl(207, 77%, 54%);
  --link-color: hsl(207, 77%, 54%);
  --link-color-hover: hsl(204, 78.54%, 62.1%);
  --link-external-color: hsl(207, 77%, 54%);
  --link-external-color-hover: hsl(204, 78.54%, 62.1%);
  --link-unresolved-color: hsl(207, 77%, 54%);
  --link-unresolved-decoration-color: #db4e4ecc;
  --link-weight: 400;
  --list-indent: 2.25em;
  --list-ol-number-color: #7f7f7f;
  --list-ul-marker-color: #7f7f7f;
  --loading-diy-text-color: #0e0e0e;
  --matrix-1: #7cdddd65;
  --matrix-2: #8ce38465;
  --matrix-4: #eeb36f65;
  --matrix-5: #f18e8e65;
  --menu-background: #fcfcfc;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --mjx-inline-math-color: #0e0e0e;
  --mjx-math-color: #0e0e0e;
  --page-border-bottom: #f3f3f3;
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --print-em-color: #099d4e;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #ddddddd9;
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #dcdcdcbe;
  --search-clear-button-color: #7f7f7f;
  --search-icon-color: #7f7f7f;
  --search-result-file-title-color: #0e0e0e;
  --setting-group-heading-color: #0e0e0e;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #e9e9e9;
  --setting-items-border-color: #dddddd;
  --setting-items-padding: 20px;
  --setting-items-radius: 15px;
  --shiki-active-tab-border-color: #7f7f7f;
  --shiki-code-background: #e6e6e671;
  --shiki-code-block-border-radius: 5px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #7f7f7f;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #7f7f7f;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #7f7f7f;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #dddddd;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #7f7f7f;
  --shiki-gutter-text-color-highlight: #7f7f7f;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #7f7f7f;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #7f7f7f;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e3e3e3;
  --tab-radius: 5px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #fcfcfc;
  --tab-switcher-menubar-background: linear-gradient(to top, #fcfcfc, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(207, 77%, 54%);
  --tab-text-color: #7f7f7f;
  --tab-text-color-active: #7f7f7f;
  --tab-text-color-focused: #7f7f7f;
  --tab-text-color-focused-active: #7f7f7f;
  --tab-text-color-focused-active-current: #0e0e0e;
  --tab-text-color-focused-highlighted: hsl(207, 77%, 54%);
  --table-add-button-border-color: #dddddd;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(206, 77.77%, 58.05%);
  --table-drag-handle-color: #7f7f7f;
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: transparent;
  --table-header-border-color: #7d7d7d;
  --table-header-border-width: 1px;
  --table-header-color: #0e0e0e;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(207, 77%, 54%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(206, 77.77%, 58.05%);
  --table-text-size: 15px;
  --table-thead-background-color: hsla(207, 77%, 54%,0.1);
  --tag-background: hsla(207, 77%, 54%, 0.1);
  --tag-background-hover: hsla(207, 77%, 54%, 0.2);
  --tag-border-color: hsla(207, 77%, 54%, 0.15);
  --tag-border-color-hover: hsla(207, 77%, 54%, 0.15);
  --tag-color: hsl(207, 77%, 54%);
  --tag-color-hover: hsl(207, 77%, 54%);
  --tag-size: 0.875em;
  --text-accent: hsl(207, 77%, 54%);
  --text-accent-hover: hsl(204, 78.54%, 62.1%);
  --text-error: #e75545;
  --text-faint: #7f7f7f;
  --text-folder-file-icon: hsl(206, 77.77%, 58.05%);
  --text-highlight: #0e0e0e;
  --text-highlight-bg: hsla(34, 100%, 80%, 0.847);
  --text-muted: #7f7f7f;
  --text-normal: #0e0e0e;
  --text-selection: #a9d1c859;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --theme-color: hsl(206, 77.77%, 58.05%);
  --theme-color-translucent-001: hsla(207, 77%, 54%,0.01);
  --theme-color-translucent-005: hsla(207, 77%, 54%,0.05);
  --theme-color-translucent-01: hsla(207, 77%, 54%,0.1);
  --theme-color-translucent-015: hsla(207, 77%, 54%,0.15);
  --theme-color-translucent-02: hsla(207, 77%, 54%,0.2);
  --theme-color-translucent-04: hsla(207, 77%, 54%,0.4);
  --theme-color-translucent-06: hsla(207, 77%, 54%,0.6);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link: #db4e4ecc;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.15);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(14, 14, 14);
  filter: blur(4px);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(233, 49, 71, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(14, 14, 14);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(120, 82, 238, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(14, 14, 14);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(233, 49, 71, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(14, 14, 14);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="icon"] {
  --accent-l-alt: 48.6%;
  --activeline-background: hsla(207, 77%, 54%,0.05);
  --background-asymm-split-left: #f3f3f3;
  --background-modifier-active-hover: hsla(207, 77%, 54%, 0.1);
  --background-modifier-border: #dddddd;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e68787;
  --background-modifier-error-hover: #FF9494;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #A4E7C3;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-popover: #fafafa;
  --background-primary: #ffffff;
  --background-primary-alt: #e9e9e9;
  --background-secondary: #fcfcfc;
  --background-secondary-alt: #f3f3f3;
  --background-titlebar-inner: hsla(207, 77%, 54%, 10%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(206, 77.77%, 58.05%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --bt-bubble-border-color: #dddddd;
  --bt-indentation-gradient-color-1: hsl(206, 77.77%, 58.05%);
  --button-corner-shape: round;
  --button-radius: 5px;
  --calendar-active-color: hsla(207, 77%, 54%,0.2);
  --calendar-hover-color: hsla(207, 77%, 54%,0.1);
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 5px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #0e0e0e;
  --checkbox-border-color: #7f7f7f;
  --checkbox-border-color-hover: #7f7f7f;
  --checkbox-color: hsl(206, 77.77%, 58.05%);
  --checkbox-color-hover: hsl(204, 78.54%, 62.1%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-done-color: #7f7f7f;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #000000;
  --cloze-decoration-color-2: hsl(206, 77.77%, 58.05%);
  --cloze-decoration-color-3: hsl(206, 77.77%, 58.05%);
  --code-active-line-background-color: hsla(207, 77%, 54%,0.05);
  --code-atom: #cc7523;
  --code-attribute: #BF616A;
  --code-background: #e6e6e671;
  --code-border-color: #dddddd;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #068a5e;
  --code-function: #BF616A;
  --code-hr: #7f7f7f;
  --code-important: #3bd4da;
  --code-keyword: #3bd4da;
  --code-language: #7f7f7f;
  --code-normal: #000000;
  --code-operator: #5e81ac;
  --code-property: #5e81ac;
  --code-punctuation: #7f7f7f;
  --code-qualifier: #88C0D0;
  --code-radius: 5px;
  --code-selection-background: #a9d1c859;
  --code-selection-color: #000000;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-string-2: #cc7523;
  --code-tag: #c74df7;
  --code-type: #BF616A;
  --code-value: #A3BE8C;
  --collapse-icon-color: #7f7f7f;
  --collapse-icon-color-collapsed: hsl(207, 77%, 54%);
  --color-accent: hsl(207, 77%, 54%);
  --color-accent-1: hsl(206, 77.77%, 58.05%);
  --color-accent-2: hsl(204, 78.54%, 62.1%);
  --color-accent-hsl: 207, 77%, 54%;
  --color-highlight-1: #0e0e0e;
  --color-highlight-2: #0e0e0e;
  --color-highlight-3: #0e0e0e;
  --custom-titlebar-bg: #f3f3f3;
  --divider-color: #e3e3e3;
  --divider-color-hover: hsl(206, 77.77%, 58.05%);
  --divider-vertical-height: 100%;
  --dropdown-background: #efefef;
  --dropdown-background-hover: #e6e6e6;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: hsl(207, 77%, 54%);
  --flair-background: #efefef;
  --flair-color: #0e0e0e;
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
  --font-size-outline: 13px;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-canvas-bg: #ffffff;
  --graph-circle-fill-highlight: hsl(206, 77.77%, 58.05%);
  --graph-line: #b1b1b1;
  --graph-line-fill-highlight: rgb(70, 142, 235);
  --graph-node: #7f7f7f;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(207, 77%, 54%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #7f7f7f;
  --graph-text: #0e0e0e;
  --h1-bg-color: color-mix(in srgb, hsl(216, 88%, 26%) 15%, transparent);
  --h1-color: hsl(216, 88%, 26%);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-bg-color: color-mix(in srgb, hsl(212, 100%, 33%) 15%, transparent);
  --h2-color: hsl(212, 100%, 33%);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-bg-color: color-mix(in srgb, hsl(210, 86%, 39%) 15%, transparent);
  --h3-color: hsl(210, 86%, 39%);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-bg-color: color-mix(in srgb, hsl(208, 58%, 49%) 15%, transparent);
  --h4-color: hsl(208, 58%, 49%);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-bg-color: color-mix(in srgb, hsl(209, 70%, 62%) 15%, transparent);
  --h5-color: hsl(209, 70%, 62%);
  --h5-line-height: 1.5;
  --h6-bg-color: color-mix(in srgb, hsl(209, 65%, 72%) 15%, transparent);
  --h6-color: hsl(209, 65%, 72%);
  --h6-line-height: 1.5;
  --he-title-bar-active-action: hsl(206, 77.77%, 58.05%);
  --he-title-bar-active-bg: hsla(207, 77%, 54%,0.05);
  --he-title-bar-active-fg: #0e0e0e;
  --he-title-bar-active-pinned-bg: hsla(207, 77%, 54%,0.05);
  --he-title-bar-inactive-action: #0e0e0e;
  --he-title-bar-inactive-bg: hsla(207, 77%, 54%,0.01);
  --he-title-bar-inactive-fg: #7f7f7f;
  --he-title-bar-inactive-pinned-bg: hsla(207, 77%, 54%,0.01);
  --heading-formatting: #7f7f7f;
  --heading-spacing: 2.5rem;
  --hr-color: #dddddd;
  --hr-color-1: hsl(206, 77.77%, 58.05%);
  --hr-color-2: hsl(206, 77.77%, 58.05%);
  --hr-color-3: hsl(206, 77.77%, 58.05%);
  --hr-color-4: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-1: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-2: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-3: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-4: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-bg-color: hsla(207, 77%, 54%,0.15);
  --hr-color-numbers-color: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-1: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-2: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-3: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-4: hsl(206, 77.77%, 58.05%);
  --hr-numbers-text-stroke: #0e0e0e;
  --interactive-accent: hsl(206, 77.77%, 58.05%);
  --interactive-accent-hover: hsl(204, 78.54%, 62.1%);
  --interactive-accent-hsl: 207, 77%, 54%;
  --interactive-hover: #e6e6e6;
  --interactive-normal: #efefef;
  --internal-link-color: hsl(207, 77%, 54%);
  --link-color: hsl(207, 77%, 54%);
  --link-color-hover: hsl(204, 78.54%, 62.1%);
  --link-external-color: hsl(207, 77%, 54%);
  --link-external-color-hover: hsl(204, 78.54%, 62.1%);
  --link-unresolved-color: hsl(207, 77%, 54%);
  --link-unresolved-decoration-color: #db4e4ecc;
  --link-weight: 400;
  --list-indent: 2.25em;
  --list-ol-number-color: #7f7f7f;
  --list-ul-marker-color: #7f7f7f;
  --loading-diy-text-color: #0e0e0e;
  --matrix-1: #7cdddd65;
  --matrix-2: #8ce38465;
  --matrix-4: #eeb36f65;
  --matrix-5: #f18e8e65;
  --menu-background: #fcfcfc;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --mjx-inline-math-color: #0e0e0e;
  --mjx-math-color: #0e0e0e;
  --page-border-bottom: #f3f3f3;
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --print-em-color: #099d4e;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #ddddddd9;
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #dcdcdcbe;
  --search-clear-button-color: #7f7f7f;
  --search-icon-color: #7f7f7f;
  --search-result-file-title-color: #0e0e0e;
  --setting-group-heading-color: #0e0e0e;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #e9e9e9;
  --setting-items-border-color: #dddddd;
  --setting-items-padding: 20px;
  --setting-items-radius: 15px;
  --shiki-active-tab-border-color: #7f7f7f;
  --shiki-code-background: #e6e6e671;
  --shiki-code-block-border-radius: 5px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #7f7f7f;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #7f7f7f;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #7f7f7f;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #dddddd;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #7f7f7f;
  --shiki-gutter-text-color-highlight: #7f7f7f;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #7f7f7f;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #7f7f7f;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e3e3e3;
  --tab-radius: 5px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #fcfcfc;
  --tab-switcher-menubar-background: linear-gradient(to top, #fcfcfc, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(207, 77%, 54%);
  --tab-text-color: #7f7f7f;
  --tab-text-color-active: #7f7f7f;
  --tab-text-color-focused: #7f7f7f;
  --tab-text-color-focused-active: #7f7f7f;
  --tab-text-color-focused-active-current: #0e0e0e;
  --tab-text-color-focused-highlighted: hsl(207, 77%, 54%);
  --table-add-button-border-color: #dddddd;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(206, 77.77%, 58.05%);
  --table-drag-handle-color: #7f7f7f;
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: transparent;
  --table-header-border-color: #7d7d7d;
  --table-header-border-width: 1px;
  --table-header-color: #0e0e0e;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(207, 77%, 54%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(206, 77.77%, 58.05%);
  --table-text-size: 15px;
  --table-thead-background-color: hsla(207, 77%, 54%,0.1);
  --tag-background: hsla(207, 77%, 54%, 0.1);
  --tag-background-hover: hsla(207, 77%, 54%, 0.2);
  --tag-border-color: hsla(207, 77%, 54%, 0.15);
  --tag-border-color-hover: hsla(207, 77%, 54%, 0.15);
  --tag-color: hsl(207, 77%, 54%);
  --tag-color-hover: hsl(207, 77%, 54%);
  --tag-size: 0.875em;
  --text-accent: hsl(207, 77%, 54%);
  --text-accent-hover: hsl(204, 78.54%, 62.1%);
  --text-error: #e75545;
  --text-faint: #7f7f7f;
  --text-folder-file-icon: hsl(206, 77.77%, 58.05%);
  --text-highlight: #0e0e0e;
  --text-highlight-bg: hsla(34, 100%, 80%, 0.847);
  --text-muted: #7f7f7f;
  --text-normal: #0e0e0e;
  --text-selection: #a9d1c859;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --theme-color: hsl(206, 77.77%, 58.05%);
  --theme-color-translucent-001: hsla(207, 77%, 54%,0.01);
  --theme-color-translucent-005: hsla(207, 77%, 54%,0.05);
  --theme-color-translucent-01: hsla(207, 77%, 54%,0.1);
  --theme-color-translucent-015: hsla(207, 77%, 54%,0.15);
  --theme-color-translucent-02: hsla(207, 77%, 54%,0.2);
  --theme-color-translucent-04: hsla(207, 77%, 54%,0.4);
  --theme-color-translucent-06: hsla(207, 77%, 54%,0.6);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link: #db4e4ecc;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: -112px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(8, 109, 221, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(14, 14, 14);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="kanban"] {
  --accent-l-alt: 48.6%;
  --activeline-background: hsla(207, 77%, 54%,0.05);
  --background-asymm-split-left: #f3f3f3;
  --background-modifier-active-hover: hsla(207, 77%, 54%, 0.1);
  --background-modifier-border: #dddddd;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e68787;
  --background-modifier-error-hover: #FF9494;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #A4E7C3;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-popover: #fafafa;
  --background-primary: #ffffff;
  --background-primary-alt: #e9e9e9;
  --background-secondary: #fcfcfc;
  --background-secondary-alt: #f3f3f3;
  --background-titlebar-inner: hsla(207, 77%, 54%, 10%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(206, 77.77%, 58.05%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --bt-bubble-border-color: #dddddd;
  --bt-indentation-gradient-color-1: hsl(206, 77.77%, 58.05%);
  --button-corner-shape: round;
  --button-radius: 5px;
  --calendar-active-color: hsla(207, 77%, 54%,0.2);
  --calendar-hover-color: hsla(207, 77%, 54%,0.1);
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 5px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #0e0e0e;
  --checkbox-border-color: #7f7f7f;
  --checkbox-border-color-hover: #7f7f7f;
  --checkbox-color: hsl(206, 77.77%, 58.05%);
  --checkbox-color-hover: hsl(204, 78.54%, 62.1%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-done-color: #7f7f7f;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #000000;
  --cloze-decoration-color-2: hsl(206, 77.77%, 58.05%);
  --cloze-decoration-color-3: hsl(206, 77.77%, 58.05%);
  --code-active-line-background-color: hsla(207, 77%, 54%,0.05);
  --code-atom: #cc7523;
  --code-attribute: #BF616A;
  --code-background: #e6e6e671;
  --code-border-color: #dddddd;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #068a5e;
  --code-function: #BF616A;
  --code-hr: #7f7f7f;
  --code-important: #3bd4da;
  --code-keyword: #3bd4da;
  --code-language: #7f7f7f;
  --code-normal: #000000;
  --code-operator: #5e81ac;
  --code-property: #5e81ac;
  --code-punctuation: #7f7f7f;
  --code-qualifier: #88C0D0;
  --code-radius: 5px;
  --code-selection-background: #a9d1c859;
  --code-selection-color: #000000;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-string-2: #cc7523;
  --code-tag: #c74df7;
  --code-type: #BF616A;
  --code-value: #A3BE8C;
  --collapse-icon-color: #7f7f7f;
  --collapse-icon-color-collapsed: hsl(207, 77%, 54%);
  --color-accent: hsl(207, 77%, 54%);
  --color-accent-1: hsl(206, 77.77%, 58.05%);
  --color-accent-2: hsl(204, 78.54%, 62.1%);
  --color-accent-hsl: 207, 77%, 54%;
  --color-highlight-1: #0e0e0e;
  --color-highlight-2: #0e0e0e;
  --color-highlight-3: #0e0e0e;
  --custom-titlebar-bg: #f3f3f3;
  --divider-color: #e3e3e3;
  --divider-color-hover: hsl(206, 77.77%, 58.05%);
  --divider-vertical-height: 100%;
  --dropdown-background: #efefef;
  --dropdown-background-hover: #e6e6e6;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: hsl(207, 77%, 54%);
  --flair-background: #efefef;
  --flair-color: #0e0e0e;
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
  --font-size-outline: 13px;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-canvas-bg: #ffffff;
  --graph-circle-fill-highlight: hsl(206, 77.77%, 58.05%);
  --graph-line: #b1b1b1;
  --graph-line-fill-highlight: rgb(70, 142, 235);
  --graph-node: #7f7f7f;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(207, 77%, 54%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #7f7f7f;
  --graph-text: #0e0e0e;
  --h1-bg-color: color-mix(in srgb, hsl(216, 88%, 26%) 15%, transparent);
  --h1-color: hsl(216, 88%, 26%);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-bg-color: color-mix(in srgb, hsl(212, 100%, 33%) 15%, transparent);
  --h2-color: hsl(212, 100%, 33%);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-bg-color: color-mix(in srgb, hsl(210, 86%, 39%) 15%, transparent);
  --h3-color: hsl(210, 86%, 39%);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-bg-color: color-mix(in srgb, hsl(208, 58%, 49%) 15%, transparent);
  --h4-color: hsl(208, 58%, 49%);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-bg-color: color-mix(in srgb, hsl(209, 70%, 62%) 15%, transparent);
  --h5-color: hsl(209, 70%, 62%);
  --h5-line-height: 1.5;
  --h6-bg-color: color-mix(in srgb, hsl(209, 65%, 72%) 15%, transparent);
  --h6-color: hsl(209, 65%, 72%);
  --h6-line-height: 1.5;
  --he-title-bar-active-action: hsl(206, 77.77%, 58.05%);
  --he-title-bar-active-bg: hsla(207, 77%, 54%,0.05);
  --he-title-bar-active-fg: #0e0e0e;
  --he-title-bar-active-pinned-bg: hsla(207, 77%, 54%,0.05);
  --he-title-bar-inactive-action: #0e0e0e;
  --he-title-bar-inactive-bg: hsla(207, 77%, 54%,0.01);
  --he-title-bar-inactive-fg: #7f7f7f;
  --he-title-bar-inactive-pinned-bg: hsla(207, 77%, 54%,0.01);
  --heading-formatting: #7f7f7f;
  --heading-spacing: 2.5rem;
  --hr-color: #dddddd;
  --hr-color-1: hsl(206, 77.77%, 58.05%);
  --hr-color-2: hsl(206, 77.77%, 58.05%);
  --hr-color-3: hsl(206, 77.77%, 58.05%);
  --hr-color-4: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-1: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-2: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-3: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-4: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-bg-color: hsla(207, 77%, 54%,0.15);
  --hr-color-numbers-color: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-1: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-2: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-3: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-4: hsl(206, 77.77%, 58.05%);
  --hr-numbers-text-stroke: #0e0e0e;
  --interactive-accent: hsl(206, 77.77%, 58.05%);
  --interactive-accent-hover: hsl(204, 78.54%, 62.1%);
  --interactive-accent-hsl: 207, 77%, 54%;
  --interactive-hover: #e6e6e6;
  --interactive-normal: #efefef;
  --internal-link-color: hsl(207, 77%, 54%);
  --link-color: hsl(207, 77%, 54%);
  --link-color-hover: hsl(204, 78.54%, 62.1%);
  --link-external-color: hsl(207, 77%, 54%);
  --link-external-color-hover: hsl(204, 78.54%, 62.1%);
  --link-unresolved-color: hsl(207, 77%, 54%);
  --link-unresolved-decoration-color: #db4e4ecc;
  --link-weight: 400;
  --list-indent: 2.25em;
  --list-ol-number-color: #7f7f7f;
  --list-ul-marker-color: #7f7f7f;
  --loading-diy-text-color: #0e0e0e;
  --matrix-1: #7cdddd65;
  --matrix-2: #8ce38465;
  --matrix-4: #eeb36f65;
  --matrix-5: #f18e8e65;
  --menu-background: #fcfcfc;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --mjx-inline-math-color: #0e0e0e;
  --mjx-math-color: #0e0e0e;
  --page-border-bottom: #f3f3f3;
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --print-em-color: #099d4e;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #ddddddd9;
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #dcdcdcbe;
  --search-clear-button-color: #7f7f7f;
  --search-icon-color: #7f7f7f;
  --search-result-file-title-color: #0e0e0e;
  --setting-group-heading-color: #0e0e0e;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #e9e9e9;
  --setting-items-border-color: #dddddd;
  --setting-items-padding: 20px;
  --setting-items-radius: 15px;
  --shiki-active-tab-border-color: #7f7f7f;
  --shiki-code-background: #e6e6e671;
  --shiki-code-block-border-radius: 5px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #7f7f7f;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #7f7f7f;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #7f7f7f;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #dddddd;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #7f7f7f;
  --shiki-gutter-text-color-highlight: #7f7f7f;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #7f7f7f;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #7f7f7f;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e3e3e3;
  --tab-radius: 5px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #fcfcfc;
  --tab-switcher-menubar-background: linear-gradient(to top, #fcfcfc, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(207, 77%, 54%);
  --tab-text-color: #7f7f7f;
  --tab-text-color-active: #7f7f7f;
  --tab-text-color-focused: #7f7f7f;
  --tab-text-color-focused-active: #7f7f7f;
  --tab-text-color-focused-active-current: #0e0e0e;
  --tab-text-color-focused-highlighted: hsl(207, 77%, 54%);
  --table-add-button-border-color: #dddddd;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(206, 77.77%, 58.05%);
  --table-drag-handle-color: #7f7f7f;
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: transparent;
  --table-header-border-color: #7d7d7d;
  --table-header-border-width: 1px;
  --table-header-color: #0e0e0e;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(207, 77%, 54%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(206, 77.77%, 58.05%);
  --table-text-size: 15px;
  --table-thead-background-color: hsla(207, 77%, 54%,0.1);
  --tag-background: hsla(207, 77%, 54%, 0.1);
  --tag-background-hover: hsla(207, 77%, 54%, 0.2);
  --tag-border-color: hsla(207, 77%, 54%, 0.15);
  --tag-border-color-hover: hsla(207, 77%, 54%, 0.15);
  --tag-color: hsl(207, 77%, 54%);
  --tag-color-hover: hsl(207, 77%, 54%);
  --tag-size: 0.875em;
  --text-accent: hsl(207, 77%, 54%);
  --text-accent-hover: hsl(204, 78.54%, 62.1%);
  --text-error: #e75545;
  --text-faint: #7f7f7f;
  --text-folder-file-icon: hsl(206, 77.77%, 58.05%);
  --text-highlight: #0e0e0e;
  --text-highlight-bg: hsla(34, 100%, 80%, 0.847);
  --text-muted: #7f7f7f;
  --text-normal: #0e0e0e;
  --text-selection: #a9d1c859;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --theme-color: hsl(206, 77.77%, 58.05%);
  --theme-color-translucent-001: hsla(207, 77%, 54%,0.01);
  --theme-color-translucent-005: hsla(207, 77%, 54%,0.05);
  --theme-color-translucent-01: hsla(207, 77%, 54%,0.1);
  --theme-color-translucent-015: hsla(207, 77%, 54%,0.15);
  --theme-color-translucent-02: hsla(207, 77%, 54%,0.2);
  --theme-color-translucent-04: hsla(207, 77%, 54%,0.4);
  --theme-color-translucent-06: hsla(207, 77%, 54%,0.6);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link: #db4e4ecc;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.15);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(8, 109, 221, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(14, 14, 14);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(236, 117, 0, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(14, 14, 14);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(158, 158, 158, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(14, 14, 14);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="stickies"] {
  --accent-l-alt: 48.6%;
  --activeline-background: hsla(207, 77%, 54%,0.05);
  --background-asymm-split-left: #f3f3f3;
  --background-modifier-active-hover: hsla(207, 77%, 54%, 0.1);
  --background-modifier-border: #dddddd;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e68787;
  --background-modifier-error-hover: #FF9494;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #A4E7C3;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-popover: #fafafa;
  --background-primary: #ffffff;
  --background-primary-alt: #e9e9e9;
  --background-secondary: #fcfcfc;
  --background-secondary-alt: #f3f3f3;
  --background-titlebar-inner: hsla(207, 77%, 54%, 10%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(206, 77.77%, 58.05%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --bt-bubble-border-color: #dddddd;
  --bt-indentation-gradient-color-1: hsl(206, 77.77%, 58.05%);
  --button-corner-shape: round;
  --button-radius: 5px;
  --calendar-active-color: hsla(207, 77%, 54%,0.2);
  --calendar-hover-color: hsla(207, 77%, 54%,0.1);
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 5px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #0e0e0e;
  --checkbox-border-color: #7f7f7f;
  --checkbox-border-color-hover: #7f7f7f;
  --checkbox-color: hsl(206, 77.77%, 58.05%);
  --checkbox-color-hover: hsl(204, 78.54%, 62.1%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-done-color: #7f7f7f;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #000000;
  --cloze-decoration-color-2: hsl(206, 77.77%, 58.05%);
  --cloze-decoration-color-3: hsl(206, 77.77%, 58.05%);
  --code-active-line-background-color: hsla(207, 77%, 54%,0.05);
  --code-atom: #cc7523;
  --code-attribute: #BF616A;
  --code-background: #e6e6e671;
  --code-border-color: #dddddd;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #068a5e;
  --code-function: #BF616A;
  --code-hr: #7f7f7f;
  --code-important: #3bd4da;
  --code-keyword: #3bd4da;
  --code-language: #7f7f7f;
  --code-normal: #000000;
  --code-operator: #5e81ac;
  --code-property: #5e81ac;
  --code-punctuation: #7f7f7f;
  --code-qualifier: #88C0D0;
  --code-radius: 5px;
  --code-selection-background: #a9d1c859;
  --code-selection-color: #000000;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-string-2: #cc7523;
  --code-tag: #c74df7;
  --code-type: #BF616A;
  --code-value: #A3BE8C;
  --collapse-icon-color: #7f7f7f;
  --collapse-icon-color-collapsed: hsl(207, 77%, 54%);
  --color-accent: hsl(207, 77%, 54%);
  --color-accent-1: hsl(206, 77.77%, 58.05%);
  --color-accent-2: hsl(204, 78.54%, 62.1%);
  --color-accent-hsl: 207, 77%, 54%;
  --color-highlight-1: #0e0e0e;
  --color-highlight-2: #0e0e0e;
  --color-highlight-3: #0e0e0e;
  --custom-titlebar-bg: #f3f3f3;
  --divider-color: #e3e3e3;
  --divider-color-hover: hsl(206, 77.77%, 58.05%);
  --divider-vertical-height: 100%;
  --dropdown-background: #efefef;
  --dropdown-background-hover: #e6e6e6;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: hsl(207, 77%, 54%);
  --flair-background: #efefef;
  --flair-color: #0e0e0e;
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
  --font-size-outline: 13px;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-canvas-bg: #ffffff;
  --graph-circle-fill-highlight: hsl(206, 77.77%, 58.05%);
  --graph-line: #b1b1b1;
  --graph-line-fill-highlight: rgb(70, 142, 235);
  --graph-node: #7f7f7f;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(207, 77%, 54%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #7f7f7f;
  --graph-text: #0e0e0e;
  --h1-bg-color: color-mix(in srgb, hsl(216, 88%, 26%) 15%, transparent);
  --h1-color: hsl(216, 88%, 26%);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-bg-color: color-mix(in srgb, hsl(212, 100%, 33%) 15%, transparent);
  --h2-color: hsl(212, 100%, 33%);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-bg-color: color-mix(in srgb, hsl(210, 86%, 39%) 15%, transparent);
  --h3-color: hsl(210, 86%, 39%);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-bg-color: color-mix(in srgb, hsl(208, 58%, 49%) 15%, transparent);
  --h4-color: hsl(208, 58%, 49%);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-bg-color: color-mix(in srgb, hsl(209, 70%, 62%) 15%, transparent);
  --h5-color: hsl(209, 70%, 62%);
  --h5-line-height: 1.5;
  --h6-bg-color: color-mix(in srgb, hsl(209, 65%, 72%) 15%, transparent);
  --h6-color: hsl(209, 65%, 72%);
  --h6-line-height: 1.5;
  --he-title-bar-active-action: hsl(206, 77.77%, 58.05%);
  --he-title-bar-active-bg: hsla(207, 77%, 54%,0.05);
  --he-title-bar-active-fg: #0e0e0e;
  --he-title-bar-active-pinned-bg: hsla(207, 77%, 54%,0.05);
  --he-title-bar-inactive-action: #0e0e0e;
  --he-title-bar-inactive-bg: hsla(207, 77%, 54%,0.01);
  --he-title-bar-inactive-fg: #7f7f7f;
  --he-title-bar-inactive-pinned-bg: hsla(207, 77%, 54%,0.01);
  --heading-formatting: #7f7f7f;
  --heading-spacing: 2.5rem;
  --hr-color: #dddddd;
  --hr-color-1: hsl(206, 77.77%, 58.05%);
  --hr-color-2: hsl(206, 77.77%, 58.05%);
  --hr-color-3: hsl(206, 77.77%, 58.05%);
  --hr-color-4: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-1: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-2: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-3: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-4: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-bg-color: hsla(207, 77%, 54%,0.15);
  --hr-color-numbers-color: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-1: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-2: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-3: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-4: hsl(206, 77.77%, 58.05%);
  --hr-numbers-text-stroke: #0e0e0e;
  --interactive-accent: hsl(206, 77.77%, 58.05%);
  --interactive-accent-hover: hsl(204, 78.54%, 62.1%);
  --interactive-accent-hsl: 207, 77%, 54%;
  --interactive-hover: #e6e6e6;
  --interactive-normal: #efefef;
  --internal-link-color: hsl(207, 77%, 54%);
  --link-color: hsl(207, 77%, 54%);
  --link-color-hover: hsl(204, 78.54%, 62.1%);
  --link-external-color: hsl(207, 77%, 54%);
  --link-external-color-hover: hsl(204, 78.54%, 62.1%);
  --link-unresolved-color: hsl(207, 77%, 54%);
  --link-unresolved-decoration-color: #db4e4ecc;
  --link-weight: 400;
  --list-indent: 2.25em;
  --list-ol-number-color: #7f7f7f;
  --list-ul-marker-color: #7f7f7f;
  --loading-diy-text-color: #0e0e0e;
  --matrix-1: #7cdddd65;
  --matrix-2: #8ce38465;
  --matrix-4: #eeb36f65;
  --matrix-5: #f18e8e65;
  --menu-background: #fcfcfc;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --mjx-inline-math-color: #0e0e0e;
  --mjx-math-color: #0e0e0e;
  --page-border-bottom: #f3f3f3;
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --print-em-color: #099d4e;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #ddddddd9;
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #dcdcdcbe;
  --search-clear-button-color: #7f7f7f;
  --search-icon-color: #7f7f7f;
  --search-result-file-title-color: #0e0e0e;
  --setting-group-heading-color: #0e0e0e;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #e9e9e9;
  --setting-items-border-color: #dddddd;
  --setting-items-padding: 20px;
  --setting-items-radius: 15px;
  --shiki-active-tab-border-color: #7f7f7f;
  --shiki-code-background: #e6e6e671;
  --shiki-code-block-border-radius: 5px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #7f7f7f;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #7f7f7f;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #7f7f7f;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #dddddd;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #7f7f7f;
  --shiki-gutter-text-color-highlight: #7f7f7f;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #7f7f7f;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #7f7f7f;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e3e3e3;
  --tab-radius: 5px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #fcfcfc;
  --tab-switcher-menubar-background: linear-gradient(to top, #fcfcfc, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(207, 77%, 54%);
  --tab-text-color: #7f7f7f;
  --tab-text-color-active: #7f7f7f;
  --tab-text-color-focused: #7f7f7f;
  --tab-text-color-focused-active: #7f7f7f;
  --tab-text-color-focused-active-current: #0e0e0e;
  --tab-text-color-focused-highlighted: hsl(207, 77%, 54%);
  --table-add-button-border-color: #dddddd;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(206, 77.77%, 58.05%);
  --table-drag-handle-color: #7f7f7f;
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: transparent;
  --table-header-border-color: #7d7d7d;
  --table-header-border-width: 1px;
  --table-header-color: #0e0e0e;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(207, 77%, 54%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(206, 77.77%, 58.05%);
  --table-text-size: 15px;
  --table-thead-background-color: hsla(207, 77%, 54%,0.1);
  --tag-background: hsla(207, 77%, 54%, 0.1);
  --tag-background-hover: hsla(207, 77%, 54%, 0.2);
  --tag-border-color: hsla(207, 77%, 54%, 0.15);
  --tag-border-color-hover: hsla(207, 77%, 54%, 0.15);
  --tag-color: hsl(207, 77%, 54%);
  --tag-color-hover: hsl(207, 77%, 54%);
  --tag-size: 0.875em;
  --text-accent: hsl(207, 77%, 54%);
  --text-accent-hover: hsl(204, 78.54%, 62.1%);
  --text-error: #e75545;
  --text-faint: #7f7f7f;
  --text-folder-file-icon: hsl(206, 77.77%, 58.05%);
  --text-highlight: #0e0e0e;
  --text-highlight-bg: hsla(34, 100%, 80%, 0.847);
  --text-muted: #7f7f7f;
  --text-normal: #0e0e0e;
  --text-selection: #a9d1c859;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --theme-color: hsl(206, 77.77%, 58.05%);
  --theme-color-translucent-001: hsla(207, 77%, 54%,0.01);
  --theme-color-translucent-005: hsla(207, 77%, 54%,0.05);
  --theme-color-translucent-01: hsla(207, 77%, 54%,0.1);
  --theme-color-translucent-015: hsla(207, 77%, 54%,0.15);
  --theme-color-translucent-02: hsla(207, 77%, 54%,0.2);
  --theme-color-translucent-04: hsla(207, 77%, 54%,0.4);
  --theme-color-translucent-06: hsla(207, 77%, 54%,0.6);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link: #db4e4ecc;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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

html[saved-theme="light"] body .callout[data-callout="stickies2"] {
  --accent-l-alt: 48.6%;
  --activeline-background: hsla(207, 77%, 54%,0.05);
  --background-asymm-split-left: #f3f3f3;
  --background-modifier-active-hover: hsla(207, 77%, 54%, 0.1);
  --background-modifier-border: #dddddd;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e68787;
  --background-modifier-error-hover: #FF9494;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #A4E7C3;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-popover: #fafafa;
  --background-primary: #ffffff;
  --background-primary-alt: #e9e9e9;
  --background-secondary: #fcfcfc;
  --background-secondary-alt: #f3f3f3;
  --background-titlebar-inner: hsla(207, 77%, 54%, 10%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(206, 77.77%, 58.05%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --bt-bubble-border-color: #dddddd;
  --bt-indentation-gradient-color-1: hsl(206, 77.77%, 58.05%);
  --button-corner-shape: round;
  --button-radius: 5px;
  --calendar-active-color: hsla(207, 77%, 54%,0.2);
  --calendar-hover-color: hsla(207, 77%, 54%,0.1);
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 5px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #0e0e0e;
  --checkbox-border-color: #7f7f7f;
  --checkbox-border-color-hover: #7f7f7f;
  --checkbox-color: hsl(206, 77.77%, 58.05%);
  --checkbox-color-hover: hsl(204, 78.54%, 62.1%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-done-color: #7f7f7f;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #000000;
  --cloze-decoration-color-2: hsl(206, 77.77%, 58.05%);
  --cloze-decoration-color-3: hsl(206, 77.77%, 58.05%);
  --code-active-line-background-color: hsla(207, 77%, 54%,0.05);
  --code-atom: #cc7523;
  --code-attribute: #BF616A;
  --code-background: #e6e6e671;
  --code-border-color: #dddddd;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #068a5e;
  --code-function: #BF616A;
  --code-hr: #7f7f7f;
  --code-important: #3bd4da;
  --code-keyword: #3bd4da;
  --code-language: #7f7f7f;
  --code-normal: #000000;
  --code-operator: #5e81ac;
  --code-property: #5e81ac;
  --code-punctuation: #7f7f7f;
  --code-qualifier: #88C0D0;
  --code-radius: 5px;
  --code-selection-background: #a9d1c859;
  --code-selection-color: #000000;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-string-2: #cc7523;
  --code-tag: #c74df7;
  --code-type: #BF616A;
  --code-value: #A3BE8C;
  --collapse-icon-color: #7f7f7f;
  --collapse-icon-color-collapsed: hsl(207, 77%, 54%);
  --color-accent: hsl(207, 77%, 54%);
  --color-accent-1: hsl(206, 77.77%, 58.05%);
  --color-accent-2: hsl(204, 78.54%, 62.1%);
  --color-accent-hsl: 207, 77%, 54%;
  --color-highlight-1: #0e0e0e;
  --color-highlight-2: #0e0e0e;
  --color-highlight-3: #0e0e0e;
  --custom-titlebar-bg: #f3f3f3;
  --divider-color: #e3e3e3;
  --divider-color-hover: hsl(206, 77.77%, 58.05%);
  --divider-vertical-height: 100%;
  --dropdown-background: #efefef;
  --dropdown-background-hover: #e6e6e6;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: hsl(207, 77%, 54%);
  --flair-background: #efefef;
  --flair-color: #0e0e0e;
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
  --font-size-outline: 13px;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-canvas-bg: #ffffff;
  --graph-circle-fill-highlight: hsl(206, 77.77%, 58.05%);
  --graph-line: #b1b1b1;
  --graph-line-fill-highlight: rgb(70, 142, 235);
  --graph-node: #7f7f7f;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(207, 77%, 54%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #7f7f7f;
  --graph-text: #0e0e0e;
  --h1-bg-color: color-mix(in srgb, hsl(216, 88%, 26%) 15%, transparent);
  --h1-color: hsl(216, 88%, 26%);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-bg-color: color-mix(in srgb, hsl(212, 100%, 33%) 15%, transparent);
  --h2-color: hsl(212, 100%, 33%);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-bg-color: color-mix(in srgb, hsl(210, 86%, 39%) 15%, transparent);
  --h3-color: hsl(210, 86%, 39%);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-bg-color: color-mix(in srgb, hsl(208, 58%, 49%) 15%, transparent);
  --h4-color: hsl(208, 58%, 49%);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-bg-color: color-mix(in srgb, hsl(209, 70%, 62%) 15%, transparent);
  --h5-color: hsl(209, 70%, 62%);
  --h5-line-height: 1.5;
  --h6-bg-color: color-mix(in srgb, hsl(209, 65%, 72%) 15%, transparent);
  --h6-color: hsl(209, 65%, 72%);
  --h6-line-height: 1.5;
  --he-title-bar-active-action: hsl(206, 77.77%, 58.05%);
  --he-title-bar-active-bg: hsla(207, 77%, 54%,0.05);
  --he-title-bar-active-fg: #0e0e0e;
  --he-title-bar-active-pinned-bg: hsla(207, 77%, 54%,0.05);
  --he-title-bar-inactive-action: #0e0e0e;
  --he-title-bar-inactive-bg: hsla(207, 77%, 54%,0.01);
  --he-title-bar-inactive-fg: #7f7f7f;
  --he-title-bar-inactive-pinned-bg: hsla(207, 77%, 54%,0.01);
  --heading-formatting: #7f7f7f;
  --heading-spacing: 2.5rem;
  --hr-color: #dddddd;
  --hr-color-1: hsl(206, 77.77%, 58.05%);
  --hr-color-2: hsl(206, 77.77%, 58.05%);
  --hr-color-3: hsl(206, 77.77%, 58.05%);
  --hr-color-4: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-1: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-2: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-3: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-4: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-bg-color: hsla(207, 77%, 54%,0.15);
  --hr-color-numbers-color: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-1: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-2: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-3: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-4: hsl(206, 77.77%, 58.05%);
  --hr-numbers-text-stroke: #0e0e0e;
  --interactive-accent: hsl(206, 77.77%, 58.05%);
  --interactive-accent-hover: hsl(204, 78.54%, 62.1%);
  --interactive-accent-hsl: 207, 77%, 54%;
  --interactive-hover: #e6e6e6;
  --interactive-normal: #efefef;
  --internal-link-color: hsl(207, 77%, 54%);
  --link-color: hsl(207, 77%, 54%);
  --link-color-hover: hsl(204, 78.54%, 62.1%);
  --link-external-color: hsl(207, 77%, 54%);
  --link-external-color-hover: hsl(204, 78.54%, 62.1%);
  --link-unresolved-color: hsl(207, 77%, 54%);
  --link-unresolved-decoration-color: #db4e4ecc;
  --link-weight: 400;
  --list-indent: 2.25em;
  --list-ol-number-color: #7f7f7f;
  --list-ul-marker-color: #7f7f7f;
  --loading-diy-text-color: #0e0e0e;
  --matrix-1: #7cdddd65;
  --matrix-2: #8ce38465;
  --matrix-4: #eeb36f65;
  --matrix-5: #f18e8e65;
  --menu-background: #fcfcfc;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --mjx-inline-math-color: #0e0e0e;
  --mjx-math-color: #0e0e0e;
  --page-border-bottom: #f3f3f3;
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --print-em-color: #099d4e;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #ddddddd9;
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #dcdcdcbe;
  --search-clear-button-color: #7f7f7f;
  --search-icon-color: #7f7f7f;
  --search-result-file-title-color: #0e0e0e;
  --setting-group-heading-color: #0e0e0e;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #e9e9e9;
  --setting-items-border-color: #dddddd;
  --setting-items-padding: 20px;
  --setting-items-radius: 15px;
  --shiki-active-tab-border-color: #7f7f7f;
  --shiki-code-background: #e6e6e671;
  --shiki-code-block-border-radius: 5px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #7f7f7f;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #7f7f7f;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #7f7f7f;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #dddddd;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #7f7f7f;
  --shiki-gutter-text-color-highlight: #7f7f7f;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #7f7f7f;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #7f7f7f;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e3e3e3;
  --tab-radius: 5px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #fcfcfc;
  --tab-switcher-menubar-background: linear-gradient(to top, #fcfcfc, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(207, 77%, 54%);
  --tab-text-color: #7f7f7f;
  --tab-text-color-active: #7f7f7f;
  --tab-text-color-focused: #7f7f7f;
  --tab-text-color-focused-active: #7f7f7f;
  --tab-text-color-focused-active-current: #0e0e0e;
  --tab-text-color-focused-highlighted: hsl(207, 77%, 54%);
  --table-add-button-border-color: #dddddd;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(206, 77.77%, 58.05%);
  --table-drag-handle-color: #7f7f7f;
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: transparent;
  --table-header-border-color: #7d7d7d;
  --table-header-border-width: 1px;
  --table-header-color: #0e0e0e;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(207, 77%, 54%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(206, 77.77%, 58.05%);
  --table-text-size: 15px;
  --table-thead-background-color: hsla(207, 77%, 54%,0.1);
  --tag-background: hsla(207, 77%, 54%, 0.1);
  --tag-background-hover: hsla(207, 77%, 54%, 0.2);
  --tag-border-color: hsla(207, 77%, 54%, 0.15);
  --tag-border-color-hover: hsla(207, 77%, 54%, 0.15);
  --tag-color: hsl(207, 77%, 54%);
  --tag-color-hover: hsl(207, 77%, 54%);
  --tag-size: 0.875em;
  --text-accent: hsl(207, 77%, 54%);
  --text-accent-hover: hsl(204, 78.54%, 62.1%);
  --text-error: #e75545;
  --text-faint: #7f7f7f;
  --text-folder-file-icon: hsl(206, 77.77%, 58.05%);
  --text-highlight: #0e0e0e;
  --text-highlight-bg: hsla(34, 100%, 80%, 0.847);
  --text-muted: #7f7f7f;
  --text-normal: #0e0e0e;
  --text-selection: #a9d1c859;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --theme-color: hsl(206, 77.77%, 58.05%);
  --theme-color-translucent-001: hsla(207, 77%, 54%,0.01);
  --theme-color-translucent-005: hsla(207, 77%, 54%,0.05);
  --theme-color-translucent-01: hsla(207, 77%, 54%,0.1);
  --theme-color-translucent-015: hsla(207, 77%, 54%,0.15);
  --theme-color-translucent-02: hsla(207, 77%, 54%,0.2);
  --theme-color-translucent-04: hsla(207, 77%, 54%,0.4);
  --theme-color-translucent-06: hsla(207, 77%, 54%,0.6);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link: #db4e4ecc;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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

html[saved-theme="light"] body .callout[data-callout="stickies3"] {
  --accent-l-alt: 48.6%;
  --activeline-background: hsla(207, 77%, 54%,0.05);
  --background-asymm-split-left: #f3f3f3;
  --background-modifier-active-hover: hsla(207, 77%, 54%, 0.1);
  --background-modifier-border: #dddddd;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e68787;
  --background-modifier-error-hover: #FF9494;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #A4E7C3;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-popover: #fafafa;
  --background-primary: #ffffff;
  --background-primary-alt: #e9e9e9;
  --background-secondary: #fcfcfc;
  --background-secondary-alt: #f3f3f3;
  --background-titlebar-inner: hsla(207, 77%, 54%, 10%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(206, 77.77%, 58.05%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --bt-bubble-border-color: #dddddd;
  --bt-indentation-gradient-color-1: hsl(206, 77.77%, 58.05%);
  --button-corner-shape: round;
  --button-radius: 5px;
  --calendar-active-color: hsla(207, 77%, 54%,0.2);
  --calendar-hover-color: hsla(207, 77%, 54%,0.1);
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 5px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #0e0e0e;
  --checkbox-border-color: #7f7f7f;
  --checkbox-border-color-hover: #7f7f7f;
  --checkbox-color: hsl(206, 77.77%, 58.05%);
  --checkbox-color-hover: hsl(204, 78.54%, 62.1%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-done-color: #7f7f7f;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #000000;
  --cloze-decoration-color-2: hsl(206, 77.77%, 58.05%);
  --cloze-decoration-color-3: hsl(206, 77.77%, 58.05%);
  --code-active-line-background-color: hsla(207, 77%, 54%,0.05);
  --code-atom: #cc7523;
  --code-attribute: #BF616A;
  --code-background: #e6e6e671;
  --code-border-color: #dddddd;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #068a5e;
  --code-function: #BF616A;
  --code-hr: #7f7f7f;
  --code-important: #3bd4da;
  --code-keyword: #3bd4da;
  --code-language: #7f7f7f;
  --code-normal: #000000;
  --code-operator: #5e81ac;
  --code-property: #5e81ac;
  --code-punctuation: #7f7f7f;
  --code-qualifier: #88C0D0;
  --code-radius: 5px;
  --code-selection-background: #a9d1c859;
  --code-selection-color: #000000;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-string-2: #cc7523;
  --code-tag: #c74df7;
  --code-type: #BF616A;
  --code-value: #A3BE8C;
  --collapse-icon-color: #7f7f7f;
  --collapse-icon-color-collapsed: hsl(207, 77%, 54%);
  --color-accent: hsl(207, 77%, 54%);
  --color-accent-1: hsl(206, 77.77%, 58.05%);
  --color-accent-2: hsl(204, 78.54%, 62.1%);
  --color-accent-hsl: 207, 77%, 54%;
  --color-highlight-1: #0e0e0e;
  --color-highlight-2: #0e0e0e;
  --color-highlight-3: #0e0e0e;
  --custom-titlebar-bg: #f3f3f3;
  --divider-color: #e3e3e3;
  --divider-color-hover: hsl(206, 77.77%, 58.05%);
  --divider-vertical-height: 100%;
  --dropdown-background: #efefef;
  --dropdown-background-hover: #e6e6e6;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: hsl(207, 77%, 54%);
  --flair-background: #efefef;
  --flair-color: #0e0e0e;
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
  --font-size-outline: 13px;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-canvas-bg: #ffffff;
  --graph-circle-fill-highlight: hsl(206, 77.77%, 58.05%);
  --graph-line: #b1b1b1;
  --graph-line-fill-highlight: rgb(70, 142, 235);
  --graph-node: #7f7f7f;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(207, 77%, 54%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #7f7f7f;
  --graph-text: #0e0e0e;
  --h1-bg-color: color-mix(in srgb, hsl(216, 88%, 26%) 15%, transparent);
  --h1-color: hsl(216, 88%, 26%);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-bg-color: color-mix(in srgb, hsl(212, 100%, 33%) 15%, transparent);
  --h2-color: hsl(212, 100%, 33%);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-bg-color: color-mix(in srgb, hsl(210, 86%, 39%) 15%, transparent);
  --h3-color: hsl(210, 86%, 39%);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-bg-color: color-mix(in srgb, hsl(208, 58%, 49%) 15%, transparent);
  --h4-color: hsl(208, 58%, 49%);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-bg-color: color-mix(in srgb, hsl(209, 70%, 62%) 15%, transparent);
  --h5-color: hsl(209, 70%, 62%);
  --h5-line-height: 1.5;
  --h6-bg-color: color-mix(in srgb, hsl(209, 65%, 72%) 15%, transparent);
  --h6-color: hsl(209, 65%, 72%);
  --h6-line-height: 1.5;
  --he-title-bar-active-action: hsl(206, 77.77%, 58.05%);
  --he-title-bar-active-bg: hsla(207, 77%, 54%,0.05);
  --he-title-bar-active-fg: #0e0e0e;
  --he-title-bar-active-pinned-bg: hsla(207, 77%, 54%,0.05);
  --he-title-bar-inactive-action: #0e0e0e;
  --he-title-bar-inactive-bg: hsla(207, 77%, 54%,0.01);
  --he-title-bar-inactive-fg: #7f7f7f;
  --he-title-bar-inactive-pinned-bg: hsla(207, 77%, 54%,0.01);
  --heading-formatting: #7f7f7f;
  --heading-spacing: 2.5rem;
  --hr-color: #dddddd;
  --hr-color-1: hsl(206, 77.77%, 58.05%);
  --hr-color-2: hsl(206, 77.77%, 58.05%);
  --hr-color-3: hsl(206, 77.77%, 58.05%);
  --hr-color-4: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-1: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-2: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-3: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-4: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-bg-color: hsla(207, 77%, 54%,0.15);
  --hr-color-numbers-color: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-1: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-2: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-3: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-4: hsl(206, 77.77%, 58.05%);
  --hr-numbers-text-stroke: #0e0e0e;
  --interactive-accent: hsl(206, 77.77%, 58.05%);
  --interactive-accent-hover: hsl(204, 78.54%, 62.1%);
  --interactive-accent-hsl: 207, 77%, 54%;
  --interactive-hover: #e6e6e6;
  --interactive-normal: #efefef;
  --internal-link-color: hsl(207, 77%, 54%);
  --link-color: hsl(207, 77%, 54%);
  --link-color-hover: hsl(204, 78.54%, 62.1%);
  --link-external-color: hsl(207, 77%, 54%);
  --link-external-color-hover: hsl(204, 78.54%, 62.1%);
  --link-unresolved-color: hsl(207, 77%, 54%);
  --link-unresolved-decoration-color: #db4e4ecc;
  --link-weight: 400;
  --list-indent: 2.25em;
  --list-ol-number-color: #7f7f7f;
  --list-ul-marker-color: #7f7f7f;
  --loading-diy-text-color: #0e0e0e;
  --matrix-1: #7cdddd65;
  --matrix-2: #8ce38465;
  --matrix-4: #eeb36f65;
  --matrix-5: #f18e8e65;
  --menu-background: #fcfcfc;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --mjx-inline-math-color: #0e0e0e;
  --mjx-math-color: #0e0e0e;
  --page-border-bottom: #f3f3f3;
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --print-em-color: #099d4e;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #ddddddd9;
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #dcdcdcbe;
  --search-clear-button-color: #7f7f7f;
  --search-icon-color: #7f7f7f;
  --search-result-file-title-color: #0e0e0e;
  --setting-group-heading-color: #0e0e0e;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #e9e9e9;
  --setting-items-border-color: #dddddd;
  --setting-items-padding: 20px;
  --setting-items-radius: 15px;
  --shiki-active-tab-border-color: #7f7f7f;
  --shiki-code-background: #e6e6e671;
  --shiki-code-block-border-radius: 5px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #7f7f7f;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #7f7f7f;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #7f7f7f;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #dddddd;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #7f7f7f;
  --shiki-gutter-text-color-highlight: #7f7f7f;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #7f7f7f;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #7f7f7f;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e3e3e3;
  --tab-radius: 5px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #fcfcfc;
  --tab-switcher-menubar-background: linear-gradient(to top, #fcfcfc, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(207, 77%, 54%);
  --tab-text-color: #7f7f7f;
  --tab-text-color-active: #7f7f7f;
  --tab-text-color-focused: #7f7f7f;
  --tab-text-color-focused-active: #7f7f7f;
  --tab-text-color-focused-active-current: #0e0e0e;
  --tab-text-color-focused-highlighted: hsl(207, 77%, 54%);
  --table-add-button-border-color: #dddddd;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(206, 77.77%, 58.05%);
  --table-drag-handle-color: #7f7f7f;
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: transparent;
  --table-header-border-color: #7d7d7d;
  --table-header-border-width: 1px;
  --table-header-color: #0e0e0e;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(207, 77%, 54%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(206, 77.77%, 58.05%);
  --table-text-size: 15px;
  --table-thead-background-color: hsla(207, 77%, 54%,0.1);
  --tag-background: hsla(207, 77%, 54%, 0.1);
  --tag-background-hover: hsla(207, 77%, 54%, 0.2);
  --tag-border-color: hsla(207, 77%, 54%, 0.15);
  --tag-border-color-hover: hsla(207, 77%, 54%, 0.15);
  --tag-color: hsl(207, 77%, 54%);
  --tag-color-hover: hsl(207, 77%, 54%);
  --tag-size: 0.875em;
  --text-accent: hsl(207, 77%, 54%);
  --text-accent-hover: hsl(204, 78.54%, 62.1%);
  --text-error: #e75545;
  --text-faint: #7f7f7f;
  --text-folder-file-icon: hsl(206, 77.77%, 58.05%);
  --text-highlight: #0e0e0e;
  --text-highlight-bg: hsla(34, 100%, 80%, 0.847);
  --text-muted: #7f7f7f;
  --text-normal: #0e0e0e;
  --text-selection: #a9d1c859;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --theme-color: hsl(206, 77.77%, 58.05%);
  --theme-color-translucent-001: hsla(207, 77%, 54%,0.01);
  --theme-color-translucent-005: hsla(207, 77%, 54%,0.05);
  --theme-color-translucent-01: hsla(207, 77%, 54%,0.1);
  --theme-color-translucent-015: hsla(207, 77%, 54%,0.15);
  --theme-color-translucent-02: hsla(207, 77%, 54%,0.2);
  --theme-color-translucent-04: hsla(207, 77%, 54%,0.4);
  --theme-color-translucent-06: hsla(207, 77%, 54%,0.6);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link: #db4e4ecc;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 20px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(8, 185, 78, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(14, 14, 14);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="timeline"] {
  --accent-l-alt: 48.6%;
  --activeline-background: hsla(207, 77%, 54%,0.05);
  --background-asymm-split-left: #f3f3f3;
  --background-modifier-active-hover: hsla(207, 77%, 54%, 0.1);
  --background-modifier-border: #dddddd;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e68787;
  --background-modifier-error-hover: #FF9494;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #A4E7C3;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-popover: #fafafa;
  --background-primary: #ffffff;
  --background-primary-alt: #e9e9e9;
  --background-secondary: #fcfcfc;
  --background-secondary-alt: #f3f3f3;
  --background-titlebar-inner: hsla(207, 77%, 54%, 10%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(206, 77.77%, 58.05%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --bt-bubble-border-color: #dddddd;
  --bt-indentation-gradient-color-1: hsl(206, 77.77%, 58.05%);
  --button-corner-shape: round;
  --button-radius: 5px;
  --calendar-active-color: hsla(207, 77%, 54%,0.2);
  --calendar-hover-color: hsla(207, 77%, 54%,0.1);
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 31, 172, 139);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 5px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 5px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #0e0e0e;
  --checkbox-border-color: #7f7f7f;
  --checkbox-border-color-hover: #7f7f7f;
  --checkbox-color: hsl(206, 77.77%, 58.05%);
  --checkbox-color-hover: hsl(204, 78.54%, 62.1%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-done-color: #7f7f7f;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #000000;
  --cloze-decoration-color-2: hsl(206, 77.77%, 58.05%);
  --cloze-decoration-color-3: hsl(206, 77.77%, 58.05%);
  --code-active-line-background-color: hsla(207, 77%, 54%,0.05);
  --code-atom: #cc7523;
  --code-attribute: #BF616A;
  --code-background: #e6e6e671;
  --code-border-color: #dddddd;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #068a5e;
  --code-function: #BF616A;
  --code-hr: #7f7f7f;
  --code-important: #3bd4da;
  --code-keyword: #3bd4da;
  --code-language: #7f7f7f;
  --code-normal: #000000;
  --code-operator: #5e81ac;
  --code-property: #5e81ac;
  --code-punctuation: #7f7f7f;
  --code-qualifier: #88C0D0;
  --code-radius: 5px;
  --code-selection-background: #a9d1c859;
  --code-selection-color: #000000;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-string-2: #cc7523;
  --code-tag: #c74df7;
  --code-type: #BF616A;
  --code-value: #A3BE8C;
  --collapse-icon-color: #7f7f7f;
  --collapse-icon-color-collapsed: hsl(207, 77%, 54%);
  --color-accent: hsl(207, 77%, 54%);
  --color-accent-1: hsl(206, 77.77%, 58.05%);
  --color-accent-2: hsl(204, 78.54%, 62.1%);
  --color-accent-hsl: 207, 77%, 54%;
  --color-highlight-1: #0e0e0e;
  --color-highlight-2: #0e0e0e;
  --color-highlight-3: #0e0e0e;
  --custom-titlebar-bg: #f3f3f3;
  --divider-color: #e3e3e3;
  --divider-color-hover: hsl(206, 77.77%, 58.05%);
  --divider-vertical-height: 100%;
  --dropdown-background: #efefef;
  --dropdown-background-hover: #e6e6e6;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: hsl(207, 77%, 54%);
  --flair-background: #efefef;
  --flair-color: #0e0e0e;
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
  --font-size-outline: 13px;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-canvas-bg: #ffffff;
  --graph-circle-fill-highlight: hsl(206, 77.77%, 58.05%);
  --graph-line: #b1b1b1;
  --graph-line-fill-highlight: rgb(70, 142, 235);
  --graph-node: #7f7f7f;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(207, 77%, 54%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #7f7f7f;
  --graph-text: #0e0e0e;
  --h1-bg-color: color-mix(in srgb, hsl(216, 88%, 26%) 15%, transparent);
  --h1-color: hsl(216, 88%, 26%);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-bg-color: color-mix(in srgb, hsl(212, 100%, 33%) 15%, transparent);
  --h2-color: hsl(212, 100%, 33%);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-bg-color: color-mix(in srgb, hsl(210, 86%, 39%) 15%, transparent);
  --h3-color: hsl(210, 86%, 39%);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-bg-color: color-mix(in srgb, hsl(208, 58%, 49%) 15%, transparent);
  --h4-color: hsl(208, 58%, 49%);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h5-bg-color: color-mix(in srgb, hsl(209, 70%, 62%) 15%, transparent);
  --h5-color: hsl(209, 70%, 62%);
  --h5-line-height: 1.5;
  --h6-bg-color: color-mix(in srgb, hsl(209, 65%, 72%) 15%, transparent);
  --h6-color: hsl(209, 65%, 72%);
  --h6-line-height: 1.5;
  --he-title-bar-active-action: hsl(206, 77.77%, 58.05%);
  --he-title-bar-active-bg: hsla(207, 77%, 54%,0.05);
  --he-title-bar-active-fg: #0e0e0e;
  --he-title-bar-active-pinned-bg: hsla(207, 77%, 54%,0.05);
  --he-title-bar-inactive-action: #0e0e0e;
  --he-title-bar-inactive-bg: hsla(207, 77%, 54%,0.01);
  --he-title-bar-inactive-fg: #7f7f7f;
  --he-title-bar-inactive-pinned-bg: hsla(207, 77%, 54%,0.01);
  --heading-formatting: #7f7f7f;
  --heading-spacing: 2.5rem;
  --hr-color: #dddddd;
  --hr-color-1: hsl(206, 77.77%, 58.05%);
  --hr-color-2: hsl(206, 77.77%, 58.05%);
  --hr-color-3: hsl(206, 77.77%, 58.05%);
  --hr-color-4: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-1: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-2: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-3: hsl(206, 77.77%, 58.05%);
  --hr-color-icon-4: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-bg-color: hsla(207, 77%, 54%,0.15);
  --hr-color-numbers-color: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-1: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-2: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-3: hsl(206, 77.77%, 58.05%);
  --hr-color-numbers-line-4: hsl(206, 77.77%, 58.05%);
  --hr-numbers-text-stroke: #0e0e0e;
  --interactive-accent: hsl(206, 77.77%, 58.05%);
  --interactive-accent-hover: hsl(204, 78.54%, 62.1%);
  --interactive-accent-hsl: 207, 77%, 54%;
  --interactive-hover: #e6e6e6;
  --interactive-normal: #efefef;
  --internal-link-color: hsl(207, 77%, 54%);
  --link-color: hsl(207, 77%, 54%);
  --link-color-hover: hsl(204, 78.54%, 62.1%);
  --link-external-color: hsl(207, 77%, 54%);
  --link-external-color-hover: hsl(204, 78.54%, 62.1%);
  --link-unresolved-color: hsl(207, 77%, 54%);
  --link-unresolved-decoration-color: #db4e4ecc;
  --link-weight: 400;
  --list-indent: 2.25em;
  --list-ol-number-color: #7f7f7f;
  --list-ul-marker-color: #7f7f7f;
  --loading-diy-text-color: #0e0e0e;
  --matrix-1: #7cdddd65;
  --matrix-2: #8ce38465;
  --matrix-4: #eeb36f65;
  --matrix-5: #f18e8e65;
  --menu-background: #fcfcfc;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --mjx-inline-math-color: #0e0e0e;
  --mjx-math-color: #0e0e0e;
  --page-border-bottom: #f3f3f3;
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --print-em-color: #099d4e;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #ddddddd9;
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #dcdcdcbe;
  --search-clear-button-color: #7f7f7f;
  --search-icon-color: #7f7f7f;
  --search-result-file-title-color: #0e0e0e;
  --setting-group-heading-color: #0e0e0e;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #e9e9e9;
  --setting-items-border-color: #dddddd;
  --setting-items-padding: 20px;
  --setting-items-radius: 15px;
  --shiki-active-tab-border-color: #7f7f7f;
  --shiki-code-background: #e6e6e671;
  --shiki-code-block-border-radius: 5px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #7f7f7f;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #7f7f7f;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #7f7f7f;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #dddddd;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #7f7f7f;
  --shiki-gutter-text-color-highlight: #7f7f7f;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #7f7f7f;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #7f7f7f;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #ffffff;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 13px;
  --tab-outline-color: #e3e3e3;
  --tab-radius: 5px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #fcfcfc;
  --tab-switcher-menubar-background: linear-gradient(to top, #fcfcfc, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(207, 77%, 54%);
  --tab-text-color: #7f7f7f;
  --tab-text-color-active: #7f7f7f;
  --tab-text-color-focused: #7f7f7f;
  --tab-text-color-focused-active: #7f7f7f;
  --tab-text-color-focused-active-current: #0e0e0e;
  --tab-text-color-focused-highlighted: hsl(207, 77%, 54%);
  --table-add-button-border-color: #dddddd;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(206, 77.77%, 58.05%);
  --table-drag-handle-color: #7f7f7f;
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: transparent;
  --table-header-border-color: #7d7d7d;
  --table-header-border-width: 1px;
  --table-header-color: #0e0e0e;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(207, 77%, 54%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(206, 77.77%, 58.05%);
  --table-text-size: 15px;
  --table-thead-background-color: hsla(207, 77%, 54%,0.1);
  --tag-background: hsla(207, 77%, 54%, 0.1);
  --tag-background-hover: hsla(207, 77%, 54%, 0.2);
  --tag-border-color: hsla(207, 77%, 54%, 0.15);
  --tag-border-color-hover: hsla(207, 77%, 54%, 0.15);
  --tag-color: hsl(207, 77%, 54%);
  --tag-color-hover: hsl(207, 77%, 54%);
  --tag-size: 0.875em;
  --text-accent: hsl(207, 77%, 54%);
  --text-accent-hover: hsl(204, 78.54%, 62.1%);
  --text-error: #e75545;
  --text-faint: #7f7f7f;
  --text-folder-file-icon: hsl(206, 77.77%, 58.05%);
  --text-highlight: #0e0e0e;
  --text-highlight-bg: hsla(34, 100%, 80%, 0.847);
  --text-muted: #7f7f7f;
  --text-normal: #0e0e0e;
  --text-selection: #a9d1c859;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --theme-color: hsl(206, 77.77%, 58.05%);
  --theme-color-translucent-001: hsla(207, 77%, 54%,0.01);
  --theme-color-translucent-005: hsla(207, 77%, 54%,0.05);
  --theme-color-translucent-01: hsla(207, 77%, 54%,0.1);
  --theme-color-translucent-015: hsla(207, 77%, 54%,0.15);
  --theme-color-translucent-02: hsla(207, 77%, 54%,0.2);
  --theme-color-translucent-04: hsla(207, 77%, 54%,0.4);
  --theme-color-translucent-06: hsla(207, 77%, 54%,0.6);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link: #db4e4ecc;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(31, 172, 139, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgba(31, 172, 139, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(31, 172, 139, 0.25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
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

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(0, 191, 188, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(14, 14, 14);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(8, 109, 221, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(14, 14, 14);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(236, 117, 0, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
  background-color: rgba(var(--callout-color), 0.15);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(14, 14, 14);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="cloze"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="icon"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="kanban"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="stickies"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="stickies2"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="stickies3"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="timeline"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg t='1649346326592' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2210'%3E%3Cpath d='M384 170.666667m42.666667 0l512 0q42.666667 0 42.666666 42.666666l0 0q0 42.666667-42.666666 42.666667l-512 0q-42.666667 0-42.666667-42.666667l0 0q0-42.666667 42.666667-42.666666Z' p-id='2211'%3E%3C/path%3E%3Cpath d='M384 469.333333m42.666667 0l512 0q42.666667 0 42.666666 42.666667l0 0q0 42.666667-42.666666 42.666667l-512 0q-42.666667 0-42.666667-42.666667l0 0q0-42.666667 42.666667-42.666667Z' p-id='2212'%3E%3C/path%3E%3Cpath d='M384 768m42.666667 0l512 0q42.666667 0 42.666666 42.666667l0 0q0 42.666667-42.666666 42.666666l-512 0q-42.666667 0-42.666667-42.666666l0 0q0-42.666667 42.666667-42.666667Z' p-id='2213'%3E%3C/path%3E%3Cpath d='M239.835143 127.973411m15.084945 15.084944l60.339779 60.339779q15.084945 15.084945 0 30.169889l-60.339779 60.339779q-15.084945 15.084945-30.169889 0l-60.339779-60.339779q-15.084945-15.084945 0-30.169889l60.339779-60.339779q15.084945-15.084945 30.169889 0Z' p-id='2214'%3E%3C/path%3E%3Cpath d='M239.831988 426.647696m15.084944 15.084945l60.339779 60.339778q15.084945 15.084945 0 30.16989l-60.339779 60.339778q-15.084945 15.084945-30.169889 0l-60.339779-60.339778q-15.084945-15.084945 0-30.16989l60.339779-60.339778q15.084945-15.084945 30.169889 0Z' p-id='2215'%3E%3C/path%3E%3Cpath d='M239.828832 725.321982m15.084944 15.084944l60.339779 60.339779q15.084945 15.084945 0 30.169889l-60.339779 60.339779q-15.084945 15.084945-30.169889 0l-60.339779-60.339779q-15.084945-15.084945 0-30.169889l60.339779-60.339779q15.084945-15.084945 30.169889 0Z' p-id='2216'%3E%3C/path%3E%3Cpath d='M213.333333 853.333333H85.333333a42.666667 42.666667 0 0 1-42.666666-42.666666V213.333333a42.666667 42.666667 0 0 1 42.666666-42.666666h128v85.333333H138.666667a10.709333 10.709333 0 0 0-10.666667 10.666667v192a10.709333 10.709333 0 0 0 10.666667 10.666666H213.333333v85.333334H138.666667a10.709333 10.709333 0 0 0-10.666667 10.666666v192a10.709333 10.709333 0 0 0 10.666667 10.666667H213.333333v85.333333z' p-id='2217'%3E%3C/path%3E%3C/svg%3E'");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(255, 255, 255, 0.824);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-width: 0px;
  border-left-color: rgb(221, 221, 221);
  border-left-width: 0px;
  border-right-color: rgb(221, 221, 221);
  border-right-width: 0px;
  border-top-color: rgb(221, 221, 221);
  border-top-width: 0px;
  color: var(--text-normal, rgb(14, 14, 14));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-width: 0px;
  box-shadow: 0 0 10px 1px var(--prompt-box-shadow);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  background-color: var(--scrollbar-active-thumb-bg, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(14, 14, 14));
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(14, 14, 14) none 0px;
  text-decoration-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--theme-color-translucent-015, rgba(47, 147, 228, 0.15));
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgba(255, 255, 255, 0.824);
  border-bottom-color: rgb(252, 252, 252);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--theme-color-translucent-015, rgba(47, 147, 228, 0.15));
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--theme-color-translucent-015, rgba(47, 147, 228, 0.15));
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(207, 77%, 54%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(207, 77%, 54%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(207, 77%, 54%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(207, 77%, 54%, 0.15));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsl(207, 77%, 54%));
  --pill-color-hover: var(--tag-color-hover, hsl(207, 77%, 54%));
  --pill-color-remove: var(--tag-color, hsl(207, 77%, 54%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(207, 77%, 54%));
  background-color: var(--pill-background, rgba(47, 147, 228, 0.1));
  border-bottom-color: rgba(47, 147, 228, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(47, 147, 228, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(47, 147, 228, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(47, 147, 228, 0.15);
  border-top-width: 1px;
  color: var(--pill-color, rgb(47, 147, 228));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(47, 147, 228);
}

html[saved-theme="light"] body h1 {
  border-bottom-color: rgb(8, 55, 125);
  border-bottom-width: 0px;
  border-left-color: rgb(8, 55, 125);
  border-left-width: 0px;
  border-right-color: rgb(8, 55, 125);
  border-right-width: 0px;
  border-top-color: rgb(8, 55, 125);
  border-top-width: 0px;
  color: var(--h1-color, rgb(8, 55, 125));
  font-family: var(--h1-font, "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h1-size, 25px);
  letter-spacing: var(--h1-letter-spacing, -0.375px);
  line-height: var(--h1-line-height, 30px);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(8, 55, 125));
  font-size: var(--inline-title-size, 25px);
}

html[saved-theme="light"] body h2 {
  background-color: var( --simple-orange, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(0, 79, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 79, 168);
  border-left-width: 0px;
  border-right-color: rgb(0, 79, 168);
  border-right-width: 0px;
  border-top-color: rgb(0, 79, 168);
  border-top-width: 0px;
  color: var(--h2-color, rgb(0, 79, 168));
  font-family: var(--h2-font, "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h2-size, 23px);
  letter-spacing: var(--h2-letter-spacing, -0.253px);
  line-height: var(--h2-line-height, 27.6px);
  margin-bottom: calc(var(--p-spacing)*0.5);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: calc(var(--p-spacing)*0.5);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(8, 55, 125);
  border-bottom-width: 0px;
  border-left-color: rgb(8, 55, 125);
  border-left-width: 0px;
  border-right-color: rgb(8, 55, 125);
  border-right-width: 0px;
  border-top-color: rgb(8, 55, 125);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(8, 55, 125));
  font-family: var(--inline-title-font, "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--inline-title-size, 25px);
  letter-spacing: -0.375px;
  line-height: var(--inline-title-line-height, 30px);
  margin-bottom: 12.5px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h3 {
  background-color: var( --simple-orange, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(14, 99, 185);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 99, 185);
  border-left-width: 0px;
  border-right-color: rgb(14, 99, 185);
  border-right-width: 0px;
  border-top-color: rgb(14, 99, 185);
  border-top-width: 0px;
  color: var(--h3-color, rgb(14, 99, 185));
  font-family: var(--h3-font, "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h3-size, 21px);
  letter-spacing: var(--h3-letter-spacing, -0.168px);
  line-height: var(--h3-line-height, 27.3px);
  margin-bottom: calc(var(--p-spacing)*0.5);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: calc(var(--p-spacing)*0.5);
}

html[saved-theme="light"] body h4 {
  background-color: var( --simple-orange, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(52, 130, 197);
  border-bottom-width: 0px;
  border-left-color: rgb(52, 130, 197);
  border-left-width: 0px;
  border-right-color: rgb(52, 130, 197);
  border-right-width: 0px;
  border-top-color: rgb(52, 130, 197);
  border-top-width: 0px;
  color: var(--h4-color, rgb(52, 130, 197));
  font-family: var(--h4-font, "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h4-size, 19px);
  letter-spacing: var(--h4-letter-spacing, -0.095px);
  line-height: var(--h4-line-height, 26.6px);
  margin-bottom: calc(var(--p-spacing)*0.5);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: calc(var(--p-spacing)*0.5);
}

html[saved-theme="light"] body h5 {
  background-color: var( --simple-orange, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(90, 160, 226);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 160, 226);
  border-left-width: 0px;
  border-right-color: rgb(90, 160, 226);
  border-right-width: 0px;
  border-top-color: rgb(90, 160, 226);
  border-top-width: 0px;
  color: var(--h5-color, rgb(90, 160, 226));
  font-family: var(--h5-font, "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  font-size: var(--h5-size, 17px);
  letter-spacing: var(--h5-letter-spacing, -0.034px);
  line-height: var(--h5-line-height, 25.5px);
  margin-bottom: calc(var(--p-spacing)*0.5);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: calc(var(--p-spacing)*0.5);
}

html[saved-theme="light"] body h6 {
  border-bottom-color: rgb(137, 185, 230);
  border-bottom-width: 0px;
  border-left-color: rgb(137, 185, 230);
  border-left-width: 0px;
  border-right-color: rgb(137, 185, 230);
  border-right-width: 0px;
  border-top-color: rgb(137, 185, 230);
  border-top-width: 0px;
  color: var(--h6-color, rgb(137, 185, 230));
  font-family: var(--h6-font, "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 8px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(227, 227, 227);
  border-bottom-width: 0px;
  border-left-color: rgb(227, 227, 227);
  border-left-width: 0px;
  border-right-color: rgb(227, 227, 227);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(8, 109, 221, 0.15);
  border-left-width: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container {
  background-color: var(--scrollbar-active-thumb-bg, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: color-mix(in hsl, var(--tab-color), black 20%);
  font-family: var(--font-family-folder-file-title, "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif);
  font-weight: var(--nav-item-weight, 600);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: color-mix(in hsl, var(--tab-color), black 20%);
  font-family: var(--font-family-folder-file-title, "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif);
  font-weight: var(--nav-item-weight, 600);
}

html[saved-theme="light"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="light"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 600);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(127, 127, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(127, 127, 127);
  border-left-width: 0px;
  border-right-color: rgb(127, 127, 127);
  border-right-width: 0px;
  border-top-color: rgb(127, 127, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--icon-color, rgb(127, 127, 127));
}`,
    footer: `html[saved-theme="light"] body footer {
  --bar-height: calc(22px + var(--bar-vertical-padding));
  background-color: var(--status-bar-bg, rgb(243, 243, 243));
  border-bottom-color: rgb(219, 219, 220);
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 220);
  border-left-width: 0px;
  border-right-color: rgb(219, 219, 220);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 220);
  border-top-left-radius: 7px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(127, 127, 127));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(127, 127, 127);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(14, 14, 14);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(252, 92, 101);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(221, 221, 221);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-folder-file, rgb(39, 39, 39));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(39, 39, 39);
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(252, 92, 101);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(221, 221, 221);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(39, 39, 39);
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--text-folder-file, rgb(39, 39, 39));
}

html[saved-theme="light"] body ul.section-ul {
  background-color: var(--scrollbar-active-thumb-bg, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(65, 159, 231);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(65, 159, 231);
  border-left-width: 0px;
  border-right-color: rgb(65, 159, 231);
  border-right-width: 0px;
  border-top-color: rgb(65, 159, 231);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--theme-color, rgb(65, 159, 231));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(65, 159, 231);
  stroke: rgb(65, 159, 231);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(127, 127, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(127, 127, 127);
  border-left-width: 0px;
  border-right-color: rgb(127, 127, 127);
  border-right-width: 0px;
  border-top-color: rgb(127, 127, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: rgb(127, 127, 127);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(127, 127, 127));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .canvas-node-file {
  --link-unresolved-decoration-color: var(--unresolved-link, #db4e4ecc);
  background-color: var(--bg-color-highlight-3, rgba(0, 0, 0, 0));
  color: var(--unresolved-link, rgb(14, 14, 14));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(14, 14, 14);
}`,
    bases: `html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgba(255, 255, 255, 0.44));
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgba(47, 147, 228, 0.1);
  border-color: rgb(125, 125, 125);
  color: var(--table-header-color, rgb(14, 14, 14));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-width: 0px;
  border-left-color: rgb(221, 221, 221);
  border-left-width: 0px;
  border-right-color: rgb(221, 221, 221);
  border-right-width: 0px;
  border-top-color: rgb(221, 221, 221);
  border-top-width: 0px;
  color: var(--text-muted, rgb(127, 127, 127));
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(127, 127, 127);
  border-bottom-width: 0px;
  border-left-color: rgb(127, 127, 127);
  border-left-width: 0px;
  border-right-color: rgb(127, 127, 127);
  border-right-width: 0px;
  border-top-color: rgb(127, 127, 127);
  border-top-width: 0px;
  color: rgb(127, 127, 127);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(127, 127, 127);
  border-bottom-width: 0px;
  border-left-color: rgb(127, 127, 127);
  border-left-width: 0px;
  border-right-color: rgb(127, 127, 127);
  border-right-width: 0px;
  border-top-color: rgb(127, 127, 127);
  border-top-width: 0px;
  color: rgb(127, 127, 127);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgb(127, 127, 127);
  font-family: var(--metadata-label-font, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgb(127, 127, 127);
  font-family: var(--metadata-input-font, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(127, 127, 127);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(127, 127, 127);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(207, 77%, 54%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(207, 77%, 54%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(207, 77%, 54%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(207, 77%, 54%, 0.15));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsl(207, 77%, 54%));
  --pill-color-hover: var(--tag-color-hover, hsl(207, 77%, 54%));
  --pill-color-remove: var(--tag-color, hsl(207, 77%, 54%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(207, 77%, 54%));
  background-color: var(--pill-background, rgba(47, 147, 228, 0.1));
  color: var(--pill-color, rgb(47, 147, 228));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(127, 127, 127);
}

html[saved-theme="light"] body div#quartz-root {
  color: var(--text-normal, rgb(14, 14, 14));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(252, 252, 252));
  border-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(243, 243, 243));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(14, 14, 14);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .navigation-progress {
  --bar-height: calc(22px + var(--bar-vertical-padding));
  background-color: var(--status-bar-bg, rgb(243, 243, 243));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
  color: var(--text-normal, rgb(14, 14, 14));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-size: var(--font-size-file-header-title, 11.7px);
  font-weight: 700;
  line-height: 15.21px;
}

html[saved-theme="light"] body abbr {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(127, 127, 127);
  border-bottom-width: 0px;
  border-left-color: rgb(127, 127, 127);
  border-left-width: 0px;
  border-right-color: rgb(127, 127, 127);
  border-right-width: 0px;
  border-top-color: rgb(127, 127, 127);
  border-top-width: 0px;
  color: var(--text-normal, rgb(127, 127, 127));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgba(230, 230, 230, 0.443));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(0, 0, 0));
  font-family: var(--font-monospace, "??", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
}

html[saved-theme="light"] body sub {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body summary {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body sup {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(47, 147, 228, 0.1));
  border-bottom-color: rgba(47, 147, 228, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(47, 147, 228, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(47, 147, 228, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(47, 147, 228, 0.15);
  border-top-width: 1px;
  color: var(--tag-color, rgb(47, 147, 228));
}`,
  },
};
