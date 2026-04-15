import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "rift", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 160 !important;
  --accent-l: 45% !important;
  --accent-s: 20% !important;
  --background-modifier-active-hover: hsla(160, 20%, 45%, 0.1) !important;
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
  --bases-table-cell-background-selected: hsla(160, 20%, 45%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(160, 20%, 45%) !important;
  --bases-table-group-background: #303543 !important;
  --bases-table-header-background: #2B2F3A !important;
  --bases-table-header-color: #9CA3AF !important;
  --bases-table-summary-background: #2B2F3A !important;
  --blockquote-border-color: hsl(160, 20%, 45%) !important;
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
  --checkbox-color: hsl(160, 20%, 45%) !important;
  --checkbox-color-hover: hsl(157, 20.4%, 51.75%) !important;
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
  --color-accent: hsl(160, 20%, 45%) !important;
  --color-accent-1: hsl(157, 20.4%, 51.75%) !important;
  --color-accent-2: hsl(155, 21%, 58.05%) !important;
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
  --divider-color-hover: hsl(160, 20%, 45%) !important;
  --embed-border-start: 2px solid hsl(160, 20%, 45%) !important;
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
  --highlight: hsla(160, 20%, 45%, 0.1) !important;
  --icon-color: #9CA3AF !important;
  --icon-color-active: #5E9A84 !important;
  --icon-color-focused: #E5E7EB !important;
  --icon-color-hover: #9CA3AF !important;
  --inline-title-color: #D3E8E7 !important;
  --input-date-separator: #6B7280 !important;
  --input-placeholder-color: #6B7280 !important;
  --interactive-accent: hsl(160, 20%, 45%) !important;
  --interactive-accent-hover: hsl(157, 20.4%, 51.75%) !important;
  --interactive-accent-hsl: 160, 20%, 45% !important;
  --italic-color: #CC946B !important;
  --light: #2B2F3A !important;
  --lightgray: #3A3F4C !important;
  --link-color: #5E9A84 !important;
  --link-color-hover: #8FC9B0 !important;
  --link-external-color: #5E9A84 !important;
  --link-external-color-hover: #8FC9B0 !important;
  --link-unresolved-color: #5E9A84 !important;
  --link-unresolved-decoration-color: hsla(160, 20%, 45%, 0.3) !important;
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
  --nav-item-background-selected: hsla(160, 20%, 45%, 0.15) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(160, 20%, 45%) !important;
  --tab-text-color: #6B7280 !important;
  --tab-text-color-active: #9CA3AF !important;
  --tab-text-color-focused: #9CA3AF !important;
  --tab-text-color-focused-active: #9CA3AF !important;
  --tab-text-color-focused-active-current: #E5E7EB !important;
  --tab-text-color-focused-highlighted: #5E9A84 !important;
  --table-drag-handle-background-active: hsl(160, 20%, 45%) !important;
  --table-drag-handle-color: #6B7280 !important;
  --table-header-color: #E5E7EB !important;
  --table-selection: hsla(160, 20%, 45%, 0.1) !important;
  --table-selection-border-color: hsl(160, 20%, 45%) !important;
  --tag-background: hsla(160, 20%, 45%, 0.1) !important;
  --tag-background-hover: hsla(160, 20%, 45%, 0.2) !important;
  --tag-border-color: hsla(160, 20%, 45%, 0.15) !important;
  --tag-border-color-hover: hsla(160, 20%, 45%, 0.15) !important;
  --tag-color: #5E9A84 !important;
  --tag-color-hover: #5E9A84 !important;
  --tertiary: #8FC9B0 !important;
  --text-accent: #5E9A84 !important;
  --text-accent-hover: #8FC9B0 !important;
  --text-error: #C06C6C !important;
  --text-faint: #6B7280 !important;
  --text-muted: #9CA3AF !important;
  --text-normal: #E5E7EB !important;
  --text-selection: hsla(160, 20%, 45%, 0.33) !important;
  --text-success: #5E9A84 !important;
  --text-warning: #CC946B !important;
  --textHighlight: hsla(160, 20%, 45%, 0.1) !important;
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

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(58, 63, 76);
  color: rgb(229, 231, 235);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(43, 47, 58);
  color: rgb(229, 231, 235);
}

html body .bases-table thead th {
  color: rgb(229, 231, 235);
}

html body .canvas-node {
  border-color: rgb(229, 231, 235);
}

html body .canvas-node-content {
  color: rgb(229, 231, 235);
}

html body .canvas-node-file {
  color: rgb(229, 231, 235);
}

