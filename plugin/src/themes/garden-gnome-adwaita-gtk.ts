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
  --accent-h: 213 !important;
  --background-active: hsla(0, 0%, 100%, 0.133) !important;
  --background-active-hover: hsla(0, 0%, 100%, 0.2) !important;
  --background-double-active: hsla(0, 0%, 100%, 0.267) !important;
  --background-hover: hsla(0, 0%, 100%, 0.067) !important;
  --background-modifier-active-hover: hsla(213, 88%, 66%, 0.1) !important;
  --background-modifier-error: #e01b24 !important;
  --background-modifier-error-hover: #e01b24 !important;
  --background-modifier-error-rgb: 224,  27,  36 !important;
  --background-modifier-hover: #8883 !important;
  --background-modifier-success: #33d17a !important;
  --background-modifier-success-rgb: 51, 209, 122 !important;
  --background-primary: hsl(220, 3%, 12%) !important;
  --background-primary-alt: hsl(290, 1%, 15%) !important;
  --background-secondary: hsl(0, 0%, 19%) !important;
  --bases-cards-background: hsl(220, 3%, 12%) !important;
  --bases-cards-cover-background: hsl(290, 1%, 15%) !important;
  --bases-table-cell-background-active: hsl(220, 3%, 12%) !important;
  --bases-table-cell-background-disabled: hsl(290, 1%, 15%) !important;
  --bases-table-cell-background-selected: hsla(213, 88%, 66%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #3584e4 !important;
  --bases-table-group-background: hsl(290, 1%, 15%) !important;
  --bases-table-header-background: hsl(220, 3%, 12%) !important;
  --bases-table-header-background-hover: #8883 !important;
  --bases-table-summary-background: hsl(220, 3%, 12%) !important;
  --bases-table-summary-background-hover: #8883 !important;
  --blockquote-background-color: hsl(0, 0%, 19%) !important;
  --blockquote-border-color: #3584e4 !important;
  --blockquote-border-thickness: 0 !important;
  --blue-1: #99c1f1 !important;
  --blue-1-rgb: 153, 193, 241 !important;
  --blue-2: #62a0ea !important;
  --blue-2-rgb: 98, 160, 234 !important;
  --blue-3: #3584e4 !important;
  --blue-3-rgb: 53, 132, 228 !important;
  --blue-4: #1c71d8 !important;
  --blue-4-rgb: 28, 113, 216 !important;
  --blue-5: #1a5fb4 !important;
  --blue-5-rgb: 26,  95, 180 !important;
  --bodyFont: system-ui !important;
  --brown-1: #cdab8f !important;
  --brown-1-rgb: 205, 171, 143 !important;
  --brown-2: #b5835a !important;
  --brown-2-rgb: 181, 131,  90 !important;
  --brown-3: #986a44 !important;
  --brown-3-rgb: 152, 106,  68 !important;
  --brown-4: #865e3c !important;
  --brown-4-rgb: 134,  94,  60 !important;
  --brown-5: #63452c !important;
  --brown-5-rgb: 99,  69,  44 !important;
  --button-transition: linear 100ms background-color !important;
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
  --canvas-background: hsl(220, 3%, 12%) !important;
  --canvas-color-1: 224,  27,  36 !important;
  --canvas-color-2: 255, 120,   0 !important;
  --canvas-color-3: 246, 211,  45 !important;
  --canvas-color-4: 51, 209, 122 !important;
  --canvas-color-5: 52, 170, 180 !important;
  --canvas-color-6: 145,  65, 172 !important;
  --checkbox-color: #3584e4 !important;
  --checkbox-color-hover: hsl(210, 89.76%, 75.9%) !important;
  --checkbox-marker-color: hsl(220, 3%, 12%) !important;
  --code-background: hsl(0, 0%, 19%) !important;
  --code-bracket-background: #8883 !important;
  --code-function: #f6d32d !important;
  --code-important: #ff7800 !important;
  --code-operator: #e01b24 !important;
  --code-property: #34aab4 !important;
  --code-string: #33d17a !important;
  --code-tag: #e01b24 !important;
  --code-value: #9141ac !important;
  --codeFont: system-ui !important;
  --collapse-icon-color: #b3b3b3 !important;
  --collapse-icon-color-collapsed: #666666 !important;
  --color-accent: hsl(213, 88%, 66%) !important;
  --color-accent-1: hsl(210, 89.76%, 75.9%) !important;
  --color-accent-2: hsl(208, 92.4%, 85.14%) !important;
  --color-accent-hsl: 213, 88%, 66% !important;
  --color-blue: #3584e4 !important;
  --color-blue-rgb: 53, 132, 228 !important;
  --color-cyan: #34aab4 !important;
  --color-cyan-rgb: 52, 170, 180 !important;
  --color-green: #33d17a !important;
  --color-green-rgb: 51, 209, 122 !important;
  --color-invert-filter-b: invert() !important;
  --color-invert-filter-w: none !important;
  --color-orange: #ff7800 !important;
  --color-orange-rgb: 255, 120,   0 !important;
  --color-purple: #9141ac !important;
  --color-purple-rgb: 145,  65, 172 !important;
  --color-red: #e01b24 !important;
  --color-red-rgb: 224,  27,  36 !important;
  --color-yellow: #f6d32d !important;
  --color-yellow-rgb: 246, 211,  45 !important;
  --cyan-1: #94d8ca !important;
  --cyan-1-rgb: 148, 216, 202 !important;
  --cyan-2: #5ca0b9 !important;
  --cyan-2-rgb: 92, 160, 185 !important;
  --cyan-3: #34aab4 !important;
  --cyan-3-rgb: 52, 170, 180 !important;
  --cyan-4: #2599ab !important;
  --cyan-4-rgb: 37, 153, 171 !important;
  --cyan-5: #20808e !important;
  --cyan-5-rgb: 32, 128, 142 !important;
  --dark-1: #77767b !important;
  --dark-1-rgb: 119, 118, 123 !important;
  --dark-2: #5e5c64 !important;
  --dark-2-rgb: 94,  92, 100 !important;
  --dark-3: #3d3846 !important;
  --dark-3-rgb: 61,  56,  70 !important;
  --dark-4: #241f31 !important;
  --dark-4-rgb: 36,  31,  49 !important;
  --dark-5: #000000 !important;
  --dark-5-rgb: 0,   0,   0 !important;
  --divider-color-hover: #3584e4 !important;
  --embed-border-left: none !important;
  --embed-border-start: 2px solid #3584e4 !important;
  --embed-max-height: 80vh !important;
  --file-header-background: hsl(220, 3%, 12%) !important;
  --file-header-background-focused: hsl(220, 3%, 12%) !important;
  --file-header-font: system-ui !important;
  --file-header-font-weight: 600 !important;
  --font-interface: system-ui !important;
  --footnote-input-background-active: #8883 !important;
  --frame-right-space: 48px !important;
  --graph-node-attachment: #f6d32d !important;
  --graph-node-focused: #62a0ea !important;
  --graph-node-tag: #33d17a !important;
  --green-1: #8ff0a4 !important;
  --green-1-rgb: 143, 240, 164 !important;
  --green-2: #57e389 !important;
  --green-2-rgb: 87, 227, 137 !important;
  --green-3: #33d17a !important;
  --green-3-rgb: 51, 209, 122 !important;
  --green-4: #2ec27e !important;
  --green-4-rgb: 46, 194, 126 !important;
  --green-5: #26a269 !important;
  --green-5-rgb: 38, 162, 105 !important;
  --header-height: 44px !important;
  --headerFont: system-ui !important;
  --highlight: #8883 !important;
  --icon-color: #dadada !important;
  --icon-color-active: #62a0ea !important;
  --icon-l: 16px !important;
  --icon-l-stroke-width: 2.5px !important;
  --icon-stroke: 2.5px !important;
  --input-font-weight: bold !important;
  --input-height: 36px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: #3584e4 !important;
  --interactive-accent-hover: hsl(210, 89.76%, 75.9%) !important;
  --interactive-accent-hsl: 213, 88%, 66% !important;
  --invert-filter-b: invert() hue-rotate(180deg) !important;
  --invert-filter-w: none !important;
  --light: hsl(220, 3%, 12%) !important;
  --light-1: #ffffff !important;
  --light-1-rgb: 255, 255, 255 !important;
  --light-2: #f6f5f4 !important;
  --light-2-rgb: 246, 245, 244 !important;
  --light-3: #deddda !important;
  --light-3-rgb: 222, 221, 218 !important;
  --light-4: #c0bfbc !important;
  --light-4-rgb: 192, 191, 188 !important;
  --light-5: #9a9996 !important;
  --light-5-rgb: 154, 153, 150 !important;
  --lightgray: hsl(0, 0%, 19%) !important;
  --link-color: #62a0ea !important;
  --link-color-hover: #99c1f1 !important;
  --link-external-color: #62a0ea !important;
  --link-external-color-hover: #99c1f1 !important;
  --link-unresolved-color: #62a0ea !important;
  --link-unresolved-decoration-color: hsla(213, 88%, 66%, 0.3) !important;
  --list-marker-color: #b3b3b3 !important;
  --list-marker-color-collapsed: #62a0ea !important;
  --menu-background: hsl(0, 0%, 19%) !important;
  --metadata-input-background-active: #8883 !important;
  --metadata-input-font: system-ui !important;
  --metadata-label-background-active: #8883 !important;
  --metadata-label-font: system-ui !important;
  --metadata-property-background-active: #8883 !important;
  --modal-background: hsl(220, 3%, 12%) !important;
  --modal-border-color: #363636 !important;
  --nav-collapse-icon-color: #b3b3b3 !important;
  --nav-indentation-guide-width: 0 !important;
  --nav-item-background-active: #8883 !important;
  --nav-item-background-hover: #8883 !important;
  --nav-item-background-selected: hsla(213, 88%, 66%, 0.15) !important;
  --nav-item-color-highlighted: #62a0ea !important;
  --nav-item-padding: 6px !important;
  --nav-item-parent-padding: 6px !important;
  --only-tab-background: transparent !important;
  --only-tab-background-active: hsla(0, 0%, 100%, 0.067) !important;
  --only-tab-background-hover: transparent !important;
  --only-tab-close-button: hsla(0, 0%, 100%, 0.133) !important;
  --only-tab-display: flex !important;
  --only-tab-text: transparent !important;
  --only-tab-text-hover: #666666 !important;
  --orange-1: #ffbe6f !important;
  --orange-1-rgb: 255, 190, 111 !important;
  --orange-2: #ffa348 !important;
  --orange-2-rgb: 255, 163,  72 !important;
  --orange-3: #ff7800 !important;
  --orange-3-rgb: 255, 120,   0 !important;
  --orange-4: #e66100 !important;
  --orange-4-rgb: 230,  97,   0 !important;
  --orange-5: #c64600 !important;
  --orange-5-rgb: 198,  70,   0 !important;
  --padding-frame: 8px 12px !important;
  --padding-frame-h: 12px !important;
  --padding-frame-v: 8px !important;
  --pdf-background: hsl(220, 3%, 12%) !important;
  --pdf-page-background: hsl(220, 3%, 12%) !important;
  --pdf-sidebar-background: hsl(220, 3%, 12%) !important;
  --pill-color-remove-hover: #62a0ea !important;
  --prompt-background: hsl(220, 3%, 12%) !important;
  --prompt-border-width: 0 !important;
  --purple-1: #dc8add !important;
  --purple-1-rgb: 220, 138, 221 !important;
  --purple-2: #c061cb !important;
  --purple-2-rgb: 192,  97, 203 !important;
  --purple-3: #9141ac !important;
  --purple-3-rgb: 145,  65, 172 !important;
  --purple-4: #813d9c !important;
  --purple-4-rgb: 129,  61, 156 !important;
  --purple-5: #613583 !important;
  --purple-5-rgb: 97,  53, 131 !important;
  --red-1: #f66151 !important;
  --red-1-rgb: 246,  97,  81 !important;
  --red-2: #ed333b !important;
  --red-2-rgb: 237,  51,  59 !important;
  --red-3: #e01b24 !important;
  --red-3-rgb: 224,  27,  36 !important;
  --red-4: #c01c28 !important;
  --red-4-rgb: 192,  28,  40 !important;
  --red-5: #a51d2d !important;
  --red-5-rgb: 165,  29,  45 !important;
  --ribbon-background: hsl(0, 0%, 19%) !important;
  --ribbon-background-collapsed: hsl(220, 3%, 12%) !important;
  --rounded-corner-element: 6px !important;
  --rounded-corner-frame: 12px !important;
  --search-result-background: hsl(220, 3%, 12%) !important;
  --secondary: #62a0ea !important;
  --setting-items-background: hsl(290, 1%, 15%) !important;
  --shadow-frame: #0002 0 2px 6px !important;
  --status-bar-background: hsl(0, 0%, 19%) !important;
  --suggestion-background: hsl(220, 3%, 12%) !important;
  --sync-avatar-color-1: #e01b24 !important;
  --sync-avatar-color-2: #ff7800 !important;
  --sync-avatar-color-3: #f6d32d !important;
  --sync-avatar-color-4: #33d17a !important;
  --sync-avatar-color-5: #34aab4 !important;
  --sync-avatar-color-6: #3584e4 !important;
  --sync-avatar-color-7: #9141ac !important;
  --tab-background-active: hsl(220, 3%, 12%) !important;
  --tab-container-background: hsl(0, 0%, 19%) !important;
  --tab-outline-color: hsl(0, 0%, 19%) !important;
  --tab-scroll-mask-color: #3E3E3E !important;
  --tab-stacked-header-width: 44px !important;
  --tab-switcher-background: hsl(0, 0%, 19%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 19%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(213, 88%, 66%) !important;
  --tab-text-color-focused-highlighted: #62a0ea !important;
  --table-drag-handle-background-active: #3584e4 !important;
  --table-selection: hsla(213, 88%, 66%, 0.1) !important;
  --table-selection-border-color: #3584e4 !important;
  --tag-background: hsla(213, 88%, 66%, 0.1) !important;
  --tag-background-hover: hsla(213, 88%, 66%, 0.2) !important;
  --tag-border-color: hsla(213, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(213, 88%, 66%, 0.15) !important;
  --tag-color: #62a0ea !important;
  --tag-color-hover: #62a0ea !important;
  --tertiary: #99c1f1 !important;
  --text-accent: #62a0ea !important;
  --text-accent-hover: #99c1f1 !important;
  --text-error: #e01b24 !important;
  --text-selection: hsla(213, 88%, 66%, 0.33) !important;
  --text-success: #33d17a !important;
  --text-warning: #ff7800 !important;
  --textHighlight: #8883 !important;
  --titleFont: system-ui !important;
  --titlebar-background: hsl(290, 1%, 15%) !important;
  --titlebar-background-focused: hsl(0, 0%, 19%) !important;
  --toggle-thumb-height: 23px !important;
  --toggle-thumb-width: 22px !important;
  --toggle-width: 48px !important;
  --traffic-lights-offset-x: 44px !important;
  --traffic-lights-offset-y: 44px !important;
  --window-buttons: none !important;
  --yellow-1: #f9f06b !important;
  --yellow-1-rgb: 249, 240, 107 !important;
  --yellow-2: #f8e45c !important;
  --yellow-2-rgb: 248, 228,  92 !important;
  --yellow-3: #f6d32d !important;
  --yellow-3-rgb: 246, 211,  45 !important;
  --yellow-4: #f5c211 !important;
  --yellow-4-rgb: 245, 194,  17 !important;
  --yellow-5: #e5a50a !important;
  --yellow-5-rgb: 229, 165,  10 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(30, 30, 32);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(92, 161, 245, 0.1);
  border-radius: 24.36px;
  color: rgb(98, 160, 234);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(30, 30, 32);
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
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(98, 160, 234);
  outline: rgb(98, 160, 234) none 0px;
  text-decoration-color: rgb(98, 160, 234);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(98, 160, 234);
  outline: rgb(98, 160, 234) none 0px;
  text-decoration-color: rgb(98, 160, 234);
}

html[saved-theme="dark"] body a.internal.broken {
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
    code: `html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(246, 211, 45);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(246, 211, 45);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(246, 211, 45);
  border-left-color: rgb(246, 211, 45);
  border-right-color: rgb(246, 211, 45);
  border-top-color: rgb(246, 211, 45);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(48, 48, 48);
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
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
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

html[saved-theme="dark"] body .callout[data-callout="bug"] {
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
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

html[saved-theme="dark"] body .callout[data-callout="example"] {
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

html[saved-theme="dark"] body .callout[data-callout="failure"] {
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

html[saved-theme="dark"] body .callout[data-callout="info"] {
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
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

html[saved-theme="dark"] body .callout[data-callout="question"] {
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

html[saved-theme="dark"] body .callout[data-callout="quote"] {
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

html[saved-theme="dark"] body .callout[data-callout="success"] {
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

html[saved-theme="dark"] body .callout[data-callout="tip"] {
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

html[saved-theme="dark"] body .callout[data-callout="todo"] {
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

html[saved-theme="dark"] body .callout[data-callout="warning"] {
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

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body a.internal.tag-link::before {
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
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(30, 30, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(30, 30, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(30, 30, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 30, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 30, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(30, 30, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 32);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: system-ui;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: system-ui;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-width: 0px;
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
    misc: `html[saved-theme="dark"] body .metadata {
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .navigation-progress {
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
  --accent-h: 213 !important;
  --background-active: hsla(0, 0%, 0%, 0.133) !important;
  --background-active-hover: hsla(0, 0%, 0%, 0.2) !important;
  --background-double-active: hsla(0, 0%, 0%, 0.267) !important;
  --background-hover: hsla(0, 0%, 0%, 0.067) !important;
  --background-modifier-active-hover: hsla(213, 88%, 66%, 0.1) !important;
  --background-modifier-error: #e01b24 !important;
  --background-modifier-error-hover: #e01b24 !important;
  --background-modifier-error-rgb: 224,  27,  36 !important;
  --background-modifier-hover: #8883 !important;
  --background-modifier-success: #33d17a !important;
  --background-modifier-success-rgb: 51, 209, 122 !important;
  --background-primary: hsl(0, 0%, 98%) !important;
  --background-primary-alt: hsl(0, 0%, 95%) !important;
  --background-secondary: hsl(0, 0%, 92%) !important;
  --bases-cards-background: hsl(0, 0%, 98%) !important;
  --bases-cards-cover-background: hsl(0, 0%, 95%) !important;
  --bases-table-cell-background-active: hsl(0, 0%, 98%) !important;
  --bases-table-cell-background-disabled: hsl(0, 0%, 95%) !important;
  --bases-table-cell-background-selected: hsla(213, 88%, 66%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #3584e4 !important;
  --bases-table-group-background: hsl(0, 0%, 95%) !important;
  --bases-table-header-background: hsl(0, 0%, 98%) !important;
  --bases-table-header-background-hover: #8883 !important;
  --bases-table-summary-background: hsl(0, 0%, 98%) !important;
  --bases-table-summary-background-hover: #8883 !important;
  --blockquote-background-color: hsl(0, 0%, 92%) !important;
  --blockquote-border-color: #3584e4 !important;
  --blockquote-border-thickness: 0 !important;
  --blue-1: #99c1f1 !important;
  --blue-1-rgb: 153, 193, 241 !important;
  --blue-2: #62a0ea !important;
  --blue-2-rgb: 98, 160, 234 !important;
  --blue-3: #3584e4 !important;
  --blue-3-rgb: 53, 132, 228 !important;
  --blue-4: #1c71d8 !important;
  --blue-4-rgb: 28, 113, 216 !important;
  --blue-5: #1a5fb4 !important;
  --blue-5-rgb: 26,  95, 180 !important;
  --blur-background: color-mix(in srgb, hsl(0, 0%, 98%) 65%, transparent) linear-gradient(hsl(0, 0%, 98%), color-mix(in srgb, hsl(0, 0%, 98%) 65%, transparent)) !important;
  --bodyFont: system-ui !important;
  --brown-1: #cdab8f !important;
  --brown-1-rgb: 205, 171, 143 !important;
  --brown-2: #b5835a !important;
  --brown-2-rgb: 181, 131,  90 !important;
  --brown-3: #986a44 !important;
  --brown-3-rgb: 152, 106,  68 !important;
  --brown-4: #865e3c !important;
  --brown-4-rgb: 134,  94,  60 !important;
  --brown-5: #63452c !important;
  --brown-5-rgb: 99,  69,  44 !important;
  --button-transition: linear 100ms background-color !important;
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
  --canvas-background: hsl(0, 0%, 98%) !important;
  --canvas-color-1: 224,  27,  36 !important;
  --canvas-color-2: 255, 120,   0 !important;
  --canvas-color-3: 229, 165,  10 !important;
  --canvas-color-4: 51, 209, 122 !important;
  --canvas-color-5: 52, 170, 180 !important;
  --canvas-color-6: 145,  65, 172 !important;
  --checkbox-color: #3584e4 !important;
  --checkbox-color-hover: hsl(210, 89.76%, 75.9%) !important;
  --checkbox-marker-color: hsl(0, 0%, 98%) !important;
  --code-background: hsl(0, 0%, 92%) !important;
  --code-bracket-background: #8883 !important;
  --code-function: #e5a50a !important;
  --code-important: #ff7800 !important;
  --code-operator: #e01b24 !important;
  --code-property: #34aab4 !important;
  --code-string: #33d17a !important;
  --code-tag: #e01b24 !important;
  --code-value: #9141ac !important;
  --codeFont: system-ui !important;
  --collapse-icon-color: #5c5c5c !important;
  --collapse-icon-color-collapsed: #ababab !important;
  --color-accent: hsl(213, 88%, 66%) !important;
  --color-accent-1: hsl(212, 88.88%, 70.95%) !important;
  --color-accent-2: hsl(210, 89.76%, 75.9%) !important;
  --color-accent-hsl: 213, 88%, 66% !important;
  --color-blue: #3584e4 !important;
  --color-blue-rgb: 53, 132, 228 !important;
  --color-cyan: #34aab4 !important;
  --color-cyan-rgb: 52, 170, 180 !important;
  --color-green: #33d17a !important;
  --color-green-rgb: 51, 209, 122 !important;
  --color-invert-filter-b: none !important;
  --color-invert-filter-w: invert() !important;
  --color-orange: #ff7800 !important;
  --color-orange-rgb: 255, 120,   0 !important;
  --color-purple: #9141ac !important;
  --color-purple-rgb: 145,  65, 172 !important;
  --color-red: #e01b24 !important;
  --color-red-rgb: 224,  27,  36 !important;
  --color-yellow: #e5a50a !important;
  --color-yellow-rgb: 229, 165,  10 !important;
  --cyan-1: #94d8ca !important;
  --cyan-1-rgb: 148, 216, 202 !important;
  --cyan-2: #5ca0b9 !important;
  --cyan-2-rgb: 92, 160, 185 !important;
  --cyan-3: #34aab4 !important;
  --cyan-3-rgb: 52, 170, 180 !important;
  --cyan-4: #2599ab !important;
  --cyan-4-rgb: 37, 153, 171 !important;
  --cyan-5: #20808e !important;
  --cyan-5-rgb: 32, 128, 142 !important;
  --dark-1: #77767b !important;
  --dark-1-rgb: 119, 118, 123 !important;
  --dark-2: #5e5c64 !important;
  --dark-2-rgb: 94,  92, 100 !important;
  --dark-3: #3d3846 !important;
  --dark-3-rgb: 61,  56,  70 !important;
  --dark-4: #241f31 !important;
  --dark-4-rgb: 36,  31,  49 !important;
  --dark-5: #000000 !important;
  --dark-5-rgb: 0,   0,   0 !important;
  --divider-color-hover: #3584e4 !important;
  --dropdown-background: hsla(0, 0%, 0%, 0.067) !important;
  --dropdown-background-hover: hsla(0, 0%, 0%, 0.133) !important;
  --embed-border-left: none !important;
  --embed-border-start: 2px solid #3584e4 !important;
  --embed-max-height: 80vh !important;
  --file-header-background: hsl(0, 0%, 98%) !important;
  --file-header-background-focused: hsl(0, 0%, 98%) !important;
  --file-header-font: system-ui !important;
  --file-header-font-weight: 600 !important;
  --flair-background: hsla(0, 0%, 0%, 0.067) !important;
  --font-interface: system-ui !important;
  --footnote-input-background-active: #8883 !important;
  --frame-right-space: 48px !important;
  --graph-node-attachment: #e5a50a !important;
  --graph-node-focused: #1c71d8 !important;
  --graph-node-tag: #33d17a !important;
  --green-1: #8ff0a4 !important;
  --green-1-rgb: 143, 240, 164 !important;
  --green-2: #57e389 !important;
  --green-2-rgb: 87, 227, 137 !important;
  --green-3: #33d17a !important;
  --green-3-rgb: 51, 209, 122 !important;
  --green-4: #2ec27e !important;
  --green-4-rgb: 46, 194, 126 !important;
  --green-5: #26a269 !important;
  --green-5-rgb: 38, 162, 105 !important;
  --header-height: 44px !important;
  --headerFont: system-ui !important;
  --highlight: #8883 !important;
  --icon-color: #222222 !important;
  --icon-color-active: #1c71d8 !important;
  --icon-l: 16px !important;
  --icon-l-stroke-width: 2.5px !important;
  --icon-stroke: 2.5px !important;
  --input-font-weight: bold !important;
  --input-height: 36px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: #3584e4 !important;
  --interactive-accent-hover: hsl(210, 89.76%, 75.9%) !important;
  --interactive-accent-hsl: 213, 88%, 66% !important;
  --interactive-hover: hsla(0, 0%, 0%, 0.133) !important;
  --interactive-normal: hsla(0, 0%, 0%, 0.067) !important;
  --invert-filter-b: none !important;
  --invert-filter-w: invert() hue-rotate(180deg) !important;
  --light: hsl(0, 0%, 98%) !important;
  --light-1: #ffffff !important;
  --light-1-rgb: 255, 255, 255 !important;
  --light-2: #f6f5f4 !important;
  --light-2-rgb: 246, 245, 244 !important;
  --light-3: #deddda !important;
  --light-3-rgb: 222, 221, 218 !important;
  --light-4: #c0bfbc !important;
  --light-4-rgb: 192, 191, 188 !important;
  --light-5: #9a9996 !important;
  --light-5-rgb: 154, 153, 150 !important;
  --lightgray: hsl(0, 0%, 92%) !important;
  --link-color: #1c71d8 !important;
  --link-color-hover: #3584e4 !important;
  --link-external-color: #1c71d8 !important;
  --link-external-color-hover: #3584e4 !important;
  --link-unresolved-color: #1c71d8 !important;
  --link-unresolved-decoration-color: hsla(213, 88%, 66%, 0.3) !important;
  --list-marker-color: #5c5c5c !important;
  --list-marker-color-collapsed: #1c71d8 !important;
  --menu-background: hsl(0, 0%, 92%) !important;
  --metadata-input-background-active: #8883 !important;
  --metadata-input-font: system-ui !important;
  --metadata-label-background-active: #8883 !important;
  --metadata-label-font: system-ui !important;
  --metadata-property-background-active: #8883 !important;
  --modal-background: hsl(0, 0%, 98%) !important;
  --modal-border-color: #fcfcfc !important;
  --nav-collapse-icon-color: #5c5c5c !important;
  --nav-indentation-guide-width: 0 !important;
  --nav-item-background-active: #8883 !important;
  --nav-item-background-hover: #8883 !important;
  --nav-item-background-selected: hsla(213, 88%, 66%, 0.15) !important;
  --nav-item-color-highlighted: #1c71d8 !important;
  --nav-item-padding: 6px !important;
  --nav-item-parent-padding: 6px !important;
  --only-tab-background: transparent !important;
  --only-tab-background-active: hsla(0, 0%, 0%, 0.067) !important;
  --only-tab-background-hover: transparent !important;
  --only-tab-close-button: hsla(0, 0%, 0%, 0.133) !important;
  --only-tab-display: flex !important;
  --only-tab-text: transparent !important;
  --only-tab-text-hover: #ababab !important;
  --orange-1: #ffbe6f !important;
  --orange-1-rgb: 255, 190, 111 !important;
  --orange-2: #ffa348 !important;
  --orange-2-rgb: 255, 163,  72 !important;
  --orange-3: #ff7800 !important;
  --orange-3-rgb: 255, 120,   0 !important;
  --orange-4: #e66100 !important;
  --orange-4-rgb: 230,  97,   0 !important;
  --orange-5: #c64600 !important;
  --orange-5-rgb: 198,  70,   0 !important;
  --padding-frame: 8px 12px !important;
  --padding-frame-h: 12px !important;
  --padding-frame-v: 8px !important;
  --pdf-background: hsl(0, 0%, 98%) !important;
  --pdf-page-background: hsl(0, 0%, 98%) !important;
  --pdf-sidebar-background: hsl(0, 0%, 98%) !important;
  --pill-color-remove-hover: #1c71d8 !important;
  --prompt-background: hsl(0, 0%, 98%) !important;
  --prompt-border-width: 0 !important;
  --purple-1: #dc8add !important;
  --purple-1-rgb: 220, 138, 221 !important;
  --purple-2: #c061cb !important;
  --purple-2-rgb: 192,  97, 203 !important;
  --purple-3: #9141ac !important;
  --purple-3-rgb: 145,  65, 172 !important;
  --purple-4: #813d9c !important;
  --purple-4-rgb: 129,  61, 156 !important;
  --purple-5: #613583 !important;
  --purple-5-rgb: 97,  53, 131 !important;
  --raised-background: color-mix(in srgb, hsl(0, 0%, 98%) 65%, transparent) linear-gradient(hsl(0, 0%, 98%), color-mix(in srgb, hsl(0, 0%, 98%) 65%, transparent)) !important;
  --red-1: #f66151 !important;
  --red-1-rgb: 246,  97,  81 !important;
  --red-2: #ed333b !important;
  --red-2-rgb: 237,  51,  59 !important;
  --red-3: #e01b24 !important;
  --red-3-rgb: 224,  27,  36 !important;
  --red-4: #c01c28 !important;
  --red-4-rgb: 192,  28,  40 !important;
  --red-5: #a51d2d !important;
  --red-5-rgb: 165,  29,  45 !important;
  --ribbon-background: hsl(0, 0%, 92%) !important;
  --ribbon-background-collapsed: hsl(0, 0%, 98%) !important;
  --rounded-corner-element: 6px !important;
  --rounded-corner-frame: 12px !important;
  --search-result-background: hsl(0, 0%, 98%) !important;
  --secondary: #1c71d8 !important;
  --setting-items-background: hsl(0, 0%, 95%) !important;
  --shadow-frame: #0002 0 2px 6px !important;
  --status-bar-background: hsl(0, 0%, 92%) !important;
  --suggestion-background: hsl(0, 0%, 98%) !important;
  --sync-avatar-color-1: #e01b24 !important;
  --sync-avatar-color-2: #ff7800 !important;
  --sync-avatar-color-3: #e5a50a !important;
  --sync-avatar-color-4: #33d17a !important;
  --sync-avatar-color-5: #34aab4 !important;
  --sync-avatar-color-6: #3584e4 !important;
  --sync-avatar-color-7: #9141ac !important;
  --tab-background-active: hsl(0, 0%, 98%) !important;
  --tab-container-background: hsl(0, 0%, 92%) !important;
  --tab-outline-color: hsl(0, 0%, 92%) !important;
  --tab-scroll-mask-color: #DBDBDB !important;
  --tab-stacked-header-width: 44px !important;
  --tab-switcher-background: hsl(0, 0%, 92%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 92%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(213, 88%, 66%) !important;
  --tab-text-color-focused-highlighted: #1c71d8 !important;
  --table-drag-handle-background-active: #3584e4 !important;
  --table-selection: hsla(213, 88%, 66%, 0.1) !important;
  --table-selection-border-color: #3584e4 !important;
  --tag-background: hsla(213, 88%, 66%, 0.1) !important;
  --tag-background-hover: hsla(213, 88%, 66%, 0.2) !important;
  --tag-border-color: hsla(213, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(213, 88%, 66%, 0.15) !important;
  --tag-color: #1c71d8 !important;
  --tag-color-hover: #1c71d8 !important;
  --tertiary: #3584e4 !important;
  --text-accent: #1c71d8 !important;
  --text-accent-hover: #3584e4 !important;
  --text-error: #e01b24 !important;
  --text-selection: hsla(213, 88%, 66%, 0.2) !important;
  --text-success: #33d17a !important;
  --text-warning: #ff7800 !important;
  --textHighlight: #8883 !important;
  --titleFont: system-ui !important;
  --titlebar-background: #ffffff !important;
  --titlebar-background-focused: #ffffff !important;
  --toggle-thumb-height: 23px !important;
  --toggle-thumb-width: 22px !important;
  --toggle-width: 48px !important;
  --traffic-lights-offset-x: 44px !important;
  --traffic-lights-offset-y: 44px !important;
  --window-buttons: none !important;
  --yellow-1: #f9f06b !important;
  --yellow-1-rgb: 249, 240, 107 !important;
  --yellow-2: #f8e45c !important;
  --yellow-2-rgb: 248, 228,  92 !important;
  --yellow-3: #f6d32d !important;
  --yellow-3-rgb: 246, 211,  45 !important;
  --yellow-4: #f5c211 !important;
  --yellow-4-rgb: 245, 194,  17 !important;
  --yellow-5: #e5a50a !important;
  --yellow-5-rgb: 229, 165,  10 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(92, 161, 245, 0.1);
  border-radius: 24.36px;
  color: rgb(28, 113, 216);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(250, 250, 250);
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
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(28, 113, 216);
  outline: rgb(28, 113, 216) none 0px;
  text-decoration-color: rgb(28, 113, 216);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(28, 113, 216);
  outline: rgb(28, 113, 216) none 0px;
  text-decoration-color: rgb(28, 113, 216);
}

html[saved-theme="light"] body a.internal.broken {
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
    code: `html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(229, 165, 10);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 165, 10);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 165, 10);
  border-left-color: rgb(229, 165, 10);
  border-right-color: rgb(229, 165, 10);
  border-top-color: rgb(229, 165, 10);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(235, 235, 235);
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
    callouts: `html[saved-theme="light"] body .callout .callout-title {
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

html[saved-theme="light"] body .callout[data-callout="bug"] {
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
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

html[saved-theme="light"] body .callout[data-callout="example"] {
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

html[saved-theme="light"] body .callout[data-callout="failure"] {
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

html[saved-theme="light"] body .callout[data-callout="info"] {
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

html[saved-theme="light"] body .callout[data-callout="note"] {
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

html[saved-theme="light"] body .callout[data-callout="question"] {
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

html[saved-theme="light"] body .callout[data-callout="quote"] {
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

html[saved-theme="light"] body .callout[data-callout="success"] {
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

html[saved-theme="light"] body .callout[data-callout="tip"] {
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

html[saved-theme="light"] body .callout[data-callout="todo"] {
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

html[saved-theme="light"] body .callout[data-callout="warning"] {
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

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body a.internal.tag-link::before {
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
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: system-ui;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: system-ui;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-width: 0px;
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
    misc: `html[saved-theme="light"] body .metadata {
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .navigation-progress {
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
};
