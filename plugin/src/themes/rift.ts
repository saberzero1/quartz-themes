import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "rift", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 160 !important;
  --accent-l: 45% !important;
  --accent-s: 20% !important;
  --background-modifier-active-hover: rgba(92, 138, 122, 0.1) !important;
  --background-modifier-error: #C06C6C !important;
  --background-modifier-error-hover: #C06C6C !important;
  --background-modifier-error-rgb: 192, 108, 108 !important;
  --background-modifier-success: #5E9A84 !important;
  --background-modifier-success-rgb: 94, 154, 132 !important;
  --background-primary: #2B2F3A !important;
  --background-primary-alt: #303543 !important;
  --background-secondary: #3A3F4C !important;
  --background-secondary-alt: #444B5A !important;
  --bases-cards-background: #2B2F3A !important;
  --bases-cards-cover-background: #303543 !important;
  --bases-group-heading-property-color: #9CA3AF !important;
  --bases-table-cell-background-active: #2B2F3A !important;
  --bases-table-cell-background-disabled: #303543 !important;
  --bases-table-cell-background-selected: rgba(92, 138, 122, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(92, 138, 122) !important;
  --bases-table-group-background: #303543 !important;
  --bases-table-header-background: #2B2F3A !important;
  --bases-table-header-color: #9CA3AF !important;
  --bases-table-summary-background: #2B2F3A !important;
  --blockquote-border-color: rgb(92, 138, 122) !important;
  --bold-color: #D8C080 !important;
  --callout-bug: 192, 108, 108;
  --callout-default: 94, 137, 180;
  --callout-error: 192, 108, 108;
  --callout-example: 137, 112, 176;
  --callout-fail: 192, 108, 108;
  --callout-important: 94, 168, 168;
  --callout-info: 94, 137, 180;
  --callout-question: 204, 148, 107;
  --callout-success: 94, 154, 132;
  --callout-summary: 94, 168, 168;
  --callout-tip: 94, 168, 168;
  --callout-todo: 94, 137, 180;
  --callout-warning: 204, 148, 107;
  --canvas-background: #2B2F3A !important;
  --canvas-card-label-color: #6B7280 !important;
  --canvas-color-1: 192, 108, 108 !important;
  --canvas-color-2: 204, 148, 107 !important;
  --canvas-color-3: 216, 192, 128 !important;
  --canvas-color-4: 94, 154, 132 !important;
  --canvas-color-5: 94, 168, 168 !important;
  --canvas-color-6: 137, 112, 176 !important;
  --caret-color: #E5E7EB !important;
  --checkbox-border-color: #6B7280 !important;
  --checkbox-border-color-hover: #9CA3AF !important;
  --checkbox-color: rgb(92, 138, 122) !important;
  --checkbox-color-hover: rgb(108, 157, 138) !important;
  --checkbox-marker-color: #2B2F3A !important;
  --checklist-done-color: #9CA3AF !important;
  --code-background: #303543 !important;
  --code-comment: #6B7280 !important;
  --code-function: #D8C080 !important;
  --code-important: #CC946B !important;
  --code-keyword: #B17CA6 !important;
  --code-normal: #E5E7EB !important;
  --code-operator: #C06C6C !important;
  --code-property: #5EA8A8 !important;
  --code-punctuation: #9CA3AF !important;
  --code-string: #5E9A84 !important;
  --code-tag: #C06C6C !important;
  --code-value: #8970B0 !important;
  --collapse-icon-color: #6B7280 !important;
  --collapse-icon-color-collapsed: #5E9A84 !important;
  --color-accent: rgb(92, 138, 122) !important;
  --color-accent-1: rgb(108, 157, 138) !important;
  --color-accent-2: rgb(125, 170, 152) !important;
  --color-accent-hsl: 160, 20%, 45% !important;
  --color-blue: #5E89B4 !important;
  --color-blue-hover: #89B3E0 !important;
  --color-blue-hover-rgb: 137, 179, 224 !important;
  --color-blue-rgb: 94, 137, 180 !important;
  --color-cyan: #5EA8A8 !important;
  --color-cyan-hover: #87D0D0 !important;
  --color-cyan-hover-rgb: 135, 208, 208 !important;
  --color-cyan-rgb: 94, 168, 168 !important;
  --color-green: #5E9A84 !important;
  --color-green-hover: #8FC9B0 !important;
  --color-green-hover-rgb: 143, 201, 176 !important;
  --color-green-rgb: 94, 154, 132 !important;
  --color-orange: #CC946B !important;
  --color-orange-hover: #E9B286 !important;
  --color-orange-hover-rgb: 233, 178, 134 !important;
  --color-orange-rgb: 204, 148, 107 !important;
  --color-pink: #B17CA6 !important;
  --color-pink-hover: #D79DC9 !important;
  --color-pink-hover-rgb: 215, 157, 201 !important;
  --color-pink-rgb: 177, 124, 166 !important;
  --color-purple: #8970B0 !important;
  --color-purple-hover: #B094E3 !important;
  --color-purple-hover-rgb: 176, 148, 227 !important;
  --color-purple-rgb: 137, 112, 176 !important;
  --color-red: #C06C6C !important;
  --color-red-hover: #E08B8B !important;
  --color-red-hover-rgb: 224, 139, 139 !important;
  --color-red-rgb: 192, 108, 108 !important;
  --color-yellow: #D8C080 !important;
  --color-yellow-hover: #EFDC9E !important;
  --color-yellow-hover-rgb: 239, 220, 158 !important;
  --color-yellow-rgb: 216, 192, 128 !important;
  --dark: #E5E7EB !important;
  --darkgray: #E5E7EB !important;
  --divider-color-hover: rgb(92, 138, 122) !important;
  --embed-border-start: 2px solid rgb(92, 138, 122) !important;
  --file-header-background: #2B2F3A !important;
  --file-header-background-focused: #2B2F3A !important;
  --flair-color: #E5E7EB !important;
  --footnote-id-color: #9CA3AF !important;
  --footnote-id-color-no-occurrences: #6B7280 !important;
  --graph-node: #9CA3AF !important;
  --graph-node-attachment: #D8C080 !important;
  --graph-node-focused: #5E9A84 !important;
  --graph-node-tag: #5E9A84 !important;
  --graph-node-unresolved: #6B7280 !important;
  --graph-text: #E5E7EB !important;
  --gray: #9CA3AF !important;
  --h1-blue: #DCE5EE !important;
  --h1-color: #D3E8E7 !important;
  --h1-cyan: #D9ECEC !important;
  --h1-default: #D3E8E7 !important;
  --h1-green: #DDE8E3 !important;
  --h1-orange: #F0E3D7 !important;
  --h1-pink: #F0E3EC !important;
  --h1-purple: #E3DDF0 !important;
  --h1-red: #EBDCDC !important;
  --h1-yellow: #F3EED4 !important;
  --h2-blue: #A9C0DA !important;
  --h2-color: #A1C6CF !important;
  --h2-cyan: #A7D1D1 !important;
  --h2-default: #A1C6CF !important;
  --h2-green: #A7C8B7 !important;
  --h2-orange: #DCB897 !important;
  --h2-pink: #D6B4D2 !important;
  --h2-purple: #BFB0DA !important;
  --h2-red: #D9A9A9 !important;
  --h2-yellow: #E1D08F !important;
  --h3-blue: #7D9EC2 !important;
  --h3-color: #8ABCAF !important;
  --h3-cyan: #7FB7B7 !important;
  --h3-default: #8ABCAF !important;
  --h3-green: #7FAE98 !important;
  --h3-orange: #C99570 !important;
  --h3-pink: #C18EBE !important;
  --h3-purple: #9D8BC4 !important;
  --h3-red: #C58686 !important;
  --h3-yellow: #CDB45E !important;
  --h4-blue: #5E81A3 !important;
  --h4-color: #6AA891 !important;
  --h4-cyan: #5C9B9B !important;
  --h4-default: #6AA891 !important;
  --h4-green: #5C8F77 !important;
  --h4-orange: #A87452 !important;
  --h4-pink: #A86EA5 !important;
  --h4-purple: #7E6BA8 !important;
  --h4-red: #A86868 !important;
  --h4-yellow: #AE9542 !important;
  --h5-blue: #496783 !important;
  --h5-color: #7E988A !important;
  --h5-cyan: #477979 !important;
  --h5-default: #7E988A !important;
  --h5-green: #476E5D !important;
  --h5-orange: #875C3E !important;
  --h5-pink: #845683 !important;
  --h5-purple: #615384 !important;
  --h5-red: #8E5050 !important;
  --h5-yellow: #887337 !important;
  --h6-blue: #384D66 !important;
  --h6-color: #5C7D6F !important;
  --h6-cyan: #355E5E !important;
  --h6-default: #5C7D6F !important;
  --h6-green: #345147 !important;
  --h6-orange: #644531 !important;
  --h6-pink: #5F3D5F !important;
  --h6-purple: #473D63 !important;
  --h6-red: #693C3C !important;
  --h6-yellow: #66572B !important;
  --heading-formatting: #6B7280 !important;
  --highlight: rgba(92, 138, 122, 0.1) !important;
  --icon-color: #9CA3AF !important;
  --icon-color-active: #5E9A84 !important;
  --icon-color-focused: #E5E7EB !important;
  --icon-color-hover: #9CA3AF !important;
  --inline-title-color: #D3E8E7 !important;
  --input-date-separator: #6B7280 !important;
  --input-placeholder-color: #6B7280 !important;
  --interactive-accent: rgb(92, 138, 122) !important;
  --interactive-accent-hover: rgb(108, 157, 138) !important;
  --interactive-accent-hsl: 160, 20%, 45% !important;
  --italic-color: #CC946B !important;
  --light: #2B2F3A !important;
  --lightgray: #3A3F4C !important;
  --link-color: #5E9A84 !important;
  --link-color-hover: #8FC9B0 !important;
  --link-external-color: #5E9A84 !important;
  --link-external-color-hover: #8FC9B0 !important;
  --link-unresolved-color: #5E9A84 !important;
  --link-unresolved-decoration-color: rgba(92, 138, 122, 0.3) !important;
  --list-marker-color: #6B7280 !important;
  --list-marker-color-collapsed: #5E9A84 !important;
  --list-marker-color-hover: #9CA3AF !important;
  --menu-background: #3A3F4C !important;
  --metadata-input-text-color: #E5E7EB !important;
  --metadata-label-text-color: #9CA3AF !important;
  --metadata-label-text-color-hover: #9CA3AF !important;
  --modal-background: #2B2F3A !important;
  --nav-collapse-icon-color: #6B7280 !important;
  --nav-collapse-icon-color-collapsed: #6B7280 !important;
  --nav-heading-color: #E5E7EB !important;
  --nav-heading-color-collapsed: #6B7280 !important;
  --nav-heading-color-collapsed-hover: #9CA3AF !important;
  --nav-heading-color-hover: #E5E7EB !important;
  --nav-item-background-selected: rgba(92, 138, 122, 0.15) !important;
  --nav-item-color: #9CA3AF !important;
  --nav-item-color-active: #E5E7EB !important;
  --nav-item-color-highlighted: #5E9A84 !important;
  --nav-item-color-hover: #E5E7EB !important;
  --nav-item-color-selected: #E5E7EB !important;
  --nav-tag-color: #6B7280 !important;
  --nav-tag-color-active: #9CA3AF !important;
  --nav-tag-color-hover: #9CA3AF !important;
  --pdf-background: #2B2F3A !important;
  --pdf-page-background: #2B2F3A !important;
  --pdf-sidebar-background: #2B2F3A !important;
  --pill-color: #9CA3AF !important;
  --pill-color-hover: #E5E7EB !important;
  --pill-color-remove: #6B7280 !important;
  --pill-color-remove-hover: #5E9A84 !important;
  --prompt-background: #2B2F3A !important;
  --ribbon-background: #3A3F4C !important;
  --ribbon-background-collapsed: #2B2F3A !important;
  --search-clear-button-color: #9CA3AF !important;
  --search-icon-color: #9CA3AF !important;
  --search-result-background: #2B2F3A !important;
  --secondary: #5E9A84 !important;
  --setting-group-heading-color: #E5E7EB !important;
  --setting-items-background: #303543 !important;
  --settings-related-modal-width: 80% !important;
  --status-bar-background: #3A3F4C !important;
  --status-bar-text-color: #9CA3AF !important;
  --suggestion-background: #2B2F3A !important;
  --sync-avatar-color-1: #C06C6C !important;
  --sync-avatar-color-2: #CC946B !important;
  --sync-avatar-color-3: #D8C080 !important;
  --sync-avatar-color-4: #5E9A84 !important;
  --sync-avatar-color-5: #5EA8A8 !important;
  --sync-avatar-color-6: #5E89B4 !important;
  --sync-avatar-color-7: #8970B0 !important;
  --sync-avatar-color-8: #B17CA6 !important;
  --tab-background-active: #2B2F3A !important;
  --tab-container-background: #3A3F4C !important;
  --tab-switcher-background: #3A3F4C !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #3A3F4C, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(92, 138, 122) !important;
  --tab-text-color: #6B7280 !important;
  --tab-text-color-active: #9CA3AF !important;
  --tab-text-color-focused: #9CA3AF !important;
  --tab-text-color-focused-active: #9CA3AF !important;
  --tab-text-color-focused-active-current: #E5E7EB !important;
  --tab-text-color-focused-highlighted: #5E9A84 !important;
  --table-drag-handle-background-active: rgb(92, 138, 122) !important;
  --table-drag-handle-color: #6B7280 !important;
  --table-header-color: #E5E7EB !important;
  --table-selection: rgba(92, 138, 122, 0.1) !important;
  --table-selection-border-color: rgb(92, 138, 122) !important;
  --tag-background: rgba(92, 138, 122, 0.1) !important;
  --tag-background-hover: rgba(92, 138, 122, 0.2) !important;
  --tag-border-color: rgba(92, 138, 122, 0.15) !important;
  --tag-border-color-hover: rgba(92, 138, 122, 0.15) !important;
  --tag-color: #5E9A84 !important;
  --tag-color-hover: #5E9A84 !important;
  --tertiary: #8FC9B0 !important;
  --text-accent: #5E9A84 !important;
  --text-accent-hover: #8FC9B0 !important;
  --text-error: #C06C6C !important;
  --text-faint: #6B7280 !important;
  --text-muted: #9CA3AF !important;
  --text-normal: #E5E7EB !important;
  --text-selection: rgba(92, 138, 122, 0.33) !important;
  --text-success: #5E9A84 !important;
  --text-warning: #CC946B !important;
  --textHighlight: rgba(92, 138, 122, 0.1) !important;
  --titlebar-background: #3A3F4C !important;
  --titlebar-background-focused: #444B5A !important;
  --titlebar-text-color: #9CA3AF !important;
  --titlebar-text-color-focused: #E5E7EB !important;
  --vault-profile-color: #E5E7EB !important;
  --vault-profile-color-hover: #E5E7EB !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(58, 63, 76);
  color: rgb(229, 231, 235);
}

