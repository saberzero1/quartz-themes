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
  --callout-title-weight: 600;
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
  --heading-spacing: 2.5rem !important;
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
  --metadata-input-height: 28px !important;
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
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
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
  text-decoration: rgb(219, 206, 132);
  text-decoration-color: rgb(219, 206, 132);
}

html body .page article p > em, html em {
  color: rgb(201, 184, 255);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(201, 184, 255) none 0px;
  text-decoration: rgb(201, 184, 255);
  text-decoration-color: rgb(201, 184, 255);
}

html body .page article p > i, html i {
  color: rgb(201, 184, 255);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(201, 184, 255) none 0px;
  text-decoration: rgb(201, 184, 255);
  text-decoration-color: rgb(201, 184, 255);
}

html body .page article p > strong, html strong {
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
    links: `html body a.external, html footer a {
  color: rgb(255, 128, 183);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 183) none 0px;
  text-decoration: rgb(255, 128, 183);
  text-decoration-color: rgb(255, 128, 183);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
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
  text-decoration: rgb(160, 167, 187);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(160, 167, 187);
  cursor: pointer;
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(160, 167, 187);
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
