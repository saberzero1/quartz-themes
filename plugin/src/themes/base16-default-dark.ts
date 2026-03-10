import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "base16-default-dark",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --background-modifier-border: #383838;
  --background-modifier-box-shadow: none;
  --background-modifier-cover: rgba(24, 24, 24, 0.8);
  --background-modifier-error: #ab4642;
  --background-modifier-error-hover: #ab4642;
  --background-modifier-error-rgb: 171, 70, 66;
  --background-modifier-form-field: #181818;
  --background-modifier-form-field-highlighted: #181818;
  --background-modifier-form-field-hover: #181818;
  --background-modifier-success: #a1b56c;
  --background-primary: #181818;
  --background-primary-alt: #181818;
  --background-secondary: #181818;
  --background-secondary-alt: #181818;
  --bases-cards-background: #181818;
  --bases-cards-cover-background: #181818;
  --bases-cards-shadow: 0 0 0 1px #383838;
  --bases-embed-border-color: #383838;
  --bases-group-heading-property-color: #b8b8b8;
  --bases-table-border-color: #383838;
  --bases-table-cell-background-active: #181818;
  --bases-table-cell-background-disabled: #181818;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #7cafc2;
  --bases-table-group-background: #181818;
  --bases-table-header-background: #181818;
  --bases-table-header-color: #b8b8b8;
  --bases-table-summary-background: #181818;
  --blockquote-border-color: #7cafc2;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --bold-color: #ab4642;
  --bold-weight: 600;
  --bullet-new-color: rgb(72, 72, 72);
  --callout-title-weight: 600;
  --canvas-background: #181818;
  --canvas-card-label-color: #585858;
  --caret-color: #d8d8d8;
  --checkbox-border-color: #585858;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-color: #7cafc2;
  --checkbox-color-hover: #86c1b9;
  --checkbox-marker-color: #181818;
  --checklist-done-color: #b8b8b8;
  --code-background: #202020;
  --code-border-color: #383838;
  --code-comment: #585858;
  --code-function: #7cafc2;
  --code-important: #f7ca88;
  --code-keyword: #ba8baf;
  --code-normal: #d8d8d8;
  --code-operator: #86c1b9;
  --code-property: #f7ca88;
  --code-punctuation: #d8d8d8;
  --code-string: #a1b56c;
  --code-tag: #ab4642;
  --code-value: #f7ca88;
  --collapse-icon-color: #585858;
  --collapse-icon-color-collapsed: #7cafc2;
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(166, 139, 249);
  --color-accent-2: rgb(197, 182, 252);
  --color-blue: #7cafc2;
  --color-cyan: #86c1b9;
  --color-green: #a1b56c;
  --color-orange: #dc9656;
  --color-pink: #ba8baf;
  --color-purple: #ba8baf;
  --color-red: #ab4642;
  --color-yellow: #f7ca88;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #383838;
  --divider-color-hover: #484848;
  --dropdown-background: #282828;
  --dropdown-background-hover: #383838;
  --embed-block-shadow-hover: 0 0 0 1px #383838, inset 0 0 0 1px #383838;
  --embed-border-start: 2px solid #7cafc2;
  --file-header-background: #181818;
  --file-header-background-focused: #181818;
  --flair-background: #282828;
  --flair-color: #d8d8d8;
  --footnote-divider-color: #383838;
  --footnote-id-color: #b8b8b8;
  --footnote-id-color-no-occurrences: #585858;
  --graph-line: #383838;
  --graph-node: #7cafc2;
  --graph-node-attachment: #f7ca88;
  --graph-node-focused: #7cafc2;
  --graph-node-tag: #a1b56c;
  --graph-node-unresolved: #585858;
  --graph-text: #d8d8d8;
  --gray: var(--text-muted);
  --heading-color: #d8d8d8;
  --heading-formatting: #585858;
  --heading-spacing: 2.5rem;
  --highlight: var(--background-modifier-active-hover);
  --hr-color: #383838;
  --icon-color: #b8b8b8;
  --icon-color-active: #7cafc2;
  --icon-color-focused: #d8d8d8;
  --icon-color-hover: #b8b8b8;
  --inline-code-color: #dc9656;
  --inline-title-color: #d8d8d8;
  --input-date-separator: #585858;
  --input-placeholder-color: #585858;
  --interactive-accent: #7cafc2;
  --interactive-accent-hover: #86c1b9;
  --interactive-accent-rgb: 124, 175, 194;
  --interactive-hover: #383838;
  --interactive-normal: #282828;
  --interactive-success: #a1b56c;
  --italic-color: #a1b56c;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #7cafc2;
  --link-color-hover: #86c1b9;
  --link-external-color: #ba8baf;
  --link-external-color-hover: #86c1b9;
  --link-internal-color: #7cafc2;
  --link-internal-hover: #86c1b9;
  --link-unresolved-color: #888888;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --list-indent: 1.6em;
  --list-marker-color: #585858;
  --list-marker-color-collapsed: #7cafc2;
  --list-marker-color-hover: #b8b8b8;
  --menu-background: #181818;
  --metadata-border-color: #383838;
  --metadata-divider-color: #383838;
  --metadata-gap: 0;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #d8d8d8;
  --metadata-label-text-color: #b8b8b8;
  --metadata-label-text-color-hover: #b8b8b8;
  --metadata-label-width: 5em;
  --metadata-padding: 0;
  --modal-background: #181818;
  --nav-collapse-icon-color: #585858;
  --nav-collapse-icon-color-collapsed: #585858;
  --nav-heading-color: #d8d8d8;
  --nav-heading-color-collapsed: #585858;
  --nav-heading-color-collapsed-hover: #b8b8b8;
  --nav-heading-color-hover: #d8d8d8;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color: #b8b8b8;
  --nav-item-color-active: #d8d8d8;
  --nav-item-color-highlighted: #7cafc2;
  --nav-item-color-hover: #d8d8d8;
  --nav-item-color-selected: #d8d8d8;
  --nav-tag-color: #585858;
  --nav-tag-color-active: #b8b8b8;
  --nav-tag-color-hover: #b8b8b8;
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-shadow: 0 0 0 1px #383838;
  --pdf-sidebar-background: #181818;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838;
  --pill-border-color: #383838;
  --pill-color: #b8b8b8;
  --pill-color-hover: #d8d8d8;
  --pill-color-remove: #585858;
  --pill-color-remove-hover: #7cafc2;
  --popover-width: 600px;
  --prompt-background: #181818;
  --prompt-border-color: #383838;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent));
  --ribbon-background: #202020;
  --ribbon-background-collapsed: #181818;
  --scrollbar-active-thumb-bg: #484848;
  --scrollbar-bg: #181818;
  --scrollbar-thumb-bg: #383838;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #181818;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #d8d8d8;
  --setting-items-background: #181818;
  --setting-items-border-color: #383838;
  --sidebar-markdown-font-size: 14.4px;
  --slider-track-background: #383838;
  --status-bar-background: #181818;
  --status-bar-border-color: #383838;
  --status-bar-text-color: #b8b8b8;
  --suggestion-background: #181818;
  --sync-avatar-color-1: #ab4642;
  --sync-avatar-color-2: #dc9656;
  --sync-avatar-color-3: #f7ca88;
  --sync-avatar-color-4: #a1b56c;
  --sync-avatar-color-5: #86c1b9;
  --sync-avatar-color-6: #7cafc2;
  --sync-avatar-color-7: #ba8baf;
  --sync-avatar-color-8: #ba8baf;
  --tab-background-active: #282828;
  --tab-container-background: #181818;
  --tab-outline-color: #383838;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #d8d8d8;
  --tab-text-color-focused: #d8d8d8;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d8d8d8;
  --tab-text-color-focused-highlighted: #7cafc2;
  --table-add-button-border-color: #383838;
  --table-border-color: #383838;
  --table-drag-handle-background-active: #7cafc2;
  --table-drag-handle-color: #585858;
  --table-drag-handle-color-active: #181818;
  --table-header-border-color: #383838;
  --table-header-color: #d8d8d8;
  --table-header-weight: 600;
  --table-row-even-background: transparent;
  --table-row-odd-background: transparent;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: #7cafc2;
  --tag-background: rgba(124, 175, 194, 0.05);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: #7cafc2;
  --tag-color-hover: #7cafc2;
  --tertiary: var(--text-accent-hover);
  --text-accent: #7cafc2;
  --text-accent-hover: #86c1b9;
  --text-error: #ab4642;
  --text-faint: #585858;
  --text-muted: #b8b8b8;
  --text-normal: #d8d8d8;
  --text-on-accent: #181818;
  --text-selection: rgba(124, 175, 194, 0.3);
  --text-success: #a1b56c;
  --text-warning: #dc9656;
  --textHighlight: var(--background-modifier-active-hover);
  --titlebar-background: #181818;
  --titlebar-background-focused: #181818;
  --titlebar-border-color: #383838;
  --titlebar-text-color: #b8b8b8;
  --titlebar-text-color-focused: #d8d8d8;
  --toggle-border-color: #383838;
  --toggle-thumb-color: #d8d8d8;
  --vault-profile-color: #d8d8d8;
  --vault-profile-color-hover: #d8d8d8;
  --vim-cursor: #7cafc2;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 24, 24);
  color: rgb(216, 216, 216);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(24, 24, 24);
  color: rgb(216, 216, 216);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 24, 24);
  color: rgb(216, 216, 216);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(56, 56, 56);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 24, 24);
  border-left-color: rgb(56, 56, 56);
  color: rgb(216, 216, 216);
}

