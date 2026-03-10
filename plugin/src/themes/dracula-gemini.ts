import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dracula-gemini", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 225 !important;
  --accent-l: 51% !important;
  --accent-s: 27% !important;
  --background-modifier-active-hover: rgba(96, 113, 164, 0.1) !important;
  --background-modifier-border: rgb(65, 68, 88) !important;
  --background-modifier-border-focus: rgb(87, 91, 117) !important;
  --background-modifier-border-hover: rgb(72, 75, 97) !important;
  --background-modifier-form-field: rgb(59, 62, 79) !important;
  --background-modifier-form-field-hover: rgb(59, 62, 79) !important;
  --background-primary: #282a36 !important;
  --background-primary-alt: rgb(48, 50, 65) !important;
  --background-secondary: rgb(52, 55, 70) !important;
  --background-secondary-alt: rgb(65, 68, 88) !important;
  --bases-cards-background: #282a36 !important;
  --bases-cards-cover-background: rgb(48, 50, 65) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(65, 68, 88) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(72, 75, 97) !important;
  --bases-embed-border-color: rgb(65, 68, 88) !important;
  --bases-group-heading-property-color: rgb(208, 210, 220) !important;
  --bases-table-border-color: rgb(65, 68, 88) !important;
  --bases-table-cell-background-active: #282a36 !important;
  --bases-table-cell-background-disabled: rgb(48, 50, 65) !important;
  --bases-table-cell-background-selected: rgba(96, 113, 164, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(87, 91, 117) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(96, 113, 164) !important;
  --bases-table-group-background: rgb(48, 50, 65) !important;
  --bases-table-header-background: #282a36 !important;
  --bases-table-header-color: rgb(208, 210, 220) !important;
  --bases-table-summary-background: #282a36 !important;
  --blockquote-border-color: #f1fa8c !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-color: #f4f9bf !important;
  --blur-background: color-mix(in srgb, rgb(65, 68, 88) 65%, transparent) linear-gradient(rgb(65, 68, 88), color-mix(in srgb, rgb(65, 68, 88) 65%, transparent)) !important;
  --bold-color: #ffb86c !important;
  --canvas-background: #282a36 !important;
  --canvas-card-label-color: rgb(108, 114, 147) !important;
  --canvas-dot-pattern: rgb(65, 68, 88) !important;
  --caret-color: #f8f8f2 !important;
  --checkbox-border-color: rgb(108, 114, 147) !important;
  --checkbox-border-color-hover: rgb(208, 210, 220) !important;
  --checkbox-color: rgb(96, 113, 164) !important;
  --checkbox-color-hover: rgb(121, 139, 180) !important;
  --checkbox-marker-color: #282a36 !important;
  --checklist-done-color: rgb(108, 114, 147) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(48, 50, 65) !important;
  --code-border-color: rgb(65, 68, 88) !important;
  --code-comment: #6272a4 !important;
  --code-function: #50fa7b !important;
  --code-important: #ff5555 !important;
  --code-keyword: #ff79c6 !important;
  --code-normal: rgb(208, 210, 220) !important;
  --code-operator: #f8f8f2 !important;
  --code-property: #ffb86c !important;
  --code-punctuation: rgb(208, 210, 220) !important;
  --code-size: 0.933em !important;
  --code-string: #f1fa8c !important;
  --code-tag: #ff5555 !important;
  --code-value: #bd93f9 !important;
  --collapse-icon-color: rgb(108, 114, 147) !important;
  --collapse-icon-color-collapsed: rgb(121, 139, 180) !important;
  --color-accent: rgb(96, 113, 164) !important;
  --color-accent-1: rgb(121, 139, 180) !important;
  --color-accent-2: rgb(144, 160, 193) !important;
  --color-accent-hsl: 225, 27%, 51% !important;
  --color-base-00: #282a36 !important;
  --color-base-10: rgb(48, 50, 65) !important;
  --color-base-100: #f8f8f2 !important;
  --color-base-20: rgb(52, 55, 70) !important;
  --color-base-25: rgb(59, 62, 79) !important;
  --color-base-30: rgb(65, 68, 88) !important;
  --color-base-35: rgb(72, 75, 97) !important;
  --color-base-40: rgb(87, 91, 117) !important;
  --color-base-50: rgb(108, 114, 147) !important;
  --color-base-60: rgb(152, 156, 179) !important;
  --color-base-70: rgb(208, 210, 220) !important;
  --color-dracula-background: #282a36 !important;
  --color-dracula-comment: #6272a4 !important;
  --color-dracula-cyan: #8be9fd !important;
  --color-dracula-foreground: #f8f8f2 !important;
  --color-dracula-green: #50fa7b !important;
  --color-dracula-orange: #ffb86c !important;
  --color-dracula-pink: #ff79c6 !important;
  --color-dracula-purple: #bd93f9 !important;
  --color-dracula-red: #ff5555 !important;
  --color-dracula-selection: #44475a !important;
  --color-dracula-yellow: #f1fa8c !important;
  --color-dracula-yellow-ish: #f4f9bf !important;
  --dark: #f8f8f2 !important;
  --darkgray: #f8f8f2 !important;
  --divider-color: rgb(65, 68, 88) !important;
  --divider-color-hover: rgb(96, 113, 164) !important;
  --dropdown-background: rgb(65, 68, 88) !important;
  --dropdown-background-hover: rgb(72, 75, 97) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(65, 68, 88), inset 0 0 0 1px rgb(65, 68, 88) !important;
  --embed-border-start: 2px solid rgb(96, 113, 164) !important;
  --empty-line-height: 1em !important;
  --file-header-background: #282a36 !important;
  --file-header-background-focused: #282a36 !important;
  --file-margins: 32px 48px !important;
  --flair-background: rgb(65, 68, 88) !important;
  --flair-color: #f8f8f2 !important;
  --footnote-divider-color: rgb(65, 68, 88) !important;
  --footnote-id-color: rgb(208, 210, 220) !important;
  --footnote-id-color-no-occurrences: rgb(108, 114, 147) !important;
  --graph-line: rgb(72, 75, 97) !important;
  --graph-node: rgb(208, 210, 220) !important;
  --graph-node-focused: rgb(121, 139, 180) !important;
  --graph-node-unresolved: rgb(108, 114, 147) !important;
  --graph-text: #f8f8f2 !important;
  --gray: rgb(208, 210, 220) !important;
  --h1-color: #ff79c6 !important;
  --h1-line-height: 1.3125 !important;
  --h1-size: 2em !important;
  --h1-weight: 600 !important;
  --h2-color: #bd93f9 !important;
  --h2-line-height: 1.2847 !important;
  --h2-size: 1.8em !important;
  --h2-weight: 600 !important;
  --h3-color: #8be9fd !important;
  --h3-line-height: 1.2891 !important;
  --h3-size: 1.6em !important;
  --h3-weight: 600 !important;
  --h4-color: #50fa7b !important;
  --h4-line-height: 1.2946 !important;
  --h4-size: 1.4em !important;
  --h4-weight: 600 !important;
  --h5-color: #f1fa8c !important;
  --h5-line-height: 1.3021 !important;
  --h5-size: 1.2em !important;
  --h5-weight: 600 !important;
  --h6-color: #ffb86c !important;
  --h6-line-height: 1.3125 !important;
  --header-hanging-margin: 30px !important;
  --heading-formatting: rgb(108, 114, 147) !important;
  --heading-spacing: 0 !important;
  --highlight: rgba(96, 113, 164, 0.1) !important;
  --hr-color: rgb(65, 68, 88) !important;
  --icon-color: rgb(208, 210, 220) !important;
  --icon-color-active: rgb(121, 139, 180) !important;
  --icon-color-focused: #f8f8f2 !important;
  --icon-color-hover: rgb(208, 210, 220) !important;
  --inline-title-color: #ff79c6 !important;
  --inline-title-line-height: 1.3125 !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgb(108, 114, 147) !important;
  --input-placeholder-color: rgb(108, 114, 147) !important;
  --interactive-accent: rgb(96, 113, 164) !important;
  --interactive-accent-hover: rgb(121, 139, 180) !important;
  --interactive-accent-hsl: 225, 27%, 51% !important;
  --interactive-hover: rgb(72, 75, 97) !important;
  --interactive-normal: rgb(65, 68, 88) !important;
  --italic-color: #f1fa8c !important;
  --light: #282a36 !important;
  --lightgray: rgb(52, 55, 70) !important;
  --link-color: #ff79c6 !important;
  --link-color-hover: #bd93f9 !important;
  --link-external-color: #ff79c6 !important;
  --link-external-color-hover: #bd93f9 !important;
  --link-unresolved-color: #ff79c6 !important;
  --link-unresolved-decoration-color: #ff79c6 !important;
  --link-unresolved-opacity: 0.5 !important;
  --list-checkbox-margin-left: 6.16px !important;
  --list-checkbox-margin-right: 10.96px !important;
  --list-indent: 1.54688em !important;
  --list-indent-spacing: 0.125em !important;
  --list-item-gap: 0.375em !important;
  --list-marker-color: rgb(108, 114, 147) !important;
  --list-marker-color-collapsed: rgb(121, 139, 180) !important;
  --list-marker-color-hover: rgb(208, 210, 220) !important;
  --list-ol-bullet-width: 1.75em !important;
  --list-spacing: 0 !important;
  --list-ul-bullet-spacing: 0.0805em !important;
  --menu-background: rgb(52, 55, 70) !important;
  --menu-border-color: rgb(72, 75, 97) !important;
  --metadata-border-color: rgb(65, 68, 88) !important;
  --metadata-divider-color: rgb(65, 68, 88) !important;
  --metadata-input-text-color: #f8f8f2 !important;
  --metadata-label-text-color: rgb(208, 210, 220) !important;
  --metadata-label-text-color-hover: rgb(208, 210, 220) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(87, 91, 117) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(72, 75, 97) !important;
  --modal-background: #282a36 !important;
  --modal-border-color: rgb(87, 91, 117) !important;
  --nav-collapse-icon-color: rgb(108, 114, 147) !important;
  --nav-collapse-icon-color-collapsed: rgb(108, 114, 147) !important;
  --nav-heading-color: #f8f8f2 !important;
  --nav-heading-color-collapsed: rgb(108, 114, 147) !important;
  --nav-heading-color-collapsed-hover: rgb(208, 210, 220) !important;
  --nav-heading-color-hover: #f8f8f2 !important;
  --nav-item-background-selected: rgba(96, 113, 164, 0.15) !important;
  --nav-item-color: rgb(208, 210, 220) !important;
  --nav-item-color-active: #f8f8f2 !important;
  --nav-item-color-highlighted: rgb(121, 139, 180) !important;
  --nav-item-color-hover: #f8f8f2 !important;
  --nav-item-color-selected: #f8f8f2 !important;
  --nav-tag-color: rgb(108, 114, 147) !important;
  --nav-tag-color-active: rgb(208, 210, 220) !important;
  --nav-tag-color-hover: rgb(208, 210, 220) !important;
  --pdf-background: #282a36 !important;
  --pdf-page-background: #282a36 !important;
  --pdf-shadow: 0 0 0 1px rgb(65, 68, 88) !important;
  --pdf-sidebar-background: #282a36 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(65, 68, 88) !important;
  --pill-border-color: rgb(65, 68, 88) !important;
  --pill-border-color-hover: rgb(72, 75, 97) !important;
  --pill-color: rgb(208, 210, 220) !important;
  --pill-color-hover: #f8f8f2 !important;
  --pill-color-remove: rgb(108, 114, 147) !important;
  --pill-color-remove-hover: rgb(121, 139, 180) !important;
  --prompt-background: #282a36 !important;
  --prompt-border-color: rgb(87, 91, 117) !important;
  --raised-background: color-mix(in srgb, rgb(65, 68, 88) 65%, transparent) linear-gradient(rgb(65, 68, 88), color-mix(in srgb, rgb(65, 68, 88) 65%, transparent)) !important;
  --ribbon-background: rgb(52, 55, 70) !important;
  --ribbon-background-collapsed: #282a36 !important;
  --search-clear-button-color: rgb(208, 210, 220) !important;
  --search-icon-color: rgb(208, 210, 220) !important;
  --search-result-background: #282a36 !important;
  --secondary: rgb(121, 139, 180) !important;
  --setting-group-heading-color: #f8f8f2 !important;
  --setting-items-background: rgb(48, 50, 65) !important;
  --setting-items-border-color: rgb(65, 68, 88) !important;
  --slider-thumb-border-color: rgb(72, 75, 97) !important;
  --slider-track-background: rgb(65, 68, 88) !important;
  --status-bar-background: rgb(52, 55, 70) !important;
  --status-bar-border-color: rgb(65, 68, 88) !important;
  --status-bar-text-color: rgb(208, 210, 220) !important;
  --suggestion-background: #282a36 !important;
  --tab-background-active: #282a36 !important;
  --tab-container-background: rgb(52, 55, 70) !important;
  --tab-divider-color: rgb(72, 75, 97) !important;
  --tab-outline-color: rgb(65, 68, 88) !important;
  --tab-switcher-background: rgb(52, 55, 70) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(52, 55, 70), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(96, 113, 164) !important;
  --tab-text-color: rgb(108, 114, 147) !important;
  --tab-text-color-active: rgb(208, 210, 220) !important;
  --tab-text-color-focused: rgb(208, 210, 220) !important;
  --tab-text-color-focused-active: rgb(208, 210, 220) !important;
  --tab-text-color-focused-active-current: #f8f8f2 !important;
  --tab-text-color-focused-highlighted: rgb(121, 139, 180) !important;
  --table-add-button-border-color: rgb(65, 68, 88) !important;
  --table-border-color: rgb(65, 68, 88) !important;
  --table-drag-handle-background-active: rgb(96, 113, 164) !important;
  --table-drag-handle-color: rgb(108, 114, 147) !important;
  --table-header-background: rgb(52, 55, 70) !important;
  --table-header-border-color: rgb(65, 68, 88) !important;
  --table-header-color: #f8f8f2 !important;
  --table-selection: rgba(96, 113, 164, 0.1) !important;
  --table-selection-border-color: rgb(96, 113, 164) !important;
  --tag-background: rgba(96, 113, 164, 0.2) !important;
  --tag-background-hover: rgba(96, 113, 164, 0.4) !important;
  --tag-border-color: rgba(96, 113, 164, 0.15) !important;
  --tag-border-color-hover: rgba(96, 113, 164, 0.15) !important;
  --tag-color: #ff79c6 !important;
  --tag-color-hover: #ff79c6 !important;
  --tag-padding-x: 0.25em !important;
  --tag-padding-y: 0.125em !important;
  --tag-radius: 0.1875em !important;
  --tag-size: 16px !important;
  --tertiary: rgb(144, 160, 193) !important;
  --text-accent: rgb(121, 139, 180) !important;
  --text-accent-hover: rgb(144, 160, 193) !important;
  --text-faint: rgb(108, 114, 147) !important;
  --text-muted: rgb(208, 210, 220) !important;
  --text-normal: #f8f8f2 !important;
  --text-selection: #44475a !important;
  --textHighlight: rgba(96, 113, 164, 0.1) !important;
  --titlebar-background: rgb(52, 55, 70) !important;
  --titlebar-background-focused: rgb(65, 68, 88) !important;
  --titlebar-border-color: rgb(65, 68, 88) !important;
  --titlebar-text-color: rgb(208, 210, 220) !important;
  --titlebar-text-color-focused: #f8f8f2 !important;
  --vault-profile-color: #f8f8f2 !important;
  --vault-profile-color-hover: #f8f8f2 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(52, 55, 70);
  color: rgb(248, 248, 242);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(52, 55, 70);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 68, 88);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(52, 55, 70);
  border-left-color: rgb(65, 68, 88);
  color: rgb(248, 248, 242);
}

