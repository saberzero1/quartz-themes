import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dracula-lyt",
    modes: ["dark"],
    variations: [],
    fonts: ["monaco", "sf-mono"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: rgb(52, 58, 75) !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.95) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.65) !important;
  --background-modifier-error: rgb(252, 95, 142) !important;
  --background-modifier-error-hover: rgb(255, 122, 162) !important;
  --background-modifier-error-rgb: 235, 86, 131 !important;
  --background-modifier-form-field: rgb(30, 31, 36) !important;
  --background-modifier-form-field-highlighted: rgb(23, 24, 28) !important;
  --background-modifier-form-field-hover: rgb(30, 31, 36) !important;
  --background-modifier-success: rgb(30, 200, 160) !important;
  --background-primary: #22212c !important;
  --background-primary-alt: #23212d !important;
  --background-secondary: #15131f !important;
  --background-secondary-alt: #2a2442 !important;
  --bases-cards-background: #22212c !important;
  --bases-cards-cover-background: #23212d !important;
  --bases-cards-shadow: 0 0 0 1px rgb(52, 58, 75) !important;
  --bases-embed-border-color: rgb(52, 58, 75) !important;
  --bases-group-heading-property-color: #6e6b7e !important;
  --bases-table-border-color: rgb(52, 58, 75) !important;
  --bases-table-cell-background-active: #22212c !important;
  --bases-table-cell-background-disabled: #23212d !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #483699 !important;
  --bases-table-group-background: #23212d !important;
  --bases-table-header-background: #22212c !important;
  --bases-table-header-color: #6e6b7e !important;
  --bases-table-summary-background: #22212c !important;
  --blockquote-border-color: #483699 !important;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --bodyFont: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --border-xsm: rgba(255, 255, 255, 0.25) !important;
  --border-xsm-alt: rgba(100, 100, 100, 0.25) !important;
  --canvas-background: #22212c !important;
  --canvas-card-label-color: #6c6498 !important;
  --caret-color: #f8f8f2 !important;
  --checkbox-border-color: #6c6498 !important;
  --checkbox-border-color-hover: #6e6b7e !important;
  --checkbox-color: #483699 !important;
  --checkbox-color-hover: #4d3ca6 !important;
  --checkbox-marker-color: #22212c !important;
  --checklist-done-color: #6e6b7e !important;
  --code-background: #23212d !important;
  --code-border-color: rgb(52, 58, 75) !important;
  --code-comment: #6c6498 !important;
  --code-function: rgb(243, 238, 94) !important;
  --code-normal: #f8f8f2 !important;
  --code-property: rgb(136, 196, 211) !important;
  --code-punctuation: #6e6b7e !important;
  --code-string: rgb(101, 230, 168) !important;
  --code-value: rgb(201, 184, 255) !important;
  --codeFont: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #6c6498 !important;
  --collapse-icon-color-collapsed: #bd93f9 !important;
  --color-black: rgb(30, 31, 36) !important;
  --color-blacker: rgb(23, 24, 28) !important;
  --color-caret: rgb(185, 195, 223) !important;
  --color-cyan: rgb(136, 196, 211) !important;
  --color-cyan-300: rgb(130, 183, 186) !important;
  --color-cyan-500: rgb(136, 196, 211) !important;
  --color-cyan-510: rgb(82, 193, 218) !important;
  --color-cyan-520: rgb(91, 188, 210) !important;
  --color-cyan-530: rgb(114, 195, 213) !important;
  --color-cyan-700: rgb(60, 152, 180) !important;
  --color-cyan-900: rgb(76, 118, 133) !important;
  --color-cyan-gradient-1: linear-gradient(180deg,
    #82b7ba, #77aeb3, #6da5ac, #629ca5, 
    #5a919c, #558590, #4f7984, #496d79) !important;
  --color-cyan-gradient-2: linear-gradient(180deg,
    #55a6be, #509fb7, #4d98af, #4d8fa4, 
    #4c8698, #4c7e8e, #4a7583, #496d79) !important;
  --color-cyan-gradient-3: linear-gradient(180deg, 
    #6de0fd, #5dd6f5, #56d3f2, #4fcfef, 
    #48cceb, #40c8e8, #37c5e5, #2dc1e2) !important;
  --color-gray-10: rgb(219, 222, 230) !important;
  --color-gray-100: rgb(35, 36, 42) !important;
  --color-gray-15: rgb(207, 211, 221) !important;
  --color-gray-20: rgb(185, 195, 223) !important;
  --color-gray-30: rgb(159, 169, 198) !important;
  --color-gray-40: rgb(160, 167, 187) !important;
  --color-gray-50: rgb(108, 113, 132) !important;
  --color-gray-60: rgb(124, 132, 156) !important;
  --color-gray-70: rgb(82, 87, 102) !important;
  --color-gray-80: rgb(52, 58, 75) !important;
  --color-gray-90: rgb(45, 48, 57) !important;
  --color-green: rgb(101, 230, 168) !important;
  --color-green-300: rgb(158, 255, 208) !important;
  --color-green-500: rgb(157, 226, 161) !important;
  --color-green-700: rgb(101, 230, 168) !important;
  --color-green-900: rgb(30, 200, 160) !important;
  --color-green-910: rgb(17, 212, 141) !important;
  --color-green-920: rgb(13, 145, 116) !important;
  --color-green-gradient-1: linear-gradient(180deg,
    #9effd0, #8bfcc9, #79f9c4, #67f4bf, 
    #57efbb, #48e8b7, #39e0b4, #2cd8b0) !important;
  --color-green-gradient-2: linear-gradient(180deg,
    #a2f49a, #89f18d, #79ee8b, #69ea8d, 
    #59e692, #4ae299, #3bdda3, #2cd8b0) !important;
  --color-highlight-bg: rgba(214, 247, 255, 0.596) !important;
  --color-highlight-gradient: linear-gradient(60deg,
    #d7f8ff, #d4f0fe, #d1e6fe, #cedcfd, 
    #cbd2fc, #c3c1fc, #c7b9f8, #c7a3ff) !important;
  --color-highlight-shadow: 0px 0px 2px #a8a47881 !important;
  --color-highlight-text: rgb(45, 48, 57) !important;
  --color-magenta: rgb(255, 153, 190) !important;
  --color-magenta-300: rgb(199, 133, 161) !important;
  --color-magenta-310: rgb(255, 189, 213) !important;
  --color-magenta-500: rgb(255, 153, 190) !important;
  --color-magenta-700: rgb(255, 128, 183) !important;
  --color-magenta-900: rgb(221, 110, 190) !important;
  --color-magenta-910: rgb(252, 95, 142) !important;
  --color-magenta-920: rgb(255, 122, 162) !important;
  --color-magenta-gradient-1: linear-gradient(180deg,
    #ffb1ce, #ffa3ca, #f897c4, #f88cc4, 
    #ef7dbe, #ea77be, #e472be, #dd6ebe) !important;
  --color-magenta-gradient-2: linear-gradient(180deg,
    #ff99be, #fc91bd, #f88abd, #f483bd, 
    #ef7dbe, #ea77be, #e472be, #dd6ebe) !important;
  --color-purple: rgb(201, 184, 255) !important;
  --color-purple-300: rgb(179, 164, 224) !important;
  --color-purple-500: rgb(201, 184, 255) !important;
  --color-purple-700: rgb(184, 148, 255) !important;
  --color-purple-900: rgb(145, 110, 201) !important;
  --color-purple-910: rgb(169, 147, 205) !important;
  --color-purple-gradient-1: linear-gradient(180deg,
    #d9ccff, #d2c4ff, #cbbcff, #c4b4ff,
    #bdabff, #b5a3ff, #ad9bff, #a593ff) !important;
  --color-purple-gradient-2: linear-gradient(180deg,
    #d9ccff, #ccbafc, #c0a9f8, #b59af2, 
    #ab8cea, #a281e1, #9977d6, #916ec9) !important;
  --color-slate: rgb(185, 195, 223) !important;
  --color-slate-300: rgb(224, 228, 235) !important;
  --color-slate-500: rgb(185, 195, 223) !important;
  --color-slate-700: rgb(159, 167, 188) !important;
  --color-slate-900: rgb(88, 95, 116) !important;
  --color-slate-gradient-1: linear-gradient(180deg,
    #eff1f5, #e3e6ed, #d7dce5, #ccd1dd, 
    #c0c7d5, #b5bccd, #aab2c5, #9fa7bc) !important;
  --color-slate-gradient-2: linear-gradient(180deg, 
    #b9c3df, #aab4cf, #9ca5bf, #8e97b0, 
    #8c96b1, #828ba5, #70778f, #656d85) !important;
  --color-slate-gradient-3: linear-gradient(180deg,
    #9fa7bc, #97a0b6, #9099b1, #8892ab, 
    #818aa6, #7983a0, #727c9b, #6a7595) !important;
  --color-white: rgb(239, 241, 245) !important;
  --color-yellow: rgb(243, 238, 94) !important;
  --color-yellow-300: rgb(253, 255, 128) !important;
  --color-yellow-310: rgb(211, 212, 140) !important;
  --color-yellow-500: rgb(231, 229, 115) !important;
  --color-yellow-700: rgb(243, 238, 94) !important;
  --color-yellow-900: rgb(204, 201, 20) !important;
  --color-yellow-gradient-1: linear-gradient(180deg,
    #fcff80, #fafd6b, #f9fb57, #f6f843, 
    #f4f430, #f0ef1e, #e4e213, #ccc914) !important;
  --color-yellow-gradient-2: linear-gradient(-90deg,
    #f3ee5e, #f1ec50, #f0eb41, #eee933, 
    #ece725, #eae516, #dbd815, #ccc914) !important;
  --dark: #f8f8f2 !important;
  --darkgray: #f8f8f2 !important;
  --default-font: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --divider-color: rgb(52, 58, 75) !important;
  --divider-color-hover: #483699 !important;
  --dropdown-background: #2a2a2a !important;
  --dropdown-background-hover: #303030 !important;
  --duration-fast-1: 120ms !important;
  --duration-fast-2: 180ms !important;
  --duration-moderate-1: 250ms !important;
  --duration-moderate-2: 340ms !important;
  --duration-none: 0 !important;
  --duration-slow-1: 500ms !important;
  --duration-slow-2: 640ms !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(52, 58, 75), inset 0 0 0 1px rgb(52, 58, 75) !important;
  --embed-border-start: 2px solid #483699 !important;
  --file-header-background: #22212c !important;
  --file-header-background-focused: #22212c !important;
  --file-header-font: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #2a2a2a !important;
  --flair-color: #f8f8f2 !important;
  --font-code: "Monaco", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace !important;
  --font-editor: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif !important;
  --font-extra-bold: 900 !important;
  --font-extra-light: 200 !important;
  --font-header: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif !important;
  --font-interface: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace-1: "Monaco", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace !important;
  --font-monospace-2: "Monaco", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace !important;
  --font-preview: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif !important;
  --font-regular: 400 !important;
  --font-sans-2: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif !important;
  --font-scale-0: 0.875rem !important;
  --font-scale-00: 0.750rem !important;
  --font-scale-000: 0.625rem !important;
  --font-scale-1: 1rem !important;
  --font-scale-10: 3rem !important;
  --font-scale-2: 1.125rem !important;
  --font-scale-3: 1.375rem !important;
  --font-scale-4: 1.625rem !important;
  --font-scale-5: 1.750rem !important;
  --font-scale-6: 2rem !important;
  --font-scale-7: 2.250rem !important;
  --font-scale-8: 2.5rem !important;
  --font-scale-9: 2.625rem !important;
  --font-semi-bold: 600 !important;
  --footnote-divider-color: rgb(52, 58, 75) !important;
  --footnote-id-color: #6e6b7e !important;
  --footnote-id-color-no-occurrences: #6c6498 !important;
  --graph-color-arrow: rgb(76, 118, 133) !important;
  --graph-color-line: rgb(76, 118, 133) !important;
  --graph-color-line-hover: rgb(160, 167, 187) !important;
  --graph-color-node-attachment: rgb(185, 195, 223) !important;
  --graph-color-node-border-hover: rgb(239, 241, 245) !important;
  --graph-color-node-focused: rgb(221, 110, 190) !important;
  --graph-color-node-resolved: rgb(243, 238, 94) !important;
  --graph-color-node-tag: rgb(60, 152, 180) !important;
  --graph-color-node-unresolved: rgb(145, 110, 201) !important;
  --graph-color-text: rgb(224, 228, 235) !important;
  --graph-node: #6e6b7e !important;
  --graph-node-attachment: rgb(243, 238, 94) !important;
  --graph-node-focused: #bd93f9 !important;
  --graph-node-tag: rgb(101, 230, 168) !important;
  --graph-node-unresolved: #6c6498 !important;
  --graph-text: #f8f8f2 !important;
  --gray: #6e6b7e !important;
  --header-line-height: 1.264em !important;
  --header-shadow-color: rgb(31, 31, 31) !important;
  --header-shadow-size: 0px 4px 3px !important;
  --headerFont: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #6c6498 !important;
  --highlight: rgba(214, 247, 255, 0.596) !important;
  --hr-color: rgb(52, 58, 75) !important;
  --icon-color: #6e6b7e !important;
  --icon-color-active: #bd93f9 !important;
  --icon-color-focused: #f8f8f2 !important;
  --icon-color-hover: #6e6b7e !important;
  --input-date-separator: #6c6498 !important;
  --input-placeholder-color: #6c6498 !important;
  --interactive-accent: #483699 !important;
  --interactive-accent-hover: #4d3ca6 !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #2a2a2a !important;
  --interactive-success: rgb(13, 145, 116) !important;
  --light: #22212c !important;
  --lightgray: #15131f !important;
  --line-height: 1.58em !important;
  --line-width: 42em !important;
  --link-color: #bd93f9 !important;
  --link-color-hover: #bd93f9 !important;
  --link-external-color: #bd93f9 !important;
  --link-external-color-hover: #bd93f9 !important;
  --link-unresolved-color: #bd93f9 !important;
  --list-marker-color: #6c6498 !important;
  --list-marker-color-collapsed: #bd93f9 !important;
  --list-marker-color-hover: #6e6b7e !important;
  --md-color-blockquotes: rgb(114, 195, 213) !important;
  --md-color-blockquotes-border: rgb(145, 110, 201) !important;
  --md-color-bold: rgb(231, 229, 115) !important;
  --md-color-bolditalic: rgb(219, 222, 230) !important;
  --md-color-border: rgb(66, 71, 80) !important;
  --md-color-code-cyan: rgb(130, 183, 186) !important;
  --md-color-code-gray: rgb(185, 195, 223) !important;
  --md-color-code-green: rgb(157, 226, 161) !important;
  --md-color-code-magenta: rgb(199, 133, 161) !important;
  --md-color-code-purple: rgb(169, 147, 205) !important;
  --md-color-code-slate: rgb(88, 95, 116) !important;
  --md-color-code-white: rgb(224, 228, 235) !important;
  --md-color-code-yellow: rgb(211, 212, 140) !important;
  --md-color-comment: rgb(207, 211, 221) !important;
  --md-color-footnote: rgb(108, 113, 132) !important;
  --md-color-highlight-bg: linear-gradient(60deg,
    #d7f8ff, #d4f0fe, #d1e6fe, #cedcfd, 
    #cbd2fc, #c3c1fc, #c7b9f8, #c7a3ff) !important;
  --md-color-highlight-text: rgb(45, 48, 57) !important;
  --md-color-italic: rgb(201, 184, 255) !important;
  --md-color-link: #ff80b7 !important;
  --md-color-link-active: rgb(221, 110, 190) !important;
  --md-color-link-hover: rgb(255, 189, 213) !important;
  --md-color-strikethrough: #6c6498 !important;
  --md-color-tag: rgb(101, 230, 168) !important;
  --md-color-tag-active: rgb(30, 200, 160) !important;
  --md-color-tag-hover: rgb(158, 255, 208) !important;
  --md-color-text: rgb(114, 195, 213) !important;
  --md-color-text-faint: rgb(76, 118, 133) !important;
  --md-color-text-muted: rgb(60, 152, 180) !important;
  --menu-background: #15131f !important;
  --mermaid-font: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif !important;
  --metadata-border-color: rgb(52, 58, 75) !important;
  --metadata-divider-color: rgb(52, 58, 75) !important;
  --metadata-input-font: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #f8f8f2 !important;
  --metadata-label-font: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #6e6b7e !important;
  --metadata-label-text-color-hover: #6e6b7e !important;
  --modal-background: #22212c !important;
  --motion-delay: cubic-bezier(0.86,0,0.07,1) !important;
  --motion-heavy: cubic-bezier(0.18,0.89,0.32,1.27) !important;
  --motion-smooth: cubic-bezier(0.65,0.05,0.36,1) !important;
  --nav-collapse-icon-color: #6c6498 !important;
  --nav-collapse-icon-color-collapsed: #6c6498 !important;
  --nav-heading-color: #f8f8f2 !important;
  --nav-heading-color-collapsed: #6c6498 !important;
  --nav-heading-color-collapsed-hover: #6e6b7e !important;
  --nav-heading-color-hover: #f8f8f2 !important;
  --nav-item-color: #6e6b7e !important;
  --nav-item-color-active: #f8f8f2 !important;
  --nav-item-color-highlighted: #bd93f9 !important;
  --nav-item-color-hover: #f8f8f2 !important;
  --nav-item-color-selected: #f8f8f2 !important;
  --nav-tag-color: #6c6498 !important;
  --nav-tag-color-active: #6e6b7e !important;
  --nav-tag-color-hover: #6e6b7e !important;
  --pdf-background: #22212c !important;
  --pdf-page-background: #22212c !important;
  --pdf-shadow: 0 0 0 1px rgb(52, 58, 75) !important;
  --pdf-sidebar-background: #22212c !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(52, 58, 75) !important;
  --pill-border-color: rgb(52, 58, 75) !important;
  --pill-color: #6e6b7e !important;
  --pill-color-hover: #f8f8f2 !important;
  --pill-color-remove: #6c6498 !important;
  --pill-color-remove-hover: #bd93f9 !important;
  --prompt-background: #22212c !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --reveal-font: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif !important;
  --ribbon-background: #15131f !important;
  --ribbon-background-collapsed: #22212c !important;
  --scale-0-0: 0px !important;
  --scale-2-1: 2px !important;
  --scale-2-10: 20px !important;
  --scale-2-18: 36px !important;
  --scale-2-2: 4px !important;
  --scale-2-3: 6px !important;
  --scale-2-4: 8px !important;
  --scale-2-5: 10px !important;
  --scale-2-6: 12px !important;
  --scale-2-8: 16px !important;
  --scale-2-9: 18px !important;
  --scale-8-1: 8px !important;
  --scale-8-10: 80px !important;
  --scale-8-12: 96px !important;
  --scale-8-18: 144px !important;
  --scale-8-2: 16px !important;
  --scale-8-3: 24px !important;
  --scale-8-36: 288px !important;
  --scale-8-4: 32px !important;
  --scale-8-5: 40px !important;
  --scale-8-6: 48px !important;
  --scale-8-7: 54px !important;
  --scale-8-8: 64px !important;
  --scale-8-9: 72px !important;
  --scrollbar-active-thumb-bg: rgb(30, 31, 36) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: rgb(35, 36, 42) !important;
  --search-clear-button-color: #6e6b7e !important;
  --search-icon-color: #6e6b7e !important;
  --search-result-background: #22212c !important;
  --secondary: #bd93f9 !important;
  --setting-group-heading-color: #f8f8f2 !important;
  --setting-items-background: #23212d !important;
  --setting-items-border-color: rgb(52, 58, 75) !important;
  --shadow-l: 0px 2px 2.3px -52px rgba(0, 0, 0, 0.448),
    0px 5.6px 6.3px -52px rgba(0, 0, 0, 0.6),
    0px 13.6px 15.1px -52px rgba(0, 0, 0, 0.852),
    0px 45px 50px -52px rgb(0, 0, 0) !important;
  --shadow-m: 0px 3px 3.1px -20px rgba(0, 0, 0, 0.2),
    0px 24px 25px -20px rgba(0, 0, 0, 0.35) !important;
  --shadow-sm: 0px 3px 12px -2px rgba(14, 11, 11, 0.5) !important;
  --shadow-xsm: rgba(0, 0, 0, 0.15) !important;
  --sheer-dark: rgba(0, 0, 0, 0.95) !important;
  --sheer-light: rgba(0, 0, 0, 0.35) !important;
  --sheer-medium: rgba(0, 0, 0, 0.65) !important;
  --slider-track-background: rgb(52, 58, 75) !important;
  --status-bar-background: #15131f !important;
  --status-bar-border-color: rgb(52, 58, 75) !important;
  --status-bar-text-color: #6e6b7e !important;
  --suggestion-background: #22212c !important;
  --sync-avatar-color-3: rgb(243, 238, 94) !important;
  --sync-avatar-color-4: rgb(101, 230, 168) !important;
  --sync-avatar-color-5: rgb(136, 196, 211) !important;
  --sync-avatar-color-7: rgb(201, 184, 255) !important;
  --tab-background-active: #22212c !important;
  --tab-container-background: #15131f !important;
  --tab-outline-color: rgb(52, 58, 75) !important;
  --tab-switcher-background: #15131f !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #15131f, transparent) !important;
  --tab-text-color: #6c6498 !important;
  --tab-text-color-active: #6e6b7e !important;
  --tab-text-color-focused: #6e6b7e !important;
  --tab-text-color-focused-active: #6e6b7e !important;
  --tab-text-color-focused-active-current: #f8f8f2 !important;
  --tab-text-color-focused-highlighted: #bd93f9 !important;
  --table-add-button-border-color: rgb(52, 58, 75) !important;
  --table-border-color: rgb(52, 58, 75) !important;
  --table-drag-handle-background-active: #483699 !important;
  --table-drag-handle-color: #6c6498 !important;
  --table-drag-handle-color-active: #f8f8f2 !important;
  --table-header-border-color: rgb(52, 58, 75) !important;
  --table-header-color: #f8f8f2 !important;
  --table-selection-border-color: #483699 !important;
  --tag-color: #bd93f9 !important;
  --tag-color-hover: #bd93f9 !important;
  --tertiary: #bd93f9 !important;
  --text-accent: #bd93f9 !important;
  --text-accent-hover: #bd93f9 !important;
  --text-error: rgb(252, 95, 142) !important;
  --text-error-hover: rgb(221, 110, 190) !important;
  --text-faint: #6c6498 !important;
  --text-highlight-bg: rgba(214, 247, 255, 0.596) !important;
  --text-highlight-bg-active: rgba(54, 57, 72, 0.4) !important;
  --text-muted: #6e6b7e !important;
  --text-normal: #f8f8f2 !important;
  --text-on-accent: #f8f8f2 !important;
  --text-selection: #363948 !important;
  --text-success: rgb(101, 230, 168) !important;
  --textHighlight: rgba(214, 247, 255, 0.596) !important;
  --titleFont: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #15131f !important;
  --titlebar-background-focused: #2a2442 !important;
  --titlebar-border-color: rgb(52, 58, 75) !important;
  --titlebar-text-color: #6e6b7e !important;
  --titlebar-text-color-focused: #f8f8f2 !important;
  --tracking-0: 0px !important;
  --tracking-1: 0.16px !important;
  --tracking-2: 0.32px !important;
  --tracking-3: 0.64px !important;
  --tracking-4: 1.28px !important;
  --tracking-5: 2.56px !important;
  --vault-profile-color: #f8f8f2 !important;
  --vault-profile-color-hover: #f8f8f2 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(21, 19, 31);
  color: rgb(248, 248, 242);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(34, 33, 44);
  color: rgb(248, 248, 242);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(21, 19, 31);
  color: rgb(248, 248, 242);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(52, 58, 75);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(21, 19, 31);
  border-left-color: rgb(52, 58, 75);
  color: rgb(248, 248, 242);
}

html body div#quartz-root {
  background-color: rgb(34, 33, 44);
  color: rgb(248, 248, 242);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

html body .page article p > em, html em {
  color: rgb(255, 255, 128);
  font-weight: 500;
  outline: rgb(255, 255, 128) none 0px;
  text-decoration: rgb(255, 255, 128);
  text-decoration-color: rgb(255, 255, 128);
}

html body .page article p > i, html i {
  color: rgb(255, 255, 128);
  font-weight: 500;
  outline: rgb(255, 255, 128) none 0px;
  text-decoration: rgb(255, 255, 128);
  text-decoration-color: rgb(255, 255, 128);
}

html body .page article p > strong, html strong {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

html body .text-highlight {
  background-color: rgba(214, 247, 255, 0.596);
  color: rgb(248, 248, 242);
  font-weight: 500;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body del {
  color: rgb(114, 195, 213);
  font-weight: 500;
  outline: rgb(114, 195, 213) none 0px;
  text-decoration: line-through rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body p {
  color: rgb(110, 107, 126);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(110, 107, 126) none 0px;
  text-decoration: rgb(110, 107, 126);
  text-decoration-color: rgb(110, 107, 126);
}`,
    links: `html body a.external, html footer a {
  color: rgb(80, 250, 123);
  outline: rgb(80, 250, 123) none 0px;
  text-decoration: rgb(80, 250, 123);
  text-decoration-color: rgb(80, 250, 123);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 128, 183);
  outline: rgb(255, 128, 183) none 0px;
  text-decoration: rgb(255, 128, 183);
  text-decoration-color: rgb(255, 128, 183);
}

html body a.internal.broken {
  color: rgb(189, 147, 249);
  outline: rgb(189, 147, 249) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html body dd {
  color: rgb(114, 195, 213);
}

html body dt {
  color: rgb(114, 195, 213);
  font-weight: 500;
}

html body ol > li {
  color: rgb(114, 195, 213);
}

html body ol.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ul > li {
  color: rgb(114, 195, 213);
}

html body ul.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(108, 100, 152);
  text-decoration: rgb(108, 100, 152);
}

html body blockquote {
  background-color: rgb(21, 19, 31);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

html body table {
  border-bottom-color: rgb(66, 71, 80);
  border-left-color: rgb(66, 71, 80);
  border-right-color: rgb(66, 71, 80);
  border-top-color: rgb(66, 71, 80);
  color: rgb(114, 195, 213);
  width: 554px;
}

html body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.08);
}

html body td {
  border-bottom-color: rgb(66, 71, 80);
  border-left-color: rgb(66, 71, 80);
  border-right-color: rgb(66, 71, 80);
  border-top-color: rgb(66, 71, 80);
  color: rgb(114, 195, 213);
  font-weight: 500;
}

html body th {
  border-bottom-color: rgb(52, 58, 75);
  border-left-color: rgb(52, 58, 75);
  border-right-color: rgb(52, 58, 75);
  border-top-color: rgb(52, 58, 75);
  color: rgb(248, 248, 242);
}

html body thead {
  background-color: rgb(35, 36, 42);
  border-bottom-color: rgb(66, 71, 80);
  border-left-color: rgb(66, 71, 80);
  border-right-color: rgb(66, 71, 80);
  border-top-color: rgb(66, 71, 80);
}

html body tr {
  border-bottom-color: rgb(66, 71, 80);
  border-left-color: rgb(66, 71, 80);
  border-right-color: rgb(66, 71, 80);
  border-top-color: rgb(66, 71, 80);
}`,
    code: `html body code {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(130, 183, 186);
  border-left-color: rgb(130, 183, 186);
  border-right-color: rgb(130, 183, 186);
  border-top-color: rgb(130, 183, 186);
  color: rgb(130, 183, 186);
  font-family: "SF Mono", Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(52, 58, 75);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(52, 58, 75);
  border-right-color: rgb(52, 58, 75);
  border-top-color: rgb(52, 58, 75);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(52, 58, 75);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(52, 58, 75);
  border-right-color: rgb(52, 58, 75);
  border-top-color: rgb(52, 58, 75);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(248, 248, 242);
  font-family: "SF Mono", Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

html body pre > code > [data-line] {
  border-left-color: rgb(138, 255, 128);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(138, 255, 128);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(138, 255, 128);
  border-left-color: rgb(138, 255, 128);
  border-right-color: rgb(138, 255, 128);
  border-top-color: rgb(138, 255, 128);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(52, 58, 75);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(52, 58, 75);
  border-right-color: rgb(52, 58, 75);
  border-top-color: rgb(52, 58, 75);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 16px;
  padding-top: 16px;
}

html body pre:has(> code) {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgba(100, 100, 100, 0.25);
  border-bottom-width: 1px;
  border-left-color: rgba(100, 100, 100, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(100, 100, 100, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(100, 100, 100, 0.25);
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

html body figcaption {
  color: rgb(114, 195, 213);
}

html body figure {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

html body img {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 6px -1px;
}

html body video {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(35, 33, 45);
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
}

html body .footnotes {
  border-top-color: rgb(114, 195, 213);
  color: rgb(114, 195, 213);
}

html body .transclude {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(169, 147, 205);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

html body .transclude-inner {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(169, 147, 205);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(110, 107, 126);
  text-decoration: line-through rgb(110, 107, 126);
  text-decoration-color: rgb(110, 107, 126);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(66, 71, 80);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(66, 71, 80);
  border-right-color: rgb(66, 71, 80);
  border-top-color: rgb(66, 71, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}`,
    search: `html body .search > .search-button {
  background-color: rgb(30, 31, 36);
  border-bottom-color: rgb(52, 58, 75);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(52, 58, 75);
  border-right-color: rgb(52, 58, 75);
  border-top-color: rgb(52, 58, 75);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(248, 248, 242);
  font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(34, 33, 44);
  border-bottom-color: rgb(66, 71, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: rgba(14, 11, 11, 0.5) 0px 3px 12px -2px, rgba(0, 0, 0, 0.447) 0px 2px 2.3px -52px, rgba(0, 0, 0, 0.6) 0px 5.6px 6.3px -52px, rgba(0, 0, 0, 0.85) 0px 13.6px 15.1px -52px, rgb(0, 0, 0) 0px 45px 50px -52px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(114, 195, 213);
  font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
  outline: rgb(114, 195, 213) none 0px;
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(114, 195, 213);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(114, 195, 213);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(114, 195, 213);
  font-weight: 500;
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(66, 71, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(30, 31, 36);
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(114, 195, 213);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(114, 195, 213);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html body a.internal.tag-link::before {
  color: rgb(189, 147, 249);
}

html body h1 {
  color: rgb(255, 184, 107);
  font-family: "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
}

html body h2 {
  color: rgb(255, 122, 198);
  font-family: "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(114, 195, 213);
}

html body h3 {
  color: rgb(189, 147, 249);
  font-family: "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
}

html body h4 {
  color: rgb(139, 233, 253);
  font-family: "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
}

html body h5 {
  color: rgb(80, 250, 123);
  font-family: "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
}

html body h6 {
  color: rgb(241, 250, 140);
  font-family: "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
}

html body hr {
  border-bottom-color: rgb(52, 58, 75);
  border-left-color: rgb(52, 58, 75);
  border-right-color: rgb(52, 58, 75);
}`,
    scrollbars: `html body .callout {
  padding-bottom: 32px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body ::-webkit-scrollbar {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

html body ::-webkit-scrollbar-track {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(219, 222, 230);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  text-decoration: rgb(219, 222, 230);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(219, 222, 230);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  text-decoration: rgb(219, 222, 230);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(160, 167, 187);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(160, 167, 187);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(45, 48, 57);
  border-bottom-color: rgb(136, 196, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(136, 196, 211);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(136, 196, 211);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(136, 196, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(136, 196, 211);
}`,
    toc: `html body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}`,
    footer: `html body footer {
  background-color: rgb(30, 31, 36);
  border-bottom-color: rgb(82, 87, 102);
  border-left-color: rgb(82, 87, 102);
  border-left-width: 0px;
  border-right-color: rgb(82, 87, 102);
  border-top-color: rgb(82, 87, 102);
  border-top-width: 0px;
  color: rgb(82, 87, 102);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(160, 167, 187);
  text-decoration: rgb(160, 167, 187);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(248, 248, 242);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(160, 167, 187);
  text-decoration: rgb(160, 167, 187);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 167, 187);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body li.section-li > .section .meta {
  color: rgb(160, 167, 187);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(160, 167, 187);
  text-decoration: rgb(160, 167, 187);
}

html body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}

html body .darkmode svg {
  color: rgb(110, 107, 126);
  stroke: rgb(110, 107, 126);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}

html body .breadcrumb-element p {
  color: rgb(108, 100, 152);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(114, 195, 213);
}

html body .metadata {
  border-bottom-color: rgb(52, 58, 75);
  border-left-color: rgb(52, 58, 75);
  border-right-color: rgb(52, 58, 75);
  border-top-color: rgb(52, 58, 75);
  color: rgb(110, 107, 126);
}

html body .metadata-properties {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}

html body .navigation-progress {
  background-color: rgb(30, 31, 36);
}

html body .page-header h2.page-title {
  color: rgb(248, 248, 242);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(114, 195, 213);
  text-decoration: underline dotted rgb(114, 195, 213);
}

html body details {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

html body input[type=text] {
  background-color: rgb(30, 31, 36);
  border-bottom-color: rgb(110, 107, 126);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(110, 107, 126);
  font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html body kbd {
  background-color: rgb(35, 36, 42);
  border-bottom-color: rgba(0, 0, 0, 0.15);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.15);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.15);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.15);
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 0px 1px;
  color: rgb(224, 228, 235);
  font-family: Monaco, Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace;
  font-size: 12px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 2px;
}

html body progress {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

html body sub {
  color: rgb(114, 195, 213);
}

html body summary {
  color: rgb(114, 195, 213);
  font-weight: 500;
}

html body sup {
  color: rgb(114, 195, 213);
}`,
  },
  light: {},
};
