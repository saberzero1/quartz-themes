import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "garden-gnome-adwaita-gtk",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 213;
  --background-active: rgba(255, 255, 255, 0.133);
  --background-active-hover: rgba(255, 255, 255, 0.2);
  --background-double-active: rgba(255, 255, 255, 0.267);
  --background-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-active-hover: rgba(92, 161, 245, 0.1);
  --background-modifier-error: #e01b24;
  --background-modifier-error-hover: #e01b24;
  --background-modifier-error-rgb: 224,  27,  36;
  --background-modifier-hover: #8883;
  --background-modifier-success: #33d17a;
  --background-modifier-success-rgb: 51, 209, 122;
  --background-primary: rgb(30, 30, 32);
  --background-primary-alt: rgb(39, 38, 39);
  --background-secondary: rgb(48, 48, 48);
  --bases-cards-background: rgb(30, 30, 32);
  --bases-cards-cover-background: rgb(39, 38, 39);
  --bases-table-cell-background-active: rgb(30, 30, 32);
  --bases-table-cell-background-disabled: rgb(39, 38, 39);
  --bases-table-cell-background-selected: rgba(92, 161, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #3584e4;
  --bases-table-group-background: rgb(39, 38, 39);
  --bases-table-header-background: rgb(30, 30, 32);
  --bases-table-header-background-hover: #8883;
  --bases-table-summary-background: rgb(30, 30, 32);
  --bases-table-summary-background-hover: #8883;
  --blockquote-background-color: rgb(48, 48, 48);
  --blockquote-border-color: #3584e4;
  --blockquote-border-thickness: 0;
  --blue-1: #99c1f1;
  --blue-1-rgb: 153, 193, 241;
  --blue-2: #62a0ea;
  --blue-2-rgb: 98, 160, 234;
  --blue-3: #3584e4;
  --blue-3-rgb: 53, 132, 228;
  --blue-4: #1c71d8;
  --blue-4-rgb: 28, 113, 216;
  --blue-5: #1a5fb4;
  --blue-5-rgb: 26,  95, 180;
  --bodyFont: var(--font-interface);
  --brown-1: #cdab8f;
  --brown-1-rgb: 205, 171, 143;
  --brown-2: #b5835a;
  --brown-2-rgb: 181, 131,  90;
  --brown-3: #986a44;
  --brown-3-rgb: 152, 106,  68;
  --brown-4: #865e3c;
  --brown-4-rgb: 134,  94,  60;
  --brown-5: #63452c;
  --brown-5-rgb: 99,  69,  44;
  --button-transition: linear 100ms background-color;
  --callout-bug: 237,  51,  59;
  --callout-default: 154, 153, 150;
  --callout-error: 237,  51,  59;
  --callout-example: 192,  97, 203;
  --callout-fail: 237,  51,  59;
  --callout-important: 52, 170, 180;
  --callout-info: 53, 132, 228;
  --callout-padding: 12px 16px;
  --callout-question: 229, 165,  10;
  --callout-quote: 181, 131,  90;
  --callout-radius: 12px;
  --callout-success: 51, 209, 122;
  --callout-summary: 52, 170, 180;
  --callout-tip: 52, 170, 180;
  --callout-todo: 53, 132, 228;
  --callout-warning: 255, 120,   0;
  --canvas-background: rgb(30, 30, 32);
  --canvas-color-1: 224,  27,  36;
  --canvas-color-2: 255, 120,   0;
  --canvas-color-3: 246, 211,  45;
  --canvas-color-4: 51, 209, 122;
  --canvas-color-5: 52, 170, 180;
  --canvas-color-6: 145,  65, 172;
  --checkbox-color: #3584e4;
  --checkbox-color-hover: rgb(139, 194, 249);
  --checkbox-marker-color: rgb(30, 30, 32);
  --code-background: rgb(48, 48, 48);
  --code-bracket-background: #8883;
  --code-function: #f6d32d;
  --code-important: #ff7800;
  --code-operator: #e01b24;
  --code-property: #34aab4;
  --code-string: #33d17a;
  --code-tag: #e01b24;
  --code-value: #9141ac;
  --codeFont: var(--font-interface);
  --collapse-icon-color: #b3b3b3;
  --collapse-icon-color-collapsed: #666666;
  --color-accent: rgb(92, 161, 245);
  --color-accent-1: rgb(139, 194, 249);
  --color-accent-2: rgb(182, 219, 252);
  --color-accent-hsl: 213, 88%, 66%;
  --color-blue: #3584e4;
  --color-blue-rgb: 53, 132, 228;
  --color-cyan: #34aab4;
  --color-cyan-rgb: 52, 170, 180;
  --color-green: #33d17a;
  --color-green-rgb: 51, 209, 122;
  --color-invert-filter-b: invert();
  --color-invert-filter-w: none;
  --color-orange: #ff7800;
  --color-orange-rgb: 255, 120,   0;
  --color-purple: #9141ac;
  --color-purple-rgb: 145,  65, 172;
  --color-red: #e01b24;
  --color-red-rgb: 224,  27,  36;
  --color-yellow: #f6d32d;
  --color-yellow-rgb: 246, 211,  45;
  --cyan-1: #94d8ca;
  --cyan-1-rgb: 148, 216, 202;
  --cyan-2: #5ca0b9;
  --cyan-2-rgb: 92, 160, 185;
  --cyan-3: #34aab4;
  --cyan-3-rgb: 52, 170, 180;
  --cyan-4: #2599ab;
  --cyan-4-rgb: 37, 153, 171;
  --cyan-5: #20808e;
  --cyan-5-rgb: 32, 128, 142;
  --dark-1: #77767b;
  --dark-1-rgb: 119, 118, 123;
  --dark-2: #5e5c64;
  --dark-2-rgb: 94,  92, 100;
  --dark-3: #3d3846;
  --dark-3-rgb: 61,  56,  70;
  --dark-4: #241f31;
  --dark-4-rgb: 36,  31,  49;
  --dark-5: #000000;
  --dark-5-rgb: 0,   0,   0;
  --divider-color-hover: #3584e4;
  --embed-border-left: none;
  --embed-border-start: 2px solid #3584e4;
  --embed-max-height: 80vh;
  --file-header-background: rgb(30, 30, 32);
  --file-header-background-focused: rgb(30, 30, 32);
  --file-header-font: system-ui;
  --file-header-font-weight: 600;
  --font-interface: system-ui;
  --footnote-input-background-active: #8883;
  --frame-right-space: 48px;
  --graph-node-attachment: #f6d32d;
  --graph-node-focused: #62a0ea;
  --graph-node-tag: #33d17a;
  --green-1: #8ff0a4;
  --green-1-rgb: 143, 240, 164;
  --green-2: #57e389;
  --green-2-rgb: 87, 227, 137;
  --green-3: #33d17a;
  --green-3-rgb: 51, 209, 122;
  --green-4: #2ec27e;
  --green-4-rgb: 46, 194, 126;
  --green-5: #26a269;
  --green-5-rgb: 38, 162, 105;
  --header-height: 44px;
  --headerFont: var(--font-interface);
  --highlight: var(--background-modifier-hover);
  --icon-color: #dadada;
  --icon-color-active: #62a0ea;
  --icon-l: 16px;
  --icon-l-stroke-width: 2.5px;
  --icon-stroke: 2.5px;
  --input-font-weight: bold;
  --input-height: 36px;
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: #3584e4;
  --interactive-accent-hover: rgb(139, 194, 249);
  --interactive-accent-hsl: 213, 88%, 66%;
  --invert-filter-b: invert() hue-rotate(180deg);
  --invert-filter-w: none;
  --light: var(--background-primary);
  --light-1: #ffffff;
  --light-1-rgb: 255, 255, 255;
  --light-2: #f6f5f4;
  --light-2-rgb: 246, 245, 244;
  --light-3: #deddda;
  --light-3-rgb: 222, 221, 218;
  --light-4: #c0bfbc;
  --light-4-rgb: 192, 191, 188;
  --light-5: #9a9996;
  --light-5-rgb: 154, 153, 150;
  --lightgray: var(--background-secondary);
  --link-color: #62a0ea;
  --link-color-hover: #99c1f1;
  --link-external-color: #62a0ea;
  --link-external-color-hover: #99c1f1;
  --link-unresolved-color: #62a0ea;
  --link-unresolved-decoration-color: rgba(92, 161, 245, 0.3);
  --list-marker-color: #b3b3b3;
  --list-marker-color-collapsed: #62a0ea;
  --menu-background: rgb(48, 48, 48);
  --metadata-input-background-active: #8883;
  --metadata-input-font: system-ui;
  --metadata-label-background-active: #8883;
  --metadata-label-font: system-ui;
  --metadata-property-background-active: #8883;
  --modal-background: rgb(30, 30, 32);
  --modal-border-color: #363636;
  --nav-collapse-icon-color: #b3b3b3;
  --nav-indentation-guide-width: 0;
  --nav-item-background-active: #8883;
  --nav-item-background-hover: #8883;
  --nav-item-background-selected: rgba(92, 161, 245, 0.15);
  --nav-item-color-highlighted: #62a0ea;
  --nav-item-padding: 6px;
  --nav-item-parent-padding: 6px;
  --only-tab-background: transparent;
  --only-tab-background-active: rgba(255, 255, 255, 0.067);
  --only-tab-background-hover: transparent;
  --only-tab-close-button: rgba(255, 255, 255, 0.133);
  --only-tab-display: flex;
  --only-tab-text: transparent;
  --only-tab-text-hover: #666666;
  --orange-1: #ffbe6f;
  --orange-1-rgb: 255, 190, 111;
  --orange-2: #ffa348;
  --orange-2-rgb: 255, 163,  72;
  --orange-3: #ff7800;
  --orange-3-rgb: 255, 120,   0;
  --orange-4: #e66100;
  --orange-4-rgb: 230,  97,   0;
  --orange-5: #c64600;
  --orange-5-rgb: 198,  70,   0;
  --padding-frame: 8px 12px;
  --padding-frame-h: 12px;
  --padding-frame-v: 8px;
  --pdf-background: rgb(30, 30, 32);
  --pdf-page-background: rgb(30, 30, 32);
  --pdf-sidebar-background: rgb(30, 30, 32);
  --pill-color-remove-hover: #62a0ea;
  --prompt-background: rgb(30, 30, 32);
  --prompt-border-width: 0;
  --purple-1: #dc8add;
  --purple-1-rgb: 220, 138, 221;
  --purple-2: #c061cb;
  --purple-2-rgb: 192,  97, 203;
  --purple-3: #9141ac;
  --purple-3-rgb: 145,  65, 172;
  --purple-4: #813d9c;
  --purple-4-rgb: 129,  61, 156;
  --purple-5: #613583;
  --purple-5-rgb: 97,  53, 131;
  --red-1: #f66151;
  --red-1-rgb: 246,  97,  81;
  --red-2: #ed333b;
  --red-2-rgb: 237,  51,  59;
  --red-3: #e01b24;
  --red-3-rgb: 224,  27,  36;
  --red-4: #c01c28;
  --red-4-rgb: 192,  28,  40;
  --red-5: #a51d2d;
  --red-5-rgb: 165,  29,  45;
  --ribbon-background: rgb(48, 48, 48);
  --ribbon-background-collapsed: rgb(30, 30, 32);
  --rounded-corner-element: 6px;
  --rounded-corner-frame: 12px;
  --search-result-background: rgb(30, 30, 32);
  --secondary: var(--text-accent);
  --setting-items-background: rgb(39, 38, 39);
  --shadow-frame: #0002 0 2px 6px;
  --status-bar-background: rgb(48, 48, 48);
  --suggestion-background: rgb(30, 30, 32);
  --sync-avatar-color-1: #e01b24;
  --sync-avatar-color-2: #ff7800;
  --sync-avatar-color-3: #f6d32d;
  --sync-avatar-color-4: #33d17a;
  --sync-avatar-color-5: #34aab4;
  --sync-avatar-color-6: #3584e4;
  --sync-avatar-color-7: #9141ac;
  --tab-background-active: rgb(30, 30, 32);
  --tab-container-background: rgb(48, 48, 48);
  --tab-outline-color: rgb(48, 48, 48);
  --tab-scroll-mask-color: #3E3E3E;
  --tab-stacked-header-width: 44px;
  --tab-switcher-background: rgb(48, 48, 48);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(48, 48, 48), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(92, 161, 245);
  --tab-text-color-focused-highlighted: #62a0ea;
  --table-drag-handle-background-active: #3584e4;
  --table-selection: rgba(92, 161, 245, 0.1);
  --table-selection-border-color: #3584e4;
  --tag-background: rgba(92, 161, 245, 0.1);
  --tag-background-hover: rgba(92, 161, 245, 0.2);
  --tag-border-color: rgba(92, 161, 245, 0.15);
  --tag-border-color-hover: rgba(92, 161, 245, 0.15);
  --tag-color: #62a0ea;
  --tag-color-hover: #62a0ea;
  --tertiary: var(--text-accent-hover);
  --text-accent: #62a0ea;
  --text-accent-hover: #99c1f1;
  --text-error: #e01b24;
  --text-selection: rgba(92, 161, 245, 0.33);
  --text-success: #33d17a;
  --text-warning: #ff7800;
  --textHighlight: var(--background-modifier-hover);
  --titleFont: var(--font-interface);
  --titlebar-background: rgb(39, 38, 39);
  --titlebar-background-focused: rgb(48, 48, 48);
  --toggle-thumb-height: 23px;
  --toggle-thumb-width: 22px;
  --toggle-width: 48px;
  --traffic-lights-offset-x: 44px;
  --traffic-lights-offset-y: 44px;
  --window-buttons: none;
  --yellow-1: #f9f06b;
  --yellow-1-rgb: 249, 240, 107;
  --yellow-2: #f8e45c;
  --yellow-2-rgb: 248, 228,  92;
  --yellow-3: #f6d32d;
  --yellow-3-rgb: 246, 211,  45;
  --yellow-4: #f5c211;
  --yellow-4-rgb: 245, 194,  17;
  --yellow-5: #e5a50a;
  --yellow-5-rgb: 229, 165,  10;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(48, 48, 48);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(30, 30, 32);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(48, 48, 48);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(48, 48, 48);
}

