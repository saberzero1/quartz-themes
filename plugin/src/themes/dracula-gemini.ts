import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dracula-gemini", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 225;
  --accent-l: 51%;
  --accent-s: 27%;
  --background-modifier-active-hover: rgba(96, 113, 164, 0.1);
  --background-modifier-border: rgb(65, 68, 88);
  --background-modifier-border-focus: rgb(87, 91, 117);
  --background-modifier-border-hover: rgb(72, 75, 97);
  --background-modifier-form-field: rgb(59, 62, 79);
  --background-modifier-form-field-hover: rgb(59, 62, 79);
  --background-primary: #282a36;
  --background-primary-alt: rgb(48, 50, 65);
  --background-secondary: rgb(52, 55, 70);
  --background-secondary-alt: rgb(65, 68, 88);
  --bases-cards-background: #282a36;
  --bases-cards-cover-background: rgb(48, 50, 65);
  --bases-cards-shadow: 0 0 0 1px rgb(65, 68, 88);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(72, 75, 97);
  --bases-embed-border-color: rgb(65, 68, 88);
  --bases-group-heading-property-color: rgb(208, 210, 220);
  --bases-table-border-color: rgb(65, 68, 88);
  --bases-table-cell-background-active: #282a36;
  --bases-table-cell-background-disabled: rgb(48, 50, 65);
  --bases-table-cell-background-selected: rgba(96, 113, 164, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(87, 91, 117);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(96, 113, 164);
  --bases-table-group-background: rgb(48, 50, 65);
  --bases-table-header-background: #282a36;
  --bases-table-header-color: rgb(208, 210, 220);
  --bases-table-summary-background: #282a36;
  --blockquote-border-color: #f1fa8c;
  --blockquote-border-thickness: 4px;
  --blockquote-color: #f4f9bf;
  --blur-background: color-mix(in srgb, rgb(65, 68, 88) 65%, transparent) linear-gradient(rgb(65, 68, 88), color-mix(in srgb, rgb(65, 68, 88) 65%, transparent));
  --bold-color: #ffb86c;
  --canvas-background: #282a36;
  --canvas-card-label-color: rgb(108, 114, 147);
  --canvas-dot-pattern: rgb(65, 68, 88);
  --caret-color: #f8f8f2;
  --checkbox-border-color: rgb(108, 114, 147);
  --checkbox-border-color-hover: rgb(208, 210, 220);
  --checkbox-color: rgb(96, 113, 164);
  --checkbox-color-hover: rgb(121, 139, 180);
  --checkbox-marker-color: #282a36;
  --checklist-done-color: rgb(108, 114, 147);
  --checklist-done-decoration: none;
  --code-background: rgb(48, 50, 65);
  --code-border-color: rgb(65, 68, 88);
  --code-comment: #6272a4;
  --code-function: #50fa7b;
  --code-important: #ff5555;
  --code-keyword: #ff79c6;
  --code-normal: rgb(208, 210, 220);
  --code-operator: #f8f8f2;
  --code-property: #ffb86c;
  --code-punctuation: rgb(208, 210, 220);
  --code-size: 0.933em;
  --code-string: #f1fa8c;
  --code-tag: #ff5555;
  --code-value: #bd93f9;
  --collapse-icon-color: rgb(108, 114, 147);
  --collapse-icon-color-collapsed: rgb(121, 139, 180);
  --color-accent: rgb(96, 113, 164);
  --color-accent-1: rgb(121, 139, 180);
  --color-accent-2: rgb(144, 160, 193);
  --color-accent-hsl: 225, 27%, 51%;
  --color-base-00: #282a36;
  --color-base-10: rgb(48, 50, 65);
  --color-base-100: #f8f8f2;
  --color-base-20: rgb(52, 55, 70);
  --color-base-25: rgb(59, 62, 79);
  --color-base-30: rgb(65, 68, 88);
  --color-base-35: rgb(72, 75, 97);
  --color-base-40: rgb(87, 91, 117);
  --color-base-50: rgb(108, 114, 147);
  --color-base-60: rgb(152, 156, 179);
  --color-base-70: rgb(208, 210, 220);
  --color-dracula-background: #282a36;
  --color-dracula-comment: #6272a4;
  --color-dracula-cyan: #8be9fd;
  --color-dracula-foreground: #f8f8f2;
  --color-dracula-green: #50fa7b;
  --color-dracula-orange: #ffb86c;
  --color-dracula-pink: #ff79c6;
  --color-dracula-purple: #bd93f9;
  --color-dracula-red: #ff5555;
  --color-dracula-selection: #44475a;
  --color-dracula-yellow: #f1fa8c;
  --color-dracula-yellow-ish: #f4f9bf;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(65, 68, 88);
  --divider-color-hover: rgb(96, 113, 164);
  --dropdown-background: rgb(65, 68, 88);
  --dropdown-background-hover: rgb(72, 75, 97);
  --embed-block-shadow-hover: 0 0 0 1px rgb(65, 68, 88), inset 0 0 0 1px rgb(65, 68, 88);
  --embed-border-start: 2px solid rgb(96, 113, 164);
  --empty-line-height: 1em;
  --file-header-background: #282a36;
  --file-header-background-focused: #282a36;
  --file-margins: 32px 48px;
  --flair-background: rgb(65, 68, 88);
  --flair-color: #f8f8f2;
  --footnote-divider-color: rgb(65, 68, 88);
  --footnote-id-color: rgb(208, 210, 220);
  --footnote-id-color-no-occurrences: rgb(108, 114, 147);
  --graph-line: rgb(72, 75, 97);
  --graph-node: rgb(208, 210, 220);
  --graph-node-focused: rgb(121, 139, 180);
  --graph-node-unresolved: rgb(108, 114, 147);
  --graph-text: #f8f8f2;
  --gray: var(--text-muted);
  --h1-color: #ff79c6;
  --h1-line-height: 1.3125;
  --h1-size: 2em;
  --h1-weight: 600;
  --h2-color: #bd93f9;
  --h2-line-height: 1.2847;
  --h2-size: 1.8em;
  --h2-weight: 600;
  --h3-color: #8be9fd;
  --h3-line-height: 1.2891;
  --h3-size: 1.6em;
  --h3-weight: 600;
  --h4-color: #50fa7b;
  --h4-line-height: 1.2946;
  --h4-size: 1.4em;
  --h4-weight: 600;
  --h5-color: #f1fa8c;
  --h5-line-height: 1.3021;
  --h5-size: 1.2em;
  --h5-weight: 600;
  --h6-color: #ffb86c;
  --h6-line-height: 1.3125;
  --header-hanging-margin: 30px;
  --heading-formatting: rgb(108, 114, 147);
  --heading-spacing: 0;
  --highlight: var(--background-modifier-active-hover);
  --hr-color: rgb(65, 68, 88);
  --icon-color: rgb(208, 210, 220);
  --icon-color-active: rgb(121, 139, 180);
  --icon-color-focused: #f8f8f2;
  --icon-color-hover: rgb(208, 210, 220);
  --inline-title-color: #ff79c6;
  --inline-title-line-height: 1.3125;
  --inline-title-size: 2em;
  --inline-title-weight: 600;
  --input-date-separator: rgb(108, 114, 147);
  --input-placeholder-color: rgb(108, 114, 147);
  --interactive-accent: rgb(96, 113, 164);
  --interactive-accent-hover: rgb(121, 139, 180);
  --interactive-accent-hsl: 225, 27%, 51%;
  --interactive-hover: rgb(72, 75, 97);
  --interactive-normal: rgb(65, 68, 88);
  --italic-color: #f1fa8c;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #ff79c6;
  --link-color-hover: #bd93f9;
  --link-external-color: #ff79c6;
  --link-external-color-hover: #bd93f9;
  --link-unresolved-color: #ff79c6;
  --link-unresolved-decoration-color: #ff79c6;
  --link-unresolved-opacity: 0.5;
  --list-checkbox-margin-left: 6.16px;
  --list-checkbox-margin-right: 10.96px;
  --list-indent: 1.54688em;
  --list-indent-spacing: 0.125em;
  --list-item-gap: 0.375em;
  --list-marker-color: rgb(108, 114, 147);
  --list-marker-color-collapsed: rgb(121, 139, 180);
  --list-marker-color-hover: rgb(208, 210, 220);
  --list-ol-bullet-width: 1.75em;
  --list-spacing: 0;
  --list-ul-bullet-spacing: 0.0805em;
  --menu-background: rgb(52, 55, 70);
  --menu-border-color: rgb(72, 75, 97);
  --metadata-border-color: rgb(65, 68, 88);
  --metadata-divider-color: rgb(65, 68, 88);
  --metadata-input-text-color: #f8f8f2;
  --metadata-label-text-color: rgb(208, 210, 220);
  --metadata-label-text-color-hover: rgb(208, 210, 220);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(87, 91, 117);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(72, 75, 97);
  --modal-background: #282a36;
  --modal-border-color: rgb(87, 91, 117);
  --nav-collapse-icon-color: rgb(108, 114, 147);
  --nav-collapse-icon-color-collapsed: rgb(108, 114, 147);
  --nav-heading-color: #f8f8f2;
  --nav-heading-color-collapsed: rgb(108, 114, 147);
  --nav-heading-color-collapsed-hover: rgb(208, 210, 220);
  --nav-heading-color-hover: #f8f8f2;
  --nav-item-background-selected: rgba(96, 113, 164, 0.15);
  --nav-item-color: rgb(208, 210, 220);
  --nav-item-color-active: #f8f8f2;
  --nav-item-color-highlighted: rgb(121, 139, 180);
  --nav-item-color-hover: #f8f8f2;
  --nav-item-color-selected: #f8f8f2;
  --nav-tag-color: rgb(108, 114, 147);
  --nav-tag-color-active: rgb(208, 210, 220);
  --nav-tag-color-hover: rgb(208, 210, 220);
  --pdf-background: #282a36;
  --pdf-page-background: #282a36;
  --pdf-shadow: 0 0 0 1px rgb(65, 68, 88);
  --pdf-sidebar-background: #282a36;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(65, 68, 88);
  --pill-border-color: rgb(65, 68, 88);
  --pill-border-color-hover: rgb(72, 75, 97);
  --pill-color: rgb(208, 210, 220);
  --pill-color-hover: #f8f8f2;
  --pill-color-remove: rgb(108, 114, 147);
  --pill-color-remove-hover: rgb(121, 139, 180);
  --prompt-background: #282a36;
  --prompt-border-color: rgb(87, 91, 117);
  --raised-background: color-mix(in srgb, rgb(65, 68, 88) 65%, transparent) linear-gradient(rgb(65, 68, 88), color-mix(in srgb, rgb(65, 68, 88) 65%, transparent));
  --ribbon-background: rgb(52, 55, 70);
  --ribbon-background-collapsed: #282a36;
  --search-clear-button-color: rgb(208, 210, 220);
  --search-icon-color: rgb(208, 210, 220);
  --search-result-background: #282a36;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #f8f8f2;
  --setting-items-background: rgb(48, 50, 65);
  --setting-items-border-color: rgb(65, 68, 88);
  --slider-thumb-border-color: rgb(72, 75, 97);
  --slider-track-background: rgb(65, 68, 88);
  --status-bar-background: rgb(52, 55, 70);
  --status-bar-border-color: rgb(65, 68, 88);
  --status-bar-text-color: rgb(208, 210, 220);
  --suggestion-background: #282a36;
  --tab-background-active: #282a36;
  --tab-container-background: rgb(52, 55, 70);
  --tab-divider-color: rgb(72, 75, 97);
  --tab-outline-color: rgb(65, 68, 88);
  --tab-switcher-background: rgb(52, 55, 70);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(52, 55, 70), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(96, 113, 164);
  --tab-text-color: rgb(108, 114, 147);
  --tab-text-color-active: rgb(208, 210, 220);
  --tab-text-color-focused: rgb(208, 210, 220);
  --tab-text-color-focused-active: rgb(208, 210, 220);
  --tab-text-color-focused-active-current: #f8f8f2;
  --tab-text-color-focused-highlighted: rgb(121, 139, 180);
  --table-add-button-border-color: rgb(65, 68, 88);
  --table-border-color: rgb(65, 68, 88);
  --table-drag-handle-background-active: rgb(96, 113, 164);
  --table-drag-handle-color: rgb(108, 114, 147);
  --table-header-background: rgb(52, 55, 70);
  --table-header-border-color: rgb(65, 68, 88);
  --table-header-color: #f8f8f2;
  --table-selection: rgba(96, 113, 164, 0.1);
  --table-selection-border-color: rgb(96, 113, 164);
  --tag-background: rgba(96, 113, 164, 0.2);
  --tag-background-hover: rgba(96, 113, 164, 0.4);
  --tag-border-color: rgba(96, 113, 164, 0.15);
  --tag-border-color-hover: rgba(96, 113, 164, 0.15);
  --tag-color: #ff79c6;
  --tag-color-hover: #ff79c6;
  --tag-padding-x: 0.25em;
  --tag-padding-y: 0.125em;
  --tag-radius: 0.1875em;
  --tag-size: 16px;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(121, 139, 180);
  --text-accent-hover: rgb(144, 160, 193);
  --text-faint: rgb(108, 114, 147);
  --text-muted: rgb(208, 210, 220);
  --text-normal: #f8f8f2;
  --text-selection: #44475a;
  --textHighlight: var(--background-modifier-active-hover);
  --titlebar-background: rgb(52, 55, 70);
  --titlebar-background-focused: rgb(65, 68, 88);
  --titlebar-border-color: rgb(65, 68, 88);
  --titlebar-text-color: rgb(208, 210, 220);
  --titlebar-text-color-focused: #f8f8f2;
  --vault-profile-color: #f8f8f2;
  --vault-profile-color-hover: #f8f8f2;
  --quartz-icon-color: currentColor;
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