body div#quartz-root {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

body .page article p > em, em {
  color: rgb(241, 250, 140);
  outline: rgb(241, 250, 140) none 0px;
  text-decoration: rgb(241, 250, 140);
  text-decoration-color: rgb(241, 250, 140);
}

body .page article p > i, i {
  color: rgb(241, 250, 140);
  outline: rgb(241, 250, 140) none 0px;
  text-decoration: rgb(241, 250, 140);
  text-decoration-color: rgb(241, 250, 140);
}

body .page article p > strong, strong {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

body .text-highlight {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body del {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: line-through rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body p {
  color: rgb(208, 210, 220);
  outline: rgb(208, 210, 220) none 0px;
  text-decoration: rgb(208, 210, 220);
  text-decoration-color: rgb(208, 210, 220);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 121, 198);
  outline: rgb(255, 121, 198) none 0px;
  text-decoration: underline rgb(255, 121, 198);
  text-decoration-color: rgb(255, 121, 198);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 121, 198);
  outline: rgb(255, 121, 198) none 0px;
  text-decoration: underline rgb(255, 121, 198);
  text-decoration-color: rgb(255, 121, 198);
}

body a.internal.broken {
  color: rgb(255, 121, 198);
  outline: rgb(255, 121, 198) none 0px;
  text-decoration: underline rgb(255, 121, 198);
  text-decoration-color: rgb(255, 121, 198);
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
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ul > li {
  color: rgb(248, 248, 242);
}

body ul.overflow {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(108, 114, 147);
  text-decoration: rgb(108, 114, 147);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body table {
  color: rgb(248, 248, 242);
  margin-top: 0px;
}

body td {
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
  color: rgb(248, 248, 242);
}

body th {
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
  color: rgb(248, 248, 242);
}

body tr {
  background-color: rgb(52, 55, 70);
}`,
    code: `body code {
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
  color: rgb(208, 210, 220);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(48, 50, 65);
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(48, 50, 65);
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
  color: rgb(248, 248, 242);
}

body pre > code > [data-line] {
  border-left-color: rgb(80, 250, 123);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(80, 250, 123);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(80, 250, 123);
  border-left-color: rgb(80, 250, 123);
  border-right-color: rgb(80, 250, 123);
  border-top-color: rgb(80, 250, 123);
}

body pre > code, pre:has(> code) {
  background-color: rgb(48, 50, 65);
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
}

body pre:has(> code) {
  background-color: rgb(48, 50, 65);
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
}`,
    images: `body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body figcaption {
  color: rgb(248, 248, 242);
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
  background-color: rgb(48, 50, 65);
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
}

body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(96, 113, 164);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(96, 113, 164);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(108, 114, 147);
  text-decoration: rgb(108, 114, 147);
  text-decoration-color: rgb(108, 114, 147);
}

body input[type=checkbox] {
  border-bottom-color: rgb(108, 114, 147);
  border-left-color: rgb(108, 114, 147);
  border-right-color: rgb(108, 114, 147);
  border-top-color: rgb(108, 114, 147);
  margin-left: -26.96px;
  margin-right: 10.96px;
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
  background-color: rgb(59, 62, 79);
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(87, 91, 117);
  border-left-color: rgb(87, 91, 117);
  border-right-color: rgb(87, 91, 117);
  border-top-color: rgb(87, 91, 117);
}

body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
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
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(87, 91, 117);
  border-left-color: rgb(87, 91, 117);
  border-right-color: rgb(87, 91, 117);
  border-top-color: rgb(87, 91, 117);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(52, 55, 70);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(96, 113, 164, 0.2);
  border-bottom-color: rgba(96, 113, 164, 0.15);
  border-bottom-left-radius: 2.625px;
  border-bottom-right-radius: 2.625px;
  border-left-color: rgba(96, 113, 164, 0.15);
  border-right-color: rgba(96, 113, 164, 0.15);
  border-top-color: rgba(96, 113, 164, 0.15);
  border-top-left-radius: 2.625px;
  border-top-right-radius: 2.625px;
}

body a.internal.tag-link::before {
  color: rgb(255, 121, 198);
}

body h1 {
  color: rgb(255, 121, 198);
}

body h2 {
  color: rgb(189, 147, 249);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 121, 198);
}