body div#quartz-root {
  background-color: rgb(30, 30, 32);
}`,
    typography: `body p {
  font-family: system-ui;
}`,
    links: `body a.external, footer a {
  color: rgb(98, 160, 234);
  outline: rgb(98, 160, 234) none 0px;
  text-decoration: underline rgb(98, 160, 234);
  text-decoration-color: rgb(98, 160, 234);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(98, 160, 234);
  outline: rgb(98, 160, 234) none 0px;
  text-decoration: underline rgb(98, 160, 234);
  text-decoration-color: rgb(98, 160, 234);
}

body a.internal.broken {
  color: rgb(98, 160, 234);
  outline: rgb(98, 160, 234) none 0px;
  text-decoration: underline rgba(92, 161, 245, 0.3);
  text-decoration-color: rgba(92, 161, 245, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(30, 30, 32);
}

body ul.overflow {
  background-color: rgb(30, 30, 32);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(53, 132, 228);
  text-decoration: rgb(53, 132, 228);
}

body blockquote {
  background-color: rgb(48, 48, 48);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body th {
  border-bottom-style: double;
  border-bottom-width: 3px;
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(48, 48, 48);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(48, 48, 48);
}

body pre > code > [data-line] {
  border-left-color: rgb(246, 211, 45);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(246, 211, 45);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(246, 211, 45);
  border-left-color: rgb(246, 211, 45);
  border-right-color: rgb(246, 211, 45);
  border-top-color: rgb(246, 211, 45);
}

body pre > code, pre:has(> code) {
  background-color: rgb(48, 48, 48);
}

body pre:has(> code) {
  background-color: rgb(48, 48, 48);
}`,
    embeds: `body .file-embed {
  background-color: rgb(39, 38, 39);
}

body .transclude {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(53, 132, 228);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

body .transclude-inner {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(53, 132, 228);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(154, 153, 150);
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(154, 153, 150);
  border-top-color: rgb(154, 153, 150);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

body .callout > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 52, 170, 180;
  background-color: rgba(52, 170, 180, 0.1);
  border-bottom-color: rgba(52, 170, 180, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(52, 170, 180, 0.25);
  border-right-color: rgba(52, 170, 180, 0.25);
  border-top-color: rgba(52, 170, 180, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="bug"] {
  --callout-color: 237,  51,  59;
  background-color: rgba(237, 51, 59, 0.1);
  border-bottom-color: rgba(237, 51, 59, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(237, 51, 59, 0.25);
  border-right-color: rgba(237, 51, 59, 0.25);
  border-top-color: rgba(237, 51, 59, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="danger"] {
  --callout-color: 237,  51,  59;
  background-color: rgba(237, 51, 59, 0.1);
  border-bottom-color: rgba(237, 51, 59, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(237, 51, 59, 0.25);
  border-right-color: rgba(237, 51, 59, 0.25);
  border-top-color: rgba(237, 51, 59, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="example"] {
  --callout-color: 192,  97, 203;
  background-color: rgba(192, 97, 203, 0.1);
  border-bottom-color: rgba(192, 97, 203, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(192, 97, 203, 0.25);
  border-right-color: rgba(192, 97, 203, 0.25);
  border-top-color: rgba(192, 97, 203, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="failure"] {
  --callout-color: 237,  51,  59;
  background-color: rgba(237, 51, 59, 0.1);
  border-bottom-color: rgba(237, 51, 59, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(237, 51, 59, 0.25);
  border-right-color: rgba(237, 51, 59, 0.25);
  border-top-color: rgba(237, 51, 59, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="info"] {
  --callout-color: 53, 132, 228;
  background-color: rgba(53, 132, 228, 0.1);
  border-bottom-color: rgba(53, 132, 228, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(53, 132, 228, 0.25);
  border-right-color: rgba(53, 132, 228, 0.25);
  border-top-color: rgba(53, 132, 228, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="note"] {
  --callout-color: 154, 153, 150;
  background-color: rgba(154, 153, 150, 0.1);
  border-bottom-color: rgba(154, 153, 150, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(154, 153, 150, 0.25);
  border-right-color: rgba(154, 153, 150, 0.25);
  border-top-color: rgba(154, 153, 150, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="question"] {
  --callout-color: 229, 165,  10;
  background-color: rgba(229, 165, 10, 0.1);
  border-bottom-color: rgba(229, 165, 10, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(229, 165, 10, 0.25);
  border-right-color: rgba(229, 165, 10, 0.25);
  border-top-color: rgba(229, 165, 10, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="quote"] {
  --callout-color: 181, 131,  90;
  background-color: rgba(181, 131, 90, 0.1);
  border-bottom-color: rgba(181, 131, 90, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(181, 131, 90, 0.25);
  border-right-color: rgba(181, 131, 90, 0.25);
  border-top-color: rgba(181, 131, 90, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="success"] {
  --callout-color: 51, 209, 122;
  background-color: rgba(51, 209, 122, 0.1);
  border-bottom-color: rgba(51, 209, 122, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(51, 209, 122, 0.25);
  border-right-color: rgba(51, 209, 122, 0.25);
  border-top-color: rgba(51, 209, 122, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="tip"] {
  --callout-color: 52, 170, 180;
  background-color: rgba(52, 170, 180, 0.1);
  border-bottom-color: rgba(52, 170, 180, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(52, 170, 180, 0.25);
  border-right-color: rgba(52, 170, 180, 0.25);
  border-top-color: rgba(52, 170, 180, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="todo"] {
  --callout-color: 53, 132, 228;
  background-color: rgba(53, 132, 228, 0.1);
  border-bottom-color: rgba(53, 132, 228, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(53, 132, 228, 0.25);
  border-right-color: rgba(53, 132, 228, 0.25);
  border-top-color: rgba(53, 132, 228, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 120,   0;
  background-color: rgba(255, 120, 0, 0.1);
  border-bottom-color: rgba(255, 120, 0, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(255, 120, 0, 0.25);
  border-right-color: rgba(255, 120, 0, 0.25);
  border-top-color: rgba(255, 120, 0, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(255, 255, 255, 0.067);
  font-family: system-ui;
}

body .search > .search-container > .search-space {
  background-color: rgb(30, 30, 32);
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(136, 136, 136, 0.2);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  background-color: rgba(255, 255, 255, 0.067);
  border-bottom-color: rgb(48, 48, 48);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(136, 136, 136, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(136, 136, 136, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(92, 161, 245, 0.1);
  border-bottom-color: rgba(92, 161, 245, 0.15);
  border-bottom-left-radius: 24.36px;
  border-bottom-right-radius: 24.36px;
  border-left-color: rgba(92, 161, 245, 0.15);
  border-right-color: rgba(92, 161, 245, 0.15);
  border-top-color: rgba(92, 161, 245, 0.15);
  border-top-left-radius: 24.36px;
  border-top-right-radius: 24.36px;
  font-family: system-ui;
}

body a.internal.tag-link::before {
  color: rgb(98, 160, 234);
}`,
    scrollbars: `body .callout {
  --callout-color: 154, 153, 150;
  border-bottom-color: rgba(154, 153, 150, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(154, 153, 150, 0.25);
  border-right-color: rgba(154, 153, 150, 0.25);
  border-top-color: rgba(154, 153, 150, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(30, 30, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 32);
}

body ::-webkit-scrollbar-corner {
  background: rgb(30, 30, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 32);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(30, 30, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 32);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 30, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 32);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 30, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 32);
}

body ::-webkit-scrollbar-track {
  background: rgb(30, 30, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 32);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: system-ui;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: system-ui;
}

body .explorer .explorer-content ul.explorer-ul li a {
  cursor: pointer;
  font-family: system-ui;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(136, 136, 136, 0.2);
  cursor: pointer;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(218, 218, 218);
}`,
    footer: `body footer {
  background-color: rgb(48, 48, 48);
  font-family: system-ui;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: system-ui;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: system-ui;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: system-ui;
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(218, 218, 218);
}

body .darkmode svg {
  color: rgb(218, 218, 218);
  stroke: rgb(218, 218, 218);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: system-ui;
}`,
    misc: `body .metadata {
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}

body .navigation-progress {
  background-color: rgb(48, 48, 48);
}

body .page-header h2.page-title {
  font-family: system-ui;
}

body input[type=text] {
  background-color: rgba(255, 255, 255, 0.067);
  font-family: system-ui;
}

body kbd {
  background-color: rgb(48, 48, 48);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 213;
  --background-active: rgba(0, 0, 0, 0.133);
  --background-active-hover: rgba(0, 0, 0, 0.2);
  --background-double-active: rgba(0, 0, 0, 0.267);
  --background-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-active-hover: rgba(92, 161, 245, 0.1);
  --background-modifier-error: #e01b24;
  --background-modifier-error-hover: #e01b24;
  --background-modifier-error-rgb: 224,  27,  36;
  --background-modifier-hover: #8883;
  --background-modifier-success: #33d17a;
  --background-modifier-success-rgb: 51, 209, 122;
  --background-primary: rgb(250, 250, 250);
  --background-primary-alt: rgb(242, 242, 242);
  --background-secondary: rgb(235, 235, 235);
  --bases-cards-background: rgb(250, 250, 250);
  --bases-cards-cover-background: rgb(242, 242, 242);
  --bases-table-cell-background-active: rgb(250, 250, 250);
  --bases-table-cell-background-disabled: rgb(242, 242, 242);
  --bases-table-cell-background-selected: rgba(92, 161, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #3584e4;
  --bases-table-group-background: rgb(242, 242, 242);
  --bases-table-header-background: rgb(250, 250, 250);
  --bases-table-header-background-hover: #8883;
  --bases-table-summary-background: rgb(250, 250, 250);
  --bases-table-summary-background-hover: #8883;
  --blockquote-background-color: rgb(235, 235, 235);
  --blockquote-border-color: #3584e4;
  --blockquote-border-thickness: 0;
  --blue-1: #99c1f1;
  --blue-1-rgb: 153, 193, 241;
  --blue-2: #62a0ea;
  --blue-2-rgb: 98, 160, 234;
  --blue-3: #3584e4;
  --blue-3-rgb: 53, 132, 228;
  --blue-4: #1c71d8;
  --blue-4-rgb: 28, 113, 216;
  --blue-5: #1a5fb4;
  --blue-5-rgb: 26,  95, 180;
  --blur-background: color-mix(in srgb, rgb(250, 250, 250) 65%, transparent) linear-gradient(rgb(250, 250, 250), color-mix(in srgb, rgb(250, 250, 250) 65%, transparent));
  --bodyFont: var(--font-interface);
  --brown-1: #cdab8f;
  --brown-1-rgb: 205, 171, 143;
  --brown-2: #b5835a;
  --brown-2-rgb: 181, 131,  90;
  --brown-3: #986a44;
  --brown-3-rgb: 152, 106,  68;
  --brown-4: #865e3c;
  --brown-4-rgb: 134,  94,  60;
  --brown-5: #63452c;
  --brown-5-rgb: 99,  69,  44;
  --button-transition: linear 100ms background-color;
  --callout-bug: 224,  27,  36;
  --callout-default: 94,  92, 100;
  --callout-error: 224,  27,  36;
  --callout-example: 145,  65, 172;
  --callout-fail: 224,  27,  36;
  --callout-important: 52, 170, 180;
  --callout-info: 53, 132, 228;
  --callout-padding: 12px 16px;
  --callout-question: 229, 165,  10;
  --callout-quote: 152, 106,  68;
  --callout-radius: 12px;
  --callout-success: 46, 194, 126;
  --callout-summary: 52, 170, 180;
  --callout-tip: 52, 170, 180;
  --callout-todo: 53, 132, 228;
  --callout-warning: 255, 120,   0;
  --canvas-background: rgb(250, 250, 250);
  --canvas-color-1: 224,  27,  36;
  --canvas-color-2: 255, 120,   0;
  --canvas-color-3: 229, 165,  10;
  --canvas-color-4: 51, 209, 122;
  --canvas-color-5: 52, 170, 180;
  --canvas-color-6: 145,  65, 172;
  --checkbox-color: #3584e4;
  --checkbox-color-hover: rgb(139, 194, 249);
  --checkbox-marker-color: rgb(250, 250, 250);
  --code-background: rgb(235, 235, 235);
  --code-bracket-background: #8883;
  --code-function: #e5a50a;
  --code-important: #ff7800;
  --code-operator: #e01b24;
  --code-property: #34aab4;
  --code-string: #33d17a;
  --code-tag: #e01b24;
  --code-value: #9141ac;
  --codeFont: var(--font-interface);
  --collapse-icon-color: #5c5c5c;
  --collapse-icon-color-collapsed: #ababab;
  --color-accent: rgb(92, 161, 245);
  --color-accent-1: rgb(115, 177, 247);
  --color-accent-2: rgb(139, 194, 249);
  --color-accent-hsl: 213, 88%, 66%;
  --color-blue: #3584e4;
  --color-blue-rgb: 53, 132, 228;
  --color-cyan: #34aab4;
  --color-cyan-rgb: 52, 170, 180;
  --color-green: #33d17a;
  --color-green-rgb: 51, 209, 122;
  --color-invert-filter-b: none;
  --color-invert-filter-w: invert();
  --color-orange: #ff7800;
  --color-orange-rgb: 255, 120,   0;
  --color-purple: #9141ac;
  --color-purple-rgb: 145,  65, 172;
  --color-red: #e01b24;
  --color-red-rgb: 224,  27,  36;
  --color-yellow: #e5a50a;
  --color-yellow-rgb: 229, 165,  10;
  --cyan-1: #94d8ca;
  --cyan-1-rgb: 148, 216, 202;
  --cyan-2: #5ca0b9;
  --cyan-2-rgb: 92, 160, 185;
  --cyan-3: #34aab4;
  --cyan-3-rgb: 52, 170, 180;
  --cyan-4: #2599ab;
  --cyan-4-rgb: 37, 153, 171;
  --cyan-5: #20808e;
  --cyan-5-rgb: 32, 128, 142;
  --dark-1: #77767b;
  --dark-1-rgb: 119, 118, 123;
  --dark-2: #5e5c64;
  --dark-2-rgb: 94,  92, 100;
  --dark-3: #3d3846;
  --dark-3-rgb: 61,  56,  70;
  --dark-4: #241f31;
  --dark-4-rgb: 36,  31,  49;
  --dark-5: #000000;
  --dark-5-rgb: 0,   0,   0;
  --divider-color-hover: #3584e4;
  --dropdown-background: rgba(0, 0, 0, 0.067);
  --dropdown-background-hover: rgba(0, 0, 0, 0.133);
  --embed-border-left: none;
  --embed-border-start: 2px solid #3584e4;
  --embed-max-height: 80vh;
  --file-header-background: rgb(250, 250, 250);
  --file-header-background-focused: rgb(250, 250, 250);
  --file-header-font: system-ui;
  --file-header-font-weight: 600;
  --flair-background: rgba(0, 0, 0, 0.067);
  --font-interface: system-ui;
  --footnote-input-background-active: #8883;
  --frame-right-space: 48px;
  --graph-node-attachment: #e5a50a;
  --graph-node-focused: #1c71d8;
  --graph-node-tag: #33d17a;
  --green-1: #8ff0a4;
  --green-1-rgb: 143, 240, 164;
  --green-2: #57e389;
  --green-2-rgb: 87, 227, 137;
  --green-3: #33d17a;
  --green-3-rgb: 51, 209, 122;
  --green-4: #2ec27e;
  --green-4-rgb: 46, 194, 126;
  --green-5: #26a269;
  --green-5-rgb: 38, 162, 105;
  --header-height: 44px;
  --headerFont: var(--font-interface);
  --highlight: var(--background-modifier-hover);
  --icon-color: #222222;
  --icon-color-active: #1c71d8;
  --icon-l: 16px;
  --icon-l-stroke-width: 2.5px;
  --icon-stroke: 2.5px;
  --input-font-weight: bold;
  --input-height: 36px;
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: #3584e4;
  --interactive-accent-hover: rgb(139, 194, 249);
  --interactive-accent-hsl: 213, 88%, 66%;
  --interactive-hover: rgba(0, 0, 0, 0.133);
  --interactive-normal: rgba(0, 0, 0, 0.067);
  --invert-filter-b: none;
  --invert-filter-w: invert() hue-rotate(180deg);
  --light: var(--background-primary);
  --light-1: #ffffff;
  --light-1-rgb: 255, 255, 255;
  --light-2: #f6f5f4;
  --light-2-rgb: 246, 245, 244;
  --light-3: #deddda;
  --light-3-rgb: 222, 221, 218;
  --light-4: #c0bfbc;
  --light-4-rgb: 192, 191, 188;
  --light-5: #9a9996;
  --light-5-rgb: 154, 153, 150;
  --lightgray: var(--background-secondary);
  --link-color: #1c71d8;
  --link-color-hover: #3584e4;
  --link-external-color: #1c71d8;
  --link-external-color-hover: #3584e4;
  --link-unresolved-color: #1c71d8;
  --link-unresolved-decoration-color: rgba(92, 161, 245, 0.3);
  --list-marker-color: #5c5c5c;
  --list-marker-color-collapsed: #1c71d8;
  --menu-background: rgb(235, 235, 235);
  --metadata-input-background-active: #8883;
  --metadata-input-font: system-ui;
  --metadata-label-background-active: #8883;
  --metadata-label-font: system-ui;
  --metadata-property-background-active: #8883;
  --modal-background: rgb(250, 250, 250);
  --modal-border-color: #fcfcfc;
  --nav-collapse-icon-color: #5c5c5c;
  --nav-indentation-guide-width: 0;
  --nav-item-background-active: #8883;
  --nav-item-background-hover: #8883;
  --nav-item-background-selected: rgba(92, 161, 245, 0.15);
  --nav-item-color-highlighted: #1c71d8;
  --nav-item-padding: 6px;
  --nav-item-parent-padding: 6px;
  --only-tab-background: transparent;
  --only-tab-background-active: rgba(0, 0, 0, 0.067);
  --only-tab-background-hover: transparent;
  --only-tab-close-button: rgba(0, 0, 0, 0.133);
  --only-tab-display: flex;
  --only-tab-text: transparent;
  --only-tab-text-hover: #ababab;
  --orange-1: #ffbe6f;
  --orange-1-rgb: 255, 190, 111;
  --orange-2: #ffa348;
  --orange-2-rgb: 255, 163,  72;
  --orange-3: #ff7800;
  --orange-3-rgb: 255, 120,   0;
  --orange-4: #e66100;
  --orange-4-rgb: 230,  97,   0;
  --orange-5: #c64600;
  --orange-5-rgb: 198,  70,   0;
  --padding-frame: 8px 12px;
  --padding-frame-h: 12px;
  --padding-frame-v: 8px;
  --pdf-background: rgb(250, 250, 250);
  --pdf-page-background: rgb(250, 250, 250);
  --pdf-sidebar-background: rgb(250, 250, 250);
  --pill-color-remove-hover: #1c71d8;
  --prompt-background: rgb(250, 250, 250);
  --prompt-border-width: 0;
  --purple-1: #dc8add;
  --purple-1-rgb: 220, 138, 221;
  --purple-2: #c061cb;
  --purple-2-rgb: 192,  97, 203;
  --purple-3: #9141ac;
  --purple-3-rgb: 145,  65, 172;
  --purple-4: #813d9c;
  --purple-4-rgb: 129,  61, 156;
  --purple-5: #613583;
  --purple-5-rgb: 97,  53, 131;
  --raised-background: color-mix(in srgb, rgb(250, 250, 250) 65%, transparent) linear-gradient(rgb(250, 250, 250), color-mix(in srgb, rgb(250, 250, 250) 65%, transparent));
  --red-1: #f66151;
  --red-1-rgb: 246,  97,  81;
  --red-2: #ed333b;
  --red-2-rgb: 237,  51,  59;
  --red-3: #e01b24;
  --red-3-rgb: 224,  27,  36;
  --red-4: #c01c28;
  --red-4-rgb: 192,  28,  40;
  --red-5: #a51d2d;
  --red-5-rgb: 165,  29,  45;
  --ribbon-background: rgb(235, 235, 235);
  --ribbon-background-collapsed: rgb(250, 250, 250);
  --rounded-corner-element: 6px;
  --rounded-corner-frame: 12px;
  --search-result-background: rgb(250, 250, 250);
  --secondary: var(--text-accent);
  --setting-items-background: rgb(242, 242, 242);
  --shadow-frame: #0002 0 2px 6px;
  --status-bar-background: rgb(235, 235, 235);
  --suggestion-background: rgb(250, 250, 250);
  --sync-avatar-color-1: #e01b24;
  --sync-avatar-color-2: #ff7800;
  --sync-avatar-color-3: #e5a50a;
  --sync-avatar-color-4: #33d17a;
  --sync-avatar-color-5: #34aab4;
  --sync-avatar-color-6: #3584e4;
  --sync-avatar-color-7: #9141ac;
  --tab-background-active: rgb(250, 250, 250);
  --tab-container-background: rgb(235, 235, 235);
  --tab-outline-color: rgb(235, 235, 235);
  --tab-scroll-mask-color: #DBDBDB;
  --tab-stacked-header-width: 44px;
  --tab-switcher-background: rgb(235, 235, 235);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(235, 235, 235), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(92, 161, 245);
  --tab-text-color-focused-highlighted: #1c71d8;
  --table-drag-handle-background-active: #3584e4;
  --table-selection: rgba(92, 161, 245, 0.1);
  --table-selection-border-color: #3584e4;
  --tag-background: rgba(92, 161, 245, 0.1);
  --tag-background-hover: rgba(92, 161, 245, 0.2);
  --tag-border-color: rgba(92, 161, 245, 0.15);
  --tag-border-color-hover: rgba(92, 161, 245, 0.15);
  --tag-color: #1c71d8;
  --tag-color-hover: #1c71d8;
  --tertiary: var(--text-accent-hover);
  --text-accent: #1c71d8;
  --text-accent-hover: #3584e4;
  --text-error: #e01b24;
  --text-selection: rgba(92, 161, 245, 0.2);
  --text-success: #33d17a;
  --text-warning: #ff7800;
  --textHighlight: var(--background-modifier-hover);
  --titleFont: var(--font-interface);
  --titlebar-background: #ffffff;
  --titlebar-background-focused: #ffffff;
  --toggle-thumb-height: 23px;
  --toggle-thumb-width: 22px;
  --toggle-width: 48px;
  --traffic-lights-offset-x: 44px;
  --traffic-lights-offset-y: 44px;
  --window-buttons: none;
  --yellow-1: #f9f06b;
  --yellow-1-rgb: 249, 240, 107;
  --yellow-2: #f8e45c;
  --yellow-2-rgb: 248, 228,  92;
  --yellow-3: #f6d32d;
  --yellow-3-rgb: 246, 211,  45;
  --yellow-4: #f5c211;
  --yellow-4-rgb: 245, 194,  17;
  --yellow-5: #e5a50a;
  --yellow-5-rgb: 229, 165,  10;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(235, 235, 235);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(250, 250, 250);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(235, 235, 235);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(235, 235, 235);
}

body div#quartz-root {
  background-color: rgb(250, 250, 250);
}`,
    typography: `body p {
  font-family: system-ui;
}`,
    links: `body a.external, footer a {
  color: rgb(28, 113, 216);
  outline: rgb(28, 113, 216) none 0px;
  text-decoration: underline rgb(28, 113, 216);
  text-decoration-color: rgb(28, 113, 216);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(28, 113, 216);
  outline: rgb(28, 113, 216) none 0px;
  text-decoration: underline rgb(28, 113, 216);
  text-decoration-color: rgb(28, 113, 216);
}

body a.internal.broken {
  color: rgb(28, 113, 216);
  outline: rgb(28, 113, 216) none 0px;
  text-decoration: underline rgba(92, 161, 245, 0.3);
  text-decoration-color: rgba(92, 161, 245, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(250, 250, 250);
}

body ul.overflow {
  background-color: rgb(250, 250, 250);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(53, 132, 228);
  text-decoration: rgb(53, 132, 228);
}

body blockquote {
  background-color: rgb(235, 235, 235);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body th {
  border-bottom-style: double;
  border-bottom-width: 3px;
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(235, 235, 235);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(235, 235, 235);
}

body pre > code > [data-line] {
  border-left-color: rgb(229, 165, 10);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 165, 10);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 165, 10);
  border-left-color: rgb(229, 165, 10);
  border-right-color: rgb(229, 165, 10);
  border-top-color: rgb(229, 165, 10);
}

body pre > code, pre:has(> code) {
  background-color: rgb(235, 235, 235);
}

body pre:has(> code) {
  background-color: rgb(235, 235, 235);
}`,
    embeds: `body .file-embed {
  background-color: rgb(242, 242, 242);
}

body .transclude {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(53, 132, 228);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

body .transclude-inner {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(53, 132, 228);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(94, 92, 100);
  border-left-color: rgb(94, 92, 100);
  border-right-color: rgb(94, 92, 100);
  border-top-color: rgb(94, 92, 100);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

body .callout > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 52, 170, 180;
  background-color: rgba(52, 170, 180, 0.1);
  border-bottom-color: rgba(52, 170, 180, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(52, 170, 180, 0.25);
  border-right-color: rgba(52, 170, 180, 0.25);
  border-top-color: rgba(52, 170, 180, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="bug"] {
  --callout-color: 224,  27,  36;
  background-color: rgba(224, 27, 36, 0.1);
  border-bottom-color: rgba(224, 27, 36, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(224, 27, 36, 0.25);
  border-right-color: rgba(224, 27, 36, 0.25);
  border-top-color: rgba(224, 27, 36, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="danger"] {
  --callout-color: 224,  27,  36;
  background-color: rgba(224, 27, 36, 0.1);
  border-bottom-color: rgba(224, 27, 36, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(224, 27, 36, 0.25);
  border-right-color: rgba(224, 27, 36, 0.25);
  border-top-color: rgba(224, 27, 36, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="example"] {
  --callout-color: 145,  65, 172;
  background-color: rgba(145, 65, 172, 0.1);
  border-bottom-color: rgba(145, 65, 172, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(145, 65, 172, 0.25);
  border-right-color: rgba(145, 65, 172, 0.25);
  border-top-color: rgba(145, 65, 172, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="failure"] {
  --callout-color: 224,  27,  36;
  background-color: rgba(224, 27, 36, 0.1);
  border-bottom-color: rgba(224, 27, 36, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(224, 27, 36, 0.25);
  border-right-color: rgba(224, 27, 36, 0.25);
  border-top-color: rgba(224, 27, 36, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="info"] {
  --callout-color: 53, 132, 228;
  background-color: rgba(53, 132, 228, 0.1);
  border-bottom-color: rgba(53, 132, 228, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(53, 132, 228, 0.25);
  border-right-color: rgba(53, 132, 228, 0.25);
  border-top-color: rgba(53, 132, 228, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="note"] {
  --callout-color: 94,  92, 100;
  background-color: rgba(94, 92, 100, 0.1);
  border-bottom-color: rgba(94, 92, 100, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(94, 92, 100, 0.25);
  border-right-color: rgba(94, 92, 100, 0.25);
  border-top-color: rgba(94, 92, 100, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="question"] {
  --callout-color: 229, 165,  10;
  background-color: rgba(229, 165, 10, 0.1);
  border-bottom-color: rgba(229, 165, 10, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(229, 165, 10, 0.25);
  border-right-color: rgba(229, 165, 10, 0.25);
  border-top-color: rgba(229, 165, 10, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="quote"] {
  --callout-color: 152, 106,  68;
  background-color: rgba(152, 106, 68, 0.1);
  border-bottom-color: rgba(152, 106, 68, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(152, 106, 68, 0.25);
  border-right-color: rgba(152, 106, 68, 0.25);
  border-top-color: rgba(152, 106, 68, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="success"] {
  --callout-color: 46, 194, 126;
  background-color: rgba(46, 194, 126, 0.1);
  border-bottom-color: rgba(46, 194, 126, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(46, 194, 126, 0.25);
  border-right-color: rgba(46, 194, 126, 0.25);
  border-top-color: rgba(46, 194, 126, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="tip"] {
  --callout-color: 52, 170, 180;
  background-color: rgba(52, 170, 180, 0.1);
  border-bottom-color: rgba(52, 170, 180, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(52, 170, 180, 0.25);
  border-right-color: rgba(52, 170, 180, 0.25);
  border-top-color: rgba(52, 170, 180, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="todo"] {
  --callout-color: 53, 132, 228;
  background-color: rgba(53, 132, 228, 0.1);
  border-bottom-color: rgba(53, 132, 228, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(53, 132, 228, 0.25);
  border-right-color: rgba(53, 132, 228, 0.25);
  border-top-color: rgba(53, 132, 228, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 120,   0;
  background-color: rgba(255, 120, 0, 0.1);
  border-bottom-color: rgba(255, 120, 0, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(255, 120, 0, 0.25);
  border-right-color: rgba(255, 120, 0, 0.25);
  border-top-color: rgba(255, 120, 0, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.067);
  font-family: system-ui;
}

body .search > .search-container > .search-space {
  background-color: rgb(250, 250, 250);
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(136, 136, 136, 0.2);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  background-color: rgba(0, 0, 0, 0.067);
  border-bottom-color: rgb(235, 235, 235);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(136, 136, 136, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(136, 136, 136, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(92, 161, 245, 0.1);
  border-bottom-color: rgba(92, 161, 245, 0.15);
  border-bottom-left-radius: 24.36px;
  border-bottom-right-radius: 24.36px;
  border-left-color: rgba(92, 161, 245, 0.15);
  border-right-color: rgba(92, 161, 245, 0.15);
  border-top-color: rgba(92, 161, 245, 0.15);
  border-top-left-radius: 24.36px;
  border-top-right-radius: 24.36px;
  font-family: system-ui;
}

body a.internal.tag-link::before {
  color: rgb(28, 113, 216);
}`,
    scrollbars: `body .callout {
  --callout-color: 94,  92, 100;
  border-bottom-color: rgba(94, 92, 100, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(94, 92, 100, 0.25);
  border-right-color: rgba(94, 92, 100, 0.25);
  border-top-color: rgba(94, 92, 100, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-corner {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-track {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: system-ui;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: system-ui;
}

body .explorer .explorer-content ul.explorer-ul li a {
  cursor: pointer;
  font-family: system-ui;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(136, 136, 136, 0.2);
  cursor: pointer;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}`,
    footer: `body footer {
  background-color: rgb(235, 235, 235);
  font-family: system-ui;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: system-ui;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: system-ui;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: system-ui;
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}

body .darkmode svg {
  color: rgb(34, 34, 34);
  stroke: rgb(34, 34, 34);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: system-ui;
}`,
    misc: `body .metadata {
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}

body .navigation-progress {
  background-color: rgb(235, 235, 235);
}

body .page-header h2.page-title {
  font-family: system-ui;
}

body input[type=text] {
  background-color: rgba(0, 0, 0, 0.067);
  font-family: system-ui;
}

body kbd {
  background-color: rgb(235, 235, 235);
}`,
  },
};
