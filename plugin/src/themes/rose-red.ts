import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "rose-red", modes: ["dark"], variations: [], fonts: ["hack"] },
  dark: {
    base: `:root:root {
  --accent-h: 135 !important;
  --accent-l: 65% !important;
  --accent-s: 94% !important;
  --background-modifier-active-hover: hsla(135, 94%, 65%, 0.1) !important;
  --background-modifier-border-hover: #976262 !important;
  --background-primary: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --background-primary-alt: #6e021a81 !important;
  --background-red: #6c0808 !important;
  --background-secondary: #560000 !important;
  --background-secondary-alt: #560000b7 !important;
  --bases-cards-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --bases-cards-cover-background: #6e021a81 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #976262 !important;
  --bases-group-heading-property-color: #bababa !important;
  --bases-table-cell-background-active: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --bases-table-cell-background-disabled: #6e021a81 !important;
  --bases-table-cell-background-selected: hsla(135, 94%, 65%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #50fa7b !important;
  --bases-table-group-background: #6e021a81 !important;
  --bases-table-header-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --bases-table-header-color: #bababa !important;
  --bases-table-summary-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --blockquote-border: #b294bb !important;
  --blockquote-border-color: #50fa7b !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --canvas-color-1: 255, 85, 85 !important;
  --canvas-color-2: 255, 184, 108 !important;
  --canvas-color-3: 241, 250, 140 !important;
  --canvas-color-4: 82, 250, 124 !important;
  --canvas-color-5: 139, 233, 253 !important;
  --canvas-color-6: 189, 147, 244 !important;
  --caret-color: #f8f8f2 !important;
  --checkbox-border-color-hover: #bababa !important;
  --checkbox-color: #50fa7b !important;
  --checkbox-color-hover: hsl(135, 94%, 61.2%) !important;
  --checkbox-marker-color: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --checklist-done-color: #bababa !important;
  --code-background: #282a36 !important;
  --code-normal: #F8F8F2 !important;
  --code-punctuation: #bababa !important;
  --codeFont: Hack Nerd Font, Source Code Pro, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color-collapsed: hsl(135, 94%, 61.2%) !important;
  --color-accent: hsl(135, 94%, 65%) !important;
  --color-accent-1: hsl(135, 94%, 61.2%) !important;
  --color-accent-2: hsl(135, 94%, 68.8%) !important;
  --color-accent-hsl: 135, 94%, 65% !important;
  --color-base-35: #976262 !important;
  --color-base-70: #bababa !important;
  --color-scheme: dark !important;
  --dark: #f8f8f2 !important;
  --dark-linear-gradient: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --dark0: #390000 !important;
  --dark1: #290202 !important;
  --dark2: #3d0404 !important;
  --dark3: #5c1818 !important;
  --darkgray: #f8f8f2 !important;
  --divider-color-hover: #50fa7b !important;
  --dracula-Comment: #6272A4 !important;
  --dracula-definition: #50FA7B !important;
  --dracula-foreground: #F8F8F2 !important;
  --dracula-function: #8BE9FD !important;
  --dracula-keyword: #FF79C6 !important;
  --dracula-number: #BD93F9 !important;
  --dracula-string: #F1FA8C !important;
  --dracula-variable: #F8F8F2 !important;
  --dropdown-background-hover: #976262 !important;
  --embed-border-start: 2px solid #50fa7b !important;
  --file-header-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --file-header-background-focused: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --flair-color: #f8f8f2 !important;
  --font-mermaid: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: Hack Nerd Font, Source Code Pro, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;
  --font-print: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Arial' !important;
  --font-text: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji !important;
  --footnote-id-color: #bababa !important;
  --frost0: #B50505 !important;
  --frost1: #cc0d0d !important;
  --frost2: #81a1c1 !important;
  --frost3: #FF9CFA !important;
  --graph-line: #976262 !important;
  --graph-node: #bababa !important;
  --graph-node-focused: hsl(135, 94%, 61.2%) !important;
  --graph-text: #f8f8f2 !important;
  --gray: #bababa !important;
  --green: #b0f078 !important;
  --headerFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: hsla(135, 94%, 65%, 0.1) !important;
  --icon-color: #bababa !important;
  --icon-color-active: hsl(135, 94%, 61.2%) !important;
  --icon-color-focused: #f8f8f2 !important;
  --icon-color-hover: #bababa !important;
  --input-disabled-border-color: transparent !important;
  --input-focus-border-color: Highlight !important;
  --input-focus-outline: 1px solid Canvas !important;
  --input-hover-border-color: red !important;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09), 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16), 0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent !important;
  --input-unfocused-border-color: transparent !important;
  --interactive-accent: #50fa7b !important;
  --interactive-accent-hover: hsl(135, 94%, 61.2%) !important;
  --interactive-accent-hsl: 135, 94%, 65% !important;
  --interactive-accent-rgb: #f1fa8c !important;
  --interactive-hover: #976262 !important;
  --light: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --light0: #ff8a8a !important;
  --light1: #fce6e4 !important;
  --light2: #fdf8ec !important;
  --light3: #5fa57a !important;
  --lightgray: #560000 !important;
  --link-color: hsl(135, 94%, 61.2%) !important;
  --link-color-hover: hsl(135, 94%, 68.8%) !important;
  --link-external-color: hsl(135, 94%, 61.2%) !important;
  --link-external-color-hover: hsl(135, 94%, 68.8%) !important;
  --link-unresolved-color: hsl(135, 94%, 61.2%) !important;
  --link-unresolved-decoration-color: hsla(135, 94%, 65%, 0.3) !important;
  --list-marker-color-collapsed: hsl(135, 94%, 61.2%) !important;
  --list-marker-color-hover: #bababa !important;
  --markup-code: #ffb86c !important;
  --menu-background: #560000 !important;
  --menu-border-color: #976262 !important;
  --metadata-input-text-color: #f8f8f2 !important;
  --metadata-label-text-color: #bababa !important;
  --metadata-label-text-color-hover: #bababa !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #976262 !important;
  --modal-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --nav-heading-color: #f8f8f2 !important;
  --nav-heading-color-collapsed-hover: #bababa !important;
  --nav-heading-color-hover: #f8f8f2 !important;
  --nav-item-background-selected: hsla(135, 94%, 65%, 0.15) !important;
  --nav-item-color: #bababa !important;
  --nav-item-color-active: #f8f8f2 !important;
  --nav-item-color-highlighted: hsl(135, 94%, 61.2%) !important;
  --nav-item-color-hover: #f8f8f2 !important;
  --nav-item-color-selected: #f8f8f2 !important;
  --nav-tag-color-active: #bababa !important;
  --nav-tag-color-hover: #bababa !important;
  --orange: #f3ad6b !important;
  --pdf-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --pdf-page-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --pdf-sidebar-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --pill-border-color-hover: #976262 !important;
  --pill-color: #bababa !important;
  --pill-color-hover: #f8f8f2 !important;
  --pill-color-remove-hover: hsl(135, 94%, 61.2%) !important;
  --prompt-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --purple: #f899e7 !important;
  --red: #d63f4e !important;
  --ribbon-background: #560000 !important;
  --ribbon-background-collapsed: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --search-clear-button-color: #bababa !important;
  --search-icon-color: #bababa !important;
  --search-result-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --secondary: hsl(135, 94%, 61.2%) !important;
  --setting-group-heading-color: #f8f8f2 !important;
  --setting-items-background: #6e021a81 !important;
  --sideRed: #910b0bcc !important;
  --slider-thumb-border-color: #976262 !important;
  --status-bar-background: #560000 !important;
  --status-bar-text-color: #bababa !important;
  --suggestion-background: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --tab-background-active: linear-gradient(45deg, rgb(36, 10, 0) 0%, rgb(121, 9, 31) 35%, rgb(3, 3, 3) 100%) !important;
  --tab-container-background: #560000 !important;
  --tab-divider-color: #976262 !important;
  --tab-switcher-background: #560000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #560000, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(135, 94%, 65%) !important;
  --tab-text-color-active: #bababa !important;
  --tab-text-color-focused: #bababa !important;
  --tab-text-color-focused-active: #bababa !important;
  --tab-text-color-focused-active-current: #f8f8f2 !important;
  --tab-text-color-focused-highlighted: hsl(135, 94%, 61.2%) !important;
  --table-drag-handle-background-active: #50fa7b !important;
  --table-drag-handle-color-active: #282a36 !important;
  --table-header-color: #f8f8f2 !important;
  --table-selection: hsla(135, 94%, 65%, 0.1) !important;
  --table-selection-border-color: #50fa7b !important;
  --tag-background: hsla(135, 94%, 65%, 0.1) !important;
  --tag-background-hover: hsla(135, 94%, 65%, 0.2) !important;
  --tag-border-color: hsla(135, 94%, 65%, 0.15) !important;
  --tag-border-color-hover: hsla(135, 94%, 65%, 0.15) !important;
  --tag-color: hsl(135, 94%, 61.2%) !important;
  --tag-color-hover: hsl(135, 94%, 61.2%) !important;
  --tertiary: hsl(135, 94%, 68.8%) !important;
  --text-a: #ff79c6 !important;
  --text-a-hover: #ff79c0 !important;
  --text-accent: hsl(135, 94%, 61.2%) !important;
  --text-accent-hover: hsl(135, 94%, 68.8%) !important;
  --text-link: #b0f078 !important;
  --text-mark: #a1ad1dcf !important;
  --text-muted: #bababa !important;
  --text-normal: #f8f8f2 !important;
  --text-on-accent: #282a36 !important;
  --text-selection: hsla(135, 94%, 65%, 0.5) !important;
  --text-tag: #50fa7b !important;
  --text-title-h1: #bd93f9 !important;
  --text-title-h2: #ffb86c !important;
  --text-title-h3: #50fa7b !important;
  --text-title-h4: #cc35da !important;
  --text-title-h5: #f1fa8c !important;
  --text-title-h6: #3ca4e0 !important;
  --textHighlight: hsla(135, 94%, 65%, 0.1) !important;
  --titleFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #560000 !important;
  --titlebar-background-focused: #560000b7 !important;
  --titlebar-text-color: #bababa !important;
  --titlebar-text-color-focused: #f8f8f2 !important;
  --vault-profile-color: #f8f8f2 !important;
  --vault-profile-color-hover: #f8f8f2 !important;
  --yellow: #ebcb8b !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(86, 0, 0);
  color: rgb(248, 248, 242);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
}

html body .bases-table {
  border-color: rgb(181, 5, 5);
}

html body .bases-table thead th {
  border-color: rgba(110, 2, 26, 0.506);
  color: rgb(248, 248, 242);
}

html body .canvas-node {
  border-color: rgb(248, 248, 242);
}

html body .canvas-node-content {
  color: rgb(248, 248, 242);
}

html body .canvas-node-file {
  color: rgb(248, 248, 242);
}

html body .canvas-node-group {
  border-color: rgb(248, 248, 242);
}

html body .canvas-sidebar {
  background-color: rgb(86, 0, 0);
  border-color: rgb(248, 248, 242);
}

html body .note-properties-key {
  color: rgb(186, 186, 186);
}

html body .note-properties-row {
  border-color: rgb(186, 186, 186);
}

html body .note-properties-tags {
  background-color: rgba(82, 250, 124, 0.1);
  color: rgb(63, 249, 110);
}

html body .note-properties-value {
  color: rgb(186, 186, 186);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(86, 0, 0);
  color: rgb(248, 248, 242);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(86, 0, 0);
  color: rgb(248, 248, 242);
}

html body div#quartz-root {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 184, 108);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body .page article p > em, html em {
  color: rgb(80, 250, 123);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(80, 250, 123) none 0px;
  text-decoration-color: rgb(80, 250, 123);
}

html body .page article p > i, html i {
  color: rgb(80, 250, 123);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(80, 250, 123) none 0px;
  text-decoration-color: rgb(80, 250, 123);
}

html body .page article p > strong, html strong {
  color: rgb(255, 184, 108);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body .text-highlight {
  background-color: rgba(110, 2, 26, 0.506);
  color: rgb(176, 240, 120);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 240, 120) none 0px;
  text-decoration-color: rgb(176, 240, 120);
}

html body del {
  color: rgb(248, 248, 242);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body h1.article-title {
  color: rgb(248, 248, 242);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(80, 250, 123);
  border-color: rgb(80, 250, 123);
}

html body p {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}`,
    links: `html body a.external, html footer a {
  color: rgb(176, 240, 120);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 240, 120) none 0px;
  text-decoration-color: rgb(176, 240, 120);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(63, 249, 110);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(63, 249, 110) none 0px;
  text-decoration-color: rgb(63, 249, 110);
}

html body a.internal.broken {
  color: rgb(63, 249, 110);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(63, 249, 110) none 0px;
  text-decoration: underline rgba(82, 250, 124, 0.3);
  text-decoration-color: rgba(82, 250, 124, 0.3);
}`,
    lists: `html body dd {
  color: rgb(248, 248, 242);
}

html body dt {
  color: rgb(248, 248, 242);
}

html body ol > li {
  color: rgb(248, 248, 242);
}

html body ol.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ul > li {
  color: rgb(248, 248, 242);
}

html body ul.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `html body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body table {
  border-bottom-color: rgb(181, 5, 5);
  border-left-color: rgb(181, 5, 5);
  border-right-color: rgb(181, 5, 5);
  border-top-color: rgb(181, 5, 5);
  color: rgb(248, 248, 242);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 195.062px;
}

html body td {
  border-bottom-color: rgba(110, 2, 26, 0.506);
  border-left-color: rgba(110, 2, 26, 0.506);
  border-right-color: rgba(110, 2, 26, 0.506);
  border-top-color: rgba(110, 2, 26, 0.506);
  color: rgb(248, 248, 242);
}

html body th {
  border-bottom-color: rgba(110, 2, 26, 0.506);
  border-left-color: rgba(110, 2, 26, 0.506);
  border-right-color: rgba(110, 2, 26, 0.506);
  border-top-color: rgba(110, 2, 26, 0.506);
  color: rgb(248, 248, 242);
}

html body thead {
  border-bottom-color: rgb(181, 5, 5);
  border-bottom-style: solid;
  border-bottom-width: 4px;
  border-left-color: rgb(181, 5, 5);
  border-right-color: rgb(181, 5, 5);
  border-top-color: rgb(181, 5, 5);
}

html body tr {
  border-bottom-color: rgb(181, 5, 5);
  border-left-color: rgb(181, 5, 5);
  border-right-color: rgb(181, 5, 5);
  border-top-color: rgb(181, 5, 5);
}`,
    code: `html body code {
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

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
}

html body pre > code, html pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body figcaption {
  color: rgb(248, 248, 242);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body img {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `html body .file-embed {
  background-color: rgba(110, 2, 26, 0.506);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(80, 250, 123);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  margin-left: 8px;
  margin-right: 4px;
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
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

html body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
}

html body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(178, 148, 187);
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(86, 0, 0);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(178, 148, 187);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(178, 148, 187);
  color: rgb(248, 248, 242);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(82, 250, 124, 0.1);
  border-bottom-color: rgba(82, 250, 124, 0.15);
  border-left-color: rgba(82, 250, 124, 0.15);
  border-right-color: rgba(82, 250, 124, 0.15);
  border-top-color: rgba(82, 250, 124, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(63, 249, 110);
}

html body h1 {
  color: rgb(189, 147, 249);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(255, 184, 108);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(248, 248, 242);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(80, 250, 123);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(204, 53, 218);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(241, 250, 140);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(60, 164, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(186, 186, 186);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(186, 186, 186);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(248, 248, 242);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    footer: `html body footer {
  background-color: rgba(86, 0, 0, 0.718);
  color: rgb(186, 186, 186);
}

html body footer ul li a {
  color: rgb(186, 186, 186);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(248, 248, 242);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(186, 186, 186);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 186, 186);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body li.section-li > .section .meta {
  color: rgb(186, 186, 186);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(186, 186, 186);
}

html body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html body .darkmode svg {
  color: rgb(186, 186, 186);
  stroke: rgb(186, 186, 186);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .metadata {
  color: rgb(186, 186, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgba(86, 0, 0, 0.718);
}

html body .page-header h2.page-title {
  color: rgb(248, 248, 242);
}

html body abbr {
  color: rgb(248, 248, 242);
}

html body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body input[type=text] {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html body kbd {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body sub {
  color: rgb(248, 248, 242);
}

html body summary {
  color: rgb(248, 248, 242);
}

html body sup {
  color: rgb(248, 248, 242);
}

html body ul.tags > li {
  background-color: rgba(82, 250, 124, 0.1);
  border-bottom-color: rgba(82, 250, 124, 0.15);
  border-left-color: rgba(82, 250, 124, 0.15);
  border-right-color: rgba(82, 250, 124, 0.15);
  border-top-color: rgba(82, 250, 124, 0.15);
  color: rgb(80, 250, 123);
}`,
  },
  light: {},
};
