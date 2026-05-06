import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "lyt-mode",
    modes: ["dark"],
    variations: [],
    fonts: ["dm-mono", "dm-sans", "fira-code"],
    fontFiles: [
      {
        family: "DM Sans",
        style: "normal",
        weight: "normal",
        file: "dm-sans.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "DM Sans",
        style: "normal",
        weight: "bold",
        file: "dm-sans-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "DM Sans",
        style: "italic",
        weight: "normal",
        file: "dm-sans-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "DM Sans",
        style: "italic",
        weight: "bold",
        file: "dm-sans-3.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "DM Mono",
        style: "normal",
        weight: "400",
        file: "dm-mono.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "DM Mono",
        style: "normal",
        weight: "900",
        file: "dm-mono-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "DM Mono",
        style: "italic",
        weight: "500",
        file: "dm-mono-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "DM Mono",
        style: "italic",
        weight: "900",
        file: "dm-mono-3.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root {
  --accent-h: 263;
  --accent-l: 61%;
  --accent-s: 46%;
  --background-modifier-active-hover: var(--color-blacker, hsl(230, 8%, 10%));
  --background-modifier-border: var(--border-500, rgba(100, 100, 100, 0.25));
  --background-modifier-border-focus: var(--color-yellow-500, hsl(59, 71%, 68%));
  --background-modifier-border-hover: var(--border-300, rgba(255, 255, 255, 0.25));
  --background-modifier-form-field: var(--color-black, hsl(230, 9%, 13%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(230, 9%, 13%));
  --background-modifier-success: var(--color-green, #44CF6E);
  --background-primary: var(--color-gray-90, hsl(225, 12%, 20%));
  --background-primary-alt: var(--color-gray-100, hsl(231, 9%, 15%));
  --background-secondary: var(--color-black, hsl(230, 9%, 13%));
  --background-secondary-alt: var(--color-black, hsl(230, 9%, 13%));
  --bases-cards-background: var(--background-primary, hsl(225, 12%, 20%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(231, 9%, 15%));
  --bases-cards-radius: var(--radius-m, 2px);
  --bases-embed-border-color: var(--background-modifier-border, rgba(100, 100, 100, 0.25));
  --bases-embed-border-radius: var(--radius-s, 0px);
  --bases-group-heading-property-color: var(--text-muted, hsl(224, 17%, 68%));
  --bases-group-heading-property-size: var(--font-ui-smaller, 13px);
  --bases-table-border-color: var(--table-border-color, hsl(219, 10%, 29%));
  --bases-table-cell-background-active: var(--background-primary, hsl(225, 12%, 20%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(231, 9%, 15%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(263,
              46%,
              61%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 0px);
  --bases-table-group-background: var(--background-primary-alt, hsl(231, 9%, 15%));
  --bases-table-header-background: var(--background-primary, hsl(225, 12%, 20%));
  --bases-table-header-background-hover: var(--background-modifier-hover, transparent);
  --bases-table-header-color: var(--text-muted, hsl(224, 17%, 68%));
  --bases-table-row-background-hover: var(--table-row-background-hover, rgba(0, 0, 0, 0.3));
  --bases-table-summary-background: var(--background-primary, hsl(225, 12%, 20%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, transparent);
  --blockquote-border-color: var(--color-purple-900, hsl(263, 46%, 61%));
  --bodyFont: var(--font-text-theme, var(--font-sans, 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif));
  --bold-color: var(--color-yellowish-355, hsl(51, 55%, 69%));
  --bold-italic-color: var(--color-gray-10, hsl(225, 17%, 88%));
  --bold-weight: var(--font-bold, 700);
  --border-300: rgba(255, 255, 255, 0.25);
  --border-500: rgba(100, 100, 100, 0.25);
  --border-700: rgba(0, 0, 0, 0.15);
  --border-900: hsl(219, 10%, 29%);
  --button-radius: var(--input-radius, 2px);
  --callout-border-opacity: 0.3;
  --callout-border-width: 1px;
  --callout-bug: var(--callout-bug, 252, 95, 142);
  --callout-content-padding: 0 var(--size-4-5);
  --callout-default: var(--callout-default, 207, 227, 255);
  --callout-error: var(--callout-error, 255, 74, 74);
  --callout-example: var(--callout-example, 184, 148, 255);
  --callout-fail: var(--callout-fail, 255, 74, 74);
  --callout-info: var(--callout-info, 74, 176, 255);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 0 0 0 0);
  --callout-question: var(--callout-question, 255, 128, 183);
  --callout-quote: var(--callout-quote, 184, 148, 255);
  --callout-radius: var(--radius-m, 2px);
  --callout-success: var(--callout-success, 77, 224, 185);
  --callout-summary: var(--callout-summary, 74, 176, 255);
  --callout-tip: var(--callout-tip, 244, 138, 74);
  --callout-title-background: transparent;
  --callout-todo: var(--callout-todo, 170, 230, 89);
  --callout-warning: var(--callout-warning, 244, 138, 74);
  --canvas-background: var(--background-primary, hsl(225, 12%, 20%));
  --canvas-card-label-color: var(--text-faint, hsl(225, 14%, 55%));
  --canvas-controls-radius: var(--radius-s, 0px);
  --canvas-dot-pattern: var(--color-base-30, hsl(225, 18%, 25%));
  --caret-color: var(--text-normal, hsl(224, 37%, 80%));
  --checkbox-border-color: var(--border-900, hsl(219, 10%, 29%));
  --checkbox-border-color-hover: var(--border-900, hsl(219, 10%, 29%));
  --checkbox-color: var(--interactive-accent, transparent);
  --checkbox-color-hover: var(--interactive-accent-hover, transparent);
  --checkbox-marker-color: var(--background-primary, hsl(225, 14%, 55%));
  --checkbox-radius: var(--radius-m, 2px);
  --checklist-done-color: var(--text-faintly-muted, hsl(225, 15%, 61%));
  --checklist-done-decoration: none;
  --clickable-icon-radius: var(--radius-m, 2px);
  --code-background: var(--background-primary-alt, hsl(231, 9%, 15%));
  --code-border-color: var(--background-modifier-border, rgba(100, 100, 100, 0.25));
  --code-bracket-background: var(--background-modifier-hover, transparent);
  --code-comment: var(--color-gray-15, hsl(225, 17%, 84%));
  --code-function: var(--color-magenta-300, hsl(334, 37%, 65%));
  --code-important: var(--color-slate-300, hsl(220, 23%, 90%));
  --code-keyword: var(--color-purple-910, hsl(263, 37%, 69%));
  --code-normal: var(--color-slate-500, hsl(224, 37%, 80%));
  --code-property: var(--color-yellow-310, hsl(61, 46%, 69%));
  --code-punctuation: var(--color-slate-900, hsl(225, 14%, 40%));
  --code-radius: var(--radius-s, 0px);
  --code-string: var(--color-green-500, hsl(124, 54%, 75%));
  --code-tag: var(--color-magenta-300, hsl(334, 37%, 65%));
  --code-value: var(--color-cyan-300, hsl(183, 29%, 62%));
  --collapse-icon-color: var(--text-faint, hsl(225, 14%, 55%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(224, 37%, 80%));
  --color-accent-1: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) - 3.8%));
  --color-accent-2: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) + 3.8%));
  --color-accent-hsl: var(--accent-h),
              var(--accent-s),
              var(--accent-l);
  --color-base-00: hsl(230, 8%, 10%);
  --color-base-10: hsl(230, 9%, 13%);
  --color-base-100: hsl(224, 37%, 80%);
  --color-base-20: hsl(231, 9%, 15%);
  --color-base-25: hsl(225, 12%, 20%);
  --color-base-30: hsl(225, 18%, 25%);
  --color-base-35: hsl(225, 11%, 36%);
  --color-base-40: hsl(225, 14%, 55%);
  --color-base-50: hsl(226, 10%, 47%);
  --color-base-60: hsl(224, 17%, 68%);
  --color-base-70: hsl(224, 26%, 70%);
  --color-black: hsl(230, 9%, 13%);
  --color-blacker: hsl(230, 8%, 10%);
  --color-cyan: #53DFDD;
  --color-cyan-300: hsl(183, 29%, 62%);
  --color-cyan-500: hsl(192, 46%, 68%);
  --color-cyan-510: hsl(191, 65%, 59%);
  --color-cyan-520: hsl(191, 57%, 59%);
  --color-cyan-530: hsl(191, 54%, 64%);
  --color-cyan-533: hsl(191, 90%, 50%);
  --color-cyan-540: hsl(194, 69%, 54%);
  --color-cyan-555: hsl(175, 85%, 75%);
  --color-cyan-577: hsl(13, 52%, 80%);
  --color-cyan-700: hsl(194, 50%, 47%);
  --color-cyan-900: hsl(196, 27%, 41%);
  --color-cyan-gradient-1: linear-gradient(180deg,
        #82b7ba, #77aeb3, #6da5ac, #629ca5, 
        #5a919c, #558590, #4f7984, #496d79);
  --color-cyan-gradient-2: linear-gradient(180deg, 
        #6de0fd, #5dd6f5, #56d3f2, #4fcfef, 
        #48cceb, #40c8e8, #37c5e5, #2dc1e2);
  --color-gray-10: hsl(225, 17%, 88%);
  --color-gray-100: hsl(231, 9%, 15%);
  --color-gray-15: hsl(225, 17%, 84%);
  --color-gray-20: hsl(224, 37%, 80%);
  --color-gray-30: hsl(224, 26%, 70%);
  --color-gray-40: hsl(224, 17%, 68%);
  --color-gray-48: hsl(225, 15%, 61%);
  --color-gray-50: hsl(226, 10%, 47%);
  --color-gray-60: hsl(225, 14%, 55%);
  --color-gray-70: hsl(225, 11%, 36%);
  --color-gray-75: hsl(225, 11%, 30%);
  --color-gray-80: hsl(225, 18%, 25%);
  --color-gray-90: hsl(225, 12%, 20%);
  --color-gray-95: hsl(228, 10%, 18%);
  --color-green: #44CF6E;
  --color-green-300: hsl(151, 100%, 81%);
  --color-green-500: hsl(124, 54%, 75%);
  --color-green-700: hsl(151, 54%, 64%);
  --color-green-710: hsl(151, 54%, 64%);
  --color-green-900: hsl(166, 74%, 45%);
  --color-green-910: hsl(158, 85%, 45%);
  --color-green-920: hsl(167, 83%, 31%);
  --color-green-gradient-1: linear-gradient(180deg,
        #9effd0, #8bfcc9, #79f9c4, #67f4bf, 
        #57efbb, #48e8b7, #39e0b4, #2cd8b0);
  --color-green-gradient-2: linear-gradient(180deg,
        #a2f49a, #89f18d, #79ee8b, #69ea8d, 
        #59e692, #4ae299, #3bdda3, #2cd8b0);
  --color-h3-alt: hsl(226, 95%, 76%);
  --color-h3-green: hsl(148, 47%, 51%);
  --color-h3-orange: hsl(38, 60%, 63%);
  --color-h4-alt: hsl(151, 60%, 55%);
  --color-highlight-bg: rgba(255, 252, 59, 0.08);
  --color-highlight-border: rgba(255, 252, 59, 0.4);
  --color-highlight-text: var(--color-cyan-530, hsl(191, 54%, 64%));
  --color-magenta-300: hsl(334, 37%, 65%);
  --color-magenta-310: hsl(338, 100%, 87%);
  --color-magenta-500: hsl(338, 100%, 80%);
  --color-magenta-700: hsl(334, 100%, 75%);
  --color-magenta-710: hsl(342, 100%, 74%);
  --color-magenta-900: hsl(317, 62%, 65%);
  --color-magenta-910: hsl(342, 96%, 68%);
  --color-magenta-920: hsl(342, 31%, 34%);
  --color-magenta-gradient-1: linear-gradient(180deg,
        #ffb1ce, #ffa3ca, #f897c4, #f88cc4, 
        #ef7dbe, #ea77be, #e472be, #dd6ebe);
  --color-magenta-gradient-2: linear-gradient(180deg,
        #ff99be, #fc91bd, #f88abd, #f483bd, 
        #ef7dbe, #ea77be, #e472be, #dd6ebe);
  --color-orange: #E9973F;
  --color-orange-300: hsl(28, 93%, 66%);
  --color-orange-310: hsl(28, 63%, 66%);
  --color-orange-500: hsl(28, 43%, 47%);
  --color-pink: #FA99CD;
  --color-purple-300: hsl(255, 49%, 76%);
  --color-purple-333: hsl(245, 37%, 80%);
  --color-purple-500: hsl(255, 100%, 86%);
  --color-purple-555: hsl(255, 100%, 86%);
  --color-purple-577: hsl(255, 100%, 86%);
  --color-purple-700: hsl(260, 100%, 79%);
  --color-purple-900: hsl(263, 46%, 61%);
  --color-purple-910: hsl(263, 37%, 69%);
  --color-purple-920: hsl(263, 39%, 46%);
  --color-purple-gradient-1: linear-gradient(180deg,
        #d9ccff, #d2c4ff, #cbbcff, #c4b4ff,
        #bdabff, #b5a3ff, #ad9bff, #a593ff);
  --color-purple-gradient-2: linear-gradient(180deg,
        #d9ccff, #ccbafc, #c0a9f8, #b59af2, 
        #ab8cea, #a281e1, #9977d6, #916ec9);
  --color-red-300: hsl(3, 93%, 66%);
  --color-red-500: hsl(3, 43%, 47%);
  --color-slate-300: hsl(220, 23%, 90%);
  --color-slate-500: hsl(224, 37%, 80%);
  --color-slate-700: hsl(223, 18%, 68%);
  --color-slate-900: hsl(225, 14%, 40%);
  --color-slate-gradient-1: linear-gradient(180deg,
        #eff1f5, #e3e6ed, #d7dce5, #ccd1dd, 
        #c0c7d5, #b5bccd, #aab2c5, #9fa7bc);
  --color-slate-gradient-2: linear-gradient(180deg, 
        #b9c3df, #aab4cf, #9ca5bf, #8e97b0, 
        #8c96b1, #828ba5, #70778f, #656d85);
  --color-white: hsl(220, 23%, 95%);
  --color-yellow: #E0DE71;
  --color-yellow-300: hsl(61, 100%, 75%);
  --color-yellow-310: hsl(61, 46%, 69%);
  --color-yellow-355: hsl(61, 55%, 69%);
  --color-yellow-500: hsl(59, 71%, 68%);
  --color-yellow-510: hsl(59, 51%, 68%);
  --color-yellow-700: hsl(58, 86%, 66%);
  --color-yellow-900: hsl(59, 81%, 47%);
  --color-yellow-gradient-1: linear-gradient(180deg,
        #fcff80, #fafd6b, #f9fb57, #f6f843, 
        #f4f430, #f0ef1e, #e4e213, #ccc914);
  --color-yellow-gradient-2: linear-gradient(-90deg,
        #f3ee5e, #f1ec50, #f0eb41, #eee933, 
        #ece725, #eae516, #dbd815, #ccc914);
  --color-yellowish-355: hsl(51, 55%, 69%);
  --comment-color: var(--color-gray-15, hsl(225, 17%, 84%));
  --comment-h1: hsl(56, 44%, 76%);
  --comment-h2: hsl(257, 33%, 82%);
  --comment-h3: hsl(192, 34%, 74%);
  --comment-h4: hsl(153, 35%, 75%);
  --comment-h5: hsl(224, 26%, 83%);
  --comment-h6: hsl(223, 14%, 75%);
  --cursor: pointer;
  --dark: var(--text-normal, var(--color-gray-20, hsl(224, 37%, 80%)));
  --darkgray: var(--text-normal, var(--color-gray-20, hsl(224, 37%, 80%)));
  --divider-color: var(--color-black, hsl(230, 9%, 13%));
  --divider-color-hover: var(--color-gray-50, hsl(226, 10%, 47%));
  --divider-width: 2px;
  --drag-ghost-background: var(--background-primary, hsl(225, 12%, 20%));
  --drag-ghost-text-color: var(--color-cyan-530, hsl(191, 54%, 64%));
  --dropdown-background: var(--interactive-normal, hsl(230, 8%, 10%));
  --dropdown-background-hover: var(--interactive-hover, hsl(225, 11%, 36%));
  --embed-border-left: 2px solid var(--color-orange-500);
  --embed-border-right: none;
  --embed-padding: 0 0 0 var(--size-4-5);
  --file-header-background: var(--background-primary, hsl(225, 12%, 20%));
  --file-header-background-focused: var(--background-primary, hsl(225, 12%, 20%));
  --file-header-font: var(--font-interface, DM Sans, Inter, -apple-system
    BlinkMacSystemFont, Segoe UI, Ubuntu,
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-text-size, 16px);
  --file-header-font-weight: var(--font-medium, 500);
  --file-margins: var(--size-4-8, 32px);
  --flair-background: var(--interactive-normal, hsl(230, 8%, 10%));
  --flair-color: var(--text-normal, hsl(224, 37%, 80%));
  --font-big: 1.15em;
  --font-body: 1em;
  --font-interface-theme: var(--font-sans, 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif);
  --font-mermaid: var(--font-text, DM Sans, Inter, -apple-system
    BlinkMacSystemFont, Segoe UI, Ubuntu,
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-mono: 'DM Mono', 'Fira Code', Courier, monospace;
  --font-monospace-theme: var(--font-mono, 'DM Mono', 'Fira Code', Courier, monospace);
  --font-sans: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-smallish: 0.89em;
  --font-text-theme: var(--font-sans, 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif);
  --font-ui-large: 24px;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: var(--metadata-divider-color, rgba(100, 100, 100, 0.25));
  --footnote-id-color: var(--text-muted, hsl(224, 17%, 68%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(225, 14%, 55%));
  --footnote-input-background-active: var(--metadata-input-background-active, transparent);
  --footnote-line-height: var(--line-height-normal, 1.58);
  --footnote-radius: var(--radius-s, 0px);
  --graph-color-line: var(--color-cyan-900, hsl(196, 27%, 41%));
  --graph-color-line-hover: var(--color-gray-40, hsl(224, 17%, 68%));
  --graph-color-node-border-hover: var(--color-white, hsl(220, 23%, 95%));
  --graph-color-node-hover: var(--color-magenta-900, hsl(317, 62%, 65%));
  --graph-line: var(--color-cyan-900, hsl(196, 27%, 41%));
  --graph-node: var(--color-yellow-700, hsl(58, 86%, 66%));
  --graph-node-attachment: var(--color-slate-300, hsl(220, 23%, 90%));
  --graph-node-focused: var(--color-gray-60, hsl(225, 14%, 55%));
  --graph-node-tag: var(--color-cyan-700, hsl(194, 50%, 47%));
  --graph-node-unresolved: var(--color-purple-900, hsl(263, 46%, 61%));
  --graph-text: var(--color-gray-10, hsl(225, 17%, 88%));
  --gray: var(--text-muted, var(--color-gray-40, hsl(224, 17%, 68%)));
  --h1-color: var(--color-yellow-900, hsl(59, 81%, 47%));
  --h1-size: 1.55rem;
  --h2-color: var(--color-purple-700, hsl(260, 100%, 79%));
  --h2-size: 1.45rem;
  --h2-weight: 600;
  --h3-color: var(--color-cyan-533, hsl(191, 90%, 50%));
  --h3-size: 1.35rem;
  --h3-weight: 600;
  --h4-color: var(--color-green-710, hsl(151, 54%, 64%));
  --h4-size: 1.25rem;
  --h4-weight: 600;
  --h5-color: var(--color-slate-500, hsl(224, 37%, 80%));
  --h5-size: 1.15rem;
  --h5-weight: 600;
  --h6-color: var(--color-slate-700, hsl(223, 18%, 68%));
  --h6-size: 1.05rem;
  --header-shadow-color: rgb(31, 31, 31);
  --header-shadow-size: 0px 4px 3px;
  --headerFont: var(--font-text-theme, var(--font-sans, 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif));
  --highlight: var(--text-highlight-bg, var(--color-highlight-bg, rgba(255, 252, 59, 0.08)));
  --hr-color: var(--border-900, hsl(219, 10%, 29%));
  --hr-thickness: 1px;
  --icon-color: var(--color-gray-60, hsl(225, 14%, 55%));
  --icon-color-active: var(--color-purple-700, hsl(260, 100%, 79%));
  --icon-color-focused: var(--color-purple-700, hsl(260, 100%, 79%));
  --icon-color-hover: var(--color-purple-700, hsl(260, 100%, 79%));
  --icon-opacity: 1;
  --indentation-guide: var(--border-900, hsl(219, 10%, 29%));
  --indentation-guide-active: var(--border-300, rgba(255, 255, 255, 0.25));
  --inline-title-size: var(--h1-size, 1.55rem);
  --input-date-separator: var(--text-faint, hsl(225, 14%, 55%));
  --input-placeholder-color: var(--text-faint, hsl(225, 14%, 55%));
  --input-radius: 2px;
  --input-shadow: 0px 1px 0px 1px var(--shadow-300);
  --input-shadow-hover: 0px 1px 0px 1px var(--shadow-300);
  --interactive-accent: var(--color-slate-900, hsl(225, 14%, 40%));
  --interactive-accent-hover: var(--color-slate-700, hsl(223, 18%, 68%));
  --interactive-accent-hsl: var(--color-accent-hsl, 255, 14%, 40%);
  --interactive-hover: var(--color-gray-70, hsl(225, 11%, 36%));
  --interactive-normal: var(--color-blacker, hsl(230, 8%, 10%));
  --italic-color: var(--color-purple-577, hsl(255, 100%, 86%));
  --light: var(--background-primary, var(--color-gray-90, hsl(225, 12%, 20%)));
  --lightgray: var(--background-secondary, var(--color-black, hsl(230, 9%, 13%)));
  --line-height-normal: 1.58;
  --link-color: var(--color-magenta-700, hsl(334, 100%, 75%));
  --link-color-hover: var(--color-magenta-700, hsl(334, 100%, 75%));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--color-magenta-700, hsl(334, 100%, 75%));
  --link-external-color-hover: var(--color-magenta-700, hsl(334, 100%, 75%));
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: var(--color-magenta-700, hsl(334, 100%, 75%));
  --link-unresolved-decoration-color: hsla(var(--interactive-accent-hsl), 0.5);
  --link-unresolved-opacity: 0.65;
  --list-bullet-size: 5px;
  --list-marker-color: var(--color-purple-910, hsl(263, 37%, 69%));
  --list-marker-color-collapsed: var(--text-accent, hsl(224, 37%, 80%));
  --list-marker-color-hover: var(--color-purple-910, hsl(263, 37%, 69%));
  --menu-background: var(--background-secondary, hsl(230, 9%, 13%));
  --menu-border-color: var(--background-modifier-border-hover, rgba(255, 255, 255, 0.25));
  --menu-radius: var(--radius-m, 2px);
  --menu-shadow: var(--shadow-s, 0px 3px 12px -2px rgba(14, 11, 11, 0.5));
  --metadata-border-color: var(--background-modifier-border, rgba(100, 100, 100, 0.25));
  --metadata-divider-color: var(--background-modifier-border, rgba(100, 100, 100, 0.25));
  --metadata-input-background-active: var(--background-modifier-hover, transparent);
  --metadata-input-font: var(--font-interface, DM Sans, Inter, -apple-system
    BlinkMacSystemFont, Segoe UI, Ubuntu,
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, hsl(224, 37%, 80%));
  --metadata-label-background-active: var(--background-modifier-hover, transparent);
  --metadata-label-font: var(--font-interface, DM Sans, Inter, -apple-system
    BlinkMacSystemFont, Segoe UI, Ubuntu,
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsl(224, 17%, 68%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(224, 17%, 68%));
  --metadata-property-background-active: var(--background-modifier-hover, transparent);
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --modal-background: var(--background-primary, hsl(225, 12%, 20%));
  --modal-border-color: var(--background-modifier-border, rgba(100, 100, 100, 0.25));
  --modal-height: 90vh;
  --modal-max-height: 1100px;
  --modal-max-width: 1000px;
  --modal-radius: var(--radius-m, 2px);
  --modal-width: 80vw;
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(225, 14%, 55%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(225, 14%, 55%));
  --nav-heading-color: var(--text-normal, hsl(224, 37%, 80%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(225, 14%, 55%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(224, 17%, 68%));
  --nav-heading-color-hover: var(--text-normal, hsl(224, 37%, 80%));
  --nav-item-background-active: var(--color-gray-90, hsl(225, 12%, 20%));
  --nav-item-background-hover: var(--color-gray-90, hsl(225, 12%, 20%));
  --nav-item-color: var(--color-gray-40, hsl(224, 17%, 68%));
  --nav-item-color-active: var(--color-cyan-500, hsl(192, 46%, 68%));
  --nav-item-color-highlighted: var(--text-accent-hover, hsl(220, 23%, 95%));
  --nav-item-color-hover: var(--color-cyan-500, hsl(192, 46%, 68%));
  --nav-item-color-selected: var(--text-normal, hsl(224, 37%, 80%));
  --nav-item-radius: var(--radius-s, 0px);
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, hsl(225, 14%, 55%));
  --nav-tag-color-active: var(--text-muted, hsl(224, 17%, 68%));
  --nav-tag-color-hover: var(--text-muted, hsl(224, 17%, 68%));
  --nav-tag-radius: var(--radius-s, 0px);
  --opacity-translucency: 0.75;
  --pdf-background: var(--background-primary, hsl(225, 12%, 20%));
  --pdf-page-background: var(--background-primary, hsl(225, 12%, 20%));
  --pdf-sidebar-background: var(--background-primary, hsl(225, 12%, 20%));
  --pill-border-color: var(--background-modifier-border, rgba(100, 100, 100, 0.25));
  --pill-border-color-hover: var(--background-modifier-border-hover, rgba(255, 255, 255, 0.25));
  --pill-color: var(--text-muted, hsl(224, 17%, 68%));
  --pill-color-hover: var(--text-normal, hsl(224, 37%, 80%));
  --pill-color-remove: var(--text-faint, hsl(225, 14%, 55%));
  --pill-color-remove-hover: var(--text-accent, hsl(224, 37%, 80%));
  --popover-height: 550px;
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: var(--background-primary, hsl(225, 12%, 20%));
  --prompt-border-color: var(--background-modifier-border, rgba(100, 100, 100, 0.25));
  --radius-l: 4px;
  --radius-m: 2px;
  --radius-s: 0px;
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent) linear-gradient(hsl(230, 8%, 10%), color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(230, 9%, 13%));
  --ribbon-background-collapsed: var(--background-secondary, hsl(230, 9%, 13%));
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-2) var(--size-4-1, 8px 4px 8px 4px);
  --scrollbar-active-thumb-bg: var(--color-black, hsl(230, 9%, 13%));
  --scrollbar-radius: var(--radius-l, 4px);
  --scrollbar-thumb-bg: var(--color-gray-100, hsl(231, 9%, 15%));
  --search-clear-button-color: var(--text-muted, hsl(224, 17%, 68%));
  --search-icon-color: var(--text-muted, hsl(224, 17%, 68%));
  --search-result-background: var(--background-primary, hsl(225, 12%, 20%));
  --secondary: var(--text-accent, var(--color-gray-20, hsl(224, 37%, 80%)));
  --setting-group-heading-color: var(--text-normal, hsl(224, 37%, 80%));
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-items-background: var(--background-primary-alt, hsl(231, 9%, 15%));
  --setting-items-border-color: var(--background-modifier-border, rgba(100, 100, 100, 0.25));
  --setting-items-radius: var(--radius-l, 4px);
  --shadow-300: rgba(0, 0, 0, 0.15);
  --shadow-500: rgba(0, 0, 0, 0.65);
  --shadow-700: rgba(0, 0, 0, 0.95);
  --shadow-l: var(--shadow-large, 0px 2px 2.3px -52px rgba(0, 0, 0, 0.448),
        0px 5.6px 6.3px -52px rgba(0, 0, 0, 0.6),
        0px 13.6px 15.1px -52px rgba(0, 0, 0, 0.852),
        0px 45px 50px -52px rgb(0, 0, 0));
  --shadow-large: 0px 2px 2.3px -52px rgba(0, 0, 0, 0.448),
        0px 5.6px 6.3px -52px rgba(0, 0, 0, 0.6),
        0px 13.6px 15.1px -52px rgba(0, 0, 0, 0.852),
        0px 45px 50px -52px rgb(0, 0, 0);
  --shadow-medium: 0px 3px 3.1px -20px rgba(0, 0, 0, 0.2),
        0px 24px 25px -20px rgba(0, 0, 0, 0.35);
  --shadow-s: var(--shadow-small, 0px 3px 12px -2px rgba(14, 11, 11, 0.5));
  --shadow-small: 0px 3px 12px -2px rgba(14, 11, 11, 0.5);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(224, 17%, 68%));
  --shiki-code-background: var(--code-background, hsl(231, 9%, 15%));
  --shiki-code-block-border-radius: var(--code-radius, 0px);
  --shiki-code-comment: var(--text-faint, hsl(225, 14%, 55%));
  --shiki-code-function: var(--color-green, #44CF6E);
  --shiki-code-important: var(--color-orange, #E9973F);
  --shiki-code-keyword: var(--color-pink, #FA99CD);
  --shiki-code-normal: var(--text-muted, hsl(224, 17%, 68%));
  --shiki-code-property: var(--color-cyan, #53DFDD);
  --shiki-code-punctuation: var(--text-muted, hsl(224, 17%, 68%));
  --shiki-code-string: var(--color-yellow, #E0DE71);
  --shiki-gutter-border-color: var(--background-modifier-border, rgba(100, 100, 100, 0.25));
  --shiki-gutter-text-color: var(--text-faint, hsl(225, 14%, 55%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(224, 17%, 68%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(224, 17%, 68%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(225, 14%, 55%));
  --sidebar-markdown-font-size: var(--font-small, 0.933em);
  --slider-s-thumb-size-: 13px;
  --slider-thumb-border-color: var(--background-modifier-border-hover, rgba(255, 255, 255, 0.25));
  --slider-thumb-height: 13px;
  --slider-thumb-radius: var(--slider-thumb-height, 2px);
  --slider-thumb-width: 26px;
  --slider-thumb-y: -5px;
  --slider-track-background: var(--background-modifier-border, rgba(100, 100, 100, 0.25));
  --status-bar-background: var(--background-secondary-alt, hsl(230, 9%, 13%));
  --status-bar-border-color: var(--divider-color, transparent);
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 0 0 0 0);
  --status-bar-font-size: var(--font-ui-smaller, 13px);
  --status-bar-position: relative;
  --status-bar-radius: var(--radius-m, 0 0 0 0) 0 0 0;
  --status-bar-text-color: var(--color-gray-40, hsl(224, 17%, 68%));
  --strikethrough-color: var(--color-gray-60, hsl(225, 14%, 55%));
  --suggestion-background: var(--background-primary, hsl(225, 12%, 20%));
  --sync-avatar-color-2: var(--color-orange, #E9973F);
  --sync-avatar-color-3: var(--color-yellow, #E0DE71);
  --sync-avatar-color-4: var(--color-green, #44CF6E);
  --sync-avatar-color-5: var(--color-cyan, #53DFDD);
  --sync-avatar-color-8: var(--color-pink, #FA99CD);
  --tab-background-active: var(--background-primary, hsl(225, 12%, 20%));
  --tab-container-background: var(--background-secondary, hsl(230, 9%, 13%));
  --tab-curve: 0px;
  --tab-divider-color: var(--background-modifier-border, rgba(100, 100, 100, 0.25));
  --tab-font-size: var(--font-ui-small, 14px);
  --tab-outline-color: var(--divider-color, transparent);
  --tab-outline-width: 2px;
  --tab-radius: var(--radius-s, 0px);
  --tab-radius-active: 0px;
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-switcher-background: var(--background-secondary, hsl(230, 9%, 13%));
  --tab-text-color: var(--color-cyan-500, hsl(192, 46%, 68%));
  --tab-text-color-active: var(--text-muted, hsl(224, 17%, 68%));
  --tab-text-color-focused: var(--color-gray-60, hsl(225, 14%, 55%));
  --tab-text-color-focused-active: var(--color-white, hsl(220, 23%, 95%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(224, 37%, 80%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(224, 37%, 80%));
  --table-add-button-border-color: var(--background-modifier-border, rgba(100, 100, 100, 0.25));
  --table-border-color: var(--border-900, hsl(219, 10%, 29%));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(225, 14%, 40%));
  --table-drag-handle-color: var(--text-faint, hsl(225, 14%, 55%));
  --table-drag-handle-color-active: var(--text-on-accent, hsl(220, 23%, 95%));
  --table-header-background: var(--color-gray-100, hsl(231, 9%, 15%));
  --table-header-background-hover: var(--color-gray-100, hsl(231, 9%, 15%));
  --table-header-border-color: var(--table-border-color, hsl(219, 10%, 29%));
  --table-header-color: var(--color-slate-300, hsl(220, 23%, 90%));
  --table-header-weight: var(--font-semibold, 600);
  --table-row-alt-background: var(--table-background, rgba(0, 0, 0, 0.08));
  --table-row-background-hover: var(--table-background, rgba(0, 0, 0, 0.3));
  --table-selection-border-color: var(--interactive-accent, hsl(225, 14%, 40%));
  --table-white-space: normal;
  --tag-color: var(--color-green-700, hsl(151, 54%, 64%));
  --tag-color-hover: var(--color-green-700, hsl(151, 54%, 64%));
  --tag-padding-y: 0.2em;
  --tertiary: var(--text-accent-hover, var(--color-white, hsl(220, 23%, 95%)));
  --text-accent: var(--color-gray-20, hsl(224, 37%, 80%));
  --text-accent-hover: var(--color-white, hsl(220, 23%, 95%));
  --text-error: var(--color-magenta-910, hsl(342, 96%, 68%));
  --text-faint: var(--color-gray-60, hsl(225, 14%, 55%));
  --text-faintly-muted: var(--color-gray-48, hsl(225, 15%, 61%));
  --text-highlight-bg: var(--color-highlight-bg, rgba(255, 252, 59, 0.08));
  --text-highlight-bg-active: var(--color-highlight-bg, rgba(255, 252, 59, 0.08));
  --text-muted: var(--color-gray-40, hsl(224, 17%, 68%));
  --text-normal: var(--color-gray-20, hsl(224, 37%, 80%));
  --text-on-accent: var(--color-white, hsl(220, 23%, 95%));
  --text-selection: hsla(var(--interactive-accent-hsl), 0.25);
  --text-success: var(--color-green-920, hsl(167, 83%, 31%));
  --text-warning: var(--color-orange, #E9973F);
  --textHighlight: var(--text-highlight-bg, var(--color-highlight-bg, rgba(255, 252, 59, 0.08)));
  --titleFont: var(--font-text-theme, var(--font-sans, 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif));
  --titlebar-background: var(--background-secondary, hsl(230, 9%, 13%));
  --titlebar-background-focused: var(--background-secondary, hsl(230, 9%, 13%));
  --titlebar-border-color: var(--background-modifier-border, rgba(100, 100, 100, 0.25));
  --titlebar-text-color: var(--text-faint, hsl(225, 14%, 55%));
  --titlebar-text-color-focused: var(--text-faint, hsl(225, 14%, 55%));
  --titlebar-text-color-highlighted: var(--text-accent-hover, hsl(220, 23%, 95%));
  --titlebar-text-weight: var(--font-normal, 400);
  --toggle-border-width: 3px;
  --toggle-radius: 3px;
  --toggle-s-border-width: 3px;
  --toggle-s-thumb-height: 18px;
  --toggle-s-thumb-width: 18px;
  --toggle-s-width: 42px;
  --toggle-thumb-color: var(--color-white, hsl(220, 23%, 95%));
  --toggle-thumb-radius: 2px;
  --toggle-width: 42px;
  --vault-name-color: var(--text-normal, hsl(224, 37%, 80%));
  --vault-name-font-size: var(--font-ui-small, 14px);
  --vault-name-font-weight: var(--font-medium, 500);
  --vault-profile-color: var(--text-normal, hsl(224, 37%, 80%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(224, 37%, 80%));
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --window-border: 1px solid var(--window-border-color);
  --window-border-color: var(--color-gray-70, hsl(225, 11%, 36%));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(230, 9%, 13%));
  background-color: var(--tab-container-background, rgb(30, 31, 36));
  color: rgb(185, 195, 223);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(45, 48, 57));
  color: rgb(185, 195, 223);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(30, 31, 36));
  color: rgb(185, 195, 223);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(30, 31, 36);
  border-right-width: 2px;
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(230, 9%, 13%));
  background-color: var(--tab-container-background, rgb(30, 31, 36));
  border-left-color: rgb(30, 31, 36);
  border-left-width: 0px;
  color: rgb(185, 195, 223);
}

html body html {
  --header-shadow-color: rgb(31, 31, 31);
  --header-shadow-size: 0px 4px 3px;
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--bold-color, rgb(219, 206, 132));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 206, 132) none 0px;
  text-decoration-color: rgb(219, 206, 132);
}

html body .markdown-rendered p > em, html em {
  color: var(--italic-color, rgb(201, 184, 255));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(201, 184, 255) none 0px;
  text-decoration-color: rgb(201, 184, 255);
}

html body .markdown-rendered p > i, html i {
  color: var(--italic-color, rgb(201, 184, 255));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(201, 184, 255) none 0px;
  text-decoration-color: rgb(201, 184, 255);
}

html body .markdown-rendered p > strong > em, html strong > em {
  color: var(--bold-italic-color, rgb(219, 222, 230));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 222, 230) none 0px;
  text-decoration-color: rgb(219, 222, 230);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--bold-color, rgb(219, 206, 132));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 206, 132) none 0px;
  text-decoration-color: rgb(219, 206, 132);
}

html body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 252, 59, 0.08));
  color: var(--color-highlight-text, rgb(114, 195, 213));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(114, 195, 213) none 0px;
  text-decoration-color: rgb(114, 195, 213);
}

html body del {
  color: var(--strikethrough-color, rgb(124, 132, 156));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(124, 132, 156) none 0px;
  text-decoration-color: rgb(124, 132, 156);
}

html body li.task-list-item input[type="checkbox"] {
  background-color: rgb(30, 31, 36);
  border-color: rgb(67, 72, 81);
  border-radius: 2px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgba(0, 0, 0, 0));
  border-color: rgb(67, 72, 81);
}

html body p {
  color: var(--text-muted, rgb(160, 167, 187));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(160, 167, 187) none 0px;
  text-decoration-color: rgb(160, 167, 187);
}`,
    links: `html body a.external-link, html footer a {
  color: var(--link-external-color, rgb(255, 128, 183));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 183) none 0px;
  text-decoration-color: rgb(255, 128, 183);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(255, 128, 183));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 183) none 0px;
  text-decoration-color: rgb(255, 128, 183);
}

html body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(255, 128, 183));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 183) none 0px;
  text-decoration: rgba(95, 88, 116, 0.5);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(95, 88, 116, 0.5));
}`,
    lists: `html body dd {
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-width: 0px;
  border-left-color: rgb(114, 195, 213);
  border-left-width: 0px;
  border-right-color: rgb(114, 195, 213);
  border-right-width: 0px;
  border-top-color: rgb(114, 195, 213);
  border-top-width: 0px;
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body dt {
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-width: 0px;
  border-left-color: rgb(114, 195, 213);
  border-left-width: 0px;
  border-right-color: rgb(114, 195, 213);
  border-right-width: 0px;
  border-top-color: rgb(114, 195, 213);
  border-top-width: 0px;
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body ol > li {
  color: rgb(114, 195, 213);
  margin-bottom: 0px;
  margin-left: 33.2641px;
  margin-right: 0px;
  margin-top: 0px;
}

html body ul > li {
  color: rgb(114, 195, 213);
  margin-bottom: 0px;
  margin-left: 33.2641px;
  margin-right: 0px;
  margin-top: 0px;
}

html body ul.overflow {
  border-bottom-color: rgb(185, 195, 223);
  border-bottom-width: 0px;
  border-left-color: rgb(185, 195, 223);
  border-left-width: 0px;
  border-right-color: rgb(185, 195, 223);
  border-right-width: 0px;
  border-top-color: rgb(185, 195, 223);
  border-top-width: 0px;
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-faint, rgb(124, 132, 156));
}

html body blockquote {
  color: var(--blockquote-color, rgb(114, 195, 213));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 25.28px;
}`,
    tables: `html body .spacer {
  background-color: rgb(35, 36, 42);
}

html body .table-container {
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-width: 0px;
  border-left-color: rgb(114, 195, 213);
  border-left-width: 0px;
  border-right-color: rgb(114, 195, 213);
  border-right-width: 0px;
  border-top-color: rgb(114, 195, 213);
  border-top-width: 0px;
}

html body table {
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgba(0, 0, 0, 0.08));
}

html body td {
  border-bottom-color: rgb(67, 72, 81);
  border-bottom-width: 0px;
  border-left-color: rgb(67, 72, 81);
  border-left-width: 0px;
  border-right-color: rgb(67, 72, 81);
  border-right-width: 0px;
  border-top-color: rgb(67, 72, 81);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(114, 195, 213));
}

html body th {
  border-bottom-color: rgb(67, 72, 81);
  border-bottom-width: 0px;
  border-left-color: rgb(67, 72, 81);
  border-left-width: 0px;
  border-right-color: rgb(67, 72, 81);
  border-right-width: 0px;
  border-top-color: rgb(67, 72, 81);
  border-top-width: 0px;
  color: var(--table-header-color, rgb(224, 228, 235));
}

html body tr {
  background-color: var(--table-header-background, rgb(35, 36, 42));
}`,
    code: `html body code {
  background-color: var(--code-background, rgb(35, 36, 42));
  border-bottom-color: rgba(100, 100, 100, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(100, 100, 100, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(100, 100, 100, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(100, 100, 100, 0.25);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(185, 195, 223));
  font-family: var(--font-monospace, "??", "DM Mono", "Fira Code", Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html body pre:has(> code) {
  background-color: var(--code-background, rgb(35, 36, 42));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-width: 0px;
  border-left-color: rgb(114, 195, 213);
  border-left-width: 0px;
  border-right-color: rgb(114, 195, 213);
  border-right-width: 0px;
  border-top-color: rgb(114, 195, 213);
  border-top-width: 0px;
}

html body figcaption {
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  --code-background: var(--ec-frm-edBg, hsl(231, 9%, 15%));
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(114, 195, 213);
  border-left-width: 0px;
  border-right-color: rgb(114, 195, 213);
  border-right-width: 0px;
  border-top-color: rgb(114, 195, 213);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html body img {
  border-bottom-color: rgb(217, 214, 23);
  border-bottom-width: 0px;
  border-left-color: rgb(217, 214, 23);
  border-left-width: 0px;
  border-right-color: rgb(217, 214, 23);
  border-right-width: 0px;
  border-top-color: rgb(217, 214, 23);
  border-top-width: 0px;
}

html body video {
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-width: 0px;
  border-left-color: rgb(114, 195, 213);
  border-left-width: 0px;
  border-right-color: rgb(114, 195, 213);
  border-right-width: 0px;
  border-top-color: rgb(114, 195, 213);
  border-top-width: 0px;
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgb(35, 36, 42));
  border-bottom-color: rgb(160, 167, 187);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgb(160, 167, 187);
  border-left-width: 0px;
  border-radius: 2px;
  border-right-color: rgb(160, 167, 187);
  border-right-width: 0px;
  border-top-color: rgb(160, 167, 187);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: var(--text-muted, rgb(160, 167, 187));
}

html body .footnotes {
  border-top-color: rgb(114, 195, 213);
  border-top-width: 0px;
  color: rgb(114, 195, 213);
}

html body .transclude {
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-width: 0px;
  border-left-color: rgb(88, 95, 116);
  border-left-width: 0px;
  border-right-color: rgb(114, 195, 213);
  border-right-width: 0px;
  border-top-color: rgb(114, 195, 213);
  border-top-width: 0px;
  color: rgb(114, 195, 213);
}

html body .transclude-inner {
  border-bottom-color: rgb(185, 195, 223);
  border-bottom-width: 0px;
  border-left-color: rgb(185, 195, 223);
  border-left-width: 0px;
  border-right-color: rgb(185, 195, 223);
  border-right-width: 0px;
  border-top-color: rgb(185, 195, 223);
  border-top-width: 0px;
  color: rgb(185, 195, 223);
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
  border-bottom-width: 0px;
  border-left-color: rgb(67, 72, 81);
  border-left-width: 0px;
  border-right-color: rgb(67, 72, 81);
  border-right-width: 0px;
  border-top-color: rgb(67, 72, 81);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  width: var(--font-text-size, 16px);
}

html body li.task-list-item[data-task="#"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(114, 195, 213);
}

html li.task-list-item[data-task="body"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="."] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="="] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(141, 148, 170);
  text-decoration-line: none;
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(141, 148, 170);
  text-decoration-line: none;
}

html body li.task-list-item[data-task="y"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(114, 195, 213);
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

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(124, 132, 156);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(0, 0, 0)transform: msFilter:'%3E%3Cpath d='M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(0, 0, 0)transform: msFilter:'%3E%3Cpath d='M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(124, 132, 156);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='fill: %237c849c' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='fill: %237c849c' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(45, 48, 57)transform: msFilter:'%3E%3Cpath d='m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(45, 48, 57)transform: msFilter:'%3E%3Cpath d='m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(108, 113, 132);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(0, 0, 0)transform: msFilter:'%3E%3Cpath d='M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(0, 0, 0)transform: msFilter:'%3E%3Cpath d='M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 7h14v2H5V7z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 7h14v2H5V7z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M20 3h-1v13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 16h7l-1.122 3.368A2 2 0 0 0 11.775 22H12l5-5.438V3H6l-3.937 8.649-.063.293V14a2 2 0 0 0 2 2z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M20 3h-1v13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 16h7l-1.122 3.368A2 2 0 0 0 11.775 22H12l5-5.438V3H6l-3.937 8.649-.063.293V14a2 2 0 0 0 2 2z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.707 10.293C13.4418 10.2931 13.1875 10.3984 13 10.586L9.99997 13.586L3.70697 7.293L2.29297 8.707L8.99997 15.414C9.18746 15.6015 9.44177 15.7069 9.70697 15.707H10.293C10.5582 15.7069 10.8125 15.6015 11 15.414L14 12.414L18.293 16.707L16 19H22V13L19.707 15.293L15 10.586C14.8125 10.3984 14.5582 10.2931 14.293 10.293H13.707Z' fill='%237c849c'%3E%3C/path%3E%3C/svg%3E%0A");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.707 10.293C13.4418 10.2931 13.1875 10.3984 13 10.586L9.99997 13.586L3.70697 7.293L2.29297 8.707L8.99997 15.414C9.18746 15.6015 9.44177 15.7069 9.70697 15.707H10.293C10.5582 15.7069 10.8125 15.6015 11 15.414L14 12.414L18.293 16.707L16 19H22V13L19.707 15.293L15 10.586C14.8125 10.3984 14.5582 10.2931 14.293 10.293H13.707Z' fill='%237c849c'%3E%3C/path%3E%3C/svg%3E%0A");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M16.5 8c0 1.5-.5 3.5-2.9 4.3.7-1.7.8-3.4.3-5-.7-2.1-3-3.7-4.6-4.6-.4-.3-1.1.1-1 .7 0 1.1-.3 2.7-2 4.4C4.1 10 3 12.3 3 14.5 3 17.4 5 21 9 21c-4-4-1-7.5-1-7.5.8 5.9 5 7.5 7 7.5 1.7 0 5-1.2 5-6.4 0-3.1-1.3-5.5-2.4-6.9-.3-.5-1-.2-1.1.3'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M16.5 8c0 1.5-.5 3.5-2.9 4.3.7-1.7.8-3.4.3-5-.7-2.1-3-3.7-4.6-4.6-.4-.3-1.1.1-1 .7 0 1.1-.3 2.7-2 4.4C4.1 10 3 12.3 3 14.5 3 17.4 5 21 9 21c-4-4-1-7.5-1-7.5.8 5.9 5 7.5 7 7.5 1.7 0 5-1.2 5-6.4 0-3.1-1.3-5.5-2.4-6.9-.3-.5-1-.2-1.1.3'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
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

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='fill: %237c849c' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M282.3 343.7L248.1 376.1C244.5 381.5 238.4 384 232 384H192V424C192 437.3 181.3 448 168 448H128V488C128 501.3 117.3 512 104 512H24C10.75 512 0 501.3 0 488V408C0 401.6 2.529 395.5 7.029 391L168.3 229.7C162.9 212.8 160 194.7 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352C317.3 352 299.2 349.1 282.3 343.7zM376 176C398.1 176 416 158.1 416 136C416 113.9 398.1 96 376 96C353.9 96 336 113.9 336 136C336 158.1 353.9 176 376 176z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='fill: %237c849c' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M282.3 343.7L248.1 376.1C244.5 381.5 238.4 384 232 384H192V424C192 437.3 181.3 448 168 448H128V488C128 501.3 117.3 512 104 512H24C10.75 512 0 501.3 0 488V408C0 401.6 2.529 395.5 7.029 391L168.3 229.7C162.9 212.8 160 194.7 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352C317.3 352 299.2 349.1 282.3 343.7zM376 176C398.1 176 416 158.1 416 136C416 113.9 398.1 96 376 96C353.9 96 336 113.9 336 136C336 158.1 353.9 176 376 176z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 9.99999C4.99858 7.16754 6.70425 4.61338 9.32107 3.52939C11.9379 2.44539 14.9501 3.04523 16.952 5.04899C18.2685 6.3596 19.0059 8.14238 19 9.99999C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 6.99999C10.9282 6.99999 9.93782 7.57179 9.40193 8.49999C8.86603 9.42819 8.86603 10.5718 9.40193 11.5C9.93782 12.4282 10.9282 13 12 13C13.6569 13 15 11.6568 15 9.99999C15 8.34313 13.6569 6.99999 12 6.99999Z' fill='%237c849c'%3E%3C/path%3E%3C/svg%3E%0A");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 9.99999C4.99858 7.16754 6.70425 4.61338 9.32107 3.52939C11.9379 2.44539 14.9501 3.04523 16.952 5.04899C18.2685 6.3596 19.0059 8.14238 19 9.99999C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 6.99999C10.9282 6.99999 9.93782 7.57179 9.40193 8.49999C8.86603 9.42819 8.86603 10.5718 9.40193 11.5C9.93782 12.4282 10.9282 13 12 13C13.6569 13 15 11.6568 15 9.99999C15 8.34313 13.6569 6.99999 12 6.99999Z' fill='%237c849c'%3E%3C/path%3E%3C/svg%3E%0A");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(0, 0, 0)transform: msFilter:'%3E%3Cpath d='M15 11.586V6h2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2h2v5.586l-2.707 1.707A.996.996 0 0 0 6 14v2a1 1 0 0 0 1 1h4v3l1 2 1-2v-3h4a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L15 11.586z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgb(0, 0, 0)transform: msFilter:'%3E%3Cpath d='M15 11.586V6h2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2h2v5.586l-2.707 1.707A.996.996 0 0 0 6 14v2a1 1 0 0 0 1 1h4v3l1 2 1-2v-3h4a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L15 11.586z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 14.915V18h-2v-1.08c-2.339-.367-3-2.002-3-2.92h2c.011.143.159 1 2 1 1.38 0 2-.585 2-1 0-.324 0-1-2-1-3.48 0-4-1.88-4-3 0-1.288 1.029-2.584 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .516-2 1 0 .374 0 1 2 1 3.48 0 4 1.88 4 3 0 1.288-1.029 2.584-3 2.915z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: %237c849ctransform: msFilter:'%3E%3Cpath d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 14.915V18h-2v-1.08c-2.339-.367-3-2.002-3-2.92h2c.011.143.159 1 2 1 1.38 0 2-.585 2-1 0-.324 0-1-2-1-3.48 0-4-1.88-4-3 0-1.288 1.029-2.584 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .516-2 1 0 .374 0 1 2 1 3.48 0 4 1.88 4 3 0 1.288-1.029 2.584-3 2.915z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 13.414C13.1875 13.6015 13.4418 13.7069 13.707 13.707H14.293C14.5582 13.7069 14.8125 13.6015 15 13.414L19.707 8.707L22 11V5H16L18.293 7.293L14 11.586L11 8.586C10.8125 8.39845 10.5582 8.29306 10.293 8.293H9.70697C9.44177 8.29306 9.18746 8.39845 8.99997 8.586L2.29297 15.293L3.70697 16.707L9.99997 10.414L13 13.414Z' fill='%237c849c'%3E%3C/path%3E%3C/svg%3E%0A");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 13.414C13.1875 13.6015 13.4418 13.7069 13.707 13.707H14.293C14.5582 13.7069 14.8125 13.6015 15 13.414L19.707 8.707L22 11V5H16L18.293 7.293L14 11.586L11 8.586C10.8125 8.39845 10.5582 8.29306 10.293 8.293H9.70697C9.44177 8.29306 9.18746 8.39845 8.99997 8.586L2.29297 15.293L3.70697 16.707L9.99997 10.414L13 13.414Z' fill='%237c849c'%3E%3C/path%3E%3C/svg%3E%0A");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
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
  --callout-color: 255, 84, 84;
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

html body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 84, 84));
}

html body .callout > .callout-content {
  background: rgb(35, 36, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(35, 36, 42));
  color: rgb(114, 195, 213);
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 74, 176, 255);
  background: rgba(74, 176, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 255, 84, 84;
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

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 84, 84));
}

html body .callout[data-callout="abstract"] > .callout-content {
  background: rgb(35, 36, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(35, 36, 42));
  color: rgb(114, 195, 213);
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 252, 95, 142);
  background: rgba(252, 95, 142, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 255, 84, 84;
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

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 84, 84));
}

html body .callout[data-callout="bug"] > .callout-content {
  background: rgb(35, 36, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(35, 36, 42));
  color: rgb(114, 195, 213);
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
}

html body .callout[data-callout="con"] {
  --background-modifier-active-hover: hsl(230, 8%, 10%);
  --background-modifier-border: rgba(100, 100, 100, 0.25);
  --background-modifier-border-focus: hsl(59, 71%, 68%);
  --background-modifier-border-hover: rgba(255, 255, 255, 0.25);
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: hsl(230, 9%, 13%);
  --background-modifier-form-field-hover: hsl(230, 9%, 13%);
  --background-modifier-hover: transparent;
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(225, 12%, 20%);
  --background-primary-alt: hsl(231, 9%, 15%);
  --background-secondary: hsl(230, 9%, 13%);
  --background-secondary-alt: hsl(230, 9%, 13%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(263, 46%, 61%);
  --blur-background: color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent) linear-gradient(hsl(230, 8%, 10%), color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(51, 55%, 69%);
  --bold-italic-color: hsl(225, 17%, 88%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 2px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 255, 84, 84);
  --callout-content-padding: 0 20px;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 0 0 0 0;
  --callout-question: 233, 151, 63;
  --callout-radius: 2px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(225, 12%, 20%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: hsl(225, 18%, 25%);
  --caret-color: hsl(224, 37%, 80%);
  --checkbox-border-color: hsl(219, 10%, 29%);
  --checkbox-border-color-hover: hsl(219, 10%, 29%);
  --checkbox-color: transparent;
  --checkbox-color-hover: transparent;
  --checkbox-marker-color: hsl(225, 14%, 55%);
  --checkbox-radius: 2px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(225, 15%, 61%);
  --clickable-icon-radius: 2px;
  --code-background: hsl(231, 9%, 15%);
  --code-border-color: rgba(100, 100, 100, 0.25);
  --code-bracket-background: transparent;
  --code-comment: hsl(225, 17%, 84%);
  --code-function: hsl(334, 37%, 65%);
  --code-important: hsl(220, 23%, 90%);
  --code-keyword: hsl(263, 37%, 69%);
  --code-normal: hsl(224, 37%, 80%);
  --code-operator: #fb464c;
  --code-property: hsl(61, 46%, 69%);
  --code-punctuation: hsl(225, 14%, 40%);
  --code-radius: 0px;
  --code-size: 0.875em;
  --code-string: hsl(124, 54%, 75%);
  --code-tag: hsl(334, 37%, 65%);
  --code-value: hsl(183, 29%, 62%);
  --collapse-icon-color: hsl(225, 14%, 55%);
  --collapse-icon-color-collapsed: hsl(224, 37%, 80%);
  --color-accent: hsl(263, 46%, 61%);
  --color-accent-1: hsl(263, 46%, 57.2%);
  --color-accent-2: hsl(263, 46%, 64.8%);
  --color-accent-hsl: 263,
              46%,
              61%;
  --color-highlight-text: hsl(191, 54%, 64%);
  --comment-color: hsl(225, 17%, 84%);
  --divider-color: hsl(230, 9%, 13%);
  --divider-color-hover: hsl(226, 10%, 47%);
  --divider-vertical-height: calc(100% - 40px);
  --dropdown-background: hsl(230, 8%, 10%);
  --dropdown-background-hover: hsl(225, 11%, 36%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(230, 8%, 10%);
  --flair-color: hsl(224, 37%, 80%);
  --font-interface: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-mermaid: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'DM Mono', 'Fira Code', Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'DM Mono', 'Fira Code', Courier, monospace;
  --font-print: '??', '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, 'Arial';
  --font-text: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-weight: 400;
  --graph-color-line: hsl(196, 27%, 41%);
  --graph-color-line-hover: hsl(224, 17%, 68%);
  --graph-color-node-border-hover: hsl(220, 23%, 95%);
  --graph-color-node-hover: hsl(317, 62%, 65%);
  --graph-line: hsl(196, 27%, 41%);
  --graph-node: hsl(58, 86%, 66%);
  --graph-node-attachment: hsl(220, 23%, 90%);
  --graph-node-focused: hsl(225, 14%, 55%);
  --graph-node-tag: hsl(194, 50%, 47%);
  --graph-node-unresolved: hsl(263, 46%, 61%);
  --graph-text: hsl(225, 17%, 88%);
  --h1-color: hsl(59, 81%, 47%);
  --h2-color: hsl(260, 100%, 79%);
  --h3-color: hsl(191, 90%, 50%);
  --h4-color: hsl(151, 54%, 64%);
  --h5-color: hsl(224, 37%, 80%);
  --h6-color: hsl(223, 18%, 68%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(219, 10%, 29%);
  --interactive-accent: hsl(225, 14%, 40%);
  --interactive-accent-hover: hsl(223, 18%, 68%);
  --interactive-accent-hsl: 255, 14%, 40%;
  --interactive-hover: hsl(225, 11%, 36%);
  --interactive-normal: hsl(230, 8%, 10%);
  --italic-color: hsl(255, 100%, 86%);
  --link-color: hsl(334, 100%, 75%);
  --link-color-hover: hsl(334, 100%, 75%);
  --link-external-color: hsl(334, 100%, 75%);
  --link-external-color-hover: hsl(334, 100%, 75%);
  --link-unresolved-color: hsl(334, 100%, 75%);
  --link-unresolved-decoration-color: hsla(255, 14%, 40%, 0.5);
  --link-weight: 400;
  --list-indent: 1.75em;
  --menu-background: hsl(230, 9%, 13%);
  --menu-border-color: rgba(255, 255, 255, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 2px;
  --menu-shadow: 0px 3px 12px -2px rgba(14, 11, 11, 0.5);
  --pdf-background: hsl(225, 12%, 20%);
  --pdf-page-background: hsl(225, 12%, 20%);
  --pdf-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25);
  --pdf-sidebar-background: hsl(225, 12%, 20%);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent) linear-gradient(hsl(230, 8%, 10%), color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(230, 9%, 13%);
  --scrollbar-bg: transparent;
  --scrollbar-radius: 4px;
  --scrollbar-thumb-bg: hsl(231, 9%, 15%);
  --search-clear-button-color: hsl(224, 17%, 68%);
  --search-icon-color: hsl(224, 17%, 68%);
  --search-result-background: hsl(225, 12%, 20%);
  --setting-group-heading-color: hsl(224, 37%, 80%);
  --setting-group-heading-size: 16px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(231, 9%, 15%);
  --setting-items-border-color: rgba(100, 100, 100, 0.25);
  --setting-items-padding: 20px;
  --setting-items-radius: 4px;
  --shadow-l: 0px 2px 2.3px -52px rgba(0, 0, 0, 0.448),
        0px 5.6px 6.3px -52px rgba(0, 0, 0, 0.6),
        0px 13.6px 15.1px -52px rgba(0, 0, 0, 0.852),
        0px 45px 50px -52px rgb(0, 0, 0);
  --shadow-s: 0px 3px 12px -2px rgba(14, 11, 11, 0.5);
  --shiki-active-tab-border-color: hsl(224, 17%, 68%);
  --shiki-code-background: hsl(231, 9%, 15%);
  --shiki-code-block-border-radius: 0px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(225, 14%, 55%);
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: hsl(224, 17%, 68%);
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: hsl(224, 17%, 68%);
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(100, 100, 100, 0.25);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(225, 14%, 55%);
  --shiki-gutter-text-color-highlight: hsl(224, 17%, 68%);
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: hsl(224, 17%, 68%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(225, 14%, 55%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --strikethrough-color: hsl(225, 14%, 55%);
  --suggestion-background: hsl(225, 12%, 20%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: hsl(225, 12%, 20%);
  --tab-divider-color: rgba(100, 100, 100, 0.25);
  --tab-font-size: 14px;
  --tab-outline-color: transparent;
  --tab-radius: 0px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(230, 9%, 13%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 9%, 13%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(263, 46%, 61%);
  --tab-text-color: hsl(192, 46%, 68%);
  --tab-text-color-active: hsl(224, 17%, 68%);
  --tab-text-color-focused: hsl(225, 14%, 55%);
  --tab-text-color-focused-active: hsl(220, 23%, 95%);
  --tab-text-color-focused-active-current: hsl(224, 37%, 80%);
  --tab-text-color-focused-highlighted: hsl(224, 37%, 80%);
  --table-add-button-border-color: rgba(100, 100, 100, 0.25);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(225, 14%, 40%);
  --table-drag-handle-color: hsl(225, 14%, 55%);
  --table-drag-handle-color-active: hsl(220, 23%, 95%);
  --table-header-background: hsl(231, 9%, 15%);
  --table-header-background-hover: hsl(231, 9%, 15%);
  --table-header-border-color: hsl(219, 10%, 29%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(220, 23%, 90%);
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: rgba(0, 0, 0, 0.08);
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: rgba(0, 0, 0, 0.3);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(263,
              46%,
              61%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(225, 14%, 40%);
  --tag-background: rgba(0, 0, 0, 0.15);
  --tag-background-hover: rgba(0, 0, 0, 0.15);
  --tag-border-color: transparent;
  --tag-border-color-hover: transparent;
  --tag-color: hsl(151, 54%, 64%);
  --tag-color-hover: hsl(151, 54%, 64%);
  --tag-size: 0.875em;
  --text-accent: hsl(224, 37%, 80%);
  --text-accent-hover: hsl(220, 23%, 95%);
  --text-error: hsl(342, 96%, 68%);
  --text-faint: hsl(225, 14%, 55%);
  --text-faintly-muted: hsl(225, 15%, 61%);
  --text-highlight-bg: rgba(255, 252, 59, 0.08);
  --text-highlight-bg-active: rgba(255, 252, 59, 0.08);
  --text-muted: hsl(224, 17%, 68%);
  --text-normal: hsl(224, 37%, 80%);
  --text-on-accent: hsl(220, 23%, 95%);
  --text-selection: rgba(134, 169, 209, 0.15);
  --text-success: hsl(167, 83%, 31%);
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --window-border: 1px solid hsl(225, 11%, 36%);
  --window-border-color: hsl(225, 11%, 36%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(255, 84, 84, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 84, 84, 0.3);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 84, 84, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 84, 84, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: 0px 1px 0px var(--shadow-300);
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 25.28px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255, 74, 74);
  background: rgba(255, 74, 74, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 255, 84, 84;
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

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 84, 84));
}

html body .callout[data-callout="danger"] > .callout-content {
  background: rgb(35, 36, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(35, 36, 42));
  color: rgb(114, 195, 213);
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 184, 148, 255);
  background: rgba(184, 148, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 255, 84, 84;
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

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 84, 84));
}

html body .callout[data-callout="example"] > .callout-content {
  background: rgb(35, 36, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(35, 36, 42));
  color: rgb(114, 195, 213);
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 74, 74);
  background: rgba(255, 74, 74, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 255, 84, 84;
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

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 84, 84));
}

html body .callout[data-callout="failure"] > .callout-content {
  background: rgb(35, 36, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(35, 36, 42));
  color: rgb(114, 195, 213);
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
}

html body .callout[data-callout="idea"] {
  --background-modifier-active-hover: hsl(230, 8%, 10%);
  --background-modifier-border: rgba(100, 100, 100, 0.25);
  --background-modifier-border-focus: hsl(59, 71%, 68%);
  --background-modifier-border-hover: rgba(255, 255, 255, 0.25);
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: hsl(230, 9%, 13%);
  --background-modifier-form-field-hover: hsl(230, 9%, 13%);
  --background-modifier-hover: transparent;
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(225, 12%, 20%);
  --background-primary-alt: hsl(231, 9%, 15%);
  --background-secondary: hsl(230, 9%, 13%);
  --background-secondary-alt: hsl(230, 9%, 13%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(263, 46%, 61%);
  --blur-background: color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent) linear-gradient(hsl(230, 8%, 10%), color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(51, 55%, 69%);
  --bold-italic-color: hsl(225, 17%, 88%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 2px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 238, 255, 139);
  --callout-content-padding: 0 20px;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 0 0 0 0;
  --callout-question: 233, 151, 63;
  --callout-radius: 2px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(225, 12%, 20%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: hsl(225, 18%, 25%);
  --caret-color: hsl(224, 37%, 80%);
  --checkbox-border-color: hsl(219, 10%, 29%);
  --checkbox-border-color-hover: hsl(219, 10%, 29%);
  --checkbox-color: transparent;
  --checkbox-color-hover: transparent;
  --checkbox-marker-color: hsl(225, 14%, 55%);
  --checkbox-radius: 2px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(225, 15%, 61%);
  --clickable-icon-radius: 2px;
  --code-background: hsl(231, 9%, 15%);
  --code-border-color: rgba(100, 100, 100, 0.25);
  --code-bracket-background: transparent;
  --code-comment: hsl(225, 17%, 84%);
  --code-function: hsl(334, 37%, 65%);
  --code-important: hsl(220, 23%, 90%);
  --code-keyword: hsl(263, 37%, 69%);
  --code-normal: hsl(224, 37%, 80%);
  --code-operator: #fb464c;
  --code-property: hsl(61, 46%, 69%);
  --code-punctuation: hsl(225, 14%, 40%);
  --code-radius: 0px;
  --code-size: 0.875em;
  --code-string: hsl(124, 54%, 75%);
  --code-tag: hsl(334, 37%, 65%);
  --code-value: hsl(183, 29%, 62%);
  --collapse-icon-color: hsl(225, 14%, 55%);
  --collapse-icon-color-collapsed: hsl(224, 37%, 80%);
  --color-accent: hsl(263, 46%, 61%);
  --color-accent-1: hsl(263, 46%, 57.2%);
  --color-accent-2: hsl(263, 46%, 64.8%);
  --color-accent-hsl: 263,
              46%,
              61%;
  --color-highlight-text: hsl(191, 54%, 64%);
  --comment-color: hsl(225, 17%, 84%);
  --divider-color: hsl(230, 9%, 13%);
  --divider-color-hover: hsl(226, 10%, 47%);
  --divider-vertical-height: calc(100% - 40px);
  --dropdown-background: hsl(230, 8%, 10%);
  --dropdown-background-hover: hsl(225, 11%, 36%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(230, 8%, 10%);
  --flair-color: hsl(224, 37%, 80%);
  --font-interface: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-mermaid: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'DM Mono', 'Fira Code', Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'DM Mono', 'Fira Code', Courier, monospace;
  --font-print: '??', '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, 'Arial';
  --font-text: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-weight: 400;
  --graph-color-line: hsl(196, 27%, 41%);
  --graph-color-line-hover: hsl(224, 17%, 68%);
  --graph-color-node-border-hover: hsl(220, 23%, 95%);
  --graph-color-node-hover: hsl(317, 62%, 65%);
  --graph-line: hsl(196, 27%, 41%);
  --graph-node: hsl(58, 86%, 66%);
  --graph-node-attachment: hsl(220, 23%, 90%);
  --graph-node-focused: hsl(225, 14%, 55%);
  --graph-node-tag: hsl(194, 50%, 47%);
  --graph-node-unresolved: hsl(263, 46%, 61%);
  --graph-text: hsl(225, 17%, 88%);
  --h1-color: hsl(59, 81%, 47%);
  --h2-color: hsl(260, 100%, 79%);
  --h3-color: hsl(191, 90%, 50%);
  --h4-color: hsl(151, 54%, 64%);
  --h5-color: hsl(224, 37%, 80%);
  --h6-color: hsl(223, 18%, 68%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(219, 10%, 29%);
  --interactive-accent: hsl(225, 14%, 40%);
  --interactive-accent-hover: hsl(223, 18%, 68%);
  --interactive-accent-hsl: 255, 14%, 40%;
  --interactive-hover: hsl(225, 11%, 36%);
  --interactive-normal: hsl(230, 8%, 10%);
  --italic-color: hsl(255, 100%, 86%);
  --link-color: hsl(334, 100%, 75%);
  --link-color-hover: hsl(334, 100%, 75%);
  --link-external-color: hsl(334, 100%, 75%);
  --link-external-color-hover: hsl(334, 100%, 75%);
  --link-unresolved-color: hsl(334, 100%, 75%);
  --link-unresolved-decoration-color: hsla(255, 14%, 40%, 0.5);
  --link-weight: 400;
  --list-indent: 1.75em;
  --menu-background: hsl(230, 9%, 13%);
  --menu-border-color: rgba(255, 255, 255, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 2px;
  --menu-shadow: 0px 3px 12px -2px rgba(14, 11, 11, 0.5);
  --pdf-background: hsl(225, 12%, 20%);
  --pdf-page-background: hsl(225, 12%, 20%);
  --pdf-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25);
  --pdf-sidebar-background: hsl(225, 12%, 20%);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent) linear-gradient(hsl(230, 8%, 10%), color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(230, 9%, 13%);
  --scrollbar-bg: transparent;
  --scrollbar-radius: 4px;
  --scrollbar-thumb-bg: hsl(231, 9%, 15%);
  --search-clear-button-color: hsl(224, 17%, 68%);
  --search-icon-color: hsl(224, 17%, 68%);
  --search-result-background: hsl(225, 12%, 20%);
  --setting-group-heading-color: hsl(224, 37%, 80%);
  --setting-group-heading-size: 16px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(231, 9%, 15%);
  --setting-items-border-color: rgba(100, 100, 100, 0.25);
  --setting-items-padding: 20px;
  --setting-items-radius: 4px;
  --shadow-l: 0px 2px 2.3px -52px rgba(0, 0, 0, 0.448),
        0px 5.6px 6.3px -52px rgba(0, 0, 0, 0.6),
        0px 13.6px 15.1px -52px rgba(0, 0, 0, 0.852),
        0px 45px 50px -52px rgb(0, 0, 0);
  --shadow-s: 0px 3px 12px -2px rgba(14, 11, 11, 0.5);
  --shiki-active-tab-border-color: hsl(224, 17%, 68%);
  --shiki-code-background: hsl(231, 9%, 15%);
  --shiki-code-block-border-radius: 0px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(225, 14%, 55%);
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: hsl(224, 17%, 68%);
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: hsl(224, 17%, 68%);
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(100, 100, 100, 0.25);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(225, 14%, 55%);
  --shiki-gutter-text-color-highlight: hsl(224, 17%, 68%);
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: hsl(224, 17%, 68%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(225, 14%, 55%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --strikethrough-color: hsl(225, 14%, 55%);
  --suggestion-background: hsl(225, 12%, 20%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: hsl(225, 12%, 20%);
  --tab-divider-color: rgba(100, 100, 100, 0.25);
  --tab-font-size: 14px;
  --tab-outline-color: transparent;
  --tab-radius: 0px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(230, 9%, 13%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 9%, 13%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(263, 46%, 61%);
  --tab-text-color: hsl(192, 46%, 68%);
  --tab-text-color-active: hsl(224, 17%, 68%);
  --tab-text-color-focused: hsl(225, 14%, 55%);
  --tab-text-color-focused-active: hsl(220, 23%, 95%);
  --tab-text-color-focused-active-current: hsl(224, 37%, 80%);
  --tab-text-color-focused-highlighted: hsl(224, 37%, 80%);
  --table-add-button-border-color: rgba(100, 100, 100, 0.25);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(225, 14%, 40%);
  --table-drag-handle-color: hsl(225, 14%, 55%);
  --table-drag-handle-color-active: hsl(220, 23%, 95%);
  --table-header-background: hsl(231, 9%, 15%);
  --table-header-background-hover: hsl(231, 9%, 15%);
  --table-header-border-color: hsl(219, 10%, 29%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(220, 23%, 90%);
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: rgba(0, 0, 0, 0.08);
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: rgba(0, 0, 0, 0.3);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(263,
              46%,
              61%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(225, 14%, 40%);
  --tag-background: rgba(0, 0, 0, 0.15);
  --tag-background-hover: rgba(0, 0, 0, 0.15);
  --tag-border-color: transparent;
  --tag-border-color-hover: transparent;
  --tag-color: hsl(151, 54%, 64%);
  --tag-color-hover: hsl(151, 54%, 64%);
  --tag-size: 0.875em;
  --text-accent: hsl(224, 37%, 80%);
  --text-accent-hover: hsl(220, 23%, 95%);
  --text-error: hsl(342, 96%, 68%);
  --text-faint: hsl(225, 14%, 55%);
  --text-faintly-muted: hsl(225, 15%, 61%);
  --text-highlight-bg: rgba(255, 252, 59, 0.08);
  --text-highlight-bg-active: rgba(255, 252, 59, 0.08);
  --text-muted: hsl(224, 17%, 68%);
  --text-normal: hsl(224, 37%, 80%);
  --text-on-accent: hsl(220, 23%, 95%);
  --text-selection: rgba(134, 169, 209, 0.15);
  --text-success: hsl(167, 83%, 31%);
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --window-border: 1px solid hsl(225, 11%, 36%);
  --window-border-color: hsl(225, 11%, 36%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(238, 255, 139, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(238, 255, 139, 0.3);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(238, 255, 139, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(238, 255, 139, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: 0px 1px 0px var(--shadow-300);
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 25.28px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 74, 176, 255);
  background: rgba(74, 176, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 255, 84, 84;
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

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 84, 84));
}

html body .callout[data-callout="info"] > .callout-content {
  background: rgb(35, 36, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(35, 36, 42));
  color: rgb(114, 195, 213);
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 207, 227, 255);
  background: rgba(207, 227, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 255, 84, 84;
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

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 84, 84));
}

html body .callout[data-callout="note"] > .callout-content {
  background: rgb(35, 36, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(35, 36, 42));
  color: rgb(114, 195, 213);
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
}

html body .callout[data-callout="pro"] {
  --background-modifier-active-hover: hsl(230, 8%, 10%);
  --background-modifier-border: rgba(100, 100, 100, 0.25);
  --background-modifier-border-focus: hsl(59, 71%, 68%);
  --background-modifier-border-hover: rgba(255, 255, 255, 0.25);
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: hsl(230, 9%, 13%);
  --background-modifier-form-field-hover: hsl(230, 9%, 13%);
  --background-modifier-hover: transparent;
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(225, 12%, 20%);
  --background-primary-alt: hsl(231, 9%, 15%);
  --background-secondary: hsl(230, 9%, 13%);
  --background-secondary-alt: hsl(230, 9%, 13%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(263, 46%, 61%);
  --blur-background: color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent) linear-gradient(hsl(230, 8%, 10%), color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(51, 55%, 69%);
  --bold-italic-color: hsl(225, 17%, 88%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 2px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 65, 201, 108);
  --callout-content-padding: 0 20px;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 0 0 0 0;
  --callout-question: 233, 151, 63;
  --callout-radius: 2px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(225, 12%, 20%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: hsl(225, 18%, 25%);
  --caret-color: hsl(224, 37%, 80%);
  --checkbox-border-color: hsl(219, 10%, 29%);
  --checkbox-border-color-hover: hsl(219, 10%, 29%);
  --checkbox-color: transparent;
  --checkbox-color-hover: transparent;
  --checkbox-marker-color: hsl(225, 14%, 55%);
  --checkbox-radius: 2px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(225, 15%, 61%);
  --clickable-icon-radius: 2px;
  --code-background: hsl(231, 9%, 15%);
  --code-border-color: rgba(100, 100, 100, 0.25);
  --code-bracket-background: transparent;
  --code-comment: hsl(225, 17%, 84%);
  --code-function: hsl(334, 37%, 65%);
  --code-important: hsl(220, 23%, 90%);
  --code-keyword: hsl(263, 37%, 69%);
  --code-normal: hsl(224, 37%, 80%);
  --code-operator: #fb464c;
  --code-property: hsl(61, 46%, 69%);
  --code-punctuation: hsl(225, 14%, 40%);
  --code-radius: 0px;
  --code-size: 0.875em;
  --code-string: hsl(124, 54%, 75%);
  --code-tag: hsl(334, 37%, 65%);
  --code-value: hsl(183, 29%, 62%);
  --collapse-icon-color: hsl(225, 14%, 55%);
  --collapse-icon-color-collapsed: hsl(224, 37%, 80%);
  --color-accent: hsl(263, 46%, 61%);
  --color-accent-1: hsl(263, 46%, 57.2%);
  --color-accent-2: hsl(263, 46%, 64.8%);
  --color-accent-hsl: 263,
              46%,
              61%;
  --color-highlight-text: hsl(191, 54%, 64%);
  --comment-color: hsl(225, 17%, 84%);
  --divider-color: hsl(230, 9%, 13%);
  --divider-color-hover: hsl(226, 10%, 47%);
  --divider-vertical-height: calc(100% - 40px);
  --dropdown-background: hsl(230, 8%, 10%);
  --dropdown-background-hover: hsl(225, 11%, 36%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(230, 8%, 10%);
  --flair-color: hsl(224, 37%, 80%);
  --font-interface: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-mermaid: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'DM Mono', 'Fira Code', Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'DM Mono', 'Fira Code', Courier, monospace;
  --font-print: '??', '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, 'Arial';
  --font-text: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-weight: 400;
  --graph-color-line: hsl(196, 27%, 41%);
  --graph-color-line-hover: hsl(224, 17%, 68%);
  --graph-color-node-border-hover: hsl(220, 23%, 95%);
  --graph-color-node-hover: hsl(317, 62%, 65%);
  --graph-line: hsl(196, 27%, 41%);
  --graph-node: hsl(58, 86%, 66%);
  --graph-node-attachment: hsl(220, 23%, 90%);
  --graph-node-focused: hsl(225, 14%, 55%);
  --graph-node-tag: hsl(194, 50%, 47%);
  --graph-node-unresolved: hsl(263, 46%, 61%);
  --graph-text: hsl(225, 17%, 88%);
  --h1-color: hsl(59, 81%, 47%);
  --h2-color: hsl(260, 100%, 79%);
  --h3-color: hsl(191, 90%, 50%);
  --h4-color: hsl(151, 54%, 64%);
  --h5-color: hsl(224, 37%, 80%);
  --h6-color: hsl(223, 18%, 68%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(219, 10%, 29%);
  --interactive-accent: hsl(225, 14%, 40%);
  --interactive-accent-hover: hsl(223, 18%, 68%);
  --interactive-accent-hsl: 255, 14%, 40%;
  --interactive-hover: hsl(225, 11%, 36%);
  --interactive-normal: hsl(230, 8%, 10%);
  --italic-color: hsl(255, 100%, 86%);
  --link-color: hsl(334, 100%, 75%);
  --link-color-hover: hsl(334, 100%, 75%);
  --link-external-color: hsl(334, 100%, 75%);
  --link-external-color-hover: hsl(334, 100%, 75%);
  --link-unresolved-color: hsl(334, 100%, 75%);
  --link-unresolved-decoration-color: hsla(255, 14%, 40%, 0.5);
  --link-weight: 400;
  --list-indent: 1.75em;
  --menu-background: hsl(230, 9%, 13%);
  --menu-border-color: rgba(255, 255, 255, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 2px;
  --menu-shadow: 0px 3px 12px -2px rgba(14, 11, 11, 0.5);
  --pdf-background: hsl(225, 12%, 20%);
  --pdf-page-background: hsl(225, 12%, 20%);
  --pdf-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25);
  --pdf-sidebar-background: hsl(225, 12%, 20%);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent) linear-gradient(hsl(230, 8%, 10%), color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(230, 9%, 13%);
  --scrollbar-bg: transparent;
  --scrollbar-radius: 4px;
  --scrollbar-thumb-bg: hsl(231, 9%, 15%);
  --search-clear-button-color: hsl(224, 17%, 68%);
  --search-icon-color: hsl(224, 17%, 68%);
  --search-result-background: hsl(225, 12%, 20%);
  --setting-group-heading-color: hsl(224, 37%, 80%);
  --setting-group-heading-size: 16px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(231, 9%, 15%);
  --setting-items-border-color: rgba(100, 100, 100, 0.25);
  --setting-items-padding: 20px;
  --setting-items-radius: 4px;
  --shadow-l: 0px 2px 2.3px -52px rgba(0, 0, 0, 0.448),
        0px 5.6px 6.3px -52px rgba(0, 0, 0, 0.6),
        0px 13.6px 15.1px -52px rgba(0, 0, 0, 0.852),
        0px 45px 50px -52px rgb(0, 0, 0);
  --shadow-s: 0px 3px 12px -2px rgba(14, 11, 11, 0.5);
  --shiki-active-tab-border-color: hsl(224, 17%, 68%);
  --shiki-code-background: hsl(231, 9%, 15%);
  --shiki-code-block-border-radius: 0px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(225, 14%, 55%);
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: hsl(224, 17%, 68%);
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: hsl(224, 17%, 68%);
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(100, 100, 100, 0.25);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(225, 14%, 55%);
  --shiki-gutter-text-color-highlight: hsl(224, 17%, 68%);
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: hsl(224, 17%, 68%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(225, 14%, 55%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --strikethrough-color: hsl(225, 14%, 55%);
  --suggestion-background: hsl(225, 12%, 20%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: hsl(225, 12%, 20%);
  --tab-divider-color: rgba(100, 100, 100, 0.25);
  --tab-font-size: 14px;
  --tab-outline-color: transparent;
  --tab-radius: 0px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(230, 9%, 13%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 9%, 13%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(263, 46%, 61%);
  --tab-text-color: hsl(192, 46%, 68%);
  --tab-text-color-active: hsl(224, 17%, 68%);
  --tab-text-color-focused: hsl(225, 14%, 55%);
  --tab-text-color-focused-active: hsl(220, 23%, 95%);
  --tab-text-color-focused-active-current: hsl(224, 37%, 80%);
  --tab-text-color-focused-highlighted: hsl(224, 37%, 80%);
  --table-add-button-border-color: rgba(100, 100, 100, 0.25);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(225, 14%, 40%);
  --table-drag-handle-color: hsl(225, 14%, 55%);
  --table-drag-handle-color-active: hsl(220, 23%, 95%);
  --table-header-background: hsl(231, 9%, 15%);
  --table-header-background-hover: hsl(231, 9%, 15%);
  --table-header-border-color: hsl(219, 10%, 29%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(220, 23%, 90%);
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: rgba(0, 0, 0, 0.08);
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: rgba(0, 0, 0, 0.3);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(263,
              46%,
              61%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(225, 14%, 40%);
  --tag-background: rgba(0, 0, 0, 0.15);
  --tag-background-hover: rgba(0, 0, 0, 0.15);
  --tag-border-color: transparent;
  --tag-border-color-hover: transparent;
  --tag-color: hsl(151, 54%, 64%);
  --tag-color-hover: hsl(151, 54%, 64%);
  --tag-size: 0.875em;
  --text-accent: hsl(224, 37%, 80%);
  --text-accent-hover: hsl(220, 23%, 95%);
  --text-error: hsl(342, 96%, 68%);
  --text-faint: hsl(225, 14%, 55%);
  --text-faintly-muted: hsl(225, 15%, 61%);
  --text-highlight-bg: rgba(255, 252, 59, 0.08);
  --text-highlight-bg-active: rgba(255, 252, 59, 0.08);
  --text-muted: hsl(224, 17%, 68%);
  --text-normal: hsl(224, 37%, 80%);
  --text-on-accent: hsl(220, 23%, 95%);
  --text-selection: rgba(134, 169, 209, 0.15);
  --text-success: hsl(167, 83%, 31%);
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --window-border: 1px solid hsl(225, 11%, 36%);
  --window-border-color: hsl(225, 11%, 36%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(65, 201, 108, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(65, 201, 108, 0.3);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(65, 201, 108, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(65, 201, 108, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: 0px 1px 0px var(--shadow-300);
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 25.28px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 255, 128, 183);
  background: rgba(255, 128, 183, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 255, 84, 84;
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

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 84, 84));
}

html body .callout[data-callout="question"] > .callout-content {
  background: rgb(35, 36, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(35, 36, 42));
  color: rgb(114, 195, 213);
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 184, 148, 255);
  background: rgba(184, 148, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 255, 84, 84;
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

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 84, 84));
}

html body .callout[data-callout="quote"] > .callout-content {
  background: rgb(35, 36, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(35, 36, 42));
  color: rgb(114, 195, 213);
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
}

html body .callout[data-callout="related"] {
  --background-modifier-active-hover: hsl(230, 8%, 10%);
  --background-modifier-border: rgba(100, 100, 100, 0.25);
  --background-modifier-border-focus: hsl(59, 71%, 68%);
  --background-modifier-border-hover: rgba(255, 255, 255, 0.25);
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: hsl(230, 9%, 13%);
  --background-modifier-form-field-hover: hsl(230, 9%, 13%);
  --background-modifier-hover: transparent;
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(225, 12%, 20%);
  --background-primary-alt: hsl(231, 9%, 15%);
  --background-secondary: hsl(230, 9%, 13%);
  --background-secondary-alt: hsl(230, 9%, 13%);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(263, 46%, 61%);
  --blur-background: color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent) linear-gradient(hsl(230, 8%, 10%), color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(51, 55%, 69%);
  --bold-italic-color: hsl(225, 17%, 88%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 2px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 184, 148, 255);
  --callout-content-padding: 0 20px;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 0 0 0 0;
  --callout-question: 233, 151, 63;
  --callout-radius: 2px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(225, 12%, 20%);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: hsl(225, 18%, 25%);
  --caret-color: hsl(224, 37%, 80%);
  --checkbox-border-color: hsl(219, 10%, 29%);
  --checkbox-border-color-hover: hsl(219, 10%, 29%);
  --checkbox-color: transparent;
  --checkbox-color-hover: transparent;
  --checkbox-marker-color: hsl(225, 14%, 55%);
  --checkbox-radius: 2px;
  --checkbox-size: 16px;
  --checklist-done-color: hsl(225, 15%, 61%);
  --clickable-icon-radius: 2px;
  --code-background: hsl(231, 9%, 15%);
  --code-border-color: rgba(100, 100, 100, 0.25);
  --code-bracket-background: transparent;
  --code-comment: hsl(225, 17%, 84%);
  --code-function: hsl(334, 37%, 65%);
  --code-important: hsl(220, 23%, 90%);
  --code-keyword: hsl(263, 37%, 69%);
  --code-normal: hsl(224, 37%, 80%);
  --code-operator: #fb464c;
  --code-property: hsl(61, 46%, 69%);
  --code-punctuation: hsl(225, 14%, 40%);
  --code-radius: 0px;
  --code-size: 0.875em;
  --code-string: hsl(124, 54%, 75%);
  --code-tag: hsl(334, 37%, 65%);
  --code-value: hsl(183, 29%, 62%);
  --collapse-icon-color: hsl(225, 14%, 55%);
  --collapse-icon-color-collapsed: hsl(224, 37%, 80%);
  --color-accent: hsl(263, 46%, 61%);
  --color-accent-1: hsl(263, 46%, 57.2%);
  --color-accent-2: hsl(263, 46%, 64.8%);
  --color-accent-hsl: 263,
              46%,
              61%;
  --color-highlight-text: hsl(191, 54%, 64%);
  --comment-color: hsl(225, 17%, 84%);
  --divider-color: hsl(230, 9%, 13%);
  --divider-color-hover: hsl(226, 10%, 47%);
  --divider-vertical-height: calc(100% - 40px);
  --dropdown-background: hsl(230, 8%, 10%);
  --dropdown-background-hover: hsl(225, 11%, 36%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: hsl(230, 8%, 10%);
  --flair-color: hsl(224, 37%, 80%);
  --font-interface: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-mermaid: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'DM Mono', 'Fira Code', Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'DM Mono', 'Fira Code', Courier, monospace;
  --font-print: '??', '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, 'Arial';
  --font-text: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-weight: 400;
  --graph-color-line: hsl(196, 27%, 41%);
  --graph-color-line-hover: hsl(224, 17%, 68%);
  --graph-color-node-border-hover: hsl(220, 23%, 95%);
  --graph-color-node-hover: hsl(317, 62%, 65%);
  --graph-line: hsl(196, 27%, 41%);
  --graph-node: hsl(58, 86%, 66%);
  --graph-node-attachment: hsl(220, 23%, 90%);
  --graph-node-focused: hsl(225, 14%, 55%);
  --graph-node-tag: hsl(194, 50%, 47%);
  --graph-node-unresolved: hsl(263, 46%, 61%);
  --graph-text: hsl(225, 17%, 88%);
  --h1-color: hsl(59, 81%, 47%);
  --h2-color: hsl(260, 100%, 79%);
  --h3-color: hsl(191, 90%, 50%);
  --h4-color: hsl(151, 54%, 64%);
  --h5-color: hsl(224, 37%, 80%);
  --h6-color: hsl(223, 18%, 68%);
  --heading-spacing: 2.5rem;
  --hr-color: hsl(219, 10%, 29%);
  --interactive-accent: hsl(225, 14%, 40%);
  --interactive-accent-hover: hsl(223, 18%, 68%);
  --interactive-accent-hsl: 255, 14%, 40%;
  --interactive-hover: hsl(225, 11%, 36%);
  --interactive-normal: hsl(230, 8%, 10%);
  --italic-color: hsl(255, 100%, 86%);
  --link-color: hsl(334, 100%, 75%);
  --link-color-hover: hsl(334, 100%, 75%);
  --link-external-color: hsl(334, 100%, 75%);
  --link-external-color-hover: hsl(334, 100%, 75%);
  --link-unresolved-color: hsl(334, 100%, 75%);
  --link-unresolved-decoration-color: hsla(255, 14%, 40%, 0.5);
  --link-weight: 400;
  --list-indent: 1.75em;
  --menu-background: hsl(230, 9%, 13%);
  --menu-border-color: rgba(255, 255, 255, 0.25);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 2px;
  --menu-shadow: 0px 3px 12px -2px rgba(14, 11, 11, 0.5);
  --pdf-background: hsl(225, 12%, 20%);
  --pdf-page-background: hsl(225, 12%, 20%);
  --pdf-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25);
  --pdf-sidebar-background: hsl(225, 12%, 20%);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent) linear-gradient(hsl(230, 8%, 10%), color-mix(in srgb, hsl(230, 8%, 10%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: hsl(230, 9%, 13%);
  --scrollbar-bg: transparent;
  --scrollbar-radius: 4px;
  --scrollbar-thumb-bg: hsl(231, 9%, 15%);
  --search-clear-button-color: hsl(224, 17%, 68%);
  --search-icon-color: hsl(224, 17%, 68%);
  --search-result-background: hsl(225, 12%, 20%);
  --setting-group-heading-color: hsl(224, 37%, 80%);
  --setting-group-heading-size: 16px;
  --setting-group-heading-weight: 600;
  --setting-items-background: hsl(231, 9%, 15%);
  --setting-items-border-color: rgba(100, 100, 100, 0.25);
  --setting-items-padding: 20px;
  --setting-items-radius: 4px;
  --shadow-l: 0px 2px 2.3px -52px rgba(0, 0, 0, 0.448),
        0px 5.6px 6.3px -52px rgba(0, 0, 0, 0.6),
        0px 13.6px 15.1px -52px rgba(0, 0, 0, 0.852),
        0px 45px 50px -52px rgb(0, 0, 0);
  --shadow-s: 0px 3px 12px -2px rgba(14, 11, 11, 0.5);
  --shiki-active-tab-border-color: hsl(224, 17%, 68%);
  --shiki-code-background: hsl(231, 9%, 15%);
  --shiki-code-block-border-radius: 0px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: hsl(225, 14%, 55%);
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: hsl(224, 17%, 68%);
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: hsl(224, 17%, 68%);
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(100, 100, 100, 0.25);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: hsl(225, 14%, 55%);
  --shiki-gutter-text-color-highlight: hsl(224, 17%, 68%);
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: hsl(224, 17%, 68%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: hsl(225, 14%, 55%);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --strikethrough-color: hsl(225, 14%, 55%);
  --suggestion-background: hsl(225, 12%, 20%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: hsl(225, 12%, 20%);
  --tab-divider-color: rgba(100, 100, 100, 0.25);
  --tab-font-size: 14px;
  --tab-outline-color: transparent;
  --tab-radius: 0px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: hsl(230, 9%, 13%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230, 9%, 13%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(263, 46%, 61%);
  --tab-text-color: hsl(192, 46%, 68%);
  --tab-text-color-active: hsl(224, 17%, 68%);
  --tab-text-color-focused: hsl(225, 14%, 55%);
  --tab-text-color-focused-active: hsl(220, 23%, 95%);
  --tab-text-color-focused-active-current: hsl(224, 37%, 80%);
  --tab-text-color-focused-highlighted: hsl(224, 37%, 80%);
  --table-add-button-border-color: rgba(100, 100, 100, 0.25);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(225, 14%, 40%);
  --table-drag-handle-color: hsl(225, 14%, 55%);
  --table-drag-handle-color-active: hsl(220, 23%, 95%);
  --table-header-background: hsl(231, 9%, 15%);
  --table-header-background-hover: hsl(231, 9%, 15%);
  --table-header-border-color: hsl(219, 10%, 29%);
  --table-header-border-width: 1px;
  --table-header-color: hsl(220, 23%, 90%);
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: rgba(0, 0, 0, 0.08);
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: rgba(0, 0, 0, 0.3);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(263,
              46%,
              61%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(225, 14%, 40%);
  --tag-background: rgba(0, 0, 0, 0.15);
  --tag-background-hover: rgba(0, 0, 0, 0.15);
  --tag-border-color: transparent;
  --tag-border-color-hover: transparent;
  --tag-color: hsl(151, 54%, 64%);
  --tag-color-hover: hsl(151, 54%, 64%);
  --tag-size: 0.875em;
  --text-accent: hsl(224, 37%, 80%);
  --text-accent-hover: hsl(220, 23%, 95%);
  --text-error: hsl(342, 96%, 68%);
  --text-faint: hsl(225, 14%, 55%);
  --text-faintly-muted: hsl(225, 15%, 61%);
  --text-highlight-bg: rgba(255, 252, 59, 0.08);
  --text-highlight-bg-active: rgba(255, 252, 59, 0.08);
  --text-muted: hsl(224, 17%, 68%);
  --text-normal: hsl(224, 37%, 80%);
  --text-on-accent: hsl(220, 23%, 95%);
  --text-selection: rgba(134, 169, 209, 0.15);
  --text-success: hsl(167, 83%, 31%);
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --window-border: 1px solid hsl(225, 11%, 36%);
  --window-border-color: hsl(225, 11%, 36%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(184, 148, 255, 0.3);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(184, 148, 255, 0.3);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(184, 148, 255, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(184, 148, 255, 0.3);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: 0px 1px 0px var(--shadow-300);
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 25.28px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 77, 224, 185);
  background: rgba(77, 224, 185, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 255, 84, 84;
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

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 84, 84));
}

html body .callout[data-callout="success"] > .callout-content {
  background: rgb(35, 36, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(35, 36, 42));
  color: rgb(114, 195, 213);
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 244, 138, 74);
  background: rgba(244, 138, 74, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 255, 84, 84;
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

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 84, 84));
}

html body .callout[data-callout="tip"] > .callout-content {
  background: rgb(35, 36, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(35, 36, 42));
  color: rgb(114, 195, 213);
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 170, 230, 89);
  background: rgba(170, 230, 89, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 255, 84, 84;
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

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 84, 84));
}

html body .callout[data-callout="todo"] > .callout-content {
  background: rgb(35, 36, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(35, 36, 42));
  color: rgb(114, 195, 213);
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 244, 138, 74);
  background: rgba(244, 138, 74, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 255, 84, 84;
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

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 84, 84));
}

html body .callout[data-callout="warning"] > .callout-content {
  background: rgb(35, 36, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, rgb(35, 36, 42));
  color: rgb(114, 195, 213);
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
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
  border-bottom-width: 0px;
  border-left-color: rgb(67, 72, 81);
  border-left-width: 0px;
  border-right-color: rgb(67, 72, 81);
  border-right-width: 0px;
  border-top-color: rgb(67, 72, 81);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: var(--text-normal, rgb(185, 195, 223));
  font-family: var(--font-interface-theme, "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif);
}

html body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(45, 48, 57));
  border-bottom-color: rgba(100, 100, 100, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(100, 100, 100, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(100, 100, 100, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(100, 100, 100, 0.25);
  border-top-left-radius: var(--size-2-2, 4px);
  border-top-right-radius: var(--size-2-2, 4px);
  border-top-width: 0px;
  box-shadow: var(--shadow-small),
                var(--shadow-large);
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
  border-bottom-width: 0px;
  border-left-color: rgb(114, 195, 213);
  border-left-width: 0px;
  border-right-color: rgb(114, 195, 213);
  border-right-width: 0px;
  border-top-color: rgb(114, 195, 213);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(114, 195, 213);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  color: rgb(114, 195, 213);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(100, 100, 100, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(100, 100, 100, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(100, 100, 100, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(100, 100, 100, 0.25);
  border-top-left-radius: var(--size-2-2, 4px);
  border-top-right-radius: var(--size-2-2, 4px);
  border-top-width: 0px;
}

html body .search > .search-container > .search-space > input {
  background-color: var(--background-modifier-form-field, rgb(30, 31, 36));
  border-bottom-color: rgb(67, 72, 81);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
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
  box-shadow: 0px 1px 0px 1px var(--shadow-300);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(114, 195, 213);
  border-left-width: 0px;
  border-right-color: rgb(114, 195, 213);
  border-right-width: 0px;
  border-top-color: rgb(114, 195, 213);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(114, 195, 213);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(114, 195, 213);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgba(0, 0, 0, 0.15));
  --pill-background-hover: var(--tag-background-hover, rgba(0, 0, 0, 0.15));
  --pill-border-color: var(--tag-border-color, transparent);
  --pill-border-color-hover: var(--tag-border-color-hover, transparent);
  --pill-color: var(--tag-color, hsl(151, 54%, 64%));
  --pill-color-hover: var(--tag-color-hover, hsl(151, 54%, 64%));
  --pill-color-remove: var(--tag-color, hsl(151, 54%, 64%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(151, 54%, 64%));
  --pill-padding-y: var(--tag-padding-y, 0.2em);
  background-color: var(--pill-background, rgba(0, 0, 0, 0.15));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: var(--pill-color, rgb(114, 213, 165));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal-link.tag-link::before {
  color: rgb(114, 213, 165);
}

html body h1 {
  border-bottom-color: rgb(217, 214, 23);
  border-bottom-width: 0px;
  border-left-color: rgb(217, 214, 23);
  border-left-width: 0px;
  border-right-color: rgb(217, 214, 23);
  border-right-width: 0px;
  border-top-color: rgb(217, 214, 23);
  border-top-width: 0px;
  color: var(--h1-color, rgb(217, 214, 23));
  font-family: var(--h1-font, "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 24.8px);
  letter-spacing: var(--h1-letter-spacing, -0.372px);
  line-height: var(--h1-line-height, 39.184px);
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(114, 195, 213));
  font-size: var(--inline-title-size, 24.8px);
}

html body h2 {
  --font-weight: var(--h2-weight, 600);
  border-bottom-color: rgb(184, 148, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(184, 148, 255);
  border-left-width: 0px;
  border-right-color: rgb(184, 148, 255);
  border-right-width: 0px;
  border-top-color: rgb(184, 148, 255);
  border-top-width: 0px;
  color: var(--h2-color, rgb(184, 148, 255));
  font-family: var(--h2-font, "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 23.2px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.2552px);
  line-height: var(--h2-line-height, 36.656px);
}

html body h2.page-title, html h2.page-title a {
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-width: 0px;
  border-left-color: rgb(114, 195, 213);
  border-left-width: 0px;
  border-right-color: rgb(114, 195, 213);
  border-right-width: 0px;
  border-top-color: rgb(114, 195, 213);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(114, 195, 213));
  font-family: var(--inline-title-font, "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--inline-title-size, 24.8px);
  letter-spacing: -0.372px;
  line-height: var(--inline-title-line-height, 39.184px);
  margin-bottom: 12.4px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html body h3 {
  --font-weight: var(--h3-weight, 600);
  border-bottom-color: rgb(13, 200, 242);
  border-bottom-width: 0px;
  border-left-color: rgb(13, 200, 242);
  border-left-width: 0px;
  border-right-color: rgb(13, 200, 242);
  border-right-width: 0px;
  border-top-color: rgb(13, 200, 242);
  border-top-width: 0px;
  color: var(--h3-color, rgb(13, 200, 242));
  font-family: var(--h3-font, "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 21.6px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.1728px);
  line-height: var(--h3-line-height, 34.128px);
}

html body h4 {
  --font-weight: var(--h4-weight, 600);
  border-bottom-color: rgb(114, 213, 165);
  border-bottom-width: 0px;
  border-left-color: rgb(114, 213, 165);
  border-left-width: 0px;
  border-right-color: rgb(114, 213, 165);
  border-right-width: 0px;
  border-top-color: rgb(114, 213, 165);
  border-top-width: 0px;
  color: var(--h4-color, rgb(114, 213, 165));
  font-family: var(--h4-font, "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 20px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h4-letter-spacing, -0.1px);
  line-height: var(--h4-line-height, 31.6px);
}

html body h5 {
  --font-weight: var(--h5-weight, 600);
  border-bottom-color: rgb(185, 195, 223);
  border-bottom-width: 0px;
  border-left-color: rgb(185, 195, 223);
  border-left-width: 0px;
  border-right-color: rgb(185, 195, 223);
  border-right-width: 0px;
  border-top-color: rgb(185, 195, 223);
  border-top-width: 0px;
  color: var(--h5-color, rgb(185, 195, 223));
  font-family: var(--h5-font, "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 18.4px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h5-letter-spacing, -0.0368px);
  line-height: var(--h5-line-height, 29.072px);
}

html body h6 {
  border-bottom-color: rgb(159, 167, 188);
  border-bottom-width: 0px;
  border-left-color: rgb(159, 167, 188);
  border-left-width: 0px;
  border-right-color: rgb(159, 167, 188);
  border-right-width: 0px;
  border-top-color: rgb(159, 167, 188);
  border-top-width: 0px;
  color: var(--h6-color, rgb(159, 167, 188));
  font-family: var(--h6-font, "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 16.8px);
  line-height: var(--h6-line-height, 26.544px);
}

html body hr {
  border-bottom-color: rgb(30, 31, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 31, 36);
  border-left-width: 0px;
  border-right-color: rgb(30, 31, 36);
  border-right-width: 2px;
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 207, 227, 255);
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
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--color-gray-40, rgb(160, 167, 187));
  cursor: var(--cursor, pointer);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--color-gray-40, rgb(160, 167, 187));
  cursor: var(--cursor, pointer);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(114, 195, 213);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(124, 132, 156);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgb(124, 132, 156);
  border-left-width: 0px;
  border-right-color: rgb(124, 132, 156);
  border-right-width: 0px;
  border-top-color: rgb(124, 132, 156);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: var(--icon-color, rgb(124, 132, 156));
  cursor: var(--cursor, pointer);
}`,
    footer: `html body footer {
  background-color: var(--status-bar-background, rgb(30, 31, 36));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(160, 167, 187));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: var(--status-bar-font-size, 13px);
}

html body footer ul li a {
  color: rgb(160, 167, 187);
  font-size: 13px;
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(185, 195, 223);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(185, 195, 223);
  border-bottom-width: 0px;
  border-left-color: rgb(185, 195, 223);
  border-left-width: 0px;
  border-right-color: rgb(185, 195, 223);
  border-right-width: 0px;
  border-top-color: rgb(185, 195, 223);
  border-top-width: 0px;
  color: rgb(185, 195, 223);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--color-gray-40, rgb(160, 167, 187));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(185, 195, 223);
  border-bottom-width: 0px;
  border-left-color: rgb(185, 195, 223);
  border-left-width: 0px;
  border-right-color: rgb(185, 195, 223);
  border-right-width: 0px;
  border-top-color: rgb(185, 195, 223);
  border-top-width: 0px;
}

html body li.section-li > .section .meta {
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--color-gray-40, rgb(160, 167, 187));
}

html body ul.section-ul {
  border-bottom-color: rgb(185, 195, 223);
  border-bottom-width: 0px;
  border-left-color: rgb(185, 195, 223);
  border-left-width: 0px;
  border-right-color: rgb(185, 195, 223);
  border-right-width: 0px;
  border-top-color: rgb(185, 195, 223);
  border-top-width: 0px;
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(124, 132, 156);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgb(124, 132, 156);
  border-left-width: 0px;
  border-right-color: rgb(124, 132, 156);
  border-right-width: 0px;
  border-top-color: rgb(124, 132, 156);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: var(--icon-color, rgb(124, 132, 156));
  cursor: var(--cursor, pointer);
}

html body .darkmode svg {
  color: rgb(124, 132, 156);
  stroke: rgb(124, 132, 156);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(160, 167, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(160, 167, 187);
  border-left-width: 0px;
  border-right-color: rgb(160, 167, 187);
  border-right-width: 0px;
  border-top-color: rgb(160, 167, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(160, 167, 187);
}

html body .breadcrumb-element p {
  color: var(--text-faint, rgb(124, 132, 156));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(185, 195, 223);
}

html body .canvas-node-content {
  color: rgb(185, 195, 223);
}

html body .canvas-node-file {
  color: var(--color-cyan-530, rgb(114, 195, 213));
}

html body .canvas-node-group {
  border-color: rgb(185, 195, 223);
}

html body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(30, 31, 36));
  border-color: rgb(185, 195, 223);
  box-shadow: var(--input-shadow, rgba(0, 0, 0, 0.15) 0px 1px 0px 1px);
}`,
    bases: `html body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgba(0, 0, 0, 0.08));
}

html body .bases-table thead th {
  border-color: rgb(67, 72, 81);
  color: var(--table-header-color, rgb(224, 228, 235));
}`,
    properties: `html body .metadata {
  border-bottom-color: rgba(100, 100, 100, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(100, 100, 100, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(100, 100, 100, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(100, 100, 100, 0.25);
  border-top-width: 0px;
  color: var(--text-muted, rgb(160, 167, 187));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-container .metadata-property {
  --pill-radius: var(--radius-s, 0px);
  border-bottom-color: rgb(160, 167, 187);
  border-bottom-width: 0px;
  border-left-color: rgb(160, 167, 187);
  border-left-width: 0px;
  border-right-color: rgb(160, 167, 187);
  border-right-width: 0px;
  border-top-color: rgb(160, 167, 187);
  border-top-width: 0px;
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(160, 167, 187);
  border-bottom-width: 0px;
  border-left-color: rgb(160, 167, 187);
  border-left-width: 0px;
  border-right-color: rgb(160, 167, 187);
  border-right-width: 0px;
  border-top-color: rgb(160, 167, 187);
  border-top-width: 0px;
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-property-key {
  color: rgb(160, 167, 187);
  font-family: var(--metadata-label-font, "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body .metadata-property-value {
  color: rgb(160, 167, 187);
  font-family: var(--metadata-input-font, "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body .note-properties {
  border-color: rgba(100, 100, 100, 0.25);
}

html body .note-properties-key {
  color: rgb(160, 167, 187);
}

html body .note-properties-row {
  --pill-radius: var(--radius-s, 0px);
  border-color: rgb(160, 167, 187);
}

html body .note-properties-tags {
  --pill-background: var(--tag-background, rgba(0, 0, 0, 0.15));
  --pill-background-hover: var(--tag-background-hover, rgba(0, 0, 0, 0.15));
  --pill-border-color: var(--tag-border-color, transparent);
  --pill-border-color-hover: var(--tag-border-color-hover, transparent);
  --pill-color: var(--tag-color, hsl(151, 54%, 64%));
  --pill-color-hover: var(--tag-color-hover, hsl(151, 54%, 64%));
  --pill-color-remove: var(--tag-color, hsl(151, 54%, 64%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(151, 54%, 64%));
  --pill-padding-y: var(--tag-padding-y, 0.2em);
  background-color: var(--pill-background, rgba(0, 0, 0, 0.15));
  color: var(--pill-color, rgb(114, 213, 165));
}

html body .note-properties-value {
  color: rgb(160, 167, 187);
}

html body div#quartz-root {
  background-color: var(--background-primary, rgb(45, 48, 57));
  color: var(--text-normal, rgb(185, 195, 223));
}

html body ol.overflow {
  border-bottom-color: rgb(185, 195, 223);
  border-bottom-width: 0px;
  border-left-color: rgb(185, 195, 223);
  border-left-width: 0px;
  border-right-color: rgb(185, 195, 223);
  border-right-width: 0px;
  border-top-color: rgb(185, 195, 223);
  border-top-width: 0px;
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgb(30, 31, 36));
  border-color: rgb(185, 195, 223);
}

html body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(30, 31, 36));
}

html body .stacked-page.active {
  border-color: rgb(185, 195, 223);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-width: 0px;
  border-left-color: rgb(114, 195, 213);
  border-left-width: 0px;
  border-right-color: rgb(114, 195, 213);
  border-right-width: 0px;
  border-top-color: rgb(114, 195, 213);
  border-top-width: 0px;
  color: rgb(114, 195, 213);
}

html body .navigation-progress {
  background-color: var(--status-bar-background, rgb(30, 31, 36));
}

html body .page-header h2.page-title {
  border-bottom-color: rgb(185, 195, 223);
  border-bottom-width: 0px;
  border-left-color: rgb(185, 195, 223);
  border-left-width: 0px;
  border-right-color: rgb(185, 195, 223);
  border-right-width: 0px;
  border-top-color: rgb(185, 195, 223);
  border-top-width: 0px;
  color: var(--text-normal, rgb(185, 195, 223));
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 14px;
  font-weight: var(--file-header-font-weight, 500);
  line-height: 18.2px;
  padding-bottom: 10px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 10px;
}

html body abbr {
  color: rgb(114, 195, 213);
}

html body details {
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-width: 0px;
  border-left-color: rgb(114, 195, 213);
  border-left-width: 0px;
  border-right-color: rgb(114, 195, 213);
  border-right-width: 0px;
  border-top-color: rgb(114, 195, 213);
  border-top-width: 0px;
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
  color: var(--text-normal, rgb(160, 167, 187));
  font-family: var(--font-interface-theme, "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif);
}

html body kbd {
  background-color: var(--code-background, rgb(35, 36, 42));
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
  box-shadow: 0 1px 0 1px var(--shadow-300);
  color: var(--color-slate-300, rgb(224, 228, 235));
  font-family: var(--font-monospace-theme, "DM Mono", "Fira Code", Courier, monospace);
}

html body progress {
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-width: 0px;
  border-left-color: rgb(114, 195, 213);
  border-left-width: 0px;
  border-right-color: rgb(114, 195, 213);
  border-right-width: 0px;
  border-top-color: rgb(114, 195, 213);
  border-top-width: 0px;
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
  background-color: var(--tag-background, rgba(0, 0, 0, 0.15));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: var(--tag-color, rgb(114, 213, 165));
}`,
  },
  light: {},
};
