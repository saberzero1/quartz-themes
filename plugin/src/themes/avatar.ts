import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "avatar",
    modes: ["dark"],
    variations: [],
    fonts: ["jetbrains-mono", "kalam"],
  },
  dark: {
    base: `:root:root {
  --avatar-aqua: #7DD3C0;
  --avatar-aqua-light: #5EEAD4;
  --avatar-bold: #34D399;
  --avatar-focus-border: rgba(125, 211, 192, 0.2);
  --avatar-focus-color: #343e4f;
  --avatar-gold: #FBBF24;
  --avatar-gold-light: #FDE68A;
  --avatar-pink: #EF44C0;
  --avatar-purple: #6366F1;
  --avatar-purple-light: #A78BFA;
  --background-modifier-border: #4a5568;
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #dc2626;
  --background-modifier-error-hover: #b91c1c;
  --background-modifier-error-rgb: 220, 38, 38;
  --background-modifier-form-field: #374151;
  --background-modifier-form-field-highlighted: #4a5568;
  --background-modifier-form-field-hover: #374151;
  --background-modifier-success: #059669;
  --background-primary: #1a2332;
  --background-primary-alt: #2d3748;
  --background-secondary: #374151;
  --bases-cards-background: #1a2332;
  --bases-cards-cover-background: #2d3748;
  --bases-cards-shadow: 0 0 0 1px #4a5568;
  --bases-embed-border-color: #4a5568;
  --bases-group-heading-property-color: #a0aec0;
  --bases-table-border-color: rgba(125, 211, 192, 0.3);
  --bases-table-cell-background-active: #1a2332;
  --bases-table-cell-background-disabled: #2d3748;
  --bases-table-cell-shadow-focus: 0 0 0 2px #7dd3c0;
  --bases-table-group-background: #2d3748;
  --bases-table-header-background: #1a2332;
  --bases-table-header-color: #a0aec0;
  --bases-table-summary-background: #1a2332;
  --blockquote-bg: #303E59;
  --blockquote-border-color: #fbbf24;
  --blockquote-color: #E1DCF2;
  --blockquote-font-style: italic;
  --blur-background: color-mix(in srgb, #374151 65%, transparent) linear-gradient(#374151, color-mix(in srgb, #374151 65%, transparent));
  --canvas-background: #1a2332;
  --canvas-card-label-color: #718096;
  --caret-color: #e2e8f0;
  --checkbox-border-color: #718096;
  --checkbox-border-color-hover: #a0aec0;
  --checkbox-color: #7dd3c0;
  --checkbox-color-hover: #5eead4;
  --checkbox-marker-color: #1a2332;
  --checklist-done-color: #a0aec0;
  --code-background: #374151;
  --code-border-color: #4a5568;
  --code-comment: #718096;
  --code-normal: #e2e8f0;
  --code-punctuation: #a0aec0;
  --collapse-icon-color: #718096;
  --collapse-icon-color-collapsed: #7dd3c0;
  --divider-color: #4a5568;
  --divider-color-hover: #7dd3c0;
  --dropdown-background: #374151;
  --dropdown-background-hover: #4a5568;
  --embed-block-shadow-hover: 0 0 0 1px #4a5568, inset 0 0 0 1px #4a5568;
  --embed-border-start: 2px solid #7dd3c0;
  --file-header-background: #1a2332;
  --file-header-background-focused: #1a2332;
  --file-header-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --flair-background: #374151;
  --flair-color: #e2e8f0;
  --font-interface: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-interface-theme: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mermaid: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-monospace: 'JetBrains Mono', 'Source Code Pro', monospace;
  --font-monospace-theme: 'JetBrains Mono', 'Source Code Pro', monospace;
  --font-print: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif, 'Arial';
  --font-text: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-text-theme: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --footnote-divider-color: #4a5568;
  --footnote-id-color: #a0aec0;
  --footnote-id-color-no-occurrences: #718096;
  --graph-node: #a0aec0;
  --graph-node-focused: #7dd3c0;
  --graph-node-unresolved: #718096;
  --graph-text: #e2e8f0;
  --h1-color: #EF44C0;
  --h1-size: 2.5em;
  --h2-color: #a78bfa;
  --h2-size: 2.0em;
  --h2-weight: 600;
  --h3-color: #fbbf24;
  --h3-size: 1.6em;
  --h3-weight: 600;
  --h4-color: #5EEAD4;
  --h4-size: 1.3em;
  --h4-weight: 500;
  --h5-color: #7dd3c0;
  --h5-size: 1.1em;
  --h5-weight: 500;
  --h6-color: #6366f1;
  --h6-size: 1.0em;
  --h6-weight: 500;
  --heading-formatting: #718096;
  --hr-color: #fbbf24;
  --icon-color: #7dd3c0;
  --icon-color-active: #f561ab;
  --icon-color-focused: #fbbf24;
  --icon-color-hover: #fde68a;
  --indentation-guide-color: #59FFD5;
  --indentation-guide-color-active: rgba(89, 255, 213, 0.66);
  --inline-title-color: #EF44C0;
  --inline-title-size: 2.5em;
  --input-date-separator: #718096;
  --input-placeholder-color: #718096;
  --interactive-accent: #7dd3c0;
  --interactive-accent-hover: #5eead4;
  --interactive-hover: #4a5568;
  --interactive-normal: #374151;
  --interactive-success: #059669;
  --link-color: #7dd3c0;
  --link-color-hover: #5eead4;
  --link-external-color: #fbbf24;
  --link-external-color-hover: #5eead4;
  --link-unresolved-color: #6cf58e;
  --list-marker-color: #718096;
  --list-marker-color-collapsed: #7dd3c0;
  --list-marker-color-hover: #a0aec0;
  --menu-background: #374151;
  --metadata-border-color: #4a5568;
  --metadata-divider-color: #4a5568;
  --metadata-input-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --metadata-input-text-color: #e2e8f0;
  --metadata-label-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --metadata-label-text-color: #a0aec0;
  --metadata-label-text-color-hover: #a0aec0;
  --modal-background: #1a2332;
  --nav-collapse-icon-color: #718096;
  --nav-collapse-icon-color-collapsed: #718096;
  --nav-heading-color: #e2e8f0;
  --nav-heading-color-collapsed: #718096;
  --nav-heading-color-collapsed-hover: #a0aec0;
  --nav-heading-color-hover: #e2e8f0;
  --nav-indentation-guide-color: #59FFD5;
  --nav-item-color: #a0aec0;
  --nav-item-color-active: #e2e8f0;
  --nav-item-color-highlighted: #7dd3c0;
  --nav-item-color-hover: #e2e8f0;
  --nav-item-color-selected: #e2e8f0;
  --nav-tag-color: #718096;
  --nav-tag-color-active: #a0aec0;
  --nav-tag-color-hover: #a0aec0;
  --pdf-background: #1a2332;
  --pdf-page-background: #1a2332;
  --pdf-shadow: 0 0 0 1px #4a5568;
  --pdf-sidebar-background: #1a2332;
  --pdf-thumbnail-shadow: 0 0 0 1px #4a5568;
  --pill-border-color: #4a5568;
  --pill-color: #a0aec0;
  --pill-color-hover: #e2e8f0;
  --pill-color-remove: #718096;
  --pill-color-remove-hover: #7dd3c0;
  --prompt-background: #1a2332;
  --raised-background: color-mix(in srgb, #374151 65%, transparent) linear-gradient(#374151, color-mix(in srgb, #374151 65%, transparent));
  --ribbon-background: #374151;
  --ribbon-background-collapsed: #1a2332;
  --search-clear-button-color: #a0aec0;
  --search-icon-color: #a0aec0;
  --search-result-background: #1a2332;
  --setting-group-heading-color: #e2e8f0;
  --setting-items-background: #2d3748;
  --setting-items-border-color: #4a5568;
  --slider-track-background: #4a5568;
  --status-bar-background: #374151;
  --status-bar-border-color: #4a5568;
  --status-bar-text-color: #a0aec0;
  --suggestion-background: #1a2332;
  --tab-background-active: #1a2332;
  --tab-container-background: #374151;
  --tab-outline-color: #4a5568;
  --tab-switcher-background: #374151;
  --tab-switcher-menubar-background: linear-gradient(to top, #374151, transparent);
  --tab-text-color: #718096;
  --tab-text-color-active: #a0aec0;
  --tab-text-color-focused: #a0aec0;
  --tab-text-color-focused-active: #FBBF24;
  --tab-text-color-focused-active-current: #e2e8f0;
  --tab-text-color-focused-highlighted: #7dd3c0;
  --tab-text-color-unfocused-active: #7dd3c0;
  --table-add-button-border-color: #4a5568;
  --table-border-color: rgba(125, 211, 192, 0.3);
  --table-drag-handle-background-active: #7dd3c0;
  --table-drag-handle-color: #718096;
  --table-drag-handle-color-active: #1a202c;
  --table-header-background: linear-gradient(135deg, rgba(125, 211, 192, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
  --table-header-border-color: rgba(125, 211, 192, 0.3);
  --table-header-color: #e2e8f0;
  --table-row-even-background: rgba(125, 211, 192, 0.03);
  --table-row-hover-background: rgba(251, 191, 36, 0.05);
  --table-selection-border-color: #7dd3c0;
  --tag-background: rgba(251, 191, 36, 0.2);
  --tag-background-hover: rgba(251, 191, 36, 0.3);
  --tag-color: #fbbf24;
  --tag-color-hover: #7dd3c0;
  --text-accent: #7dd3c0;
  --text-accent-hover: #5eead4;
  --text-faint: #718096;
  --text-highlight-bg: rgba(125, 211, 192, 0.3);
  --text-highlight-bg-active: rgba(251, 191, 36, 0.6);
  --text-highlight-color: #EF44C0;
  --text-muted: #a0aec0;
  --text-normal: #e2e8f0;
  --text-on-accent: #1a202c;
  --titlebar-background: #374151;
  --titlebar-border-color: #4a5568;
  --titlebar-text-color: #a0aec0;
  --titlebar-text-color-focused: #FBBF24;
  --titlebar-text-color-unfocused: #a0aec0;
  --vault-profile-color: #e2e8f0;
  --vault-profile-color-hover: #e2e8f0;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 35, 50);
  color: rgb(226, 232, 240);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 35, 50);
  color: rgb(226, 232, 240);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(55, 65, 81);
  color: rgb(226, 232, 240);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 35, 50);
  border-left-color: rgb(128, 128, 128);
  color: rgb(226, 232, 240);
}

body div#quartz-root {
  background-color: rgb(26, 35, 50);
  color: rgb(226, 232, 240);
}`,
    typography: `body .page article p > b, b {
  color: rgb(52, 211, 153);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 700;
  outline: rgb(52, 211, 153) none 0px;
  text-decoration: rgb(52, 211, 153);
  text-decoration-color: rgb(52, 211, 153);
}

body .page article p > em, em {
  color: rgb(129, 140, 248);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(129, 140, 248) none 0px;
  text-decoration: rgb(129, 140, 248);
  text-decoration-color: rgb(129, 140, 248);
}

body .page article p > i, i {
  color: rgb(129, 140, 248);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(129, 140, 248) none 0px;
  text-decoration: rgb(129, 140, 248);
  text-decoration-color: rgb(129, 140, 248);
}

body .page article p > strong, strong {
  color: rgb(52, 211, 153);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 700;
  outline: rgb(52, 211, 153) none 0px;
  text-decoration: rgb(52, 211, 153);
  text-decoration-color: rgb(52, 211, 153);
}

body .text-highlight {
  background-color: rgba(251, 191, 36, 0.6);
  color: rgb(26, 26, 26);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 500;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body del {
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(226, 232, 240) none 0px;
  text-decoration: line-through rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body p {
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(160, 174, 192) none 0px;
  text-decoration: rgb(160, 174, 192);
  text-decoration-color: rgb(160, 174, 192);
}`,
    links: `body a.external, footer a {
  color: rgb(251, 191, 36);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(251, 191, 36) none 0px;
  text-decoration: underline rgb(251, 191, 36);
  text-decoration-color: rgb(251, 191, 36);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(125, 211, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(125, 211, 192) none 0px;
  text-decoration: underline rgb(125, 211, 192);
  text-decoration-color: rgb(125, 211, 192);
}

body a.internal.broken {
  color: rgb(108, 245, 142);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(108, 245, 142) none 0px;
}`,
    lists: `body dd {
  color: rgb(226, 232, 240);
}

body dt {
  color: rgb(226, 232, 240);
}

body ol > li {
  color: rgb(226, 232, 240);
}

body ol.overflow {
  background-color: rgb(26, 35, 50);
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

body ul > li {
  color: rgb(226, 232, 240);
}

body ul.overflow {
  background-color: rgb(26, 35, 50);
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(113, 128, 150);
  text-decoration: rgb(113, 128, 150);
}

body blockquote {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

body table {
  border-bottom-color: rgba(125, 211, 192, 0.3);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(125, 211, 192, 0.3);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(125, 211, 192, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(125, 211, 192, 0.3);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  width: 226.844px;
}

body tbody tr:nth-child(even) {
  background-color: rgba(125, 211, 192, 0.03);
}

body td {
  border-bottom-color: rgba(125, 211, 192, 0.2);
  border-left-color: rgb(226, 232, 240);
  border-left-width: 0px;
  border-right-color: rgba(125, 211, 192, 0.15);
  border-top-color: rgba(125, 211, 192, 0.3);
  color: rgb(226, 232, 240);
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
}

body th {
  border-bottom-color: rgb(125, 211, 192);
  border-bottom-width: 2px;
  border-left-color: rgb(125, 211, 192);
  border-left-width: 0px;
  border-right-color: rgba(125, 211, 192, 0.15);
  border-top-color: rgba(125, 211, 192, 0.3);
  color: rgb(125, 211, 192);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  text-align: left;
}

body thead {
  border-bottom-color: rgba(125, 211, 192, 0.3);
  border-left-color: rgba(125, 211, 192, 0.3);
  border-right-color: rgba(125, 211, 192, 0.3);
  border-top-color: rgba(125, 211, 192, 0.3);
}

body tr {
  border-bottom-color: rgba(125, 211, 192, 0.3);
  border-left-color: rgba(125, 211, 192, 0.3);
  border-right-color: rgba(125, 211, 192, 0.3);
  border-top-color: rgba(125, 211, 192, 0.3);
}`,
    code: `body code {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
  font-family: "JetBrains Mono", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(74, 85, 104);
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(74, 85, 104);
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
  color: rgb(226, 232, 240);
}

body pre > code, pre:has(> code) {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(74, 85, 104);
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
}

body pre:has(> code) {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(74, 85, 104);
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
}`,
    images: `body audio {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

body figcaption {
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body figure {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

body img {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

body video {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}`,
    embeds: `body .file-embed {
  background-color: rgb(45, 55, 72);
  border-bottom-color: rgb(160, 174, 192);
  border-left-color: rgb(160, 174, 192);
  border-right-color: rgb(160, 174, 192);
  border-top-color: rgb(160, 174, 192);
}

body .footnotes {
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
}

body .transclude {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(125, 211, 192);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

body .transclude-inner {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(125, 211, 192);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(160, 174, 192);
  text-decoration: line-through rgb(160, 174, 192);
  text-decoration-color: rgb(160, 174, 192);
}

body input[type=checkbox] {
  border-bottom-color: rgb(113, 128, 150);
  border-left-color: rgb(113, 128, 150);
  border-right-color: rgb(113, 128, 150);
  border-top-color: rgb(113, 128, 150);
}

body li.task-list-item[data-task='!'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='*'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='-'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='/'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='>'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='?'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='I'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='S'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='b'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='c'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='d'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='f'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='i'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='k'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='l'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='p'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='u'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body li.task-list-item[data-task='w'] {
  color: rgb(226, 232, 240);
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
}

body .callout[data-callout="abstract"] {
  background-color: rgba(99, 102, 241, 0.08);
  border-bottom-color: rgb(99, 102, 241);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(99, 102, 241);
  border-left-width: 4px;
  border-right-color: rgb(99, 102, 241);
  border-top-color: rgb(99, 102, 241);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(235, 61, 102, 0.518);
  border-bottom-color: rgba(237, 49, 93, 0.61);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(237, 49, 93, 0.61);
  border-left-width: 4px;
  border-right-color: rgba(237, 49, 93, 0.61);
  border-top-color: rgba(237, 49, 93, 0.61);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(235, 61, 102, 0.518);
  border-bottom-color: rgba(237, 49, 93, 0.61);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(237, 49, 93, 0.61);
  border-left-width: 4px;
  border-right-color: rgba(237, 49, 93, 0.61);
  border-top-color: rgba(237, 49, 93, 0.61);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="example"] {
  background-color: rgba(99, 102, 241, 0.08);
  border-bottom-color: rgb(99, 102, 241);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(99, 102, 241);
  border-left-width: 4px;
  border-right-color: rgb(99, 102, 241);
  border-top-color: rgb(99, 102, 241);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(224, 235, 73, 0.545);
  border-bottom-color: rgb(214, 47, 35);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(214, 47, 35);
  border-left-width: 4px;
  border-right-color: rgb(214, 47, 35);
  border-top-color: rgb(214, 47, 35);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="info"] {
  background-color: rgba(68, 56, 202, 0.545);
  border-bottom-color: rgb(248, 191, 40);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(248, 191, 40);
  border-left-width: 4px;
  border-right-color: rgb(248, 191, 40);
  border-top-color: rgb(248, 191, 40);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="note"] {
  background-color: rgba(99, 102, 241, 0.08);
  border-bottom-color: rgb(99, 102, 241);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(99, 102, 241);
  border-left-width: 4px;
  border-right-color: rgb(99, 102, 241);
  border-top-color: rgb(99, 102, 241);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="question"] {
  background-color: rgba(133, 36, 251, 0.08);
  border-bottom-color: rgb(251, 191, 36);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(251, 191, 36);
  border-left-width: 4px;
  border-right-color: rgb(251, 191, 36);
  border-top-color: rgb(251, 191, 36);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(251, 191, 36, 0.05);
  border-bottom-color: rgb(251, 191, 36);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(251, 191, 36);
  border-left-width: 4px;
  border-right-color: rgb(251, 191, 36);
  border-top-color: rgb(251, 191, 36);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="success"] {
  background-color: rgba(125, 211, 192, 0.08);
  border-bottom-color: rgb(8, 250, 169);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(8, 250, 169);
  border-left-width: 4px;
  border-right-color: rgb(8, 250, 169);
  border-top-color: rgb(8, 250, 169);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(11, 112, 200, 0.48);
  border-bottom-color: rgb(225, 63, 243);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(225, 63, 243);
  border-left-width: 4px;
  border-right-color: rgb(225, 63, 243);
  border-top-color: rgb(225, 63, 243);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(68, 56, 202, 0.545);
  border-bottom-color: rgb(248, 191, 40);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(248, 191, 40);
  border-left-width: 4px;
  border-right-color: rgb(248, 191, 40);
  border-top-color: rgb(248, 191, 40);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(251, 191, 36, 0.08);
  border-bottom-color: rgb(251, 191, 36);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(251, 191, 36);
  border-left-width: 4px;
  border-right-color: rgb(251, 191, 36);
  border-top-color: rgb(251, 191, 36);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(74, 85, 104);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(52, 62, 79);
  border-bottom-color: rgba(125, 211, 192, 0.2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(125, 211, 192, 0.2);
  border-right-color: rgba(125, 211, 192, 0.2);
  border-top-color: rgba(125, 211, 192, 0.2);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space > * {
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(226, 232, 240) none 0px;
  text-decoration: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(226, 232, 240);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(226, 232, 240);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(226, 232, 240);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(125, 211, 192, 0.2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(125, 211, 192, 0.2);
  border-right-color: rgba(125, 211, 192, 0.2);
  border-top-color: rgba(125, 211, 192, 0.2);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(74, 85, 104);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(74, 85, 104);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(74, 85, 104);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(74, 85, 104);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(226, 232, 240);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(251, 191, 36, 0.2);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(251, 191, 36);
}

body h1 {
  color: rgb(239, 68, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body h2 {
  color: rgb(167, 139, 250);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(239, 68, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body h3 {
  color: rgb(251, 191, 36);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body h4 {
  color: rgb(94, 234, 212);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body h5 {
  color: rgb(125, 211, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body h6 {
  color: rgb(99, 102, 241);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(251, 191, 36);
  border-top-style: solid;
  border-top-width: 3px;
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(99, 102, 241);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(99, 102, 241);
  border-left-width: 4px;
  border-right-color: rgb(99, 102, 241);
  border-top-color: rgb(99, 102, 241);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body ::-webkit-scrollbar {
  background: rgb(26, 35, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 35, 50);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 35, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 35, 50);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 35, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 35, 50);
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 35, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 35, 50);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 35, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 35, 50);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 35, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 35, 50);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-decoration: rgb(160, 174, 192);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-decoration: rgb(160, 174, 192);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-decoration: rgb(160, 174, 192);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(125, 211, 192, 0.15);
  border-bottom-color: rgba(125, 211, 192, 0.3);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(125, 211, 192, 0.3);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(125, 211, 192, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(125, 211, 192, 0.3);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(125, 211, 192);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(125, 211, 192);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(125, 211, 192);
  border-right-color: rgb(125, 211, 192);
  border-top-color: rgb(125, 211, 192);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(125, 211, 192);
}`,
    footer: `body footer {
  background-color: rgb(52, 62, 79);
  border-bottom-color: rgb(74, 85, 104);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgba(125, 211, 192, 0.2);
  border-top-left-radius: 0px;
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body footer ul li a {
  color: rgb(251, 191, 36);
  text-decoration: rgb(251, 191, 36);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(160, 174, 192);
  text-decoration: rgb(160, 174, 192);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

body li.section-li > .section .meta {
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(160, 174, 192);
  text-decoration: rgb(160, 174, 192);
}

body ul.section-ul {
  background-color: rgba(45, 55, 72, 0.3);
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(125, 211, 192);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(125, 211, 192);
  border-right-color: rgb(125, 211, 192);
  border-top-color: rgb(125, 211, 192);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(125, 211, 192);
}

body .darkmode svg {
  color: rgb(125, 211, 192);
  stroke: rgb(125, 211, 192);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(251, 191, 36);
  border-left-color: rgb(251, 191, 36);
  border-right-color: rgb(251, 191, 36);
  border-top-color: rgb(251, 191, 36);
  color: rgb(251, 191, 36);
}

body .breadcrumb-element p {
  color: rgb(251, 191, 36);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
}

body .metadata {
  border-bottom-color: rgb(74, 85, 104);
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(160, 174, 192);
  border-left-color: rgb(160, 174, 192);
  border-right-color: rgb(160, 174, 192);
  border-top-color: rgb(160, 174, 192);
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body .navigation-progress {
  background-color: rgb(52, 62, 79);
}

body .page-header h2.page-title {
  color: rgb(226, 232, 240);
  font-family: Kalam, cursive;
}

body abbr {
  color: rgb(226, 232, 240);
  text-decoration: underline dotted rgb(226, 232, 240);
}

body details {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

body input[type=text] {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(74, 85, 104);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(74, 85, 104);
  border-left-width: 1px;
  border-right-color: rgb(74, 85, 104);
  border-right-width: 1px;
  border-top-color: rgb(74, 85, 104);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body kbd {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
  font-family: "JetBrains Mono", "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

body sub {
  color: rgb(226, 232, 240);
}

body summary {
  color: rgb(226, 232, 240);
}

body sup {
  color: rgb(226, 232, 240);
}`,
  },
  light: {},
};
