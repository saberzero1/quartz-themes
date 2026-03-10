import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "rift", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 160;
  --accent-l: 45%;
  --accent-s: 20%;
  --background-modifier-active-hover: rgba(92, 138, 122, 0.1);
  --background-modifier-error: #C06C6C;
  --background-modifier-error-hover: #C06C6C;
  --background-modifier-error-rgb: 192, 108, 108;
  --background-modifier-success: #5E9A84;
  --background-modifier-success-rgb: 94, 154, 132;
  --background-primary: #2B2F3A;
  --background-primary-alt: #303543;
  --background-secondary: #3A3F4C;
  --background-secondary-alt: #444B5A;
  --bases-cards-background: #2B2F3A;
  --bases-cards-cover-background: #303543;
  --bases-group-heading-property-color: #9CA3AF;
  --bases-table-cell-background-active: #2B2F3A;
  --bases-table-cell-background-disabled: #303543;
  --bases-table-cell-background-selected: rgba(92, 138, 122, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(92, 138, 122);
  --bases-table-group-background: #303543;
  --bases-table-header-background: #2B2F3A;
  --bases-table-header-color: #9CA3AF;
  --bases-table-summary-background: #2B2F3A;
  --blockquote-border-color: rgb(92, 138, 122);
  --bold-color: #D8C080;
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
  --canvas-background: #2B2F3A;
  --canvas-card-label-color: #6B7280;
  --canvas-color-1: 192, 108, 108;
  --canvas-color-2: 204, 148, 107;
  --canvas-color-3: 216, 192, 128;
  --canvas-color-4: 94, 154, 132;
  --canvas-color-5: 94, 168, 168;
  --canvas-color-6: 137, 112, 176;
  --caret-color: #E5E7EB;
  --checkbox-border-color: #6B7280;
  --checkbox-border-color-hover: #9CA3AF;
  --checkbox-color: rgb(92, 138, 122);
  --checkbox-color-hover: rgb(108, 157, 138);
  --checkbox-marker-color: #2B2F3A;
  --checklist-done-color: #9CA3AF;
  --code-background: #303543;
  --code-comment: #6B7280;
  --code-function: #D8C080;
  --code-important: #CC946B;
  --code-keyword: #B17CA6;
  --code-normal: #E5E7EB;
  --code-operator: #C06C6C;
  --code-property: #5EA8A8;
  --code-punctuation: #9CA3AF;
  --code-string: #5E9A84;
  --code-tag: #C06C6C;
  --code-value: #8970B0;
  --collapse-icon-color: #6B7280;
  --collapse-icon-color-collapsed: #5E9A84;
  --color-accent: rgb(92, 138, 122);
  --color-accent-1: rgb(108, 157, 138);
  --color-accent-2: rgb(125, 170, 152);
  --color-accent-hsl: 160, 20%, 45%;
  --color-blue: #5E89B4;
  --color-blue-hover: #89B3E0;
  --color-blue-hover-rgb: 137, 179, 224;
  --color-blue-rgb: 94, 137, 180;
  --color-cyan: #5EA8A8;
  --color-cyan-hover: #87D0D0;
  --color-cyan-hover-rgb: 135, 208, 208;
  --color-cyan-rgb: 94, 168, 168;
  --color-green: #5E9A84;
  --color-green-hover: #8FC9B0;
  --color-green-hover-rgb: 143, 201, 176;
  --color-green-rgb: 94, 154, 132;
  --color-orange: #CC946B;
  --color-orange-hover: #E9B286;
  --color-orange-hover-rgb: 233, 178, 134;
  --color-orange-rgb: 204, 148, 107;
  --color-pink: #B17CA6;
  --color-pink-hover: #D79DC9;
  --color-pink-hover-rgb: 215, 157, 201;
  --color-pink-rgb: 177, 124, 166;
  --color-purple: #8970B0;
  --color-purple-hover: #B094E3;
  --color-purple-hover-rgb: 176, 148, 227;
  --color-purple-rgb: 137, 112, 176;
  --color-red: #C06C6C;
  --color-red-hover: #E08B8B;
  --color-red-hover-rgb: 224, 139, 139;
  --color-red-rgb: 192, 108, 108;
  --color-yellow: #D8C080;
  --color-yellow-hover: #EFDC9E;
  --color-yellow-hover-rgb: 239, 220, 158;
  --color-yellow-rgb: 216, 192, 128;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color-hover: rgb(92, 138, 122);
  --embed-border-start: 2px solid rgb(92, 138, 122);
  --file-header-background: #2B2F3A;
  --file-header-background-focused: #2B2F3A;
  --flair-color: #E5E7EB;
  --footnote-id-color: #9CA3AF;
  --footnote-id-color-no-occurrences: #6B7280;
  --graph-node: #9CA3AF;
  --graph-node-attachment: #D8C080;
  --graph-node-focused: #5E9A84;
  --graph-node-tag: #5E9A84;
  --graph-node-unresolved: #6B7280;
  --graph-text: #E5E7EB;
  --gray: var(--text-muted);
  --h1-blue: #DCE5EE;
  --h1-color: #D3E8E7;
  --h1-cyan: #D9ECEC;
  --h1-default: #D3E8E7;
  --h1-green: #DDE8E3;
  --h1-orange: #F0E3D7;
  --h1-pink: #F0E3EC;
  --h1-purple: #E3DDF0;
  --h1-red: #EBDCDC;
  --h1-yellow: #F3EED4;
  --h2-blue: #A9C0DA;
  --h2-color: #A1C6CF;
  --h2-cyan: #A7D1D1;
  --h2-default: #A1C6CF;
  --h2-green: #A7C8B7;
  --h2-orange: #DCB897;
  --h2-pink: #D6B4D2;
  --h2-purple: #BFB0DA;
  --h2-red: #D9A9A9;
  --h2-yellow: #E1D08F;
  --h3-blue: #7D9EC2;
  --h3-color: #8ABCAF;
  --h3-cyan: #7FB7B7;
  --h3-default: #8ABCAF;
  --h3-green: #7FAE98;
  --h3-orange: #C99570;
  --h3-pink: #C18EBE;
  --h3-purple: #9D8BC4;
  --h3-red: #C58686;
  --h3-yellow: #CDB45E;
  --h4-blue: #5E81A3;
  --h4-color: #6AA891;
  --h4-cyan: #5C9B9B;
  --h4-default: #6AA891;
  --h4-green: #5C8F77;
  --h4-orange: #A87452;
  --h4-pink: #A86EA5;
  --h4-purple: #7E6BA8;
  --h4-red: #A86868;
  --h4-yellow: #AE9542;
  --h5-blue: #496783;
  --h5-color: #7E988A;
  --h5-cyan: #477979;
  --h5-default: #7E988A;
  --h5-green: #476E5D;
  --h5-orange: #875C3E;
  --h5-pink: #845683;
  --h5-purple: #615384;
  --h5-red: #8E5050;
  --h5-yellow: #887337;
  --h6-blue: #384D66;
  --h6-color: #5C7D6F;
  --h6-cyan: #355E5E;
  --h6-default: #5C7D6F;
  --h6-green: #345147;
  --h6-orange: #644531;
  --h6-pink: #5F3D5F;
  --h6-purple: #473D63;
  --h6-red: #693C3C;
  --h6-yellow: #66572B;
  --heading-formatting: #6B7280;
  --highlight: var(--background-modifier-active-hover);
  --icon-color: #9CA3AF;
  --icon-color-active: #5E9A84;
  --icon-color-focused: #E5E7EB;
  --icon-color-hover: #9CA3AF;
  --inline-title-color: #D3E8E7;
  --input-date-separator: #6B7280;
  --input-placeholder-color: #6B7280;
  --interactive-accent: rgb(92, 138, 122);
  --interactive-accent-hover: rgb(108, 157, 138);
  --interactive-accent-hsl: 160, 20%, 45%;
  --italic-color: #CC946B;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #5E9A84;
  --link-color-hover: #8FC9B0;
  --link-external-color: #5E9A84;
  --link-external-color-hover: #8FC9B0;
  --link-unresolved-color: #5E9A84;
  --link-unresolved-decoration-color: rgba(92, 138, 122, 0.3);
  --list-marker-color: #6B7280;
  --list-marker-color-collapsed: #5E9A84;
  --list-marker-color-hover: #9CA3AF;
  --menu-background: #3A3F4C;
  --metadata-input-text-color: #E5E7EB;
  --metadata-label-text-color: #9CA3AF;
  --metadata-label-text-color-hover: #9CA3AF;
  --modal-background: #2B2F3A;
  --nav-collapse-icon-color: #6B7280;
  --nav-collapse-icon-color-collapsed: #6B7280;
  --nav-heading-color: #E5E7EB;
  --nav-heading-color-collapsed: #6B7280;
  --nav-heading-color-collapsed-hover: #9CA3AF;
  --nav-heading-color-hover: #E5E7EB;
  --nav-item-background-selected: rgba(92, 138, 122, 0.15);
  --nav-item-color: #9CA3AF;
  --nav-item-color-active: #E5E7EB;
  --nav-item-color-highlighted: #5E9A84;
  --nav-item-color-hover: #E5E7EB;
  --nav-item-color-selected: #E5E7EB;
  --nav-tag-color: #6B7280;
  --nav-tag-color-active: #9CA3AF;
  --nav-tag-color-hover: #9CA3AF;
  --pdf-background: #2B2F3A;
  --pdf-page-background: #2B2F3A;
  --pdf-sidebar-background: #2B2F3A;
  --pill-color: #9CA3AF;
  --pill-color-hover: #E5E7EB;
  --pill-color-remove: #6B7280;
  --pill-color-remove-hover: #5E9A84;
  --prompt-background: #2B2F3A;
  --ribbon-background: #3A3F4C;
  --ribbon-background-collapsed: #2B2F3A;
  --search-clear-button-color: #9CA3AF;
  --search-icon-color: #9CA3AF;
  --search-result-background: #2B2F3A;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #E5E7EB;
  --setting-items-background: #303543;
  --settings-related-modal-width: 80%;
  --status-bar-background: #3A3F4C;
  --status-bar-text-color: #9CA3AF;
  --suggestion-background: #2B2F3A;
  --sync-avatar-color-1: #C06C6C;
  --sync-avatar-color-2: #CC946B;
  --sync-avatar-color-3: #D8C080;
  --sync-avatar-color-4: #5E9A84;
  --sync-avatar-color-5: #5EA8A8;
  --sync-avatar-color-6: #5E89B4;
  --sync-avatar-color-7: #8970B0;
  --sync-avatar-color-8: #B17CA6;
  --tab-background-active: #2B2F3A;
  --tab-container-background: #3A3F4C;
  --tab-switcher-background: #3A3F4C;
  --tab-switcher-menubar-background: linear-gradient(to top, #3A3F4C, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(92, 138, 122);
  --tab-text-color: #6B7280;
  --tab-text-color-active: #9CA3AF;
  --tab-text-color-focused: #9CA3AF;
  --tab-text-color-focused-active: #9CA3AF;
  --tab-text-color-focused-active-current: #E5E7EB;
  --tab-text-color-focused-highlighted: #5E9A84;
  --table-drag-handle-background-active: rgb(92, 138, 122);
  --table-drag-handle-color: #6B7280;
  --table-header-color: #E5E7EB;
  --table-selection: rgba(92, 138, 122, 0.1);
  --table-selection-border-color: rgb(92, 138, 122);
  --tag-background: rgba(92, 138, 122, 0.1);
  --tag-background-hover: rgba(92, 138, 122, 0.2);
  --tag-border-color: rgba(92, 138, 122, 0.15);
  --tag-border-color-hover: rgba(92, 138, 122, 0.15);
  --tag-color: #5E9A84;
  --tag-color-hover: #5E9A84;
  --tertiary: var(--text-accent-hover);
  --text-accent: #5E9A84;
  --text-accent-hover: #8FC9B0;
  --text-error: #C06C6C;
  --text-faint: #6B7280;
  --text-muted: #9CA3AF;
  --text-normal: #E5E7EB;
  --text-selection: rgba(92, 138, 122, 0.33);
  --text-success: #5E9A84;
  --text-warning: #CC946B;
  --textHighlight: var(--background-modifier-active-hover);
  --titlebar-background: #3A3F4C;
  --titlebar-background-focused: #444B5A;
  --titlebar-text-color: #9CA3AF;
  --titlebar-text-color-focused: #E5E7EB;
  --vault-profile-color: #E5E7EB;
  --vault-profile-color-hover: #E5E7EB;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(58, 63, 76);
  color: rgb(229, 231, 235);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(43, 47, 58);
  color: rgb(229, 231, 235);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(58, 63, 76);
  color: rgb(229, 231, 235);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(58, 63, 76);
  color: rgb(229, 231, 235);
}

body div#quartz-root {
  background-color: rgb(43, 47, 58);
  color: rgb(229, 231, 235);
}`,
    typography: `body .page article p > b, b {
  color: rgb(216, 192, 128);
  outline: rgb(216, 192, 128) none 0px;
  text-decoration: rgb(216, 192, 128);
  text-decoration-color: rgb(216, 192, 128);
}

