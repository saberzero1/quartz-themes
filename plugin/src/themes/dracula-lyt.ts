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
  --background-modifier-border: rgb(52, 58, 75);
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.95);
  --background-modifier-cover: rgba(0, 0, 0, 0.65);
  --background-modifier-error: rgb(252, 95, 142);
  --background-modifier-error-hover: rgb(255, 122, 162);
  --background-modifier-error-rgb: 235, 86, 131;
  --background-modifier-form-field: rgb(30, 31, 36);
  --background-modifier-form-field-highlighted: rgb(23, 24, 28);
  --background-modifier-form-field-hover: rgb(30, 31, 36);
  --background-modifier-success: rgb(30, 200, 160);
  --background-primary: #22212c;
  --background-primary-alt: #23212d;
  --background-secondary: #15131f;
  --background-secondary-alt: #2a2442;
  --bases-cards-background: #22212c;
  --bases-cards-cover-background: #23212d;
  --bases-cards-shadow: 0 0 0 1px rgb(52, 58, 75);
  --bases-embed-border-color: rgb(52, 58, 75);
  --bases-group-heading-property-color: #6e6b7e;
  --bases-table-border-color: rgb(52, 58, 75);
  --bases-table-cell-background-active: #22212c;
  --bases-table-cell-background-disabled: #23212d;
  --bases-table-cell-shadow-focus: 0 0 0 2px #483699;
  --bases-table-group-background: #23212d;
  --bases-table-header-background: #22212c;
  --bases-table-header-color: #6e6b7e;
  --bases-table-summary-background: #22212c;
  --blockquote-border-color: #483699;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --border-xsm: rgba(255, 255, 255, 0.25);
  --border-xsm-alt: rgba(100, 100, 100, 0.25);
  --canvas-background: #22212c;
  --canvas-card-label-color: #6c6498;
  --caret-color: #f8f8f2;
  --checkbox-border-color: #6c6498;
  --checkbox-border-color-hover: #6e6b7e;
  --checkbox-color: #483699;
  --checkbox-color-hover: #4d3ca6;
  --checkbox-marker-color: #22212c;
  --checklist-done-color: #6e6b7e;
  --code-background: #23212d;
  --code-border-color: rgb(52, 58, 75);
  --code-comment: #6c6498;
  --code-function: rgb(243, 238, 94);
  --code-normal: #f8f8f2;
  --code-property: rgb(136, 196, 211);
  --code-punctuation: #6e6b7e;
  --code-string: rgb(101, 230, 168);
  --code-value: rgb(201, 184, 255);
  --collapse-icon-color: #6c6498;
  --collapse-icon-color-collapsed: #bd93f9;
  --color-black: rgb(30, 31, 36);
  --color-blacker: rgb(23, 24, 28);
  --color-caret: rgb(185, 195, 223);
  --color-cyan: rgb(136, 196, 211);
  --color-cyan-300: rgb(130, 183, 186);
  --color-cyan-500: rgb(136, 196, 211);
  --color-cyan-510: rgb(82, 193, 218);
  --color-cyan-520: rgb(91, 188, 210);
  --color-cyan-530: rgb(114, 195, 213);
  --color-cyan-700: rgb(60, 152, 180);
  --color-cyan-900: rgb(76, 118, 133);
  --color-cyan-gradient-1: linear-gradient(180deg,
    #82b7ba, #77aeb3, #6da5ac, #629ca5, 
    #5a919c, #558590, #4f7984, #496d79);
  --color-cyan-gradient-2: linear-gradient(180deg,
    #55a6be, #509fb7, #4d98af, #4d8fa4, 
    #4c8698, #4c7e8e, #4a7583, #496d79);
  --color-cyan-gradient-3: linear-gradient(180deg, 
    #6de0fd, #5dd6f5, #56d3f2, #4fcfef, 
    #48cceb, #40c8e8, #37c5e5, #2dc1e2);
  --color-gray-10: rgb(219, 222, 230);
  --color-gray-100: rgb(35, 36, 42);
  --color-gray-15: rgb(207, 211, 221);
  --color-gray-20: rgb(185, 195, 223);
  --color-gray-30: rgb(159, 169, 198);
  --color-gray-40: rgb(160, 167, 187);
  --color-gray-50: rgb(108, 113, 132);
  --color-gray-60: rgb(124, 132, 156);
  --color-gray-70: rgb(82, 87, 102);
  --color-gray-80: rgb(52, 58, 75);
  --color-gray-90: rgb(45, 48, 57);
  --color-green: rgb(101, 230, 168);
  --color-green-300: rgb(158, 255, 208);
  --color-green-500: rgb(157, 226, 161);
  --color-green-700: rgb(101, 230, 168);
  --color-green-900: rgb(30, 200, 160);
  --color-green-910: rgb(17, 212, 141);
  --color-green-920: rgb(13, 145, 116);
  --color-green-gradient-1: linear-gradient(180deg,
    #9effd0, #8bfcc9, #79f9c4, #67f4bf, 
    #57efbb, #48e8b7, #39e0b4, #2cd8b0);
  --color-green-gradient-2: linear-gradient(180deg,
    #a2f49a, #89f18d, #79ee8b, #69ea8d, 
    #59e692, #4ae299, #3bdda3, #2cd8b0);
  --color-highlight-bg: rgba(214, 247, 255, 0.596);
  --color-highlight-gradient: linear-gradient(60deg,
    #d7f8ff, #d4f0fe, #d1e6fe, #cedcfd, 
    #cbd2fc, #c3c1fc, #c7b9f8, #c7a3ff);
  --color-highlight-shadow: 0px 0px 2px #a8a47881;
  --color-highlight-text: rgb(45, 48, 57);
  --color-magenta: rgb(255, 153, 190);
  --color-magenta-300: rgb(199, 133, 161);
  --color-magenta-310: rgb(255, 189, 213);
  --color-magenta-500: rgb(255, 153, 190);
  --color-magenta-700: rgb(255, 128, 183);
  --color-magenta-900: rgb(221, 110, 190);
  --color-magenta-910: rgb(252, 95, 142);
  --color-magenta-920: rgb(255, 122, 162);
  --color-magenta-gradient-1: linear-gradient(180deg,
    #ffb1ce, #ffa3ca, #f897c4, #f88cc4, 
    #ef7dbe, #ea77be, #e472be, #dd6ebe);
  --color-magenta-gradient-2: linear-gradient(180deg,
    #ff99be, #fc91bd, #f88abd, #f483bd, 
    #ef7dbe, #ea77be, #e472be, #dd6ebe);
  --color-purple: rgb(201, 184, 255);
  --color-purple-300: rgb(179, 164, 224);
  --color-purple-500: rgb(201, 184, 255);
  --color-purple-700: rgb(184, 148, 255);
  --color-purple-900: rgb(145, 110, 201);
  --color-purple-910: rgb(169, 147, 205);
  --color-purple-gradient-1: linear-gradient(180deg,
    #d9ccff, #d2c4ff, #cbbcff, #c4b4ff,
    #bdabff, #b5a3ff, #ad9bff, #a593ff);
  --color-purple-gradient-2: linear-gradient(180deg,
    #d9ccff, #ccbafc, #c0a9f8, #b59af2, 
    #ab8cea, #a281e1, #9977d6, #916ec9);
  --color-slate: rgb(185, 195, 223);
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
  --color-slate-gradient-3: linear-gradient(180deg,
    #9fa7bc, #97a0b6, #9099b1, #8892ab, 
    #818aa6, #7983a0, #727c9b, #6a7595);
  --color-white: rgb(239, 241, 245);
  --color-yellow: rgb(243, 238, 94);
  --color-yellow-300: rgb(253, 255, 128);
  --color-yellow-310: rgb(211, 212, 140);
  --color-yellow-500: rgb(231, 229, 115);
  --color-yellow-700: rgb(243, 238, 94);
  --color-yellow-900: rgb(204, 201, 20);
  --color-yellow-gradient-1: linear-gradient(180deg,
    #fcff80, #fafd6b, #f9fb57, #f6f843, 
    #f4f430, #f0ef1e, #e4e213, #ccc914);
  --color-yellow-gradient-2: linear-gradient(-90deg,
    #f3ee5e, #f1ec50, #f0eb41, #eee933, 
    #ece725, #eae516, #dbd815, #ccc914);
  --default-font: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --divider-color: rgb(52, 58, 75);
  --divider-color-hover: #483699;
  --dropdown-background: #2a2a2a;
  --dropdown-background-hover: #303030;
  --duration-fast-1: 120ms;
  --duration-fast-2: 180ms;
  --duration-moderate-1: 250ms;
  --duration-moderate-2: 340ms;
  --duration-none: 0;
  --duration-slow-1: 500ms;
  --duration-slow-2: 640ms;
  --embed-block-shadow-hover: 0 0 0 1px rgb(52, 58, 75), inset 0 0 0 1px rgb(52, 58, 75);
  --embed-border-start: 2px solid #483699;
  --file-header-background: #22212c;
  --file-header-background-focused: #22212c;
  --file-header-font: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #2a2a2a;
  --flair-color: #f8f8f2;
  --font-code: "Monaco", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace;
  --font-editor: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-extra-bold: 900;
  --font-extra-light: 200;
  --font-header: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --font-interface: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --footnote-divider-color: rgb(52, 58, 75);
  --footnote-id-color: #6e6b7e;
  --footnote-id-color-no-occurrences: #6c6498;
  --graph-color-arrow: rgb(76, 118, 133);
  --graph-color-line: rgb(76, 118, 133);
  --graph-color-line-hover: rgb(160, 167, 187);
  --graph-color-node-attachment: rgb(185, 195, 223);
  --graph-color-node-border-hover: rgb(239, 241, 245);
  --graph-color-node-focused: rgb(221, 110, 190);
  --graph-color-node-resolved: rgb(243, 238, 94);
  --graph-color-node-tag: rgb(60, 152, 180);
  --graph-color-node-unresolved: rgb(145, 110, 201);
  --graph-color-text: rgb(224, 228, 235);
  --graph-node: #6e6b7e;
  --graph-node-attachment: rgb(243, 238, 94);
  --graph-node-focused: #bd93f9;
  --graph-node-tag: rgb(101, 230, 168);
  --graph-node-unresolved: #6c6498;
  --graph-text: #f8f8f2;
  --header-line-height: 1.264em;
  --header-shadow-color: rgb(31, 31, 31);
  --header-shadow-size: 0px 4px 3px;
  --heading-formatting: #6c6498;
  --hr-color: rgb(52, 58, 75);
  --icon-color: #6e6b7e;
  --icon-color-active: #bd93f9;
  --icon-color-focused: #f8f8f2;
  --icon-color-hover: #6e6b7e;
  --input-date-separator: #6c6498;
  --input-placeholder-color: #6c6498;
  --interactive-accent: #483699;
  --interactive-accent-hover: #4d3ca6;
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: #303030;
  --interactive-normal: #2a2a2a;
  --interactive-success: rgb(13, 145, 116);
  --line-height: 1.58em;
  --line-width: 42em;
  --link-color: #bd93f9;
  --link-color-hover: #bd93f9;
  --link-external-color: #bd93f9;
  --link-external-color-hover: #bd93f9;
  --link-unresolved-color: #bd93f9;
  --list-marker-color: #6c6498;
  --list-marker-color-collapsed: #bd93f9;
  --list-marker-color-hover: #6e6b7e;
  --md-color-blockquotes: rgb(114, 195, 213);
  --md-color-blockquotes-border: rgb(145, 110, 201);
  --md-color-bold: rgb(231, 229, 115);
  --md-color-bolditalic: rgb(219, 222, 230);
  --md-color-border: rgb(66, 71, 80);
  --md-color-code-cyan: rgb(130, 183, 186);
  --md-color-code-gray: rgb(185, 195, 223);
  --md-color-code-green: rgb(157, 226, 161);
  --md-color-code-magenta: rgb(199, 133, 161);
  --md-color-code-purple: rgb(169, 147, 205);
  --md-color-code-slate: rgb(88, 95, 116);
  --md-color-code-white: rgb(224, 228, 235);
  --md-color-code-yellow: rgb(211, 212, 140);
  --md-color-comment: rgb(207, 211, 221);
  --md-color-footnote: rgb(108, 113, 132);
  --md-color-highlight-bg: linear-gradient(60deg,
    #d7f8ff, #d4f0fe, #d1e6fe, #cedcfd, 
    #cbd2fc, #c3c1fc, #c7b9f8, #c7a3ff);
  --md-color-highlight-text: rgb(45, 48, 57);
  --md-color-italic: rgb(201, 184, 255);
  --md-color-link: #ff80b7;
  --md-color-link-active: rgb(221, 110, 190);
  --md-color-link-hover: rgb(255, 189, 213);
  --md-color-strikethrough: #6c6498;
  --md-color-tag: rgb(101, 230, 168);
  --md-color-tag-active: rgb(30, 200, 160);
  --md-color-tag-hover: rgb(158, 255, 208);
  --md-color-text: rgb(114, 195, 213);
  --md-color-text-faint: rgb(76, 118, 133);
  --md-color-text-muted: rgb(60, 152, 180);
  --menu-background: #15131f;
  --mermaid-font: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --metadata-border-color: rgb(52, 58, 75);
  --metadata-divider-color: rgb(52, 58, 75);
  --metadata-input-font: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #f8f8f2;
  --metadata-label-font: '??', '??', "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #6e6b7e;
  --metadata-label-text-color-hover: #6e6b7e;
  --modal-background: #22212c;
  --motion-delay: cubic-bezier(0.86,0,0.07,1);
  --motion-heavy: cubic-bezier(0.18,0.89,0.32,1.27);
  --motion-smooth: cubic-bezier(0.65,0.05,0.36,1);
  --nav-collapse-icon-color: #6c6498;
  --nav-collapse-icon-color-collapsed: #6c6498;
  --nav-heading-color: #f8f8f2;
  --nav-heading-color-collapsed: #6c6498;
  --nav-heading-color-collapsed-hover: #6e6b7e;
  --nav-heading-color-hover: #f8f8f2;
  --nav-item-color: #6e6b7e;
  --nav-item-color-active: #f8f8f2;
  --nav-item-color-highlighted: #bd93f9;
  --nav-item-color-hover: #f8f8f2;
  --nav-item-color-selected: #f8f8f2;
  --nav-tag-color: #6c6498;
  --nav-tag-color-active: #6e6b7e;
  --nav-tag-color-hover: #6e6b7e;
  --pdf-background: #22212c;
  --pdf-page-background: #22212c;
  --pdf-shadow: 0 0 0 1px rgb(52, 58, 75);
  --pdf-sidebar-background: #22212c;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(52, 58, 75);
  --pill-border-color: rgb(52, 58, 75);
  --pill-color: #6e6b7e;
  --pill-color-hover: #f8f8f2;
  --pill-color-remove: #6c6498;
  --pill-color-remove-hover: #bd93f9;
  --prompt-background: #22212c;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --reveal-font: 'Abril Text', 'Inter', -apple-system
    BlinkMacSystemFont, 'Segoe UI', 'Ubuntu',
    Helvetica, Arial, sans-serif;
  --ribbon-background: #15131f;
  --ribbon-background-collapsed: #22212c;
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
  --scrollbar-active-thumb-bg: rgb(30, 31, 36);
  --scrollbar-bg: transparent;
  --scrollbar-thumb-bg: rgb(35, 36, 42);
  --search-clear-button-color: #6e6b7e;
  --search-icon-color: #6e6b7e;
  --search-result-background: #22212c;
  --setting-group-heading-color: #f8f8f2;
  --setting-items-background: #23212d;
  --setting-items-border-color: rgb(52, 58, 75);
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
  --slider-track-background: rgb(52, 58, 75);
  --status-bar-background: #15131f;
  --status-bar-border-color: rgb(52, 58, 75);
  --status-bar-text-color: #6e6b7e;
  --suggestion-background: #22212c;
  --sync-avatar-color-3: rgb(243, 238, 94);
  --sync-avatar-color-4: rgb(101, 230, 168);
  --sync-avatar-color-5: rgb(136, 196, 211);
  --sync-avatar-color-7: rgb(201, 184, 255);
  --tab-background-active: #22212c;
  --tab-container-background: #15131f;
  --tab-outline-color: rgb(52, 58, 75);
  --tab-switcher-background: #15131f;
  --tab-switcher-menubar-background: linear-gradient(to top, #15131f, transparent);
  --tab-text-color: #6c6498;
  --tab-text-color-active: #6e6b7e;
  --tab-text-color-focused: #6e6b7e;
  --tab-text-color-focused-active: #6e6b7e;
  --tab-text-color-focused-active-current: #f8f8f2;
  --tab-text-color-focused-highlighted: #bd93f9;
  --table-add-button-border-color: rgb(52, 58, 75);
  --table-border-color: rgb(52, 58, 75);
  --table-drag-handle-background-active: #483699;
  --table-drag-handle-color: #6c6498;
  --table-drag-handle-color-active: #f8f8f2;
  --table-header-border-color: rgb(52, 58, 75);
  --table-header-color: #f8f8f2;
  --table-selection-border-color: #483699;
  --tag-color: #bd93f9;
  --tag-color-hover: #bd93f9;
  --text-accent: #bd93f9;
  --text-accent-hover: #bd93f9;
  --text-error: rgb(252, 95, 142);
  --text-error-hover: rgb(221, 110, 190);
  --text-faint: #6c6498;
  --text-highlight-bg: rgba(214, 247, 255, 0.596);
  --text-highlight-bg-active: rgba(54, 57, 72, 0.4);
  --text-muted: #6e6b7e;
  --text-normal: #f8f8f2;
  --text-on-accent: #f8f8f2;
  --text-selection: #363948;
  --text-success: rgb(101, 230, 168);
  --titlebar-background: #15131f;
  --titlebar-background-focused: #2a2442;
  --titlebar-border-color: rgb(52, 58, 75);
  --titlebar-text-color: #6e6b7e;
  --titlebar-text-color-focused: #f8f8f2;
  --tracking-0: 0px;
  --tracking-1: 0.16px;
  --tracking-2: 0.32px;
  --tracking-3: 0.64px;
  --tracking-4: 1.28px;
  --tracking-5: 2.56px;
  --vault-profile-color: #f8f8f2;
  --vault-profile-color-hover: #f8f8f2;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(21, 19, 31);
  color: rgb(248, 248, 242);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(34, 33, 44);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(21, 19, 31);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(52, 58, 75);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(21, 19, 31);
  border-left-color: rgb(52, 58, 75);
  color: rgb(248, 248, 242);
}

body div#quartz-root {
  background-color: rgb(34, 33, 44);
  color: rgb(248, 248, 242);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

body .page article p > em, em {
  color: rgb(255, 255, 128);
  font-weight: 500;
  outline: rgb(255, 255, 128) none 0px;
  text-decoration: rgb(255, 255, 128);
  text-decoration-color: rgb(255, 255, 128);
}

body .page article p > i, i {
  color: rgb(255, 255, 128);
  font-weight: 500;
  outline: rgb(255, 255, 128) none 0px;
  text-decoration: rgb(255, 255, 128);
  text-decoration-color: rgb(255, 255, 128);
}

body .page article p > strong, strong {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

body .text-highlight {
  background-color: rgba(214, 247, 255, 0.596);
  color: rgb(248, 248, 242);
  font-weight: 500;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body del {
  color: rgb(114, 195, 213);
  font-weight: 500;
  outline: rgb(114, 195, 213) none 0px;
  text-decoration: line-through rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

body p {
  color: rgb(110, 107, 126);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(110, 107, 126) none 0px;
  text-decoration: rgb(110, 107, 126);
  text-decoration-color: rgb(110, 107, 126);
}`,
    links: `body a.external, footer a {
  color: rgb(80, 250, 123);
  outline: rgb(80, 250, 123) none 0px;
  text-decoration: rgb(80, 250, 123);
  text-decoration-color: rgb(80, 250, 123);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 128, 183);
  outline: rgb(255, 128, 183) none 0px;
  text-decoration: rgb(255, 128, 183);
  text-decoration-color: rgb(255, 128, 183);
}

body a.internal.broken {
  color: rgb(189, 147, 249);
  outline: rgb(189, 147, 249) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(114, 195, 213);
}

body dt {
  color: rgb(114, 195, 213);
  font-weight: 500;
}

body ol > li {
  color: rgb(114, 195, 213);
}

body ol.overflow {
  background-color: rgb(34, 33, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ul > li {
  color: rgb(114, 195, 213);
}

body ul.overflow {
  background-color: rgb(34, 33, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(108, 100, 152);
  text-decoration: rgb(108, 100, 152);
}

body blockquote {
  background-color: rgb(21, 19, 31);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

body table {
  border-bottom-color: rgb(66, 71, 80);
  border-left-color: rgb(66, 71, 80);
  border-right-color: rgb(66, 71, 80);
  border-top-color: rgb(66, 71, 80);
  color: rgb(114, 195, 213);
  width: 554px;
}

body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.08);
}

body td {
  border-bottom-color: rgb(66, 71, 80);
  border-left-color: rgb(66, 71, 80);
  border-right-color: rgb(66, 71, 80);
  border-top-color: rgb(66, 71, 80);
  color: rgb(114, 195, 213);
  font-weight: 500;
}

body th {
  border-bottom-color: rgb(52, 58, 75);
  border-left-color: rgb(52, 58, 75);
  border-right-color: rgb(52, 58, 75);
  border-top-color: rgb(52, 58, 75);
  color: rgb(248, 248, 242);
}

body thead {
  background-color: rgb(35, 36, 42);
  border-bottom-color: rgb(66, 71, 80);
  border-left-color: rgb(66, 71, 80);
  border-right-color: rgb(66, 71, 80);
  border-top-color: rgb(66, 71, 80);
}

body tr {
  border-bottom-color: rgb(66, 71, 80);
  border-left-color: rgb(66, 71, 80);
  border-right-color: rgb(66, 71, 80);
  border-top-color: rgb(66, 71, 80);
}`,
    code: `body code {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(130, 183, 186);
  border-left-color: rgb(130, 183, 186);
  border-right-color: rgb(130, 183, 186);
  border-top-color: rgb(130, 183, 186);
  color: rgb(130, 183, 186);
  font-family: "SF Mono", Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(138, 255, 128);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(138, 255, 128);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(138, 255, 128);
  border-left-color: rgb(138, 255, 128);
  border-right-color: rgb(138, 255, 128);
  border-top-color: rgb(138, 255, 128);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

body figcaption {
  color: rgb(114, 195, 213);
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
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 6px -1px;
}

body video {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}`,
    embeds: `body .file-embed {
  background-color: rgb(35, 33, 45);
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
}

body .footnotes {
  border-top-color: rgb(114, 195, 213);
  color: rgb(114, 195, 213);
}

body .transclude {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(169, 147, 205);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

body .transclude-inner {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(169, 147, 205);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(110, 107, 126);
  text-decoration: line-through rgb(110, 107, 126);
  text-decoration-color: rgb(110, 107, 126);
}

body input[type=checkbox] {
  border-bottom-color: rgb(66, 71, 80);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(66, 71, 80);
  border-right-color: rgb(66, 71, 80);
  border-top-color: rgb(66, 71, 80);
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
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  background-color: rgb(34, 33, 44);
  border-bottom-color: rgb(66, 71, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: rgba(14, 11, 11, 0.5) 0px 3px 12px -2px, rgba(0, 0, 0, 0.447) 0px 2px 2.3px -52px, rgba(0, 0, 0, 0.6) 0px 5.6px 6.3px -52px, rgba(0, 0, 0, 0.85) 0px 13.6px 15.1px -52px, rgb(0, 0, 0) 0px 45px 50px -52px;
}

body .search > .search-container > .search-space > * {
  color: rgb(114, 195, 213);
  font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  font-weight: 500;
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
  color: rgb(114, 195, 213);
  font-weight: 500;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(66, 71, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search > .search-container > .search-space > input {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(114, 195, 213);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

body a.internal.tag-link::before {
  color: rgb(189, 147, 249);
}

body h1 {
  color: rgb(255, 184, 107);
  font-family: "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
}

body h2 {
  color: rgb(255, 122, 198);
  font-family: "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(114, 195, 213);
}

body h3 {
  color: rgb(189, 147, 249);
  font-family: "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
}

body h4 {
  color: rgb(139, 233, 253);
  font-family: "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
}

body h5 {
  color: rgb(80, 250, 123);
  font-family: "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
}

body h6 {
  color: rgb(241, 250, 140);
  font-family: "Abril Text", Inter, "-apple-system BlinkMacSystemFont", "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif;
}

body hr {
  border-bottom-color: rgb(52, 58, 75);
  border-left-color: rgb(52, 58, 75);
  border-right-color: rgb(52, 58, 75);
}`,
    scrollbars: `body .callout {
  padding-bottom: 32px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

body ::-webkit-scrollbar-corner {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

body ::-webkit-scrollbar-track {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(219, 222, 230);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  text-decoration: rgb(219, 222, 230);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(219, 222, 230);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  text-decoration: rgb(219, 222, 230);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(160, 167, 187);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}`,
    footer: `body footer {
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

body footer ul li a {
  color: rgb(160, 167, 187);
  text-decoration: rgb(160, 167, 187);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(248, 248, 242);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(160, 167, 187);
  text-decoration: rgb(160, 167, 187);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 167, 187);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body li.section-li > .section .meta {
  color: rgb(160, 167, 187);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(160, 167, 187);
  text-decoration: rgb(160, 167, 187);
}

body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}

body .darkmode svg {
  color: rgb(110, 107, 126);
  stroke: rgb(110, 107, 126);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}

body .breadcrumb-element p {
  color: rgb(108, 100, 152);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
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

body .metadata {
  border-bottom-color: rgb(52, 58, 75);
  border-left-color: rgb(52, 58, 75);
  border-right-color: rgb(52, 58, 75);
  border-top-color: rgb(52, 58, 75);
  color: rgb(110, 107, 126);
}

body .metadata-properties {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}

body .navigation-progress {
  background-color: rgb(30, 31, 36);
}

body .page-header h2.page-title {
  color: rgb(248, 248, 242);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

body kbd {
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
  font-weight: 500;
}

body sup {
  color: rgb(114, 195, 213);
}`,
  },
  light: {},
};
