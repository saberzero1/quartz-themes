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
  --background-modifier-active-hover: hsl(230, 8%, 10%) !important;
  --background-modifier-border: rgba(100, 100, 100, 0.25) !important;
  --background-modifier-border-focus: hsl(59, 71%, 68%) !important;
  --background-modifier-border-hover: rgba(255, 255, 255, 0.25) !important;
  --background-modifier-form-field: hsl(230, 9%, 13%) !important;
  --background-modifier-form-field-hover: hsl(230, 9%, 13%) !important;
  --background-modifier-hover: transparent !important;
  --background-modifier-success: #44CF6E !important;
  --background-primary: hsl(225, 12%, 20%) !important;
  --background-primary-alt: hsl(231, 9%, 15%) !important;
  --background-secondary: hsl(230, 9%, 13%) !important;
  --background-secondary-alt: hsl(230, 9%, 13%) !important;
  --bases-cards-background: hsl(225, 12%, 20%) !important;
  --bases-cards-cover-background: hsl(231, 9%, 15%) !important;
  --bases-cards-radius: 2px !important;
  --bases-cards-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgba(255, 255, 255, 0.25) !important;
  --bases-embed-border-color: rgba(100, 100, 100, 0.25) !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: hsl(224, 17%, 68%) !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-table-border-color: hsl(219, 10%, 29%) !important;
  --bases-table-cell-background-active: hsl(225, 12%, 20%) !important;
  --bases-table-cell-background-disabled: hsl(231, 9%, 15%) !important;
  --bases-table-cell-background-selected: hsla(263,
              46%,
              61%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(59, 71%, 68%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(225, 14%, 40%) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: hsl(231, 9%, 15%) !important;
  --bases-table-header-background: hsl(225, 12%, 20%) !important;
  --bases-table-header-background-hover: transparent !important;
  --bases-table-header-color: hsl(224, 17%, 68%) !important;
  --bases-table-row-background-hover: rgba(0, 0, 0, 0.3) !important;
  --bases-table-summary-background: hsl(225, 12%, 20%) !important;
  --bases-table-summary-background-hover: transparent !important;
  --blockquote-border-color: hsl(263, 46%, 61%) !important;
  --blur-background: color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent) linear-gradient(hsl(230, 8%, 10%), color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent)) !important;
  --bodyFont: DM Sans, Inter, -apple-system
    BlinkMacSystemFont, Segoe UI, Ubuntu,
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsl(51, 55%, 69%) !important;
  --bold-italic-color: hsl(225, 17%, 88%) !important;
  --bold-weight: 700 !important;
  --border-300: rgba(255, 255, 255, 0.25) !important;
  --border-500: rgba(100, 100, 100, 0.25) !important;
  --border-700: rgba(0, 0, 0, 0.15) !important;
  --border-900: hsl(219, 10%, 29%) !important;
  --button-radius: 2px !important;
  --callout-border-opacity: 0.3;
  --callout-border-width: 1px;
  --callout-content-padding: 0 20px;
  --callout-padding: 0 0 0 0;
  --callout-radius: 2px;
  --callout-title-background: transparent;
  --canvas-background: hsl(225, 12%, 20%) !important;
  --canvas-card-label-color: hsl(225, 14%, 55%) !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: hsl(225, 18%, 25%) !important;
  --caret-color: hsl(224, 37%, 80%) !important;
  --checkbox-border-color: hsl(219, 10%, 29%) !important;
  --checkbox-border-color-hover: hsl(219, 10%, 29%) !important;
  --checkbox-color: transparent !important;
  --checkbox-color-hover: transparent !important;
  --checkbox-marker-color: hsl(225, 14%, 55%) !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: hsl(225, 15%, 61%) !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 2px !important;
  --code-background: hsl(231, 9%, 15%) !important;
  --code-border-color: rgba(100, 100, 100, 0.25) !important;
  --code-bracket-background: transparent !important;
  --code-comment: hsl(225, 17%, 84%) !important;
  --code-function: hsl(334, 37%, 65%) !important;
  --code-important: hsl(220, 23%, 90%) !important;
  --code-keyword: hsl(263, 37%, 69%) !important;
  --code-normal: hsl(224, 37%, 80%) !important;
  --code-property: hsl(61, 46%, 69%) !important;
  --code-punctuation: hsl(225, 14%, 40%) !important;
  --code-radius: 0px !important;
  --code-string: hsl(124, 54%, 75%) !important;
  --code-tag: hsl(334, 37%, 65%) !important;
  --code-value: hsl(183, 29%, 62%) !important;
  --codeFont: DM Mono, Fira Code, Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(225, 14%, 55%) !important;
  --collapse-icon-color-collapsed: hsl(224, 37%, 80%) !important;
  --color-accent: hsl(263, 46%, 61%) !important;
  --color-accent-1: hsl(263, 46%, 57.2%) !important;
  --color-accent-2: hsl(263, 46%, 64.8%) !important;
  --color-accent-hsl: 263,
              46%,
              61% !important;
  --color-base-00: hsl(230, 8%, 10%) !important;
  --color-base-10: hsl(230, 9%, 13%) !important;
  --color-base-100: hsl(224, 37%, 80%) !important;
  --color-base-20: hsl(231, 9%, 15%) !important;
  --color-base-25: hsl(225, 12%, 20%) !important;
  --color-base-30: hsl(225, 18%, 25%) !important;
  --color-base-35: hsl(225, 11%, 36%) !important;
  --color-base-40: hsl(225, 14%, 55%) !important;
  --color-base-50: hsl(226, 10%, 47%) !important;
  --color-base-60: hsl(224, 17%, 68%) !important;
  --color-base-70: hsl(224, 26%, 70%) !important;
  --color-black: hsl(230, 9%, 13%) !important;
  --color-blacker: hsl(230, 8%, 10%) !important;
  --color-cyan: #53DFDD !important;
  --color-cyan-300: hsl(183, 29%, 62%) !important;
  --color-cyan-500: hsl(192, 46%, 68%) !important;
  --color-cyan-510: hsl(191, 65%, 59%) !important;
  --color-cyan-520: hsl(191, 57%, 59%) !important;
  --color-cyan-530: hsl(191, 54%, 64%) !important;
  --color-cyan-533: hsl(191, 90%, 50%) !important;
  --color-cyan-540: hsl(194, 69%, 54%) !important;
  --color-cyan-555: hsl(175, 85%, 75%) !important;
  --color-cyan-577: hsl(13, 52%, 80%) !important;
  --color-cyan-700: hsl(194, 50%, 47%) !important;
  --color-cyan-900: hsl(196, 27%, 41%) !important;
  --color-cyan-gradient-1: linear-gradient(180deg,
        #82b7ba, #77aeb3, #6da5ac, #629ca5, 
        #5a919c, #558590, #4f7984, #496d79) !important;
  --color-cyan-gradient-2: linear-gradient(180deg, 
        #6de0fd, #5dd6f5, #56d3f2, #4fcfef, 
        #48cceb, #40c8e8, #37c5e5, #2dc1e2) !important;
  --color-gray-10: hsl(225, 17%, 88%) !important;
  --color-gray-100: hsl(231, 9%, 15%) !important;
  --color-gray-15: hsl(225, 17%, 84%) !important;
  --color-gray-20: hsl(224, 37%, 80%) !important;
  --color-gray-30: hsl(224, 26%, 70%) !important;
  --color-gray-40: hsl(224, 17%, 68%) !important;
  --color-gray-48: hsl(225, 15%, 61%) !important;
  --color-gray-50: hsl(226, 10%, 47%) !important;
  --color-gray-60: hsl(225, 14%, 55%) !important;
  --color-gray-70: hsl(225, 11%, 36%) !important;
  --color-gray-75: hsl(225, 11%, 30%) !important;
  --color-gray-80: hsl(225, 18%, 25%) !important;
  --color-gray-90: hsl(225, 12%, 20%) !important;
  --color-gray-95: hsl(228, 10%, 18%) !important;
  --color-green: #44CF6E !important;
  --color-green-300: hsl(151, 100%, 81%) !important;
  --color-green-500: hsl(124, 54%, 75%) !important;
  --color-green-700: hsl(151, 54%, 64%) !important;
  --color-green-710: hsl(151, 54%, 64%) !important;
  --color-green-900: hsl(166, 74%, 45%) !important;
  --color-green-910: hsl(158, 85%, 45%) !important;
  --color-green-920: hsl(167, 83%, 31%) !important;
  --color-green-gradient-1: linear-gradient(180deg,
        #9effd0, #8bfcc9, #79f9c4, #67f4bf, 
        #57efbb, #48e8b7, #39e0b4, #2cd8b0) !important;
  --color-green-gradient-2: linear-gradient(180deg,
        #a2f49a, #89f18d, #79ee8b, #69ea8d, 
        #59e692, #4ae299, #3bdda3, #2cd8b0) !important;
  --color-h3-alt: hsl(226, 95%, 76%) !important;
  --color-h3-green: hsl(148, 47%, 51%) !important;
  --color-h3-orange: hsl(38, 60%, 63%) !important;
  --color-h4-alt: hsl(151, 60%, 55%) !important;
  --color-highlight-bg: rgba(255, 252, 59, 0.08) !important;
  --color-highlight-border: rgba(255, 252, 59, 0.4) !important;
  --color-highlight-text: hsl(191, 54%, 64%) !important;
  --color-magenta-300: hsl(334, 37%, 65%) !important;
  --color-magenta-310: hsl(338, 100%, 87%) !important;
  --color-magenta-500: hsl(338, 100%, 80%) !important;
  --color-magenta-700: hsl(334, 100%, 75%) !important;
  --color-magenta-710: hsl(342, 100%, 74%) !important;
  --color-magenta-900: hsl(317, 62%, 65%) !important;
  --color-magenta-910: hsl(342, 96%, 68%) !important;
  --color-magenta-920: hsl(342, 31%, 34%) !important;
  --color-magenta-gradient-1: linear-gradient(180deg,
        #ffb1ce, #ffa3ca, #f897c4, #f88cc4, 
        #ef7dbe, #ea77be, #e472be, #dd6ebe) !important;
  --color-magenta-gradient-2: linear-gradient(180deg,
        #ff99be, #fc91bd, #f88abd, #f483bd, 
        #ef7dbe, #ea77be, #e472be, #dd6ebe) !important;
  --color-orange: #E9973F !important;
  --color-orange-300: hsl(28, 93%, 66%) !important;
  --color-orange-310: hsl(28, 63%, 66%) !important;
  --color-orange-500: hsl(28, 43%, 47%) !important;
  --color-pink: #FA99CD !important;
  --color-purple-300: hsl(255, 49%, 76%) !important;
  --color-purple-333: hsl(245, 37%, 80%) !important;
  --color-purple-500: hsl(255, 100%, 86%) !important;
  --color-purple-555: hsl(255, 100%, 86%) !important;
  --color-purple-577: hsl(255, 100%, 86%) !important;
  --color-purple-700: hsl(260, 100%, 79%) !important;
  --color-purple-900: hsl(263, 46%, 61%) !important;
  --color-purple-910: hsl(263, 37%, 69%) !important;
  --color-purple-920: hsl(263, 39%, 46%) !important;
  --color-purple-gradient-1: linear-gradient(180deg,
        #d9ccff, #d2c4ff, #cbbcff, #c4b4ff,
        #bdabff, #b5a3ff, #ad9bff, #a593ff) !important;
  --color-purple-gradient-2: linear-gradient(180deg,
        #d9ccff, #ccbafc, #c0a9f8, #b59af2, 
        #ab8cea, #a281e1, #9977d6, #916ec9) !important;
  --color-red-300: hsl(3, 93%, 66%) !important;
  --color-red-500: hsl(3, 43%, 47%) !important;
  --color-slate-300: hsl(220, 23%, 90%) !important;
  --color-slate-500: hsl(224, 37%, 80%) !important;
  --color-slate-700: hsl(223, 18%, 68%) !important;
  --color-slate-900: hsl(225, 14%, 40%) !important;
  --color-slate-gradient-1: linear-gradient(180deg,
        #eff1f5, #e3e6ed, #d7dce5, #ccd1dd, 
        #c0c7d5, #b5bccd, #aab2c5, #9fa7bc) !important;
  --color-slate-gradient-2: linear-gradient(180deg, 
        #b9c3df, #aab4cf, #9ca5bf, #8e97b0, 
        #8c96b1, #828ba5, #70778f, #656d85) !important;
  --color-white: hsl(220, 23%, 95%) !important;
  --color-yellow: #E0DE71 !important;
  --color-yellow-300: hsl(61, 100%, 75%) !important;
  --color-yellow-310: hsl(61, 46%, 69%) !important;
  --color-yellow-355: hsl(61, 55%, 69%) !important;
  --color-yellow-500: hsl(59, 71%, 68%) !important;
  --color-yellow-510: hsl(59, 51%, 68%) !important;
  --color-yellow-700: hsl(58, 86%, 66%) !important;
  --color-yellow-900: hsl(59, 81%, 47%) !important;
  --color-yellow-gradient-1: linear-gradient(180deg,
        #fcff80, #fafd6b, #f9fb57, #f6f843, 
        #f4f430, #f0ef1e, #e4e213, #ccc914) !important;
  --color-yellow-gradient-2: linear-gradient(-90deg,
        #f3ee5e, #f1ec50, #f0eb41, #eee933, 
        #ece725, #eae516, #dbd815, #ccc914) !important;
  --color-yellowish-355: hsl(51, 55%, 69%) !important;
  --comment-color: hsl(225, 17%, 84%) !important;
  --comment-h1: hsl(56, 44%, 76%) !important;
  --comment-h2: hsl(257, 33%, 82%) !important;
  --comment-h3: hsl(192, 34%, 74%) !important;
  --comment-h4: hsl(153, 35%, 75%) !important;
  --comment-h5: hsl(224, 26%, 83%) !important;
  --comment-h6: hsl(223, 14%, 75%) !important;
  --cursor: pointer !important;
  --dark: hsl(224, 37%, 80%) !important;
  --darkgray: hsl(224, 37%, 80%) !important;
  --divider-color: hsl(230, 9%, 13%) !important;
  --divider-color-hover: hsl(226, 10%, 47%) !important;
  --divider-vertical-height: calc(100% - 40px) !important;
  --divider-width: 2px !important;
  --drag-ghost-background: hsl(225, 12%, 20%) !important;
  --drag-ghost-text-color: hsl(191, 54%, 64%) !important;
  --dropdown-background: hsl(230, 8%, 10%) !important;
  --dropdown-background-hover: hsl(225, 11%, 36%) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(100, 100, 100, 0.25), inset 0 0 0 1px rgba(100, 100, 100, 0.25) !important;
  --embed-border-left: 2px solid hsl(28, 43%, 47%) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid hsl(225, 14%, 40%) !important;
  --embed-padding: 0 0 0 20px !important;
  --file-header-background: hsl(225, 12%, 20%) !important;
  --file-header-background-focused: hsl(225, 12%, 20%) !important;
  --file-header-font: DM Sans, Inter, -apple-system
    BlinkMacSystemFont, Segoe UI, Ubuntu,
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 16px !important;
  --file-header-font-weight: 500 !important;
  --file-margins: 32px !important;
  --flair-background: hsl(230, 8%, 10%) !important;
  --flair-color: hsl(224, 37%, 80%) !important;
  --font-big: 1.15em !important;
  --font-body: 1em !important;
  --font-interface: DM Sans, Inter, -apple-system
    BlinkMacSystemFont, Segoe UI, Ubuntu,
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif !important;
  --font-mermaid: DM Sans, Inter, -apple-system
    BlinkMacSystemFont, Segoe UI, Ubuntu,
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mono: 'DM Mono', 'Fira Code', Courier, monospace !important;
  --font-monospace: DM Mono, Fira Code, Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'DM Mono', 'Fira Code', Courier, monospace !important;
  --font-print: DM Sans, Inter, -apple-system
    BlinkMacSystemFont, Segoe UI, Ubuntu,
    Helvetica, Arial, sans-serif, Arial' !important;
  --font-sans: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif !important;
  --font-smallish: 0.89em !important;
  --font-text: DM Sans, Inter, -apple-system
    BlinkMacSystemFont, Segoe UI, Ubuntu,
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif !important;
  --font-ui-large: 24px !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --footnote-divider-color: rgba(100, 100, 100, 0.25) !important;
  --footnote-id-color: hsl(224, 17%, 68%) !important;
  --footnote-id-color-no-occurrences: hsl(225, 14%, 55%) !important;
  --footnote-input-background-active: transparent !important;
  --footnote-line-height: 1.58 !important;
  --footnote-radius: 0px !important;
  --graph-color-line: hsl(196, 27%, 41%) !important;
  --graph-color-line-hover: hsl(224, 17%, 68%) !important;
  --graph-color-node-border-hover: hsl(220, 23%, 95%) !important;
  --graph-color-node-hover: hsl(317, 62%, 65%) !important;
  --graph-line: hsl(196, 27%, 41%) !important;
  --graph-node: hsl(58, 86%, 66%) !important;
  --graph-node-attachment: hsl(220, 23%, 90%) !important;
  --graph-node-focused: hsl(225, 14%, 55%) !important;
  --graph-node-tag: hsl(194, 50%, 47%) !important;
  --graph-node-unresolved: hsl(263, 46%, 61%) !important;
  --graph-text: hsl(225, 17%, 88%) !important;
  --gray: hsl(224, 17%, 68%) !important;
  --h1-color: hsl(59, 81%, 47%) !important;
  --h1-size: 1.55rem !important;
  --h2-color: hsl(260, 100%, 79%) !important;
  --h2-size: 1.45rem !important;
  --h2-weight: 600 !important;
  --h3-color: hsl(191, 90%, 50%) !important;
  --h3-size: 1.35rem !important;
  --h3-weight: 600 !important;
  --h4-color: hsl(151, 54%, 64%) !important;
  --h4-size: 1.25rem !important;
  --h4-weight: 600 !important;
  --h5-color: hsl(224, 37%, 80%) !important;
  --h5-size: 1.15rem !important;
  --h5-weight: 600 !important;
  --h6-color: hsl(223, 18%, 68%) !important;
  --h6-size: 1.05rem !important;
  --header-shadow-color: rgb(31, 31, 31) !important;
  --header-shadow-size: 0px 4px 3px !important;
  --headerFont: DM Sans, Inter, -apple-system
    BlinkMacSystemFont, Segoe UI, Ubuntu,
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: rgba(255, 252, 59, 0.08) !important;
  --hr-color: hsl(219, 10%, 29%) !important;
  --hr-thickness: 1px !important;
  --icon-color: hsl(225, 14%, 55%) !important;
  --icon-color-active: hsl(260, 100%, 79%) !important;
  --icon-color-focused: hsl(260, 100%, 79%) !important;
  --icon-color-hover: hsl(260, 100%, 79%) !important;
  --icon-opacity: 1 !important;
  --indentation-guide: hsl(219, 10%, 29%) !important;
  --indentation-guide-active: rgba(255, 255, 255, 0.25) !important;
  --inline-title-size: 1.55rem !important;
  --input-date-separator: hsl(225, 14%, 55%) !important;
  --input-placeholder-color: hsl(225, 14%, 55%) !important;
  --input-radius: 2px !important;
  --input-shadow: 0px 1px 0px 1px rgba(0, 0, 0, 0.15) !important;
  --input-shadow-hover: 0px 1px 0px 1px rgba(0, 0, 0, 0.15) !important;
  --interactive-accent: hsl(225, 14%, 40%) !important;
  --interactive-accent-hover: hsl(223, 18%, 68%) !important;
  --interactive-accent-hsl: 255, 14%, 40% !important;
  --interactive-hover: hsl(225, 11%, 36%) !important;
  --interactive-normal: hsl(230, 8%, 10%) !important;
  --italic-color: hsl(255, 100%, 86%) !important;
  --light: hsl(225, 12%, 20%) !important;
  --lightgray: hsl(230, 9%, 13%) !important;
  --line-height-normal: 1.58 !important;
  --link-color: hsl(334, 100%, 75%) !important;
  --link-color-hover: hsl(334, 100%, 75%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsl(334, 100%, 75%) !important;
  --link-external-color-hover: hsl(334, 100%, 75%) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: hsl(334, 100%, 75%) !important;
  --link-unresolved-decoration-color: hsla(255, 14%, 40%, 0.5) !important;
  --link-unresolved-opacity: 0.65 !important;
  --list-bullet-size: 5px !important;
  --list-indent: 1.75em !important;
  --list-marker-color: hsl(263, 37%, 69%) !important;
  --list-marker-color-collapsed: hsl(224, 37%, 80%) !important;
  --list-marker-color-hover: hsl(263, 37%, 69%) !important;
  --menu-background: hsl(230, 9%, 13%) !important;
  --menu-border-color: rgba(255, 255, 255, 0.25) !important;
  --menu-radius: 2px !important;
  --menu-shadow: 0px 3px 12px -2px rgba(14, 11, 11, 0.5) !important;
  --metadata-border-color: rgba(100, 100, 100, 0.25) !important;
  --metadata-divider-color: rgba(100, 100, 100, 0.25) !important;
  --metadata-input-background-active: transparent !important;
  --metadata-input-font: DM Sans, Inter, -apple-system
    BlinkMacSystemFont, Segoe UI, Ubuntu,
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(224, 37%, 80%) !important;
  --metadata-label-background-active: transparent !important;
  --metadata-label-font: DM Sans, Inter, -apple-system
    BlinkMacSystemFont, Segoe UI, Ubuntu,
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(224, 17%, 68%) !important;
  --metadata-label-text-color-hover: hsl(224, 17%, 68%) !important;
  --metadata-property-background-active: transparent !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(59, 71%, 68%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgba(255, 255, 255, 0.25) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: hsl(225, 12%, 20%) !important;
  --modal-border-color: rgba(100, 100, 100, 0.25) !important;
  --modal-height: 90vh !important;
  --modal-max-height: 1100px !important;
  --modal-max-width: 1000px !important;
  --modal-radius: 2px !important;
  --modal-width: 80vw !important;
  --nav-collapse-icon-color: hsl(225, 14%, 55%) !important;
  --nav-collapse-icon-color-collapsed: hsl(225, 14%, 55%) !important;
  --nav-heading-color: hsl(224, 37%, 80%) !important;
  --nav-heading-color-collapsed: hsl(225, 14%, 55%) !important;
  --nav-heading-color-collapsed-hover: hsl(224, 17%, 68%) !important;
  --nav-heading-color-hover: hsl(224, 37%, 80%) !important;
  --nav-item-background-active: hsl(225, 12%, 20%) !important;
  --nav-item-background-hover: hsl(225, 12%, 20%) !important;
  --nav-item-background-selected: hsla(263,
              46%,
              61%, 0.15) !important;
  --nav-item-color: hsl(224, 17%, 68%) !important;
  --nav-item-color-active: hsl(192, 46%, 68%) !important;
  --nav-item-color-highlighted: hsl(220, 23%, 95%) !important;
  --nav-item-color-hover: hsl(192, 46%, 68%) !important;
  --nav-item-color-selected: hsl(224, 37%, 80%) !important;
  --nav-item-radius: 0px !important;
  --nav-item-size: 14px !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: hsl(225, 14%, 55%) !important;
  --nav-tag-color-active: hsl(224, 17%, 68%) !important;
  --nav-tag-color-hover: hsl(224, 17%, 68%) !important;
  --nav-tag-radius: 0px !important;
  --opacity-translucency: 0.75 !important;
  --pdf-background: hsl(225, 12%, 20%) !important;
  --pdf-page-background: hsl(225, 12%, 20%) !important;
  --pdf-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25) !important;
  --pdf-sidebar-background: hsl(225, 12%, 20%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25) !important;
  --pill-border-color: rgba(100, 100, 100, 0.25) !important;
  --pill-border-color-hover: rgba(255, 255, 255, 0.25) !important;
  --pill-color: hsl(224, 17%, 68%) !important;
  --pill-color-hover: hsl(224, 37%, 80%) !important;
  --pill-color-remove: hsl(225, 14%, 55%) !important;
  --pill-color-remove-hover: hsl(224, 37%, 80%) !important;
  --popover-height: 550px !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: hsl(225, 12%, 20%) !important;
  --prompt-border-color: rgba(100, 100, 100, 0.25) !important;
  --radius-l: 4px !important;
  --radius-m: 2px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent) linear-gradient(hsl(230, 8%, 10%), color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent)) !important;
  --ribbon-background: hsl(230, 9%, 13%) !important;
  --ribbon-background-collapsed: hsl(230, 9%, 13%) !important;
  --ribbon-padding: 8px 4px 8px 4px !important;
  --scrollbar-active-thumb-bg: hsl(230, 9%, 13%) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-radius: 4px !important;
  --scrollbar-thumb-bg: hsl(231, 9%, 15%) !important;
  --search-clear-button-color: hsl(224, 17%, 68%) !important;
  --search-icon-color: hsl(224, 17%, 68%) !important;
  --search-result-background: hsl(225, 12%, 20%) !important;
  --secondary: hsl(224, 37%, 80%) !important;
  --setting-group-heading-color: hsl(224, 37%, 80%) !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: hsl(231, 9%, 15%) !important;
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
  --status-bar-background: hsl(230, 9%, 13%) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-border-width: 0 0 0 0 !important;
  --status-bar-font-size: 13px !important;
  --status-bar-position: relative !important;
  --status-bar-radius: 0 0 0 0 !important;
  --status-bar-text-color: hsl(224, 17%, 68%) !important;
  --strikethrough-color: hsl(225, 14%, 55%) !important;
  --suggestion-background: hsl(225, 12%, 20%) !important;
  --sync-avatar-color-2: #E9973F !important;
  --sync-avatar-color-3: #E0DE71 !important;
  --sync-avatar-color-4: #44CF6E !important;
  --sync-avatar-color-5: #53DFDD !important;
  --sync-avatar-color-8: #FA99CD !important;
  --tab-background-active: hsl(225, 12%, 20%) !important;
  --tab-container-background: hsl(230, 9%, 13%) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: rgba(100, 100, 100, 0.25) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: transparent !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: hsl(230, 9%, 13%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 9%, 13%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(263, 46%, 61%) !important;
  --tab-text-color: hsl(192, 46%, 68%) !important;
  --tab-text-color-active: hsl(224, 17%, 68%) !important;
  --tab-text-color-focused: hsl(225, 14%, 55%) !important;
  --tab-text-color-focused-active: hsl(220, 23%, 95%) !important;
  --tab-text-color-focused-active-current: hsl(224, 37%, 80%) !important;
  --tab-text-color-focused-highlighted: hsl(224, 37%, 80%) !important;
  --table-add-button-border-color: rgba(100, 100, 100, 0.25) !important;
  --table-border-color: hsl(219, 10%, 29%) !important;
  --table-drag-handle-background-active: hsl(225, 14%, 40%) !important;
  --table-drag-handle-color: hsl(225, 14%, 55%) !important;
  --table-drag-handle-color-active: hsl(220, 23%, 95%) !important;
  --table-header-background: hsl(231, 9%, 15%) !important;
  --table-header-background-hover: hsl(231, 9%, 15%) !important;
  --table-header-border-color: hsl(219, 10%, 29%) !important;
  --table-header-color: hsl(220, 23%, 90%) !important;
  --table-header-weight: 600 !important;
  --table-row-alt-background: rgba(0, 0, 0, 0.08) !important;
  --table-row-background-hover: rgba(0, 0, 0, 0.3) !important;
  --table-selection: hsla(263,
              46%,
              61%, 0.1) !important;
  --table-selection-border-color: hsl(225, 14%, 40%) !important;
  --table-white-space: normal !important;
  --tag-background: rgba(0, 0, 0, 0.15) !important;
  --tag-background-hover: rgba(0, 0, 0, 0.15) !important;
  --tag-border-color: transparent !important;
  --tag-border-color-hover: transparent !important;
  --tag-color: hsl(151, 54%, 64%) !important;
  --tag-color-hover: hsl(151, 54%, 64%) !important;
  --tag-padding-y: 0.2em !important;
  --tertiary: hsl(220, 23%, 95%) !important;
  --text-accent: hsl(224, 37%, 80%) !important;
  --text-accent-hover: hsl(220, 23%, 95%) !important;
  --text-error: hsl(342, 96%, 68%) !important;
  --text-faint: hsl(225, 14%, 55%) !important;
  --text-faintly-muted: hsl(225, 15%, 61%) !important;
  --text-highlight-bg: rgba(255, 252, 59, 0.08) !important;
  --text-highlight-bg-active: rgba(255, 252, 59, 0.08) !important;
  --text-muted: hsl(224, 17%, 68%) !important;
  --text-normal: hsl(224, 37%, 80%) !important;
  --text-on-accent: hsl(220, 23%, 95%) !important;
  --text-selection: rgba(134, 169, 209, 0.15) !important;
  --text-success: hsl(167, 83%, 31%) !important;
  --text-warning: #E9973F !important;
  --textHighlight: rgba(255, 252, 59, 0.08) !important;
  --titleFont: DM Sans, Inter, -apple-system
    BlinkMacSystemFont, Segoe UI, Ubuntu,
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(230, 9%, 13%) !important;
  --titlebar-background-focused: hsl(230, 9%, 13%) !important;
  --titlebar-border-color: rgba(100, 100, 100, 0.25) !important;
  --titlebar-text-color: hsl(225, 14%, 55%) !important;
  --titlebar-text-color-focused: hsl(225, 14%, 55%) !important;
  --titlebar-text-color-highlighted: hsl(220, 23%, 95%) !important;
  --titlebar-text-weight: 400 !important;
  --toggle-border-width: 3px !important;
  --toggle-radius: 3px !important;
  --toggle-s-border-width: 3px !important;
  --toggle-s-thumb-height: 18px !important;
  --toggle-s-thumb-width: 18px !important;
  --toggle-s-width: 42px !important;
  --toggle-thumb-color: hsl(220, 23%, 95%) !important;
  --toggle-thumb-radius: 2px !important;
  --toggle-width: 42px !important;
  --vault-name-color: hsl(224, 37%, 80%) !important;
  --vault-name-font-size: 14px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: hsl(224, 37%, 80%) !important;
  --vault-profile-color-hover: hsl(224, 37%, 80%) !important;
  --vault-profile-font-size: 14px !important;
  --window-border: 1px solid hsl(225, 11%, 36%) !important;
  --window-border-color: hsl(225, 11%, 36%) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 31, 36);
  color: rgb(185, 195, 223);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(45, 48, 57);
  color: rgb(185, 195, 223);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.08);
}

html body .bases-table thead th {
  border-color: rgb(67, 72, 81);
  color: rgb(224, 228, 235);
}

html body .canvas-node {
  border-color: rgb(185, 195, 223);
}

html body .canvas-node-content {
  color: rgb(185, 195, 223);
}

html body .canvas-node-file {
  color: rgb(114, 195, 213);
}

html body .canvas-node-group {
  border-color: rgb(185, 195, 223);
}

html body .canvas-sidebar {
  background-color: rgb(30, 31, 36);
  border-color: rgb(185, 195, 223);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 0px 1px;
}

html body .note-properties {
  border-color: rgba(100, 100, 100, 0.25);
}

html body .note-properties-key {
  color: rgb(160, 167, 187);
}

html body .note-properties-row {
  border-color: rgb(160, 167, 187);
}

html body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0.15);
  color: rgb(114, 213, 165);
}

html body .note-properties-value {
  color: rgb(160, 167, 187);
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
    typography: `html body .page article p > b, html b {
  color: rgb(219, 206, 132);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 206, 132) none 0px;
  text-decoration-color: rgb(219, 206, 132);
}

html body .page article p > em, html em {
  color: rgb(201, 184, 255);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(201, 184, 255) none 0px;
  text-decoration-color: rgb(201, 184, 255);
}

html body .page article p > i, html i {
  color: rgb(201, 184, 255);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(201, 184, 255) none 0px;
  text-decoration-color: rgb(201, 184, 255);
}

html body .page article p > strong, html strong {
  color: rgb(219, 206, 132);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 206, 132) none 0px;
  text-decoration-color: rgb(219, 206, 132);
}

html body .text-highlight {
  background-color: rgba(255, 252, 59, 0.08);
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(114, 195, 213) none 0px;
  text-decoration-color: rgb(114, 195, 213);
}

html body del {
  color: rgb(124, 132, 156);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(124, 132, 156) none 0px;
  text-decoration-color: rgb(124, 132, 156);
}

html body h1.article-title {
  color: rgb(185, 195, 223);
  font-size: 14px;
  font-weight: 500;
}

html body li.task-list-item input[type="checkbox"] {
  background-color: rgb(30, 31, 36);
  border-color: rgb(67, 72, 81);
  border-radius: 2px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(67, 72, 81);
}

html body p {
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(160, 167, 187) none 0px;
  text-decoration-color: rgb(160, 167, 187);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 128, 183);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 183) none 0px;
  text-decoration-color: rgb(255, 128, 183);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 128, 183);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 183) none 0px;
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
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
}

html body ul > li {
  color: rgb(114, 195, 213);
}

html body ul.overflow {
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(124, 132, 156);
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

html body pre > code, html pre:has(> code) {
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
  border-bottom-color: rgb(217, 214, 23);
  border-left-color: rgb(217, 214, 23);
  border-right-color: rgb(217, 214, 23);
  border-top-color: rgb(217, 214, 23);
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
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M5 11h14v2H5z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M5 11h14v2H5z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(0, 0, 0)transform: msFilter:'%3E%3Cpath d='M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(0, 0, 0)transform: msFilter:'%3E%3Cpath d='M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='fill: %237c849c' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='fill: %237c849c' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(45, 48, 57)transform: msFilter:'%3E%3Cpath d='m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(45, 48, 57)transform: msFilter:'%3E%3Cpath d='m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(0, 0, 0)transform: msFilter:'%3E%3Cpath d='M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(0, 0, 0)transform: msFilter:'%3E%3Cpath d='M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 7h14v2H5V7z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 7h14v2H5V7z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M20 3h-1v13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 16h7l-1.122 3.368A2 2 0 0 0 11.775 22H12l5-5.438V3H6l-3.937 8.649-.063.293V14a2 2 0 0 0 2 2z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M20 3h-1v13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 16h7l-1.122 3.368A2 2 0 0 0 11.775 22H12l5-5.438V3H6l-3.937 8.649-.063.293V14a2 2 0 0 0 2 2z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.707 10.293C13.4418 10.2931 13.1875 10.3984 13 10.586L9.99997 13.586L3.70697 7.293L2.29297 8.707L8.99997 15.414C9.18746 15.6015 9.44177 15.7069 9.70697 15.707H10.293C10.5582 15.7069 10.8125 15.6015 11 15.414L14 12.414L18.293 16.707L16 19H22V13L19.707 15.293L15 10.586C14.8125 10.3984 14.5582 10.2931 14.293 10.293H13.707Z' fill='%237c849c'%3E%3C/path%3E%3C/svg%3E%0A");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.707 10.293C13.4418 10.2931 13.1875 10.3984 13 10.586L9.99997 13.586L3.70697 7.293L2.29297 8.707L8.99997 15.414C9.18746 15.6015 9.44177 15.7069 9.70697 15.707H10.293C10.5582 15.7069 10.8125 15.6015 11 15.414L14 12.414L18.293 16.707L16 19H22V13L19.707 15.293L15 10.586C14.8125 10.3984 14.5582 10.2931 14.293 10.293H13.707Z' fill='%237c849c'%3E%3C/path%3E%3C/svg%3E%0A");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M16.5 8c0 1.5-.5 3.5-2.9 4.3.7-1.7.8-3.4.3-5-.7-2.1-3-3.7-4.6-4.6-.4-.3-1.1.1-1 .7 0 1.1-.3 2.7-2 4.4C4.1 10 3 12.3 3 14.5 3 17.4 5 21 9 21c-4-4-1-7.5-1-7.5.8 5.9 5 7.5 7 7.5 1.7 0 5-1.2 5-6.4 0-3.1-1.3-5.5-2.4-6.9-.3-.5-1-.2-1.1.3'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M16.5 8c0 1.5-.5 3.5-2.9 4.3.7-1.7.8-3.4.3-5-.7-2.1-3-3.7-4.6-4.6-.4-.3-1.1.1-1 .7 0 1.1-.3 2.7-2 4.4C4.1 10 3 12.3 3 14.5 3 17.4 5 21 9 21c-4-4-1-7.5-1-7.5.8 5.9 5 7.5 7 7.5 1.7 0 5-1.2 5-6.4 0-3.1-1.3-5.5-2.4-6.9-.3-.5-1-.2-1.1.3'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(0, 0, 0)transform: msFilter:'%3E%3Cpath d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(0, 0, 0)transform: msFilter:'%3E%3Cpath d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.144.206.38.996.591 1.921h-.792v2h8.032v-2h-.79c.213-.927.45-1.719.593-1.925.352-.503.726-.94 1.087-1.363z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.144.206.38.996.591 1.921h-.792v2h8.032v-2h-.79c.213-.927.45-1.719.593-1.925.352-.503.726-.94 1.087-1.363z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='fill: %237c849c' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M282.3 343.7L248.1 376.1C244.5 381.5 238.4 384 232 384H192V424C192 437.3 181.3 448 168 448H128V488C128 501.3 117.3 512 104 512H24C10.75 512 0 501.3 0 488V408C0 401.6 2.529 395.5 7.029 391L168.3 229.7C162.9 212.8 160 194.7 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352C317.3 352 299.2 349.1 282.3 343.7zM376 176C398.1 176 416 158.1 416 136C416 113.9 398.1 96 376 96C353.9 96 336 113.9 336 136C336 158.1 353.9 176 376 176z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='fill: %237c849c' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M282.3 343.7L248.1 376.1C244.5 381.5 238.4 384 232 384H192V424C192 437.3 181.3 448 168 448H128V488C128 501.3 117.3 512 104 512H24C10.75 512 0 501.3 0 488V408C0 401.6 2.529 395.5 7.029 391L168.3 229.7C162.9 212.8 160 194.7 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352C317.3 352 299.2 349.1 282.3 343.7zM376 176C398.1 176 416 158.1 416 136C416 113.9 398.1 96 376 96C353.9 96 336 113.9 336 136C336 158.1 353.9 176 376 176z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 9.99999C4.99858 7.16754 6.70425 4.61338 9.32107 3.52939C11.9379 2.44539 14.9501 3.04523 16.952 5.04899C18.2685 6.3596 19.0059 8.14238 19 9.99999C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 6.99999C10.9282 6.99999 9.93782 7.57179 9.40193 8.49999C8.86603 9.42819 8.86603 10.5718 9.40193 11.5C9.93782 12.4282 10.9282 13 12 13C13.6569 13 15 11.6568 15 9.99999C15 8.34313 13.6569 6.99999 12 6.99999Z' fill='%237c849c'%3E%3C/path%3E%3C/svg%3E%0A");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 9.99999C4.99858 7.16754 6.70425 4.61338 9.32107 3.52939C11.9379 2.44539 14.9501 3.04523 16.952 5.04899C18.2685 6.3596 19.0059 8.14238 19 9.99999C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 6.99999C10.9282 6.99999 9.93782 7.57179 9.40193 8.49999C8.86603 9.42819 8.86603 10.5718 9.40193 11.5C9.93782 12.4282 10.9282 13 12 13C13.6569 13 15 11.6568 15 9.99999C15 8.34313 13.6569 6.99999 12 6.99999Z' fill='%237c849c'%3E%3C/path%3E%3C/svg%3E%0A");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(0, 0, 0)transform: msFilter:'%3E%3Cpath d='M15 11.586V6h2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2h2v5.586l-2.707 1.707A.996.996 0 0 0 6 14v2a1 1 0 0 0 1 1h4v3l1 2 1-2v-3h4a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L15 11.586z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(0, 0, 0)transform: msFilter:'%3E%3Cpath d='M15 11.586V6h2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2h2v5.586l-2.707 1.707A.996.996 0 0 0 6 14v2a1 1 0 0 0 1 1h4v3l1 2 1-2v-3h4a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L15 11.586z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 14.915V18h-2v-1.08c-2.339-.367-3-2.002-3-2.92h2c.011.143.159 1 2 1 1.38 0 2-.585 2-1 0-.324 0-1-2-1-3.48 0-4-1.88-4-3 0-1.288 1.029-2.584 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .516-2 1 0 .374 0 1 2 1 3.48 0 4 1.88 4 3 0 1.288-1.029 2.584-3 2.915z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 14.915V18h-2v-1.08c-2.339-.367-3-2.002-3-2.92h2c.011.143.159 1 2 1 1.38 0 2-.585 2-1 0-.324 0-1-2-1-3.48 0-4-1.88-4-3 0-1.288 1.029-2.584 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .516-2 1 0 .374 0 1 2 1 3.48 0 4 1.88 4 3 0 1.288-1.029 2.584-3 2.915z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 13.414C13.1875 13.6015 13.4418 13.7069 13.707 13.707H14.293C14.5582 13.7069 14.8125 13.6015 15 13.414L19.707 8.707L22 11V5H16L18.293 7.293L14 11.586L11 8.586C10.8125 8.39845 10.5582 8.29306 10.293 8.293H9.70697C9.44177 8.29306 9.18746 8.39845 8.99997 8.586L2.29297 15.293L3.70697 16.707L9.99997 10.414L13 13.414Z' fill='%237c849c'%3E%3C/path%3E%3C/svg%3E%0A");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 13.414C13.1875 13.6015 13.4418 13.7069 13.707 13.707H14.293C14.5582 13.7069 14.8125 13.6015 15 13.414L19.707 8.707L22 11V5H16L18.293 7.293L14 11.586L11 8.586C10.8125 8.39845 10.5582 8.29306 10.293 8.293H9.70697C9.44177 8.29306 9.18746 8.39845 8.99997 8.586L2.29297 15.293L3.70697 16.707L9.99997 10.414L13 13.414Z' fill='%237c849c'%3E%3C/path%3E%3C/svg%3E%0A");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M23 7a8.44 8.44 0 0 0-5 1.31c-.36-.41-.73-.82-1.12-1.21l-.29-.27.14-.12a3.15 3.15 0 0 0 .9-3.49A3.9 3.9 0 0 0 14 1v2a2 2 0 0 1 1.76 1c.17.4 0 .84-.47 1.31l-.23.21a16.71 16.71 0 0 0-3.41-2.2c-2.53-1.14-3.83-.61-4.47 0a2.18 2.18 0 0 0-.46.68l-.18.53L5.1 8.87C6.24 11.71 9 16.76 15 18.94l5-1.66a1 1 0 0 0 .43-.31l.21-.18c1.43-1.44.51-4.21-1.41-6.9A6.63 6.63 0 0 1 23 9zm-3.79 8.37h-.06c-.69.37-3.55-.57-6.79-3.81-.34-.34-.66-.67-.95-1-.1-.11-.19-.23-.29-.35l-.53-.64-.28-.39c-.14-.19-.28-.38-.4-.56s-.16-.26-.24-.39-.22-.34-.31-.51-.13-.24-.19-.37-.17-.28-.23-.42-.09-.23-.14-.34-.11-.27-.15-.4S8.6 6 8.58 5.9s-.06-.24-.08-.34a2 2 0 0 1 0-.24 1.15 1.15 0 0 1 0-.26l.11-.31c.17-.18.91-.23 2.23.37a13.83 13.83 0 0 1 2.49 1.54A4.17 4.17 0 0 1 12 7v2a6.43 6.43 0 0 0 3-.94l.49.46c.44.43.83.86 1.19 1.27A5.31 5.31 0 0 0 16 13.2l2-.39a3.23 3.23 0 0 1 0-1.14c1.29 1.97 1.53 3.39 1.21 3.7zM4.4 11l-2.23 6.7A3.28 3.28 0 0 0 5.28 22a3.21 3.21 0 0 0 1-.17l6.52-2.17A18.7 18.7 0 0 1 4.4 11z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M23 7a8.44 8.44 0 0 0-5 1.31c-.36-.41-.73-.82-1.12-1.21l-.29-.27.14-.12a3.15 3.15 0 0 0 .9-3.49A3.9 3.9 0 0 0 14 1v2a2 2 0 0 1 1.76 1c.17.4 0 .84-.47 1.31l-.23.21a16.71 16.71 0 0 0-3.41-2.2c-2.53-1.14-3.83-.61-4.47 0a2.18 2.18 0 0 0-.46.68l-.18.53L5.1 8.87C6.24 11.71 9 16.76 15 18.94l5-1.66a1 1 0 0 0 .43-.31l.21-.18c1.43-1.44.51-4.21-1.41-6.9A6.63 6.63 0 0 1 23 9zm-3.79 8.37h-.06c-.69.37-3.55-.57-6.79-3.81-.34-.34-.66-.67-.95-1-.1-.11-.19-.23-.29-.35l-.53-.64-.28-.39c-.14-.19-.28-.38-.4-.56s-.16-.26-.24-.39-.22-.34-.31-.51-.13-.24-.19-.37-.17-.28-.23-.42-.09-.23-.14-.34-.11-.27-.15-.4S8.6 6 8.58 5.9s-.06-.24-.08-.34a2 2 0 0 1 0-.24 1.15 1.15 0 0 1 0-.26l.11-.31c.17-.18.91-.23 2.23.37a13.83 13.83 0 0 1 2.49 1.54A4.17 4.17 0 0 1 12 7v2a6.43 6.43 0 0 0 3-.94l.49.46c.44.43.83.86 1.19 1.27A5.31 5.31 0 0 0 16 13.2l2-.39a3.23 3.23 0 0 1 0-1.14c1.29 1.97 1.53 3.39 1.21 3.7zM4.4 11l-2.23 6.7A3.28 3.28 0 0 0 5.28 22a3.21 3.21 0 0 0 1-.17l6.52-2.17A18.7 18.7 0 0 1 4.4 11z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(255, 84, 84);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(255, 84, 84);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(255, 84, 84);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(255, 84, 84);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(255, 84, 84);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(255, 84, 84);
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
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="con"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z'/%3E%3Cpath d='M17 14V2'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="idea"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="pro"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z'/%3E%3Cpath d='M7 10v12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="related"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m18 14 4 4-4 4'/%3E%3Cpath d='m18 2 4 4-4 4'/%3E%3Cpath d='M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22'/%3E%3Cpath d='M2 6h1.972a4 4 0 0 1 3.6 2.2'/%3E%3Cpath d='M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
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
  background-color: rgba(0, 0, 0, 0);
  color: rgb(114, 195, 213);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
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

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
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

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(114, 195, 213);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html body h2.page-title, html h2.page-title a {
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
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(160, 167, 187);
  cursor: pointer;
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(114, 195, 213);
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
}

html body ul.tags > li {
  background-color: rgba(0, 0, 0, 0.15);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(114, 213, 165);
}`,
  },
  light: {},
};