html body .canvas-node-group {
  border-color: rgb(229, 231, 235);
}

html body .canvas-sidebar {
  background-color: rgb(58, 63, 76);
  border-color: rgb(229, 231, 235);
}

html body .note-properties-key {
  color: rgb(156, 163, 175);
}

html body .note-properties-row {
  border-color: rgb(156, 163, 175);
}

html body .note-properties-tags {
  background-color: rgba(92, 138, 122, 0.1);
  color: rgb(94, 154, 132);
}

html body .note-properties-value {
  color: rgb(156, 163, 175);
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
    typography: `html body .page article p > b, html b {
  color: rgb(216, 192, 128);
  outline: rgb(216, 192, 128) none 0px;
  text-decoration-color: rgb(216, 192, 128);
}

html body .page article p > em, html em {
  color: rgb(204, 148, 107);
  outline: rgb(204, 148, 107) none 0px;
  text-decoration-color: rgb(204, 148, 107);
}

html body .page article p > i, html i {
  color: rgb(204, 148, 107);
  outline: rgb(204, 148, 107) none 0px;
  text-decoration-color: rgb(204, 148, 107);
}

html body .page article p > strong, html strong {
  color: rgb(216, 192, 128);
  outline: rgb(216, 192, 128) none 0px;
  text-decoration-color: rgb(216, 192, 128);
}

html body .text-highlight {
  color: rgb(229, 231, 235);
  outline: rgb(229, 231, 235) none 0px;
  text-decoration-color: rgb(229, 231, 235);
}

html body del {
  color: rgb(229, 231, 235);
  outline: rgb(229, 231, 235) none 0px;
  text-decoration-color: rgb(229, 231, 235);
}

html body h1.article-title {
  color: rgb(229, 231, 235);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(107, 114, 128);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(92, 138, 122);
  border-color: rgb(92, 138, 122);
}

html body p {
  color: rgb(156, 163, 175);
  outline: rgb(156, 163, 175) none 0px;
  text-decoration-color: rgb(156, 163, 175);
}`,
    links: `html body a.external, html footer a {
  color: rgb(94, 154, 132);
  outline: rgb(94, 154, 132) none 0px;
  text-decoration-color: rgb(94, 154, 132);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(94, 154, 132);
  outline: rgb(94, 154, 132) none 0px;
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
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

html body ul > li {
  color: rgb(229, 231, 235);
}

html body ul.overflow {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(107, 114, 128);
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

html body pre > code, html pre:has(> code) {
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
  border-bottom-color: rgb(211, 232, 231);
  border-left-color: rgb(211, 232, 231);
  border-right-color: rgb(211, 232, 231);
  border-top-color: rgb(211, 232, 231);
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
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(107, 114, 128);
  border-left-color: rgb(107, 114, 128);
  border-right-color: rgb(107, 114, 128);
  border-top-color: rgb(107, 114, 128);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(43, 47, 58);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(43, 47, 58);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 148, 107);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(216, 192, 128);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 168, 168);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 137, 180);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 108, 108);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 108, 108);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 108, 108);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 108, 108);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 137, 180);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(216, 192, 128);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(216, 192, 128);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(137, 112, 176);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 108, 108);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 154, 132);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 154, 132);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 154, 132);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(94, 137, 180);
  border-left-color: rgb(94, 137, 180);
  border-right-color: rgb(94, 137, 180);
  border-top-color: rgb(94, 137, 180);
  color: rgb(94, 137, 180);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(94, 137, 180);
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

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
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
  color: rgb(229, 231, 235);
}

html body .search > .search-container > .search-space {
  background-color: rgb(43, 47, 58);
}

html body .search > .search-container > .search-space > * {
  color: rgb(229, 231, 235);
  outline: rgb(229, 231, 235) none 0px;
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

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(229, 231, 235);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(229, 231, 235);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(58, 63, 76);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
  color: rgb(229, 231, 235);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(229, 231, 235);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html body h2.page-title, html h2.page-title a {
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
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(156, 163, 175);
}`,
    toc: `html body details.toc summary::marker {
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
}

html body ul.tags > li {
  background-color: rgba(92, 138, 122, 0.1);
  border-bottom-color: rgba(92, 138, 122, 0.15);
  border-left-color: rgba(92, 138, 122, 0.15);
  border-right-color: rgba(92, 138, 122, 0.15);
  border-top-color: rgba(92, 138, 122, 0.15);
  color: rgb(94, 154, 132);
}`,
  },
  light: {},
};
