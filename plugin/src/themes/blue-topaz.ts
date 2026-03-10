import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "blue-topaz",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lucida-handwriting", "icons/boxicons"],
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
  --accent-l-alt: 51.45%;
  --accent-s: 64%;
  --accent-strong: #e7e7e7;
  --activeline-background: rgba(45, 130, 205, 0.05);
  --admonition-bg-color: #11111100;
  --aqua: #35bed0;
  --background-4-sliding-pane: #252525ed;
  --background-asymm-split-left: #000000;
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
  --background-modifier-active-hover: rgba(45, 130, 205, 0.1);
  --background-modifier-border: #343434;
  --background-modifier-border-1: #000000;
  --background-modifier-border-asymm: #343434;
  --background-modifier-border-checkbox: #7b7b7b;
  --background-modifier-border-hr: #3f3f3f;
  --background-modifier-box-shadow: rgba(228, 228, 228, 0.08);
  --background-modifier-error: #9b4343;
  --background-modifier-error-rgb: 155, 67, 67;
  --background-modifier-success: #539126;
  --background-modifier-success-rgb: 83, 145, 38;
  --background-nonoverlapping-note: #000000;
  --background-orange: #53422f;
  --background-panel-page-theme-dark-custom: url("https://");
  --background-panel-page-theme-light-custom: url("https://");
  --background-pink: #533b4a;
  --background-popover: #242424;
  --background-primary: #202020;
  --background-primary-alt: #444444;
  --background-purple: #443f57;
  --background-red: #683c3c;
  --background-secondary: #151515;
  --background-secondary-alt: #000000;
  --background-secondary-translucent: #2c2c2c26;
  --background-secondary-translucent-1: #2c2c2c26;
  --background-settings-workplace-theme-dark-custom: url("https://");
  --background-settings-workplace-theme-light-custom: url("https://");
  --background-titlebar-inner: rgba(45, 130, 205, 0.1);
  --background-transparent-black-or-white-1: #1b1b1b9a;
  --background-transparent-black-or-white-2: #1e1e1ebd;
  --background-transparent-black-or-white-3: #2f2f2f6c;
  --background-transparent-black-or-white-3-1: #00000064;
  --background-transparent-black-or-white-4: #7e7e7e1d;
  --background-transparent-black-or-white-5: #0f0f0f6c;
  --background-transparent-blue: #003e759a;
  --background-waves-color: #4A75DB8C;
  --background-yellow: #585536;
  --bases-cards-background: #202020;
  --bases-cards-cover-background: #444444;
  --bases-cards-radius: 7px;
  --bases-cards-shadow: 0 0 0 1px #343434;
  --bases-embed-border-color: #343434;
  --bases-embed-border-radius: 5px;
  --bases-group-heading-property-color: #8a8a8a;
  --bases-table-border-color: #4a4a4a;
  --bases-table-cell-background-active: #202020;
  --bases-table-cell-background-disabled: #444444;
  --bases-table-cell-background-selected: rgba(45, 130, 205, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(45, 130, 205);
  --bases-table-container-border-radius: 5px;
  --bases-table-group-background: #444444;
  --bases-table-header-background: #202020;
  --bases-table-header-color: #8a8a8a;
  --bases-table-summary-background: #202020;
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
  --blockquote-border-color: rgb(45, 130, 205);
  --blue: #a0c7e9;
  --blur-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --blur-codebox-frosted-glass: 2;
  --blur-depth: 10px;
  --blur-depth-cp: 10px;
  --blur-p-kanban-frosted-glass: 5;
  --bodyFont: var(--font-text);
  --bottom-padding-value: 0em;
  --brightness-4-bg: 0.9;
  --brightness-4-bg-cp: 0.9;
  --bt-bubble-background-color: transparent;
  --bt-bubble-border-color: #343434;
  --bt-bubble-layout-padding: 8px;
  --bt-colorful-indentation-width: 1px;
  --bt-connected-indent-line-color: #926a6a;
  --bt-indentation-gradient-color-1: rgb(45, 130, 205);
  --bt-indentation-gradient-color-2: transparent;
  --bt-indentation-line-image: url("");
  --bt-indentation-width-hover: 3px;
  --c-1: #da2400;
  --c-2: #ffb623;
  --c-3: #8c6e22;
  --calendar-active-color: rgba(45, 130, 205, 0.4);
  --calendar-hover-color: rgba(45, 130, 205, 0.2);
  --calendar-today-background-color: #8c4545;
  --calendar-week-background-color: #4a5842;
  --calendar-week-color: #a2df94;
  --calendar-week-hover: #61815c;
  --callout-radius: 5px;
  --canvas-background: #202020;
  --canvas-card-label-color: #797979;
  --canvas-card-opacity: 0.1;
  --canvas-controls-radius: 5px;
  --cards-width: 138px;
  --caret-color: #c6c6c6;
  --checkbox-border-color: #797979;
  --checkbox-border-color-hover: #8a8a8a;
  --checkbox-color: rgb(45, 130, 205);
  --checkbox-color-0: #3187d3;
  --checkbox-color-1: #a9a608;
  --checkbox-color-2: #1dac10;
  --checkbox-color-3: #ffd1d1;
  --checkbox-color-4: #625d4c;
  --checkbox-color-5: #9a67ae;
  --checkbox-color-6: #5f5f5f;
  --checkbox-color-hover: rgb(97, 175, 224);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-bg: #1d1d1d96;
  --checklist-bg-hover: #08080896;
  --checklist-color-1: #005aa486;
  --checklist-color-2: #00798986;
  --checklist-color-3: #12781586;
  --checklist-color-4: #897b0086;
  --checklist-color-5: #a4620086;
  --checklist-color-6: #ab100586;
  --checklist-color-7: #7f1f9086;
  --checklist-done-color: #8a8a8a;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #e7e7e7;
  --cloze-bg-color-3: transparent;
  --cloze-decoration: none;
  --cloze-decoration-2: dashed;
  --cloze-decoration-3: dashed;
  --cloze-decoration-color: red;
  --cloze-decoration-color-2: rgb(45, 130, 205);
  --cloze-decoration-color-3: rgb(45, 130, 205);
  --code-active-line-background-color: #111111eb;
  --code-atom: #da904b;
  --code-attribute: #cac685;
  --code-attribute-in-comment: #c792ea;
  --code-background: #1111118c;
  --code-border-color: #343434;
  --code-bracket: #ff5370;
  --code-builtin: #ffcb6b;
  --code-callee: #89ddff;
  --code-comment: #568060;
  --code-def: #82aaff;
  --code-definition: #82aaff;
  --code-error-bg: #ff5370;
  --code-function: #cac685;
  --code-header: #da7dae;
  --code-hr: #abb2bf;
  --code-important: #478fee;
  --code-keyword: #478fee;
  --code-language: #8a8a8a;
  --code-link: #696d70;
  --code-matching-bracket: #ffffff;
  --code-meta: #ffcb6b;
  --code-normal: #ebdbb2;
  --code-number: #ff5370;
  --code-operator: #a89984;
  --code-property: #a0c7e9;
  --code-punctuation: #abb2bf;
  --code-qualifier: #35bed0;
  --code-radius: 5px;
  --code-selection-background: #3b767160;
  --code-selection-color: #ebdbb2;
  --code-string: #abd58e;
  --code-string-2: #d6b87f;
  --code-tag: #db7c84;
  --code-tag-in-comment: #ff5370;
  --code-type: #cac685;
  --code-value: #abd58e;
  --code-variable: #db7c84;
  --code-variable-2: #53ada3;
  --code-variable-3: #e7852fe7;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #797979;
  --collapse-icon-color-collapsed: rgb(45, 130, 205);
  --color-accent: rgb(45, 130, 205);
  --color-accent-1: rgb(70, 155, 216);
  --color-accent-2: rgb(97, 175, 224);
  --color-accent-hsl: 208, 64%, 49%;
  --color-highlight-1: #c6c6c6;
  --color-highlight-2: #c6c6c6;
  --color-highlight-3: #c6c6c6;
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
  --custom-titlebar-bg: #000000;
  --dark: var(--text-normal);
  --darkblue: #478fee;
  --darkgray: var(--text-normal);
  --darkgreen: #568060;
  --day-planner-dot: #dfcf77;
  --day-planner-item-hover: #053c85;
  --day-planner-line: #dfcf77;
  --day-planner-pie: #f19c1c;
  --day-planner-timeline: #000000;
  --divider-color: #000000;
  --divider-color-hover: rgb(45, 130, 205);
  --dotted-notebook-dot-color: #c7c7c71f;
  --dropdown-background: #2b2b2b;
  --dropdown-background-hover: #373737;
  --embed-block-shadow-hover: 0 0 0 1px #343434, inset 0 0 0 1px #343434;
  --embed-border-start: 2px solid rgb(45, 130, 205);
  --embed-color: rgba(246, 250, 254, 0.055);
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
  --external-link-color: rgb(45, 130, 205);
  --fancy-cursor-width: 2px;
  --fancy-hr-icon: '😀';
  --fancy-hr-rotate: 0deg;
  --file-header-background: #202020;
  --file-header-background-focused: #202020;
  --file-header-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-line-width: 45rem;
  --flair-background: #2b2b2b;
  --flair-color: #c6c6c6;
  --folder-title: #ffffff;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-family-better-footnote: Arlrdbd, "Source Han Sans", "Segoe UI Emoji";
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-special-tag: "Lucida Handwriting", "Segoe UI Emoji";
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-family-tag: Bookerly, 'Inter', "Segoe UI", "Microsoft YaHei", STzhongsong, STSong, "Segoe UI Emoji", Serif;
  --font-family-vault: "Lucida Handwriting", "Segoe UI Emoji";
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
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
  --font-size-outline: 13px;
  --font-size-preview-blockquote: 1em;
  --font-size-preview-normal: 1em;
  --font-size-split: 0.85em;
  --font-size-tag: 0.85em;
  --font-size-vault-name: 1em;
  --font-style-em: italic;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text-theme: Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei";
  --font-weight-highlight-1: normal;
  --font-weight-highlight-2: normal;
  --font-weight-highlight-3: normal;
  --font-weight-inline-code: bold;
  --font-weight-strong: bold;
  --footnote-divider-color: #343434;
  --footnote-id-color: #8a8a8a;
  --footnote-id-color-no-occurrences: #797979;
  --footnote-radius: 5px;
  --graph-arrow: #c23917;
  --graph-attach: #b2cfe0bb;
  --graph-canvas-bg: #202020;
  --graph-circle: #55a2d6bb;
  --graph-circle-fill-highlight: rgb(45, 130, 205);
  --graph-circle-outline: transparent;
  --graph-control-bg: #00000080;
  --graph-line: #8c8c8c;
  --graph-line-fill-highlight: rgb(45, 130, 204);
  --graph-node: #8a8a8a;
  --graph-node-focused: rgb(45, 130, 205);
  --graph-node-unresolved: #797979;
  --graph-tag: #88d842bb;
  --graph-text: #c6c6c6;
  --graph-text-color: #B5B5B5;
  --graph-unresolved: #f08080de;
  --gray: var(--text-muted);
  --gray-1: #5C6370;
  --gray-2: #abb2bf;
  --green: #abd58e;
  --green-1: #79c142;
  --grid-notebook-line-color-1: #c7c7c71f;
  --grid-notebook-line-color-2: #74747440;
  --h1-bg-color: color-mix(in srgb, rgb(150, 194, 46) 15%, transparent);
  --h1-color: rgb(150, 194, 46);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h1-size: 1.5625em;
  --h2-bg-color: color-mix(in srgb, rgb(76, 177, 72) 15%, transparent);
  --h2-color: rgb(76, 177, 72);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-size: 1.4375em;
  --h3-bg-color: color-mix(in srgb, rgb(58, 187, 187) 15%, transparent);
  --h3-color: rgb(58, 187, 187);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-size: 1.3125em;
  --h4-bg-color: color-mix(in srgb, rgb(117, 162, 230) 15%, transparent);
  --h4-color: rgb(117, 162, 230);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-size: 1.1875em;
  --h5-bg-color: color-mix(in srgb, rgb(178, 150, 243) 15%, transparent);
  --h5-color: rgb(178, 150, 243);
  --h5-size: 1.0625em;
  --h6-bg-color: color-mix(in srgb, rgb(234, 165, 248) 15%, transparent);
  --h6-color: rgb(234, 165, 248);
  --he-title-bar-active-action: rgb(45, 130, 205);
  --he-title-bar-active-bg: rgba(45, 130, 205, 0.05);
  --he-title-bar-active-fg: #c6c6c6;
  --he-title-bar-active-pinned-bg: rgba(45, 130, 205, 0.05);
  --he-title-bar-inactive-action: #c6c6c6;
  --he-title-bar-inactive-bg: rgba(45, 130, 205, 0.01);
  --he-title-bar-inactive-fg: #8a8a8a;
  --he-title-bar-inactive-pinned-bg: rgba(45, 130, 205, 0.01);
  --headerFont: var(--font-text);
  --heading-formatting: #797979;
  --hibox: 24px;
  --highlight: var(--text-highlight-bg);
  --hr-color: #242424;
  --hr-color-1: rgb(45, 130, 205);
  --hr-color-2: rgb(45, 130, 205);
  --hr-color-3: rgb(45, 130, 205);
  --hr-color-4: rgb(45, 130, 205);
  --hr-color-icon-1: rgb(45, 130, 205);
  --hr-color-icon-2: rgb(45, 130, 205);
  --hr-color-icon-3: rgb(45, 130, 205);
  --hr-color-icon-4: rgb(45, 130, 205);
  --hr-color-numbers-bg-color: rgba(45, 130, 205, 0.15);
  --hr-color-numbers-color: rgb(45, 130, 205);
  --hr-color-numbers-line-1: rgb(45, 130, 205);
  --hr-color-numbers-line-2: rgb(45, 130, 205);
  --hr-color-numbers-line-3: rgb(45, 130, 205);
  --hr-color-numbers-line-4: rgb(45, 130, 205);
  --hr-numbers-text-fill: transparent;
  --hr-numbers-text-stroke: #c6c6c6;
  --icon-color: #8a8a8a;
  --icon-color-active: rgb(45, 130, 205);
  --icon-color-focused: #c6c6c6;
  --icon-color-hover: #8a8a8a;
  --image-max-width: 100%;
  --inline-title-bg-color: color-mix(in srgb, rgb(150, 194, 46) 15%, transparent);
  --inline-title-color: rgb(150, 194, 46);
  --inline-title-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --inline-title-size: 1.5625em;
  --input-date-separator: #797979;
  --input-placeholder-color: #797979;
  --interactive-accent: rgb(45, 130, 205);
  --interactive-accent-hover: rgb(97, 175, 224);
  --interactive-accent-hsl: 208, 64%, 49%;
  --interactive-accent-rgb: 45, 130, 204;
  --interactive-hover: #373737;
  --interactive-normal: #2b2b2b;
  --internal-link-color: rgb(45, 130, 205);
  --kanban-color-1: #0065d852;
  --kanban-color-2: #30e4e441;
  --kanban-color-3: #1cb54f44;
  --kanban-color-4: #97b82b49;
  --kanban-color-5: #bb722d41;
  --kanban-color-6: #d12e2e42;
  --kanban-color-7: #8f36cb3f;
  --letter-space-code: 0;
  --letter-space-main: 0;
  --light: var(--background-primary);
  --light-yellow: #cac685;
  --lightgray: var(--background-secondary);
  --line-height-list: 2;
  --line-height-main: 1.5;
  --line-height-split: 1.3;
  --link-color: rgb(45, 130, 205);
  --link-color-hover: rgb(97, 175, 224);
  --link-external-color: rgb(45, 130, 205);
  --link-external-color-hover: rgb(97, 175, 224);
  --link-unresolved-color: rgb(45, 130, 205);
  --link-unresolved-decoration-color: #f08080de;
  --list-colorful-marker: #ff8686;
  --list-marker-color: #797979;
  --list-marker-color-collapsed: rgb(45, 130, 205);
  --list-marker-color-hover: #8a8a8a;
  --list-ol-block-color: #2685bbb4;
  --list-ol-hover: #2c7bd6;
  --list-ol-marker-1: decimal;
  --list-ol-marker-2: lower-latin;
  --list-ol-marker-3: lower-roman;
  --list-ol-marker-4: decimal;
  --list-ol-number-color: #797979;
  --list-spacing-bt: 1;
  --list-ul-block-color: #e19742a9;
  --list-ul-colorful-marker-content: '\\2022';
  --list-ul-disc-color: #eb9563;
  --list-ul-hover: #e28915de;
  --list-ul-marker-1: '\\2022';
  --list-ul-marker-2: '\\25E6';
  --list-ul-marker-3: '\\25AA';
  --list-ul-marker-4: '\\25E6';
  --list-ul-marker-color: #797979;
  --loading-add-text-color: #d47e86;
  --loading-add-text-color-alt: #a4e39c;
  --loading-diy-text: "快乐摸鱼又一天，人生还剩多少天？";
  --loading-diy-text-color: #c6c6c6;
  --loading-page-custom-gif-caption: " ";
  --loading-page-custom-gif-caption-alt: " ";
  --loading-page-custom-gif-url: url(https://);
  --loading-text-after: "✿❀";
  --loading-text-before: "❀✿";
  --mark-highlight-strong-em: #fff7603a;
  --matrix-1: #2ec4c452;
  --matrix-2: #38ce2a52;
  --matrix-4: #eb973752;
  --matrix-5: #f3424252;
  --menu-background: #151515;
  --menu-radius: 7px;
  --mermaid-active-task-color: #187ef1;
  --mermaid-font-family: Segoe UI, "Microsoft YaHei", "Segoe UI Emoji", "trebuchet ms", verdana, Arial, cursive;
  --mermaid-seq-dia-color: #1371be;
  --metadata-border-color: #343434;
  --metadata-divider-color: #343434;
  --metadata-input-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-text-color: #c6c6c6;
  --metadata-label-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-text-color: #8a8a8a;
  --metadata-label-text-color-hover: #8a8a8a;
  --mjx-inline-math-color: #c6c6c6;
  --mjx-math-color: #c6c6c6;
  --modal-background: #202020;
  --modal-radius: 15px;
  --nav-collapse-icon-color: #797979;
  --nav-collapse-icon-color-collapsed: #797979;
  --nav-heading-color: #c6c6c6;
  --nav-heading-color-collapsed: #797979;
  --nav-heading-color-collapsed-hover: #8a8a8a;
  --nav-heading-color-hover: #c6c6c6;
  --nav-item-background-selected: rgba(45, 130, 205, 0.15);
  --nav-item-color: #8a8a8a;
  --nav-item-color-active: #c6c6c6;
  --nav-item-color-highlighted: rgb(45, 130, 205);
  --nav-item-color-hover: #c6c6c6;
  --nav-item-color-selected: #c6c6c6;
  --nav-item-radius: 5px;
  --nav-tag-color: #797979;
  --nav-tag-color-active: #8a8a8a;
  --nav-tag-color-hover: #8a8a8a;
  --nav-tag-radius: 5px;
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
  --page-border-bottom: #000000;
  --panel-border-color: #18191e;
  --paragraph-spacing: 1;
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #343434;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #343434;
  --pill-border-color: #343434;
  --pill-color: #8a8a8a;
  --pill-color-hover: #c6c6c6;
  --pill-color-remove: #797979;
  --pill-color-remove-hover: rgb(45, 130, 205);
  --pixel: 20px;
  --popover-height-factor: 1;
  --popover-width-factor: 1;
  --print-em-color: #a4ca8e;
  --prompt-background: #202020;
  --prompt-box-shadow: #555555;
  --purple: #c594d4;
  --radius-l: 15px;
  --radius-m: 7px;
  --radius-s: 5px;
  --radius-xs: 3px;
  --raised-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent));
  --red: #db7c84;
  --red-1: #d05a63;
  --ribbon-background: #000000;
  --ribbon-background-collapsed: #000000;
  --saturate-4-bg: 1;
  --saturate-4-bg-cp: 1;
  --scrollbar-active-thumb-bg: #4d4d4d88;
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #3f3f3f7e;
  --search-clear-button-color: #8a8a8a;
  --search-icon-color: #8a8a8a;
  --search-result-file-matched-bg: #023774;
  --search-result-file-title-color: #c6c6c6;
  --search-text: #e0e0e0;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #c6c6c6;
  --setting-items-background: #444444;
  --setting-items-border-color: #343434;
  --setting-items-radius: 15px;
  --share-card-background-opacity-cp: 0.6;
  --share-thino-background-dark-custom: url("https://");
  --share-thino-background-light-custom: url("https://");
  --simple-black-1: rgb(33, 33, 33);
  --simple-black-2: rgb(71, 83, 107);
  --simple-blue-1: rgb(66, 161, 250);
  --simple-blue-2: rgba(123, 186, 244, 0.5);
  --simple-blue-3: rgb(129, 120, 221);
  --simple-blue-4: rgba(151, 169, 186, 0.62);
  --simple-gray-1: rgb(84, 84, 84);
  --simple-gray-2: rgba(167, 179, 190, 0.2);
  --simple-gray-3: rgba(43, 51, 59, 0.2);
  --simple-gray-4: rgba(91, 97, 103, 0.5);
  --simple-gray-5: rgb(225, 230, 234);
  --simple-gray-6: rgb(205, 210, 218);
  --simple-gray-7: rgba(205, 210, 218, 0.7);
  --simple-orange: rgb(233, 155, 99);
  --simple-red-1: hsla(365, 90%, 62%, 1);
  --simple-red-2: hsl(365, 95%, 85%, 1);
  --simple-red-3: hsl(365, 85%, 45%, 1);
  --simple-tran: rgba(244, 248, 251, 0);
  --simple-white-1: rgb(244, 248, 251);
  --simple-white-2: rgb(237, 242, 248);
  --simple-white-3: rgba(195, 203, 213, 0.2);
  --simple-white-4: rgb(252, 253, 253);
  --simple-white-5: rgba(227, 230, 232, 0.1);
  --simple-white-6: rgba(195, 203, 213, 0.3);
  --simple-yellow: rgba(255, 255, 0, 0.4);
  --slider-track-background: #343434;
  --sliding-panes-header-color: #f1a634d0;
  --stack-tabs-background-blur-depth: 40px;
  --stag1: #f08383;
  --stag1-bg: #bd1919;
  --stag2: #e7b263;
  --stag2-bg: #ac6700;
  --stag3: #77df89;
  --stag3-bg: #058c1c;
  --status-bar-background: #151515;
  --status-bar-bg: #000000;
  --status-bar-border-color: #000000;
  --status-bar-radius: 7px 0 0 0;
  --status-bar-text-color: #8a8a8a;
  --stickies-color-1: #84c584;
  --stickies-color-2: #c7a3cf;
  --stripe-notebook-stripe-color: #162419;
  --strong-em-color-1: #43d3ff;
  --strong-em-color-2: #baaaff;
  --strong-em-highlight-color: #a7b4ff;
  --suggestion-background: #202020;
  --tab-background-active: #202020;
  --tab-container-background: #151515;
  --tab-outline-color: #151515;
  --tab-radius: 5px;
  --tab-stacked-shadow: #0e0e0e;
  --tab-switcher-background: #151515;
  --tab-switcher-menubar-background: linear-gradient(to top, #151515, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(45, 130, 205);
  --tab-text-color: #797979;
  --tab-text-color-active: #8a8a8a;
  --tab-text-color-focused: #8a8a8a;
  --tab-text-color-focused-active: #8a8a8a;
  --tab-text-color-focused-active-current: #c6c6c6;
  --tab-text-color-focused-highlighted: rgb(45, 130, 205);
  --table-add-button-border-color: #343434;
  --table-background-color: #2f2f2f32;
  --table-background-color-odd: #00000033;
  --table-border-color: #4a4a4a;
  --table-color-calendar-2: rgb(0, 91, 144);
  --table-color-rgb: 0, 91, 144;
  --table-drag-handle-background-active: rgb(45, 130, 205);
  --table-drag-handle-color: #797979;
  --table-drag-handle-color-active: #e4e4e4;
  --table-header-border-color: #4a4a4a;
  --table-header-color: #c6c6c6;
  --table-hover-color: #1f65a221;
  --table-hover-raw-color: #08569a21;
  --table-hover-thead-color: #21395bc7;
  --table-selection: rgba(45, 130, 205, 0.1);
  --table-selection-border-color: rgb(45, 130, 205);
  --table-text-size: 15px;
  --table-thead-background-color: rgba(45, 130, 205, 0.1);
  --tag-background: rgba(45, 130, 205, 0.1);
  --tag-background-hover: rgba(45, 130, 205, 0.2);
  --tag-border-color: rgba(45, 130, 205, 0.15);
  --tag-border-color-hover: rgba(45, 130, 205, 0.15);
  --tag-border-width: 1px;
  --tag-color: rgb(45, 130, 205);
  --tag-color-hover: rgb(45, 130, 205);
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
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(45, 130, 205);
  --text-accent-hover: rgb(97, 175, 224);
  --text-blue: #7c94ff;
  --text-brown: #be9684;
  --text-checked-checkbox: #8e8e8e;
  --text-color-code: #d58000;
  --text-error: #e16d76;
  --text-error-hover: #c9626a;
  --text-faint: #797979;
  --text-folder-file: #b3b3b3;
  --text-folder-file-icon: rgb(45, 130, 205);
  --text-gray: #acacac;
  --text-green: #52c7b2;
  --text-highlight: #c6c6c6;
  --text-highlight-bg: rgba(136, 132, 58, 0.541);
  --text-highlight-bg-a-dark: 0.541;
  --text-highlight-bg-a-light: 0.847;
  --text-highlight-bg-h-dark: 57;
  --text-highlight-bg-h-light: 34;
  --text-highlight-bg-l-dark: 38%;
  --text-highlight-bg-l-light: 80%;
  --text-highlight-bg-s-dark: 40%;
  --text-highlight-bg-s-light: 100%;
  --text-muted: #8a8a8a;
  --text-muted-rgb: 138, 138, 138;
  --text-normal: #c6c6c6;
  --text-on-accent: #e4e4e4;
  --text-orange: #ffa344;
  --text-pink: #ff6bba;
  --text-purple: #b386f1;
  --text-red: #ff4f4f;
  --text-search-highlight-bg: #bb4361;
  --text-selection: #3b767160;
  --text-yellow: #ffdc51;
  --text-yellow-2: #cca217;
  --textHighlight: var(--text-highlight-bg);
  --theme-color: rgb(45, 130, 205);
  --theme-color-translucent-001: rgba(45, 130, 205, 0.01);
  --theme-color-translucent-005: rgba(45, 130, 205, 0.05);
  --theme-color-translucent-01: rgba(45, 130, 205, 0.1);
  --theme-color-translucent-015: rgba(45, 130, 205, 0.15);
  --theme-color-translucent-02: rgba(45, 130, 205, 0.2);
  --theme-color-translucent-04: rgba(45, 130, 205, 0.4);
  --theme-color-translucent-06: rgba(45, 130, 205, 0.6);
  --thino-background-dark-custom: url("https://");
  --thino-background-light-custom: url("https://");
  --titleFont: var(--font-text);
  --titlebar-background: #151515;
  --titlebar-background-focused: #000000;
  --titlebar-blur-depth: 8px;
  --titlebar-border-color: #343434;
  --titlebar-brightness: 1;
  --titlebar-text-color: #8a8a8a;
  --titlebar-text-color-focused: #c6c6c6;
  --unresolved-link: #f08080de;
  --variable-2: #0072d0;
  --variable-3: #5a96f7;
  --vault-profile-color: #c6c6c6;
  --vault-profile-color-hover: #c6c6c6;
  --white: #ffffff;
  --window-radius: 8px;
  --window-shadow: 0 1px 3px rgba(23, 26, 28, 0.1);
  --window-shadow2: 0 0 9px rgba(0, 0, 0, 0.3);
  --yellow: #d6b87f;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(198, 198, 198);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(198, 198, 198);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(21, 21, 21);
  color: rgb(198, 198, 198);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  color: rgb(198, 198, 198);
}

