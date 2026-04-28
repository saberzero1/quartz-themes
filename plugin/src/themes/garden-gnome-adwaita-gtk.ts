import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "garden-gnome-adwaita-gtk",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "garden-gnome",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 213;
  --background-active: hsla(0, 0%, 100%, 0.133);
  --background-active-hover: hsla(0, 0%, 100%, 0.2);
  --background-double-active: hsla(0, 0%, 100%, 0.267);
  --background-hover: hsla(0, 0%, 100%, 0.067);
  --background-modifier-active-hover: hsla(213, 88%, 66%, 0.1);
  --background-modifier-error: #e01b24;
  --background-modifier-error-hover: #e01b24;
  --background-modifier-error-rgb: 224,  27,  36;
  --background-modifier-hover: #8883;
  --background-modifier-success: #33d17a;
  --background-modifier-success-rgb: 51, 209, 122;
  --background-primary: hsl(220, 3%, 12%);
  --background-primary-alt: hsl(290, 1%, 15%);
  --background-secondary: hsl(0, 0%, 19%);
  --bases-cards-background: hsl(220, 3%, 12%);
  --bases-cards-cover-background: hsl(290, 1%, 15%);
  --bases-table-cell-background-active: hsl(220, 3%, 12%);
  --bases-table-cell-background-disabled: hsl(290, 1%, 15%);
  --bases-table-cell-background-selected: hsla(213, 88%, 66%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #3584e4;
  --bases-table-group-background: hsl(290, 1%, 15%);
  --bases-table-header-background: hsl(220, 3%, 12%);
  --bases-table-header-background-hover: #8883;
  --bases-table-summary-background: hsl(220, 3%, 12%);
  --bases-table-summary-background-hover: #8883;
  --blockquote-background-color: hsl(0, 0%, 19%);
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
  --bodyFont: var(--font-interface, system-ui);
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
  --canvas-background: hsl(220, 3%, 12%);
  --canvas-color-1: 224,  27,  36;
  --canvas-color-2: 255, 120,   0;
  --canvas-color-3: 246, 211,  45;
  --canvas-color-4: 51, 209, 122;
  --canvas-color-5: 52, 170, 180;
  --canvas-color-6: 145,  65, 172;
  --checkbox-color: #3584e4;
  --checkbox-color-hover: hsl(210, 89.76%, 75.9%);
  --checkbox-marker-color: hsl(220, 3%, 12%);
  --code-background: hsl(0, 0%, 19%);
  --code-bracket-background: #8883;
  --code-function: #f6d32d;
  --code-important: #ff7800;
  --code-operator: #e01b24;
  --code-property: #34aab4;
  --code-string: #33d17a;
  --code-tag: #e01b24;
  --code-value: #9141ac;
  --codeFont: var(--font-interface, system-ui);
  --collapse-icon-color: #b3b3b3;
  --collapse-icon-color-collapsed: #666666;
  --color-accent: hsl(213, 88%, 66%);
  --color-accent-1: hsl(210, 89.76%, 75.9%);
  --color-accent-2: hsl(208, 92.4%, 85.14%);
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
  --file-header-background: hsl(220, 3%, 12%);
  --file-header-background-focused: hsl(220, 3%, 12%);
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
  --headerFont: var(--font-interface, system-ui);
  --highlight: var(--background-modifier-hover, #8883);
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
  --interactive-accent-hover: hsl(210, 89.76%, 75.9%);
  --interactive-accent-hsl: 213, 88%, 66%;
  --invert-filter-b: invert() hue-rotate(180deg);
  --invert-filter-w: none;
  --light: var(--background-primary, hsl(220, 3%, 12%));
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
  --lightgray: var(--background-secondary, hsl(0, 0%, 19%));
  --link-color: #62a0ea;
  --link-color-hover: #99c1f1;
  --link-external-color: #62a0ea;
  --link-external-color-hover: #99c1f1;
  --link-unresolved-color: #62a0ea;
  --link-unresolved-decoration-color: hsla(213, 88%, 66%, 0.3);
  --list-marker-color: #b3b3b3;
  --list-marker-color-collapsed: #62a0ea;
  --menu-background: hsl(0, 0%, 19%);
  --metadata-input-background-active: #8883;
  --metadata-input-font: system-ui;
  --metadata-label-background-active: #8883;
  --metadata-label-font: system-ui;
  --metadata-property-background-active: #8883;
  --modal-background: hsl(220, 3%, 12%);
  --modal-border-color: #363636;
  --nav-collapse-icon-color: #b3b3b3;
  --nav-indentation-guide-width: 0;
  --nav-item-background-active: #8883;
  --nav-item-background-hover: #8883;
  --nav-item-background-selected: hsla(213, 88%, 66%, 0.15);
  --nav-item-color-highlighted: #62a0ea;
  --nav-item-padding: 6px;
  --nav-item-parent-padding: 6px;
  --only-tab-background: transparent;
  --only-tab-background-active: hsla(0, 0%, 100%, 0.067);
  --only-tab-background-hover: transparent;
  --only-tab-close-button: hsla(0, 0%, 100%, 0.133);
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
  --pdf-background: hsl(220, 3%, 12%);
  --pdf-page-background: hsl(220, 3%, 12%);
  --pdf-sidebar-background: hsl(220, 3%, 12%);
  --pill-color-remove-hover: #62a0ea;
  --prompt-background: hsl(220, 3%, 12%);
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
  --ribbon-background: hsl(0, 0%, 19%);
  --ribbon-background-collapsed: hsl(220, 3%, 12%);
  --rounded-corner-element: 6px;
  --rounded-corner-frame: 12px;
  --search-result-background: hsl(220, 3%, 12%);
  --secondary: var(--text-accent, #62a0ea);
  --setting-items-background: hsl(290, 1%, 15%);
  --shadow-frame: #0002 0 2px 6px;
  --shiki-code-background: hsl(0, 0%, 19%);
  --shiki-code-function: #33d17a;
  --shiki-code-important: #ff7800;
  --shiki-code-property: #34aab4;
  --shiki-code-string: #f6d32d;
  --shiki-code-value: #9141ac;
  --shiki-highlight-green: rgba(51, 209, 122, 0.5);
  --shiki-highlight-green-background: rgba(51, 209, 122, 0.1);
  --shiki-highlight-red: rgba(224, 27, 36, 0.5);
  --shiki-highlight-red-background: rgba(224, 27, 36, 0.1);
  --status-bar-background: hsl(0, 0%, 19%);
  --suggestion-background: hsl(220, 3%, 12%);
  --sync-avatar-color-1: #e01b24;
  --sync-avatar-color-2: #ff7800;
  --sync-avatar-color-3: #f6d32d;
  --sync-avatar-color-4: #33d17a;
  --sync-avatar-color-5: #34aab4;
  --sync-avatar-color-6: #3584e4;
  --sync-avatar-color-7: #9141ac;
  --tab-background-active: hsl(220, 3%, 12%);
  --tab-container-background: hsl(0, 0%, 19%);
  --tab-outline-color: hsl(0, 0%, 19%);
  --tab-scroll-mask-color: #3E3E3E;
  --tab-stacked-header-width: 44px;
  --tab-switcher-background: hsl(0, 0%, 19%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 19%), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(213, 88%, 66%);
  --tab-text-color-focused-highlighted: #62a0ea;
  --table-drag-handle-background-active: #3584e4;
  --table-selection: hsla(213, 88%, 66%, 0.1);
  --table-selection-border-color: #3584e4;
  --tag-background: hsla(213, 88%, 66%, 0.1);
  --tag-background-hover: hsla(213, 88%, 66%, 0.2);
  --tag-border-color: hsla(213, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(213, 88%, 66%, 0.15);
  --tag-color: #62a0ea;
  --tag-color-hover: #62a0ea;
  --tertiary: var(--text-accent-hover, #99c1f1);
  --text-accent: #62a0ea;
  --text-accent-hover: #99c1f1;
  --text-error: #e01b24;
  --text-selection: hsla(213, 88%, 66%, 0.33);
  --text-success: #33d17a;
  --text-warning: #ff7800;
  --textHighlight: var(--background-modifier-hover, #8883);
  --titleFont: var(--font-interface, system-ui);
  --titlebar-background: hsl(290, 1%, 15%);
  --titlebar-background-focused: hsl(0, 0%, 19%);
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

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(30, 30, 32);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(48, 48, 48);
}`,
    typography: `html[saved-theme="dark"] body h1.article-title {
  font-weight: 600;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(53, 132, 228);
  border-color: rgb(53, 132, 228);
}

html[saved-theme="dark"] body p {
  font-family: system-ui;
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(98, 160, 234);
  outline: rgb(98, 160, 234) none 0px;
  text-decoration-color: rgb(98, 160, 234);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(98, 160, 234);
  outline: rgb(98, 160, 234) none 0px;
  text-decoration-color: rgb(98, 160, 234);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(98, 160, 234);
  outline: rgb(98, 160, 234) none 0px;
  text-decoration: underline rgba(92, 161, 245, 0.3);
  text-decoration-color: rgba(92, 161, 245, 0.3);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(53, 132, 228);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(48, 48, 48);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body th {
  border-bottom-style: double;
  border-bottom-width: 3px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(48, 48, 48);
}`,
    images: `html[saved-theme="dark"] body figcaption {
  font-family: system-ui;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(39, 38, 39);
}

html[saved-theme="dark"] body .transclude {
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

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 211, 45);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(52, 170, 180);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(53, 132, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 27, 36);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 27, 36);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 27, 36);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 27, 36);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(53, 132, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 211, 45);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 211, 45);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(145, 65, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 27, 36);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 209, 122);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 209, 122);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 209, 122);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 154, 153, 150;
  border-bottom-color: rgb(154, 153, 150);
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(154, 153, 150);
  border-top-color: rgb(154, 153, 150);
  color: rgb(154, 153, 150);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(154, 153, 150);
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 52, 170, 180;
  background: rgba(52, 170, 180, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 154, 153, 150;
  border-bottom-color: rgb(154, 153, 150);
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(154, 153, 150);
  border-top-color: rgb(154, 153, 150);
  color: rgb(154, 153, 150);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(154, 153, 150);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 237,  51,  59;
  background: rgba(237, 51, 59, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 154, 153, 150;
  border-bottom-color: rgb(154, 153, 150);
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(154, 153, 150);
  border-top-color: rgb(154, 153, 150);
  color: rgb(154, 153, 150);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(154, 153, 150);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 237,  51,  59;
  background: rgba(237, 51, 59, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 154, 153, 150;
  border-bottom-color: rgb(154, 153, 150);
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(154, 153, 150);
  border-top-color: rgb(154, 153, 150);
  color: rgb(154, 153, 150);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(154, 153, 150);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 192,  97, 203;
  background: rgba(192, 97, 203, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 154, 153, 150;
  border-bottom-color: rgb(154, 153, 150);
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(154, 153, 150);
  border-top-color: rgb(154, 153, 150);
  color: rgb(154, 153, 150);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(154, 153, 150);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 237,  51,  59;
  background: rgba(237, 51, 59, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 154, 153, 150;
  border-bottom-color: rgb(154, 153, 150);
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(154, 153, 150);
  border-top-color: rgb(154, 153, 150);
  color: rgb(154, 153, 150);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(154, 153, 150);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 53, 132, 228;
  background: rgba(53, 132, 228, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 154, 153, 150;
  border-bottom-color: rgb(154, 153, 150);
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(154, 153, 150);
  border-top-color: rgb(154, 153, 150);
  color: rgb(154, 153, 150);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(154, 153, 150);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 154, 153, 150;
  background: rgba(154, 153, 150, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 154, 153, 150;
  border-bottom-color: rgb(154, 153, 150);
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(154, 153, 150);
  border-top-color: rgb(154, 153, 150);
  color: rgb(154, 153, 150);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(154, 153, 150);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 229, 165,  10;
  background: rgba(229, 165, 10, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 154, 153, 150;
  border-bottom-color: rgb(154, 153, 150);
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(154, 153, 150);
  border-top-color: rgb(154, 153, 150);
  color: rgb(154, 153, 150);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(154, 153, 150);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 181, 131,  90;
  background: rgba(181, 131, 90, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 154, 153, 150;
  border-bottom-color: rgb(154, 153, 150);
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(154, 153, 150);
  border-top-color: rgb(154, 153, 150);
  color: rgb(154, 153, 150);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(154, 153, 150);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 51, 209, 122;
  background: rgba(51, 209, 122, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 154, 153, 150;
  border-bottom-color: rgb(154, 153, 150);
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(154, 153, 150);
  border-top-color: rgb(154, 153, 150);
  color: rgb(154, 153, 150);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(154, 153, 150);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 52, 170, 180;
  background: rgba(52, 170, 180, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 154, 153, 150;
  border-bottom-color: rgb(154, 153, 150);
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(154, 153, 150);
  border-top-color: rgb(154, 153, 150);
  color: rgb(154, 153, 150);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(154, 153, 150);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 53, 132, 228;
  background: rgba(53, 132, 228, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 154, 153, 150;
  border-bottom-color: rgb(154, 153, 150);
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(154, 153, 150);
  border-top-color: rgb(154, 153, 150);
  color: rgb(154, 153, 150);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(154, 153, 150);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 120,   0;
  background: rgba(255, 120, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 120, 0, 0.1);
  border-bottom-color: rgba(255, 120, 0, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(255, 120, 0, 0.25);
  border-right-color: rgba(255, 120, 0, 0.25);
  border-top-color: rgba(255, 120, 0, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 154, 153, 150;
  border-bottom-color: rgb(154, 153, 150);
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(154, 153, 150);
  border-top-color: rgb(154, 153, 150);
  color: rgb(154, 153, 150);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(154, 153, 150);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
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
  background-color: rgba(255, 255, 255, 0.067);
  font-family: system-ui;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(30, 30, 32);
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(136, 136, 136, 0.2);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgba(255, 255, 255, 0.067);
  border-bottom-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(136, 136, 136, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(136, 136, 136, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(98, 160, 234);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
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
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: system-ui;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: system-ui;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(218, 218, 218);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(48, 48, 48);
  font-family: system-ui;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  font-family: system-ui;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: system-ui;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: system-ui;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(218, 218, 218);
  stroke: rgb(218, 218, 218);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: system-ui;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(48, 48, 48);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(92, 161, 245, 0.1);
  border-radius: 24.36px;
  color: rgb(98, 160, 234);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(30, 30, 32);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(48, 48, 48);
}`,
    misc: `html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  font-family: system-ui;
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgba(255, 255, 255, 0.067);
  font-family: system-ui;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(92, 161, 245, 0.1);
  border-bottom-color: rgba(92, 161, 245, 0.15);
  border-left-color: rgba(92, 161, 245, 0.15);
  border-right-color: rgba(92, 161, 245, 0.15);
  border-top-color: rgba(92, 161, 245, 0.15);
  color: rgb(98, 160, 234);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 213;
  --background-active: hsla(0, 0%, 0%, 0.133);
  --background-active-hover: hsla(0, 0%, 0%, 0.2);
  --background-double-active: hsla(0, 0%, 0%, 0.267);
  --background-hover: hsla(0, 0%, 0%, 0.067);
  --background-modifier-active-hover: hsla(213, 88%, 66%, 0.1);
  --background-modifier-error: #e01b24;
  --background-modifier-error-hover: #e01b24;
  --background-modifier-error-rgb: 224,  27,  36;
  --background-modifier-hover: #8883;
  --background-modifier-success: #33d17a;
  --background-modifier-success-rgb: 51, 209, 122;
  --background-primary: hsl(0, 0%, 98%);
  --background-primary-alt: hsl(0, 0%, 95%);
  --background-secondary: hsl(0, 0%, 92%);
  --bases-cards-background: hsl(0, 0%, 98%);
  --bases-cards-cover-background: hsl(0, 0%, 95%);
  --bases-table-cell-background-active: hsl(0, 0%, 98%);
  --bases-table-cell-background-disabled: hsl(0, 0%, 95%);
  --bases-table-cell-background-selected: hsla(213, 88%, 66%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #3584e4;
  --bases-table-group-background: hsl(0, 0%, 95%);
  --bases-table-header-background: hsl(0, 0%, 98%);
  --bases-table-header-background-hover: #8883;
  --bases-table-summary-background: hsl(0, 0%, 98%);
  --bases-table-summary-background-hover: #8883;
  --blockquote-background-color: hsl(0, 0%, 92%);
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
  --blur-background: color-mix(in srgb, hsl(0, 0%, 98%) 65%, transparent) linear-gradient(hsl(0, 0%, 98%), color-mix(in srgb, hsl(0, 0%, 98%) 65%, transparent));
  --bodyFont: var(--font-interface, system-ui);
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
  --canvas-background: hsl(0, 0%, 98%);
  --canvas-color-1: 224,  27,  36;
  --canvas-color-2: 255, 120,   0;
  --canvas-color-3: 229, 165,  10;
  --canvas-color-4: 51, 209, 122;
  --canvas-color-5: 52, 170, 180;
  --canvas-color-6: 145,  65, 172;
  --checkbox-color: #3584e4;
  --checkbox-color-hover: hsl(210, 89.76%, 75.9%);
  --checkbox-marker-color: hsl(0, 0%, 98%);
  --code-background: hsl(0, 0%, 92%);
  --code-bracket-background: #8883;
  --code-function: #e5a50a;
  --code-important: #ff7800;
  --code-operator: #e01b24;
  --code-property: #34aab4;
  --code-string: #33d17a;
  --code-tag: #e01b24;
  --code-value: #9141ac;
  --codeFont: var(--font-interface, system-ui);
  --collapse-icon-color: #5c5c5c;
  --collapse-icon-color-collapsed: #ababab;
  --color-accent: hsl(213, 88%, 66%);
  --color-accent-1: hsl(212, 88.88%, 70.95%);
  --color-accent-2: hsl(210, 89.76%, 75.9%);
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
  --dropdown-background: hsla(0, 0%, 0%, 0.067);
  --dropdown-background-hover: hsla(0, 0%, 0%, 0.133);
  --embed-border-left: none;
  --embed-border-start: 2px solid #3584e4;
  --embed-max-height: 80vh;
  --file-header-background: hsl(0, 0%, 98%);
  --file-header-background-focused: hsl(0, 0%, 98%);
  --file-header-font: system-ui;
  --file-header-font-weight: 600;
  --flair-background: hsla(0, 0%, 0%, 0.067);
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
  --headerFont: var(--font-interface, system-ui);
  --highlight: var(--background-modifier-hover, #8883);
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
  --interactive-accent-hover: hsl(210, 89.76%, 75.9%);
  --interactive-accent-hsl: 213, 88%, 66%;
  --interactive-hover: hsla(0, 0%, 0%, 0.133);
  --interactive-normal: hsla(0, 0%, 0%, 0.067);
  --invert-filter-b: none;
  --invert-filter-w: invert() hue-rotate(180deg);
  --light: var(--background-primary, hsl(0, 0%, 98%));
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
  --lightgray: var(--background-secondary, hsl(0, 0%, 92%));
  --link-color: #1c71d8;
  --link-color-hover: #3584e4;
  --link-external-color: #1c71d8;
  --link-external-color-hover: #3584e4;
  --link-unresolved-color: #1c71d8;
  --link-unresolved-decoration-color: hsla(213, 88%, 66%, 0.3);
  --list-marker-color: #5c5c5c;
  --list-marker-color-collapsed: #1c71d8;
  --menu-background: hsl(0, 0%, 92%);
  --metadata-input-background-active: #8883;
  --metadata-input-font: system-ui;
  --metadata-label-background-active: #8883;
  --metadata-label-font: system-ui;
  --metadata-property-background-active: #8883;
  --modal-background: hsl(0, 0%, 98%);
  --modal-border-color: #fcfcfc;
  --nav-collapse-icon-color: #5c5c5c;
  --nav-indentation-guide-width: 0;
  --nav-item-background-active: #8883;
  --nav-item-background-hover: #8883;
  --nav-item-background-selected: hsla(213, 88%, 66%, 0.15);
  --nav-item-color-highlighted: #1c71d8;
  --nav-item-padding: 6px;
  --nav-item-parent-padding: 6px;
  --only-tab-background: transparent;
  --only-tab-background-active: hsla(0, 0%, 0%, 0.067);
  --only-tab-background-hover: transparent;
  --only-tab-close-button: hsla(0, 0%, 0%, 0.133);
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
  --pdf-background: hsl(0, 0%, 98%);
  --pdf-page-background: hsl(0, 0%, 98%);
  --pdf-sidebar-background: hsl(0, 0%, 98%);
  --pill-color-remove-hover: #1c71d8;
  --prompt-background: hsl(0, 0%, 98%);
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
  --raised-background: color-mix(in srgb, hsl(0, 0%, 98%) 65%, transparent) linear-gradient(hsl(0, 0%, 98%), color-mix(in srgb, hsl(0, 0%, 98%) 65%, transparent));
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
  --ribbon-background: hsl(0, 0%, 92%);
  --ribbon-background-collapsed: hsl(0, 0%, 98%);
  --rounded-corner-element: 6px;
  --rounded-corner-frame: 12px;
  --search-result-background: hsl(0, 0%, 98%);
  --secondary: var(--text-accent, #1c71d8);
  --setting-items-background: hsl(0, 0%, 95%);
  --shadow-frame: #0002 0 2px 6px;
  --shiki-code-background: hsl(0, 0%, 92%);
  --shiki-code-function: #33d17a;
  --shiki-code-important: #ff7800;
  --shiki-code-property: #34aab4;
  --shiki-code-string: #e5a50a;
  --shiki-code-value: #9141ac;
  --shiki-highlight-green: rgba(51, 209, 122, 0.5);
  --shiki-highlight-green-background: rgba(51, 209, 122, 0.1);
  --shiki-highlight-red: rgba(224, 27, 36, 0.5);
  --shiki-highlight-red-background: rgba(224, 27, 36, 0.1);
  --status-bar-background: hsl(0, 0%, 92%);
  --suggestion-background: hsl(0, 0%, 98%);
  --sync-avatar-color-1: #e01b24;
  --sync-avatar-color-2: #ff7800;
  --sync-avatar-color-3: #e5a50a;
  --sync-avatar-color-4: #33d17a;
  --sync-avatar-color-5: #34aab4;
  --sync-avatar-color-6: #3584e4;
  --sync-avatar-color-7: #9141ac;
  --tab-background-active: hsl(0, 0%, 98%);
  --tab-container-background: hsl(0, 0%, 92%);
  --tab-outline-color: hsl(0, 0%, 92%);
  --tab-scroll-mask-color: #DBDBDB;
  --tab-stacked-header-width: 44px;
  --tab-switcher-background: hsl(0, 0%, 92%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 92%), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(213, 88%, 66%);
  --tab-text-color-focused-highlighted: #1c71d8;
  --table-drag-handle-background-active: #3584e4;
  --table-selection: hsla(213, 88%, 66%, 0.1);
  --table-selection-border-color: #3584e4;
  --tag-background: hsla(213, 88%, 66%, 0.1);
  --tag-background-hover: hsla(213, 88%, 66%, 0.2);
  --tag-border-color: hsla(213, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(213, 88%, 66%, 0.15);
  --tag-color: #1c71d8;
  --tag-color-hover: #1c71d8;
  --tertiary: var(--text-accent-hover, #3584e4);
  --text-accent: #1c71d8;
  --text-accent-hover: #3584e4;
  --text-error: #e01b24;
  --text-selection: hsla(213, 88%, 66%, 0.2);
  --text-success: #33d17a;
  --text-warning: #ff7800;
  --textHighlight: var(--background-modifier-hover, #8883);
  --titleFont: var(--font-interface, system-ui);
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

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(235, 235, 235);
}`,
    typography: `html[saved-theme="light"] body h1.article-title {
  font-weight: 600;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(53, 132, 228);
  border-color: rgb(53, 132, 228);
}

html[saved-theme="light"] body p {
  font-family: system-ui;
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(28, 113, 216);
  outline: rgb(28, 113, 216) none 0px;
  text-decoration-color: rgb(28, 113, 216);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(28, 113, 216);
  outline: rgb(28, 113, 216) none 0px;
  text-decoration-color: rgb(28, 113, 216);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(28, 113, 216);
  outline: rgb(28, 113, 216) none 0px;
  text-decoration: underline rgba(92, 161, 245, 0.3);
  text-decoration-color: rgba(92, 161, 245, 0.3);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(53, 132, 228);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(235, 235, 235);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body th {
  border-bottom-style: double;
  border-bottom-width: 3px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(235, 235, 235);
}`,
    images: `html[saved-theme="light"] body figcaption {
  font-family: system-ui;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(242, 242, 242);
}

html[saved-theme="light"] body .transclude {
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

html[saved-theme="light"] body .transclude-inner {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 165, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(52, 170, 180);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(53, 132, 228);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 27, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 27, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 27, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 27, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(53, 132, 228);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 165, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 165, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(145, 65, 172);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 27, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 209, 122);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 209, 122);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 209, 122);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 94,  92, 100;
  border-bottom-color: rgb(94, 92, 100);
  border-left-color: rgb(94, 92, 100);
  border-right-color: rgb(94, 92, 100);
  border-top-color: rgb(94, 92, 100);
  color: rgb(94, 92, 100);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(94, 92, 100);
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 52, 170, 180;
  background: rgba(52, 170, 180, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 94,  92, 100;
  border-bottom-color: rgb(94, 92, 100);
  border-left-color: rgb(94, 92, 100);
  border-right-color: rgb(94, 92, 100);
  border-top-color: rgb(94, 92, 100);
  color: rgb(94, 92, 100);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 92, 100);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 224,  27,  36;
  background: rgba(224, 27, 36, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 94,  92, 100;
  border-bottom-color: rgb(94, 92, 100);
  border-left-color: rgb(94, 92, 100);
  border-right-color: rgb(94, 92, 100);
  border-top-color: rgb(94, 92, 100);
  color: rgb(94, 92, 100);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 92, 100);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 224,  27,  36;
  background: rgba(224, 27, 36, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 94,  92, 100;
  border-bottom-color: rgb(94, 92, 100);
  border-left-color: rgb(94, 92, 100);
  border-right-color: rgb(94, 92, 100);
  border-top-color: rgb(94, 92, 100);
  color: rgb(94, 92, 100);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 92, 100);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 145,  65, 172;
  background: rgba(145, 65, 172, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 94,  92, 100;
  border-bottom-color: rgb(94, 92, 100);
  border-left-color: rgb(94, 92, 100);
  border-right-color: rgb(94, 92, 100);
  border-top-color: rgb(94, 92, 100);
  color: rgb(94, 92, 100);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 92, 100);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 224,  27,  36;
  background: rgba(224, 27, 36, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 94,  92, 100;
  border-bottom-color: rgb(94, 92, 100);
  border-left-color: rgb(94, 92, 100);
  border-right-color: rgb(94, 92, 100);
  border-top-color: rgb(94, 92, 100);
  color: rgb(94, 92, 100);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 92, 100);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 53, 132, 228;
  background: rgba(53, 132, 228, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 94,  92, 100;
  border-bottom-color: rgb(94, 92, 100);
  border-left-color: rgb(94, 92, 100);
  border-right-color: rgb(94, 92, 100);
  border-top-color: rgb(94, 92, 100);
  color: rgb(94, 92, 100);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 92, 100);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 94,  92, 100;
  background: rgba(94, 92, 100, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 94,  92, 100;
  border-bottom-color: rgb(94, 92, 100);
  border-left-color: rgb(94, 92, 100);
  border-right-color: rgb(94, 92, 100);
  border-top-color: rgb(94, 92, 100);
  color: rgb(94, 92, 100);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 92, 100);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 229, 165,  10;
  background: rgba(229, 165, 10, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 94,  92, 100;
  border-bottom-color: rgb(94, 92, 100);
  border-left-color: rgb(94, 92, 100);
  border-right-color: rgb(94, 92, 100);
  border-top-color: rgb(94, 92, 100);
  color: rgb(94, 92, 100);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 92, 100);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 152, 106,  68;
  background: rgba(152, 106, 68, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 94,  92, 100;
  border-bottom-color: rgb(94, 92, 100);
  border-left-color: rgb(94, 92, 100);
  border-right-color: rgb(94, 92, 100);
  border-top-color: rgb(94, 92, 100);
  color: rgb(94, 92, 100);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 92, 100);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 46, 194, 126;
  background: rgba(46, 194, 126, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 94,  92, 100;
  border-bottom-color: rgb(94, 92, 100);
  border-left-color: rgb(94, 92, 100);
  border-right-color: rgb(94, 92, 100);
  border-top-color: rgb(94, 92, 100);
  color: rgb(94, 92, 100);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 92, 100);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 52, 170, 180;
  background: rgba(52, 170, 180, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 94,  92, 100;
  border-bottom-color: rgb(94, 92, 100);
  border-left-color: rgb(94, 92, 100);
  border-right-color: rgb(94, 92, 100);
  border-top-color: rgb(94, 92, 100);
  color: rgb(94, 92, 100);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 92, 100);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 53, 132, 228;
  background: rgba(53, 132, 228, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
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

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 94,  92, 100;
  border-bottom-color: rgb(94, 92, 100);
  border-left-color: rgb(94, 92, 100);
  border-right-color: rgb(94, 92, 100);
  border-top-color: rgb(94, 92, 100);
  color: rgb(94, 92, 100);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 92, 100);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 255, 120,   0;
  background: rgba(255, 120, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 120, 0, 0.1);
  border-bottom-color: rgba(255, 120, 0, 0.25);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(255, 120, 0, 0.25);
  border-right-color: rgba(255, 120, 0, 0.25);
  border-top-color: rgba(255, 120, 0, 0.25);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 94,  92, 100;
  border-bottom-color: rgb(94, 92, 100);
  border-left-color: rgb(94, 92, 100);
  border-right-color: rgb(94, 92, 100);
  border-top-color: rgb(94, 92, 100);
  color: rgb(94, 92, 100);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 92, 100);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
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
  background-color: rgba(0, 0, 0, 0.067);
  font-family: system-ui;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(250, 250, 250);
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(136, 136, 136, 0.2);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgba(0, 0, 0, 0.067);
  border-bottom-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(136, 136, 136, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(136, 136, 136, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(28, 113, 216);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
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
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: system-ui;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: system-ui;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(235, 235, 235);
  font-family: system-ui;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: system-ui;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: system-ui;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: system-ui;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(34, 34, 34);
  stroke: rgb(34, 34, 34);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  font-family: system-ui;
}`,
    canvas: `html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(250, 250, 250);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(92, 161, 245, 0.1);
  border-radius: 24.36px;
  color: rgb(28, 113, 216);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(250, 250, 250);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(235, 235, 235);
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: system-ui;
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgba(0, 0, 0, 0.067);
  font-family: system-ui;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(92, 161, 245, 0.1);
  border-bottom-color: rgba(92, 161, 245, 0.15);
  border-left-color: rgba(92, 161, 245, 0.15);
  border-right-color: rgba(92, 161, 245, 0.15);
  border-top-color: rgba(92, 161, 245, 0.15);
  color: rgb(28, 113, 216);
}`,
  },
  classSettings: {
    "hide-window-buttons": `.hide-window-buttons {
--window-buttons: none;
--frame-right-space: 48px
;
}`,
    "hide-only-tab_full": `.hide-only-tab_full {
--only-tab-display: none;
}`,
    "hide-only-tab_interactive": `.hide-only-tab_interactive {
--only-tab-background: transparent;
--only-tab-background-hover: transparent;
--only-tab-background-active: var(--background-hover);
--only-tab-text: transparent;
--only-tab-text-hover: var(--text-faint);
--only-tab-close-button: var(--background-active);
}`,
  },
};