body .page article p > em, em {
  color: rgb(204, 148, 107);
  outline: rgb(204, 148, 107) none 0px;
  text-decoration: rgb(204, 148, 107);
  text-decoration-color: rgb(204, 148, 107);
}

body .page article p > i, i {
  color: rgb(204, 148, 107);
  outline: rgb(204, 148, 107) none 0px;
  text-decoration: rgb(204, 148, 107);
  text-decoration-color: rgb(204, 148, 107);
}

body .page article p > strong, strong {
  color: rgb(216, 192, 128);
  outline: rgb(216, 192, 128) none 0px;
  text-decoration: rgb(216, 192, 128);
  text-decoration-color: rgb(216, 192, 128);
}

body .text-highlight {
  color: rgb(229, 231, 235);
  outline: rgb(229, 231, 235) none 0px;
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body del {
  color: rgb(229, 231, 235);
  outline: rgb(229, 231, 235) none 0px;
  text-decoration: line-through rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body p {
  color: rgb(156, 163, 175);
  outline: rgb(156, 163, 175) none 0px;
  text-decoration: rgb(156, 163, 175);
  text-decoration-color: rgb(156, 163, 175);
}`,
    links: `body a.external, footer a {
  color: rgb(94, 154, 132);
  outline: rgb(94, 154, 132) none 0px;
  text-decoration: underline rgb(94, 154, 132);
  text-decoration-color: rgb(94, 154, 132);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(94, 154, 132);
  outline: rgb(94, 154, 132) none 0px;
  text-decoration: underline rgb(94, 154, 132);
  text-decoration-color: rgb(94, 154, 132);
}

body a.internal.broken {
  color: rgb(94, 154, 132);
  outline: rgb(94, 154, 132) none 0px;
  text-decoration: underline rgba(92, 138, 122, 0.3);
  text-decoration-color: rgba(92, 138, 122, 0.3);
}`,
    lists: `body dd {
  color: rgb(229, 231, 235);
}

body dt {
  color: rgb(229, 231, 235);
}

body ol > li {
  color: rgb(229, 231, 235);
}

body ol.overflow {
  background-color: rgb(43, 47, 58);
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

body ul > li {
  color: rgb(229, 231, 235);
}

body ul.overflow {
  background-color: rgb(43, 47, 58);
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(107, 114, 128);
  text-decoration: rgb(107, 114, 128);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

body table {
  color: rgb(229, 231, 235);
}

body td {
  color: rgb(229, 231, 235);
}

body th {
  color: rgb(229, 231, 235);
}`,
    code: `body code {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
  color: rgb(229, 231, 235);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(48, 53, 67);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(48, 53, 67);
  color: rgb(229, 231, 235);
}

body pre > code > [data-line] {
  border-left-color: rgb(216, 192, 128);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(216, 192, 128);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(216, 192, 128);
  border-left-color: rgb(216, 192, 128);
  border-right-color: rgb(216, 192, 128);
  border-top-color: rgb(216, 192, 128);
}

body pre > code, pre:has(> code) {
  background-color: rgb(48, 53, 67);
}

body pre:has(> code) {
  background-color: rgb(48, 53, 67);
}`,
    images: `body audio {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

body figcaption {
  color: rgb(229, 231, 235);
}

body figure {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

body img {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

body video {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}`,
    embeds: `body .file-embed {
  background-color: rgb(48, 53, 67);
  border-bottom-color: rgb(156, 163, 175);
  border-left-color: rgb(156, 163, 175);
  border-right-color: rgb(156, 163, 175);
  border-top-color: rgb(156, 163, 175);
}

body .footnotes {
  border-top-color: rgb(229, 231, 235);
  color: rgb(229, 231, 235);
}

body .transclude {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(92, 138, 122);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

body .transclude-inner {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(92, 138, 122);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(156, 163, 175);
  text-decoration: line-through rgb(156, 163, 175);
  text-decoration-color: rgb(156, 163, 175);
}

body input[type=checkbox] {
  border-bottom-color: rgb(107, 114, 128);
  border-left-color: rgb(107, 114, 128);
  border-right-color: rgb(107, 114, 128);
  border-top-color: rgb(107, 114, 128);
}

body li.task-list-item[data-task='!'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='*'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='-'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='/'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='>'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='?'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='I'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='S'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='b'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='c'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='d'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='f'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='i'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='k'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='l'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='p'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='u'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body li.task-list-item[data-task='w'] {
  color: rgb(229, 231, 235);
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(94, 137, 180);
  border-left-color: rgb(94, 137, 180);
  border-right-color: rgb(94, 137, 180);
  border-top-color: rgb(94, 137, 180);
}

body .callout[data-callout="abstract"] {
  --callout-color: 94, 168, 168;
  background-color: rgba(94, 168, 168, 0.1);
  border-bottom-color: rgba(94, 168, 168, 0.25);
  border-left-color: rgba(94, 168, 168, 0.25);
  border-right-color: rgba(94, 168, 168, 0.25);
  border-top-color: rgba(94, 168, 168, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 192, 108, 108;
  background-color: rgba(192, 108, 108, 0.1);
  border-bottom-color: rgba(192, 108, 108, 0.25);
  border-left-color: rgba(192, 108, 108, 0.25);
  border-right-color: rgba(192, 108, 108, 0.25);
  border-top-color: rgba(192, 108, 108, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 192, 108, 108;
  background-color: rgba(192, 108, 108, 0.1);
  border-bottom-color: rgba(192, 108, 108, 0.25);
  border-left-color: rgba(192, 108, 108, 0.25);
  border-right-color: rgba(192, 108, 108, 0.25);
  border-top-color: rgba(192, 108, 108, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 137, 112, 176;
  background-color: rgba(137, 112, 176, 0.1);
  border-bottom-color: rgba(137, 112, 176, 0.25);
  border-left-color: rgba(137, 112, 176, 0.25);
  border-right-color: rgba(137, 112, 176, 0.25);
  border-top-color: rgba(137, 112, 176, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 192, 108, 108;
  background-color: rgba(192, 108, 108, 0.1);
  border-bottom-color: rgba(192, 108, 108, 0.25);
  border-left-color: rgba(192, 108, 108, 0.25);
  border-right-color: rgba(192, 108, 108, 0.25);
  border-top-color: rgba(192, 108, 108, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 94, 137, 180;
  background-color: rgba(94, 137, 180, 0.1);
  border-bottom-color: rgba(94, 137, 180, 0.25);
  border-left-color: rgba(94, 137, 180, 0.25);
  border-right-color: rgba(94, 137, 180, 0.25);
  border-top-color: rgba(94, 137, 180, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 94, 137, 180;
  background-color: rgba(94, 137, 180, 0.1);
  border-bottom-color: rgba(94, 137, 180, 0.25);
  border-left-color: rgba(94, 137, 180, 0.25);
  border-right-color: rgba(94, 137, 180, 0.25);
  border-top-color: rgba(94, 137, 180, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 204, 148, 107;
  background-color: rgba(204, 148, 107, 0.1);
  border-bottom-color: rgba(204, 148, 107, 0.25);
  border-left-color: rgba(204, 148, 107, 0.25);
  border-right-color: rgba(204, 148, 107, 0.25);
  border-top-color: rgba(204, 148, 107, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 94, 154, 132;
  background-color: rgba(94, 154, 132, 0.1);
  border-bottom-color: rgba(94, 154, 132, 0.25);
  border-left-color: rgba(94, 154, 132, 0.25);
  border-right-color: rgba(94, 154, 132, 0.25);
  border-top-color: rgba(94, 154, 132, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 94, 168, 168;
  background-color: rgba(94, 168, 168, 0.1);
  border-bottom-color: rgba(94, 168, 168, 0.25);
  border-left-color: rgba(94, 168, 168, 0.25);
  border-right-color: rgba(94, 168, 168, 0.25);
  border-top-color: rgba(94, 168, 168, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 94, 137, 180;
  background-color: rgba(94, 137, 180, 0.1);
  border-bottom-color: rgba(94, 137, 180, 0.25);
  border-left-color: rgba(94, 137, 180, 0.25);
  border-right-color: rgba(94, 137, 180, 0.25);
  border-top-color: rgba(94, 137, 180, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 204, 148, 107;
  background-color: rgba(204, 148, 107, 0.1);
  border-bottom-color: rgba(204, 148, 107, 0.25);
  border-left-color: rgba(204, 148, 107, 0.25);
  border-right-color: rgba(204, 148, 107, 0.25);
  border-top-color: rgba(204, 148, 107, 0.25);
}`,
    search: `body .search > .search-button {
  color: rgb(229, 231, 235);
}

body .search > .search-container > .search-space {
  background-color: rgb(43, 47, 58);
}

body .search > .search-container > .search-space > * {
  color: rgb(229, 231, 235);
  outline: rgb(229, 231, 235) none 0px;
  text-decoration: rgb(229, 231, 235);
  text-decoration-color: rgb(229, 231, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(229, 231, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(229, 231, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(229, 231, 235);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(58, 63, 76);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
  color: rgb(229, 231, 235);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(229, 231, 235);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(92, 138, 122, 0.1);
  border-bottom-color: rgba(92, 138, 122, 0.15);
  border-left-color: rgba(92, 138, 122, 0.15);
  border-right-color: rgba(92, 138, 122, 0.15);
  border-top-color: rgba(92, 138, 122, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(94, 154, 132);
}

body h1 {
  color: rgb(211, 232, 231);
}

body h2 {
  color: rgb(161, 198, 207);
}

body h2.page-title, h2.page-title a {
  color: rgb(211, 232, 231);
}

body h3 {
  color: rgb(138, 188, 175);
}

body h4 {
  color: rgb(106, 168, 145);
}

body h5 {
  color: rgb(126, 152, 138);
}

body h6 {
  color: rgb(92, 125, 111);
}`,
    scrollbars: `body .callout {
  --callout-color: 94, 137, 180;
  border-bottom-color: rgba(94, 137, 180, 0.25);
  border-left-color: rgba(94, 137, 180, 0.25);
  border-right-color: rgba(94, 137, 180, 0.25);
  border-top-color: rgba(94, 137, 180, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(43, 47, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 47, 58);
}

body ::-webkit-scrollbar-corner {
  background: rgb(43, 47, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 47, 58);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(43, 47, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 47, 58);
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(43, 47, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 47, 58);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(43, 47, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 47, 58);
}

body ::-webkit-scrollbar-track {
  background: rgb(43, 47, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 47, 58);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(156, 163, 175);
  text-decoration: rgb(156, 163, 175);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(156, 163, 175);
  text-decoration: rgb(156, 163, 175);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(156, 163, 175);
  text-decoration: rgb(156, 163, 175);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
  color: rgb(229, 231, 235);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(156, 163, 175);
  border-left-color: rgb(156, 163, 175);
  border-right-color: rgb(156, 163, 175);
  border-top-color: rgb(156, 163, 175);
  color: rgb(156, 163, 175);
}`,
    footer: `body footer {
  background-color: rgb(58, 63, 76);
  color: rgb(156, 163, 175);
}

body footer ul li a {
  color: rgb(156, 163, 175);
  text-decoration: rgb(156, 163, 175);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(229, 231, 235);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
  color: rgb(229, 231, 235);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(156, 163, 175);
  text-decoration: rgb(156, 163, 175);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(156, 163, 175);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

body li.section-li > .section .meta {
  color: rgb(156, 163, 175);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(156, 163, 175);
  text-decoration: rgb(156, 163, 175);
}

body ul.section-ul {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(156, 163, 175);
  border-left-color: rgb(156, 163, 175);
  border-right-color: rgb(156, 163, 175);
  border-top-color: rgb(156, 163, 175);
  color: rgb(156, 163, 175);
}

body .darkmode svg {
  color: rgb(156, 163, 175);
  stroke: rgb(156, 163, 175);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(156, 163, 175);
  border-left-color: rgb(156, 163, 175);
  border-right-color: rgb(156, 163, 175);
  border-top-color: rgb(156, 163, 175);
  color: rgb(156, 163, 175);
}

body .breadcrumb-element p {
  color: rgb(107, 114, 128);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
  color: rgb(229, 231, 235);
}

body .metadata {
  color: rgb(156, 163, 175);
}

body .metadata-properties {
  border-bottom-color: rgb(156, 163, 175);
  border-left-color: rgb(156, 163, 175);
  border-right-color: rgb(156, 163, 175);
  border-top-color: rgb(156, 163, 175);
  color: rgb(156, 163, 175);
}

body .navigation-progress {
  background-color: rgb(58, 63, 76);
}

body .page-header h2.page-title {
  color: rgb(229, 231, 235);
}

body abbr {
  color: rgb(229, 231, 235);
  text-decoration: underline dotted rgb(229, 231, 235);
}

body details {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

body input[type=text] {
  border-bottom-color: rgb(156, 163, 175);
  border-left-color: rgb(156, 163, 175);
  border-right-color: rgb(156, 163, 175);
  border-top-color: rgb(156, 163, 175);
  color: rgb(156, 163, 175);
}

body kbd {
  background-color: rgb(48, 53, 67);
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
  color: rgb(229, 231, 235);
}

body progress {
  border-bottom-color: rgb(229, 231, 235);
  border-left-color: rgb(229, 231, 235);
  border-right-color: rgb(229, 231, 235);
  border-top-color: rgb(229, 231, 235);
}

body sub {
  color: rgb(229, 231, 235);
}

body summary {
  color: rgb(229, 231, 235);
}

body sup {
  color: rgb(229, 231, 235);
}`,
  },
  light: {},
};
