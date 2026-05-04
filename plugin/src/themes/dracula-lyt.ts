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
  --background-modifier-border: var(--color-gray-80, hsl(225, 18%, 25%));
  --background-modifier-box-shadow: var(--sheer-dark, rgba(0, 0, 0, 0.95));
  --background-modifier-cover: var(--sheer-medium, rgba(0, 0, 0, 0.65));
  --background-modifier-error: var(--color-magenta-910, hsl(342, 96%, 68%));
  --background-modifier-error-hover: var(--color-magenta-920, hsl(342, 100%, 74%));
  --background-modifier-error-rgb: var(--color-red-rgb, 235, 86, 131);
  --background-modifier-form-field: var(--color-black, hsl(230, 9%, 13%));
  --background-modifier-form-field-highlighted: var(--color-blacker, hsl(230, 8%, 10%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(230, 9%, 13%));
  --background-modifier-success: var(--color-green-900, hsl(166, 74%, 45%));
  --background-primary: var(--color-gray-90, #22212c);
  --background-primary-alt: var(--color-gray-100, #23212d);
  --background-secondary: var(--color-gray-100, #15131f);
  --background-secondary-alt: var(--color-black, #2a2442);
  --bases-cards-background: var(--background-primary, #22212c);
  --bases-cards-cover-background: var(--background-primary-alt, #23212d);
  --bases-embed-border-color: var(--background-modifier-border, hsl(225, 18%, 25%));
  --bases-group-heading-property-color: var(--text-muted, #6e6b7e);
  --bases-table-border-color: var(--table-border-color, hsl(225, 18%, 25%));
  --bases-table-cell-background-active: var(--background-primary, #22212c);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #23212d);
  --bases-table-group-background: var(--background-primary-alt, #23212d);
  --bases-table-header-background: var(--background-primary, #22212c);
  --bases-table-header-color: var(--text-muted, #6e6b7e);
  --bases-table-summary-background: var(--background-primary, #22212c);
  --blockquote-border-color: var(--interactive-accent, #483699);
  --border-xsm: rgba(255, 255, 255, 0.25);
  --border-xsm-alt: rgba(100, 100, 100, 0.25);
  --callout-bug: var(--callout-bug, 251, 70, 76);
  --callout-default: var(--callout-default, 2, 122, 255);
  --callout-error: var(--callout-error, 251, 70, 76);
  --callout-example: var(--callout-example, 168, 130, 255);
  --callout-fail: var(--callout-fail, 251, 70, 76);
  --callout-info: var(--callout-info, 2, 122, 255);
  --callout-question: var(--callout-question, 233, 151, 63);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 68, 207, 110);
  --callout-summary: var(--callout-summary, 83, 223, 221);
  --callout-tip: var(--callout-tip, 83, 223, 221);
  --callout-todo: var(--callout-todo, 2, 122, 255);
  --callout-warning: var(--callout-warning, 233, 151, 63);
  --canvas-background: var(--background-primary, #22212c);
  --canvas-card-label-color: var(--text-faint, #6c6498);
  --caret-color: var(--text-normal, #f8f8f2);
  --checkbox-border-color: var(--text-faint, #6c6498);
  --checkbox-border-color-hover: var(--text-muted, #6e6b7e);
  --checkbox-color: var(--interactive-accent, #483699);
  --checkbox-color-hover: var(--interactive-accent-hover, #4d3ca6);
  --checkbox-marker-color: var(--background-primary, #22212c);
  --checklist-done-color: var(--text-muted, #6e6b7e);
  --code-background: var(--background-primary-alt, #23212d);
  --code-border-color: var(--background-modifier-border, hsl(225, 18%, 25%));
  --code-comment: var(--text-faint, #6c6498);
  --code-function: var(--color-yellow, hsl(58, 86%, 66%));
  --code-normal: var(--text-normal, #f8f8f2);
  --code-property: var(--color-cyan, hsl(192, 46%, 68%));
  --code-punctuation: var(--text-muted, #6e6b7e);
  --code-string: var(--color-green, hsl(151, 72%, 65%));
  --code-value: var(--color-purple, hsl(255, 100%, 86%));
  --collapse-icon-color: var(--text-faint, #6c6498);
  --collapse-icon-color-collapsed: var(--text-accent, #bd93f9);
  --color-black: hsl(230, 9%, 13%);
  --color-blacker: hsl(230, 8%, 10%);
  --color-caret: var(--color-slate-500, hsl(224, 37%, 80%));
  --color-cyan: var(--color-cyan-500, hsl(192, 46%, 68%));
  --color-cyan-300: hsl(183, 29%, 62%);
  --color-cyan-500: hsl(192, 46%, 68%);
  --color-cyan-510: hsl(191, 65%, 59%);
  --color-cyan-520: hsl(191, 57%, 59%);
  --color-cyan-530: hsl(191, 54%, 64%);
  --color-cyan-700: hsl(194, 50%, 47%);
  --color-cyan-900: hsl(196, 27%, 41%);
  --color-cyan-gradient-1: linear-gradient(180deg,
    #82b7ba, #77aeb3, #6da5ac, #629ca5, 
    #5a919c, #558590, #4f7984, #496d79);
  --color-cyan-gradient-2: linear-gradient(180deg,
    #55a6be, #509fb7, #4d98af, #4d8fa4, 
    #4c8698, #4c7e8e, #4a7583, #496d79);
  --color-cyan-gradient-3: linear-gradient(180deg, 
    #6de0fd, #5dd6f5, #56d3f2, #4fcfef, 
    #48cceb, #40c8e8, #37c5e5, #2dc1e2);
  --color-gray-10: hsl(225, 17%, 88%);
  --color-gray-100: hsl(231, 9%, 15%);
  --color-gray-15: hsl(225, 17%, 84%);
  --color-gray-20: hsl(224, 37%, 80%);
  --color-gray-30: hsl(224, 26%, 70%);
  --color-gray-40: hsl(224, 17%, 68%);
  --color-gray-50: hsl(226, 10%, 47%);
  --color-gray-60: hsl(225, 14%, 55%);
  --color-gray-70: hsl(225, 11%, 36%);
  --color-gray-80: hsl(225, 18%, 25%);
  --color-gray-90: hsl(225, 12%, 20%);
  --color-green: var(--color-green-700, hsl(151, 72%, 65%));
  --color-green-300: hsl(151, 100%, 81%);
  --color-green-500: hsl(124, 54%, 75%);
  --color-green-700: hsl(151, 72%, 65%);
  --color-green-900: hsl(166, 74%, 45%);
  --color-green-910: hsl(158, 85%, 45%);
  --color-green-920: hsl(167, 83%, 31%);
  --color-green-gradient-1: linear-gradient(180deg,
    #9effd0, #8bfcc9, #79f9c4, #67f4bf, 
    #57efbb, #48e8b7, #39e0b4, #2cd8b0);
  --color-green-gradient-2: linear-gradient(180deg,
    #a2f49a, #89f18d, #79ee8b, #69ea8d, 
    #59e692, #4ae299, #3bdda3, #2cd8b0);
  --color-highlight-bg: hsla(192, 100%, 92%, 0.596);
  --color-highlight-gradient: linear-gradient(60deg,
    #d7f8ff, #d4f0fe, #d1e6fe, #cedcfd, 
    #cbd2fc, #c3c1fc, #c7b9f8, #c7a3ff);
  --color-highlight-shadow: 0px 0px 2px #a8a47881;
  --color-highlight-text: hsl(225, 12%, 20%);
  --color-magenta: var(--color-magenta-500, hsl(338, 100%, 80%));
  --color-magenta-300: hsl(334, 37%, 65%);
  --color-magenta-310: hsl(338, 100%, 87%);
  --color-magenta-500: hsl(338, 100%, 80%);
  --color-magenta-700: hsl(334, 100%, 75%);
  --color-magenta-900: hsl(317, 62%, 65%);
  --color-magenta-910: hsl(342, 96%, 68%);
  --color-magenta-920: hsl(342, 100%, 74%);
  --color-magenta-gradient-1: linear-gradient(180deg,
    #ffb1ce, #ffa3ca, #f897c4, #f88cc4, 
    #ef7dbe, #ea77be, #e472be, #dd6ebe);
  --color-magenta-gradient-2: linear-gradient(180deg,
    #ff99be, #fc91bd, #f88abd, #f483bd, 
    #ef7dbe, #ea77be, #e472be, #dd6ebe);
  --color-purple: var(--color-purple-500, hsl(255, 100%, 86%));
  --color-purple-300: hsl(255, 49%, 76%);
  --color-purple-500: hsl(255, 100%, 86%);
  --color-purple-700: hsl(260, 100%, 79%);
  --color-purple-900: hsl(263, 46%, 61%);
  --color-purple-910: hsl(263, 37%, 69%);
  --color-purple-gradient-1: linear-gradient(180deg,
    #d9ccff, #d2c4ff, #cbbcff, #c4b4ff,
    #bdabff, #b5a3ff, #ad9bff, #a593ff);
  --color-purple-gradient-2: linear-gradient(180deg,
    #d9ccff, #ccbafc, #c0a9f8, #b59af2, 
    #ab8cea, #a281e1, #9977d6, #916ec9);
  --color-slate: var(--color-slate-500, hsl(224, 37%, 80%));
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
  --color-slate-gradient-3: linear-gradient(180deg,
    #9fa7bc, #97a0b6, #9099b1, #8892ab, 
    #818aa6, #7983a0, #727c9b, #6a7595);
  --color-white: hsl(220, 23%, 95%);
  --color-yellow: var(--color-yellow-700, hsl(58, 86%, 66%));
  --color-yellow-300: hsl(61, 100%, 75%);
  --color-yellow-310: hsl(61, 46%, 69%);
  --color-yellow-500: hsl(59, 71%, 68%);
  --color-yellow-700: hsl(58, 86%, 66%);
  --color-yellow-900: hsl(59, 82%, 44%);
  --color-yellow-gradient-1: linear-gradient(180deg,
    #fcff80, #fafd6b, #f9fb57, #f6f843, 
    #f4f430, #f0ef1e, #e4e213, #ccc914);
  --color-yellow-gradient-2: linear-gradient(-90deg,
    #f3ee5e, #f1ec50, #f0eb41, #eee933, 
    #ece725, #eae516, #dbd815, #ccc914);
  --dark: var(--text-normal, var(--color-gray-20, #f8f8f2));
  --darkgray: var(--text-normal, var(--color-gray-20, #f8f8f2));
  --default-font: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --divider-color: var(--background-modifier-border, hsl(225, 18%, 25%));
  --divider-color-hover: var(--interactive-accent, #483699);
  --dropdown-background: var(--interactive-normal, #2a2a2a);
  --dropdown-background-hover: var(--interactive-hover, #303030);
  --duration-fast-1: 120ms;
  --duration-fast-2: 180ms;
  --duration-moderate-1: 250ms;
  --duration-moderate-2: 340ms;
  --duration-none: 0;
  --duration-slow-1: 500ms;
  --duration-slow-2: 640ms;
  --file-header-background: var(--background-primary, #22212c);
  --file-header-background-focused: var(--background-primary, #22212c);
  --file-header-font: var(--font-interface, "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #2a2a2a);
  --flair-color: var(--text-normal, #f8f8f2);
  --font-code: "Monaco", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace;
  --font-editor: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-extra-bold: 900;
  --font-extra-light: 200;
  --font-header: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-monospace-1: "Monaco", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace;
  --font-monospace-2: "Monaco", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace;
  --font-preview: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-regular: 400;
  --font-sans-2: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-scale-0: 0.875rem;
  --font-scale-00: 0.750rem;
  --font-scale-000: 0.625rem;
  --font-scale-1: 1rem;
  --font-scale-10: 3rem;
  --font-scale-2: 1.125rem;
  --font-scale-3: 1.375rem;
  --font-scale-4: 1.625rem;
  --font-scale-5: 1.750rem;
  --font-scale-6: 2rem;
  --font-scale-7: 2.250rem;
  --font-scale-8: 2.5rem;
  --font-scale-9: 2.625rem;
  --font-semi-bold: 600;
  --footnote-divider-color: var(--metadata-divider-color, hsl(225, 18%, 25%));
  --footnote-id-color: var(--text-muted, #6e6b7e);
  --footnote-id-color-no-occurrences: var(--text-faint, #6c6498);
  --graph-color-arrow: var(--graph-color-line, hsl(196, 27%, 41%));
  --graph-color-line: var(--color-cyan-900, hsl(196, 27%, 41%));
  --graph-color-line-hover: var(--color-gray-40, hsl(224, 17%, 68%));
  --graph-color-node-attachment: var(--color-slate-500, hsl(224, 37%, 80%));
  --graph-color-node-border-hover: var(--color-white, hsl(220, 23%, 95%));
  --graph-color-node-focused: var(--color-magenta-900, hsl(317, 62%, 65%));
  --graph-color-node-resolved: var(--color-yellow-700, hsl(58, 86%, 66%));
  --graph-color-node-tag: var(--color-cyan-700, hsl(194, 50%, 47%));
  --graph-color-node-unresolved: var(--color-purple-900, hsl(263, 46%, 61%));
  --graph-color-text: var(--color-slate-300, hsl(220, 23%, 90%));
  --graph-node: var(--text-muted, #6e6b7e);
  --graph-node-attachment: var(--color-yellow, hsl(58, 86%, 66%));
  --graph-node-focused: var(--text-accent, #bd93f9);
  --graph-node-tag: var(--color-green, hsl(151, 72%, 65%));
  --graph-node-unresolved: var(--text-faint, #6c6498);
  --graph-text: var(--text-normal, #f8f8f2);
  --gray: var(--text-muted, var(--color-gray-40, #6e6b7e));
  --header-line-height: 1.264em;
  --header-shadow-color: rgb(31, 31, 31);
  --header-shadow-size: 0px 4px 3px;
  --heading-formatting: var(--text-faint, #6c6498);
  --highlight: var(--text-highlight-bg, var(--color-highlight-bg, hsla(192, 100%, 92%, 0.596)));
  --hr-color: var(--background-modifier-border, hsl(225, 18%, 25%));
  --icon-color: var(--text-muted, #6e6b7e);
  --icon-color-active: var(--text-accent, #bd93f9);
  --icon-color-focused: var(--text-normal, #f8f8f2);
  --icon-color-hover: var(--text-muted, #6e6b7e);
  --input-date-separator: var(--text-faint, #6c6498);
  --input-placeholder-color: var(--text-faint, #6c6498);
  --interactive-accent: var(--color-slate-900, #483699);
  --interactive-accent-hover: var(--color-slate-700, #4d3ca6);
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: var(--color-gray-90, #303030);
  --interactive-normal: var(--color-blacker, #2a2a2a);
  --interactive-success: var(--color-green-920, hsl(167, 83%, 31%));
  --light: var(--background-primary, var(--color-gray-90, #22212c));
  --lightgray: var(--background-secondary, var(--color-gray-100, #15131f));
  --line-height: 1.58em;
  --line-width: 42em;
  --link-color: var(--text-accent, #bd93f9);
  --link-color-hover: var(--text-accent-hover, #bd93f9);
  --link-external-color: var(--text-accent, #bd93f9);
  --link-external-color-hover: var(--text-accent-hover, #bd93f9);
  --link-unresolved-color: var(--text-accent, #bd93f9);
  --list-marker-color: var(--text-faint, #6c6498);
  --list-marker-color-collapsed: var(--text-accent, #bd93f9);
  --list-marker-color-hover: var(--text-muted, #6e6b7e);
  --md-color-blockquotes: var(--md-color-text, hsl(191, 54%, 64%));
  --md-color-blockquotes-border: var(--color-purple-900, hsl(263, 46%, 61%));
  --md-color-bold: var(--color-yellow-500, hsl(59, 71%, 68%));
  --md-color-bolditalic: var(--color-gray-10, hsl(225, 17%, 88%));
  --md-color-border: rgb(66, 71, 80);
  --md-color-code-cyan: var(--color-cyan-300, hsl(183, 29%, 62%));
  --md-color-code-gray: var(--color-slate-500, hsl(224, 37%, 80%));
  --md-color-code-green: var(--color-green-500, hsl(124, 54%, 75%));
  --md-color-code-magenta: var(--color-magenta-300, hsl(334, 37%, 65%));
  --md-color-code-purple: var(--color-purple-910, hsl(263, 37%, 69%));
  --md-color-code-slate: var(--color-slate-900, hsl(225, 14%, 40%));
  --md-color-code-white: var(--color-slate-300, hsl(220, 23%, 90%));
  --md-color-code-yellow: var(--color-yellow-310, hsl(61, 46%, 69%));
  --md-color-comment: var(--color-gray-15, hsl(225, 17%, 84%));
  --md-color-footnote: var(--color-gray-50, hsl(226, 10%, 47%));
  --md-color-highlight-bg: var(--color-highlight-gradient, linear-gradient(60deg,
    #d7f8ff, #d4f0fe, #d1e6fe, #cedcfd, 
    #cbd2fc, #c3c1fc, #c7b9f8, #c7a3ff));
  --md-color-highlight-text: var(--color-highlight-text, hsl(225, 12%, 20%));
  --md-color-italic: var(--color-purple-500, hsl(255, 100%, 86%));
  --md-color-link: var(--color-magenta-700, #ff80b7);
  --md-color-link-active: var(--color-magenta-900, hsl(317, 62%, 65%));
  --md-color-link-hover: var(--color-magenta-310, hsl(338, 100%, 87%));
  --md-color-strikethrough: var(--text-faint, #6c6498);
  --md-color-tag: var(--color-green-700, hsl(151, 72%, 65%));
  --md-color-tag-active: var(--color-green-900, hsl(166, 74%, 45%));
  --md-color-tag-hover: var(--color-green-300, hsl(151, 100%, 81%));
  --md-color-text: var(--color-cyan-530, hsl(191, 54%, 64%));
  --md-color-text-faint: var(--color-cyan-900, hsl(196, 27%, 41%));
  --md-color-text-muted: var(--color-cyan-700, hsl(194, 50%, 47%));
  --menu-background: var(--background-secondary, #15131f);
  --mermaid-font: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --metadata-border-color: var(--background-modifier-border, hsl(225, 18%, 25%));
  --metadata-divider-color: var(--background-modifier-border, hsl(225, 18%, 25%));
  --metadata-input-font: var(--font-interface, "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #f8f8f2);
  --metadata-label-font: var(--font-interface, "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #6e6b7e);
  --metadata-label-text-color-hover: var(--text-muted, #6e6b7e);
  --modal-background: var(--background-primary, #22212c);
  --motion-delay: cubic-bezier(0.86,0,0.07,1);
  --motion-heavy: cubic-bezier(0.18,0.89,0.32,1.27);
  --motion-smooth: cubic-bezier(0.65,0.05,0.36,1);
  --nav-collapse-icon-color: var(--collapse-icon-color, #6c6498);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #6c6498);
  --nav-heading-color: var(--text-normal, #f8f8f2);
  --nav-heading-color-collapsed: var(--text-faint, #6c6498);
  --nav-heading-color-collapsed-hover: var(--text-muted, #6e6b7e);
  --nav-heading-color-hover: var(--text-normal, #f8f8f2);
  --nav-item-color: var(--text-muted, #6e6b7e);
  --nav-item-color-active: var(--text-normal, #f8f8f2);
  --nav-item-color-highlighted: var(--text-accent, #bd93f9);
  --nav-item-color-hover: var(--text-normal, #f8f8f2);
  --nav-item-color-selected: var(--text-normal, #f8f8f2);
  --nav-tag-color: var(--text-faint, #6c6498);
  --nav-tag-color-active: var(--text-muted, #6e6b7e);
  --nav-tag-color-hover: var(--text-muted, #6e6b7e);
  --pdf-background: var(--background-primary, #22212c);
  --pdf-page-background: var(--background-primary, #22212c);
  --pdf-sidebar-background: var(--background-primary, #22212c);
  --pill-border-color: var(--background-modifier-border, hsl(225, 18%, 25%));
  --pill-color: var(--text-muted, #6e6b7e);
  --pill-color-hover: var(--text-normal, #f8f8f2);
  --pill-color-remove: var(--text-faint, #6c6498);
  --pill-color-remove-hover: var(--text-accent, #bd93f9);
  --prompt-background: var(--background-primary, #22212c);
  --raised-background: var(--blur-background, color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)));
  --reveal-font: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --ribbon-background: var(--background-secondary, #15131f);
  --ribbon-background-collapsed: var(--background-primary, #22212c);
  --scale-0-0: 0px;
  --scale-2-1: 2px;
  --scale-2-10: 20px;
  --scale-2-18: 36px;
  --scale-2-2: 4px;
  --scale-2-3: 6px;
  --scale-2-4: 8px;
  --scale-2-5: 10px;
  --scale-2-6: 12px;
  --scale-2-8: 16px;
  --scale-2-9: 18px;
  --scale-8-1: 8px;
  --scale-8-10: 80px;
  --scale-8-12: 96px;
  --scale-8-18: 144px;
  --scale-8-2: 16px;
  --scale-8-3: 24px;
  --scale-8-36: 288px;
  --scale-8-4: 32px;
  --scale-8-5: 40px;
  --scale-8-6: 48px;
  --scale-8-7: 54px;
  --scale-8-8: 64px;
  --scale-8-9: 72px;
  --scrollbar-active-thumb-bg: var(--color-black, hsl(230, 9%, 13%));
  --scrollbar-thumb-bg: var(--color-gray-100, hsl(231, 9%, 15%));
  --search-clear-button-color: var(--text-muted, #6e6b7e);
  --search-icon-color: var(--text-muted, #6e6b7e);
  --search-result-background: var(--background-primary, #22212c);
  --secondary: var(--text-accent, var(--color-gray-20, #bd93f9));
  --setting-group-heading-color: var(--text-normal, #f8f8f2);
  --setting-items-background: var(--background-primary-alt, #23212d);
  --setting-items-border-color: var(--background-modifier-border, hsl(225, 18%, 25%));
  --shadow-l: 0px 2px 2.3px -52px rgba(0, 0, 0, 0.448),
    0px 5.6px 6.3px -52px rgba(0, 0, 0, 0.6),
    0px 13.6px 15.1px -52px rgba(0, 0, 0, 0.852),
    0px 45px 50px -52px rgb(0, 0, 0);
  --shadow-m: 0px 3px 3.1px -20px rgba(0, 0, 0, 0.2),
    0px 24px 25px -20px rgba(0, 0, 0, 0.35);
  --shadow-sm: 0px 3px 12px -2px rgba(14, 11, 11, 0.5);
  --shadow-xsm: rgba(0, 0, 0, 0.15);
  --sheer-dark: rgba(0, 0, 0, 0.95);
  --sheer-light: rgba(0, 0, 0, 0.35);
  --sheer-medium: rgba(0, 0, 0, 0.65);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #6e6b7e);
  --shiki-code-background: var(--code-background, #23212d);
  --shiki-code-comment: var(--text-faint, #6c6498);
  --shiki-code-function: var(--color-green, hsl(151, 72%, 65%));
  --shiki-code-normal: var(--text-muted, #6e6b7e);
  --shiki-code-property: var(--color-cyan, hsl(192, 46%, 68%));
  --shiki-code-punctuation: var(--text-muted, #6e6b7e);
  --shiki-code-string: var(--color-yellow, hsl(58, 86%, 66%));
  --shiki-code-value: var(--color-purple, hsl(255, 100%, 86%));
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(225, 18%, 25%));
  --shiki-gutter-text-color: var(--text-faint, #6c6498);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #6e6b7e);
  --shiki-highlight-neutral: var(--shiki-code-normal, #6e6b7e);
  --shiki-terminal-dots-color: var(--text-faint, #6c6498);
  --slider-track-background: var(--background-modifier-border, hsl(225, 18%, 25%));
  --status-bar-background: var(--background-secondary, #15131f);
  --status-bar-border-color: var(--divider-color, hsl(225, 18%, 25%));
  --status-bar-text-color: var(--text-muted, #6e6b7e);
  --suggestion-background: var(--background-primary, #22212c);
  --sync-avatar-color-3: var(--color-yellow, hsl(58, 86%, 66%));
  --sync-avatar-color-4: var(--color-green, hsl(151, 72%, 65%));
  --sync-avatar-color-5: var(--color-cyan, hsl(192, 46%, 68%));
  --sync-avatar-color-7: var(--color-purple, hsl(255, 100%, 86%));
  --tab-background-active: var(--background-primary, #22212c);
  --tab-container-background: var(--background-secondary, #15131f);
  --tab-outline-color: var(--divider-color, hsl(225, 18%, 25%));
  --tab-switcher-background: var(--background-secondary, #15131f);
  --tab-text-color: var(--text-faint, #6c6498);
  --tab-text-color-active: var(--text-muted, #6e6b7e);
  --tab-text-color-focused: var(--text-muted, #6e6b7e);
  --tab-text-color-focused-active: var(--text-muted, #6e6b7e);
  --tab-text-color-focused-active-current: var(--text-normal, #f8f8f2);
  --tab-text-color-focused-highlighted: var(--text-accent, #bd93f9);
  --table-add-button-border-color: var(--background-modifier-border, hsl(225, 18%, 25%));
  --table-border-color: var(--background-modifier-border, hsl(225, 18%, 25%));
  --table-drag-handle-background-active: var(--table-selection-border-color, #483699);
  --table-drag-handle-color: var(--text-faint, #6c6498);
  --table-drag-handle-color-active: var(--text-on-accent, #f8f8f2);
  --table-header-border-color: var(--table-border-color, hsl(225, 18%, 25%));
  --table-header-color: var(--text-normal, #f8f8f2);
  --table-selection-border-color: var(--interactive-accent, #483699);
  --tag-color: var(--text-accent, #bd93f9);
  --tag-color-hover: var(--text-accent, #bd93f9);
  --tertiary: var(--text-accent-hover, var(--color-white, #bd93f9));
  --text-accent: var(--color-gray-20, #bd93f9);
  --text-accent-hover: var(--color-white, #bd93f9);
  --text-error: var(--color-magenta-910, hsl(342, 96%, 68%));
  --text-error-hover: var(--color-magenta-900, hsl(317, 62%, 65%));
  --text-faint: var(--color-gray-60, #6c6498);
  --text-highlight-bg: var(--color-highlight-bg, hsla(192, 100%, 92%, 0.596));
  --text-highlight-bg-active: var(--color-highlight-bg, rgba(54, 57, 72, 0.4));
  --text-muted: var(--color-gray-40, #6e6b7e);
  --text-normal: var(--color-gray-20, #f8f8f2);
  --text-on-accent: var(--color-white, #f8f8f2);
  --text-success: var(--color-green, hsl(151, 72%, 65%));
  --textHighlight: var(--text-highlight-bg, var(--color-highlight-bg, hsla(192, 100%, 92%, 0.596)));
  --titlebar-background: var(--background-secondary, #15131f);
  --titlebar-background-focused: var(--background-secondary-alt, #2a2442);
  --titlebar-border-color: var(--background-modifier-border, hsl(225, 18%, 25%));
  --titlebar-text-color: var(--text-muted, #6e6b7e);
  --titlebar-text-color-focused: var(--text-normal, #f8f8f2);
  --tracking-0: 0px;
  --tracking-1: 0.16px;
  --tracking-2: 0.32px;
  --tracking-3: 0.64px;
  --tracking-4: 1.28px;
  --tracking-5: 2.56px;
  --vault-profile-color: var(--text-normal, #f8f8f2);
  --vault-profile-color-hover: var(--vault-profile-color, #f8f8f2);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #15131f);
  background-color: var(--tab-container-background, rgb(21, 19, 31));
  color: rgb(248, 248, 242);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(34, 33, 44));
  color: rgb(248, 248, 242);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(21, 19, 31));
  color: rgb(248, 248, 242);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(52, 58, 75);
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #15131f);
  background-color: var(--tab-container-background, rgb(21, 19, 31));
  border-left-color: rgb(52, 58, 75);
  color: rgb(248, 248, 242);
}

html body html {
  --default-font: var(--font-sans-2, "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --duration-fast-1: 120ms;
  --duration-fast-2: 180ms;
  --duration-moderate-1: 250ms;
  --duration-moderate-2: 340ms;
  --duration-none: 0;
  --duration-slow-1: 500ms;
  --duration-slow-2: 640ms;
  --font-bold: 800;
  --font-code: var(--font-monospace-2, "Monaco", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace);
  --font-editor: var(--font-sans-2, 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif);
  --font-extra-bold: 900;
  --font-extra-light: 200;
  --font-header: var(--font-sans-2, 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif);
  --font-light: 300;
  --font-medium: 500;
  --font-monospace: "Monaco", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace;
  --font-monospace-1: "Monaco", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace;
  --font-monospace-2: "Monaco", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace;
  --font-preview: var(--font-sans-2, 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif);
  --font-regular: 400;
  --font-sans-2: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-scale-0: 0.875rem;
  --font-scale-00: 0.750rem;
  --font-scale-000: 0.625rem;
  --font-scale-1: 1rem;
  --font-scale-10: 3rem;
  --font-scale-2: 1.125rem;
  --font-scale-3: 1.375rem;
  --font-scale-4: 1.625rem;
  --font-scale-5: 1.750rem;
  --font-scale-6: 2rem;
  --font-scale-7: 2.250rem;
  --font-scale-8: 2.5rem;
  --font-scale-9: 2.625rem;
  --font-semi-bold: 600;
  --font-thin: 100;
  --h1-size: 1.750rem;
  --h2-size: 1.688rem;
  --h3-size: 1.563rem;
  --h4-size: 1.438rem;
  --h5-size: 1.313rem;
  --h6-size: 1.188rem;
  --header-line-height: calc(var(--line-height)*0.8);
  --header-shadow-color: rgb(31, 31, 31);
  --header-shadow-size: 0px 4px 3px;
  --line-height: 1.58em;
  --line-width: 42em;
  --mermaid-font: var(--font-sans-2, 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif);
  --motion-delay: cubic-bezier(0.86,0,0.07,1);
  --motion-heavy: cubic-bezier(0.18,0.89,0.32,1.27);
  --motion-smooth: cubic-bezier(0.65,0.05,0.36,1);
  --reveal-font: var(--font-sans-2, 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif);
  --scale-0-0: 0px;
  --scale-2-1: 2px;
  --scale-2-10: 20px;
  --scale-2-18: 36px;
  --scale-2-2: 4px;
  --scale-2-3: 6px;
  --scale-2-4: 8px;
  --scale-2-5: 10px;
  --scale-2-6: 12px;
  --scale-2-8: 16px;
  --scale-2-9: 18px;
  --scale-8-1: 8px;
  --scale-8-10: 80px;
  --scale-8-12: 96px;
  --scale-8-18: 144px;
  --scale-8-2: 16px;
  --scale-8-3: 24px;
  --scale-8-36: 288px;
  --scale-8-4: 32px;
  --scale-8-5: 40px;
  --scale-8-6: 48px;
  --scale-8-7: 54px;
  --scale-8-8: 64px;
  --scale-8-9: 72px;
  --tracking-0: 0px;
  --tracking-1: 0.16px;
  --tracking-2: 0.32px;
  --tracking-3: 0.64px;
  --tracking-4: 1.28px;
  --tracking-5: 2.56px;
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--md-color-bold, rgb(255, 184, 108));
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body .markdown-rendered p > em, html em {
  color: var(--md-color-italic, rgb(255, 255, 128));
  font-weight: 500;
  outline: rgb(255, 255, 128) none 0px;
  text-decoration-color: rgb(255, 255, 128);
}

html body .markdown-rendered p > i, html i {
  color: var(--md-color-italic, rgb(255, 255, 128));
  font-weight: 500;
  outline: rgb(255, 255, 128) none 0px;
  text-decoration-color: rgb(255, 255, 128);
}

html body .markdown-rendered p > strong > em, html strong > em {
  color: var(--md-color-bolditalic, rgb(255, 255, 128));
  outline: rgb(255, 255, 128) none 0px;
  text-decoration-color: rgb(255, 255, 128);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--md-color-bold, rgb(255, 184, 108));
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(254, 243, 172));
  color: var(--text-normal, rgb(38, 38, 38));
  font-weight: 500;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html body del {
  color: var(--md-color-strikethrough, rgb(108, 100, 152));
  font-weight: 500;
  outline: rgb(108, 100, 152) none 0px;
  text-decoration-color: rgb(108, 100, 152);
}

html body li.task-list-item input[type="checkbox"] {
  background-color: rgb(30, 31, 36);
  border-color: rgb(66, 71, 80);
  border-radius: 2px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgba(0, 0, 0, 0));
  border-color: rgba(255, 255, 255, 0.25);
}

html body p {
  color: var(--text-muted, rgb(110, 107, 126));
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(110, 107, 126) none 0px;
  text-decoration-color: rgb(110, 107, 126);
}`,
    links: `html body a.external-link, html footer a {
  color: var(--md-color-link, rgb(80, 250, 123));
  outline: rgb(80, 250, 123) none 0px;
  text-decoration-color: rgb(80, 250, 123);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--md-color-link, rgb(255, 128, 183));
  outline: rgb(255, 128, 183) none 0px;
  text-decoration-color: rgb(255, 128, 183);
}

html body a.internal-link.broken {
  color: var(--md-color-link, rgb(189, 147, 249));
  outline: rgb(189, 147, 249) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html body dd {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
  color: rgb(114, 195, 213);
}

html body dt {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
  color: rgb(114, 195, 213);
  font-weight: 500;
}

html body ol > li {
  color: rgb(114, 195, 213);
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
  color: var(--text-faint, rgb(108, 100, 152));
}

html body blockquote {
  background-color: var(--blockquote-background-color, rgb(21, 19, 31));
  color: var(--blockquote-color, rgb(114, 195, 213));
  font-weight: 500;
  line-height: 27.2px;
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
}

html body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgba(0, 0, 0, 0.08));
}

html body td {
  border-bottom-color: rgb(66, 71, 80);
  border-left-color: rgb(66, 71, 80);
  border-right-color: rgb(66, 71, 80);
  border-top-color: rgb(66, 71, 80);
  color: var(--table-text-color, rgb(114, 195, 213));
  font-weight: 500;
}

html body th {
  border-bottom-color: rgb(52, 58, 75);
  border-left-color: rgb(52, 58, 75);
  border-right-color: rgb(52, 58, 75);
  border-top-color: rgb(52, 58, 75);
  color: var(--table-header-color, rgb(248, 248, 242));
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
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(110, 107, 126);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--ec-codeFg, rgb(110, 107, 126));
  font-family: var(--ec-codeFontFml, "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html body pre:has(> code) {
  background-color: var(--code-background, rgb(35, 33, 45));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

html body figcaption {
  color: rgb(114, 195, 213);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  --code-background: var(--ec-frm-edBg, #23212d);
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
  box-shadow: 0px 4px 6px -1px var(--shadow-xsm);
}

html body video {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgb(35, 33, 45));
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: var(--text-muted, rgb(110, 107, 126));
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
  box-shadow: 0px 4px 6px -1px var(--shadow-xsm);
  color: rgb(114, 195, 213);
}

html body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  box-shadow: 0px 4px 6px -1px var(--shadow-xsm);
  color: rgb(248, 248, 242);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(66, 71, 80);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(66, 71, 80);
  border-right-color: rgb(66, 71, 80);
  border-top-color: rgb(66, 71, 80);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
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
  color: rgb(110, 107, 126);
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
  color: rgb(110, 107, 126);
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

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 33, 44);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 33, 44);
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

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 238, 94);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 196, 211);
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

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
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

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
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
  background-color: rgb(243, 238, 94);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 238, 94);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(201, 184, 255);
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

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(101, 230, 168);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(101, 230, 168);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(101, 230, 168);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout > .callout-content {
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(114, 195, 213);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(114, 195, 213);
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

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
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
  border-bottom-color: rgb(52, 58, 75);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(52, 58, 75);
  border-right-color: rgb(52, 58, 75);
  border-top-color: rgb(52, 58, 75);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-normal, rgb(248, 248, 242));
  font-family: var(--default-font, "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
}

html body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(34, 33, 44));
  border-bottom-color: rgb(66, 71, 80);
  border-bottom-left-radius: var(--scale-0-0, 0px);
  border-bottom-right-radius: var(--scale-0-0, 0px);
  border-top-left-radius: var(--scale-2-2, 4px);
  border-top-right-radius: var(--scale-2-2, 4px);
  box-shadow: var(--shadow-sm),
                var(--shadow-l);
}

html body .search > .search-container > .search-space > * {
  color: rgb(114, 195, 213);
  font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
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
  color: rgb(114, 195, 213);
  font-weight: 500;
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(66, 71, 80);
  border-bottom-left-radius: var(--scale-0-0, 0px);
  border-bottom-right-radius: var(--scale-0-0, 0px);
  border-top-left-radius: var(--scale-2-2, 4px);
  border-top-right-radius: var(--scale-2-2, 4px);
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

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, #bd93f9);
  --pill-color-hover: var(--tag-color-hover, #bd93f9);
  --pill-color-remove: var(--tag-color, #bd93f9);
  --pill-color-remove-hover: var(--tag-color-hover, #bd93f9);
  color: var(--pill-color, rgb(189, 147, 249));
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 500);
}

html body a.internal-link.tag-link::before {
  color: rgb(189, 147, 249);
}

html body h1 {
  border-bottom-color: rgb(255, 184, 107);
  border-left-color: rgb(255, 184, 107);
  border-right-color: rgb(255, 184, 107);
  border-top-color: rgb(255, 184, 107);
  color: var(--h1-color, rgb(255, 184, 107));
  font-family: var(--font-header, "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif);
  font-weight: var(--font-bold, 700);
  line-height: var(--header-line-height, 32.7224px);
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(114, 195, 213));
}

html body h2 {
  border-bottom-color: rgb(255, 122, 198);
  border-left-color: rgb(255, 122, 198);
  border-right-color: rgb(255, 122, 198);
  border-top-color: rgb(255, 122, 198);
  color: var(--h2-color, rgb(255, 122, 198));
  font-family: var(--font-header, "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif);
  font-weight: var(--font-bold, 700);
  line-height: var(--header-line-height, 29.5675px);
}

html body h2.page-title, html h2.page-title a {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
  color: var(--inline-title-color, rgb(114, 195, 213));
}

html body h3 {
  border-bottom-color: rgb(189, 147, 249);
  border-left-color: rgb(189, 147, 249);
  border-right-color: rgb(189, 147, 249);
  border-top-color: rgb(189, 147, 249);
  color: var(--h3-color, rgb(189, 147, 249));
  font-family: var(--font-header, "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif);
  font-weight: var(--font-bold, 700);
  line-height: var(--header-line-height, 26.6552px);
}

html body h4 {
  border-bottom-color: rgb(139, 233, 253);
  border-left-color: rgb(139, 233, 253);
  border-right-color: rgb(139, 233, 253);
  border-top-color: rgb(139, 233, 253);
  color: var(--h4-color, rgb(139, 233, 253));
  font-family: var(--font-header, "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif);
  font-weight: var(--font-bold, 700);
  line-height: var(--header-line-height, 24.0261px);
}

html body h5 {
  border-bottom-color: rgb(80, 250, 123);
  border-left-color: rgb(80, 250, 123);
  border-right-color: rgb(80, 250, 123);
  border-top-color: rgb(80, 250, 123);
  color: var(--h5-color, rgb(80, 250, 123));
  font-family: var(--font-header, "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif);
  font-weight: var(--font-bold, 700);
  line-height: var(--header-line-height, 21.761px);
}

html body h6 {
  border-bottom-color: rgb(241, 250, 140);
  border-left-color: rgb(241, 250, 140);
  border-right-color: rgb(241, 250, 140);
  border-top-color: rgb(241, 250, 140);
  color: var(--h6-color, rgb(241, 250, 140));
  font-family: var(--font-header, "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif);
  font-weight: var(--font-bold, 700);
  line-height: var(--header-line-height, 20.224px);
}

html body hr {
  border-bottom-color: rgb(52, 58, 75);
  border-left-color: rgb(52, 58, 75);
  border-right-color: rgb(52, 58, 75);
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  padding-bottom: 32px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--color-gray-10, rgb(219, 222, 230));
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-medium, 500);
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--color-gray-10, rgb(219, 222, 230));
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-medium, 500);
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

html body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(114, 195, 213);
}

html body li.depth-0 {
  font-weight: var(--font-medium, 500);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: var(--icon-color, rgb(110, 107, 126));
}`,
    footer: `html body footer {
  background-color: var(--color-black, rgb(30, 31, 36));
  border-bottom-color: rgb(82, 87, 102);
  border-left-color: rgb(82, 87, 102);
  border-left-width: 0px;
  border-right-color: rgb(82, 87, 102);
  border-top-color: rgb(82, 87, 102);
  border-top-width: 0px;
  color: var(--color-gray-70, rgb(82, 87, 102));
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-left: 8px;
  padding-top: 2px;
}

html body footer ul li a {
  color: var(--color-gray-40, rgb(160, 167, 187));
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
  color: var(--color-gray-40, rgb(160, 167, 187));
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
  color: var(--color-gray-40, rgb(160, 167, 187));
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
  color: var(--icon-color, rgb(110, 107, 126));
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
  color: var(--text-faint, rgb(108, 100, 152));
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(248, 248, 242);
}

html body .canvas-node-content {
  color: rgb(248, 248, 242);
}

html body .canvas-node-file {
  color: var(--md-color-text, rgb(114, 195, 213));
}

html body .canvas-node-group {
  border-color: rgb(248, 248, 242);
}

html body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(21, 19, 31));
  border-color: rgb(248, 248, 242);
}`,
    bases: `html body .bases-table {
  border-color: rgb(66, 71, 80);
}

html body .bases-table thead th {
  border-color: rgb(52, 58, 75);
  color: var(--table-header-color, rgb(248, 248, 242));
}`,
    properties: `html body .metadata {
  border-bottom-color: rgb(52, 58, 75);
  border-left-color: rgb(52, 58, 75);
  border-right-color: rgb(52, 58, 75);
  border-top-color: rgb(52, 58, 75);
  color: var(--text-muted, rgb(110, 107, 126));
}

html body .metadata-container .metadata-property {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}

html body .metadata-properties {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}

html body .metadata-property-key {
  color: rgb(110, 107, 126);
  font-family: var(--metadata-label-font, "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: 500;
}

html body .metadata-property-value {
  color: rgb(110, 107, 126);
  font-family: var(--metadata-input-font, "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body .note-properties {
  border-color: rgb(52, 58, 75);
}

html body .note-properties-key {
  color: rgb(110, 107, 126);
  font-weight: 500;
}

html body .note-properties-row {
  border-color: rgb(110, 107, 126);
}

html body .note-properties-tags {
  --pill-color: var(--tag-color, #bd93f9);
  --pill-color-hover: var(--tag-color-hover, #bd93f9);
  --pill-color-remove: var(--tag-color, #bd93f9);
  --pill-color-remove-hover: var(--tag-color-hover, #bd93f9);
  color: var(--pill-color, rgb(189, 147, 249));
}

html body .note-properties-value {
  color: rgb(110, 107, 126);
}

html body div#quartz-root {
  background-color: var(--background-primary, rgb(34, 33, 44));
  color: var(--text-normal, rgb(248, 248, 242));
}

html body ol.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgb(21, 19, 31));
  border-color: rgb(248, 248, 242);
}

html body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(42, 36, 66));
}

html body .stacked-page.active {
  border-color: rgb(248, 248, 242);
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

html body .navigation-progress {
  background-color: var(--color-black, rgb(30, 31, 36));
}

html body .page-header h2.page-title {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: var(--text-normal, rgb(248, 248, 242));
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: var(--font-scale-1, 16px);
  line-height: 20.8px;
  margin-top: 2px;
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
  background-color: rgb(30, 31, 36);
  border-bottom-color: rgb(110, 107, 126);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-normal, rgb(110, 107, 126));
  font-family: var(--default-font, "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
}

html body kbd {
  background-color: var(--code-background, rgb(35, 36, 42));
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
  box-shadow: 0 1px 0 1px var(--shadow-xsm);
  color: var(--color-slate-300, rgb(224, 228, 235));
  font-family: var(--font-code, Monaco, Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace);
  font-size: var(--font-scale-00, 12px);
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
}

html body ul.tags > li {
  color: var(--tag-color, rgb(189, 147, 249));
}`,
  },
  light: {},
};
