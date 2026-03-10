import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "rose-red", modes: ["dark"], variations: [], fonts: ["hack"] },
  dark: {
    base: `:root:root {
  --accent-h: 135;
  --accent-l: 65%;
  --accent-s: 94%;
  --background-modifier-active-hover: rgba(82, 250, 124, 0.1);
  --background-modifier-border-hover: #976262;
  --background-primary: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --background-primary-alt: #6e021a81;
  --background-red: #6c0808;
  --background-secondary: #560000;
  --background-secondary-alt: #560000b7;
  --bases-cards-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --bases-cards-cover-background: #6e021a81;
  --bases-cards-shadow-hover: 0 0 0 1px #976262;
  --bases-group-heading-property-color: #bababa;
  --bases-table-cell-background-active: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --bases-table-cell-background-disabled: #6e021a81;
  --bases-table-cell-background-selected: rgba(82, 250, 124, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #50fa7b;
  --bases-table-group-background: #6e021a81;
  --bases-table-header-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --bases-table-header-color: #bababa;
  --bases-table-summary-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --blockquote-border: #b294bb;
  --blockquote-border-color: #50fa7b;
  --bodyFont: var(--font-text);
  --canvas-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --canvas-color-1: 255, 85, 85;
  --canvas-color-2: 255, 184, 108;
  --canvas-color-3: 241, 250, 140;
  --canvas-color-4: 82, 250, 124;
  --canvas-color-5: 139, 233, 253;
  --canvas-color-6: 189, 147, 244;
  --caret-color: #f8f8f2;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #50fa7b;
  --checkbox-color-hover: rgb(62, 249, 109);
  --checkbox-marker-color: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --checklist-done-color: #bababa;
  --code-background: #282a36;
  --code-normal: #F8F8F2;
  --code-punctuation: #bababa;
  --codeFont: var(--font-monospace);
  --collapse-icon-color-collapsed: rgb(62, 249, 109);
  --color-accent: rgb(82, 250, 124);
  --color-accent-1: rgb(62, 249, 109);
  --color-accent-2: rgb(102, 250, 139);
  --color-accent-hsl: 135, 94%, 65%;
  --color-base-35: #976262;
  --color-base-70: #bababa;
  --color-scheme: dark;
  --dark: var(--text-normal);
  --dark-linear-gradient: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --dark0: #390000;
  --dark1: #290202;
  --dark2: #3d0404;
  --dark3: #5c1818;
  --darkgray: var(--text-normal);
  --divider-color-hover: #50fa7b;
  --dracula-Comment: #6272A4;
  --dracula-definition: #50FA7B;
  --dracula-foreground: #F8F8F2;
  --dracula-function: #8BE9FD;
  --dracula-keyword: #FF79C6;
  --dracula-number: #BD93F9;
  --dracula-string: #F1FA8C;
  --dracula-variable: #F8F8F2;
  --dropdown-background-hover: #976262;
  --embed-border-start: 2px solid #50fa7b;
  --file-header-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --file-header-background-focused: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --flair-color: #f8f8f2;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  --footnote-id-color: #bababa;
  --frost0: #B50505;
  --frost1: #cc0d0d;
  --frost2: #81a1c1;
  --frost3: #FF9CFA;
  --graph-line: #976262;
  --graph-node: #bababa;
  --graph-node-focused: rgb(62, 249, 109);
  --graph-text: #f8f8f2;
  --gray: var(--text-muted);
  --green: #b0f078;
  --headerFont: var(--font-text);
  --highlight: var(--background-modifier-active-hover);
  --icon-color: #bababa;
  --icon-color-active: rgb(62, 249, 109);
  --icon-color-focused: #f8f8f2;
  --icon-color-hover: #bababa;
  --input-disabled-border-color: transparent;
  --input-focus-border-color: Highlight;
  --input-focus-outline: 1px solid Canvas;
  --input-hover-border-color: red;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09), 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16), 0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent;
  --input-unfocused-border-color: transparent;
  --interactive-accent: #50fa7b;
  --interactive-accent-hover: rgb(62, 249, 109);
  --interactive-accent-hsl: 135, 94%, 65%;
  --interactive-accent-rgb: #f1fa8c;
  --interactive-hover: #976262;
  --light: var(--background-primary);
  --light0: #ff8a8a;
  --light1: #fce6e4;
  --light2: #fdf8ec;
  --light3: #5fa57a;
  --lightgray: var(--background-secondary);
  --link-color: rgb(62, 249, 109);
  --link-color-hover: rgb(102, 250, 139);
  --link-external-color: rgb(62, 249, 109);
  --link-external-color-hover: rgb(102, 250, 139);
  --link-unresolved-color: rgb(62, 249, 109);
  --link-unresolved-decoration-color: rgba(82, 250, 124, 0.3);
  --list-marker-color-collapsed: rgb(62, 249, 109);
  --list-marker-color-hover: #bababa;
  --markup-code: #ffb86c;
  --menu-background: #560000;
  --menu-border-color: #976262;
  --metadata-input-text-color: #f8f8f2;
  --metadata-label-text-color: #bababa;
  --metadata-label-text-color-hover: #bababa;
  --metadata-property-box-shadow-hover: 0 0 0 1px #976262;
  --modal-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --nav-heading-color: #f8f8f2;
  --nav-heading-color-collapsed-hover: #bababa;
  --nav-heading-color-hover: #f8f8f2;
  --nav-item-background-selected: rgba(82, 250, 124, 0.15);
  --nav-item-color: #bababa;
  --nav-item-color-active: #f8f8f2;
  --nav-item-color-highlighted: rgb(62, 249, 109);
  --nav-item-color-hover: #f8f8f2;
  --nav-item-color-selected: #f8f8f2;
  --nav-tag-color-active: #bababa;
  --nav-tag-color-hover: #bababa;
  --orange: #f3ad6b;
  --pdf-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --pdf-page-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --pdf-sidebar-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --pill-border-color-hover: #976262;
  --pill-color: #bababa;
  --pill-color-hover: #f8f8f2;
  --pill-color-remove-hover: rgb(62, 249, 109);
  --prompt-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --purple: #f899e7;
  --red: #d63f4e;
  --ribbon-background: #560000;
  --ribbon-background-collapsed: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --secondary: var(--text-accent);
  --setting-group-heading-color: #f8f8f2;
  --setting-items-background: #6e021a81;
  --sideRed: #910b0bcc;
  --slider-thumb-border-color: #976262;
  --status-bar-background: #560000;
  --status-bar-text-color: #bababa;
  --suggestion-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --tab-background-active: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%);
  --tab-container-background: #560000;
  --tab-divider-color: #976262;
  --tab-switcher-background: #560000;
  --tab-switcher-menubar-background: linear-gradient(to top, #560000, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(82, 250, 124);
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #bababa;
  --tab-text-color-focused-active-current: #f8f8f2;
  --tab-text-color-focused-highlighted: rgb(62, 249, 109);
  --table-drag-handle-background-active: #50fa7b;
  --table-drag-handle-color-active: #282a36;
  --table-header-color: #f8f8f2;
  --table-selection: rgba(82, 250, 124, 0.1);
  --table-selection-border-color: #50fa7b;
  --tag-background: rgba(82, 250, 124, 0.1);
  --tag-background-hover: rgba(82, 250, 124, 0.2);
  --tag-border-color: rgba(82, 250, 124, 0.15);
  --tag-border-color-hover: rgba(82, 250, 124, 0.15);
  --tag-color: rgb(62, 249, 109);
  --tag-color-hover: rgb(62, 249, 109);
  --tertiary: var(--text-accent-hover);
  --text-a: #ff79c6;
  --text-a-hover: #ff79c0;
  --text-accent: rgb(62, 249, 109);
  --text-accent-hover: rgb(102, 250, 139);
  --text-link: #b0f078;
  --text-mark: #a1ad1dcf;
  --text-muted: #bababa;
  --text-normal: #f8f8f2;
  --text-on-accent: #282a36;
  --text-selection: rgba(82, 250, 124, 0.5);
  --text-tag: #50fa7b;
  --text-title-h1: #bd93f9;
  --text-title-h2: #ffb86c;
  --text-title-h3: #50fa7b;
  --text-title-h4: #cc35da;
  --text-title-h5: #f1fa8c;
  --text-title-h6: #3ca4e0;
  --textHighlight: var(--background-modifier-active-hover);
  --titleFont: var(--font-text);
  --titlebar-background: #560000;
  --titlebar-background-focused: #560000b7;
  --titlebar-text-color: #bababa;
  --titlebar-text-color-focused: #f8f8f2;
  --vault-profile-color: #f8f8f2;
  --vault-profile-color-hover: #f8f8f2;
  --yellow: #ebcb8b;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(86, 0, 0);
  color: rgb(248, 248, 242);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(86, 0, 0);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(86, 0, 0);
  color: rgb(248, 248, 242);
}

body div#quartz-root {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 184, 108);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

body .page article p > em, em {
  color: rgb(80, 250, 123);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(80, 250, 123) none 0px;
  text-decoration: rgb(80, 250, 123);
  text-decoration-color: rgb(80, 250, 123);
}

body .page article p > i, i {
  color: rgb(80, 250, 123);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(80, 250, 123) none 0px;
  text-decoration: rgb(80, 250, 123);
  text-decoration-color: rgb(80, 250, 123);
}

body .page article p > strong, strong {
  color: rgb(255, 184, 108);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

body .text-highlight {
  color: rgb(248, 248, 242);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body del {
  color: rgb(248, 248, 242);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: line-through rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body p {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}`,
    links: `body a.external, footer a {
  color: rgb(176, 240, 120);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 240, 120) none 0px;
  text-decoration: underline rgb(176, 240, 120);
  text-decoration-color: rgb(176, 240, 120);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(63, 249, 110);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(63, 249, 110) none 0px;
  text-decoration: underline rgb(63, 249, 110);
  text-decoration-color: rgb(63, 249, 110);
}

body a.internal.broken {
  color: rgb(63, 249, 110);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(63, 249, 110) none 0px;
  text-decoration: underline rgba(82, 250, 124, 0.3);
  text-decoration-color: rgba(82, 250, 124, 0.3);
}`,
    lists: `body dd {
  color: rgb(248, 248, 242);
}

body dt {
  color: rgb(248, 248, 242);
}

body ol > li {
  color: rgb(248, 248, 242);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ul > li {
  color: rgb(248, 248, 242);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body table {
  border-bottom-color: rgb(181, 5, 5);
  border-left-color: rgb(181, 5, 5);
  border-right-color: rgb(181, 5, 5);
  border-top-color: rgb(181, 5, 5);
  color: rgb(248, 248, 242);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 195.062px;
}

body td {
  border-bottom-color: rgba(110, 2, 26, 0.506);
  border-left-color: rgba(110, 2, 26, 0.506);
  border-right-color: rgba(110, 2, 26, 0.506);
  border-top-color: rgba(110, 2, 26, 0.506);
  color: rgb(248, 248, 242);
}

body th {
  border-bottom-color: rgba(110, 2, 26, 0.506);
  border-left-color: rgba(110, 2, 26, 0.506);
  border-right-color: rgba(110, 2, 26, 0.506);
  border-top-color: rgba(110, 2, 26, 0.506);
  color: rgb(248, 248, 242);
}

body thead {
  border-bottom-color: rgb(181, 5, 5);
  border-bottom-style: solid;
  border-bottom-width: 4px;
  border-left-color: rgb(181, 5, 5);
  border-right-color: rgb(181, 5, 5);
  border-top-color: rgb(181, 5, 5);
}

body tr {
  border-bottom-color: rgb(181, 5, 5);
  border-left-color: rgb(181, 5, 5);
  border-right-color: rgb(181, 5, 5);
  border-top-color: rgb(181, 5, 5);
}`,
    code: `body code {
  background-color: rgb(41, 2, 2);
  border-bottom-color: rgb(214, 63, 78);
  border-bottom-width: 1px;
  border-left-color: rgb(214, 63, 78);
  border-left-width: 1px;
  border-right-color: rgb(214, 63, 78);
  border-right-width: 1px;
  border-top-color: rgb(214, 63, 78);
  border-top-width: 1px;
  color: rgb(248, 248, 242);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
}

body pre > code, pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body figcaption {
  color: rgb(248, 248, 242);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body img {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `body .file-embed {
  background-color: rgba(110, 2, 26, 0.506);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(80, 250, 123);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(80, 250, 123);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(186, 186, 186);
  text-decoration: line-through rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
  margin-right: 0px;
  width: 16.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    search: `body .search > .search-button {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
}

body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(178, 148, 187);
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(86, 0, 0);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(178, 148, 187);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(178, 148, 187);
  color: rgb(248, 248, 242);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(82, 250, 124, 0.1);
  border-bottom-color: rgba(82, 250, 124, 0.15);
  border-left-color: rgba(82, 250, 124, 0.15);
  border-right-color: rgba(82, 250, 124, 0.15);
  border-top-color: rgba(82, 250, 124, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(63, 249, 110);
}

body h1 {
  color: rgb(189, 147, 249);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(255, 184, 108);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(248, 248, 242);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(80, 250, 123);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(204, 53, 218);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(241, 250, 140);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(60, 164, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    footer: `body footer {
  background-color: rgba(86, 0, 0, 0.718);
  color: rgb(186, 186, 186);
}

body footer ul li a {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(248, 248, 242);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 186, 186);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body li.section-li > .section .meta {
  color: rgb(186, 186, 186);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}

body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .darkmode svg {
  color: rgb(186, 186, 186);
  stroke: rgb(186, 186, 186);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .metadata {
  color: rgb(186, 186, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgba(86, 0, 0, 0.718);
}

body .page-header h2.page-title {
  color: rgb(248, 248, 242);
}

body abbr {
  color: rgb(248, 248, 242);
  text-decoration: underline dotted rgb(248, 248, 242);
}

body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body input[type=text] {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body kbd {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body sub {
  color: rgb(248, 248, 242);
}

body summary {
  color: rgb(248, 248, 242);
}

body sup {
  color: rgb(248, 248, 242);
}`,
  },
  light: {},
};