body h3 {
  color: rgb(139, 233, 253);
}

body h4 {
  color: rgb(80, 250, 123);
}

body h5 {
  color: rgb(241, 250, 140);
}

body h6 {
  color: rgb(255, 184, 108);
}

body hr {
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-corner {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-track {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(208, 210, 220);
  text-decoration: rgb(208, 210, 220);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(208, 210, 220);
  text-decoration: rgb(208, 210, 220);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(208, 210, 220);
  text-decoration: rgb(208, 210, 220);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
  color: rgb(208, 210, 220);
}`,
    footer: `body footer {
  background-color: rgb(52, 55, 70);
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
  color: rgb(208, 210, 220);
}

body footer ul li a {
  color: rgb(208, 210, 220);
  text-decoration: rgb(208, 210, 220);
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
  color: rgb(208, 210, 220);
  text-decoration: rgb(208, 210, 220);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(208, 210, 220);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body li.section-li > .section .meta {
  color: rgb(208, 210, 220);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(208, 210, 220);
  text-decoration: rgb(208, 210, 220);
}

body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
  color: rgb(208, 210, 220);
}

body .darkmode svg {
  color: rgb(208, 210, 220);
  stroke: rgb(208, 210, 220);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
  color: rgb(208, 210, 220);
}

body .breadcrumb-element p {
  color: rgb(108, 114, 147);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .metadata {
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
  color: rgb(208, 210, 220);
}

body .metadata-properties {
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
  color: rgb(208, 210, 220);
}

body .navigation-progress {
  background-color: rgb(52, 55, 70);
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
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
  color: rgb(208, 210, 220);
}

body kbd {
  background-color: rgb(48, 50, 65);
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
  color: rgb(208, 210, 220);
  font-size: 14.928px;
  padding-bottom: 1.4928px;
  padding-left: 3.732px;
  padding-right: 3.732px;
  padding-top: 1.4928px;
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
