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
  --background-modifier-border: #3a3a3a;
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #ffeaea;
  --background-modifier-error-hover: #ffe0e0;
  --background-modifier-error-rgb: 255, 234, 234;
  --background-modifier-form-field-highlighted: #333333;
  --background-modifier-success: #e8f5e8;
  --background-primary: #1a1a1a;
  --background-primary-alt: #222222;
  --background-secondary: #2a2a2a;
  --background-secondary-alt: #333333;
  --bases-cards-background: #1a1a1a;
  --bases-cards-cover-background: #222222;
  --bases-cards-shadow: 0 0 0 1px #3a3a3a;
  --bases-embed-border-color: #3a3a3a;
  --bases-embed-border-radius: 6px;
  --bases-group-heading-property-color: #a8a8a8;
  --bases-table-border-color: #3a3a3a;
  --bases-table-cell-background-active: #1a1a1a;
  --bases-table-cell-background-disabled: #222222;
  --bases-table-cell-shadow-focus: 0 0 0 2px #8fa68f;
  --bases-table-container-border-radius: 6px;
  --bases-table-group-background: #222222;
  --bases-table-header-background: #1a1a1a;
  --bases-table-header-color: #a8a8a8;
  --bases-table-summary-background: #1a1a1a;
  --blockquote-border-color: #8fa68f;
  --blur-background: color-mix(in srgb, #333333 65%, transparent) linear-gradient(#333333, color-mix(in srgb, #333333 65%, transparent));
  --bodyFont: var(--font-text);
  --breathing-space: 12px;
  --callout-padding: 16px 16px 16px 24px;
  --callout-radius: 6px;
  --canvas-background: #1a1a1a;
  --canvas-controls-radius: 6px;
  --caret-color: #e8e8e8;
  --checkbox-border-color-hover: #a8a8a8;
  --checkbox-color: #8fa68f;
  --checkbox-color-hover: #a0b7a0;
  --checkbox-marker-color: #1a1a1a;
  --checkbox-radius: 6px;
  --checklist-done-color: #a8a8a8;
  --clickable-icon-radius: 6px;
  --code-background: #222222;
  --code-border-color: #3a3a3a;
  --code-normal: #e8e8e8;
  --code-punctuation: #a8a8a8;
  --code-radius: 6px;
  --codeFont: var(--font-monospace);
  --collapse-icon-color-collapsed: #8fa68f;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #3a3a3a;
  --divider-color-hover: #8fa68f;
  --dropdown-background: #333333;
  --dropdown-background-hover: #404040;
  --embed-block-shadow-hover: 0 0 0 1px #3a3a3a, inset 0 0 0 1px #3a3a3a;
  --embed-border-start: 2px solid #8fa68f;
  --file-header-background: #1a1a1a;
  --file-header-background-focused: #1a1a1a;
  --file-header-font: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --flair-background: #333333;
  --flair-color: #e8e8e8;
  --font-interface: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --font-mermaid: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --font-monospace: "JetBrains Mono", "SF Mono", "Monaco", "Inconsolata", monospace;
  --font-text: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --footnote-divider-color: #3a3a3a;
  --footnote-gap: 8px;
  --footnote-id-color: #a8a8a8;
  --footnote-radius: 6px;
  --graph-node: #a8a8a8;
  --graph-node-focused: #8fa68f;
  --graph-text: #e8e8e8;
  --gray: var(--text-muted);
  --headerFont: var(--font-text);
  --hr-color: #3a3a3a;
  --icon-color: #a8a8a8;
  --icon-color-active: #8fa68f;
  --icon-color-focused: #e8e8e8;
  --icon-color-hover: #a8a8a8;
  --input-icon-inset: 8px;
  --input-padding: 8px 12px;
  --interactive-accent: #8fa68f;
  --interactive-accent-hover: #a0b7a0;
  --interactive-hover: #404040;
  --interactive-normal: #333333;
  --interactive-success: #6b7d6b;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #8fa68f;
  --link-color-hover: #a0b7a0;
  --link-external-color: #8fa68f;
  --link-external-color-hover: #a0b7a0;
  --link-unresolved-color: #8fa68f;
  --list-marker-color-collapsed: #8fa68f;
  --list-marker-color-hover: #a8a8a8;
  --menu-background: #2a2a2a;
  --metadata-border-color: #3a3a3a;
  --metadata-divider-color: #3a3a3a;
  --metadata-input-font: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --metadata-input-padding: 8px 12px;
  --metadata-input-text-color: #e8e8e8;
  --metadata-label-font: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --metadata-label-text-color: #a8a8a8;
  --metadata-label-text-color-hover: #a8a8a8;
  --metadata-padding: 12px 0;
  --modal-background: #1a1a1a;
  --mushin-beige: #d4c096;
  --mushin-green: #8fa68f;
  --mushin-ink: #e8e8e8;
  --mushin-paper: #1a1a1a;
  --mushin-shadow: rgba(0, 0, 0, 0.4);
  --mushin-stone: #a8a8a8;
  --nav-heading-color: #e8e8e8;
  --nav-heading-color-collapsed-hover: #a8a8a8;
  --nav-heading-color-hover: #e8e8e8;
  --nav-item-children-margin-start: 16px;
  --nav-item-color: #a8a8a8;
  --nav-item-color-active: #e8e8e8;
  --nav-item-color-highlighted: #8fa68f;
  --nav-item-color-hover: #e8e8e8;
  --nav-item-color-selected: #e8e8e8;
  --nav-item-padding: 8px 12px 8px 24px;
  --nav-item-parent-padding: 8px 12px 8px 24px;
  --nav-item-radius: 6px;
  --nav-tag-color-active: #a8a8a8;
  --nav-tag-color-hover: #a8a8a8;
  --nav-tag-radius: 6px;
  --pdf-background: #1a1a1a;
  --pdf-page-background: #1a1a1a;
  --pdf-shadow: 0 0 0 1px #3a3a3a;
  --pdf-sidebar-background: #1a1a1a;
  --pdf-thumbnail-shadow: 0 0 0 1px #3a3a3a;
  --pill-border-color: #3a3a3a;
  --pill-color: #a8a8a8;
  --pill-color-hover: #e8e8e8;
  --pill-color-remove-hover: #8fa68f;
  --prompt-background: #1a1a1a;
  --radius-s: 6px;
  --raised-background: color-mix(in srgb, #333333 65%, transparent) linear-gradient(#333333, color-mix(in srgb, #333333 65%, transparent));
  --ribbon-background: #2a2a2a;
  --ribbon-background-collapsed: #1a1a1a;
  --ribbon-padding: 12px 8px 16px;
  --search-clear-button-color: #a8a8a8;
  --search-icon-color: #a8a8a8;
  --search-result-background: #1a1a1a;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #e8e8e8;
  --setting-items-background: #222222;
  --setting-items-border-color: #3a3a3a;
  --size-4-1: 8px;
  --size-4-2: 12px;
  --size-4-3: 16px;
  --size-4-4: 20px;
  --slider-track-background: #3a3a3a;
  --status-bar-background: #2a2a2a;
  --status-bar-border-color: #3a3a3a;
  --status-bar-text-color: #a8a8a8;
  --suggestion-background: #1a1a1a;
  --tab-background-active: #1a1a1a;
  --tab-container-background: #2a2a2a;
  --tab-outline-color: #3a3a3a;
  --tab-radius: 6px;
  --tab-switcher-background: #2a2a2a;
  --tab-switcher-menubar-background: linear-gradient(to top, #2a2a2a, transparent);
  --tab-text-color-active: #a8a8a8;
  --tab-text-color-focused: #a8a8a8;
  --tab-text-color-focused-active: #a8a8a8;
  --tab-text-color-focused-active-current: #e8e8e8;
  --tab-text-color-focused-highlighted: #8fa68f;
  --table-add-button-border-color: #3a3a3a;
  --table-border-color: #3a3a3a;
  --table-drag-handle-background-active: #8fa68f;
  --table-drag-handle-color-active: #ffffff;
  --table-header-border-color: #3a3a3a;
  --table-header-color: #e8e8e8;
  --table-selection-border-color: #8fa68f;
  --tag-color: #8fa68f;
  --tag-color-hover: #8fa68f;
  --tertiary: var(--text-accent-hover);
  --text-accent: #8fa68f;
  --text-accent-hover: #a0b7a0;
  --text-error: #c55555;
  --text-muted: #a8a8a8;
  --text-normal: #e8e8e8;
  --text-on-accent: #ffffff;
  --text-success: #6b7d6b;
  --text-warning: #d4a574;
  --titleFont: var(--font-text);
  --titlebar-background: #2a2a2a;
  --titlebar-background-focused: #333333;
  --titlebar-border-color: #3a3a3a;
  --titlebar-text-color: #a8a8a8;
  --titlebar-text-color-focused: #e8e8e8;
  --vault-profile-color: #e8e8e8;
  --vault-profile-color-hover: #e8e8e8;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(42, 42, 42);
  color: rgb(232, 232, 232);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(232, 232, 232);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(42, 42, 42);
  color: rgb(232, 232, 232);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(58, 58, 58);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(42, 42, 42);
  border-left-color: rgb(58, 58, 58);
  color: rgb(232, 232, 232);
}

body div#quartz-root {
  background-color: rgb(26, 26, 26);
  color: rgb(232, 232, 232);
}`,
    typography: `body .page article p > b, b {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

body .page article p > em, em {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

body .page article p > i, i {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

body .page article p > strong, strong {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

body .text-highlight {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

body del {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: line-through rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

body p {
  color: rgb(168, 168, 168);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(168, 168, 168) none 0px;
  text-decoration: rgb(168, 168, 168);
  text-decoration-color: rgb(168, 168, 168);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}`,
    links: `body a.external, footer a {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(143, 166, 143) none 0px;
  text-decoration: rgb(143, 166, 143);
  text-decoration-color: rgb(143, 166, 143);
  transition: border-color 0.2s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(143, 166, 143) none 0px;
  text-decoration: underline rgb(143, 166, 143);
  text-decoration-color: rgb(143, 166, 143);
}

body a.internal.broken {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(143, 166, 143) none 0px;
}`,
    lists: `body dd {
  color: rgb(232, 232, 232);
}

body dt {
  color: rgb(232, 232, 232);
}

body ol > li {
  color: rgb(232, 232, 232);
}

body ol.overflow {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body ul > li {
  color: rgb(232, 232, 232);
}

body ul.overflow {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(143, 166, 143);
  text-decoration: rgb(143, 166, 143);
}

body blockquote {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  font-style: italic;
  padding-bottom: 24px;
  padding-top: 24px;
}`,
    tables: `body .spacer {
  background-color: rgb(26, 26, 26);
}

body .table-container {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body table {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  width: 210.844px;
}

body td {
  border-bottom-color: rgb(58, 58, 58);
  border-left-color: rgb(58, 58, 58);
  border-right-color: rgb(58, 58, 58);
  border-top-color: rgb(58, 58, 58);
  color: rgb(232, 232, 232);
  padding-left: 12px;
  padding-right: 12px;
}

body th {
  border-bottom-color: rgb(58, 58, 58);
  border-left-color: rgb(58, 58, 58);
  border-right-color: rgb(58, 58, 58);
  border-top-color: rgb(58, 58, 58);
  color: rgb(232, 232, 232);
  padding-left: 12px;
  padding-right: 12px;
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body figcaption {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body figure {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body img {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body video {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
}

body .transclude {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(143, 166, 143);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body .transclude-inner {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(143, 166, 143);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(168, 168, 168);
  text-decoration: line-through rgb(168, 168, 168);
  text-decoration-color: rgb(168, 168, 168);
}

body input[type=checkbox] {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='*'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='-'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='/'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='>'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='?'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='I'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='S'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='b'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='c'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='d'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='f'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='i'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='k'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='l'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='p'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='u'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='w'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(143, 166, 143);
  border-left-color: rgb(143, 166, 143);
  border-right-color: rgb(143, 166, 143);
  border-top-color: rgb(143, 166, 143);
  gap: 8px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(58, 58, 58);
  border-left-color: rgb(58, 58, 58);
  border-right-color: rgb(58, 58, 58);
  border-top-color: rgb(58, 58, 58);
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > * {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(232, 232, 232);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(232, 232, 232);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(232, 232, 232);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(42, 42, 42);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(232, 232, 232);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(143, 166, 143);
}

body h1 {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body h2 {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body h3 {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body h4 {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body h5 {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body h6 {
  color: rgb(143, 166, 143);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body hr {
  border-bottom-color: rgb(58, 58, 58);
  border-left-color: rgb(58, 58, 58);
  border-right-color: rgb(58, 58, 58);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(168, 168, 168);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
  text-decoration: rgb(168, 168, 168);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(168, 168, 168);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
  text-decoration: rgb(168, 168, 168);
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(58, 58, 58);
  border-left-color: rgb(58, 58, 58);
  border-right-color: rgb(58, 58, 58);
  border-top-color: rgb(58, 58, 58);
  color: rgb(168, 168, 168);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body footer ul li a {
  color: rgb(168, 168, 168);
  text-decoration: rgb(168, 168, 168);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body li.section-li > .section .meta {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
}

body ul.section-ul {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(168, 168, 168);
  stroke: rgb(168, 168, 168);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
}

body .metadata {
  border-bottom-color: rgb(58, 58, 58);
  border-left-color: rgb(58, 58, 58);
  border-right-color: rgb(58, 58, 58);
  border-top-color: rgb(58, 58, 58);
  color: rgb(168, 168, 168);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}

body .metadata-properties {
  border-bottom-color: rgb(168, 168, 168);
  border-left-color: rgb(168, 168, 168);
  border-right-color: rgb(168, 168, 168);
  border-top-color: rgb(168, 168, 168);
  color: rgb(168, 168, 168);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body .navigation-progress {
  background-color: rgb(42, 42, 42);
}

body .page-header h2.page-title {
  color: rgb(232, 232, 232);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body abbr {
  color: rgb(232, 232, 232);
  text-decoration: underline dotted rgb(232, 232, 232);
}

body details {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body input[type=text] {
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

body kbd {
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

body progress {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body sub {
  color: rgb(232, 232, 232);
}

body summary {
  color: rgb(232, 232, 232);
}

body sup {
  color: rgb(232, 232, 232);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #e5e5e5;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.05);
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #ffeaea;
  --background-modifier-error-hover: #ffe0e0;
  --background-modifier-error-rgb: 255, 234, 234;
  --background-modifier-form-field-highlighted: #f8f8f8;
  --background-modifier-success: #e8f5e8;
  --background-primary: #fafafa;
  --background-primary-alt: #f5f5f5;
  --background-secondary: #f0f0f0;
  --background-secondary-alt: #ebebeb;
  --bases-cards-background: #fafafa;
  --bases-cards-cover-background: #f5f5f5;
  --bases-cards-shadow: 0 0 0 1px #e5e5e5;
  --bases-embed-border-color: #e5e5e5;
  --bases-embed-border-radius: 6px;
  --bases-group-heading-property-color: #6b6b6b;
  --bases-table-border-color: #e5e5e5;
  --bases-table-cell-background-active: #fafafa;
  --bases-table-cell-background-disabled: #f5f5f5;
  --bases-table-cell-shadow-focus: 0 0 0 2px #6b7d6b;
  --bases-table-container-border-radius: 6px;
  --bases-table-group-background: #f5f5f5;
  --bases-table-header-background: #fafafa;
  --bases-table-header-color: #6b6b6b;
  --bases-table-summary-background: #fafafa;
  --blockquote-border-color: #6b7d6b;
  --blur-background: color-mix(in srgb, #fafafa 65%, transparent) linear-gradient(#fafafa, color-mix(in srgb, #fafafa 65%, transparent));
  --bodyFont: var(--font-text);
  --breathing-space: 12px;
  --callout-padding: 16px 16px 16px 24px;
  --callout-radius: 6px;
  --canvas-background: #fafafa;
  --canvas-card-label-color: #999999;
  --canvas-controls-radius: 6px;
  --caret-color: #2c2c2c;
  --checkbox-border-color: #999999;
  --checkbox-border-color-hover: #6b6b6b;
  --checkbox-color: #6b7d6b;
  --checkbox-color-hover: #5a6d5a;
  --checkbox-marker-color: #fafafa;
  --checkbox-radius: 6px;
  --checklist-done-color: #6b6b6b;
  --clickable-icon-radius: 6px;
  --code-background: #f5f5f5;
  --code-border-color: #e5e5e5;
  --code-comment: #999999;
  --code-normal: #2c2c2c;
  --code-punctuation: #6b6b6b;
  --code-radius: 6px;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #999999;
  --collapse-icon-color-collapsed: #6b7d6b;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #e5e5e5;
  --divider-color-hover: #6b7d6b;
  --dropdown-background: #f5f5f5;
  --dropdown-background-hover: #ebebeb;
  --embed-block-shadow-hover: 0 0 0 1px #e5e5e5, inset 0 0 0 1px #e5e5e5;
  --embed-border-start: 2px solid #6b7d6b;
  --file-header-background: #fafafa;
  --file-header-background-focused: #fafafa;
  --file-header-font: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --flair-background: #f5f5f5;
  --flair-color: #2c2c2c;
  --font-interface: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --font-mermaid: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --font-monospace: "JetBrains Mono", "SF Mono", "Monaco", "Inconsolata", monospace;
  --font-text: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --footnote-divider-color: #e5e5e5;
  --footnote-gap: 8px;
  --footnote-id-color: #6b6b6b;
  --footnote-id-color-no-occurrences: #999999;
  --footnote-radius: 6px;
  --graph-node: #6b6b6b;
  --graph-node-focused: #6b7d6b;
  --graph-node-unresolved: #999999;
  --graph-text: #2c2c2c;
  --gray: var(--text-muted);
  --headerFont: var(--font-text);
  --heading-formatting: #999999;
  --hr-color: #e5e5e5;
  --icon-color: #6b6b6b;
  --icon-color-active: #6b7d6b;
  --icon-color-focused: #2c2c2c;
  --icon-color-hover: #6b6b6b;
  --input-date-separator: #999999;
  --input-icon-inset: 8px;
  --input-padding: 8px 12px;
  --input-placeholder-color: #999999;
  --interactive-accent: #6b7d6b;
  --interactive-accent-hover: #5a6d5a;
  --interactive-hover: #ebebeb;
  --interactive-normal: #f5f5f5;
  --interactive-success: #6b7d6b;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #6b7d6b;
  --link-color-hover: #5a6d5a;
  --link-external-color: #6b7d6b;
  --link-external-color-hover: #5a6d5a;
  --link-unresolved-color: #6b7d6b;
  --list-marker-color: #999999;
  --list-marker-color-collapsed: #6b7d6b;
  --list-marker-color-hover: #6b6b6b;
  --menu-background: #f0f0f0;
  --metadata-border-color: #e5e5e5;
  --metadata-divider-color: #e5e5e5;
  --metadata-input-font: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --metadata-input-padding: 8px 12px;
  --metadata-input-text-color: #2c2c2c;
  --metadata-label-font: "Inter", "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  --metadata-label-text-color: #6b6b6b;
  --metadata-label-text-color-hover: #6b6b6b;
  --metadata-padding: 12px 0;
  --modal-background: #fafafa;
  --mushin-beige: #c9b896;
  --mushin-green: #6b7d6b;
  --mushin-ink: #2c2c2c;
  --mushin-paper: #fafafa;
  --mushin-shadow: rgba(0, 0, 0, 0.08);
  --mushin-stone: #a8a8a8;
  --nav-collapse-icon-color: #999999;
  --nav-collapse-icon-color-collapsed: #999999;
  --nav-heading-color: #2c2c2c;
  --nav-heading-color-collapsed: #999999;
  --nav-heading-color-collapsed-hover: #6b6b6b;
  --nav-heading-color-hover: #2c2c2c;
  --nav-item-children-margin-start: 16px;
  --nav-item-color: #6b6b6b;
  --nav-item-color-active: #2c2c2c;
  --nav-item-color-highlighted: #6b7d6b;
  --nav-item-color-hover: #2c2c2c;
  --nav-item-color-selected: #2c2c2c;
  --nav-item-padding: 8px 12px 8px 24px;
  --nav-item-parent-padding: 8px 12px 8px 24px;
  --nav-item-radius: 6px;
  --nav-tag-color: #999999;
  --nav-tag-color-active: #6b6b6b;
  --nav-tag-color-hover: #6b6b6b;
  --nav-tag-radius: 6px;
  --pdf-background: #fafafa;
  --pdf-page-background: #fafafa;
  --pdf-sidebar-background: #fafafa;
  --pill-border-color: #e5e5e5;
  --pill-color: #6b6b6b;
  --pill-color-hover: #2c2c2c;
  --pill-color-remove: #999999;
  --pill-color-remove-hover: #6b7d6b;
  --prompt-background: #fafafa;
  --radius-s: 6px;
  --raised-background: color-mix(in srgb, #fafafa 65%, transparent) linear-gradient(#fafafa, color-mix(in srgb, #fafafa 65%, transparent));
  --ribbon-background: #f0f0f0;
  --ribbon-background-collapsed: #fafafa;
  --ribbon-padding: 12px 8px 16px;
  --search-clear-button-color: #6b6b6b;
  --search-icon-color: #6b6b6b;
  --search-result-background: #fafafa;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #2c2c2c;
  --setting-items-background: #f5f5f5;
  --setting-items-border-color: #e5e5e5;
  --size-4-1: 8px;
  --size-4-2: 12px;
  --size-4-3: 16px;
  --size-4-4: 20px;
  --slider-track-background: #e5e5e5;
  --status-bar-background: #f0f0f0;
  --status-bar-border-color: #e5e5e5;
  --status-bar-text-color: #6b6b6b;
  --suggestion-background: #fafafa;
  --tab-background-active: #fafafa;
  --tab-container-background: #f0f0f0;
  --tab-outline-color: #e5e5e5;
  --tab-radius: 6px;
  --tab-switcher-background: #f0f0f0;
  --tab-switcher-menubar-background: linear-gradient(to top, #f0f0f0, transparent);
  --tab-text-color: #999999;
  --tab-text-color-active: #6b6b6b;
  --tab-text-color-focused: #6b6b6b;
  --tab-text-color-focused-active: #6b6b6b;
  --tab-text-color-focused-active-current: #2c2c2c;
  --tab-text-color-focused-highlighted: #6b7d6b;
  --table-add-button-border-color: #e5e5e5;
  --table-border-color: #e5e5e5;
  --table-drag-handle-background-active: #6b7d6b;
  --table-drag-handle-color: #999999;
  --table-drag-handle-color-active: #ffffff;
  --table-header-border-color: #e5e5e5;
  --table-header-color: #2c2c2c;
  --table-selection-border-color: #6b7d6b;
  --tag-color: #6b7d6b;
  --tag-color-hover: #6b7d6b;
  --tertiary: var(--text-accent-hover);
  --text-accent: #6b7d6b;
  --text-accent-hover: #5a6d5a;
  --text-error: #c55555;
  --text-faint: #999999;
  --text-muted: #6b6b6b;
  --text-normal: #2c2c2c;
  --text-on-accent: #ffffff;
  --text-success: #6b7d6b;
  --text-warning: #d4a574;
  --titleFont: var(--font-text);
  --titlebar-background: #f0f0f0;
  --titlebar-background-focused: #ebebeb;
  --titlebar-border-color: #e5e5e5;
  --titlebar-text-color: #6b6b6b;
  --titlebar-text-color-focused: #2c2c2c;
  --vault-profile-color: #2c2c2c;
  --vault-profile-color-hover: #2c2c2c;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(240, 240, 240);
  color: rgb(44, 44, 44);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(250, 250, 250);
  color: rgb(44, 44, 44);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(240, 240, 240);
  color: rgb(44, 44, 44);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(229, 229, 229);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(240, 240, 240);
  border-left-color: rgb(229, 229, 229);
  color: rgb(44, 44, 44);
}

body div#quartz-root {
  background-color: rgb(250, 250, 250);
  color: rgb(44, 44, 44);
}`,
    typography: `body .page article p > b, b {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

body .page article p > em, em {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

body .page article p > i, i {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

body .page article p > strong, strong {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

body .text-highlight {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

body del {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration: line-through rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

body p {
  color: rgb(107, 107, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(107, 107, 107) none 0px;
  text-decoration: rgb(107, 107, 107);
  text-decoration-color: rgb(107, 107, 107);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}`,
    links: `body a.external, footer a {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(107, 125, 107) none 0px;
  text-decoration: rgb(107, 125, 107);
  text-decoration-color: rgb(107, 125, 107);
  transition: border-color 0.2s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(107, 125, 107) none 0px;
  text-decoration: underline rgb(107, 125, 107);
  text-decoration-color: rgb(107, 125, 107);
}

body a.internal.broken {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(107, 125, 107) none 0px;
}`,
    lists: `body dd {
  color: rgb(44, 44, 44);
}

body dt {
  color: rgb(44, 44, 44);
}

body ol > li {
  color: rgb(44, 44, 44);
}

body ol.overflow {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

body ul > li {
  color: rgb(44, 44, 44);
}

body ul.overflow {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(107, 125, 107);
  text-decoration: rgb(107, 125, 107);
}

body blockquote {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  font-style: italic;
  padding-bottom: 24px;
  padding-top: 24px;
}`,
    tables: `body .spacer {
  background-color: rgb(250, 250, 250);
}

body .table-container {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

body table {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  width: 210.844px;
}

body td {
  border-bottom-color: rgb(229, 229, 229);
  border-left-color: rgb(229, 229, 229);
  border-right-color: rgb(229, 229, 229);
  border-top-color: rgb(229, 229, 229);
  color: rgb(44, 44, 44);
  padding-left: 12px;
  padding-right: 12px;
}

body th {
  border-bottom-color: rgb(229, 229, 229);
  border-left-color: rgb(229, 229, 229);
  border-right-color: rgb(229, 229, 229);
  border-top-color: rgb(229, 229, 229);
  color: rgb(44, 44, 44);
  padding-left: 12px;
  padding-right: 12px;
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

body figcaption {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body figure {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

body img {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

body video {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(44, 44, 44);
  color: rgb(44, 44, 44);
}

body .transclude {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(107, 125, 107);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

body .transclude-inner {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(107, 125, 107);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(107, 107, 107);
  text-decoration: line-through rgb(107, 107, 107);
  text-decoration-color: rgb(107, 107, 107);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='*'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='-'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='/'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='>'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='?'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='I'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='S'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='b'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='c'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='d'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='f'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='i'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='k'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='l'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='p'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='u'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}

body li.task-list-item[data-task='w'] {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(107, 125, 107);
  border-left-color: rgb(107, 125, 107);
  border-right-color: rgb(107, 125, 107);
  border-top-color: rgb(107, 125, 107);
  gap: 8px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(229, 229, 229);
  border-left-color: rgb(229, 229, 229);
  border-right-color: rgb(229, 229, 229);
  border-top-color: rgb(229, 229, 229);
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(250, 250, 250);
}

body .search > .search-container > .search-space > * {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  outline: rgb(44, 44, 44) none 0px;
  text-decoration: rgb(44, 44, 44);
  text-decoration-color: rgb(44, 44, 44);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s, transform 0.2s;
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(44, 44, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(44, 44, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(44, 44, 44);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(44, 44, 44);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(107, 125, 107);
}

body h1 {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body h2 {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body h3 {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body h4 {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body h5 {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body h6 {
  color: rgb(107, 125, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body hr {
  border-bottom-color: rgb(229, 229, 229);
  border-left-color: rgb(229, 229, 229);
  border-right-color: rgb(229, 229, 229);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-corner {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-track {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(107, 107, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
  text-decoration: rgb(107, 107, 107);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(107, 107, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
  text-decoration: rgb(107, 107, 107);
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(229, 229, 229);
  border-left-color: rgb(229, 229, 229);
  border-right-color: rgb(229, 229, 229);
  border-top-color: rgb(229, 229, 229);
  color: rgb(107, 107, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body footer ul li a {
  color: rgb(107, 107, 107);
  text-decoration: rgb(107, 107, 107);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
  color: rgb(44, 44, 44);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

body li.section-li > .section .meta {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(44, 44, 44);
  text-decoration: rgb(44, 44, 44);
}

body ul.section-ul {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(107, 107, 107);
  stroke: rgb(107, 107, 107);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
  color: rgb(44, 44, 44);
}

body .metadata {
  border-bottom-color: rgb(229, 229, 229);
  border-left-color: rgb(229, 229, 229);
  border-right-color: rgb(229, 229, 229);
  border-top-color: rgb(229, 229, 229);
  color: rgb(107, 107, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}

body .metadata-properties {
  border-bottom-color: rgb(107, 107, 107);
  border-left-color: rgb(107, 107, 107);
  border-right-color: rgb(107, 107, 107);
  border-top-color: rgb(107, 107, 107);
  color: rgb(107, 107, 107);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body .navigation-progress {
  background-color: rgb(240, 240, 240);
}

body .page-header h2.page-title {
  color: rgb(44, 44, 44);
  font-family: Inter, "Noto Sans", "Helvetica Neue", Arial, sans-serif;
}

body abbr {
  color: rgb(44, 44, 44);
  text-decoration: underline dotted rgb(44, 44, 44);
}

body details {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

body input[type=text] {
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

body kbd {
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

body progress {
  border-bottom-color: rgb(44, 44, 44);
  border-left-color: rgb(44, 44, 44);
  border-right-color: rgb(44, 44, 44);
  border-top-color: rgb(44, 44, 44);
}

body sub {
  color: rgb(44, 44, 44);
}

body summary {
  color: rgb(44, 44, 44);
}

body sup {
  color: rgb(44, 44, 44);
}`,
  },
};