body div#quartz-root {
  background-color: rgb(24, 24, 24);
  color: rgb(216, 216, 216);
}`,
    typography: `body .page article p > b, b {
  color: rgb(171, 70, 66);
  outline: rgb(171, 70, 66) none 0px;
  text-decoration: rgb(171, 70, 66);
  text-decoration-color: rgb(171, 70, 66);
}

body .page article p > em, em {
  color: rgb(161, 181, 108);
  outline: rgb(161, 181, 108) none 0px;
  text-decoration: rgb(161, 181, 108);
  text-decoration-color: rgb(161, 181, 108);
}

body .page article p > i, i {
  color: rgb(161, 181, 108);
  outline: rgb(161, 181, 108) none 0px;
  text-decoration: rgb(161, 181, 108);
  text-decoration-color: rgb(161, 181, 108);
}

body .page article p > strong, strong {
  color: rgb(171, 70, 66);
  outline: rgb(171, 70, 66) none 0px;
  text-decoration: rgb(171, 70, 66);
  text-decoration-color: rgb(171, 70, 66);
}

body .text-highlight {
  background-color: rgba(210, 185, 60, 0.25);
  color: rgb(216, 216, 216);
  outline: rgb(216, 216, 216) none 0px;
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body del {
  color: rgb(216, 216, 216);
  outline: rgb(216, 216, 216) none 0px;
  text-decoration: line-through rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body p {
  color: rgb(184, 184, 184);
  outline: rgb(184, 184, 184) none 0px;
  text-decoration: rgb(184, 184, 184);
  text-decoration-color: rgb(184, 184, 184);
}`,
    links: `body a.external, footer a {
  color: rgb(186, 139, 175);
  outline: rgb(186, 139, 175) none 0px;
  text-decoration: underline rgb(186, 139, 175);
  text-decoration-color: rgb(186, 139, 175);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(124, 175, 194);
  outline: rgb(124, 175, 194) none 0px;
  text-decoration: rgb(124, 175, 194);
  text-decoration-color: rgb(124, 175, 194);
}

body a.internal.broken {
  color: rgb(136, 136, 136);
  outline: rgb(136, 136, 136) none 0px;
  text-decoration: rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}`,
    lists: `body dd {
  color: rgb(216, 216, 216);
}

body dt {
  color: rgb(216, 216, 216);
}

body ol > li {
  color: rgb(216, 216, 216);
}

body ol.overflow {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

body ul > li {
  color: rgb(216, 216, 216);
}

body ul.overflow {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(124, 175, 194);
  text-decoration: rgb(124, 175, 194);
}

body blockquote {
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

body table {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(64, 64, 64);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(64, 64, 64);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(64, 64, 64);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(216, 216, 216);
  margin-left: 223.562px;
  margin-right: 223.578px;
  width: 240.859px;
}

body td {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(216, 216, 216);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

body th {
  border-bottom-color: rgb(72, 72, 72);
  border-bottom-width: 2px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(216, 216, 216);
  font-weight: 700;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  text-align: left;
}

body thead {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body tr {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    code: `body code {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(40, 40, 40);
  border-left-width: 1px;
  border-right-color: rgb(40, 40, 40);
  border-right-width: 1px;
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(40, 40, 40);
  border-left-width: 1px;
  border-right-color: rgb(40, 40, 40);
  border-right-width: 1px;
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(216, 216, 216);
}

body pre > code > [data-line] {
  border-left-color: rgb(124, 175, 194);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(124, 175, 194);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(124, 175, 194);
  border-left-color: rgb(124, 175, 194);
  border-right-color: rgb(124, 175, 194);
  border-top-color: rgb(124, 175, 194);
}

body pre > code, pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(40, 40, 40);
  border-left-width: 1px;
  border-right-color: rgb(40, 40, 40);
  border-right-width: 1px;
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-left: 12px;
  padding-right: 12px;
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(40, 40, 40);
  border-left-width: 1px;
  border-right-color: rgb(40, 40, 40);
  border-right-width: 1px;
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-left: 12px;
  padding-right: 12px;
}`,
    images: `body audio {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

body figcaption {
  color: rgb(216, 216, 216);
}

body figure {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

body img {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

body video {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}`,
    embeds: `body .file-embed {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

body .footnotes {
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

body .transclude {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

body .transclude-inner {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(184, 184, 184);
  text-decoration: line-through rgb(184, 184, 184);
  text-decoration-color: rgb(184, 184, 184);
}

body input[type=checkbox] {
  border-bottom-color: rgb(88, 88, 88);
  border-left-color: rgb(88, 88, 88);
  border-right-color: rgb(88, 88, 88);
  border-top-color: rgb(88, 88, 88);
}

body li.task-list-item[data-task='!'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='*'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='-'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='/'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='>'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='?'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='I'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='S'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='b'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='c'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='d'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='f'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='i'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='k'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='l'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='p'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='u'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body li.task-list-item[data-task='w'] {
  color: rgb(216, 216, 216);
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

body .callout > .callout-content {
  background-color: rgb(24, 24, 24);
  padding-left: 10px;
  padding-right: 10px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(216, 216, 216);
}

body .search > .search-container > .search-space {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(216, 216, 216);
  outline: rgb(216, 216, 216) none 0px;
  text-decoration: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(216, 216, 216);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(216, 216, 216);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(216, 216, 216);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 24);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(216, 216, 216);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(124, 175, 194, 0.05);
}

body a.internal.tag-link::before {
  color: rgb(124, 175, 194);
}

body h1 {
  color: rgb(216, 216, 216);
}

body h2 {
  color: rgb(216, 216, 216);
}

body h2.page-title, h2.page-title a {
  color: rgb(216, 216, 216);
}

body h3 {
  color: rgb(216, 216, 216);
}

body h4 {
  color: rgb(216, 216, 216);
}

body h5 {
  color: rgb(216, 216, 216);
}

body h6 {
  color: rgb(216, 216, 216);
}

body hr {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-top: 4px;
}

body ::-webkit-scrollbar {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

body ::-webkit-scrollbar-corner {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

body ::-webkit-scrollbar-track {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}`,
    footer: `body footer {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(184, 184, 184);
}

body footer ul li a {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(216, 216, 216);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 184, 184);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

body li.section-li > .section .meta {
  color: rgb(184, 184, 184);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

body ul.section-ul {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

body .darkmode svg {
  color: rgb(184, 184, 184);
  stroke: rgb(184, 184, 184);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

body .breadcrumb-element p {
  color: rgb(88, 88, 88);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(56, 56, 56);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

body .metadata {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(184, 184, 184);
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
  margin-top: 3px;
}

body .navigation-progress {
  background-color: rgb(24, 24, 24);
}

body .page-header h2.page-title {
  color: rgb(216, 216, 216);
}

body abbr {
  color: rgb(216, 216, 216);
  text-decoration: underline dotted rgb(216, 216, 216);
}

body details {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

body input[type=text] {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

body kbd {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

body progress {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

body sub {
  color: rgb(216, 216, 216);
}

body summary {
  color: rgb(216, 216, 216);
}

body sup {
  color: rgb(216, 216, 216);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 115, 247);
  --blockquote-border-color: rgb(153, 115, 247);
  --bold-weight: 600;
  --bullet-new-color: rgb(72, 72, 72);
  --callout-title-weight: 600;
  --checkbox-color: rgb(153, 115, 247);
  --checkbox-color-hover: rgb(166, 139, 249);
  --collapse-icon-color-collapsed: rgb(138, 92, 245);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(153, 115, 247);
  --color-accent-2: rgb(166, 139, 249);
  --divider-color-hover: rgb(153, 115, 247);
  --embed-border-start: 2px solid rgb(153, 115, 247);
  --graph-node-focused: rgb(138, 92, 245);
  --heading-spacing: 2.5rem;
  --highlight: var(--background-modifier-active-hover);
  --icon-color-active: rgb(138, 92, 245);
  --interactive-accent: rgb(153, 115, 247);
  --interactive-accent-hover: rgb(166, 139, 249);
  --link-color: rgb(138, 92, 245);
  --link-color-hover: rgb(166, 139, 249);
  --link-external-color: rgb(138, 92, 245);
  --link-external-color-hover: rgb(166, 139, 249);
  --link-unresolved-color: rgb(138, 92, 245);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --list-indent: 2.25em;
  --list-marker-color-collapsed: rgb(138, 92, 245);
  --metadata-gap: 0;
  --metadata-input-height: 28px;
  --metadata-label-width: 5em;
  --metadata-padding: 0;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-highlighted: rgb(138, 92, 245);
  --pill-color-remove-hover: rgb(138, 92, 245);
  --popover-width: 600px;
  --secondary: var(--text-accent);
  --sidebar-markdown-font-size: 14.4px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color-focused-highlighted: rgb(138, 92, 245);
  --table-drag-handle-background-active: rgb(153, 115, 247);
  --table-header-weight: 600;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(153, 115, 247);
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(138, 92, 245);
  --tag-color-hover: rgb(138, 92, 245);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(138, 92, 245);
  --text-accent-hover: rgb(166, 139, 249);
  --text-selection: rgba(138, 92, 245, 0.2);
  --textHighlight: var(--background-modifier-active-hover);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}`,
    typography: `body .text-highlight {
  background-color: rgba(210, 185, 60, 0.25);
}`,
    links: `body a.internal, .breadcrumb-container .breadcrumb-element > a {
  text-decoration: rgb(138, 92, 245);
}

body a.internal.broken {
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}`,
    tables: `body table {
  margin-left: 231.391px;
  margin-right: 231.391px;
}`,
    embeds: `body .transclude {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}

body .transclude-inner {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}`,
    search: `body .search > .search-container > .search-space {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    misc: `body .metadata {
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  margin-top: 3px;
}`,
  },
};