html body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(43, 47, 58);
  color: rgb(229, 231, 235);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(58, 63, 76);
  color: rgb(229, 231, 235);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(58, 63, 76);
  color: rgb(229, 231, 235);
}

html body div#quartz-root {
  background-color: rgb(43, 47, 58);
  color: rgb(229, 231, 235);
}`,
    typography: `html body .page article p > b, b {
  color: rgb(216, 192, 128);
  outline: rgb(216, 192, 128) none 0px;
  text-decoration: rgb(216, 192, 128);
  text-decoration-color: rgb(216, 192, 128);
}

html body .page article p > em, em {
  color: rgb(204, 148, 107);
  outline: rgb(204, 148, 107) none 0px;
  text-decoration: rgb(204, 148, 107);
  text-decoration-color: rgb(204, 148, 107);
}

html body .page article p > i, i {
  color: rgb(204, 148, 107);
  outline: rgb(204, 148, 107) none 0px;
  text-decoration: rgb(204, 148, 107);
  text-decoration-color: rgb(204, 148, 107);
}

html body .page article p > strong, strong {
  color: rgb(216, 192, 128);
  outline: rgb(216, 192, 128) none 0px;
  text-decoration: rgb(216, 192, 128);
  text-decoration-color: rgb(216, 192, 128);
}

