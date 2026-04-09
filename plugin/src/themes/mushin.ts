import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "mushin",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #3a3a3a !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #ffeaea !important;
  --background-modifier-error-hover: #ffe0e0 !important;
  --background-modifier-error-rgb: 255, 234, 234 !important;
  --background-modifier-form-field-highlighted: #333333 !important;
  --background-modifier-success: #e8f5e8 !important;
  --background-primary: #1a1a1a !important;
  --background-primary-alt: #222222 !important;
  --background-secondary: #2a2a2a !important;
  --background-secondary-alt: #333333 !important;
  --bases-cards-background: #1a1a1a !important;
  --bases-cards-cover-background: #222222 !important;
  --bases-cards-shadow: 0 0 0 1px #3a3a3a !important;
  --bases-embed-border-color: #3a3a3a !important;
  --bases-embed-border-radius: 6px !important;
  --bases-group-heading-property-color: #a8a8a8 !important;
  --bases-table-border-color: #3a3a3a !important;
  --bases-table-cell-background-active: #1a1a1a !important;
  --bases-table-cell-background-disabled: #222222 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #8fa68f !important;
  --bases-table-container-border-radius: 6px !important;
  --bases-table-group-background: #222222 !important;
  --bases-table-header-background: #1a1a1a !important;
  --bases-table-header-color: #a8a8a8 !important;
  --bases-table-summary-background: #1a1a1a !important;
  --blockquote-border-color: #8fa68f !important;
  --blur-background: color-mix(in srgb, #333333 65%, transparent) linear-gradient(#333333, color-mix(in srgb, #333333 65%, transparent)) !important;
  --bodyFont: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --breathing-space: 12px !important;
  --callout-padding: 16px 16px 16px 24px;
  --callout-radius: 6px;
  --canvas-background: #1a1a1a !important;
  --canvas-controls-radius: 6px !important;
  --caret-color: #e8e8e8 !important;
  --checkbox-border-color-hover: #a8a8a8 !important;
  --checkbox-color: #8fa68f !important;
  --checkbox-color-hover: #a0b7a0 !important;
  --checkbox-marker-color: #1a1a1a !important;
  --checkbox-radius: 6px !important;
  --checklist-done-color: #a8a8a8 !important;
  --clickable-icon-radius: 6px !important;
  --code-background: #222222 !important;
  --code-border-color: #3a3a3a !important;
  --code-normal: #e8e8e8 !important;
  --code-punctuation: #a8a8a8 !important;
  --code-radius: 6px !important;
  --codeFont: "JetBrains Mono", "SF Mono", "Monaco", "Inconsolata", monospace !important;
  --collapse-icon-color-collapsed: #8fa68f !important;
  --dark: #e8e8e8 !important;
  --darkgray: #e8e8e8 !important;
  --divider-color: #3a3a3a !important;
  --divider-color-hover: #8fa68f !important;
  --dropdown-background: #333333 !important;
  --dropdown-background-hover: #404040 !important;
  --embed-block-shadow-hover: 0 0 0 1px #3a3a3a, inset 0 0 0 1px #3a3a3a !important;
  --embed-border-start: 2px solid #8fa68f !important;
  --file-header-background: #1a1a1a !important;
  --file-header-background-focused: #1a1a1a !important;
  --file-header-font: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --flair-background: #333333 !important;
  --flair-color: #e8e8e8 !important;
  --font-interface: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --font-mermaid: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --font-monospace: "JetBrains Mono", "SF Mono", "Monaco", "Inconsolata", monospace !important;
  --font-text: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --footnote-divider-color: #3a3a3a !important;
  --footnote-gap: 8px !important;
  --footnote-id-color: #a8a8a8 !important;
  --footnote-radius: 6px !important;
  --graph-node: #a8a8a8 !important;
  --graph-node-focused: #8fa68f !important;
  --graph-text: #e8e8e8 !important;
  --gray: #a8a8a8 !important;
  --headerFont: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --hr-color: #3a3a3a !important;
  --icon-color: #a8a8a8 !important;
  --icon-color-active: #8fa68f !important;
  --icon-color-focused: #e8e8e8 !important;
  --icon-color-hover: #a8a8a8 !important;
  --input-icon-inset: 8px !important;
  --input-padding: 8px 12px !important;
  --interactive-accent: #8fa68f !important;
  --interactive-accent-hover: #a0b7a0 !important;
  --interactive-hover: #404040 !important;
  --interactive-normal: #333333 !important;
  --interactive-success: #6b7d6b !important;
  --light: #1a1a1a !important;
  --lightgray: #2a2a2a !important;
  --link-color: #8fa68f !important;
  --link-color-hover: #a0b7a0 !important;
  --link-external-color: #8fa68f !important;
  --link-external-color-hover: #a0b7a0 !important;
  --link-unresolved-color: #8fa68f !important;
  --list-marker-color-collapsed: #8fa68f !important;
  --list-marker-color-hover: #a8a8a8 !important;
  --menu-background: #2a2a2a !important;
  --metadata-border-color: #3a3a3a !important;
  --metadata-divider-color: #3a3a3a !important;
  --metadata-input-font: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --metadata-input-padding: 8px 12px !important;
  --metadata-input-text-color: #e8e8e8 !important;
  --metadata-label-font: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --metadata-label-text-color: #a8a8a8 !important;
  --metadata-label-text-color-hover: #a8a8a8 !important;
  --metadata-padding: 12px 0 !important;
  --modal-background: #1a1a1a !important;
  --mushin-beige: #d4c096 !important;
  --mushin-green: #8fa68f !important;
  --mushin-ink: #e8e8e8 !important;
  --mushin-paper: #1a1a1a !important;
  --mushin-shadow: rgba(0, 0, 0, 0.4) !important;
  --mushin-stone: #a8a8a8 !important;
  --nav-heading-color: #e8e8e8 !important;
  --nav-heading-color-collapsed-hover: #a8a8a8 !important;
  --nav-heading-color-hover: #e8e8e8 !important;
  --nav-item-children-margin-start: 16px !important;
  --nav-item-color: #a8a8a8 !important;
  --nav-item-color-active: #e8e8e8 !important;
  --nav-item-color-highlighted: #8fa68f !important;
  --nav-item-color-hover: #e8e8e8 !important;
  --nav-item-color-selected: #e8e8e8 !important;
  --nav-item-padding: 8px 12px 8px 24px !important;
  --nav-item-parent-padding: 8px 12px 8px 24px !important;
  --nav-item-radius: 6px !important;
  --nav-tag-color-active: #a8a8a8 !important;
  --nav-tag-color-hover: #a8a8a8 !important;
  --nav-tag-radius: 6px !important;
  --pdf-background: #1a1a1a !important;
  --pdf-page-background: #1a1a1a !important;
  --pdf-shadow: 0 0 0 1px #3a3a3a !important;
  --pdf-sidebar-background: #1a1a1a !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #3a3a3a !important;
  --pill-border-color: #3a3a3a !important;
  --pill-color: #a8a8a8 !important;
  --pill-color-hover: #e8e8e8 !important;
  --pill-color-remove-hover: #8fa68f !important;
  --prompt-background: #1a1a1a !important;
  --radius-s: 6px !important;
  --raised-background: color-mix(in srgb, #333333 65%, transparent) linear-gradient(#333333, color-mix(in srgb, #333333 65%, transparent)) !important;
  --ribbon-background: #2a2a2a !important;
  --ribbon-background-collapsed: #1a1a1a !important;
  --ribbon-padding: 12px 8px 16px !important;
  --search-clear-button-color: #a8a8a8 !important;
  --search-icon-color: #a8a8a8 !important;
  --search-result-background: #1a1a1a !important;
  --secondary: #8fa68f !important;
  --setting-group-heading-color: #e8e8e8 !important;
  --setting-items-background: #222222 !important;
  --setting-items-border-color: #3a3a3a !important;
  --size-4-1: 8px !important;
  --size-4-2: 12px !important;
  --size-4-3: 16px !important;
  --size-4-4: 20px !important;
  --slider-track-background: #3a3a3a !important;
  --status-bar-background: #2a2a2a !important;
  --status-bar-border-color: #3a3a3a !important;
  --status-bar-text-color: #a8a8a8 !important;
  --suggestion-background: #1a1a1a !important;
  --tab-background-active: #1a1a1a !important;
  --tab-container-background: #2a2a2a !important;
  --tab-outline-color: #3a3a3a !important;
  --tab-radius: 6px !important;
  --tab-switcher-background: #2a2a2a !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2a2a2a, transparent) !important;
  --tab-text-color-active: #a8a8a8 !important;
  --tab-text-color-focused: #a8a8a8 !important;
  --tab-text-color-focused-active: #a8a8a8 !important;
  --tab-text-color-focused-active-current: #e8e8e8 !important;
  --tab-text-color-focused-highlighted: #8fa68f !important;
  --table-add-button-border-color: #3a3a3a !important;
  --table-border-color: #3a3a3a !important;
  --table-drag-handle-background-active: #8fa68f !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: #3a3a3a !important;
  --table-header-color: #e8e8e8 !important;
  --table-selection-border-color: #8fa68f !important;
  --tag-color: #8fa68f !important;
  --tag-color-hover: #8fa68f !important;
  --tertiary: #a0b7a0 !important;
  --text-accent: #8fa68f !important;
  --text-accent-hover: #a0b7a0 !important;
  --text-error: #c55555 !important;
  --text-muted: #a8a8a8 !important;
  --text-normal: #e8e8e8 !important;
  --text-on-accent: #ffffff !important;
  --text-success: #6b7d6b !important;
  --text-warning: #d4a574 !important;
  --titleFont: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --titlebar-background: #2a2a2a !important;
  --titlebar-background-focused: #333333 !important;
  --titlebar-border-color: #3a3a3a !important;
  --titlebar-text-color: #a8a8a8 !important;
  --titlebar-text-color-focused: #e8e8e8 !important;
  --vault-profile-color: #e8e8e8 !important;
  --vault-profile-color-hover: #e8e8e8 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(42, 42, 42);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(58, 58, 58);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(42, 42, 42);
  border-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(58, 58, 58);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(168, 168, 168);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(168, 168, 168);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(143, 166, 143);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(168, 168, 168);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(42, 42, 42);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(58, 58, 58);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(42, 42, 42);
  border-left-color: rgb(58, 58, 58);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 26, 26);
  color: rgb(232, 232, 232);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(143, 166, 143) none 0px;
  text-decoration-color: rgb(143, 166, 143);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(143, 166, 143) none 0px;
  text-decoration-color: rgb(143, 166, 143);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(107, 125, 107, 0.15);
  box-shadow: rgba(107, 125, 107, 0.1) 0px 1px 3px 0px;
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

html[saved-theme="dark"] body del {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-radius: 6px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(143, 166, 143);
  border-color: rgb(143, 166, 143);
}

html[saved-theme="dark"] body p {
  color: rgb(168, 168, 168);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(168, 168, 168) none 0px;
  text-decoration-color: rgb(168, 168, 168);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(143, 166, 143) none 0px;
  text-decoration-color: rgb(143, 166, 143);
  transition: border-color 0.2s;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(143, 166, 143) none 0px;
  text-decoration-color: rgb(143, 166, 143);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(143, 166, 143) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body dt {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(143, 166, 143);
}

html[saved-theme="dark"] body blockquote {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  font-style: italic;
  padding-bottom: 24px;
  padding-top: 24px;
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body table {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  width: 210.844px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(58, 58, 58);
  border-left-color: rgb(58, 58, 58);
  border-right-color: rgb(58, 58, 58);
  border-top-color: rgb(58, 58, 58);
  color: rgb(232, 232, 232);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(58, 58, 58);
  border-left-color: rgb(58, 58, 58);
  border-right-color: rgb(58, 58, 58);
  border-top-color: rgb(58, 58, 58);
  color: rgb(232, 232, 232);
  padding-left: 12px;
  padding-right: 12px;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(232, 232, 232);
  font-family: "JetBrains Mono", "SF Mono", Monaco, Inconsolata, monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(58, 58, 58);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 58);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 58);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 58);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(58, 58, 58);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 58);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 58);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 58);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(232, 232, 232);
  font-family: "JetBrains Mono", "SF Mono", Monaco, Inconsolata, monospace;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(58, 58, 58);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 58);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 58);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 58);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(58, 58, 58);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 58);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 58);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 58);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(168, 168, 168);
  border-left-color: rgb(168, 168, 168);
  border-right-color: rgb(168, 168, 168);
  border-top-color: rgb(168, 168, 168);
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(143, 166, 143);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(143, 166, 143);
  border-left-color: rgb(143, 166, 143);
  border-right-color: rgb(143, 166, 143);
  border-top-color: rgb(143, 166, 143);
  color: rgb(143, 166, 143);
  gap: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(143, 166, 143);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(42, 42, 42, 0.7);
  border-bottom-color: rgba(58, 58, 58, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 58, 58, 0.8);
  border-left-width: 1px;
  border-right-color: rgba(58, 58, 58, 0.8);
  border-right-width: 1px;
  border-top-color: rgba(58, 58, 58, 0.8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(42, 42, 42, 0.7);
  border-bottom-color: rgba(58, 58, 58, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 58, 58, 0.8);
  border-left-width: 1px;
  border-right-color: rgba(58, 58, 58, 0.8);
  border-right-width: 1px;
  border-top-color: rgba(58, 58, 58, 0.8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(42, 42, 42, 0.7);
  border-bottom-color: rgba(58, 58, 58, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 58, 58, 0.8);
  border-left-width: 1px;
  border-right-color: rgba(58, 58, 58, 0.8);
  border-right-width: 1px;
  border-top-color: rgba(58, 58, 58, 0.8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(42, 42, 42, 0.7);
  border-bottom-color: rgba(58, 58, 58, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 58, 58, 0.8);
  border-left-width: 1px;
  border-right-color: rgba(58, 58, 58, 0.8);
  border-right-width: 1px;
  border-top-color: rgba(58, 58, 58, 0.8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(42, 42, 42, 0.7);
  border-bottom-color: rgba(58, 58, 58, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 58, 58, 0.8);
  border-left-width: 1px;
  border-right-color: rgba(58, 58, 58, 0.8);
  border-right-width: 1px;
  border-top-color: rgba(58, 58, 58, 0.8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(58, 58, 58, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 58, 58, 0.8);
  border-left-width: 1px;
  border-right-color: rgba(58, 58, 58, 0.8);
  border-right-width: 1px;
  border-top-color: rgba(58, 58, 58, 0.8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(58, 58, 58, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 58, 58, 0.8);
  border-left-width: 1px;
  border-right-color: rgba(58, 58, 58, 0.8);
  border-right-width: 1px;
  border-top-color: rgba(58, 58, 58, 0.8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(42, 42, 42, 0.7);
  border-bottom-color: rgba(58, 58, 58, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 58, 58, 0.8);
  border-left-width: 1px;
  border-right-color: rgba(58, 58, 58, 0.8);
  border-right-width: 1px;
  border-top-color: rgba(58, 58, 58, 0.8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(42, 42, 42, 0.7);
  border-bottom-color: rgba(58, 58, 58, 0.8);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 58, 58, 0.8);
  border-left-width: 1px;
  border-right-color: rgba(58, 58, 58, 0.8);
  border-right-width: 1px;
  border-top-color: rgba(58, 58, 58, 0.8);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(42, 42, 42, 0.7);
  border-bottom-color: rgba(58, 58, 58, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 58, 58, 0.8);
  border-left-width: 1px;
  border-right-color: rgba(58, 58, 58, 0.8);
  border-right-width: 1px;
  border-top-color: rgba(58, 58, 58, 0.8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(58, 58, 58, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 58, 58, 0.8);
  border-left-width: 1px;
  border-right-color: rgba(58, 58, 58, 0.8);
  border-right-width: 1px;
  border-top-color: rgba(58, 58, 58, 0.8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(42, 42, 42, 0.7);
  border-bottom-color: rgba(58, 58, 58, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 58, 58, 0.8);
  border-left-width: 1px;
  border-right-color: rgba(58, 58, 58, 0.8);
  border-right-width: 1px;
  border-top-color: rgba(58, 58, 58, 0.8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(58, 58, 58, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 58, 58, 0.8);
  border-left-width: 1px;
  border-right-color: rgba(58, 58, 58, 0.8);
  border-right-width: 1px;
  border-top-color: rgba(58, 58, 58, 0.8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgb(58, 58, 58);
  border-left-color: rgb(58, 58, 58);
  border-right-color: rgb(58, 58, 58);
  border-top-color: rgb(58, 58, 58);
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(42, 42, 42);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(143, 166, 143);
}

html[saved-theme="dark"] body h1 {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(58, 58, 58);
  border-left-color: rgb(58, 58, 58);
  border-right-color: rgb(58, 58, 58);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(58, 58, 58, 0.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(58, 58, 58, 0.8);
  border-left-width: 1px;
  border-right-color: rgba(58, 58, 58, 0.8);
  border-right-width: 1px;
  border-top-color: rgba(58, 58, 58, 0.8);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(168, 168, 168);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(168, 168, 168);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 600;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(168, 168, 168);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(168, 168, 168);
  border-right-color: rgb(168, 168, 168);
  border-top-color: rgb(168, 168, 168);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(168, 168, 168);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(58, 58, 58);
  border-left-color: rgb(58, 58, 58);
  border-right-color: rgb(58, 58, 58);
  border-top-color: rgb(58, 58, 58);
  color: rgb(168, 168, 168);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(168, 168, 168);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(168, 168, 168);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(168, 168, 168);
  border-right-color: rgb(168, 168, 168);
  border-top-color: rgb(168, 168, 168);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(168, 168, 168);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(168, 168, 168);
  stroke: rgb(168, 168, 168);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(168, 168, 168);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(168, 168, 168);
  border-right-color: rgb(168, 168, 168);
  border-top-color: rgb(168, 168, 168);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(168, 168, 168);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(58, 58, 58);
  border-left-color: rgb(58, 58, 58);
  border-right-color: rgb(58, 58, 58);
  border-top-color: rgb(58, 58, 58);
  color: rgb(168, 168, 168);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(168, 168, 168);
  border-left-color: rgb(168, 168, 168);
  border-right-color: rgb(168, 168, 168);
  border-top-color: rgb(168, 168, 168);
  color: rgb(168, 168, 168);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(42, 42, 42);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(168, 168, 168);
  border-left-color: rgb(168, 168, 168);
  border-right-color: rgb(168, 168, 168);
  border-top-color: rgb(168, 168, 168);
  color: rgb(168, 168, 168);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(232, 232, 232);
  font-family: "JetBrains Mono", "SF Mono", Monaco, Inconsolata, monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body sub {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body summary {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body sup {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body ul.tags > li {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  color: rgb(143, 166, 143);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #e5e5e5 !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.05) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #ffeaea !important;
  --background-modifier-error-hover: #ffe0e0 !important;
  --background-modifier-error-rgb: 255, 234, 234 !important;
  --background-modifier-form-field-highlighted: #f8f8f8 !important;
  --background-modifier-success: #e8f5e8 !important;
  --background-primary: #fafafa !important;
  --background-primary-alt: #f5f5f5 !important;
  --background-secondary: #f0f0f0 !important;
  --background-secondary-alt: #ebebeb !important;
  --bases-cards-background: #fafafa !important;
  --bases-cards-cover-background: #f5f5f5 !important;
  --bases-cards-shadow: 0 0 0 1px #e5e5e5 !important;
  --bases-embed-border-color: #e5e5e5 !important;
  --bases-embed-border-radius: 6px !important;
  --bases-group-heading-property-color: #6b6b6b !important;
  --bases-table-border-color: #e5e5e5 !important;
  --bases-table-cell-background-active: #fafafa !important;
  --bases-table-cell-background-disabled: #f5f5f5 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #6b7d6b !important;
  --bases-table-container-border-radius: 6px !important;
  --bases-table-group-background: #f5f5f5 !important;
  --bases-table-header-background: #fafafa !important;
  --bases-table-header-color: #6b6b6b !important;
  --bases-table-summary-background: #fafafa !important;
  --blockquote-border-color: #6b7d6b !important;
  --blur-background: color-mix(in srgb, #fafafa 65%, transparent) linear-gradient(#fafafa, color-mix(in srgb, #fafafa 65%, transparent)) !important;
  --bodyFont: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --breathing-space: 12px !important;
  --callout-padding: 16px 16px 16px 24px;
  --callout-radius: 6px;
  --canvas-background: #fafafa !important;
  --canvas-card-label-color: #999999 !important;
  --canvas-controls-radius: 6px !important;
  --caret-color: #2c2c2c !important;
  --checkbox-border-color: #999999 !important;
  --checkbox-border-color-hover: #6b6b6b !important;
  --checkbox-color: #6b7d6b !important;
  --checkbox-color-hover: #5a6d5a !important;
  --checkbox-marker-color: #fafafa !important;
  --checkbox-radius: 6px !important;
  --checklist-done-color: #6b6b6b !important;
  --clickable-icon-radius: 6px !important;
  --code-background: #f5f5f5 !important;
  --code-border-color: #e5e5e5 !important;
  --code-comment: #999999 !important;
  --code-normal: #2c2c2c !important;
  --code-punctuation: #6b6b6b !important;
  --code-radius: 6px !important;
  --codeFont: "JetBrains Mono", "SF Mono", "Monaco", "Inconsolata", monospace !important;
  --collapse-icon-color: #999999 !important;
  --collapse-icon-color-collapsed: #6b7d6b !important;
  --dark: #2c2c2c !important;
  --darkgray: #2c2c2c !important;
  --divider-color: #e5e5e5 !important;
  --divider-color-hover: #6b7d6b !important;
  --dropdown-background: #f5f5f5 !important;
  --dropdown-background-hover: #ebebeb !important;
  --embed-block-shadow-hover: 0 0 0 1px #e5e5e5, inset 0 0 0 1px #e5e5e5 !important;
  --embed-border-start: 2px solid #6b7d6b !important;
  --file-header-background: #fafafa !important;
  --file-header-background-focused: #fafafa !important;
  --file-header-font: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --flair-background: #f5f5f5 !important;
  --flair-color: #2c2c2c !important;
  --font-interface: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --font-mermaid: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --font-monospace: "JetBrains Mono", "SF Mono", "Monaco", "Inconsolata", monospace !important;
  --font-text: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --footnote-divider-color: #e5e5e5 !important;
  --footnote-gap: 8px !important;
  --footnote-id-color: #6b6b6b !important;
  --footnote-id-color-no-occurrences: #999999 !important;
  --footnote-radius: 6px !important;
  --graph-node: #6b6b6b !important;
  --graph-node-focused: #6b7d6b !important;
  --graph-node-unresolved: #999999 !important;
  --graph-text: #2c2c2c !important;
  --gray: #6b6b6b !important;
  --headerFont: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --heading-formatting: #999999 !important;
  --hr-color: #e5e5e5 !important;
  --icon-color: #6b6b6b !important;
  --icon-color-active: #6b7d6b !important;
  --icon-color-focused: #2c2c2c !important;
  --icon-color-hover: #6b6b6b !important;
  --input-date-separator: #999999 !important;
  --input-icon-inset: 8px !important;
  --input-padding: 8px 12px !important;
  --input-placeholder-color: #999999 !important;
  --interactive-accent: #6b7d6b !important;
  --interactive-accent-hover: #5a6d5a !important;
  --interactive-hover: #ebebeb !important;
  --interactive-normal: #f5f5f5 !important;
  --interactive-success: #6b7d6b !important;
  --light: #fafafa !important;
  --lightgray: #f0f0f0 !important;
  --link-color: #6b7d6b !important;
  --link-color-hover: #5a6d5a !important;
  --link-external-color: #6b7d6b !important;
  --link-external-color-hover: #5a6d5a !important;
  --link-unresolved-color: #6b7d6b !important;
  --list-marker-color: #999999 !important;
  --list-marker-color-collapsed: #6b7d6b !important;
  --list-marker-color-hover: #6b6b6b !important;
  --menu-background: #f0f0f0 !important;
  --metadata-border-color: #e5e5e5 !important;
  --metadata-divider-color: #e5e5e5 !important;
  --metadata-input-font: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --metadata-input-padding: 8px 12px !important;
  --metadata-input-text-color: #2c2c2c !important;
  --metadata-label-font: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --metadata-label-text-color: #6b6b6b !important;
  --metadata-label-text-color-hover: #6b6b6b !important;
  --metadata-padding: 12px 0 !important;
  --modal-background: #fafafa !important;
  --mushin-beige: #c9b896 !important;
  --mushin-green: #6b7d6b !important;
  --mushin-ink: #2c2c2c !important;
  --mushin-paper: #fafafa !important;
  --mushin-shadow: rgba(0, 0, 0, 0.08) !important;
  --mushin-stone: #a8a8a8 !important;
  --nav-collapse-icon-color: #999999 !important;
  --nav-collapse-icon-color-collapsed: #999999 !important;
  --nav-heading-color: #2c2c2c !important;
  --nav-heading-color-collapsed: #999999 !important;
  --nav-heading-color-collapsed-hover: #6b6b6b !important;
  --nav-heading-color-hover: #2c2c2c !important;
  --nav-item-children-margin-start: 16px !important;
  --nav-item-color: #6b6b6b !important;
  --nav-item-color-active: #2c2c2c !important;
  --nav-item-color-highlighted: #6b7d6b !important;
  --nav-item-color-hover: #2c2c2c !important;
  --nav-item-color-selected: #2c2c2c !important;
  --nav-item-padding: 8px 12px 8px 24px !important;
  --nav-item-parent-padding: 8px 12px 8px 24px !important;
  --nav-item-radius: 6px !important;
  --nav-tag-color: #999999 !important;
  --nav-tag-color-active: #6b6b6b !important;
  --nav-tag-color-hover: #6b6b6b !important;
  --nav-tag-radius: 6px !important;
  --pdf-background: #fafafa !important;
  --pdf-page-background: #fafafa !important;
  --pdf-sidebar-background: #fafafa !important;
  --pill-border-color: #e5e5e5 !important;
  --pill-color: #6b6b6b !important;
  --pill-color-hover: #2c2c2c !important;
  --pill-color-remove: #999999 !important;
  --pill-color-remove-hover: #6b7d6b !important;
  --prompt-background: #fafafa !important;
  --radius-s: 6px !important;
  --raised-background: color-mix(in srgb, #fafafa 65%, transparent) linear-gradient(#fafafa, color-mix(in srgb, #fafafa 65%, transparent)) !important;
  --ribbon-background: #f0f0f0 !important;
  --ribbon-background-collapsed: #fafafa !important;
  --ribbon-padding: 12px 8px 16px !important;
  --search-clear-button-color: #6b6b6b !important;
  --search-icon-color: #6b6b6b !important;
  --search-result-background: #fafafa !important;
  --secondary: #6b7d6b !important;
  --setting-group-heading-color: #2c2c2c !important;
  --setting-items-background: #f5f5f5 !important;
  --setting-items-border-color: #e5e5e5 !important;
  --size-4-1: 8px !important;
  --size-4-2: 12px !important;
  --size-4-3: 16px !important;
  --size-4-4: 20px !important;
  --slider-track-background: #e5e5e5 !important;
  --status-bar-background: #f0f0f0 !important;
  --status-bar-border-color: #e5e5e5 !important;
  --status-bar-text-color: #6b6b6b !important;
  --suggestion-background: #fafafa !important;
  --tab-background-active: #fafafa !important;
  --tab-container-background: #f0f0f0 !important;
  --tab-outline-color: #e5e5e5 !important;
  --tab-radius: 6px !important;
  --tab-switcher-background: #f0f0f0 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f0f0f0, transparent) !important;
  --tab-text-color: #999999 !important;
  --tab-text-color-active: #6b6b6b !important;
  --tab-text-color-focused: #6b6b6b !important;
  --tab-text-color-focused-active: #6b6b6b !important;
  --tab-text-color-focused-active-current: #2c2c2c !important;
  --tab-text-color-focused-highlighted: #6b7d6b !important;
  --table-add-button-border-color: #e5e5e5 !important;
  --table-border-color: #e5e5e5 !important;
  --table-drag-handle-background-active: #6b7d6b !important;
  --table-drag-handle-color: #999999 !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: #e5e5e5 !important;
  --table-header-color: #2c2c2c !important;
  --table-selection-border-color: #6b7d6b !important;
  --tag-color: #6b7d6b !important;
  --tag-color-hover: #6b7d6b !important;
  --tertiary: #5a6d5a !important;
  --text-accent: #6b7d6b !important;
  --text-accent-hover: #5a6d5a !important;
  --text-error: #c55555 !important;
  --text-faint: #999999 !important;
  --text-muted: #6b6b6b !important;
  --text-normal: #2c2c2c !important;
  --text-on-accent: #ffffff !important;
  --text-success: #6b7d6b !important;
  --text-warning: #d4a574 !important;
  --titleFont: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif !important;
  --titlebar-background: #f0f0f0 !important;
  --titlebar-background-focused: #ebebeb !important;
  --titlebar-border-color: #e5e5e5 !important;
  --titlebar-text-color: #6b6b6b !important;
  --titlebar-text-color-focused: #2c2c2c !important;
  --vault-profile-color: #2c2c2c !important;
  --vault-profile-color-hover: #2c2c2c !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(240, 240, 240);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(250, 250, 250);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(229, 229, 229);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(250, 250, 250);
  border-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(229, 229, 229);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(107, 125, 107);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(240, 240, 240);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(229, 229, 229);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(240, 240, 240);
  border-left-color: rgb(229, 229, 229);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(250, 250, 250);
  color: rgb(44, 44, 44);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(107, 125, 107) none 0px;
  text-decoration-color: rgb(107, 125, 107);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(107, 125, 107) none 0px;
  text-decoration-color: rgb(107, 125, 107);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(107, 125, 107, 0.15);
  box-shadow: rgba(107, 125, 107, 0.1) 0px 1px 3px 0px;
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

html[saved-theme="light"] body del {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 153, 153);
  border-radius: 6px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(107, 125, 107);
  border-color: rgb(107, 125, 107);
}

html[saved-theme="light"] body p {
  color: rgb(107, 107, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(107, 107, 107) none 0px;
  text-decoration-color: rgb(107, 107, 107);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(107, 125, 107) none 0px;
  text-decoration-color: rgb(107, 125, 107);
  transition: border-color 0.2s;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(107, 125, 107) none 0px;
  text-decoration-color: rgb(107, 125, 107);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(107, 125, 107) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body dt {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body ol > li {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body ul > li {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(107, 125, 107);
}

html[saved-theme="light"] body blockquote {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  font-style: italic;
  padding-bottom: 24px;
  padding-top: 24px;
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body table {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  width: 210.844px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(229, 229, 229);
  border-left-color: rgb(229, 229, 229);
  border-right-color: rgb(229, 229, 229);
  border-top-color: rgb(229, 229, 229);
  color: rgb(44, 44, 44);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(229, 229, 229);
  border-left-color: rgb(229, 229, 229);
  border-right-color: rgb(229, 229, 229);
  border-top-color: rgb(229, 229, 229);
  color: rgb(44, 44, 44);
  padding-left: 12px;
  padding-right: 12px;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(44, 44, 44);
  font-family: "JetBrains Mono", "SF Mono", Monaco, Inconsolata, monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(229, 229, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 229, 229);
  border-left-width: 1px;
  border-right-color: rgb(229, 229, 229);
  border-right-width: 1px;
  border-top-color: rgb(229, 229, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(229, 229, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 229, 229);
  border-left-width: 1px;
  border-right-color: rgb(229, 229, 229);
  border-right-width: 1px;
  border-top-color: rgb(229, 229, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(44, 44, 44);
  font-family: "JetBrains Mono", "SF Mono", Monaco, Inconsolata, monospace;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(229, 229, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 229, 229);
  border-left-width: 1px;
  border-right-color: rgb(229, 229, 229);
  border-right-width: 1px;
  border-top-color: rgb(229, 229, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(229, 229, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 229, 229);
  border-left-width: 1px;
  border-right-color: rgb(229, 229, 229);
  border-right-width: 1px;
  border-top-color: rgb(229, 229, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body figcaption {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(107, 107, 107);
  border-left-color: rgb(107, 107, 107);
  border-right-color: rgb(107, 107, 107);
  border-top-color: rgb(107, 107, 107);
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(44, 44, 44);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(107, 125, 107);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(107, 125, 107);
  border-left-color: rgb(107, 125, 107);
  border-right-color: rgb(107, 125, 107);
  border-top-color: rgb(107, 125, 107);
  color: rgb(107, 125, 107);
  gap: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(107, 125, 107);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(229, 229, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 229, 229);
  border-left-width: 1px;
  border-right-color: rgb(229, 229, 229);
  border-right-width: 1px;
  border-top-color: rgb(229, 229, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(229, 229, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 229, 229);
  border-left-width: 1px;
  border-right-color: rgb(229, 229, 229);
  border-right-width: 1px;
  border-top-color: rgb(229, 229, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(229, 229, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 229, 229);
  border-left-width: 1px;
  border-right-color: rgb(229, 229, 229);
  border-right-width: 1px;
  border-top-color: rgb(229, 229, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(229, 229, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 229, 229);
  border-left-width: 1px;
  border-right-color: rgb(229, 229, 229);
  border-right-width: 1px;
  border-top-color: rgb(229, 229, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(229, 229, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 229, 229);
  border-left-width: 1px;
  border-right-color: rgb(229, 229, 229);
  border-right-width: 1px;
  border-top-color: rgb(229, 229, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(107, 125, 107, 0.3);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(107, 125, 107, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(107, 125, 107, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(107, 125, 107, 0.3);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(107, 125, 107, 0.3);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(107, 125, 107, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(107, 125, 107, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(107, 125, 107, 0.3);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(229, 229, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 229, 229);
  border-left-width: 1px;
  border-right-color: rgb(229, 229, 229);
  border-right-width: 1px;
  border-top-color: rgb(229, 229, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(107, 125, 107, 0.2);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgba(107, 125, 107, 0.2);
  border-left-width: 1px;
  border-right-color: rgba(107, 125, 107, 0.2);
  border-right-width: 1px;
  border-top-color: rgba(107, 125, 107, 0.2);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(229, 229, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 229, 229);
  border-left-width: 1px;
  border-right-color: rgb(229, 229, 229);
  border-right-width: 1px;
  border-top-color: rgb(229, 229, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(201, 184, 150, 0.3);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(201, 184, 150, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(201, 184, 150, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(201, 184, 150, 0.3);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(229, 229, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 229, 229);
  border-left-width: 1px;
  border-right-color: rgb(229, 229, 229);
  border-right-width: 1px;
  border-top-color: rgb(229, 229, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(212, 165, 116, 0.3);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(212, 165, 116, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(212, 165, 116, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(212, 165, 116, 0.3);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgb(229, 229, 229);
  border-left-color: rgb(229, 229, 229);
  border-right-color: rgb(229, 229, 229);
  border-top-color: rgb(229, 229, 229);
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration-color: rgb(44, 44, 44);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(107, 125, 107);
}

html[saved-theme="light"] body h1 {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(229, 229, 229);
  border-left-color: rgb(229, 229, 229);
  border-right-color: rgb(229, 229, 229);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(107, 125, 107, 0.3);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(107, 125, 107, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(107, 125, 107, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(107, 125, 107, 0.3);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
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
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
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
  color: rgb(107, 107, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(107, 107, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 600;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(107, 107, 107);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(107, 107, 107);
  border-right-color: rgb(107, 107, 107);
  border-top-color: rgb(107, 107, 107);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(107, 107, 107);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(229, 229, 229);
  border-left-color: rgb(229, 229, 229);
  border-right-color: rgb(229, 229, 229);
  border-top-color: rgb(229, 229, 229);
  color: rgb(107, 107, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(107, 107, 107);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(107, 107, 107);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(107, 107, 107);
  border-right-color: rgb(107, 107, 107);
  border-top-color: rgb(107, 107, 107);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(107, 107, 107);
  stroke: rgb(107, 107, 107);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(107, 107, 107);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(107, 107, 107);
  border-right-color: rgb(107, 107, 107);
  border-top-color: rgb(107, 107, 107);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(107, 107, 107);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(229, 229, 229);
  border-left-color: rgb(229, 229, 229);
  border-right-color: rgb(229, 229, 229);
  border-top-color: rgb(229, 229, 229);
  color: rgb(107, 107, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(107, 107, 107);
  border-left-color: rgb(107, 107, 107);
  border-right-color: rgb(107, 107, 107);
  border-top-color: rgb(107, 107, 107);
  color: rgb(107, 107, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(240, 240, 240);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(107, 107, 107);
  border-left-color: rgb(107, 107, 107);
  border-right-color: rgb(107, 107, 107);
  border-top-color: rgb(107, 107, 107);
  color: rgb(107, 107, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(44, 44, 44);
  font-family: "JetBrains Mono", "SF Mono", Monaco, Inconsolata, monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

html[saved-theme="light"] body sub {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body summary {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body sup {
  color: rgb(44, 44, 44);
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  color: rgb(107, 125, 107);
}`,
  },
};
