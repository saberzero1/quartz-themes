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
  --Fold0: #fc5c65 !important;
  --Fold1: #fd9644 !important;
  --Fold2: #fed330 !important;
  --Fold3: #26de81 !important;
  --Fold4: #2bcbba !important;
  --Fold5: #45aaf2 !important;
  --Fold6: #4b7bec !important;
  --Fold7: #a55eea !important;
  --Fold8: #d1d8e0 !important;
  --Fold9: #778ca3 !important;
  --FoldA: #eb3b5a !important;
  --FoldB: #fa8231 !important;
  --FoldC: #f7b731 !important;
  --FoldD: #20bf6b !important;
  --FoldE: #0fb9b1 !important;
  --FoldF: #2d98da !important;
  --FoldG: #3867d6 !important;
  --FoldH: #8854d0 !important;
  --FoldI: #a5b1c2 !important;
  --FoldJ: #4b6584 !important;
  --FoldK: #fc5c65 !important;
  --FoldL: #fd9644 !important;
  --FoldM: #fed330 !important;
  --FoldN: #26de81 !important;
  --FoldO: #2bcbba !important;
  --FoldP: #45aaf2 !important;
  --FoldQ: #4b7bec !important;
  --FoldR: #a55eea !important;
  --FoldS: #d1d8e0 !important;
  --FoldT: #778ca3 !important;
  --FoldU: #eb3b5a !important;
  --FoldV: #fa8231 !important;
  --FoldW: #f7b731 !important;
  --FoldX: #20bf6b !important;
  --FoldY: #0fb9b1 !important;
  --FoldZ: #2d98da !important;
  --accent-em: #a4ca8e !important;
  --accent-h: 208 !important;
  --accent-l: 49% !important;
  --accent-l-alt: 51.45% !important;
  --accent-s: 64% !important;
  --accent-strong: #e7e7e7 !important;
  --activeline-background: hsla(208, 64%, 49%,0.05) !important;
  --admonition-bg-color: #11111100 !important;
  --aqua: #35bed0 !important;
  --background-4-sliding-pane: #252525ed !important;
  --background-asymm-split-left: #000000 !important;
  --background-black-or-white-1: #353535 !important;
  --background-blockquote: #9191911c !important;
  --background-blue: #2f5264 !important;
  --background-brown: #493a3a !important;
  --background-code: #1111118c !important;
  --background-code-2: #4c4c4cb0 !important;
  --background-command-palette-theme-dark-custom: url("https://") !important;
  --background-command-palette-theme-light-custom: url("https://") !important;
  --background-gray: #535353 !important;
  --background-green: #32503e !important;
  --background-markdown-page-theme-dark-custom: url("https://") !important;
  --background-markdown-page-theme-light-custom: url("https://") !important;
  --background-mobile-drawer-1: #1b1b1b !important;
  --background-mobile-drawer-2: #1b1b1b69 !important;
  --background-modifier-active-hover: hsla(208, 64%, 49%, 0.1) !important;
  --background-modifier-border: #343434 !important;
  --background-modifier-border-1: #000000 !important;
  --background-modifier-border-asymm: #343434 !important;
  --background-modifier-border-checkbox: #7b7b7b !important;
  --background-modifier-border-hr: #3f3f3f !important;
  --background-modifier-box-shadow: rgba(228, 228, 228, 0.08) !important;
  --background-modifier-error: #9b4343 !important;
  --background-modifier-error-rgb: 155, 67, 67 !important;
  --background-modifier-success: #539126 !important;
  --background-modifier-success-rgb: 83, 145, 38 !important;
  --background-nonoverlapping-note: #000000 !important;
  --background-orange: #53422f !important;
  --background-panel-page-theme-dark-custom: url("https://") !important;
  --background-panel-page-theme-light-custom: url("https://") !important;
  --background-pink: #533b4a !important;
  --background-popover: #242424 !important;
  --background-primary: #202020 !important;
  --background-primary-alt: #444444 !important;
  --background-purple: #443f57 !important;
  --background-red: #683c3c !important;
  --background-secondary: #151515 !important;
  --background-secondary-alt: #000000 !important;
  --background-secondary-translucent: #2c2c2c26 !important;
  --background-secondary-translucent-1: #2c2c2c26 !important;
  --background-settings-workplace-theme-dark-custom: url("https://") !important;
  --background-settings-workplace-theme-light-custom: url("https://") !important;
  --background-titlebar-inner: hsla(208, 64%, 49%, 10%) !important;
  --background-transparent-black-or-white-1: #1b1b1b9a !important;
  --background-transparent-black-or-white-2: #1e1e1ebd !important;
  --background-transparent-black-or-white-3: #2f2f2f6c !important;
  --background-transparent-black-or-white-3-1: #00000064 !important;
  --background-transparent-black-or-white-4: #7e7e7e1d !important;
  --background-transparent-black-or-white-5: #0f0f0f6c !important;
  --background-transparent-blue: #003e759a !important;
  --background-waves-color: #4A75DB8C !important;
  --background-yellow: #585536 !important;
  --bases-cards-background: #202020 !important;
  --bases-cards-cover-background: #444444 !important;
  --bases-cards-radius: 7px !important;
  --bases-cards-shadow: 0 0 0 1px #343434 !important;
  --bases-embed-border-color: #343434 !important;
  --bases-embed-border-radius: 5px !important;
  --bases-group-heading-property-color: #8a8a8a !important;
  --bases-table-border-color: #4a4a4a !important;
  --bases-table-cell-background-active: #202020 !important;
  --bases-table-cell-background-disabled: #444444 !important;
  --bases-table-cell-background-selected: hsla(208, 64%, 49%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(208, 64%, 49%) !important;
  --bases-table-container-border-radius: 5px !important;
  --bases-table-group-background: #444444 !important;
  --bases-table-header-background: #202020 !important;
  --bases-table-header-color: #8a8a8a !important;
  --bases-table-summary-background: #202020 !important;
  --bg-color-highlight-1: #c865656f !important;
  --bg-color-highlight-2: #54b9476f !important;
  --bg-color-highlight-3: #1e83d086 !important;
  --bg-color-notebook: #FFFFFF00 !important;
  --bg-color-settings-0: #07070747 !important;
  --bg-color-settings-0-1: #ffffff00 !important;
  --bg-color-settings-1: #7c7c7c6d !important;
  --bg-color-settings-2: #1f1f1f52 !important;
  --bg-color-settings-3: #141414be !important;
  --bg-color-settings-4: #2e2e2e9d !important;
  --bg-color-settings-5: #424242aa !important;
  --bg-color-settings-6: #191919c7 !important;
  --bg-panel-page-opacity-cp: 0.25 !important;
  --bg-sliding-pane-header: #00000043 !important;
  --bg-sliding-pane-leaf: #0f0f0f36 !important;
  --blockquote-border-color: hsl(208, 64%, 49%) !important;
  --blue: #a0c7e9 !important;
  --blur-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent)) !important;
  --blur-codebox-frosted-glass: 2 !important;
  --blur-depth: 10px !important;
  --blur-depth-cp: 10px !important;
  --blur-p-kanban-frosted-glass: 5 !important;
  --bodyFont: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bottom-padding-value: 0em !important;
  --brightness-4-bg: 0.9 !important;
  --brightness-4-bg-cp: 0.9 !important;
  --bt-bubble-background-color: transparent !important;
  --bt-bubble-border-color: #343434 !important;
  --bt-bubble-layout-padding: 8px !important;
  --bt-colorful-indentation-width: 1px !important;
  --bt-connected-indent-line-color: #926a6a !important;
  --bt-indentation-gradient-color-1: hsl(208, 64%, 49%) !important;
  --bt-indentation-gradient-color-2: transparent !important;
  --bt-indentation-line-image: url("") !important;
  --bt-indentation-width-hover: 3px !important;
  --c-1: #da2400 !important;
  --c-2: #ffb623 !important;
  --c-3: #8c6e22 !important;
  --calendar-active-color: hsla(208, 64%, 49%,0.4) !important;
  --calendar-hover-color: hsla(208, 64%, 49%,0.2) !important;
  --calendar-today-background-color: #8c4545 !important;
  --calendar-week-background-color: #4a5842 !important;
  --calendar-week-color: #a2df94 !important;
  --calendar-week-hover: #61815c !important;
  --callout-radius: 5px;
  --canvas-background: #202020 !important;
  --canvas-card-label-color: #797979 !important;
  --canvas-card-opacity: 0.1 !important;
  --canvas-controls-radius: 5px !important;
  --cards-width: 138px !important;
  --caret-color: #c6c6c6 !important;
  --checkbox-border-color: #797979 !important;
  --checkbox-border-color-hover: #8a8a8a !important;
  --checkbox-color: hsl(208, 64%, 49%) !important;
  --checkbox-color-0: #3187d3 !important;
  --checkbox-color-1: #a9a608 !important;
  --checkbox-color-2: #1dac10 !important;
  --checkbox-color-3: #ffd1d1 !important;
  --checkbox-color-4: #625d4c !important;
  --checkbox-color-5: #9a67ae !important;
  --checkbox-color-6: #5f5f5f !important;
  --checkbox-color-hover: hsl(203, 67.2%, 63.21%) !important;
  --checkbox-marker-color: #202020 !important;
  --checkbox-radius: 5px !important;
  --checkbox-size: 0.9rem !important;
  --checklist-bg: #1d1d1d96 !important;
  --checklist-bg-hover: #08080896 !important;
  --checklist-color-1: #005aa486 !important;
  --checklist-color-2: #00798986 !important;
  --checklist-color-3: #12781586 !important;
  --checklist-color-4: #897b0086 !important;
  --checklist-color-5: #a4620086 !important;
  --checklist-color-6: #ab100586 !important;
  --checklist-color-7: #7f1f9086 !important;
  --checklist-done-color: #8a8a8a !important;
  --clickable-icon-radius: 5px !important;
  --cloze-bg-color: #e7e7e7 !important;
  --cloze-bg-color-3: transparent !important;
  --cloze-decoration: none !important;
  --cloze-decoration-2: dashed !important;
  --cloze-decoration-3: dashed !important;
  --cloze-decoration-color: red !important;
  --cloze-decoration-color-2: hsl(208, 64%, 49%) !important;
  --cloze-decoration-color-3: hsl(208, 64%, 49%) !important;
  --code-active-line-background-color: #111111eb !important;
  --code-atom: #da904b !important;
  --code-attribute: #cac685 !important;
  --code-attribute-in-comment: #c792ea !important;
  --code-background: #1111118c !important;
  --code-border-color: #343434 !important;
  --code-bracket: #ff5370 !important;
  --code-builtin: #ffcb6b !important;
  --code-callee: #89ddff !important;
  --code-comment: #568060 !important;
  --code-def: #82aaff !important;
  --code-definition: #82aaff !important;
  --code-error-bg: #ff5370 !important;
  --code-function: #cac685 !important;
  --code-header: #da7dae !important;
  --code-hr: #abb2bf !important;
  --code-important: #478fee !important;
  --code-keyword: #478fee !important;
  --code-language: #8a8a8a !important;
  --code-link: #696d70 !important;
  --code-matching-bracket: #ffffff !important;
  --code-meta: #ffcb6b !important;
  --code-normal: #ebdbb2 !important;
  --code-number: #ff5370 !important;
  --code-operator: #a89984 !important;
  --code-property: #a0c7e9 !important;
  --code-punctuation: #abb2bf !important;
  --code-qualifier: #35bed0 !important;
  --code-radius: 5px !important;
  --code-selection-background: #3b767160 !important;
  --code-selection-color: #ebdbb2 !important;
  --code-string: #abd58e !important;
  --code-string-2: #d6b87f !important;
  --code-tag: #db7c84 !important;
  --code-tag-in-comment: #ff5370 !important;
  --code-type: #cac685 !important;
  --code-value: #abd58e !important;
  --code-variable: #db7c84 !important;
  --code-variable-2: #53ada3 !important;
  --code-variable-3: #e7852fe7 !important;
  --codeFont: JetBrains Mono, Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #797979 !important;
  --collapse-icon-color-collapsed: hsl(208, 64%, 49%) !important;
  --color-accent: hsl(208, 64%, 49%) !important;
  --color-accent-1: hsl(205, 65.28%, 56.35%) !important;
  --color-accent-2: hsl(203, 67.2%, 63.21%) !important;
  --color-accent-hsl: 208, 64%, 49% !important;
  --color-highlight-1: #c6c6c6 !important;
  --color-highlight-2: #c6c6c6 !important;
  --color-highlight-3: #c6c6c6 !important;
  --color-view-header-gradient-1: #060813de !important;
  --color-view-header-gradient-2: #00285dc0 !important;
  --colorA: rgba(152, 0, 240, 0.13) !important;
  --colorB: rgba(0, 72, 240, 0.13) !important;
  --colorC: rgba(0, 240, 44, 0.13) !important;
  --cursor-blue: #8ac7ff !important;
  --cursor-green: #7dff7d !important;
  --cursor-red: #ff3939 !important;
  --cursor-violet: #bf76ff !important;
  --cursor-yellow: #fff955 !important;
  --custom-titlebar-bg: #000000 !important;
  --dark: #c6c6c6 !important;
  --darkblue: #478fee !important;
  --darkgray: #c6c6c6 !important;
  --darkgreen: #568060 !important;
  --day-planner-dot: #dfcf77 !important;
  --day-planner-item-hover: #053c85 !important;
  --day-planner-line: #dfcf77 !important;
  --day-planner-pie: #f19c1c !important;
  --day-planner-timeline: #000000 !important;
  --divider-color: #000000 !important;
  --divider-color-hover: hsl(208, 64%, 49%) !important;
  --dotted-notebook-dot-color: #c7c7c71f !important;
  --dropdown-background: #2b2b2b !important;
  --dropdown-background-hover: #373737 !important;
  --embed-block-shadow-hover: 0 0 0 1px #343434, inset 0 0 0 1px #343434 !important;
  --embed-border-start: 2px solid hsl(208, 64%, 49%) !important;
  --embed-color: hsla(208,76.8%,98%,0.055) !important;
  --embed-content-height: 600px !important;
  --event-item-color1: #283493bb !important;
  --event-item-color10: #6a1b9abb !important;
  --event-item-color2: #1565c0bb !important;
  --event-item-color3: #00838fbb !important;
  --event-item-color4: #2e7d32bb !important;
  --event-item-color5: #9e9d24bb !important;
  --event-item-color6: #ff8f00bb !important;
  --event-item-color7: #d84315bb !important;
  --event-item-color8: #c62828bb !important;
  --event-item-color9: #ad1457bb !important;
  --external-link-color: hsl(208, 64%, 49%) !important;
  --fancy-cursor-width: 2px !important;
  --fancy-hr-icon: '😀' !important;
  --fancy-hr-rotate: 0deg !important;
  --file-header-background: #202020 !important;
  --file-header-background-focused: #202020 !important;
  --file-header-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-line-width: 45rem !important;
  --flair-background: #2b2b2b !important;
  --flair-color: #c6c6c6 !important;
  --folder-title: #ffffff !important;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-family-better-footnote: Arlrdbd, "Source Han Sans", "Segoe UI Emoji" !important;
  --font-family-folder-file-title: Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif !important;
  --font-family-inline-code: JetBrains Mono, Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace !important;
  --font-family-special-tag: "Lucida Handwriting", "Segoe UI Emoji" !important;
  --font-family-strong: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-family-tag: Bookerly, 'Inter', "Segoe UI", "Microsoft YaHei", STzhongsong, STSong, "Segoe UI Emoji", Serif !important;
  --font-family-vault: "Lucida Handwriting", "Segoe UI Emoji" !important;
  --font-interface: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace !important;
  --font-mermaid: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: JetBrains Mono, Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace !important;
  --font-print: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", Arial' !important;
  --font-size-better-footnote: 1.3em !important;
  --font-size-checklist: 0.85em !important;
  --font-size-cloze: 0.9375em !important;
  --font-size-code: 0.825em !important;
  --font-size-edit-blockquote: 1em !important;
  --font-size-edit-normal: 1em !important;
  --font-size-embed-file: 1.25em !important;
  --font-size-embed-title-size: 1.3em !important;
  --font-size-emoji-after-tag: 1.5625em !important;
  --font-size-file-header-title: 0.9em !important;
  --font-size-file-header-title-andy-plugin: 1em !important;
  --font-size-folder-and-file: 0.9em !important;
  --font-size-latex: 1em !important;
  --font-size-list: 1em !important;
  --font-size-loading-add: 1.5em !important;
  --font-size-loading-diy-text: 3em !important;
  --font-size-obsidian-titlebar: 13px !important;
  --font-size-outline: 13px !important;
  --font-size-preview-blockquote: 1em !important;
  --font-size-preview-normal: 1em !important;
  --font-size-split: 0.85em !important;
  --font-size-tag: 0.85em !important;
  --font-size-vault-name: 1em !important;
  --font-style-em: italic !important;
  --font-text: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-text-theme: Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei" !important;
  --font-weight-highlight-1: normal !important;
  --font-weight-highlight-2: normal !important;
  --font-weight-highlight-3: normal !important;
  --font-weight-inline-code: bold !important;
  --font-weight-strong: bold !important;
  --footnote-divider-color: #343434 !important;
  --footnote-id-color: #8a8a8a !important;
  --footnote-id-color-no-occurrences: #797979 !important;
  --footnote-radius: 5px !important;
  --graph-arrow: #c23917 !important;
  --graph-attach: #b2cfe0bb !important;
  --graph-canvas-bg: #202020 !important;
  --graph-circle: #55a2d6bb !important;
  --graph-circle-fill-highlight: hsl(208, 64%, 49%) !important;
  --graph-circle-outline: transparent !important;
  --graph-control-bg: #00000080 !important;
  --graph-line: #8c8c8c !important;
  --graph-line-fill-highlight: rgb(45, 130, 204) !important;
  --graph-node: #8a8a8a !important;
  --graph-node-focused: hsl(208, 64%, 49%) !important;
  --graph-node-unresolved: #797979 !important;
  --graph-tag: #88d842bb !important;
  --graph-text: #c6c6c6 !important;
  --graph-text-color: #B5B5B5 !important;
  --graph-unresolved: #f08080de !important;
  --gray: #8a8a8a !important;
  --gray-1: #5C6370 !important;
  --gray-2: #abb2bf !important;
  --green: #abd58e !important;
  --green-1: #79c142 !important;
  --grid-notebook-line-color-1: #c7c7c71f !important;
  --grid-notebook-line-color-2: #74747440 !important;
  --h1-bg-color: color-mix(in srgb, hsl(78, 62%, 47%) 15%, transparent) !important;
  --h1-color: hsl(78, 62%, 47%) !important;
  --h1-font: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h1-size: 1.5625em !important;
  --h2-bg-color: color-mix(in srgb, hsl(118, 42%, 49%) 15%, transparent) !important;
  --h2-color: hsl(118, 42%, 49%) !important;
  --h2-font: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h2-size: 1.4375em !important;
  --h3-bg-color: color-mix(in srgb, hsl(180, 53%, 48%) 15%, transparent) !important;
  --h3-color: hsl(180, 53%, 48%) !important;
  --h3-font: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h3-size: 1.3125em !important;
  --h4-bg-color: color-mix(in srgb, hsl(216, 69%, 68%) 15%, transparent) !important;
  --h4-color: hsl(216, 69%, 68%) !important;
  --h4-font: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h4-size: 1.1875em !important;
  --h5-bg-color: color-mix(in srgb, hsl(258, 79%, 77%) 15%, transparent) !important;
  --h5-color: hsl(258, 79%, 77%) !important;
  --h5-size: 1.0625em !important;
  --h6-bg-color: color-mix(in srgb, hsl(290, 85%, 81%) 15%, transparent) !important;
  --h6-color: hsl(290, 85%, 81%) !important;
  --he-title-bar-active-action: hsl(208, 64%, 49%) !important;
  --he-title-bar-active-bg: hsla(208, 64%, 49%,0.05) !important;
  --he-title-bar-active-fg: #c6c6c6 !important;
  --he-title-bar-active-pinned-bg: hsla(208, 64%, 49%,0.05) !important;
  --he-title-bar-inactive-action: #c6c6c6 !important;
  --he-title-bar-inactive-bg: hsla(208, 64%, 49%,0.01) !important;
  --he-title-bar-inactive-fg: #8a8a8a !important;
  --he-title-bar-inactive-pinned-bg: hsla(208, 64%, 49%,0.01) !important;
  --headerFont: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --heading-formatting: #797979 !important;
  --hibox: 24px !important;
  --highlight: hsla(57, 40%, 38%, 0.541) !important;
  --hr-color: #242424 !important;
  --hr-color-1: hsl(208, 64%, 49%) !important;
  --hr-color-2: hsl(208, 64%, 49%) !important;
  --hr-color-3: hsl(208, 64%, 49%) !important;
  --hr-color-4: hsl(208, 64%, 49%) !important;
  --hr-color-icon-1: hsl(208, 64%, 49%) !important;
  --hr-color-icon-2: hsl(208, 64%, 49%) !important;
  --hr-color-icon-3: hsl(208, 64%, 49%) !important;
  --hr-color-icon-4: hsl(208, 64%, 49%) !important;
  --hr-color-numbers-bg-color: hsla(208, 64%, 49%,0.15) !important;
  --hr-color-numbers-color: hsl(208, 64%, 49%) !important;
  --hr-color-numbers-line-1: hsl(208, 64%, 49%) !important;
  --hr-color-numbers-line-2: hsl(208, 64%, 49%) !important;
  --hr-color-numbers-line-3: hsl(208, 64%, 49%) !important;
  --hr-color-numbers-line-4: hsl(208, 64%, 49%) !important;
  --hr-numbers-text-fill: transparent !important;
  --hr-numbers-text-stroke: #c6c6c6 !important;
  --icon-color: #8a8a8a !important;
  --icon-color-active: hsl(208, 64%, 49%) !important;
  --icon-color-focused: #c6c6c6 !important;
  --icon-color-hover: #8a8a8a !important;
  --image-max-width: 100% !important;
  --inline-title-bg-color: color-mix(in srgb, hsl(78, 62%, 47%) 15%, transparent) !important;
  --inline-title-color: hsl(78, 62%, 47%) !important;
  --inline-title-font: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --inline-title-size: 1.5625em !important;
  --input-date-separator: #797979 !important;
  --input-placeholder-color: #797979 !important;
  --interactive-accent: hsl(208, 64%, 49%) !important;
  --interactive-accent-hover: hsl(203, 67.2%, 63.21%) !important;
  --interactive-accent-hsl: 208, 64%, 49% !important;
  --interactive-accent-rgb: 45, 130, 204 !important;
  --interactive-hover: #373737 !important;
  --interactive-normal: #2b2b2b !important;
  --internal-link-color: hsl(208, 64%, 49%) !important;
  --kanban-color-1: #0065d852 !important;
  --kanban-color-2: #30e4e441 !important;
  --kanban-color-3: #1cb54f44 !important;
  --kanban-color-4: #97b82b49 !important;
  --kanban-color-5: #bb722d41 !important;
  --kanban-color-6: #d12e2e42 !important;
  --kanban-color-7: #8f36cb3f !important;
  --letter-space-code: 0 !important;
  --letter-space-main: 0 !important;
  --light: #202020 !important;
  --light-yellow: #cac685 !important;
  --lightgray: #151515 !important;
  --line-height-list: 2 !important;
  --line-height-main: 1.5 !important;
  --line-height-split: 1.3 !important;
  --link-color: hsl(208, 64%, 49%) !important;
  --link-color-hover: hsl(203, 67.2%, 63.21%) !important;
  --link-external-color: hsl(208, 64%, 49%) !important;
  --link-external-color-hover: hsl(203, 67.2%, 63.21%) !important;
  --link-unresolved-color: hsl(208, 64%, 49%) !important;
  --link-unresolved-decoration-color: #f08080de !important;
  --list-colorful-marker: #ff8686 !important;
  --list-marker-color: #797979 !important;
  --list-marker-color-collapsed: hsl(208, 64%, 49%) !important;
  --list-marker-color-hover: #8a8a8a !important;
  --list-ol-block-color: #2685bbb4 !important;
  --list-ol-hover: #2c7bd6 !important;
  --list-ol-marker-1: decimal !important;
  --list-ol-marker-2: lower-latin !important;
  --list-ol-marker-3: lower-roman !important;
  --list-ol-marker-4: decimal !important;
  --list-ol-number-color: #797979 !important;
  --list-spacing-bt: 1 !important;
  --list-ul-block-color: #e19742a9 !important;
  --list-ul-colorful-marker-content: '\\2022' !important;
  --list-ul-disc-color: #eb9563 !important;
  --list-ul-hover: #e28915de !important;
  --list-ul-marker-1: '\\2022' !important;
  --list-ul-marker-2: '\\25E6' !important;
  --list-ul-marker-3: '\\25AA' !important;
  --list-ul-marker-4: '\\25E6' !important;
  --list-ul-marker-color: #797979 !important;
  --loading-add-text-color: #d47e86 !important;
  --loading-add-text-color-alt: #a4e39c !important;
  --loading-diy-text: "快乐摸鱼又一天，人生还剩多少天？" !important;
  --loading-diy-text-color: #c6c6c6 !important;
  --loading-page-custom-gif-caption: " " !important;
  --loading-page-custom-gif-caption-alt: " " !important;
  --loading-page-custom-gif-url: url(https://) !important;
  --loading-text-after: "✿❀" !important;
  --loading-text-before: "❀✿" !important;
  --mark-highlight-strong-em: #fff7603a !important;
  --matrix-1: #2ec4c452 !important;
  --matrix-2: #38ce2a52 !important;
  --matrix-4: #eb973752 !important;
  --matrix-5: #f3424252 !important;
  --menu-background: #151515 !important;
  --menu-radius: 7px !important;
  --mermaid-active-task-color: #187ef1 !important;
  --mermaid-font-family: Segoe UI, "Microsoft YaHei", "Segoe UI Emoji", "trebuchet ms", verdana, Arial, cursive !important;
  --mermaid-seq-dia-color: #1371be !important;
  --metadata-border-color: #343434 !important;
  --metadata-divider-color: #343434 !important;
  --metadata-input-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-text-color: #c6c6c6 !important;
  --metadata-label-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-text-color: #8a8a8a !important;
  --metadata-label-text-color-hover: #8a8a8a !important;
  --mjx-inline-math-color: #c6c6c6 !important;
  --mjx-math-color: #c6c6c6 !important;
  --modal-background: #202020 !important;
  --modal-radius: 15px !important;
  --nav-collapse-icon-color: #797979 !important;
  --nav-collapse-icon-color-collapsed: #797979 !important;
  --nav-heading-color: #c6c6c6 !important;
  --nav-heading-color-collapsed: #797979 !important;
  --nav-heading-color-collapsed-hover: #8a8a8a !important;
  --nav-heading-color-hover: #c6c6c6 !important;
  --nav-item-background-selected: hsla(208, 64%, 49%, 0.15) !important;
  --nav-item-color: #8a8a8a !important;
  --nav-item-color-active: #c6c6c6 !important;
  --nav-item-color-highlighted: hsl(208, 64%, 49%) !important;
  --nav-item-color-hover: #c6c6c6 !important;
  --nav-item-color-selected: #c6c6c6 !important;
  --nav-item-radius: 5px !important;
  --nav-tag-color: #797979 !important;
  --nav-tag-color-active: #8a8a8a !important;
  --nav-tag-color-hover: #8a8a8a !important;
  --nav-tag-radius: 5px !important;
  --nord0: #2E3440 !important;
  --nord1: #3B4252 !important;
  --nord1-1: #3B425251 !important;
  --nord10: #5e81ac !important;
  --nord11: #BF616A !important;
  --nord11-1: #BF616A4b !important;
  --nord12: #D08770 !important;
  --nord13: #EBCB8B !important;
  --nord13-0: #e2b65e !important;
  --nord13-1: #ebca894b !important;
  --nord14: #A3BE8C !important;
  --nord14-0: #95b677 !important;
  --nord15: #B48EAD !important;
  --nord2: #434C5E !important;
  --nord3: #4C566A !important;
  --nord3-1: #717a91 !important;
  --nord4: #d8dee9 !important;
  --nord4-1: #d8dee95c !important;
  --nord5: #E5E9F0 !important;
  --nord5-1: #E5E9F053 !important;
  --nord6: #ECEFF4 !important;
  --nord6-1: #ECEFF46c !important;
  --nord6-2: #ECEFF43c !important;
  --nord7: #8fbcbb !important;
  --nord7-transparent: #8fbcbb2f !important;
  --nord8: #88C0D0 !important;
  --nord8-0: #65afc4 !important;
  --nord9: #81a1c1 !important;
  --nord9-1: #81a1c16c !important;
  --nord9-2: #81a1c13c !important;
  --note-cloze: #ffffff !important;
  --note-important: #d64545 !important;
  --opacity-cp: 0.25 !important;
  --orange: #d1945b !important;
  --orange-1: #da904b !important;
  --p-kanban-bg-color: #6c6c6c42 !important;
  --p-kanban-border-color: transparent !important;
  --p-kanban-card-color-1: #0000003f !important;
  --p-kanban-card-color-2: #41414136 !important;
  --p-kanban-color-1: #3496e652 !important;
  --p-kanban-color-2: #2ec4c452 !important;
  --p-kanban-color-3: #38ce2a52 !important;
  --p-kanban-color-4: #d2dd3852 !important;
  --p-kanban-color-5: #eb973752 !important;
  --p-kanban-color-6: #f3424252 !important;
  --p-kanban-color-7: #e45bdd52 !important;
  --p-kanban-color-8: #b962ff52 !important;
  --p-kanban-color-shadow: #0000004d !important;
  --p-kanban-color-simple: #8e8e8e41 !important;
  --page-border-bottom: #000000 !important;
  --panel-border-color: #18191e !important;
  --paragraph-spacing: 1 !important;
  --pdf-background: #202020 !important;
  --pdf-page-background: #202020 !important;
  --pdf-shadow: 0 0 0 1px #343434 !important;
  --pdf-sidebar-background: #202020 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #343434 !important;
  --pill-border-color: #343434 !important;
  --pill-color: #8a8a8a !important;
  --pill-color-hover: #c6c6c6 !important;
  --pill-color-remove: #797979 !important;
  --pill-color-remove-hover: hsl(208, 64%, 49%) !important;
  --pixel: 20px !important;
  --popover-height-factor: 1 !important;
  --popover-width-factor: 1 !important;
  --print-em-color: #a4ca8e !important;
  --prompt-background: #202020 !important;
  --prompt-box-shadow: #555555 !important;
  --purple: #c594d4 !important;
  --radius-l: 15px !important;
  --radius-m: 7px !important;
  --radius-s: 5px !important;
  --radius-xs: 3px !important;
  --raised-background: color-mix(in srgb, #2b2b2b 65%, transparent) linear-gradient(#2b2b2b, color-mix(in srgb, #2b2b2b 65%, transparent)) !important;
  --red: #db7c84 !important;
  --red-1: #d05a63 !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #000000 !important;
  --saturate-4-bg: 1 !important;
  --saturate-4-bg-cp: 1 !important;
  --scrollbar-active-thumb-bg: #4d4d4d88 !important;
  --scrollbar-radius: 15px !important;
  --scrollbar-thumb-bg: #3f3f3f7e !important;
  --search-clear-button-color: #8a8a8a !important;
  --search-icon-color: #8a8a8a !important;
  --search-result-file-matched-bg: #023774 !important;
  --search-result-file-title-color: #c6c6c6 !important;
  --search-text: #e0e0e0 !important;
  --secondary: hsl(208, 64%, 49%) !important;
  --setting-group-heading-color: #c6c6c6 !important;
  --setting-items-background: #444444 !important;
  --setting-items-border-color: #343434 !important;
  --setting-items-radius: 15px !important;
  --share-card-background-opacity-cp: 0.6 !important;
  --share-thino-background-dark-custom: url("https://") !important;
  --share-thino-background-light-custom: url("https://") !important;
  --simple-black-1: hsla(0, 0%, 13%, 1) !important;
  --simple-black-2: hsla(220, 20%, 35%, 1) !important;
  --simple-blue-1: hsla(209, 95%, 62%, 1) !important;
  --simple-blue-2: hsla(209, 85%, 72%, 0.5) !important;
  --simple-blue-3: hsla(245, 60%, 67%, 1) !important;
  --simple-blue-4: hsla(209, 20%, 66%, 0.62) !important;
  --simple-gray-1: hsla(0, 0%, 33%, 1) !important;
  --simple-gray-2: hsla(210, 15%, 70%, 0.2) !important;
  --simple-gray-3: hsla(210, 15%, 20%, 0.2) !important;
  --simple-gray-4: hsla(210, 6%, 38%, 0.5) !important;
  --simple-gray-5: hsla(207, 17%, 90%, 1) !important;
  --simple-gray-6: hsla(217, 15%, 83%, 1) !important;
  --simple-gray-7: hsla(217, 15%, 83%, 0.7) !important;
  --simple-orange: hsla(25, 75%, 65%, 1) !important;
  --simple-red-1: hsla(365, 90%, 62%, 1) !important;
  --simple-red-2: hsl(365, 95%, 85%, 1) !important;
  --simple-red-3: hsl(365, 85%, 45%, 1) !important;
  --simple-tran: hsla(204, 45%, 97%, 0) !important;
  --simple-white-1: hsla(204, 45%, 97%, 1) !important;
  --simple-white-2: hsla(210, 45%, 95%, 1) !important;
  --simple-white-3: hsla(212, 17%, 80%, 0.2) !important;
  --simple-white-4: hsla(180, 33%, 99%, 1) !important;
  --simple-white-5: hsla(207, 10%, 90%, 0.1) !important;
  --simple-white-6: hsla(212, 17%, 80%, 0.3) !important;
  --simple-yellow: hsla(60, 100%, 50%, 0.4) !important;
  --slider-track-background: #343434 !important;
  --sliding-panes-header-color: #f1a634d0 !important;
  --stack-tabs-background-blur-depth: 40px !important;
  --stag1: #f08383 !important;
  --stag1-bg: #bd1919 !important;
  --stag2: #e7b263 !important;
  --stag2-bg: #ac6700 !important;
  --stag3: #77df89 !important;
  --stag3-bg: #058c1c !important;
  --status-bar-background: #151515 !important;
  --status-bar-bg: #000000 !important;
  --status-bar-border-color: #000000 !important;
  --status-bar-radius: 7px 0 0 0 !important;
  --status-bar-text-color: #8a8a8a !important;
  --stickies-color-1: #84c584 !important;
  --stickies-color-2: #c7a3cf !important;
  --stripe-notebook-stripe-color: #162419 !important;
  --strong-em-color-1: #43d3ff !important;
  --strong-em-color-2: #baaaff !important;
  --strong-em-highlight-color: #a7b4ff !important;
  --suggestion-background: #202020 !important;
  --tab-background-active: #202020 !important;
  --tab-container-background: #151515 !important;
  --tab-outline-color: #151515 !important;
  --tab-radius: 5px !important;
  --tab-stacked-shadow: #0e0e0e !important;
  --tab-switcher-background: #151515 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #151515, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(208, 64%, 49%) !important;
  --tab-text-color: #797979 !important;
  --tab-text-color-active: #8a8a8a !important;
  --tab-text-color-focused: #8a8a8a !important;
  --tab-text-color-focused-active: #8a8a8a !important;
  --tab-text-color-focused-active-current: #c6c6c6 !important;
  --tab-text-color-focused-highlighted: hsl(208, 64%, 49%) !important;
  --table-add-button-border-color: #343434 !important;
  --table-background-color: #2f2f2f32 !important;
  --table-background-color-odd: #00000033 !important;
  --table-border-color: #4a4a4a !important;
  --table-color-calendar-2: rgb(0, 91, 144) !important;
  --table-color-rgb: 0, 91, 144 !important;
  --table-drag-handle-background-active: hsl(208, 64%, 49%) !important;
  --table-drag-handle-color: #797979 !important;
  --table-drag-handle-color-active: #e4e4e4 !important;
  --table-header-border-color: #4a4a4a !important;
  --table-header-color: #c6c6c6 !important;
  --table-hover-color: #1f65a221 !important;
  --table-hover-raw-color: #08569a21 !important;
  --table-hover-thead-color: #21395bc7 !important;
  --table-selection: hsla(208, 64%, 49%, 0.1) !important;
  --table-selection-border-color: hsl(208, 64%, 49%) !important;
  --table-text-size: 15px !important;
  --table-thead-background-color: hsla(208, 64%, 49%,0.1) !important;
  --tag-background: hsla(208, 64%, 49%, 0.1) !important;
  --tag-background-hover: hsla(208, 64%, 49%, 0.2) !important;
  --tag-border-color: hsla(208, 64%, 49%, 0.15) !important;
  --tag-border-color-hover: hsla(208, 64%, 49%, 0.15) !important;
  --tag-border-width: 1px !important;
  --tag-color: hsl(208, 64%, 49%) !important;
  --tag-color-hover: hsl(208, 64%, 49%) !important;
  --tag-dailynote: #98c8ff !important;
  --tag-dailynote-bg: #0f60bd !important;
  --tag-ideas: #fcfcc0 !important;
  --tag-ideas-bg: #565656d8 !important;
  --tag-questions: #d4bdff !important;
  --tag-questions-bg: #6640ae !important;
  --tag-text: #e4e4e4 !important;
  --tag-weeklynote: #d1e6ff !important;
  --tag-weeklynote-bg: #3971b1 !important;
  --tag1: #3674bb !important;
  --tag2: #3685ad !important;
  --tag3: #2a8f91 !important;
  --tag4: #43804f !important;
  --tag5: #5f932e !important;
  --tape-color: #99999967 !important;
  --tertiary: hsl(203, 67.2%, 63.21%) !important;
  --text-accent: hsl(208, 64%, 49%) !important;
  --text-accent-hover: hsl(203, 67.2%, 63.21%) !important;
  --text-blue: #7c94ff !important;
  --text-brown: #be9684 !important;
  --text-checked-checkbox: #8e8e8e !important;
  --text-color-code: #d58000 !important;
  --text-error: #e16d76 !important;
  --text-error-hover: #c9626a !important;
  --text-faint: #797979 !important;
  --text-folder-file: #b3b3b3 !important;
  --text-folder-file-icon: hsl(208, 64%, 49%) !important;
  --text-gray: #acacac !important;
  --text-green: #52c7b2 !important;
  --text-highlight: #c6c6c6 !important;
  --text-highlight-bg: hsla(57, 40%, 38%, 0.541) !important;
  --text-highlight-bg-a-dark: 0.541 !important;
  --text-highlight-bg-a-light: 0.847 !important;
  --text-highlight-bg-h-dark: 57 !important;
  --text-highlight-bg-h-light: 34 !important;
  --text-highlight-bg-l-dark: 38% !important;
  --text-highlight-bg-l-light: 80% !important;
  --text-highlight-bg-s-dark: 40% !important;
  --text-highlight-bg-s-light: 100% !important;
  --text-muted: #8a8a8a !important;
  --text-muted-rgb: 138, 138, 138 !important;
  --text-normal: #c6c6c6 !important;
  --text-on-accent: #e4e4e4 !important;
  --text-orange: #ffa344 !important;
  --text-pink: #ff6bba !important;
  --text-purple: #b386f1 !important;
  --text-red: #ff4f4f !important;
  --text-search-highlight-bg: #bb4361 !important;
  --text-selection: #3b767160 !important;
  --text-yellow: #ffdc51 !important;
  --text-yellow-2: #cca217 !important;
  --textHighlight: hsla(57, 40%, 38%, 0.541) !important;
  --theme-color: hsl(208, 64%, 49%) !important;
  --theme-color-translucent-001: hsla(208, 64%, 49%,0.01) !important;
  --theme-color-translucent-005: hsla(208, 64%, 49%,0.05) !important;
  --theme-color-translucent-01: hsla(208, 64%, 49%,0.1) !important;
  --theme-color-translucent-015: hsla(208, 64%, 49%,0.15) !important;
  --theme-color-translucent-02: hsla(208, 64%, 49%,0.2) !important;
  --theme-color-translucent-04: hsla(208, 64%, 49%,0.4) !important;
  --theme-color-translucent-06: hsla(208, 64%, 49%,0.6) !important;
  --thino-background-dark-custom: url("https://") !important;
  --thino-background-light-custom: url("https://") !important;
  --titleFont: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #151515 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-blur-depth: 8px !important;
  --titlebar-border-color: #343434 !important;
  --titlebar-brightness: 1 !important;
  --titlebar-text-color: #8a8a8a !important;
  --titlebar-text-color-focused: #c6c6c6 !important;
  --unresolved-link: #f08080de !important;
  --variable-2: #0072d0 !important;
  --variable-3: #5a96f7 !important;
  --vault-profile-color: #c6c6c6 !important;
  --vault-profile-color-hover: #c6c6c6 !important;
  --white: #ffffff !important;
  --window-radius: 8px !important;
  --window-shadow: 0 1px 3px hsla(207, 10%, 10%, 0.1) !important;
  --window-shadow2: 0 0 9px hsla(212, 17%, 0%, 0.3) !important;
  --yellow: #d6b87f !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.2);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgba(45, 130, 205, 0.1);
  border-color: rgb(74, 74, 74);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(21, 21, 21);
  border-color: rgb(198, 198, 198);
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
  background-color: rgba(45, 130, 205, 0.1);
  color: rgb(45, 130, 205);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(138, 138, 138);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(21, 21, 21);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(32, 32, 32);
  color: rgb(198, 198, 198);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(231, 231, 231);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(164, 202, 142);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(164, 202, 142) none 0px;
  text-decoration-color: rgb(164, 202, 142);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(164, 202, 142);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(164, 202, 142) none 0px;
  text-decoration-color: rgb(164, 202, 142);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(231, 231, 231);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(136, 132, 58, 0.54);
  color: rgb(198, 198, 198);
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

html[saved-theme="dark"] body h1.article-title {
  color: rgb(198, 198, 198);
  font-size: 11.7px;
  font-weight: 700;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(123, 123, 123);
  border-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(138, 138, 138);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(138, 138, 138) none 0px;
  text-decoration-color: rgb(138, 138, 138);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(45, 130, 205);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(45, 130, 205) none 0px;
  text-decoration-color: rgb(45, 130, 205);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(45, 130, 205);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(45, 130, 205) none 0px;
  text-decoration-color: rgb(45, 130, 205);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgba(240, 128, 128, 0.87);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgba(240, 128, 128, 0.87) none 0px;
  text-decoration: underline rgba(240, 128, 128, 0.87);
  text-decoration-color: rgba(240, 128, 128, 0.87);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body dt {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(121, 121, 121);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(145, 145, 145, 0.11);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body table {
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  margin-top: 20px;
  width: 658px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgba(47, 47, 47, 0.196);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.2);
}

html[saved-theme="dark"] body td {
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

html[saved-theme="dark"] body th {
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
    code: `html[saved-theme="dark"] body code {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(214, 184, 127);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(214, 184, 127);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(214, 184, 127);
  border-left-color: rgb(214, 184, 127);
  border-right-color: rgb(214, 184, 127);
  border-top-color: rgb(214, 184, 127);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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

html[saved-theme="dark"] body pre:has(> code) {
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
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(198, 198, 198);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(150, 194, 46);
  border-left-color: rgb(150, 194, 46);
  border-right-color: rgb(150, 194, 46);
  border-top-color: rgb(150, 194, 46);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
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

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(198, 198, 198);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .transclude {
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

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(198, 198, 198);
  border-bottom-style: solid;
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-right-style: solid;
  border-top-color: rgb(198, 198, 198);
  border-top-style: solid;
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
  border-left-color: rgb(123, 123, 123);
  border-right-color: rgb(123, 123, 123);
  border-top-color: rgb(123, 123, 123);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-bottom: 2px;
  margin-left: -21.6px;
  width: 14.3906px;
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

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='9' y1='18' x2='15' y2='18'%3E%3C/line%3E%3Cline x1='10' y1='22' x2='14' y2='22'%3E%3C/line%3E%3Cpath d='M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='9' y1='18' x2='15' y2='18'%3E%3C/line%3E%3Cline x1='10' y1='22' x2='14' y2='22'%3E%3C/line%3E%3Cpath d='M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(32, 32, 32);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: rotate(45deg)msFilter:'%3E%3Cpath d='M7 17a5.007 5.007 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: rotate(45deg)msFilter:'%3E%3Cpath d='M7 17a5.007 5.007 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  background-color: rgb(32, 32, 32);
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

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 16 3-8 3.001 8A5.002 5.002 0 0 1 16 16z'%3E%3C/path%3E%3Cpath d='m2 16 3-8 3.001 8A5.002 5.002 0 0 1 2 16z'%3E%3C/path%3E%3Cpath d='M7 21h10'%3E%3C/path%3E%3Cpath d='M12 3v18'%3E%3C/path%3E%3Cpath d='M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 16 3-8 3.001 8A5.002 5.002 0 0 1 16 16z'%3E%3C/path%3E%3Cpath d='m2 16 3-8 3.001 8A5.002 5.002 0 0 1 2 16z'%3E%3C/path%3E%3Cpath d='M7 21h10'%3E%3C/path%3E%3Cpath d='M12 3v18'%3E%3C/path%3E%3Cpath d='M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  padding-bottom: 8px;
  padding-left: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(83, 223, 221, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(251, 70, 76, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(251, 70, 76, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(168, 130, 255, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(251, 70, 76, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(2, 122, 255, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(2, 122, 255, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(233, 151, 63, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(158, 158, 158, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(68, 207, 110, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(83, 223, 221, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(2, 122, 255, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(233, 151, 63, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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
  border-left-color: rgb(52, 52, 52);
  border-right-color: rgb(52, 52, 52);
  border-top-color: rgb(52, 52, 52);
  color: rgb(198, 198, 198);
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
  box-shadow: rgb(85, 85, 85) 0px 0px 10px 1px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(198, 198, 198);
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
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(45, 130, 205, 0.15);
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
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(45, 130, 205, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(45, 130, 205);
}

html[saved-theme="dark"] body h1 {
  color: rgb(150, 194, 46);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(76, 177, 72);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(150, 194, 46);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(58, 187, 187);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(117, 162, 230);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(178, 150, 243);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(234, 165, 248);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
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

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.918792 0.6776 0.691167);
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  font-weight: 600;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.918792 0.6776 0.691167);
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  font-weight: 600;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(198, 198, 198);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 600;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="dark"] body footer {
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

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
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

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(45, 130, 205);
  stroke: rgb(45, 130, 205);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
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

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(121, 121, 121);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(52, 52, 52);
  border-left-color: rgb(52, 52, 52);
  border-right-color: rgb(52, 52, 52);
  border-top-color: rgb(52, 52, 52);
  color: rgb(138, 138, 138);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(138, 138, 138);
  border-left-color: rgb(138, 138, 138);
  border-right-color: rgb(138, 138, 138);
  border-top-color: rgb(138, 138, 138);
  color: rgb(138, 138, 138);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(198, 198, 198);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(138, 138, 138);
  border-left-color: rgb(138, 138, 138);
  border-right-color: rgb(138, 138, 138);
  border-top-color: rgb(138, 138, 138);
  color: rgb(138, 138, 138);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
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

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
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
  background-color: rgba(45, 130, 205, 0.1);
  border-bottom-color: rgba(45, 130, 205, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(45, 130, 205, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(45, 130, 205, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(45, 130, 205, 0.15);
  border-top-width: 1px;
  color: rgb(45, 130, 205);
}`,
  },
  light: {
    base: `:root:root {
  --Fold0: #fc5c65 !important;
  --Fold1: #fd9644 !important;
  --Fold2: #fed330 !important;
  --Fold3: #26de81 !important;
  --Fold4: #2bcbba !important;
  --Fold5: #45aaf2 !important;
  --Fold6: #4b7bec !important;
  --Fold7: #a55eea !important;
  --Fold8: #d1d8e0 !important;
  --Fold9: #778ca3 !important;
  --FoldA: #eb3b5a !important;
  --FoldB: #fa8231 !important;
  --FoldC: #f7b731 !important;
  --FoldD: #20bf6b !important;
  --FoldE: #0fb9b1 !important;
  --FoldF: #2d98da !important;
  --FoldG: #3867d6 !important;
  --FoldH: #8854d0 !important;
  --FoldI: #a5b1c2 !important;
  --FoldJ: #4b6584 !important;
  --FoldK: #fc5c65 !important;
  --FoldL: #fd9644 !important;
  --FoldM: #fed330 !important;
  --FoldN: #26de81 !important;
  --FoldO: #2bcbba !important;
  --FoldP: #45aaf2 !important;
  --FoldQ: #4b7bec !important;
  --FoldR: #a55eea !important;
  --FoldS: #d1d8e0 !important;
  --FoldT: #778ca3 !important;
  --FoldU: #eb3b5a !important;
  --FoldV: #fa8231 !important;
  --FoldW: #f7b731 !important;
  --FoldX: #20bf6b !important;
  --FoldY: #0fb9b1 !important;
  --FoldZ: #2d98da !important;
  --accent-em: #099d4e !important;
  --accent-h: 207 !important;
  --accent-l: 54% !important;
  --accent-l-alt: 48.6% !important;
  --accent-s: 77% !important;
  --accent-strong: #000000 !important;
  --activeline-background: hsla(207, 77%, 54%,0.05) !important;
  --admonition-bg-color: #FFFFFF00 !important;
  --aqua: #88C0D0 !important;
  --background-4-sliding-pane: #ffffffef !important;
  --background-asymm-split-left: #f3f3f3 !important;
  --background-black-or-white-1: #e4e4e4 !important;
  --background-blockquote: #d5d5d52c !important;
  --background-blue: #ddebf1 !important;
  --background-brown: #e9e5e3 !important;
  --background-code: #e6e6e671 !important;
  --background-code-2: #cccccc62 !important;
  --background-command-palette-theme-dark-custom: url("https://") !important;
  --background-command-palette-theme-light-custom: url("https://") !important;
  --background-gray: #ebeced !important;
  --background-green: #ddedea !important;
  --background-markdown-page-theme-dark-custom: url("https://") !important;
  --background-markdown-page-theme-light-custom: url("https://") !important;
  --background-mobile-drawer-1: #ffffff !important;
  --background-mobile-drawer-2: #ffffffa1 !important;
  --background-modifier-active-hover: hsla(207, 77%, 54%, 0.1) !important;
  --background-modifier-border: #dddddd !important;
  --background-modifier-border-1: #e1dfdf !important;
  --background-modifier-border-asymm: #d8d8d8 !important;
  --background-modifier-border-checkbox: #9c9c9c !important;
  --background-modifier-border-hr: #bfbfbf !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.08) !important;
  --background-modifier-error: #e68787 !important;
  --background-modifier-error-hover: #FF9494 !important;
  --background-modifier-error-rgb: 230, 135, 135 !important;
  --background-modifier-form-field: #fff !important;
  --background-modifier-form-field-highlighted: #fff !important;
  --background-modifier-form-field-hover: #fff !important;
  --background-modifier-success: #A4E7C3 !important;
  --background-nonoverlapping-note: #ffffff !important;
  --background-orange: #faebdd !important;
  --background-panel-page-theme-dark-custom: url("https://") !important;
  --background-panel-page-theme-light-custom: url("https://") !important;
  --background-pink: #f4dfeb !important;
  --background-popover: #fafafa !important;
  --background-primary-alt: #e9e9e9 !important;
  --background-purple: #eae4f2 !important;
  --background-red: #ffe3e3 !important;
  --background-secondary: #fcfcfc !important;
  --background-secondary-alt: #f3f3f3 !important;
  --background-secondary-alt-bg-4-bt-publish: #f6f6f6 !important;
  --background-secondary-translucent: #ffffff3d !important;
  --background-secondary-translucent-1: #ffffff5d !important;
  --background-settings-workplace-theme-dark-custom: url("https://") !important;
  --background-settings-workplace-theme-light-custom: url("https://") !important;
  --background-titlebar-inner: hsla(207, 77%, 54%, 10%) !important;
  --background-transparent-black-or-white-1: #ffffffb0 !important;
  --background-transparent-black-or-white-2: #ffffffca !important;
  --background-transparent-black-or-white-3: #eeeeee91 !important;
  --background-transparent-black-or-white-3-1: #fafafac3 !important;
  --background-transparent-black-or-white-4: #a7a7a765 !important;
  --background-transparent-black-or-white-5: #f0f0f091 !important;
  --background-transparent-blue: #c6e5ffde !important;
  --background-waves-color: #4A75DB8C !important;
  --background-yellow: #fbf3db !important;
  --bases-cards-cover-background: #e9e9e9 !important;
  --bases-cards-radius: 7px !important;
  --bases-cards-shadow: 0 0 0 1px #dddddd !important;
  --bases-embed-border-color: #dddddd !important;
  --bases-embed-border-radius: 5px !important;
  --bases-group-heading-property-color: #7f7f7f !important;
  --bases-table-border-color: #7d7d7d !important;
  --bases-table-cell-background-disabled: #e9e9e9 !important;
  --bases-table-cell-background-selected: hsla(207, 77%, 54%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(206, 77.77%, 58.05%) !important;
  --bases-table-container-border-radius: 5px !important;
  --bases-table-group-background: #e9e9e9 !important;
  --bases-table-header-color: #7f7f7f !important;
  --bg-color-highlight-1: #ff000034 !important;
  --bg-color-highlight-2: #0fc41835 !important;
  --bg-color-highlight-3: #4ca6ff51 !important;
  --bg-color-notebook: #FFFFFF00 !important;
  --bg-color-settings-0: #7d7d7d6b !important;
  --bg-color-settings-0-1: #ffffff77 !important;
  --bg-color-settings-1: #ffffff17 !important;
  --bg-color-settings-2: #ffffff5a !important;
  --bg-color-settings-3: #ffffffda !important;
  --bg-color-settings-4: #ffffffd2 !important;
  --bg-color-settings-5: #d4d4d464 !important;
  --bg-color-settings-6: #ffffff85 !important;
  --bg-panel-page-opacity-cp: 0.25 !important;
  --bg-sliding-pane-header: #ffffff97 !important;
  --bg-sliding-pane-leaf: #ffffff88 !important;
  --blockquote-border-color: hsl(206, 77.77%, 58.05%) !important;
  --blue: #5e81ac !important;
  --blue-green: #3bd4da !important;
  --blur-codebox-frosted-glass: 2 !important;
  --blur-depth: 10px !important;
  --blur-depth-cp: 10px !important;
  --blur-p-kanban-frosted-glass: 5 !important;
  --bodyFont: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --bottom-padding-value: 0em !important;
  --brightness-4-bg: 0.9 !important;
  --brightness-4-bg-cp: 0.9 !important;
  --bt-bubble-background-color: transparent !important;
  --bt-bubble-border-color: #dddddd !important;
  --bt-bubble-layout-padding: 8px !important;
  --bt-colorful-indentation-width: 1px !important;
  --bt-connected-indent-line-color: #FFA8A8 !important;
  --bt-indentation-gradient-color-1: hsl(206, 77.77%, 58.05%) !important;
  --bt-indentation-gradient-color-2: transparent !important;
  --bt-indentation-line-image: url("") !important;
  --bt-indentation-width-hover: 3px !important;
  --c-1: #da2400 !important;
  --c-2: #ffb623 !important;
  --c-3: #8c6e22 !important;
  --calendar-active-color: hsla(207, 77%, 54%,0.2) !important;
  --calendar-hover-color: hsla(207, 77%, 54%,0.1) !important;
  --calendar-today-background-color: #aaeec6 !important;
  --calendar-week-background-color: #d6e6bf !important;
  --calendar-week-color: #48b432 !important;
  --calendar-week-hover: #e9ffe3 !important;
  --callout-radius: 5px;
  --canvas-card-label-color: #7f7f7f !important;
  --canvas-card-opacity: 0.1 !important;
  --canvas-controls-radius: 5px !important;
  --cards-width: 138px !important;
  --caret-color: #0e0e0e !important;
  --checkbox-border-color: #7f7f7f !important;
  --checkbox-border-color-hover: #7f7f7f !important;
  --checkbox-color: hsl(206, 77.77%, 58.05%) !important;
  --checkbox-color-0: #2f92e4 !important;
  --checkbox-color-1: #c4c116 !important;
  --checkbox-color-2: #4bbf40 !important;
  --checkbox-color-3: #ffe9e9 !important;
  --checkbox-color-4: #fff8b7 !important;
  --checkbox-color-5: #ad7fbf !important;
  --checkbox-color-6: #5f5f5f !important;
  --checkbox-color-hover: hsl(204, 78.54%, 62.1%) !important;
  --checkbox-radius: 5px !important;
  --checkbox-size: 0.9rem !important;
  --checklist-bg: #dfdfdf8e !important;
  --checklist-bg-hover: #ffffffcc !important;
  --checklist-color-1: #bbdefbab !important;
  --checklist-color-2: #b2ebf2ab !important;
  --checklist-color-3: #c8e6c9ab !important;
  --checklist-color-4: #f8ef99ab !important;
  --checklist-color-5: #ffe0b2ab !important;
  --checklist-color-6: #ffcdd2ab !important;
  --checklist-color-7: #e1bee7ab !important;
  --checklist-done-color: #7f7f7f !important;
  --clickable-icon-radius: 5px !important;
  --cloze-bg-color: #000000 !important;
  --cloze-bg-color-3: transparent !important;
  --cloze-decoration: none !important;
  --cloze-decoration-2: dashed !important;
  --cloze-decoration-3: dashed !important;
  --cloze-decoration-color: red !important;
  --cloze-decoration-color-2: hsl(206, 77.77%, 58.05%) !important;
  --cloze-decoration-color-3: hsl(206, 77.77%, 58.05%) !important;
  --code-active-line-background-color: hsla(207, 77%, 54%,0.05) !important;
  --code-atom: #cc7523 !important;
  --code-attribute: #BF616A !important;
  --code-attribute-in-comment: #c792ea !important;
  --code-background: #e6e6e671 !important;
  --code-border-color: #dddddd !important;
  --code-bracket: #ff5370 !important;
  --code-builtin: #ffcb6b !important;
  --code-callee: #89ddff !important;
  --code-comment: #068a5e !important;
  --code-def: #82aaff !important;
  --code-definition: #82aaff !important;
  --code-error-bg: #ff5370 !important;
  --code-function: #BF616A !important;
  --code-header: #da7dae !important;
  --code-hr: #7f7f7f !important;
  --code-important: #3bd4da !important;
  --code-keyword: #3bd4da !important;
  --code-language: #7f7f7f !important;
  --code-link: #696d70 !important;
  --code-matching-bracket: #ffffff !important;
  --code-meta: #7f7f7f !important;
  --code-normal: #000000 !important;
  --code-number: #ff5370 !important;
  --code-operator: #5e81ac !important;
  --code-property: #5e81ac !important;
  --code-punctuation: #7f7f7f !important;
  --code-qualifier: #88C0D0 !important;
  --code-radius: 5px !important;
  --code-selection-background: #a9d1c859 !important;
  --code-selection-color: #000000 !important;
  --code-string-2: #cc7523 !important;
  --code-tag: #c74df7 !important;
  --code-tag-in-comment: #ff5370 !important;
  --code-type: #BF616A !important;
  --code-value: #A3BE8C !important;
  --code-variable: #f07178 !important;
  --code-variable-2: #b74ff3 !important;
  --code-variable-3: #e7852fe7 !important;
  --codeFont: JetBrains Mono, Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #7f7f7f !important;
  --collapse-icon-color-collapsed: hsl(207, 77%, 54%) !important;
  --color-accent: hsl(207, 77%, 54%) !important;
  --color-accent-1: hsl(206, 77.77%, 58.05%) !important;
  --color-accent-2: hsl(204, 78.54%, 62.1%) !important;
  --color-accent-hsl: 207, 77%, 54% !important;
  --color-highlight-1: #0e0e0e !important;
  --color-highlight-2: #0e0e0e !important;
  --color-highlight-3: #0e0e0e !important;
  --color-view-header-gradient-1: #ffffffce !important;
  --color-view-header-gradient-2: #ffffffce !important;
  --colorA: rgba(152, 0, 240, 0.13) !important;
  --colorB: rgba(0, 72, 240, 0.13) !important;
  --colorC: rgba(0, 240, 44, 0.13) !important;
  --cursor-blue: #1791e2 !important;
  --cursor-green: #008000 !important;
  --cursor-red: #ff0000 !important;
  --cursor-violet: #ee82ee !important;
  --cursor-yellow: #d5ca00 !important;
  --custom-titlebar-bg: #f3f3f3 !important;
  --dark: #0e0e0e !important;
  --darkblue: #3b84e4 !important;
  --darkgray: #0e0e0e !important;
  --darkgreen: #068a5e !important;
  --day-planner-dot: #ffd900 !important;
  --day-planner-item-hover: #8fccff !important;
  --day-planner-line: #ffd900 !important;
  --day-planner-pie: #eca95c !important;
  --day-planner-timeline: #d62f2f !important;
  --divider-color: #e3e3e3 !important;
  --divider-color-hover: hsl(206, 77.77%, 58.05%) !important;
  --dotted-notebook-dot-color: #c7c7c780 !important;
  --dropdown-background: #efefef !important;
  --dropdown-background-hover: #e6e6e6 !important;
  --embed-block-shadow-hover: 0 0 0 1px #dddddd, inset 0 0 0 1px #dddddd !important;
  --embed-border-start: 2px solid hsl(206, 77.77%, 58.05%) !important;
  --embed-color: hsla(207,61.6%,54%,0.035) !important;
  --embed-content-height: 600px !important;
  --event-item-color1: #65ace6 !important;
  --event-item-color10: #072f6b !important;
  --event-item-color2: #52a4e7 !important;
  --event-item-color3: #2e96eb !important;
  --event-item-color4: #2786da !important;
  --event-item-color5: #1275cc !important;
  --event-item-color6: #2664c0 !important;
  --event-item-color7: #1652ac !important;
  --event-item-color8: #0c469c !important;
  --event-item-color9: #0a3c86 !important;
  --external-link-color: hsl(207, 77%, 54%) !important;
  --fancy-cursor-width: 2px !important;
  --fancy-hr-icon: '😀' !important;
  --fancy-hr-rotate: 0deg !important;
  --file-header-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-line-width: 45rem !important;
  --flair-background: #efefef !important;
  --flair-color: #0e0e0e !important;
  --folder-title: #000000 !important;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-family-better-footnote: Arlrdbd, "Source Han Sans", "Segoe UI Emoji" !important;
  --font-family-folder-file-title: Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif !important;
  --font-family-inline-code: JetBrains Mono, Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace !important;
  --font-family-special-tag: "Lucida Handwriting", "Segoe UI Emoji" !important;
  --font-family-strong: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-family-tag: Bookerly, 'Inter', "Segoe UI", "Microsoft YaHei", STzhongsong, STSong, "Segoe UI Emoji", Serif !important;
  --font-family-vault: "Lucida Handwriting", "Segoe UI Emoji" !important;
  --font-interface: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-loading-text: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace !important;
  --font-mermaid: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: JetBrains Mono, Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'JetBrains Mono', Consolas, Monaco, "等距更纱黑体 SC", "Source Han Mono", "Microsoft Yahei Mono", "Segoe UI Emoji", "Microsoft YaHei", "Source Code Pro", monospace !important;
  --font-print: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", Arial' !important;
  --font-size-better-footnote: 1.3em !important;
  --font-size-checklist: 0.85em !important;
  --font-size-cloze: 0.9375em !important;
  --font-size-code: 0.825em !important;
  --font-size-edit-blockquote: 1em !important;
  --font-size-edit-normal: 1em !important;
  --font-size-embed-file: 1.25em !important;
  --font-size-embed-title-size: 1.3em !important;
  --font-size-emoji-after-tag: 1.5625em !important;
  --font-size-file-header-title: 0.9em !important;
  --font-size-file-header-title-andy-plugin: 1em !important;
  --font-size-folder-and-file: 0.9em !important;
  --font-size-latex: 1em !important;
  --font-size-list: 1em !important;
  --font-size-loading-add: 1.5em !important;
  --font-size-loading-diy-text: 3em !important;
  --font-size-obsidian-titlebar: 13px !important;
  --font-size-outline: 13px !important;
  --font-size-preview-blockquote: 1em !important;
  --font-size-preview-normal: 1em !important;
  --font-size-split: 0.85em !important;
  --font-size-tag: 0.85em !important;
  --font-size-vault-name: 1em !important;
  --font-style-em: italic !important;
  --font-text: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-text-theme: Bookerly, 'Inter', "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei" !important;
  --font-weight-highlight-1: normal !important;
  --font-weight-highlight-2: normal !important;
  --font-weight-highlight-3: normal !important;
  --font-weight-inline-code: bold !important;
  --font-weight-strong: bold !important;
  --footnote-divider-color: #dddddd !important;
  --footnote-id-color: #7f7f7f !important;
  --footnote-id-color-no-occurrences: #7f7f7f !important;
  --footnote-radius: 5px !important;
  --graph-arrow: #e25300 !important;
  --graph-attach: #afcfe0cc !important;
  --graph-canvas-bg: #ffffff !important;
  --graph-circle: #1f78b4cc !important;
  --graph-circle-fill-highlight: hsl(206, 77.77%, 58.05%) !important;
  --graph-circle-outline: transparent !important;
  --graph-control-bg: #ffffff9a !important;
  --graph-line: #b1b1b1 !important;
  --graph-line-fill-highlight: rgb(70, 142, 235) !important;
  --graph-node: #7f7f7f !important;
  --graph-node-focused: hsl(207, 77%, 54%) !important;
  --graph-node-unresolved: #7f7f7f !important;
  --graph-tag: #77d425cc !important;
  --graph-text: #0e0e0e !important;
  --graph-text-color: #696969 !important;
  --graph-unresolved: #db4e4ecc !important;
  --gray: #7f7f7f !important;
  --gray-1: #383a42 !important;
  --gray-2: #383a42 !important;
  --green: #A3BE8C !important;
  --green-1: #3dc730 !important;
  --grid-notebook-line-color-1: #c7c7c740 !important;
  --grid-notebook-line-color-2: #afafaf40 !important;
  --h1-bg-color: color-mix(in srgb, hsl(216, 88%, 26%) 15%, transparent) !important;
  --h1-color: hsl(216, 88%, 26%) !important;
  --h1-font: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h1-size: 1.5625em !important;
  --h2-bg-color: color-mix(in srgb, hsl(212, 100%, 33%) 15%, transparent) !important;
  --h2-color: hsl(212, 100%, 33%) !important;
  --h2-font: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h2-size: 1.4375em !important;
  --h3-bg-color: color-mix(in srgb, hsl(210, 86%, 39%) 15%, transparent) !important;
  --h3-color: hsl(210, 86%, 39%) !important;
  --h3-font: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h3-size: 1.3125em !important;
  --h4-bg-color: color-mix(in srgb, hsl(208, 58%, 49%) 15%, transparent) !important;
  --h4-color: hsl(208, 58%, 49%) !important;
  --h4-font: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --h4-size: 1.1875em !important;
  --h5-bg-color: color-mix(in srgb, hsl(209, 70%, 62%) 15%, transparent) !important;
  --h5-color: hsl(209, 70%, 62%) !important;
  --h5-size: 1.0625em !important;
  --h6-bg-color: color-mix(in srgb, hsl(209, 65%, 72%) 15%, transparent) !important;
  --h6-color: hsl(209, 65%, 72%) !important;
  --he-title-bar-active-action: hsl(206, 77.77%, 58.05%) !important;
  --he-title-bar-active-bg: hsla(207, 77%, 54%,0.05) !important;
  --he-title-bar-active-fg: #0e0e0e !important;
  --he-title-bar-active-pinned-bg: hsla(207, 77%, 54%,0.05) !important;
  --he-title-bar-inactive-action: #0e0e0e !important;
  --he-title-bar-inactive-bg: hsla(207, 77%, 54%,0.01) !important;
  --he-title-bar-inactive-fg: #7f7f7f !important;
  --he-title-bar-inactive-pinned-bg: hsla(207, 77%, 54%,0.01) !important;
  --headerFont: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --heading-formatting: #7f7f7f !important;
  --hibox: 24px !important;
  --highlight: hsla(34, 100%, 80%, 0.847) !important;
  --hr-color: #dddddd !important;
  --hr-color-1: hsl(206, 77.77%, 58.05%) !important;
  --hr-color-2: hsl(206, 77.77%, 58.05%) !important;
  --hr-color-3: hsl(206, 77.77%, 58.05%) !important;
  --hr-color-4: hsl(206, 77.77%, 58.05%) !important;
  --hr-color-icon-1: hsl(206, 77.77%, 58.05%) !important;
  --hr-color-icon-2: hsl(206, 77.77%, 58.05%) !important;
  --hr-color-icon-3: hsl(206, 77.77%, 58.05%) !important;
  --hr-color-icon-4: hsl(206, 77.77%, 58.05%) !important;
  --hr-color-numbers-bg-color: hsla(207, 77%, 54%,0.15) !important;
  --hr-color-numbers-color: hsl(206, 77.77%, 58.05%) !important;
  --hr-color-numbers-line-1: hsl(206, 77.77%, 58.05%) !important;
  --hr-color-numbers-line-2: hsl(206, 77.77%, 58.05%) !important;
  --hr-color-numbers-line-3: hsl(206, 77.77%, 58.05%) !important;
  --hr-color-numbers-line-4: hsl(206, 77.77%, 58.05%) !important;
  --hr-numbers-text-fill: transparent !important;
  --hr-numbers-text-stroke: #0e0e0e !important;
  --icon-color: #7f7f7f !important;
  --icon-color-active: hsl(207, 77%, 54%) !important;
  --icon-color-focused: #0e0e0e !important;
  --icon-color-hover: #7f7f7f !important;
  --image-max-width: 100% !important;
  --inline-title-bg-color: color-mix(in srgb, hsl(216, 88%, 26%) 15%, transparent) !important;
  --inline-title-color: hsl(216, 88%, 26%) !important;
  --inline-title-font: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif,ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --inline-title-size: 1.5625em !important;
  --input-date-separator: #7f7f7f !important;
  --input-placeholder-color: #7f7f7f !important;
  --interactive-accent: hsl(206, 77.77%, 58.05%) !important;
  --interactive-accent-hover: hsl(204, 78.54%, 62.1%) !important;
  --interactive-accent-hsl: 207, 77%, 54% !important;
  --interactive-accent-rgb: 70, 142, 235 !important;
  --interactive-hover: #e6e6e6 !important;
  --interactive-normal: #efefef !important;
  --internal-link-color: hsl(207, 77%, 54%) !important;
  --letter-space-code: 0 !important;
  --letter-space-main: 0 !important;
  --light: #e9e9e9 !important;
  --light-purple: #b74ff3 !important;
  --light-yellow: #ab9a02 !important;
  --lightgray: #fcfcfc !important;
  --line-height-list: 2 !important;
  --line-height-main: 1.5 !important;
  --line-height-split: 1.3 !important;
  --link-color: hsl(207, 77%, 54%) !important;
  --link-color-hover: hsl(204, 78.54%, 62.1%) !important;
  --link-external-color: hsl(207, 77%, 54%) !important;
  --link-external-color-hover: hsl(204, 78.54%, 62.1%) !important;
  --link-unresolved-color: hsl(207, 77%, 54%) !important;
  --link-unresolved-decoration-color: #db4e4ecc !important;
  --list-colorful-marker: #fd4949 !important;
  --list-marker-color: #7f7f7f !important;
  --list-marker-color-collapsed: hsl(206, 77.77%, 58.05%) !important;
  --list-marker-color-hover: #7f7f7f !important;
  --list-ol-block-color: #3573a5 !important;
  --list-ol-hover: #2c7bd6 !important;
  --list-ol-marker-1: decimal !important;
  --list-ol-marker-2: lower-latin !important;
  --list-ol-marker-3: lower-roman !important;
  --list-ol-marker-4: decimal !important;
  --list-ol-number-color: #7f7f7f !important;
  --list-spacing-bt: 1 !important;
  --list-ul-block-color: #b9751b !important;
  --list-ul-colorful-marker-content: '\\2022' !important;
  --list-ul-disc-color: #f39c55 !important;
  --list-ul-hover: #dd922f !important;
  --list-ul-marker-1: '\\2022' !important;
  --list-ul-marker-2: '\\25E6' !important;
  --list-ul-marker-3: '\\25AA' !important;
  --list-ul-marker-4: '\\25E6' !important;
  --list-ul-marker-color: #7f7f7f !important;
  --loading-add-text-color: #d47e86 !important;
  --loading-add-text-color-alt: #a4e39c !important;
  --loading-diy-text: "快乐摸鱼又一天，人生还剩多少天？" !important;
  --loading-diy-text-color: #0e0e0e !important;
  --loading-page-custom-gif-caption: " " !important;
  --loading-page-custom-gif-caption-alt: " " !important;
  --loading-page-custom-gif-url: url(https://) !important;
  --loading-text-after: "✿❀" !important;
  --loading-text-before: "❀✿" !important;
  --mark-highlight-strong-em: #ff880049 !important;
  --matrix-1: #7cdddd65 !important;
  --matrix-2: #8ce38465 !important;
  --matrix-4: #eeb36f65 !important;
  --matrix-5: #f18e8e65 !important;
  --menu-background: #fcfcfc !important;
  --menu-radius: 7px !important;
  --mermaid-active-task-color: #44bbff !important;
  --mermaid-font-family: Segoe UI, "Microsoft YaHei", "Segoe UI Emoji", "trebuchet ms", verdana, Arial, cursive !important;
  --mermaid-seq-dia-color: #76c8ff !important;
  --metadata-border-color: #dddddd !important;
  --metadata-divider-color: #dddddd !important;
  --metadata-input-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-text-color: #0e0e0e !important;
  --metadata-label-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-text-color: #7f7f7f !important;
  --metadata-label-text-color-hover: #7f7f7f !important;
  --mjx-inline-math-color: #0e0e0e !important;
  --mjx-math-color: #0e0e0e !important;
  --modal-radius: 15px !important;
  --nav-collapse-icon-color: #7f7f7f !important;
  --nav-collapse-icon-color-collapsed: #7f7f7f !important;
  --nav-heading-color: #0e0e0e !important;
  --nav-heading-color-collapsed: #7f7f7f !important;
  --nav-heading-color-collapsed-hover: #7f7f7f !important;
  --nav-heading-color-hover: #0e0e0e !important;
  --nav-item-background-selected: hsla(207, 77%, 54%, 0.15) !important;
  --nav-item-color: #7f7f7f !important;
  --nav-item-color-active: #0e0e0e !important;
  --nav-item-color-highlighted: hsl(207, 77%, 54%) !important;
  --nav-item-color-hover: #0e0e0e !important;
  --nav-item-color-selected: #0e0e0e !important;
  --nav-item-radius: 5px !important;
  --nav-tag-color: #7f7f7f !important;
  --nav-tag-color-active: #7f7f7f !important;
  --nav-tag-color-hover: #7f7f7f !important;
  --nav-tag-radius: 5px !important;
  --nord0: #2E3440 !important;
  --nord1: #3B4252 !important;
  --nord1-1: #3B425251 !important;
  --nord10: #5e81ac !important;
  --nord11: #BF616A !important;
  --nord11-1: #BF616A4b !important;
  --nord12: #D08770 !important;
  --nord13: #EBCB8B !important;
  --nord13-0: #e2b65e !important;
  --nord13-1: #ebca894b !important;
  --nord14: #A3BE8C !important;
  --nord14-0: #95b677 !important;
  --nord15: #B48EAD !important;
  --nord2: #434C5E !important;
  --nord3: #4C566A !important;
  --nord3-1: #717a91 !important;
  --nord4: #d8dee9 !important;
  --nord4-1: #d8dee95c !important;
  --nord5: #E5E9F0 !important;
  --nord5-1: #E5E9F053 !important;
  --nord6: #ECEFF4 !important;
  --nord6-1: #ECEFF46c !important;
  --nord6-2: #ECEFF43c !important;
  --nord7: #8fbcbb !important;
  --nord7-transparent: #8fbcbb2f !important;
  --nord8: #88C0D0 !important;
  --nord8-0: #65afc4 !important;
  --nord9: #81a1c1 !important;
  --nord9-1: #81a1c16c !important;
  --nord9-2: #81a1c13c !important;
  --note-cloze: #000000 !important;
  --note-important: #fd4141 !important;
  --opacity-cp: 0.25 !important;
  --orange: #db9600 !important;
  --orange-1: #cc7523 !important;
  --p-kanban-bg-color: #d3d3d32d !important;
  --p-kanban-border-color: #a0a0a060 !important;
  --p-kanban-card-color-1: #ffffff80 !important;
  --p-kanban-card-color-2: #ffffff !important;
  --p-kanban-color-1: #52aaf365 !important;
  --p-kanban-color-2: #7cdddd65 !important;
  --p-kanban-color-3: #8ce38465 !important;
  --p-kanban-color-4: #d1d77f65 !important;
  --p-kanban-color-5: #eeb36f65 !important;
  --p-kanban-color-6: #f18e8e65 !important;
  --p-kanban-color-7: #e677e065 !important;
  --p-kanban-color-8: #ba8be165 !important;
  --p-kanban-color-shadow: #cfcfcf4d !important;
  --p-kanban-color-simple: #cdcdcd2c !important;
  --page-border-bottom: #f3f3f3 !important;
  --panel-border-color: #dbdbdc !important;
  --paragraph-spacing: 1 !important;
  --pill-border-color: #dddddd !important;
  --pill-color: #7f7f7f !important;
  --pill-color-hover: #0e0e0e !important;
  --pill-color-remove: #7f7f7f !important;
  --pill-color-remove-hover: hsl(207, 77%, 54%) !important;
  --pixel: 20px !important;
  --popover-height-factor: 1 !important;
  --popover-width-factor: 1 !important;
  --print-em-color: #099d4e !important;
  --prompt-box-shadow: #bebebe !important;
  --purple: #c74df7 !important;
  --radius-l: 15px !important;
  --radius-m: 7px !important;
  --radius-s: 5px !important;
  --radius-xs: 3px !important;
  --red: #BF616A !important;
  --red-1: #f16464f5 !important;
  --ribbon-background: #f3f3f3 !important;
  --ribbon-background-collapsed: #f3f3f3 !important;
  --saturate-4-bg: 1 !important;
  --saturate-4-bg-cp: 1 !important;
  --scrollbar-active-thumb-bg: #ddddddd9 !important;
  --scrollbar-radius: 15px !important;
  --scrollbar-thumb-bg: #dcdcdcbe !important;
  --search-clear-button-color: #7f7f7f !important;
  --search-icon-color: #7f7f7f !important;
  --search-result-file-matched-bg: #ffd9d9e5 !important;
  --search-result-file-title-color: #0e0e0e !important;
  --search-text: #000000 !important;
  --secondary: hsl(207, 77%, 54%) !important;
  --setting-group-heading-color: #0e0e0e !important;
  --setting-items-background: #e9e9e9 !important;
  --setting-items-border-color: #dddddd !important;
  --setting-items-radius: 15px !important;
  --share-card-background-opacity-cp: 0.6 !important;
  --share-thino-background-dark-custom: url("https://") !important;
  --share-thino-background-light-custom: url("https://") !important;
  --simple-black-1: hsla(0, 0%, 13%, 1) !important;
  --simple-black-2: hsla(220, 20%, 35%, 1) !important;
  --simple-blue-1: hsla(209, 95%, 62%, 1) !important;
  --simple-blue-2: hsla(209, 85%, 72%, 0.5) !important;
  --simple-blue-3: hsla(245, 60%, 67%, 1) !important;
  --simple-blue-4: hsla(209, 20%, 66%, 0.62) !important;
  --simple-gray-1: hsla(0, 0%, 33%, 1) !important;
  --simple-gray-2: hsla(210, 15%, 70%, 0.2) !important;
  --simple-gray-3: hsla(210, 15%, 20%, 0.2) !important;
  --simple-gray-4: hsla(210, 6%, 38%, 0.5) !important;
  --simple-gray-5: hsla(207, 17%, 90%, 1) !important;
  --simple-gray-6: hsla(217, 15%, 83%, 1) !important;
  --simple-gray-7: hsla(217, 15%, 83%, 0.7) !important;
  --simple-orange: hsla(25, 75%, 65%, 1) !important;
  --simple-red-1: hsla(365, 90%, 62%, 1) !important;
  --simple-red-2: hsl(365, 95%, 85%, 1) !important;
  --simple-red-3: hsl(365, 85%, 45%, 1) !important;
  --simple-tran: hsla(204, 45%, 97%, 0) !important;
  --simple-white-1: hsla(204, 45%, 97%, 1) !important;
  --simple-white-2: hsla(210, 45%, 95%, 1) !important;
  --simple-white-3: hsla(212, 17%, 80%, 0.2) !important;
  --simple-white-4: hsla(180, 33%, 99%, 1) !important;
  --simple-white-5: hsla(207, 10%, 90%, 0.1) !important;
  --simple-white-6: hsla(212, 17%, 80%, 0.3) !important;
  --simple-yellow: hsla(60, 100%, 50%, 0.4) !important;
  --slider-track-background: #dddddd !important;
  --sliding-panes-header-color: #0e64bb !important;
  --stack-tabs-background-blur-depth: 40px !important;
  --stag1: #fa8787 !important;
  --stag1-bg: #eb2727 !important;
  --stag2: #fdbd5c !important;
  --stag2-bg: #ee9002 !important;
  --stag3: #50ce3a !important;
  --stag3-bg: #22ac09 !important;
  --status-bar-background: #fcfcfc !important;
  --status-bar-bg: #f3f3f3 !important;
  --status-bar-border-color: #e3e3e3 !important;
  --status-bar-radius: 7px 0 0 0 !important;
  --status-bar-text-color: #7f7f7f !important;
  --stickies-color-1: #b3e2b3 !important;
  --stickies-color-2: #e9c6f1 !important;
  --stripe-notebook-stripe-color: #f5f2e6 !important;
  --strong-em-color-1: #1048ff !important;
  --strong-em-color-2: #14c8ff !important;
  --strong-em-highlight-color: #237add !important;
  --tab-container-background: #fcfcfc !important;
  --tab-outline-color: #e3e3e3 !important;
  --tab-radius: 5px !important;
  --tab-stacked-shadow: #d6d6d6 !important;
  --tab-switcher-background: #fcfcfc !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fcfcfc, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(207, 77%, 54%) !important;
  --tab-text-color: #7f7f7f !important;
  --tab-text-color-active: #7f7f7f !important;
  --tab-text-color-focused: #7f7f7f !important;
  --tab-text-color-focused-active: #7f7f7f !important;
  --tab-text-color-focused-active-current: #0e0e0e !important;
  --tab-text-color-focused-highlighted: hsl(207, 77%, 54%) !important;
  --table-add-button-border-color: #dddddd !important;
  --table-background-color: #f1f1f176 !important;
  --table-background-color-odd: #ffffff70 !important;
  --table-border-color: #7d7d7d !important;
  --table-color-calendar-2: rgb(167, 223, 251) !important;
  --table-color-rgb: 167, 223, 251 !important;
  --table-drag-handle-background-active: hsl(206, 77.77%, 58.05%) !important;
  --table-drag-handle-color: #7f7f7f !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: #7d7d7d !important;
  --table-header-color: #0e0e0e !important;
  --table-hover-color: #5dacec34 !important;
  --table-hover-raw-color: #85bfee2f !important;
  --table-hover-thead-color: #ddefff !important;
  --table-selection: hsla(207, 77%, 54%, 0.1) !important;
  --table-selection-border-color: hsl(206, 77.77%, 58.05%) !important;
  --table-text-size: 15px !important;
  --table-thead-background-color: hsla(207, 77%, 54%,0.1) !important;
  --tag-background: hsla(207, 77%, 54%, 0.1) !important;
  --tag-background-hover: hsla(207, 77%, 54%, 0.2) !important;
  --tag-border-color: hsla(207, 77%, 54%, 0.15) !important;
  --tag-border-color-hover: hsla(207, 77%, 54%, 0.15) !important;
  --tag-border-width: 1px !important;
  --tag-color: hsl(207, 77%, 54%) !important;
  --tag-color-hover: hsl(207, 77%, 54%) !important;
  --tag-dailynote: #0077ff !important;
  --tag-dailynote-bg: #277CDD !important;
  --tag-ideas: #ceb900 !important;
  --tag-ideas-bg: #444444d8 !important;
  --tag-questions: #b68fff !important;
  --tag-questions-bg: #b085ff !important;
  --tag-text: #f8f8f8 !important;
  --tag-weeklynote: #4b9fff !important;
  --tag-weeklynote-bg: #6aafff !important;
  --tag1: #2573f0 !important;
  --tag2: #2193f0 !important;
  --tag3: #17a5e7 !important;
  --tag4: #14acc7 !important;
  --tag5: #10bdbd !important;
  --tape-color: #acacac65 !important;
  --tertiary: hsl(204, 78.54%, 62.1%) !important;
  --text-accent: hsl(207, 77%, 54%) !important;
  --text-accent-hover: hsl(204, 78.54%, 62.1%) !important;
  --text-blue: #0083bb !important;
  --text-brown: #855a46 !important;
  --text-checked-checkbox: #9b9b9b !important;
  --text-color-code: #e95d00 !important;
  --text-error: #e75545 !important;
  --text-error-hover: #f86959 !important;
  --text-faint: #7f7f7f !important;
  --text-folder-file: #272727 !important;
  --text-folder-file-icon: hsl(206, 77.77%, 58.05%) !important;
  --text-gray: #37352f99 !important;
  --text-green: #00927f !important;
  --text-highlight: #0e0e0e !important;
  --text-highlight-bg: hsla(34, 100%, 80%, 0.847) !important;
  --text-highlight-bg-a-dark: 0.541 !important;
  --text-highlight-bg-a-light: 0.847 !important;
  --text-highlight-bg-h-dark: 57 !important;
  --text-highlight-bg-h-light: 34 !important;
  --text-highlight-bg-l-dark: 38% !important;
  --text-highlight-bg-l-light: 80% !important;
  --text-highlight-bg-s-dark: 40% !important;
  --text-highlight-bg-s-light: 100% !important;
  --text-muted: #7f7f7f !important;
  --text-normal: #0e0e0e !important;
  --text-on-accent: #ffffff !important;
  --text-orange: #d9730d !important;
  --text-pink: #c40075 !important;
  --text-purple: #5d1fb9 !important;
  --text-red: #ff4343 !important;
  --text-search-highlight-bg: #ffd1dd !important;
  --text-selection: #a9d1c859 !important;
  --text-yellow: #d4a300 !important;
  --text-yellow-2: #a78000 !important;
  --textHighlight: hsla(34, 100%, 80%, 0.847) !important;
  --theme-color: hsl(206, 77.77%, 58.05%) !important;
  --theme-color-translucent-001: hsla(207, 77%, 54%,0.01) !important;
  --theme-color-translucent-005: hsla(207, 77%, 54%,0.05) !important;
  --theme-color-translucent-01: hsla(207, 77%, 54%,0.1) !important;
  --theme-color-translucent-015: hsla(207, 77%, 54%,0.15) !important;
  --theme-color-translucent-02: hsla(207, 77%, 54%,0.2) !important;
  --theme-color-translucent-04: hsla(207, 77%, 54%,0.4) !important;
  --theme-color-translucent-06: hsla(207, 77%, 54%,0.6) !important;
  --thino-background-dark-custom: url("https://") !important;
  --thino-background-light-custom: url("https://") !important;
  --titleFont: Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #fcfcfc !important;
  --titlebar-background-focused: #f3f3f3 !important;
  --titlebar-blur-depth: 8px !important;
  --titlebar-border-color: #dddddd !important;
  --titlebar-brightness: 1 !important;
  --titlebar-text-color: #7f7f7f !important;
  --titlebar-text-color-focused: #0e0e0e !important;
  --unresolved-link: #db4e4ecc !important;
  --variable-2: #0072d0 !important;
  --variable-3: #5a96f7 !important;
  --vault-profile-color: #0e0e0e !important;
  --vault-profile-color-hover: #0e0e0e !important;
  --white: #ffffff !important;
  --window-radius: 8px !important;
  --window-shadow: 0 1px 3px hsla(212, 17%, 80%, 0.2) !important;
  --window-shadow2: 0 0 9px hsla(217, 15%, 83%, 0.7) !important;
  --yellow: #e48100 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.44);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgba(47, 147, 228, 0.1);
  border-color: rgb(125, 125, 125);
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(14, 14, 14);
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
  background-color: rgba(47, 147, 228, 0.1);
  color: rgb(47, 147, 228);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(127, 127, 127);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(252, 252, 252);
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(227, 227, 227);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(243, 243, 243);
  border-left-color: rgb(227, 227, 227);
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(14, 14, 14);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 0, 0);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(9, 157, 78);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(9, 157, 78) none 0px;
  text-decoration-color: rgb(9, 157, 78);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(9, 157, 78);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(9, 157, 78) none 0px;
  text-decoration-color: rgb(9, 157, 78);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 700;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 211, 153, 0.847);
  color: rgb(14, 14, 14);
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

html[saved-theme="light"] body h1.article-title {
  color: rgb(14, 14, 14);
  font-size: 11.7px;
  font-weight: 700;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(156, 156, 156);
  border-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(127, 127, 127) none 0px;
  text-decoration-color: rgb(127, 127, 127);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(47, 147, 228);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(47, 147, 228) none 0px;
  text-decoration-color: rgb(47, 147, 228);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(47, 147, 228);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(47, 147, 228) none 0px;
  text-decoration-color: rgb(47, 147, 228);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgba(219, 78, 78, 0.8);
  font-family: Bookerly, Inter, "Segoe UI", "LXGW WenKai Screen", "LXGW WenKai Screen R", "霞鹜文楷 GB", "LXGW WenKai", "Segoe UI Emoji", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgba(219, 78, 78, 0.8) none 0px;
  text-decoration: underline rgba(219, 78, 78, 0.8);
  text-decoration-color: rgba(219, 78, 78, 0.8);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body dt {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body ol > li {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body ul > li {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(127, 127, 127);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(213, 213, 213, 0.173);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body table {
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  margin-top: 20px;
  width: 658px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgba(241, 241, 241, 0.463);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.44);
}

html[saved-theme="light"] body td {
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

html[saved-theme="light"] body th {
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
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(204, 117, 35);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(204, 117, 35);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(204, 117, 35);
  border-left-color: rgb(204, 117, 35);
  border-right-color: rgb(204, 117, 35);
  border-top-color: rgb(204, 117, 35);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
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

html[saved-theme="light"] body pre:has(> code) {
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
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body figcaption {
  color: rgb(14, 14, 14);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(8, 55, 125);
  border-left-color: rgb(8, 55, 125);
  border-right-color: rgb(8, 55, 125);
  border-top-color: rgb(8, 55, 125);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
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

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(14, 14, 14);
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .transclude {
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

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(14, 14, 14);
  border-bottom-style: solid;
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-right-style: solid;
  border-top-color: rgb(14, 14, 14);
  border-top-style: solid;
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
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-bottom: 2px;
  margin-left: -21.6px;
  width: 14.3906px;
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

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
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

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: msFilter:'%3E%3Cpath d='M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='9' y1='18' x2='15' y2='18'%3E%3C/line%3E%3Cline x1='10' y1='22' x2='14' y2='22'%3E%3C/line%3E%3Cpath d='M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='9' y1='18' x2='15' y2='18'%3E%3C/line%3E%3Cline x1='10' y1='22' x2='14' y2='22'%3E%3C/line%3E%3Cpath d='M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: rotate(45deg)msFilter:'%3E%3Cpath d='M7 17a5.007 5.007 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: whitetransform: rotate(45deg)msFilter:'%3E%3Cpath d='M7 17a5.007 5.007 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E&lt!--! Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt%3Cpath d='M7,9l4-7h.69a2,2,0,0,1,2,2.28L13,9h6.67a2,2,0,0,1,2,2.3l-1.39,9a2,2,0,0,1-2,1.7H7Z'%3E%3C/path%3E%3Cpath d='M2,11v9a2,2,0,0,0,2,2H7V9H4A2,2,0,0,0,2,11Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 16 3-8 3.001 8A5.002 5.002 0 0 1 16 16z'%3E%3C/path%3E%3Cpath d='m2 16 3-8 3.001 8A5.002 5.002 0 0 1 2 16z'%3E%3C/path%3E%3Cpath d='M7 21h10'%3E%3C/path%3E%3Cpath d='M12 3v18'%3E%3C/path%3E%3Cpath d='M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 16 3-8 3.001 8A5.002 5.002 0 0 1 16 16z'%3E%3C/path%3E%3Cpath d='m2 16 3-8 3.001 8A5.002 5.002 0 0 1 2 16z'%3E%3C/path%3E%3Cpath d='M7 21h10'%3E%3C/path%3E%3Cpath d='M12 3v18'%3E%3C/path%3E%3Cpath d='M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  padding-bottom: 8px;
  padding-left: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(0, 191, 188, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(233, 49, 71, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(233, 49, 71, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(120, 82, 238, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(233, 49, 71, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(8, 109, 221, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(8, 109, 221, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(236, 117, 0, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(158, 158, 158, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(8, 185, 78, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(0, 191, 188, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(8, 109, 221, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(236, 117, 0, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(14, 14, 14);
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
  box-shadow: rgb(190, 190, 190) 0px 0px 10px 1px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(14, 14, 14);
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
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(47, 147, 228, 0.15);
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
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(47, 147, 228, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(47, 147, 228);
}

html[saved-theme="light"] body h1 {
  color: rgb(8, 55, 125);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 79, 168);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(8, 55, 125);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(14, 99, 185);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(52, 130, 197);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(90, 160, 226);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(137, 185, 230);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(227, 227, 227);
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.894609 0.184607 0.224544);
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  font-weight: 600;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.894609 0.184607 0.224544);
  font-family: "??", Arlrdbd, "Source Han Sans", "Noto Sans CJK", "Source Sans Pro", "Segoe UI Emoji", sans-serif;
  font-weight: 600;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(14, 14, 14);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 600;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="light"] body footer {
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
  color: rgb(39, 39, 39);
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
  color: rgb(39, 39, 39);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
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

html[saved-theme="light"] body .darkmode svg {
  color: rgb(65, 159, 231);
  stroke: rgb(65, 159, 231);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
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

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(127, 127, 127);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(127, 127, 127);
  border-left-color: rgb(127, 127, 127);
  border-right-color: rgb(127, 127, 127);
  border-top-color: rgb(127, 127, 127);
  color: rgb(127, 127, 127);
  font-family: "??", Bookerly, Inter, "Segoe UI", "霞鹜文楷 GB", "LXGW WenKai", "Microsoft YaHei", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(243, 243, 243);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(14, 14, 14);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(14, 14, 14);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(127, 127, 127);
  border-left-color: rgb(127, 127, 127);
  border-right-color: rgb(127, 127, 127);
  border-top-color: rgb(127, 127, 127);
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
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

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(14, 14, 14);
  border-right-color: rgb(14, 14, 14);
  border-top-color: rgb(14, 14, 14);
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
  background-color: rgba(47, 147, 228, 0.1);
  border-bottom-color: rgba(47, 147, 228, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(47, 147, 228, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(47, 147, 228, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(47, 147, 228, 0.15);
  border-top-width: 1px;
  color: rgb(47, 147, 228);
}`,
  },
};