html body .text-highlight {
  color: rgb(229, 231, 235);
  outline: rgb(229, 231, 235) none 0px;
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body del {
  color: rgb(229, 231, 235);
  outline: rgb(229, 231, 235) none 0px;
  text-decoration: line-through rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body p {
  color: rgb(156, 163, 175);
  outline: rgb(156, 163, 175) none 0px;
  text-decoration: rgb(156, 163, 175);
  text-decoration-color: rgb(156, 163, 175);
}`,
    links: `html body a.external, footer a {
  color: rgb(94, 154, 132);
  outline: rgb(94, 154, 132) none 0px;
  text-decoration: underline rgb(94, 154, 132);
  text-decoration-color: rgb(94, 154, 132);
}

html body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(94, 154, 132);
  outline: rgb(94, 154, 132) none 0px;
  text-decoration: underline rgb(94, 154, 132);
  text-decoration-color: rgb(94, 154, 132);
}

html body a.internal.broken {
  color: rgb(94, 154, 132);
  outline: rgb(94, 154, 132) none 0px;
  text-decoration: underline rgba(92, 138, 122, 0.3);
  text-decoration-color: rgba(92, 138, 122, 0.3);
}`,
    lists: `html body dd {
  color: rgb(229, 231, 235);
}

html body dt {
  color: rgb(229, 231, 235);
}

html body ol > li {
  color: rgb(229, 231, 235);
}

html body ol.overflow {
  background-color: rgb(43, 47, 58);
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

html body ul > li {
  color: rgb(229, 231, 235);
}

html body ul.overflow {
  background-color: rgb(43, 47, 58);
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(107, 114, 128);
  text-decoration: rgb(107, 114, 128);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

html body table {
  color: rgb(229, 231, 235);
}

html body td {
  color: rgb(229, 231, 235);
}

html body th {
  color: rgb(229, 231, 235);
}`,
    code: `html body code {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
  color: rgb(229, 231, 235);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(48, 53, 67);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(48, 53, 67);
  color: rgb(229, 231, 235);
}

html body pre > code > [data-line] {
  border-left-color: rgb(216, 192, 128);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(216, 192, 128);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(216, 192, 128);
  border-left-color: rgb(216, 192, 128);
  border-right-color: rgb(216, 192, 128);
  border-top-color: rgb(216, 192, 128);
}

html body pre > code, pre:has(> code) {
  background-color: rgb(48, 53, 67);
}

html body pre:has(> code) {
  background-color: rgb(48, 53, 67);
}`,
    images: `html body audio {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

html body figcaption {
  color: rgb(229, 231, 235);
}

html body figure {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

html body img {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

html body video {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(48, 53, 67);
  border-bottom-color: rgb(156, 163, 175);
  border-left-color: rgb(156, 163, 175);
  border-right-color: rgb(156, 163, 175);
  border-top-color: rgb(156, 163, 175);
}

html body .footnotes {
  border-top-color: rgb(229, 231, 235);
  color: rgb(229, 231, 235);
}

html body .transclude {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(92, 138, 122);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

html body .transclude-inner {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(92, 138, 122);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(156, 163, 175);
  text-decoration: line-through rgb(156, 163, 175);
  text-decoration-color: rgb(156, 163, 175);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(107, 114, 128);
  border-left-color: rgb(107, 114, 128);
  border-right-color: rgb(107, 114, 128);
  border-top-color: rgb(107, 114, 128);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(94, 137, 180);
  border-left-color: rgb(94, 137, 180);
  border-right-color: rgb(94, 137, 180);
  border-top-color: rgb(94, 137, 180);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 94, 168, 168;
  background-color: rgba(94, 168, 168, 0.1);
  border-bottom-color: rgba(94, 168, 168, 0.25);
  border-left-color: rgba(94, 168, 168, 0.25);
  border-right-color: rgba(94, 168, 168, 0.25);
  border-top-color: rgba(94, 168, 168, 0.25);
}

html body .callout[data-callout="bug"] {
  --callout-color: 192, 108, 108;
  background-color: rgba(192, 108, 108, 0.1);
  border-bottom-color: rgba(192, 108, 108, 0.25);
  border-left-color: rgba(192, 108, 108, 0.25);
  border-right-color: rgba(192, 108, 108, 0.25);
  border-top-color: rgba(192, 108, 108, 0.25);
}

html body .callout[data-callout="danger"] {
  --callout-color: 192, 108, 108;
  background-color: rgba(192, 108, 108, 0.1);
  border-bottom-color: rgba(192, 108, 108, 0.25);
  border-left-color: rgba(192, 108, 108, 0.25);
  border-right-color: rgba(192, 108, 108, 0.25);
  border-top-color: rgba(192, 108, 108, 0.25);
}

html body .callout[data-callout="example"] {
  --callout-color: 137, 112, 176;
  background-color: rgba(137, 112, 176, 0.1);
  border-bottom-color: rgba(137, 112, 176, 0.25);
  border-left-color: rgba(137, 112, 176, 0.25);
  border-right-color: rgba(137, 112, 176, 0.25);
  border-top-color: rgba(137, 112, 176, 0.25);
}

html body .callout[data-callout="failure"] {
  --callout-color: 192, 108, 108;
  background-color: rgba(192, 108, 108, 0.1);
  border-bottom-color: rgba(192, 108, 108, 0.25);
  border-left-color: rgba(192, 108, 108, 0.25);
  border-right-color: rgba(192, 108, 108, 0.25);
  border-top-color: rgba(192, 108, 108, 0.25);
}

html body .callout[data-callout="info"] {
  --callout-color: 94, 137, 180;
  background-color: rgba(94, 137, 180, 0.1);
  border-bottom-color: rgba(94, 137, 180, 0.25);
  border-left-color: rgba(94, 137, 180, 0.25);
  border-right-color: rgba(94, 137, 180, 0.25);
  border-top-color: rgba(94, 137, 180, 0.25);
}

html body .callout[data-callout="note"] {
  --callout-color: 94, 137, 180;
  background-color: rgba(94, 137, 180, 0.1);
  border-bottom-color: rgba(94, 137, 180, 0.25);
  border-left-color: rgba(94, 137, 180, 0.25);
  border-right-color: rgba(94, 137, 180, 0.25);
  border-top-color: rgba(94, 137, 180, 0.25);
}

html body .callout[data-callout="question"] {
  --callout-color: 204, 148, 107;
  background-color: rgba(204, 148, 107, 0.1);
  border-bottom-color: rgba(204, 148, 107, 0.25);
  border-left-color: rgba(204, 148, 107, 0.25);
  border-right-color: rgba(204, 148, 107, 0.25);
  border-top-color: rgba(204, 148, 107, 0.25);
}

html body .callout[data-callout="success"] {
  --callout-color: 94, 154, 132;
  background-color: rgba(94, 154, 132, 0.1);
  border-bottom-color: rgba(94, 154, 132, 0.25);
  border-left-color: rgba(94, 154, 132, 0.25);
  border-right-color: rgba(94, 154, 132, 0.25);
  border-top-color: rgba(94, 154, 132, 0.25);
}

html body .callout[data-callout="tip"] {
  --callout-color: 94, 168, 168;
  background-color: rgba(94, 168, 168, 0.1);
  border-bottom-color: rgba(94, 168, 168, 0.25);
  border-left-color: rgba(94, 168, 168, 0.25);
  border-right-color: rgba(94, 168, 168, 0.25);
  border-top-color: rgba(94, 168, 168, 0.25);
}

html body .callout[data-callout="todo"] {
  --callout-color: 94, 137, 180;
  background-color: rgba(94, 137, 180, 0.1);
  border-bottom-color: rgba(94, 137, 180, 0.25);
  border-left-color: rgba(94, 137, 180, 0.25);
  border-right-color: rgba(94, 137, 180, 0.25);
  border-top-color: rgba(94, 137, 180, 0.25);
}

html body .callout[data-callout="warning"] {
  --callout-color: 204, 148, 107;
  background-color: rgba(204, 148, 107, 0.1);
  border-bottom-color: rgba(204, 148, 107, 0.25);
  border-left-color: rgba(204, 148, 107, 0.25);
  border-right-color: rgba(204, 148, 107, 0.25);
  border-top-color: rgba(204, 148, 107, 0.25);
}`,
    search: `html body .search > .search-button {
  color: rgb(229, 231, 235);
}

html body .search > .search-container > .search-space {
  background-color: rgb(43, 47, 58);
}

html body .search > .search-container > .search-space > * {
  color: rgb(229, 231, 235);
  outline: rgb(229, 231, 235) none 0px;
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(229, 231, 235);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(229, 231, 235);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(229, 231, 235);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(58, 63, 76);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
  color: rgb(229, 231, 235);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(229, 231, 235);
}

html body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(92, 138, 122, 0.1);
  border-bottom-color: rgba(92, 138, 122, 0.15);
  border-left-color: rgba(92, 138, 122, 0.15);
  border-right-color: rgba(92, 138, 122, 0.15);
  border-top-color: rgba(92, 138, 122, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(94, 154, 132);
}

html body h1 {
  color: rgb(211, 232, 231);
}

html body h2 {
  color: rgb(161, 198, 207);
}

html body h2.page-title, h2.page-title a {
  color: rgb(211, 232, 231);
}

html body h3 {
  color: rgb(138, 188, 175);
}

html body h4 {
  color: rgb(106, 168, 145);
}

html body h5 {
  color: rgb(126, 152, 138);
}

html body h6 {
  color: rgb(92, 125, 111);
}`,
    scrollbars: `html body .callout {
  --callout-color: 94, 137, 180;
  border-bottom-color: rgba(94, 137, 180, 0.25);
  border-left-color: rgba(94, 137, 180, 0.25);
  border-right-color: rgba(94, 137, 180, 0.25);
  border-top-color: rgba(94, 137, 180, 0.25);
}

html body ::-webkit-scrollbar {
  background: rgb(43, 47, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 47, 58);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(43, 47, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 47, 58);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(43, 47, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 47, 58);
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(43, 47, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 47, 58);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(43, 47, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 47, 58);
}

html body ::-webkit-scrollbar-track {
  background: rgb(43, 47, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 47, 58);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(156, 163, 175);
  text-decoration: rgb(156, 163, 175);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(156, 163, 175);
  text-decoration: rgb(156, 163, 175);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(156, 163, 175);
  text-decoration: rgb(156, 163, 175);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
  color: rgb(229, 231, 235);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(156, 163, 175);
  border-left-color: rgb(156, 163, 175);
  border-right-color: rgb(156, 163, 175);
  border-top-color: rgb(156, 163, 175);
  color: rgb(156, 163, 175);
}`,
    footer: `html body footer {
  background-color: rgb(58, 63, 76);
  color: rgb(156, 163, 175);
}

html body footer ul li a {
  color: rgb(156, 163, 175);
  text-decoration: rgb(156, 163, 175);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(229, 231, 235);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
  color: rgb(229, 231, 235);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(156, 163, 175);
  text-decoration: rgb(156, 163, 175);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(156, 163, 175);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

html body li.section-li > .section .meta {
  color: rgb(156, 163, 175);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(156, 163, 175);
  text-decoration: rgb(156, 163, 175);
}

html body ul.section-ul {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(156, 163, 175);
  border-left-color: rgb(156, 163, 175);
  border-right-color: rgb(156, 163, 175);
  border-top-color: rgb(156, 163, 175);
  color: rgb(156, 163, 175);
}

html body .darkmode svg {
  color: rgb(156, 163, 175);
  stroke: rgb(156, 163, 175);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(156, 163, 175);
  border-left-color: rgb(156, 163, 175);
  border-right-color: rgb(156, 163, 175);
  border-top-color: rgb(156, 163, 175);
  color: rgb(156, 163, 175);
}

html body .breadcrumb-element p {
  color: rgb(107, 114, 128);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
  color: rgb(229, 231, 235);
}

html body .metadata {
  color: rgb(156, 163, 175);
}

html body .metadata-properties {
  border-bottom-color: rgb(156, 163, 175);
  border-left-color: rgb(156, 163, 175);
  border-right-color: rgb(156, 163, 175);
  border-top-color: rgb(156, 163, 175);
  color: rgb(156, 163, 175);
}

html body .navigation-progress {
  background-color: rgb(58, 63, 76);
}

html body .page-header h2.page-title {
  color: rgb(229, 231, 235);
}

html body abbr {
  color: rgb(229, 231, 235);
  text-decoration: underline dotted rgb(229, 231, 235);
}

html body details {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

html body input[type=text] {
  border-bottom-color: rgb(156, 163, 175);
  border-left-color: rgb(156, 163, 175);
  border-right-color: rgb(156, 163, 175);
  border-top-color: rgb(156, 163, 175);
  color: rgb(156, 163, 175);
}

html body kbd {
  background-color: rgb(48, 53, 67);
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
  color: rgb(229, 231, 235);
}

html body progress {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

html body sub {
  color: rgb(229, 231, 235);
}

html body summary {
  color: rgb(229, 231, 235);
}

html body sup {
  color: rgb(229, 231, 235);
}`,
  },
  light: {},
};
