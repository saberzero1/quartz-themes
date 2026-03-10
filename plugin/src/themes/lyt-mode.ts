import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "lyt-mode",
    modes: ["dark"],
    variations: [],
    fonts: ["dm-mono", "dm-sans", "fira-code"],
  },
  dark: {
    base: `:root:root {
  --accent-h: 263 !important;
  --accent-l: 61% !important;
  --accent-s: 46% !important;
  --background-modifier-active-hover: rgb(23, 24, 28) !important;
  --background-modifier-border: rgba(100, 100, 100, 0.25) !important;
  --background-modifier-border-focus: rgb(231, 229, 115) !important;
  --background-modifier-border-hover: rgba(255, 255, 255, 0.25) !important;
  --background-modifier-form-field: rgb(30, 31, 36) !important;
  --background-modifier-form-field-hover: rgb(30, 31, 36) !important;
  --background-modifier-hover: transparent !important;
  --background-modifier-success: #44CF6E !important;
  --background-primary: rgb(45, 48, 57) !important;
  --background-primary-alt: rgb(35, 36, 42) !important;
  --background-secondary: rgb(30, 31, 36) !important;
  --background-secondary-alt: rgb(30, 31, 36) !important;
  --bases-cards-background: rgb(45, 48, 57) !important;
  --bases-cards-cover-background: rgb(35, 36, 42) !important;
  --bases-cards-radius: 2px !important;
  --bases-cards-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgba(255, 255, 255, 0.25) !important;
  --bases-embed-border-color: rgba(100, 100, 100, 0.25) !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: rgb(160, 167, 187) !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-table-border-color: rgb(67, 72, 81) !important;
  --bases-table-cell-background-active: rgb(45, 48, 57) !important;
  --bases-table-cell-background-disabled: rgb(35, 36, 42) !important;
  --bases-table-cell-background-selected: hsla(263,
              46%,
              61%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(231, 229, 115) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(88, 95, 116) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: rgb(35, 36, 42) !important;
  --bases-table-header-background: rgb(45, 48, 57) !important;
  --bases-table-header-background-hover: transparent !important;
  --bases-table-header-color: rgb(160, 167, 187) !important;
  --bases-table-row-background-hover: rgba(0, 0, 0, 0.3) !important;
  --bases-table-summary-background: rgb(45, 48, 57) !important;
  --bases-table-summary-background-hover: transparent !important;
  --blockquote-border-color: rgb(145, 110, 201) !important;
  --blur-background: color-mix(in srgb, rgb(23, 24, 28) 65%, transparent) linear-gradient(rgb(23, 24, 28), color-mix(in srgb, rgb(23, 24, 28) 65%, transparent)) !important;
  --bodyFont: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(219, 206, 132) !important;
  --bold-italic-color: rgb(219, 222, 230) !important;
  --bold-weight: 700 !important;
  --border-300: rgba(255, 255, 255, 0.25) !important;
  --border-500: rgba(100, 100, 100, 0.25) !important;
  --border-700: rgba(0, 0, 0, 0.15) !important;
  --border-900: rgb(67, 72, 81) !important;
  --button-radius: 2px !important;
  --callout-border-opacity: 0.3;
  --callout-border-width: 1px;
  --callout-content-padding: 0 20px;
  --callout-padding: 0 0 0 0;
  --callout-radius: 2px;
  --callout-title-background: transparent;
  --canvas-background: rgb(45, 48, 57) !important;
  --canvas-card-label-color: rgb(124, 132, 156) !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: rgb(52, 58, 75) !important;
  --caret-color: rgb(185, 195, 223) !important;
  --checkbox-border-color: rgb(67, 72, 81) !important;
  --checkbox-border-color-hover: rgb(67, 72, 81) !important;
  --checkbox-color: transparent !important;
  --checkbox-color-hover: transparent !important;
  --checkbox-marker-color: rgb(124, 132, 156) !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: rgb(141, 148, 170) !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 2px !important;
  --code-background: rgb(35, 36, 42) !important;
  --code-border-color: rgba(100, 100, 100, 0.25) !important;
  --code-bracket-background: transparent !important;
  --code-comment: rgb(207, 211, 221) !important;
  --code-function: rgb(199, 133, 161) !important;
  --code-important: rgb(224, 228, 235) !important;
  --code-keyword: rgb(169, 147, 205) !important;
  --code-normal: rgb(185, 195, 223) !important;
  --code-property: rgb(211, 212, 140) !important;
  --code-punctuation: rgb(88, 95, 116) !important;
  --code-radius: 0px !important;
  --code-string: rgb(157, 226, 161) !important;
  --code-tag: rgb(199, 133, 161) !important;
  --code-value: rgb(130, 183, 186) !important;
  --codeFont: '??', 'DM Mono', 'Fira Code', Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(124, 132, 156) !important;
  --collapse-icon-color-collapsed: rgb(185, 195, 223) !important;
  --color-accent: rgb(145, 110, 201) !important;
  --color-accent-1: rgb(134, 95, 196) !important;
  --color-accent-2: rgb(156, 125, 207) !important;
  --color-accent-hsl: 263,
              46%,
              61% !important;
  --color-base-00: rgb(23, 24, 28) !important;
  --color-base-10: rgb(30, 31, 36) !important;
  --color-base-100: rgb(185, 195, 223) !important;
  --color-base-20: rgb(35, 36, 42) !important;
  --color-base-25: rgb(45, 48, 57) !important;
  --color-base-30: rgb(52, 58, 75) !important;
  --color-base-35: rgb(82, 87, 102) !important;
  --color-base-40: rgb(124, 132, 156) !important;
  --color-base-50: rgb(108, 113, 132) !important;
  --color-base-60: rgb(160, 167, 187) !important;
  --color-base-70: rgb(159, 169, 198) !important;
  --color-black: rgb(30, 31, 36) !important;
  --color-blacker: rgb(23, 24, 28) !important;
  --color-cyan: #53DFDD !important;
  --color-cyan-300: rgb(130, 183, 186) !important;
  --color-cyan-500: rgb(136, 196, 211) !important;
  --color-cyan-510: rgb(82, 193, 218) !important;
  --color-cyan-520: rgb(91, 188, 210) !important;
  --color-cyan-530: rgb(114, 195, 213) !important;
  --color-cyan-533: rgb(13, 200, 242) !important;
  --color-cyan-540: rgb(57, 181, 219) !important;
  --color-cyan-555: rgb(137, 245, 236) !important;
  --color-cyan-577: rgb(231, 189, 177) !important;
  --color-cyan-700: rgb(60, 152, 180) !important;
  --color-cyan-900: rgb(76, 118, 133) !important;
  --color-cyan-gradient-1: linear-gradient(180deg,
        #82b7ba, #77aeb3, #6da5ac, #629ca5, 
        #5a919c, #558590, #4f7984, #496d79) !important;
  --color-cyan-gradient-2: linear-gradient(180deg, 
        #6de0fd, #5dd6f5, #56d3f2, #4fcfef, 
        #48cceb, #40c8e8, #37c5e5, #2dc1e2) !important;
  --color-gray-10: rgb(219, 222, 230) !important;
  --color-gray-100: rgb(35, 36, 42) !important;
  --color-gray-15: rgb(207, 211, 221) !important;
  --color-gray-20: rgb(185, 195, 223) !important;
  --color-gray-30: rgb(159, 169, 198) !important;
  --color-gray-40: rgb(160, 167, 187) !important;
  --color-gray-48: rgb(141, 148, 170) !important;
  --color-gray-50: rgb(108, 113, 132) !important;
  --color-gray-60: rgb(124, 132, 156) !important;
  --color-gray-70: rgb(82, 87, 102) !important;
  --color-gray-75: rgb(68, 72, 85) !important;
  --color-gray-80: rgb(52, 58, 75) !important;
  --color-gray-90: rgb(45, 48, 57) !important;
  --color-gray-95: rgb(41, 43, 50) !important;
  --color-green: #44CF6E !important;
  --color-green-300: rgb(158, 255, 208) !important;
  --color-green-500: rgb(157, 226, 161) !important;
  --color-green-700: rgb(114, 213, 165) !important;
  --color-green-710: rgb(114, 213, 165) !important;
  --color-green-900: rgb(30, 200, 160) !important;
  --color-green-910: rgb(17, 212, 141) !important;
  --color-green-920: rgb(13, 145, 116) !important;
  --color-green-gradient-1: linear-gradient(180deg,
        #9effd0, #8bfcc9, #79f9c4, #67f4bf, 
        #57efbb, #48e8b7, #39e0b4, #2cd8b0) !important;
  --color-green-gradient-2: linear-gradient(180deg,
        #a2f49a, #89f18d, #79ee8b, #69ea8d, 
        #59e692, #4ae299, #3bdda3, #2cd8b0) !important;
  --color-h3-alt: rgb(136, 163, 252) !important;
  --color-h3-green: rgb(71, 189, 126) !important;
  --color-h3-orange: rgb(217, 176, 104) !important;
  --color-h4-alt: rgb(71, 209, 143) !important;
  --color-highlight-bg: rgba(255, 252, 59, 0.08) !important;
  --color-highlight-border: rgba(255, 252, 59, 0.4) !important;
  --color-highlight-text: rgb(114, 195, 213) !important;
  --color-magenta-300: rgb(199, 133, 161) !important;
  --color-magenta-310: rgb(255, 189, 213) !important;
  --color-magenta-500: rgb(255, 153, 190) !important;
  --color-magenta-700: rgb(255, 128, 183) !important;
  --color-magenta-710: rgb(255, 122, 162) !important;
  --color-magenta-900: rgb(221, 110, 190) !important;
  --color-magenta-910: rgb(252, 95, 142) !important;
  --color-magenta-920: rgb(114, 60, 76) !important;
  --color-magenta-gradient-1: linear-gradient(180deg,
        #ffb1ce, #ffa3ca, #f897c4, #f88cc4, 
        #ef7dbe, #ea77be, #e472be, #dd6ebe) !important;
  --color-magenta-gradient-2: linear-gradient(180deg,
        #ff99be, #fc91bd, #f88abd, #f483bd, 
        #ef7dbe, #ea77be, #e472be, #dd6ebe) !important;
  --color-orange: #E9973F !important;
  --color-orange-300: rgb(249, 163, 88) !important;
  --color-orange-310: rgb(223, 165, 114) !important;
  --color-orange-500: rgb(171, 116, 68) !important;
  --color-pink: #FA99CD !important;
  --color-purple-300: rgb(179, 164, 224) !important;
  --color-purple-333: rgb(188, 185, 223) !important;
  --color-purple-500: rgb(201, 184, 255) !important;
  --color-purple-555: rgb(201, 184, 255) !important;
  --color-purple-577: rgb(201, 184, 255) !important;
  --color-purple-700: rgb(184, 148, 255) !important;
  --color-purple-900: rgb(145, 110, 201) !important;
  --color-purple-910: rgb(169, 147, 205) !important;
  --color-purple-920: rgb(107, 72, 163) !important;
  --color-purple-gradient-1: linear-gradient(180deg,
        #d9ccff, #d2c4ff, #cbbcff, #c4b4ff,
        #bdabff, #b5a3ff, #ad9bff, #a593ff) !important;
  --color-purple-gradient-2: linear-gradient(180deg,
        #d9ccff, #ccbafc, #c0a9f8, #b59af2, 
        #ab8cea, #a281e1, #9977d6, #916ec9) !important;
  --color-red-300: rgb(249, 96, 88) !important;
  --color-red-500: rgb(171, 73, 68) !important;
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
  --color-white: rgb(239, 241, 245) !important;
  --color-yellow: #E0DE71 !important;
  --color-yellow-300: rgb(253, 255, 128) !important;
  --color-yellow-310: rgb(211, 212, 140) !important;
  --color-yellow-355: rgb(218, 219, 132) !important;
  --color-yellow-500: rgb(231, 229, 115) !important;
  --color-yellow-510: rgb(215, 214, 132) !important;
  --color-yellow-700: rgb(243, 238, 94) !important;
  --color-yellow-900: rgb(217, 214, 23) !important;
  --color-yellow-gradient-1: linear-gradient(180deg,
        #fcff80, #fafd6b, #f9fb57, #f6f843, 
        #f4f430, #f0ef1e, #e4e213, #ccc914) !important;
  --color-yellow-gradient-2: linear-gradient(-90deg,
        #f3ee5e, #f1ec50, #f0eb41, #eee933, 
        #ece725, #eae516, #dbd815, #ccc914) !important;
  --color-yellowish-355: rgb(219, 206, 132) !important;
  --comment-color: rgb(207, 211, 221) !important;
  --comment-h1: rgb(221, 217, 167) !important;
  --comment-h2: rgb(203, 194, 224) !important;
  --comment-h3: rgb(166, 202, 211) !important;
  --comment-h4: rgb(169, 214, 193) !important;
  --comment-h5: rgb(200, 206, 223) !important;
  --comment-h6: rgb(182, 187, 200) !important;
  --cursor: pointer !important;
  --dark: rgb(185, 195, 223) !important;
  --darkgray: rgb(185, 195, 223) !important;
  --divider-color: rgb(30, 31, 36) !important;
  --divider-color-hover: rgb(108, 113, 132) !important;
  --divider-vertical-height: calc(100% - 40px) !important;
  --divider-width: 2px !important;
  --drag-ghost-background: rgb(45, 48, 57) !important;
  --drag-ghost-text-color: rgb(114, 195, 213) !important;
  --dropdown-background: rgb(23, 24, 28) !important;
  --dropdown-background-hover: rgb(82, 87, 102) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(100, 100, 100, 0.25), inset 0 0 0 1px rgba(100, 100, 100, 0.25) !important;
  --embed-border-left: 2px solid rgb(171, 116, 68) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid rgb(88, 95, 116) !important;
  --embed-padding: 0 0 0 20px !important;
  --file-header-background: rgb(45, 48, 57) !important;
  --file-header-background-focused: rgb(45, 48, 57) !important;
  --file-header-font: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 16px !important;
  --file-header-font-weight: 500 !important;
  --file-margins: 32px !important;
  --flair-background: rgb(23, 24, 28) !important;
  --flair-color: rgb(185, 195, 223) !important;
  --font-big: 1.15em !important;
  --font-body: 1em !important;
  --font-interface: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif !important;
  --font-mermaid: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mono: 'DM Mono', 'Fira Code', Courier, monospace !important;
  --font-monospace: '??', 'DM Mono', 'Fira Code', Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'DM Mono', 'Fira Code', Courier, monospace !important;
  --font-print: '??', '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, 'Arial' !important;
  --font-sans: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif !important;
  --font-smallish: 0.89em !important;
  --font-text: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif !important;
  --font-ui-large: 24px !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --footnote-divider-color: rgba(100, 100, 100, 0.25) !important;
  --footnote-id-color: rgb(160, 167, 187) !important;
  --footnote-id-color-no-occurrences: rgb(124, 132, 156) !important;
  --footnote-input-background-active: transparent !important;
  --footnote-line-height: 1.58 !important;
  --footnote-radius: 0px !important;
  --graph-color-line: rgb(76, 118, 133) !important;
  --graph-color-line-hover: rgb(160, 167, 187) !important;
  --graph-color-node-border-hover: rgb(239, 241, 245) !important;
  --graph-color-node-hover: rgb(221, 110, 190) !important;
  --graph-line: rgb(76, 118, 133) !important;
  --graph-node: rgb(243, 238, 94) !important;
  --graph-node-attachment: rgb(224, 228, 235) !important;
  --graph-node-focused: rgb(124, 132, 156) !important;
  --graph-node-tag: rgb(60, 152, 180) !important;
  --graph-node-unresolved: rgb(145, 110, 201) !important;
  --graph-text: rgb(219, 222, 230) !important;
  --gray: rgb(160, 167, 187) !important;
  --h1-color: rgb(217, 214, 23) !important;
  --h1-size: 1.55rem !important;
  --h2-color: rgb(184, 148, 255) !important;
  --h2-size: 1.45rem !important;
  --h2-weight: 600 !important;
  --h3-color: rgb(13, 200, 242) !important;
  --h3-size: 1.35rem !important;
  --h3-weight: 600 !important;
  --h4-color: rgb(114, 213, 165) !important;
  --h4-size: 1.25rem !important;
  --h4-weight: 600 !important;
  --h5-color: rgb(185, 195, 223) !important;
  --h5-size: 1.15rem !important;
  --h5-weight: 600 !important;
  --h6-color: rgb(159, 167, 188) !important;
  --h6-size: 1.05rem !important;
  --header-shadow-color: rgb(31, 31, 31) !important;
  --header-shadow-size: 0px 4px 3px !important;
  --headerFont: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: rgba(255, 252, 59, 0.08) !important;
  --hr-color: rgb(67, 72, 81) !important;
  --hr-thickness: 1px !important;
  --icon-color: rgb(124, 132, 156) !important;
  --icon-color-active: rgb(184, 148, 255) !important;
  --icon-color-focused: rgb(184, 148, 255) !important;
  --icon-color-hover: rgb(184, 148, 255) !important;
  --icon-opacity: 1 !important;
  --indentation-guide: rgb(67, 72, 81) !important;
  --indentation-guide-active: rgba(255, 255, 255, 0.25) !important;
  --inline-title-size: 1.55rem !important;
  --input-date-separator: rgb(124, 132, 156) !important;
  --input-placeholder-color: rgb(124, 132, 156) !important;
  --input-radius: 2px !important;
  --input-shadow: 0px 1px 0px 1px rgba(0, 0, 0, 0.15) !important;
  --input-shadow-hover: 0px 1px 0px 1px rgba(0, 0, 0, 0.15) !important;
  --interactive-accent: rgb(88, 95, 116) !important;
  --interactive-accent-hover: rgb(159, 167, 188) !important;
  --interactive-accent-hsl: 255, 14%, 40% !important;
  --interactive-hover: rgb(82, 87, 102) !important;
  --interactive-normal: rgb(23, 24, 28) !important;
  --italic-color: rgb(201, 184, 255) !important;
  --light: rgb(45, 48, 57) !important;
  --lightgray: rgb(30, 31, 36) !important;
  --line-height-normal: 1.58 !important;
  --link-color: rgb(255, 128, 183) !important;
  --link-color-hover: rgb(255, 128, 183) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(255, 128, 183) !important;
  --link-external-color-hover: rgb(255, 128, 183) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: rgb(255, 128, 183) !important;
  --link-unresolved-decoration-color: rgba(95, 88, 116, 0.5) !important;
  --link-unresolved-opacity: 0.65 !important;
  --list-bullet-size: 5px !important;
  --list-indent: 1.75em !important;
  --list-marker-color: rgb(169, 147, 205) !important;
  --list-marker-color-collapsed: rgb(185, 195, 223) !important;
  --list-marker-color-hover: rgb(169, 147, 205) !important;
  --menu-background: rgb(30, 31, 36) !important;
  --menu-border-color: rgba(255, 255, 255, 0.25) !important;
  --menu-radius: 2px !important;
  --menu-shadow: 0px 3px 12px -2px rgba(14, 11, 11, 0.5) !important;
  --metadata-border-color: rgba(100, 100, 100, 0.25) !important;
  --metadata-divider-color: rgba(100, 100, 100, 0.25) !important;
  --metadata-input-background-active: transparent !important;
  --metadata-input-font: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(185, 195, 223) !important;
  --metadata-label-background-active: transparent !important;
  --metadata-label-font: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(160, 167, 187) !important;
  --metadata-label-text-color-hover: rgb(160, 167, 187) !important;
  --metadata-property-background-active: transparent !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(231, 229, 115) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgba(255, 255, 255, 0.25) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: rgb(45, 48, 57) !important;
  --modal-border-color: rgba(100, 100, 100, 0.25) !important;
  --modal-height: 90vh !important;
  --modal-max-height: 1100px !important;
  --modal-max-width: 1000px !important;
  --modal-radius: 2px !important;
  --modal-width: 80vw !important;
  --nav-collapse-icon-color: rgb(124, 132, 156) !important;
  --nav-collapse-icon-color-collapsed: rgb(124, 132, 156) !important;
  --nav-heading-color: rgb(185, 195, 223) !important;
  --nav-heading-color-collapsed: rgb(124, 132, 156) !important;
  --nav-heading-color-collapsed-hover: rgb(160, 167, 187) !important;
  --nav-heading-color-hover: rgb(185, 195, 223) !important;
  --nav-item-background-active: rgb(45, 48, 57) !important;
  --nav-item-background-hover: rgb(45, 48, 57) !important;
  --nav-item-background-selected: hsla(263,
              46%,
              61%, 0.15) !important;
  --nav-item-color: rgb(160, 167, 187) !important;
  --nav-item-color-active: rgb(136, 196, 211) !important;
  --nav-item-color-highlighted: rgb(239, 241, 245) !important;
  --nav-item-color-hover: rgb(136, 196, 211) !important;
  --nav-item-color-selected: rgb(185, 195, 223) !important;
  --nav-item-radius: 0px !important;
  --nav-item-size: 14px !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: rgb(124, 132, 156) !important;
  --nav-tag-color-active: rgb(160, 167, 187) !important;
  --nav-tag-color-hover: rgb(160, 167, 187) !important;
  --nav-tag-radius: 0px !important;
  --opacity-translucency: 0.75 !important;
  --pdf-background: rgb(45, 48, 57) !important;
  --pdf-page-background: rgb(45, 48, 57) !important;
  --pdf-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25) !important;
  --pdf-sidebar-background: rgb(45, 48, 57) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25) !important;
  --pill-border-color: rgba(100, 100, 100, 0.25) !important;
  --pill-border-color-hover: rgba(255, 255, 255, 0.25) !important;
  --pill-color: rgb(160, 167, 187) !important;
  --pill-color-hover: rgb(185, 195, 223) !important;
  --pill-color-remove: rgb(124, 132, 156) !important;
  --pill-color-remove-hover: rgb(185, 195, 223) !important;
  --popover-height: 550px !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: rgb(45, 48, 57) !important;
  --prompt-border-color: rgba(100, 100, 100, 0.25) !important;
  --radius-l: 4px !important;
  --radius-m: 2px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, rgb(23, 24, 28) 65%, transparent) linear-gradient(rgb(23, 24, 28), color-mix(in srgb, rgb(23, 24, 28) 65%, transparent)) !important;
  --ribbon-background: rgb(30, 31, 36) !important;
  --ribbon-background-collapsed: rgb(30, 31, 36) !important;
  --ribbon-padding: 8px 4px 8px 4px !important;
  --scrollbar-active-thumb-bg: rgb(30, 31, 36) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-radius: 4px !important;
  --scrollbar-thumb-bg: rgb(35, 36, 42) !important;
  --search-clear-button-color: rgb(160, 167, 187) !important;
  --search-icon-color: rgb(160, 167, 187) !important;
  --search-result-background: rgb(45, 48, 57) !important;
  --secondary: rgb(185, 195, 223) !important;
  --setting-group-heading-color: rgb(185, 195, 223) !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: rgb(35, 36, 42) !important;
  --setting-items-border-color: rgba(100, 100, 100, 0.25) !important;
  --setting-items-radius: 4px !important;
  --shadow-300: rgba(0, 0, 0, 0.15) !important;
  --shadow-500: rgba(0, 0, 0, 0.65) !important;
  --shadow-700: rgba(0, 0, 0, 0.95) !important;
  --shadow-l: 0px 2px 2.3px -52px rgba(0, 0, 0, 0.448),
        0px 5.6px 6.3px -52px rgba(0, 0, 0, 0.6),
        0px 13.6px 15.1px -52px rgba(0, 0, 0, 0.852),
        0px 45px 50px -52px rgb(0, 0, 0) !important;
  --shadow-large: 0px 2px 2.3px -52px rgba(0, 0, 0, 0.448),
        0px 5.6px 6.3px -52px rgba(0, 0, 0, 0.6),
        0px 13.6px 15.1px -52px rgba(0, 0, 0, 0.852),
        0px 45px 50px -52px rgb(0, 0, 0) !important;
  --shadow-medium: 0px 3px 3.1px -20px rgba(0, 0, 0, 0.2),
        0px 24px 25px -20px rgba(0, 0, 0, 0.35) !important;
  --shadow-s: 0px 3px 12px -2px rgba(14, 11, 11, 0.5) !important;
  --shadow-small: 0px 3px 12px -2px rgba(14, 11, 11, 0.5) !important;
  --sidebar-markdown-font-size: 0.933em !important;
  --slider-s-thumb-size-: 13px !important;
  --slider-thumb-border-color: rgba(255, 255, 255, 0.25) !important;
  --slider-thumb-height: 13px !important;
  --slider-thumb-radius: 2px !important;
  --slider-thumb-width: 26px !important;
  --slider-thumb-y: -5px !important;
  --slider-track-background: rgba(100, 100, 100, 0.25) !important;
  --status-bar-background: rgb(30, 31, 36) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-border-width: 0 0 0 0 !important;
  --status-bar-font-size: 13px !important;
  --status-bar-position: relative !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: rgb(160, 167, 187) !important;
  --strikethrough-color: rgb(124, 132, 156) !important;
  --suggestion-background: rgb(45, 48, 57) !important;
  --sync-avatar-color-2: #E9973F !important;
  --sync-avatar-color-3: #E0DE71 !important;
  --sync-avatar-color-4: #44CF6E !important;
  --sync-avatar-color-5: #53DFDD !important;
  --sync-avatar-color-8: #FA99CD !important;
  --tab-background-active: rgb(45, 48, 57) !important;
  --tab-container-background: rgb(30, 31, 36) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: rgba(100, 100, 100, 0.25) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: transparent !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: rgb(30, 31, 36) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(30, 31, 36), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(145, 110, 201) !important;
  --tab-text-color: rgb(136, 196, 211) !important;
  --tab-text-color-active: rgb(160, 167, 187) !important;
  --tab-text-color-focused: rgb(124, 132, 156) !important;
  --tab-text-color-focused-active: rgb(239, 241, 245) !important;
  --tab-text-color-focused-active-current: rgb(185, 195, 223) !important;
  --tab-text-color-focused-highlighted: rgb(185, 195, 223) !important;
  --table-add-button-border-color: rgba(100, 100, 100, 0.25) !important;
  --table-border-color: rgb(67, 72, 81) !important;
  --table-drag-handle-background-active: rgb(88, 95, 116) !important;
  --table-drag-handle-color: rgb(124, 132, 156) !important;
  --table-drag-handle-color-active: rgb(239, 241, 245) !important;
  --table-header-background: rgb(35, 36, 42) !important;
  --table-header-background-hover: rgb(35, 36, 42) !important;
  --table-header-border-color: rgb(67, 72, 81) !important;
  --table-header-color: rgb(224, 228, 235) !important;
  --table-header-weight: 600 !important;
  --table-row-alt-background: rgba(0, 0, 0, 0.08) !important;
  --table-row-background-hover: rgba(0, 0, 0, 0.3) !important;
  --table-selection: hsla(263,
              46%,
              61%, 0.1) !important;
  --table-selection-border-color: rgb(88, 95, 116) !important;
  --table-white-space: normal !important;
  --tag-background: rgba(0, 0, 0, 0.15) !important;
  --tag-background-hover: rgba(0, 0, 0, 0.15) !important;
  --tag-border-color: transparent !important;
  --tag-border-color-hover: transparent !important;
  --tag-color: rgb(114, 213, 165) !important;
  --tag-color-hover: rgb(114, 213, 165) !important;
  --tag-padding-y: 0.2em !important;
  --tertiary: rgb(239, 241, 245) !important;
  --text-accent: rgb(185, 195, 223) !important;
  --text-accent-hover: rgb(239, 241, 245) !important;
  --text-error: rgb(252, 95, 142) !important;
  --text-faint: rgb(124, 132, 156) !important;
  --text-faintly-muted: rgb(141, 148, 170) !important;
  --text-highlight-bg: rgba(255, 252, 59, 0.08) !important;
  --text-highlight-bg-active: rgba(255, 252, 59, 0.08) !important;
  --text-muted: rgb(160, 167, 187) !important;
  --text-normal: rgb(185, 195, 223) !important;
  --text-on-accent: rgb(239, 241, 245) !important;
  --text-selection: rgba(134, 169, 209, 0.15) !important;
  --text-success: rgb(13, 145, 116) !important;
  --text-warning: #E9973F !important;
  --textHighlight: rgba(255, 252, 59, 0.08) !important;
  --titleFont: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(30, 31, 36) !important;
  --titlebar-background-focused: rgb(30, 31, 36) !important;
  --titlebar-border-color: rgba(100, 100, 100, 0.25) !important;
  --titlebar-text-color: rgb(124, 132, 156) !important;
  --titlebar-text-color-focused: rgb(124, 132, 156) !important;
  --titlebar-text-color-highlighted: rgb(239, 241, 245) !important;
  --titlebar-text-weight: 400 !important;
  --toggle-border-width: 3px !important;
  --toggle-radius: 3px !important;
  --toggle-s-border-width: 3px !important;
  --toggle-s-thumb-height: 18px !important;
  --toggle-s-thumb-width: 18px !important;
  --toggle-s-width: 42px !important;
  --toggle-thumb-color: rgb(239, 241, 245) !important;
  --toggle-thumb-radius: 2px !important;
  --toggle-width: 42px !important;
  --vault-name-color: rgb(185, 195, 223) !important;
  --vault-name-font-size: 14px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: rgb(185, 195, 223) !important;
  --vault-profile-color-hover: rgb(185, 195, 223) !important;
  --vault-profile-font-size: 14px !important;
  --window-border: 1px solid rgb(82, 87, 102) !important;
  --window-border-color: rgb(82, 87, 102) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 31, 36);
  color: rgb(185, 195, 223);
}

html body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(45, 48, 57);
  color: rgb(185, 195, 223);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 31, 36);
  color: rgb(185, 195, 223);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(30, 31, 36);
  border-right-width: 2px;
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 31, 36);
  border-left-color: rgb(30, 31, 36);
  color: rgb(185, 195, 223);
}

html body div#quartz-root {
  background-color: rgb(45, 48, 57);
  color: rgb(185, 195, 223);
}`,
    typography: `html body .page article p > b, b {
  color: rgb(219, 206, 132);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 206, 132) none 0px;
  text-decoration: rgb(219, 206, 132);
  text-decoration-color: rgb(219, 206, 132);
}

html body .page article p > em, em {
  color: rgb(201, 184, 255);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(201, 184, 255) none 0px;
  text-decoration: rgb(201, 184, 255);
  text-decoration-color: rgb(201, 184, 255);
}

html body .page article p > i, i {
  color: rgb(201, 184, 255);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(201, 184, 255) none 0px;
  text-decoration: rgb(201, 184, 255);
  text-decoration-color: rgb(201, 184, 255);
}

html body .page article p > strong, strong {
  color: rgb(219, 206, 132);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 206, 132) none 0px;
  text-decoration: rgb(219, 206, 132);
  text-decoration-color: rgb(219, 206, 132);
}

html body .text-highlight {
  background-color: rgba(255, 252, 59, 0.08);
  color: rgb(185, 195, 223);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(185, 195, 223) none 0px;
  text-decoration: rgb(185, 195, 223);
  text-decoration-color: rgb(185, 195, 223);
}

html body del {
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(114, 195, 213) none 0px;
  text-decoration: line-through rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body p {
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(160, 167, 187) none 0px;
  text-decoration: rgb(160, 167, 187);
  text-decoration-color: rgb(160, 167, 187);
}`,
    links: `html body a.external, footer a {
  color: rgb(255, 128, 183);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 183) none 0px;
  text-decoration: rgb(255, 128, 183);
  text-decoration-color: rgb(255, 128, 183);
}

html body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 128, 183);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 183) none 0px;
  text-decoration: rgb(255, 128, 183);
  text-decoration-color: rgb(255, 128, 183);
}

html body a.internal.broken {
  color: rgb(255, 128, 183);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 183) none 0px;
  text-decoration: rgba(95, 88, 116, 0.5);
  text-decoration-color: rgba(95, 88, 116, 0.5);
}`,
    lists: `html body dd {
  color: rgb(114, 195, 213);
}

html body dt {
  color: rgb(114, 195, 213);
}

html body ol > li {
  color: rgb(114, 195, 213);
}

html body ol.overflow {
  background-color: rgb(45, 48, 57);
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
}

html body ul > li {
  color: rgb(114, 195, 213);
}

html body ul.overflow {
  background-color: rgb(45, 48, 57);
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(124, 132, 156);
  text-decoration: rgb(124, 132, 156);
}

html body blockquote {
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .spacer {
  background-color: rgb(35, 36, 42);
}

html body .table-container {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

html body table {
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 196.906px;
}

html body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.08);
}

html body td {
  border-bottom-color: rgb(67, 72, 81);
  border-left-color: rgb(67, 72, 81);
  border-right-color: rgb(67, 72, 81);
  border-top-color: rgb(67, 72, 81);
  color: rgb(114, 195, 213);
}

html body th {
  border-bottom-color: rgb(67, 72, 81);
  border-left-color: rgb(67, 72, 81);
  border-right-color: rgb(67, 72, 81);
  border-top-color: rgb(67, 72, 81);
  color: rgb(224, 228, 235);
}

html body tr {
  background-color: rgb(35, 36, 42);
}`,
    code: `html body code {
  border-bottom-color: rgb(130, 183, 186);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(130, 183, 186);
  border-right-color: rgb(130, 183, 186);
  border-top-color: rgb(130, 183, 186);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(130, 183, 186);
  font-family: "DM Mono", "Fira Code", Courier, monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 36, 42);
  border-bottom-color: rgba(100, 100, 100, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(100, 100, 100, 0.25);
  border-right-color: rgba(100, 100, 100, 0.25);
  border-top-color: rgba(100, 100, 100, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 36, 42);
  border-bottom-color: rgba(100, 100, 100, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(100, 100, 100, 0.25);
  border-right-color: rgba(100, 100, 100, 0.25);
  border-top-color: rgba(100, 100, 100, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(114, 195, 213);
}

html body pre > code > [data-line] {
  border-left-color: rgb(199, 133, 161);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(199, 133, 161);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(199, 133, 161);
  border-left-color: rgb(199, 133, 161);
  border-right-color: rgb(199, 133, 161);
  border-top-color: rgb(199, 133, 161);
}

html body pre > code, pre:has(> code) {
  background-color: rgb(35, 36, 42);
  border-bottom-color: rgba(100, 100, 100, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(100, 100, 100, 0.25);
  border-right-color: rgba(100, 100, 100, 0.25);
  border-top-color: rgba(100, 100, 100, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body pre:has(> code) {
  background-color: rgb(35, 36, 42);
  border-bottom-color: rgb(67, 72, 81);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 72, 81);
  border-left-width: 1px;
  border-right-color: rgb(67, 72, 81);
  border-right-width: 1px;
  border-top-color: rgb(67, 72, 81);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

html body figcaption {
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
}

html body video {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(35, 36, 42);
  border-bottom-color: rgb(160, 167, 187);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(160, 167, 187);
  border-right-color: rgb(160, 167, 187);
  border-top-color: rgb(160, 167, 187);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .footnotes {
  border-top-color: rgb(114, 195, 213);
  color: rgb(114, 195, 213);
}

html body .transclude {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(88, 95, 116);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

html body .transclude-inner {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(88, 95, 116);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(141, 148, 170);
  text-decoration: rgb(141, 148, 170);
  text-decoration-color: rgb(141, 148, 170);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(67, 72, 81);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(67, 72, 81);
  border-right-color: rgb(67, 72, 81);
  border-top-color: rgb(67, 72, 81);
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
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(207, 227, 255);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(207, 227, 255);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(207, 227, 255);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(207, 227, 255);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 2px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html body .callout > .callout-content {
  background-color: rgb(35, 36, 42);
  padding-left: 20px;
  padding-right: 20px;
}

html body .callout[data-callout="abstract"] {
  --callout-color: 74, 176, 255;
  background-color: rgba(74, 176, 255, 0.1);
  border-bottom-color: rgba(74, 176, 255, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 176, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(74, 176, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(74, 176, 255, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 252, 95, 142;
  background-color: rgba(252, 95, 142, 0.1);
  border-bottom-color: rgba(252, 95, 142, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(252, 95, 142, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(252, 95, 142, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(252, 95, 142, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 255, 74, 74;
  background-color: rgba(255, 74, 74, 0.1);
  border-bottom-color: rgba(255, 74, 74, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 74, 74, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(255, 74, 74, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(255, 74, 74, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html body .callout[data-callout="example"] {
  --callout-color: 184, 148, 255;
  background-color: rgba(184, 148, 255, 0.1);
  border-bottom-color: rgba(184, 148, 255, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(184, 148, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(184, 148, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(184, 148, 255, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 255, 74, 74;
  background-color: rgba(255, 74, 74, 0.1);
  border-bottom-color: rgba(255, 74, 74, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 74, 74, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(255, 74, 74, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(255, 74, 74, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html body .callout[data-callout="info"] {
  --callout-color: 74, 176, 255;
  background-color: rgba(74, 176, 255, 0.1);
  border-bottom-color: rgba(74, 176, 255, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 176, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(74, 176, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(74, 176, 255, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html body .callout[data-callout="note"] {
  --callout-color: 207, 227, 255;
  background-color: rgba(207, 227, 255, 0.1);
  border-bottom-color: rgba(207, 227, 255, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(207, 227, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(207, 227, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(207, 227, 255, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html body .callout[data-callout="question"] {
  --callout-color: 255, 128, 183;
  background-color: rgba(255, 128, 183, 0.1);
  border-bottom-color: rgba(255, 128, 183, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 128, 183, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(255, 128, 183, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(255, 128, 183, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 184, 148, 255;
  background-color: rgba(184, 148, 255, 0.1);
  border-bottom-color: rgba(184, 148, 255, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(184, 148, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(184, 148, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(184, 148, 255, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html body .callout[data-callout="success"] {
  --callout-color: 77, 224, 185;
  background-color: rgba(77, 224, 185, 0.1);
  border-bottom-color: rgba(77, 224, 185, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(77, 224, 185, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(77, 224, 185, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(77, 224, 185, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 244, 138, 74;
  background-color: rgba(244, 138, 74, 0.1);
  border-bottom-color: rgba(244, 138, 74, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(244, 138, 74, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(244, 138, 74, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(244, 138, 74, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 170, 230, 89;
  background-color: rgba(170, 230, 89, 0.1);
  border-bottom-color: rgba(170, 230, 89, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(170, 230, 89, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(170, 230, 89, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(170, 230, 89, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 244, 138, 74;
  background-color: rgba(244, 138, 74, 0.1);
  border-bottom-color: rgba(244, 138, 74, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(244, 138, 74, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(244, 138, 74, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(244, 138, 74, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}`,
    search: `html body .search > .search-button {
  background-color: rgb(30, 31, 36);
  border-bottom-color: rgb(67, 72, 81);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(67, 72, 81);
  border-right-color: rgb(67, 72, 81);
  border-top-color: rgb(67, 72, 81);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(185, 195, 223);
  font-family: "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(45, 48, 57);
  border-bottom-color: rgba(100, 100, 100, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(100, 100, 100, 0.25);
  border-right-color: rgba(100, 100, 100, 0.25);
  border-top-color: rgba(100, 100, 100, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: rgba(14, 11, 11, 0.5) 0px 3px 12px -2px, rgba(0, 0, 0, 0.447) 0px 2px 2.3px -52px, rgba(0, 0, 0, 0.6) 0px 5.6px 6.3px -52px, rgba(0, 0, 0, 0.85) 0px 13.6px 15.1px -52px, rgb(0, 0, 0) 0px 45px 50px -52px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(114, 195, 213);
  font-family: "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
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

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(114, 195, 213);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(114, 195, 213);
}

html body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(100, 100, 100, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(100, 100, 100, 0.25);
  border-right-color: rgba(100, 100, 100, 0.25);
  border-top-color: rgba(100, 100, 100, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(30, 31, 36);
  border-bottom-color: rgb(67, 72, 81);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(67, 72, 81);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(67, 72, 81);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(67, 72, 81);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 0px 1px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0);
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

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(114, 195, 213);
}

html body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0.15);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(114, 213, 165);
}

html body h1 {
  color: rgb(217, 214, 23);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(184, 148, 255);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, h2.page-title a {
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(13, 200, 242);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(114, 213, 165);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(185, 195, 223);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(159, 167, 188);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body hr {
  border-bottom-color: rgb(30, 31, 36);
  border-left-color: rgb(30, 31, 36);
  border-right-color: rgb(30, 31, 36);
  border-right-width: 2px;
}`,
    scrollbars: `html body .callout {
  --callout-color: 207, 227, 255;
  border-bottom-color: rgba(207, 227, 255, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(207, 227, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(207, 227, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(207, 227, 255, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body ::-webkit-scrollbar {
  background: rgb(45, 48, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(45, 48, 57);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(45, 48, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(45, 48, 57);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(45, 48, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(45, 48, 57);
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(45, 48, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(45, 48, 57);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(45, 48, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(45, 48, 57);
}

html body ::-webkit-scrollbar-track {
  background: rgb(45, 48, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(45, 48, 57);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(160, 167, 187);
  cursor: pointer;
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(160, 167, 187);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(160, 167, 187);
  cursor: pointer;
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(160, 167, 187);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(160, 167, 187);
  cursor: pointer;
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  cursor: pointer;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(124, 132, 156);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(124, 132, 156);
  border-right-color: rgb(124, 132, 156);
  border-top-color: rgb(124, 132, 156);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(124, 132, 156);
  cursor: pointer;
}`,
    footer: `html body footer {
  background-color: rgb(30, 31, 36);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(160, 167, 187);
  text-decoration: rgb(160, 167, 187);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(185, 195, 223);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
  color: rgb(185, 195, 223);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(160, 167, 187);
  text-decoration: rgb(160, 167, 187);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
}

html body li.section-li > .section .meta {
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(160, 167, 187);
  text-decoration: rgb(160, 167, 187);
}

html body ul.section-ul {
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(124, 132, 156);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(124, 132, 156);
  border-right-color: rgb(124, 132, 156);
  border-top-color: rgb(124, 132, 156);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(124, 132, 156);
  cursor: pointer;
}

html body .darkmode svg {
  color: rgb(124, 132, 156);
  stroke: rgb(124, 132, 156);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(160, 167, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(160, 167, 187);
  border-right-color: rgb(160, 167, 187);
  border-top-color: rgb(160, 167, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(160, 167, 187);
}

html body .breadcrumb-element p {
  color: rgb(124, 132, 156);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
  color: rgb(114, 195, 213);
}

html body .metadata {
  border-bottom-color: rgba(100, 100, 100, 0.25);
  border-left-color: rgba(100, 100, 100, 0.25);
  border-right-color: rgba(100, 100, 100, 0.25);
  border-top-color: rgba(100, 100, 100, 0.25);
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(160, 167, 187);
  border-left-color: rgb(160, 167, 187);
  border-right-color: rgb(160, 167, 187);
  border-top-color: rgb(160, 167, 187);
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(30, 31, 36);
}

html body .page-header h2.page-title {
  color: rgb(185, 195, 223);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  border-bottom-color: rgb(67, 72, 81);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 72, 81);
  border-left-width: 1px;
  border-right-color: rgb(67, 72, 81);
  border-right-width: 1px;
  border-top-color: rgb(67, 72, 81);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(160, 167, 187);
  font-family: "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
}

html body kbd {
  background-color: rgb(35, 36, 42);
  border-bottom-color: rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.15);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.15);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 0px 1px;
  color: rgb(224, 228, 235);
  font-family: "DM Mono", "Fira Code", Courier, monospace;
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
}

html body sup {
  color: rgb(114, 195, 213);
}`,
  },
  light: {},
};
