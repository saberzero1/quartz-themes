import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "default",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["flow-circular"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --bold-weight: 600 !important;
  --callout-title-weight: 600;
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%) !important;
  --color-accent-1: hsl(255, 89.76%, 75.9%) !important;
  --color-accent-2: hsl(253, 92.4%, 85.14%) !important;
  --graph-node-focused: hsl(255, 89.76%, 75.9%) !important;
  --heading-spacing: 2.5rem !important;
  --icon-color-active: hsl(255, 89.76%, 75.9%) !important;
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-color: hsl(255, 89.76%, 75.9%) !important;
  --link-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-external-color: hsl(255, 89.76%, 75.9%) !important;
  --link-external-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-unresolved-color: hsl(255, 89.76%, 75.9%) !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: hsl(255, 89.76%, 75.9%) !important;
  --metadata-input-height: 28px !important;
  --nav-item-color-highlighted: hsl(255, 89.76%, 75.9%) !important;
  --pill-color-remove-hover: hsl(255, 89.76%, 75.9%) !important;
  --secondary: hsl(255, 89.76%, 75.9%) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%) !important;
  --table-header-weight: 600 !important;
  --tag-color: hsl(255, 89.76%, 75.9%) !important;
  --tag-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --tertiary: hsl(253, 92.4%, 85.14%) !important;
  --text-accent: hsl(255, 89.76%, 75.9%) !important;
  --text-accent-hover: hsl(253, 92.4%, 85.14%) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xml,%3Csvg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' style='fill:rgba(0, 54, 255, 0.13)'/%3E%3C/svg%3E") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(54, 54, 54);
  color: rgb(218, 218, 218);
  font-weight: 600;
}

html[saved-theme="dark"] body .canvas-node {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(218, 218, 218);
  border-radius: 0px;
  border-width: 0px;
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .canvas-node-group {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(218, 218, 218);
  border-width: 0px;
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(38, 38, 38);
  border-color: rgb(218, 218, 218);
  box-shadow: rgba(255, 255, 255, 0.09) 0px 0.5px 0.5px 0.5px inset, rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.1) 0px 1px 1.5px 0px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(179, 179, 179);
  font-weight: 400;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(138, 92, 245, 0.1);
  border-radius: 28px;
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(179, 179, 179);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  cursor: grab;
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  cursor: grab;
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  cursor: grab;
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  cursor: grab;
}

html[saved-theme="dark"] body .text-highlight {
  cursor: grab;
}

html[saved-theme="dark"] body del {
  cursor: grab;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(102, 102, 102);
  border-radius: 4px;
  border-width: 1px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(138, 92, 245);
  border-color: rgb(138, 92, 245);
}`,
    embeds: `html[saved-theme="dark"] body .transclude-inner {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  text-decoration: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  text-decoration: none;
}`,
    explorer: `html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(255, 255, 255, 0.12);
  border-left-style: solid;
  border-left-width: 1px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(218, 218, 218);
}`,
    misc: `html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgba(138, 92, 245, 0.15);
  border-bottom-left-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(138, 92, 245, 0.15);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(138, 92, 245, 0.15);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(138, 92, 245, 0.15);
  border-top-left-radius: 24.5px;
  border-top-right-radius: 24.5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(166, 138, 249);
}`,
  },
  light: {
    base: `:root:root {
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(257, 88.88%, 70.95%) !important;
  --blockquote-border-color: hsl(257, 88.88%, 70.95%) !important;
  --bold-weight: 600 !important;
  --callout-title-weight: 600;
  --checkbox-color: hsl(257, 88.88%, 70.95%) !important;
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --color-accent-1: hsl(257, 88.88%, 70.95%) !important;
  --color-accent-2: hsl(255, 89.76%, 75.9%) !important;
  --divider-color-hover: hsl(257, 88.88%, 70.95%) !important;
  --embed-border-start: 2px solid hsl(257, 88.88%, 70.95%) !important;
  --heading-spacing: 2.5rem !important;
  --interactive-accent: hsl(257, 88.88%, 70.95%) !important;
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-external-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --list-indent: 2.25em !important;
  --metadata-input-height: 28px !important;
  --secondary: hsl(257, 88.88%, 70.95%) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%) !important;
  --table-header-weight: 600 !important;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%) !important;
  --tertiary: hsl(255, 89.76%, 75.9%) !important;
  --text-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xml,%3Csvg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' style='fill:rgba(0, 54, 255, 0.13)'/%3E%3C/svg%3E") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(224, 224, 224);
  color: rgb(34, 34, 34);
  font-weight: 600;
}

html[saved-theme="light"] body .canvas-node {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(34, 34, 34);
  border-radius: 0px;
  border-width: 0px;
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .canvas-node-group {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(34, 34, 34);
  border-width: 0px;
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(255, 255, 255);
  border-color: rgb(34, 34, 34);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.05) 0px 2px 3px 0px, rgba(0, 0, 0, 0.03) 0px 1px 1.5px 0px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(92, 92, 92);
  font-weight: 400;
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(92, 92, 92);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(138, 92, 245, 0.1);
  border-radius: 28px;
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(92, 92, 92);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  cursor: grab;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  cursor: grab;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  cursor: grab;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  cursor: grab;
}

html[saved-theme="light"] body .text-highlight {
  cursor: grab;
}

html[saved-theme="light"] body del {
  cursor: grab;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(171, 171, 171);
  border-radius: 4px;
  border-width: 1px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(152, 115, 247);
  border-color: rgb(152, 115, 247);
}`,
    embeds: `html[saved-theme="light"] body .transclude-inner {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  text-decoration: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  text-decoration: none;
}`,
    explorer: `html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 0, 0, 0.12);
  border-left-style: solid;
  border-left-width: 1px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(34, 34, 34);
}`,
    misc: `html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgba(138, 92, 245, 0.15);
  border-bottom-left-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(138, 92, 245, 0.15);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(138, 92, 245, 0.15);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(138, 92, 245, 0.15);
  border-top-left-radius: 24.5px;
  border-top-right-radius: 24.5px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(138, 92, 245);
}`,
  },
};