body div#quartz-root {
  background-color: rgb(32, 32, 32);
  color: rgb(198, 198, 198);
}`,
    typography: `body .page article p > b, b {
  color: rgb(231, 231, 231);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body .page article p > em, em {
  color: rgb(164, 202, 142);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(164, 202, 142) none 0px;
  text-decoration: rgb(164, 202, 142);
  text-decoration-color: rgb(164, 202, 142);
}

body .page article p > i, i {
  color: rgb(164, 202, 142);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(164, 202, 142) none 0px;
  text-decoration: rgb(164, 202, 142);
  text-decoration-color: rgb(164, 202, 142);
}

body .page article p > strong, strong {
  color: rgb(231, 231, 231);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body .text-highlight {
  background-color: rgba(136, 132, 58, 0.54);
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(198, 198, 198) none 0px;
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body del {
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(198, 198, 198) none 0px;
  text-decoration: line-through rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body p {
  color: rgb(138, 138, 138);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(138, 138, 138) none 0px;
  text-decoration: rgb(138, 138, 138);
  text-decoration-color: rgb(138, 138, 138);
}`,
    links: `body a.external, footer a {
  color: rgb(45, 130, 205);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(45, 130, 205) none 0px;
  text-decoration: underline rgb(45, 130, 205);
  text-decoration-color: rgb(45, 130, 205);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(45, 130, 205);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(45, 130, 205) none 0px;
  text-decoration: rgb(45, 130, 205);
  text-decoration-color: rgb(45, 130, 205);
}

body a.internal.broken {
  color: rgba(240, 128, 128, 0.87);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgba(240, 128, 128, 0.87) none 0px;
  text-decoration: underline rgba(240, 128, 128, 0.87);
  text-decoration-color: rgba(240, 128, 128, 0.87);
}`,
    lists: `body dd {
  color: rgb(198, 198, 198);
}

body dt {
  color: rgb(198, 198, 198);
}

body ol > li {
  color: rgb(198, 198, 198);
}

body ol.overflow {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body ul > li {
  color: rgb(198, 198, 198);
}

body ul.overflow {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(121, 121, 121);
  text-decoration: rgb(121, 121, 121);
}

body blockquote {
  background-color: rgba(145, 145, 145, 0.11);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body table {
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  margin-top: 20px;
  width: 658px;
}

body tbody tr:nth-child(even) {
  background-color: rgba(47, 47, 47, 0.196);
}

body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.2);
}

body td {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
  border-right-color: rgb(198, 198, 198);
  border-right-width: 0px;
  border-top-color: rgb(198, 198, 198);
  border-top-width: 0px;
  color: rgb(198, 198, 198);
  padding-left: 10px;
  padding-right: 10px;
}

body th {
  background-color: rgba(45, 130, 205, 0.1);
  border-bottom-color: rgb(74, 74, 74);
  border-bottom-width: 0px;
  border-left-color: rgb(74, 74, 74);
  border-left-width: 0px;
  border-right-color: rgb(74, 74, 74);
  border-right-width: 0px;
  border-top-color: rgb(74, 74, 74);
  border-top-width: 0px;
  color: rgb(198, 198, 198);
  padding-left: 10px;
  padding-right: 10px;
}`,
    code: `body code {
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(235, 219, 178);
  font-family: "??", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 13.2px;
  padding-left: 6.6px;
  padding-right: 6.6px;
  padding-top: 13.2px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(17, 17, 17, 0.55);
  border-bottom-color: rgb(52, 52, 52);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(52, 52, 52);
  border-right-color: rgb(52, 52, 52);
  border-top-color: rgb(52, 52, 52);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(17, 17, 17, 0.55);
  border-bottom-color: rgb(52, 52, 52);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(52, 52, 52);
  border-right-color: rgb(52, 52, 52);
  border-top-color: rgb(52, 52, 52);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(235, 219, 178);
}

body pre > code > [data-line] {
  border-left-color: rgb(214, 184, 127);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(214, 184, 127);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(214, 184, 127);
  border-left-color: rgb(214, 184, 127);
  border-right-color: rgb(214, 184, 127);
  border-top-color: rgb(214, 184, 127);
}

body pre > code, pre:has(> code) {
  background-color: rgba(17, 17, 17, 0.55);
  border-bottom-color: rgb(52, 52, 52);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(52, 52, 52);
  border-right-color: rgb(52, 52, 52);
  border-top-color: rgb(52, 52, 52);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgba(17, 17, 17, 0.55);
  border-bottom-color: rgb(52, 52, 52);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(52, 52, 52);
  border-right-color: rgb(52, 52, 52);
  border-top-color: rgb(52, 52, 52);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body figcaption {
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body img {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body video {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}`,
    embeds: `body .file-embed {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(246, 250, 254, 0.055);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(246, 250, 254, 0.055);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(246, 250, 254, 0.055);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(246, 250, 254, 0.055);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: solid;
  border-top-width: 2px;
  padding-bottom: 1.4px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 1.4px;
}

body .footnotes {
  border-top-color: rgb(198, 198, 198);
  color: rgb(198, 198, 198);
}

body .transclude {
  background-color: rgba(246, 250, 254, 0.055);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-left: 16px;
  padding-right: 8px;
}

body .transclude-inner {
  background-color: rgba(246, 250, 254, 0.055);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-left: 16px;
  padding-right: 8px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(138, 138, 138);
  text-decoration: rgb(138, 138, 138);
  text-decoration-color: rgb(138, 138, 138);
}

body input[type=checkbox] {
  border-bottom-color: rgb(123, 123, 123);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(123, 123, 123);
  border-right-color: rgb(123, 123, 123);
  border-top-color: rgb(123, 123, 123);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-bottom: 2px;
  margin-left: -21.6px;
  width: 14.3906px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='*'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='-'] {
  color: rgb(121, 121, 121);
  text-decoration: line-through rgb(121, 121, 121);
  text-decoration-color: rgb(121, 121, 121);
}

body li.task-list-item[data-task='/'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='>'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='?'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='I'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='S'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='b'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='c'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='d'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='f'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='i'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='k'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='l'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='p'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='u'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='w'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}`,
    callouts: `body .callout .callout-title {
  padding-bottom: 8px;
  padding-left: 12px;
  padding-top: 8px;
}

body .callout > .callout-content {
  padding-left: 10px;
  padding-right: 10px;
}

body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(83, 223, 221, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(251, 70, 76, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(251, 70, 76, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(168, 130, 255, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(251, 70, 76, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(2, 122, 255, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(2, 122, 255, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(233, 151, 63, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(158, 158, 158, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(68, 207, 110, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(83, 223, 221, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(2, 122, 255, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(233, 151, 63, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(46, 46, 46, 0.616);
  border-bottom-color: rgb(52, 52, 52);
  border-left-color: rgb(52, 52, 52);
  border-right-color: rgb(52, 52, 52);
  border-top-color: rgb(52, 52, 52);
  color: rgb(198, 198, 198);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
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
  box-shadow: rgb(85, 85, 85) 0px 0px 10px 1px;
}

body .search > .search-container > .search-space > * {
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(198, 198, 198) none 0px;
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 198, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(198, 198, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(45, 130, 205, 0.15);
  color: rgb(198, 198, 198);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

body .search > .search-container > .search-space > input {
  background-color: rgba(46, 46, 46, 0.616);
  border-bottom-color: rgb(21, 21, 21);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(45, 130, 205, 0.15);
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(45, 130, 205, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(45, 130, 205, 0.1);
  border-bottom-color: rgba(45, 130, 205, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(45, 130, 205, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(45, 130, 205, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(45, 130, 205, 0.15);
  border-top-width: 1px;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(45, 130, 205);
}

body h1 {
  color: rgb(150, 194, 46);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h2 {
  color: rgb(76, 177, 72);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(150, 194, 46);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h3 {
  color: rgb(58, 187, 187);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h4 {
  color: rgb(117, 162, 230);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h5 {
  color: rgb(178, 150, 243);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h6 {
  color: rgb(234, 165, 248);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body hr {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(2, 122, 255, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-corner {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-track {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.918792 0.6776 0.691167);
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  font-weight: 600;
  text-decoration: color(srgb 0.918792 0.6776 0.691167);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.918792 0.6776 0.691167);
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  font-weight: 600;
  text-decoration: color(srgb 0.918792 0.6776 0.691167);
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(179, 179, 179);
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(138, 138, 138);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(138, 138, 138);
  border-right-color: rgb(138, 138, 138);
  border-top-color: rgb(138, 138, 138);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(138, 138, 138);
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(24, 25, 30);
  border-bottom-width: 1px;
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-right-width: 1px;
  border-top-color: rgb(24, 25, 30);
  border-top-left-radius: 7px;
  color: rgb(138, 138, 138);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(138, 138, 138);
  text-decoration: rgb(138, 138, 138);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(198, 198, 198);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
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

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
}`,
    listPage: `body li.section-li {
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

body li.section-li > .section .meta {
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(45, 130, 205);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(45, 130, 205);
  border-right-color: rgb(45, 130, 205);
  border-top-color: rgb(45, 130, 205);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(45, 130, 205);
}

body .darkmode svg {
  color: rgb(45, 130, 205);
  stroke: rgb(45, 130, 205);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(138, 138, 138);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(138, 138, 138);
  border-right-color: rgb(138, 138, 138);
  border-top-color: rgb(138, 138, 138);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(138, 138, 138);
}

body .breadcrumb-element p {
  color: rgb(121, 121, 121);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
  color: rgb(198, 198, 198);
}

body .metadata {
  border-bottom-color: rgb(52, 52, 52);
  border-left-color: rgb(52, 52, 52);
  border-right-color: rgb(52, 52, 52);
  border-top-color: rgb(52, 52, 52);
  color: rgb(138, 138, 138);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(138, 138, 138);
  border-left-color: rgb(138, 138, 138);
  border-right-color: rgb(138, 138, 138);
  border-top-color: rgb(138, 138, 138);
  color: rgb(138, 138, 138);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(198, 198, 198);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(198, 198, 198);
  text-decoration: underline dotted rgb(198, 198, 198);
}

body details {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body input[type=text] {
  border-bottom-color: rgb(138, 138, 138);
  border-left-color: rgb(138, 138, 138);
  border-right-color: rgb(138, 138, 138);
  border-top-color: rgb(138, 138, 138);
  color: rgb(138, 138, 138);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgba(17, 17, 17, 0.55);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(235, 219, 178);
  font-family: "??", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body sub {
  color: rgb(198, 198, 198);
}

body summary {
  color: rgb(198, 198, 198);
}

body sup {
  color: rgb(198, 198, 198);
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
  --accent-l-alt: 48.6%;
  --accent-s: 77%;
  --accent-strong: #000000;
  --activeline-background: rgba(47, 147, 228, 0.05);
  --admonition-bg-color: #FFFFFF00;
  --aqua: #88C0D0;
  --background-4-sliding-pane: #ffffffef;
  --background-asymm-split-left: #f3f3f3;
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
  --background-modifier-active-hover: rgba(47, 147, 228, 0.1);
  --background-modifier-border: #dddddd;
  --background-modifier-border-1: #e1dfdf;
  --background-modifier-border-asymm: #d8d8d8;
  --background-modifier-border-checkbox: #9c9c9c;
  --background-modifier-border-hr: #bfbfbf;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.08);
  --background-modifier-error: #e68787;
  --background-modifier-error-hover: #FF9494;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-highlighted: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-modifier-success: #A4E7C3;
  --background-nonoverlapping-note: #ffffff;
  --background-orange: #faebdd;
  --background-panel-page-theme-dark-custom: url("https://");
  --background-panel-page-theme-light-custom: url("https://");
  --background-pink: #f4dfeb;
  --background-popover: #fafafa;
  --background-primary-alt: #e9e9e9;
  --background-purple: #eae4f2;
  --background-red: #ffe3e3;
  --background-secondary: #fcfcfc;
  --background-secondary-alt: #f3f3f3;
  --background-secondary-alt-bg-4-bt-publish: #f6f6f6;
  --background-secondary-translucent: #ffffff3d;
  --background-secondary-translucent-1: #ffffff5d;
  --background-settings-workplace-theme-dark-custom: url("https://");
  --background-settings-workplace-theme-light-custom: url("https://");
  --background-titlebar-inner: rgba(47, 147, 228, 0.1);
  --background-transparent-black-or-white-1: #ffffffb0;
  --background-transparent-black-or-white-2: #ffffffca;
  --background-transparent-black-or-white-3: #eeeeee91;
  --background-transparent-black-or-white-3-1: #fafafac3;
  --background-transparent-black-or-white-4: #a7a7a765;
  --background-transparent-black-or-white-5: #f0f0f091;
  --background-transparent-blue: #c6e5ffde;
  --background-waves-color: #4A75DB8C;
  --background-yellow: #fbf3db;
  --bases-cards-cover-background: #e9e9e9;
  --bases-cards-radius: 7px;
  --bases-cards-shadow: 0 0 0 1px #dddddd;
  --bases-embed-border-color: #dddddd;
  --bases-embed-border-radius: 5px;
  --bases-group-heading-property-color: #7f7f7f;
  --bases-table-border-color: #7d7d7d;
  --bases-table-cell-background-disabled: #e9e9e9;
  --bases-table-cell-background-selected: rgba(47, 147, 228, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(64, 159, 231);
  --bases-table-container-border-radius: 5px;
  --bases-table-group-background: #e9e9e9;
  --bases-table-header-color: #7f7f7f;
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
  --blockquote-border-color: rgb(64, 159, 231);
  --blue: #5e81ac;
  --blue-green: #3bd4da;
  --blur-codebox-frosted-glass: 2;
  --blur-depth: 10px;
  --blur-depth-cp: 10px;
  --blur-p-kanban-frosted-glass: 5;
  --bodyFont: var(--font-text);
  --bottom-padding-value: 0em;
  --brightness-4-bg: 0.9;
  --brightness-4-bg-cp: 0.9;
  --bt-bubble-background-color: transparent;
  --bt-bubble-border-color: #dddddd;
  --bt-bubble-layout-padding: 8px;
  --bt-colorful-indentation-width: 1px;
  --bt-connected-indent-line-color: #FFA8A8;
  --bt-indentation-gradient-color-1: rgb(64, 159, 231);
  --bt-indentation-gradient-color-2: transparent;
  --bt-indentation-line-image: url("");
  --bt-indentation-width-hover: 3px;
  --c-1: #da2400;
  --c-2: #ffb623;
  --c-3: #8c6e22;
  --calendar-active-color: rgba(47, 147, 228, 0.2);
  --calendar-hover-color: rgba(47, 147, 228, 0.1);
  --calendar-today-background-color: #aaeec6;
  --calendar-week-background-color: #d6e6bf;
  --calendar-week-color: #48b432;
  --calendar-week-hover: #e9ffe3;
  --callout-radius: 5px;
  --canvas-card-label-color: #7f7f7f;
  --canvas-card-opacity: 0.1;
  --canvas-controls-radius: 5px;
  --cards-width: 138px;
  --caret-color: #0e0e0e;
  --checkbox-border-color: #7f7f7f;
  --checkbox-border-color-hover: #7f7f7f;
  --checkbox-color: rgb(64, 159, 231);
  --checkbox-color-0: #2f92e4;
  --checkbox-color-1: #c4c116;
  --checkbox-color-2: #4bbf40;
  --checkbox-color-3: #ffe9e9;
  --checkbox-color-4: #fff8b7;
  --checkbox-color-5: #ad7fbf;
  --checkbox-color-6: #5f5f5f;
  --checkbox-color-hover: rgb(82, 173, 235);
  --checkbox-radius: 5px;
  --checkbox-size: 0.9rem;
  --checklist-bg: #dfdfdf8e;
  --checklist-bg-hover: #ffffffcc;
  --checklist-color-1: #bbdefbab;
  --checklist-color-2: #b2ebf2ab;
  --checklist-color-3: #c8e6c9ab;
  --checklist-color-4: #f8ef99ab;
  --checklist-color-5: #ffe0b2ab;
  --checklist-color-6: #ffcdd2ab;
  --checklist-color-7: #e1bee7ab;
  --checklist-done-color: #7f7f7f;
  --clickable-icon-radius: 5px;
  --cloze-bg-color: #000000;
  --cloze-bg-color-3: transparent;
  --cloze-decoration: none;
  --cloze-decoration-2: dashed;
  --cloze-decoration-3: dashed;
  --cloze-decoration-color: red;
  --cloze-decoration-color-2: rgb(64, 159, 231);
  --cloze-decoration-color-3: rgb(64, 159, 231);
  --code-active-line-background-color: rgba(47, 147, 228, 0.05);
  --code-atom: #cc7523;
  --code-attribute: #BF616A;
  --code-attribute-in-comment: #c792ea;
  --code-background: #e6e6e671;
  --code-border-color: #dddddd;
  --code-bracket: #ff5370;
  --code-builtin: #ffcb6b;
  --code-callee: #89ddff;
  --code-comment: #068a5e;
  --code-def: #82aaff;
  --code-definition: #82aaff;
  --code-error-bg: #ff5370;
  --code-function: #BF616A;
  --code-header: #da7dae;
  --code-hr: #7f7f7f;
  --code-important: #3bd4da;
  --code-keyword: #3bd4da;
  --code-language: #7f7f7f;
  --code-link: #696d70;
  --code-matching-bracket: #ffffff;
  --code-meta: #7f7f7f;
  --code-normal: #000000;
  --code-number: #ff5370;
  --code-operator: #5e81ac;
  --code-property: #5e81ac;
  --code-punctuation: #7f7f7f;
  --code-qualifier: #88C0D0;
  --code-radius: 5px;
  --code-selection-background: #a9d1c859;
  --code-selection-color: #000000;
  --code-string-2: #cc7523;
  --code-tag: #c74df7;
  --code-tag-in-comment: #ff5370;
  --code-type: #BF616A;
  --code-value: #A3BE8C;
  --code-variable: #f07178;
  --code-variable-2: #b74ff3;
  --code-variable-3: #e7852fe7;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #7f7f7f;
  --collapse-icon-color-collapsed: rgb(47, 147, 228);
  --color-accent: rgb(47, 147, 228);
  --color-accent-1: rgb(64, 159, 231);
  --color-accent-2: rgb(82, 173, 235);
  --color-accent-hsl: 207, 77%, 54%;
  --color-highlight-1: #0e0e0e;
  --color-highlight-2: #0e0e0e;
  --color-highlight-3: #0e0e0e;
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
  --custom-titlebar-bg: #f3f3f3;
  --dark: var(--text-normal);
  --darkblue: #3b84e4;
  --darkgray: var(--text-normal);
  --darkgreen: #068a5e;
  --day-planner-dot: #ffd900;
  --day-planner-item-hover: #8fccff;
  --day-planner-line: #ffd900;
  --day-planner-pie: #eca95c;
  --day-planner-timeline: #d62f2f;
  --divider-color: #e3e3e3;
  --divider-color-hover: rgb(64, 159, 231);
  --dotted-notebook-dot-color: #c7c7c780;
  --dropdown-background: #efefef;
  --dropdown-background-hover: #e6e6e6;
  --embed-block-shadow-hover: 0 0 0 1px #dddddd, inset 0 0 0 1px #dddddd;
  --embed-border-start: 2px solid rgb(64, 159, 231);
  --embed-color: rgba(65, 145, 210, 0.035);
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
  --external-link-color: rgb(47, 147, 228);
  --fancy-cursor-width: 2px;
  --fancy-hr-icon: '😀';
  --fancy-hr-rotate: 0deg;
  --file-header-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-line-width: 45rem;
  --flair-background: #efefef;
  --flair-color: #0e0e0e;
  --folder-title: #000000;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-family-better-footnote: Arlrdbd, "Source Han Sans", "Segoe UI Emoji";
  --font-family-folder-file-title: '??',Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  --font-family-inline-code: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-family-special-tag: "Lucida Handwriting", "Segoe UI Emoji";
  --font-family-strong: Bookerly, 'Inter', "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-family-tag: Bookerly, 'Inter', "Segoe UI", "Microsoft YaHei", STzhongsong, STSong, "Segoe UI Emoji", Serif;
  --font-family-vault: "Lucida Handwriting", "Segoe UI Emoji";
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-mermaid: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace;
  --font-print: '??', '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", 'Arial';
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
  --font-size-outline: 13px;
  --font-size-preview-blockquote: 1em;
  --font-size-preview-normal: 1em;
  --font-size-split: 0.85em;
  --font-size-tag: 0.85em;
  --font-size-vault-name: 1em;
  --font-style-em: italic;
  --font-text: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text-theme: Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei";
  --font-weight-highlight-1: normal;
  --font-weight-highlight-2: normal;
  --font-weight-highlight-3: normal;
  --font-weight-inline-code: bold;
  --font-weight-strong: bold;
  --footnote-divider-color: #dddddd;
  --footnote-id-color: #7f7f7f;
  --footnote-id-color-no-occurrences: #7f7f7f;
  --footnote-radius: 5px;
  --graph-arrow: #e25300;
  --graph-attach: #afcfe0cc;
  --graph-canvas-bg: #ffffff;
  --graph-circle: #1f78b4cc;
  --graph-circle-fill-highlight: rgb(64, 159, 231);
  --graph-circle-outline: transparent;
  --graph-control-bg: #ffffff9a;
  --graph-line: #b1b1b1;
  --graph-line-fill-highlight: rgb(70, 142, 235);
  --graph-node: #7f7f7f;
  --graph-node-focused: rgb(47, 147, 228);
  --graph-node-unresolved: #7f7f7f;
  --graph-tag: #77d425cc;
  --graph-text: #0e0e0e;
  --graph-text-color: #696969;
  --graph-unresolved: #db4e4ecc;
  --gray: var(--text-muted);
  --gray-1: #383a42;
  --gray-2: #383a42;
  --green: #A3BE8C;
  --green-1: #3dc730;
  --grid-notebook-line-color-1: #c7c7c740;
  --grid-notebook-line-color-2: #afafaf40;
  --h1-bg-color: color-mix(in srgb, rgb(8, 55, 125) 15%, transparent);
  --h1-color: rgb(8, 55, 125);
  --h1-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h1-size: 1.5625em;
  --h2-bg-color: color-mix(in srgb, rgb(0, 79, 168) 15%, transparent);
  --h2-color: rgb(0, 79, 168);
  --h2-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h2-size: 1.4375em;
  --h3-bg-color: color-mix(in srgb, rgb(14, 99, 185) 15%, transparent);
  --h3-color: rgb(14, 99, 185);
  --h3-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h3-size: 1.3125em;
  --h4-bg-color: color-mix(in srgb, rgb(52, 130, 197) 15%, transparent);
  --h4-color: rgb(52, 130, 197);
  --h4-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --h4-size: 1.1875em;
  --h5-bg-color: color-mix(in srgb, rgb(90, 160, 226) 15%, transparent);
  --h5-color: rgb(90, 160, 226);
  --h5-size: 1.0625em;
  --h6-bg-color: color-mix(in srgb, rgb(137, 185, 230) 15%, transparent);
  --h6-color: rgb(137, 185, 230);
  --he-title-bar-active-action: rgb(64, 159, 231);
  --he-title-bar-active-bg: rgba(47, 147, 228, 0.05);
  --he-title-bar-active-fg: #0e0e0e;
  --he-title-bar-active-pinned-bg: rgba(47, 147, 228, 0.05);
  --he-title-bar-inactive-action: #0e0e0e;
  --he-title-bar-inactive-bg: rgba(47, 147, 228, 0.01);
  --he-title-bar-inactive-fg: #7f7f7f;
  --he-title-bar-inactive-pinned-bg: rgba(47, 147, 228, 0.01);
  --headerFont: var(--font-text);
  --heading-formatting: #7f7f7f;
  --hibox: 24px;
  --highlight: var(--text-highlight-bg);
  --hr-color: #dddddd;
  --hr-color-1: rgb(64, 159, 231);
  --hr-color-2: rgb(64, 159, 231);
  --hr-color-3: rgb(64, 159, 231);
  --hr-color-4: rgb(64, 159, 231);
  --hr-color-icon-1: rgb(64, 159, 231);
  --hr-color-icon-2: rgb(64, 159, 231);
  --hr-color-icon-3: rgb(64, 159, 231);
  --hr-color-icon-4: rgb(64, 159, 231);
  --hr-color-numbers-bg-color: rgba(47, 147, 228, 0.15);
  --hr-color-numbers-color: rgb(64, 159, 231);
  --hr-color-numbers-line-1: rgb(64, 159, 231);
  --hr-color-numbers-line-2: rgb(64, 159, 231);
  --hr-color-numbers-line-3: rgb(64, 159, 231);
  --hr-color-numbers-line-4: rgb(64, 159, 231);
  --hr-numbers-text-fill: transparent;
  --hr-numbers-text-stroke: #0e0e0e;
  --icon-color: #7f7f7f;
  --icon-color-active: rgb(47, 147, 228);
  --icon-color-focused: #0e0e0e;
  --icon-color-hover: #7f7f7f;
  --image-max-width: 100%;
  --inline-title-bg-color: color-mix(in srgb, rgb(8, 55, 125) 15%, transparent);
  --inline-title-color: rgb(8, 55, 125);
  --inline-title-font: '??', Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --inline-title-size: 1.5625em;
  --input-date-separator: #7f7f7f;
  --input-placeholder-color: #7f7f7f;
  --interactive-accent: rgb(64, 159, 231);
  --interactive-accent-hover: rgb(82, 173, 235);
  --interactive-accent-hsl: 207, 77%, 54%;
  --interactive-accent-rgb: 70, 142, 235;
  --interactive-hover: #e6e6e6;
  --interactive-normal: #efefef;
  --internal-link-color: rgb(47, 147, 228);
  --letter-space-code: 0;
  --letter-space-main: 0;
  --light: var(--background-primary-alt);
  --light-purple: #b74ff3;
  --light-yellow: #ab9a02;
  --lightgray: var(--background-secondary);
  --line-height-list: 2;
  --line-height-main: 1.5;
  --line-height-split: 1.3;
  --link-color: rgb(47, 147, 228);
  --link-color-hover: rgb(82, 173, 235);
  --link-external-color: rgb(47, 147, 228);
  --link-external-color-hover: rgb(82, 173, 235);
  --link-unresolved-color: rgb(47, 147, 228);
  --link-unresolved-decoration-color: #db4e4ecc;
  --list-colorful-marker: #fd4949;
  --list-marker-color: #7f7f7f;
  --list-marker-color-collapsed: rgb(64, 159, 231);
  --list-marker-color-hover: #7f7f7f;
  --list-ol-block-color: #3573a5;
  --list-ol-hover: #2c7bd6;
  --list-ol-marker-1: decimal;
  --list-ol-marker-2: lower-latin;
  --list-ol-marker-3: lower-roman;
  --list-ol-marker-4: decimal;
  --list-ol-number-color: #7f7f7f;
  --list-spacing-bt: 1;
  --list-ul-block-color: #b9751b;
  --list-ul-colorful-marker-content: '\\2022';
  --list-ul-disc-color: #f39c55;
  --list-ul-hover: #dd922f;
  --list-ul-marker-1: '\\2022';
  --list-ul-marker-2: '\\25E6';
  --list-ul-marker-3: '\\25AA';
  --list-ul-marker-4: '\\25E6';
  --list-ul-marker-color: #7f7f7f;
  --loading-add-text-color: #d47e86;
  --loading-add-text-color-alt: #a4e39c;
  --loading-diy-text: "快乐摸鱼又一天，人生还剩多少天？";
  --loading-diy-text-color: #0e0e0e;
  --loading-page-custom-gif-caption: " ";
  --loading-page-custom-gif-caption-alt: " ";
  --loading-page-custom-gif-url: url(https://);
  --loading-text-after: "✿❀";
  --loading-text-before: "❀✿";
  --mark-highlight-strong-em: #ff880049;
  --matrix-1: #7cdddd65;
  --matrix-2: #8ce38465;
  --matrix-4: #eeb36f65;
  --matrix-5: #f18e8e65;
  --menu-background: #fcfcfc;
  --menu-radius: 7px;
  --mermaid-active-task-color: #44bbff;
  --mermaid-font-family: Segoe UI, "Microsoft YaHei", "Segoe UI Emoji", "trebuchet ms", verdana, Arial, cursive;
  --mermaid-seq-dia-color: #76c8ff;
  --metadata-border-color: #dddddd;
  --metadata-divider-color: #dddddd;
  --metadata-input-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-text-color: #0e0e0e;
  --metadata-label-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-text-color: #7f7f7f;
  --metadata-label-text-color-hover: #7f7f7f;
  --mjx-inline-math-color: #0e0e0e;
  --mjx-math-color: #0e0e0e;
  --modal-radius: 15px;
  --nav-collapse-icon-color: #7f7f7f;
  --nav-collapse-icon-color-collapsed: #7f7f7f;
  --nav-heading-color: #0e0e0e;
  --nav-heading-color-collapsed: #7f7f7f;
  --nav-heading-color-collapsed-hover: #7f7f7f;
  --nav-heading-color-hover: #0e0e0e;
  --nav-item-background-selected: rgba(47, 147, 228, 0.15);
  --nav-item-color: #7f7f7f;
  --nav-item-color-active: #0e0e0e;
  --nav-item-color-highlighted: rgb(47, 147, 228);
  --nav-item-color-hover: #0e0e0e;
  --nav-item-color-selected: #0e0e0e;
  --nav-item-radius: 5px;
  --nav-tag-color: #7f7f7f;
  --nav-tag-color-active: #7f7f7f;
  --nav-tag-color-hover: #7f7f7f;
  --nav-tag-radius: 5px;
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
  --page-border-bottom: #f3f3f3;
  --panel-border-color: #dbdbdc;
  --paragraph-spacing: 1;
  --pill-border-color: #dddddd;
  --pill-color: #7f7f7f;
  --pill-color-hover: #0e0e0e;
  --pill-color-remove: #7f7f7f;
  --pill-color-remove-hover: rgb(47, 147, 228);
  --pixel: 20px;
  --popover-height-factor: 1;
  --popover-width-factor: 1;
  --print-em-color: #099d4e;
  --prompt-box-shadow: #bebebe;
  --purple: #c74df7;
  --radius-l: 15px;
  --radius-m: 7px;
  --radius-s: 5px;
  --radius-xs: 3px;
  --red: #BF616A;
  --red-1: #f16464f5;
  --ribbon-background: #f3f3f3;
  --ribbon-background-collapsed: #f3f3f3;
  --saturate-4-bg: 1;
  --saturate-4-bg-cp: 1;
  --scrollbar-active-thumb-bg: #ddddddd9;
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: #dcdcdcbe;
  --search-clear-button-color: #7f7f7f;
  --search-icon-color: #7f7f7f;
  --search-result-file-matched-bg: #ffd9d9e5;
  --search-result-file-title-color: #0e0e0e;
  --search-text: #000000;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #0e0e0e;
  --setting-items-background: #e9e9e9;
  --setting-items-border-color: #dddddd;
  --setting-items-radius: 15px;
  --share-card-background-opacity-cp: 0.6;
  --share-thino-background-dark-custom: url("https://");
  --share-thino-background-light-custom: url("https://");
  --simple-black-1: rgb(33, 33, 33);
  --simple-black-2: rgb(71, 83, 107);
  --simple-blue-1: rgb(66, 161, 250);
  --simple-blue-2: rgba(123, 186, 244, 0.5);
  --simple-blue-3: rgb(129, 120, 221);
  --simple-blue-4: rgba(151, 169, 186, 0.62);
  --simple-gray-1: rgb(84, 84, 84);
  --simple-gray-2: rgba(167, 179, 190, 0.2);
  --simple-gray-3: rgba(43, 51, 59, 0.2);
  --simple-gray-4: rgba(91, 97, 103, 0.5);
  --simple-gray-5: rgb(225, 230, 234);
  --simple-gray-6: rgb(205, 210, 218);
  --simple-gray-7: rgba(205, 210, 218, 0.7);
  --simple-orange: rgb(233, 155, 99);
  --simple-red-1: hsla(365, 90%, 62%, 1);
  --simple-red-2: hsl(365, 95%, 85%, 1);
  --simple-red-3: hsl(365, 85%, 45%, 1);
  --simple-tran: rgba(244, 248, 251, 0);
  --simple-white-1: rgb(244, 248, 251);
  --simple-white-2: rgb(237, 242, 248);
  --simple-white-3: rgba(195, 203, 213, 0.2);
  --simple-white-4: rgb(252, 253, 253);
  --simple-white-5: rgba(227, 230, 232, 0.1);
  --simple-white-6: rgba(195, 203, 213, 0.3);
  --simple-yellow: rgba(255, 255, 0, 0.4);
  --slider-track-background: #dddddd;
  --sliding-panes-header-color: #0e64bb;
  --stack-tabs-background-blur-depth: 40px;
  --stag1: #fa8787;
  --stag1-bg: #eb2727;
  --stag2: #fdbd5c;
  --stag2-bg: #ee9002;
  --stag3: #50ce3a;
  --stag3-bg: #22ac09;
  --status-bar-background: #fcfcfc;
  --status-bar-bg: #f3f3f3;
  --status-bar-border-color: #e3e3e3;
  --status-bar-radius: 7px 0 0 0;
  --status-bar-text-color: #7f7f7f;
  --stickies-color-1: #b3e2b3;
  --stickies-color-2: #e9c6f1;
  --stripe-notebook-stripe-color: #f5f2e6;
  --strong-em-color-1: #1048ff;
  --strong-em-color-2: #14c8ff;
  --strong-em-highlight-color: #237add;
  --tab-container-background: #fcfcfc;
  --tab-outline-color: #e3e3e3;
  --tab-radius: 5px;
  --tab-stacked-shadow: #d6d6d6;
  --tab-switcher-background: #fcfcfc;
  --tab-switcher-menubar-background: linear-gradient(to top, #fcfcfc, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(47, 147, 228);
  --tab-text-color: #7f7f7f;
  --tab-text-color-active: #7f7f7f;
  --tab-text-color-focused: #7f7f7f;
  --tab-text-color-focused-active: #7f7f7f;
  --tab-text-color-focused-active-current: #0e0e0e;
  --tab-text-color-focused-highlighted: rgb(47, 147, 228);
  --table-add-button-border-color: #dddddd;
  --table-background-color: #f1f1f176;
  --table-background-color-odd: #ffffff70;
  --table-border-color: #7d7d7d;
  --table-color-calendar-2: rgb(167, 223, 251);
  --table-color-rgb: 167, 223, 251;
  --table-drag-handle-background-active: rgb(64, 159, 231);
  --table-drag-handle-color: #7f7f7f;
  --table-drag-handle-color-active: #ffffff;
  --table-header-border-color: #7d7d7d;
  --table-header-color: #0e0e0e;
  --table-hover-color: #5dacec34;
  --table-hover-raw-color: #85bfee2f;
  --table-hover-thead-color: #ddefff;
  --table-selection: rgba(47, 147, 228, 0.1);
  --table-selection-border-color: rgb(64, 159, 231);
  --table-text-size: 15px;
  --table-thead-background-color: rgba(47, 147, 228, 0.1);
  --tag-background: rgba(47, 147, 228, 0.1);
  --tag-background-hover: rgba(47, 147, 228, 0.2);
  --tag-border-color: rgba(47, 147, 228, 0.15);
  --tag-border-color-hover: rgba(47, 147, 228, 0.15);
  --tag-border-width: 1px;
  --tag-color: rgb(47, 147, 228);
  --tag-color-hover: rgb(47, 147, 228);
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
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(47, 147, 228);
  --text-accent-hover: rgb(82, 173, 235);
  --text-blue: #0083bb;
  --text-brown: #855a46;
  --text-checked-checkbox: #9b9b9b;
  --text-color-code: #e95d00;
  --text-error: #e75545;
  --text-error-hover: #f86959;
  --text-faint: #7f7f7f;
  --text-folder-file: #272727;
  --text-folder-file-icon: rgb(64, 159, 231);
  --text-gray: #37352f99;
  --text-green: #00927f;
  --text-highlight: #0e0e0e;
  --text-highlight-bg: rgba(255, 211, 153, 0.847);
  --text-highlight-bg-a-dark: 0.541;
  --text-highlight-bg-a-light: 0.847;
  --text-highlight-bg-h-dark: 57;
  --text-highlight-bg-h-light: 34;
  --text-highlight-bg-l-dark: 38%;
  --text-highlight-bg-l-light: 80%;
  --text-highlight-bg-s-dark: 40%;
  --text-highlight-bg-s-light: 100%;
  --text-muted: #7f7f7f;
  --text-normal: #0e0e0e;
  --text-on-accent: #ffffff;
  --text-orange: #d9730d;
  --text-pink: #c40075;
  --text-purple: #5d1fb9;
  --text-red: #ff4343;
  --text-search-highlight-bg: #ffd1dd;
  --text-selection: #a9d1c859;
  --text-yellow: #d4a300;
  --text-yellow-2: #a78000;
  --textHighlight: var(--text-highlight-bg);
  --theme-color: rgb(64, 159, 231);
  --theme-color-translucent-001: rgba(47, 147, 228, 0.01);
  --theme-color-translucent-005: rgba(47, 147, 228, 0.05);
  --theme-color-translucent-01: rgba(47, 147, 228, 0.1);
  --theme-color-translucent-015: rgba(47, 147, 228, 0.15);
  --theme-color-translucent-02: rgba(47, 147, 228, 0.2);
  --theme-color-translucent-04: rgba(47, 147, 228, 0.4);
  --theme-color-translucent-06: rgba(47, 147, 228, 0.6);
  --thino-background-dark-custom: url("https://");
  --thino-background-light-custom: url("https://");
  --titleFont: var(--font-text);
  --titlebar-background: #fcfcfc;
  --titlebar-background-focused: #f3f3f3;
  --titlebar-blur-depth: 8px;
  --titlebar-border-color: #dddddd;
  --titlebar-brightness: 1;
  --titlebar-text-color: #7f7f7f;
  --titlebar-text-color-focused: #0e0e0e;
  --unresolved-link: #db4e4ecc;
  --variable-2: #0072d0;
  --variable-3: #5a96f7;
  --vault-profile-color: #0e0e0e;
  --vault-profile-color-hover: #0e0e0e;
  --white: #ffffff;
  --window-radius: 8px;
  --window-shadow: 0 1px 3px rgba(195, 203, 213, 0.2);
  --window-shadow2: 0 0 9px rgba(205, 210, 218, 0.7);
  --yellow: #e48100;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(14, 14, 14);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(14, 14, 14);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(252, 252, 252);
  color: rgb(14, 14, 14);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(227, 227, 227);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(243, 243, 243);
  border-left-color: rgb(227, 227, 227);
  color: rgb(14, 14, 14);
}

body div#quartz-root {
  color: rgb(14, 14, 14);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(9, 157, 78);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(9, 157, 78) none 0px;
  text-decoration: rgb(9, 157, 78);
  text-decoration-color: rgb(9, 157, 78);
}

body .page article p > i, i {
  color: rgb(9, 157, 78);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(9, 157, 78) none 0px;
  text-decoration: rgb(9, 157, 78);
  text-decoration-color: rgb(9, 157, 78);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  background-color: rgba(255, 211, 153, 0.847);
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(14, 14, 14) none 0px;
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body del {
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(14, 14, 14) none 0px;
  text-decoration: line-through rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body p {
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(127, 127, 127) none 0px;
  text-decoration: rgb(127, 127, 127);
  text-decoration-color: rgb(127, 127, 127);
}`,
    links: `body a.external, footer a {
  color: rgb(47, 147, 228);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(47, 147, 228) none 0px;
  text-decoration: underline rgb(47, 147, 228);
  text-decoration-color: rgb(47, 147, 228);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(47, 147, 228);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(47, 147, 228) none 0px;
  text-decoration: rgb(47, 147, 228);
  text-decoration-color: rgb(47, 147, 228);
}

body a.internal.broken {
  color: rgba(219, 78, 78, 0.8);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgba(219, 78, 78, 0.8) none 0px;
  text-decoration: underline rgba(219, 78, 78, 0.8);
  text-decoration-color: rgba(219, 78, 78, 0.8);
}`,
    lists: `body dd {
  color: rgb(14, 14, 14);
}

body dt {
  color: rgb(14, 14, 14);
}

body ol > li {
  color: rgb(14, 14, 14);
}

body ol.overflow {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}

body ul > li {
  color: rgb(14, 14, 14);
}

body ul.overflow {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(127, 127, 127);
  text-decoration: rgb(127, 127, 127);
}

body blockquote {
  background-color: rgba(213, 213, 213, 0.173);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}

body table {
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  margin-top: 20px;
  width: 658px;
}

body tbody tr:nth-child(even) {
  background-color: rgba(241, 241, 241, 0.463);
}

body tbody tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.44);
}

body td {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-width: 0px;
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
  border-right-color: rgb(14, 14, 14);
  border-right-width: 0px;
  border-top-color: rgb(14, 14, 14);
  border-top-width: 0px;
  color: rgb(14, 14, 14);
  padding-left: 10px;
  padding-right: 10px;
}

body th {
  background-color: rgba(47, 147, 228, 0.1);
  border-bottom-color: rgb(125, 125, 125);
  border-bottom-width: 0px;
  border-left-color: rgb(125, 125, 125);
  border-left-width: 0px;
  border-right-color: rgb(125, 125, 125);
  border-right-width: 0px;
  border-top-color: rgb(125, 125, 125);
  border-top-width: 0px;
  color: rgb(14, 14, 14);
  padding-left: 10px;
  padding-right: 10px;
}`,
    code: `body code {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(0, 0, 0);
  font-family: "??", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 13.2px;
  padding-left: 6.6px;
  padding-right: 6.6px;
  padding-top: 13.2px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(230, 230, 230, 0.443);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(230, 230, 230, 0.443);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(0, 0, 0);
}

body pre > code > [data-line] {
  border-left-color: rgb(204, 117, 35);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(204, 117, 35);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(204, 117, 35);
  border-left-color: rgb(204, 117, 35);
  border-right-color: rgb(204, 117, 35);
  border-top-color: rgb(204, 117, 35);
}

body pre > code, pre:has(> code) {
  background-color: rgba(230, 230, 230, 0.443);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgba(230, 230, 230, 0.443);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}

body figcaption {
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}

body img {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}

body video {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}`,
    embeds: `body .file-embed {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(65, 145, 210, 0.035);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(65, 145, 210, 0.035);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(65, 145, 210, 0.035);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(65, 145, 210, 0.035);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: solid;
  border-top-width: 2px;
  padding-bottom: 1.4px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 1.4px;
}

body .footnotes {
  border-top-color: rgb(14, 14, 14);
  color: rgb(14, 14, 14);
}

body .transclude {
  background-color: rgba(65, 145, 210, 0.035);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-left: 16px;
  padding-right: 8px;
}

body .transclude-inner {
  background-color: rgba(65, 145, 210, 0.035);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-left: 16px;
  padding-right: 8px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(127, 127, 127);
  text-decoration: rgb(127, 127, 127);
  text-decoration-color: rgb(127, 127, 127);
}

body input[type=checkbox] {
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-bottom: 2px;
  margin-left: -21.6px;
  width: 14.3906px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='*'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='-'] {
  color: rgb(127, 127, 127);
  text-decoration: line-through rgb(127, 127, 127);
  text-decoration-color: rgb(127, 127, 127);
}

body li.task-list-item[data-task='/'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='>'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='?'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='I'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='S'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='b'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='c'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='d'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='f'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='i'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='k'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='l'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='p'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='u'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body li.task-list-item[data-task='w'] {
  color: rgb(14, 14, 14);
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}`,
    callouts: `body .callout .callout-title {
  padding-bottom: 8px;
  padding-left: 12px;
  padding-top: 8px;
}

body .callout > .callout-content {
  padding-left: 10px;
  padding-right: 10px;
}

body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(0, 191, 188, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(233, 49, 71, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(233, 49, 71, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(120, 82, 238, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(233, 49, 71, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(8, 109, 221, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(8, 109, 221, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(236, 117, 0, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(158, 158, 158, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(8, 185, 78, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(0, 191, 188, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(8, 109, 221, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(236, 117, 0, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(255, 255, 255, 0.824);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(14, 14, 14);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
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
  box-shadow: rgb(190, 190, 190) 0px 0px 10px 1px;
}

body .search > .search-container > .search-space > * {
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(14, 14, 14) none 0px;
  text-decoration: rgb(14, 14, 14);
  text-decoration-color: rgb(14, 14, 14);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(14, 14, 14);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(14, 14, 14);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(47, 147, 228, 0.15);
  color: rgb(14, 14, 14);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

body .search > .search-container > .search-space > input {
  background-color: rgba(255, 255, 255, 0.824);
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(47, 147, 228, 0.15);
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(47, 147, 228, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(47, 147, 228, 0.1);
  border-bottom-color: rgba(47, 147, 228, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(47, 147, 228, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(47, 147, 228, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(47, 147, 228, 0.15);
  border-top-width: 1px;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(47, 147, 228);
}

body h1 {
  color: rgb(8, 55, 125);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h2 {
  color: rgb(0, 79, 168);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(8, 55, 125);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h3 {
  color: rgb(14, 99, 185);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h4 {
  color: rgb(52, 130, 197);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h5 {
  color: rgb(90, 160, 226);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h6 {
  color: rgb(137, 185, 230);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body hr {
  border-bottom-color: rgb(227, 227, 227);
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(8, 109, 221, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.894609 0.184607 0.224544);
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  font-weight: 600;
  text-decoration: color(srgb 0.894609 0.184607 0.224544);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.894609 0.184607 0.224544);
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  font-weight: 600;
  text-decoration: color(srgb 0.894609 0.184607 0.224544);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(39, 39, 39);
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  text-decoration: rgb(39, 39, 39);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(39, 39, 39);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(39, 39, 39);
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(127, 127, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(127, 127, 127);
  border-right-color: rgb(127, 127, 127);
  border-top-color: rgb(127, 127, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(127, 127, 127);
}`,
    footer: `body footer {
  background-color: rgb(243, 243, 243);
  border-bottom-color: rgb(219, 219, 220);
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 220);
  border-top-left-radius: 7px;
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(127, 127, 127);
  text-decoration: rgb(127, 127, 127);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(14, 14, 14);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
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

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(39, 39, 39);
  text-decoration: rgb(39, 39, 39);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(39, 39, 39);
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
}`,
    listPage: `body li.section-li {
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

body li.section-li > .section .meta {
  color: rgb(39, 39, 39);
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(39, 39, 39);
  text-decoration: rgb(39, 39, 39);
}

body ul.section-ul {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(65, 159, 231);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(65, 159, 231);
  border-right-color: rgb(65, 159, 231);
  border-top-color: rgb(65, 159, 231);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(65, 159, 231);
}

body .darkmode svg {
  color: rgb(65, 159, 231);
  stroke: rgb(65, 159, 231);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(127, 127, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(127, 127, 127);
  border-right-color: rgb(127, 127, 127);
  border-top-color: rgb(127, 127, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(127, 127, 127);
}

body .breadcrumb-element p {
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
  color: rgb(14, 14, 14);
}

body .metadata {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(127, 127, 127);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(127, 127, 127);
  border-left-color: rgb(127, 127, 127);
  border-right-color: rgb(127, 127, 127);
  border-top-color: rgb(127, 127, 127);
  color: rgb(127, 127, 127);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(243, 243, 243);
}

body .page-header h2.page-title {
  color: rgb(14, 14, 14);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(14, 14, 14);
  text-decoration: underline dotted rgb(14, 14, 14);
}

body details {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}

body input[type=text] {
  border-bottom-color: rgb(127, 127, 127);
  border-left-color: rgb(127, 127, 127);
  border-right-color: rgb(127, 127, 127);
  border-top-color: rgb(127, 127, 127);
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
  background-color: rgba(230, 230, 230, 0.443);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(0, 0, 0);
  font-family: "??", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}

body sub {
  color: rgb(14, 14, 14);
}

body summary {
  color: rgb(14, 14, 14);
}

body sup {
  color: rgb(14, 14, 14);
}`,
  },
};
