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
  --accent-h: 263;
  --accent-l: 61%;
  --accent-s: 46%;
  --background-modifier-active-hover: rgb(23, 24, 28);
  --background-modifier-border: rgba(100, 100, 100, 0.25);
  --background-modifier-border-focus: rgb(231, 229, 115);
  --background-modifier-border-hover: rgba(255, 255, 255, 0.25);
  --background-modifier-form-field: rgb(30, 31, 36);
  --background-modifier-form-field-hover: rgb(30, 31, 36);
  --background-modifier-hover: transparent;
  --background-modifier-success: #44CF6E;
  --background-primary: rgb(45, 48, 57);
  --background-primary-alt: rgb(35, 36, 42);
  --background-secondary: rgb(30, 31, 36);
  --background-secondary-alt: rgb(30, 31, 36);
  --bases-cards-background: rgb(45, 48, 57);
  --bases-cards-cover-background: rgb(35, 36, 42);
  --bases-cards-radius: 2px;
  --bases-cards-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25);
  --bases-cards-shadow-hover: 0 0 0 1px rgba(255, 255, 255, 0.25);
  --bases-embed-border-color: rgba(100, 100, 100, 0.25);
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: rgb(160, 167, 187);
  --bases-group-heading-property-size: 13px;
  --bases-table-border-color: rgb(67, 72, 81);
  --bases-table-cell-background-active: rgb(45, 48, 57);
  --bases-table-cell-background-disabled: rgb(35, 36, 42);
  --bases-table-cell-background-selected: hsla(263,
              46%,
              61%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(231, 229, 115);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(88, 95, 116);
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: rgb(35, 36, 42);
  --bases-table-header-background: rgb(45, 48, 57);
  --bases-table-header-background-hover: transparent;
  --bases-table-header-color: rgb(160, 167, 187);
  --bases-table-row-background-hover: rgba(0, 0, 0, 0.3);
  --bases-table-summary-background: rgb(45, 48, 57);
  --bases-table-summary-background-hover: transparent;
  --blockquote-border-color: rgb(145, 110, 201);
  --blur-background: color-mix(in srgb, rgb(23, 24, 28) 65%, transparent) linear-gradient(rgb(23, 24, 28), color-mix(in srgb, rgb(23, 24, 28) 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: rgb(219, 206, 132);
  --bold-italic-color: rgb(219, 222, 230);
  --bold-weight: 700;
  --border-300: rgba(255, 255, 255, 0.25);
  --border-500: rgba(100, 100, 100, 0.25);
  --border-700: rgba(0, 0, 0, 0.15);
  --border-900: rgb(67, 72, 81);
  --button-radius: 2px;
  --callout-border-opacity: 0.3;
  --callout-border-width: 1px;
  --callout-content-padding: 0 20px;
  --callout-padding: 0 0 0 0;
  --callout-radius: 2px;
  --callout-title-background: transparent;
  --canvas-background: rgb(45, 48, 57);
  --canvas-card-label-color: rgb(124, 132, 156);
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: rgb(52, 58, 75);
  --caret-color: rgb(185, 195, 223);
  --checkbox-border-color: rgb(67, 72, 81);
  --checkbox-border-color-hover: rgb(67, 72, 81);
  --checkbox-color: transparent;
  --checkbox-color-hover: transparent;
  --checkbox-marker-color: rgb(124, 132, 156);
  --checkbox-radius: 2px;
  --checklist-done-color: rgb(141, 148, 170);
  --checklist-done-decoration: none;
  --clickable-icon-radius: 2px;
  --code-background: rgb(35, 36, 42);
  --code-border-color: rgba(100, 100, 100, 0.25);
  --code-bracket-background: transparent;
  --code-comment: rgb(207, 211, 221);
  --code-function: rgb(199, 133, 161);
  --code-important: rgb(224, 228, 235);
  --code-keyword: rgb(169, 147, 205);
  --code-normal: rgb(185, 195, 223);
  --code-property: rgb(211, 212, 140);
  --code-punctuation: rgb(88, 95, 116);
  --code-radius: 0px;
  --code-string: rgb(157, 226, 161);
  --code-tag: rgb(199, 133, 161);
  --code-value: rgb(130, 183, 186);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(124, 132, 156);
  --collapse-icon-color-collapsed: rgb(185, 195, 223);
  --color-accent: rgb(145, 110, 201);
  --color-accent-1: rgb(134, 95, 196);
  --color-accent-2: rgb(156, 125, 207);
  --color-accent-hsl: 263,
              46%,
              61%;
  --color-base-00: rgb(23, 24, 28);
  --color-base-10: rgb(30, 31, 36);
  --color-base-100: rgb(185, 195, 223);
  --color-base-20: rgb(35, 36, 42);
  --color-base-25: rgb(45, 48, 57);
  --color-base-30: rgb(52, 58, 75);
  --color-base-35: rgb(82, 87, 102);
  --color-base-40: rgb(124, 132, 156);
  --color-base-50: rgb(108, 113, 132);
  --color-base-60: rgb(160, 167, 187);
  --color-base-70: rgb(159, 169, 198);
  --color-black: rgb(30, 31, 36);
  --color-blacker: rgb(23, 24, 28);
  --color-cyan: #53DFDD;
  --color-cyan-300: rgb(130, 183, 186);
  --color-cyan-500: rgb(136, 196, 211);
  --color-cyan-510: rgb(82, 193, 218);
  --color-cyan-520: rgb(91, 188, 210);
  --color-cyan-530: rgb(114, 195, 213);
  --color-cyan-533: rgb(13, 200, 242);
  --color-cyan-540: rgb(57, 181, 219);
  --color-cyan-555: rgb(137, 245, 236);
  --color-cyan-577: rgb(231, 189, 177);
  --color-cyan-700: rgb(60, 152, 180);
  --color-cyan-900: rgb(76, 118, 133);
  --color-cyan-gradient-1: linear-gradient(180deg,
        #82b7ba, #77aeb3, #6da5ac, #629ca5, 
        #5a919c, #558590, #4f7984, #496d79);
  --color-cyan-gradient-2: linear-gradient(180deg, 
        #6de0fd, #5dd6f5, #56d3f2, #4fcfef, 
        #48cceb, #40c8e8, #37c5e5, #2dc1e2);
  --color-gray-10: rgb(219, 222, 230);
  --color-gray-100: rgb(35, 36, 42);
  --color-gray-15: rgb(207, 211, 221);
  --color-gray-20: rgb(185, 195, 223);
  --color-gray-30: rgb(159, 169, 198);
  --color-gray-40: rgb(160, 167, 187);
  --color-gray-48: rgb(141, 148, 170);
  --color-gray-50: rgb(108, 113, 132);
  --color-gray-60: rgb(124, 132, 156);
  --color-gray-70: rgb(82, 87, 102);
  --color-gray-75: rgb(68, 72, 85);
  --color-gray-80: rgb(52, 58, 75);
  --color-gray-90: rgb(45, 48, 57);
  --color-gray-95: rgb(41, 43, 50);
  --color-green: #44CF6E;
  --color-green-300: rgb(158, 255, 208);
  --color-green-500: rgb(157, 226, 161);
  --color-green-700: rgb(114, 213, 165);
  --color-green-710: rgb(114, 213, 165);
  --color-green-900: rgb(30, 200, 160);
  --color-green-910: rgb(17, 212, 141);
  --color-green-920: rgb(13, 145, 116);
  --color-green-gradient-1: linear-gradient(180deg,
        #9effd0, #8bfcc9, #79f9c4, #67f4bf, 
        #57efbb, #48e8b7, #39e0b4, #2cd8b0);
  --color-green-gradient-2: linear-gradient(180deg,
        #a2f49a, #89f18d, #79ee8b, #69ea8d, 
        #59e692, #4ae299, #3bdda3, #2cd8b0);
  --color-h3-alt: rgb(136, 163, 252);
  --color-h3-green: rgb(71, 189, 126);
  --color-h3-orange: rgb(217, 176, 104);
  --color-h4-alt: rgb(71, 209, 143);
  --color-highlight-bg: rgba(255, 252, 59, 0.08);
  --color-highlight-border: rgba(255, 252, 59, 0.4);
  --color-highlight-text: rgb(114, 195, 213);
  --color-magenta-300: rgb(199, 133, 161);
  --color-magenta-310: rgb(255, 189, 213);
  --color-magenta-500: rgb(255, 153, 190);
  --color-magenta-700: rgb(255, 128, 183);
  --color-magenta-710: rgb(255, 122, 162);
  --color-magenta-900: rgb(221, 110, 190);
  --color-magenta-910: rgb(252, 95, 142);
  --color-magenta-920: rgb(114, 60, 76);
  --color-magenta-gradient-1: linear-gradient(180deg,
        #ffb1ce, #ffa3ca, #f897c4, #f88cc4, 
        #ef7dbe, #ea77be, #e472be, #dd6ebe);
  --color-magenta-gradient-2: linear-gradient(180deg,
        #ff99be, #fc91bd, #f88abd, #f483bd, 
        #ef7dbe, #ea77be, #e472be, #dd6ebe);
  --color-orange: #E9973F;
  --color-orange-300: rgb(249, 163, 88);
  --color-orange-310: rgb(223, 165, 114);
  --color-orange-500: rgb(171, 116, 68);
  --color-pink: #FA99CD;
  --color-purple-300: rgb(179, 164, 224);
  --color-purple-333: rgb(188, 185, 223);
  --color-purple-500: rgb(201, 184, 255);
  --color-purple-555: rgb(201, 184, 255);
  --color-purple-577: rgb(201, 184, 255);
  --color-purple-700: rgb(184, 148, 255);
  --color-purple-900: rgb(145, 110, 201);
  --color-purple-910: rgb(169, 147, 205);
  --color-purple-920: rgb(107, 72, 163);
  --color-purple-gradient-1: linear-gradient(180deg,
        #d9ccff, #d2c4ff, #cbbcff, #c4b4ff,
        #bdabff, #b5a3ff, #ad9bff, #a593ff);
  --color-purple-gradient-2: linear-gradient(180deg,
        #d9ccff, #ccbafc, #c0a9f8, #b59af2, 
        #ab8cea, #a281e1, #9977d6, #916ec9);
  --color-red-300: rgb(249, 96, 88);
  --color-red-500: rgb(171, 73, 68);
  --color-slate-300: rgb(224, 228, 235);
  --color-slate-500: rgb(185, 195, 223);
  --color-slate-700: rgb(159, 167, 188);
  --color-slate-900: rgb(88, 95, 116);
  --color-slate-gradient-1: linear-gradient(180deg,
        #eff1f5, #e3e6ed, #d7dce5, #ccd1dd, 
        #c0c7d5, #b5bccd, #aab2c5, #9fa7bc);
  --color-slate-gradient-2: linear-gradient(180deg, 
        #b9c3df, #aab4cf, #9ca5bf, #8e97b0, 
        #8c96b1, #828ba5, #70778f, #656d85);
  --color-white: rgb(239, 241, 245);
  --color-yellow: #E0DE71;
  --color-yellow-300: rgb(253, 255, 128);
  --color-yellow-310: rgb(211, 212, 140);
  --color-yellow-355: rgb(218, 219, 132);
  --color-yellow-500: rgb(231, 229, 115);
  --color-yellow-510: rgb(215, 214, 132);
  --color-yellow-700: rgb(243, 238, 94);
  --color-yellow-900: rgb(217, 214, 23);
  --color-yellow-gradient-1: linear-gradient(180deg,
        #fcff80, #fafd6b, #f9fb57, #f6f843, 
        #f4f430, #f0ef1e, #e4e213, #ccc914);
  --color-yellow-gradient-2: linear-gradient(-90deg,
        #f3ee5e, #f1ec50, #f0eb41, #eee933, 
        #ece725, #eae516, #dbd815, #ccc914);
  --color-yellowish-355: rgb(219, 206, 132);
  --comment-color: rgb(207, 211, 221);
  --comment-h1: rgb(221, 217, 167);
  --comment-h2: rgb(203, 194, 224);
  --comment-h3: rgb(166, 202, 211);
  --comment-h4: rgb(169, 214, 193);
  --comment-h5: rgb(200, 206, 223);
  --comment-h6: rgb(182, 187, 200);
  --cursor: pointer;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(30, 31, 36);
  --divider-color-hover: rgb(108, 113, 132);
  --divider-vertical-height: calc(100% - 40px);
  --divider-width: 2px;
  --drag-ghost-background: rgb(45, 48, 57);
  --drag-ghost-text-color: rgb(114, 195, 213);
  --dropdown-background: rgb(23, 24, 28);
  --dropdown-background-hover: rgb(82, 87, 102);
  --embed-block-shadow-hover: 0 0 0 1px rgba(100, 100, 100, 0.25), inset 0 0 0 1px rgba(100, 100, 100, 0.25);
  --embed-border-left: 2px solid rgb(171, 116, 68);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(88, 95, 116);
  --embed-padding: 0 0 0 20px;
  --file-header-background: rgb(45, 48, 57);
  --file-header-background-focused: rgb(45, 48, 57);
  --file-header-font: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 16px;
  --file-header-font-weight: 500;
  --file-margins: 32px;
  --flair-background: rgb(23, 24, 28);
  --flair-color: rgb(185, 195, 223);
  --font-big: 1.15em;
  --font-body: 1em;
  --font-interface: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-mermaid: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mono: 'DM Mono', 'Fira Code', Courier, monospace;
  --font-monospace: '??', 'DM Mono', 'Fira Code', Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'DM Mono', 'Fira Code', Courier, monospace;
  --font-print: '??', '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, 'Arial';
  --font-sans: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-smallish: 0.89em;
  --font-text: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-ui-large: 24px;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: rgba(100, 100, 100, 0.25);
  --footnote-id-color: rgb(160, 167, 187);
  --footnote-id-color-no-occurrences: rgb(124, 132, 156);
  --footnote-input-background-active: transparent;
  --footnote-line-height: 1.58;
  --footnote-radius: 0px;
  --graph-color-line: rgb(76, 118, 133);
  --graph-color-line-hover: rgb(160, 167, 187);
  --graph-color-node-border-hover: rgb(239, 241, 245);
  --graph-color-node-hover: rgb(221, 110, 190);
  --graph-line: rgb(76, 118, 133);
  --graph-node: rgb(243, 238, 94);
  --graph-node-attachment: rgb(224, 228, 235);
  --graph-node-focused: rgb(124, 132, 156);
  --graph-node-tag: rgb(60, 152, 180);
  --graph-node-unresolved: rgb(145, 110, 201);
  --graph-text: rgb(219, 222, 230);
  --gray: var(--text-muted);
  --h1-color: rgb(217, 214, 23);
  --h1-size: 1.55rem;
  --h2-color: rgb(184, 148, 255);
  --h2-size: 1.45rem;
  --h2-weight: 600;
  --h3-color: rgb(13, 200, 242);
  --h3-size: 1.35rem;
  --h3-weight: 600;
  --h4-color: rgb(114, 213, 165);
  --h4-size: 1.25rem;
  --h4-weight: 600;
  --h5-color: rgb(185, 195, 223);
  --h5-size: 1.15rem;
  --h5-weight: 600;
  --h6-color: rgb(159, 167, 188);
  --h6-size: 1.05rem;
  --header-shadow-color: rgb(31, 31, 31);
  --header-shadow-size: 0px 4px 3px;
  --headerFont: var(--font-text);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(67, 72, 81);
  --hr-thickness: 1px;
  --icon-color: rgb(124, 132, 156);
  --icon-color-active: rgb(184, 148, 255);
  --icon-color-focused: rgb(184, 148, 255);
  --icon-color-hover: rgb(184, 148, 255);
  --icon-opacity: 1;
  --indentation-guide: rgb(67, 72, 81);
  --indentation-guide-active: rgba(255, 255, 255, 0.25);
  --inline-title-size: 1.55rem;
  --input-date-separator: rgb(124, 132, 156);
  --input-placeholder-color: rgb(124, 132, 156);
  --input-radius: 2px;
  --input-shadow: 0px 1px 0px 1px rgba(0, 0, 0, 0.15);
  --input-shadow-hover: 0px 1px 0px 1px rgba(0, 0, 0, 0.15);
  --interactive-accent: rgb(88, 95, 116);
  --interactive-accent-hover: rgb(159, 167, 188);
  --interactive-accent-hsl: 255, 14%, 40%;
  --interactive-hover: rgb(82, 87, 102);
  --interactive-normal: rgb(23, 24, 28);
  --italic-color: rgb(201, 184, 255);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.58;
  --link-color: rgb(255, 128, 183);
  --link-color-hover: rgb(255, 128, 183);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(255, 128, 183);
  --link-external-color-hover: rgb(255, 128, 183);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(255, 128, 183);
  --link-unresolved-decoration-color: rgba(95, 88, 116, 0.5);
  --link-unresolved-opacity: 0.65;
  --list-bullet-size: 5px;
  --list-indent: 1.75em;
  --list-marker-color: rgb(169, 147, 205);
  --list-marker-color-collapsed: rgb(185, 195, 223);
  --list-marker-color-hover: rgb(169, 147, 205);
  --menu-background: rgb(30, 31, 36);
  --menu-border-color: rgba(255, 255, 255, 0.25);
  --menu-radius: 2px;
  --menu-shadow: 0px 3px 12px -2px rgba(14, 11, 11, 0.5);
  --metadata-border-color: rgba(100, 100, 100, 0.25);
  --metadata-divider-color: rgba(100, 100, 100, 0.25);
  --metadata-input-background-active: transparent;
  --metadata-input-font: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(185, 195, 223);
  --metadata-label-background-active: transparent;
  --metadata-label-font: '??', 'DM Sans', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(160, 167, 187);
  --metadata-label-text-color-hover: rgb(160, 167, 187);
  --metadata-property-background-active: transparent;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(231, 229, 115);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgba(255, 255, 255, 0.25);
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: rgb(45, 48, 57);
  --modal-border-color: rgba(100, 100, 100, 0.25);
  --modal-height: 90vh;
  --modal-max-height: 1100px;
  --modal-max-width: 1000px;
  --modal-radius: 2px;
  --modal-width: 80vw;
  --nav-collapse-icon-color: rgb(124, 132, 156);
  --nav-collapse-icon-color-collapsed: rgb(124, 132, 156);
  --nav-heading-color: rgb(185, 195, 223);
  --nav-heading-color-collapsed: rgb(124, 132, 156);
  --nav-heading-color-collapsed-hover: rgb(160, 167, 187);
  --nav-heading-color-hover: rgb(185, 195, 223);
  --nav-item-background-active: rgb(45, 48, 57);
  --nav-item-background-hover: rgb(45, 48, 57);
  --nav-item-background-selected: hsla(263,
              46%,
              61%, 0.15);
  --nav-item-color: rgb(160, 167, 187);
  --nav-item-color-active: rgb(136, 196, 211);
  --nav-item-color-highlighted: rgb(239, 241, 245);
  --nav-item-color-hover: rgb(136, 196, 211);
  --nav-item-color-selected: rgb(185, 195, 223);
  --nav-item-radius: 0px;
  --nav-item-size: 14px;
  --nav-item-white-space: nowrap;
  --nav-tag-color: rgb(124, 132, 156);
  --nav-tag-color-active: rgb(160, 167, 187);
  --nav-tag-color-hover: rgb(160, 167, 187);
  --nav-tag-radius: 0px;
  --opacity-translucency: 0.75;
  --pdf-background: rgb(45, 48, 57);
  --pdf-page-background: rgb(45, 48, 57);
  --pdf-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25);
  --pdf-sidebar-background: rgb(45, 48, 57);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(100, 100, 100, 0.25);
  --pill-border-color: rgba(100, 100, 100, 0.25);
  --pill-border-color-hover: rgba(255, 255, 255, 0.25);
  --pill-color: rgb(160, 167, 187);
  --pill-color-hover: rgb(185, 195, 223);
  --pill-color-remove: rgb(124, 132, 156);
  --pill-color-remove-hover: rgb(185, 195, 223);
  --popover-height: 550px;
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: rgb(45, 48, 57);
  --prompt-border-color: rgba(100, 100, 100, 0.25);
  --radius-l: 4px;
  --radius-m: 2px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, rgb(23, 24, 28) 65%, transparent) linear-gradient(rgb(23, 24, 28), color-mix(in srgb, rgb(23, 24, 28) 65%, transparent));
  --ribbon-background: rgb(30, 31, 36);
  --ribbon-background-collapsed: rgb(30, 31, 36);
  --ribbon-padding: 8px 4px 8px 4px;
  --scrollbar-active-thumb-bg: rgb(30, 31, 36);
  --scrollbar-bg: transparent;
  --scrollbar-radius: 4px;
  --scrollbar-thumb-bg: rgb(35, 36, 42);
  --search-clear-button-color: rgb(160, 167, 187);
  --search-icon-color: rgb(160, 167, 187);
  --search-result-background: rgb(45, 48, 57);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(185, 195, 223);
  --setting-group-heading-size: 16px;
  --setting-items-background: rgb(35, 36, 42);
  --setting-items-border-color: rgba(100, 100, 100, 0.25);
  --setting-items-radius: 4px;
  --shadow-300: rgba(0, 0, 0, 0.15);
  --shadow-500: rgba(0, 0, 0, 0.65);
  --shadow-700: rgba(0, 0, 0, 0.95);
  --shadow-l: 0px 2px 2.3px -52px rgba(0, 0, 0, 0.448),
        0px 5.6px 6.3px -52px rgba(0, 0, 0, 0.6),
        0px 13.6px 15.1px -52px rgba(0, 0, 0, 0.852),
        0px 45px 50px -52px rgb(0, 0, 0);
  --shadow-large: 0px 2px 2.3px -52px rgba(0, 0, 0, 0.448),
        0px 5.6px 6.3px -52px rgba(0, 0, 0, 0.6),
        0px 13.6px 15.1px -52px rgba(0, 0, 0, 0.852),
        0px 45px 50px -52px rgb(0, 0, 0);
  --shadow-medium: 0px 3px 3.1px -20px rgba(0, 0, 0, 0.2),
        0px 24px 25px -20px rgba(0, 0, 0, 0.35);
  --shadow-s: 0px 3px 12px -2px rgba(14, 11, 11, 0.5);
  --shadow-small: 0px 3px 12px -2px rgba(14, 11, 11, 0.5);
  --sidebar-markdown-font-size: 0.933em;
  --slider-s-thumb-size-: 13px;
  --slider-thumb-border-color: rgba(255, 255, 255, 0.25);
  --slider-thumb-height: 13px;
  --slider-thumb-radius: 2px;
  --slider-thumb-width: 26px;
  --slider-thumb-y: -5px;
  --slider-track-background: rgba(100, 100, 100, 0.25);
  --status-bar-background: rgb(30, 31, 36);
  --status-bar-border-color: transparent;
  --status-bar-border-width: 0 0 0 0;
  --status-bar-font-size: 13px;
  --status-bar-position: relative;
  --status-bar-radius: 0 0 0 0;
  --status-bar-text-color: rgb(160, 167, 187);
  --strikethrough-color: rgb(124, 132, 156);
  --suggestion-background: rgb(45, 48, 57);
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: rgb(45, 48, 57);
  --tab-container-background: rgb(30, 31, 36);
  --tab-curve: 0px;
  --tab-divider-color: rgba(100, 100, 100, 0.25);
  --tab-font-size: 14px;
  --tab-outline-color: transparent;
  --tab-outline-width: 2px;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-stacked-font-size: 14px;
  --tab-switcher-background: rgb(30, 31, 36);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(30, 31, 36), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(145, 110, 201);
  --tab-text-color: rgb(136, 196, 211);
  --tab-text-color-active: rgb(160, 167, 187);
  --tab-text-color-focused: rgb(124, 132, 156);
  --tab-text-color-focused-active: rgb(239, 241, 245);
  --tab-text-color-focused-active-current: rgb(185, 195, 223);
  --tab-text-color-focused-highlighted: rgb(185, 195, 223);
  --table-add-button-border-color: rgba(100, 100, 100, 0.25);
  --table-border-color: rgb(67, 72, 81);
  --table-drag-handle-background-active: rgb(88, 95, 116);
  --table-drag-handle-color: rgb(124, 132, 156);
  --table-drag-handle-color-active: rgb(239, 241, 245);
  --table-header-background: rgb(35, 36, 42);
  --table-header-background-hover: rgb(35, 36, 42);
  --table-header-border-color: rgb(67, 72, 81);
  --table-header-color: rgb(224, 228, 235);
  --table-header-weight: 600;
  --table-row-alt-background: rgba(0, 0, 0, 0.08);
  --table-row-background-hover: rgba(0, 0, 0, 0.3);
  --table-selection: hsla(263,
              46%,
              61%, 0.1);
  --table-selection-border-color: rgb(88, 95, 116);
  --table-white-space: normal;
  --tag-background: rgba(0, 0, 0, 0.15);
  --tag-background-hover: rgba(0, 0, 0, 0.15);
  --tag-border-color: transparent;
  --tag-border-color-hover: transparent;
  --tag-color: rgb(114, 213, 165);
  --tag-color-hover: rgb(114, 213, 165);
  --tag-padding-y: 0.2em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(185, 195, 223);
  --text-accent-hover: rgb(239, 241, 245);
  --text-error: rgb(252, 95, 142);
  --text-faint: rgb(124, 132, 156);
  --text-faintly-muted: rgb(141, 148, 170);
  --text-highlight-bg: rgba(255, 252, 59, 0.08);
  --text-highlight-bg-active: rgba(255, 252, 59, 0.08);
  --text-muted: rgb(160, 167, 187);
  --text-normal: rgb(185, 195, 223);
  --text-on-accent: rgb(239, 241, 245);
  --text-selection: rgba(134, 169, 209, 0.15);
  --text-success: rgb(13, 145, 116);
  --text-warning: #E9973F;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: rgb(30, 31, 36);
  --titlebar-background-focused: rgb(30, 31, 36);
  --titlebar-border-color: rgba(100, 100, 100, 0.25);
  --titlebar-text-color: rgb(124, 132, 156);
  --titlebar-text-color-focused: rgb(124, 132, 156);
  --titlebar-text-color-highlighted: rgb(239, 241, 245);
  --titlebar-text-weight: 400;
  --toggle-border-width: 3px;
  --toggle-radius: 3px;
  --toggle-s-border-width: 3px;
  --toggle-s-thumb-height: 18px;
  --toggle-s-thumb-width: 18px;
  --toggle-s-width: 42px;
  --toggle-thumb-color: rgb(239, 241, 245);
  --toggle-thumb-radius: 2px;
  --toggle-width: 42px;
  --vault-name-color: rgb(185, 195, 223);
  --vault-name-font-size: 14px;
  --vault-name-font-weight: 500;
  --vault-profile-color: rgb(185, 195, 223);
  --vault-profile-color-hover: rgb(185, 195, 223);
  --vault-profile-font-size: 14px;
  --window-border: 1px solid rgb(82, 87, 102);
  --window-border-color: rgb(82, 87, 102);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 31, 36);
  color: rgb(185, 195, 223);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(45, 48, 57);
  color: rgb(185, 195, 223);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 31, 36);
  color: rgb(185, 195, 223);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(30, 31, 36);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 31, 36);
  border-left-color: rgb(30, 31, 36);
  color: rgb(185, 195, 223);
}

body div#quartz-root {
  background-color: rgb(45, 48, 57);
  color: rgb(185, 195, 223);
}`,
    typography: `body .page article p > b, b {
  color: rgb(219, 206, 132);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 206, 132) none 0px;
  text-decoration: rgb(219, 206, 132);
  text-decoration-color: rgb(219, 206, 132);
}

body .page article p > em, em {
  color: rgb(201, 184, 255);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(201, 184, 255) none 0px;
  text-decoration: rgb(201, 184, 255);
  text-decoration-color: rgb(201, 184, 255);
}

body .page article p > i, i {
  color: rgb(201, 184, 255);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(201, 184, 255) none 0px;
  text-decoration: rgb(201, 184, 255);
  text-decoration-color: rgb(201, 184, 255);
}

body .page article p > strong, strong {
  color: rgb(219, 206, 132);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 206, 132) none 0px;
  text-decoration: rgb(219, 206, 132);
  text-decoration-color: rgb(219, 206, 132);
}

body .text-highlight {
  background-color: rgba(255, 252, 59, 0.08);
  color: rgb(185, 195, 223);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(185, 195, 223) none 0px;
  text-decoration: rgb(185, 195, 223);
  text-decoration-color: rgb(185, 195, 223);
}

body del {
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(114, 195, 213) none 0px;
  text-decoration: line-through rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body p {
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(160, 167, 187) none 0px;
  text-decoration: rgb(160, 167, 187);
  text-decoration-color: rgb(160, 167, 187);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 128, 183);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 183) none 0px;
  text-decoration: rgb(255, 128, 183);
  text-decoration-color: rgb(255, 128, 183);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 128, 183);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 183) none 0px;
  text-decoration: rgb(255, 128, 183);
  text-decoration-color: rgb(255, 128, 183);
}

body a.internal.broken {
  color: rgb(255, 128, 183);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 183) none 0px;
  text-decoration: rgba(95, 88, 116, 0.5);
  text-decoration-color: rgba(95, 88, 116, 0.5);
}`,
    lists: `body dd {
  color: rgb(114, 195, 213);
}

body dt {
  color: rgb(114, 195, 213);
}

body ol > li {
  color: rgb(114, 195, 213);
}

body ol.overflow {
  background-color: rgb(45, 48, 57);
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
}

body ul > li {
  color: rgb(114, 195, 213);
}

body ul.overflow {
  background-color: rgb(45, 48, 57);
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(124, 132, 156);
  text-decoration: rgb(124, 132, 156);
}

body blockquote {
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .spacer {
  background-color: rgb(35, 36, 42);
}

body .table-container {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

body table {
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 196.906px;
}

body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.08);
}

body td {
  border-bottom-color: rgb(67, 72, 81);
  border-left-color: rgb(67, 72, 81);
  border-right-color: rgb(67, 72, 81);
  border-top-color: rgb(67, 72, 81);
  color: rgb(114, 195, 213);
}

body th {
  border-bottom-color: rgb(67, 72, 81);
  border-left-color: rgb(67, 72, 81);
  border-right-color: rgb(67, 72, 81);
  border-top-color: rgb(67, 72, 81);
  color: rgb(224, 228, 235);
}

body tr {
  background-color: rgb(35, 36, 42);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(199, 133, 161);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(199, 133, 161);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(199, 133, 161);
  border-left-color: rgb(199, 133, 161);
  border-right-color: rgb(199, 133, 161);
  border-top-color: rgb(199, 133, 161);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

body figcaption {
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

body img {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

body video {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(114, 195, 213);
  color: rgb(114, 195, 213);
}

body .transclude {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(88, 95, 116);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

body .transclude-inner {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(88, 95, 116);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(141, 148, 170);
  text-decoration: rgb(141, 148, 170);
  text-decoration-color: rgb(141, 148, 170);
}

body input[type=checkbox] {
  border-bottom-color: rgb(67, 72, 81);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(67, 72, 81);
  border-right-color: rgb(67, 72, 81);
  border-top-color: rgb(67, 72, 81);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='*'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='-'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='/'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='>'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='?'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='I'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='S'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='b'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='c'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='d'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='f'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='i'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='k'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='l'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='p'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='u'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body li.task-list-item[data-task='w'] {
  color: rgb(114, 195, 213);
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}`,
    callouts: `body .callout .callout-title {
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

body .callout > .callout-content {
  background-color: rgb(35, 36, 42);
  padding-left: 20px;
  padding-right: 20px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(114, 195, 213);
  font-family: "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
  outline: rgb(114, 195, 213) none 0px;
  text-decoration: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(114, 195, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(114, 195, 213);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(114, 195, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(114, 195, 213);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(100, 100, 100, 0.25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(100, 100, 100, 0.25);
  border-right-color: rgba(100, 100, 100, 0.25);
  border-top-color: rgba(100, 100, 100, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search > .search-container > .search-space > input {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(114, 195, 213);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0.15);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(114, 213, 165);
}

body h1 {
  color: rgb(217, 214, 23);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(184, 148, 255);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(114, 195, 213);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(13, 200, 242);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(114, 213, 165);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(185, 195, 223);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(159, 167, 188);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(30, 31, 36);
  border-left-color: rgb(30, 31, 36);
  border-right-color: rgb(30, 31, 36);
  border-right-width: 2px;
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(45, 48, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(45, 48, 57);
}

body ::-webkit-scrollbar-corner {
  background: rgb(45, 48, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(45, 48, 57);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(45, 48, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(45, 48, 57);
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(45, 48, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(45, 48, 57);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(45, 48, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(45, 48, 57);
}

body ::-webkit-scrollbar-track {
  background: rgb(45, 48, 57) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(45, 48, 57);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(160, 167, 187);
  cursor: pointer;
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(160, 167, 187);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(160, 167, 187);
  cursor: pointer;
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(160, 167, 187);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(160, 167, 187);
  cursor: pointer;
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(160, 167, 187);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
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

body footer ul li a {
  color: rgb(160, 167, 187);
  text-decoration: rgb(160, 167, 187);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(185, 195, 223);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
  color: rgb(185, 195, 223);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(160, 167, 187);
  text-decoration: rgb(160, 167, 187);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
}

body li.section-li > .section .meta {
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(160, 167, 187);
  text-decoration: rgb(160, 167, 187);
}

body ul.section-ul {
  border-bottom-color: rgb(185, 195, 223);
  border-left-color: rgb(185, 195, 223);
  border-right-color: rgb(185, 195, 223);
  border-top-color: rgb(185, 195, 223);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(124, 132, 156);
  stroke: rgb(124, 132, 156);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(124, 132, 156);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
  color: rgb(114, 195, 213);
}

body .metadata {
  border-bottom-color: rgba(100, 100, 100, 0.25);
  border-left-color: rgba(100, 100, 100, 0.25);
  border-right-color: rgba(100, 100, 100, 0.25);
  border-top-color: rgba(100, 100, 100, 0.25);
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(160, 167, 187);
  border-left-color: rgb(160, 167, 187);
  border-right-color: rgb(160, 167, 187);
  border-top-color: rgb(160, 167, 187);
  color: rgb(160, 167, 187);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(30, 31, 36);
}

body .page-header h2.page-title {
  color: rgb(185, 195, 223);
  font-family: "??", "DM Sans", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(114, 195, 213);
  text-decoration: underline dotted rgb(114, 195, 213);
}

body details {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

body input[type=text] {
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

body kbd {
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

body progress {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

body sub {
  color: rgb(114, 195, 213);
}

body summary {
  color: rgb(114, 195, 213);
}

body sup {
  color: rgb(114, 195, 213);
}`,
  },
  light: {},
};
